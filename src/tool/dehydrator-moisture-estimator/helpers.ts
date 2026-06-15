export interface DehydratorState {
  preset: string;
  initialMoisture: number;
  targetMoisture: number;
  weight: number;
  temp: number;
  unitSystem: 'metric' | 'imperial';
}

export function parseNumber(val: string, fallback: number): number {
  const parsed = parseFloat(val);
  return isNaN(parsed) ? fallback : parsed;
}

export function toCelsius(f: number): number {
  return ((f - 32) * 5) / 9;
}

export function toFahrenheit(c: number): number {
  return (c * 9) / 5 + 32;
}

export function toGrams(oz: number): number {
  return oz * 28.349523125;
}

export function toOunces(g: number): number {
  return g / 28.349523125;
}
