import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur de Bicarbonate et de Levure Chimique: Neutraliseur d'Acide pour Levain";
const description = "Calculez le ratio exact de bicarbonate et de levure chimique pour votre recette. Neutralisez les ingrédients acides comme le babeurre et le yaourt, évitez l'arrière-goût métallique et obtenez une levée parfaite à chaque fois.";
const faq = [
  {
    question: "Pourquoi faut-il de l'acide quand on remplace la levure chimique par du bicarbonate?",
    answer: "Le bicarbonate de soude est une base pure. Il a besoin d'une source d'acide pour s'activer et libérer du dioxyde de carbone. Sans suffisamment d'acide, le bicarbonate ne réagit pas complètement et laisse un goût amer et métallique dans la pâtisserie."
  },
  {
    question: "Quelle est la différence entre le bicarbonate et la levure chimique?",
    answer: "Le bicarbonate est 100% de bicarbonate de sodium, une base. La levure chimique est un agent levant complet contenant du bicarbonate, un acidifiant sec (comme la crème de tartre) et de l'amidon. La levure chimique s'autoneutralise."
  },
  {
    question: "Quelle quantité de levure chimique équivaut à 1 cuillère à café de bicarbonate?",
    answer: "Le bicarbonate est environ 3 à 4 fois plus puissant que la levure chimique. Pour remplacer 1 cuillère à café de bicarbonate, il faut environ 3 à 4 cuillères à café de levure chimique. Cependant, cette substitution ajoute aussi des sels acides qui peuvent altérer le goût, il est donc préférable d'utiliser notre calculateur pour des conversions précises."
  },
  {
    question: "Pourquoi mon gâteau a-t-il un goût de savon ou de métal?",
    answer: "Un arrière-gout savonneux ou métallique est le signe classique de bicarbonate n'ayant pas réagi. Lorsqu'il n'y a pas assez d'acide dans la pâte pour neutraliser complètement le bicarbonate de sodium, le résidu alcalin persiste après la cuisson et donne cette saveur chimique désagréable. Utilisez notre calculateur pour garantir une neutralisation complète."
  },
  {
    question: "Puis-je utiliser du cacao en poudre alcalinisé comme acide?",
    answer: "Non. Le cacao alcalinisé (procédé hollandais) a été traité avec un agent alcalinisant pour réduire son acidité naturelle (pH ~7-8). Seul le cacao naturel en poudre (pH ~5-6) est acide et neutralisera le bicarbonate."
  },
  {
    question: "Comment le bicarbonate influence-t-il le brunissement des pâtisseries?",
    answer: "Le bicarbonate augmente le pH de la pâte, la rendant plus alcaline. Un pH plus élevé accélère la réaction de brunissement de Maillard, produisant des croûtes plus foncées et des saveurs plus profondes dans les biscuits et les gâteaux."
  }
];

