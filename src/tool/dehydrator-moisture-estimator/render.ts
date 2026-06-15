import type { DehydratorElements } from './dom';
import { toCelsius, toGrams, toOunces } from './helpers';
import type { DehydratorState } from './helpers';
import { DehydratorEngine } from './logic';

interface MetricParams {
  weight: number;
  temp: number;
}

function getMetricParams(state: DehydratorState): MetricParams {
  const isMetric = state.unitSystem === 'metric';
  return {
    weight: isMetric ? state.weight : toGrams(state.weight),
    temp: isMetric ? state.temp : toCelsius(state.temp),
  };
}

export function renderUI(elements: DehydratorElements, state: DehydratorState): void {
  const { weight, temp } = getMetricParams(state);
  const isMetric = state.unitSystem === 'metric';
  const result = DehydratorEngine.calculateDrying(weight, state.initialMoisture, state.targetMoisture, temp);

  elements.weightUnit.textContent = isMetric ? '(g)' : '(oz)';
  elements.tempUnit.textContent = isMetric ? '(°C)' : '(°F)';
  elements.initialMoistureVal.textContent = `${state.initialMoisture}%`;
  elements.targetMoistureVal.textContent = `${state.targetMoisture}%`;

  const outWeight = isMetric ? result.targetWeight : toOunces(result.targetWeight);
  const outWater = isMetric ? result.waterEvaporated : toOunces(result.waterEvaporated);
  const weightSuffix = isMetric ? 'g' : 'oz';

  const formatOpts = { minimumFractionDigits: 1, maximumFractionDigits: 1 };
  elements.targetWeight.textContent = `${outWeight.toLocaleString(undefined, formatOpts)} ${weightSuffix}`;
  elements.waterEvaporated.textContent = `${outWater.toLocaleString(undefined, formatOpts)} ${weightSuffix}`;
  elements.estimatedHours.textContent = `${result.estimatedHours.toLocaleString(undefined, formatOpts)} h`;

  const baseScale = 0.5 + 0.5 * Math.max(0.1, Math.min(1.0, weight / 1000.0));
  elements.visualSlice.style.transform = `scale(${baseScale})`;

  const shrinkRatio = weight > 0 ? result.targetWeight / weight : 1.0;
  elements.activeGroup.style.transform = `scale(${Math.max(0.48, Math.min(1.0, shrinkRatio))})`;

  const ratio = state.targetMoisture / state.initialMoisture;
  elements.shrivelDisplacement.setAttribute('scale', String((1 - ratio) * 35));
  elements.visualSlice.style.filter = `saturate(${(35 + 65 * ratio).toFixed(0)}%)`;
}
