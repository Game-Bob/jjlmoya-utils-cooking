export interface MaillardInput {
  foodWeight: number;
  temperature: number;
  bakingSoda: number;
}

export interface MaillardResult {
  reactionSpeedMultiplier: number;
  timeSavedPercent: number;
  safeBakingSodaMax: number;
  flavorRisk: 'safe' | 'caution' | 'danger';
  optimalTemp: boolean;
  error: string | null;
}

const MIN_TEMP = 110;
const MAX_BAKING_SODA_PER_KG = 1.5;

export class MaillardLogic {
  private static flavorRiskFromPH(estimatedPH: number): 'safe' | 'caution' | 'danger' {
    if (estimatedPH > 8.5) return 'danger';
    if (estimatedPH > 7.5) return 'caution';
    return 'safe';
  }

  private static emptyResult(error: string | null = null): MaillardResult {
    return { reactionSpeedMultiplier: 0, timeSavedPercent: 0, safeBakingSodaMax: 0, flavorRisk: 'safe', optimalTemp: false, error };
  }

  static calculate(input: MaillardInput): MaillardResult {
    if (input.temperature < MIN_TEMP) return MaillardLogic.emptyResult('TempTooLow');
    if (input.foodWeight <= 0) return MaillardLogic.emptyResult('WeightTooLow');

    const safeMax = parseFloat((MAX_BAKING_SODA_PER_KG * (input.foodWeight / 1000)).toFixed(2));

    if (input.bakingSoda > safeMax) {
      return { reactionSpeedMultiplier: 0, timeSavedPercent: 0, safeBakingSodaMax: safeMax, flavorRisk: 'danger', optimalTemp: false, error: 'BakingSodaExcess' };
    }

    const basePH = 6;
    const bakingSodaGPerKg = input.bakingSoda / (input.foodWeight / 1000);
    const estimatedPH = Math.min(9, basePH + bakingSodaGPerKg * 2);

    const reactionSpeedMultiplier = parseFloat((Math.log2(estimatedPH - 5) * 2).toFixed(1));
    const timeSavedPercent = parseFloat(((1 - 1 / reactionSpeedMultiplier) * 100).toFixed(0));
    const optimalTemp = input.temperature >= 140 && input.temperature <= 180;

    return {
      reactionSpeedMultiplier,
      timeSavedPercent: Math.max(0, timeSavedPercent),
      safeBakingSodaMax: safeMax,
      flavorRisk: MaillardLogic.flavorRiskFromPH(estimatedPH),
      optimalTemp,
      error: null,
    };
  }
}
