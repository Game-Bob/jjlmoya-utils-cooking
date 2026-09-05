import { describe, expect, it } from 'vitest';
import {
  FOOD_SAFETY_PRESETS,
  evaluateFoodSafety,
  convertDifference,
  findFoodPreset,
  fromCelsius,
  toCelsius,
} from './logic';

describe('food-safe-temperature-checker logic', () => {
  it('converts temperatures in both directions', () => {
    expect(toCelsius(165, 'fahrenheit')).toBeCloseTo(73.8889, 3);
    expect(fromCelsius(74, 'fahrenheit')).toBeCloseTo(165.2, 3);
    expect(toCelsius(63, 'celsius')).toBe(63);
    expect(convertDifference(-4, 'fahrenheit')).toBeCloseTo(-7.2, 3);
  });

  it('keeps the documented minimum targets in the local dataset', () => {
    expect(FOOD_SAFETY_PRESETS.map((preset) => [preset.id, preset.targetC])).toEqual([
      ['poultry', 74],
      ['ground-meat', 71],
      ['red-meat-cuts', 63],
      ['pork-cuts', 63],
      ['raw-ham', 63],
      ['precooked-ham', 74],
      ['rabbit-venison', 71],
      ['fish', 63],
      ['egg-dishes', 71],
      ['casseroles', 74],
      ['leftovers', 74],
    ]);
    expect(findFoodPreset('missing').id).toBe('poultry');
  });

  it('returns below, meets, and above decisions', () => {
    expect(evaluateFoodSafety('poultry', 72, 'celsius')).toMatchObject({ status: 'below', differenceC: -2 });
    expect(evaluateFoodSafety('poultry', 170, 'fahrenheit')).toMatchObject({ status: 'above' });
    expect(evaluateFoodSafety('red-meat-cuts', 63, 'celsius')).toMatchObject({ status: 'meets', differenceC: 0 });
  });

  it('preserves the three-minute rest requirement for whole cuts', () => {
    expect(evaluateFoodSafety('red-meat-cuts', 63, 'celsius').preset.restMinutes).toBe(3);
    expect(evaluateFoodSafety('pork-cuts', 63, 'celsius').preset.restMinutes).toBe(3);
    expect(evaluateFoodSafety('raw-ham', 63, 'celsius').preset.restMinutes).toBe(3);
    expect(evaluateFoodSafety('precooked-ham', 74, 'celsius').preset.restMinutes).toBe(0);
    expect(evaluateFoodSafety('fish', 63, 'celsius').preset.restMinutes).toBe(0);
  });
});
