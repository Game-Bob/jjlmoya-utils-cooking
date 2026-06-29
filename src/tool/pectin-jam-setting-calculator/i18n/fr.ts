import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculateur de Pectine et de Prise de Confiture pour un Gel Parfait à Chaque Fois';
const description = 'Calculez exactement la quantité de pectine, d\'acide citrique et de sucre dont vos fruits ont besoin pour obtenir une prise de confiture parfaite. Évitez les conserves trop liquides ou caoutchouteuses grâce à une chimie de précision.';

const faq = [
  {
    question: 'Pourquoi la pectine fait-elle gélifier la confiture?',
    answer: 'La pectine est un polysaccharide naturel présent dans les parois cellulaires des fruits. Lorsqu\'elle est chauffée avec du sucre et de l\'acide (pH 2,8-3,5), les molécules de pectine forment un réseau tridimensionnel de gel qui piège l\'eau et le sucre, créant la texture tartinable de la confiture.',
  },
  {
    question: 'Quelle est la différence entre la pectine HM et LM?',
    answer: 'La pectine à haute teneur en méthoxyle (HM) nécessite au moins 60% de sucre et un pH inférieur à 3,5 pour gélifier - idéale pour les confitures traditionnelles. La pectine à faible teneur en méthoxyle (LM) gélifie via des ions calcium au lieu du sucre, permettant des conserves à faible teneur en sucre ou sans sucre.',
  },
  {
    question: 'Pourquoi ma confiture est-elle parfois trop liquide?',
    answer: 'Une confiture liquide résulte généralement d\'une quantité insuffisante de pectine (le fruit en manque naturellement), d\'un manque d\'acide (pH trop élevé pour la gélification) ou d\'un manque de sucre (pour la pectine HM). Une dilution excessive avec de l\'eau ou une cuisson insuffisante peuvent également empêcher la prise.',
  },
  {
    question: 'Puis-je utiliser du jus de citron au lieu de l\'acide citrique en poudre?',
    answer: 'Oui. Ce calculateur convertit l\'acide citrique en équivalents de jus de citron. Environ 25 ml de jus de citron fournissent la même acidité que 1 g d\'acide citrique. Le jus de citron ajoute également une saveur fraîche aux confitures.',
  },
  {
    question: 'Quels fruits sont naturellement riches en pectine?',
    answer: 'Les pommes, les coings, les mûres, les canneberges et les groseilles sont naturellement riches en pectine et ne nécessitent souvent pas de pectine ajoutée. Les fruits pas tout à fait mûrs contiennent également plus de pectine que les fruits parfaitement mûrs.',
  },
];

