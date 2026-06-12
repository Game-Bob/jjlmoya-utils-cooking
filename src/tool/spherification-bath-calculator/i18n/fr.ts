import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur de Bain de Sphérification Guide de Gastronomie Moléculaire de Précision";
const description = "Calculez les ratios exacts d'alginate de sodium et de lactate de calcium pour la sphérification directe et inverse. Corrigez la viscosité et l'acidité avec la xanthane et le citrate.";
const faq = [
  {
    question: "Quelle est la différence entre la sphérification directe et inverse ?",
    answer: "La sphérification directe ajoute de l'alginate de sodium à la base aromatisée et la plonge dans un bain de calcium, créant une fine membrane qui continue de gélifier vers l'intérieur. La sphérification inverse ajoute du calcium à la base et la plonge dans un bain d'alginate, créant une membrane qui croît vers l'extérieur, arrêtant la gélification lorsqu'elle est rincée."
  },
  {
    question: "Pourquoi mes sphères sont-elles plates ou ne coulent-elles pas ?",
    answer: "Si le liquide de base est moins dense que le bain d'alginate de sodium, il flottera au lieu de former une sphère. L'ajout d'une petite quantité de gomme xanthane augmente la viscosité de la base, lui permettant de couler et de former des sphères parfaites."
  },
  {
    question: "Que fait le citrate de sodium dans la sphérification ?",
    answer: "Le citrate de sodium est un séquestrant qui se lie aux ions calcium et élève le pH. Si un liquide de base est très acide (pH inférieur à 4,5) ou contient du calcium, l'alginate de sodium gélifiera prématurément. L'ajout de citrate neutralise cette acidité."
  },
  {
    question: "Puis-je utiliser n'importe quelle eau pour le bain de calcium ?",
    answer: "L'eau du robinet à haute teneur en minéraux peut faire grumeler ou gélifier prématurément l'alginate de sodium. Il est préférable d'utiliser de l'eau distillée ou en bouteille faible en calcium."
  }
];

