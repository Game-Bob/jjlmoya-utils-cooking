import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Dörrautomat Feuchtigkeitsrechner';
const description = 'Berechnen Sie Gewichtsverlust, Wasserverdampfung und Trocknungszeit für Ihre Lebensmittel.';

const faq = [
  {
    question: 'Wie wird der Gewichtsverlust beim Dörren berechnet?',
    answer: 'Der Gewichtsverlust wird berechnet, indem der feste Anteil vom Wassergehalt getrennt wird. Da der Feststoffanteil konstant bleibt, entspricht das Endgewicht dem Feststoffanteil geteilt durch 1 minus dem Feuchtigkeitsziel.'
  }
];

const howTo = [
  {
    name: 'Wählen Sie eine Zutat oder benutzerdefinierte Feuchtigkeit',
    text: 'Wählen Sie eine Voreinstellung oder passen Sie die Feuchtigkeit manuell an.'
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
  slug: 'doerrautomat-feuchtigkeitsrechner',
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    title: 'Feuchtigkeitsrechner',
    subtitle: 'Berechnen Sie Schrumpfung und Trocknungszeit',
    unitSystemLabel: 'Einheitensystem',
    metricOption: 'Metrisch (g, °C)',
    imperialOption: 'Imperial (oz, °F)',
    ingredientLabel: 'Zutat-Voreinstellung',
    initialMoistureLabel: 'Anfangsfeuchtigkeit (%)',
    targetMoistureLabel: 'Ziel-Feuchtigkeit (%)',
    weightLabel: 'Anfangsgewicht',
    tempLabel: 'Dörrtemperatur',
    customOption: 'Benutzerdefiniert',
    beefOption: 'Beef Jerky',
    watermelonOption: 'Wassermelonen-Snaps',
    appleOption: 'Apfelringe',
    mangoOption: 'Mangoscheiben',
    mushroomOption: 'Pilze',
    targetWeightLabel: 'Zielgewicht',
    waterEvaporatedLabel: 'Verdampftes Wasser',
    estimatedHoursLabel: 'Geschätzte Dörrzeit',
    shrinkageLabel: 'Gewichtsschrumpfung'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Berechnen Sie Feuchtigkeit und Schrumpfung beim Dörren',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Optimieren Sie Ihre Trocknungschargen mit präzisen Feuchtigkeits- und Gewichtsschätzungen.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
