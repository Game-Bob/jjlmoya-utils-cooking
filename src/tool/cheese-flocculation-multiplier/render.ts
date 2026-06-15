import type { State } from './helpers';
import { PRESETS, getMoistureText } from './helpers';
import * as dom from './dom';

const CIRCUMFERENCE = 2 * Math.PI * 90;

export function updatePresetDropdown() {
  const sel = dom.cheeseSelect.value;
  if (sel !== 'custom') {
    const preset = PRESETS[sel];
    dom.multiplierInput.value = preset.multiplier.toString();
    dom.multiplierInput.disabled = true;
    dom.multiplierValDisplay.innerText = preset.multiplier.toFixed(1);
    dom.infoMoisture.innerText = preset.moisture;
  } else {
    dom.multiplierInput.disabled = false;
    const val = parseFloat(dom.multiplierInput.value);
    dom.multiplierValDisplay.innerText = val.toFixed(1);
    dom.infoMoisture.innerText = getMoistureText(val);
  }
}

export function updateProgressRing(percent: number, isShaky: boolean, isSolid: boolean) {
  const offset = CIRCUMFERENCE - (percent / 100) * CIRCUMFERENCE;
  dom.progressRing.style.strokeDashoffset = offset.toString();
  dom.progressRing.classList.remove('shaky', 'solid');
  if (isShaky) dom.progressRing.classList.add('shaky');
  if (isSolid) dom.progressRing.classList.add('solid');
}

export function setMode(newMode: string, phase: string) {
  if (newMode === 'realtime') {
    dom.tabRealtime.classList.add('active');
    dom.tabManual.classList.remove('active');
    dom.manualInputsContainer.style.display = 'none';
    if (phase === 'idle') dom.btnPrimaryText.innerText = 'Start Flocculation Test';
  } else {
    dom.tabRealtime.classList.remove('active');
    dom.tabManual.classList.add('active');
    dom.manualInputsContainer.style.display = 'block';
    if (phase === 'idle') dom.btnPrimaryText.innerText = 'Calculate & Start Countdown';
  }
}

export function renderIdle(state: State, ui: Record<string, string>) {
  dom.phaseTitle.innerText = ui.phase1Title;
  dom.statusBadge.innerText = ui.statusWaiting;
  dom.statusBadge.className = 'cheese-status-badge waiting';
  dom.btnPrimary.disabled = false;
  dom.btnPrimaryText.innerText = state.mode === 'realtime' ? 'Start Flocculation Test' : 'Calculate & Start Countdown';
  dom.btnReset.style.display = 'none';
  dom.timerDisplay.innerText = '00:00';
  dom.timerLabel.innerText = ui.flocculationTimeLabel;
  updateProgressRing(0, false, false);
  dom.infoFlocculationTime.innerText = '-';
  dom.infoTotalTime.innerText = '-';
  dom.warningPanel.style.display = 'none';
  dom.modeSelector.style.opacity = '1';
  dom.modeSelector.style.pointerEvents = 'auto';
  dom.manualInputsContainer.style.display = state.mode === 'realtime' ? 'none' : 'block';
  dom.cheeseSelect.disabled = false;
  dom.multiplierInput.disabled = dom.cheeseSelect.value !== 'custom';
  dom.manualMinutesInput.disabled = false;
  dom.manualSecondsInput.disabled = false;
}

export function resumePhase1(ui: Record<string, string>) {
  dom.modeSelector.style.opacity = '0.3';
  dom.modeSelector.style.pointerEvents = 'none';
  dom.manualInputsContainer.style.display = 'none';
  dom.cheeseSelect.disabled = true;
  dom.multiplierInput.disabled = true;
  dom.manualMinutesInput.disabled = true;
  dom.manualSecondsInput.disabled = true;
  dom.btnPrimaryText.innerText = 'Flocculation Detected!';
  dom.btnReset.style.display = 'inline-block';
  dom.statusBadge.innerText = ui.statusWaiting;
  dom.statusBadge.className = 'cheese-status-badge waiting';
}

export function resumePhase2(state: State, ui: Record<string, string>, formattedFloc: string, formattedTotal: string) {
  dom.modeSelector.style.opacity = '0.3';
  dom.modeSelector.style.pointerEvents = 'none';
  dom.manualInputsContainer.style.display = 'none';
  dom.cheeseSelect.disabled = true;
  dom.multiplierInput.disabled = true;
  dom.manualMinutesInput.disabled = true;
  dom.manualSecondsInput.disabled = true;
  dom.phaseTitle.innerText = ui.phase2Title;
  dom.btnPrimaryText.innerText = ui.phaseComplete;
  dom.btnPrimary.disabled = true;
  dom.btnReset.style.display = 'inline-block';
  dom.btnPrimary.parentElement!.classList.remove('is-completed');
  dom.statusBadge.innerText = ui.statusCoagulating;
  dom.statusBadge.className = 'cheese-status-badge coagulating';
  dom.timerLabel.innerText = ui.timeRemainingLabel;
  dom.infoFlocculationTime.innerText = formattedFloc;
  dom.infoTotalTime.innerText = formattedTotal;
  dom.warningPanel.style.display = state.flocculationTime < 480 ? 'block' : 'none';
}

export function renderComplete(ui: Record<string, string>, formattedTotal: string) {
  dom.phaseTitle.innerText = ui.phaseComplete;
  dom.statusBadge.innerText = ui.statusReady;
  dom.statusBadge.className = 'cheese-status-badge ready';
  dom.btnPrimaryText.innerText = ui.phaseComplete;
  dom.btnPrimary.disabled = true;
  dom.btnReset.style.display = 'inline-block';
  dom.btnPrimary.parentElement!.classList.add('is-completed');
  dom.timerDisplay.innerText = formattedTotal;
  dom.timerLabel.innerText = ui.statusReady;
  updateProgressRing(100, false, true);
  dom.modeSelector.style.opacity = '0.3';
  dom.modeSelector.style.pointerEvents = 'none';
  dom.infoFlocculationTime.innerText = formattedTotal;
  dom.infoTotalTime.innerText = formattedTotal;
  dom.warningPanel.style.display = 'none';
}
