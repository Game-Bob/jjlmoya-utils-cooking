import type { ToolLocaleContent } from "../../../types";

export const content: ToolLocaleContent = {
  slug: "minuteur-oeuf-parfait-calculatrice-altitude",
  title: "Minuteur Scientifique Précis pour Œufs et Calculatrice d'Altitude",
  description:
    "Maîtrisez la thermodynamique de l'œuf parfait. Calculez le temps d'ébullition exact en fonction de votre altitude, de la taille de l'œuf et de la température initiale.",
  ui: {
    parameters: "Paramètres de Cuisson",
    initial_temperature: "Température Initiale",
    fridge: "Frigo (4°C)",
    ambient: "Ambiante (20°C)",
    egg_size: "Taille de l'Œuf",
    altitude: "Votre Altitude",
    use_location: "Détecter la Localisation",
    altitude_help:
      "La pression atmosphérique plus basse en altitude réduit le point d'ébullition de l'eau.",
    sea_level: "0m",
    soft_cooked: "Œuf Mollet",
    soft_description: "Jaune coulant, blancs juste figés.",
    mollet: "Mollet (Crémeuse)",
    mollet_description: "Jaune crémeux, blancs fermes.",
    hard_cooked: "Œuf Dur",
    hard_description: "Jaune solide, blancs entièrement figés.",
  },
  faqTitle: "Questions Fréquemment Posées",
  faq: [
    {
      question: "Pourquoi l'altitude affecte-t-elle le temps de cuisson des œufs?",
      answer:
        "À une altitude plus élevée, la pression atmosphérique est plus basse, ce qui réduit le point d'ébullition de l'eau. Par exemple, au niveau de la mer, l'eau bout à 100°C, mais à 1500m d'altitude, elle bout à seulement 95°C. Cela signifie que la cuisson prend plus de temps.",
    },
    {
      question: "Quelle est la différence entre un œuf mollet et un œuf dur?",
      answer:
        "Un œuf mollet a un jaune crémeux et coulant au centre, tandis que les blancs sont fermes. Un œuf dur a complètement cuit le jaune et les blancs. La différence réside principalement dans le temps de cuisson et la température atteinte.",
    },
    {
      question: "Comment puis-je obtenir des œufs durs parfaits?",
      answer:
        "Utilisez des œufs à température ambiante si possible, portez l'eau à ébullition, puis plongez les œufs et laissez-les cuire selon votre altitude. Refroidissez-les immédiatement dans de l'eau glacée pour arrêter la cuisson. Notre calculateur vous donne le temps exact pour votre localisation.",
    },
    {
      question: "Pourquoi dois-je refroidir les œufs après la cuisson?",
      answer:
        "Refroidir les œufs rapidement dans de l'eau glacée arrête le processus de cuisson et facilite l'épluchage. Cela empêche la cuisson excessive du jaune qui pourrait créer une bordure grisâtre.",
    },
    {
      question: "Quel est l'âge idéal des œufs pour les faire bouillir?",
      answer:
        "Les œufs plus anciens (au moins une semaine) sont plus faciles à éplucher car l'albumine se sépare plus facilement de la coquille. Les œufs très frais peuvent être plus difficiles à éplucher.",
    },
  ],
  bibliographyTitle: "Bibliographie",
  bibliography: [
    {
      name: "The Science of Boiling an Egg - Charles D. H. Williams",
      url: "https://newton.ex.ac.uk/teaching/CDHW/Egg/",
    },
    {
      name: "The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt",
      url: "https://www.seriouseats.com/",
    },
    {
      name: "The Food Lab: Perfect Soft Boiled Eggs",
      url: "https://www.seriouseats.com/",
    },
  ],
  howTo: [
    {
      name: "Sélectionnez Vos Paramètres",
      text: "Choisissez la température initiale de l'œuf, sa taille, et votre altitude. Notre calculateur déterminera automatiquement le temps de cuisson optimal.",
    },
    {
      name: "Portez l'Eau à Ébullition",
      text: "Utilisez une casserole avec suffisamment d'eau pour couvrir les œufs d'environ 2-3cm. Portez à ébullition complète.",
    },
    {
      name: "Plongez et Laissez Cuire",
      text: "Plongez délicatement les œufs dans l'eau bouillante et commencez le minuteur selon le temps recommandé. La précision est essentielle pour le résultat parfait.",
    },
    {
      name: "Refroidissez Immédiatement",
      text: "Quand le temps est écoulé, plongez les œufs dans de l'eau glacée pendant au moins 5 minutes pour arrêter la cuisson et faciliter l'épluchage.",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Thermodynamique de la Cuisson Parfaite d'Œufs",
      level: 2,
    },
    {
      type: "paragraph",
      text: "La cuisson d'un œuf est un processus thermodynamique délicat. Les protéines se dénaturent à différentes températures, créant des textures distinctes du blanc et du jaune.",
    },
    {
      type: "title",
      text: "Impact de l'Altitude sur la Cuisson",
      level: 3,
    },
    {
      type: "paragraph",
      text: "Au niveau de la mer, l'eau bout à 100°C. À 1000m d'altitude, elle bout à 96°C. À 2000m, à seulement 93°C. Cette différence affecte significativement les temps de cuisson.",
    },
    {
      type: "title",
      text: "Types d'Œufs Cuits",
      level: 3,
    },
    {
      type: "list",
      items: [
        "Mollet (6-7 minutes): Jaune crémeux, blancs fermes",
        "Dur (10-12 minutes): Complètement cuit, légèrement collet gris si non refroidi",
        "Jammy (8-9 minutes): Équilibre parfait entre coulant et figé",
      ],
    },
  ],
  schemas: [],
};
