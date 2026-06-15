import { drawMeatModel } from './steak-canvas';
import { EXCHANGE_RATES, TIMELINE_STEPS, kgToLb, lbToKg } from './constants';

const STORAGE_KEY = 'dryaging-estimator-state-v1';
const $ = (id) => document.getElementById(id);

const startWeightInput = $('dryaging-startweight-input');
const daysInput = $('dryaging-days-input');
const humidityInput = $('dryaging-humidity-input');
const priceInput = $('dryaging-price-input');

const startWeightDisplay = $('dryaging-startweight-display');
const daysDisplay = $('dryaging-days-display');
const humidityDisplay = $('dryaging-humidity-display');
const priceDisplay = $('dryaging-price-display');

const statusBadge = $('dryaging-status-badge');
const finalWeightVal = $('dryaging-finalweight-val');
const yieldVal = $('dryaging-yield-val');
const finalCostVal = $('dryaging-finalcost-val');
const moistureLossVal = $('dryaging-moistureloss-val');
const trimmingLossVal = $('dryaging-trimmingloss-val');

const warningLow = $('dryaging-warning-low');
const warningHigh = $('dryaging-warning-high');

const canvas = $('dryaging-canvas');

const timelineSvg = $('dryaging-timeline-svg');
const timelineCurve = $('dryaging-timeline-curve');
const timelineDot = $('dryaging-timeline-dot');
const timelineAxisY = $('dryaging-timeline-axis-y');
const timelineTrigger = $('dryaging-timeline-interactive-trigger');
const timelineBadgesContainer = $('dryaging-timeline-badges');

const unitMetric = $('dryaging-unit-metric');
const unitImperial = $('dryaging-unit-imperial');
const currencySelect = $('dryaging-currency-select');

let currentUnit = 'metric';
let currentCurrency = 'EUR';
let basePriceEur = 15.00;

function getLocale() {
  return document.documentElement.lang || 'en';
}

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    updateBounds();
    if (!saved) return;
    const data = JSON.parse(saved);
    applyLoadedData(data);
  } catch {}
}

function applyLoadedData(data) {
  if (data.unit) {
    currentUnit = data.unit;
    unitMetric.classList.toggle('active', currentUnit === 'metric');
    unitImperial.classList.toggle('active', currentUnit === 'imperial');
  }
  if (data.currency) {
    currentCurrency = data.currency;
    currencySelect.value = currentCurrency;
  }
  if (data.basePriceEur) basePriceEur = data.basePriceEur;
  if (data.startWeight) startWeightInput.value = data.startWeight;
  if (data.days) daysInput.value = data.days;
  if (data.humidity) humidityInput.value = data.humidity;
  updatePriceSliderBoundsAndValue();
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      startWeight: startWeightInput.value,
      days: daysInput.value,
      humidity: humidityInput.value,
      price: priceInput.value,
      basePriceEur: basePriceEur,
      unit: currentUnit,
      currency: currentCurrency
    }));
  } catch {}
}

function setBounds(el, min, max, step) {
  el.setAttribute('min', min);
  el.setAttribute('max', max);
  el.setAttribute('step', step);
}

function updateBounds() {
  if (currentUnit === 'imperial') {
    setBounds(startWeightInput, '2.2', '55.0', '1.0');
  } else {
    setBounds(startWeightInput, '1.0', '25.0', '0.5');
  }
  updatePriceSliderBoundsAndValue();
}

function updatePriceSliderBoundsAndValue() {
  const rate = EXCHANGE_RATES[currentCurrency] || 1.0;
  const minVal = 5.00 * rate;
  const maxVal = 100.00 * rate;
  let stepVal = 1.00 * rate;
  if (stepVal > 10) {
    stepVal = Math.round(stepVal / 5) * 5 || 5;
  } else if (stepVal > 1) {
    stepVal = Math.round(stepVal) || 1;
  } else {
    stepVal = 0.5;
  }
  setBounds(priceInput, minVal.toFixed(2), maxVal.toFixed(2), stepVal.toString());
  priceInput.value = (basePriceEur * rate).toFixed(2);
}

function switchUnit(to) {
  if (currentUnit === to) return;
  let startWeight = parseFloat(startWeightInput.value);
  if (to === 'imperial') {
    startWeight = kgToLb(startWeight);
  } else {
    startWeight = lbToKg(startWeight);
  }
  currentUnit = to;
  unitMetric.classList.toggle('active', to === 'metric');
  unitImperial.classList.toggle('active', to === 'imperial');
  updateBounds();
  startWeightInput.value = startWeight;
  update();
}

function handleCurrencyChange() {
  currentCurrency = currencySelect.value;
  updatePriceSliderBoundsAndValue();
  update();
}

