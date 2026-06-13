export interface SorbetInputs {
  fruitWeight: number;
  fruitBrix: number;
  sugarWeight: number;
  waterWeight: number;
  dextroseWeight: number;
}

export interface SorbetResult {
  totalBrix: number;
  totalWeight: number;
  totalPAC: number;
  status: 'soft' | 'optimal' | 'hard';
  recommendedSugar: number;
  recommendedWater: number;
}

export class SorbetLogic {
  static calculate(inputs: SorbetInputs, targetBrix: number = 28): SorbetResult {
    const fruitSugar = inputs.fruitWeight * (inputs.fruitBrix / 100);
    const totalSugar = fruitSugar + inputs.sugarWeight + inputs.dextroseWeight;
    const totalWeight = inputs.fruitWeight + inputs.waterWeight + inputs.sugarWeight + inputs.dextroseWeight;

    const totalBrix = totalWeight > 0 ? (totalSugar / totalWeight) * 100 : 0;

    const fruitPAC = fruitSugar * 1.9;
    const sugarPAC = inputs.sugarWeight * 1.0;
    const dextrosePAC = inputs.dextroseWeight * 1.9;
    const totalPAC = fruitPAC + sugarPAC + dextrosePAC;

    let status: 'soft' | 'optimal' | 'hard' = 'optimal';
    if (totalBrix < 25) {
      status = 'hard';
    } else if (totalBrix > 30) {
      status = 'soft';
    }

    const tFraction = targetBrix / 100;
    const fFraction = inputs.fruitBrix / 100;
    const recSugar = Math.max(0, inputs.fruitWeight * (2 * tFraction - fFraction));
    const recWater = Math.max(0, inputs.fruitWeight - recSugar);

    return {
      totalBrix: parseFloat(totalBrix.toFixed(1)),
      totalWeight: Math.round(totalWeight),
      totalPAC: parseFloat(totalPAC.toFixed(1)),
      status,
      recommendedSugar: Math.round(recSugar),
      recommendedWater: Math.round(recWater),
    };
  }
}
