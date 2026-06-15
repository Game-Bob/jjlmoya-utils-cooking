import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Wilgotności Dehydratora';
const description = 'Oszacuj utratę wagi, parowanie wody i czas suszenia żywności w dehydratorze.';

const faq = [
  {
    question: 'Jak oblicza się utratę wagi podczas dehydratacji?',
    answer: 'Utratę wagi oblicza się, rozdzielając suchą masę od zawartości wody. Ponieważ sucha masa pozostaje stała, końcowa waga to sucha masa podzielona przez 1 minus docelowy procent wilgotności.'
  }
];

const howTo = [
  {
    name: 'Wybierz gotowe ustawienie składnika lub wilgotność ręczną',
    text: 'Wybierz składnik z listy lub ręcznie ustaw wilgotność początkową.'
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
  slug: 'kalkulator-wilgotnosci-dehydratora',
  title,
  description,
  faqTitle: 'Często Zadawane Pytania',
  ui: {
    title: 'Kalkulator Wilgotności',
    subtitle: 'Oblicz kurczenie się wagi i szacowany czas suszenia',
    unitSystemLabel: 'Układ Jednostek',
    metricOption: 'Metryczny (g, °C)',
    imperialOption: 'Imperialny (oz, °F)',
    ingredientLabel: 'Ustawienie Składnika',
    initialMoistureLabel: 'Wilgotność Początkowa (%)',
    targetMoistureLabel: 'Wilgotność Docelowa (%)',
    weightLabel: 'Waga Początkowa',
    tempLabel: 'Temperatura Suszenia',
    customOption: 'Niestandardowe / Ręcznie',
    beefOption: 'Suszona Wołowina',
    watermelonOption: 'Suszony Arbuz',
    appleOption: 'Krążki Jabłek',
    mangoOption: 'Plastry Mango',
    mushroomOption: 'Grzyby',
    targetWeightLabel: 'Waga Docelowa',
    waterEvaporatedLabel: 'Odparowana Woda',
    estimatedHoursLabel: 'Szacowany Czas Suszenia',
    shrinkageLabel: 'Kurczenie się Wagi'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Oblicz Utratę Wagi i Czas Suszenia w Dehydratorze',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Przewiduj wagę końcową i optymalizuj czas suszenia żywności.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
