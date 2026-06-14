import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur de Bicarbonate et de Levure Chimique: Neutraliseur d'Acide pour Levain";
const description = "Calculez le ratio exact de bicarbonate et de levure chimique pour votre recette. Neutralisez les ingredients acides comme le babeurre et le yaourt, evitez l'arriere-gout metallique et obtenez une levee parfaite a chaque fois.";
const faq = [
  {
    question: "Pourquoi faut-il de l'acide quand on remplace la levure chimique par du bicarbonate?",
    answer: "Le bicarbonate de soude est une base pure. Il a besoin d'une source d'acide pour s'activer et liberer du dioxyde de carbone. Sans suffisamment d'acide, le bicarbonate ne reagit pas completement et laisse un gout amer et metallique dans la patisserie."
  },
  {
    question: "Quelle est la difference entre le bicarbonate et la levure chimique?",
    answer: "Le bicarbonate est 100% de bicarbonate de sodium, une base. La levure chimique est un agent levant complet contenant du bicarbonate, un acidifiant sec (comme la creme de tartre) et de l'amidon. La levure chimique s'autoneutralise."
  },
  {
    question: "Quelle quantite de levure chimique equivaut a 1 cuillere a cafe de bicarbonate?",
    answer: "Le bicarbonate est environ 3 a 4 fois plus puissant que la levure chimique. Pour remplacer 1 cuillere a cafe de bicarbonate, il faut environ 3 a 4 cuilleres a cafe de levure chimique. Cependant, cette substitution ajoute aussi des sels acides qui peuvent alterer le gout, il est donc preferable d'utiliser notre calculateur pour des conversions precises."
  },
  {
    question: "Pourquoi mon gateau a-t-il un gout de savon ou de metal?",
    answer: "Un arriere-gout savonneux ou metallique est le signe classique de bicarbonate n'ayant pas reagi. Lorsqu'il n'y a pas assez d'acide dans la pate pour neutraliser completement le bicarbonate de sodium, le residu alcalin persiste apres la cuisson et donne cette saveur chimique desagreable. Utilisez notre calculateur pour garantir une neutralisation complete."
  },
  {
    question: "Puis-je utiliser du cacao en poudre alcalinise comme acide?",
    answer: "Non. Le cacao alcalinise (procede hollandais) a ete traite avec un agent alcalinisant pour reduire son acidite naturelle (pH ~7-8). Seul le cacao naturel en poudre (pH ~5-6) est acide et neutralisera le bicarbonate."
  },
  {
    question: "Comment le bicarbonate influence-t-il le brunissement des patisseries?",
    answer: "Le bicarbonate augmente le pH de la pate, la rendant plus alcaline. Un pH plus eleve accelere la reaction de brunissement de Maillard, produisant des croutes plus foncees et des saveurs plus profondes dans les biscuits et les gateaux."
  }
];

