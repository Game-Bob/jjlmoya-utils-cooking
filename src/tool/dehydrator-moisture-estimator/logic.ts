export interface IngredientDetails {
  name: string;
  initialMoisture: number;
  baseHours: number;
}

export const INGREDIENT_DATABASE: Record<string, IngredientDetails> = {
  beef: {
    name: 'Beef Jerky',
    initialMoisture: 70,
    baseHours: 8,
  },
  watermelon: {
    name: 'Watermelon Snaps',
    initialMoisture: 92,
    baseHours: 12,
  },
  apple: {
    name: 'Apple Rings',
    initialMoisture: 85,
    baseHours: 7,
  },
  mango: {
    name: 'Mango Slices',
    initialMoisture: 83,
    baseHours: 10,
  },
  mushroom: {
    name: 'Mushrooms',
    initialMoisture: 90,
    baseHours: 6,
  },
};

export interface DehydrationResult {
  targetWeight: number;
  waterEvaporated: number;
  estimatedHours: number;
}

export class DehydratorEngine {
  static calculateDrying(
    startWeight: number,
    startMoisture: number,
    targetMoisture: number,
    temp: number
  ): DehydrationResult {
    const solids = startWeight * (1 - startMoisture / 100);
    const targetWeight = targetMoisture >= 100 ? 0 : solids / (1 - targetMoisture / 100);
    const waterEvaporated = Math.max(0, startWeight - targetWeight);

    let baseDryingTime = 8;
    for (const key in INGREDIENT_DATABASE) {
      if (INGREDIENT_DATABASE[key].initialMoisture === startMoisture) {
        baseDryingTime = INGREDIENT_DATABASE[key].baseHours;
        break;
      }
    }

    const tempFactor = temp > 0 ? 55 / temp : 1.0;
    const moistureDiffFactor = (startMoisture - targetMoisture) / startMoisture;
    const estimatedHours = Math.max(1, baseDryingTime * tempFactor * Math.max(0.2, moistureDiffFactor));

    return {
      targetWeight: Number(targetWeight.toFixed(1)),
      waterEvaporated: Number(waterEvaporated.toFixed(1)),
      estimatedHours: Number(estimatedHours.toFixed(1)),
    };
  }
}
