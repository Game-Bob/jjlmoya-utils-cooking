import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calcolatore Meringa e Punti di Neve";
const description = "Calcola la quantità esatta di zucchero per meringa francese, italiana o svizzera in base al peso degli albumi. Tempi di montatura e trucchi di pasticceria.";
const faq = [
  {
    question: 'Qual è il rapporto ideale tra zucchero e albume?',
    answer: 'La regola d\'oro in pasticceria è il rapporto 1:2. Per ogni grammo di albume, si dovrebbero usare due grammi di zucchero per garantire una struttura stabile e soda.',
  },
  {
    question: 'Come capire se il punto di neve è fermo?',
    answer: 'Il punto di neve fermo si raggiunge quando, sollevando le fruste, la meringa forma una punta che rimane verticale senza piegarsi. Inoltre, la meringa deve apparire molto lucida.',
  },
  {
    question: 'Qual è la meringa più stabile per decorare?',
    answer: 'La meringa italiana è la più stabile delle tre, grazie allo sciroppo caldo che cuoce leggermente le proteine dell\'albume, creando una struttura più resistente al calore.',
  },
  {
    question: 'Si possono usare gli albumi pastorizzati in brick?',
    answer: 'Sì, ma spesso impiegano più tempo per montare rispetto agli albumi freschi. Un trucco è aggiungere un pizzico di cremor tartaro o qualche goccia di limone per favorire la stabilità.',
  },
];
const howTo = [
  {
    name: 'Pesare gli albumi',
    text: 'Usa una bilancia digitale per ottenere il peso esatto degli albumi senza tracce di tuorlo.',
  },
  {
    name: 'Inserire il peso',
    text: 'Scrivi il peso nel calcolatore per ottenere le quantità di zucchero necessarie.',
  },
  {
    name: 'Scegliere la tecnica',
    text: 'Seleziona se preparare una meringa francese (base), italiana (stabile) o svizzera (setosa).',
  },
  {
    name: 'Montare e verificare',
    text: 'Segui i tempi stimati e controlla la consistenza fino a raggiungere picchi fermi.',
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
  slug: 'calcolatore-meringa-neve',
  title,
  description,
  faqTitle: 'Domande Frequenti',
  ui: {
    whitesLabel: 'Peso degli Albumi',
    whitesPlaceholder: 'Es. 120',
    whitesUnit: 'g',
    typeLabel: 'Tipo di Meringa',
    typeFrench: 'Francese',
    typeItalian: 'Italiana',
    typeSwiss: 'Svizzera',
    timesHeading: 'Tempi Stimati (Velocità media/alta)',
    stageSpumado: 'Schiumosa',
    stageSpumadoDesc: 'Grandi bolle, come schiuma di sapone.',
    stageSoftPeaks: 'Punte Morbide',
    stageSoftPeaksDesc: 'La punta si piega quando si solleva.',
    stageStiffPeaks: 'Punto di Neve',
    stageStiffPeaksDesc: 'Picco fermo e lucido.',
    frenchSugarWhite: 'Zucchero Semolato',
    frenchSugarPowder: 'Zucchero a Velo',
    frenchTip: 'La meringa francese è la più comune, ideale per la cottura. Non è adatta al consumo a crudo.',
    frenchTime1: '1-2 min',
    frenchTime2: '3-5 min',
    frenchTime3: '7-9 min',
    italianSugarSyrup: 'Zucchero per Sciroppo',
    italianWater: 'Acqua',
    italianTip: 'La meringa italiana è la più stabile. Si fa con sciroppo a 118°C. Perfetta per decorare torte.',
    italianTime1: '2 min',
    italianTime2: '5 min',
    italianTime3: '10-12 min',
    swissSugarWhite: 'Zucchero Semolato',
    swissMaxTemp: 'Temp. Max',
    swissTip: 'La meringa svizzera si scalda a bagnomaria finché lo zucchero si scioglie. Ideale per creme al burro.',
    swissTime1: '1-2 min',
    swissTime2: '4-6 min',
    swissTime3: '8-10 min',
    invalidWeightError: 'Inserire un peso valido',
  },
  faq,
  howTo, seo: [
    {
      type: 'title',
      text: 'Guida per il Calcolo della Meringa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Dominare il <strong>punto di neve</strong> eleva la tua pasticceria a livello professionale. La chiave è la precisione del peso.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: 'Rapporto Albume:Zucchero',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: 'Sciroppo Italiano',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: 'Bagnomaria Svizzero',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: 'Tolleranza Grassi',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Meringa Francese',
          icon: 'mdi:baguette',
          description: 'Semplice ma meno stabile.',
          points: [
            'Ideale per la cottura',
            'Leggera e ariosa',
            'Richiede cottura',
            'Veloce',
          ],
        },
        {
          title: 'Meringa Italiana',
          icon: 'mdi:pizza',
          description: 'La più stabile.',
          highlight: true,
          points: [
            'Perfetta per decorare',
            'Consumabile a crudo',
            'Resiste all\'umidità',
            'Densa e lucida',
          ],
        },
        {
          title: 'Meringa Svizzera',
          icon: 'mdi:cheese',
          description: 'Scaldata a bagnomaria.',
          points: [
            'Base per Buttercream',
            'Molto setosa',
            'Ottima per farciture',
            'Buona stabilità',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Il trucco della ciotola di metallo',
      html: 'Pulisci la ciotola con aceto o limone. Ogni traccia di grasso impedirà agli albumi di montare.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
