import { ChocolateTemperingEngine } from './logic';
import { initChocolateCanvas, setCanvasState } from './drop-canvas';
import { TEMPERING_STEPS } from './constants';

const STORAGE_KEY = 'choc-tempering-state-v1';
const $ = (id) => document.getElementById(id);

const typeSelect = $('choc-type-select');
const weightInput = $('choc-weight-input');
const weightDisplay = $('choc-weight-display');

const stepMeltTemp = $('choc-step-melt-temp');
const stepCoolTemp = $('choc-step-cool-temp');
const stepWorkTemp = $('choc-step-work-temp');

const stepCard1 = $('choc-step-1');
const stepCard2 = $('choc-step-2');
const stepCard3 = $('choc-step-3');

const thermoFluid = $('choc-thermo-fluid');
const canvas = $('choc-canvas');

const meltWeightDisplay = $('choc-melt-weight-display');
const seedWeightDisplay = $('choc-seed-weight-display');
const molecularDisplay = $('choc-molecular-display');

const unitMetric = $('choc-unit-metric');
const unitImperial = $('choc-unit-imperial');

let currentType = 'dark';
let baseWeightGrams = 500;
let currentUnit = 'metric';
let activeStep = 1;

const gToOz = (g) => g * 0.0352739619;
const ozToG = (oz) => oz / 0.0352739619;
const cToF = (c) => c * 1.8 + 32;

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      type: currentType,
      baseWeightGrams,
      unit: currentUnit,
      step: activeStep
    }));
  } catch {}
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const data = JSON.parse(saved);
    if (data.type) {
      currentType = data.type;
      typeSelect.value = currentType;
    }
    if (data.baseWeightGrams) baseWeightGrams = data.baseWeightGrams;
    if (data.unit) {
      currentUnit = data.unit;
      unitMetric.classList.toggle('active', currentUnit === 'metric');
      unitImperial.classList.toggle('active', currentUnit === 'imperial');
    }
    if (data.step) activeStep = data.step;
  } catch {}
}

function updateThermometer(temp) {
  const minTemp = 20;
  const maxTemp = 55;
  const pct = Math.min(100, Math.max(0, ((temp - minTemp) / (maxTemp - minTemp)) * 100));
  thermoFluid.style.height = `${pct}%`;
}

function updateStepCards(step) {
  stepCard1.classList.toggle('active', step === 1);
  stepCard2.classList.toggle('active', step === 2);
  stepCard3.classList.toggle('active', step === 3);
}

function handleStepClick(step) {
  activeStep = step;
  update();
}

function setBounds(el, min, max, step) {
  el.setAttribute('min', min);
  el.setAttribute('max', max);
  el.setAttribute('step', step);
}

function updateBoundsAndValue() {
  if (currentUnit === 'imperial') {
    setBounds(weightInput, '3.5', '70.0', '1.0');
    weightInput.value = gToOz(baseWeightGrams).toFixed(1);
  } else {
    setBounds(weightInput, '100', '2000', '50');
    weightInput.value = baseWeightGrams.toString();
  }
}

function switchUnit(to) {
  if (currentUnit === to) return;
  currentUnit = to;
  unitMetric.classList.toggle('active', to === 'metric');
  unitImperial.classList.toggle('active', to === 'imperial');
  updateBoundsAndValue();
  update();
}

function handleWeightInput() {
  const val = parseFloat(weightInput.value);
  if (currentUnit === 'imperial') {
    baseWeightGrams = ozToG(val);
  } else {
    baseWeightGrams = val;
  }
  update();
}

function formatWeight(g) {
  if (currentUnit === 'imperial') {
    return `${gToOz(g).toFixed(1)}<span class="choc-temp-unit">oz</span>`;
  }
  return `${Math.round(g)}<span class="choc-temp-unit">g</span>`;
}

function formatTemp(c) {
  const val = currentUnit === 'imperial' ? Math.round(cToF(c)) : c;
  const unitStr = currentUnit === 'imperial' ? 'F' : 'C';
  return `${val}<span class="choc-temp-unit"><span class="choc-degree">°</span>${unitStr}</span>`;
}

function update() {
  currentType = typeSelect.value;
  saveState();
  
  weightDisplay.innerHTML = formatWeight(baseWeightGrams);
  
  const results = ChocolateTemperingEngine.calculate({
    chocolateType: currentType,
    totalWeight: baseWeightGrams
  });
  
  stepMeltTemp.innerHTML = formatTemp(results.meltTemp);
  stepCoolTemp.innerHTML = formatTemp(results.coolTemp);
  stepWorkTemp.innerHTML = formatTemp(results.workTemp);
  
  meltWeightDisplay.innerHTML = formatWeight(results.meltWeight);
  seedWeightDisplay.innerHTML = formatWeight(results.seedWeight);
  
  const stepInfo = TEMPERING_STEPS.find(s => s.step === activeStep);
  if (stepInfo) {
    molecularDisplay.innerText = stepInfo.molecular;
  }
  
  updateStepCards(activeStep);
  
  let activeTemp = 20;
  if (activeStep === 1) activeTemp = results.meltTemp;
  else if (activeStep === 2) activeTemp = results.coolTemp;
  else if (activeStep === 3) activeTemp = results.workTemp;
  updateThermometer(activeTemp);
  setCanvasState(activeStep, baseWeightGrams, currentType);
}

typeSelect.addEventListener('change', update);
weightInput.addEventListener('input', handleWeightInput);

unitMetric.addEventListener('click', () => switchUnit('metric'));
unitImperial.addEventListener('click', () => switchUnit('imperial'));

stepCard1.addEventListener('click', () => handleStepClick(1));
stepCard2.addEventListener('click', () => handleStepClick(2));
stepCard3.addEventListener('click', () => handleStepClick(3));

loadState();
updateBoundsAndValue();
if (canvas) {
  initChocolateCanvas(canvas);
}
update();
