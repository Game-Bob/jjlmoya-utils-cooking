import { type State, formatDuration } from './helpers';
import { MicelleAnimationManager } from './animation';
import * as dom from './dom';
import * as render from './render';

const STORAGE_KEY = 'cheese-flocculation-state-v4';
const MICELLE_COUNT = 36;

const appElement = document.getElementById('cheese-app')!;
const ui = JSON.parse(appElement.getAttribute('data-ui')!);

let intervalId: ReturnType<typeof setInterval> | null = null;
const animManager = new MicelleAnimationManager(dom.fluidMicelles);

let state: State = {
  mode: 'realtime',
  phase: 'idle',
  startTime: 0,
  flocculationTime: 0,
  totalTime: 0,
  elapsedSinceFloc: 0,
  preset: 'custom',
  multiplier: 3.0,
  manualMin: 10,
  manualSec: 0
};

function saveToLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function startPhase1() {
  state.phase = 'phase1';
  state.startTime = Date.now();
  state.flocculationTime = 0;
  state.totalTime = 0;
  state.preset = dom.cheeseSelect.value;
  state.multiplier = parseFloat(dom.multiplierInput.value);
  state.manualMin = parseInt(dom.manualMinutesInput.value, 10) || 0;
  state.manualSec = parseInt(dom.manualSecondsInput.value, 10) || 0;
  saveToLocalStorage();
  resumePhase1();
}

function resumePhase1() {
  render.resumePhase1(ui);
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
    dom.timerDisplay.innerText = formatDuration(elapsed);
    const wave = Math.sin(elapsed / 2) * 5 + 5;
    render.updateProgressRing(Math.min(95, wave), true, false);
  }, 1000);
}

function stopPhase1() {
  if (intervalId) clearInterval(intervalId);
  const elapsed = Math.floor((Date.now() - state.startTime) / 1000);
  state.flocculationTime = elapsed;
  state.preset = dom.cheeseSelect.value;
  state.multiplier = parseFloat(dom.multiplierInput.value);
  state.totalTime = state.flocculationTime * state.multiplier;
  state.elapsedSinceFloc = 0;
  state.startTime = Date.now();
  state.phase = 'phase2';
  saveToLocalStorage();
  resumePhase2();
}

function useManualFlocTime() {
  const mins = parseInt(dom.manualMinutesInput.value, 10) || 0;
  const secs = parseInt(dom.manualSecondsInput.value, 10) || 0;
  const totalSecs = mins * 60 + secs;
  if (totalSecs <= 0) return;
  state.flocculationTime = totalSecs;
  state.preset = dom.cheeseSelect.value;
  state.multiplier = parseFloat(dom.multiplierInput.value);
  state.totalTime = state.flocculationTime * state.multiplier;
  state.elapsedSinceFloc = totalSecs;
  state.startTime = Date.now() - (totalSecs * 1000);
  state.phase = 'phase2';
  saveToLocalStorage();
  resumePhase2();
}

function onPhase2Tick(flocSeconds: number, totalSeconds: number) {
  const elapsedFromStart = Math.floor((Date.now() - state.startTime) / 1000);
  const currentElapsed = Math.min(totalSeconds, elapsedFromStart);
  const remaining = Math.max(0, totalSeconds - currentElapsed);
  dom.timerDisplay.innerText = formatDuration(remaining);
  const coagulationDuration = totalSeconds - flocSeconds;
  const currentCoagulation = Math.max(0, currentElapsed - flocSeconds);
  let pct = 0;
  if (coagulationDuration > 0) {
    pct = (currentCoagulation / coagulationDuration) * 100;
  }
  render.updateProgressRing(pct, false, false);
  if (remaining <= 0) {
    if (intervalId) clearInterval(intervalId);
    state.phase = 'complete';
    saveToLocalStorage();
    renderComplete();
  }
}

