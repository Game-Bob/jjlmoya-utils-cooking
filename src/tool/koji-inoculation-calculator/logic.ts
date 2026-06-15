export type SporePotencyType = 'standard' | 'concentrated' | 'diluted';

export interface KojiStatus {
  moisturePercentage: number;
  minTargetSteamedWeight: number;
  maxTargetSteamedWeight: number;
  sporeDosageGrams: number;
  growthStatus: 'ideal' | 'slow' | 'inhibited' | 'overheating';
}

export interface CalculateParams {
  dryWeight: number;
  steamedWeight: number;
  potency: SporePotencyType;
  temperature: number;
  humidity: number;
}

function determineGrowthStatus(temperature: number, humidity: number): 'ideal' | 'slow' | 'inhibited' | 'overheating' {
  if (temperature >= 28 && temperature <= 34 && humidity >= 65) return 'ideal';
  if (temperature > 38) return 'overheating';
  if (humidity > 90) return 'overheating';
  if (temperature < 20) return 'inhibited';
  if (humidity < 40) return 'inhibited';
  return 'slow';
}

export class KojiEngine {
  static calculateStatus(params: CalculateParams): KojiStatus {
    const { dryWeight, steamedWeight, potency, temperature, humidity } = params;
    const minTarget = dryWeight * 1.35;
    const maxTarget = dryWeight * 1.40;
    const moisture = steamedWeight > 0 ? (steamedWeight - dryWeight) / steamedWeight : 0;
    const moisturePercentage = Number((moisture * 100).toFixed(1));
    const potencyFactors: Record<SporePotencyType, number> = { standard: 1.0, concentrated: 0.5, diluted: 2.0 };
    const sporeDosageGrams = Number(((dryWeight / 1000) * potencyFactors[potency]).toFixed(2));
    const growthStatus = determineGrowthStatus(temperature, humidity);
    return {
      moisturePercentage,
      minTargetSteamedWeight: Math.round(minTarget),
      maxTargetSteamedWeight: Math.round(maxTarget),
      sporeDosageGrams,
      growthStatus,
    };
  }
}
