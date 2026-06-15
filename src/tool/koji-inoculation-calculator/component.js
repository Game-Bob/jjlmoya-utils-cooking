const STORAGE_KEY = 'koji-calculator-state-v4';
const container = document.querySelector('.koji-container');
const ui = JSON.parse(container.dataset.ui);
const $ = (id) => document.getElementById(id);
const dryWeightInput = $('dry-weight-input'), steamedWeightInput = $('steamed-weight-input'), potencySelect = $('potency-select'), tempInput = $('temp-input'), humidityInput = $('humidity-input');
const dryWeightDisplay = $('dry-weight-display'), steamedWeightDisplay = $('steamed-weight-display'), tempDisplay = $('temp-display'), humidityDisplay = $('humidity-display');
const statusBadge = $('status-badge'), statusDisplay = document.querySelector('.koji-status-display');
const moistureVal = $('moisture-val'), targetRangeVal = $('target-range-val'), sporeDosageVal = $('spore-dosage-val');
const canvas = $('koji-canvas'), ctx = canvas.getContext('2d');
const timelineSvg = $('koji-timeline-svg'), timelineDot = $('timeline-dot'), timelineAxisY = $('timeline-axis-y'), timelineTrigger = $('timeline-interactive-trigger'), timelineInfoText = $('timeline-info-text');
const unitMetric = $('koji-unit-metric'), unitImperial = $('koji-unit-imperial');
let currentUnit = 'metric';
const TIMELINE_STEPS = [
  { hour: 0, x: 20, y: 80, tempC: 30, descTemplate: '0h: Steamed grain cooled and inoculated. Maintain temperature at {temp}.' },
  { hour: 12, x: 85, y: 70, desc: '12h: Mold spores begin to germinate. White specks appear. Keep humidity high.' },
  { hour: 24, x: 150, y: 35, tempC: 38, descTemplate: '24h: Exothermic peak. Mycelium generates heavy heat. Turn grain bed to cool below {temp}.' },
  { hour: 36, x: 215, y: 55, desc: '36h: Dense white mycelium binds the grain together. Sweet, mushroom-like aroma.' },
  { hour: 48, x: 280, y: 50, desc: '48h: Harvest. Mycelium is thick and cottony. Cool immediately to stop sporulation.' }
];
let activeTimelineStep = TIMELINE_STEPS[0];
function getTimelineDesc(step) {
  if (step.tempC === undefined) return step.desc;
  const tempVal = currentUnit === 'imperial' ? Math.round(cToF(step.tempC)) : step.tempC;
  return step.descTemplate.replace('{temp}', `${tempVal}${currentUnit === 'imperial' ? '°F' : '°C'}`);
}
const gToOz = (g) => g * 0.035274, ozToG = (oz) => oz / 0.035274, cToF = (c) => c * 1.8 + 32, fToC = (f) => (f - 32) / 1.8;
const PROP_MAP = [['dryWeight', dryWeightInput], ['steamedWeight', steamedWeightInput], ['potency', potencySelect], ['temp', tempInput], ['humidity', humidityInput]];
function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    updateBounds();
    if (!saved) return;
    const data = JSON.parse(saved);
    if (data.unit) { currentUnit = data.unit; unitMetric.classList.toggle('active', currentUnit === 'metric'); unitImperial.classList.toggle('active', currentUnit === 'imperial'); }
    PROP_MAP.forEach(([key, el]) => { if (data[key]) el.value = data[key]; });
  } catch {}
}
function saveState(s) { try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ dryWeight: s.dry, steamedWeight: s.steamed, potency: s.potency, temp: s.temp, humidity: s.humidity, unit: currentUnit })); } catch {} }
function setBounds(el, min, max, step) { el.setAttribute('min', min); el.setAttribute('max', max); el.setAttribute('step', step); }
function updateBounds() {
  if (currentUnit === 'imperial') { setBounds(dryWeightInput, '3.5', '176.4', '1.0'); setBounds(steamedWeightInput, '3.5', '264.6', '1.0'); setBounds(tempInput, '59', '113', '1'); }
  else { setBounds(dryWeightInput, '100', '5000', '50'); setBounds(steamedWeightInput, '100', '7500', '50'); setBounds(tempInput, '15', '45', '1'); }
}
function switchUnit(to) {
  if (currentUnit === to) return;
  let dry = parseFloat(dryWeightInput.value), steamed = parseFloat(steamedWeightInput.value), temp = parseFloat(tempInput.value);
  if (to === 'imperial') { dry = gToOz(dry); steamed = gToOz(steamed); temp = cToF(temp); }
  else { dry = ozToG(dry); steamed = ozToG(steamed); temp = fToC(temp); }
  currentUnit = to;
  unitMetric.classList.toggle('active', to === 'metric');
  unitImperial.classList.toggle('active', to === 'imperial');
  updateBounds();
  dryWeightInput.value = dry; steamedWeightInput.value = steamed; tempInput.value = temp;
  update();
}
function fractalFactors(depth, oh) {
  return {
    v: oh ? (0.65 + Math.sin(depth) * 0.15) : 0.72,
    w: oh ? (0.55 + Math.cos(depth) * 0.15) : 0.72,
    c: oh ? (0.6 + Math.sin(depth * 2) * 0.1) : 0.72,
    la: oh ? (0.35 + Math.sin(depth) * 0.15) : 0.45,
    ra: oh ? (0.55 + Math.cos(depth) * 0.15) : 0.45,
    ang: oh ? 0.15 : 0,
  };
}
function fractalStyle(oh, isDark, depth) {
  if (oh) { ctx.strokeStyle = isDark ? '#eef1ed' : '#2A322E'; ctx.globalAlpha = 0.85; ctx.lineWidth = Math.max(1, depth * (0.5 + Math.sin(depth * 1.8) * 0.3)); }
  else { ctx.strokeStyle = isDark ? '#eef1ed' : '#1c2e24'; ctx.globalAlpha = isDark ? 0.95 : 0.85; ctx.lineWidth = Math.max(1, depth * 0.7); }
}
function drawFractal(opts) {
  const { x, y, length, angle, depth, isOverheating } = opts;
  if (depth === 0) { if (isOverheating) { ctx.fillStyle = '#b85d43'; ctx.beginPath(); ctx.arc(x, y, 3.5, 0, Math.PI * 2); ctx.fill(); } return; }
  const x2 = x + Math.cos(angle) * length, y2 = y + Math.sin(angle) * length;
  fractalStyle(isOverheating, document.documentElement.classList.contains('theme-dark'), depth);
  ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x2, y2); ctx.stroke();
  const f = fractalFactors(depth, isOverheating);
  drawFractal({ x: x2, y: y2, length: length * f.v, angle: angle - f.la, depth: depth - 1, isOverheating });
  drawFractal({ x: x2, y: y2, length: length * f.w, angle: angle + f.ra, depth: depth - 1, isOverheating });
  if (depth > 2) drawFractal({ x: x2, y: y2, length: length * f.c, angle: angle + f.ang, depth: depth - 1, isOverheating });
}
function updateVisuals(growthStatus, humidity) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.globalAlpha = 1.0;
  const isOverheating = growthStatus === 'overheating';
  const depthMap = { ideal: 5, slow: 3, overheating: 5 };
  const maxDepth = depthMap[growthStatus] || 0;
  if (maxDepth === 0) { ctx.fillStyle = document.documentElement.classList.contains('theme-dark') ? '#9ba498' : '#1c2e24'; ctx.beginPath(); ctx.arc(100, 100, 5, 0, Math.PI * 2); ctx.fill(); return; }
  const length = 24 * Math.min(1.3, Math.max(0.5, humidity / 70));
  [0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].forEach((a) => drawFractal({ x: 100, y: 100, length, angle: a, depth: maxDepth, isOverheating }));
}
function computeUnitConversion() {
  const rawDry = parseFloat(dryWeightInput.value), rawSteamed = parseFloat(steamedWeightInput.value), rawTemp = parseFloat(tempInput.value);
  let dryGrams = rawDry, steamedGrams = rawSteamed, tempCelsius = rawTemp;
  if (currentUnit === 'imperial') { dryGrams = ozToG(rawDry); steamedGrams = ozToG(rawSteamed); tempCelsius = fToC(rawTemp); }
  return { rawDry, rawSteamed, rawTemp, dryGrams, steamedGrams, tempCelsius };
}
function updateDisplayValues(v) {
  const wUnit = currentUnit === 'imperial' ? 'oz' : 'g', tUnit = currentUnit === 'imperial' ? '°F' : '°C', dec = currentUnit === 'imperial' ? 1 : 0;
  dryWeightDisplay.innerText = `${v.rawDry.toFixed(dec)} ${wUnit}`;
  steamedWeightDisplay.innerText = `${v.rawSteamed.toFixed(dec)} ${wUnit}`;
  tempDisplay.innerText = `${v.rawTemp.toFixed(0)}${tUnit}`;
  humidityDisplay.innerText = `${v.humidity}%`;
}
function computeTargetRange(dryGrams) {
  const minTargetG = Math.round(dryGrams * 1.35), maxTargetG = Math.round(dryGrams * 1.40);
  const wUnit = currentUnit === 'imperial' ? 'oz' : 'g';
  targetRangeVal.innerText = currentUnit === 'imperial' ? `${gToOz(minTargetG).toFixed(1)} - ${gToOz(maxTargetG).toFixed(1)} ${wUnit}` : `${minTargetG} - ${maxTargetG} ${wUnit}`;
}
function computeMoisture(dryGrams, steamedGrams) { moistureVal.innerText = `${((steamedGrams > 0 ? (steamedGrams - dryGrams) / steamedGrams : 0) * 100).toFixed(1)}%`; }
function updateSporeDosage(dryGrams, potency) {
  const pf = { concentrated: 0.5, diluted: 2.0 }[potency] || 1.0;
  const dosageG = (dryGrams / 1000) * pf, wUnit = currentUnit === 'imperial' ? 'oz' : 'g';
  sporeDosageVal.innerText = currentUnit === 'imperial' ? `${gToOz(dosageG).toFixed(3)} ${wUnit}` : `${dosageG.toFixed(2)} ${wUnit}`;
}
function computeGrowthStatus(tempCelsius, humidity) {
  if (tempCelsius >= 28 && tempCelsius <= 34 && humidity >= 65) { statusBadge.innerText = ui.statusIdeal; statusBadge.className = 'koji-status-badge koji-status-ideal'; return 'ideal'; }
  if (tempCelsius > 38 || humidity > 90) { statusBadge.innerText = ui.statusOverheating; statusBadge.className = 'koji-status-badge koji-status-overheating'; return 'overheating'; }
  if (tempCelsius < 20 || humidity < 40) { statusBadge.innerText = ui.statusInhibited; statusBadge.className = 'koji-status-badge koji-status-inhibited'; return 'inhibited'; }
  statusBadge.innerText = ui.statusSlow; statusBadge.className = 'koji-status-badge koji-status-slow'; return 'slow';
}
function updateTimeline() {
  const s = activeTimelineStep;
  timelineDot.setAttribute('cx', s.x.toString()); timelineDot.setAttribute('cy', s.y.toString());
  timelineAxisY.setAttribute('x1', s.x.toString()); timelineAxisY.setAttribute('x2', s.x.toString()); timelineAxisY.setAttribute('y1', s.y.toString());
  timelineInfoText.innerText = getTimelineDesc(s);
}
function update() {
  const potency = potencySelect.value, humidity = parseInt(humidityInput.value);
  const c = computeUnitConversion();
  updateDisplayValues({ rawDry: c.rawDry, rawSteamed: c.rawSteamed, rawTemp: c.rawTemp, humidity });
  saveState({ dry: c.rawDry, steamed: c.rawSteamed, potency, temp: c.rawTemp, humidity });
  computeTargetRange(c.dryGrams); computeMoisture(c.dryGrams, c.steamedGrams); updateSporeDosage(c.dryGrams, potency);
  const gs = computeGrowthStatus(c.tempCelsius, humidity);
  if (statusDisplay) statusDisplay.classList.toggle('alarm-active', gs === 'overheating');
  updateVisuals(gs, humidity); updateTimeline();
}
function handleTimelineClick(event) {
  const xRatio = ((event.clientX - timelineSvg.getBoundingClientRect().left) / timelineSvg.getBoundingClientRect().width) * 300;
  let closestStep = TIMELINE_STEPS[0], minDist = Math.abs(xRatio - closestStep.x);
  TIMELINE_STEPS.forEach((s) => { const d = Math.abs(xRatio - s.x); if (d < minDist) { minDist = d; closestStep = s; } });
  activeTimelineStep = closestStep;
  timelineDot.setAttribute('cx', closestStep.x.toString()); timelineDot.setAttribute('cy', closestStep.y.toString());
  timelineAxisY.setAttribute('x1', closestStep.x.toString()); timelineAxisY.setAttribute('x2', closestStep.x.toString()); timelineAxisY.setAttribute('y1', closestStep.y.toString());
  timelineInfoText.innerText = getTimelineDesc(closestStep);
}
dryWeightInput.addEventListener('input', update); steamedWeightInput.addEventListener('input', update);
potencySelect.addEventListener('change', update); tempInput.addEventListener('input', update);
humidityInput.addEventListener('input', update); timelineTrigger.addEventListener('click', handleTimelineClick);
unitMetric.addEventListener('click', () => switchUnit('metric')); unitImperial.addEventListener('click', () => switchUnit('imperial'));
loadState();
update();
