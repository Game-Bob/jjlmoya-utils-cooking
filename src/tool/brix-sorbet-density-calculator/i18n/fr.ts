import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculateur de Brix pour Sorbet: Ratio Sucre/Fruit & Contrôle du Point de Congélation pour une Onctuosité Parfaite';
const description = 'Ajustez avec précision l\'équilibre entre sucre, purée de fruits et eau pour obtenir un sorbet parfaitement onctueux à chaque fois. Calculez le Brix, l\'abaissement du point de congélation PAC et corrigez les problèmes de texture glacée ou liquide grâce à des mesures précises.';

const faq = [
  {
    question: 'Qu\'est-ce que le Brix et pourquoi est-il important dans le sorbet ?',
    answer: 'Le Brix (°Bx) mesure le pourcentage de solides dissous  -  principalement des sucres  -  dans une solution liquide. Dans les sorbets, un niveau de Brix entre 25 % et 30 % (idéalement 28 %) est essentiel pour obtenir la bonne texture. En dessous de 25 %, le sorbet gèle en un bloc dur comme de la glace car il n\'y a pas assez de sucre pour interférer avec la formation des cristaux de glace. Au-dessus de 30 %, le point de congélation descend si bas que le sorbet reste liquide et ne prend jamais complètement dans un congélateur standard.',
  },
  {
    question: 'Comment calculer la bonne quantité de sucre pour ma recette de sorbet ?',
    answer: 'Commencez par peser votre purée de fruits et mesurer son Brix naturel avec un réfractomètre (ou sélectionnez une valeur prédéfinie). Entrez ces données dans le calculateur avec la taille de votre fournée et le Brix cible (28 % par défaut). Le calculateur détermine la quantité de saccharose et d\'eau à ajouter pour amener le mélange total dans la plage optimale de 25-30 % Brix. Il prend également en compte l\'abaissement du point de congélation (PAC) afin que vous puissiez remplacer par de la dextrose si le sorbet serait autrement trop dur.',
  },
  {
    question: 'Pourquoi mon sorbet maison est-il toujours trop dur ou glacé ?',
    answer: 'Un sorbet glacé et dur comme de la pierre signifie presque toujours que la concentration totale en sucre est trop faible (en dessous de 25 % Brix). L\'eau contenue dans le fruit gèle en formant de gros cristaux de glace au lieu de rester partiellement liquide. La solution: ajoutez plus de saccharose pour augmenter le Brix, ou remplacez une partie du saccharose par de la dextrose  -  la dextrose a presque le double du pouvoir antigel (PAC 190 contre 100) et est 30 % moins sucrée, ce qui vous permet d\'abaisser le point de congélation sans rendre le sorbet écœurant.',
  },
  {
    question: 'Quelle est la différence entre l\'utilisation du saccharose et de la dextrose dans le sorbet ?',
    answer: 'Le saccharose (sucre de table) est l\'édulcorant standard avec un PAC de 100 et un POD de 100. La dextrose (poudre de glucose) a un PAC de 190  -  près du double de l\'abaissement du point de congélation  -  mais seulement 70 % du pouvoir sucrant (POD 70). Cela signifie que la dextrose ramollit le sorbet bien plus efficacement par gramme sans le rendre trop sucré. Utilisez la dextrose lorsque votre fruit est déjà naturellement sucré (par ex., mangue, banane) et que vous avez besoin de plus de pouvoir antigel sans ajouter de sucre supplémentaire.',
  },
  {
    question: 'Comment le sucre naturel des fruits affecte-t-il le calcul ?',
    answer: 'Différents fruits ont des niveaux de sucre naturel très variables: les citrons et les citrons verts sont autour de 2 % Brix, les fraises environ 8 %, les mangues et les raisins 14-18 %, et les bananes jusqu\'à 22 %. Le calculateur prend en compte le Brix naturel de votre fruit pour que vous ne dépassiez pas ou ne manquiez pas la concentration totale en sucre par inadvertance. C\'est pourquoi il est recommandé d\'utiliser un réfractomètre pour mesurer votre fruit réel  -  la variation saisonnière peut faire varier le Brix de 3-4 points.',
  },
];

