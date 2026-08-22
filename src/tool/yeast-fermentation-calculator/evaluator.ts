import type { FermentationInput, FermentationResult } from './logic';

export type EvaluationTone = 'steady' | 'watch' | 'caution' | 'invalid';

export interface FermentationEvaluation {
  tone: EvaluationTone;
  label: string;
  text: string;
}

export function evaluateFermentation(input: FermentationInput, result: FermentationResult, ui: Record<string, string>): FermentationEvaluation {
  if (!result.valid) return { tone: 'invalid', label: ui.invalid, text: ui.invalidText };
  const temperatureTone = getTemperatureTone(input);
  const doseTone = getDoseTone(result);
  const tone = strongestTone(temperatureTone, doseTone);
  return { tone, label: ui[tone], text: ui[`${tone}Text`] };
}

const TEMP_BOUNDS = {
  beer: { cautionMin: 6, cautionMax: 30, watchMin: 9, watchMax: 24 },
  bread: { cautionMin: 12, cautionMax: 35, watchMin: 18, watchMax: 30 },
};

function getTemperatureTone(input: FermentationInput): EvaluationTone {
  const bounds = input.mode === 'beer' ? TEMP_BOUNDS.beer : TEMP_BOUNDS.bread;
  const temp = input.temperatureC;
  if (temp < bounds.cautionMin || temp > bounds.cautionMax) return 'caution';
  if (temp < bounds.watchMin || temp > bounds.watchMax) return 'watch';
  return 'steady';
}

function getDoseTone(result: FermentationResult): EvaluationTone {
  if (result.doseRatio > 4 || result.doseRatio < 0.25) return 'caution';
  if (result.doseRatio > 2 || result.doseRatio < 0.5) return 'watch';
  return 'steady';
}

function toneRank(tone: EvaluationTone): number {
  if (tone === 'caution') return 3;
  if (tone === 'watch') return 2;
  return 1;
}

function strongestTone(first: EvaluationTone, second: EvaluationTone): EvaluationTone {
  return toneRank(first) >= toneRank(second) ? first : second;
}
