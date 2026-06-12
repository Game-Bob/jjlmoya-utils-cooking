import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur PAC POD de Glace Guide de Formulation Cryogenique";
const description = "Calculez le pouvoir antigel et le pouvoir sucrant pour la glace. Formulez des profils de sucre precis, le pourcentage de solides et les temperatures de service.";
const faq = [
  {
    question: "Qu est ce que le PAC dans la formulation de glace?",
    answer: "PAC signifie Potere Anticongelante, qui represente le pouvoir antigel. Il determine la quantite d eau qui reste congelee a une temperature de service donnee, controlant la durete physique de la glace."
  },
  {
    question: "Qu est ce que le POD et pourquoi est il important?",
    answer: "POD signifie Potere Dolcificante, representant le pouvoir sucrant relatif. Il mesure la douceur par rapport au saccharose (sucre de table), qui a une valeur de base de 100."
  },
  {
    question: "Pourquoi equilibrer plusieurs sucres dans la glace?",
    answer: "Differents sucres ont des caracteristiques uniques de PAC et POD. Par exemple, le dextrose offre un pouvoir antigel eleve avec une douceur moderee, tandis que le saccharose apporte du corps et une douceur standard. Les melanger permet de controler l onctuosite sans rendre le produit trop sucre."
  },
  {
    question: "Quel est le pourcentage optimal de solides pour la glace?",
    answer: "Le pourcentage total de solides se situe generalement entre 36% et 42%. Un pourcentage de solides en dessous de cette plage conduit a des textures glacees, tandis qu un pourcentage au dessus peut entrainer un sablage ou une lourdeur en bouche."
  }
];