const howTo = [
  {
    name: 'Pesez votre purée de fruits',
    text: 'Mesurez le poids exact de votre purée ou jus de fruits en grammes.',
  },
  {
    name: 'Estimez ou mesurez le Brix du fruit',
    text: 'Utilisez un réfractomètre pour trouver le Brix exact de votre fruit, ou sélectionnez une valeur typique dans notre base de données (par ex. Mangue: 14 %, Fraise: 8 %).',
  },
  {
    name: 'Entrez les poids dans le calculateur',
    text: 'Saisissez le poids de votre fruit, le Brix du fruit et le niveau de Brix cible (28 % par défaut).',
  },
  {
    name: 'Consultez les ajouts de sirop recommandés',
    text: 'Le calculateur affichera immédiatement le sucre et l\'eau recommandés à ajouter pour atteindre l\'objectif de 28 % Brix.',
  },
  {
    name: 'Ajustez les types de sucre si nécessaire',
    text: 'Si le mélange manque d\'abaissement suffisant du point de congélation, introduisez de la dextrose à la place du saccharose.',
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
  slug: 'calculateur-densite-brix-sorbet',
  title: 'Calculateur de Densité Brix pour Sorbet',
  description: 'Ajustez avec précision l\'équilibre entre sucre, purée de fruits et eau pour un sorbet parfaitement onctueux à chaque fois. Corrigez la texture glacée ou liquide grâce à des calculs précis de Brix et PAC.',
  faqTitle: 'Foire Aux Questions',
  ui: {
    fruitWeightLabel: 'Poids de la Purée de Fruits',
    fruitBrixLabel: 'Brix du Fruit',
    sugarWeightLabel: 'Poids de Saccharose (Sucre)',
    dextroseWeightLabel: 'Poids de Dextrose',
    waterWeightLabel: 'Poids d\'Eau Ajoutée',
    targetBrixLabel: 'Brix Cible',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: 'Brix Total du Mélange',
    totalWeightLabel: 'Poids Total de la Fournée',
    totalPACLabel: 'Abaissement du Point de Congélation (PAC)',
    statusLabel: 'Profil de Texture du Sorbet',
    statusSoft: 'Trop Mou / Liquide',
    statusOptimal: 'Onctuosité Optimale',
    statusHard: 'Trop Dur / Glacé',
    recommendedTitle: 'Recommandation de Sirop (50 % Fruits)',
    recommendedSugarLabel: 'Saccharose Requis',
    recommendedWaterLabel: 'Eau Requise',
    fruitPresetLabel: 'Préréglage de Fruit',
    presetCustom: 'Fruit Personnalisé',
    presetLemon: 'Citron / Citron Vert (2 % Bx)',
    presetStrawberry: 'Fraise / Framboise (8 % Bx)',
    presetOrange: 'Orange / Pêche (10 % Bx)',
    presetMango: 'Mangue / Raisin / Cerise (14 % Bx)',
    presetBanana: 'Banane (21 % Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Science de l\'Équilibrage du Sorbet: Brix, PAC et Solides',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Réaliser un sorbet professionnel est un exercice de science alimentaire. Contrairement à la crème glacée, qui repose sur les matières grasses du lait et les protéines pour créer de la structure et de l\'onctuosité, le sorbet repose entièrement sur les sucres dissous et les stabilisants. La concentration de ces sucres dissous est mesurée en degrés Brix (°Bx). Un mélange à sorbet parfait nécessite une concentration en sucre de 25 % à 30 % Brix. Si la teneur en sucre est trop faible, l\'eau gèlera en formant de gros cristaux de glace acérés, produisant un bloc granuleux et dur comme de la pierre. Si elle est trop élevée, le point de congélation est trop abaissé et le sorbet reste un sirop semi-liquide dans les congélateurs domestiques ou professionnels typiques.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: 'Brix Cible Idéal',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: 'Plage de Brix Sûre',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: 'Ratio de Fruits Optimal',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'Saccharose / Dextrose',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Comprendre le PAC: Le Facteur d\'Abaissement du Point de Congélation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le PAC (Potere Anticongelante, ou Pouvoir Antigel) est une mesure utilisée par les chefs pâtissiers pour quantifier à quel point un ingrédient abaisse le point de congélation de l\'eau. Le saccharose, ou sucre de table standard, est la référence de base avec une valeur PAC de 100. Cependant, le saccharose est très sucré. Si vous devez ajouter plus de solides ou augmenter la capacité antigel sans rendre le sorbet excessivement sucré, vous pouvez remplacer une portion du saccharose par de la dextrose. La dextrose a un PAC de 190, ce qui la rend presque deux fois plus efficace que le saccharose pour empêcher la formation de cristaux de glace, tout en n\'étant que 70 % aussi sucrée.',
    },
    {
      type: 'title',
      text: 'Saccharose vs Dextrose: Choisir le Bon Sucre pour le Sorbet',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Saccharose (Sucre de Table)',
          icon: 'mdi:cube-outline',
          description: 'L\'édulcorant standard et la référence pour tous les calculs PAC et POD. Fournit une douceur nette et du corps.',
          points: [
            'Valeur PAC: 100 (référence)',
            'Valeur POD: 100 (pouvoir sucrant complet)',
            'Idéal pour: rôle d\'édulcorant principal',
            'Apporte du corps et une texture standard',
          ],
        },
        {
          title: 'Dextrose (Poudre de Glucose)',
          icon: 'mdi:grain',
          description: 'Un monosaccharide avec près du double du pouvoir d\'abaissement du point de congélation et significativement moins de pouvoir sucrant.',
          highlight: true,
          points: [
            'Valeur PAC: 190 (près de 2� -  le saccharose)',
            'Valeur POD: 70 (30 % moins sucré)',
            'Idéal pour: ramollir les sorbets durs',
            'Parfait quand le fruit est déjà très sucré',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tableau de Référence des Valeurs Brix Typiques par Fruit',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Type de Fruit', 'Valeur Brix Moyenne', 'Teneur en Eau', 'Niveau d\'Acidité'],
      rows: [
        ['Citron / Citron Vert', '2 % - 4 % Bx', 'Très Élevée', 'Extrêmement Élevée'],
        ['Fraise / Framboise', '7 % - 9 % Bx', 'Élevée', 'Modérée'],
        ['Orange / Pêche', '9 % - 11 % Bx', 'Moyenne-Élevée', 'Faible-Modérée'],
        ['Pomme / Poire', '11 % - 13 % Bx', 'Moyenne', 'Faible'],
        ['Mangue / Raisin / Cerise', '14 % - 18 % Bx', 'Moyenne-Faible', 'Très Faible'],
        ['Banane', '20 % - 22 % Bx', 'Faible', 'Négligeable'],
      ],
    },
    {
      type: 'title',
      text: 'Comment Calibrer Votre Mélange à Sorbet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pour équilibrer un sorbet, mesurez d\'abord le poids et la concentration en sucre de votre purée de fruits. L\'utilisation d\'un réfractomètre est fortement recommandée pour la précision, car la douceur des fruits varie selon la saison et la maturité. Si vous n\'avez pas de réfractomètre, vous pouvez estimer en utilisant le tableau ci-dessus. Une fois ces valeurs obtenues, saisissez-les dans notre calculateur pour déterminer la quantité exacte de sirop simple (eau et sucre) nécessaire pour amener l\'ensemble du mélange au Brix cible de 28 %. Pour une texture optimale, visez une proportion de fruits d\'environ 50 % du poids total de la fournée.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pourquoi Mon Sorbet Est il Glacé ou Trop Dur ?',
      html: 'Un sorbet qui gèle dur comme de la pierre a presque toujours <strong>trop peu de sucre</strong> (Brix en dessous de 25 %). L\'eau de la purée de fruits cristallise en formant de gros éclats de glace irréguliers. Résolvez ce problème en ajoutant plus de saccharose pour augmenter le Brix total, ou remplacez une partie du saccharose par de la dextrose pour augmenter le PAC sans rendre le sorbet trop sucré. Vérifiez également que votre proportion de fruits n\'est pas trop élevée  -  dépasser 60 % de fruits laisse une place insuffisante pour les solides de sucre.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pourquoi Mon Sorbet Est il Liquide ou Ne Gele t il Pas ?',
      html: 'Un sorbet qui reste mou ou liquide a <strong>trop de sucre</strong> (Brix au-dessus de 30 %). Le point de congélation a été tellement abaissé que votre congélateur ne peut pas solidifier le mélange. Réduisez l\'apport total en sucre, ou si le fruit est naturellement très sucré (par ex., banane ou mangue), utilisez proportionnellement moins de saccharose ajouté. Vérifiez votre température cible: les congélateurs domestiques fonctionnent à −18 °C ; un PAC approprié pour un service à −12 °C sera trop élevé pour les congélateurs standards.',
    },
    {
      type: 'tip',
      title: 'Mesurez le Brix avec Précision à l\'Aide d\'un Réfractomètre',
      html: 'Un réfractomètre numérique ou optique est le meilleur investissement pour des sorbets constants. La maturité des fruits varie considérablement selon la saison, la variété et l\'origine  -  une fraise en juin peut mesurer 6 °Bx tandis que la même variété en août atteint 10 °Bx. Déposez une goutte de purée sur le prisme, lisez la valeur et entrez-la dans le calculateur. Deviner en se basant uniquement sur les tableaux produira des résultats incohérents.',
    },
    {
      type: 'title',
      text: 'Étape par Étape: Comment Utiliser Ce Calculateur',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Pesez votre purée de fruits</strong>  -  Utilisez une balance numérique pour mesurer le poids exact de votre purée ou jus de fruits filtré en grammes.',
        '<strong>Mesurez ou estimez le Brix du fruit</strong>  -  Utilisez un réfractomètre pour la précision, ou sélectionnez un préréglage dans le menu déroulant (Citron 2 %, Fraise 8 %, Mangue 14 %, etc.).',
        '<strong>Définissez votre Brix cible</strong>  -  La valeur par défaut est 28 %, le point idéal. Ajustez entre 25 % et 30 % selon votre préférence.',
        '<strong>Consultez la recommandation de sirop</strong>  -  Le calculateur indique instantanément la quantité de saccharose et d\'eau à ajouter pour atteindre votre objectif.',
        '<strong>Vérifiez l\'indicateur de texture</strong>  -  Le compteur PAC vous indique si le sorbet sera trop dur, parfaitement onctueux ou trop mou à la température de votre congélateur.',
        '<strong>Ajustez avec de la dextrose si nécessaire</strong>  -  Si le sorbet est prévu dur mais déjà assez sucré, remplacez une partie du saccharose par de la dextrose pour augmenter le PAC sans ajouter de pouvoir sucrant.',
      ],
    },
    {
      type: 'title',
      text: 'Termes Clés de la Fabrication du Sorbet',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: 'Le pourcentage de solides dissous (principalement des sucres) dans une solution liquide. Dans les sorbets, 25-30 °Bx est la plage cible pour une texture et une onctuosité idéales.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: 'Pouvoir antigel  -  une mesure de combien un ingrédient abaisse le point de congélation de l\'eau. Le saccharose a un PAC de référence de 100 ; la dextrose est à 190.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: 'Pouvoir sucrant relatif au saccharose (référence 100). La dextrose a un POD de 70, ce qui signifie qu\'elle est 30 % moins sucrée gramme pour gramme que le sucre de table.',
        },
        {
          term: 'Dextrose',
          definition: 'Un monosaccharide (poudre de glucose) utilisé dans la formulation des sorbets pour abaisser le point de congélation sans ajouter de pouvoir sucrant excessif. PAC 190, POD 70.',
        },
        {
          term: 'Réfractomètre',
          definition: 'Un instrument optique ou numérique qui mesure la valeur Brix d\'un liquide en lisant comment la lumière se courbe (se réfracte) à travers l\'échantillon. Essentiel pour la constance des sorbets.',
        },
        {
          term: 'Sirop Simple',
          definition: 'Un mélange 50/50 en poids de saccharose et d\'eau, chauffé jusqu\'à dissolution. Le véhicule standard pour ajouter du sucre aux bases de sorbet.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
