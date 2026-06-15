export interface CheeseDetails {
  name: string;
  multiplier: number;
  expectedMoisture: string;
}

export const CHEESE_DATABASE: Record<string, CheeseDetails> = {
  cheddar: {
    name: 'Cheddar',
    multiplier: 3.0,
    expectedMoisture: 'Medium-Low',
  },
  camembert: {
    name: 'Camembert / Brie',
    multiplier: 5.0,
    expectedMoisture: 'High',
  },
  mozzarella: {
    name: 'Mozzarella',
    multiplier: 2.0,
    expectedMoisture: 'Very High',
  },
  swiss: {
    name: 'Swiss (Alpine)',
    multiplier: 2.5,
    expectedMoisture: 'Low',
  },
  parmesan: {
    name: 'Parmesan',
    multiplier: 2.0,
    expectedMoisture: 'Very Low',
  },
};

export class CheeseFlocculationEngine {
  static calculateTotalTime(flocculationTime: number, multiplier: number): number {
    return flocculationTime * multiplier;
  }

  static calculateRemainingTime(totalTime: number, elapsed: number): number {
    return Math.max(0, totalTime - elapsed);
  }
}
