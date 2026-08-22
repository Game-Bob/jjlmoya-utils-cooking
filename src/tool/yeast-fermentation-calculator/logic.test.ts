import { describe, expect, it } from 'vitest';
import { calculateFermentation, fromDisplayBatchSize, getDefaultInput, getProfileBounds, toDisplayBatchSize, toDisplayTemperature } from './logic';

describe('yeast fermentation calculator', () => {
  it('returns a practical window for the default bread profile', () => {
    const result = calculateFermentation(getDefaultInput());
    expect(result.valid).toBe(true);
    expect(result.lowHours).toBeLessThan(result.highHours);
    expect(result.doseDisplay).toBe(1);
  });

  it('slows the estimate when temperature drops', () => {
    const input = getDefaultInput();
    const warm = calculateFermentation(input);
    const cool = calculateFermentation({ ...input, temperatureC: 18 });
    expect(cool.lowHours).toBeGreaterThan(warm.lowHours);
  });

  it('uses grams per litre for beer', () => {
    const result = calculateFermentation({ mode: 'beer', yeastType: 'ale', temperatureC: 20, batchSize: 20, yeastAmount: 13, target: 75 });
    expect(result.doseUnit).toBe('gramsPerLiter');
    expect(result.doseDisplay).toBeCloseTo(0.65);
    expect(result.highHours).toBeGreaterThan(96);
  });

  it('returns invalid output for missing quantities', () => {
    const result = calculateFermentation({ ...getDefaultInput(), batchSize: 0 });
    expect(result.valid).toBe(false);
  });

  it('provides mode-specific temperature bounds', () => {
    expect(getProfileBounds('beer').minimum).toBe(6);
    expect(getProfileBounds('sourdough').maximum).toBe(32);
  });

  it('converts temperature and batch units without changing the metric model', () => {
    expect(toDisplayTemperature(24, 'imperial')).toBeCloseTo(75.2);
    expect(toDisplayBatchSize(20, 'beer', 'imperial')).toBeCloseTo(5.28, 2);
    expect(fromDisplayBatchSize(5.28, 'beer', 'imperial')).toBeCloseTo(20, 1);
  });
});
