import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur de Sécurité des Conserves Botulisme Mort Thermique";
const description = "Calcule la réduction thermique des spores et la létalité de stérilisation F0 pour Clostridium botulinum. Évalue les zones de sécurité pour les conserves peu acides et acides.";
const faq = [
  {
    question: "Pourquoi Clostridium botulinum est-il une préoccupation majeure dans les conserves maison?",
    answer: "Clostridium botulinum est une bactérie anaérobie sporulante qui produit la toxine botulique, l'une des substances biologiques les plus létales connues. Les spores sont extrêmement résistantes à la chaleur et peuvent survivre dans des conditions anaérobies à l'intérieur des bocaux scellés si les températures sont insuffisantes."
  },
  {
    question: "Quelle est l'importance cruciale du pH 4.6 dans la conservation des aliments?",
    answer: "Les aliments dont le pH est inférieur à 4.6 sont classés comme acides. Dans ces environnements, les spores de Botulinum ne peuvent ni germer ni produire de toxines. Pour les aliments dont le pH est de 4.6 ou plus, la mise en conserve sous pression est obligatoire pour atteindre des températures supérieures à 116 degrés Celsius afin de détruire les spores."
  },
  {
    question: "Qu'est-ce que la valeur de létalité de stérilisation F0?",
    answer: "La valeur F0 mesure le temps de stérilisation équivalent à 121.11 degrés Celsius. Un processus standard de stérilisation pour aliments peu acides requiert une valeur F0 de 3.0 minutes ou plus, représentant une réduction décimale de douze de la population de spores."
  },
  {
    question: "Pourquoi ne puis-je pas utiliser un bain-marie pour les aliments peu acides?",
    answer: "La mise en conserve au bain-marie n'atteint que le point d'ébullition (100 degrés Celsius). Cette température est insuffisante pour tuer les spores résistantes à la chaleur de Clostridium botulinum dans les aliments peu acides. Les spores survivent et produisent des toxines à température ambiante."
  }
];

