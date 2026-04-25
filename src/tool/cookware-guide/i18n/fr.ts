import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Sélecteur d'Ustensiles Connecté Guide de Cuisine";
const description = "Guide interactif pour choisir la meilleure poêle ou casserole selon votre style de cuisine. Fonte vs Acier Inoxydable vs Téflon. Trouvez votre outil parfait.";
const faq = [
    {
      question: 'Quelle est la meilleure poêle pour un usage quotidien ?',
      answer: "Pour la plupart des gens, une poêle en acier inoxydable de haute qualité ou eine fonte bien culottée sont les meilleures options. L'inox est polyvalent et éternel, tandis que la fonte offre un anti-adhésif naturel sans produits chimiques.",
    },
    {
      question: 'Pourquoi les aliments attachent-ils à l\'acier inoxydable ?',
      answer: 'Généralement en raison d\'une chaleur insuffisante ou de l\'ajout d\'aliments trop tôt. Essayez l\'"effet Leidenfrost" : chauffez la poêle jusqu\'à ce qu\'une goutte d\'eau roule comme une perle. Elle est alors prête.',
    },
    {
      question: 'Comment savoir si ma poêle est sûre ?',
      answer: 'Recherchez les étiquettes "Sans PFOA". La fonte, l\'acier au carbone et l\'acier inoxydable sont les options les plus sûres et les plus durables, car elles n\'ont pas de revêtements qui se dégradent avec le temps.',
    },
    {
      question: 'Que signifie "culotter" une poêle ?',
      answer: 'C\'est le processus de création d\'une couche d\'huile polymérisée sur le métal (fonte ou carbone). Cela protège de la rouille et crée une surface anti-adhésive naturelle qui s\'améliore à chaque utilisation.',
    },
    {
      question: 'Combien devrais-je dépenser pour une bonne poêle ?',
      answer: 'Un ensemble de 2-3 poêles de qualité moyenne-haute (inox ou fonte) peut durer plus de 20 ans. Il vaut mieux investir dans une bonne poêle que d\'en acheter 5 bon marché qui durent 2 ans. La qualité avant la quantité.',
    },
  ];
