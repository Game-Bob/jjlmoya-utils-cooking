import { describe, it, expect } from 'vitest';
import { KojiEngine } from '../tool/koji-inoculation-calculator/logic';

describe('Koji Inoculation Calculator Logic', () => {
  it('calculates targets for 1000g dry rice correctly', () => {
    const res = KojiEngine.calculateStatus({ dryWeight: 1000, steamedWeight: 1370, potency: 'standard', temperature: 30, humidity: 70 });
    expect(res.minTargetSteamedWeight).toBe(1350);
    expect(res.maxTargetSteamedWeight).toBe(1400);
    expect(res.moisturePercentage).toBe(27.0);
    expect(res.sporeDosageGrams).toBe(1.0);
    expect(res.growthStatus).toBe('ideal');
  });

  it('adjusts spore dosage based on potency factors', () => {
    const concentrated = KojiEngine.calculateStatus({ dryWeight: 1000, steamedWeight: 1370, potency: 'concentrated', temperature: 30, humidity: 70 });
    expect(concentrated.sporeDosageGrams).toBe(0.5);

    const diluted = KojiEngine.calculateStatus({ dryWeight: 1000, steamedWeight: 1370, potency: 'diluted', temperature: 30, humidity: 70 });
    expect(diluted.sporeDosageGrams).toBe(2.0);
  });

  it('detects overheating or cold incubation states', () => {
    const hot = KojiEngine.calculateStatus({ dryWeight: 1000, steamedWeight: 1370, potency: 'standard', temperature: 42, humidity: 70 });
    expect(hot.growthStatus).toBe('overheating');

    const cold = KojiEngine.calculateStatus({ dryWeight: 1000, steamedWeight: 1370, potency: 'standard', temperature: 18, humidity: 70 });
    expect(cold.growthStatus).toBe('inhibited');
  });
});
