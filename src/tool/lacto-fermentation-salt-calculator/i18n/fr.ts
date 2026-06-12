import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur de Sel pour Fermentation Lacto: Guide Scientifique Bio Bio";
const description = "Calculez des pourcentages de sel précis pour le salage à sec et la saumure humide. Équilibrez les populations bactériennes, prévenez les moisissures et maîtrisez la conservation des aliments.";
const faq = [
  {
    question: "Pourquoi le pourcentage de sel est-il essentiel en fermentation lacto ?",
    answer: "Le sel supprime les agents pathogènes et les moisissures par pression osmotique tout en permettant aux bactéries lactiques (LAB) de prospérer, de fermenter les sucres et de produire de l'acide lactique."
  },
  {
    question: "Quelle est la différence entre le salage à sec et la saumure humide ?",
    answer: "Le salage à sec utilise l'humidité naturelle des aliments pour dissoudre le sel (idéal pour le chou râpé). La saumure humide ajoute de l'eau externe et du sel pour immerger complètement les légumes entiers ou en morceaux."
  },
  {
    question: "Puis-je utiliser l'eau du robinet chlorée pour la fermentation ?",
    answer: "Le chlore peut inhiber la croissance bactérienne. Il est fortement recommandé d'utiliser de l'eau filtrée ou de source pour des résultats de fermentation constants."
  },
  {
    question: "Le pourcentage en poids est-il meilleur que les mesures de volume ?",
    answer: "Oui. Les différents types de sel (kosher, marin, de table) ont des tailles de cristaux et des densités variables. Peser le sel en grammes garantit une salinité exacte quel que soit le type de sel utilisé."
  }
];

