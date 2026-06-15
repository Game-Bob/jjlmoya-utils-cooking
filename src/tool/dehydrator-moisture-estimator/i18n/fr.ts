import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Estimateur d'Humidité du Déshydrateur";
const description = "Calculez la perte de poids, l'évaporation de l'eau et le temps de séchage de vos aliments.";

const faq = [
  {
    question: "Comment est calculée la perte de poids lors de la déshydratation ?",
    answer: "La perte de poids est calculée en séparant la matière sèche de l'eau. La masse sèche restant constante, le poids final est calculé par la matière sèche divisée par 1 moins le pourcentage d'humidité ciblé."
  }
];

const howTo = [
  {
    name: "Sélectionnez un ingrédient ou une humidité personnalisée",
    text: "Choisissez un préréglage ou configurez manuellement."
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
  slug: 'estimateur-humidite-deshydrateur',
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  ui: {
    title: "Estimateur d'Humidité",
    subtitle: 'Calculez le rétrécissement du poids et le temps de séchage estimé',
    unitSystemLabel: "Système d'Unités",
    metricOption: 'Métrique (g, °C)',
    imperialOption: 'Impérial (oz, °F)',
    ingredientLabel: 'Ingrédient',
    initialMoistureLabel: 'Humidité Initiale (%)',
    targetMoistureLabel: 'Humidité Cible (%)',
    weightLabel: 'Poids Initial',
    tempLabel: 'Température de Séchage',
    customOption: 'Personnalisé',
    beefOption: 'Bœuf Séché',
    watermelonOption: 'Pastèque Déshydratée',
    appleOption: 'Pommes Séchées',
    mangoOption: 'Mangue Déshydratée',
    mushroomOption: 'Champignons',
    targetWeightLabel: 'Poids Final',
    waterEvaporatedLabel: 'Eau Évaporée',
    estimatedHoursLabel: 'Temps de Séchage Estimé',
    shrinkageLabel: 'Rétrécissement de Poids'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Combien de poids vos aliments perdront-ils dans le déshydrateur ? Calculez le temps de séchage et l\'humidité',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Que vous prépariez du <strong>bœuf séché (jerky)</strong>, du <strong>cuir de fruit</strong>, des <strong>rondelles de pomme séchées</strong> ou de la <strong>pastèque déshydratée</strong>, la clé pour obtenir des résultats constants est de comprendre la teneur en humidité. La sécurité alimentaire et la conservation dépendent de l\'obtention du taux d\'humidité cible correct. Notre <strong>estimateur d\'humidité du déshydrateur</strong> prédit le poids final, l\'évaporation de l\'eau et le temps de séchage en fonction de votre ingrédient et de vos réglages spécifiques.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Humidité du Bœuf', icon: 'mdi:food' },
        { value: '92%', label: 'Humidité de la Pastèque', icon: 'mdi:water' },
        { value: '10%', label: 'Cible pour le Jerky', icon: 'mdi:shield' },
        { value: '55°C', label: 'Temp. Moyenne de Séchage', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: 'Quel est le bon taux d\'humidité pour les aliments déshydratés ?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Ingrédient', 'Humidité Initiale', 'Humidité Cible', 'Temps Typique', 'Indice de Cuisson'],
      rows: [
        ['Bœuf Séché', '70%', '10-15%', '4-8 h', 'Ferme et se plie sans casser'],
        ['Pommes Séchées', '86%', '15-20%', '6-10 h', 'Souple et aspect cuir, pas de zones collantes'],
        ['Mangue Déshydratée', '84%', '15-18%', '6-10 h', 'Moelleuse sans humidité visible'],
        ['Champignons', '92%', '5-8%', '4-8 h', 'Cassants et croustillants'],
        ['Pastèque Déshydratée', '92%', '10-12%', '10-16 h', 'Casse net lorsqu\'elle est pliée']
      ]
    },
    {
      type: 'title',
      text: 'Problèmes de déshydratation courants et comment les résoudre',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Endurcissement superficiel (Case hardening) :</strong> La couche externe sèche trop vite, emprisonnant l\'humidité à l\'intérieur. Réduisez la température de 5 à 10 °C et augmentez la circulation de l\'air.',
        '<strong>Moisissure pendant le stockage :</strong> Les aliments n\'ont pas été séchés à un taux d\'humidité suffisamment bas. Utilisez le calculateur pour trouver votre poids cible et vérifiez avec un test d\'humidité.',
        '<strong>Séchage irrégulier :</strong> Les morceaux ont été coupés à des épaisseurs différentes ou le déshydrateur était surchargé. Coupez des morceaux uniformes et laissez de l\'espace entre eux.',
        '<strong>Aliments trop secs et cassants :</strong> Une sur-déshydratation entraîne une perte de saveur et de texture. Vérifiez les taux d\'humidité cibles pour votre ingrédient spécifique.'
      ]
    },
    {
      type: 'title',
      text: 'Guide des températures de séchage par type d\'aliment',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'La température affecte à la fois la vitesse de séchage et la qualité des aliments. Des températures plus élevées évaporent l\'eau plus rapidement mais peuvent provoquer un endurcissement superficiel, une perte de nutriments et des résultats irréguliers. Utilisez ces directives générales pour régler votre déshydrateur :'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Basse température 40 à 50 °C',
          icon: 'mdi:thermometer',
          description: 'Idéal pour préserver les enzymes, les nutriments et les saveurs délicates.',
          points: ['Herbes et légumes-feuilles', 'Champignons', 'Conservation des aliments crus', 'Temps de séchage plus long requis']
        },
        {
          title: 'Température moyenne 50 à 60 °C',
          icon: 'mdi:thermometer',
          description: 'Plage standard pour la plupart des fruits et légumes.',
          highlight: true,
          points: ['Rondelles de pomme et mangue', 'La plupart des légumes', 'Cuirs de fruits', 'Équilibre entre vitesse et qualité']
        },
        {
          title: 'Haute température 60 à 70 °C',
          icon: 'mdi:thermometer',
          description: 'Utilisé pour le bœuf séché et les aliments denses nécessitant une sécurité alimentaire accrue.',
          points: ['Bœuf et dinde séchés', 'Légumes-racines denses', 'Priorité à la sécurité alimentaire', 'Fenêtre de séchage plus courte']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Prétraitez toujours les fruits',
      html: 'Trempez les pommes, les bananes et les poires dans du jus de citron ou une solution d\'acide ascorbique avant de les déshydrater pour éviter le brunissement et préserver la couleur.'
    },
    {
      type: 'tip',
      title: 'Faites pivoter les plateaux pendant le séchage',
      html: 'Les déshydrateurs ont souvent des zones plus chaudes. Faites pivoter les plateaux du haut vers le bas et de l\'avant vers l\'arrière toutes les 2-3 heures pour un séchage uniforme.'
    },
    {
      type: 'tip',
      title: 'Conditionnez avant de stocker',
      html: 'Après déshydratation, laissez refroidir les aliments et conditionnez-les dans un récipient hermétique pendant 1 semaine. Secouez quotidiennement. Si de la condensation apparaît, séchez-les davantage.'
    },
    {
      type: 'title',
      text: 'Glossaire de l\'humidité du déshydrateur',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Endurcissement superficiel', definition: 'Un état dans lequel la surface externe des aliments sèche trop rapidement, formant une coque dure qui emprisonne l\'humidité à l\'intérieur et empêche une déshydratation adéquate.' },
        { term: 'Activité de l\'eau (aw)', definition: 'Une mesure de l\'eau libre disponible pour la croissance microbienne. Les aliments déshydratés de longue conservation ont généralement une activité de l\'eau inférieure à 0,60.' },
        { term: 'Teneur en humidité', definition: 'Le pourcentage du poids de l\'eau par rapport au poids total des aliments. Utilisé pour déterminer la progression de la déshydratation et les taux cibles pour la sécurité alimentaire.' },
        { term: 'Rapport de rétrécissement', definition: 'La proportion du poids d\'origine restant après la déshydratation. Une mesure clé pour planifier la taille des lots et le stockage.' }
      ]
    },
    {
      type: 'summary',
      title: 'Points clés pour une déshydratation parfaite',
      items: [
        'Différents ingrédients ont des taux d\'humidité initiaux très différents (70-92 %). Utilisez les préréglages pour des estimations précises.',
        'L\'humidité cible varie selon l\'aliment: 10 % pour le jerky, 15-20 % pour les fruits, 5-8 % pour les légumes et champignons.',
        'La température de séchage affecte à la fois la vitesse et la qualité. Restez dans la plage de 50-60 °C pour la plupart des aliments.',
        'L\'endurcissement superficiel gâche la texture. Évitez les températures supérieures à 70 °C et assurez une bonne circulation de l\'air.',
        'Conditionnez toujours les aliments déshydratés pendant 1 semaine avant le stockage à long terme pour assurer une répartition uniforme de l\'humidité.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
