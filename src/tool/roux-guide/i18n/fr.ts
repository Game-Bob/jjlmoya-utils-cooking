import type { ToolLocaleContent } from "../../../types";

const title = "Calculateur de Roux Professionnel et Sauces Mères";
const description = "Maîtrisez la base des sauces mères françaises. Calculez les proportions exactes de roux pour la Béchamel, le Velouté et la Sauce Espagnole.";
const faq = [
    {
      question: "Qu'est-ce qu'un Roux et à quoi sert-il ?",
      answer: "Un Roux est un mélange à parts égales de matière grasse et de farine cuit à feu doux. C'est l'agent de liaison fondamental pour les sauces mères françaises comme la Béchamel ou le Velouté.",
    },
    {
      question: "Quelle est la proportion idéale pour un Roux ?",
      answer: "Le standard professionnel est un ratio de 1:1 en poids. Par exemple, 50g de beurre pour 50g de farine. Ce mélange est conçu pour lier environ 1 litre de liquide.",
    },
    {
      question: "Quelle est la différence entre les types de Roux ?",
      answer: "Le Roux Blanc cuit 2-3 min (Béchamel). Le Roux Blond 5-8 min (Velouté). Le Roux Brun 15-20 min (Espagnole). Plus il est foncé, plus il dégage de saveurs de noisette mais moins il a de pouvoir liant.",
    },
    {
      question: "Comment éviter les grumeaux ?",
      answer: "Appliquez la règle du choc thermique : versez un liquide froid sur un roux chaud, ou un liquide chaud sur un roux froid. Versez progressivement en fouettant énergiquement.",
    },
  ];
