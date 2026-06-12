import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Botulism Canning Safety Checker Thermal Death Calculator";
const description = "Calculate thermal spore reduction and F0 sterilization lethality for Clostridium botulinum. Assess low acid and acidic canning safety zones.";
const faq = [
  {
    question: "Why is Clostridium botulinum a major concern in home canning?",
    answer: "Clostridium botulinum is an anaerobic, spore forming bacterium that produces botulinum toxin, one of the most lethal biological substances known. Spores are extremely heat resistant and can survive in anaerobic conditions inside sealed jars if temperatures are insufficient."
  },
  {
    question: "What is the critical significance of pH 4.6 in food preservation?",
    answer: "Foods with a pH below 4.6 are classified as acidic. In these environments, Botulinum spores cannot germinate or produce toxins. For foods with a pH of 4.6 or higher, pressure canning is mandatory to reach temperatures above 116 degrees Celsius to destroy the spores."
  },
  {
    question: "What is the F0 sterilization lethality value?",
    answer: "The F0 value measures the equivalent sterilization time at 121.11 degrees Celsius. A standard low acid sterilization process requires an F0 value of 3.0 minutes or higher, representing a twelve decimal reduction in spore population."
  },
  {
    question: "Why can I not use a water bath for low acid foods?",
    answer: "Water bath canning only reaches boiling point (100 degrees Celsius). This temperature is insufficient to kill heat resistant spores of Clostridium botulinum in low acid foods. Spores will survive and produce toxin at room temperature."
  }
];

const howTo = [
  {
    name: "Input food acidity level",
    text: "Determine and enter the pH value of your ingredients. If the pH is equal to or greater than 4.6, the food is low acid."
  },
  {
    name: "Select canning technique",
    text: "Choose between water bath canning or pressure canning depending on your preservation equipment."
  },
  {
    name: "Define temperature and duration",
    text: "Enter the canning processing temperature and the time in minutes that the jars remain at that temperature."
  },
  {
    name: "Evaluate safety diagnostics",
    text: "Check the resulting F0 value, decimal spore reduction count, and safety zone indicator to confirm compliance."
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
  slug: 'botulism-canning-safety',
  title: 'Botulism Canning Safety Checker',
  description: 'Calculate thermal spore reduction and F0 sterilization lethality for Clostridium botulinum. Assess low acid and acidic canning safety zones.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: "Canning Autoclave Monitor",
    subtitle: "Thermal death diagnostics and botulinum safety evaluator",
    methodLabel: "Canning Method",
    waterBath: "Water Bath Canning",
    pressureCanner: "Pressure Canning",
    tempLabel: "Canning Temperature",
    timeLabel: "Processing Time",
    phLabel: "Food pH",
    f0Label: "F0 Lethality Value",
    dLabel: "Calculated D Value",
    sporesLabel: "Spore Population",
    statusSafe: "Sterilization Complete",
    statusMarginal: "Marginal Sterilization",
    statusUnsafe: "High Botulism Risk",
    statusSafeDesc: "Thermal lethality exceeds the target F0 of 3.0 minutes. Spores are fully deactivated.",
    statusMarginalDesc: "Process reaches partial deactivation but remains below the 12D safety standard. Adjust time or temperature.",
    statusUnsafeDesc: "Process fails to deactivate Clostridium botulinum. Low acid foods in water baths remain hazardous.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Decimal Reduction",
    dValueUnit: "minutes",
    indicatorSectionTitle: "Diagnostic Gauges",
    visualizerSectionTitle: "Spore Reduction",
    f0Tooltip: "Equivalent sterilization time in minutes at 121.11°C. Safe threshold is 3.0 or higher.",
    dTooltip: "Decimal reduction time: duration in minutes required to destroy 90% of spores at current temperature.",
    logReductionTooltip: "Count of decimal (10-fold) reductions. A 12D reduction is the safety standard.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Scientific Mechanisms of Thermal Processing and Spore Deactivation Kinetics',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Thermal processing in canning secures commercial sterility by destroying pathogenic and spoilage microorganisms. The primary focus of safety guidelines in low acid food preservation is Clostridium botulinum. Botulinum spores are highly heat resistant compared to vegetative cells. Deactivating these spores requires a thermal death time process that applies high temperature over a calculated duration. The mathematical relationship between temperature and deactivation rate is expressed through the decimal reduction time (D-value) and the temperature dependence factor (z-value).',
    },
    {
      type: 'title',
      text: 'Food Classification and the Crucial pH 4.6 Safety Threshold',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A pH value of 4.6 is the dividing line for preservation safety. Acidic foods below pH 4.6 naturally inhibit the germination and toxin production of Botulinum spores. For these foods, processing at 100 degrees Celsius in a boiling water bath is sufficient. However, low acid foods above pH 4.6 must undergo pressure canning to raise steam temperature and achieve full thermal spore destruction. The table below details the classifications and canning methods for common ingredients:',
    },
    {
      type: 'table',
      headers: ['Food Group', 'pH Range', 'Canning Method Required', 'Common Examples'],
      rows: [
        ['High Acid', 'Below 4.0', 'Water Bath Canning', 'Apples, Berries, Citrus, Peaches, Vinegar Pickles'],
        ['Acidified or Medium Acid', '4.0 to 4.6', 'Water Bath with Acid Adjustment', 'Tomatoes, Figs, Pears'],
        ['Low Acid', '4.6 and Above', 'Mandatory Pressure Canning', 'Meats, Seafood, Beans, Corn, Potatoes, Soups'],
      ],
    },
    {
      type: 'title',
      text: 'Altitude Adjustments and Boiling Point Safety Corrections',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'As altitude increases, atmospheric pressure decreases, causing the boiling point of water to drop below 100 degrees Celsius. In water bath canning, this lower temperature increases the D-value of spores, requiring longer processing times. In pressure canning, dial or weighted gauge settings must be increased to maintain the target internal sterilization temperature. Below is the reference guide for boiling points and required pressure canning adjustments:',
    },
    {
      type: 'table',
      headers: ['Altitude Range', 'Water Boiling Point', 'Required Dial Gauge Pressure', 'Required Weighted Gauge Pressure'],
      rows: [
        ['0 to 300 meters', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 to 600 meters', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 to 900 meters', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 to 1200 meters', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 to 1500 meters', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 to 2000 meters', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Why the 12D Spore Reduction Concept Prevents Botulism',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bacterial destruction by heat is logarithmic. The D-value represents the time required at a specific temperature to destroy 90% of the spore population, which equates to a one decimal log reduction. The reference standard for Clostridium botulinum is a D-value of 0.21 minutes at 121.11 degrees Celsius. To achieve high safety margins, commercial standards demand a twelve decimal reduction process (12D), meaning the spore population is reduced by twelve factors of ten. This yields a target F0 value of 3.0 minutes, which guarantees safety in low acid foods.',
    },
    {
      type: 'title',
      text: 'Practical Home Canning Guidelines and Safety Tips',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Always acidify tomatoes with lemon juice or citric acid before water bath processing, as their natural pH fluctuates close to the critical 4.6 threshold.',
        'Never shorten processing times or lower temperatures. Thermal death kinetics are logarithmic and minor adjustments can allow spores to survive.',
        'Ensure dial gauges on pressure canners are tested annually for accuracy, as incorrect pressure readings directly compromise internal sterilization temperatures.',
        'Compensate for altitude differences by adjusting processing times in water baths or increasing PSI settings on pressure canners.',
        'Avoid canning mixed recipes containing low acid ingredients like meats or beans in a water bath canner, even if the overall recipe contains acid.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
