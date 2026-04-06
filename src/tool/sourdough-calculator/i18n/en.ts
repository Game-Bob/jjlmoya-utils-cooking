import type { ToolLocaleContent } from '../../../types';

const title = "Sourdough Starter Feeding Calculator";
const description = "Automatically calculate exact proportions of starter, flour, and water for your sourdough maintenance and feeding. Preset or custom ratios available.";
const faq = [
    {
      question: 'What is a 1:1:1 ratio?',
      answer: 'It\'s the most common ratio for maintaining sourdough starter at room temperature. It means 1 part starter, 1 part flour, and 1 part water. Best for daily feedings.',
    },
    {
      question: 'When should I use a 1:2:2 ratio?',
      answer: 'A 1:2:2 ratio is often used to reactive or wake up a starter. It provides a more predictable fermentation curve, ideal for reinvigorating a culture after refrigeration.',
    },
    {
      question: 'Why use the 1:5:5 "sweet spot"?',
      answer: 'The 1:5:5 ratio is a favorite for many bakers. It allows for an 8-12 hour fermentation window at room temperature before the starter peaks, balancing convenience with time control.',
    },
    {
      question: 'Can I use custom ratios?',
      answer: 'Absolutely. If you have a specific feeding protocol, you can enter your own ratios. Some bakers use 1:10:10 for very slow fermentation, others use 1:1:0.8 for a stiffer starter.',
    },
    {
      question: 'Does the calculator round the grams?',
      answer: 'Yes. It rounds to the nearest whole number for practicality. For maximum precision, use a digital scale; however, small rounding differences won\'t significantly impact fermentation.',
    },
  ];
