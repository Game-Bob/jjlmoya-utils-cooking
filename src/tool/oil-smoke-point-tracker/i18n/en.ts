import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Oil Smoke Point Tracker: Deep Frying Oil Lifespan & Degradation Estimator';
const description = 'Monitor deep frying oil quality and estimate current smoke point declines. Track uses, temperatures, and food types to prevent harmful polar compound accumulation.';

const faq = [
  {
    question: 'Why does frying oil smoke point drop over time?',
    answer: 'Every time oil is heated to frying temperatures, thermal degradation, hydrolysis, and oxidation break down triglycerides into free fatty acids (FFAs), monoacylglycerols, and diacylglycerols. These breakdown products have a much lower boiling and smoke point than intact triglycerides, causing the oil to smoke at lower temperatures with repeated use.',
  },
  {
    question: 'What are polar compounds and why are they regulated?',
    answer: 'Polar compounds (TPC) are the degradation products formed during frying. When they exceed 25% of the oil weight, the oil is considered degraded, oxidized, and harmful to consume, causing off-flavors and potential cardiovascular risks. Many European countries legally mandate discarding frying oil when TPC exceeds 25%.',
  },
  {
    question: 'How does breading or flour affect oil degradation?',
    answer: 'Breading, batters, and loose flour drop food particles into the hot oil. These particles quickly char and carbonize at temperatures above 180 degrees Celsius, releasing free fatty acids and acting as catalysts that accelerate thermal degradation. Clean starches like potatoes degrade oil much more slowly.',
  },
  {
    question: 'What is the safe limit for oil reuse?',
    answer: 'As a rule of thumb, refined high-heat oils like canola or peanut can be reused 5 to 8 times under clean conditions. However, unrefined oils or oils exposed to temperatures above 190 degrees Celsius or breaded foods should be discarded after 1 to 3 uses.',
  },
];

