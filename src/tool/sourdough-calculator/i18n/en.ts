import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'sourdough-calculator',
  title: 'Sourdough Calculator - Exact Ratios for Fermentation',
  description: 'Calculate the exact proportions of sourdough starter, flour, and water to maintain your culture. Predefined or custom ratios.',
  faqTitle: 'Frequently Asked Questions',
  faq: [
    {
      question: 'What is a 1:1:1 ratio?',
      answer: 'It\'s the most common ratio for maintaining sourdough at room temperature. It means 1 part starter, 1 part flour, and 1 part water. Useful when feeding daily.',
    },
    {
      question: 'When do I use 1:2:2?',
      answer: 'The 1:2:2 ratio is for activating sourdough. It creates a slower but more predictable fermentation. Ideal if you\'ll store the culture cold and want to revive it.',
    },
    {
      question: 'What is the "sweet spot" 1:5:5?',
      answer: 'The 1:5:5 ratio is the sweet spot for many bakers. It allows 8-12 hours of fermentation at room temperature before the sourdough is ready. It balances convenience with time control.',
    },
    {
      question: 'Can I use custom ratios?',
      answer: 'Absolutely. If you have a specific protocol, you can enter your own ratios. Some bakers use 1:10:10 for ultra-slow fermentation, others 1:1:0.8 for less water.',
    },
    {
      question: 'Does the calculator round the grams?',
      answer: 'Yes. It rounds to the nearest whole number for practicality. If you need maximum precision, use a digital scale. Small rounding doesn\'t significantly affect fermentation.',
    },
  ],
  bibliographyTitle: 'Bibliography',
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
      name: 'Enter the total amount you need',
      text: 'Define the total weight of sourdough starter required for your recipe (e.g., 300g for a typical loaf).',
    },
    {
      name: 'Select your feeding ratio',
      text: 'Choose from predefined ratios (Maintain, Activate, Retard, Strong, Sweet Spot) or create a custom one.',
    },
    {
      name: 'Get exact quantities',
      text: 'The calculator shows you how much starter, flour, and water you need. Mix these ingredients and ferment according to your protocol.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Science and Precision in Sourdough',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A <strong>sourdough starter</strong> is a living culture of lactic acid bacteria and wild yeast. Its strength and behavior depend on when and how you feed it. The <strong>feeding ratios</strong> (the balance between starter, flour, and water) determine the speed of fermentation and the activity of the culture.',
    },
    {
      type: 'title',
      text: 'Predefined Ratios Explained',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>1:1:1 (Maintain):</strong> Ideal for daily feedings at room temperature. Starter doubles in volume in 4-8 hours.',
        '<strong>1:2:2 (Activate):</strong> More relative food. If your culture is dormant (refrigerated), this ratio wakes it up quickly in 6-12 hours.',
        '<strong>1:3:3 (Retard):</strong> Even more food. Excellent for controlled and predictable fermentations of 8-16 hours.',
        '<strong>1:4:4 (Strong):</strong> Excess food means very slow fermentation (12-24h). Useful if you need flexible schedules or seek more complex flavors.',
        '<strong>1:5:5 (Sweet Spot):</strong> The perfect balance for many. Ferments in 8-12 hours, producing an active and predictable starter. The artisanal industry standard.',
      ],
    },
    {
      type: 'title',
      text: 'Hydration and Behavior',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'By default, this calculator uses <strong>100% hydration</strong> (water = flour by weight). This means water and flour have equal weights. If your protocol requires lower hydration, you can manually adjust the custom ratios.',
    },
    {
      type: 'title',
      text: 'Temperature and Fermentation Time',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Remember that these times assume <strong>68-72°F (20-22°C)</strong>. At warmer temperatures (75-80°F), fermentation is 20-30% faster. At cooler temperatures, it\'s considerably slower. Adjust your protocol according to your climate.',
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
  schemas: [],
};
