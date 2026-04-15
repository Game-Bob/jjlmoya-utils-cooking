import type { ToolLocaleContent } from '../../../types';

const title = "Diagnostic et Conservation des Bananes : Guide Scientifique";
const description = "Analysez le stade de maturité de vos bananes avec une précision scientifique. Apprenez les techniques de conservation, la biochimie de l'éthylène et l'optimisation nutritionnelle.";
const faq = [
    {
      question: 'Pourquoi les bananes deviennent-elles noires au réfrigérateur ?',
      answer: "Le froid rompt les parois cellulaires de la peau, libérant des enzymes qui oxydent les phénols et créent des polyphénols noirs. Cependant, l'intérieur reste généralement ferme et sucré plus longtemps qu'à l'extérieur.",
    },
    {
      question: 'Comment faire mûrir une banane rapidement ?',
      answer: 'Placez-les dans un sac en papier fermé avec une pomme ou une tomate. Celles-ci émettent de l\'éthylène, un gaz qui accélère la maturité. Si vous êtes pressé, vous pouvez les mettre quelques minutes au four à basse température.',
    },
    {
      question: 'Est-il prudent de manger des bananes tachetées ?',
      answer: 'Oui, tout à fait. Les taches indiquent que l\'amidon s\'est transformé en sucre, les rendant plus sucrées et digestes. Ne les jetez que si elles présentent de la moisissure, une mauvaise odeur ou sont excessivement molles.',
    },
    {
      question: 'Qu\'est-ce que l\'éthylène ?',
      answer: 'C\'est une hormone végétale sous forme de gaz qui régule la croissance et la maturation. La banane est un fruit climatérique, ce qui signifie qu\'elle continue à produire de l\'éthylène et à mûrir après sa récolte.',
    },
  ];
