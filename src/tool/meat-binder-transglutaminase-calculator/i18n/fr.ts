import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculateur de Transglutaminase pour Liaison de Viande: Guide de Dosage en Gastronomie Moléculaire';
const description = 'Calculez le dosage précis de transglutaminase (TG) pour la liaison de viande. Obtenez les ratios pour saupoudrage à sec ou slurry, le temps d\'incubation et les alertes de sécurité de température.';

const faq = [
  {
    question: 'Qu\'est-ce que la transglutaminase et comment lie-t-elle la viande ?',
    answer: 'La transglutaminase (TG), également connue sous le nom de " colle à viande ", est une enzyme qui catalyse la formation de liaisons covalentes entre les acides aminés glutamine et lysine dans les protéines. Appliquée sur les surfaces de viande, elle crée des ponts qui fusionnent des morceaux séparés en un seul bloc cohérent. La réaction nécessite du temps et des températures froides (2-5 °C) pour se développer complètement, généralement de 6 à 24 heures.',
  },
  {
    question: 'Quelle est la différence entre le saupoudrage à sec et l\'application en slurry ?',
    answer: 'Le saupoudrage à sec consiste à saupoudrer la poudre de TG directement sur la surface de la viande à 0,75-1,5 % du poids de la viande. La méthode du slurry mélange une part de TG avec quatre parts d\'eau pour créer une pâte applicable au pinceau, idéale pour les surfaces irrégulières ou l\'application de couches fines et uniformes sur les gros rôtis ou les filets avec peau.',
  },
  {
    question: 'La température affecte-t-elle l\'activité de la transglutaminase ?',
    answer: 'Oui. La TG est la plus active entre 2 °C et 15 °C. À des températures plus élevées (jusqu\'à 40 °C), la réaction s\'accélère mais doit être étroitement surveillée. Au-dessus de 60 °C, l\'enzyme se dénature et devient définitivement inactive: la réaction de pontage s\'arrête complètement. Gardez toujours la viande liée à la TG en dessous de 60 °C pendant la cuisson pour préserver la liaison.',
  },
  {
    question: 'Puis-je utiliser la transglutaminase sur le poisson ou les crustacés ?',
    answer: 'Oui, mais le poisson et les crustacés ont des niveaux plus faibles de lysine et de glutamine dans leurs protéines musculaires par rapport à la viande rouge et à la volaille. Vous pourriez avoir besoin d\'un ratio de TG plus élevé (1,2-1,5 %) et de temps d\'incubation plus longs. Pour les pétoncles délicats ou les filets de poisson fins, envisagez la méthode du slurry pour une couverture plus uniforme.',
  },
];

