export interface CanningInput {
  temperature: number;
  timeMinutes: number;
  phValue: number;
  method: 'water-bath' | 'pressure-canner';
}

export interface CanningResult {
  dValue: number;
  lethalityRate: number;
  f0Value: number;
  logReduction: number;
  safetyStatus: 'safe' | 'marginal' | 'unsafe';
}

export class BotulismLogic {
  static computeThermal(temp: number, time: number): { dValue: number; lethalityRate: number; f0Value: number; logReduction: number } {
    const lethalityRate = Math.pow(10, (temp - 121.11) / 10);
    const f0Value = parseFloat((lethalityRate * time).toFixed(3));
    const dValue = parseFloat((0.21 * Math.pow(10, (121.11 - temp) / 10)).toFixed(3));
    const logReduction = dValue > 0 ? parseFloat((time / dValue).toFixed(2)) : 0;
    return { dValue, lethalityRate, f0Value, logReduction };
  }

  static computeSafety(input: { ph: number; method: string; f0Value: number; temp: number; time: number }): 'safe' | 'marginal' | 'unsafe' {
    if (input.ph < 4.6) {
      const minTemp = input.method === 'water-bath' ? 95 : 100;
      return input.temp >= minTemp && input.time >= 10 ? 'safe' : 'marginal';
    }
    if (input.method === 'water-bath') return 'unsafe';
    if (input.f0Value >= 3.0) return 'safe';
    if (input.f0Value >= 1.5) return 'marginal';
    return 'unsafe';
  }

  static calculate(input: CanningInput): CanningResult {
    const thermal = BotulismLogic.computeThermal(input.temperature, input.timeMinutes);

    return {
      dValue: thermal.dValue,
      lethalityRate: thermal.lethalityRate,
      f0Value: thermal.f0Value,
      logReduction: thermal.logReduction,
      safetyStatus: BotulismLogic.computeSafety({ ph: input.phValue, method: input.method, f0Value: thermal.f0Value, temp: input.temperature, time: input.timeMinutes }),
    };
  }
}
