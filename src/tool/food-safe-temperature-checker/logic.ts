export type TemperatureUnit = 'celsius' | 'fahrenheit';

export type FoodSafetyStatus = 'below' | 'meets' | 'above';

export interface FoodSafetyPreset {
  id: string;
  nameKey: string;
  targetC: number;
  restMinutes: number;
  noteKey: string;
}

export interface FoodSafetyResult {
  preset: FoodSafetyPreset;
  measuredC: number;
  differenceC: number;
  status: FoodSafetyStatus;
}

export const FOOD_SAFETY_DATASET_VERSION = '2024-11-21';

export const FOOD_SAFETY_PRESETS: FoodSafetyPreset[] = [
  { id: 'poultry', nameKey: 'poultryOption', targetC: 74, restMinutes: 0, noteKey: 'poultryNote' },
  { id: 'ground-meat', nameKey: 'groundMeatOption', targetC: 71, restMinutes: 0, noteKey: 'groundMeatNote' },
  { id: 'red-meat-cuts', nameKey: 'redMeatCutsOption', targetC: 63, restMinutes: 3, noteKey: 'redMeatCutsNote' },
  { id: 'pork-cuts', nameKey: 'porkCutsOption', targetC: 63, restMinutes: 3, noteKey: 'porkCutsNote' },
  { id: 'raw-ham', nameKey: 'rawHamOption', targetC: 63, restMinutes: 3, noteKey: 'rawHamNote' },
  { id: 'precooked-ham', nameKey: 'precookedHamOption', targetC: 74, restMinutes: 0, noteKey: 'precookedHamNote' },
  { id: 'rabbit-venison', nameKey: 'rabbitVenisonOption', targetC: 71, restMinutes: 0, noteKey: 'rabbitVenisonNote' },
  { id: 'fish', nameKey: 'fishOption', targetC: 63, restMinutes: 0, noteKey: 'fishNote' },
  { id: 'egg-dishes', nameKey: 'eggDishesOption', targetC: 71, restMinutes: 0, noteKey: 'eggDishesNote' },
  { id: 'casseroles', nameKey: 'casserolesOption', targetC: 74, restMinutes: 0, noteKey: 'casserolesNote' },
  { id: 'leftovers', nameKey: 'leftoversOption', targetC: 74, restMinutes: 0, noteKey: 'leftoversNote' },
];

export function toCelsius(value: number, unit: TemperatureUnit): number {
  return unit === 'fahrenheit' ? (value - 32) * (5 / 9) : value;
}

export function fromCelsius(value: number, unit: TemperatureUnit): number {
  return unit === 'fahrenheit' ? value * (9 / 5) + 32 : value;
}

export function convertDifference(valueC: number, unit: TemperatureUnit): number {
  return unit === 'fahrenheit' ? valueC * (9 / 5) : valueC;
}

export function findFoodPreset(foodId: string): FoodSafetyPreset {
  return FOOD_SAFETY_PRESETS.find((preset) => preset.id === foodId) ?? FOOD_SAFETY_PRESETS[0]!;
}

export function evaluateFoodSafety(foodId: string, measuredValue: number, unit: TemperatureUnit): FoodSafetyResult {
  const preset = findFoodPreset(foodId);
  const measuredC = toCelsius(measuredValue, unit);
  const differenceC = measuredC - preset.targetC;
  let status: FoodSafetyStatus = 'above';
  if (differenceC < 0) status = 'below';
  else if (differenceC === 0) status = 'meets';

  return { preset, measuredC, differenceC, status };
}
