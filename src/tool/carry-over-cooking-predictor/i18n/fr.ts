import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Prédicteur de Cuisson Résiduelle: Calculateur d\'Inertie Thermique';
const description = 'Prévoyez de combien de degrés votre rôti continuera de cuire après l\'avoir sorti du four. Obtenez la température de retrait exacte pour un rosé parfait.';

const faq = [
  {
    question: 'Qu\'est-ce que la cuisson résiduelle et pourquoi se produit-elle ?',
    answer: 'La cuisson résiduelle, aussi appelée inertie thermique, est la poursuite de l\'augmentation de la température interne après avoir retiré les aliments du four. La chaleur stockée dans les couches extérieures continue de se conduire vers le centre. Un rôti sorti à 50°C peut atteindre 54°C pendant le repos - la différence entre saignant et rosé.',
  },
  {
    question: 'Comment la température du four affecte-t-elle la cuisson résiduelle ?',
    answer: 'Les températures de four élevées (200-250°C) créent un gradient thermique plus important entre la surface et le cœur, stockant davantage de chaleur latente dans la croûte. Cela augmente l\'effet résiduel. Un rôti cuit à 120°C aura une cuisson résiduelle minimale (~1°C), tandis qu\'un rôti à 220°C peut gagner 5-8°C pendant le repos.',
  },
  {
    question: 'La forme de la viande change-t-elle le calcul de la cuisson résiduelle ?',
    answer: 'Oui. La géométrie affecte considérablement la pénétration de la chaleur. Les volailles entières et les gros rôtis ont une masse thermique plus importante par rapport à leur surface, ils retiennent donc plus de chaleur et présentent un effet résiduel plus marqué. Les morceaux plats comme les steaks ont un rapport surface/volume élevé et refroidissent rapidement, avec un effet résiduel minimal.',
  },
  {
    question: 'Combien de temps dois-je laisser reposer la viande après l\'avoir sortie ?',
    answer: 'Le temps de repos dépend du poids et de la géométrie. Une règle générale est d\'environ 1 minute pour 100g de viande, minimum 10 minutes, maximum 45 minutes. Un rôti de 2kg nécessite environ 16 minutes de repos. Pendant ce temps, la température interne s\'égalise et l\'effet de cuisson résiduelle se termine.',
  },
];

