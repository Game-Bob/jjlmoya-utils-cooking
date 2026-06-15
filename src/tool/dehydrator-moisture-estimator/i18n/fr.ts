import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Estimateur d'Humidité du Déshydrateur";
const description = "Calculez la perte de poids, l'évaporation de l'eau et le temps de séchage de vos aliments.";

const faq = [
  {
    question: "Comment est calculée la perte de poids lors de la déshydratation ?",
    answer: "La perte de poids est calculée en séparant la matière sèche de l'eau. La masse sèche restant constante, le poids final est calculé par la matière sèche divisée par 1 moins le pourcentage d'humidité ciblé."
  }
];

const howTo = [
  {
    name: "Sélectionnez un ingrédient ou une humidité personnalisée",
    text: "Choisissez un préréglage ou configurez manuellement."
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
  slug: 'estimateur-humidite-deshydrateur',
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  ui: {
    title: "Estimateur d'Humidité",
    subtitle: 'Calculez le rétrécissement du poids et le temps de séchage estimé',
    unitSystemLabel: "Système d'Unités",
    metricOption: 'Métrique (g, °C)',
    imperialOption: 'Impérial (oz, °F)',
    ingredientLabel: 'Ingrédient',
    initialMoistureLabel: 'Humidité Initiale (%)',
    targetMoistureLabel: 'Humidité Cible (%)',
    weightLabel: 'Poids Initial',
    tempLabel: 'Température de Séchage',
    customOption: 'Personnalisé',
    beefOption: 'Bœuf Séché',
    watermelonOption: 'Pastèque Déshydratée',
    appleOption: 'Pommes Séchées',
    mangoOption: 'Mangue Déshydratée',
    mushroomOption: 'Champignons',
    targetWeightLabel: 'Poids Final',
    waterEvaporatedLabel: 'Eau Évaporée',
    estimatedHoursLabel: 'Temps de Séchage Estimé',
    shrinkageLabel: 'Rétrécissement de Poids'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Calculez le Rétrécissement lors de la Déshydratation',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Notre outil vous aide à planifier et optimiser vos préparations déshydratées.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