const howTo = [
  {
    name: 'Choisissez la méthode d\'application',
    text: 'Choisissez le saupoudrage à sec pour les surfaces uniformes comme les rôtis et les steaks. Choisissez le slurry pour les coupes irrégulières, les couches fines ou les protéines avec peau.',
  },
  {
    name: 'Entrez le poids de la viande',
    text: 'Saisissez le poids total de la viande ou de la protéine que vous souhaitez lier en grammes.',
  },
  {
    name: 'Spécifiez le type de protéine',
    text: 'Sélectionnez le type de protéine qui correspond le mieux à votre coupe. Les viandes rouges nécessitent moins de TG ; le poisson et les crustacés en nécessitent davantage.',
  },
  {
    name: 'Définissez la température d\'incubation',
    text: 'Entrez la température de stockage au froid (2-40 °C). Le calculateur estimera le temps de liaison requis.',
  },
  {
    name: 'Pesez et appliquez la TG',
    text: 'Mesurez la poudre de TG calculée. Appliquez par saupoudrage ou en brossant le slurry, puis pressez fermement les surfaces de protéines ensemble.',
  },
  {
    name: 'Repos et réfrigération',
    text: 'Enveloppez hermétiquement dans un film plastique et réfrigérez pendant la période d\'incubation recommandée avant la cuisson.',
  },
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
  slug: 'calculateur-transglutaminase-liaison-viande',
  title: 'Calculateur de Transglutaminase pour Liaison de Viande',
  description: 'Calculez le dosage précis de transglutaminase (TG) pour la liaison de viande. Obtenez les ratios pour saupoudrage à sec ou slurry, le temps d\'incubation et les alertes de sécurité de température.',
  faqTitle: 'Foire Aux Questions',
  ui: {
    title: 'Calculateur de Transglutaminase pour Liaison de Viande',
    subtitle: 'Précision moléculaire pour le pontage des protéines',
    methodLabel: 'Méthode d\'Application',
    dryMethod: 'Saupoudrage à Sec',
    slurryMethod: 'Slurry (Pâte Applicable au Pinceau)',
    weightLabel: 'Poids de la Viande / Protéine',
    proteinLabel: 'Type de Protéine',
    redMeat: 'Viande Rouge (Bœuf, Agneau, Gibier)',
    poultry: 'Volaille (Poulet, Dinde, Canard)',
    fish: 'Poisson (Filets Fermes, Poisson Entier)',
    shellfish: 'Crustacés (Pétoncles, Crevettes, Homard)',
    unitLabel: 'Système de Mesure',
    metricUnit: 'Métrique (g / °C)',
    imperialUnit: 'Impérial (oz / °F)',
    tempLabel: 'Température d\'Incubation',
    resultTitle: 'Résultats de Dosage',
    tgAmount: 'Transglutaminase (TG)',
    waterAmount: 'Eau (pour le Slurry)',
    totalWeight: 'Poids Total Lié',
    ratioLabel: 'Ratio TG',
    incubationLabel: 'Incubation Recommandée',
    incubationRange: '{min}h à {max}h',
    dryDustingDesc: 'Saupoudrez la poudre de TG uniformément sur la surface de la viande, puis pressez les morceaux ensemble. Idéal pour les coupes plates et les rôtis.',
    slurryDesc: 'Mélangez la TG avec 4 parts d\'eau pour créer une pâte applicable au pinceau. Appliquez avec un pinceau pour les surfaces irrégulières, les filets ou la liaison de peau.',
    enzymeDestroyed: 'Enzyme Détruite: La température dépasse le seuil de dénaturation. La transglutaminase est dénaturée et ne liera pas.',
    noWarning: '',
    hours: 'heures',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Quelle quantité de transglutaminase utiliser par kilo de viande ?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La dose appropriée dépend du type de protéine et de la méthode d\'application. Pour la viande rouge, utilisez 0,75:1,0 % de TG en poids (7,5:10 g par kg). Pour la volaille, 1,0:1,2 %. Pour le poisson et les crustacés, 1,2:1,5 %. Appliquez en saupoudrage à sec pour les coupes plates ou mélangez avec 4 parts d\'eau en slurry pour les surfaces irrégulières. Entrez le poids de votre protéine dans le calculateur ci-dessus pour obtenir une mesure exacte.',
    },
    {
      type: 'title',
      text: 'Saupoudrage à sec ou slurry: quelle méthode choisir ?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le saupoudrage à sec fonctionne mieux sur les surfaces planes et uniformes comme les steaks, les rôtis ou les escalopes. Saupoudrez la poudre de TG directement (0,75:1,5 % du poids de la viande) et pressez les morceaux ensemble. La méthode du slurry (1 part de TG pour 4 parts d\'eau) est préférable pour les coupes irrégulières, les filets avec peau ou les pétoncles délicats où une couverture uniforme est importante. Brossez la pâte, assemblez et emballez hermétiquement. Les deux méthodes nécessitent une incubation au froid pour compléter la liaison.',
    },
    {
      type: 'title',
      text: 'Pourquoi le contrôle de la température fait ou défait votre liaison',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La transglutaminase fonctionne le mieux entre 2 °C et 5 °C, formant des ponts solides en 6:24 heures. À des températures de réfrigérateur plus élevées (5:15 °C), la réaction s\'accélère à 3:8 heures, mais les liaisons peuvent être moins profondes. Au-dessus de 40 °C, l\'enzyme se dénature rapidement, et à 60 °C elle est détruite instantanément: toute liaison existante cesse de se former et la viande se séparera pendant la cuisson. Surveillez toujours votre température de stockage au froid avec le thermomètre dans le visualiseur ci-dessus.',
    },
    {
      type: 'table',
      headers: ['Protéine', 'Dose de TG (% du poids)', 'Méthode', 'Incubation (2:5 °C)', 'Solidité de la Liaison'],
      rows: [
        ['Bœuf, Agneau, Gibier', '0,75:1,0 %', 'Saupoudrage à sec', '6:12 h', 'Très solide'],
        ['Poulet, Dinde, Canard', '1,0:1,2 %', 'Les deux', '8:16 h', 'Solide'],
        ['Saumon, Cabillaud, Bar', '1,2:1,5 %', 'Slurry', '12:24 h', 'Modérée'],
        ['Pétoncles, Crevettes, Homard', '1,0:1,5 %', 'Slurry', '12:24 h', 'Modérée'],
      ],
    },
    {
      type: 'title',
      text: 'Erreurs courantes lors de la liaison de la viande avec la TG',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Trop d\'enzyme :</strong> Utiliser plus de 1,5 % de TG laisse un résidu blanc visible et une texture crayeuse. L\'excès ne renforce pas la liaison.',
        '<strong>Graisse ou peau argentée en surface :</strong> La TG ne peut pas se lier à la graisse ou au tissu conjonctif. Taillez les surfaces à vif jusqu\'à voir les fibres musculaires nues avant d\'appliquer.',
        '<strong>Sauter la période de repos :</strong> La réaction de pontage prend des heures. Cuire immédiatement après l\'assemblage éliminera l\'enzyme avant que les liaisons ne se forment.',
        '<strong>Chaleur au-dessus de 60 °C pendant la cuisson :</strong> La liaison tient avec une cuisson douce (la cuisson sous vide à 55:58 °C est idéale), mais les températures de saisie élevées peuvent affaiblir l\'interface.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
