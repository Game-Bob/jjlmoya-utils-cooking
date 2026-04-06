import type { ToolLocaleContent } from "../../../types";

export const content: ToolLocaleContent = {
  slug: "calculateur-meringue-proportions-sucre-blancs-oeuf",
  title: "Calculateur de Meringue et Blancs en Neige Professionnel",
  description:
    "Calculez la quantité exacte de sucre pour une meringue française, italienne ou suisse selon le poids de vos blancs d'œufs. Maîtrisez le bec d'oiseau.",
  ui: {
    whitesLabel: "Poids des Blancs d'Œufs",
    whitesPlaceholder: "Ex. 120",
    whitesUnit: "g",
    typeLabel: "Type de Meringue",
    typeFrench: "Française",
    typeItalian: "Italienne",
    typeSwiss: "Suisse",
    timesHeading: "Temps Estimés (Fouettage à vitesse moyenne-haute)",
    stageSpumado: "Moussu",
    stageSpumadoDesc: "Grosses bulles, comme de l'eau savonneuse.",
    stageSoftPeaks: "Bec d'Oiseau",
    stageSoftPeaksDesc: "La pointe retombe doucement en formant un bec.",
    stageStiffPeaks: "Ferme (En Neige)",
    stageStiffPeaksDesc: "Pointe droite, ferme et brillante.",
    frenchSugarWhite: "Sucre Semoule",
    frenchSugarPowder: "Sucre Glace",
    frenchTip: "La meringue française est la plus simple. Idéale pour les meringues cuites ou les biscuits. Ne pas consommer crue.",
    frenchTime1: "1-2 min",
    frenchTime2: "3-5 min",
    frenchTime3: "7-9 min",
    italianSugarSyrup: "Sucre pour Sirop",
    italianWater: "Eau",
    italianTip: "La meringue italienne est la plus stable. Réalisée avec un sirop à 118°C. Parfaite pour décorer les entremets.",
    italianTime1: "2 min",
    italianTime2: "5 min",
    italianTime3: "10-12 min",
    swissSugarWhite: "Sucre Semoule",
    swissMaxTemp: "Temp Max",
    swissTip: "La meringue suisse est chauffée au bain-marie jusqu'à dissolution du sucre. Très soyeuse, idéale pour les crèmes.",
    swissTime1: "1-2 min",
    swissTime2: "4-6 min",
    swissTime3: "8-10 min",
    invalidWeightError: "Entrez un poids valide",
  },
  faqTitle: "Questions Fréquentes sur la Meringue",
  faq: [
    {
      question: "Quel est le ratio idéal blancs/sucre ?",
      answer: "Le standard professionnel est un ratio de 1:2. Pour chaque gramme de blanc d'œuf, utilisez deux grammes de sucre pour assurer une structure stable et ferme.",
    },
    {
      question: "Comment savoir si les blancs sont assez fermes ?",
      answer: "Les blancs sont prêts quand ils forment une pointe verticale qui ne se courbe pas. Le mélange doit être très brillant, dense, et rester dans le bol même retourné.",
    },
    {
      question: "Quelle meringue choisir pour un décor ?",
      answer: "La meringue italienne est privilégiée car le sirop chaud 'cuit' les protéines, ce qui la rend stable et résistante à l'humidité pendant des heures.",
    },
    {
      question: "Pourquoi mes blancs ne montent-ils pas ?",
      answer: "La moindre trace de gras (jaune d'œuf, résidus sur le matériel) empêche la formation de la mousse. Utilisez toujours un bol en métal ou en verre parfaitement propre.",
    },
  ],
  howTo: [
    {
      name: "Pesez vos blancs d'œufs",
      text: "Utilisez une balance digitale. Une différence de 5g modifie déjà la quantité de sucre nécessaire.",
    },
    {
      name: "Calculez le sucre",
      text: "Entrez le poids dans l'outil pour obtenir les mesures exactes de sucre semoule et/ou glace.",
    },
    {
      name: "Choisissez la technique",
      text: "Française pour la cuisson simple, Italienne pour la stabilité, ou Suisse pour les crèmes soyeuses.",
    },
    {
      name: "Fouettez jusqu'au brillant",
      text: "Suivez le guide des temps jusqu'à obtenir une pointe ferme et verticale (le fameux bec d'oiseau).",
    },
  ],
  bibliographyTitle: "Sources Techniques et Références",
  bibliography: [
    {
      name: "Le Journal du Pâtissier - Science du Merengue",
      url: "https://www.lejournaldupatissier.com/",
    },
    {
      name: "Exploratorium - La science des œufs",
      url: "https://www.exploratorium.edu/explore/cooking/egg-science",
    },
    {
      name: "Mercotte - Tout savoir sur les meringues",
      url: "https://www.mercotte.fr/",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Guide Maître pour les Proportions de Meringue et Blancs en Neige",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Maîtriser les <strong>blancs en neige</strong> et les différentes méthodes de meringue est la base de la haute pâtisserie. La clé réside dans la précision du poids des blancs et le dosage exact du sucre pour stabiliser les protéines.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "1:2",
          label: "Ratio Blanc:Sucre",
          icon: "mdi:scale-balance",
        },
        {
          value: "118°C",
          label: "Sirop Italien",
          icon: "mdi:thermometer-high",
        },
        {
          value: "60°C",
          label: "Bain-Marie Suisse",
          icon: "mdi:beaker-question-outline",
        },
        {
          value: "0%",
          label: "Tolérance au Gras",
          icon: "mdi:close-circle-outline",
        },
      ],
    },
    {
      type: "title",
      text: "Comparaison des Techniques de Meringue",
      level: 3,
    },
    {
      type: "comparative",
      columns: 3,
      items: [
        {
          title: "Meringue Française",
          icon: "mdi:baguette",
          description: "La plus simple mais la moins stable. Blancs et sucre fouettés à froid.",
          points: [
            "Idéale pour les meringues cuites",
            "Texture légère et aérée",
            "Nécessite une cuisson",
            "Rapide à préparer",
          ],
        },
        {
          title: "Meringue Italienne",
          icon: "mdi:pizza",
          description: "La plus stable. Utilise un sirop de sucre au boulé.",
          highlight: true,
          points: [
            "Parfaite pour les décors",
            "Consommable sans cuisson",
            "Résiste mieux à l'humidité",
            "Brillance miroir et densité",
          ],
        },
        {
          title: "Meringue Suisse",
          icon: "mdi:cheese",
          description: "Chauffée au bain-marie. Équilibre entre facilité et stabilité.",
          points: [
            "Base pour crèmes au beurre",
            "Texture très soyeuse",
            "Excellente pour les fourrages",
            "Sécurité alimentaire accrue",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Étapes Visuelles du Montage des Blancs",
      level: 3,
    },
    {
      type: "table",
      headers: ["Étape", "Description Visuelle", "Usage Recommandé", "Stabilité"],
      rows: [
        ["Moussu", "Grosses bulles transparentes", "Ajouter l'acide/sucre", "Nulle"],
        ["Bec d'Oiseau", "La pointe se courbe vers le bas", "Mousses et soufflés", "Moyenne"],
        ["Ferme / Neige", "Pointe verticale et rigide", "Décor et cuisson", "Haute"],
        ["Grainé", "Texture sèche et grumeleuse", "Inutilisable (brisé)", "Effondrement"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Votre Meringue rejette-t-elle du Liquide ?",
      html: "Si vous voyez du sirop s'échapper (synérèse), c'est soit que le sucre n'était pas dissous, soit que l'humidité ambiante est trop forte. Pour l'italienne, versez le sirop en filet constant, jamais directement sur le fouet.",
    },
    {
      type: "title",
      text: "Glossaire de la Pâtisserie Technique",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Ovalbumine",
          definition: "Principale protéine du blanc d'œuf responsable de l'emprisonnement de l'air.",
        },
        {
          term: "Hygroscopique",
          definition: "Propriété du sucre à absorber l'humidité de l'air, ce qui peut ramollir la meringue.",
        },
        {
          term: "Crème de Tartre",
          definition: "Sel acide qui aide à stabiliser la mousse et évite de 'grainer' les blancs.",
        },
        {
          term: "Bain-Marie",
          definition: "Méthode de chauffe douce cruciale pour dissoudre le sucre de la meringue suisse.",
        },
      ],
    },
    {
      type: "tip",
      title: "L'Astuce du Bol au Vinaigre",
      html: "Passez un papier absorbant avec un peu de vinaigre ou de citron dans votre bol avant de commencer. Le moindre résidu de gras tuera votre mousse.",
    },
    {
      type: "paragraph",
      html: "Notre calculateur automatise les calculs pour que vous puissiez vous concentrer sur le fouettage jusqu'au brillant parfait.",
    },
  ],
  schemas: [],
};