const howTo = [
  {
    name: "Saisissez le poids de la farine",
    text: "Indiquez le poids total de farine de votre recette en grammes ou en onces pour calculer la puissance levante totale nécessaire."
  },
  {
    name: "Ajoutez les ingrédients acides",
    text: "Sélectionnez les ingrédients acides de votre recette (comme le babeurre, le yaourt ou le jus de citron) et indiquez leurs poids."
  },
  {
    name: "Vérifiez l'équilibre du pH",
    text: "Observez la balance virtuelle de pH. Une balance équilibrée indique une neutralisation optimale sans mauvais goût métallique."
  },
  {
    name: "Mesurez les agents levants",
    text: "Lisez la quantité recommandée de bicarbonate pour la neutralisation et le renfort nécessaire de levure chimique pour atteindre la levée souhaitée."
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
  description: "Calculez le ratio exact de bicarbonate et de levure chimique pour votre recette. Neutralisez les ingrédients acides comme le babeurre et le yaourt, évitez l'arrière-goût métallique et obtenez une levée parfaite à chaque fois.",
  faqTitle: 'Foire aux Questions',
  ui: {
    title: "Neutraliseur d'Acide pour Levain",
    subtitle: "Stoechiométrie précise pour une levée et une saveur parfaites en pâtisserie",
    flourLabel: "Poids de la Farine",
    addAcidLabel: "Ajouter un Ingrédient Acide",
    weightLabel: "Poids",
    removeButton: "Retirer",
    bakingSodaNeeded: "Bicarbonate Neutralisé",
    requiredBakingPowder: "Levée Cible",
    providedBakingPowderEquivalent: "Levée du Bicarbonate",
    boosterBakingPowder: "Renfort de Levure Chimique",
    resultsTitle: "Agents Levants Calculés",
    statusBalanced: "Équilibré",
    statusAcidic: "Excès d'Acide",
    statusAlkaline: "Excès de Base",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "c.c.",
    scaleBalanceTitle: "Balance Virtuelle du pH",
    acidListTitle: "Ingrédients Acides",
    unitLabel: "Système de Mesure",
    metricUnit: "Métrique (g)",
    imperialUnit: "Impérial (oz)",
    acid_buttermilk: "Babeurre",
    acid_yogurt: "Yaourt",
    acid_sour_cream: "Crème Aigre",
    acid_honey: "Miel",
    acid_molasses: "Mélasse",
    acid_cocoa: "Cacao Naturel en Poudre",
    acid_lemon_juice: "Jus de Citron",
    acid_vinegar: "Vinaigre",
    stoichiometryBadge: "Stoechiométrie du pH",
    simulateSodaLabel: "Simuler le bicarbonate ajouté",
    autoBalanceBtn: "Auto-équilibrage",
    sodaAddedLabel: "Bicarbonate ajouté"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: "Points Clés pour une Levée Parfaite",
      items: [
        "Le bicarbonate a besoin d'acide pour s'activer ; sans lui, votre pâtisserie aura un goût de savon et de métal",
        "La levure chimique s'autoneutralise et fournit une puissance levante supplémentaire comme renfort",
        "L'objectif standard est de 4% du poids de farine en équivalent levure chimique pour une bonne levée",
        "Utilisez le tableau de neutralisation ci-dessous pour associer vos ingrédients acides à la quantité correcte de bicarbonate"
      ]
    },
    {
      type: 'title',
      text: 'La Chimie des Agents Levants Chimiques en Pâtisserie',
      level: 2
    },
    {
      type: 'paragraph',
      html: "La levuration chimique repose sur des <strong>réactions de neutralisation acide-base</strong> pour produire du dioxyde de carbone (CO2), qui se retrouve piégé dans la matrice de la pâte et la fait lever pendant la cuisson. Obtenir le bon rapport entre le bicarbonate de sodium et les ingrédients acides est crucial. <strong>Trop de bicarbonate</strong> entraîne des résidus alcalins n'ayant pas réagi, ce qui donne un goût de savon, métallique et une décoloration jaune. <strong>Trop d'acide</strong> peut donner une pâtisserie dense et plate avec un faible volume."
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
          label: 'Levée cible (% du poids de farine)',
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
      text: 'Bicarbonate vs. Levure Chimique: Comparaison Complète',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Bicarbonate',
          icon: 'mdi:flask-outline',
          description: "Bicarbonate de sodium pur (NaHCO3). Une base alcaline forte qui nécessite un acide externe pour s'activer et produire du CO2.",
          points: [
            '3-4x plus puissant que la levure chimique',
            "Nécessite un acide (babeurre, yaourt, jus de citron) pour réagir",
            "L'excès provoque un goût de savon, métallique et une mie jaune",
            'Augmente le pH ; renforce le brunissement de Maillard dans les biscuits',
            'Action simple: libère le CO2 immédiatement au mélange'
          ]
        },
        {
          title: 'Levure Chimique',
          icon: 'mdi:flask-round-bottom-outline',
          description: "Un système levant complet contenant du bicarbonate + sels acides secs + amidon. S'autoneutralise et est fiable.",
          highlight: true,
          points: [
            'Contient son propre acide (phosphate monocalcique, SAP)',
            'Double action: libère du CO2 au mélange ET à la chaleur',
            "Pas d'arrière-goût métallique ; pH déjà équilibré",
            'Moins puissante par gramme ; utiliser 3-4x plus pour égaler le bicarbonate',
            "Idéale comme renfort quand le bicarbonate seul ne peut lever toute la farine"
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Ingrédient Acide', 'Poids Standard', 'Bicarbonate Neutralisé', 'Ratio de Neutralisation'],
      rows: [
        ['Babeurre / Yaourt / Crème Aigre', '120g (1/2 Tasse)', '1,5g (1/4 c.c.)', '0,0125'],
        ['Jus de Citron / Vinaigre', '15g (1 c.s.)', '1,5g (1/4 c.c.)', '0,1000'],
        ['Cacao Naturel en Poudre', '80g (1 Tasse)', '3,0g (1/2 c.c.)', '0,0375'],
        ['Miel', '340g (1 Tasse)', '3,0g (1/2 c.c.)', '0,0088'],
        ['Mélasse', '328g (1 Tasse)', '3,0g (1/2 c.c.)', '0,0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Dépannage: Votre Levage est Déséquilibré ?',
      badge: 'Vérification Rapide',
      html: "<strong>Si votre gâteau s'est effondré :</strong> Trop d'acide ou trop peu d'agent levant au total ; le CO2 s'est échappé avant que la structure ne se fige.<br/><br/><strong>Si votre gâteau est dense et plat :</strong> Trop d'acide sans assez de bicarbonate pour le neutraliser, ou puissance levante totale insuffisante pour le poids de farine.<br/><br/><strong>Si votre gâteau a un goût de savon ou de métal :</strong> Excès de bicarbonate n'ayant pas réagi ; ajoutez plus d'ingrédients acides ou réduisez le bicarbonate.<br/><br/><strong>Si votre gâteau a des taches jaunes :</strong> Signe classique de grumeaux de bicarbonate non dissous et n'ayant pas réagi ; tamisez le bicarbonate avec la farine la prochaine fois."
    },
    {
      type: 'title',
      text: "Comment Équilibrer les Agents Levants et Éviter le Goût Métallique",
      level: 3
    },
    {
      type: 'paragraph',
      html: "Pour obtenir une saveur et une levée optimales, suivez ce processus: <strong>D'abord</strong>, déterminez la quantité de bicarbonate nécessaire pour neutraliser complètement les composants acides de votre pâte en utilisant le tableau ci-dessus. <strong>Ensuite</strong>, convertissez ce bicarbonate en son équivalent levure chimique (multipliez par 4) et comparez-le à la puissance levante totale nécessaire pour votre farine ; généralement <strong>4% du poids de la farine</strong> en équivalent levure chimique. <strong>S'il y a un déficit</strong>, ajoutez la puissance levante restante sous forme de levure chimique neutre en renfort. Notre calculateur fait tout cela automatiquement."
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        "Ne remplacez jamais le bicarbonate 1:1 par de la levure chimique ; le bicarbonate est 3-4x plus fort et a besoin d'acide",
        "Tamisez toujours le bicarbonate avec les ingrédients secs pour éviter les grumeaux amers",
        "Le cacao alcalinisé N'EST PAS acide ; utilisez du cacao naturel en poudre si vous comptez sur le cacao comme source d'acide",
        'Le miel et la mélasse sont faiblement acides ; ils nécessitent beaucoup moins de bicarbonate par gramme que le jus de citron',
        "Travaillez rapidement après avoir mélangé: la levuration chimique commence à réagir immédiatement au contact du liquide"
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Ratio de Neutralisation',
          definition: "La proportion de bicarbonate nécessaire pour neutraliser complètement un poids donné d'ingrédient acide. Les ratios plus faibles signifient que l'ingrédient est moins acide par gramme."
        },
        {
          term: 'Puissance Levante',
          definition: "La quantité totale de CO2 qu'un agent levant peut produire. Mesurée en équivalents levure chimique, où 4% du poids de farine est l'objectif standard pour les gâteaux et les muffins."
        },
        {
          term: 'Levure Chimique Double Action',
          definition: "Levure chimique qui libère du CO2 en deux étapes: d'abord au mélange avec un liquide à température ambiante, puis à l'exposition à la chaleur du four. Offre une levée plus fiable."
        },
        {
          term: 'Réaction de Maillard',
          definition: "Une réaction chimique entre les acides aminés et les sucres réducteurs qui brunit les aliments et crée des saveurs complexes. Renforcée par un pH plus élevé dû à l'excès de bicarbonate ; souhaitable dans les biscuits, indésirable dans les gâteaux délicats."
        },
        {
          term: 'Équilibre du pH',
          definition: "La mesure de l'acidité ou de l'alcalinité de la pâte. Un pH neutre (environ 7) signifie que tout le bicarbonate a réagi avec tout l'acide. Légèrement alcalin favorise le brunissement ; acide favorise la tendreté."
        }
      ]
    },
    {
      type: 'tip',
      html: "<strong>Brunissement et pH :</strong> Bien qu'une neutralisation complète soit essentielle pour la saveur, une pâte légèrement alcaline (due à un petit excès de bicarbonate) peut être souhaitable dans les gâteaux au chocolat et les biscuits. Un pH plus élevé renforce le brunissement de Maillard, produisant des couleurs plus foncées, des bords croustillants et des notes caramélisées plus profondes. Pour les gâteaux délicats à la vanille, visez une neutralisation exacte pour préserver un goût pur et net."
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
