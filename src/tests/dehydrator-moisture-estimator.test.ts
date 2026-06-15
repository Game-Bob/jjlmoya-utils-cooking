import { describe, it, expect } from 'vitest';
import { DehydratorEngine } from '../tool/dehydrator-moisture-estimator/logic';

describe('Dehydrator Moisture Estimator Engine', () => {
  it('calculates drying parameters correctly for beef preset moisture levels', () => {
    const result = DehydratorEngine.calculateDrying(500, 70, 10, 68);
    expect(result.targetWeight).toBeGreaterThan(0);
    expect(result.waterEvaporated).toBeGreaterThan(0);
    expect(result.estimatedHours).toBeGreaterThan(0);
  });

  it('handles 100 percent target moisture gracefully', () => {
    const result = DehydratorEngine.calculateDrying(500, 70, 100, 68);
    expect(result.targetWeight).toBe(0);
  });
});
