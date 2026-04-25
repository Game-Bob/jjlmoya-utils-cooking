import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Küchen Umrechner: Cups in Gramm und Temperaturen";
const description = "Rechnen Sie Cups, Esslöffel und Fahrenheit in das metrische System um. Der Kompass, um US-Rezepte mit professioneller Präzision zu entschlüsseln.";
const faq = [
  {
    question: 'Was ist der Unterschied zwischen 1 Cup und 250 ml?',
    answer: '1 US-Cup entspricht 236,588 ml, nicht 250 ml. Für praktische Zwecke verwenden wir 240 ml. Obwohl dieser Unterschied von 4% klein erscheint, kann er empfindliche Rezepte wie Macarons oder Mousses beeinträchtigen.',
  },
  {
    question: 'Warum wiegt Mehl nicht immer gleich viel?',
    answer: 'Weil Mehl im Laufe der Zeit und durch den Transport komprimiert wird. Frisch gesiebtes Mehl wiegt weniger als Mehl, das lange in der Vorratskammer stand. Deshalb wiegen professionelle Bäcker immer, anstatt das Volumen zu messen.',
  },
  {
    question: 'Was ist der Unterschied zwischen EL (Tbsp) und TL (tsp)?',
    answer: '1 Tablespoon (Tbsp) = 15 ml. 1 Teaspoon (tsp) = 5 ml. Ein Esslöffel entspricht 3 Teelöffeln. In Backrezepten sind Fehler bei Gewürzen (die in TL gemessen werden) häufig.',
  },
  {
    question: 'Ist ein US-Cup dasselbe wie ein Imperial-Cup?',
    answer: 'Nein. 1 US-Cup = 236 ml. 1 Imperial-Cup (UK) = 284 ml. Das ist ein Unterschied von 20%. Die meisten US-Blogs verwenden US-Cups. Wenn das Rezept es nicht spezifiziert, gehen Sie von US-Cups aus.',
  },
  {
    question: 'Welcher Temperatur entspricht "Gas 4" im Ofen?',
    answer: 'Gas 4 = 180°C = 350°F. Dies ist die britische Skala. In der hiesigen Küche suchen wir den entsprechenden Wert an Ihrem Ofen: Einige verwenden Gasstufen, andere elektronische Gradanzeigen.',
  },
];
const howTo = [
  {
    name: 'Wählen Sie die Umrechnungsart',
    text: 'Wählen Sie zwischen Cups in Gramm, Teelöffel/Esslöffel in Gramm oder Fahrenheit in Celsius.',
  },
  {
    name: 'Wählen Sie die Zutat',
    text: 'Jedes Lebensmittel hat eine andere Dichte. Mehl, Zucker, Butter: Alle wiegen unterschiedlich viel.',
  },
  {
    name: 'Geben Sie die Menge ein',
    text: 'Geben Sie die Anzahl der Cups, Löffel oder Grad ein. Der Umrechner berechnet sofort den Gegenwert.',
  },
  {
    name: 'Passen Sie Ihr Rezept an',
    text: 'Mit der exakten Umrechnung können Sie nun das US-Rezept mit professioneller Präzision nachkochen.',
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
  slug: 'amerikanische-kuechenmasse-umrechner',
  title: 'Küchen Umrechner: Cups in Gramm und Temperaturen',
  description: 'Rechnen Sie Cups, Esslöffel und Fahrenheit in das metrische System um. Der Kompass, um US-Rezepte mit professioneller Präzision zu entschlüsseln.',
  faqTitle: 'Häufig gestellte Fragen',
  ui: {
    copied: 'Kopiert',
    noHistory: 'Kein Verlauf',
    load: 'Laden',
    delete: 'Löschen',
    tabCups: 'Cups in Gramm',
    tabSpoons: 'Löffel in Gramm',
    tabTemperatures: 'Temperaturen',
    tabCupsAriaLabel: 'Cups in Gramm',
    tabSpoonsAriaLabel: 'Löffel in Gramm',
    tabTempsAriaLabel: 'Ofentemperaturen',
    stepSelectIngredient: 'Zutat wählen',
    stepHowManyCups: 'Wie viele Cups?',
    stepSelectMeasure: 'Maßeinheit wählen',
    stepQuantity: 'Menge',
    stepOvenConversion: 'Ofen-Umrechnung',
    stepFrequentTemps: 'Häufige Rezepttemperaturen',
    cupFlour: 'Mehl',
    cupFlourSub: '120g / Cup',
    cupWhiteSugar: 'Weißer Zucker',
    cupWhiteSugarSub: '200g / Cup',
    cupBrownSugar: 'Brauner Zucker',
    cupBrownSugarSub: '220g / Cup',
    cupPowderSugar: 'Puderzucker',
    cupPowderSugarSub: '115g / Cup',
    cupButter: 'Butter',
    cupButterSub: '227g / Cup',
    cupCocoa: 'Kakaopulver',
    cupCocoaSub: '85g / Cup',
    cupLiquids: 'Flüssigkeiten',
    cupLiquidsSub: '240g / Cup',
    cupOats: 'Haferflocken',
    cupOatsSub: '90g / Cup',
    cupFlourAriaLabel: 'Mehl',
    cupWhiteSugarAriaLabel: 'Weißer Zucker',
    cupBrownSugarAriaLabel: 'Brauner Zucker',
    cupPowderSugarAriaLabel: 'Puderzucker',
    cupButterAriaLabel: 'Butter',
    cupCocoaAriaLabel: 'Kakao',
    cupLiquidsAriaLabel: 'Flüssigkeit',
    cupOatsAriaLabel: 'Haferflocken',
    stepperMinus: 'Abziehen',
    stepperPlus: 'Hinzufügen',
    cupsAmountLabel: 'Anzahl der Cups',
    spoonQuantityLabel: 'Menge',
    cupQuick1_4: '1/4 Cup',
    cupQuick1_3: '1/3 Cup',
    cupQuick1_2: '1/2 Cup',
    cupQuick1: '1 Cup',
    unitGrams: 'Gramm',
    unitGramsML: 'Gramm / Milliliter',
    spoonMeasureLabel: 'Maßeinheit wählen',
    spoonTablespoon: 'Esslöffel (EL/Tbsp)',
    spoonTeaspoon: 'Teelöffel (TL/tsp)',
    spoonTablespoonAriaLabel: 'Esslöffel',
    spoonTeaspoonAriaLabel: 'Teelöffel',
    spoonSelectIngredient: 'Zutat wählen',
    spoonLeavening: 'Triebmittel',
    spoonLeaveningSub: 'Backpulver',
    spoonSalt: 'Feines Salz',
    spoonSaltSub: 'Mineralsalz',
    spoonSugar: 'Weißer Zucker',
    spoonSugarSub: 'Granuliert',
    spoonLiquids: 'Flüssigkeiten',
    spoonLiquidsSub: 'Wasser, Öl',
    spoonLeavingAriaLabel: 'Backpulver',
    spoonSaltAriaLabel: 'Salz',
    spoonSugarAriaLabel: 'Weißer Zucker',
    spoonLiquidsAriaLabel: 'Flüssigkeit',
    spoonQuick1_4: '1/4',
    spoonQuick1_2: '1/2',
    spoonQuick1: '1',
    spoonQuick2: '2',
    tempFahrenheit: 'Fahrenheit (°F)',
    tempCelsius: 'Celsius (°C)',
    tempFahrenheitAriaLabel: 'Fahrenheit',
    tempCelsiusAriaLabel: 'Celsius',
    tempPreset275: '275°F',
    tempPreset275Desc: '135°C - Trocknen',
    tempPreset275AriaLabel: 'Setze 275 Fahrenheit',
    tempPreset325: '325°F',
    tempPreset325Desc: '165°C - Dichte Kuchen',
    tempPreset325AriaLabel: 'Setze 325 Fahrenheit',
    tempPreset350: '350°F',
    tempPreset350Desc: '175°C - Standard-Gebäck',
    tempPreset350AriaLabel: 'Setze 350 Fahrenheit',
    tempPreset400: '400°F',
    tempPreset400Desc: '200°C - Brot / Torten',
    tempPreset400AriaLabel: 'Setze 400 Fahrenheit',
    tempPreset425: '425°F',
    tempPreset425Desc: '220°C - Pizza / Blätterteig',
    tempPreset425AriaLabel: 'Setze 425 Fahrenheit',
  },
  seo: [
    {
      type: 'title',
      text: 'Meisterleitfaden für Küchen Umrechnungen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Umrechnung von <strong>Cups in Gramm</strong> oder <strong>Fahrenheit in Celsius</strong> ist der erste Schritt, um internationale Rezepte zu meistern. Die US-Küche basiert auf Volumenmessungen, was bei trockenen Zutaten wie Mehl zu einer Variabilität von bis zu 25% führen kann.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '120g',
          label: '1 Cup Mehl',
          icon: 'mdi:grain',
        },
        {
          value: '227g',
          label: 'Stick Butter',
          icon: 'mdi:cube-outline',
        },
        {
          value: '175°C',
          label: 'Entspricht 350°F',
          icon: 'mdi:thermometer',
        },
        {
          value: '240ml',
          label: 'Volumen 1 Cup',
          icon: 'mdi:water-percent',
        },
      ],
    },
    {
      type: 'title',
      text: 'Kritische Unterschiede zwischen Volumen und Gewicht',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Volumenmessung (Cups)',
          icon: 'mdi:cup-water',
          description: 'Wird in US-Haushaltsrezepten verwendet. Misst den Platz, den eine Zutat einnimmt.',
          points: [
            'Stark abhängig von der Verdichtung',
            'Häufiger Fehler von 20-30% bei Mehl',
            'Inkonsistent zwischen verschiedenen Cup-Marken',
            'Erfordert vorheriges Sieben für mehr Präzision',
          ],
        },
        {
          title: 'Gewichtsmessung (Gramm)',
          icon: 'mdi:scale-balance',
          description: 'Der Standard für professionelle Konditorei und europäisches Backen. Absolute Präzision.',
          highlight: true,
          points: [
            'Immer auf +/- 1g genau',
            'Konsistente und wiederholbare Ergebnisse',
            'Weniger Abwasch (nur eine Schüssel)',
            'Erleichtert das mathematische Skalieren',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Entsprechungen gängiger Zutaten',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Zutat', '1 Cup (Volumen)', 'Gramm (Gewicht)', 'Dichte'],
      rows: [
        ['Weizenmehl', '1 Cup', '120g', 'Niedrig'],
        ['Weißer Zucker', '1 Cup', '200g', 'Mittel'],
        ['Brauner Zucker', '1 Cup', '220g (festgedrückt)', 'Hoch'],
        ['Butter', '1 Cup (2 Sticks)', '227g', 'Hoch'],
        ['Kakaopulver', '1 Cup', '85g', 'Sehr niedrig'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ist Ihr Kuchen trocken geworden?',
      html: 'Das häufigste Problem bei der Verwendung von Cups ist das "Eintauchen der Tasse" in den Mehlsack. Dies komprimiert das Pulver, sodass Sie bis zu 40g mehr Mehl pro Tasse hinzufügen könnten. Die Lösung ist, <strong>Mehl immer in Gramm umzurechnen</strong>, indem Sie unseren Rechner verwenden.',
    },
    {
      type: 'title',
      text: 'Glossar US-Einheiten',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cup (Tasse)',
          definition: 'Volumeneinheit, die etwa 240 ml entspricht. Die Basis der amerikanischen Küche.',
        },
        {
          term: 'Tbsp (Tablespoon)',
          definition: 'Esslöffel, entspricht 15 ml oder 3 Teelöffeln.',
        },
        {
          term: 'tsp (Teaspoon)',
          definition: 'Teelöffel, entspricht 5 ml. Entscheidend für Triebmittel und Salz.',
        },
        {
          term: 'Stick of Butter',
          definition: 'In den USA gängige Butterform, die genau 113,5 g wiegt (ein halber Cup).',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Der Löffel Trick',
      html: 'Wenn Sie keine Waage haben und Cups verwenden MÜSSEN, füllen Sie die Tasse locker mit einem Löffel und streichen Sie sie mit einem Messer glatt. Das ist viel präziser als das Eintauchen der Tasse.',
    },
    {
      type: 'paragraph',
      html: 'Die Verwendung eines professionellen Umrechners verwandelt den Frust über ausländische Rezepte in den Erfolg eines perfekt gebackenen Ergebnisses.',
    },
  ],
  faq: [
    {
      question: 'Was ist der Unterschied zwischen 1 Cup und 250 ml?',
      answer: '1 US-Cup entspricht 236,588 ml, nicht 250 ml. Für praktische Zwecke verwenden wir 240 ml. Obwohl dieser Unterschied von 4% klein erscheint, kann er empfindliche Rezepte wie Macarons oder Mousses beeinträchtigen.',
    },
    {
      question: 'Warum wiegt Mehl nicht immer gleich viel?',
      answer: 'Weil Mehl im Laufe der Zeit und durch den Transport komprimiert wird. Frisch gesiebtes Mehl wiegt weniger als Mehl, das lange in der Vorratskammer stand. Deshalb wiegen professionelle Bäcker immer, anstatt das Volumen zu messen.',
    },
    {
      question: 'Was ist der Unterschied zwischen EL (Tbsp) und TL (tsp)?',
      answer: '1 Tablespoon (Tbsp) = 15 ml. 1 Teaspoon (tsp) = 5 ml. Ein Esslöffel entspricht 3 Teelöffeln. In Backrezepten sind Fehler bei Gewürzen (die in TL gemessen werden) häufig.',
    },
    {
      question: 'Ist ein US-Cup dasselbe wie ein Imperial-Cup?',
      answer: 'Nein. 1 US-Cup = 236 ml. 1 Imperial-Cup (UK) = 284 ml. Das ist ein Unterschied von 20%. Die meisten US-Blogs verwenden US-Cups. Wenn das Rezept es nicht spezifiziert, gehen Sie von US-Cups aus.',
    },
    {
      question: 'Welcher Temperatur entspricht "Gas 4" im Ofen?',
      answer: 'Gas 4 = 180°C = 350°F. Dies ist die britische Skala. In der hiesigen Küche suchen wir den entsprechenden Wert an Ihrem Ofen: Einige verwenden Gasstufen, andere elektronische Gradanzeigen.',
    },
  ],
  howTo: [
    {
      name: 'Wählen Sie die Umrechnungsart',
      text: 'Wählen Sie zwischen Cups in Gramm, Teelöffel/Esslöffel in Gramm oder Fahrenheit in Celsius.',
    },
    {
      name: 'Wählen Sie die Zutat',
      text: 'Jedes Lebensmittel hat eine andere Dichte. Mehl, Zucker, Butter: Alle wiegen unterschiedlich viel.',
    },
    {
      name: 'Geben Sie die Menge ein',
      text: 'Geben Sie die Anzahl der Cups, Löffel oder Grad ein. Der Umrechner berechnet sofort den Gegenwert.',
    },
    {
      name: 'Passen Sie Ihr Rezept an',
      text: 'Mit der exakten Umrechnung können Sie nun das US-Rezept mit professioneller Präzision nachkochen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
