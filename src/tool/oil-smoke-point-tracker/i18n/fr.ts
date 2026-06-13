import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Suivi du Point de Fumée de l\'Huile:Estimateur de Durée de Vie et de Dégradation de l\'Huile de Friture';
const description = 'Surveillez la qualité de l\'huile de friture et estimez la baisse actuelle du point de fumée. Suivez les utilisations, les températures et les types d\'aliments pour prévenir l\'accumulation nocive de composés polaires.';

const faq = [
  {
    question: 'Pourquoi le point de fumée de l\'huile de friture baisse-t-il avec le temps ?',
    answer: 'Chaque fois que l\'huile est chauffée à des températures de friture, la dégradation thermique, l\'hydrolyse et l\'oxydation décomposent les triglycérides en acides gras libres (AGL), monoacylglycérols et diacylglycérols. Ces produits de décomposition ont un point d\'ébullition et de fumée bien plus bas que les triglycérides intacts, ce qui fait que l\'huile fume à des températures plus basses lors d\'utilisations répétées.',
  },
  {
    question: 'Que sont les composés polaires et pourquoi sont-ils réglementés ?',
    answer: 'Les composés polaires (CPT) sont les produits de dégradation formés pendant la friture. Lorsqu\'ils dépassent 25 % du poids de l\'huile, celle-ci est considérée comme dégradée, oxydée et nocive à la consommation, provoquant de mauvais goûts et des risques cardiovasculaires potentiels. Dans de nombreux pays européens, la loi impose de jeter l\'huile de friture lorsque les CPT dépassent 25 %.',
  },
  {
    question: 'Comment la panure ou la farine affectent-elles la dégradation de l\'huile ?',
    answer: 'Les panures, les pâtes à frire et la farine libre libèrent des particules alimentaires dans l\'huile chaude. Ces particules se carbonisent rapidement à des températures supérieures à 180 degrés Celsius, libérant des acides gras libres et agissant comme catalyseurs qui accélèrent la dégradation thermique. Les féculents propres comme les pommes de terre dégradent l\'huile beaucoup plus lentement.',
  },
  {
    question: 'Quelle est la limite de sécurité pour la réutilisation de l\'huile ?',
    answer: 'En règle générale, les huiles raffinées résistantes à haute température comme le canola ou l\'arachide peuvent être réutilisées 5 à 8 fois dans des conditions propres. En revanche, les huiles non raffinées ou les huiles exposées à des températures supérieures à 190 degrés Celsius ou à des aliments panés doivent être jetées après 1 à 3 utilisations.',
  },
];