const howTo = [
    {
      name: 'Sélectionnez votre style de cuisine',
      text: 'Choisissez entre feu vif (saisir), délicat (œufs), ragoûts (cuisson lente) ou cuisine rapide. Chaque style a des exigences distinctes.',
    },
    {
      name: 'Choisissez le matériau idéal',
      text: 'En fonction de votre style, l\'outil recommandera le meilleur matériau : fonte, acier inoxydable, cuivre ou téflon.',
    },
    {
      name: 'Lisez les caractéristiques',
      text: 'Comprenez les avantages, les inconvénients, l\'entretien et la durabilité. Choisissez ensuite la poêle spécifique qui correspond à votre budget et à vos besoins.',
    },
  ];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'selecteur-ustensiles',
  title: 'Sélecteur d\'Ustensiles Connecté Guide de Cuisine',
  description: 'Guide interactif pour choisir la meilleure poêle ou casserole selon votre style de cuisine. Fonte vs Acier Inoxydable vs Téflon. Trouvez votre outil parfait.',
  faqTitle: 'Questions Fréquemment Posées',  faq: [
    {
      question: 'Quelle est la meilleure poêle pour un usage quotidien ?',
      answer: "Pour la plupart des gens, une poêle en acier inoxydable de haute qualité ou eine fonte bien culottée sont les meilleures options. L'inox est polyvalent et éternel, tandis que la fonte offre un anti-adhésif naturel sans produits chimiques.",
    },
    {
      question: 'Pourquoi les aliments attachent-ils à l\'acier inoxydable ?',
      answer: 'Généralement en raison d\'une chaleur insuffisante ou de l\'ajout d\'aliments trop tôt. Essayez l\'"effet Leidenfrost" : chauffez la poêle jusqu\'à ce qu\'une goutte d\'eau roule comme une perle. Elle est alors prête.',
    },
    {
      question: 'Comment savoir si ma poêle est sûre ?',
      answer: 'Recherchez les étiquettes "Sans PFOA". La fonte, l\'acier au carbone et l\'acier inoxydable sont les options les plus sûres et les plus durables, car elles n\'ont pas de revêtements qui se dégradent avec le temps.',
    },
    {
      question: 'Que signifie "culotter" une poêle ?',
      answer: 'C\'est le processus de création d\'une couche d\'huile polymérisée sur le métal (fonte ou carbone). Cela protège de la rouille et crée une surface anti-adhésive naturelle qui s\'améliore à chaque utilisation.',
    },
    {
      question: 'Combien devrais-je dépenser pour une bonne poêle ?',
      answer: 'Un ensemble de 2-3 poêles de qualité moyenne-haute (inox ou fonte) peut durer plus de 20 ans. Il vaut mieux investir dans une bonne poêle que d\'en acheter 5 bon marché qui durent 2 ans. La qualité avant la quantité.',
    },
  ],
  howTo: [
    {
      name: 'Sélectionnez votre style de cuisine',
      text: 'Choisissez entre feu vif (saisir), délicat (œufs), ragoûts (cuisson lente) ou cuisine rapide. Chaque style a des exigences distinctes.',
    },
    {
      name: 'Choisissez le matériau idéal',
      text: 'En fonction de votre style, l\'outil recommandera le meilleur matériau : fonte, acier inoxydable, cuivre ou téflon.',
    },
    {
      name: 'Lisez les caractéristiques',
      text: 'Comprenez les avantages, les inconvénients, l\'entretien et la durabilité. Choisissez ensuite la poêle spécifique qui correspond à votre budget et à vos besoins.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Matériaux de Poêle : Science et Pratique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Toutes les poêles ne se valent pas. Chaque matériau possède des propriétés thermodynamiques distinctes qui affectent la répartition de la chaleur, les températures tolérées et l\'interaction avec les aliments. Comprendre ces différences est la clé pour choisir le bon outil.',
    },
    {
      type: 'title',
      text: 'Fonte : Le Classique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Avantages :</strong> Excellente rétention de chaleur, distribution uniforme, anti-adhésif naturel (si culottée), dure des siècles, s\'améliore avec le temps. <strong>Inconvénients :</strong> Lourde, nécessite un entretien, peut rouiller, chauffe plus lentement, ne convient pas aux acides prolongés.',
    },
    {
      type: 'title',
      text: 'Acier Inoxydable : Le Polyvalent',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Avantages :</strong> Durable, ne nécessite aucun entretien, convient aux acides (vins, tomates), facile à nettoyer, polyvalent, relativement économique. <strong>Inconvénients :</strong> Pas naturellement anti-adhésif, nécessite de la technique (bien préchauffer), distribution de chaleur inégale (meilleure avec fond multicouche).',
    },
    {
      type: 'title',
      text: 'Téflon/PTFE : Le Pratique',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Avantages :</strong> Anti-adhésif instantané, cuisine facile, nettoyage facile, économique. <strong>Inconvénients :</strong> Se dégrade avec le temps et la température, doit être remplacé tous les 3 à 5 ans, dangereux à très haute température (>260°C), la sécurité du PTFE est débattue.',
    },
  ],
  ui: {
    cookingStyle: 'Comment cuisinez-vous habituellement ?',
    material: 'Type de Matériau',
    highHeat: 'Feu Vif',
    sear: 'Saisir / Sceller',
    delicate: 'Délicat',
    fry: 'Œufs / Omelettes',
    stew: 'Mijotés',
    slowCook: 'Cuisson Lente',
    fast: 'Rapide',
    quick: 'Cuisine Rapide',
    recommendation: 'Recommandation',
    characteristics: 'Caractéristiques',
    castIron: 'Fonte',
    stainlessSteel: 'Acier Inoxydable',
    carbon: 'Acier au Carbone',
    copper: 'Cuivre',
    nonstick: 'Anti-adhésif (Téflon)',
    advantages: 'Avantages',
    disadvantages: 'Inconvénients',
    maintenance: 'Entretien',
    durability: 'Durabilité',
    heatRetention: 'Rétention de Chaleur',
    price: 'Prix',
    step1: 'Comment cuisinez-vous habituellement ?',
    step2: 'Niveau d\'Entretien',
    maintenanceLazy: 'Faible / Aucun',
    maintenanceLazyDesc: 'Pas de complications pour le lavage.',
    maintenanceCare: 'Moyen',
    maintenanceCareDesc: 'Lavage à la main normal.',
    maintenanceRitual: 'Rituel (Élevé)',
    maintenanceRitualDesc: "J'aime culotter mes poêles.",
    idealPan: 'Votre Poêle Idéale',
    selectOptions: 'Sélectionnez des options',
    seeRecommendation: 'Pour voir votre recommandation',
    pro: 'AVANTAGES',
    con: 'INCONVÉNIENTS',
    masterTip: 'Conseil de Chef',
    defaultTip: 'Combiner l\'acier inoxydable pour saisir et l\'anti-adhésif pour les œufs est la base de toute cuisine efficace.',
    stainlessName: 'Acier Inoxydable',
    stainlessTag: 'Le Pro Polyvalent',
    stainlessPro: 'Éternel et non réactif. Saisis parfaits.',
    stainlessCon: 'Nécessite de la technique (chaleur) pour éviter d\'attacher.',
    stainlessTip: 'Utilisez l\'effet Leidenfrost : chauffez jusqu\'à ce qu\'une goutte d\'eau roule comme une perle.',
    nonstickName: 'Anti-adhésif',
    nonstickTag: 'Confort Maximum',
    nonstickPro: 'Rien n\'attache. Nettoyage facile.',
    nonstickCon: 'Durée de vie courte (2-3 ans). Pas de feu vif.',
    nonstickTip: 'Lavez toujours à la main et utilisez des ustensiles en bois/silicone pour doubler sa vie.',
    castironName: 'Cast Iron',
    castironTag: 'Le Classique Éternel',
    castironPro: 'Incroyable rétention de chaleur. Éternelle.',
    castironCon: 'Très lourde. Nécessite un culottage régulier.',
    castironTip: 'Chauffe lentement, mais une fois chaude, c\'est un tank. Idéal pour les steaks.',
    carbonName: 'Acier au Carbone',
    carbonTag: 'Agilité du Feu',
    carbonPro: 'Léger comme l\'acier, presque comme la fonte.',
    carbonCon: 'Rouille s\'il reste mouillé. Esthétique rugueuse.',
    carbonTip: 'Plus elle devient sombre et moche, mieux elle fonctionne. Le secret des maîtres du wok.',
    enamelName: 'Fonte Émaillée',
    enamelTag: 'Qualité Gourmet',
    enamelPro: 'Meilleure cuisson lente. Belle esthétique.',
    enamelCon: 'Très chère. Émail fragile aux chocs violents.',
    enamelTip: 'Parfait pour les braisés sans fin. L\'émail supporte les acides (tomate) sans problème.',
  },
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
