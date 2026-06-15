import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Fuktkalkylator för Mattork';
const description = 'Uppskatta viktminskning, vattenavdunstning och torktid i din mattork.';

const faq = [
  {
    question: 'Hur beräknas viktminskningen vid torkning?',
    answer: 'Viktminskningen beräknas genom att separera torrsubstans från vatten. Eftersom torrsubstansen förblir konstant beräknas slutvikten som torrsubstansen delat med 1 minus målfuktighetsprocenten.'
  }
];

const howTo = [
  {
    name: 'Välj en ingrediens eller manuell fuktighet',
    text: 'Välj en förinställning eller ställ in fuktigheten manuellt.'
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'fuktkalkylator-for-mattork',
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  ui: {
    title: 'Fuktkalkylator',
    subtitle: 'Beräkna viktminskning och uppskatta torktid',
    unitSystemLabel: 'Enhetssystem',
    metricOption: 'Metrisk (g, °C)',
    imperialOption: 'Imperial (oz, °F)',
    ingredientLabel: 'Ingrediens',
    initialMoistureLabel: 'Ursprunglig Fukthalt (%)',
    targetMoistureLabel: 'Målfukthalt (%)',
    weightLabel: 'Ursprunglig Vikt',
    tempLabel: 'Torkningstemperatur',
    customOption: 'Anpassad / Manuell',
    beefOption: 'Beef Jerky',
    watermelonOption: 'Torkad Vattenmelon',
    appleOption: 'Äppelringar',
    mangoOption: 'Mangoskivor',
    mushroomOption: 'Svampar',
    targetWeightLabel: 'Målvikt',
    waterEvaporatedLabel: 'Evaporerat Vatten',
    estimatedHoursLabel: 'Uppskattad Torktid',
    shrinkageLabel: 'Viktminskning'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Beräkna Fukthalt och Viktminskning vid Torkning',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Förutse slutvikt och optimera torktider för dina ingredienser.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