function resumePhase2() {
  const formattedFloc = formatDuration(state.flocculationTime);
  const formattedTotal = formatDuration(state.totalTime);
  render.resumePhase2(state, ui, formattedFloc, formattedTotal);
  if (intervalId) clearInterval(intervalId);
  const flocSeconds = state.flocculationTime;
  const totalSeconds = state.totalTime;
  intervalId = setInterval(() => onPhase2Tick(flocSeconds, totalSeconds), 1000);
}

function renderComplete() {
  const formattedTotal = formatDuration(state.totalTime);
  render.renderComplete(ui, formattedTotal);
  dom.infoFlocculationTime.innerText = formatDuration(state.flocculationTime);
  dom.infoTotalTime.innerText = formattedTotal;
  dom.warningPanel.style.display = state.flocculationTime < 480 ? 'block' : 'none';
}

function resetAll() {
  if (intervalId) clearInterval(intervalId);
  state = {
    mode: state.mode,
    phase: 'idle',
    startTime: 0,
    flocculationTime: 0,
    totalTime: 0,
    elapsedSinceFloc: 0,
    preset: dom.cheeseSelect.value,
    multiplier: parseFloat(dom.multiplierInput.value),
    manualMin: parseInt(dom.manualMinutesInput.value, 10) || 10,
    manualSec: parseInt(dom.manualSecondsInput.value, 10) || 0
  };
  saveToLocalStorage();
  render.renderIdle(state, ui);
}

function bindTabEvents() {
  dom.tabRealtime.addEventListener('click', () => {
    if (state.phase === 'idle') {
      state.mode = 'realtime';
      render.setMode('realtime', state.phase);
      saveToLocalStorage();
    }
  });
  dom.tabManual.addEventListener('click', () => {
    if (state.phase === 'idle') {
      state.mode = 'manual';
      render.setMode('manual', state.phase);
      saveToLocalStorage();
    }
  });
}

function bindInputEvents() {
  dom.cheeseSelect.addEventListener('change', () => {
    render.updatePresetDropdown();
    state.preset = dom.cheeseSelect.value;
    state.multiplier = parseFloat(dom.multiplierInput.value);
    saveToLocalStorage();
  });
  dom.multiplierInput.addEventListener('input', () => {
    render.updatePresetDropdown();
    state.multiplier = parseFloat(dom.multiplierInput.value);
    saveToLocalStorage();
  });
  dom.manualMinutesInput.addEventListener('change', () => {
    state.manualMin = parseInt(dom.manualMinutesInput.value, 10) || 0;
    saveToLocalStorage();
  });
  dom.manualSecondsInput.addEventListener('change', () => {
    state.manualSec = parseInt(dom.manualSecondsInput.value, 10) || 0;
    saveToLocalStorage();
  });
}

function bindActionEvents() {
  dom.btnPrimary.addEventListener('click', () => {
    if (state.phase === 'idle') {
      if (state.mode === 'manual') {
        useManualFlocTime();
      } else {
        startPhase1();
      }
    } else if (state.phase === 'phase1') {
      stopPhase1();
    }
  });
  dom.btnReset.addEventListener('click', resetAll);
}

function loadFromLocalStorage() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      state = { ...state, ...parsed };
      dom.cheeseSelect.value = state.preset;
      dom.multiplierInput.value = state.multiplier.toString();
      dom.manualMinutesInput.value = state.manualMin.toString();
      dom.manualSecondsInput.value = state.manualSec.toString();
      render.updatePresetDropdown();
      render.setMode(state.mode, state.phase);
      if (state.phase === 'phase1') {
        resumePhase1();
      } else if (state.phase === 'phase2') {
        resumePhase2();
      } else if (state.phase === 'complete') {
        renderComplete();
      } else {
        render.renderIdle(state, ui);
      }
    }
  } catch {}
}

function animateMicelles() {
  animManager.update(state);
  requestAnimationFrame(animateMicelles);
}

animManager.init(MICELLE_COUNT);
animateMicelles();
bindTabEvents();
bindInputEvents();
bindActionEvents();
loadFromLocalStorage();
if (state.phase === 'idle') {
  render.updatePresetDropdown();
  render.setMode(state.mode, state.phase);
}
