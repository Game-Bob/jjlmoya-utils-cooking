import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Meisterleitfaden für Roux und Muttersaucen";
const description = "Interaktiver Roux-Rechner. Lernen Sie Bechamel, Velouté und Espagnole mit exakten Proportionen zuzubereiten. Die Basis der klassischen französischen Küche.";
const faq = [
    {
      question: 'Was ist eine Mehlschwitze (Roux) und wofür wird sie verwendet?',
      answer: 'Es ist eine Mischung aus Fett (meist Butter) und Mehl, die bei niedriger Hitze gekocht wird. Sie dient als Basis-Bindemittel für die französischen Muttersaucen wie Bechamel oder Velouté.',
    },
    {
      question: 'Was ist das ideale Verhältnis für eine Roux?',
      answer: 'Das Standardverhältnis ist 1:1 nach Gewicht. Zum Beispiel 50g Butter und 50g Mehl. Diese Mischung kann etwa 1 Liter Flüssigkeit binden, je nach gewünschter Konsistenz.',
    },
    {
      question: 'Was ist der Unterschied zwischen den Roux-Arten?',
      answer: 'Weiße Roux wird 2-3 Min. gekocht (Bechamel). Blonde Roux 5-8 Min. (Velouté). Dunkle Roux (Brown) bis zu 15-20 Min. (Espagnole). Je dunkler, desto nussiger der Geschmack, aber desto geringer die Bindekraft.',
    },
    {
      question: 'Wie vermeide ich Klümpchen?',
      answer: 'Die goldene Regel ist der Temperaturgegensatz: kalte Flüssigkeit in heiße Roux oder heiße Flüssigkeit in kalte Roux. Geben Sie die Flüssigkeit nach und nach hinzu und rühren Sie ständig mit einem Schneebesen.',
    },
  ];
const howTo = [
  {
    name: 'Flüssigkeitsart wählen',
    text: 'Wählen Sie zwischen Milch (Bechamel), hellem Fond (Velouté), dunklem Fond (Espagnole) oder Tomate.',
  },
  {
    name: 'Konsistenz festlegen',
    text: 'Von Suppe bis hin zu festem Teig für Kroketten. Der Rechner passt das benötigte Roux-Verhältnis automatisch an.',
  },
  {
    name: 'Flüssigkeitsmenge eingeben',
    text: 'Geben Sie an, wie viel ml Flüssigkeit Sie binden möchten. Der Rechner nennt Ihnen die exakte Menge an Butter und Mehl.',
  },
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
  slug: 'roux-leitfaden',
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Meisterleitfaden für die Berechnung von Roux und Saucen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die <strong>Mehlschwitze</strong> (Roux) ist die strukturelle Basis der klassischen französischen Küche. Das Verständnis des Verhältnisses zwischen Mehl, Butter und Flüssigkeit ist der Schlüssel zu einer samtigen Sauce.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:1',
          label: 'Verhältnis Mehl:Fett',
          icon: 'mdi:scale-balance',
        },
        {
          value: '3 Min.',
          label: 'Zeit weiße Roux',
          icon: 'mdi:timer-sand',
        },
        {
          value: '100g/L',
          label: 'Rate dicke Saucen',
          icon: 'mdi:waves',
        },
        {
          value: '15 Min.',
          label: 'Zeit dunkle Roux',
          icon: 'mdi:fire',
        },
      ],
    },
  ],
  ui: {
    baseLiquid: 'Basis-Flüssigkeit',
    volume: 'Volumen',
    ml: 'ml',
    liquidType: 'Art der Flüssigkeit',
    milk: 'Milch',
    lightStock: 'Heller Fond',
    darkStock: 'Dunkler Fond',
    tomato: 'Tomate',
    sauceTexture: 'Saucen-Konsistenz',
    soup: 'Suppe / Creme',
    normalSauce: 'Normale Sauce',
    thick: 'Dick / Füllung',
    croquette: 'Krokette / Teig',
    rouxMix: 'Mehlschwitze-Mischung',
    butter: 'Butter',
    flour: 'Mehl',
    instructions: 'Anleitung',
    sauceName: 'Saucenart',
    ratio: 'Verhältnis',
    chefTip: 'Chef-Tipp',
    white: 'Weiß',
    blond: 'Blond',
    brown: 'Dunkel',
    beurreManied: 'Beurre Manié (Zum Nachjustieren)',
    recipeBechamel: "Bechamel",
    recipeVeloute: "Velouté",
    recipeEspagnole: "Espagnole",
    recipeTomato: "Tomatensauce",
    tipBechamel: "Kalte Milch verwenden. Nach und nach hinzufügen oder kräftig rühren.",
    tipVeloute: "Geflügel- oder Fischfond verwenden. Roux sollte nach Gebäck riechen.",
    tipEspagnole: "Roux sollte schokoladenfarben sein, aber nicht verbrannt.",
    tipTomato: "Die Mehlschwitze gibt dem Tomatensaucen-Körper Geschmeidigkeit.",
    rouxWhiteLabel: "Weiße Mehlschwitze",
    rouxBlondLabel: "Blonde Mehlschwitze",
    rouxBrownLabel: "Dunkle Mehlschwitze",
    descWhite: "Kochen, bis der Geruch von rohem Mehl verschwindet. Keine Farbe.",
    descBlond: "Eine goldene Farbe und ein nussiges Aroma anstreben.",
    descBrown: "Sehr schwache Hitze. Schokoladenfarbe. Benötigt 10% mehr Gewicht.",
    timeWhite: "2-3 Min.",
    timeBlond: "5-8 Min.",
    timeBrown: "15-20 Min.",
  },
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
