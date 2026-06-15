import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calcolatore di Umidità per Essiccatore';
const description = "Stima la perdita di peso, l'evaporazione dell'acqua e il tempo di essiccazione dei cibi.";

const faq = [
  {
    question: "Come si calcola la perdita di peso durante l'essiccazione?",
    answer: "La perdita di peso si calcola separando il contenuto solido dall'acqua. Poiché la massa solida rimane costante, il peso finale si calcola dividendo la parte solida per 1 meno la percentuale di umidità desiderata."
  }
];

const howTo = [
  {
    name: "Seleziona un ingrediente o imposta l'umidità manuale",
    text: "Scegli un preset o configura la kelembapan iniziale a piacere."
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
  slug: 'calcolatore-umidita-essiccatore',
  title,
  description,
  faqTitle: 'Domande Frequenti',
  ui: {
    title: 'Calcolatore di Umidità',
    subtitle: 'Calcola la riduzione del peso e stima il tempo di essiccazione',
    unitSystemLabel: 'Sistema di Unità',
    metricOption: 'Metrico (g, °C)',
    imperialOption: 'Imperiale (oz, °F)',
    ingredientLabel: 'Ingrediente',
    initialMoistureLabel: 'Umidità Iniziale (%)',
    targetMoistureLabel: 'Umidità Target (%)',
    weightLabel: 'Peso Iniziale',
    tempLabel: 'Temperatura di Essiccazione',
    customOption: 'Personalizzato',
    beefOption: 'Carne Secca',
    watermelonOption: 'Anguria Essiccata',
    appleOption: 'Mele Essiccate',
    mangoOption: 'Mango Essiccato',
    mushroomOption: 'Funghi',
    targetWeightLabel: 'Peso Target',
    waterEvaporatedLabel: 'Acqua Evaporata',
    estimatedHoursLabel: 'Tempo di Essiccazione Stimato',
    shrinkageLabel: 'Calo di Peso'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Calcola Perdita di Peso e Tempo di Essiccazione',
      level: 2
    },
    {
      type: 'paragraph',
      html: "Usa il nostro strumento per stimare il peso finale e l'acqua evaporata durante l'essiccazione."
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
