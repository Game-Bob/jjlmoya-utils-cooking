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
  {
    name: 'Richtige Garzeit anwenden',
    text: 'Kochen Sie die Butter-Mehl-Mischung auf die angegebene Stufe (Weiß, Blond oder Dunkel).',
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
      type: "title",
      text: "Meisteranleitung für Mehlschwitze-Berechnung und Grundsaucen",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Eine <strong>Mehlschwitze (Roux)</strong> ist das strukturelle Fundament der klassischen französischen Küche. Das präzise Verhältnis von Mehl, Butter und Flüssigkeit entscheidet über eine samtene Sauce.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "1:1",
          label: "Verhältnis Mehl:Fett",
          icon: "mdi:scale-balance",
        },
        {
          value: "3 Min.",
          label: "Zeit weiße Roux",
          icon: "mdi:timer-sand",
        },
        {
          value: "100g/L",
          label: "Rate dicke Saucen",
          icon: "mdi:waves",
        },
        {
          value: "15 Min.",
          label: "Zeit dunkle Roux",
          icon: "mdi:fire",
        },
      ],
    },
    {
      type: "title",
      text: "Röststufen und Bindekraft",
      level: 3,
    },
    {
      type: "comparative",
      columns: 3,
      items: [
        {
          title: "Weiße Mehlschwitze",
          icon: "mdi:flask-round-bottom-outline",
          description: "2-3 Minuten gekocht. Stärkste Bindekraft.",
          points: [
            "Basis für Béchamel",
            "Maximale Bindekraft",
            "Neutraler Milchgeschmack",
            "Keine sichtbare Färbung",
          ],
        },
        {
          title: "Blonde Mehlschwitze",
          icon: "mdi:gold",
          description: "5-8 Minuten gekocht bis zu einem hellen Goldton.",
          highlight: true,
          points: [
            "Basis für Velouté",
            "Mittlere Bindekraft",
            "Leicht nussiges Aroma",
            "Ideal für helle Fonds",
          ],
        },
        {
          title: "Dunkle Mehlschwitze",
          icon: "mdi:coffee",
          description: "15-20 Minuten gekocht. Tiefes Röstaroma.",
          points: [
            "Basis für Espagnole",
            "Geringere Bindekraft (-30%)",
            "Komplexer Röstgeschmack",
            "Flüssigere Konsistenz",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Mehlschwitze-Gewicht pro Liter nach Konsistenz",
      level: 3,
    },
    {
      type: "table",
      headers: ["Gewünschte Konsistenz", "Butter (g)", "Mehl (g)", "Flüssigkeit (L)"],
      rows: [
        ["Leichte Suppe / Creme", "25g", "25g", "1 Liter"],
        ["Standard Sauce", "50g", "50g", "1 Liter"],
        ["Bindesauce (Gratins)", "70g", "70g", "1 Liter"],
        ["Kroketten-Teig", "125g", "125g", "1 Liter"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Klumpt die Sauce oder schmeckt sie nach Mehl?",
      html: "Wenn die Sauce klumpt, wurde heiße Flüssigkeit zu heißer Roux gegeben. Immer den Thermoschock anwenden (kalte Flüssigkeit auf heiße Roux). Bei Mehlgeschmack die Garzeit zu Beginn verlängern.",
    },
    {
      type: "title",
      text: "Glossar der Saucen-Technologie",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Dextrinierung",
          definition:
            "Der thermische Abbau von Stärke in kurze Ketten. Erhöht das Aroma, schwächt die Bindung.",
        },
        {
          term: "Verkleisterung",
          definition:
            "Der Prozess, bei dem Stärkekörner Flüssigkeit aufnehmen und quellen.",
        },
        {
          term: "Beurre Manié",
          definition:
            "Kaltes Gemisch aus Mehl und Butter für schnelle Korrekturen am Ende.",
        },
        {
          term: "Grundsaucen",
          definition:
            "Escoffiers 5 Basissaucen (Béchamel, Velouté, Espagnole, Hollandaise und Tomate).",
        },
      ],
    },
    {
      type: "tip",
      title: "Der kalte Butter Trick (Monter au Beurre)",
      html: "Am Ende ein kleines Stück kalte Butter einrühren. Dies sorgt für einen seidenen Glanz.",
    },
    {
      type: "paragraph",
      html: "Unser Mehlschwitze-Rechner sorgt für die perfekte technische Konsistenz.",
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
