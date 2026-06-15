import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur d'Inoculation et d'Hydratation du Koji";
const description = "Calculez la teneur en humidite parfaite, la dose d'inoculation de spores et la temperature d'incubation pour fabriquer du koji a la maison. Evitez les lots echoues avec notre calculateur gratuit d'inoculation et d'hydratation du koji.";
const faq = [
  {
    question: "Quel est le taux d'humidite cible pour la cuisson du substrat de koji?",
    answer: "La teneur en humidite totale ideale pour le riz ou l'orge cuit a la vapeur lors de l'inoculation du Koji se situe entre 30% et 35%. Cela correspond a un poids vapeur d'environ 1,35x a 1,40x le poids sec initial."
  },
  {
    question: "Combien de poudre de spores (tane-koji) ai-je besoin?",
    answer: "Le taux d'inoculation standard est de 1 gramme de melange de spores standard par 1 kilogramme de substrat sec. Si vous utilisez des spores concentrees, vous avez besoin de moins (0,5 g), tandis que les melanges dilues necessitent plus (2,0 g)."
  },
  {
    question: "Pourquoi le controle de la temperature est-il critique pendant l'incubation du koji?",
    answer: "Aspergillus oryzae se developpe de maniere optimale entre 28C et 34C. Si la temperature depasse 38C, la moisissure peut surchauffer, cesser de croitre ou produire des spores vertes/noires indesirables. En dessous de 20C, la croissance ralentit considerablement."
  },
  {
    question: "Que se passe-t-il pendant la phase exothermique?",
    answer: "Apres 18 a 24 heures d'incubation, le koji commence a croitre rapidement et genere sa propre chaleur. Pendant ce pic exothermique, vous devez remuer le substrat et reduire la chaleur de l'incubateur pour eviter la surchauffe."
  }
];

