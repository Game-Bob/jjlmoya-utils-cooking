export interface ChocolateTemperingParams {
  chocolateType: 'dark' | 'milk' | 'white';
  totalWeight: number;
  seedRatio?: number;
}

export interface ChocolateTemperingResults {
  meltTemp: number;
  coolTemp: number;
  workTemp: number;
  meltWeight: number;
  seedWeight: number;
}

export class ChocolateTemperingEngine {
  static calculate(params: ChocolateTemperingParams): ChocolateTemperingResults {
    const { chocolateType, totalWeight, seedRatio = 0.25 } = params;
    
    let meltTemp = 45;
    let coolTemp = 27;
    let workTemp = 31;
    
    if (chocolateType === 'dark') {
      meltTemp = 50;
      coolTemp = 28;
      workTemp = 32;
    } else if (chocolateType === 'milk') {
      meltTemp = 45;
      coolTemp = 27;
      workTemp = 30;
    } else if (chocolateType === 'white') {
      meltTemp = 43;
      coolTemp = 26;
      workTemp = 29;
    }
    
    const weight = Math.max(0, totalWeight);
    const seedWeight = weight * seedRatio;
    const meltWeight = weight - seedWeight;
    
    return {
      meltTemp,
      coolTemp,
      workTemp,
      meltWeight: Number(meltWeight.toFixed(1)),
      seedWeight: Number(seedWeight.toFixed(1)),
    };
  }
}
