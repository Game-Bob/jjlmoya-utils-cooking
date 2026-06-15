import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calcolatore di Resa e Costo Frollatura Dry Aging";
const description = "Calcola la perdita di peso della carne, lo scarto di rifilatura e il costo effettivo al chilogrammo per la frollatura a secco (dry aging) a casa o in cella.";
const faq = [
  {
    question: "Quanto peso perde la carne durante la frollatura a secco?",
    answer: "Durante un processo di frollatura standard da 30 a 45 giorni, la carne perde circa il 15% - 25% del suo peso a causa dell'evaporazione dell'umidità. Inoltre, si perde circa il 15% del peso iniziale per la rifilatura della crosta esterna secca prima della cottura."
  },
  {
    question: "Qual è l'umidità ottimale per la frollatura?",
    answer: "L'umidità relativa ideale per la frollatura a secco è tra il 75% e l'85%. Se l'umidità è troppo bassa (sotto il 75%), la superficie si asciuga troppo velocemente. Se è troppo alta (sopra l'85%), aumenta il rischio di muffe dannose."
  },
  {
    question: "Perché il prezzo al chilogrammo aumenta così tanto?",
    answer: "Poiché si perde peso con l'evaporazione e la rifilatura, il peso utilizzabile finale è inferiore al peso iniziale. Il costo totale rimane invariato, quindi il prezzo al kg utilizzabile aumenta in proporzione al peso perso."
  }
];

const howTo = [
  {
    name: "Inserisci il peso iniziale",
    text: "Inserisci il peso di partenza del taglio prima di avviare la frollatura."
  },
  {
    name: "Imposta i giorni di frollatura",
    text: "Seleziona la durata totale della frollatura, solitamente tra 1 e 60 giorni."
  },
  {
    name: "Regola l'umidità relativa",
    text: "Imposta l'umidità della cella (l'ideale è tra il 75% e l'85%) per determinare la velocità di evaporazione."
  },
  {
    name: "Inserisci il prezzo iniziale",
    text: "Fornisci il costo al chilogrammo della carne fresca per confrontarlo con quello della carne frollata finale."
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
  slug: 'calcolatore-frollatura-carne',
  title,
  description,
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Calcolatore Frollatura Dry Aging',
    subtitle: 'Simula la perdita di peso e calcola il costo effettivo finale',
    startWeightLabel: 'Peso Iniziale',
    daysLabel: 'Tempo di Frollatura',
    pricePerKgLabel: 'Prezzo Originale',
    humidityLabel: 'Umidità Relativa',
    finalWeightLabel: 'Peso Utile Finale',
    yieldLabel: 'Resa Utile Totale',
    originalCostLabel: 'Costo Totale Iniziale',
    finalCostPerKgLabel: 'Prezzo Utile Finale',
    moistureLossLabel: 'Perdita per Evaporazione Umidità',
    trimmingLossLabel: 'Scarto di Rifilatura (Pellicola)',
    warningLowHumidity: 'Attenzione: L\'umidità è inferiore al 75%. La superficie può asciugarsi troppo rapidamente, causando indurimento superficiale.',
    warningHighHumidity: 'Attenzione: L\'umidità è superiore all\'85%. Rischio elevato di deterioramento batterico o muffe indesiderate.',
    timelineTitle: 'Cronologia di Avanzamento Frollatura',
    timelineInfoText: 'Fai clic sulla linea temporale per vedere l\'anteprima delle modifiche fisiche del taglio'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Scienza e Convenienza della Frollatura Dry Aging',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La frollatura a secco è un\'arte culinaria che unisce microbiologia, biochimica e fisica per trasformare tagli bovini standard in prelibatezze tenere e concentrate nei sapori.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Umidità Ideale',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Temp. Ottimale',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Scarto Rifilatura',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 g',
          label: 'Frollatura Standard',
          icon: 'mdi:clock-outline'
        }
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