const howTo = [
  {
    name: "Saisissez le poids sec du substrat",
    text: "Entrez le poids sec initial de votre riz ou de votre orge pour etablir les seuils d'hydratation cibles."
  },
  {
    name: "Suivez le poids vapeur",
    text: "Entrez le poids vapeur reel apres la cuisson. Le calculateur determine le pourcentage d'humidite et verifie s'il se situe dans la plage ideale de 30-35%."
  },
  {
    name: "Calculez le dosage de spores",
    text: "Selectionnez la puissance de vos spores (standard, concentree ou diluee) pour obtenir le poids exact de poudre de spores a inoculer."
  },
  {
    name: "Surveillez les parametres d'incubation",
    text: "Ajustez la temperature et l'humidite relative pour simuler la croissance du mycelium et examinez la courbe thermique sur 48 heures."
  }
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org',
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
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication' as const,
  operatingSystem: 'Web' as const,
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'calculateur-inoculation-koji',
  title: "Calculateur d'Inoculation et d'Hydratation du Koji",
  description: "Calculez la teneur en humidite parfaite, la dose d'inoculation de spores et la temperature d'incubation pour fabriquer du koji a la maison. Evitez les lots echoues avec notre calculateur gratuit d'inoculation et d'hydratation du koji.",
  faqTitle: 'Foire Aux Questions',
  ui: {
    title: "Analyseur d'Inoculation du Koji",
    subtitle: 'Optimisez les parametres de fermentation solide du koji',
    dryWeightLabel: 'Poids Sec du Substrat',
    steamedWeightLabel: 'Poids Vapeur Reel',
    targetRangeLabel: 'Plage de Poids Vapeur Cible',
    moistureLabel: 'Humidite Actuelle',
    potencyLabel: 'Puissance des Spores',
    standardPotency: 'Spores Standard',
    concentratedPotency: 'Concentre',
    dilutedPotency: 'Melange Dilue',
    sporeDosageLabel: 'Dosage de Spores',
    tempLabel: "Temperature de l'Incubateur",
    humidityLabel: 'Humidite Relative',
    statusIdeal: 'Incubation Ideale',
    statusSlow: 'Croissance Lente',
    statusInhibited: 'Inhibe / Froid',
    statusOverheating: 'Surchauffe / Sporulation',
    timelineTitle: 'Cycle Thermique d\'Incubation 48h',
    stage1Name: '0-18h: Echauffement',
    stage2Name: '18-36h: Pic Exothermique',
    stage3Name: '36-48h: Maturation'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Comment Faire du Koji: L\'Humidite, le Dosage de Spores et la Temperature Parfaits pour Aspergillus Oryzae',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Fabriquer du koji a la maison necessite trois choses qui doivent fonctionner correctement: <strong>l\'hydratation du substrat</strong>, <strong>la densite d\'inoculation des spores</strong> et <strong>le controle de la temperature d\'incubation</strong>. Si l\'un de ces elements echoue, votre lot peut surchauffer, ne pas s\'inoculer ou developper la mauvaise moisissure. Notre <strong>calculateur d\'inoculation du koji</strong> elimine les incertitudes en calculant votre poids vapeur cible, le dosage exact de spores et le statut d\'incubation en temps reel en fonction de vos donnees.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: 'Humidite Cible',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: 'Taux Standard de Spores',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34C',
          label: 'Temperature Ideale',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: 'Incubation Totale',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Pourquoi la Teneur en Humidite Determine la Qualite du Koji',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Le facteur le plus important dans la culture reussie du koji est <strong>l\'humidite du substrat</strong>. Lorsque le riz ou l\'orge est cuit a la vapeur, les granules d\'amidon gelifient et absorbent l\'eau, devenant accessibles aux enzymes produites par Aspergillus oryzae. La plage d\'humidite ideale est etroite: <strong>30% a 35%</strong>. En dessous de 30%, le mycelium ne peut pas puiser assez d\'eau pour croitre et la production d\'enzymes s\'arrete. Au-dessus de 35%, les grains deviennent collants et s\'agglutinent, reduisant la porosite de l\'air et etouffant la moisissure aerobie.'
    },
    {
      type: 'list',
      items: [
        '<strong>Trop sec (moins de 30%):</strong> La croissance du mycelium est retardee, la production d\'enzymes chute et le koji ne colonise jamais completement le grain.',
        '<strong>Trop humide (plus de 35%):</strong> Les grains collent ensemble, les poches d\'air s\'effondrent et les bacteries ou moisissures indesirables peuvent surpasser Aspergillus oryzae.',
        '<strong>Plage cible (30-35%):</strong> Le grain est ferme, les grains individuels se separent facilement et le mycelium se propage uniformement en 48 heures.',
        '<strong>Comment mesurer:</strong> Pesez votre grain sec, faites-le cuire a la vapeur, puis pesez-le a nouveau. Le calculateur calcule votre pourcentage d\'humidite exact a partir de ces deux nombres.'
      ]
    },
    {
      type: 'table',
      headers: ['Type de Grain', 'Poids Sec', 'Poids Vapeur Cible', 'Temps de Trempage', 'Temps de Vapeur'],
      rows: [
        ['Riz Blanc (grain court)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Riz Blanc (grain long)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Orge Perlee', '1000 g', '1350-1400 g', '4-8 h', '40-50 min'],
        ['Riz Complet', '1000 g', '1350-1400 g', '8-12 h', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: 'Inoculation de Spores: Combien de Tane-Koji Avez-Vous Besoin?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La densite d\'inoculation affecte directement la rapidite avec laquelle la moisissure colonise le substrat et sa capacite a concurrencer les contaminants. Le taux standard est de <strong>1 gramme de melange de spores par kilogramme de substrat sec</strong>, mais cela varie selon le type de spores.'
    },
    {
      type: 'proscons',
      title: 'Choisir Votre Type de Spores',
      items: [
        {
          pro: 'Les spores standard sont le format le plus courant, tolerantes pour les debutants et bien documentees dans la litterature de brassage amateur.',
          con: 'Volume de poudre plus eleve par lot et peuvent contenir de la charge qui ne contribue pas a l\'inoculation.'
        },
        {
          pro: 'Les spores concentrees utilisent moitie moins de poudre pour la meme inoculation, ont une purete plus elevee et sont plus economiques pour les gros lots.',
          con: 'Plus faciles a surdoser, necessitent une balance precise (resolution 0,01 g) et laissent moins de marge d\'erreur en cas de sous-dosage.'
        },
        {
          pro: 'Les melanges dilues se repartissent facilement sur de grandes surfaces, sont plus tolerants au melange irregulier et conviennent aux debutants qui preferent une couverture visible.',
          con: 'Utilisent plus de poudre par lot et peuvent introduire un exces d\'amidon provenant de la charge.'
        }
      ]
    },
    {
      type: 'title',
      text: 'La Courbe de Chaleur Exothermique: Pourquoi le Koji Genere Sa Propre Chaleur',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Lorsque Aspergillus oryzae consomme les amidons et les transforme en sucres simples, il genere de la chaleur metabolique. Entre les heures <strong>18 et 36</strong> d\'incubation, l\'activite biologique atteint son apogee, produisant une poussee exothermique qui peut elever la temperature du lit de grain de 5-10C au-dessus de la temperature ambiante de l\'incubateur.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Signes Que Votre Koji Surchauffe',
      html: 'Si la temperature du lit de grain depasse <strong>38C</strong>, les enzymes de la moisissure commencent a se denaturer et le champignon passe en mode reproductif, produisant des <strong>spores vertes ou noires</strong>. Le lot sentira l\'ammoniac au lieu d\'etre doux et chataigne. Vous devez remuer le substrat immediatement et reduire la temperature de l\'incubateur pour la ramener en dessous de 34C.'
    },
    {
      type: 'tip',
      title: 'Le Programme de Retournement de 12 Heures',
      html: 'A partir de l\'heure 18, brisez le lit de grain et remuez-le toutes les 12 heures. Cela libere la chaleur piegee, redistribue l\'humidite et donne au mycelium acces a de l\'oxygene frais. Utilisez des mains propres et desinfectees ou une cuillere sterile.'
    },
    {
      type: 'tip',
      title: 'L\'Humidite Aussi est Importante',
      html: 'Maintenez l\'humidite relative au-dessus de <strong>65%</strong> pendant l\'incubation. En dessous de 40%, le substrat se desseche et la croissance s\'arrete. Au-dessus de 90%, la condensation peut favoriser la croissance bacterienne a la surface du grain.'
    },
    {
      type: 'tip',
      title: 'Faites Confiance a Votre Nez',
      html: 'Le koji sain sent les chataignes rotiies douces ou les champignons frais. Si vous detectez de l\'ammoniac, de l\'acidite ou de la pourriture, le lot a peut-etre surchauffe ou ete contamine. Retirez et jetez le grain affecte immediatement.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: 'Fabrication du Sake et du Miso',
      html: 'Le riz inocule de koji est le fondement du <strong>sake</strong>, du <strong>miso</strong> et de l\'<strong>amazake</strong>. Un controle precis de l\'humidite assure le developpement enzymatique adequat pour la conversion de l\'amidon en sucre.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: 'Sauce Soja et Tamari',
      html: 'Le koji cultive sur du <strong>soja</strong> ou un melange soja-ble entraine la fermentation qui produit une sauce soja riche en umami. Une temperature constante evite les saveurs indesirables.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: 'Shio Koji et Garum',
      html: '<strong>Shio koji</strong> (koji fermentee au sel) et les <strong>garums de viande</strong> reposent sur du grain entierement colonise. Notre calculateur garantit que votre substrat se trouve dans la fenetre d\'humidite ideale avant l\'inoculation.'
    },
    {
      type: 'title',
      text: 'Glossaire de l\'Incubation du Koji',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Tane-Koji',
          definition: 'La poudre de spores utilisee pour inoculer le grain cuit a la vapeur. Generalement des spores d\'Aspergillus oryzae melangees a un support d\'amidon comme la farine de riz.'
        },
        {
          term: 'Phase Exothermique',
          definition: 'La periode entre 18 et 36 heures d\'incubation pendant laquelle Aspergillus oryzae genere suffisamment de chaleur metabolique pour elever la temperature du lit de grain au-dessus des niveaux ambiants.'
        },
        {
          term: 'Gelatinisation',
          definition: 'Le processus de chauffage de l\'amidon en presence d\'eau afin que les granules gonflent et deviennent accessibles aux enzymes amylases produites par la moisissure.'
        },
        {
          term: 'Sporulation',
          definition: 'Lorsque la moisissure passe de la croissance vegetative au mode reproductif, devenant verte ou noire. Cela est declenche par un stress thermique superieur a 38C et ruine le lot pour un usage culinaire.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Points Cles pour un Koji Parfait',
      items: [
        'Visez 30-35% d\'humidite dans le grain cuit a la vapeur. Utilisez le calculateur pour trouver votre poids vapeur cible exact.',
        'Inoculez a 1 g/kg pour les spores standard, 0,5 g/kg pour les concentrees ou 2 g/kg pour les melanges dilues.',
        'Maintenez 28-34C et plus de 65% d\'humidite pendant l\'incubation. Remuez toutes les 12 heures apres l\'heure 18.',
        'Surveillez le pic exothermique a 18-36 heures. Si la temperature depasse 38C, remuez immediatement et baissez la chaleur.',
        'Faites confiance a vos sens: arome de chataigne douce = bon koji. Odeur d\'ammoniac ou aigre = surchauffe ou contamination.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
