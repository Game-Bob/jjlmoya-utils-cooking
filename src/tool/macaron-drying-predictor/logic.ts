export interface MacaronDryingInput {
  humidity: number;
  temperature: number;
  shellDiameter: number;
}

export interface MacaronDryingResult {
  dryingTimeMinutes: number;
  surfaceReadiness: number;
  skinFormed: boolean;
  humidityFactor: number;
  tempFactor: number;
  sizeFactor: number;
}

const MIN_HUMIDITY = 20;
const MAX_HUMIDITY = 90;
const MIN_TEMP = 15;
const MAX_TEMP = 35;
const MIN_DIAMETER = 2;
const MAX_DIAMETER = 6;

export class MacaronDryingLogic {
  static humToFactor(h: number): number {
    const hc = Math.max(MIN_HUMIDITY, Math.min(MAX_HUMIDITY, h));
    return 1 + Math.pow((hc - 30) / 30, 2) * 2;
  }

  static tempToFactor(t: number): number {
    const tc = Math.max(MIN_TEMP, Math.min(MAX_TEMP, t));
    return 1 + (25 - tc) * 0.04;
  }

  static sizeToFactor(d: number): number {
    const dc = Math.max(MIN_DIAMETER, Math.min(MAX_DIAMETER, d));
    return Math.pow(dc / 3, 1.5);
  }

  static calculate(input: MacaronDryingInput): MacaronDryingResult {
    const hf = MacaronDryingLogic.humToFactor(input.humidity);
    const tf = MacaronDryingLogic.tempToFactor(input.temperature);
    const sf = MacaronDryingLogic.sizeToFactor(input.shellDiameter);

    const baseMinutes = 30;
    const dryingTimeMinutes = Math.round(baseMinutes * hf * tf * sf);

    const surfaceReadiness = Math.max(0, Math.min(100, Math.round(100 - (hf - 1) * 50 - (tf - 1) * 30)));

    return {
      dryingTimeMinutes,
      surfaceReadiness,
      skinFormed: surfaceReadiness >= 50,
      humidityFactor: parseFloat(hf.toFixed(2)),
      tempFactor: parseFloat(tf.toFixed(2)),
      sizeFactor: parseFloat(sf.toFixed(2)),
    };
  }
}
