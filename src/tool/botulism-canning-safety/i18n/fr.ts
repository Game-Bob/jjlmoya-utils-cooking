import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculateur de Securite des Conserves Botulisme Mort Thermique";
const description = "Calcule la reduction thermique des spores et la letalite de sterilisation F0 pour Clostridium botulinum. Evalue les zones de securite pour les conserves peu acides et acides.";
const faq = [
  {
    question: "Pourquoi Clostridium botulinum est il une preoccupation majeure dans les conserves maison?",
    answer: "Clostridium botulinum est une bacterie anaerobie sporulante qui produit la toxine botulique, l une des substances biologiques les plus letales connues. Les spores sont extremement resistantes a la chaleur et peuvent survivre dans des conditions anaerobies a l interieur des bocaux scelles si les temperatures sont insuffisantes."
  },
  {
    question: "Quelle est l importance cruciale du pH 4.6 dans la conservation des aliments?",
    answer: "Les aliments dont le pH est inferieur a 4.6 sont classes comme acides. Dans ces environnements, les spores de Botulinum ne peuvent ni germer ni produire de toxines. Pour les aliments dont le pH est de 4.6 ou plus, la mise en conserve sous pression est obligatoire pour atteindre des temperatures superieures a 116 degres Celsius afin de detruire les spores."
  },
  {
    question: "Qu est ce que la valeur de letalite de sterilisation F0?",
    answer: "La valeur F0 mesure le temps de sterilisation equivalent a 121.11 degres Celsius. Un processus standard de sterilisation pour aliments peu acides requiert une valeur F0 de 3.0 minutes ou plus, representant une reduction decimale de douze de la population de spores."
  },
  {
    question: "Pourquoi ne puis je pas utiliser un bain marie pour les aliments peu acides?",
    answer: "La mise en conserve au bain marie n atteint que le point d ebullition (100 degres Celsius). Cette temperature est insuffisante pour tuer les spores resistantes a la chaleur de Clostridium botulinum dans les aliments peu acides. Les spores survivent et produisent des toxines a temperature ambiante."
  }
];

