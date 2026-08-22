export type FermentationMode = 'bread' | 'sourdough' | 'beer';
export type YeastType = 'instant' | 'active' | 'fresh' | 'starter' | 'ale' | 'lager';
export type MeasurementSystem = 'metric' | 'imperial';

export interface FermentationInput {
  mode: FermentationMode;
  temperatureC: number;
  batchSize: number;
  yeastAmount: number;
  target: number;
  yeastType: YeastType;
}

export interface FermentationResult {
  valid: boolean;
  lowHours: number;
  highHours: number;
  doseRatio: number;
  temperatureFactor: number;
  doseDisplay: number;
  doseUnit: 'percent' | 'gramsPerLiter';
  targetDisplay: number;
}

interface Profile {
  referenceTemperature: number;
  referenceDose: number;
  referenceTarget: number;
  referenceHours: number;
  doseUnit: 'percent' | 'gramsPerLiter';
  targetPower: number;
}

const PROFILES: Record<YeastType, Profile> = {
  instant: { referenceTemperature: 24, referenceDose: 1, referenceTarget: 2, referenceHours: 3, doseUnit: 'percent', targetPower: 0.7 },
  active: { referenceTemperature: 24, referenceDose: 1, referenceTarget: 2, referenceHours: 3.5, doseUnit: 'percent', targetPower: 0.7 },
  fresh: { referenceTemperature: 24, referenceDose: 2, referenceTarget: 2, referenceHours: 3.5, doseUnit: 'percent', targetPower: 0.7 },
  starter: { referenceTemperature: 25, referenceDose: 20, referenceTarget: 1.8, referenceHours: 8, doseUnit: 'percent', targetPower: 0.85 },
  ale: { referenceTemperature: 20, referenceDose: 0.65, referenceTarget: 75, referenceHours: 120, doseUnit: 'gramsPerLiter', targetPower: 0.45 },
  lager: { referenceTemperature: 11, referenceDose: 1, referenceTarget: 75, referenceHours: 240, doseUnit: 'gramsPerLiter', targetPower: 0.45 },
};

function profileFor(input: FermentationInput): Profile {
  if (input.mode === 'sourdough') return PROFILES.starter;
  if (input.mode === 'beer') return getBeerProfile(input.yeastType);
  return getBreadProfile(input.yeastType);
}

function getBeerProfile(yeastType: YeastType): Profile {
  return yeastType === 'lager' ? PROFILES.lager : PROFILES.ale;
}

function getBreadProfile(yeastType: YeastType): Profile {
  if (yeastType === 'fresh') return PROFILES.fresh;
  if (yeastType === 'active') return PROFILES.active;
  return PROFILES.instant;
}

function calculateDose(input: FermentationInput, profile: Profile): number {
  if (profile.doseUnit === 'gramsPerLiter') return input.yeastAmount / input.batchSize;
  return (input.yeastAmount / input.batchSize) * 100;
}

function clampRange(value: number, minimum: number, maximum: number): number {
  return Math.min(maximum, Math.max(minimum, value));
}

function createInvalidResult(): FermentationResult {
  return { valid: false, lowHours: 0, highHours: 0, doseRatio: 0, temperatureFactor: 0, doseDisplay: 0, doseUnit: 'percent', targetDisplay: 0 };
}

export function calculateFermentation(input: FermentationInput): FermentationResult {
  const profile = profileFor(input);
  const dose = calculateDose(input, profile);
  if (input.temperatureC <= 0 || input.batchSize <= 0 || input.yeastAmount <= 0 || input.target <= 0 || dose <= 0) return createInvalidResult();
  const doseRatio = profile.referenceDose / dose;
  const temperatureFactor = 2 ** ((profile.referenceTemperature - input.temperatureC) / 10);
  const targetFactor = (input.target / profile.referenceTarget) ** profile.targetPower;
  const centralHours = profile.referenceHours * doseRatio ** 0.55 * temperatureFactor * targetFactor;
  const spread = clampRange(0.18 + Math.abs(temperatureFactor - 1) * 0.08 + Math.abs(doseRatio - 1) * 0.06, 0.18, 0.48);
  return {
    valid: true,
    lowHours: Math.max(0.5, centralHours * (1 - spread)),
    highHours: centralHours * (1 + spread),
    doseRatio,
    temperatureFactor,
    doseDisplay: dose,
    doseUnit: profile.doseUnit,
    targetDisplay: input.target,
  };
}

export function getDefaultInput(): FermentationInput {
  return { mode: 'bread', temperatureC: 24, batchSize: 1000, yeastAmount: 10, target: 2, yeastType: 'instant' };
}

export function getProfileBounds(mode: FermentationMode): { minimum: number; maximum: number; step: number } {
  if (mode === 'beer') return { minimum: 6, maximum: 30, step: 1 };
  if (mode === 'sourdough') return { minimum: 10, maximum: 32, step: 1 };
  return { minimum: 12, maximum: 35, step: 1 };
}

export function toDisplayTemperature(valueC: number, system: MeasurementSystem): number {
  return system === 'imperial' ? (valueC * 9) / 5 + 32 : valueC;
}

export function fromDisplayTemperature(value: number, system: MeasurementSystem): number {
  return system === 'imperial' ? ((value - 32) * 5) / 9 : value;
}

export function toDisplayBatchSize(value: number, mode: FermentationMode, system: MeasurementSystem): number {
  if (system === 'metric') return value;
  return mode === 'beer' ? value * 0.264172 : value / 28.3495;
}

export function fromDisplayBatchSize(value: number, mode: FermentationMode, system: MeasurementSystem): number {
  if (system === 'metric') return value;
  return mode === 'beer' ? value / 0.264172 : value * 28.3495;
}

export function toDisplayMass(value: number, system: MeasurementSystem): number {
  return system === 'imperial' ? value / 28.3495 : value;
}

export function fromDisplayMass(value: number, system: MeasurementSystem): number {
  return system === 'imperial' ? value * 28.3495 : value;
}
