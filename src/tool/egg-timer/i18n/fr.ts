import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Minuteur de Précision pour Œufs et Calculateur d'Altitude";
const description = "Maîtrisez la thermodynamique de la cuisson parfaite des œufs. Calculez les temps exacts d'ébullition selon l'altitude, la taille de l'œuf et sa température initiale.";
const faq = [
  {
    question: "Pourquoi l'altitude affecte-t-elle le temps de cuisson des œufs?",
    answer:
      "À une altitude plus élevée, la pression atmosphérique est plus basse, ce qui réduit le point d'ébullition de l'eau. À 2 000 mètres, l'eau bout à environ 93°C au lieu de 100°C, ce qui signifie que l'œuf nécessite plus de temps pour atteindre la même température interne.",
  },
  {
    question: "Dois-je utiliser des œufs sortant directement du réfrigérateur?",
    answer:
      "Les œufs du réfrigérateur (environ 4°C) nécessitent environ 1.5 à 2 minutes de plus que les œufs à température ambiante. Notre calculateur s'ajuste automatiquement.",
  },
  {
    question: "Qu'est-ce qui cause le cercle vert autour du jaune?",
    answer:
      "Le cercle vert est du sulfure ferreux. Il se forme lorsque le soufre du blanc réagit avec le fer du jaune en raison d'une cuisson excessive. Pour l'éviter, plongez immédiatement l'œuf dans un bain glacé.",
  },
  {
    question: "Pourquoi certains œufs sont-ils si difficiles à écaler?",
    answer:
      "Les œufs très frais ont un pH plus bas, ce qui fait adhérer la membrane à la coquille. Utilisez des œufs vieux de 1 à 2 semaines et plongez-les dans un bain glacé après cuisson.",
  },
];
const howTo = [
  {
    name: "Définissez les conditions initiales",
    text: "Sélectionnez la température initiale de votre œuf et sa taille pour établir la base thermodynamique.",
  },
  {
    name: "Ajustez selon votre altitude",
    text: "Entrez votre altitude pour calibrer le point d'ébullition exact de l'eau à votre pression actuelle.",
  },
  {
    name: "Démarrez le minuteur de précision",
    text: "Lancez le décompte. Notre outil calcule les secondes précises nécessaires pour dénaturer les protéines de l'œuf.",
  },
  {
    name: "Appliquez le bain glacé",
    text: "Dès la fin du minuteur, plongez l'œuf dans de l'eau glacée pour stopper la cuisson et faciliter l'écalage.",
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
  slug: "minuteur-oeuf-calculateur-altitude",
  title: "Minuteur de Précision pour Œufs et Calculateur d'Altitude",
  description:
    "Maîtrisez la thermodynamique de la cuisson parfaite des œufs. Calculez les temps exacts d'ébullition selon l'altitude, la taille de l'œuf et sa température initiale.",
  ui: {
    parameters: "Paramètres de Cuisson",
    initial_temperature: "Temp. Initiale",
    fridge: "Frigo (4°C)",
    ambient: "Ambiante (20°C)",
    egg_size: "Taille de l'Œuf",
    altitude: "Votre Altitude",
    use_location: "Détecter la Position",
    altitude_help:
      "La pression atmosphérique plus basse en altitude réduit le point d'ébullition de l'eau.",
    sea_level: "0m",
    soft_cooked: "Œuf Coque",
    soft_description: "Jaune coulant, blanc juste pris.",
    mollet: "Œuf Mollet",
    mollet_description: "Jaune crémeux, blanc ferme.",
    hard_cooked: "Œuf Dur",
    hard_description: "Jaune solide, blanc entièrement pris.",
  },
  faqTitle: "Questions Fréquemment Posées",
  faq,
  howTo,
  seo: [
    {
      type: "title",
      text: "Guide Scientifique de la Cuisson des Œufs et Thermodynamique",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Cuire un œuf est un exercice classique de <strong>thermodynamique appliquée</strong>. Obtenir la texture souhaitée implique de contrôler le transfert thermique de l'eau bouillante jusqu'au cœur de l'œuf.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "62°C",
          label: "Blanc Pris",
          icon: "mdi:egg-outline",
        },
        {
          value: "68°C",
          label: "Jaune Pris",
          icon: "mdi:egg-fried",
        },
        {
          value: "-1°C",
          label: "Baisse / 300m",
          icon: "mdi:mountain",
        },
        {
          value: "0s",
          label: "Marge Précision",
          icon: "mdi:timer-check-outline",
        },
      ],
    },
    {
      type: "title",
      text: "Comparaison des Stades de Cuisson",
      level: 3,
    },
    {
      type: "comparative",
      columns: 3,
      items: [
        {
          title: "Œuf Coque",
          icon: "mdi:coffee-outline",
          description: "Blanc partiellement pris et jaune parfaitement liquide.",
          points: [
            "Texture soyeuse délicate",
            "Parfait pour les mouillettes",
            "Temps de cuisson rapide 3-5 min",
            "Écalage délicat",
          ],
        },
        {
          title: "Œuf Mollet",
          icon: "mdi:water-percent",
          description: "Blanc ferme avec un jaune crémeux.",
          highlight: true,
          points: [
            "Le standard gastronomique",
            "Texture du jaune onctueuse",
            "Blanc élastique et résistant",
            "Idéal pour salades et ramen",
          ],
        },
        {
          title: "Œuf Dur",
          icon: "mdi:circle-slice-8",
          description: "Protéines entièrement coagulées avec un jaune solide.",
          points: [
            "Centre solide et opaque",
            "Très facile à écaler et transporter",
            "Incontournable pour mimosa",
            "Nécessite un refroidissement immédiat",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Point d'Ébullition de l'Eau selon l'Altitude",
      level: 3,
    },
    {
      type: "table",
      headers: [
        "Ville / Altitude",
        "Altitude (m)",
        "Point d'Ébullition (°C)",
        "Temps Ajouté",
      ],
      rows: [
        ["Niveau de la mer", "0m", "100°C", "0s"],
        ["Denver, USA", "1600m", "94.5°C", "+55s"],
        ["Mexico City", "2240m", "92.6°C", "+75s"],
        ["La Paz, Bolivie", "3640m", "88.1°C", "+140s"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Difficile à Écaler ou Cercle Vert autour du Jaune?",
      html: "Le cercle vert est du <strong>sulfure ferreux</strong> causé par une surcuisson. Si les œufs sont durs à écaler, ils sont trop frais. Utilisez des œufs vieux d'une semaine et un bain glacé.",
    },
    {
      type: "title",
      text: "Glossaire Technique",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Ovotransferrine",
          definition:
            "Protéine du blanc d'œuf coagulant en premier à 62°C.",
        },
        {
          term: "Ovalbumine",
          definition:
            "Protéine majeure nécessitant une température plus élevée (80°C) pour se solidifier.",
        },
        {
          term: "Pression Atmosphérique",
          definition:
            "Force externe affectant la température d'ébullition.",
        },
        {
          term: "Choc Thermique",
          definition:
            "Procédé de refroidissement rapide pour stopper la cuisson résiduelle.",
        },
      ],
    },
    {
      type: "tip",
      title: "L'Astuce du Vinaigre",
      html: "Ajoutez du vinaigre dans l'eau bouillante. Si un œuf fêle, l'acide coagulera immédiatement le blanc s'échappant.",
    },
    {
      type: "paragraph",
      html: "Notre calculateur utilise l'équation de Charles Williams pour calibrer chaque seconde de cuisson.",
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
