export const EXCHANGE_RATES: Record<string, number> = {
  EUR: 1.0,
  USD: 1.09,
  GBP: 0.85,
  JPY: 170.0,
  CHF: 0.96,
  PLN: 4.30,
  HUF: 395.0,
  RUB: 95.0,
  SEK: 11.20,
  TRY: 35.0,
  CNY: 7.90,
  KRW: 1500.0,
  IDR: 17800.0,
  CAD: 1.50,
  AUD: 1.65,
  BRL: 5.90,
};

export const TIMELINE_STEPS = [
  { day: 0, tags: ['Fresh Cut', 'High Moisture', 'Bright Red', 'Enzymes Inactive'] },
  { day: 14, tags: ['Surface Drying', 'Pellicle Forming', 'Evaporation Peak', 'Microbes Inhibited'] },
  { day: 30, tags: ['Standard Aged', 'Tenderness Active', 'Pellicle Sealed', 'Deepening Color'] },
  { day: 45, tags: ['Advanced Aged', 'Nutty Aroma', 'Concentrated Flavor', 'Water Loss Slows'] },
  { day: 60, tags: ['Extreme Aged', 'Pungent Profile', 'Maximum Yield Loss', 'Craft Quality'] },
];

export const kgToLb = (kg: number) => kg * 2.20462;
export const lbToKg = (lb: number) => lb / 2.20462;
