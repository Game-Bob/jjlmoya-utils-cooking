import { convertDifference, evaluateFoodSafety, fromCelsius, toCelsius, type TemperatureUnit } from './logic';

const root = document.querySelector<HTMLElement>('.fsc-shell');
if (root) {
  const ui = JSON.parse(root.dataset.ui ?? '{}') as Record<string, string>;
  const foodTrigger = root.querySelector<HTMLButtonElement>('#fsc-food-trigger');
  const foodValue = root.querySelector<HTMLElement>('#fsc-food-value');
  const foodMenu = root.querySelector<HTMLElement>('#fsc-food-options');
  const foodOptions = root.querySelectorAll<HTMLButtonElement>('.fsc-select-option');
  const temperatureInput = root.querySelector<HTMLInputElement>('#fsc-temperature-input');
  const inputUnit = root.querySelector<HTMLElement>('#fsc-input-unit');
  const unitButtons = root.querySelectorAll<HTMLButtonElement>('.fsc-unit-button');
  const foodNote = root.querySelector<HTMLElement>('#fsc-food-note');
  const statusTitle = root.querySelector<HTMLElement>('#fsc-status-title');
  const statusDescription = root.querySelector<HTMLElement>('#fsc-status-description');
  const measuredValue = root.querySelector<HTMLElement>('#fsc-measured-value');
  const targetValue = root.querySelector<HTMLElement>('#fsc-target-value');
  const statMeasured = root.querySelector<HTMLElement>('#fsc-stat-measured');
  const statTarget = root.querySelector<HTMLElement>('#fsc-stat-target');
  const differenceValue = root.querySelector<HTMLElement>('#fsc-difference');
  const restValue = root.querySelector<HTMLElement>('#fsc-rest-value');
  const fill = root.querySelector<HTMLElement>('#fsc-thermometer-fill');
  const targetMarker = root.querySelector<HTMLElement>('#fsc-target-marker');
  const scaleHigh = root.querySelector<HTMLElement>('#fsc-scale-high');
  const scaleMid = root.querySelector<HTMLElement>('#fsc-scale-mid');
  const scaleLow = root.querySelector<HTMLElement>('#fsc-scale-low');
  let activeUnit: TemperatureUnit = 'celsius';
  let activeFoodId = foodOptions[0]?.dataset.foodId ?? 'poultry';

  if (foodTrigger && foodValue && foodMenu && temperatureInput && inputUnit && foodNote && statusTitle && statusDescription && measuredValue && targetValue && statMeasured && statTarget && differenceValue && restValue && fill && targetMarker && scaleHigh && scaleMid && scaleLow) {
    const shell = root;
    const trigger = foodTrigger;
    const valueElement = foodValue;
    const menu = foodMenu;
    const input = temperatureInput;
    const unitElement = inputUnit;
    const noteElement = foodNote;
    const titleElement = statusTitle;
    const descriptionElement = statusDescription;
    const measuredElement = measuredValue;
    const targetElement = targetValue;
    const statMeasuredElement = statMeasured;
    const statTargetElement = statTarget;
    const differenceElement = differenceValue;
    const restElement = restValue;
    const fillElement = fill;
    const markerElement = targetMarker;
    const highElement = scaleHigh;
    const midElement = scaleMid;
    const lowElement = scaleLow;
    const text = (key: string): string => ui[key] ?? '';

    function formatTemperature(valueC: number): string {
      const value = fromCelsius(valueC, activeUnit);
      return `${Math.round(value * 10) / 10}°${activeUnit === 'celsius' ? 'C' : 'F'}`;
    }

    function formatDifference(valueC: number): string {
      const value = convertDifference(valueC, activeUnit);
      const sign = value > 0 ? '+' : '';
      return `${sign}${Math.round(value * 10) / 10}°${activeUnit === 'celsius' ? 'C' : 'F'}`;
    }

    function updateScale(): void {
      highElement.textContent = activeUnit === 'celsius' ? '100°' : '212°';
      midElement.textContent = activeUnit === 'celsius' ? '50°' : '122°';
      lowElement.textContent = activeUnit === 'celsius' ? '0°' : '32°';
      unitElement.textContent = activeUnit === 'celsius' ? '°C' : '°F';
      input.min = activeUnit === 'celsius' ? '0' : '32';
      input.max = activeUnit === 'celsius' ? '100' : '212';
    }

    function render(): void {
      const value = Number(input.value);
      const defaultMeasurement = activeUnit === 'celsius' ? 0 : 32;
      const measured = Number.isFinite(value) ? value : defaultMeasurement;
      const result = evaluateFoodSafety(activeFoodId, measured, activeUnit);
      const displayScale = activeUnit === 'celsius' ? { min: 0, max: 100 } : { min: 32, max: 212 };
      const measuredPct = Math.max(0, Math.min(100, ((measured - displayScale.min) / (displayScale.max - displayScale.min)) * 100));
      const targetDisplay = fromCelsius(result.preset.targetC, activeUnit);
      const targetPct = Math.max(0, Math.min(100, ((targetDisplay - displayScale.min) / (displayScale.max - displayScale.min)) * 100));
      const statusKey = { below: 'statusBelow', meets: 'statusMeets', above: 'statusAbove' }[result.status];
      const descriptionKey = { below: 'belowDescription', meets: 'meetsDescription', above: 'aboveDescription' }[result.status];

      shell.dataset.status = result.status;
      titleElement.textContent = text(statusKey);
      descriptionElement.textContent = text(descriptionKey);
      measuredElement.textContent = formatTemperature(result.measuredC);
      targetElement.textContent = formatTemperature(result.preset.targetC);
      statMeasuredElement.textContent = formatTemperature(result.measuredC);
      statTargetElement.textContent = formatTemperature(result.preset.targetC);
      differenceElement.textContent = formatDifference(result.differenceC);
      noteElement.textContent = text(result.preset.noteKey);
      restElement.textContent = result.preset.restMinutes > 0 ? `${result.preset.restMinutes} min` : text('noRestNeeded');
      fillElement.style.height = `${measuredPct}%`;
      markerElement.style.bottom = `${targetPct}%`;
      valueElement.textContent = text(result.preset.nameKey);
      foodOptions.forEach((option) => option.setAttribute('aria-selected', String(option.dataset.foodId === activeFoodId)));
    }

    function closeFoodMenu(restoreFocus = false): void {
      menu.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      if (restoreFocus) trigger.focus();
    }

    function openFoodMenu(): void {
      menu.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      shell.querySelector<HTMLButtonElement>(`.fsc-select-option[data-food-id="${activeFoodId}"]`)?.focus();
    }

    function chooseFood(option: HTMLButtonElement): void {
      const foodId = option.dataset.foodId;
      if (!foodId) return;
      activeFoodId = foodId;
      render();
      closeFoodMenu(true);
    }

    trigger.addEventListener('click', () => {
      if (menu.hidden) openFoodMenu();
      else closeFoodMenu();
    });
    trigger.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowDown' || event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openFoodMenu();
      }
    });
    foodOptions.forEach((option) => option.addEventListener('click', () => chooseFood(option)));
    const optionKeyboardActions: Record<string, (index: number) => void> = {
      Escape: () => closeFoodMenu(true),
      ArrowDown: (index) => foodOptions[(index + 1) % foodOptions.length]?.focus(),
      ArrowUp: (index) => foodOptions[(index - 1 + foodOptions.length) % foodOptions.length]?.focus(),
      Home: () => foodOptions[0]?.focus(),
      End: () => foodOptions[foodOptions.length - 1]?.focus(),
    };
    foodOptions.forEach((option, index) => option.addEventListener('keydown', (event) => {
      const action = optionKeyboardActions[event.key];
      if (!action) return;
      event.preventDefault();
      action(index);
    }));
    document.addEventListener('click', (event) => {
      if (!menu.hidden && event.target instanceof Node && !trigger.contains(event.target) && !menu.contains(event.target)) closeFoodMenu();
    });
    input.addEventListener('input', render);
    unitButtons.forEach((button) => button.addEventListener('click', () => {
      const nextUnit = button.dataset.unit as TemperatureUnit | undefined;
      if (!nextUnit || nextUnit === activeUnit) return;
      const currentValue = Number(input.value);
      const currentC = toCelsius(Number.isFinite(currentValue) ? currentValue : 0, activeUnit);
      activeUnit = nextUnit;
      updateScale();
      input.value = String(Math.round(fromCelsius(currentC, activeUnit) * 10) / 10);
      unitButtons.forEach((unitButton) => {
        const isActive = unitButton.dataset.unit === activeUnit;
        unitButton.classList.toggle('is-active', isActive);
        unitButton.setAttribute('aria-pressed', String(isActive));
      });
      render();
    }));

    updateScale();
    render();
  }
}
