import { describe, it, expect } from 'vitest';
import { CheeseFlocculationEngine } from '../tool/cheese-flocculation-multiplier/logic';

describe('Cheese Flocculation Multiplier Logic', () => {
  it('calculates total coagulation time correctly', () => {
    const total = CheeseFlocculationEngine.calculateTotalTime(720, 3.0);
    expect(total).toBe(2160);
  });

  it('calculates remaining time correctly', () => {
    const remaining = CheeseFlocculationEngine.calculateRemainingTime(2160, 720);
    expect(remaining).toBe(1440);
  });

  it('stops remaining time at zero', () => {
    const remaining = CheeseFlocculationEngine.calculateRemainingTime(2160, 3000);
    expect(remaining).toBe(0);
  });
});
