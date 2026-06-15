export interface DehydratorElements {
  unitSystem: HTMLSelectElement;
  preset: HTMLSelectElement;
  initialMoisture: HTMLInputElement;
  initialMoistureVal: HTMLElement;
  targetMoisture: HTMLInputElement;
  targetMoistureVal: HTMLElement;
  weight: HTMLInputElement;
  weightUnit: HTMLElement;
  temp: HTMLInputElement;
  tempUnit: HTMLElement;
  targetWeight: HTMLElement;
  waterEvaporated: HTMLElement;
  estimatedHours: HTMLElement;
  visualSlice: SVGElement;
  shrivelDisplacement: SVGElement;
  activeGroup: SVGElement;
}

function getEl<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error();
  }
  return el as T;
}

export function getElements(): DehydratorElements | null {
  try {
    return {
      unitSystem: getEl('dehydrator-unit-system'),
      preset: getEl('dehydrator-preset'),
      initialMoisture: getEl('dehydrator-initial-moisture'),
      initialMoistureVal: getEl('dehydrator-initial-moisture-val'),
      targetMoisture: getEl('dehydrator-target-moisture'),
      targetMoistureVal: getEl('dehydrator-target-moisture-val'),
      weight: getEl('dehydrator-weight'),
      weightUnit: getEl('dehydrator-weight-unit'),
      temp: getEl('dehydrator-temp'),
      tempUnit: getEl('dehydrator-temp-unit'),
      targetWeight: getEl('dehydrator-target-weight'),
      waterEvaporated: getEl('dehydrator-water-evaporated'),
      estimatedHours: getEl('dehydrator-estimated-hours'),
      visualSlice: getEl('dehydrator-visual-slice'),
      shrivelDisplacement: getEl('shrivel-displacement'),
      activeGroup: getEl('dehydrator-active-group'),
    };
  } catch {
    return null;
  }
}
