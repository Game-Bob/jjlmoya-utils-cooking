import type { ToolLocaleContent } from '../../../types';
import type { FoodSafetyCheckerLocaleContent } from '../entry';
import { bibliography } from '../bibliography';

const title = 'Food Safe Temperature Checker';
const description = 'Check a measured food temperature against documented minimum internal cooking temperatures. Convert Celsius or Fahrenheit instantly and see whether you need to keep cooking, rest, or recheck.';

const faq = [
  {
    question: 'What does this food temperature checker tell me?',
    answer: 'It compares your thermometer reading with a documented minimum internal temperature for the selected food category. It returns below target, meets target, or above target, plus the remaining difference and any listed rest time.',
  },
  {
    question: 'Is reaching the target temperature a complete safety guarantee?',
    answer: 'No. These are minimum internal cooking temperatures for food handled correctly. They do not account for contamination before cooking, unsafe storage, inaccurate thermometers, or every food-specific risk. Follow the source guidance and your local authority requirements.',
  },
  {
    question: 'Where should I place the food thermometer?',
    answer: 'Place the probe in the thickest part of the food, avoiding bone, fat, gristle, the pan, or the cooking surface. For thin foods such as burgers, insert the probe from the side into the center.',
  },
  {
    question: 'Why do some foods require a rest time?',
    answer: 'The documented minimum for whole cuts of beef, pork, lamb, veal, and similar meats includes a three-minute rest. The rest time is part of the recommendation and should not be silently removed when checking the result.',
  },
];

