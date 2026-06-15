import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Vochtcalculator Voedseldrogers';
const description = 'Schat gewichtsverlies, waterverdamping en droogtijd in op basis van vochtgehalte.';

const faq = [
  {
    question: 'Hoe bereken je het gewichtsverlies bij drogen?',
    answer: 'Het gewichtsverlies wordt berekend door vaste stoffen te scheiden van het water. Omdat vaste stoffen constant blijven, is het eindgewicht gelijk aan vaste stoffen gedeeld door 1 minus het gewenste doelvochtpercentage.'
  }
];

const howTo = [
  {
    name: 'Selecteer een ingrediënt preset of handmatige invoer',
    text: 'Kies een preset of pas de vochtigheid handmatig aan.'
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
  slug: 'vochtcalculator-voedseldrogers',
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  ui: {
    title: 'Vochtschatting Dehydrator',
    subtitle: 'Bereken gewichtsverlies en schat de droogtijd in',
    unitSystemLabel: 'Eenhedenstelsel',
    metricOption: 'Metrisch (g, °C)',
    imperialOption: 'Imperiaal (oz, °F)',
    ingredientLabel: 'Ingrediënt Preset',
    initialMoistureLabel: 'Anfangs Feuchtigkeit (%)',
    targetMoistureLabel: 'Doel Vochtigheid (%)',
    weightLabel: 'Anfangsgewicht',
    tempLabel: 'Droogtemperatuur',
    customOption: 'Aangepast / Handmatig',
    beefOption: 'Beef Jerky',
    watermelonOption: 'Watermeloen Snaps',
    appleOption: 'Appelringen',
    mangoOption: 'Mangoschijfjes',
    mushroomOption: 'Paddenstoelen',
    targetWeightLabel: 'Eindgewicht',
    waterEvaporatedLabel: 'Verdampt Water',
    estimatedHoursLabel: 'Geschatte Droogtijd',
    shrinkageLabel: 'Gewichtsverlies'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Bereken Gewichtskrimp en Droogtijd bij Voedsel Drogen',
      level: 2
    },
    {
      type: 'paragraph',
      html: "Voorspel eindgewichten en verdampingssnelheden om droogschema's te optimaliseren."
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