const howTo = [
    {
      name: 'Observer la couleur',
      text: 'Examinez attentivement la couleur de la peau, du vert au brun foncé, pour déterminer le stade actuel de maturité.',
    },
    {
      name: 'Utiliser le simulateur',
      text: 'Faites glisser l\'indicateur de maturité pour voir des prédictions précises sur le moment où elle atteindra la prochaine étape.',
    },
    {
      name: 'Ajuster les conditions',
      text: 'Modifiez la température et l\'humidité pour voir comment elles affectent la vitesse de maturation.',
    },
    {
      name: 'Appliquer la conservation',
      text: 'Suivez les recommandations spécifiques de conservation et d\'accélération selon le stade actuel.',
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
  slug: 'maturite-banane',
  title: 'Diagnostic et Conservation des Bananes : Guide Scientifique',
  description: 'Analysez le stade de maturité de vos bananes avec une précision scientifique. Apprenez les techniques de conservation, la biochimie de l\'éthylène et l\'optimisation nutritionnelle.',
  faqTitle: 'Questions Fréquemment Posées',
  bibliographyTitle: 'Sources et Références',
  ui: {
    ripesnessLabel: 'État de Maturité',
    nextStageLabel: 'Prochaine Étape dans',
    daysUnit: 'Jours',
    tempLabel: 'Température',
    humidityLabel: 'Humidité',
    partnerToggleTitle: 'Accompagnement Climatérique',
    partnerToggleSubtitle: 'Effet de l\'éthylène externe',
    conservationTitle: 'Conservation',
    accelerationTitle: 'Accélération',
    stage1Name: 'Vert Émeraude',
    stage1Desc: 'Teneur maximale en amidon résistant. Fermeté totale.',
    stage1Conservation: 'Température ambiante (18-20°C). Éviter le froid (<12°C).',
    stage1Acceleration: 'Sac en papier avec une pomme ou une tomate mûre.',
    stage2Name: 'Jaune Éclatant',
    stage2Desc: 'Équilibre parfait entre fermeté et douceur initiale.',
    stage2Conservation: 'Endroit frais, séparer du régime pour ralentir l\'éthylène.',
    stage2Acceleration: 'Garder en régime et envelopper dans du plastique.',
    stage3Name: 'Tachetée Sucrée',
    stage3Desc: 'Pic d\'antioxydants. Douceur intense et texture crémeuse.',
    stage3Conservation: 'Réfrigérer pour préserver la pulpe (bien que la peau noircisse).',
    stage3Acceleration: 'Chaleur douce (près d\'une source de chaleur, pas directe).',
    stage4Name: 'Mûre Cannelle',
    stage4Desc: 'Texture très molle. Idéal pour la pâtisserie sans sucre.',
    stage4Conservation: 'Éplucher et congeler immédiatement.',
    stage4Acceleration: 'A déjà atteint son apogée.',
    stage5Name: 'Trop Mûre / Fermentée',
    stage5Desc: 'Processus de dégradation avancé.',
    stage5Conservation: 'Non recommandé pour la consommation directe.',
    stage5Acceleration: 'N/A',
  },
  faq: [
    {
      question: 'Pourquoi les bananes deviennent-elles noires au réfrigérateur ?',
      answer: "Le froid rompt les parois cellulaires de la peau, libérant des enzymes qui oxydent les phénols et créent des polyphénols noirs. Cependant, l'intérieur reste généralement ferme et sucré plus longtemps qu'à l'extérieur.",
    },
    {
      question: 'Comment faire mûrir une banane rapidement ?',
      answer: 'Placez-les dans un sac en papier fermé avec une pomme ou une tomate. Celles-ci émettent de l\'éthylène, un gaz qui accélère la maturité. Si vous êtes pressé, vous pouvez les mettre quelques minutes au four à basse température.',
    },
    {
      question: 'Est-il prudent de manger des bananes tachetées ?',
      answer: 'Oui, tout à fait. Les taches indiquent que l\'amidon s\'est transformé en sucre, les rendant plus sucrées et digestes. Ne les jetez que si elles présentent de la moisissure, une mauvaise odeur ou sont excessivement molles.',
    },
    {
      question: 'Qu\'est-ce que l\'éthylène ?',
      answer: 'C\'est une hormone végétale sous forme de gaz qui régule la croissance et la maturation. La banane est un fruit climatérique, ce qui signifie qu\'elle continue à produire de l\'éthylène et à mûrir après sa récolte.',
    },
  ],
  howTo: [
    {
      name: 'Observer la couleur',
      text: 'Examinez attentivement la couleur de la peau, du vert au brun foncé, pour déterminer le stade actuel de maturité.',
    },
    {
      name: 'Utiliser le simulateur',
      text: 'Faites glisser l\'indicateur de maturité pour voir des prédictions précises sur le moment où elle atteindra la prochaine étape.',
    },
    {
      name: 'Ajuster les conditions',
      text: 'Modifiez la température et l\'humidité pour voir comment elles affectent la vitesse de maturation.',
    },
    {
      name: 'Appliquer la conservation',
      text: 'Suivez les recommandations spécifiques de conservation et d\'accélération selon le stade actuel.',
    },
  ],
  bibliography: [
    {
      name: 'Ethylene and Fruit Ripening: A Biological Review (Nature Research)',
      url: 'https://www.researchgate.net/profile/Jean-Claude-Pech/publication/284632414_Ethylene_and_Fruit_Ripening/links/5aef0bcbaca2727bc006482c/Ethylene-and-Fruit-Ripening.pdf',
    },
    {
      name: 'Biochemical Changes in Musa acuminata during Ripening (Journal of Food Science)',
      url: 'https://www.foodsciencejournal.com/assets/archives/2017/vol2issue5/2-5-31-566.pdf',
    },
    {
      name: 'The Role of Respiration in Climacteric Fruits (Scientific American)',
      url: 'https://www.nature.com/articles/226976b0',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Science de la maturation chez la Musa × paradisiaca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La banane est l\'un des fruits les plus consommés au monde, mais aussi l\'un des plus mal compris biologiquement. Contrairement aux fruits non climatériques comme les agrumes ou les raisins, la banane est un <strong>fruit climatérique</strong>. Cela signifie qu\'elle continue à mûrir après la récolte, augmentant considérablement la respiration cellulaire et la production d\'une phytohormone gazeuse cruciale : <strong>l\'éthylène</strong>.',
    },
    {
      type: 'paragraph',
      html: 'D\'un point de vue biochimique, la maturation est une cascade d\'événements enzymatiques. Au cours de ce processus, des enzymes comme l\'amylase décomposent les glucides complexes (amidons) en sucres simples (fructose, glucose et saccharose). Ce changement alterne non seulement la saveur, la rendant plus sucrée, mais modifie également la texture en dégradant la pectine des parois cellulaires, ce qui donne cette consistance douce et crémeuse caractérisant la banane mûre.',
    },
    {
      type: 'title',
      text: 'Le Cycle de l\'Éthylène',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'éthylène fonctionne comme un interrupteur biologique. Une fois que le fruit détecte une faible concentration d\'éthylène, il active les gènes responsables de la production de plus d\'éthylène, créant une boucle de rétroaction positive. C\'est pourquoi une banane très mûre accélère la maturation de toutes ses voisines dans le compotier. Pour ralentir ce processus, il est vital d\'isoler les spécimens présentant déjà des taches brunes de ceux encore verts.',
    },
    {
      type: 'title',
      text: 'Le Mythe du Réfrigérateur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il existe une croyance populaire selon laquelle les bananes ne devraient pas aller au réfrigérateur. La réalité est plus complexe : le froid (en dessous de 12°C) cause des dommages dus au refroidissement dans les cellules de la peau, libérant des enzymes qui oxydent les phénols et font noircir la peau. Cependant, cela n\'affecte que l\'apparence. Si l\'intérieur a déjà atteint la maturité souhaitée, le froid arrêtera presque complètement le ramollissement de la pulpe, préservant la saveur et la texture pendant plusieurs jours supplémentaires.',
    },
    {
      type: 'title',
      text: 'Stratégies de Conservation Avancées',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Emballage de la couronne :</strong> Envelopper la tige d\'un régime de bananes avec du film plastique réduit considérablement la libération d\'éthylène, prolongeant la durée de conservation commerciale jusqu\'à 72 heures supplémentaires.',
    },
    {
      type: 'paragraph',
      html: '<strong>Suspension Dynamique :</strong> Suspendre les bananes évite les meurtrissures dues à la pression. Les tissus endommagés libèrent de l\'éthylène plus rapidement, créant des points chauds de maturation accélérée qui se propagent à travers le fruit.',
    },
    {
      type: 'paragraph',
      html: '<strong>Cryothérapie (Congélation) :</strong> Pour les bananes au stade 4 (brune), la congélation est la meilleure option. Éplucher le fruit avant de le congeler empêche l\'humidité d\'être piégée, préservant la qualité des fibres.',
    },
    {
      type: 'title',
      text: 'Changements Nutritionnels par Étape',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'À mesure que la banane mûrit, son profil nutritionnel se transforme radicalement, ce qui lui permet d\'être utilisée comme un outil diététique spécifique selon les objectifs du consommateur.',
    },
    {
      type: 'table',
      headers: ['Stade', 'Amidons Résistants', 'Caractéristiques', 'Bénéfice Principal'],
      rows: [
        ['Vert (1-2)', '~80%', 'Très ferme, teneur maximale en amidon', 'Santé intestinale et contrôle glycémique'],
        ['Jaune (3)', '~5%', 'Équilibre entre fermeté et douceur', 'Énergie rapide et vitamines B'],
        ['Tachetée (4)', 'Minimal', 'Très molle, haute teneur en sucre', 'Potentiel antioxydant maximal'],
        ['Brune (5)', 'Pratiquement nul', 'Texture très molle, fermentation avancée', 'Non recommandé pour la consommation'],
      ],
    },
    {
      type: 'title',
      text: 'Conclusion et Application Pratique',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Réduire le gaspillage alimentaire :</strong> Un diagnostic précis du stade de la banane permet d\'identifier le moment de consommation optimal, évitant ainsi la perte de fruits précieux.',
        '<strong>Optimiser les bénéfices nutritionnels :</strong> De l\'amidon résistant des bananes vertes pour la santé intestinale aux antioxydants des bananes tachetées pour un potentiel antioxydant maximal.',
        '<strong>Planifier une consommation stratégique :</strong> Adaptez l\'utilisation des bananes selon vos objectifs de santé : contrôle glycémique, énergie rapide, digestion ou antioxydants.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Alerte de Dégradation :</strong> Des facteurs externes comme une humidité relative supérieure à 85 % ou des températures supérieures à 25 °C peuvent accélérer considérablement la dégradation, faisant passer la banane d\'optimale à immangeable en quelques heures. Ce simulateur vous aide à anticiper ces changements et à planifier de manière stratégique.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