const howTo = [
    {
      name: 'Enter total amount needed',
      text: 'Define the total weight of sourdough starter you need for your recipe (e.g., 300g for a typical loaf).',
    },
    {
      name: 'Select feeding ratio',
      text: 'Choose from preset ratios (Maintain, Activate, Retard, Strong, Sweet Spot) or create your own custom ratio.',
    },
    {
      name: 'Get your exact measurements',
      text: 'The calculator shows you exactly how much starter, flour, and water to mix. Combine and ferment according to your schedule.',
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
  slug: 'sourdough-starter-feeding-calculator-ratio-proportions',
  title: 'Sourdough Starter Feeding Calculator',
  description: 'Automatically calculate exact proportions of starter, flour, and water for your sourdough maintenance and feeding. Preset or custom ratios available.',
  faqTitle: 'Frequently Asked Questions',
  faq: [
    {
      question: 'What is a 1:1:1 ratio?',
      answer: 'It\'s the most common ratio for maintaining sourdough starter at room temperature. It means 1 part starter, 1 part flour, and 1 part water. Best for daily feedings.',
    },
    {
      question: 'When should I use a 1:2:2 ratio?',
      answer: 'A 1:2:2 ratio is often used to reactive or wake up a starter. It provides a more predictable fermentation curve, ideal for reinvigorating a culture after refrigeration.',
    },
    {
      question: 'Why use the 1:5:5 "sweet spot"?',
      answer: 'The 1:5:5 ratio is a favorite for many bakers. It allows for an 8-12 hour fermentation window at room temperature before the starter peaks, balancing convenience with time control.',
    },
    {
      question: 'Can I use custom ratios?',
      answer: 'Absolutely. If you have a specific feeding protocol, you can enter your own ratios. Some bakers use 1:10:10 for very slow fermentation, others use 1:1:0.8 for a stiffer starter.',
    },
    {
      question: 'Does the calculator round the grams?',
      answer: 'Yes. It rounds to the nearest whole number for practicality. For maximum precision, use a digital scale; however, small rounding differences won\'t significantly impact fermentation.',
    },
  ],
  bibliographyTitle: 'Bibliography & Resources',
  bibliography: [
    {
      name: 'Tartine Bread - Chad Robertson',
      url: 'https://www.penguinrandomhouse.com/books/310016/tartine-bread-by-chad-robertson/',
    },
    {
      name: 'The Flavor Bible - Scaling and Ratios',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'Full Proof Baking - Guides on Sourdough',
      url: 'https://www.fullproofbaking.com/',
    },
  ],
  howTo: [
    {
      name: 'Enter total amount needed',
      text: 'Define the total weight of sourdough starter you need for your recipe (e.g., 300g for a typical loaf).',
    },
    {
      name: 'Select feeding ratio',
      text: 'Choose from preset ratios (Maintain, Activate, Retard, Strong, Sweet Spot) or create your own custom ratio.',
    },
    {
      name: 'Get your exact measurements',
      text: 'The calculator shows you exactly how much starter, flour, and water to mix. Combine and ferment according to your schedule.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Master Guide for Sourdough Starter Maintenance and Feeding',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Sourdough starter</strong> isn\'t just an ingredient; it\'s a living ecosystem of wild yeasts and lactic acid bacteria (LAB). Exceptional bread starts with the health of this culture, managed through precise feeding ratios and temperature control.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '24-26°C',
          label: 'Optimum Activity Temp',
          icon: 'mdi:thermometer',
        },
        {
          value: '3.8 - 4.2',
          label: 'Ideal Culture pH',
          icon: 'mdi:test-tube',
        },
        {
          value: '100%',
          label: 'Standard Hydration',
          icon: 'mdi:water-percent',
        },
        {
          value: 'x2 - x3',
          label: 'Growth at Peak',
          icon: 'mdi:trending-up',
        },
      ],
    },
    {
      type: 'title',
      text: 'Comparison of Sourdough Culture Types',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Liquid Starter (100% Hyd.)',
          icon: 'mdi:water',
          description: 'The most common choice in modern artisanal baking. Easy to mix and incorporate into final doughs.',
          points: [
            'Faster fermentation speed',
            'More lactic flavor profile (mild)',
            'Easy to measure and refresh',
            'Ideal for baguettes and loaves',
          ],
        },
        {
          title: 'Stiff Starter (Pasta Madre)',
          icon: 'mdi:bread-slice-outline',
          description: 'Traditional in Italian baking. Hydration usually around 50%. Known for its strength.',
          highlight: true,
          points: [
            'Slower, more stable fermentation',
            'More acetic flavor profile',
            'Greater strength for enriched doughs',
            'Ideal for Panettone and Brioche',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Understanding Mathematical Feeding Ratios',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The ratio represents parts of Inoculum (old starter) relative to Flour and Water. For example, a 1:2:2 ratio means 1 part culture by 2 parts flour and 2 parts water.',
    },
    {
      type: 'table',
      headers: ['Ratio', 'Recommended Use', 'Est. Time (24°C)', 'Key Advantage'],
      rows: [
        ['1:1:1', 'Daily feeding', '4-6 hours', 'Quick maintenance'],
        ['1:2:2', 'Pre-bake activation', '6-8 hours', 'Acidity balance'],
        ['1:5:5', 'Standard baking use', '8-12 hours', 'Predictable activity peak'],
        ['1:10:10', 'Long-term retard', '16-24 hours', 'Flexible schedule management'],
      ],
    },
    {
      type: 'title',
      text: 'Flour Selection for Starter Feeding',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Whole Rye Flour',
          icon: 'mdi:grain',
          description: 'A superfood for wild yeasts. Contains more nutrients and enzymes than wheat.',
          points: [
            'Explosive fermentation activity',
            'Brings deep, earthy aromas',
            'Maintains acidity levels better',
          ],
        },
        {
          title: 'White Wheat Flour',
          icon: 'mdi:shaker-outline',
          description: 'Ideal for those seeking a milder flavor where the starter doesn\'t dominate the bread profile.',
          points: [
            'More neutral and versatile flavor',
            'Very clear bubble observation',
            'Less prone to over-fermentation',
          ],
        },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Signs of a Hungry Starter',
      html: 'If your culture has a dark liquid on the surface (hooch), smells intensely like vinegar or acetone, or collapses very quickly after peaking, it needs a higher feeding ratio (more food) or a lower storage temperature.',
    },
    {
      type: 'title',
      text: 'Technical Sourdough Glossary',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Levain',
          definition: 'An intermediate starter prepared from the mother culture intended for use in a specific bread recipe.',
        },
        {
          term: 'Hooch',
          definition: 'A layer of alcohol and water that accumulates when a starter has exhausted its food source. It\'s not harmful but indicates hunger.',
        },
        {
          term: 'Activity Peak',
          definition: 'The moment of maximum expansion and yeast population density. The ideal point for mixing your bread dough.',
        },
        {
          term: 'Lactic Acid Bacteria (LAB)',
          definition: 'Microorganisms responsible for producing organic acids that provide characteristic flavor and improve shelf life.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'The Float Test',
      html: 'To check if your starter is ready, drop a teaspoon into a glass of water. If it floats, it has trapped enough CO2 and yeasts are at their peak activity.',
    },
    {
      type: 'paragraph',
      html: 'Using our calculator allows you to standardize your baking process and better understand the biology of your bread. Consistency is the secret to artisanal excellence.',
    },
  ],
  ui: {
    totalAmount: 'Final Amount',
    refreshRatio: 'Feeding Ratio',
    maintain: 'Maintain',
    activate: 'Activate',
    retard: 'Retard',
    strong: 'Strong',
    sweetSpot: 'Sweet Spot',
    custom: 'Custom',
    sourdough: 'Starter',
    activeCulture: 'Active culture',
    flour: 'Flour',
    flourType: 'Bread or Whole Wheat',
    water: 'Water',
    chlorineFree: 'Chlorine-free',
    todayFormula: 'Today\'s Formula',
    hydration: '100% Hydration',
    totalDough: 'Total Dough',
    mm: 'ST',
  },
  schemas: [faqSchema, howToSchema, appSchema],
};
