import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur de Rendement et Coût de Maturation de Viande";
const description = "Calculez la perte de poids de la viande, le gaspillage dû au parage de la pellicule et le coût réel par kilogramme lors de la maturation à sec à domicile ou en chambre.";
const faq = [
  {
    question: "Combien de poids la viande perd-elle pendant la maturation?",
    answer: "Pendant un processus standard de maturation à sec de 30 à 45 jours, la viande perd environ 15% à 25% de son poids par évaporation d'humidité. De plus, environ 15% du poids initial est perdu lors du parage de la croûte externe sèche (pellicule) avant la cuisson."
  },
  {
    question: "Quelle est l'humidité optimale pour la maturation?",
    answer: "L'humidité relative idéale pour la maturation à sec de la viande se situe entre 75% et 85%. Si l'humidité est trop basse (sous 75%), la surface sèche trop rapidement et forme une barrière dure. Si elle est trop élevée (au-dessus de 85%), le risque de moisissure augmente."
  },
  {
    question: "Pourquoi le prix par kilogramme augmente-t-il autant?",
    answer: "Comme vous perdez du poids par évaporation et parage, le poids final utile est inférieur au poids de départ. Le coût total reste le même, ce qui signifie que le coût par kilogramme utile augmente proportionnellement au poids total perdu."
  }
];

const howTo = [
  {
    name: "Saisir le poids initial",
    text: "Entrez le poids de départ de la coupe de viande avant la maturation à sec."
  },
  {
    name: "Définir les jours de maturation",
    text: "Sélectionnez la durée totale de la maturation, généralement entre 1 et 60 jours."
  },
  {
    name: "Ajuster l'humidité relative",
    text: "Réglez l'humidité de votre chambre (l'idéal est de 75% à 85%) pour déterminer le taux de perte d'eau."
  },
  {
    name: "Saisir le prix initial",
    text: "Indiquez le coût par kilogramme de la viande brute pour le comparer au coût final du rendement utile."
  }
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
  slug: 'estimateur-maturation-viande',
  title,
  description,
  faqTitle: 'Foire Aux Questions',
  ui: {
    title: 'Estimateur de Maturation de Viande',
    subtitle: 'Simulez la perte de poids et calculez le coût du rendement final',
    startWeightLabel: 'Poids de Départ',
    daysLabel: 'Durée de Maturation',
    pricePerKgLabel: 'Prix Initial',
    humidityLabel: 'Humidité Relative',
    finalWeightLabel: 'Poids Utile Final',
    yieldLabel: 'Rendement Utile Total',
    originalCostLabel: 'Coût Total Initial',
    finalCostPerKgLabel: 'Prix Utile Final',
    moistureLossLabel: "Perte par Évaporation d'Humidité",
    trimmingLossLabel: 'Déchets de Parage de Pellicule',
    warningLowHumidity: 'Avertissement: L\'humidité est inférieure à 75%. La surface peut sécher trop rapidement, entraînant un durcissement de surface.',
    warningHighHumidity: 'Avertissement: L\'humidité est supérieure à 85%. Risque élevé de détérioration bactérienne ou de moisissures indésirables.',
    timelineTitle: 'Chronologie de l\'Évolution de la Maturation',
    timelineInfoText: 'Cliquez sur la chronologie pour prévisualiser les changements physiques de la pièce de viande'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Science et Économie de la Maturation à Sec de la Viande',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La maturation à sec est un art culinaire qui combine la microbiologie, la biochimie et la physique pour transformer des coupes de bœuf standard en délicatesses tendres et concentrées en saveurs.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Humidité Idéale',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Temp. Optimale',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Perte de Parage',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 j',
          label: 'Durée Standard',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Comprendre la Dynamique de Perte de Poids et la Courbe Asymptotique',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La perte de poids pendant la maturation à sec est asymptotique. Au cours des 14 premiers jours, l\'eau s\'évapore rapidement des couches externes. Une croûte dure et sombre (la pellicule) se forme et ralentit l\'évaporation ultérieure après 2 à 3 semaines.'
    },
    {
      type: 'list',
      items: [
        '<strong>Jours 1-14:</strong> Évaporation rapide. La viande perd 10% à 12% de son poids (principalement de l\'eau). Les fibres musculaires se rétrécissent et les arômes se concentrent.',
        '<strong>Jours 15-30:</strong> L\'évaporation ralentit grâce à la formation de la pellicule. Les enzymes (calpaïnes et cathepsines) décomposent le collagène et rendent la viande plus tendre.',
        '<strong>Jours 30-45:</strong> Perte d\'eau supplémentaire minimale. Développement de notes profondes de noisette et de fromage bleu par oxydation des graisses.',
        '<strong>Perte de parage:</strong> À la fin de la maturation, la croûte doit être retirée, ce qui représente environ 15% de perte.'
      ]
    },
    {
      type: 'title',
      text: 'Contrôles Environnementaux dans la Chambre de Maturation',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Une qualité d\'air, une température et une humidité constantes sont essentielles. Tout écart peut altérer la viande.'
    },
    {
      type: 'list',
      items: [
        '<strong>Température:</strong> Doit rester entre 1°C et 3°C. En dessous de 0°C, les enzymes gèlent ; au-dessus de 4°C, des bactéries pathogènes se développent.',
        '<strong>Humidité Relative:</strong> L\'intervalle idéal est de 75% à 85%. En dessous de 70%, un croûtage prématuré se produit ; au-dessus de 85%, des moisissures indésirables apparaissent.',
        '<strong>Flux d\'air:</strong> Une circulation d\'air continue est nécessaire pour sécher la surface de façon homogène.'
      ]
    },
    {
      type: 'title',
      text: 'Implications Financières et Calculs de Coût',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'En raison de l\'évaporation et du parage, la portion consommable est plus petite, ce qui augmente le prix effectif au kilo.'
    },
    {
      type: 'table',
      headers: ['Durée de Maturation', 'Ø Perte d\'Évaporation', 'Ø Déchets de Parage', 'Rendement Total', 'Multiplicateur de Coût'],
      rows: [
        ['14 Jours', '10.5%', '15.0%', '74.5%', '1.34x'],
        ['21 Jours', '13.5%', '15.0%', '71.5%', '1.40x'],
        ['30 Jours', '17.5%', '15.0%', '67.5%', '1.48x'],
        ['45 Jours', '21.0%', '15.0%', '64.0%', '1.56x'],
        ['60 Jours', '24.0%', '15.0%', '61.0%', '1.64x']
      ]
    },
    {
      type: 'title',
      text: 'Directives de Sécurité: Microbiologie et Identification des Moisissures',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Une maturation sûre repose sur le développement d\'une microflore bénéfique (champignons du genre <em>Thamnidium</em>, <em>Mucor</em>, <em>Rhizopus</em>). Une hygiène stricte est indispensable.'
    },
    {
      type: 'list',
      items: [
        '<strong>Bons Indicateurs:</strong> Une croûte sèche, ferme, violet foncé ou brune. Un fin duvet blanc (semblable à la croûte de fromage) est normal.',
        '<strong>Mauvais Indicateurs:</strong> Surfaces poisseuses, gluantes ou humides. Moisissures vertes, noires ou jaunâtres. Odeur d\'ammoniac ou de putréfaction.',
        '<strong>Propreté:</strong> Stérilisez toujours la chambre et les crochets avant d\'installer une nouvelle pièce de viande.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
