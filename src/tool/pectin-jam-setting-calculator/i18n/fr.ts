import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculateur de Pectine et de Prise de Confiture pour un Gel Parfait a Chaque Fois';
const description = 'Calculez exactement la quantite de pectine, d\'acide citrique et de sucre dont vos fruits ont besoin pour obtenir une prise de confiture parfaite. Evitez les conserves trop liquides ou caoutchouteuses grace a une chimie de precision.';

const faq = [
  {
    question: 'Pourquoi la pectine fait-elle gelifier la confiture?',
    answer: 'La pectine est un polysaccharide naturel present dans les parois cellulaires des fruits. Lorsqu\'elle est chauffee avec du sucre et de l\'acide (pH 2,8-3,5), les molecules de pectine forment un reseau tridimensionnel de gel qui piege l\'eau et le sucre, creant la texture tartinable de la confiture.',
  },
  {
    question: 'Quelle est la difference entre la pectine HM et LM?',
    answer: 'La pectine a haute teneur en methoxyle (HM) necessite au moins 60% de sucre et un pH inferieur a 3,5 pour gelifier - ideale pour les confitures traditionnelles. La pectine a faible teneur en methoxyle (LM) gelifie via des ions calcium au lieu du sucre, permettant des conserves a faible teneur en sucre ou sans sucre.',
  },
  {
    question: 'Pourquoi ma confiture est-elle parfois trop liquide?',
    answer: 'Une confiture liquide resulte generalement d\'une quantite insuffisante de pectine (le fruit en manque naturellement), d\'un manque d\'acide (pH trop eleve pour la gelification) ou d\'un manque de sucre (pour la pectine HM). Une dilution excessive avec de l\'eau ou une cuisson insuffisante peuvent egalement empecher la prise.',
  },
  {
    question: 'Puis-je utiliser du jus de citron au lieu de l\'acide citrique en poudre?',
    answer: 'Oui. Ce calculateur convertit l\'acide citrique en equivalents de jus de citron. Environ 25 ml de jus de citron fournissent la meme acidite que 1 g d\'acide citrique. Le jus de citron ajoute egalement une saveur fraiche aux confitures.',
  },
  {
    question: 'Quels fruits sont naturellement riches en pectine?',
    answer: 'Les pommes, les coings, les mures, les canneberges et les groseilles sont naturellement riches en pectine et ne necessitent souvent pas de pectine ajoutee. Les fruits pas tout a fait murs contiennent egalement plus de pectine que les fruits parfaitement murs.',
  },
];

