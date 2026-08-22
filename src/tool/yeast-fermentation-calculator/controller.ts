import { evaluateFermentation } from './evaluator';
import { calculateFermentation, fromDisplayBatchSize, fromDisplayMass, fromDisplayTemperature, getDefaultInput, getProfileBounds, toDisplayBatchSize, toDisplayMass, toDisplayTemperature, type FermentationInput, type FermentationMode, type MeasurementSystem, type YeastType } from './logic';
import { renderFermentationView } from './dom-views';
import { loadFermentationInput, loadMeasurementSystem, saveFermentationInput, saveMeasurementSystem } from './storage';
import type { FermentationUI } from './ui';

interface ControllerContext {
  root: HTMLElement;
  ui: FermentationUI;
  input: FermentationInput;
  system: MeasurementSystem;
}

export function initFermentationController(root: HTMLElement, ui: FermentationUI): void {
  const context: ControllerContext = { root, ui, input: loadFermentationInput(getDefaultInput()), system: loadMeasurementSystem('metric') };
  bindModeButtons(context);
  bindYeastButtons(context);
  bindInputs(context);
  bindPresets(context);
  bindUnitToggle(context);
  bindReset(context);
  render(context);
}

function bindModeButtons(context: ControllerContext): void {
  context.root.querySelectorAll<HTMLButtonElement>('[data-mode]').forEach((button) => {
    button.addEventListener('click', () => {
      context.input.mode = button.dataset.mode as FermentationMode;
      context.input.yeastType = defaultYeastForMode(context.input.mode);
      context.input = withModeDefaults(context.input);
      render(context);
    });
  });
}

function defaultYeastForMode(mode: FermentationMode): YeastType {
  if (mode === 'beer') return 'ale';
  if (mode === 'sourdough') return 'starter';
  return 'instant';
}

function bindYeastButtons(context: ControllerContext): void {
  context.root.querySelectorAll<HTMLButtonElement>('[data-yeast]').forEach((button) => {
    button.addEventListener('click', () => {
      context.input.yeastType = button.dataset.yeast as YeastType;
      render(context);
    });
  });
}

function bindInputs(context: ControllerContext): void {
  context.root.querySelectorAll<HTMLInputElement>('[data-input]').forEach((input) => {
    input.addEventListener('input', () => {
      const key = input.dataset.input as keyof FermentationInput;
      const value = Number(input.value);
      if (key !== 'mode' && key !== 'yeastType') setMetricValue(context, key, value);
      render(context);
    });
  });
}

function bindPresets(context: ControllerContext): void {
  context.root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => {
    button.addEventListener('click', () => {
      context.input.temperatureC = Number(button.dataset.temperature);
      render(context);
    });
  });
}

function bindReset(context: ControllerContext): void {
  context.root.querySelector<HTMLButtonElement>('[data-reset]')?.addEventListener('click', () => {
    context.input = getDefaultInput();
    render(context);
  });
}

function bindUnitToggle(context: ControllerContext): void {
  context.root.querySelector<HTMLButtonElement>('[data-unit-toggle]')?.addEventListener('click', () => {
    context.system = context.system === 'metric' ? 'imperial' : 'metric';
    render(context);
  });
}

function withModeDefaults(input: FermentationInput): FermentationInput {
  if (input.mode === 'beer') return { ...input, batchSize: 20, yeastAmount: 13, target: 75, temperatureC: 20 };
  if (input.mode === 'sourdough') return { ...input, batchSize: 1000, yeastAmount: 200, target: 1.8, temperatureC: 25 };
  return { ...input, batchSize: 1000, yeastAmount: 10, target: 2, temperatureC: 24 };
}

function render(context: ControllerContext): void {
  const { root, input, ui } = context;
  syncControls(context);
  const result = calculateFermentation(input);
  const evaluation = evaluateFermentation(input, result, ui);
  renderFermentationView({ root, result, evaluation, mode: input.mode, system: context.system, ui });
  saveFermentationInput(input);
  saveMeasurementSystem(context.system);
}

function syncControls(context: ControllerContext): void {
  const { root, input, ui } = context;
  root.querySelectorAll<HTMLElement>('[data-mode]').forEach((node) => node.setAttribute('aria-pressed', node.dataset.mode === input.mode ? 'true' : 'false'));
  root.querySelectorAll<HTMLElement>('[data-yeast]').forEach((node) => node.setAttribute('aria-pressed', node.dataset.yeast === input.yeastType ? 'true' : 'false'));
  root.querySelectorAll<HTMLElement>('[data-preset]').forEach((node) => node.setAttribute('aria-pressed', Number(node.dataset.temperature) === input.temperatureC ? 'true' : 'false'));
  updateRanges(root, input.mode, context.system);
  setInputValue(root, 'temperatureC', formatValue(toDisplayTemperature(input.temperatureC, context.system)));
  setInputValue(root, 'batchSize', formatValue(toDisplayBatchSize(input.batchSize, input.mode, context.system)));
  setInputValue(root, 'yeastAmount', formatValue(toDisplayMass(input.yeastAmount, context.system)));
  setInputValue(root, 'target', input.target.toString());
  updateModeCopy(root, input.mode, ui);
  updateUnitCopy(context);
}