const howTo = [
  {
    name: 'Sélectionnez votre fruit',
    text: 'Choisissez le fruit avec lequel vous préparez la confiture. Chaque fruit a des niveaux naturels de pectine et d\'acidité différents qui déterminent les additifs nécessaires.',
  },
  {
    name: 'Pesez votre fruit préparé',
    text: 'Entrez le poids de votre fruit nettoyé et coupé en grammes. Une pesée précise est essentielle pour une confiture réussie.',
  },
  {
    name: 'Choisissez votre type de pectine',
    text: 'Sélectionnez Classique (HM) pour une confiture traditionnelle riche en sucre, ou Faible en Sucre (LM) pour une conserve plus saine, à teneur réduite en sucre, activée par le calcium.',
  },
  {
    name: 'Consultez votre recette parfaite',
    text: 'Le calculateur indique les grammes exacts de pectine en poudre, d\'acide citrique (ou de jus de citron) et de sucre nécessaires. Ajoutez-les pendant la cuisson pour une prise garantie.',
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
  slug: 'calculateur-pectine-confiture',
  title: 'Calculateur de Pectine et Prise de Confiture',
  description: 'Calculez exactement la quantité de pectine, d\'acide citrique et de sucre dont vos fruits ont besoin pour une prise de confiture parfaite - plus de conserves liquides ni caoutchouteuses.',
  faqTitle: 'Foire Aux Questions',
  ui: {
    title: 'Calculateur de Pectine et Prise de Confiture',
    subtitle: 'Chimie de gélification de précision pour des conserves parfaites',
    fruitLabel: 'Choisissez votre fruit',
    allFruits: 'Tous',
    highPectin: 'Riche en Pectine',
    mediumPectin: 'Moyennement Riche',
    lowPectin: 'Pauvre en Pectine',
    weightLabel: 'Poids du fruit',
    weightPlaceholder: 'ex. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Type de pectine',
    pectinHM: 'Classique (HM)',
    pectinLM: 'Faible en Sucre (LM)',
    sugarModeLabel: 'Mode de sucre',
    sugarModeAuto: 'Auto',
    sugarModeManual: 'Manuel',
    sugarLabel: 'Poids du sucre',
    sugarPlaceholder: 'ex. 650',
    recipeTitle: 'Recette',
    pectinNeeded: 'Pectine',
    citricAcidNeeded: 'Acide Citrique',
    lemonJuiceNeeded: 'Jus de Citron',
    sugarNeeded: 'Sucre',
    totalYield: 'Rendement Total',
    sugarPercent: 'Sucre',
    sugarLow: 'Faible',
    sugarIdeal: 'Idéal',
    sugarHigh: 'Élevé',
    sugarOfFruit: 'du poids du fruit',
    sugarOfTotal: 'du total',
    statusPerfect: 'Gel Parfait',
    statusPerfectDesc: 'Vos proportions sont équilibrées. La confiture prendra magnifiquement avec une texture soyeuse et tartinable et un éclat brillant.',
    statusSlightlyThin: 'Légèrement Liquide',
    statusSlightlyThinDesc: 'La confiture peut prendre doucement. Envisagez d\'ajouter plus de pectine ou de réduire la teneur en eau pour un gel plus ferme.',
    statusTooThin: 'Trop Liquide - Risque de Confiture Coulante',
    statusTooThinDesc: 'Sans ajustement, cette confiture restera probablement liquide. Augmentez le sucre (pour HM) ou ajoutez plus de pectine.',
    statusTooStiff: 'Trop Ferme',
    statusTooStiffDesc: 'Le gel peut devenir caoutchouteux. Réduisez la pectine de moitié ou augmentez légèrement le poids du fruit.',
    dropTestTitle: 'Test de l\'Assiette Froide',
    dropTestHow: 'Déposer sur une assiette refroidie',
    dropStatusLabel: 'Résultat',
    dropTestPerfect: 'Prendra. La goutte se plisse et tient',
    dropTestThin: 'Liquide. Elle glisse sur l\'assiette',
    dropTestStiff: 'Trop ferme. Bouge à peine',
    dropPlateLabel: 'assiette',
    dropDropLabel: 'goutte',
    sugarAutoHint: 'calculé automatiquement',
    sugarManualHint: 'entrer la quantité',
    unitLabel: 'Système de Mesure',
    metricLabel: 'Métrique (g)',
    imperialLabel: 'Impérial (oz)',
    disclaimer: 'Pesez tous les ingrédients avec une balance de cuisine numérique pour de meilleurs résultats. Les mesures volumétriques ne sont pas fiables pour la confiture.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Science Complète de la Prise de Confiture: Équilibre Pectine, Acide et Sucre',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La confiture est une intersection précise entre la chimie et la cuisine. Au coeur de ce processus, la transformation de la pulpe de fruit en un gel ferme et tartinable dépend de l\'équilibre correct de trois molécules: <strong>la pectine</strong> (l\'agent gélifiant), <strong>l\'acide</strong> (le catalyseur qui active la pectine) et <strong>le sucre</strong> (l\'agent déshydratant qui extrait l\'eau des chaînes de pectine). Sans les bonnes proportions, on obtient soit une soupe de fruits, soit un bloc caoutchouteux.',
    },
    {
      type: 'title',
      text: 'Comment la Pectine Forme un Réseau de Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pectine est un polysaccharide complexe composé principalement d\'unités d\'acide galacturonique, présent dans la lamelle moyenne des parois cellulaires végétales. Dans son état naturel, les molécules de pectine sont chargées négativement et se repoussent mutuellement, restant dissoutes dans l\'eau du fruit. Pour former un gel, trois conditions doivent être remplies simultanément: (1) suffisamment de sucre doit être présent pour entrer en compétition avec les molécules d\'eau, déshydratant les chaînes de pectine; (2) le pH doit descendre en dessous de 3,5, neutralisant les charges négatives par protonation des groupes carboxyle; et (3) la température doit dépasser 104-105 °C pour dissoudre et activer complètement la pectine. Lorsque ces conditions sont réunies, les chaînes de pectine forment des zones de jonction - régions où les chaînes s\'associent par liaisons hydrogène et interactions hydrophobes - créant un réseau tridimensionnel continu semblable à une éponge qui piège le jus de fruit et le sirop de sucre.',
    },
    {
      type: 'title',
      text: 'Pectine à Haute Teneur en Méthoxyle (HM) vs. Faible Teneur en Méthoxyle (LM)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pectine est classée selon son degré d\'estérification (DE), qui est le pourcentage de groupes carboxyle estérifiés avec du méthanol. <strong>La pectine à haute teneur en méthoxyle (HM)</strong> (DE > 50%) nécessite un minimum de 55-65% de solides solubles (sucre) et un pH entre 2,8 et 3,5 pour former un gel. C\'est la pectine classique utilisée dans les recettes traditionnelles de confiture. Sans suffisamment de sucre, la pectine HM forme un gel faible ou inexistant. <strong>La pectine à faible teneur en méthoxyle (LM)</strong> (DE < 50%) gélifie par un mécanisme différent: elle se réticule via des ions calcium divalents (Ca) qui forment des ponts entre les groupes carboxyle libres. La pectine LM peut gélifier avec peu ou pas de sucre ajouté, ce qui la rend idéale pour les conserves faibles en calories, adaptées aux diabétiques ou sucrées naturellement. Certaines pectines LM tolèrent également une plage de pH plus large jusqu\'à 5,5, utile pour les fruits peu acides comme les figues et les poires.',
    },
    {
      type: 'title',
      text: 'Teneur Naturelle en Pectine selon les Variétés de Fruits',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tous les fruits ne sont pas égaux en matière de pectine. Les fruits se répartissent en trois catégories selon leurs niveaux naturels de pectine et d\'acidité. Savoir où se situe votre fruit sur ce spectre détermine si vous devez ajouter de la pectine en poudre ou de l\'acide citrique.',
    },
    {
      type: 'table',
      headers: ['Niveau de Pectine', 'Niveau d\'Acidité', 'Fruits Exemples', 'Pectine Ajoutée Nécessaire'],
      rows: [
        ['Élevé', 'Élevé', 'Pomme, Canneberge, Groseille', '0% (aucune)'],
        ['Élevé', 'Moyen/Faible', 'Coing, Mûre', '0% (aucune)'],
        ['Moyen', 'Élevé', 'Framboise, Loganberry', '0,3% du poids du fruit'],
        ['Moyen', 'Moyen', 'Prune, Abricot', '0,3% du poids du fruit'],
        ['Moyen', 'Faible', 'Myrtille', '0,3% du poids du fruit'],
        ['Faible', 'Élevé', 'Cerise, Raisin', '0,6% du poids du fruit'],
        ['Faible', 'Moyen', 'Pêche, Mangue', '0,6% du poids du fruit'],
        ['Faible', 'Faible', 'Fraise, Poire, Figue', '0,6% du poids du fruit'],
      ],
    },
    {
      type: 'title',
      text: 'Le Rôle Critique du pH dans la Gélification de la Confiture',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le pH du mélange de confiture est sans doute la variable la plus négligée dans la conservation maison. À un pH supérieur à 3,8, les groupes carboxyle de la pectine restent ionisés (chargés négativement), créant une répulsion électrostatique qui empêche la formation du gel, quelle que soit la quantité de sucre ou de pectine ajoutée. Lorsque le pH descend en dessous de 3,5 grâce à l\'ajout d\'acide citrique ou de jus de citron, ces groupes deviennent protonés, permettant la formation de liaisons hydrogène entre les chaînes de pectine adjacentes. La zone optimale de gélification se situe entre pH 2,8 et 3,2. En dessous de pH 2,8, le gel devient cassant et peut présenter une synérèse (exsudation de liquide). Au-dessus de pH 3,5, une synérèse se produit également et le gel est trop faible. C\'est pourquoi les fruits peu acides comme les figues et les fraises ont presque toujours besoin d\'acide citrique ajouté: leur pH naturel est trop élevé pour activer correctement la pectine.',
    },
    {
      type: 'title',
      text: 'Concentration en Sucre et son Effet sur la Force du Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le sucre remplit deux fonctions dans la confiture à la pectine HM. Premièrement, il est hautement hygroscopique: il entre en compétition intense avec la pectine pour les molécules d\'eau, retirant les couches d\'hydratation des chaînes de pectine et les forçant à interagir entre elles. Deuxièmement, il élève le point d\'ébullition du mélange, permettant à la confiture d\'atteindre le point de prise de 104-105 °C. À une concentration de sucre de 65%, les chaînes de pectine sont suffisamment déshydratées pour former un gel fort. En dessous de 60%, le gel s\'affaiblit linéairement. Au-dessus de 68%, la confiture peut cristalliser en refroidissant lorsque le sucre dépasse sa limite de solubilité. Pour les confitures à la pectine LM, le sucre ne joue qu\'un rôle de saveur puisque la gélification dépend des ponts de calcium. La teneur en sucre peut être aussi faible que 5-10% dans les conserves à la pectine LM sucrées avec des édulcorants non nutritifs.',
    },
    {
      type: 'title',
      text: 'Acide Citrique vs. Jus de Citron: Conversion et Bonnes Pratiques',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'acide citrique (C₆H₈O₇) est l\'acide principal utilisé dans la fabrication commerciale de confitures car il est standardisé, sans saveur et précis. Le jus de citron contient environ 5% d\'acide citrique en poids, plus de l\'acide malique et de l\'acide ascorbique (vitamine C). <strong>1 gramme d\'acide citrique pur équivaut environ à 25 ml de jus de citron frais</strong> en termes de pouvoir d\'abaissement du pH. Cependant, le jus de citron ajoute également du volume de liquide, ce qui doit être pris en compte dans la teneur totale en eau. Pour les résultats les plus constants, utilisez de l\'acide citrique en poudre dissous dans une petite quantité d\'eau. Lorsque vous utilisez du jus de citron, prévoyez 20-30 ml supplémentaires de liquide qui doivent être évaporés pour atteindre le point de prise.',
    },
    {
      type: 'title',
      text: 'Le Test de l\'Assiette Froide: Une Méthode Visuelle pour Déterminer le Point de Prise',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le traditionnel test de l\'assiette froide (aussi appelé test de la ride ou test de la soucoupe) reste l\'une des méthodes les plus fiables pour les confituriers amateurs. Placez une petite assiette en céramique au congélateur pendant 10 minutes avant de commencer la cuisson. Lorsque vous pensez que la confiture a atteint son point de prise, déposez une cuillère à café de confiture chaude sur l\'assiette froide et laissez refroidir pendant 30 secondes. Poussez le bord de la goutte avec le bout du doigt: si la surface se plisse distinctement et que la goutte garde sa forme, le point de gel est atteint. Si elle coule librement, continuez à bouillir pendant 2-3 minutes et testez à nouveau. Ce calculateur simule visuellement ce test, vous montrant si les proportions de votre recette réussiront le test de l\'assiette avant même de commencer à cuisiner.',
    },
    {
      type: 'title',
      text: 'Dépannage: Pourquoi les Confitures Échouent et Comment y Remédier',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Confiture liquide (n\'a pas pris après refroidissement):</strong> La cause la plus courante est une ébullition insuffisante - le mélange n\'a jamais atteint 104-105 °C. Faites rebouillir la confiture, en ajoutant 1-2 g d\'acide citrique par kg de fruit et testez avec la méthode de l\'assiette froide. Alternativement, dissolvez 5 g de pectine en poudre dans de l\'eau froide, incorporez à la confiture en ébullition et cuisez 2 minutes supplémentaires.',
        '<strong>Confiture caoutchouteuse ou trop ferme:</strong> Trop de pectine a été ajoutée par rapport au poids du fruit, ou la confiture a été trop cuite au-delà de 106 °C, dégradant le réseau de pectine en une structure rigide et cassante. Pour récupérer, réchauffez doucement avec 100-200 ml de jus de pomme ou d\'eau pour diluer la concentration de pectine.',
        '<strong>Synérèse (eau qui suinte du gel):</strong> Cela indique un excès d\'acide (pH inférieur a 2,8) ou de sucre au-dessus de 68%, ce qui fait que le réseau de pectine se contracte et expulse l\'eau. Ajoutez une petite quantité de bicarbonate de soude pour augmenter le pH progressivement.',
        '<strong>Cristallisation (texture granuleuse):</strong> La concentration en sucre a dépassé la solubilité, ou des cristaux de sucre non dissous ont agi comme sites de nucléation. Remuez constamment pendant l\'ébullition finale et ajoutez 1 cuillère à soupe de sirop de maïs ou de glucose, qui inhibe la cristallisation.',
        '<strong>Moisissure en surface pendant le stockage:</strong> La confiture n\'a pas été suffisamment cuite (n\'a pas atteint la température de stérilisation), contenait trop peu de sucre (en dessous de 60% pour la pectine HM) ou les pots n\'ont pas été correctement stérilisés. Utilisez toujours des pots stérilisés et traitez au bain-marie pendant 10 minutes.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