const howTo = [
  {
    name: "Regler le melange de base et la temperature de service",
    text: "Definissez le poids de votre melange liquide de base et saisissez la temperature de service cible a laquelle vous comptez servir la glace."
  },
  {
    name: "Saisir les quantites de sucre",
    text: "Ajustez les curseurs pour differents sucres comme le saccharose, le dextrose, le glucose, le sucre inverti et le trehalose pour construire votre recette."
  },
  {
    name: "Analyser les valeurs PAC et POD",
    text: "Comparez les valeurs calculees de PAC et POD avec les valeurs cibles recommandees pour votre temperature cible."
  },
  {
    name: "Verifier le ratio de solides et la texture",
    text: "Assurez vous que le pourcentage total de solides se trouve dans la zone optimale et verifiez l indicateur de texture pour predire la consistance finale."
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
  description: 'Calculez le pouvoir antigel et le pouvoir sucrant pour la glace. Formulez des profils de sucre precis, le pourcentage de solides et les temperatures de service.',
  faqTitle: 'Questions Frequentes',
  ui: {
    title: "Calculateur Cryogenique de Glace",
    subtitle: "Tableau de bord de formulation cryogenique de precision pour gastronomie moleculaire",
    unitLabel: "Systeme d Unites",
    metricUnit: "Metrique (grammes)",
    imperialUnit: "Imperial (onces)",
    baseWeightLabel: "Poids du Melange de Base",
    targetTempLabel: "Temperature de Service",
    sucroseLabel: "Saccharose",
    dextroseLabel: "Dextrose",
    glucoseLabel: "Glucose DE40",
    invertedLabel: "Sucre Inverti",
    trehaloseLabel: "Trehalose",
    pacLabel: "Pouvoir Antigel (PAC)",
    podLabel: "Pouvoir Sucrant (POD)",
    solidsLabel: "Solides Totaux",
    targetPacLabel: "PAC Cible",
    scoopabilityLabel: "Etat de Texture",
    stoneState: "Dur comme la Pierre",
    creamyState: "Onctuosite Parfaite",
    soupState: "Soupe Fondue",
    stoneDesc: "Le pouvoir antigel est trop faible pour cette temperature. Le melange gelerra dure comme de la pierre.",
    creamyDesc: "L equilibre du PAC est optimal. La glace sera onctueuse et facile a servir.",
    soupDesc: "Le pouvoir antigel est trop eleve. La glace fondra rapidement et restera liquide.",
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
      text: 'Principes Scientifiques de la Formulation Cryogenique de Glace et Controle de la Phase de Transition Vitreuse',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La glace est une emulsion thermodynamique multiphase complexe composee de cellules d air, de globules gras, de cristaux de glace et d une phase serique concentree non congelee. Obtenir l onctuosite et la texture parfaites necessite un controle minutieux de l abaissement du point de congelation de l eau dans le melange. A mesure que la temperature descend en dessous du point de congelation, l eau commence a cristalliser en glace. La concentration de solutes dissous dans le serum liquide restant augmente, ce qui abaisse encore son point de congelation. L equilibre entre les cristaux de glace et la phase sirupeuse non congelee determine la durete et le lisse du produit final.',
    },
    {
      type: 'title',
      text: 'Comprendre le PAC: Pouvoir Antigel et Mathematiques de Depression',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, ou Potere Anticongelante, represente le pouvoir antigel d un solute par rapport au saccharose. Le saccharose est designe comme la reference standard avec une valeur PAC de 100. Le mecanisme est regi par des proprietes colligatives, ce qui signifie que l abaissement du point de congelation depend du nombre de molecules actives dissoutes dans l eau, plutot que de leur masse. Les monosaccharides comme le dextrose (poids moleculaire 180 g/mol) fournissent approximativement deux fois plus de molecules par gramme que les disaccharides comme le saccharose (poids moleculaire 342 g/mol), resultant en un PAC de 190. Des valeurs PAC plus elevees signifient que plus d eau reste liquide a une temperature donnee, empechant la glace de geler dure comme de la pierre.',
    },
    {
      type: 'title',
      text: 'Comprendre le POD: Pouvoir Sucrant et Equilibre Sensoriel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, ou Potere Dolcificante, est une mesure de la douceur relative comparee au saccharose (valeur de base 100). Lors de la formulation de glaces de haute qualite, equilibrer la douceur est tout aussi important que la solidite structurelle. Si un formulateur utilise uniquement du saccharose pour abaisser le point de congelation (augmenter le PAC), la glace deviendra ecceurantement sucre avant d atteindre la douceur souhaitee. Pour contourner cette limitation, la gastronomie moleculaire utilise des sucres comme le dextrose (POD 70), le trehalose (POD 45) ou le glucose atomise DE40 (POD 40). Ceux ci permettent de configurer la courbe de congelation sans submerger le palais.',
    },
    {
      type: 'title',
      text: 'Base de Donnees Comparative des Sucres Courants pour Formulation Cryogenique',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Type de Sucre', 'PAC Relatif', 'POD Relatif', 'Teneur en Solides (%)', 'Utilisation Culinaire'],
      rows: [
        ['Saccharose', '100', '100', '100%', 'Corps standard, profil sucre propre, ligne de base standard'],
        ['Dextrose', '190', '70', '100%', 'Abaisse le point de congelation, augmente le moelleux, reduit la douceur'],
        ['Glucose DE40', '90', '40', '95%', 'Ajoute du corps, empeche la recristallisation, augmente la viscosite'],
        ['Sucre Inverti', '190', '130', '70%', 'Ajoute du moelleux, proprietes humectantes, rehausse les saveurs fruitees'],
        ['Trehalose', '100', '45', '90%', 'Agent de corps a faible douceur, protege les proteines, finition nette'],
      ],
    },
    {
      type: 'title',
      text: 'Ratio de Solides Totaux et Stabilite de l Emulsion Structurelle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les solides totaux comprennent tous les elements non aqueux de la formulation, y compris les matieres grasses, les solides du lait non gras, les stabilisants, les emulsifiants et les sucres. Un melange de glace optimal contient entre 36% et 42% de solides totaux. Si les solides sont trop faibles, la teneur elevee en eau entraine la croissance de gros cristaux de glace et une texture grossiere. Si les solides sont trop eleves, la viscosite augmente excessivement, resultant en une lourdeur en bouche et un sablage potentiel du a la cristallisation du lactose.',
    },
    {
      type: 'title',
      text: 'Etapes Pratiques pour une Formulation Cryogenique Reussie',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Determinez la temperature de service cible de votre vitrine. Les gelatos sont typiquement servis a -12 degres Celsius, tandis que les glaces industrielles sont servies plus froides a -18 degres Celsius.',
        'Calculez le PAC cible en utilisant la formule de temperature standard. Pour -12 degres Celsius, le PAC cible est d environ 216.',
        'Selectionnez un melange de sucres. Combinez le saccharose pour la douceur standard, le dextrose pour abaisser le point de congelation et le glucose pour ameliorer le corps et la texture.',
        'Verifiez que les solides totaux se situent dans la plage sure de 36% a 42% pour garantir une aeration optimale et un profil de fonte lisse en bouche.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
