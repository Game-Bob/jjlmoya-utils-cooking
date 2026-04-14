import type { ToolLocaleContent } from "../../../types";

const title = "Calculateur de Pâte à Pizza Napolitaine";
const description = "Calculez les proportions exactes de farine, eau, sel et levure pour préparer une authentique pizza napolitaine maison avec des résultats professionnels.";
const faq = [
    {
      question: "Quelle est l'hydratation idéale pour une pizza napolitaine ?",
      answer:
        "Selon le protocole AVPN, l'hydratation standard est de 63-67%. Pour les débutants, 60-62% est plus gérable. Pour les pizzaiolos avancés avec une farine forte (W300+), 70-75% produit des pâtes extraordinaires mais nécessite de la technique.",
    },
    {
      question: "Combien de temps la pâte doit-elle fermenter ?",
      answer:
        "Minimum 24 heures au frigo (4°C) pour activer les enzymes. L'optimal est de 48-72 heures. Au-delà de 72 heures, il faut une farine très forte (W300+) sinon la pâte devient trop acide.",
    },
    {
      question: "Puis-je utiliser de la levure sèche ?",
      answer:
        "Oui. La levure sèche équivaut à 0,4x la fraîche (1g sèche = 2,5g fraîche). La qualité est similaire, mais la levure fraîche apporte un profil aromatique plus complexe.",
    },
    {
      question: "Peut-on faire une pizza napolitaine dans un four domestique ?",
      answer:
        "Oui, mais avec des adaptations. Préchauffez au maximum (250-280°C) avec une pierre réfractaire pendant 45-60 minutes. La cuisson prendra 5-7 minutes au lieu de 60-90 secondes, mais le résultat est acceptable.",
    },
    {
      question: "Quelle farine dois-je utiliser ?",
      answer:
        "Idéal : Caputo Pizzeria (W260-280) ou Manitoba (W350-400). Alternative : toute farine avec 11-13g de protéines pour 100g. Évitez les farines faibles (W130-160) pour les longues fermentations.",
    },
    {
      question: "Pourquoi la pâte se déchire-t-elle lors de l'étalage ?",
      answer:
        "Le gluten n'est pas détendu. Laissez la boule reposer 2 à 3 heures à température ambiante. Si cela se répète, le pétrissage était insuffisant ou la farine est trop faible.",
    },
  ];
