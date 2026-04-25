import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Cronometro Scientifico per le Uova";
const description = "Calcolatrice termodinamica per la cottura perfetta delle uova in base ad altitudine, temperatura e dimensioni.";
const faq = [
  {
    question: "Perché l'altitudine è importante quando si cuociono le uova?",
    answer: "L'acqua non bolle sempre a 100°C. A quote più elevate, la pressione atmosferica è inferiore e l'acqua bolle a una temperatura più bassa. Ad esempio, a 2000m bolle a circa 93°C, richiedendo più tempo rispetto al livello del mare. Sull'Everest è impossibile cuocere un uovo sodo.",
  },
  {
    question: "Uovo da frigorifero o a temperatura ambiente?",
    answer: "Un uovo da frigorifero (4°C) ha bisogno di più tempo rispetto a uno a temperatura ambiente (20°C). La differenza può essere di 2-3 minuti. Questa calcolatrice regola automaticamente il tempo in base alla temperatura iniziale.",
  },
  {
    question: "Perché appare un anello verde intorno al tuorlo?",
    answer: "È solfuro ferroso, risultato di una cottura eccessiva. Quando si superano gli 80°C per troppo tempo, lo zolfo dell'albume reagisce con il ferro del tuorlo. Non è tossico, ma indica che il tempo di cottura era troppo lungo. Usare un bagno di ghiaccio immediato per evitarlo.",
  },
  {
    question: "Come si pela facilmente un uovo?",
    answer: "Usa uova di 1-2 settimane (non fresche di giornata), inizia con acqua bollente (non fredda) e immergi in acqua ghiacciata immediatamente dopo la cottura. Lo shock termico contrae l'uovo e facilita la rimozione del guscio.",
  },
];
const howTo = [
  {
    name: "Seleziona la temperatura iniziale",
    text: "Scegli se l'uovo è da frigorifero (4°C) o a temperatura ambiente (20°C). Questa è la temperatura interna dell'uovo.",
  },
  {
    name: "Scegli le dimensioni dell'uovo",
    text: "S (piccolo, 53g), M (medio, 58g), L (grande, 63g), o XL (molto grande, 73g). Le dimensioni determinano quanto tempo impiega il calore per raggiungere il centro.",
  },
  {
    name: "Specifica l'altitudine",
    text: "Inserisci manualmente o usa la geolocalizzazione. Ogni 300m di altitudine, il punto di ebollizione dell'acqua scende di circa 1°C.",
  },
  {
    name: "Applica lo shock termico",
    text: "Quando il timer suona, immergi immediatamente in acqua e ghiaccio. Questo arresta la cottura e facilita la pelatura. Lo shock termico è critico per la precisione.",
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
  slug: "uova",
  title: "Cronometro Scientifico per le Uova",
  description: "Calcolatrice termodinamica per la cottura perfetta delle uova in base ad altitudine, temperatura e dimensioni.",
  faqTitle: "Domande Frequenti",
  ui: {
    parameters: "Parametri",
    initial_temperature: "Temperatura Iniziale",
    fridge: "Frigo",
    ambient: "Ambiente",
    egg_size: "Dimensioni Uovo",
    altitude: "Altitudine",
    use_location: "Usa la mia posizione",
    altitude_help: "L'acqua bolle a una temperatura inferiore ad altitudini più elevate, influenzando i tempi di cottura.",
    sea_level: "Mare",
    soft_cooked: "Alla Coque",
    soft_description: "Tuorlo liquido, albume bianco e morbido.",
    mollet: "Barzotto (Mollet)",
    mollet_description: "Tuorlo cremoso, albume sodo.",
    hard_cooked: "Sodo",
    hard_description: "Completamente cotto, tuorlo sodo.",
  },
  faq, howTo,
  seo: [
    {
      type: 'title',
      text: 'Guida per la Cottura Perfetta dell\'Uovo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cuocere un uovo è un esercizio di <strong>termodinamica applicata</strong>. La precisione della temperatura iniziale, le dimensioni dell\'uovo e l\'altitudine geografica determinano se otterrai un tuorlo setoso o un solido iper-cotto con l\'indesiderato anello verde.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '62°C',
          label: 'Coagulazione Albume',
          icon: 'mdi:egg-outline',
        },
        {
          value: '68°C',
          label: 'Coagulazione Tuorlo',
          icon: 'mdi:egg-fried',
        },
        {
          value: '-1°C',
          label: 'Ebollizione / 300m',
          icon: 'mdi:mountain',
        },
        {
          value: '0s',
          label: 'Errore Tollerato',
          icon: 'mdi:timer-check-outline',
        },
      ],
    },
    {
      type: 'title',
      text: 'Confronto degli Stati di Cottura',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Uovo alla Coque',
          icon: 'mdi:coffee-outline',
          description: 'Albume parzialmente rappreso e tuorlo totalmente liquido.',
          points: [
            'Consistenza molto delicata',
            'Ideale per intingere il pane',
            'Cottura rapida (3-4 min)',
            'Difficile da pelare',
          ],
        },
        {
          title: 'Uovo Barzotto (Mollet)',
          icon: 'mdi:water-percent',
          description: 'Albume sodo e tuorlo cremoso, denso ma non solido.',
          highlight: true,
          points: [
            'Lo standard gourmet',
            'Tuorlo con consistenza di miele',
            'Struttura elastica e soda',
            'Perfetto per le insalate',
          ],
        },
        {
          title: 'Uovo Sodo',
          icon: 'mdi:circle-slice-8',
          description: 'Completamente solido ma tenero, senza anello verde.',
          points: [
            'Tuorlo opaco e sodo',
            'Facile da trasportare e pelare',
            'Ideale per farcire',
            'Richiede raffreddamento rapido',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Punto di Ebollizione in base all\'Altitudine',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Città / Altitudine', 'Metri (slm)', 'Ebollizione (°C)', 'Tempo Extra'],
      rows: [
        ['Livello del Mare', '0m', '100°C', '0s'],
        ['Madrid', '650m', '97.8°C', '+25s'],
        ['Città del Messico', '2240m', '92.6°C', '+75s'],
        ['La Paz (Bolivia)', '3640m', '88.1°C', '+140s'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Anello verde o difficile da pelare?',
      html: 'L\'anello verde è <strong>solfuro ferroso</strong> causato da una cottura eccessiva. Se l\'uovo non si pela bene, è perché è troppo fresco; il pH basso fa sì che l\'albume si attacchi alla membrana. Usa uova di 1 settimana e shock termico in ghiaccio.',
    },
    {
      type: 'title',
      text: 'Glossario della Scienza dell\'Uovo',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ovotransferrina',
          definition: 'Proteina dell\'albume che coagula per prima (62°C), dando la struttura bianca iniziale.',
        },
        {
          term: 'Ovalbumina',
          definition: 'Proteina principale che richiede più calore (80°C) per una sodezza totale.',
        },
        {
          term: 'Pressione Atmosferica',
          definition: 'Fattore che determina la temperatura dell\'acqua bollente.',
        },
        {
          term: 'Shock Termico',
          definition: 'Immersione in acqua ghiacciata per arrestare istantaneamente la cottura residua.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'Il trucco dell\'aceto',
      html: 'Aggiungi un cucchiaio di aceto all\'acqua. Se il guscio si rompe, l\'acido aiuterà l\'albume a coagulare rapidamente, sigillando la fessura.',
    },
    {
      type: 'paragraph',
      html: 'Il nostro cronometro utilizza l\'equazione di Charles Williams per regolare ogni secondo in base alla tua posizione esatta.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
