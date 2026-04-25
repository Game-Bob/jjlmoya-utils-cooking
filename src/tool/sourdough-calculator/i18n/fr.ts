import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Calculateur de Rafraîchissement du Levain";
const description = "Le choix le plus courant en boulangerie artisanale moderne. Très facile à mélanger et à incorporer.";
const faq = [
    {
      question: "Qu'est-ce qu'un ratio 1:1:1 ?",
      answer:
        "C'est le ratio le plus courant pour entretenir le levain à température ambiante. Cela signifie 1 part de levain, 1 part de farine et 1 part d'eau. Idéal pour un rafraîchissement quotidien.",
    },
    {
      question: "Quand utiliser un ratio 1:2:2 ?",
      answer:
        "Un ratio 1:2:2 est souvent utilisé pour réactiver ou réveiller un levain. Il offre une courbe de fermentation plus prévisible, idéale après un passage au réfrigérateur.",
    },
    {
      question: "Pourquoi utiliser le ratio 1:5:5 ?",
      answer:
        "Le ratio 1:5:5 est le favori de nombreux boulangers. Il permet une fenêtre de fermentation de 8 à 12 heures avant que le levain n'atteigne son pic, équilibrant commodité et contrôle du temps.",
    },
    {
      question: "Puis-je utiliser des ratios personnalisés ?",
      answer:
        "Absolument. Si vous avez un protocole spécifique, vous pouvez saisir vos propres ratios. Certains boulangers utilisent 1:10:10 pour une fermentation très lente, d'autres 1:1:0.8 pour un levain plus ferme.",
    },
    {
      question: "Le calculateur arrondit-il les grammes ?",
      answer:
        "Oui. Il arrondit à l'entier le plus proche par praticité. Pour une précision maximale, utilisez une balance digitale ; toutefois, de petits écarts d'arrondi n'impactent pas significativement la fermentation.",
    },
  ];