const howTo = [
  {
    name: 'Sélectionnez la géométrie de la viande',
    text: 'Choisissez Volaille Entière pour la volaille, Rôti Cylindrique pour les filets et les morceaux désossés, ou Morceau Plat pour les steaks et les pavés.',
  },
  {
    name: 'Entrez le poids',
    text: 'Saisissez le poids total de votre morceau en grammes. Des poids minimaux s\'appliquent selon le type de géométrie.',
  },
  {
    name: 'Réglez la température du four',
    text: 'Entrez la température réelle de votre four. Des températures plus élevées augmentent l\'effet de cuisson résiduelle.',
  },
  {
    name: 'Définissez votre température cible',
    text: 'Saisissez la température interne finale souhaitée (par ex. 54°C pour un bœuf rosé, 74°C pour la volaille).',
  },
  {
    name: 'Lisez la température de retrait',
    text: 'Le calculateur vous indique exactement quand retirer la viande pour atteindre votre cible après le repos.',
  },
  {
    name: 'Laissez reposer la viande',
    text: 'Laissez la viande reposer pendant le temps recommandé. Ne la couvrez pas trop serré, sinon la croûte ramollira.',
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
  slug: 'predicteur-cuisson-residuelle',
  title: 'Prédicteur de Cuisson Résiduelle',
  description: 'Prévoyez de combien de degrés votre rôti continuera de cuire après l\'avoir sorti du four. Obtenez la température de retrait exacte pour un rosé parfait.',
  faqTitle: 'Questions Fréquentes',
  ui: {
    title: 'Prédicteur de Cuisson Résiduelle',
    subtitle: 'Calculateur d\'inertie thermique pour un rôtissage de précision',
    geometryLabel: 'Géométrie de la Viande',
    wholeBird: 'Volaille Entière (Poulet, Dinde)',
    cylindricalRoast: 'Rôti Cylindrique (Filet, Désossé)',
    flatCut: 'Morceau Plat (Steak, Pavé)',
    weightLabel: 'Poids',
    ovenTempLabel: 'Température du Four',
    targetTempLabel: 'Température Interne Cible',
    pullTemp: 'Température de Retrait',
    carryOver: 'Cuisson Résiduelle',
    restTime: 'Temps de Repos',
    minutes: 'min',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: 'Unités',
    metricUnit: 'Métrique',
    imperialUnit: 'Impérial',
    geometryDescCylindrical: 'Géométrie cylindrique sélectionnée - inertie thermique modérée avec cuisson résiduelle prévisible.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: 'La température cible ne peut pas dépasser la température du four.',
    errorOvenTooHot: 'La température du four dépasse 350°C. Veuillez baisser la température.',
    errorWeightTooLow: 'Le poids est inférieur au minimum pour cette géométrie.',
    errorWeightTooHigh: 'Le poids dépasse le maximum pour cette géométrie.',
    pullNow: 'Retirez la viande maintenant',
    pullAt: 'Retirer à',
    toReach: 'pour atteindre',
    afterRest: 'après repos',
    carryOverWillAdd: 'La cuisson résiduelle ajoutera environ',
    footerTemplate: '{carry} résiduelle · {rest} repos · {weight}{wunit}, {oven} four → {target} cible',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Prédicteur de Cuisson Résiduelle: Obtenez la Température de Retrait Parfaite à Chaque Fois',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La cuisson résiduelle est la poursuite de l\'augmentation de la température interne après que les aliments quittent le four. Les couches extérieures emmagasinent la chaleur pendant la cuisson, et cette énergie continue de se conduire vers le centre plus froid pendant le repos. Un rôti épais sorti à 50°C peut atteindre 54°C après repos - la différence entre saignant et rosé. Ce calculateur prédit exactement de combien de degrés votre rôti va grimper afin que vous puissiez le retirer au moment précis.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: 'Résiduel typique (four chaud)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: 'Résiduel minimal (four doux)', icon: 'mdi:thermometer-low' },
        { value: '16 min', label: 'Repos pour un rôti de 2kg', icon: 'mdi:clock-outline' },
        { value: '45 min', label: 'Repos maximal recommandé', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: 'Tableau des Températures de Retrait par Cuisson',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Utilisez ce tableau pour trouver votre température interne cible, puis laissez le calculateur déterminer la température de retrait exacte. Rappelez-vous: la température de retrait est toujours <strong>inférieure</strong> à votre cible car l\'effet de cuisson résiduelle continuera la cuisson pendant le repos.',
    },
    {
      type: 'table',
      headers: ['Cuisson', 'Temp. Cible', 'Temp. Retrait (four 200°C)', 'Temps Repos'],
      rows: [
        ['Bœuf Saignant', '52°C / 126°F', '46-48°C / 115-118°F', '10-15 min'],
        ['Bœuf Rosé', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Bœuf À Point', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
        ['Bœuf Bien Cuit', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Porc Rosé', '63°C / 145°F', '57-59°C / 135-138°F', '10-15 min'],
        ['Porc Bien Cuit', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Blanc de Poulet/Dinde', '74°C / 165°F', '68-70°C / 154-158°F', '15-20 min'],
        ['Cuisse Poulet/Dinde', '82°C / 180°F', '76-78°C / 169-172°F', '15-20 min'],
        ['Agneau Rosé', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Agneau À Point', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
      ],
    },
    {
      type: 'title',
      text: 'Comment la Géométrie Modifie le Calcul Thermique',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Volaille Entière',
          icon: 'mdi:food-drumstick',
          description: 'Masse thermique maximale par rapport à la surface. Les épais cœurs de la poitrine et de la cuisse stockent une énorme chaleur latente.',
          highlight: false,
          points: ['Résiduel: 5-10°C dans un four à 200°C', 'Repos: 20-45 minutes', 'Idéal pour: dinde, poulet entier, canard', 'Retirer 8-10°C avant la cible'],
        },
        {
          title: 'Rôti Cylindrique',
          icon: 'mdi:food-steak',
          description: 'La forme de rôti la plus courante. Rétention de chaleur modérée avec des valeurs de cuisson résiduelle prévisibles.',
          highlight: true,
          points: ['Résiduel: 3-7°C dans un four à 200°C', 'Repos: 15-30 minutes', 'Idéal pour: filet, filet de porc, carré d\'agneau', 'Retirer 5-7°C avant la cible'],
        },
        {
          title: 'Morceau Plat',
          icon: 'mdi:food',
          description: 'Le rapport surface/volume élevé permet à la chaleur de s\'échapper rapidement. La cuisson résiduelle est minimale mais compte toujours.',
          highlight: false,
          points: ['Résiduel: 1-3°C dans un four à 200°C', 'Repos: 5-15 minutes', 'Idéal pour: steaks, blanc de poulet, filet de poisson', 'Retirer 1-3°C avant la cible'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Erreurs Courantes de Cuisson Résiduelle et Comment les Corriger',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Retrait trop tardif',
      html: 'Si vous attendez que le thermomètre indique votre température cible avant de retirer, la cuisson résiduelle dépassera de 3-8°C. Un rôti rosé devient à point ou bien cuit. <strong>Retirez toujours 5-8°C avant votre cible.</strong> Utilisez ce calculateur pour obtenir le nombre exact.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Découpage trop précoce',
      html: 'Couper un rôti immédiatement après l\'avoir sorti libère jusqu\'à 30% des jus. Le gradient thermique n\'a pas le temps de s\'égaliser, le centre reste donc insuffisamment cuit tandis que les couches extérieures surcuisent. <strong>Respectez le temps de repos complet recommandé.</strong> Couvrez lâchement de papier aluminium - ne l\'enveloppez pas serré, sinon la vapeur ramollira la croûte.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Température du four trop basse',
      html: 'Un four bas (en dessous de 150°C / 300°F) crée un gradient thermique minimal entre la surface et le cœur. Cela signifie presque aucun effet de cuisson résiduelle. Si vous cuisinez à basse température, vous pouvez retirer à votre température cible exacte avec un risque minimal de dépassement. Cependant, le développement de la croûte sera considérablement réduit.',
    },
    {
      type: 'title',
      text: 'Conseils de Pro pour un Rôtissage Parfait',
      level: 3,
    },
    {
      type: 'tip',
      title: 'La Règle des 10 Degrés',
      html: 'Un four chaud (220°C / 425°F) ajoute environ 1°C de cuisson résiduelle par 100g de viande pour les volailles entières, et 0.7°C par 100g pour les rôtis cylindriques. Utilisez-le comme vérification croisée avec le calculateur: un poulet de 2kg à 220°C devrait avoir environ 7-9°C de cuisson résiduelle.',
    },
    {
      type: 'tip',
      title: 'La Position de Repos Compte',
      html: 'Faites toujours reposer la viande sur une assiette chaude ou une planche à découper, pas sur une surface froide. Une surface froide aspirera la chaleur du fond du rôti, créant des températures finales inégales. Pour les volailles entières, reposez poitrine vers le haut pour que les jus se redistribuent uniformément dans la viande blanche.',
    },
    {
      type: 'tip',
      title: 'Couvrir, Pas Envelopper',
      html: 'Couvrez lâchement le rôti de papier aluminium pendant le repos. L\'envelopper serré emprisonne la vapeur et ramollit la croûte. Un couvercle lâche réduit la perte de chaleur d\'environ 30% tout en permettant à la vapeur de s\'échapper, préservant à la fois l\'effet de cuisson résiduelle et l\'extérieur croustillant.',
    },
    {
      type: 'title',
      text: 'Glossaire des Termes Clés du Rôtissage',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Cuisson Résiduelle', definition: 'La poursuite de l\'augmentation de la température interne après avoir retiré les aliments de la source de chaleur, causée par la conduction de la chaleur des couches extérieures vers le centre.' },
        { term: 'Température de Retrait', definition: 'La température interne à laquelle vous devez sortir la viande du four. Toujours inférieure à la température cible pour tenir compte de la cuisson résiduelle.' },
        { term: 'Température Cible', definition: 'La température interne finale que vous souhaitez que la viande atteigne après le repos. Aussi appelée température de service.' },
        { term: 'Inertie Thermique', definition: 'La tendance d\'une masse à résister aux changements de température. Les morceaux plus lourds et plus denses ont une inertie thermique plus élevée et une cuisson résiduelle plus importante.' },
        { term: 'Repos', definition: 'La période après la cuisson où la viande repose sans être touchée, permettant à la chaleur de s\'égaliser et aux jus de se redistribuer dans les fibres.' },
        { term: 'Gradient Thermique', definition: 'La différence de température entre la surface de la viande et son cœur. Un gradient plus important stocke davantage de chaleur latente pour la cuisson résiduelle.' },
        { term: 'Chaleur Latente', definition: 'L\'énergie thermique stockée dans les couches extérieures de la viande pendant la cuisson. Cette énergie est libérée à mesure que la température s\'égalise pendant le repos.' },
      ],
    },
    {
      type: 'title',
      text: 'Référence Rapide: Températures de Retrait Recommandées',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Retirez à ces températures pour des résultats parfaits (four à 200°C / 400°F)',
      items: [
        'Bœuf rosé: retirer à 48-50°C / 118-122°F, cible 54°C / 129°F',
        'Bœuf à point: retirer à 54-56°C / 129-133°F, cible 60°C / 140°F',
        'Filet de porc: retirer à 57-59°C / 135-138°F, cible 63°C / 145°F',
        'Blanc de poulet: retirer à 68-70°C / 154-158°F, cible 74°C / 165°F',
        'Dinde entière: retirer à 68-70°C / 154-158°F, cible 74°C / 165°F (poitrine)',
        'Carré d\'agneau: retirer à 48-50°C / 118-122°F, cible 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: 'Chaque rôti est différent. Le poids, la température exacte du four et la forme du morceau modifient tous ces chiffres. C\'est exactement ce que fait ce calculateur - il prend vos données spécifiques et calcule la température de retrait précise pour votre situation exacte. Pas de conjectures, pas de rôtis gâchés.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
