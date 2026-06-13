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

const STORAGE_KEY = 'bsdc-v1';

const LOAD_FIELDS = [
  { key: 'fw', elId: 'bsdc-fruit-weight' },
  { key: 'fb', elId: 'bsdc-fruit-brix' },
  { key: 'sw', elId: 'bsdc-sugar-weight' },
  { key: 'dw', elId: 'bsdc-dextrose-weight' },
  { key: 'ww', elId: 'bsdc-water-weight' },
  { key: 'tb', elId: 'bsdc-target-brix' },
] as const;

function getUnitLabel(state: BrixState): string {
  return state.activeUnit === 'metric' ? state.ui.gramsUnit : state.ui.ouncesUnit;
}

function formatWeight(g: number, state: BrixState): string {
  if (state.activeUnit === 'imperial') return (g * 0.035274).toFixed(2) + ' ' + state.ui.ouncesUnit;
  return Math.round(g) + ' ' + state.ui.gramsUnit;
}

function formatWeightVal(g: number, state: BrixState): number | string {
  return state.activeUnit === 'imperial' ? (g * 0.035274).toFixed(2) : g;
}

function cToF(c: number): number {
  return c * 9 / 5 + 32;
}

function updateDisplayValues(state: BrixState): void {
  const { elements: el, activeUnit } = state;
  el.fruitWeightVal.textContent = String(formatWeightVal(parseFloat(el.fruitWeight.value) || 0, state));
  el.fruitBrixVal.textContent = el.fruitBrix.value;
  el.sugarWeightVal.textContent = String(formatWeightVal(parseFloat(el.sugarWeight.value) || 0, state));
  el.dextroseWeightVal.textContent = String(formatWeightVal(parseFloat(el.dextroseWeight.value) || 0, state));
  el.waterWeightVal.textContent = String(formatWeightVal(parseFloat(el.waterWeight.value) || 0, state));
  el.targetBrixVal.textContent = el.targetBrix.value;

  const labelText = getUnitLabel(state);
  document.querySelectorAll('.bsdc-weight-unit').forEach((el2) => { el2.textContent = labelText; });

  const labelsEl = document.getElementById('bsdc-temp-labels');
  if (labelsEl) {
    labelsEl.innerHTML = activeUnit === 'imperial'
      ? '<span>-13°F</span><span>-4°F</span><span>5°F</span><span>14°F</span><span>23°F</span>'
      : '<span>-25°C</span><span>-20°C</span><span>-15°C</span><span>-10°C</span><span>-5°C</span>';
  }
}

export function updatePresetDropdownUI(state: BrixState): void {
  const { selectOptions, selectedIcon, selectedName } = state.elements;
  selectOptions.forEach((opt) => {
    const isSelected = opt.getAttribute('data-value') === state.activePreset;
    opt.classList.toggle('selected', isSelected);
    if (!isSelected) return;
    selectedIcon.innerHTML = (opt.querySelector('.bsdc-preset-icon') as HTMLElement).innerHTML;
    const nameSpan = opt.querySelector('span:not(.bsdc-preset-icon)');
    if (nameSpan) selectedName.textContent = nameSpan.textContent;
  });
}

function updateBadge(brix: number, state: BrixState): void {
  const card = document.querySelector('.bsdc-card');
  if (card) card.classList.remove('status-hard', 'status-soft', 'status-optimal');
  const { statusBadge } = state.elements;
  const s = state.ui;
  if (brix < 25) {
    statusBadge.textContent = s.statusHard;
    statusBadge.className = 'bsdc-badge hard';
    if (card) card.classList.add('status-hard');
  } else if (brix > 30) {
    statusBadge.textContent = s.statusSoft;
    statusBadge.className = 'bsdc-badge soft';
    if (card) card.classList.add('status-soft');
  } else {
    statusBadge.textContent = s.statusOptimal;
    statusBadge.className = 'bsdc-badge optimal';
    if (card) card.classList.add('status-optimal');
  }
}

function getTempStatusDash(tIdeal: number): { text: string; className: string } {
  if (tIdeal > -10) return { text: 'Soft/Melting - Serve very cold', className: 'bsdc-gauge-status status-soft-melt' };
  if (tIdeal > -16) return { text: 'Ideal Serving Cabinet - Temper if stored in home freezer', className: 'bsdc-gauge-status status-ideal-cabinet' };
  if (tIdeal >= -22) return { text: 'Home Freezer Ready - Scoopable straight from the freezer', className: 'bsdc-gauge-status status-home-freezer' };
  return { text: 'Over-concentrated - Extremely soft/Liquid at normal freezer temps', className: 'bsdc-gauge-status status-liquid' };
}