const howTo = [
    {
      name: "Sélectionnez votre liquide",
      text: "Choisissez entre le lait, un fond blanc ou un fond brun selon la sauce mère que vous souhaitez réaliser.",
    },
    {
      name: "Définissez la texture",
      text: "Décidez si vous avez besoin d'une crème légère, d'une sauce de nappage standard ou d'une base épaisse pour des croquettes.",
    },
    {
      name: "Entrez le volume de liquide",
      text: "Saisissez la quantité totale de liquide. Le calculateur vous donnera les poids exacts de beurre et de farine.",
    },
    {
      name: "Respectez le temps de cuisson",
      text: "Cuisez votre mélange beurre-farine jusqu'au stade souhaité (Blanc, Blond ou Brun) pour correspondre à votre recette.",
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
  slug: "calculateur-roux-proportions-sauce-bechamel-veloute",
  title: "Calculateur de Roux Professionnel et Sauces Mères",
  description:
    "Maîtrisez la base des sauces mères françaises. Calculez les proportions exactes de roux pour la Béchamel, le Velouté et la Sauce Espagnole.",
  ui: {
    baseLiquid: "Liquide de Base",
    volume: "Volume",
    ml: "ml",
    liquidType: "Type de Liquide",
    milk: "Lait",
    lightStock: "Fond Blanc",
    darkStock: "Fond Brun",
    tomato: "Tomate",
    sauceTexture: "Texture de la Sauce",
    soup: "Soupe / Velouté",
    normalSauce: "Sauce Standard",
    thick: "Épaisse / Garniture",
    croquette: "Croquettes / Farce",
    rouxMix: "Mélange Roux",
    butter: "Beurre",
    flour: "Farine",
    instructions: "Instructions",
    sauceName: "Type de Sauce",
    ratio: "Ratio",
    chefTip: "Astuce du Chef",
    white: "Blanc",
    blond: "Blond",
    brown: "Brun",
    beurreManied: "Beurre Manié (Pour ajuster à la fin)",
    recipeBechamel: "Béchamel",
    recipeVeloute: "Velouté",
    recipeEspagnole: "Espagnole",
    recipeTomato: "Sauce Tomate",
    tipBechamel: "Utilisez du lait froid. Ajoutez-le progressivement au début ou d'un coup si vous fouettez vigoureusement.",
    tipVeloute: "Utilisez un fond blanc. Le roux doit sentir le biscuit avant de lier au liquide.",
    tipEspagnole: "Idéal pour les sauces brunes puissantes. Le roux doit être couleur chocolat, sans brûler.",
    tipTomato: "Le roux aidera à donner du corps et de l'onctuosité à la texture finale de la tomate.",
    rouxWhiteLabel: "Roux Blanc",
    rouxBlondLabel: "Roux Blond",
    rouxBrownLabel: "Roux Brun",
    descWhite: "Cuire juste assez pour faire perdre l'odeur de farine crue. Sans coloration.",
    descBlond: "Recherchez une couleur beurre noisette et un léger arôme de noix.",
    descBrown: "Feu très doux. Couleur chocolate. Note : nécessite +10% de poids.",
    timeWhite: "2-3 min",
    timeBlond: "5-8 min",
    timeBrown: "15-20 min",
  },
  faqTitle: "Questions Fréquentes sur le Roux",
  faq: [
    {
      question: "Qu'est-ce qu'un Roux et à quoi sert-il ?",
      answer: "Un Roux est un mélange à parts égales de matière grasse et de farine cuit à feu doux. C'est l'agent de liaison fondamental pour les sauces mères françaises comme la Béchamel ou le Velouté.",
    },
    {
      question: "Quelle est la proportion idéale pour un Roux ?",
      answer: "Le standard professionnel est un ratio de 1:1 en poids. Par exemple, 50g de beurre pour 50g de farine. Ce mélange est conçu pour lier environ 1 litre de liquide.",
    },
    {
      question: "Quelle est la différence entre les types de Roux ?",
      answer: "Le Roux Blanc cuit 2-3 min (Béchamel). Le Roux Blond 5-8 min (Velouté). Le Roux Brun 15-20 min (Espagnole). Plus il est foncé, plus il dégage de saveurs de noisette mais moins il a de pouvoir liant.",
    },
    {
      question: "Comment éviter les grumeaux ?",
      answer: "Appliquez la règle du choc thermique : versez un liquide froid sur un roux chaud, ou un liquide chaud sur un roux froid. Versez progressivement en fouettant énergiquement.",
    },
  ],
  howTo: [
    {
      name: "Sélectionnez votre liquide",
      text: "Choisissez entre le lait, un fond blanc ou un fond brun selon la sauce mère que vous souhaitez réaliser.",
    },
    {
      name: "Définissez la texture",
      text: "Décidez si vous avez besoin d'une crème légère, d'une sauce de nappage standard ou d'une base épaisse pour des croquettes.",
    },
    {
      name: "Entrez le volume de liquide",
      text: "Saisissez la quantité totale de liquide. Le calculateur vous donnera les poids exacts de beurre et de farine.",
    },
    {
      name: "Respectez le temps de cuisson",
      text: "Cuisez votre mélange beurre-farine jusqu'au stade souhaité (Blanc, Blond ou Brun) pour correspondre à votre recette.",
    },
  ],
  bibliographyTitle: "Références Techniques et Bibliographie",
  bibliography: [
    {
      name: "Larousse Gastronomique - La Bible de la Cuisine",
      url: "https://www.laroussecocina.com/",
    },
    {
      name: "L'Art de la Cuisine Française - Marie-Antoine Carême",
      url: "https://www.bnf.fr/",
    },
    {
      name: "Le Guide Culinaire - Auguste Escoffier",
      url: "https://www.fondation-escoffier.org/",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Guide Maître pour le Calcul du Roux et des Sauces Mères",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Le <strong>roux</strong> est la base structurelle de la cuisine classique. Comprendre la relation entre la farine, le beurre et le liquide est la clé d'une sauce onctueuse sans grumeaux ni goût de farine crue.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "1:1",
          label: "Ratio Farine:Gras",
          icon: "mdi:scale-balance",
        },
        {
          value: "3 min",
          label: "Temps Roux Blanc",
          icon: "mdi:timer-sand",
        },
        {
          value: "100g/L",
          label: "Ratio Sauces Épaisses",
          icon: "mdi:waves",
        },
        {
          value: "15 min",
          label: "Temps Roux Brun",
          icon: "mdi:fire",
        },
      ],
    },
    {
      type: "title",
      text: "Degrés de Cuisson et Pouvoir Liant",
      level: 3,
    },
    {
      type: "comparative",
      columns: 3,
      items: [
        {
          title: "Roux Blanc",
          icon: "mdi:flask-round-bottom-outline",
          description: "Cuit 2-3 minutes. Le liant d'amidon le plus puissant.",
          points: [
            "Base de la Béchamel",
            "Pouvoir liant maximum",
            "Goût neutre de crème",
            "Pas de coloration",
          ],
        },
        {
          title: "Roux Blond",
          icon: "mdi:gold",
          description: "Cuit 5-8 minutes jusqu'à une teinte dorée pâle.",
          highlight: true,
          points: [
            "Base du Velouté",
            "Pouvoir liant moyen",
            "Léger goût de noisette",
            "Idéal pour fonds clairs",
          ],
        },
        {
          title: "Roux Brun",
          icon: "mdi:coffee",
          description: "Cuit 15-20 minutes. Saveurs torréfiées profondes.",
          points: [
            "Base de la Sauce Espagnole",
            "Pouvoir liant réduit (-30%)",
            "Arôme complexe grillé",
            "Texture plus fluide",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Grammage de Roux par Litre selon la Texture",
      level: 3,
    },
    {
      type: "table",
      headers: ["Texture Souhaitée", "Beurre (g)", "Farine (g)", "Liquide (L)"],
      rows: [
        ["Soupe / Crème Légère", "25g", "25g", "1 Litre"],
        ["Sauce de Nappage", "50g", "50g", "1 Litre"],
        ["Sauce à Gratiner", "70g", "70g", "1 Litre"],
        ["Farce / Pâte à Croquettes", "125g", "125g", "1 Litre"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Sauce à Grumeaux ou Goût de Farine ?",
      html: "Si votre sauce grumele, vous avez probablement mélangé chaud sur chaud. Utilisez le choc thermique (liquide froid sur roux chaud). Si elle goûte la farine, augmentez le temps de cuisson initial du roux pour gélatiniser l'amidon.",
    },
    {
      type: "title",
      text: "Glossaire de la Technologie des Sauces",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Dextrinisation",
          definition: "Fragmentation de l'amidon par la chaleur. Augmente le goût mais réduit l'épaisseur.",
        },
        {
          term: "Gélatinisation",
          definition: "Processus où l'amidon absorbe le liquide et gonfle pour créer la liaison.",
        },
        {
          term: "Beurre Manié",
          definition: "Mélange beurre-farine à froid utilisé pour corriger une texture en fin de cuisson.",
        },
        {
          term: "Sauces Mères",
          definition: "Les 5 bases d'Escoffier (Béchamel, Velouté, Espagnole, Hollandaise et Tomate).",
        },
      ],
    },
    {
      type: "tip",
      title: "Le Secret du Brillant (Monter au Beurre)",
      html: "En fin de cuisson, ajoutez une noisette de beurre très froid et fouettez. Cela donne un brillant miroir et un soyeux incomparable à vos sauces.",
    },
    {
      type: "paragraph",
      html: "Notre calculateur de roux garantit une consistance technique parfaite pour toutes vos créations culinaires.",
    },
  ],
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