const howTo = [
  {
    name: "Saisissez le poids de la farine",
    text: "Indiquez le poids total de farine de votre recette en grammes ou en onces pour calculer la puissance levante totale necessaire."
  },
  {
    name: "Ajoutez les ingredients acides",
    text: "Selectionnez les ingredients acides de votre recette (comme le babeurre, le yaourt ou le jus de citron) et indiquez leurs poids."
  },
  {
    name: "Verifiez l'equilibre du pH",
    text: "Observez la balance virtuelle de pH. Une balance equilibree indique une neutralisation optimale sans mauvais gout metallique."
  },
  {
    name: "Mesurez les agents levants",
    text: "Lisez la quantite recommandee de bicarbonate pour la neutralisation et le renfort necessaire de levure chimique pour atteindre la levee souhaitee."
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
  slug: 'neutraliseur-acide-levain',
  title: "Neutraliseur d'Acide pour Levain",
  description: "Calculez le ratio exact de bicarbonate et de levure chimique pour votre recette. Neutralisez les ingredients acides comme le babeurre et le yaourt, evitez l'arriere-gout metallique et obtenez une levee parfaite a chaque fois.",
  faqTitle: 'Foire aux Questions',
  ui: {
    title: "Neutraliseur d'Acide pour Levain",
    subtitle: "Stoechiometrie precise pour une levee et une saveur parfaites en patisserie",
    flourLabel: "Poids de la Farine",
    addAcidLabel: "Ajouter un Ingredient Acide",
    weightLabel: "Poids",
    removeButton: "Retirer",
    bakingSodaNeeded: "Bicarbonate Neutralise",
    requiredBakingPowder: "Levee Cible",
    providedBakingPowderEquivalent: "Levee du Bicarbonate",
    boosterBakingPowder: "Renfort de Levure Chimique",
    resultsTitle: "Agents Levants Calcules",
    statusBalanced: "Equilibre",
    statusAcidic: "Exces d'Acide",
    statusAlkaline: "Exces de Base",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "c.c.",
    scaleBalanceTitle: "Balance Virtuelle du pH",
    acidListTitle: "Ingredients Acides",
    unitLabel: "Systeme de Mesure",
    metricUnit: "Metrique (g)",
    imperialUnit: "Imperial (oz)",
    acid_buttermilk: "Babeurre",
    acid_yogurt: "Yaourt",
    acid_sour_cream: "Creme Aigre",
    acid_honey: "Miel",
    acid_molasses: "Melasse",
    acid_cocoa: "Cacao Naturel en Poudre",
    acid_lemon_juice: "Jus de Citron",
    acid_vinegar: "Vinaigre",
    stoichiometryBadge: "Stoechiometrie du pH",
    simulateSodaLabel: "Simuler le bicarbonate ajoute",
    autoBalanceBtn: "Auto-equilibrage",
    sodaAddedLabel: "Bicarbonate ajoute"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: "Points Cles pour une Levee Parfaite",
      items: [
        "Le bicarbonate a besoin d'acide pour s'activer ; sans lui, votre patisserie aura un gout de savon et de metal",
        "La levure chimique s'autoneutralise et fournit une puissance levante supplementaire comme renfort",
        "L'objectif standard est de 4% du poids de farine en equivalent levure chimique pour une bonne levee",
        "Utilisez le tableau de neutralisation ci-dessous pour associer vos ingredients acides a la quantite correcte de bicarbonate"
      ]
    },
    {
      type: 'title',
      text: 'La Chimie des Agents Levants Chimiques en Patisserie',
      level: 2
    },
    {
      type: 'paragraph',
      html: "La levuration chimique repose sur des <strong>reactions de neutralisation acide-base</strong> pour produire du dioxyde de carbone (CO2), qui se retrouve piege dans la matrice de la pate et la fait lever pendant la cuisson. Obtenir le bon rapport entre le bicarbonate de sodium et les ingredients acides est crucial. <strong>Trop de bicarbonate</strong> entraine des residus alcalins n'ayant pas reagi, ce qui donne un gout de savon, metallique et une decoloration jaune. <strong>Trop d'acide</strong> peut donner une patisserie dense et plate avec un faible volume."
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Bicarbonate plus fort que la levure',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Levee cible (% du poids de farine)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 c.c.',
          label: 'Bicarbonate pour 120g de babeurre/yaourt',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0,0125',
          label: 'Ratio de neutralisation (acides lactiques)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Bicarbonate vs. Levure Chimique: Comparaison Complete',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bicarbonate',
          icon: 'mdi:flask-outline',
          description: "Bicarbonate de sodium pur (NaHCO3). Une base alcaline forte qui necessite un acide externe pour s'activer et produire du CO2.",
          points: [
            '3-4x plus puissant que la levure chimique',
            "Necessite un acide (babeurre, yaourt, jus de citron) pour reagir",
            "L'exces provoque un gout de savon, metallique et une mie jaune",
            'Augmente le pH ; renforce le brunissement de Maillard dans les biscuits',
            'Action simple: libere le CO2 immediatement au melange'
          ]
        },
        {
          title: 'Levure Chimique',
          icon: 'mdi:flask-round-bottom-outline',
          description: "Un systeme levant complet contenant du bicarbonate + sels acides secs + amidon. S'autoneutralise et est fiable.",
          highlight: true,
          points: [
            'Contient son propre acide (phosphate monocalcique, SAP)',
            'Double action: libere du CO2 au melange ET a la chaleur',
            "Pas d'arriere-gout metallique ; pH deja equilibre",
            'Moins puissante par gramme ; utiliser 3-4x plus pour egaler le bicarbonate',
            "Ideale comme renfort quand le bicarbonate seul ne peut lever toute la farine"
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Ingredient Acide', 'Poids Standard', 'Bicarbonate Neutralise', 'Ratio de Neutralisation'],
      rows: [
        ['Babeurre / Yaourt / Creme Aigre', '120g (1/2 Tasse)', '1,5g (1/4 c.c.)', '0,0125'],
        ['Jus de Citron / Vinaigre', '15g (1 c.s.)', '1,5g (1/4 c.c.)', '0,1000'],
        ['Cacao Naturel en Poudre', '80g (1 Tasse)', '3,0g (1/2 c.c.)', '0,0375'],
        ['Miel', '340g (1 Tasse)', '3,0g (1/2 c.c.)', '0,0088'],
        ['Melasse', '328g (1 Tasse)', '3,0g (1/2 c.c.)', '0,0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Depannage: Votre Levage est Desequilibre?',
      badge: 'Verification Rapide',
      html: "<strong>Si votre gateau s'est effondre:</strong> Trop d'acide ou trop peu d'agent levant au total ; le CO2 s'est echappe avant que la structure ne se fige.<br/><br/><strong>Si votre gateau est dense et plat:</strong> Trop d'acide sans assez de bicarbonate pour le neutraliser, ou puissance levante totale insuffisante pour le poids de farine.<br/><br/><strong>Si votre gateau a un gout de savon ou de metal:</strong> Exces de bicarbonate n'ayant pas reagi ; ajoutez plus d'ingredients acides ou reduisez le bicarbonate.<br/><br/><strong>Si votre gateau a des taches jaunes:</strong> Signe classique de grumeaux de bicarbonate non dissous et n'ayant pas reagi ; tamisez le bicarbonate avec la farine la prochaine fois."
    },
    {
      type: 'title',
      text: "Comment Equilibrer les Agents Levants et Eviter le Gout Metallique",
      level: 3
    },
    {
      type: 'paragraph',
      html: "Pour obtenir une saveur et une levee optimales, suivez ce processus: <strong>D'abord</strong>, determinez la quantite de bicarbonate necessaire pour neutraliser completement les composants acides de votre pate en utilisant le tableau ci-dessus. <strong>Ensuite</strong>, convertissez ce bicarbonate en son equivalent levure chimique (multipliez par 4) et comparez-le a la puissance levante totale necessaire pour votre farine ; generalement <strong>4% du poids de la farine</strong> en equivalent levure chimique. <strong>S'il y a un deficit</strong>, ajoutez la puissance levante restante sous forme de levure chimique neutre en renfort. Notre calculateur fait tout cela automatiquement."
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        "Ne remplacez jamais le bicarbonate 1:1 par de la levure chimique ; le bicarbonate est 3-4x plus fort et a besoin d'acide",
        "Tamisez toujours le bicarbonate avec les ingredients secs pour eviter les grumeaux amers",
        "Le cacao alcalinise N'EST PAS acide ; utilisez du cacao naturel en poudre si vous comptez sur le cacao comme source d'acide",
        'Le miel et la melasse sont faiblement acides ; ils necessitent beaucoup moins de bicarbonate par gramme que le jus de citron',
        "Travaillez rapidement apres avoir melange: la levuration chimique commence a reagir immediatement au contact du liquide"
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ratio de Neutralisation',
          definition: "La proportion de bicarbonate necessaire pour neutraliser completement un poids donne d'ingredient acide. Les ratios plus faibles signifient que l'ingredient est moins acide par gramme."
        },
        {
          term: 'Puissance Levante',
          definition: "La quantite totale de CO2 qu'un agent levant peut produire. Mesuree en equivalents levure chimique, ou 4% du poids de farine est l'objectif standard pour les gateaux et les muffins."
        },
        {
          term: 'Levure Chimique Double Action',
          definition: "Levure chimique qui libere du CO2 en deux etapes: d'abord au melange avec un liquide a temperature ambiante, puis a l'exposition a la chaleur du four. Offre une levee plus fiable."
        },
        {
          term: 'Reaction de Maillard',
          definition: "Une reaction chimique entre les acides amines et les sucres reducteurs qui brunit les aliments et cree des saveurs complexes. Renforcee par un pH plus eleve du a l'exces de bicarbonate ; souhaitable dans les biscuits, indesirable dans les gateaux delicats."
        },
        {
          term: 'Equilibre du pH',
          definition: "La mesure de l'acidite ou de l'alcalinite de la pate. Un pH neutre (environ 7) signifie que tout le bicarbonate a reagi avec tout l'acide. Legerement alcalin favorise le brunissement ; acide favorise la tendrete."
        }
      ]
    },
    {
      type: 'tip',
      html: "<strong>Brunissement et pH:</strong> Bien qu'une neutralisation complete soit essentielle pour la saveur, une pate legerement alcaline (due a un petit exces de bicarbonate) peut etre souhaitable dans les gateaux au chocolat et les biscuits. Un pH plus eleve renforce le brunissement de Maillard, produisant des couleurs plus foncees, des bords croustillants et des notes caramelisees plus profondes. Pour les gateaux delicats a la vanille, visez une neutralisation exacte pour preserver un gout pur et net."
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
