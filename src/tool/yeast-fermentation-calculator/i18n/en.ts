import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = 'Yeast Fermentation Time Calculator for Bread, Sourdough and Beer';
const description = 'Estimate bread proofing time, sourdough fermentation time and beer fermentation time from temperature, yeast amount, batch size and target rise or attenuation. Switch between metric and imperial units and see the assumptions behind the range.';

const faq = [
  {
    question: 'What does this yeast fermentation calculator estimate?',
    answer: 'It estimates a planning window for bread dough, sourdough or beer using a transparent rate model. The result is not a promise of when fermentation will finish because flour, wort gravity, hydration, yeast health and the real vessel temperature all change the outcome.',
  },
  {
    question: 'Why does temperature change the result so much?',
    answer: 'Temperature affects yeast activity and the pace of fermentation. The calculator uses a Q10-style temperature factor around a reference temperature, then widens the window when the chosen temperature moves away from the reference case.',
  },
  {
    question: 'What should I enter for sourdough starter?',
    answer: 'Enter the flour weight as the batch size and the starter weight as the yeast amount. The tool treats starter amount as a baker percentage and uses a slower reference profile than commercial bread yeast.',
  },
  {
    question: 'What should I enter for beer?',
    answer: 'Enter the wort volume in litres and the dry yeast mass in grams. The result uses grams per litre as a simple pitch-density proxy. For a reliable brew plan, check the strain manufacturer data and measure gravity, temperature and fermentation progress.',
  },
  {
    question: 'Should I stop fermenting when the window ends?',
    answer: 'No. Use the window as a prompt to inspect the dough or take a gravity reading. For bread, follow volume, elasticity and the recipe. For beer, confirm stable gravity over repeated readings before deciding that primary fermentation is complete.',
  },
  {
    question: 'Can I use imperial units?',
    answer: 'Yes. Use the global measurement button at the top of the tool to switch temperature, flour, wort, yeast mass, presets and beer pitch density between metric and imperial units. The underlying calculation keeps the same physical quantities.',
  },
];

const howTo = [
  { name: 'Choose a fermentation mode', text: 'Select bread, sourdough or beer so the calculator uses the matching units and reference culture.' },
  { name: 'Set culture and temperature', text: 'Choose the yeast family, switch between metric and imperial if needed, enter the working temperature and use a preset if the room is cool, warm or intended for an overnight fermentation.' },
  { name: 'Enter batch and yeast amount', text: 'For bread and sourdough, enter flour and culture in grams. For beer, enter wort volume in litres and dry yeast in grams.' },
  { name: 'Set the finish line', text: 'Choose the target dough rise or beer attenuation, then use the displayed range as a planning window and verify progress with physical signs or measurements.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
};

const ui: FermentationUI = {
  modeBread: 'Bread', modeSourdough: 'Sourdough', modeBeer: 'Beer',
  modeBreadHint: 'commercial yeast', modeSourdoughHint: 'wild culture', modeBeerHint: 'ale or lager',
  temperature: 'Fermentation temperature', temperatureHelp: 'Use the temperature of the dough or wort, not the room reading if they differ.',
  systemLabel: 'Measurement system', metricSystem: 'Metric', imperialSystem: 'Imperial', useImperial: 'Use imperial', useMetric: 'Use metric', imperialTemperatureUnit: '°F', metricTemperatureUnit: '°C', imperialMassUnit: 'oz', metricMassUnit: 'g', imperialFlourUnit: 'oz', metricFlourUnit: 'g', imperialWortUnit: 'gal', metricWortUnit: 'L',
  batchSize: 'Batch size', batchSizeHelp: 'Flour weight for dough or wort volume for beer.', flour: 'Flour weight', wort: 'Wort volume',
  yeastAmount: 'Culture amount', yeastAmountHelp: 'Weigh the yeast or starter. For beer, use dry yeast mass.', yeastType: 'Culture type',
  instant: 'Instant dry', active: 'Active dry', fresh: 'Fresh yeast', starter: 'Starter', ale: 'Ale yeast', lager: 'Lager yeast',
  targetRise: 'Target dough rise', targetAttenuation: 'Target attenuation', targetHelp: 'This is the finish line, not a promise that the dough or beer is ready by itself.',
  riseUnit: 'x volume', attenuationUnit: '%', presetRoom: 'Room', presetWarm: 'Warm', presetCool: 'Cool', presetOvernight: 'Overnight',
  calculate: 'Update estimate', reset: 'Reset to bread', estimatedWindow: 'Estimated fermentation window', rate: 'Working rate', pitchDensity: 'Pitch density',
  status: 'Reading', steady: 'steady conditions', watch: 'watch the culture', caution: 'outside the comfort zone', invalid: 'enter valid values',
  steadyText: 'The inputs sit near the reference profile. Watch the mixture rather than the clock.', watchText: 'The estimate is usable as a guide, but the culture or temperature will make the window less predictable.', cautionText: 'This combination is far outside the reference profile. Treat the output as a rough signal and rely on direct measurements.', invalidText: 'Enter positive values for temperature, batch size, culture amount and target.',
  assumptions: 'Open the assumptions', assumptionsText: 'The model applies a transparent rate adjustment to a reference profile. Temperature uses a Q10-style factor and culture amount uses a sublinear dose factor. It does not know flour strength, wort gravity, hydration, pH, oxygen, vessel geometry or yeast health.',
  targetMarker: 'finish line', riseScene: 'dough volume', attenuationScene: 'sugar converted', hours: 'hours', days: 'days', perLiter: 'g/L', perGallon: 'oz/gal', perFlour: 'of flour', enterValid: 'Enter values to read the vessel.',
  faqTitle: 'Frequently Asked Questions', bibliographyTitle: 'References',
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: 'yeast-fermentation-calculator',
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: 'How the fermentation estimate works', level: 2 },
    { type: 'paragraph', html: 'Looking for a yeast fermentation time calculator, fermentation temperature calculator, sourdough fermentation time estimate or beer fermentation time guide? This tool gives you a practical window from the four controls that are easiest to measure: culture amount, batch size, temperature and a target rise or attenuation. Use the metric or imperial button, then verify the result against the dough or gravity reading in front of you.' },
    { type: 'stats', columns: 3, items: [{ value: '3', label: 'fermentation modes', icon: 'mdi:flask-outline' }, { value: 'Q10', label: 'temperature factor', icon: 'mdi:thermometer' }, { value: 'range', label: 'result format', icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: 'The inputs that move the window', level: 3 },
    { type: 'table', headers: ['Input', 'Bread and sourdough', 'Beer'], rows: [['Batch size', 'Flour in grams', 'Wort in litres'], ['Culture amount', 'Yeast or starter in grams', 'Dry yeast in grams'], ['Finish line', 'Dough volume multiplier', 'Target attenuation'], ['Result check', 'Volume, elasticity and feel', 'Stable gravity readings']] },
    { type: 'title', text: 'Why the result is a range', level: 3 },
    { type: 'paragraph', html: 'Two batches with the same nominal recipe can move at different speeds. Temperature may cycle, cultures may have different vitality, and dough structure or wort gravity may change the amount of work required. The range expands when the inputs leave the reference profile so that the interface communicates uncertainty instead of hiding it.' },
    { type: 'tip', title: 'Use the target as a visual cue', html: 'For dough, look for the chosen volume increase and a supple, aerated structure. For beer, look for a stable gravity measurement rather than bubbles alone. The timer is a planning assistant, not the finish signal.' },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
