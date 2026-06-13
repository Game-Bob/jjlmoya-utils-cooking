import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Optimiseur de la Réaction de Maillard: Calculateur de pH et Température pour le Brunissement';
const description = 'Calculez exactement la quantité de bicarbonate de soude à ajouter par kilo d\'aliments pour accélérer la réaction de Maillard. Évitez les saveurs savonneuses en restant dans les limites d\'alcalinité sécuritaires.';

const faq = [
  {
    question: 'Qu\'est-ce que la réaction de Maillard et pourquoi est-elle importante en cuisine ?',
    answer: 'La réaction de Maillard est une réaction chimique entre les acides aminés et les sucres réducteurs qui donne aux aliments brunis leur saveur distinctive. Elle est responsable de la croûte d\'une viande saisie, de la couleur dorée du pain, du café torréfié et des oignons caramélisés. La réaction se produit le plus rapidement entre 140 °C et 165 °C.',
  },
  {
    question: 'Comment le bicarbonate de soude accélère-t-il le brunissement ?',
    answer: 'Le bicarbonate de soude élève le pH de la surface des aliments, la rendant plus alcaline. La réaction de Maillard progresse significativement plus vite en milieu alcalin. Faire passer le pH de 6 à 8 peut doubler ou tripler la vitesse de brunissement. Cependant, trop de bicarbonate produit un arrière-goût métallique et savonneux  -  c\'est pourquoi ce calculateur impose des limites de sécurité.',
  },
  {
    question: 'Quelle est la quantité maximale sécuritaire de bicarbonate de soude par kilogramme d\'aliment ?',
    answer: 'La limite sécuritaire générale est de 1,5 gramme de bicarbonate de soude par kilogramme d\'aliment. Au-delà de ce seuil, le risque de goûts désagréables (métalliques, savonneux ou chimiques) augmente considérablement. Notre quantité recommandée est la moitié du maximum, ce qui offre une accélération significative du brunissement avec un risque minimal pour le goût.',
  },
  {
    question: 'Que se passe-t-il si la température est trop basse pour la réaction de Maillard ?',
    answer: 'En dessous de 110 °C, il y a principalement évaporation de l\'eau et aucun brunissement de Maillard significatif. Entre 110 °C et 140 °C, le brunissement se produit lentement. La plage de température optimale est de 140 °C à 180 °C. Au-dessus de 180 °C, la pyrolyse commence  -  les aliments brûlent et produisent des composés amers et âcres plutôt que les arômes désirables du brunissement.',
  },
];

