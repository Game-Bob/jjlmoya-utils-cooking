export type TGBinderMethod = 'dry' | 'slurry';

export interface TransglutaminaseInput {
  meatWeight: number;
  method: TGBinderMethod;
  proteinType: 'red-meat' | 'poultry' | 'fish' | 'shellfish';
  temp: number;
}

export interface TransglutaminaseResult {
  tgGrams: number;
  waterMl: number;
  totalWeight: number;
  ratioPercent: number;
  enzymeDestroyed: boolean;
  incubationHoursMin: number;
  incubationHoursMax: number;
}

const PROTEIN_RATIO: Record<string, { min: number; max: number }> = {
  'red-meat': { min: 0.0075, max: 0.01 },
  'poultry': { min: 0.01, max: 0.012 },
  'fish': { min: 0.012, max: 0.015 },
  'shellfish': { min: 0.01, max: 0.015 },
};

const INCUBATION_TEMP = [
  { min: 2, max: 5, hoursMin: 6, hoursMax: 24 },
  { min: 5, max: 15, hoursMin: 3, hoursMax: 8 },
  { min: 15, max: 25, hoursMin: 1, hoursMax: 4 },
  { min: 25, max: 40, hoursMin: 0.5, hoursMax: 2 },
];

function getIncubation(temp: number): { hoursMin: number; hoursMax: number } {
  for (const range of INCUBATION_TEMP) {
    if (temp >= range.min && temp < range.max) {
      return { hoursMin: range.hoursMin, hoursMax: range.hoursMax };
    }
  }
  return { hoursMin: 6, hoursMax: 24 };
}

export class TransglutaminaseLogic {
  static calculate(input: TransglutaminaseInput): TransglutaminaseResult {
    if (input.temp >= 60) {
      return {
        tgGrams: 0, waterMl: 0, totalWeight: input.meatWeight,
        ratioPercent: 0, enzymeDestroyed: true, incubationHoursMin: 0, incubationHoursMax: 0,
      };
    }

    const ratios = PROTEIN_RATIO[input.proteinType] || PROTEIN_RATIO['red-meat'];
    const midRatio = (ratios.min + ratios.max) / 2;
    const tgGrams = parseFloat((input.meatWeight * midRatio).toFixed(2));
    const waterMl = input.method === 'slurry' ? parseFloat((tgGrams * 4).toFixed(1)) : 0;
    const totalWeight = input.method === 'slurry'
      ? parseFloat((input.meatWeight + tgGrams + waterMl).toFixed(2))
      : parseFloat((input.meatWeight + tgGrams).toFixed(2));
    const incubation = getIncubation(input.temp);

    return {
      tgGrams, waterMl, totalWeight, ratioPercent: parseFloat((midRatio * 100).toFixed(2)),
      enzymeDestroyed: false, incubationHoursMin: incubation.hoursMin, incubationHoursMax: incubation.hoursMax,
    };
  }
}
