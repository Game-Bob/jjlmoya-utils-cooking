import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur de Rendement et Coût de Maturation de Viande";
const description = "Calculez la perte de poids de la viande, le gaspillage dû au parage de la pellicule et le coût réel par kilogramme lors de la maturation à sec à domicile ou en chambre.";
const faq = [
  {
    question: "Combien de poids la viande perd-elle pendant la maturation?",
    answer: "Pendant un processus standard de maturation à sec de 30 à 45 jours, la viande perd environ 15% à 25% de son poids par évaporation d'humidité. De plus, environ 15% du poids initial est perdu lors du parage de la croûte externe sèche (pellicule) avant la cuisson."
  },
  {
    question: "Quelle est l'humidité optimale pour la maturation?",
    answer: "L'humidité relative idéale pour la maturation à sec de la viande se situe entre 75% et 85%. Si l'humidité est trop basse (sous 75%), la surface sèche trop rapidement et forme une barrière dure. Si elle est trop élevée (au-dessus de 85%), le risque de moisissure augmente."
  },
  {
    question: "Pourquoi le prix par kilogramme augmente-t-il autant?",
    answer: "Comme vous perdez du poids par évaporation et parage, le poids final utile est inférieur au poids de départ. Le coût total reste le même, ce qui signifie que le coût par kilogramme utile augmente proportionnellement au poids total perdu."
  }
];

const howTo = [
  {
    name: "Saisir le poids initial",
    text: "Entrez le poids de départ de la coupe de viande avant la maturation à sec."
  },
  {
    name: "Définir les jours de maturation",
    text: "Sélectionnez la durée totale de la maturation, généralement entre 1 et 60 jours."
  },
  {
    name: "Ajuster l'humidité relative",
    text: "Réglez l'humidité de votre chambre (l'idéal est de 75% à 85%) pour déterminer le taux de perte d'eau."
  },
  {
    name: "Saisir le prix initial",
    text: "Indiquez le coût par kilogramme de la viande brute pour le comparer au coût final du rendement utile."
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
  slug: 'estimateur-maturation-viande',
  title,
  description,
  faqTitle: 'Foire Aux Questions',
  ui: {
    title: 'Estimateur de Maturation de Viande',
    subtitle: 'Simulez la perte de poids et calculez le coût du rendement final',
    startWeightLabel: 'Poids de Départ',
    daysLabel: 'Durée de Maturation',
    pricePerKgLabel: 'Prix Initial',
    humidityLabel: 'Humidité Relative',
    finalWeightLabel: 'Poids Utile Final',
    yieldLabel: 'Rendement Utile Total',
    originalCostLabel: 'Coût Total Initial',
    finalCostPerKgLabel: 'Prix Utile Final',
    moistureLossLabel: "Perte par Évaporation d'Humidité",
    trimmingLossLabel: 'Déchets de Parage de Pellicule',
    warningLowHumidity: 'Avertissement: L\'humidité est inférieure à 75%. La surface peut sécher trop rapidement, entraînant un durcissement de surface.',
    warningHighHumidity: 'Avertissement: L\'humidité est supérieure à 85%. Risque élevé de détérioration bactérienne ou de moisissures indésirables.',
    timelineTitle: 'Chronologie de l\'Évolution de la Maturation',
    timelineInfoText: 'Cliquez sur la chronologie pour prévisualiser les changements physiques de la pièce de viande'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Science et Économie de la Maturation à Sec de la Viande',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La maturation à sec est un art culinaire qui combine la microbiologie, la biochimie et la physique pour transformer des coupes de bœuf standard en délicatesses tendres et concentrées en saveurs.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Humidité Idéale',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Temp. Optimale',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Perte de Parage',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 j',
          label: 'Durée Standard',
          icon: 'mdi:clock-outline'
        }
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
