import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Courbe de tempérage du chocolat et guide d'ensemencement";
const description = "Maîtrisez le tempérage du chocolat à la maison. Calculez le poids des pistoles d'ensemencement et suivez les courbes de température thermodynamiques pour le chocolat noir, au lait et blanc.";
const faq = [
  {
    "question": "Qu'est-ce que le tempérage du chocolat ?",
    "answer": "Le tempérage du chocolat est le processus de chauffage, de refroidissement et de réchauffement doux du chocolat pour contrôler la cristallisation du beurre de cacao. Cela force les molécules de graisse à cristalliser en cristaux stables de forme V (Bêta), donnant au chocolat un aspect brillant, un cassant net et l'empêchant de fondre facilement à température ambiante."
  },
  {
    "question": "Qu'est-ce que la méthode d'ensemencement ?",
    "answer": "La méthode d'ensemencement consiste à faire fondre une partie du chocolat, puis à ajouter des morceaux de chocolat solide déjà tempéré (graines ou pistoles) pendant la phase de refroidissement. Ces cristaux solides servent de modèle, guidant les molécules de graisse fondue à se figer dans la structure cristalline stable de forme V souhaitée sans nécessiter de marbre."
  },
  {
    "question": "Pourquoi mon chocolat a-t-il des traces blanches (blanchiment gras) ?",
    "answer": "Les traces ou taches blanches sont appelées blanchiment gras. Cela se produit lorsque le chocolat n'est pas correctement tempéré, ce qui permet aux cristaux de beurre de cacao instables de remonter à la surface et de se recristalliser. Il reste propre à la consommation mais perd sa texture et son éclat."
  },
  {
    "question": "Puis-je tempérer du chocolat qui a déjà blanchi ?",
    "answer": "Oui. Le blanchiment est une simple séparation physique des cristaux de graisse ou de sucre, pas une altération chimique. Faire fondre complètement le chocolat blanchi à sa température de fusion appropriée (environ 45-50°C) brise toutes les structures cristallines instables, ce qui vous permet de recommencer le processus de tempérage à zéro."
  },
  {
    "question": "Comment l'humidité et la température de la cuisine affectent-elles le tempérage ?",
    "answer": "Le chocolat est extrêmement sensible à l'environnement. La température idéale de la cuisine pour le tempérage se situe entre 18°C et 22°C avec une humidité relative inférieure à 50%. Une humidité élevée peut provoquer de la condensation d'eau sur le chocolat, entraînant un blanchiment sucrier ou le figeage du chocolat en une pâte épaisse et inutilisable."
  },
  {
    "question": "Puis-je utiliser des pépites de chocolat classiques pour le tempérage ?",
    "answer": "Les pépites de chocolat de supermarché contiennent souvent des stabilisants et moins de beurre de cacao pour conserver leur forme à la cuisson. Pour un tempérage réussi, un brillant parfait et un cassant net, il est fortement recommandé d'utiliser du chocolat de couverture professionnel contenant au moins 31% de beurre de cacao."
  }
];

