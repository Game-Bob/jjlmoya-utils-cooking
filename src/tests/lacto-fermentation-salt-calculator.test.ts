import { describe, it, expect } from 'vitest';
import { FermentationLogic } from '../tool/lacto-fermentation-salt-calculator/logic';

describe('Lacto-Fermentation Salt Calculator Logic', () => {
  it('calculates correct dry salting values', () => {
    const res = FermentationLogic.calculate({
      vegWeight: 1000,
      waterWeight: 0,
      salinity: 2.5,
      mode: 'dry',
    });
    expect(res.saltGrams).toBe(25);
    expect(res.status).toBe('optimal');
  });

  it('calculates correct wet brining values', () => {
    const res = FermentationLogic.calculate({
      vegWeight: 1000,
      waterWeight: 500,
      salinity: 2.0,
      mode: 'wet',
    });
    expect(res.saltGrams).toBe(30);
    expect(res.status).toBe('optimal');
  });

  it('correctly classifies status based on salinity thresholds', () => {
    const dangerRes = FermentationLogic.calculate({
      vegWeight: 1000,
      waterWeight: 0,
      salinity: 1.5,
      mode: 'dry',
    });
    expect(dangerRes.status).toBe('danger');

    const optimalRes = FermentationLogic.calculate({
      vegWeight: 1000,
      waterWeight: 0,
      salinity: 3.0,
      mode: 'dry',
    });
    expect(optimalRes.status).toBe('optimal');

    const inhibitedRes = FermentationLogic.calculate({
      vegWeight: 1000,
      waterWeight: 0,
      salinity: 4.0,
      mode: 'dry',
    });
    expect(inhibitedRes.status).toBe('inhibited');
  });

  it('calculates volumetric conversions accurately', () => {
    const res = FermentationLogic.calculate({
      vegWeight: 1000,
      waterWeight: 0,
      salinity: 2.0,
      mode: 'dry',
    });
    expect(res.saltGrams).toBe(20);
    expect(res.fineTeaspoons).toBe(3.5);
    expect(res.kosherTeaspoons).toBe(4.7);
  });
});