function updateTimelineUI(days) {
  const pct = days / 60;
  const dotX = 20 + pct * 260;
  const dotY = 80 - pct * 40;
  timelineDot.setAttribute('cx', dotX.toString());
  timelineDot.setAttribute('cy', dotY.toString());
  timelineAxisY.setAttribute('x1', dotX.toString());
  timelineAxisY.setAttribute('x2', dotX.toString());
  timelineAxisY.setAttribute('y1', dotY.toString());
  timelineAxisY.setAttribute('y2', '98');
  timelineCurve.setAttribute('d', `M 20 80 L ${dotX} ${dotY}`);
  
  let closestStep = TIMELINE_STEPS[0];
  let minDist = Math.abs(days - closestStep.day);
  TIMELINE_STEPS.forEach((s) => {
    const d = Math.abs(days - s.day);
    if (d < minDist) {
      minDist = d;
      closestStep = s;
    }
  });
  
  timelineBadgesContainer.innerHTML = '';
  closestStep.tags.forEach((tag) => {
    const span = document.createElement('span');
    span.className = 'dryaging-timeline-badge';
    span.innerText = tag;
    timelineBadgesContainer.appendChild(span);
  });
}

function handleTimelineClick(event) {
  const xRatio = ((event.clientX - timelineSvg.getBoundingClientRect().left) / timelineSvg.getBoundingClientRect().width) * 300;
  const clickPct = (xRatio - 20) / 260;
  const clickDay = Math.max(0, Math.min(60, Math.round(clickPct * 60)));
  daysInput.value = clickDay.toString();
  update();
}

function handlePriceInput() {
  const rate = EXCHANGE_RATES[currentCurrency] || 1.0;
  basePriceEur = parseFloat(priceInput.value) / rate;
  update();
}

function update() {
  const startWeight = parseFloat(startWeightInput.value);
  const days = parseInt(daysInput.value);
  const humidity = parseInt(humidityInput.value);
  const rate = EXCHANGE_RATES[currentCurrency] || 1.0;
  const price = basePriceEur * rate;
  
  saveState();
  
  const locale = getLocale();
  const wUnit = currentUnit === 'imperial' ? 'lb' : 'kg';
  const numFormatter = new Intl.NumberFormat(locale, { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const priceFormatter = new Intl.NumberFormat(locale, { style: 'currency', currency: currentCurrency });
  
  startWeightDisplay.innerText = `${numFormatter.format(startWeight)} ${wUnit}`;
  daysDisplay.innerText = `${days} days`;
  humidityDisplay.innerText = `${humidity} %`;
  priceDisplay.innerText = `${priceFormatter.format(price)}/${wUnit}`;
  
  calculateAndRenderResults({ startWeight, days, price, wUnit, numFormatter, priceFormatter });
  updateChamberAlerts(humidity);
  drawMeatModel(canvas, days);
  updateTimelineUI(days);
}

function calculateAndRenderResults(cfg) {
  const { startWeight, days, price, wUnit, numFormatter, priceFormatter } = cfg;
  const maxLoss = 0.45 - (parseInt(humidityInput.value) / 100) * 0.3;
  const moistureLossPercent = maxLoss * (1 - Math.exp(-0.06 * days));
  const moistureLossWeight = startWeight * moistureLossPercent;
  const trimmingLossPercent = days === 0 ? 0 : 0.15;
  const trimmingLossWeight = startWeight * trimmingLossPercent;
  const finalWeight = Math.max(0, startWeight - moistureLossWeight - trimmingLossWeight);
  const totalYieldPercent = startWeight > 0 ? (finalWeight / startWeight) * 100 : 0;
  const originalCost = startWeight * price;
  const finalCostPerKg = finalWeight > 0 ? originalCost / finalWeight : 0;
  
  finalWeightVal.innerText = `${numFormatter.format(finalWeight)} ${wUnit}`;
  yieldVal.innerText = `${numFormatter.format(totalYieldPercent)} %`;
  finalCostVal.innerText = `${priceFormatter.format(finalCostPerKg)}/${wUnit}`;
  moistureLossVal.innerText = `${numFormatter.format(moistureLossWeight)} ${wUnit} (${numFormatter.format(moistureLossPercent * 100)}%)`;
  trimmingLossVal.innerText = `${numFormatter.format(trimmingLossWeight)} ${wUnit} (${numFormatter.format(trimmingLossPercent * 100)}%)`;
}

function updateChamberAlerts(humidity) {
  const isLow = humidity < 75;
  const isHigh = humidity > 85;
  let text = 'Optimal';
  let badgeClass = 'normal';
  if (isLow) {
    text = 'Low Humidity';
    badgeClass = 'warning';
  } else if (isHigh) {
    text = 'High Humidity';
    badgeClass = 'warning';
  }
  statusBadge.innerText = text;
  statusBadge.className = `dryaging-status-badge dryaging-status-${badgeClass}`;
  warningLow.classList.toggle('visible', isLow);
  warningHigh.classList.toggle('visible', isHigh);
}

startWeightInput.addEventListener('input', update);
daysInput.addEventListener('input', update);
humidityInput.addEventListener('input', update);
priceInput.addEventListener('input', handlePriceInput);

timelineTrigger.addEventListener('click', handleTimelineClick);
unitMetric.addEventListener('click', () => switchUnit('metric'));
unitImperial.addEventListener('click', () => switchUnit('imperial'));
currencySelect.addEventListener('change', handleCurrencyChange);

loadState();
update();
