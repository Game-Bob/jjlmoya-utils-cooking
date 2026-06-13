import type { BrixState } from './logic';
import { toggleUnit, load, updatePresetDropdownUI, refresh } from './logic';

function createElements() {
  const g = (id: string) => document.getElementById(id);
  return {
    selectTrigger: g('bsdc-select-trigger')!,
    selectDropdown: g('bsdc-select-dropdown')!,
    selectOptions: document.querySelectorAll('.bsdc-select-option'),
    selectedIcon: g('bsdc-selected-icon')!,
    selectedName: g('bsdc-selected-name')!,
    fruitWeight: g('bsdc-fruit-weight') as HTMLInputElement,
    fruitBrix: g('bsdc-fruit-brix') as HTMLInputElement,
    sugarWeight: g('bsdc-sugar-weight') as HTMLInputElement,
    dextroseWeight: g('bsdc-dextrose-weight') as HTMLInputElement,
    waterWeight: g('bsdc-water-weight') as HTMLInputElement,
    targetBrix: g('bsdc-target-brix') as HTMLInputElement,
    fruitWeightVal: g('bsdc-fruit-weight-val')!,
    fruitBrixVal: g('bsdc-fruit-brix-val')!,
    sugarWeightVal: g('bsdc-sugar-weight-val')!,
    dextroseWeightVal: g('bsdc-dextrose-weight-val')!,
    waterWeightVal: g('bsdc-water-weight-val')!,
    targetBrixVal: g('bsdc-target-brix-val')!,
    totalBrixDisp: g('bsdc-total-brix')!,
    totalWeightDisp: g('bsdc-total-weight')!,
    totalPacDisp: g('bsdc-total-pac')!,
    statusBadge: g('bsdc-status-badge')!,
    lens: g('bsdc-lens')!,
    recSugarDisp: g('bsdc-rec-sugar')!,
    recWaterDisp: g('bsdc-rec-water')!,
    unitMetricBtn: g('bsdc-unit-metric')!, unitImperialBtn: g('bsdc-unit-imperial')!,
  };
}

function bindSelectDropdown(el: BrixState['elements']): void {
  el.selectTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    el.selectTrigger.classList.toggle('open');
    el.selectDropdown.classList.toggle('open');
  });
  document.addEventListener('click', (e) => {
    if (!el.selectTrigger.contains(e.target as Node) && !el.selectDropdown.contains(e.target as Node)) {
      el.selectTrigger.classList.remove('open');
      el.selectDropdown.classList.remove('open');
    }
  });
}

function bindSelectOptions(state: BrixState): void {
  const { elements: el } = state;
  el.selectOptions.forEach((opt) => {
    opt.addEventListener('click', () => {
      const val = opt.getAttribute('data-value')!;
      state.activePreset = val;
      if (val !== 'custom') el.fruitBrix.value = val;
      el.selectTrigger.classList.remove('open');
      el.selectDropdown.classList.remove('open');
      updatePresetDropdownUI(state);
      refresh(state);
    });
  });
}

function bindAdjusters(state: BrixState): void {
  document.querySelectorAll('.bsdc-adjuster-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target')!;
      const slider = document.getElementById(targetId) as HTMLInputElement;
      if (!slider) return;
      const step = parseFloat(slider.getAttribute('step') || '1');
      const cur = parseFloat(slider.value) || 0;
      const dir = btn.getAttribute('data-dir');
      slider.value = String(Math.max(parseFloat(slider.min), Math.min(parseFloat(slider.max), cur + (dir === 'up' ? step : -step))));
      if (targetId === 'bsdc-fruit-brix') {
        state.activePreset = 'custom';
        updatePresetDropdownUI(state);
      }
      refresh(state);
    });
  });
}

function bindSliderInputs(state: BrixState): void {
  const { elements: el } = state;
  el.fruitWeight.addEventListener('input', () => refresh(state));
  el.fruitBrix.addEventListener('input', () => {
    state.activePreset = 'custom';
    updatePresetDropdownUI(state);
    refresh(state);
  });
  el.sugarWeight.addEventListener('input', () => refresh(state));
  el.dextroseWeight.addEventListener('input', () => refresh(state));
  el.waterWeight.addEventListener('input', () => refresh(state));
  el.targetBrix.addEventListener('input', () => refresh(state));
}

function bindEvents(state: BrixState): void {
  const { elements: el } = state;
  el.unitMetricBtn.addEventListener('click', () => toggleUnit('metric', state));
  el.unitImperialBtn.addEventListener('click', () => toggleUnit('imperial', state));
  bindSelectDropdown(el);
  bindSelectOptions(state);
  bindAdjusters(state);
  bindSliderInputs(state);
}

export function initBrixCalculator(ui: Record<string, string>): void {
  const elements = createElements();
  const state: BrixState = { activeUnit: 'metric', activePreset: '14', ui, elements };
  bindEvents(state);
  load(state);
  updatePresetDropdownUI(state);
  toggleUnit(state.activeUnit, state);
}
