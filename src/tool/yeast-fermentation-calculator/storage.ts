import type { FermentationInput, FermentationMode, MeasurementSystem, YeastType } from './logic';

const STORAGE_KEY = 'yeast-fermentation-calculator-state';
const SYSTEM_KEY = 'yeast-fermentation-calculator-system';

export function saveFermentationInput(input: FermentationInput): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}

export function loadFermentationInput(fallback: FermentationInput): FermentationInput {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    return sanitizeInput(JSON.parse(raw), fallback);
  } catch {
    return fallback;
  }
}

export function saveMeasurementSystem(system: MeasurementSystem): void {
  try {
    localStorage.setItem(SYSTEM_KEY, system);
  } catch {}
}

export function loadMeasurementSystem(fallback: MeasurementSystem): MeasurementSystem {
  try {
    const value = localStorage.getItem(SYSTEM_KEY);
    return value === 'imperial' || value === 'metric' ? value : fallback;
  } catch {
    return fallback;
  }
}

function sanitizeInput(value: Partial<FermentationInput>, fallback: FermentationInput): FermentationInput {
  const mode = isMode(value.mode) ? value.mode : fallback.mode;
  const yeastType = isYeastType(value.yeastType) ? value.yeastType : fallback.yeastType;
  return {
    mode,
    yeastType,
    temperatureC: numberOr(value.temperatureC, fallback.temperatureC),
    batchSize: numberOr(value.batchSize, fallback.batchSize),
    yeastAmount: numberOr(value.yeastAmount, fallback.yeastAmount),
    target: numberOr(value.target, fallback.target),
  };
}

function numberOr(value: number | undefined, fallback: number): number {
  return typeof value === 'number' && Number.isFinite(value) ? value : fallback;
}

function isMode(value: unknown): value is FermentationMode {
  return value === 'bread' || value === 'sourdough' || value === 'beer';
}

function isYeastType(value: unknown): value is YeastType {
  return value === 'instant' || value === 'active' || value === 'fresh' || value === 'starter' || value === 'ale' || value === 'lager';
}