const howTo = [
    {
      name: "Calculez les proportions",
      text: "Utilisez ce calculateur pour obtenir les grammes exacts de chaque ingrédient selon le nombre de pizzas et le poids de chaque boule.",
    },
    {
      name: "Mélangez la pâte",
      text: "Mélangez la farine avec de l'eau tiède (22-25°C), le sel (dissous en premier) et la levure. Pétrissez 8-10 minutes au batteur ou 15-20 minutes à la main.",
    },
    {
      name: "Fermentation en bloc",
      text: "Laissez la pâte entière fermenter 1 à 2 heures à température ambiante (20-25°C) jusqu'à ce qu'elle double de volume.",
    },
    {
      name: "Divisez en boules",
      text: "Divisez la pâte en portions du poids indiqué. Laissez reposer 15-20 minutes avant de former les boules.",
    },
    {
      name: "Longue fermentation",
      text: "Placez les boules dans un récipient hermétique au frigo (4°C) pendant 24-72 heures. C'est l'étape critique pour le goût et la digestibilité.",
    },
    {
      name: "Étalez et enfournez",
      text: "Sortez du froid 30 minutes avant. Étalez du centre vers l'extérieur. Enfournez à température maximale 60-90 secondes (bois) ou 5-7 minutes (maison).",
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
  slug: "calculateur-pate-pizza-napolitaine-proportions-authentiques",
  title: "Calculateur de Pâte à Pizza Napolitaine",
  description:
    "Calculez les proportions exactes de farine, eau, sel et levure pour préparer une authentique pizza napolitaine maison avec des résultats professionnels.",
  faqTitle: "Questions Fréquentes sur la Pâte à Pizza",
  bibliographyTitle: "Références Scientifiques et Techniques",
  ui: {
    parameters: "Paramètres",
    quantity: "Quantité",
    pizzas: "pizzas",
    weight: "Poids par boule",
    small: "Petite (180g)",
    standard: "Standard (260g)",
    large: "Grande (350g)",
    hydration: "Hydratation",
    classic: "Classique (55-60%)",
    modern: "Moderne (65-70%)",
    high: "Haute (75%+)",
    salt: "Sel",
    fermentation_tip_title: "Conseil de Fermentation",
    fermentation_tip:
      "Pour une pâte plus digestible et savoureuse, laissez fermenter en bloc pendant 24h au réfrigérateur (4°C) avec <strong>0.3g</strong> de levure fraîche pour 100g de farine.",
    your_recipe: "Votre Recette",
    fresh_yeast: "Levure Fraîche",
    dry_yeast: "Sèche",
    flour: "Farine (W260-300)",
    water: "Eau",
    salt_label: "Sel Marin",
    yeast: "Levure",
    yeast_note: "Pour 8h à temp. ambiante (20°C)",
    total_weight: "Poids Total de la Pâte",
    approx: "env.",
    visual_note:
      "La taille visuelle représente le diamètre approximatif de la pizza étirée selon le poids de la boule.",
  },
  faq: [
    {
      question: "Quelle est l'hydratation idéale pour une pizza napolitaine ?",
      answer:
        "Selon le protocole AVPN, l'hydratation standard est de 63-67%. Pour les débutants, 60-62% est plus gérable. Pour les pizzaiolos avancés avec une farine forte (W300+), 70-75% produit des pâtes extraordinaires mais nécessite de la technique.",
    },
    {
      question: "Combien de temps la pâte doit-elle fermenter ?",
      answer:
        "Minimum 24 heures au frigo (4°C) pour activer les enzymes. L'optimal est de 48-72 heures. Au-delà de 72 heures, il faut une farine très forte (W300+) sinon la pâte devient trop acide.",
    },
    {
      question: "Puis-je utiliser de la levure sèche ?",
      answer:
        "Oui. La levure sèche équivaut à 0,4x la fraîche (1g sèche = 2,5g fraîche). La qualité est similaire, mais la levure fraîche apporte un profil aromatique plus complexe.",
    },
    {
      question: "Peut-on faire une pizza napolitaine dans un four domestique ?",
      answer:
        "Oui, mais avec des adaptations. Préchauffez au maximum (250-280°C) avec une pierre réfractaire pendant 45-60 minutes. La cuisson prendra 5-7 minutes au lieu de 60-90 secondes, mais le résultat est acceptable.",
    },
    {
      question: "Quelle farine dois-je utiliser ?",
      answer:
        "Idéal : Caputo Pizzeria (W260-280) ou Manitoba (W350-400). Alternative : toute farine avec 11-13g de protéines pour 100g. Évitez les farines faibles (W130-160) pour les longues fermentations.",
    },
    {
      question: "Pourquoi la pâte se déchire-t-elle lors de l'étalage ?",
      answer:
        "Le gluten n'est pas détendu. Laissez la boule reposer 2 à 3 heures à température ambiante. Si cela se répète, le pétrissage était insuffisant ou la farine est trop faible.",
    },
  ],
  howTo: [
    {
      name: "Calculez les proportions",
      text: "Utilisez ce calculateur pour obtenir les grammes exacts de chaque ingrédient selon le nombre de pizzas et le poids de chaque boule.",
    },
    {
      name: "Mélangez la pâte",
      text: "Mélangez la farine avec de l'eau tiède (22-25°C), le sel (dissous en premier) et la levure. Pétrissez 8-10 minutes au batteur ou 15-20 minutes à la main.",
    },
    {
      name: "Fermentation en bloc",
      text: "Laissez la pâte entière fermenter 1 à 2 heures à température ambiante (20-25°C) jusqu'à ce qu'elle double de volume.",
    },
    {
      name: "Divisez en boules",
      text: "Divisez la pâte en portions du poids indiqué. Laissez reposer 15-20 minutes avant de former les boules.",
    },
    {
      name: "Longue fermentation",
      text: "Placez les boules dans un récipient hermétique au frigo (4°C) pendant 24-72 heures. C'est l'étape critique pour le goût et la digestibilité.",
    },
    {
      name: "Étalez et enfournez",
      text: "Sortez du froid 30 minutes avant. Étalez du centre vers l'extérieur. Enfournez à température maximale 60-90 secondes (bois) ou 5-7 minutes (maison).",
    },
  ],
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
    {
      name: "The Pizza Bible - Tony Gemignani",
      url: "https://www.amazon.com/Pizza-Bible-Everything-Need-Perfect/dp/0393634039/",
    },
    {
      name: "Franco Pepe - Pepe in Grani",
      url: "https://www.pepeingranitalia.com/",
    },
    {
      name: "Harina Caputo",
      url: "https://www.caputoprepara.com/",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Guide Maître pour la Pâte à Pizza Napolitaine Authentique",
      level: 2,
    },
    {
      type: "paragraph",
      html: "La <strong>pizza napolitaine</strong> est bien plus qu'une recette : c'est un héritage culturel protégé qui exige une précision scientifique. Le succès dépend de la compréhension de l'interaction entre le temps, la température et l'hydratation.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "480°C",
          label: "Temp. de Cuisson Idéale",
          icon: "mdi:fire",
        },
        {
          value: "60-90s",
          label: "Temps au Four",
          icon: "mdi:clock-fast",
        },
        {
          value: "65%",
          label: "Hydratation Standard",
          icon: "mdi:water-percent",
        },
        {
          value: "W280",
          label: "Force de la Farine",
          icon: "mdi:grain",
        },
      ],
    },
    {
      type: "title",
      text: "L'Importance Cruciale de l'Hydratation",
      level: 3,
    },
    {
      type: "paragraph",
      html: "L'hydratation (pourcentage d'eau par rapport au poids de la farine) détermine la texture du <strong>cornicione</strong>. Maîtriser ce paramètre sépare l'amateur du maître pizzaiolo.",
    },
    {
      type: "comparative",
      columns: 3,
      items: [
        {
          title: "Hydratation 55 à 60%",
          icon: "mdi:water-percent",
          description: "Pâte très maniable, idéale pour les débutants et les fours domestiques à basse température.",
          points: [
            "Formation facile du réseau de gluten",
            "Pâte moins collante",
            "Croûte ferme et croustillante",
          ],
        },
        {
          title: "Hydratation 63 à 67%",
          icon: "mdi:water",
          description: "Le standard AVPN. Équilibre parfait pour une pâte légère avec un développement visible de la mie.",
          highlight: true,
          points: [
            "Texture élastique traditionnelle",
            "Idéal pour les fours à bois",
            "Nécessite une technique de pétrissage moyenne",
          ],
        },
        {
          title: "Hydratation 70%+",
          icon: "mdi:water-plus",
          description: "Pizzas contemporaines aux bords géants. Très difficile à manipuler sans technique avancée.",
          points: [
            "Alvéoles extrêmement larges",
            "Pâte très légère et digestible",
            "Nécessite des farines de grande force",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Types de Levure et Laquelle Choisir",
      level: 3,
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Levure Fraîche Pressée",
          icon: "mdi:bread-slice-outline",
          description: "Le choix traditionnel préféré des maîtres pizzaïolos. Fournit un profil aromatique plus complexe.",
          points: [
            "Goût plus profond et propre",
            "Action enzymatique équilibrée",
            "Se dissout facilement dans l'eau tiède",
            "Conservation courte (exige la fraîcheur)",
          ],
        },
        {
          title: "Levure Sèche Instantanée",
          icon: "mdi:shaker-outline",
          description: "Beaucoup plus stable et facile à stocker. Idéal pour avoir toujours à disposition dans le placard.",
          points: [
            "Longue conservation (jusqu'à 2 ans)",
            "Pas de réhydratation préalable nécessaire",
            "Trois fois plus puissante que la fraîche",
            "Goût légèrement plus neutre",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Guide de Sélection des Farines par Index de Force W",
      level: 3,
    },
    {
      type: "table",
      headers: ["Type de Farine", "Force (W)", "Temps de Fermentation", "Usage Recommandé"],
      rows: [
        ["Farine Faible", "W130-180", "4-8 heures", "Pâtisserie rapide"],
        ["Force Moyenne", "W200-240", "8-24 heures", "Pizza rapide ou pain simple"],
        ["Farine de Force", "W260-320", "24-72 heures", "Authentique Pizza Napolitaine"],
        ["Grande Force", "W350+", "72+ heures", "Panettones ou pâtes très hydratées"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Contrôle de la Température de Pétrissage",
      html: "La pâte ne doit pas dépasser 24°C à la fin du pétrissage. La chaleur excessive due à la friction dégrade le gluten et provoque une fermentation erratique.",
    },
    {
      type: "title",
      text: "Glossaire pour le Futur Maître Pizzaïolo",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Cornicione",
          definition: "Le bord surélevé et aéré de la pizza. Il doit être rempli d'alvéoles et ne pas avoir de mie compacte.",
        },
        {
          term: "Maturation",
          definition: "Un processus enzymatique distinct de la fermentation où les protéines et les sucres se décomposent pour un meilleur goût et une digestibilité accrue.",
        },
        {
          term: "Point de Pâte",
          definition: "Le moment où la pâte atteint son élasticité et sa résistance optimales sans être collante.",
        },
        {
          term: "Autolyse",
          definition: "Un temps de repos après le mélange de la farine et de l'eau uniquement qui facilite le développement du gluten sans effort mécanique.",
        },
      ],
    },
    {
      type: "tip",
      title: "L'Astuce du Frigo",
      html: "Le pointage (fermentation en bloc) pendant 24 heures à 4°C ne rend pas seulement la pâte plus facile à manipuler ; il crée des composés organiques complexes impossibles à obtenir à température ambiante.",
    },
    {
      type: "paragraph",
      html: "Notre calculateur automatise les proportions spécifiques pour que vous puissiez vous concentrer sur l'essentiel : la technique et la passion pour le produit final.",
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
