import { describe, it, expect } from 'vitest';
import { EmulsionEngine } from '../tool/emulsion-stability-calculator/logic';

describe('Emulsion Stability Calculator Logic', () => {
  it('calculates stable yolk emulsion values correctly', () => {
    const res = EmulsionEngine.calculateStatus(10, 80, 'yolk');
    expect(res.isBroken).toBe(false);
    expect(res.oilFraction).toBeLessThan(0.78);
    expect(res.waterNeededToFix).toBe(0);
    expect(res.yolksNeededToFix).toBe(0);
  });

  it('marks excessive oil as broken and calculates fix amounts', () => {
    const res = EmulsionEngine.calculateStatus(10, 150, 'yolk');
    expect(res.isBroken).toBe(true);
    expect(res.waterNeededToFix).toBeGreaterThan(0);
    expect(res.yolksNeededToFix).toBeGreaterThan(0);
  });

  it('handles zero values gracefully', () => {
    const res = EmulsionEngine.calculateStatus(0, 0, 'yolk');
    expect(res.isBroken).toBe(false);
    expect(res.oilFraction).toBe(0);
  });
});
