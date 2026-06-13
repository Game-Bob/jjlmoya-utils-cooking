import { describe, it, expect } from 'vitest';
import { SorbetLogic } from '../tool/brix-sorbet-density-calculator/logic';

describe('Brix Sorbet Density Calculator Logic', () => {
  it('calculates correct brix and PAC for standard mango puree mix', () => {
    const res = SorbetLogic.calculate({
      fruitWeight: 500,
      fruitBrix: 14,
      sugarWeight: 150,
      waterWeight: 350,
      dextroseWeight: 0,
    });
    expect(res.totalWeight).toBe(1000);
    expect(res.totalBrix).toBe(22.0);
    expect(res.status).toBe('hard');
  });

  it('correctly calculates optimal status when brix is within range', () => {
    const res = SorbetLogic.calculate({
      fruitWeight: 500,
      fruitBrix: 14,
      sugarWeight: 210,
      waterWeight: 290,
      dextroseWeight: 0,
    });
    expect(res.totalBrix).toBe(28.0);
    expect(res.status).toBe('optimal');
  });

  it('correctly calculates soft status when brix is too high', () => {
    const res = SorbetLogic.calculate({
      fruitWeight: 500,
      fruitBrix: 14,
      sugarWeight: 300,
      waterWeight: 200,
      dextroseWeight: 0,
    });
    expect(res.totalBrix).toBe(37.0);
    expect(res.status).toBe('soft');
  });

  it('includes dextrose contribution in total brix and PAC', () => {
    const res = SorbetLogic.calculate({
      fruitWeight: 500,
      fruitBrix: 14,
      sugarWeight: 100,
      waterWeight: 300,
      dextroseWeight: 100,
    });
    expect(res.totalBrix).toBe(27.0);
    expect(res.totalPAC).toBe(423.0);
  });
});
