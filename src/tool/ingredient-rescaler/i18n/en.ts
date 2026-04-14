import type { ToolLocaleContent } from '../../../types';

const title = 'Professional Recipe Ingredient Scaler';
const description =
  'Automatically scale your recipes based on serving count. Calculate exact ingredient amounts to multiply or reduce any recipe with professional precision.';

const faq = [
  {
    question: 'Why does my conversion factor include decimals?',
    answer: 'Because culinary proportions aren\'t always whole numbers. If you scale a 4-person recipe for 7 people, the factor is exactly 1.75. Multiplying by this specific ratio is more accurate than arbitrary rounding.',
  },
  {
    question: 'How do I handle fractions like \'1/2 tsp\'?',
    answer: 'The parser automatically identifies numbers. It will read \'1/2\' as \'0.5\' and scale it accordingly. For maximum clarity, you can also enter decimals directly.',
  },
  {
    question: 'Should I round the final results?',
    answer: 'It depends on the ingredient. For flours and liquids, yes. For potent spices or yeast, we recommend scaling to about 75% of the calculated total to avoid overpowering the dish.',
  },
  {
    question: 'Does it work with cups and ounces?',
    answer: 'Yes, the tool scales any numerical value. However, we strongly recommend converting to grams first for professional-grade consistency across larger batches.',
  },
];

const howTo = [
  {
    name: 'Enter your servings count',
    text: 'Define how many people the recipe was originally for, and how many you want to cook for now.',
  },
  {
    name: 'Paste your ingredient list',
    text: 'Copy and paste your entire list. Our tool recognizes numbers at the start of each line (e.g., 500g, 1/2, 2.5) and scales them instantly.',
  },
  {
    name: 'Apply professional adjustments',
    text: 'Math is exact, but cooking is situational. Scale spices to 75%. Don\'t scale cooking times. Use your chef\'s intuition for the final touch.',
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
  operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
  slug: "recipe-ingredient-scaler-converter-servings",
  title,
  description,
  ui: {
    servings: "Servings",
    original: "Original",
    desired: "Desired",
    multiplyingFactor: "Conversion Factor",
    ingredientsList: "Ingredient List",
    pasteHere: "Paste your ingredients here.",
    exampleLine1: "Ex:",
    exampleLine2: "500g Flour",
    exampleLine3: "300ml Water",
    exampleLine4: "10g Salt",
    result: "Result",
    copy: "Copy",
    copied: "Copied!",
    emptyState: "Your adjusted ingredients will appear here...",
    defaultIngredient1: "200g Flour",
    defaultIngredient2: "100ml Milk",
    defaultIngredient3: "2 Eggs",
  },
  faqTitle: "Frequently Asked Questions",
  faq,
  bibliographyTitle: "Bibliography & Resources",
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
      name: "Modernist Cuisine - Scaling Techniques",
      url: "https://www.modernistcuisine.com/",
    },
  ],
  howTo,
  seo: [
    {
      type: "title",
      text: "Master Guide for Recipe Scaling and Converter Logic",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<strong>Ingredient scaling</strong> is one of the most critical yet error-prone tasks in professional kitchens. It's not just about multiplying numbers; it's about understanding how food chemistry and physics react to changes in volume and surface area.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "x1.75",
          label: "Factor 4 to 7 per.",
          icon: "mdi:calculator",
        },
        {
          value: "75%",
          label: "Spice Adjustment",
          icon: "mdi:shaker-outline",
        },
        {
          value: "0%",
          label: "Time Scaling",
          icon: "mdi:timer-off",
        },
        {
          value: "100g",
          label: "Reference Base",
          icon: "mdi:weight-gram",
        },
      ],
    },
    {
      type: "title",
      text: "Differences Between Linear and Contextual Scaling",
      level: 3,
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Mathematical Linear Scaling",
          icon: "mdi:math-log",
          description: "Direct multiplication of all values by the calculated conversion factor.",
          points: [
            "Perfect for flour and base liquids",
            "Ideal for cold precision pastry",
            "Works well for small shifts (x2, x0.5)",
            "Easy to calculate automatically",
          ],
        },
        {
          title: "Chef's Contextual Scaling",
          icon: "mdi:chef-hat",
          description: "Adjusting proportions based on flavor saturation and evaporation.",
          highlight: true,
          points: [
            "Prevents excess salt and spice levels",
            "Considers evaporation surface area",
            "Adjusts yeast based on friction heat",
            "Requires professional culinary judgment",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Common Conversion Factors by Serving Size",
      level: 3,
    },
    {
      type: "table",
      headers: ["From Servings", "To Servings", "Factor (CF)", "Adjustment Difficulty"],
      rows: [
        ["2 persons", "4 persons", "x 2.0", "Low (Linear)"],
        ["4 persons", "6 persons", "x 1.5", "Low (Linear)"],
        ["4 persons", "10 persons", "x 2.5", "Medium (Watch spices)"],
        ["4 persons", "25 persons", "x 6.25", "High (Contextual)"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Common Pitfalls When Doubling a Recipe",
      html: "If you notice flavors becoming too intense after scaling—especially with chili or salt—reduce the specific scale for those ingredients to 75%. Never double the cooking time; internal temperature is reached based on thickness, not total batch weight.",
    },
    {
      type: "title",
      text: "Standardization Terminology Glossary",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Conversion Factor",
          definition: "The number used to multiply ingredients: Desired Quantity / Original Quantity.",
        },
        {
          term: "Cooking Shrinkage",
          definition: "Weight loss due to evaporation or fat loss. This does not scale linearly with batch size.",
        },
        {
          term: "Gross vs Net Weight",
          definition: "Weight before and after cleaning. Always scale based on the recipe's specified net weight.",
        },
        {
          term: "Batch Yield",
          definition: "The total amount of finished product after scaling and cooking processes.",
        },
      ],
    },
    {
      type: "tip",
      title: "The Beaten Egg Trick",
      html: "If the calculator asks for 2.3 eggs, beat one whole egg, weigh it, and use only 30% of that weight. This is the only way to maintain precision in fine pâtisserie.",
    },
    {
      type: "paragraph",
      html: "Our tool simplifies the math so you can focus on what truly matters: creativity and flavor.",
    },
  ],

  schemas: [appSchema, faqSchema, howToSchema],
};