const howTo = [
  {
    name: 'Selectionnez votre fruit',
    text: 'Choisissez le fruit avec lequel vous preparez la confiture. Chaque fruit a des niveaux naturels de pectine et d\'acidite differents qui determinent les additifs necessaires.',
  },
  {
    name: 'Pesez votre fruit prepare',
    text: 'Entrez le poids de votre fruit nettoye et coupe en grammes. Une pesee precise est essentielle pour une confiture reussie.',
  },
  {
    name: 'Choisissez votre type de pectine',
    text: 'Selectionnez Classique (HM) pour une confiture traditionnelle riche en sucre, ou Faible en Sucre (LM) pour une conserve plus saine, a teneur reduite en sucre, activee par le calcium.',
  },
  {
    name: 'Consultez votre recette parfaite',
    text: 'Le calculateur indique les grammes exacts de pectine en poudre, d\'acide citrique (ou de jus de citron) et de sucre necessaires. Ajoutez-les pendant la cuisson pour une prise garantie.',
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
  description: 'Calculez exactement la quantite de pectine, d\'acide citrique et de sucre dont vos fruits ont besoin pour une prise de confiture parfaite - plus de conserves liquides ni caoutchouteuses.',
  faqTitle: 'Foire Aux Questions',
  ui: {
    title: 'Calculateur de Pectine et Prise de Confiture',
    subtitle: 'Chimie de gelification de precision pour des conserves parfaites',
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
    sugarIdeal: 'Ideal',
    sugarHigh: 'Eleve',
    sugarOfFruit: 'du poids du fruit',
    sugarOfTotal: 'du total',
    statusPerfect: 'Gel Parfait',
    statusPerfectDesc: 'Vos proportions sont equilibrees. La confiture prendra magnifiquement avec une texture soyeuse et tartinable et un eclat brillant.',
    statusSlightlyThin: 'Legerement Liquide',
    statusSlightlyThinDesc: 'La confiture peut prendre doucement. Envisagez d\'ajouter plus de pectine ou de reduire la teneur en eau pour un gel plus ferme.',
    statusTooThin: 'Trop Liquide - Risque de Confiture Coulante',
    statusTooThinDesc: 'Sans ajustement, cette confiture restera probablement liquide. Augmentez le sucre (pour HM) ou ajoutez plus de pectine.',
    statusTooStiff: 'Trop Ferme',
    statusTooStiffDesc: 'Le gel peut devenir caoutchouteux. Reduisez la pectine de moitie ou augmentez legerement le poids du fruit.',
    dropTestTitle: 'Test de l\'Assiette Froide',
    dropTestHow: 'Deposer sur une assiette refroidie',
    dropStatusLabel: 'Resultat',
    dropTestPerfect: 'Prendra. La goutte se plisse et tient',
    dropTestThin: 'Liquide. Elle glisse sur l\'assiette',
    dropTestStiff: 'Trop ferme. Bouge a peine',
    dropPlateLabel: 'assiette',
    dropDropLabel: 'goutte',
    sugarAutoHint: 'calcule automatiquement',
    sugarManualHint: 'entrer la quantite',
    unitLabel: 'Systeme de Mesure',
    metricLabel: 'Metrique (g)',
    imperialLabel: 'Imperial (oz)',
    disclaimer: 'Pesez tous les ingredients avec une balance de cuisine numerique pour de meilleurs resultats. Les mesures volumetriques ne sont pas fiables pour la confiture.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Science Complete de la Prise de Confiture: Equilibre Pectine, Acide et Sucre',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La confiture est une intersection precise entre la chimie et la cuisine. Au coeur de ce processus, la transformation de la pulpe de fruit en un gel ferme et tartinable depend de l\'equilibre correct de trois molecules: <strong>la pectine</strong> (l\'agent gelifiant), <strong>l\'acide</strong> (le catalyseur qui active la pectine) et <strong>le sucre</strong> (l\'agent deshydratant qui extrait l\'eau des chaines de pectine). Sans les bonnes proportions, on obtient soit une soupe de fruits, soit un bloc caoutchouteux.',
    },
    {
      type: 'title',
      text: 'Comment la Pectine Forme un Reseau de Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pectine est un polysaccharide complexe compose principalement d\'unites d\'acide galacturonique, present dans la lamelle moyenne des parois cellulaires vegetales. Dans son etat naturel, les molecules de pectine sont chargees negativement et se repoussent mutuellement, restant dissoutes dans l\'eau du fruit. Pour former un gel, trois conditions doivent etre remplies simultanement: (1) suffisamment de sucre doit etre present pour entrer en competition avec les molecules d\'eau, deshydratant les chaines de pectine; (2) le pH doit descendre en dessous de 3,5, neutralisant les charges negatives par protonation des groupes carboxyle; et (3) la temperature doit depasser 104-105 C pour dissoudre et activer completement la pectine. Lorsque ces conditions sont reunies, les chaines de pectine forment des zones de jonction - regions ou les chaines s\'associent par liaisons hydrogene et interactions hydrophobes - creant un reseau tridimensionnel continu semblable a une eponge qui piege le jus de fruit et le sirop de sucre.',
    },
    {
      type: 'title',
      text: 'Pectine a Haute Teneur en Methoxyle (HM) vs. Faible Teneur en Methoxyle (LM)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pectine est classee selon son degre d\'esterification (DE), qui est le pourcentage de groupes carboxyle esterifies avec du methanol. <strong>La pectine a haute teneur en methoxyle (HM)</strong> (DE > 50%) necessite un minimum de 55-65% de solides solubles (sucre) et un pH entre 2,8 et 3,5 pour former un gel. C\'est la pectine classique utilisee dans les recettes traditionnelles de confiture. Sans suffisamment de sucre, la pectine HM forme un gel faible ou inexistant. <strong>La pectine a faible teneur en methoxyle (LM)</strong> (DE < 50%) gelifie par un mecanisme different: elle se reticule via des ions calcium divalents (Ca) qui forment des ponts entre les groupes carboxyle libres. La pectine LM peut gelifier avec peu ou pas de sucre ajoute, ce qui la rend ideale pour les conserves faibles en calories, adaptees aux diabetiques ou sucrees naturellement. Certaines pectines LM tolerent egalement une plage de pH plus large jusqu\'a 5,5, utile pour les fruits peu acides comme les figues et les poires.',
    },
    {
      type: 'title',
      text: 'Teneur Naturelle en Pectine selon les Varietes de Fruits',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tous les fruits ne sont pas egaux en matiere de pectine. Les fruits se repartissent en trois categories selon leurs niveaux naturels de pectine et d\'acidite. Savoir ou se situe votre fruit sur ce spectre determine si vous devez ajouter de la pectine en poudre ou de l\'acide citrique.',
    },
    {
      type: 'table',
      headers: ['Niveau de Pectine', 'Niveau d\'Acidite', 'Fruits Exemples', 'Pectine Ajoutee Necessaire'],
      rows: [
        ['Eleve', 'Eleve', 'Pomme, Canneberge, Groseille', '0% (aucune)'],
        ['Eleve', 'Moyen/Faible', 'Coing, Mure', '0% (aucune)'],
        ['Moyen', 'Eleve', 'Framboise, Loganberry', '0,3% du poids du fruit'],
        ['Moyen', 'Moyen', 'Prune, Abricot', '0,3% du poids du fruit'],
        ['Moyen', 'Faible', 'Myrtille', '0,3% du poids du fruit'],
        ['Faible', 'Eleve', 'Cerise, Raisin', '0,6% du poids du fruit'],
        ['Faible', 'Moyen', 'Peche, Mangue', '0,6% du poids du fruit'],
        ['Faible', 'Faible', 'Fraise, Poire, Figue', '0,6% du poids du fruit'],
      ],
    },
    {
      type: 'title',
      text: 'Le Role Critique du pH dans la Gelification de la Confiture',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le pH du melange de confiture est sans doute la variable la plus negligee dans la conservation maison. A un pH superieur a 3,8, les groupes carboxyle de la pectine restent ionises (charges negativement), creant une repulsion electrostatique qui empeche la formation du gel, quelle que soit la quantite de sucre ou de pectine ajoutee. Lorsque le pH descend en dessous de 3,5 grace a l\'ajout d\'acide citrique ou de jus de citron, ces groupes deviennent protones, permettant la formation de liaisons hydrogene entre les chaines de pectine adjacentes. La zone optimale de gelification se situe entre pH 2,8 et 3,2. En dessous de pH 2,8, le gel devient cassant et peut presenter une synerese (exsudation de liquide). Au-dessus de pH 3,5, une synerese se produit egalement et le gel est trop faible. C\'est pourquoi les fruits peu acides comme les figues et les fraises ont presque toujours besoin d\'acide citrique ajoute: leur pH naturel est trop eleve pour activer correctement la pectine.',
    },
    {
      type: 'title',
      text: 'Concentration en Sucre et son Effet sur la Force du Gel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le sucre remplit deux fonctions dans la confiture a la pectine HM. Premierement, il est hautement hygroscopique: il entre en competition intense avec la pectine pour les molecules d\'eau, retirant les couches d\'hydratation des chaines de pectine et les forcant a interagir entre elles. Deuxiemement, il eleve le point d\'ebullition du melange, permettant a la confiture d\'atteindre le point de prise de 104-105 C. A une concentration de sucre de 65%, les chaines de pectine sont suffisamment deshydratees pour former un gel fort. En dessous de 60%, le gel s\'affaiblit lineairement. Au-dessus de 68%, la confiture peut cristalliser en refroidissant lorsque le sucre depasse sa limite de solubilite. Pour les confitures a la pectine LM, le sucre ne joue qu\'un role de saveur puisque la gelification depend des ponts de calcium. La teneur en sucre peut etre aussi faible que 5-10% dans les conserves a la pectine LM sucrees avec des edulcorants non nutritifs.',
    },
    {
      type: 'title',
      text: 'Acide Citrique vs. Jus de Citron: Conversion et Bonnes Pratiques',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'acide citrique (CHO) est l\'acide principal utilise dans la fabrication commerciale de confitures car il est standardise, sans saveur et precis. Le jus de citron contient environ 5% d\'acide citrique en poids, plus de l\'acide malique et de l\'acide ascorbique (vitamine C). <strong>1 gramme d\'acide citrique pur equivaut environ a 25 ml de jus de citron frais</strong> en termes de pouvoir d\'abaissement du pH. Cependant, le jus de citron ajoute egalement du volume de liquide, ce qui doit etre pris en compte dans la teneur totale en eau. Pour les resultats les plus constants, utilisez de l\'acide citrique en poudre dissous dans une petite quantite d\'eau. Lorsque vous utilisez du jus de citron, prevoyez 20-30 ml supplementaires de liquide qui doivent etre evapores pour atteindre le point de prise.',
    },
    {
      type: 'title',
      text: 'Le Test de l\'Assiette Froide: Une Methode Visuelle pour Determiner le Point de Prise',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le traditionnel test de l\'assiette froide (aussi appele test de la ride ou test de la soucoupe) reste l\'une des methodes les plus fiables pour les confituriers amateurs. Placez une petite assiette en ceramique au congelateur pendant 10 minutes avant de commencer la cuisson. Lorsque vous pensez que la confiture a atteint son point de prise, deposez une cuillere a cafe de confiture chaude sur l\'assiette froide et laissez refroidir pendant 30 secondes. Poussez le bord de la goutte avec le bout du doigt: si la surface se plisse distinctement et que la goutte garde sa forme, le point de gel est atteint. Si elle coule librement, continuez a bouillir pendant 2-3 minutes et testez a nouveau. Ce calculateur simule visuellement ce test, vous montrant si les proportions de votre recette reussiront le test de l\'assiette avant meme de commencer a cuisiner.',
    },
    {
      type: 'title',
      text: 'Depannage: Pourquoi les Confitures Echouent et Comment y Remedier',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Confiture liquide (n\'a pas pris apres refroidissement):</strong> La cause la plus courante est une ebullition insuffisante - le melange n\'a jamais atteint 104-105 C. Faites rebouillir la confiture, en ajoutant 1-2 g d\'acide citrique par kg de fruit et testez avec la methode de l\'assiette froide. Alternativement, dissolvez 5 g de pectine en poudre dans de l\'eau froide, incorporez a la confiture en ebullition et cuisez 2 minutes supplementaires.',
        '<strong>Confiture caoutchouteuse ou trop ferme:</strong> Trop de pectine a ete ajoutee par rapport au poids du fruit, ou la confiture a ete trop cuite au-dela de 106 C, degradant le reseau de pectine en une structure rigide et cassante. Pour recuperer, rechauffez doucement avec 100-200 ml de jus de pomme ou d\'eau pour diluer la concentration de pectine.',
        '<strong>Synerese (eau qui suinte du gel):</strong> Cela indique un exces d\'acide (pH inferieur a 2,8) ou de sucre au-dessus de 68%, ce qui fait que le reseau de pectine se contracte et expulse l\'eau. Ajoutez une petite quantite de bicarbonate de soude pour augmenter le pH progressivement.',
        '<strong>Cristallisation (texture granuleuse):</strong> La concentration en sucre a depasse la solubilite, ou des cristaux de sucre non dissous ont agi comme sites de nucleation. Remuez constamment pendant l\'ebullition finale et ajoutez 1 cuillere a soupe de sirop de mais ou de glucose, qui inhibe la cristallisation.',
        '<strong>Moisissure en surface pendant le stockage:</strong> La confiture n\'a pas ete suffisamment cuite (n\'a pas atteint la temperature de sterilisation), contenait trop peu de sucre (en dessous de 60% pour la pectine HM) ou les pots n\'ont pas ete correctement sterilises. Utilisez toujours des pots sterilises et traitez au bain-marie pendant 10 minutes.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
