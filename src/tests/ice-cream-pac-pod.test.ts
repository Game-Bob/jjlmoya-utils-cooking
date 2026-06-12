import { describe, it, expect } from 'vitest';
import { IceCreamLogic } from '../tool/ice-cream-pac-pod/logic';

describe('Ice Cream PAC/POD Calculator Logic', () => {
  it('calculates correct values for standard sucrose mix', () => {
    const res = IceCreamLogic.calculate({
      sugars: {
        sucrose: 100,
        dextrose: 0,
        glucose: 0,
        inverted: 0,
        trehalose: 0,
      },
      baseWeight: 1000,
      targetTemp: -12,
    });
    expect(res.totalPAC).toBeGreaterThan(0);
    expect(res.totalPOD).toBeGreaterThan(0);
    expect(res.solidsPercentage).toBeGreaterThan(0);
    expect(res.targetPAC).toBe(216);
  });

  it('determines stone hardness when PAC is too low', () => {
    const res = IceCreamLogic.calculate({
      sugars: {
        sucrose: 10,
        dextrose: 0,
        glucose: 0,
        inverted: 0,
        trehalose: 0,
      },
      baseWeight: 1000,
      targetTemp: -18,
    });
    expect(res.scoopability).toBe('stone');
  });

  it('determines creamy scoopability when PAC is optimal', () => {
    const res = IceCreamLogic.calculate({
      sugars: {
        sucrose: 150,
        dextrose: 30,
        glucose: 20,
        inverted: 0,
        trehalose: 0,
      },
      baseWeight: 1000,
      targetTemp: -18,
    });
    expect(res.scoopability).toBe('creamy');
  });


  it('determines soup when PAC is too high', () => {
    const res = IceCreamLogic.calculate({
      sugars: {
        sucrose: 300,
        dextrose: 200,
        glucose: 100,
        inverted: 200,
        trehalose: 100,
      },
      baseWeight: 1000,
      targetTemp: -5,
    });
    expect(res.scoopability).toBe('soup');
  });
});