const howTo = [
  {
    name: "Saisir le niveau d acidite de l aliment",
    text: "Determine et entre la valeur du pH de tes ingredients. Si le pH est egal ou superieur a 4.6, l aliment est peu acide."
  },
  {
    name: "Choisir la technique de mise en conserve",
    text: "Selectionne entre la mise en conserve au bain marie ou sous pression selon ton equipement de conservation."
  },
  {
    name: "Definir la temperature et la duree",
    text: "Entre la temperature de traitement et le temps en minutes pendant lequel les bocaux restent a cette temperature."
  },
  {
    name: "Evaluer les diagnostics de securite",
    text: "Verifie la valeur F0 resultante, le nombre de reductions decimales des spores et l indicateur de zone de securite pour confirmer la conformite."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'securite-conserves-botulisme',
  title: 'Calculateur de Securite des Conserves Botulisme',
  description: 'Calcule la reduction thermique des spores et la letalite de sterilisation F0 pour Clostridium botulinum. Evalue les zones de securite pour les conserves peu acides et acides.',
  faqTitle: 'Questions Frequentes',
  ui: {
    title: "Moniteur d Autoclave pour Conserves",
    subtitle: "Diagnostics de mort thermique et evaluateur de securite botulique",
    methodLabel: "Methode de Mise en Conserve",
    waterBath: "Mise en Conserve au Bain Marie",
    pressureCanner: "Mise en Conserve sous Pression",
    tempLabel: "Temperature de Traitement",
    timeLabel: "Temps de Traitement",
    phLabel: "pH de l Aliment",
    f0Label: "Valeur de Letalite F0",
    dLabel: "Valeur D Calculee",
    sporesLabel: "Population de Spores",
    statusSafe: "Sterilisation Complete",
    statusMarginal: "Sterilisation Marginale",
    statusUnsafe: "Risque Eleve de Botulisme",
    statusSafeDesc: "La letalite thermique depasse la cible F0 de 3.0 minutes. Les spores sont entierement desactivees.",
    statusMarginalDesc: "Le processus atteint une desactivation partielle mais reste en dessous de la norme de securite 12D. Ajuste le temps ou la temperature.",
    statusUnsafeDesc: "Le processus ne desactive pas Clostridium botulinum. Les aliments peu acides dans les bains marie restent dangereux.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Reduction Decimale",
    dValueUnit: "minutes",
    indicatorSectionTitle: "Indicateurs de Diagnostic",
    visualizerSectionTitle: "Reduction des Spores",
    f0Tooltip: "Temps de sterilisation equivalent en minutes a 121.11°C. Le seuil de securite est de 3.0 ou plus.",
    dTooltip: "Temps de reduction decimale: duree en minutes necessaire pour detruire 90% des spores a la temperature actuelle.",
    logReductionTooltip: "Nombre de reductions decimales (facteur 10). Une reduction 12D est la norme de securite.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mecanismes Scientifiques du Traitement Thermique et de la Cinetique de Desactivation des Spores',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Le traitement thermique dans la mise en conserve assure la sterilite commerciale en detruisant les micro organismes pathogenes et d alteration. L objectif principal des directives de securite dans la conservation des aliments peu acides est Clostridium botulinum. Les spores de Botulinum sont tres resistantes a la chaleur par rapport aux cellules vegetatives. Desactiver ces spores necessite un processus de temps de mort thermique qui applique une temperature elevee pendant une duree calculee. La relation mathematique entre la temperature et le taux de desactivation est exprimee par le temps de reduction decimale (valeur D) et le facteur de dependance a la temperature (valeur z).',
    },
    {
      type: 'title',
      text: 'Classification des Aliments et le Seuil Critique de Securite pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une valeur de pH de 4.6 est la ligne de demarcation pour la securite de la conservation. Les aliments acides dont le pH est inferieur a 4.6 inhibent naturellement la germination et la production de toxine des spores de Botulinum. Pour ces aliments, un traitement a 100 degres Celsius dans un bain marie bouillant est suffisant. Cependant, les aliments peu acides dont le pH est superieur a 4.6 doivent subir une mise en conserve sous pression pour elever la temperature de la vapeur et obtenir une destruction thermique complete des spores. Le tableau ci dessous detaille les classifications et les methodes de mise en conserve pour les ingredients courants:',
    },
    {
      type: 'table',
      headers: ['Groupe d Aliment', 'Plage de pH', 'Methode de Conservation Requise', 'Exemples Courants'],
      rows: [
        ['Haute Acidite', 'En dessous de 4.0', 'Bain Marie', 'Pommes, Baies, Agrumes, Peches, Cornichons'],
        ['Acidifies ou Acidite Moyenne', '4.0 a 4.6', 'Bain Marie avec Ajustement Acide', 'Tomates, Figues, Poires'],
        ['Peu Acides', '4.6 et plus', 'Conserve sous Pression Obligatoire', 'Viandes, Fruits de Mer, Haricots, Mais, Pommes de Terre, Soupes'],
      ],
    },
    {
      type: 'title',
      text: 'Ajustements d Altitude et Corrections de Securite du Point d Ebulition',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A mesure que l altitude augmente, la pression atmospherique diminue, ce qui abaisse le point d ebulition de l eau en dessous de 100 degres Celsius. Dans la mise en conserve au bain marie, cette temperature plus basse augmente la valeur D des spores, necessitant des temps de traitement plus longs. Dans la mise en conserve sous pression, les reglages du manometre a cadran ou a poids doivent etre augmentes pour maintenir la temperature interne de sterilisation cible. Vous trouverez ci dessous le guide de reference pour les points d ebulition et les ajustements necessaires de la mise en conserve sous pression:',
    },
    {
      type: 'table',
      headers: ['Plage d Altitude', 'Point d Ebulition de l Eau', 'Pression Requise Manometre a Cadran', 'Pression Requise Manometre a Poids'],
      rows: [
        ['0 a 300 metres', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 a 600 metres', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 a 900 metres', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 a 1200 metres', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 a 1500 metres', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 a 2000 metres', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Pourquoi le Concept de Reduction des Spores 12D Previent le Botulisme',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La destruction bacterienne par la chaleur est logarithmique. La valeur D represente le temps necessaire a une temperature specifique pour detruire 90% de la population de spores, ce qui equivaut a une reduction logarithmique decimale. La norme de reference pour Clostridium botulinum est une valeur D de 0.21 minute a 121.11 degres Celsius. Pour atteindre des marges de securite elevees, les normes commerciales exigent un processus de reduction decimale de douze (12D), ce qui signifie que la population de spores est reduite de douze facteurs de dix. Cela donne une valeur F0 cible de 3.0 minutes, qui garantit la securite dans les aliments peu acides.',
    },
    {
      type: 'title',
      text: 'Guide Pratique de Mise en Conserve Maison et Conseils de Securite',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Acidifie toujours les tomates avec du jus de citron ou de l acide citrique avant le traitement au bain marie, car leur pH naturel fluctue pres du seuil critique de 4.6.',
        'Ne reduis jamais les temps de traitement ni les temperatures. La cinetique de mort thermique est logarithmique et des ajustements mineurs peuvent permettre aux spores de survivre.',
        'Assure toi que les manometres a cadran des autoclaves sont testes annuellement pour leur precision, car des lectures de pression incorrectes compromettent directement les temperatures internes de sterilisation.',
        'Compense les differences d altitude en ajustant les temps de traitement dans les bains marie ou en augmentant les reglages de PSI sur les autoclaves.',
        'Evite de mettre en conserve des recettes mixtes contenant des ingredients peu acides comme des viandes ou des haricots dans un autoclave a bain marie, meme si la recette globale contient de l acide.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
