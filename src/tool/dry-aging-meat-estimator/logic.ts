export interface DryAgingParams {
  startWeight: number;
  days: number;
  pricePerKg: number;
  humidity: number;
}

export interface DryAgingResults {
  moistureLossWeight: number;
  moistureLossPercent: number;
  trimmingLossWeight: number;
  trimmingLossPercent: number;
  finalWeight: number;
  totalYieldPercent: number;
  originalCost: number;
  finalCostPerKg: number;
  humidityWarning: 'low' | 'high' | 'normal';
}

export class DryAgingEngine {
  static calculate(params: DryAgingParams): DryAgingResults {
    const { startWeight, days, pricePerKg, humidity } = params;
    if (startWeight <= 0) return this.emptyResults();
    const maxLoss = 0.45 - (humidity / 100) * 0.3;
    const moistureLossPercent = maxLoss * (1 - Math.exp(-0.06 * days));
    const moistureLossWeight = startWeight * moistureLossPercent;
    const trimmingLossPercent = days === 0 ? 0 : 0.15;
    const trimmingLossWeight = startWeight * trimmingLossPercent;
    const finalWeight = Math.max(0, startWeight - moistureLossWeight - trimmingLossWeight);
    const totalYieldPercent = (finalWeight / startWeight) * 100;
    const originalCost = startWeight * pricePerKg;
    const finalCostPerKg = finalWeight > 0 ? originalCost / finalWeight : 0;
    return {
      moistureLossWeight: Number(moistureLossWeight.toFixed(3)),
      moistureLossPercent: Number((moistureLossPercent * 100).toFixed(1)),
      trimmingLossWeight: Number(trimmingLossWeight.toFixed(3)),
      trimmingLossPercent: Number((trimmingLossPercent * 100).toFixed(1)),
      finalWeight: Number(finalWeight.toFixed(3)),
      totalYieldPercent: Number(totalYieldPercent.toFixed(1)),
      originalCost: Number(originalCost.toFixed(2)),
      finalCostPerKg: Number(finalCostPerKg.toFixed(2)),
      humidityWarning: this.getHumidityWarning(humidity)
    };
  }

  private static getHumidityWarning(humidity: number): 'low' | 'high' | 'normal' {
    if (humidity < 75) {
      return 'low';
    }
    if (humidity > 85) {
      return 'high';
    }
    return 'normal';
  }

  private static emptyResults(): DryAgingResults {
    return {
      moistureLossWeight: 0,
      moistureLossPercent: 0,
      trimmingLossWeight: 0,
      trimmingLossPercent: 0,
      finalWeight: 0,
      totalYieldPercent: 0,
      originalCost: 0,
      finalCostPerKg: 0,
      humidityWarning: 'normal'
    };
  }
}