const howTo = [
  {
    name: "Saisir le niveau d'acidité de l'aliment",
    text: "Détermine et entre la valeur du pH de tes ingrédients. Si le pH est égal ou supérieur à 4.6, l'aliment est peu acide."
  },
  {
    name: "Choisir la technique de mise en conserve",
    text: "Sélectionne entre la mise en conserve au bain-marie ou sous pression selon ton équipement de conservation."
  },
  {
    name: "Définir la température et la durée",
    text: "Entre la température de traitement et le temps en minutes pendant lequel les bocaux restent à cette température."
  },
  {
    name: "Évaluer les diagnostics de sécurité",
    text: "Vérifie la valeur F0 résultante, le nombre de réductions décimales des spores et l'indicateur de zone de sécurité pour confirmer la conformité."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'securite-conserves-botulisme',
  title: 'Calculateur de Sécurité des Conserves Botulisme',
  description: 'Calcule la réduction thermique des spores et la létalité de stérilisation F0 pour Clostridium botulinum. Évalue les zones de sécurité pour les conserves peu acides et acides.',
  faqTitle: 'Questions Fréquentes',
  ui: {
    title: "Moniteur d'Autoclave pour Conserves",
    subtitle: "Diagnostics de mort thermique et évaluateur de sécurité botulique",
    methodLabel: "Méthode de Mise en Conserve",
    waterBath: "Mise en Conserve au Bain-Marie",
    pressureCanner: "Mise en Conserve sous Pression",
    tempLabel: "Température de Traitement",
    timeLabel: "Temps de Traitement",
    phLabel: "pH de l'Aliment",
    f0Label: "Valeur de Létalité F0",
    dLabel: "Valeur D Calculée",
    sporesLabel: "Population de Spores",
    statusSafe: "Stérilisation Complète",
    statusMarginal: "Stérilisation Marginale",
    statusUnsafe: "Risque Élevé de Botulisme",
    statusSafeDesc: "La létalité thermique dépasse la cible F0 de 3.0 minutes. Les spores sont entièrement désactivées.",
    statusMarginalDesc: "Le processus atteint une désactivation partielle mais reste en dessous de la norme de sécurité 12D. Ajuste le temps ou la température.",
    statusUnsafeDesc: "Le processus ne désactive pas Clostridium botulinum. Les aliments peu acides dans les bains-marie restent dangereux.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Réduction Décimale",
    dValueUnit: "minutes",
    indicatorSectionTitle: "Indicateurs de Diagnostic",
    visualizerSectionTitle: "Réduction des Spores",
    f0Tooltip: "Temps de stérilisation équivalent en minutes à 121.11°C. Le seuil de sécurité est de 3.0 ou plus.",
    dTooltip: "Temps de réduction décimale: durée en minutes nécessaire pour détruire 90% des spores à la température actuelle.",
    logReductionTooltip: "Nombre de réductions décimales (facteur 10). Une réduction 12D est la norme de sécurité.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mécanismes Scientifiques du Traitement Thermique et de la Cinétique de Désactivation des Spores',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le traitement thermique dans la mise en conserve assure la stérilité commerciale en détruisant les micro-organismes pathogènes et d\'altération. L\'objectif principal des directives de sécurité dans la conservation des aliments peu acides est Clostridium botulinum. Les spores de Botulinum sont très résistantes à la chaleur par rapport aux cellules végétatives. Désactiver ces spores nécessite un processus de temps de mort thermique qui applique une température élevée pendant une durée calculée. La relation mathématique entre la température et le taux de désactivation est exprimée par le temps de réduction décimale (valeur D) et le facteur de dépendance à la température (valeur z).',
    },
    {
      type: 'title',
      text: 'Classification des Aliments et le Seuil Critique de Sécurité pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une valeur de pH de 4.6 est la ligne de démarcation pour la sécurité de la conservation. Les aliments acides dont le pH est inférieur à 4.6 inhibent naturellement la germination et la production de toxine des spores de Botulinum. Pour ces aliments, un traitement à 100 degrés Celsius dans un bain-marie bouillant est suffisant. Cependant, les aliments peu acides dont le pH est supérieur à 4.6 doivent subir une mise en conserve sous pression pour élever la température de la vapeur et obtenir une destruction thermique complète des spores. Le tableau ci-dessous détaille les classifications et les méthodes de mise en conserve pour les ingrédients courants:',
    },
    {
      type: 'table',
      headers: ['Groupe d\'Aliment', 'Plage de pH', 'Méthode de Conservation Requise', 'Exemples Courants'],
      rows: [
        ['Haute Acidité', 'En dessous de 4.0', 'Bain-Marie', 'Pommes, Baies, Agrumes, Pêches, Cornichons'],
        ['Acidifiés ou Acidité Moyenne', '4.0 à 4.6', 'Bain-Marie avec Ajustement Acide', 'Tomates, Figues, Poires'],
        ['Peu Acides', '4.6 et plus', 'Conserve sous Pression Obligatoire', 'Viandes, Fruits de Mer, Haricots, Maïs, Pommes de Terre, Soupes'],
      ],
    },
    {
      type: 'title',
      text: 'Ajustements d\'Altitude et Corrections de Sécurité du Point d\'Ébullition',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'À mesure que l\'altitude augmente, la pression atmosphérique diminue, ce qui abaisse le point d\'ébullition de l\'eau en dessous de 100 degrés Celsius. Dans la mise en conserve au bain-marie, cette température plus basse augmente la valeur D des spores, nécessitant des temps de traitement plus longs. Dans la mise en conserve sous pression, les réglages du manomètre à cadran ou à poids doivent être augmentés pour maintenir la température interne de stérilisation cible. Vous trouverez ci-dessous le guide de référence pour les points d\'ébullition et les ajustements nécessaires de la mise en conserve sous pression:',
    },
    {
      type: 'table',
      headers: ['Plage d\'Altitude', 'Point d\'Ébullition de l\'Eau', 'Pression Requise Manomètre à Cadran', 'Pression Requise Manomètre à Poids'],
      rows: [
        ['0 à 300 mètres', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 à 600 metres', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 à 900 mètres', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 à 1200 mètres', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 à 1500 mètres', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 à 2000 mètres', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi le Concept de Réduction des Spores 12D Prévient le Botulisme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La destruction bactérienne par la chaleur est logarithmique. La valeur D représente le temps nécessaire à une température spécifique pour détruire 90% de la population de spores, ce qui équivaut à une réduction logarithmique décimale. La norme de référence pour Clostridium botulinum est une valeur D de 0.21 minute à 121.11 degrés Celsius. Pour atteindre des marges de sécurité élevées, les normes commerciales exigent un processus de réduction décimale de douze (12D), ce qui signifie que la population de spores est réduite de douze facteurs de dix. Cela donne une valeur F0 cible de 3.0 minutes, qui garantit la sécurité dans les aliments peu acides.',
    },
    {
      type: 'title',
      text: 'Guide Pratique de Mise en Conserve Maison et Conseils de Sécurité',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Acidifie toujours les tomates avec du jus de citron ou de l\'acide citrique avant le traitement au bain-marie, car leur pH naturel fluctue près du seuil critique de 4.6.',
        'Ne réduis jamais les temps de traitement ni les températures. La cinétique de mort thermique est logarithmique et des ajustements mineurs peuvent permettre aux spores de survivre.',
        'Assure-toi que les manomètres à cadran des autoclaves sont testés annuellement pour leur précision, car des lectures de pression incorrectes compromettent directement les températures internes de stérilisation.',
        'Compense les différences d\'altitude en ajustant les temps de traitement dans les bains-marie ou en augmentant les réglages de PSI sur les autoclaves.',
        'Évite de mettre en conserve des recettes mixtes contenant des ingrédients peu acides comme des viandes ou des haricots dans un autoclave à bain-marie, même si la recette globale contient de l\'acide.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
