import { describe, it, expect } from 'vitest';
import { SousVideLogic } from '../tool/sous-vide-pasteurization-curves/logic';

describe('Sous Vide Pasteurization Curves Logic', () => {
  it('calculates correct heating time for slab, cylinder and sphere', () => {
    const slabRes = SousVideLogic.calculate({
      bathTemp: 60,
      thickness: 25,
      shape: 'slab',
      pathogen: 'salmonella'
    });
    expect(slabRes.heatingMinutes).toBe(75);

    const cylRes = SousVideLogic.calculate({
      bathTemp: 60,
      thickness: 25,
      shape: 'cylinder',
      pathogen: 'salmonella'
    });
    expect(cylRes.heatingMinutes).toBe(29.4);

    const sphereRes = SousVideLogic.calculate({
      bathTemp: 60,
      thickness: 25,
      shape: 'sphere',
      pathogen: 'salmonella'
    });
    expect(sphereRes.heatingMinutes).toBe(18.8);
  });

  it('calculates correct pathogen lethality times', () => {
    const salmRes = SousVideLogic.calculate({
      bathTemp: 60,
      thickness: 25,
      shape: 'slab',
      pathogen: 'salmonella'
    });
    expect(salmRes.lethalityMinutes).toBe(9);

    const listRes = SousVideLogic.calculate({
      bathTemp: 60,
      thickness: 25,
      shape: 'slab',
      pathogen: 'listeria'
    });
    expect(listRes.lethalityMinutes).toBe(18);
  });

  it('correctly identifies safe vs danger zone temperatures', () => {
    const dangerRes = SousVideLogic.calculate({
      bathTemp: 52,
      thickness: 25,
      shape: 'slab',
      pathogen: 'salmonella'
    });
    expect(dangerRes.isDangerZone).toBe(true);

    const safeRes = SousVideLogic.calculate({
      bathTemp: 55,
      thickness: 25,
      shape: 'slab',
      pathogen: 'salmonella'
    });
    expect(safeRes.isDangerZone).toBe(false);
  });
});