const howTo = [
  {
    "name": "Choisir le type de chocolat",
    "text": "Sélectionnez chocolat noir, au lait ou blanc pour charger les seuils de température spécifiques."
  },
  {
    "name": "Saisir le poids total",
    "text": "Saisissez le poids total cible de chocolat tempéré que vous souhaitez préparer."
  },
  {
    "name": "Phase de fonte",
    "text": "Faites fondre 75% du chocolat (comme calculé) à la température cible (ex. 50C pour le noir) pour briser toutes les structures cristallines."
  },
  {
    "name": "Phase de refroidissement et ensemencement",
    "text": "Faites refroidir le chocolat fondu tout en y incorporant les 25% restants de pistoles solides jusqu'à atteindre la température de refroidissement."
  },
  {
    "name": "Phase de travail",
    "text": "Réchauffez doucement le chocolat à la température de travail pour faire fondre les cristaux instables avant de l'utiliser."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qu'est-ce que le tempérage du chocolat ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le tempérage du chocolat est le processus de chauffage, de refroidissement et de réchauffement doux du chocolat pour contrôler la cristallisation du beurre de cacao. Cela force les molécules de graisse à cristalliser en cristaux stables de forme V (Bêta), donnant au chocolat un aspect brillant, un cassant net et l'empêchant de fondre facilement à température ambiante."
      }
    },
    {
      "@type": "Question",
      "name": "Qu'est-ce que la méthode d'ensemencement ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "La méthode d'ensemencement consiste à faire fondre une partie du chocolat, puis à ajouter des morceaux de chocolat solide déjà tempéré (graines ou pistoles) pendant la phase de refroidissement. Ces cristaux solides servent de modèle, guidant les molécules de graisse fondue à se figer dans la structure cristalline stable de forme V souhaitée sans nécessiter de marbre."
      }
    },
    {
      "@type": "Question",
      "name": "Pourquoi mon chocolat a-t-il des traces blanches (blanchiment gras) ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les traces ou taches blanches sont appelées blanchiment gras. Cela se produit lorsque le chocolat n'est pas correctement tempéré, ce qui permet aux cristaux de beurre de cacao instables de remonter à la surface et de se recristalliser. Il reste propre à la consommation mais perd sa texture et son éclat."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je tempérer du chocolat qui a déjà blanchi ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui. Le blanchiment est une simple séparation physique des cristaux de graisse ou de sucre, pas une altération chimique. Faire fondre complètement le chocolat blanchi à sa température de fusion appropriée (environ 45-50°C) brise toutes les structures cristallines instables, ce qui vous permet de recommencer le processus de tempérage à zéro."
      }
    },
    {
      "@type": "Question",
      "name": "Comment l'humidité et la température de la cuisine affectent-elles le tempérage ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le chocolat est extrêmement sensible à l'environnement. La température idéale de la cuisine pour le tempérage se situe entre 18°C et 22°C avec une humidité relative inférieure à 50%. Une humidité élevée peut provoquer de la condensation d'eau sur le chocolat, entraînant un blanchiment sucrier ou le figeage du chocolat en une pâte épaisse et inutilisable."
      }
    },
    {
      "@type": "Question",
      "name": "Puis-je utiliser des pépites de chocolat classiques pour le tempérage ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Les pépites de chocolat de supermarché contiennent souvent des stabilisants et moins de beurre de cacao pour conserver leur forme à la cuisson. Pour un tempérage réussi, un brillant parfait et un cassant net, il est fortement recommandé d'utiliser du chocolat de couverture professionnel contenant au moins 31% de beurre de cacao."
      }
    }
  ]
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Courbe de tempérage du chocolat et guide d'ensemencement",
  "description": "Maîtrisez le tempérage du chocolat à la maison. Calculez le poids des pistoles d'ensemencement et suivez les courbes de température thermodynamiques pour le chocolat noir, au lait et blanc.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choisir le type de chocolat",
      "text": "Sélectionnez chocolat noir, au lait ou blanc pour charger les seuils de température spécifiques."
    },
    {
      "@type": "HowToStep",
      "name": "Saisir le poids total",
      "text": "Saisissez le poids total cible de chocolat tempéré que vous souhaitez préparer."
    },
    {
      "@type": "HowToStep",
      "name": "Phase de fonte",
      "text": "Faites fondre 75% du chocolat (comme calculé) à la température cible (ex. 50C pour le noir) pour briser toutes les structures cristallines."
    },
    {
      "@type": "HowToStep",
      "name": "Phase de refroidissement et ensemencement",
      "text": "Faites refroidir le chocolat fondu tout en y incorporant les 25% restants de pistoles solides jusqu'à atteindre la température de refroidissement."
    },
    {
      "@type": "HowToStep",
      "name": "Phase de travail",
      "text": "Réchauffez doucement le chocolat à la température de travail pour faire fondre les cristaux instables avant de l'utiliser."
    }
  ]
};

const appSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Courbe de tempérage du chocolat et guide d'ensemencement",
  "description": "Maîtrisez le tempérage du chocolat à la maison. Calculez le poids des pistoles d'ensemencement et suivez les courbes de température thermodynamiques pour le chocolat noir, au lait et blanc.",
  "applicationCategory": "UtilitiesApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "EUR"
  }
};

