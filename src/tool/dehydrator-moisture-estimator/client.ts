import { getElements } from './dom';
import type { DehydratorElements } from './dom';
import { parseNumber, toCelsius, toFahrenheit, toGrams, toOunces } from './helpers';
import type { DehydratorState } from './helpers';
import { INGREDIENT_DATABASE } from './logic';
import { renderUI } from './render';

const STORAGE_KEY = 'dehydrator-moisture-estimator-state';

const state: DehydratorState = {
  preset: 'beef',
  initialMoisture: 70,
  targetMoisture: 10,
  weight: 500,
  temp: 68,
  unitSystem: 'metric',
};

function saveState(): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}

function loadState(elements: DehydratorElements): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const parsed = JSON.parse(raw) as Partial<DehydratorState>;
    Object.assign(state, parsed);

    elements.unitSystem.value = state.unitSystem;
    elements.preset.value = state.preset;
    elements.initialMoisture.value = String(state.initialMoisture);
    elements.targetMoisture.value = String(state.targetMoisture);
    elements.weight.value = String(state.weight);
    elements.temp.value = String(state.temp);
  } catch {
    return;
  }
}

function updatePreset(elements: DehydratorElements, presetKey: string): void {
  state.preset = presetKey;
  if (presetKey !== 'custom') {
    const details = INGREDIENT_DATABASE[presetKey];
    if (details) {
      state.initialMoisture = details.initialMoisture;
      elements.initialMoisture.value = String(details.initialMoisture);
    }
  }
  saveState();
  renderUI(elements, state);
}

function changeUnitSystem(elements: DehydratorElements, newSystem: 'metric' | 'imperial'): void {
  if (newSystem === state.unitSystem) return;
  state.unitSystem = newSystem;
  if (newSystem === 'imperial') {
    state.weight = Number(toOunces(state.weight).toFixed(1));
    state.temp = Number(toFahrenheit(state.temp).toFixed(1));
  } else {
    state.weight = Number(toGrams(state.weight).toFixed(0));
    state.temp = Number(toCelsius(state.temp).toFixed(0));
  }
  elements.weight.value = String(state.weight);
  elements.temp.value = String(state.temp);
  saveState();
  renderUI(elements, state);
}

function handleInput(elements: DehydratorElements, event: Event): void {
  const target = event.target as HTMLInputElement | HTMLSelectElement;
  if (!target) return;

  if (target.id === 'dehydrator-unit-system') {
    changeUnitSystem(elements, target.value as 'metric' | 'imperial');
  } else if (target.id === 'dehydrator-preset') {
    updatePreset(elements, target.value);
  } else if (target.id === 'dehydrator-initial-moisture') {
    state.initialMoisture = parseNumber(target.value, state.initialMoisture);
    state.preset = 'custom';
    elements.preset.value = 'custom';
    saveState();
    renderUI(elements, state);
  } else if (target.id === 'dehydrator-target-moisture') {
    state.targetMoisture = parseNumber(target.value, state.targetMoisture);
    saveState();
    renderUI(elements, state);
  } else if (target.id === 'dehydrator-weight') {
    state.weight = parseNumber(target.value, state.weight);
    saveState();
    renderUI(elements, state);
  } else if (target.id === 'dehydrator-temp') {
    state.temp = parseNumber(target.value, state.temp);
    saveState();
    renderUI(elements, state);
  }
}

function init(): void {
  const elements = getElements();
  if (!elements) return;

  const fields = [
    elements.unitSystem,
    elements.preset,
    elements.initialMoisture,
    elements.targetMoisture,
    elements.weight,
    elements.temp,
  ];

  fields.forEach((field) => {
    field.addEventListener('input', (e) => handleInput(elements, e));
    field.addEventListener('change', (e) => handleInput(elements, e));
  });

  loadState(elements);
  renderUI(elements, state);
}

document.addEventListener('DOMContentLoaded', init);
if (document.readyState !== 'loading') {
  init();
}
