import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur PAC POD de Glace Guide de Formulation Cryogénique";
const description = "Calculez le pouvoir antigel et le pouvoir sucrant pour la glace. Formulez des profils de sucre précis, le pourcentage de solides et les températures de service.";
const faq = [
  {
    question: "Qu'est-ce que le PAC dans la formulation de glace?",
    answer: "PAC signifie Potere Anticongelante, qui représente le pouvoir antigel. Il détermine la quantité d'eau qui reste congelée à une température de service donnée, contrôlant la dureté physique de la glace."
  },
  {
    question: "Qu'est-ce que le POD et pourquoi est-il important?",
    answer: "POD signifie Potere Dolcificante, représentant le pouvoir sucrant relatif. Il mesure la douceur par rapport au saccharose (sucre de table), qui a une valeur de base de 100."
  },
  {
    question: "Pourquoi équilibrer plusieurs sucres dans la glace?",
    answer: "Différents sucres ont des caractéristiques uniques de PAC et POD. Par exemple, le dextrose offre un pouvoir antigel élevé avec une douceur modérée, tandis que le saccharose apporte du corps et une douceur standard. Les mélanger permet de contrôler l'onctuosité sans rendre le produit trop sucré."
  },
  {
    question: "Quel est le pourcentage optimal de solides pour la glace?",
    answer: "Le pourcentage total de solides se situe généralement entre 36% et 42%. Un pourcentage de solides en dessous de cette plage conduit à des textures glacées, tandis qu'un pourcentage au-dessus peut entraîner un sablage ou une lourdeur en bouche."
  }
];