const howTo = [
  {
    name: 'Select Frying Oil Type',
    text: 'Choose your oil from the database list. High-heat refined oils have a higher starting smoke point than unrefined options.',
  },
  {
    name: 'Track Frying Cycles',
    text: 'Input the total number of frying sessions the current batch of oil has undergone.',
  },
  {
    name: 'Enter Frying Temperature',
    text: 'Adjust the slider to match the average temperature of your frying sessions. Temperatures above 180 degrees Celsius accelerate breakdown.',
  },
  {
    name: 'Identify Food Coating Type',
    text: 'Specify if you are frying clean starches or floured/breaded foods which leave carbonized residue.',
  },
  {
    name: 'Check Smoke Point & Discard Status',
    text: 'Review the degraded smoke point and discard gauge. Discard immediately if the oil health enters the critical zone.',
  },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'oil-smoke-point-tracker',
  title: 'Oil Smoke Point Tracker',
  description: 'Monitor deep frying oil quality and estimate current smoke point declines. Track uses, temperatures, and food types to prevent harmful polar compound accumulation.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    oilPresetLabel: 'Frying Oil Type',
    presetAvocadoRefined: 'Avocado Oil (Refined)',
    presetSunflowerRefined: 'Sunflower Oil (Refined)',
    presetPeanutRefined: 'Peanut Oil (Refined)',
    presetCanolaRefined: 'Canola Oil (Refined)',
    presetOliveEV: 'Extra Virgin Olive Oil',
    presetOlivePomace: 'Olive Pomace Oil',
    presetCoconutUnrefined: 'Coconut Oil (Unrefined)',
    presetSunflowerUnrefined: 'Sunflower Oil (Unrefined)',
    usesLabel: 'Frying Cycles (Uses)',
    tempLabel: 'Frying Temperature',
    foodTypeLabel: 'Food Preparation / Coating',
    optionStarch: 'Clean Starch (Potatoes, French Fries)',
    optionBreading: 'Floured, Batter or Breaded Foods',
    baseSmokePointLabel: 'Base Smoke Point',
    currentSmokePointLabel: 'Degraded Smoke Point',
    polarCompoundsLabel: 'Polar Compounds (TPC)',
    polymerizationLabel: 'Oil Polymerization Health',
    statusLabel: 'Oil Safety Profile',
    statusGood: 'SAFE TO REUSE',
    statusCaution: 'CAUTION - FILTER SOON',
    statusDiscard: 'DISCARD IMMEDIATELY',
    adviceGood: 'Oil properties are stable. Keep frying, but filter out residual food particles after cool down.',
    adviceCaution: 'Degradation has begun. Smoke point has dropped. We recommend filtering and using only one more time.',
    adviceDiscard: 'Critical degradation reached. High concentration of polar compounds. Discard to prevent rancidity and health risks.',
    gaugeSafe: 'Safe',
    gaugeCaution: 'Caution',
    gaugeDiscard: 'Discard',
    limitLabel: 'Limit',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'The Chemistry of Deep Frying: Why Oils Degrade',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deep frying is one of the most chemically intense cooking techniques. When food is submerged in oil at high temperatures (typically between 160 and 190 degrees Celsius), the oil is simultaneously exposed to heat, moisture from the food, and oxygen from the air. This triggers three distinct chemical reactions: hydrolysis (water breaking down ester bonds), oxidation (oxygen creating hydroperoxides), and polymerization (degraded molecules bonding into thick, viscous chains). As these reactions proceed, the concentration of total polar compounds (TPC) increases, and the temperature at which the oil begins to break down and smoke drops significantly.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '25% TPC',
          label: 'Legal Discard Limit',
          icon: 'mdi:alert-octagon',
        },
        {
          value: '180°C',
          label: 'Critical Temp Threshold',
          icon: 'mdi:thermometer-alert',
        },
        {
          value: '2.2x',
          label: 'Breading Decay Rate',
          icon: 'mdi:chart-timeline-variant',
        },
        {
          value: 'FFA',
          label: 'Free Fatty Acids Cause',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Polar Compounds and Health Regulations',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Total Polar Compounds (TPC) serve as the international standard for measuring the degradation level of frying fats. In professional kitchens, using oil with a TPC concentration exceeding 25% is legally prohibited in several countries due to safety concerns. These polar compounds are absorption inhibitors, reduce cooking efficiency, and degrade the crispness of the fried crust. More importantly, consuming oxidized oil regularly contributes to the ingestion of free radicals and toxic compounds that are associated with cardiovascular issues.',
    },
    {
      type: 'title',
      text: 'Comparing Oil Types: Starting Smoke Points',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Refined Oils (High Heat)',
          icon: 'mdi:shield-check',
          description: 'Oils processed to remove volatile compounds, free fatty acids, and impurities. They have exceptionally high starting smoke points.',
          points: [
            'Refined Avocado: 270°C / 518°F',
            'Refined Sunflower: 232°C / 450°F',
            'Refined Peanut: 232°C / 450°F',
            'High resistance to initial breakdown',
          ],
        },
        {
          title: 'Unrefined Oils (Low Heat, Flavorful)',
          icon: 'mdi:leaf',
          description: 'Cold-pressed or virgin oils containing high amounts of natural elements, minerals, and free fatty acids.',
          highlight: true,
          points: [
            'Extra Virgin Olive: 190°C / 374°F',
            'Unrefined Coconut: 177°C / 350°F',
            'Unrefined Sunflower: 107°C / 225°F',
            'Degrades extremely quickly under heat',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Frying Oil Smoke Point & Maximum Reuse Reference Table',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Oil Variety', 'Base Smoke Point (°C)', 'Base Smoke Point (°F)', 'State / Processing', 'Recommended Max Uses'],
      rows: [
        ['Avocado Oil (Refined)', '270°C', '518°F', 'Refined', '10 to 12 uses'],
        ['Olive Pomace Oil', '238°C', '460°F', 'Refined', '8 to 10 uses'],
        ['Sunflower Oil (Refined)', '232°C', '450°F', 'Refined', '6 to 8 uses'],
        ['Peanut Oil (Refined)', '232°C', '450°F', 'Refined', '6 to 8 uses'],
        ['Canola Oil (Refined)', '204°C', '400°F', 'Refined', '5 to 7 uses'],
        ['Extra Virgin Olive Oil', '190°C', '374°F', 'Cold-Pressed', '2 to 3 uses'],
        ['Coconut Oil (Unrefined)', '177°C', '350°F', 'Unrefined', '1 to 2 uses'],
        ['Sunflower Oil (Unrefined)', '107°C', '225°F', 'Unrefined', 'Do not use for deep frying'],
      ],
    },
    {
      type: 'title',
      text: 'Critical Warning Signs of Degraded Oil',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Danger: When Frying Oil Turns Toxic',
      html: 'Do not continue reusing oil if you observe any of the following symptoms: <strong>rancid or soapy smell</strong>, a dark and turbid color, or <strong>excessive foaming</strong> around food. If the oil begins to smoke at normal cooking temperatures (170-180°C), it indicates the smoke point has plummeted due to extreme accumulation of Free Fatty Acids (FFA). Cooking with degraded oil transfers toxic polar compounds and carcinogenic elements into your food, harming both flavor and health.',
    },
    {
      type: 'title',
      text: 'How to Extend Frying Oil Quality',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Filter Out Carbonized Residues Immediately',
      html: 'Frying batter or floured foods leaves micro-particles that settle at the bottom of the fryer. These particles continue to char during cooking, acting as catalysts that accelerate oil decay. To slow this process, always skim the surface during frying, and <strong>filter the cooled oil</strong> through a fine mesh, cheesecloth, or coffee filter after every single frying session. Store filtered oil in a sealed glass container in a dark, cool place.',
    },
    {
      type: 'title',
      text: 'Best Practices for Deep Frying',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Dry food surfaces thoroughly</strong> - Excess moisture triggers rapid hydrolysis, breaking oil down into free fatty acids.',
        '<strong>Avoid salting before frying</strong> - Salt acts as a catalyst that speeds up oil oxidation; season foods immediately after removing them from the hot oil.',
        '<strong>Maintain optimal temperatures</strong> - Stay between 170°C and 180°C. Going higher accelerates thermal breakdown, while dropping lower causes food to absorb excess grease.',
        '<strong>Do not top off old oil</strong> - Mixing fresh oil with degraded oil accelerates the breakdown of the new oil instead of restoring it.',
      ],
    },
    {
      type: 'title',
      text: 'Deep Frying & Lipid Degradation Glossary',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Smoke Point',
          definition: 'The temperature at which an oil or fat begins to continuously break down and produce visible bluish smoke, releasing acrolein.',
        },
        {
          term: 'Total Polar Compounds (TPC)',
          definition: 'The global standard indicator for oil degradation, representing the total weight percentage of oxidized compounds, FFAs, and polymers.',
        },
        {
          term: 'Hydrolysis',
          definition: 'A chemical reaction in which water molecules break down triglycerides into free fatty acids and glycerol. Triggered by food moisture.',
        },
        {
          term: 'Polymerization',
          definition: 'The process in which heat-damaged oil molecules join together to form large macromolecular structures, increasing oil viscosity.',
        },
        {
          term: 'Free Fatty Acids (FFA)',
          definition: 'Carboxylic acids released from triglycerides during hydrolysis. They directly reduce the starting smoke point of the fat.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
