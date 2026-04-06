import type { ToolLocaleContent } from "../../../types";

export const content: ToolLocaleContent = {
  slug: "calculateur-mise-echelle-recette-ingredients-portions",
  title: "Convertisseur de Portions et Ingrédients Professionnel",
  description:
    "Mettez à l'échelle vos recettes automatiquement selon le nombre de portions. Calculez les quantités exactes d'ingrédients avec une précision professionnelle.",
  ui: {
    servings: "Portions",
    original: "Original",
    desired: "Souhaité",
    multiplyingFactor: "Facteur de Conversion",
    ingredientsList: "Liste des Ingrédients",
    pasteHere: "Collez votre liste d'ingrédients ici.",
    exampleLine1: "Ex :",
    exampleLine2: "500g Farine",
    exampleLine3: "300ml Eau",
    exampleLine4: "10g Sel",
    result: "Résultat",
    copy: "Copier",
    copied: "Copié !",
    emptyState: "Vos ingrédients ajustés apparaîtront ici...",
    defaultIngredient1: "200g Farine",
    defaultIngredient2: "100ml Lait",
    defaultIngredient3: "2 Œufs",
  },
  faqTitle: "Questions Fréquentes sur l'Échelle des Recettes",
  faq: [
    {
      question: "Pourquoi mon facteur de conversion inclut-il des décimales ?",
      answer:
        "Parce que les proportions culinaires ne tombent pas toujours sur des chiffres ronds. Si vous passez d'une recette pour 4 à 7 personnes, le facteur est exactement 1,75. Multiplier par ce ratio précis est plus sûr que d'arrondir arbitrairement.",
    },
    {
      question: "Comment gérer les fractions comme '1/2 cac de sel' ?",
      answer:
        "Notre outil reconnaît automatiquement les chiffres. Il lira '1/2' comme '0,5' et l'adaptera. Pour plus de clarté, vous pouvez aussi saisir directement des décimales.",
    },
    {
      question: "Dois-je arrondir les résultats finaux ?",
      answer:
        "Cela dépend de l'ingrédient. Pour les farines et liquides, oui. Pour les épices fortes ou la levure, nous recommandons de ne monter qu'à 75% du total calculé pour éviter de saturer le plat.",
    },
    {
      question: "L'outil fonctionne-t-il avec les onces ou les tasses ?",
      answer:
        "Oui, l'outil multiplie n'importe quelle valeur numérique. Cependant, nous conseillons vivement de convertir en grammes pour une précision professionnelle sur de gros volumes.",
    },
  ],
  howTo: [
    {
      name: "Entrez le nombre de portions",
      text: "Définissez le nombre de personnes prévu initialement dans la recette, et le nombre pour lequel vous souhaitez cuisiner.",
    },
    {
      name: "Collez votre liste d'ingrédients",
      text: "Copiez et collez l'intégralité de votre liste. L'outil reconnaît les chiffres en début de ligne (ex: 500g, 1/2, 2.5) et les convertit instantanément.",
    },
    {
      name: "Appliquez les ajustements de chef",
      text: "Le calcul est exact, mais la cuisine est intuitive. Réduisez les épices à 75%. Ne multipliez jamais les temps de cuisson par le même facteur.",
    },
  ],
  bibliographyTitle: "Bibliographie et Ressources Professionnelles",
  bibliography: [
    {
      name: "Harold McGee - On Food and Cooking",
      url: "https://en.wikipedia.org/wiki/Harold_McGee",
    },
    {
      name: "The Flavor Bible - Page & Dornenburg",
      url: "https://www.flavorprints.com/",
    },
    {
      name: "Modernist Cuisine - Techniques de mise à l'échelle",
      url: "https://www.modernistcuisine.com/",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Guide Maître pour la Mise à l'Échelle et la Conversion de Recettes",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Le <strong>calcul des proportions</strong> est l'une des tâches les plus critiques en cuisine professionnelle. Il ne s'agit pas seulement de mathématiques, mais de comprendre comment la chimie des aliments réagit aux changements de volume.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "x1.75",
          label: "Facteur de 4 à 7 pers.",
          icon: "mdi:calculator",
        },
        {
          value: "75%",
          label: "Ajustement Épices",
          icon: "mdi:shaker-outline",
        },
        {
          value: "0%",
          label: "Échelle de Temps",
          icon: "mdi:timer-off",
        },
        {
          value: "100g",
          label: "Base de Référence",
          icon: "mdi:weight-gram",
        },
      ],
    },
    {
      type: "title",
      text: "Différences entre Échelle Linéaire et Contextuelle",
      level: 3,
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Mise à l'Échelle Linéaire",
          icon: "mdi:math-log",
          description: "Multiplication directe de toutes les valeurs par le facteur de conversion calculé.",
          points: [
            "Parfait pour la farine et les liquides de base",
            "Idéal pour la pâtisserie froide de précision",
            "Fonctionne bien pour les petits changements (x2, x0.5)",
            "Facile à calculer automatiquement",
          ],
        },
        {
          title: "Mise à l'Échelle Contextuelle",
          icon: "mdi:chef-hat",
          description: "Ajustement des proportions basé sur la saturation des saveurs et l'évaporation.",
          highlight: true,
          points: [
            "Évite l'excès de sel et d'épices",
            "Prend en compte la surface d'évaporation",
            "Ajuste la levure selon la chaleur de friction",
            "Demande un jugement culinaire professionnel",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Facteurs de Conversion Courants par Portion",
      level: 3,
    },
    {
      type: "table",
      headers: ["Portions Origine", "Portions Cibles", "Facteur (FC)", "Difficulté"],
      rows: [
        ["2 personnes", "4 personnes", "x 2.0", "Faible (Linéaire)"],
        ["4 personnes", "6 personnes", "x 1.5", "Faible (Linéaire)"],
        ["4 personnes", "10 personnes", "x 2.5", "Moyenne (Vigilance épices)"],
        ["4 personnes", "25 personnes", "x 6.25", "Haute (Contextuelle)"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Erreurs Classiques en Doublant une Recette",
      html: "Si vous remarquez que le goût est trop intense après conversion—surtout pour le piment ou le sel—réduisez l'échelle de ces ingrédients spécifiques à 75%. Ne doublez jamais le temps de cuisson ; la température interne dépend de l'épaisseur de la pièce.",
    },
    {
      type: "title",
      text: "Glossaire de la Standardisation Culinaire",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Facteur de Conversion",
          definition: "Chiffre multiplicateur : Quantité Souhaitée / Quantité Originale.",
        },
        {
          term: "Ratio de Perte",
          definition: "Perte de poids liée à l'évaporation ou au gras. Ne suit pas une courbe linéaire.",
        },
        {
          term: "Poids Brut vs Net",
          definition: "Poids avant et après parage. On convertit toujours sur la base du poids net de la recette.",
        },
        {
          term: "Rendement de Production",
          definition: "Quantité totale de produit fini après mise à l'échelle et cuisson.",
        },
      ],
    },
    {
      type: "tip",
      title: "L'Astuce de l'Œuf Battu",
      html: "Si le calculateur demande 2,3 œufs, battez un œuf entier, pesez-le et n'utilisez que 30% du poids. C'est la seule façon de rester précis en pâtisserie fine.",
    },
    {
      type: "paragraph",
      html: "Notre outil simplifie les calculs pour vous permettre de vous concentrer sur l'essentiel : la créativité et le goût.",
    },
  ],
  schemas: [],
};
