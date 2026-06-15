export interface State {
  mode: string;
  phase: string;
  startTime: number;
  flocculationTime: number;
  totalTime: number;
  elapsedSinceFloc: number;
  preset: string;
  multiplier: number;
  manualMin: number;
  manualSec: number;
}

export const PRESETS: Record<string, { multiplier: number; moisture: string }> = {
  cheddar: { multiplier: 3.0, moisture: 'Medium-Low' },
  camembert: { multiplier: 5.0, moisture: 'High' },
  mozzarella: { multiplier: 2.0, moisture: 'Very High' },
  swiss: { multiplier: 2.5, moisture: 'Low' },
  parmesan: { multiplier: 2.0, moisture: 'Very Low' }
};

export function formatDuration(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = Math.floor(totalSeconds % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export function getMoistureText(multiplier: number): string {
  if (multiplier >= 4.5) return 'High';
  if (multiplier >= 3.5) return 'Medium-High';
  if (multiplier >= 2.8) return 'Medium-Low';
  if (multiplier >= 2.2) return 'Low';
  return 'Very Low';
}