export const content: ToolLocaleContent = {
  slug: 'guide-courbe-temperage-chocolat',
  title,
  description,
  faqTitle: 'Questions fréquemment posées',
  ui: {
  "title": "Assistant de Tempérage du Chocolat",
  "subtitle": "Courbes thermodynamiques et calculateur d'ensemencement",
  "chocolateTypeLabel": "Type de Chocolat",
  "totalWeightLabel": "Poids total cible",
  "meltLabel": "Phase de Fonte",
  "coolLabel": "Phase de Refroidissement & Ensemencement",
  "workLabel": "Phase de Travail",
  "meltTempLabel": "Temp. de Fonte",
  "coolTempLabel": "Temp. de Refroidissement",
  "workTempLabel": "Temp. de Travail",
  "meltWeightLabel": "Poids à fondre",
  "seedWeightLabel": "Poids d'ensemencement (pistoles)",
  "molecularLabel": "État de cristallisation moléculaire",
  "seedingTitle": "Calculateur de la méthode d'ensemencement (25%)",
  "stepTitle": "Étapes de tempérage",
  "darkOption": "Chocolat Noir",
  "milkOption": "Chocolat au Lait",
  "whiteOption": "Chocolat Blanc",
  "resetButton": "Réinitialiser le guide",
  "warningOverheated": "Attention: La température est trop élevée ! Vous risquez de brûler les matières sèches de cacao ou de dénaturer les protéines du lait.",
  "warningUnderheated": "Attention: La température est trop basse. Les cristaux stables ne se seront pas formés ou le chocolat se solidifiera trop tôt.",
  "interactiveInfo": "Interagissez avec les étapes ou glissez le thermomètre pour prévisualiser les phases moléculaires"
},
  faq,
  howTo,
  seo: [
  {
    "type": "title",
    "text": "Thermodynamique de la cristallisation du beurre de cacao",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Le beurre de cacao est polymorphe, ce qui signifie qu'il peut se solidifier en six formes cristallines différentes (I à VI). Chaque forme a un point de fusion et une stabilité moléculaire uniques. Le but du tempérage est de maximiser les cristaux de forme V (Bêta) tout en supprimant les formes instables I à IV. Les cristaux de forme V procurent le brillant brillant, la texture ferme et le cassant net caractéristiques du chocolat de qualité professionnelle."
  },
  {
    "type": "stats",
    "columns": 4,
    "items": [
      {
        "value": "Forme V",
        "label": "Cristal Bêta cible",
        "icon": "mdi:hexagon-multiple-outline"
      },
      {
        "value": "25-30%",
        "label": "Ratio d'ensemencement",
        "icon": "mdi:scale"
      },
      {
        "value": "31-32°C",
        "label": "Temp. de travail noir",
        "icon": "mdi:thermometer"
      },
      {
        "value": "0.1-0.2C",
        "label": "Taux de refroidissement/min",
        "icon": "mdi:trending-down"
      }
    ]
  },
  {
    "type": "title",
    "text": "Les six formes cristallines polymorphes du beurre de cacao",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Comprendre la thermodynamique de chaque forme cristalline est essentiel pour éviter les échecs de tempérage. Voici une analyse scientifique des formes cristallines du beurre de cacao :"
  },
  {
    "type": "table",
    "headers": [
      "Forme",
      "Nom de la structure",
      "Point de fusion",
      "Stabilité & texture"
    ],
    "rows": [
      [
        "Forme I",
        "Gamma (γ)",
        "17°C (62.6°F)",
        "Très instable, mou, fond instantanément dans la main, pas de cassant."
      ],
      [
        "Forme II",
        "Alpha (α)",
        "21°C (69.8°F)",
        "Instable, mou, structure friable, fond très facilement."
      ],
      [
        "Forme III",
        "Bêta Prime (β')",
        "25.5°C (77.9°F)",
        "Instable, ferme mais manque de cassant, surface terne."
      ],
      [
        "Forme IV",
        "Bêta Prime (β')",
        "27.3°C (81.1°F)",
        "Instable, ferme, fond légèrement trop facilement, peu de brillant."
      ],
      [
        "Forme V",
        "Bêta (β)",
        "33.8°C (92.8°F)",
        "Très stable, brillant parfait, cassant net (Forme recherchée)."
      ],
      [
        "Forme VI",
        "Bêta (β)",
        "36.3°C (97.3°F)",
        "La plus stable, dur, se développe sur plusieurs mois, cause le blanchiment gras."
      ]
    ]
  },
  {
    "type": "title",
    "text": "Comprendre la méthode d'ensemencement",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "La méthode d'ensemencement est une technique très fiable pour tempérer le chocolat sans marbre de travail. En réservant 25% du poids total du chocolat sous forme de pistoles solides non fondues, vous introduisez une grande concentration de cristaux stables de forme V directement dans le chocolat chaud. En remuant, ces graines agissent comme des modèles, incitant les graisses fondues à copier cette structure stable."
  },
  {
    "type": "title",
    "text": "La science étape par étape de la courbe de tempérage",
    "level": 2
  },
  {
    "type": "list",
    "items": [
      "<strong>Phase 1: Fonte (T > 40°C) :</strong> Le chauffage du chocolat fait fondre complètement toutes les structures cristallines existantes (formes I à VI). Cela crée un état de graisse liquide amorphe, vous permettant de démarrer sur une page blanche.",
      "<strong>Phase 2: Refroidissement et ensemencement (T ≈ 27°C) :</strong> Le refroidissement du chocolat amorce la cristallisation. L'ajout de 25% de pistoles solides introduit des cristaux de forme V préformés qui servent de modèles pour stabiliser la cristallisation.",
      "<strong>Phase 3: Réchauffement et travail (T ≈ 31°C) :</strong> Le réchauffement doux fait fondre les cristaux instables de forme IV formés lors du refroidissement. Cela ne laisse que les cristaux stables de forme V, assurant un brillant et un cassant parfaits."
    ]
  },
  {
    "type": "title",
    "text": "Méthodes pratiques de tempérage à la maison",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Bien que les cuisines industrielles utilisent des tempéreuses, les cuisiniers amateurs peuvent obtenir des résultats professionnels grâce à ces trois méthodes courantes. Utilisez notre calculateur ci-dessus pour mesurer vos poids avec précision :"
  },
  {
    "type": "list",
    "items": [
      "<strong>Méthode du bain-marie :</strong> Placez 75% du chocolat dans un bol résistant à la chaleur posé sur une casserole d'eau frémissante. Assurez-vous que le fond du bol ne touche pas l'eau et qu'aucune vapeur ne s'échappe. Chauffez jusqu'à la température de fonte, retirez du feu, essuyez le dessous du bol et incorporez les 25% de chocolat d'ensemencement. Remuez constamment jusqu'à refroidissement, puis remettez brièvement au bain-marie pour atteindre la température de travail.",
      "<strong>Méthode du micro-ondes :</strong> Placez 75% du chocolat dans un bol en plastique adapté au micro-ondes. Chauffez par tranches de 15 à 30 secondes à 50% de puissance, en remuant bien entre chaque intervalle. Une fois fondu à la température cible, incorporez les 25% de pistoles d'ensemencement et remuez continuellement. Réchauffez par tranches de 5 à 10 secondes pour atteindre la température de travail.",
      "<strong>Méthode sous vide :</strong> Placez tout le chocolat dans un sachet scellé sous vide. Réglez le bain marie sous vide à la température de fonte jusqu'à ce qu'il soit entièrement fondu. Abaissez la température à la température de refroidissement en ajoutant de la glace, et malaxez le sac régulièrement. Enfin, augmentez la température du bain à la température de travail."
    ]
  },
  {
    "type": "title",
    "text": "Comment tester le tempérage du chocolat",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Avant de mouler votre chocolat ou d'enrober vos confiseries, vous devez toujours tester s'il est bien tempéré. Trempez la pointe d'un couteau propre, d'une spatule métallique ou d'une bande de papier sulfurisé dans le chocolat. Laissez reposer à température ambiante (18-22°C). S'il est bien tempéré, le chocolat se figera uniformément en 3 à 5 minutes, affichant un fini brillant, sec au toucher et un cassant net. S'il reste collant ou présente des traces après 5 minutes, il n'est pas tempéré et doit être refondu."
  },
  {
    "type": "title",
    "text": "Résolution des problèmes courants de tempérage",
    "level": 2
  },
  {
    "type": "paragraph",
    "html": "Si le chocolat n'est pas tempéré correctement, le beurre de cacao se sépare et migre à la surface, créant un voile blanc terne appelé <em>blanchiment gras</em>. Si votre chocolat est terne ou mou, il n'est pas tempéré. Vous pouvez y remédier en le faisant fondre à nouveau et en recommençant le processus."
  }
],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
