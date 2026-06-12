import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Ice Cream PAC POD Calculator Cryo Formulation Guide";
const description = "Calculate anti-freezing power and sweetening power for ice cream. Formulate precise sugar profiles, solid percentage, and service temperatures.";
const faq = [
  {
    question: "What is PAC in ice cream formulation?",
    answer: "PAC stands for Potere Anticongelante, which represents the anti-freezing power. It determines how much water remains frozen at a given service temperature, controlling the physical hardness of the ice cream."
  },
  {
    question: "What is POD and why does it matter?",
    answer: "POD stands for Potere Dolcificante, representing the relative sweetening power. It measures sweetness relative to sucrose (table sugar), which has a baseline value of 100."
  },
  {
    question: "Why do we balance multiple sugars in ice cream?",
    answer: "Different sugars have unique PAC and POD characteristics. For example, dextrose offers high anti-freezing power with moderate sweetness, while sucrose provides standard body and sweetness. Mixing them allows control over creaminess without making the product overly sweet."
  },
  {
    question: "What is the optimal solids percentage for ice cream?",
    answer: "The total solids percentage typically ranges between 36% and 42%. A solid percentage below this range leads to icy textures, while a percentage above it can result in sandiness or heavy mouthfeel."
  }
];

const howTo = [
  {
    name: "Set base mix and service temperature",
    text: "Define the weight of your base liquid mix and input the target service temperature at which you intend to serve the ice cream."
  },
  {
    name: "Input sugar quantities",
    text: "Adjust sliders for different sugars like sucrose, dextrose, glucose, inverted sugar, and trehalose to build your recipe."
  },
  {
    name: "Analyze PAC and POD values",
    text: "Compare the computed PAC and POD values with the target values recommended for your target temperature."
  },
  {
    name: "Verify solids ratio and scoopability",
    text: "Ensure the total solids percentage is within the optimal zone and check the scoopability indicator to predict final texture."
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
  slug: 'ice-cream-pac-pod',
  title: 'Ice Cream PAC POD Calculator',
  description: 'Calculate anti-freezing power and sweetening power for ice cream. Formulate precise sugar profiles, solid percentage, and service temperatures.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: "Ice Cream Cryo Calculator",
    subtitle: "Precision cryo formulation dashboard for molecular gastronomy",
    unitLabel: "Unit System",
    metricUnit: "Metric (grams)",
    imperialUnit: "Imperial (ounces)",
    baseWeightLabel: "Base Mix Weight",
    targetTempLabel: "Service Temperature",
    sucroseLabel: "Sucrose",
    dextroseLabel: "Dextrose",
    glucoseLabel: "Glucose DE40",
    invertedLabel: "Inverted Sugar",
    trehaloseLabel: "Trehalose",
    pacLabel: "Anti-freezing Power (PAC)",
    podLabel: "Sweetening Power (POD)",
    solidsLabel: "Total Solids",
    targetPacLabel: "Target PAC",
    scoopabilityLabel: "Scoopability State",
    stoneState: "Hard as Stone",
    creamyState: "Perfect Creaminess",
    soupState: "Melting Soup",
    stoneDesc: "The anti-freezing power is too low for this temperature. The mix will freeze rock hard.",
    creamyDesc: "The balance of PAC is optimal. The ice cream will be scoopable and creamy.",
    soupDesc: "The anti-freezing power is too high. The ice cream will melt quickly and remain liquid.",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "°C",
    fLabel: "°F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Scientific Principles of Ice Cream Cryo Formulation and Glass Transition Phase Control',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ice cream is a complex multiphase thermodynamic emulsion consisting of air cells, fat globules, ice crystals, and an unfrozen concentrated serum phase. Achieving the perfect creaminess and scoopability requires careful control of the freezing point depression of the water within the mix. As the temperature drops below freezing, water starts crystallizing into ice. The concentration of dissolved solutes in the remaining liquid serum increases, which further lowers its freezing point. The balance between frozen water crystals and the unfrozen syrup phase determines the hardness and smoothness of the final product.',
    },
    {
      type: 'title',
      text: 'Understanding PAC: Anti Freezing Power and Depression Mathematics',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, or Potere Anticongelante, represents the anti freezing power of a solute relative to sucrose. Sucrose is designated as the reference standard with a PAC value of 100. The mechanism is governed by colligative properties, meaning the freezing point depression depends on the number of active molecules dissolved in water, rather than their mass. Monosaccharides like dextrose (molecular weight 180 g/mol) provide approximately twice as many molecules per gram as disaccharides like sucrose (molecular weight 342 g/mol), resulting in a PAC of 190. Higher PAC values mean more water remains liquid at a given temperature, preventing the ice cream from freezing rock hard.',
    },
    {
      type: 'title',
      text: 'Understanding POD: Sweetening Power and Sensory Balance',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, or Potere Dolcificante, is a metric measuring relative sweetness compared to sucrose (baseline of 100). When formulating high quality ice creams or gelatos, balancing sweetness is just as important as structural solidity. If a formulator only uses sucrose to lower the freezing point (increase PAC), the ice cream will become cloyingly sweet before it reaches the desired softness. To bypass this limitation, molecular gastronomy utilizes sugars like dextrose (POD 70), trehalose (POD 45), or atomized glucose DE40 (POD 40). These allow custom configuration of the freezing curve without overwhelming the palate.',
    },
    {
      type: 'title',
      text: 'Comparative Database of Common Cryo Formulation Sugars',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Sugar Type', 'Relative PAC', 'Relative POD', 'Solids Content (%)', 'Culinary Utility'],
      rows: [
        ['Sucrose', '100', '100', '100%', 'Standard body, clean sweet profile, standard baseline'],
        ['Dextrose', '190', '70', '100%', 'Depresses freezing point, increases softness, reduces sweetness'],
        ['Glucose DE40', '90', '40', '95%', 'Adds body, prevents recrystallization, increases viscosity'],
        ['Inverted Sugar', '190', '130', '70%', 'Adds softness, humectant properties, enhances fruit flavors'],
        ['Trehalose', '100', '45', '90%', 'Low sweetness body agent, protects proteins, clean finish'],
      ],
    },
    {
      type: 'title',
      text: 'Total Solids Ratio and Structural Emulsion Stability',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Total solids comprise all non water elements in the formulation, including fats, milk solids-not-fat, stabilizers, emulsifiers, and sugars. An optimal ice cream mix holds between 36% and 42% total solids. If solids are too low, the high water content leads to large ice crystal growth and a coarse texture. If solids are too high, the viscosity increases excessively, resulting in a heavy mouthfeel and potential sandiness due to lactose crystallization.',
    },
    {
      type: 'title',
      text: 'Practical Steps for Cryo Formulation Success',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Determine the target service temperature of your display cabinet. Gelatos are typically served at -12 degrees Celsius, while industrial ice creams are served colder at -18 degrees Celsius.',
        'Calculate the target PAC using the standard temperature formula. For -12 degrees Celsius, the target PAC is approximately 216.',
        'Select a blend of sugars. Combine sucrose for standard sweetness, dextrose to depress the freezing point, and glucose to improve body and texture.',
        'Verify that the total solids fall within the safe 36% to 42% range to ensure optimal aeration and a smooth melting profile on the tongue.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};

