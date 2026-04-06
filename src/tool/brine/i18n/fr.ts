import type { ToolLocaleContent } from "../../../types";

export const content: ToolLocaleContent = {
  slug: "calculateur-saumure-equilibre-fermentation-viande-ratios",
  title: "Calculateur de Saumure par Équilibre et Fermentation",
  description:
    "Maîtrisez la science de la saumure par équilibre pour des viandes juteuses et des fermentations parfaites. Calculez la salinité exacte basée sur le poids total.",
  ui: {
    calculator: "Calculatrice",
    subtitle: "Entrez les poids para calculer l'équilibre parfait.",
    productWeight: "Poids du Produit (g)",
    waterWeight: "Poids de l'Eau (g)",
    desiredSalinity: "Salinité Souhaitée",
    meat: "Viandes (1.5%)",
    fermented: "Fermentations (2.0%)",
    sauces: "Sauces (3.5%)",
    preserves: "Conserves (5.0%)",
    addSugar: "Ajouter du Sucre",
    sugarHint: "Équilibre le goût et aide au brunissement (50% du sel)",
    saltNeeded: "Sel Nécessaire",
    sugarOptional: "Sucre (Optionnel)",
    estimatedTime: "Temps Estimé",
    product: "Produit",
    total: "Total",
    unitGrams: "grammes",
    timeMeatsLabel: "Temps (Viandes)",
    timeMeatsDuration: "4 - 48 Heures",
    timeVegetablesLabel: "Temps (Légumes)",
    timeVegetablesDuration: "1 - 3 Semaines",
    timePreservesLabel: "Temps (Conserves)",
    timePreservesDuration: "1+ Mois",
  },
  faqTitle: "Questions Fréquentes sur la Saumure",
  bibliographyTitle: "Sources et Références Scientifiques",
  faq: [
    {
      question: "Qu'est-ce que la méthode de saumure par équilibre ?",
      answer:
        "La méthode par équilibre calcule le sel en fonction du poids total (eau + ingrédient), pas seulement du poids de l'eau. Cela garantit une concentration de sel constante quelle que soit la quantité d'ingrédient utilisée.",
    },
    {
      question: "Combien de sel faut-il pour les légumes fermentés ?",
      answer:
        "Pour les légumes fermentés (cornichons, choucroute, kimchi), il est recommandé d'utiliser entre 2% et 3% de sel. Pour les viandes, entre 1,5% et 2%. Le calculateur vous donne le montant exact selon vos poids.",
    },
    {
      question: "Puis-je congeler de la viande après saumurage ?",
      answer:
        "Oui, c'est idéal. La saumure protège contre les brûlures de congélation et la viande sera prête à cuire dès la décongélation. Évitez toutefois de congeler des légumes fermentés car ils perdraient leur texture.",
    },
    {
      question: "Pourquoi ajouter du sucre à la saumure ?",
      answer:
        "Le sucre a deux fonctions : il facilite la réaction de Maillard (brunissement) pour les viandes et équilibre la saveur saline sans rendre le produit sucré.",
    },
  ],
  howTo: [
    {
      name: "Déterminez votre objectif",
      text: "Décidez si vous saumurez des viandes (1,5-2%), fermentez des légumes (2-3%), faites des sauces (3,5%) ou des conserves (5%+).",
    },
    {
      name: "Pesez l'ingrédient et l'eau",
      text: "Pesez le produit et l'eau avec précision. Chaque gramme compte pour la sécurité alimentaire et le goût. Utilisez une balance de précision.",
    },
    {
      name: "Calculez avec l'outil",
      text: "Entrez les poids dans le calculateur et ajustez la salinité selon votre type de produit. L'outil vous indiquera les grammes exacts de sel et de sucre.",
    },
    {
      name: "Dissolvez et mélangez",
      text: "Dissolvez complètement le sel dans l'eau froide avant d'ajouter le produit. Pour les viandes, assurez-vous que la saumure recouvre tout.",
    },
    {
      name: "Fermentez ou marinez",
      text: "Réfrigérez selon le type : 4-48 h pour les viandes, 1-3 semaines pour les fermentations. Le temps dépend de la température ambiante.",
    },
  ],
  bibliography: [
    {
      name: "The Noma Guide to Fermentation - René Redzepi & David Zilber",
      url: "https://www.nomacph.com/",
    },
    {
      name: "Salt, Fat, Acid, Heat - Samin Nosrat",
      url: "https://www.saltfatacidheat.com/",
    },
    {
      name: "Pollan, Michael - Cooked",
      url: "https://michaelpollan.com/",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Guide Maître de Saumure par Équilibre et Fermentation",
      level: 2,
    },
    {
      type: "paragraph",
      html: "La <strong>saumure par équilibre</strong> est la technique ultime pour garantir des résultats juteux et sûrs. Contrairement aux méthodes traditionnelles, celle-ci calcule le sel sur le <strong>poids total</strong> de l'eau et du produit.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "1.5 - 2%",
          label: "Ratio Idéal Viandes",
          icon: "mdi:food-steak",
        },
        {
          value: "2.5 - 3%",
          label: "Ratio Fermentation",
          icon: "mdi:flask-outline",
        },
        {
          value: "18-22°C",
          label: "Temp. Fermentation",
          icon: "mdi:thermometer",
        },
        {
          value: "0.5%",
          label: "Sucre d'Équilibre",
          icon: "mdi:shaker-outline",
        },
      ],
    },
    {
      type: "title",
      text: "Différences entre Saumure Sèche et Humide",
      level: 3,
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Saumure Sèche (Dry Brining)",
          icon: "mdi:shaker-outline",
          description: "Le sel est appliqué directement sur la surface du produit sans ajout d'eau.",
          points: [
            "Peau beaucoup plus croustillante sur les volailles",
            "Saveur plus concentrée de l'ingrédient",
            "Prend moins de place au réfrigérateur",
            "Idéal pour les steaks et poulets entiers",
          ],
        },
        {
          title: "Saumure Humide (Wet Brining)",
          icon: "mdi:water",
          description: "Le produit est immergé dans une solution d'eau et de sel calculée par équilibre.",
          highlight: true,
          points: [
            "Transfert d'humidité supérieur",
            "Permet l'introduction d'aromates (épices)",
            "Salaison plus uniforme sur les grosses pièces",
            "Idéal pour la dinde, le porc et le poisson",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Temps et Salinités selon l'Application",
      level: 3,
    },
    {
      type: "table",
      headers: ["Catégorie", "Salinité (%)", "Temps Minimum", "Objectif Principal"],
      rows: [
        ["Volaille et Porc", "1.5% - 2.0%", "12 - 24 heures", "Jutosité et tendreté"],
        ["Poissons Blancs", "1.0% - 1.5%", "20 - 45 minutes", "Fermeté de la chair"],
        ["Lacto-fermentation", "2.5% - 3.0%", "7 - 21 jours", "Sécurité microbiologique"],
        ["Sauces et Conserves", "3.5% - 5.0%", "1+ mois", "Conservation longue durée"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Identifier les Problèmes de Saumure",
      html: "Si la saumure dégage une odeur fétide (non acide), si des moisissures colorées apparaissent, ou si le produit devient trop mou, jetez-le. Le voile blanc en surface (levure Kahm) est normal.",
    },
    {
      type: "title",
      text: "Glossaire de l'Expert en Salaison",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Osmose",
          definition: "Processus physique par lequel le sel pénètre dans les cellules pour équilibrer les concentrations.",
        },
        {
          term: "Dénaturation",
          definition: "Effet du sel sur les protéines permettant de retenir plus d'eau pendant la cuisson.",
        },
        {
          term: "Levure Kahm",
          definition: "Fine couche blanche inoffensive indiquant un manque d'acidité ou d'hygiène parfaite.",
        },
        {
          term: "Lacto-fermentation",
          definition: "Fermentation anaérobie où les bactéries transforment les sucres en acide lactique.",
        },
      ],
    },
    {
      type: "tip",
      title: "Qualité de l'Eau",
      html: "Évitez l'eau du robinet trop chlorée qui peut inhiber les bonnes bactéries. Utilisez de l'eau filtrée ou laissez reposer l'eau 24h à l'air libre.",
    },
    {
      type: "paragraph",
      html: "Notre calculateur d'équilibre supprime les approximations, vous permettant de cuisiner avec la confiance d'un professionnel.",
    },
  ],
  schemas: [],
};