const howTo = [
  {
    name: 'Pesez votre aliment',
    text: 'Saisissez le poids total de l\'aliment que vous souhaitez faire brunir en grammes.',
  },
  {
    name: 'Réglez la température de cuisson',
    text: 'Entrez la température de votre surface de cuisson ou de votre four. La zone de Maillard optimale est de 140 à 180 °C.',
  },
  {
    name: 'Ajustez la quantité de bicarbonate',
    text: 'Le curseur démarre à la moitié du maximum sécuritaire. Augmentez prudemment  -  le calculateur vous avertira avant d\'atteindre la zone dangereuse.',
  },
  {
    name: 'Lisez le pH estimé et le multiplicateur de vitesse',
    text: 'Le calculateur indique à quelle vitesse le brunissement se produit au niveau de pH choisi par rapport au pH de référence de 6.',
  },
  {
    name: 'Vérifiez le niveau de risque pour le goût',
    text: 'Le badge de goût affiche sûr, attention ou danger selon le pH de surface estimé. Restez dans la zone verte pour de meilleurs résultats.',
  },
  {
    name: 'Appliquez le bicarbonate uniformément',
    text: 'Dissolvez la quantité recommandée dans un peu d\'eau et badigeonnez ou mélangez avec l\'aliment avant la cuisson. Une répartition inégale provoque un brunissement irrégulier.',
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
  slug: 'optimiseur-reaction-maillard',
  title: 'Optimiseur de la Réaction de Maillard',
  description: 'Calculez exactement la quantité de bicarbonate de soude à ajouter par kilo d\'aliments pour accélérer la réaction de Maillard. Évitez les saveurs savonneuses en restant dans les limites d\'alcalinité sécuritaires.',
  faqTitle: 'Foire Aux Questions',
  ui: {
    title: 'Optimiseur de la Réaction de Maillard',
    headerLabel: 'Chimie du Brunissement',
    flavorSafe: 'pH Sûr',
    flavorCaution: 'Attention: Alcalin',
    flavorDanger: 'Danger: Risque Savonneux',
    unitLabel: 'Unités',
    metricUnit: 'Métrique',
    imperialUnit: 'Impérial',
    weightLabel: 'Poids de l\'Aliment',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: 'Température de Surface',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: 'Lent: {min} - {max}',
    tempOpt: 'Optimal: {min} - {max}',
    tempHigh: 'Pyrolyse: >{min}',
    sodaLabel: 'Bicarbonate',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: 'Moitié du maximum sécuritaire, léger coup de pouce au brunissement',
    sodaCautionNote: 'Proche du maximum, surveillez le goût de près',
    sodaDangerNote: 'Dépasse le maximum sécuritaire, risque de goût savonneux',
    sodaRecommended: 'Bicarbonate Recommandé',
    sodaMax: 'Maximum Sécuritaire',
    speedLabel: 'Vitesse de Réaction',
    browningLabel: 'Progression du Brunissement',
    rawLabel: 'Cru',
    goldenLabel: 'Doré',
    burntLabel: 'Brûlé',
    phEstimated: 'pH de Surface Est.',
    timeSaved: 'Temps Économisé',
    errorTempTooLow: 'La température est inférieure à 110 °C. La réaction de Maillard nécessite au moins 110 °C pour démarrer. En dessous de ce seuil, seule l\'évaporation de l\'eau se produit, sans brunissement significatif.',
    errorWeightTooLow: 'Le poids de l\'aliment doit être supérieur à 0 g.',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">à <strong>{temp}</strong><small>{tunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> de bicarbonate</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> vitesse</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% économisé</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Optimiseur de la Réaction de Maillard: Maîtrisez la Science du Brunissement',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La réaction de Maillard est le Saint Graal de la cuisine salée. Elle crée les arômes profonds et complexes d\'une viande saisie, de la croûte dorée du pain et des oignons caramélisés. Nommée d\'après le chimiste français Louis-Camille Maillard, cette réaction entre les acides aminés et les sucres réducteurs produit des centaines de composés aromatiques. En manipulant le pH avec du bicarbonate de soude, vous pouvez <strong>doubler ou tripler</strong> la vitesse de brunissement sans brûler. Ce calculateur vous montre exactement combien utiliser et vous avertit avant de franchir le territoire savonneux.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140 °C', label: 'Température d\'activation de Maillard', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'Augmentation de vitesse à pH 8', icon: 'mdi:speedometer' },
        { value: '1,5 g/kg', label: 'Bicarbonate max. sécuritaire', icon: 'mdi:scale' },
        { value: 'pH 8,5', label: 'Seuil de goût savonneux', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: 'Tableau de Dosage du Bicarbonate par Poids d\'Aliment',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Utilisez ce tableau de référence pour déterminer rapidement les quantités recommandées et maximales de bicarbonate pour les poids d\'aliments courants. La quantité recommandée est <strong>la moitié du maximum sécuritaire</strong>, offrant une accélération notable du brunissement avec un risque minimal pour le goût.',
    },
    {
      type: 'table',
      headers: ['Poids de l\'Aliment', 'Recommandé (g)', 'Max. Sécuritaire (g)', 'pH Est.', 'Gain de Vitesse'],
      rows: [
        ['250 g (1 oignon)', '0,19 g', '0,38 g', '6,5', 'x1,2'],
        ['500 g (2 oignons)', '0,38 g', '0,75 g', '6,5', 'x1,2'],
        ['750 g (3 oignons)', '0,56 g', '1,13 g', '6,5', 'x1,2'],
        ['1000 g (1 kg)', '0,75 g', '1,50 g', '7,0', 'x1,6'],
        ['1500 g', '1,13 g', '2,25 g', '7,0', 'x1,6'],
        ['2000 g', '1,50 g', '3,00 g', '7,0', 'x2,0'],
        ['3000 g', '2,25 g', '4,50 g', '7,0', 'x2,0'],
        ['5000 g', '3,75 g', '7,50 g', '7,0', 'x2,0'],
      ],
    },
    {
      type: 'title',
      text: 'Comprendre le pH de Surface et son Effet sur le Brunissement',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'pH Neutre (6,0)',
          icon: 'mdi:water',
          description: 'Le pH naturel de la plupart des viandes et légumes crus. La réaction de Maillard progresse à la vitesse de base.',
          highlight: false,
          points: ['Vitesse de réaction: x1,0 (référence)', '100% naturel, sans additifs', 'Idéal pour: puristes, méthodes traditionnelles', 'Brunissement plus lent, plus de temps pour contrôler la cuisson'],
        },
        {
          title: 'Légèrement Alcalin (pH 7,0 à 7,5)',
          icon: 'mdi:flask-round-bottom',
          description: 'Obtenu avec la quantité recommandée de bicarbonate. Augmentation notable de la vitesse sans impact sur le goût.',
          highlight: true,
          points: ['Vitesse de réaction: x1,5-2,0', '½ c. à café par kg (environ 0,75 g)', 'Idéal pour: oignons caramélisés, légumes rôtis', 'Le point idéal pour la plupart des cuisiniers amateurs'],
        },
        {
          title: 'Fortement Alcalin (pH 8,0 à 8,5)',
          icon: 'mdi:alert',
          description: 'Alcalinité pratique maximale avant l\'apparition de défauts de goût. Double la vitesse de brunissement mais nécessite une surveillance attentive.',
          highlight: false,
          points: ['Vitesse de réaction: x2,0-3,0', '1 c. à café par kg (environ 1,5 g)', 'Idéal pour: croûtes foncées de bretzel, caramélisation extrême', 'Goûtez avant de servir  -  à la limite du savonneux'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Zones de Température et Leur Signification pour le Brunissement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La température est l\'autre variable critique de la réaction de Maillard. Chaque zone produit des résultats fondamentalement différents. Comprendre ces seuils vous aide à choisir le bon niveau de chaleur pour votre objectif culinaire.',
    },
    {
      type: 'table',
      headers: ['Zone', 'Plage de Temp.', 'Ce qui se Passe', 'Idéal Pour'],
      rows: [
        ['Évaporation', 'Inférieure à 110 °C', 'L\'eau s\'évapore, aucun brunissement', 'Sous vide, pochage, cuisson vapeur'],
        ['Brunissement Lent', '110-139 °C', 'Maillard démarre lentement, développement de couleur doux', 'Tomates rôties lentement, déshydratation à basse température'],
        ['Zone Optimale', '140-180 °C', 'Vitesse de brunissement maximale sans brûler', 'Saisir, rôtir, frire, cuire au four'],
        ['Pyrolyse', 'Supérieure à 180 °C', 'La combustion commence, formation de composés amers et âcres', 'Carbonisation rapide comme accent aromatique (à utiliser avec parcimonie)'],
      ],
    },
    {
      type: 'title',
      text: 'Erreurs Fréquentes avec la Réaction de Maillard et Comment les Corriger',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ajouter trop de bicarbonate',
      html: 'Plus n\'est pas mieux avec le bicarbonate. Dépasser 1,5 g par kilogramme d\'aliment introduit un arrière-goût métallique, savonneux ou chimique. Les composés aromatiques produits par une alcalinité excessive ne sont pas les mêmes que les notes riches et savoureuses d\'un brunissement de Maillard bien mené. <strong>Tenez-vous-en à la quantité recommandée indiquée par le calculateur.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Cuire à une température trop basse',
      html: 'En dessous de 110 °C, vous êtes essentiellement en train de cuire à la vapeur ou de déshydrater votre aliment  -  pas de le faire brunir. La réaction de Maillard a une température d\'activation minimale. Si vous voulez des arômes profonds et complexes, <strong>la surface de l\'aliment doit atteindre au moins 140 °C.</strong> Utilisez une méthode de cuisson à haute température comme saisir, griller ou rôtir à plus de 180 °C au four.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ignorer l\'humidité',
      html: 'L\'eau est l\'ennemie de la réaction de Maillard. Les surfaces humides ne peuvent pas dépasser 100 °C tant que l\'eau ne s\'est pas évaporée. <strong>Séchez toujours complètement l\'aliment</strong> avec du papier absorbant avant de le saisir. Le bicarbonate aide car il accélère également l\'évaporation de l\'eau de surface en dégradant les parois cellulaires, mais il ne peut pas compenser un aliment visiblement mouillé. Surfaces sèches = meilleur brunissement.',
    },
    {
      type: 'title',
      text: 'Astuces de Pro pour un Brunissement Parfait',
      level: 3,
    },
    {
      type: 'tip',
      title: 'La Technique de la Pâte de Bicarbonate',
      html: 'Ne saupoudrez jamais le bicarbonate sec directement sur l\'aliment  -  il ne se répartira pas uniformément. Dissolvez la quantité mesurée dans 1 à 2 cuillères à soupe d\'eau tiède, puis badigeonnez ou mélangez la pâte avec l\'aliment. Cela garantit une alcalinité uniforme sur toute la surface pour un brunissement homogène et régulier.',
    },
    {
      type: 'tip',
      title: 'Associez Bicarbonate et Salage à Sec',
      html: 'Le bicarbonate et le sel fonctionnent en synergie. Salez à sec votre viande 1 à 24 heures avant la cuisson, puis appliquez la pâte de bicarbonate juste avant qu\'elle n\'aille au feu. Le sel fait ressortir les protéines qui participent à la réaction de Maillard, tandis que le bicarbonate l\'accélère. Cette combinaison produit la croûte la plus profonde et la plus riche.',
    },
    {
      type: 'tip',
      title: 'Astuce Caramélisation d\'Oignons',
      html: 'Une pincée de bicarbonate (0,3 g par gros oignon) peut réduire le temps de caramélisation de 45 minutes à 20 minutes. Le milieu alcalin dégrade plus rapidement les parois cellulaires de l\'oignon, libérant des sucres et des acides aminés qui alimentent la réaction de Maillard. Mais soyez précis  -  trop de bicarbonate transforme les oignons en purée avec un arrière-goût chimique.',
    },
    {
      type: 'title',
      text: 'Glossaire des Termes Clés du Brunissement',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Réaction de Maillard', definition: 'Une réaction chimique non enzymatique entre les acides aminés et les sucres réducteurs qui crée la couleur brune et les arômes complexes des aliments cuits. Elle se produit au-dessus de 110 °C et se distingue de la caramélisation.' },
        { term: 'Pyrolyse', definition: 'La décomposition thermique de la matière organique à haute température (au-dessus de 180 °C). Contrairement au brunissement de Maillard, la pyrolyse produit des composés amers, âcres et parfois cancérigènes. C\'est ce qui se passe quand les aliments brûlent.' },
        { term: 'pH', definition: 'Une échelle de 0 à 14 mesurant l\'acidité (faible) ou l\'alcalinité (élevée). Le neutre est 7. La plupart des aliments crus se situent entre pH 5,5 et 6,5. Le bicarbonate élève le pH à des niveaux alcalins, accélérant la réaction de Maillard.' },
        { term: 'Bicarbonate de Sodium', definition: 'Bicarbonate de soude  -  une poudre cristalline blanche (NaHCO₃) qui agit comme une base douce. En cuisine, il élève le pH de surface, accélère le brunissement, attendrit la viande et aide les légumes à conserver leur couleur pendant la cuisson.' },
        { term: 'Alcalinité', definition: 'La capacité d\'une solution à neutraliser les acides. Dans le contexte de l\'accélération de Maillard, l\'alcalinité fait référence aux valeurs de pH supérieures à 7,0. Une alcalinité excessive produit des goûts amers et savonneux désagréables.' },
        { term: 'Multiplicateur de Vitesse de Réaction', definition: 'Combien de fois plus vite la réaction de Maillard progresse par rapport à la référence (pH 6). Un multiplicateur de x2,0 signifie que le brunissement se produit deux fois plus vite, réduisant de moitié le temps de cuisson nécessaire pour le même développement de couleur.' },
        { term: 'pH de Surface', definition: 'Le pH à la surface même de l\'aliment où se produit la réaction de Maillard, et non le pH interne. Le bicarbonate affecte principalement le pH de surface car il ne pénètre pas profondément dans l\'aliment pendant les cuissons courtes.' },
      ],
    },
    {
      type: 'title',
      text: 'Référence Rapide: Bicarbonate pour les Aliments Courants',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Quantités recommandées de bicarbonate pour la cuisine quotidienne',
      items: [
        'Oignons caramélisés (1 gros): 0,3 g de bicarbonate  -  réduit le temps de 45 à ~20 minutes',
        'Pommes de terre rôties (500 g): 0,4 g de bicarbonate  -  extérieur plus croustillant et doré',
        'Steak poêlé (250 g): 0,2 g de bicarbonate  -  croûte plus foncée en moins de temps',
        'Ailes de poulet (1 kg): 0,75 g de bicarbonate  -  peau plus croustillante, brunissement plus rapide',
        'Pâte à bretzel (500 g de farine): 1,5 g de bicarbonate  -  croûte brun foncé après trempage alcalin',
        'Légumes rôtis (1 kg mélangé): 0,75 g de bicarbonate  -  caramélisation plus uniforme',
      ],
    },
    {
      type: 'paragraph',
      html: 'Chaque aliment a un niveau d\'alcalinité idéal différent selon son pH naturel et sa teneur en eau. Ce calculateur élimine les conjectures  -  saisissez le poids exact de votre aliment et la température, et il vous donnera la quantité précise de bicarbonate pour un brunissement parfait à chaque fois.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