const howTo = [
  {
    name: "Régler le mélange de base et la température de service",
    text: "Définissez le poids de votre mélange liquide de base et saisissez la température de service cible à laquelle vous comptez servir la glace."
  },
  {
    name: "Saisir les quantités de sucre",
    text: "Ajustez les curseurs pour différents sucres comme le saccharose, le dextrose, le glucose, le sucre inverti et le tréhalose pour construire votre recette."
  },
  {
    name: "Analyser les valeurs PAC et POD",
    text: "Comparez les valeurs calculées de PAC et POD avec les valeurs cibles recommandées pour votre température cible."
  },
  {
    name: "Vérifier le ratio de solides et la texture",
    text: "Assurez-vous que le pourcentage total de solides se trouve dans la zone optimale et vérifiez l'indicateur de texture pour prédire la consistance finale."
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
  slug: 'glace-pac-pod',
  title: 'Calculateur PAC POD de Glace',
  description: 'Calculez le pouvoir antigel et le pouvoir sucrant pour la glace. Formulez des profils de sucre précis, le pourcentage de solides et les températures de service.',
  faqTitle: 'Questions Fréquentes',
  ui: {
    title: "Calculateur Cryogénique de Glace",
    subtitle: "Tableau de bord de formulation cryogénique de précision pour gastronomie moléculaire",
    unitLabel: "Système d'Unités",
    metricUnit: "Métrique (grammes)",
    imperialUnit: "Impérial (onces)",
    baseWeightLabel: "Poids du Mélange de Base",
    targetTempLabel: "Température de Service",
    sucroseLabel: "Saccharose",
    dextroseLabel: "Dextrose",
    glucoseLabel: "Glucose DE40",
    invertedLabel: "Sucre Inverti",
    trehaloseLabel: "Tréhalose",
    pacLabel: "Pouvoir Antigel (PAC)",
    podLabel: "Pouvoir Sucrant (POD)",
    solidsLabel: "Solides Totaux",
    targetPacLabel: "PAC Cible",
    scoopabilityLabel: "État de Texture",
    stoneState: "Dur comme la Pierre",
    creamyState: "Onctuosité Parfaite",
    soupState: "Soupe Fondue",
    stoneDesc: "Le pouvoir antigel est trop faible pour cette température. Le mélange gèlera dur comme de la pierre.",
    creamyDesc: "L'équilibre du PAC est optimal. La glace sera onctueuse et facile à servir.",
    soupDesc: "Le pouvoir antigel est trop élevé. La glace fondra rapidement et restera liquide.",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "deg C",
    fLabel: "deg F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Principes Scientifiques de la Formulation Cryogénique de Glace et Contrôle de la Phase de Transition Vitreuse',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La glace est une émulsion thermodynamique multiphase complexe composée de cellules d\'air, de globules gras, de cristaux de glace et d\'une phase sérique concentrée non congelée. Obtenir l\'onctuosité et la texture parfaites nécessite un contrôle minutieux de l\'abaissement du point de congélation de l\'eau dans le mélange. À mesure que la température descend en dessous du point de congélation, l\'eau commence à cristalliser en glace. La concentration de solutés dissous dans le sérum liquide restant augmente, ce qui abaisse encore son point de congélation. L\'équilibre entre les cristaux de glace et la phase sirupeuse non congelée détermine la dureté et le lisse du produit final.',
    },
    {
      type: 'title',
      text: 'Comprendre le PAC: Pouvoir Antigel et Mathématiques de Dépression',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, ou Potere Anticongelante, représente le pouvoir antigel d\'un soluté par rapport au saccharose. Le saccharose est désigné comme la référence standard avec une valeur PAC de 100. Le mécanisme est régi par des propriétés colligatives, ce qui signifie que l\'abaissement du point de congélation dépend du nombre de molécules actives dissoutes dans l\'eau, plutôt que de leur masse. Les monosaccharides comme le dextrose (poids moléculaire 180 g/mol) fournissent approximativement deux fois plus de molécules par gramme que les disaccharides comme le saccharose (poids moléculaire 342 g/mol), résultant en un PAC de 190. Des valeurs PAC plus élevées signifient que plus d\'eau reste liquide à une température donnée, empêchant la glace de geler dure comme de la pierre.',
    },
    {
      type: 'title',
      text: 'Comprendre le POD: Pouvoir Sucrant et Équilibre Sensoriel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, ou Potere Dolcificante, est une mesure de la douceur relative comparée au saccharose (valeur de base 100). Lors de la formulation de glaces de haute qualité, équilibrer la douceur est tout aussi important que la solidité structurelle. Si un formulateur utilise uniquement du saccharose pour abaisser le point de congélation (augmenter le PAC), la glace deviendra écœuramment sucrée avant d\'atteindre la douceur souhaitée. Pour contourner cette limitation, la gastronomie moléculaire utilise des sucres comme le dextrose (POD 70), le tréhalose (POD 45) ou le glucose atomisé DE40 (POD 40). Ceux-ci permettent de configurer la courbe de congélation sans submerger le palais.',
    },
    {
      type: 'title',
      text: 'Base de Données Comparative des Sucres Courants pour Formulation Cryogénique',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Type de Sucre', 'PAC Relatif', 'POD Relatif', 'Teneur en Solides (%)', 'Utilisation Culinaire'],
      rows: [
        ['Saccharose', '100', '100', '100%', 'Corps standard, profil sucré propre, ligne de base standard'],
        ['Dextrose', '190', '70', '100%', 'Abaisse le point de congélation, augmente le moelleux, réduit la douceur'],
        ['Glucose DE40', '90', '40', '95%', 'Ajoute du corps, empêche la recristallisation, augmente la viscosité'],
        ['Sucre Inverti', '190', '130', '70%', 'Ajoute du moelleux, propriétés humectantes, rehausse les saveurs fruitées'],
        ['Tréhalose', '100', '45', '90%', 'Agent de corps à faible douceur, protège les protéines, finition nette'],
      ],
    },
    {
      type: 'title',
      text: 'Ratio de Solides Totaux et Stabilité de l\'Émulsion Structurelle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les solides totaux comprennent tous les éléments non aqueux de la formulation, y compris les matières grasses, les solides du lait non gras, les stabilisants, les émulsifiants et les sucres. Un mélange de glace optimal contient entre 36% et 42% de solides totaux. Si les solides sont trop faibles, la teneur élevée en eau entraîne la croissance de gros cristaux de glace et une texture grossière. Si les solides sont trop élevés, la viscosité augmente excessivement, résultant en une lourdeur en bouche et un sablage potentiel dû à la cristallisation du lactose.',
    },
    {
      type: 'title',
      text: 'Étapes Pratiques pour une Formulation Cryogénique Réussie',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Déterminez la température de service cible de votre vitrine. Les gelatos sont typiquement servis à -12 degrés Celsius, tandis que les glaces industrielles sont servies plus froides à -18 degrés Celsius.',
        'Calculez le PAC cible en utilisant la formule de température standard. Pour -12 degrés Celsius, le PAC cible est d\'environ 216.',
        'Sélectionnez un mélange de sucres. Combinez le saccharose pour la douceur standard, le dextrose pour abaisser le point de congélation et le glucose pour améliorer le corps et la texture.',
        'Vérifiez que les solides totaux se situent dans la plage sûre de 36% à 42% pour garantir une aération optimale et un profil de fonte lisse en bouche.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
