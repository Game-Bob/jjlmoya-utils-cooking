import { describe, it, expect } from 'vitest';
import { LeavenerLogic } from '../tool/leavener-acid-neutralizer/logic';

describe('Leavener Acid Neutralizer Logic', () => {
  it('calculates correct baking soda for buttermilk and yogurt', () => {
    const res = LeavenerLogic.calculate({
      acidIngredients: [
        { type: 'yogurt', weight: 240 }
      ],
      flour: 150
    });
    expect(res.neutralizedBakingSoda).toBe(3);
    expect(res.boosterBakingPowder).toBe(0);
  });

  it('calculates correct booster baking powder when acid is insufficient', () => {
    const res = LeavenerLogic.calculate({
      acidIngredients: [
        { type: 'yogurt', weight: 50 }
      ],
      flour: 150
    });
    expect(res.neutralizedBakingSoda).toBe(0.63);
    expect(res.requiredBakingPowder).toBe(6);
    expect(res.providedBakingPowderEquivalent).toBe(2.52);
    expect(res.boosterBakingPowder).toBe(3.48);
  });

  it('scales correctly with multiple acid ingredients', () => {
    const res = LeavenerLogic.calculate({
      acidIngredients: [
        { type: 'lemon_juice', weight: 15 },
        { type: 'yogurt', weight: 120 }
      ],
      flour: 200
    });
    expect(res.neutralizedBakingSoda).toBe(3);
    expect(res.requiredBakingPowder).toBe(8);
    expect(res.providedBakingPowderEquivalent).toBe(12);
    expect(res.boosterBakingPowder).toBe(0);
  });
});