const howTo = [
  {
    name: 'Choose the food category',
    text: 'Select the category that best matches what you are cooking. The checker loads the local minimum internal temperature from the documented reference dataset.',
  },
  {
    name: 'Enter the thermometer reading',
    text: 'Type the temperature measured at the thickest part of the food. Use the Celsius or Fahrenheit toggle to match your thermometer.',
  },
  {
    name: 'Read the decision',
    text: 'Below target means keep cooking or check again. Meets target means the reading has reached the documented minimum. Above target means it is over the minimum, while doneness remains a separate preference.',
  },
  {
    name: 'Apply the rest note',
    text: 'If the selected category has a documented rest time, include it before carving or eating. Follow the source guidance for handling, storage, and thermometer calibration.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
  inLanguage: 'en',
};

const ui: FoodSafetyCheckerLocaleContent['ui'] = {
  title,
  eyebrow: 'THERMOMETER CHECK',
  subtitle: 'Turn a reading into a clear next step for the food on your board.',
  foodLabel: 'Food category',
  temperatureLabel: 'Measured core temperature',
  unitCelsius: 'Celsius (°C)',
  unitFahrenheit: 'Fahrenheit (°F)',
  resultTitle: 'Your reading',
  measuredLabel: 'Measured',
  targetLabel: 'Minimum target',
  differenceLabel: 'Difference',
  statusBelow: 'Below minimum',
  statusMeets: 'Minimum reached',
  statusAbove: 'Above minimum',
  belowDescription: 'Keep cooking or check another spot. The reading has not reached the documented minimum for this category.',
  meetsDescription: 'The reading has reached the documented minimum. Apply any rest-time note and keep following safe handling guidance.',
  aboveDescription: 'The reading is above the documented minimum. Safety and personal doneness are separate decisions.',
  restLabel: 'Rest after reaching target',
  noRestNeeded: 'No rest listed',
  sourceLabel: 'Reference',
  sourceName: 'FoodSafety.gov chart',
  placementTip: 'Measure the thickest part, avoid bone and pan contact, and use a calibrated thermometer.',
  noteTitle: 'Safety boundary',
  noteText: 'This checker compares temperature only. It cannot verify storage, handling, thermometer accuracy, or every food-specific risk.',
  poultryOption: 'Poultry and stuffing',
  groundMeatOption: 'Ground meat and sausage',
  redMeatCutsOption: 'Beef, bison, veal, goat and lamb cuts',
  porkCutsOption: 'Pork steaks, roasts and chops',
  rawHamOption: 'Raw ham',
  precookedHamOption: 'Precooked ham (reheating)',
  rabbitVenisonOption: 'Rabbit and venison',
  fishOption: 'Fish',
  eggDishesOption: 'Egg dishes',
  casserolesOption: 'Casseroles',
  leftoversOption: 'Leftovers and reheated food',
  poultryNote: 'Minimum: 74°C / 165°F for all poultry and stuffing.',
  groundMeatNote: 'Minimum: 71°C / 160°F for ground meat and sausage.',
  redMeatCutsNote: 'Minimum: 63°C / 145°F, followed by a 3-minute rest.',
  porkCutsNote: 'Minimum: 63°C / 145°F, followed by a 3-minute rest for pork cuts.',
  rawHamNote: 'Minimum: 63°C / 145°F, followed by a 3-minute rest for raw ham.',
  precookedHamNote: 'Reheat precooked ham to a minimum of 74°C / 165°F.',
  rabbitVenisonNote: 'Minimum: 71°C / 160°F for rabbit and venison.',
  fishNote: 'Minimum: 63°C / 145°F for fish fillets and whole fish.',
  eggDishesNote: 'Minimum: 71°C / 160°F for egg dishes such as quiche or frittata.',
  casserolesNote: 'Minimum: 74°C / 165°F for meat and meatless casseroles.',
  leftoversNote: 'Reheat leftovers to a minimum of 74°C / 165°F.',
};

const seo = [
  { type: 'title' as const, text: 'How to read a food thermometer', level: 2 as const },
  { type: 'paragraph' as const, html: 'A food thermometer answers a narrow but important question: has the center of this food reached the documented minimum internal temperature? Select a food category, enter your measured core temperature, and the checker compares the two values locally in your browser.' },
  { type: 'title' as const, text: 'Minimum temperature is not the same as doneness', level: 3 as const },
  { type: 'paragraph' as const, html: 'A minimum target is a safety reference, not a promise about texture or preference. A steak can be above its minimum and still be more or less done than you prefer. The result helps with the safety threshold; it does not replace a recipe, a validated process, or local food-safety rules.' },
  { type: 'table' as const, headers: ['Food category', 'Minimum internal temperature', 'Rest note'], rows: [
    ['Poultry and stuffing', '74°C / 165°F', 'None listed'],
    ['Ground meat and sausage', '71°C / 160°F', 'None listed'],
    ['Beef, bison, veal, goat and lamb cuts', '63°C / 145°F', '3 minutes'],
    ['Pork steaks, roasts and chops', '63°C / 145°F', '3 minutes'],
    ['Raw ham', '63°C / 145°F', '3 minutes'],
    ['Precooked ham (reheating)', '74°C / 165°F', 'None listed'],
    ['Rabbit and venison', '71°C / 160°F', 'None listed'],
    ['Fish', '63°C / 145°F', 'None listed'],
    ['Egg dishes', '71°C / 160°F', 'None listed'],
    ['Casseroles', '74°C / 165°F', 'None listed'],
    ['Leftovers', '74°C / 165°F', 'None listed'],
  ] },
  { type: 'title' as const, text: 'Measure the center, not the surface', level: 3 as const },
  { type: 'paragraph' as const, html: 'Insert the probe into the thickest part and avoid bone, fat, gristle, the pan, or the cooking surface. Thin foods need a side entry so the tip reaches the center. Take more than one reading when the food has an uneven shape or different thicknesses.' },
  { type: 'diagnostic' as const, variant: 'warning' as const, title: 'A temperature check has limits', icon: 'mdi:alert-outline', badge: 'Important', html: 'Reaching a minimum temperature does not correct unsafe storage, cross-contamination, an inaccurate thermometer, or toxins produced before cooking. Use the reference links below for the complete handling guidance.' },
  { type: 'title' as const, text: 'Why the checker works offline', level: 3 as const },
  { type: 'paragraph' as const, html: 'The food categories and minimums are bundled as a small versioned dataset. Unit conversion, comparison, status, difference, and rest note all run in the browser without an API, account, or live data request.' },
];

export const content: ToolLocaleContent<FoodSafetyCheckerLocaleContent['ui']> = {
  slug: 'food-safe-temperature-checker',
  title,
  description,
  ui,
  seo,
  faqTitle: 'Food temperature questions',
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
};