function updateTempMarker(tMin: number, tMax: number): void {
  const marker = document.getElementById('bsdc-temp-marker');
  if (!marker) return;
  marker.classList.remove('out-of-range-cold', 'out-of-range-warm');
  if (tMin < -25) {
    marker.style.left = '0%';
    marker.style.width = '12%';
    marker.classList.add('out-of-range-cold');
  } else if (tMax > -5) {
    marker.style.left = '88%';
    marker.style.width = '12%';
    marker.classList.add('out-of-range-warm');
  } else {
    const pMin = Math.max(0, Math.min(100, ((tMin + 25) / 20) * 100));
    const pMax = Math.max(0, Math.min(100, ((tMax + 25) / 20) * 100));
    marker.style.left = pMin.toFixed(1) + '%';
    marker.style.width = Math.max(8, pMax - pMin).toFixed(1) + '%';
  }
}

function updateTempGauge(totalPAC: number, state: BrixState): void {
  const tIdeal = -(totalPAC / 18);
  const tMin = tIdeal - 2.5;
  const tMax = tIdeal + 2.5;
  updateTempMarker(tMin, tMax);

  const rangeVal = document.getElementById('bsdc-temp-range-val');
  if (rangeVal) {
    if (state.activeUnit === 'imperial') {
      const fIdeal = cToF(tIdeal);
      rangeVal.textContent = (fIdeal - 4.5).toFixed(0) + '°F to ' + (fIdeal + 4.5).toFixed(0) + '°F';
    } else {
      rangeVal.textContent = tMin.toFixed(0) + '°C to ' + tMax.toFixed(0) + '°C';
    }
  }

  const tempStatus = document.getElementById('bsdc-temp-status');
  if (tempStatus) {
    const st = getTempStatusDash(tIdeal);
    tempStatus.textContent = st.text;
    tempStatus.className = st.className;
  }
}

function calculate(state: BrixState): void {
  const { elements: el } = state;
  const fw = parseFloat(el.fruitWeight.value) || 0;
  const fb = parseFloat(el.fruitBrix.value) || 0;
  const sw = parseFloat(el.sugarWeight.value) || 0;
  const dw = parseFloat(el.dextroseWeight.value) || 0;
  const ww = parseFloat(el.waterWeight.value) || 0;
  const tb = parseFloat(el.targetBrix.value) || 28;
  const fruitSugar = fw * (fb / 100);
  const totalWeight = fw + ww + sw + dw;
  const brix = totalWeight > 0 ? ((fruitSugar + sw + dw) / totalWeight) * 100 : 0;
  const totalPAC = fruitSugar * 1.9 + sw + dw * 1.9;
  el.totalBrixDisp.textContent = brix.toFixed(1) + '%';
  el.totalWeightDisp.textContent = formatWeight(totalWeight, state);
  el.totalPacDisp.textContent = totalPAC.toFixed(1);
  el.lens.style.transform = `translateY(-${Math.min(50, (brix / 50) * 50) * 0.5}%)`;
  updateBadge(brix, state);
  updateTempGauge(totalPAC, state);
  const recSugar = Math.max(0, fw * (2 * (tb / 100) - fb / 100));
  const recWater = Math.max(0, fw - recSugar);
  el.recSugarDisp.textContent = formatWeight(recSugar, state);
  el.recWaterDisp.textContent = formatWeight(recWater, state);
}

function save(state: BrixState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      fw: state.elements.fruitWeight.value,
      fb: state.elements.fruitBrix.value,
      sw: state.elements.sugarWeight.value,
      dw: state.elements.dextroseWeight.value,
      ww: state.elements.waterWeight.value,
      tb: state.elements.targetBrix.value,
      pr: state.activePreset,
      un: state.activeUnit,
    }));
  } catch {}
}

export function load(state: BrixState): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw) as Record<string, string>;
    if (data.un) state.activeUnit = data.un;
    if (data.pr) state.activePreset = data.pr;
    LOAD_FIELDS.forEach(({ key, elId }) => {
      if (data[key] !== undefined) {
        const el = document.getElementById(elId) as HTMLInputElement;
        if (el) el.value = data[key];
      }
    });
  } catch {}
}

export function refresh(state: BrixState): void {
  updateDisplayValues(state);
  calculate(state);
  save(state);
}

export function toggleUnit(unit: string, state: BrixState): void {
  state.activeUnit = unit;
  state.elements.unitMetricBtn.classList.toggle('active', unit === 'metric');
  state.elements.unitImperialBtn.classList.toggle('active', unit === 'imperial');
  refresh(state);
}
