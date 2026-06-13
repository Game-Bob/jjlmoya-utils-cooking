export type MeatGeometry = 'whole-bird' | 'cylindrical-roast' | 'flat-cut';

export interface CarryOverInput {
  weight: number;
  ovenTemp: number;
  targetTemp: number;
  geometry: MeatGeometry;
}

export interface CarryOverResult {
  pullTemp: number;
  carryOverDegrees: number;
  restTimeMinutes: number;
  error: string | null;
}

const GEOMETRY_FACTOR: Record<MeatGeometry, number> = {
  'whole-bird': 0.045,
  'cylindrical-roast': 0.035,
  'flat-cut': 0.025,
};

const GEOMETRY_MIN_WEIGHT: Record<MeatGeometry, number> = {
  'whole-bird': 500,
  'cylindrical-roast': 300,
  'flat-cut': 150,
};

const GEOMETRY_MAX_WEIGHT: Record<MeatGeometry, number> = {
  'whole-bird': 8000,
  'cylindrical-roast': 6000,
  'flat-cut': 2000,
};

export class CarryOverLogic {
  static calculate(input: CarryOverInput): CarryOverResult {
    if (input.targetTemp >= input.ovenTemp) {
      return { pullTemp: 0, carryOverDegrees: 0, restTimeMinutes: 0, error: 'TargetTempExceedsOven' };
    }

    if (input.ovenTemp > 350) {
      return { pullTemp: 0, carryOverDegrees: 0, restTimeMinutes: 0, error: 'OvenTooHot' };
    }

    const minW = GEOMETRY_MIN_WEIGHT[input.geometry];
    const maxW = GEOMETRY_MAX_WEIGHT[input.geometry];
    if (input.weight < minW) {
      return { pullTemp: 0, carryOverDegrees: 0, restTimeMinutes: 0, error: 'WeightTooLow' };
    }
    if (input.weight > maxW) {
      return { pullTemp: 0, carryOverDegrees: 0, restTimeMinutes: 0, error: 'WeightTooHigh' };
    }

    const deltaOven = input.ovenTemp - input.targetTemp;
    const factor = GEOMETRY_FACTOR[input.geometry];
    const weightFactor = Math.min(1, input.weight / 3000);
    const carryOverDegrees = parseFloat((deltaOven * factor * weightFactor).toFixed(1));
    const pullTemp = parseFloat((input.targetTemp - carryOverDegrees).toFixed(1));
    const restTimeMinutes = Math.round(Math.min(45, Math.max(10, input.weight / 100 * 0.8)));

    return { pullTemp, carryOverDegrees, restTimeMinutes, error: null };
  }
}