const howTo = [
  {
    name: "Sélectionnez la méthode de sphérification",
    text: "Choisissez Directe pour une gélification fine et immédiate, ou Inverse pour les liquides contenant de l'alcool, des produits laitiers ou du calcium."
  },
  {
    name: "Entrez les poids des liquides",
    text: "Saisissez le poids de votre liquide de base aromatisé et du bain d'eau dans vos unités préférées."
  },
  {
    name: "Ajoutez les corrections de texture et d'acidité",
    text: "Activez la Gomme Xanthane si votre liquide de base est fluide, ou le Citrate de Sodium s'il est très acide."
  },
  {
    name: "Mesurez les ingrédients",
    text: "Pesez les quantités exactes d'alginate de sodium, de lactate ou chlorure de calcium, et d'agents correcteurs affichés sur l'écran récapitulatif."
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
  slug: 'calculateur-bain-spherification',
  title: 'Calculateur de Bain de Sphérification',
  description: 'Calculez les ratios exacts d\'alginate de sodium et de lactate de calcium pour la sphérification directe et inverse. Corrigez la viscosité et l\'acidité avec la xanthane et le citrate.',
  faqTitle: 'Questions Fréquentes',
  ui: {
    title: "Calculateur de Bain de Sphérification",
    subtitle: "Contrôle précis des ratios pour la sphérification directe et inverse",
    unitLabel: "Système de Mesure",
    metricUnit: "Métrique (g / grammes)",
    imperialUnit: "Impérial (oz / onces)",
    methodLabel: "Méthode de Sphérification",
    directMethod: "Sphérification Directe",
    reverseMethod: "Sphérification Inverse",
    baseWeightLabel: "Poids du Liquide de Base",
    bathWeightLabel: "Poids de l'Eau du Bain",
    xanthanLabel: "Activer la Gomme Xanthane (Correction de Viscosité)",
    citrateLabel: "Activer le Citrate de Sodium (Acidité / Séquestrant de pH)",
    recipeTitle: "Résumé de la Recette Calculée",
    baseGellingAgent: "Agent Gélifiant de Base",
    bathGellingAgent: "Agent Gélifiant du Bain",
    xanthanGum: "Gomme Xanthane (Épaississant)",
    sodiumCitrate: "Citrate de Sodium (Tampon)",
    warningLabel: "Avertissement de Solubilité",
    warningDesc: "Le poids de l'agent requis est proche ou dépasse la limite de solubilité pour ce volume de liquide. La dissolution peut prendre plus de temps ou nécessiter un léger chauffage.",
    directDesc: "Idéal pour les liquides légers avec faible teneur en calcium. Crée des sphères délicates à peau fine qui doivent être servies immédiatement.",
    reverseDesc: "Idéal pour les produits laitiers, l'alcool, les liquides riches en calcium ou acides. Crée des sphères stables qui ne continuent pas à gélifier après le rinçage.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Science de la Sphérification Moléculaire et de la Gélification par Hydrocolloïdes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La sphérification est une technique culinaire révolutionnaire qui encapsule un cœur liquide dans une fine membrane gélifiée. Originaire du secteur de l\'emballage industriel dans les années 1940, elle a été adaptée à la cuisine moderniste au début des années 2000. La chimie sous-jacente repose sur les interactions des hydrocolloïdes, en particulier la réticulation des polymères d\'alginate de sodium lorsqu\'ils sont exposés à des cations de calcium divalents.',
    },
    {
      type: 'title',
      text: 'La Chimie Moléculaire: Alginate de Sodium et Ions Calcium',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'alginate de sodium est un polysaccharide extrait d\'algues brunes, composé de chaînes linéaires d\'acide bêta-D-mannuronique (blocs M) et d\'acide alpha-L-guluronique (blocs G). Sous sa forme de sel de sodium, il est totalement soluble dans l\'eau, formant une solution visqueuse. Lorsque des ions calcium (comme le chlorure de calcium ou le lactogluconate de calcium) sont introduits, les ions calcium divalents (Ca2+) remplacent les ions sodium monovalents (Na+). Parce que le calcium a deux charges positives, il se lie à deux blocs G sur des chaînes polymères adjacentes, les pontant ensemble. Ce processus, scientifiquement décrit comme le <strong>modèle de boîte à œufs</strong> de gélification, relie les chaînes indépendantes de polysaccharides en un réseau d\'hydrogel tridimensionnel rigide qui piège l\'eau et les molécules de saveur.',
    },
    {
      type: 'title',
      text: 'Mécanismes de la Sphérification Directe versus Sphérification Inverse',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les deux principales méthodes de sphérification diffèrent par l\'endroit où l\'agent gélifiant et les sels de calcium sont placés, ce qui entraîne des propriétés mécaniques différentes :',
    },
    {
      type: 'list',
      items: [
        '<strong>Sphérification Directe :</strong> L\'alginate de sodium est dissous dans le liquide de base aromatisé, qui est ensuite versé goutte à goutte dans un bain de calcium (généralement 1,0 % de chlorure de calcium). La gélification commence instantanément à la limite. Parce que les ions calcium sont petits et mobiles, ils migrent continuellement du bain vers le noyau de la sphère, faisant croître la membrane de gel vers l\'intérieur. Si elle n\'est pas rincée et servie immédiatement, la sphère finira par gélifier complètement, devenant une bille solide et caoutchouteuse.',
        '<strong>Sphérification Inverse :</strong> Le lactogluconate de calcium (2,0 %) est dissous dans le liquide de base aromatisé, qui est ensuite versé goutte à goutte dans un bain d\'alginate de sodium (0,5 %). Parce que les molécules d\'alginate sont grandes et lentes, elles ne peuvent pas facilement traverser la barrière de gel nouvellement formée. Au lieu de cela, les ions calcium migrent vers l\'extérieur dans le bain, faisant croître la membrane vers l\'extérieur. Cela arrête la gélification immédiatement une fois la sphère retirée et rincée à l\'eau claire, préservant un noyau complètement liquide indéfiniment.'
      ],
    },
    {
      type: 'title',
      text: 'Surmonter les Barrières d\'Acidité et de pH avec le Citrate de Sodium',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'alginate de sodium est très sensible à l\'acide. Lorsque le pH d\'un liquide de base aromatisé descend en dessous de 4,5, les molécules d\'alginate ne peuvent pas s\'hydrater correctement. Au lieu de se dissoudre, les chaînes d\'alginate précipitent en acide alginique insoluble, formant des grumeaux filandreux. Pour résoudre ce problème, les chefs utilisent le <strong>citrate de sodium</strong> comme agent tampon. Le citrate de sodium neutralise les ions hydrogène, élevant le pH des ingrédients acides comme le fruit de la passion ou le jus de citron vert au-dessus du seuil critique de 4,5, permettant à l\'alginate de s\'hydrater complètement et de former des formes sphériques nettes.',
    },
    {
      type: 'title',
      text: 'Ajustement de la Densité et de la Viscosité du Fluide avec la Gomme Xanthane',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour former une sphère, la goutte de liquide de base aromatisé doit s\'immerger complètement dans le bain de gélification. Si le liquide de base est moins dense que le bain (comme un alcool léger ou un jus à base d\'eau dans un bain épais d\'alginate de sodium lors de la sphérification inverse), il flottera à la surface, s\'aplatissant. L\'ajout d\'une infime quantité de <strong>gomme xanthane</strong> (généralement 0,1 % à 0,2 %) augmente la viscosité du liquide de base. Ce corps supplémentaire fournit l\'élan nécessaire pour que la goutte coule dans le bain, permettant à la tension superficielle de former une sphère parfaite.',
    },
    {
      type: 'table',
      headers: ['Méthode de Sphérification', 'Ingrédients Idéaux', 'Additifs Requis', 'Caractéristiques de Stockage', 'Direction de Croissance du Gel'],
      rows: [
        ['Méthode Directe', 'Jus de fruits pauvres en calcium, bouillons clairs, sirops sucrés', '0,5 % Alginate de Sodium dans la base, 1,0 % Chlorure de Calcium dans le bain', 'Doit être servi immédiatement, se solidifie avec le temps', 'Vers l\'intérieur (vers le centre)'],
        ['Méthode Inverse', 'Produits laitiers, alcool, liquides riches en calcium ou très acides', '2,0 % Lactate de Calcium dans la base, 0,5 % Alginate de Sodium dans le bain', 'Très stable, peut être conservé dans l\'huile ou l\'eau pendant des heures', 'Vers l\'extérieur (depuis le centre)'],
      ],
    },
    {
      type: 'title',
      text: 'Rinçage et Étapes Finales de Conservation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rincez toujours les sphères finies dans un bain d\'eau propre et froide immédiatement après les avoir retirées du bain de gélification. Cela élimine tout résidu de calcium ou d\'alginate adhérant à l\'extérieur, arrêtant la réaction chimique et évitant les saveurs désagréables (en particulier le goût légèrement amer du chlorure de calcium). Pour le stockage, submergez les sphères dans un liquide de densité similaire (comme le liquide de base aromatisé sans additifs, ou un sirop de sucre léger) pour empêcher l\'eau de traverser la membrane par osmose, ce qui pourrait faire rétrécir ou éclater les sphères.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
