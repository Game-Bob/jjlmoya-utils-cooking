export interface SorbetInputs {
  fruitWeight: number;
  fruitBrix: number;
  sugarWeight: number;
  waterWeight: number;
  dextroseWeight: number;
}

export interface SorbetResult {
  totalBrix: number;
  totalWeight: number;
  totalPAC: number;
  status: 'soft' | 'optimal' | 'hard';
  recommendedSugar: number;
  recommendedWater: number;
}

export class SorbetLogic {
  static calculate(inputs: SorbetInputs, targetBrix: number = 28): SorbetResult {
    const fruitSugar = inputs.fruitWeight * (inputs.fruitBrix / 100);
    const totalSugar = fruitSugar + inputs.sugarWeight + inputs.dextroseWeight;
    const totalWeight = inputs.fruitWeight + inputs.waterWeight + inputs.sugarWeight + inputs.dextroseWeight;
    const totalBrix = totalWeight > 0 ? (totalSugar / totalWeight) * 100 : 0;
    const fruitPAC = fruitSugar * 1.9;
    const sugarPAC = inputs.sugarWeight * 1.0;
    const dextrosePAC = inputs.dextroseWeight * 1.9;
    const totalPAC = fruitPAC + sugarPAC + dextrosePAC;
    let status: 'soft' | 'optimal' | 'hard' = 'optimal';
    if (totalBrix < 25) status = 'hard';
    else if (totalBrix > 30) status = 'soft';
    const tFraction = targetBrix / 100;
    const fFraction = inputs.fruitBrix / 100;
    const recSugar = Math.max(0, inputs.fruitWeight * (2 * tFraction - fFraction));
    const recWater = Math.max(0, inputs.fruitWeight - recSugar);
    return {
      totalBrix: parseFloat(totalBrix.toFixed(1)),
      totalWeight: Math.round(totalWeight),
      totalPAC: parseFloat(totalPAC.toFixed(1)),
      status,
      recommendedSugar: Math.round(recSugar),
      recommendedWater: Math.round(recWater),
    };
  }
}

export interface BrixState {
  activeUnit: string;
  activePreset: string;
  ui: Record<string, string>;
  elements: {
    selectTrigger: HTMLElement;
    selectDropdown: HTMLElement;
    selectOptions: NodeListOf<Element>;
    selectedIcon: HTMLElement;
    selectedName: HTMLElement;
    fruitWeight: HTMLInputElement;
    fruitBrix: HTMLInputElement;
    sugarWeight: HTMLInputElement;
    dextroseWeight: HTMLInputElement;
    waterWeight: HTMLInputElement;
    targetBrix: HTMLInputElement;
    fruitWeightVal: HTMLElement;
    fruitBrixVal: HTMLElement;
    sugarWeightVal: HTMLElement;
    dextroseWeightVal: HTMLElement;
    waterWeightVal: HTMLElement;
    targetBrixVal: HTMLElement;
    totalBrixDisp: HTMLElement;
    totalWeightDisp: HTMLElement;
    totalPacDisp: HTMLElement;
    statusBadge: HTMLElement;
    lens: HTMLElement;
    recSugarDisp: HTMLElement;
    recWaterDisp: HTMLElement;
    unitMetricBtn: HTMLElement;
    unitImperialBtn: HTMLElement;
  };
}

export function getUnitLabel(state: BrixState): string {
  return state.activeUnit === 'metric' ? state.ui.gramsUnit : state.ui.ouncesUnit;
}

export function formatWeight(g: number, state: BrixState): string {
  if (state.activeUnit === 'imperial') return (g * 0.035274).toFixed(2) + ' ' + state.ui.ouncesUnit;
  return Math.round(g) + ' ' + state.ui.gramsUnit;
}

export function formatWeightVal(g: number, state: BrixState): number | string {
  return state.activeUnit === 'imperial' ? (g * 0.035274).toFixed(2) : g;
}

export function cToF(c: number): number {
  return c * 9 / 5 + 32;
}

export function getTempStatusDash(tIdeal: number): { text: string; className: string } {
  if (tIdeal > -10) return { text: 'Soft/Melting - Serve very cold', className: 'bsdc-gauge-status status-soft-melt' };
  if (tIdeal > -16) return { text: 'Ideal Serving Cabinet - Temper if stored in home freezer', className: 'bsdc-gauge-status status-ideal-cabinet' };
  if (tIdeal >= -22) return { text: 'Home Freezer Ready - Scoopable straight from the freezer', className: 'bsdc-gauge-status status-home-freezer' };
  return { text: 'Over-concentrated - Extremely soft/Liquid at normal freezer temps', className: 'bsdc-gauge-status status-liquid' };
}
