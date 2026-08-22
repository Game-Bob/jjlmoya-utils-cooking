import type { FermentationEvaluation } from './evaluator';
import type { FermentationResult, MeasurementSystem } from './logic';

export interface ViewUI {
  estimatedWindow: string;
  rate: string;
  pitchDensity: string;
  status: string;
  targetMarker: string;
  riseScene: string;
  attenuationScene: string;
  hours: string;
  days: string;
  perLiter: string;
  perGallon: string;
  perFlour: string;
  targetRise: string;
  targetAttenuation: string;
}

interface ViewContext {
  root: HTMLElement;
  result: FermentationResult;
  evaluation: FermentationEvaluation;
  mode: string;
  system: MeasurementSystem;
  ui: ViewUI;
}

export function renderFermentationView(context: ViewContext): void {
  const { root, result, evaluation, mode, system, ui } = context;
  const windowNode = root.querySelector<HTMLElement>('[data-result-window]');
  const rateNode = root.querySelector<HTMLElement>('[data-result-rate]');
  const statusNode = root.querySelector<HTMLElement>('[data-result-status]');
  const sceneNode = root.querySelector<HTMLElement>('[data-scene-label]');
  if (!windowNode || !rateNode || !statusNode || !sceneNode) return;
  root.dataset.tone = evaluation.tone;
  statusNode.textContent = `${ui.status}: ${evaluation.label}`;
  statusNode.dataset.tone = evaluation.tone;
  if (!result.valid) {
    windowNode.textContent = '--';
    rateNode.textContent = evaluation.text;
    sceneNode.textContent = evaluation.text;
    return;
  }
  windowNode.textContent = formatWindow(result.lowHours, result.highHours, ui);
  rateNode.textContent = `${ui.rate}: ${formatDose(result, system, ui)}`;
  sceneNode.textContent = mode === 'beer' ? ui.attenuationScene : ui.riseScene;
  updateVessel(root, result);
}

function formatWindow(low: number, high: number, ui: ViewUI): string {
  if (high >= 48) return `${formatDays(low, ui)}-${formatDays(high, ui)}`;
  return `${formatHours(low, ui)}-${formatHours(high, ui)}`;
}

function formatHours(value: number, ui: ViewUI): string {
  return `${Math.round(value)} ${ui.hours}`;
}

function formatDays(value: number, ui: ViewUI): string {
  return `${round(value / 24)} ${ui.days}`;
}

function formatDose(result: FermentationResult, system: MeasurementSystem, ui: ViewUI): string {
  const dose = system === 'imperial' ? result.doseDisplay * 0.133526 : result.doseDisplay;
  const unit = system === 'imperial' ? ui.perGallon : ui.perLiter;
  const value = result.doseUnit === 'gramsPerLiter' ? `${round(dose)} ${unit}` : `${round(result.doseDisplay)}% ${ui.perFlour}`;
  return value;
}

function round(value: number): string {
  return (Math.round(value * 10) / 10).toString();
}

function updateVessel(root: HTMLElement, result: FermentationResult): void {
  const fill = root.querySelector<HTMLElement>('[data-vessel-fill]');
  const marker = root.querySelector<HTMLElement>('[data-target-marker]');
  if (!fill || !marker) return;
  const progress = Math.min(0.94, Math.max(0.16, 1 / (1 + result.highHours / 24)));
  fill.style.height = `${Math.round(progress * 100)}%`;
  marker.style.bottom = `${Math.round(Math.min(0.84, progress + 0.12) * 100)}%`;
}