const howTo = [
    {
      name: "Entrez la quantité totale",
      text: "Définissez le poids total de levain dont vous avez besoin pour votre recette (ex: 300g pour un pain classique).",
    },
    {
      name: "Sélectionnez le ratio",
      text: "Choisissez parmi les ratios prédéfinis (Maintenir, Activer, Retarder, Fort, Sweet Spot) ou créez votre propre ratio personnalisé.",
    },
    {
      name: "Obtenez vos mesures exactes",
      text: "Le calculateur vous montre exactement combien de levain, de farine et d'eau mélanger. Mélangez et laissez fermenter selon votre planning.",
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
  slug: "calculateur-rafraichissement-levain-proportions-ratio",
  title: "Calculateur de Rafraîchissement du Levain",
  description:
    "Calculez automatiquement les proportions exactes de levain, farine et eau pour l'entretien et le rafraîchissement de votre culture. Ratios prédéfinis ou personnalisés.",
  faqTitle: "Questions Fréquentes sur le Levain",
  faq: [
    {
      question: "Qu'est-ce qu'un ratio 1:1:1 ?",
      answer:
        "C'est le ratio le plus courant pour entretenir le levain à température ambiante. Cela signifie 1 part de levain, 1 part de farine et 1 part d'eau. Idéal pour un rafraîchissement quotidien.",
    },
    {
      question: "Quand utiliser un ratio 1:2:2 ?",
      answer:
        "Un ratio 1:2:2 est souvent utilisé pour réactiver ou réveiller un levain. Il offre une courbe de fermentation plus prévisible, idéale après un passage au réfrigérateur.",
    },
    {
      question: "Pourquoi utiliser le ratio 1:5:5 ?",
      answer:
        "Le ratio 1:5:5 est le favori de nombreux boulangers. Il permet une fenêtre de fermentation de 8 à 12 heures avant que le levain n'atteigne son pic, équilibrant commodité et contrôle du temps.",
    },
    {
      question: "Puis-je utiliser des ratios personnalisés ?",
      answer:
        "Absolument. Si vous avez un protocole spécifique, vous pouvez saisir vos propres ratios. Certains boulangers utilisent 1:10:10 pour une fermentation très lente, d'autres 1:1:0.8 pour un levain plus ferme.",
    },
    {
      question: "Le calculateur arrondit-il les grammes ?",
      answer:
        "Oui. Il arrondit à l'entier le plus proche par praticité. Pour une précision maximale, utilisez une balance digitale ; toutefois, de petits écarts d'arrondi n'impactent pas significativement la fermentation.",
    },
  ],
  howTo: [
    {
      name: "Entrez la quantité totale",
      text: "Définissez le poids total de levain dont vous avez besoin pour votre recette (ex: 300g pour un pain classique).",
    },
    {
      name: "Sélectionnez le ratio",
      text: "Choisissez parmi les ratios prédéfinis (Maintenir, Activer, Retarder, Fort, Sweet Spot) ou créez votre propre ratio personnalisé.",
    },
    {
      name: "Obtenez vos mesures exactes",
      text: "Le calculateur vous montre exactement combien de levain, de farine et d'eau mélanger. Mélangez et laissez fermenter selon votre planning.",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Guide Maître pour l'Entretien et le Rafraîchissement du Levain",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Le <strong>levain</strong> n'est pas seulement un ingrédient ; c'est un écosystème vivant de levures sauvages et de bactéries lactiques (LAB). Un pain exceptionnel commence par la santé de cette culture, gérée par des ratios précis et un contrôle de la température.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "24-26°C",
          label: "Temp. d'Activité Optimale",
          icon: "mdi:thermometer",
        },
        {
          value: "3.8 - 4.2",
          label: "pH Idéal de la Culture",
          icon: "mdi:test-tube",
        },
        {
          value: "100%",
          label: "Hydratation Standard",
          icon: "mdi:water-percent",
        },
        {
          value: "x2 - x3",
          label: "Croissance au Pic",
          icon: "mdi:trending-up",
        },
      ],
    },
    {
      type: "title",
      text: "Comparaison des Types de Culture de Levain",
      level: 3,
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Levain Liquide (100% Hyd.)",
          icon: "mdi:water",
          description: "Le choix le plus courant en boulangerie artisanale moderne. Très facile à mélanger et à incorporer.",
          points: [
            "Vitesse de fermentation plus rapide",
            "Profil aromatique plus lactique (doux)",
            "Facile à mesurer et à rafraîchir",
            "Idéal pour baguettes et pains de campagne",
          ],
        },
        {
          title: "Levain Dur (Pasta Madre)",
          icon: "mdi:bread-slice-outline",
          description: "Traditionnel en boulangerie italienne. Hydratation autour de 50%. Réputé pour sa force.",
          highlight: true,
          points: [
            "Fermentation plus lente et stable",
            "Profil aromatique plus acétique",
            "Plus grande force pour pâtes enrichies",
            "Idéal pour Panettone et Brioche",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Comprendre les Ratios Mathématiques de Rafraîchissement",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Le ratio représente les parts d'inoculum (ancien levain) par rapport à la farine et à l'eau. Par exemple, un ratio 1:2:2 signifie 1 part de culture pour 2 parts de farine et 2 parts d'eau.",
    },
    {
      type: "table",
      headers: ["Ratio", "Usage Recommandé", "Temps Est. (24°C)", "Avantage Clé"],
      rows: [
        ["1:1:1", "Entretien quotidien", "4-6 heures", "Maintenance rapide"],
        ["1:2:2", "Activation avant cuisson", "6-8 heures", "Équilibre d'acidité"],
        ["1:5:5", "Usage boulanger standard", "8-12 heures", "Pic d'activité prévisible"],
        ["1:10:10", "Retard longue durée", "16-24 heures", "Gestion d'horaire flexible"],
      ],
    },
    {
      type: "title",
      text: "Sélection des Farines pour le Rafraîchissement",
      level: 3,
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Farine de Seigle Complète",
          icon: "mdi:grain",
          description: "Un super-aliment pour les levures sauvages. Contient plus de nutriments que le blé.",
          points: [
            "Activité fermentaire explosive",
            "Apporte des arômes terreux profonds",
            "Maintient mieux les niveaux d'acidité",
          ],
        },
        {
          title: "Farine de Blé Blanche",
          icon: "mdi:shaker-outline",
          description: "Idéal pour ceux qui cherchent un goût plus doux où le levain ne domine pas le profil du pain.",
          points: [
            "Goût plus neutre et polyvalent",
            "Observation très claire des bulles",
            "Moins enclin à la sur-fermentation",
          ],
        },
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Signes d'un Levain Affamé",
      html: "Si votre culture présente un liquide sombre en surface (hooch), sent intensément le vinaigre ou l'acétone, ou s'affaisse très vite après son pic, elle a besoin d'un ratio de rafraîchissement plus élevé ou d'une température de stockage plus basse.",
    },
    {
      type: "title",
      text: "Glossaire Technique du Levain",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Levain de tout-point",
          definition: "Le levain final préparé à partir de la culture mère pour être utilisé directement dans une recette de pain.",
        },
        {
          term: "Hooch",
          definition: "Couche d'alcool et d'eau qui s'accumule lorsque le levain a épuisé sa source de nourriture. Pas nocif mais indique la faim.",
        },
        {
          term: "Pic d'Activité",
          definition: "Le moment d'expansion maximale et de densité de population de levures la plus élevée. Idéal pour pétrir.",
        },
        {
          term: "Bactéries Lactiques (LAB)",
          definition: "Micro-organismes responsables de la production d'acides organiques qui donnent le goût caractéristique et améliorent la conservation.",
        },
      ],
    },
    {
      type: "tip",
      title: "Le Test du Flottage",
      html: "Pour vérifier si votre levain est prêt, déposez une cuillère à café dans un verre d'eau. S'il flotte, c'est qu'il a emprisonné assez de CO2 et que les levures sont à leur pic.",
    },
    {
      type: "paragraph",
      html: "L'utilisation de notre calculateur vous permet de standardiser votre processus de boulangerie et de mieux comprendre la biologie de votre pain. La constance est le secret de l'excellence artisanale.",
    },
  ],
  ui: {
    totalAmount: "Quantité Totale",
    refreshRatio: "Ratio de Rafraîchissement",
    maintain: "Maintenir",
    activate: "Activer",
    retard: "Retarder",
    strong: "Fort",
    sweetSpot: "Sweet Spot",
    custom: "Perso",
    sourdough: "Levain",
    activeCulture: "Culture active",
    flour: "Farine",
    flourType: "Force ou Complète",
    water: "Eau",
    chlorineFree: "Sans chlore",
    todayFormula: "Formule du Jour",
    hydration: "Hydratation 100%",
    totalDough: "Total Levain",
    mm: "Levain",
  },
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