const howTo = [
  {
    name: 'Sélectionnez le type d\'huile de friture',
    text: 'Choisissez votre huile dans la liste. Les huiles raffinées haute température ont un point de fumée initial plus élevé que les options non raffinées.',
  },
  {
    name: 'Suivez les cycles de friture',
    text: 'Saisissez le nombre total de sessions de friture que le lot d\'huile actuel a subies.',
  },
  {
    name: 'Indiquez la température de friture',
    text: 'Ajustez le curseur pour qu\'il corresponde à la température moyenne de vos sessions de friture. Les températures supérieures à 180 degrés Celsius accélèrent la décomposition.',
  },
  {
    name: 'Identifiez le type d\'enrobage alimentaire',
    text: 'Précisez si vous faites frire des féculents propres ou des aliments farinés/panés qui laissent des résidus carbonisés.',
  },
  {
    name: 'Vérifiez le point de fumée et l\'état de rebut',
    text: 'Examinez le point de fumée dégradé et la jauge de rebut. Jetez immédiatement si la santé de l\'huile entre dans la zone critique.',
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'suivi-point-fumee-huile-friture',
  title: 'Suivi du Point de Fumée de l\'Huile',
  description: 'Surveillez la qualité de l\'huile de friture et estimez la baisse actuelle du point de fumée. Suivez les utilisations, les températures et les types d\'aliments pour prévenir l\'accumulation nocive de composés polaires.',
  faqTitle: 'Foire Aux Questions',
  ui: {
    oilPresetLabel: 'Type d\'Huile de Friture',
    presetAvocadoRefined: 'Huile d\'Avocat (Raffinée)',
    presetSunflowerRefined: 'Huile de Tournesol (Raffinée)',
    presetPeanutRefined: 'Huile d\'Arachide (Raffinée)',
    presetCanolaRefined: 'Huile de Canola (Raffinée)',
    presetOliveEV: 'Huile d\'Olive Vierge Extra',
    presetOlivePomace: 'Huile de Grignons d\'Olive',
    presetCoconutUnrefined: 'Huile de Coco (Non Raffinée)',
    presetSunflowerUnrefined: 'Huile de Tournesol (Non Raffinée)',
    usesLabel: 'Cycles de Friture (Utilisations)',
    tempLabel: 'Température de Friture',
    foodTypeLabel: 'Préparation / Enrobage des Aliments',
    optionStarch: 'Féculent Propre (Pommes de Terre, Frites)',
    optionBreading: 'Aliments Farinés, en Pâte à Frire ou Panés',
    baseSmokePointLabel: 'Point de Fumée Initial',
    currentSmokePointLabel: 'Point de Fumée Dégradé',
    polarCompoundsLabel: 'Composés Polaires (CPT)',
    polymerizationLabel: 'Santé de Polymérisation de l\'Huile',
    statusLabel: 'Profil de Sécurité de l\'Huile',
    statusGood: 'SÛR À RÉUTILISER',
    statusCaution: 'ATTENTION - FILTRER BIENTÔT',
    statusDiscard: 'JETER IMMÉDIATEMENT',
    adviceGood: 'Les propriétés de l\'huile sont stables. Continuez la friture, mais filtrez les particules alimentaires résiduelles après refroidissement.',
    adviceCaution: 'La dégradation a commencé. Le point de fumée a baissé. Nous recommandons de filtrer et de n\'utiliser qu\'une seule fois de plus.',
    adviceDiscard: 'Dégradation critique atteinte. Concentration élevée de composés polaires. Jetez pour prévenir le rancissement et les risques pour la santé.',
    gaugeSafe: 'Sûr',
    gaugeCaution: 'Attention',
    gaugeDiscard: 'Jeter',
    limitLabel: 'Limite',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Chimie de la Friture Profonde:Pourquoi les Huiles se Dégradent',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La friture profonde est l\'une des techniques de cuisson les plus intenses chimiquement. Lorsque les aliments sont immergés dans l\'huile à haute température (généralement entre 160 et 190 degrés Celsius), l\'huile est simultanément exposée à la chaleur, à l\'humidité des aliments et à l\'oxygène de l\'air. Cela déclenche trois réactions chimiques distinctes:l\'hydrolyse (l\'eau rompt les liaisons ester), l\'oxydation (l\'oxygène crée des hydroperoxydes) et la polymérisation (les molécules dégradées se lient en chaînes épaisses et visqueuses). À mesure que ces réactions progressent, la concentration en composés polaires totaux (CPT) augmente, et la température à laquelle l\'huile commence à se décomposer et à fumer chute considérablement.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '25 % CPT',
          label: 'Limite Légale de Rebut',
          icon: 'mdi:alert-octagon',
        },
        {
          value: '180 °C',
          label: 'Seuil Critique de Température',
          icon: 'mdi:thermometer-alert',
        },
        {
          value: '2,2x',
          label: 'Taux de Dégradation avec Panure',
          icon: 'mdi:chart-timeline-variant',
        },
        {
          value: 'AGL',
          label: 'Cause:Acides Gras Libres',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Composés Polaires et Réglementations Sanitaires',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les composés polaires totaux (CPT) constituent la norme internationale pour mesurer le niveau de dégradation des graisses de friture. Dans les cuisines professionnelles, l\'utilisation d\'huile dont la concentration en CPT dépasse 25 % est interdite par la loi dans plusieurs pays pour des raisons de sécurité. Ces composés polaires sont des inhibiteurs d\'absorption, réduisent l\'efficacité de cuisson et dégradent le croustillant de la croûte frite. Plus important encore, consommer régulièrement de l\'huile oxydée contribue à l\'ingestion de radicaux libres et de composés toxiques associés à des problèmes cardiovasculaires.',
    },
    {
      type: 'title',
      text: 'Comparaison des Types d\'Huile:Points de Fumée Initiaux',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Huiles Raffinées (Haute Température)',
          icon: 'mdi:shield-check',
          description: 'Huiles traitées pour éliminer les composés volatils, les acides gras libres et les impuretés. Elles ont des points de fumée initiaux exceptionnellement élevés.',
          points: [
            'Avocat Raffinée:270 °C / 518 °F',
            'Tournesol Raffinée:232 °C / 450 °F',
            'Arachide Raffinée:232 °C / 450 °F',
            'Haute résistance à la dégradation initiale',
          ],
        },
        {
          title: 'Huiles Non Raffinées (Basse Température / Savoureuses)',
          icon: 'mdi:leaf',
          description: 'Huiles pressées à froid ou vierges contenant de grandes quantités d\'éléments naturels, de minéraux et d\'acides gras libres.',
          highlight: true,
          points: [
            'Olive Vierge Extra:190 °C / 374 °F',
            'Coco Non Raffinée:177 °C / 350 °F',
            'Tournesol Non Raffinée:107 °C / 225 °F',
            'Se dégrade extrêmement vite sous la chaleur',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tableau de Référence:Point de Fumée et Réutilisation Maximale de l\'Huile de Friture',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Variété d\'Huile', 'Point de Fumée Initial (°C)', 'Point de Fumée Initial (°F)', 'État / Transformation', 'Utilisations Max. Recommandées'],
      rows: [
        ['Huile d\'Avocat (Raffinée)', '270 °C', '518 °F', 'Raffinée', '10 à 12 utilisations'],
        ['Huile de Grignons d\'Olive', '238 °C', '460 °F', 'Raffinée', '8 à 10 utilisations'],
        ['Huile de Tournesol (Raffinée)', '232 °C', '450 °F', 'Raffinée', '6 à 8 utilisations'],
        ['Huile d\'Arachide (Raffinée)', '232 °C', '450 °F', 'Raffinée', '6 à 8 utilisations'],
        ['Huile de Canola (Raffinée)', '204 °C', '400 °F', 'Raffinée', '5 à 7 utilisations'],
        ['Huile d\'Olive Vierge Extra', '190 °C', '374 °F', 'Pressée à Froid', '2 à 3 utilisations'],
        ['Huile de Coco (Non Raffinée)', '177 °C', '350 °F', 'Non Raffinée', '1 à 2 utilisations'],
        ['Huile de Tournesol (Non Raffinée)', '107 °C', '225 °F', 'Non Raffinée', 'Ne pas utiliser pour friture profonde'],
      ],
    },
    {
      type: 'title',
      text: 'Signes d\'Alerte Critiques d\'une Huile Dégradée',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Danger:Quand l\'Huile de Friture Devient Toxique',
      html: 'Ne continuez pas à réutiliser l\'huile si vous observez l\'un des symptômes suivants:<strong>odeur rance ou savonneuse</strong>, une couleur sombre et trouble, ou <strong>une mousse excessive</strong> autour des aliments. Si l\'huile commence à fumer à des températures de cuisson normales (170-180 °C), cela indique que le point de fumée s\'est effondré en raison d\'une accumulation extrême d\'acides gras libres (AGL). Cuisiner avec de l\'huile dégradée transfère des composés polaires toxiques et des éléments cancérigènes dans vos aliments, nuisant à la fois au goût et à la santé.',
    },
    {
      type: 'title',
      text: 'Comment Prolonger la Qualité de l\'Huile de Friture',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Filtrez Immédiatement les Résidus Carbonisés',
      html: 'La friture d\'aliments en pâte à frire ou farinés laisse des microparticules qui se déposent au fond de la friteuse. Ces particules continuent de se carboniser pendant la cuisson, agissant comme catalyseurs qui accélèrent la dégradation de l\'huile. Pour ralentir ce processus, écumez toujours la surface pendant la friture et <strong>filtrez l\'huile refroidie</strong> à travers un tamis fin, une étamine ou un filtre à café après chaque session de friture. Conservez l\'huile filtrée dans un récipient en verre hermétique, dans un endroit sombre et frais.',
    },
    {
      type: 'title',
      text: 'Bonnes Pratiques pour la Friture Profonde',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Séchez soigneusement la surface des aliments</strong> - L\'excès d\'humidité déclenche une hydrolyse rapide, décomposant l\'huile en acides gras libres.',
        '<strong>Évitez de saler avant la friture</strong> - Le sel agit comme un catalyseur qui accélère l\'oxydation de l\'huile ; assaisonnez les aliments immédiatement après les avoir retirés de l\'huile chaude.',
        '<strong>Maintenez des températures optimales</strong> - Restez entre 170 °C et 180 °C. Dépasser ce seuil accélère la dégradation thermique, tandis que descendre en dessous fait absorber l\'excès de graisse par les aliments.',
        '<strong>Ne complétez pas avec de l\'huile fraîche</strong> - Mélanger de l\'huile neuve avec de l\'huile dégradée accélère la décomposition de l\'huile neuve au lieu de la restaurer.',
      ],
    },
    {
      type: 'title',
      text: 'Glossaire de la Friture Profonde et de la Dégradation Lipidique',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Point de Fumée',
          definition: 'Température à laquelle une huile ou une graisse commence à se décomposer continuellement et à produire une fumée bleuâtre visible, libérant de l\'acroléine.',
        },
        {
          term: 'Composés Polaires Totaux (CPT)',
          definition: 'Indicateur standard mondial de la dégradation de l\'huile, représentant le pourcentage total en poids de composés oxydés, d\'AGL et de polymères.',
        },
        {
          term: 'Hydrolyse',
          definition: 'Réaction chimique au cours de laquelle les molécules d\'eau décomposent les triglycérides en acides gras libres et en glycérol. Déclenchée par l\'humidité des aliments.',
        },
        {
          term: 'Polymérisation',
          definition: 'Processus par lequel les molécules d\'huile endommagées par la chaleur se lient pour former de grandes structures macromoléculaires, augmentant la viscosité de l\'huile.',
        },
        {
          term: 'Acides Gras Libres (AGL)',
          definition: 'Acides carboxyliques libérés par les triglycérides lors de l\'hydrolyse. Ils réduisent directement le point de fumée initial de la graisse.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