function setInputValue(root: HTMLElement, key: string, value: string): void {
  root.querySelectorAll<HTMLInputElement>(`[data-input="${key}"]`).forEach((node) => { node.value = value; });
  root.querySelectorAll<HTMLElement>(`[data-value="${key}"]`).forEach((node) => { node.textContent = value; });
}

function updateModeCopy(root: HTMLElement, mode: FermentationMode, ui: FermentationUI): void {
  root.querySelector<HTMLElement>('[data-batch-label]')!.textContent = mode === 'beer' ? ui.wort : ui.flour;
  root.querySelector<HTMLElement>('[data-target-label]')!.textContent = mode === 'beer' ? ui.targetAttenuation : ui.targetRise;
  root.querySelector<HTMLElement>('[data-target-unit]')!.textContent = mode === 'beer' ? ui.attenuationUnit : ui.riseUnit;
  root.querySelector<HTMLElement>('[data-scene-label]')!.textContent = mode === 'beer' ? ui.attenuationScene : ui.riseScene;
  root.querySelectorAll<HTMLElement>('[data-bread-yeast]').forEach((node) => node.toggleAttribute('hidden', mode !== 'bread'));
  root.querySelectorAll<HTMLElement>('[data-sourdough-yeast]').forEach((node) => node.toggleAttribute('hidden', mode !== 'sourdough'));
  root.querySelectorAll<HTMLElement>('[data-beer-yeast]').forEach((node) => node.toggleAttribute('hidden', mode !== 'beer'));
}

function updateRanges(root: HTMLElement, mode: FermentationMode, system: MeasurementSystem): void {
  const bounds = getProfileBounds(mode);
  const temperature = root.querySelector<HTMLInputElement>('[data-input="temperatureC"]');
  if (temperature) { temperature.min = formatValue(toDisplayTemperature(bounds.minimum, system)); temperature.max = formatValue(toDisplayTemperature(bounds.maximum, system)); temperature.step = formatValue(system === 'imperial' ? bounds.step * 1.8 : bounds.step); }
}

function getBatchUnitLabel(mode: FermentationMode, imperial: boolean, ui: Record<string, string>): string {
  if (mode === 'beer') {
    return imperial ? ui.imperialWortUnit : ui.metricWortUnit;
  }
  return imperial ? ui.imperialFlourUnit : ui.metricFlourUnit;
}

function updateUnitCopy(context: ControllerContext): void {
  const { root, ui, system, input } = context;
  const imperial = system === 'imperial';
  const toggleText = imperial ? ui.useMetric : ui.useImperial;

  root.querySelector<HTMLButtonElement>('[data-unit-toggle]')!.textContent = toggleText;
  root.querySelector<HTMLButtonElement>('[data-unit-toggle]')!.setAttribute('aria-label', toggleText);
  root.querySelector<HTMLElement>('[data-unit-system]')!.textContent = imperial ? ui.imperialSystem : ui.metricSystem;
  root.querySelector<HTMLElement>('[data-unit-label="temperature"]')!.textContent = imperial ? ui.imperialTemperatureUnit : ui.metricTemperatureUnit;
  root.querySelector<HTMLElement>('[data-unit-label="yeast"]')!.textContent = imperial ? ui.imperialMassUnit : ui.metricMassUnit;
  root.querySelector<HTMLElement>('[data-unit-label="batch"]')!.textContent = getBatchUnitLabel(input.mode, imperial, ui);
  root.querySelectorAll<HTMLElement>('[data-preset-display]').forEach((node) => { node.textContent = `${formatValue(toDisplayTemperature(Number(node.dataset.presetDisplay), system))}°${imperial ? 'F' : 'C'}`; });
}

function formatValue(value: number): string {
  return (Math.round(value * 10) / 10).toString();
}

function setMetricValue(context: ControllerContext, key: keyof FermentationInput, displayValue: number): void {
  if (key === 'temperatureC') context.input.temperatureC = fromDisplayTemperature(displayValue, context.system);
  if (key === 'batchSize') context.input.batchSize = fromDisplayBatchSize(displayValue, context.input.mode, context.system);
  if (key === 'yeastAmount') context.input.yeastAmount = fromDisplayMass(displayValue, context.system);
  if (key === 'target') context.input.target = displayValue;
}
