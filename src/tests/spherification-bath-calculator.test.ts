import { describe, it, expect } from 'vitest';
import { SpherificationLogic } from '../tool/spherification-bath-calculator/logic';

describe('Spherification Bath Calculator Logic', () => {
  it('calculates direct spherification values correctly', () => {
    const res = SpherificationLogic.calculate({
      baseWeight: 500,
      bathWeight: 1000,
      method: 'direct',
      useXanthan: false,
      useCitrate: false,
    });
    expect(res.baseAgentName).toBe('Sodium Alginate');
    expect(res.baseAgentGrams).toBe(2.5);
    expect(res.bathAgentName).toBe('Calcium Chloride');
    expect(res.bathAgentGrams).toBe(10);
    expect(res.xanthanGrams).toBe(0);
    expect(res.citrateGrams).toBe(0);
    expect(res.solubilityWarning).toBe(false);
  });

  it('calculates reverse spherification values correctly', () => {
    const res = SpherificationLogic.calculate({
      baseWeight: 500,
      bathWeight: 1000,
      method: 'reverse',
      useXanthan: true,
      useCitrate: true,
    });
    expect(res.baseAgentName).toBe('Calcium Lactate Gluconate');
    expect(res.baseAgentGrams).toBe(10);
    expect(res.bathAgentName).toBe('Sodium Alginate');
    expect(res.bathAgentGrams).toBe(5);
    expect(res.xanthanGrams).toBe(1);
    expect(res.citrateGrams).toBe(2.5);
  });

  it('triggers solubility warning under high concentration', () => {
    const directRes = SpherificationLogic.calculate({
      baseWeight: 1200,
      bathWeight: 1000,
      method: 'direct',
      useXanthan: false,
      useCitrate: false,
    });
    expect(directRes.solubilityWarning).toBe(true);

    const reverseRes = SpherificationLogic.calculate({
      baseWeight: 500,
      bathWeight: 2200,
      method: 'reverse',
      useXanthan: false,
      useCitrate: false,
    });
    expect(reverseRes.solubilityWarning).toBe(true);
  });
});