const howTo = [
  {
    name: "Choisissez le mode de fermentation",
    text: "Sélectionnez le mode Sec si vous utilisez les jus naturels des légumes, ou le mode Humide si vous ajoutez de l'eau pour couvrir les ingrédients."
  },
  {
    name: "Pesez les ingrédients",
    text: "Entrez le poids exact des légumes en grammes. Si vous utilisez une saumure humide, entrez également le poids de l'eau."
  },
  {
    name: "Ajustez la salinité cible",
    text: "Faites glisser le curseur de pourcentage de salinité. Visez 2,0 % à 3,5 % pour une sécurité générale et une croissance optimale des bactéries lactiques."
  },
  {
    name: "Mesurez le sel",
    text: "Utilisez la balance numérique pour mesurer les grammes exacts de sel nécessaires. Ajoutez-les à votre récipient de fermentation."
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
  slug: 'calculateur-sel-fermentation-lacto',
  title: 'Calculateur de Sel pour Fermentation Lacto',
  description: 'Calculez des pourcentages de sel précis pour le salage à sec et la saumure humide. Équilibrez les populations bactériennes, prévenez les moisissures et maîtrisez la conservation des aliments.',
  faqTitle: 'Questions Fréquentes',
  ui: {
    title: "Calculateur de Sel pour Fermentation Lacto",
    subtitle: "Contrôle précis de la salinité pour une conservation bio organique",
    unitLabel: "Système de Mesure",
    metricUnit: "Métrique (g / grammes)",
    imperialUnit: "Impérial (oz / onces)",
    modeLabel: "Mode de Fermentation",
    dryMode: "Salage à Sec",
    wetMode: "Saumure Humide",
    vegWeightLabel: "Poids des Légumes",
    waterWeightLabel: "Poids de l'Eau",
    salinityLabel: "Salinité Cible (%)",
    saltGramsLabel: "Sel Requis",
    fineSaltLabel: "Sel Fin (cuillères à café)",
    kosherSaltLabel: "Sel Kosher (cuillères à café)",
    statusDanger: "Zone de Danger",
    statusDangerDesc: "Une salinité inférieure à 2,0 % est insuffisante pour bloquer les agents pathogènes et les moisissures. Augmentez la salinité pour garantir la sécurité.",
    statusOptimal: "Zone LAB Optimale",
    statusOptimalDesc: "Une salinité entre 2,0 % et 3,5 % est idéale pour que les bactéries lactiques (LAB) dominent et fermentent en toute sécurité.",
    statusInhibited: "Zone Inhibée",
    statusInhibitedDesc: "Une salinité supérieure à 3,5 % ralentit ou arrête la fermentation. Utile pour la conservation à long terme mais retarde l'activité bactérienne.",
    petriTitle: "Simulation Microbiologique",
    scaleTitle: "Affichage de la Balance Numérique",
    disclaimer: "Remarque: Il est fortement recommandé de peser le sel à l'aide d'une balance numérique plutôt que d'utiliser des mesures volumétriques.",
    kosherLabel: "Sel Kosher",
    fineLabel: "Sel Fin",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Guide Ultime de la Chimie de la Fermentation Lacto et du Contrôle de la Salinité',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La fermentation lacto est un processus biochimique dynamique piloté par les bactéries lactiques (LAB) pour conserver légumes et fruits. Tout le mécanisme repose sur la création d\'un environnement sélectif où les bactéries bénéfiques prospèrent tandis que les organismes d\'altération, moisissures et agents pathogènes sont supprimés. Le contrôle de la salinité est le levier le plus critique pour atteindre cette sélectivité biologique.',
    },
    {
      type: 'title',
      text: 'L\'Action Biochimique du Sel dans la Conservation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lorsque le sel est introduit sur des légumes crus, il agit par un processus physique appelé <strong>pression osmotique</strong>. La forte concentration de sel à l\'extérieur des cellules végétales extrait l\'eau et les sucres dissous des tissus végétaux par osmose (plasmolyse). Cela crée une saumure riche en nutriments qui sert de carburant parfait aux bactéries lactiques. Parallèlement, la pression osmotique déshydrate et lyse les membranes cellulaires des moisissures, levures et bactéries pathogènes comme <em>Escherichia coli</em> ou <em>Clostridium botulinum</em>, qui ne tolèrent pas des niveaux élevés de salinité.',
    },
    {
      type: 'title',
      text: 'Succession Microbiologique: Comment les LAB Colonisent les Ferments',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La fermentation lacto n\'est pas réalisée par une seule espèce bactérienne, mais par une succession de souches qui dominent à mesure que l\'acidité augmente. Dans un ferment végétal typique, le cycle se déroule en trois phases distinctes :',
    },
    {
      type: 'list',
      items: [
        '<strong>Phase 1 - Leuconostoc mesenteroides :</strong> Cette bactérie hétérofermentaire initie la fermentation. Elle est très active au début, produisant de l\'acide lactique, de l\'acide acétique, du dioxyde de carbone (qui aide à créer une atmosphère anaérobie) et de l\'éthanol. Elle abaisse rapidement le pH, préparant le milieu pour les espèces suivantes.',
        '<strong>Phase 2 - Lactobacillus plantarum et Lactobacillus brevis :</strong> Lorsque le pH descend sous 5,0, <em>L. mesenteroides</em> meurt et des bactéries homofermentaires acidotolérantes comme <em>L. plantarum</em> prennent le relais. Elles fermentent les sucres simples restants exclusivement en acide lactique, faisant chuter le pH rapidement.',
        '<strong>Phase 3 - Pediococcus pentosaceus et autres :</strong> Dans les fermentations longues, ces bactéries très acidotolérantes continuent à produire de l\'acide jusqu\'à épuisement des sucres ou jusqu\'à ce que le pH atteigne environ 3,5 à 3,8, stabilisant ainsi l\'environnement indéfiniment.'
      ],
    },
    {
      type: 'title',
      text: 'Protéger la Texture des Légumes: Le Lien avec la Pectine',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un problème courant en fermentation domestique est le ramollissement. Les cellules végétales sont maintenues entre elles par un polysaccharide structurel appelé pectine. Les micro-organismes d\'altération produisent des enzymes appelées <strong>pectinases</strong>, qui dégradent la pectine et fragilisent les parois végétales, provoquant le ramollissement. Maintenir une salinité supérieure à 2,0 % inhibe directement l\'activité de ces enzymes pectinasiques. De plus, les ions calcium présents dans le sel marin non raffiné ou ajoutés sous forme de chlorure de calcium peuvent se lier aux molécules de pectine, formant du pectate de calcium, ce qui maintient les pickles et la choucroute croquants.',
    },
    {
      type: 'title',
      text: 'Mathématiques du Salage à Sec vs. Saumure Humide',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Comprendre la formule de calcul du sel est essentiel. Pour le salage à sec (couramment utilisé pour les légumes râpés comme le chou pour la choucroute), le pourcentage de sel est calculé uniquement sur le poids du légume. Pour la saumure humide (utilisée pour les légumes entiers ou en gros morceaux comme les concombres ou les carottes), le pourcentage de sel doit être calculé sur le <strong>poids total des légumes et de l\'eau ajoutée</strong>. Calculer le sel uniquement sur le poids de l\'eau est une erreur courante qui dilue la salinité finale, car l\'eau contenue dans les légumes finit par diluer la saumure.',
    },
    {
      type: 'table',
      headers: ['Plage de Salinité', 'État Microbiologique', 'Utilisations Typiques', 'Niveau de Sécurité'],
      rows: [
        ['< 2,0 %', 'Risque pathogène / Danger moisissure', 'Non recommandé', 'Faible'],
        ['2,0 % - 2,5 %', 'Floraison optimale des bactéries lactiques', 'Choucroute, Kimchi, Cornichons', 'Élevé'],
        ['2,5 % - 3,5 %', 'Fermentation lente / Haute rétention de texture', 'Sauces piquantes, ail, racines', 'Élevé'],
        ['> 3,5 %', 'Inhibition bactérienne / Conservation uniquement', 'Olives, poivrons longuement mûris, haute température', 'Sûr mais inactif'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi Peser le Sel est Préférable à la Mesure en Volume',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Mesurer le sel en volume (cuillères à soupe ou à café) est notoirement imprécis. Le sel de table est fin et dense, une cuillère à café peut peser jusqu\'à 6 grammes. À l\'inverse, le sel kosher a de gros cristaux en flocons avec des poches d\'air, pesant à peine 4 grammes par cuillère à café. Le sel marin gros se situe entre les deux. Utiliser des mesures volumétriques peut facilement donner une fermentation dangereusement sous-salée ou complètement bloquée par un excès de sel. Peser les ingrédients en grammes sur une balance numérique garantit des résultats constants, sûrs et reproductibles.',
    },
    {
      type: 'title',
      text: 'Dépannage et Bonnes Pratiques en Fermentation Lacto',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour réussir votre fermentation, suivez toujours ces règles: Gardez tous les légumes complètement immergés sous la saumure pour empêcher la croissance de moisissures aérobies. Utilisez des récipients et des poids propres. Fermentez à température ambiante fraîche (18 °C à 22 °C) pour éviter que les bactéries de phase 1 ne soient supplantées. Si un film blanc se forme à la surface, vérifiez s\'il s\'agit de levure Kahm (une levure sauvage inoffensive qui se forme par exposition à l\'oxygène) ou de moisissure. La moisissure est duveteuse et colorée ; si présente, le ferment doit être jeté. La levure Kahm peut être retirée, bien qu\'elle puisse affecter la saveur.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
