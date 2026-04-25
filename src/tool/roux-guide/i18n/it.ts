import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Guida Maestra al Roux e alle Salse Madri";
const description = "Calcolatore interattivo di Roux. Impara a creare Besciamella, Vellutata ed Espagnole con proporzioni esatte. La base dell'alta cucina francese.";
const faq = [
    {
      question: "Cos'è un Roux e a cosa serve?",
      answer: "È una miscela di grasso (solitamente burro) e farina cotta a fuoco lento. Viene utilizzata come agente addensante di base per le salse madri francesi come la Besciamella o la Vellutata.",
    },
    {
      question: "Qual è la proporzione ideale per un Roux?",
      answer: "La proporzione standard è 1:1 in peso. Ad esempio, 50g di burro e 50g di farina. Questa miscela può addensare circa 1 litro di liquido a seconda della densità desiderata.",
    },
    {
      question: "Qual è la differenza tra i tipi di Roux?",
      answer: "Il Roux bianco cuoce 2-3 min (Besciamella). Il biondo 5-8 min (Vellutata). Lo scuro fino a 15-20 min (Salsa Spagnola). Più colore significa più sapore di nocciola ma meno capacità addensante.",
    },
    {
      question: "Come evitare i grumi?",
      answer: "La regola d'oro è la temperatura opposta: liquido freddo su roux caldo, o liquido caldo su roux freddo. Aggiungi il liquido poco alla volta e mescola costantemente con una frusta.",
    },
  ];
const howTo = [
  {
    name: "Seleziona il tipo di liquido",
    text: "Scegli tra latte (Besciamella), fondo chiaro (Vellutata), fondo scuro (Espagnole) o pomodoro.",
  },
  {
    name: "Definisci lo spessore desiderato",
    text: "Dalla zuppa/crema fino all'impasto per crocchette. Il calcolatore regolerà automaticamente il rapporto di roux necessario.",
  },
  {
    name: "Inserisci il volume del liquido",
    text: "Specifica quanti ml di liquido devi addensare. Il calcolatore ti dirà esattamente quanto burro e farina usare.",
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
  slug: 'guida-roux',
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq,  howTo,
  seo: [
    {
      type: 'title',
      text: 'Guida Maestro per il Calcolo di Roux e Salse Madri',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il <strong>roux</strong> è la base strutturale della cucina classica francese. Capire il rapporto tra farina, burro e liquido è la differenza tra una salsa vellutata e un liquido con grumi.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:1',
          label: 'Proporzione Farina:Grasso',
          icon: 'mdi:scale-balance',
        },
        {
          value: '3 min',
          label: 'Tempo Roux Bianco',
          icon: 'mdi:timer-sand',
        },
        {
          value: '100g/L',
          label: 'Ratio Salse Spesse',
          icon: 'mdi:waves',
        },
        {
          value: '15 min',
          label: 'Tempo Roux Scuro',
          icon: 'mdi:fire',
        },
      ],
    },
  ],
  ui: {
    baseLiquid: 'Liquido Base',
    volume: 'Volume',
    ml: 'ml',
    liquidType: 'Tipo di Liquido',
    milk: 'Latte',
    lightStock: 'Fondo Chiaro',
    darkStock: 'Fondo Scuro',
    tomato: 'Pomodoro',
    sauceTexture: 'Consistenza della Salsa',
    soup: 'Zuppa / Crema',
    normalSauce: 'Salsa Normale',
    thick: 'Densa / Ripieno',
    croquette: 'Crocchetta / Impasto',
    rouxMix: 'Miscela Roux',
    butter: 'Burro',
    flour: 'Farina',
    instructions: 'Istruzioni',
    sauceName: 'Tipo di Salsa',
    ratio: 'Rapporto',
    chefTip: 'Tip dello Chef',
    white: 'Bianco',
    blond: 'Biondo',
    brown: 'Scuro',
    beurreManied: 'Beurre Manié (Per correzioni finali)',
    recipeBechamel: "Besciamella",
    recipeVeloute: "Vellutata",
    recipeEspagnole: "Espagnole",
    recipeTomato: "Salsa di Pomodoro",
    tipBechamel: "Usa latte freddo. Aggiungilo gradualmente o tutto in una volta se mescoli forte.",
    tipVeloute: "Usa fondo di pollo o pesce. Il roux deve profumare di biscotto.",
    tipEspagnole: "Il roux deve avere il colore del cioccolato, senza bruciare.",
    tipTomato: "Il roux aiuterà a dare corpo e morbidezza alla consistenza finale del pomodoro.",
    rouxWhiteLabel: "Roux Bianco",
    rouxBlondLabel: "Roux Biondo",
    rouxBrownLabel: "Roux Scuro",
    descWhite: "Cuoci solo finché non perde l'odore di farina cruda. Senza colore.",
    descBlond: "Cerca un colore dorato pallido e un profumo di nocciola.",
    descBrown: "Fuoco molto dolce. Colore cioccolato. Richiede il 10% di peso in più.",
    timeWhite: "2-3 min",
    timeBlond: "5-8 min",
    timeBrown: "15-20 min",
  },
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
