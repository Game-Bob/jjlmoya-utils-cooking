import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Dehydrator Moisture Estimator';
const description = 'Estimate how much weight your food will lose in the dehydrator. Calculate drying time, water evaporation, and final moisture content based on ingredient type, temperature, and target moisture level.';

const faq = [
  {
    question: 'How do you calculate dehydrator weight loss?',
    answer: 'The weight loss during dehydration is calculated by separating the food into solid content and water content. Since the solid content remains constant, the final weight is the solid content divided by 1 minus the target moisture percentage.'
  },
  {
    question: 'Why does dehydration temperature affect drying time?',
    answer: 'Higher temperatures speed up the rate of water evaporation from the food surface. However, too high of a temperature can cause case hardening, where the outer layer dries too quickly and traps moisture inside.'
  },
  {
    question: 'How do I know when food is fully dehydrated?',
    answer: 'Properly dehydrated food should feel dry and not sticky or tacky. Fruits should be pliable and leathery, vegetables should be brittle or crisp, and meats for jerky should be tough and bend without snapping.'
  }
];

const howTo = [
  {
    name: 'Select ingredient preset or custom moisture',
    text: 'Choose from our presets like Beef Jerky, Watermelon Snaps, Apple Rings, Mango Slices, or Mushrooms, which automatically sets the initial moisture and base drying time.'
  },
  {
    name: 'Adjust the initial and target moisture content',
    text: 'Set the starting moisture of your food and your desired target moisture content using the sliders.'
  },
  {
    name: 'Set the initial weight and drying temperature',
    text: 'Enter the raw weight of the food and the operating temperature of your dehydrator.'
  },
  {
    name: 'View estimated drying time and final weight',
    text: 'Read the calculated output showing your food target weight, water evaporated, and estimated hours needed.'
  }
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
  slug: 'dehydrator-moisture-estimator',
  title,
  description: 'Estimate how much weight your food will lose in the dehydrator. Calculate drying time, water evaporation, and final moisture content based on ingredient type, temperature, and target moisture level.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Dehydrator Moisture Estimator',
    subtitle: 'Calculate weight shrinkage and estimate drying time',
    unitSystemLabel: 'Unit System',
    metricOption: 'Metric (g, °C)',
    imperialOption: 'Imperial (oz, °F)',
    ingredientLabel: 'Ingredient Preset',
    initialMoistureLabel: 'Initial Moisture (%)',
    targetMoistureLabel: 'Target Moisture (%)',
    weightLabel: 'Initial Weight',
    tempLabel: 'Drying Temperature',
    customOption: 'Custom / Manual',
    beefOption: 'Beef Jerky',
    watermelonOption: 'Watermelon Snaps',
    appleOption: 'Apple Rings',
    mangoOption: 'Mango Slices',
    mushroomOption: 'Mushrooms',
    targetWeightLabel: 'Target Weight',
    waterEvaporatedLabel: 'Water Evaporated',
    estimatedHoursLabel: 'Estimated Drying Time (hours)',
    shrinkageLabel: 'Weight Shrinkage'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'How Much Weight Will Your Food Lose in the Dehydrator? Calculate Drying Time and Moisture',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Whether you are making <strong>beef jerky</strong>, <strong>fruit leather</strong>, <strong>dried apple rings</strong>, or <strong>watermelon snaps</strong>, the key to consistent results is understanding moisture content. Food safety and shelf-stable storage depend on reaching the correct target moisture level. Our <strong>dehydrator moisture estimator</strong> predicts the final weight, water evaporation, and drying time based on your specific ingredient and settings.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Beef Moisture', icon: 'mdi:food' },
        { value: '92%', label: 'Watermelon Moisture', icon: 'mdi:water' },
        { value: '10%', label: 'Jerky Target', icon: 'mdi:shield' },
        { value: '55°C', label: 'Avg Drying Temp', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: 'What Is the Right Moisture Level for Dehydrated Food?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Ingredient', 'Initial Moisture', 'Target Moisture', 'Typical Time', 'Sign of Doneness'],
      rows: [
        ['Beef Jerky', '70%', '10-15%', '4-8 h', 'Tough and bends without snapping'],
        ['Apple Rings', '86%', '15-20%', '6-10 h', 'Pliable and leathery, no sticky spots'],
        ['Mango Slices', '84%', '15-18%', '6-10 h', 'Chewy with no visible moisture'],
        ['Mushrooms', '92%', '5-8%', '4-8 h', 'Brittle and crisp'],
        ['Watermelon Snaps', '92%', '10-12%', '10-16 h', 'Crisp snap when bent']
      ]
    },
    {
      type: 'title',
      text: 'Common Dehydrating Problems and How to Solve Them',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Case hardening:</strong> The outer layer dries too fast, trapping moisture inside. Reduce temperature by 5-10°C and increase air circulation.',
        '<strong>Mold during storage:</strong> Food was not dried to a low enough moisture. Use the calculator to find your target weight and verify with a moisture test.',
        '<strong>Uneven drying:</strong> Pieces were cut to different thicknesses or the dehydrator was overloaded. Cut uniform pieces and leave space between them.',
        '<strong>Food is too dry and brittle:</strong> Over-dehydration causes loss of flavor and texture. Check target moisture levels for your specific ingredient.'
      ]
    },
    {
      type: 'title',
      text: 'Drying Temperature Guide by Food Type',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Temperature affects both drying speed and food quality. Higher temperatures evaporate water faster but can cause case hardening, nutrient loss, and uneven results. Use these general guidelines for your dehydrator setting:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Low Temperature 40 to 50°C',
          icon: 'mdi:thermometer',
          description: 'Best for preserving enzymes, nutrients, and delicate flavors.',
          points: ['Herbs and leafy greens', 'Mushrooms', 'Raw food preservation', 'Longer drying time required']
        },
        {
          title: 'Medium Temperature 50 to 60°C',
          icon: 'mdi:thermometer',
          description: 'Standard range for most fruits and vegetables.',
          highlight: true,
          points: ['Apple rings and mango slices', 'Most vegetables', 'Fruit leathers', 'Balanced speed and quality']
        },
        {
          title: 'High Temperature 60 to 70°C',
          icon: 'mdi:thermometer',
          description: 'Used for meat jerky and dense foods requiring food safety.',
          points: ['Beef and turkey jerky', 'Dense root vegetables', 'Food safety priority', 'Shorter drying window']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Always Pretreat Fruits',
      html: 'Dip apples, bananas, and pears in lemon juice or ascorbic acid solution before dehydrating to prevent browning and preserve color.'
    },
    {
      type: 'tip',
      title: 'Rotate Trays During Drying',
      html: 'Dehydrators often have hot spots. Rotate trays top to bottom and front to back every 2-3 hours for even drying.'
    },
    {
      type: 'tip',
      title: 'Condition Before Storing',
      html: 'After dehydrating, let the food cool and condition in a sealed container for 1 week. Shake daily. If condensation appears, it needs more drying time.'
    },
    {
      type: 'title',
      text: 'Dehydrator Moisture Glossary',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Case Hardening', definition: 'A condition where the outer surface of food dries too quickly, forming a hard shell that traps moisture inside and prevents proper dehydration.' },
        { term: 'Water Activity (aw)', definition: 'A measure of free water available for microbial growth. Shelf-stable dehydrated food typically has aw below 0.60.' },
        { term: 'Moisture Content', definition: 'The percentage of water weight relative to total food weight. Used to determine dehydration progress and target levels for food safety.' },
        { term: 'Shrinkage Ratio', definition: 'The proportion of the original weight remaining after dehydration. A key metric for planning batch sizes and storage.' }
      ]
    },
    {
      type: 'summary',
      title: 'Key Takeaways for Perfect Dehydrating',
      items: [
        'Different ingredients have vastly different initial moisture levels (70-92%). Use the presets for accurate estimates.',
        'Target moisture varies by food: 10% for jerky, 15-20% for fruits, 5-8% for vegetables and mushrooms.',
        'Drying temperature affects both speed and quality. Stay in the 50-60°C range for most foods.',
        'Case hardening ruins texture. Avoid temperatures above 70°C and ensure good air circulation.',
        'Always condition dehydrated food for 1 week before long-term storage to ensure even moisture distribution.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
