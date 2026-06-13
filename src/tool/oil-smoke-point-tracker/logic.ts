export interface OilPreset {
  id: string;
  nameKey: string;
  baseSmokePointC: number;
  isRefined: boolean;
}

export const OIL_PRESETS: OilPreset[] = [
  { id: 'avocado-refined', nameKey: 'presetAvocadoRefined', baseSmokePointC: 270, isRefined: true },
  { id: 'sunflower-refined', nameKey: 'presetSunflowerRefined', baseSmokePointC: 232, isRefined: true },
  { id: 'peanut-refined', nameKey: 'presetPeanutRefined', baseSmokePointC: 232, isRefined: true },
  { id: 'canola-refined', nameKey: 'presetCanolaRefined', baseSmokePointC: 204, isRefined: true },
  { id: 'olive-extra-virgin', nameKey: 'presetOliveEV', baseSmokePointC: 190, isRefined: false },
  { id: 'olive-pomace', nameKey: 'presetOlivePomace', baseSmokePointC: 238, isRefined: true },
  { id: 'coconut-unrefined', nameKey: 'presetCoconutUnrefined', baseSmokePointC: 177, isRefined: false },
  { id: 'sunflower-unrefined', nameKey: 'presetSunflowerUnrefined', baseSmokePointC: 107, isRefined: false },
];

export interface OilTrackerInputs {
  oilId: string;
  uses: number;
  tempC: number;
  foodType: 'starch' | 'breaded';
}

export interface OilTrackerResult {
  baseSmokePointC: number;
  currentSmokePointC: number;
  polymerizationPct: number;
  status: 'good' | 'caution' | 'discard';
  polarCompoundsPct: number;
}

export class OilSmokePointLogic {
  static getStatus(polarCompounds: number, currentC: number): 'good' | 'caution' | 'discard' {
    if (polarCompounds >= 25 || currentC <= 170) {
      return 'discard';
    }
    if (polarCompounds >= 15 || currentC <= 190) {
      return 'caution';
    }
    return 'good';
  }

  static calculate(inputs: OilTrackerInputs): OilTrackerResult {
    const preset = OIL_PRESETS.find(p => p.id === inputs.oilId) || OIL_PRESETS[1];
    const baseC = preset.baseSmokePointC;

    const baseDegradation = preset.isRefined ? 4 : 9;
    const tempFactor = 1 + Math.max(0, inputs.tempC - 180) * 0.06;
    const foodFactor = inputs.foodType === 'breaded' ? 2.2 : 1.0;

    const degradationPerUse = baseDegradation * tempFactor * foodFactor;
    const totalDegradation = inputs.uses * degradationPerUse;
    const currentC = Math.max(60, baseC - totalDegradation);

    const basePolarIncrease = preset.isRefined ? 1.5 : 3.0;
    const polarCompounds = Math.min(100, 2 + inputs.uses * basePolarIncrease * tempFactor * foodFactor);

    const status = OilSmokePointLogic.getStatus(polarCompounds, currentC);

    return {
      baseSmokePointC: baseC,
      currentSmokePointC: Math.round(currentC),
      polymerizationPct: Math.round(Math.min(100, (polarCompounds / 35) * 100)),
      status,
      polarCompoundsPct: parseFloat(polarCompounds.toFixed(1)),
    };
  }
}
