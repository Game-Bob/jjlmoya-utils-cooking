import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'ingredient-rescaler',
  title: 'Ingredient Rescaler - Scale Your Recipes Easily',
  description: 'Scale recipes automatically based on the number of servings. Calculate exact ingredient quantities by multiplying or reducing your recipe without complications.',
  ui: {
    servings: 'Servings',
    original: 'Original',
    desired: 'Desired',
    multiplyingFactor: 'Multiplying Factor',
    ingredientsList: 'Ingredient List',
    pasteHere: 'Paste your list here.',
    exampleLine1: 'E.g.:',
    exampleLine2: '500g Flour',
    exampleLine3: '300ml Water',
    exampleLine4: '10g Salt',
    result: 'Result',
    copy: 'Copy',
    copied: 'Copied!',
    emptyState: 'Your scaled ingredients will appear here...',
    defaultIngredient1: '200g Flour',
    defaultIngredient2: '100ml Milk',
    defaultIngredient3: '2 Eggs',
  },
  faqTitle: 'Frequently Asked Questions',
  faq: [
    {
      question: 'Why does my conversion factor include decimals?',
      answer: 'Because culinary proportions are not always round. If you scale a recipe from 4 to 7 servings, the factor is exactly 1.75. Ingredients are multiplied by that number, even if you encounter fractions. It\'s more accurate than arbitrary rounding.',
    },
    {
      question: 'What if I input "1/2 teaspoon of salt"?',
      answer: 'The parser looks for the number first. It will recognize "1" as the quantity, then "/2" as part of the unit. The result will be "0.5", and when scaled it will multiply correctly. For fractions like "1/2", entering "0.5" directly is clearer, or the tool interprets them as division.',
    },
    {
      question: 'Should I round the final results?',
      answer: 'It depends on the ingredient. For flours, yes. For yeast or spices, precision matters less (scale to 75% of indicated). For eggs: if you get 2.3, use 2 whole ones plus part of a third (weighed), or round to 2 if the dish allows.',
    },
    {
      question: 'Why doesn\'t the result change when I adjust servings?',
      answer: 'Make sure the ingredients field has content. If it\'s empty, there\'s nothing to scale. Also verify that the numbers in your ingredients are recognizable (e.g., "500g", "1/2 teaspoon").',
    },
    {
      question: 'Does it work with imperial measurements (ounces, cups)?',
      answer: 'Technically yes, the tool reads numbers and scales. But precision is limited with cups (inconsistent volume). It\'s recommended to convert to grams before scaling.',
    },
  ],
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'Harold McGee - On Food and Cooking: The Science and Lore of the Kitchen',
      url: 'https://en.wikipedia.org/wiki/Harold_McGee',
    },
    {
      name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'Modernist Cuisine - Scientific Scaling Techniques',
      url: 'https://www.modernistcuisine.com/',
    },
  ],
  howTo: [
    {
      name: 'Enter your servings',
      text: 'In the "Original" field, enter the number of people the recipe is designed for. In "Desired", enter the number of people you\'re going to cook for.',
    },
    {
      name: 'Paste your ingredient list',
      text: 'Copy and paste your list as is. Each ingredient on a new line. The tool recognizes numbers at the start (500g, 1/2, 2.5) and scales automatically.',
    },
    {
      name: 'Adjust according to context',
      text: 'Results are mathematically exact, but cooking is an art. Spices: scale to 75%. Yeast: less than theoretical in large quantities. Cooking times: never scale.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'The Science Behind Recipe Scaling',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cooking is not just art, it\'s <strong>applied mathematics</strong>. Understanding how to adapt the proportions of your ingredients is the difference between a decent dish and a masterpiece, whether you\'re cooking for 2 or 20.',
    },
    {
      type: 'title',
      text: 'How Does the Conversion Factor Work?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The heart of any culinary adaptation is the <strong>Conversion Factor (CF)</strong>. Although our tool does it automatically, understanding the logic gives you full control over your cooking. It\'s a simple direct proportion: <strong>Desired Amount ÷ Original Amount = Factor (CF)</strong>.',
    },
    {
      type: 'paragraph',
      html: 'If your recipe is for 4 people and you want to cook for 7, the factor is 1.75. Each ingredient is multiplied by that number.',
    },
    {
      type: 'title',
      text: 'What Does NOT Scale Linearly',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Multiplying all ingredients by 2 works for flour and water, but cooking is chemistry and thermodynamics. There are elements that behave exponentially or logarithmically, not linearly.',
    },
    {
      type: 'list',
      items: [
        '<strong>Spices and salt:</strong> Taste perception saturates. Tripling cayenne pepper can make a stew inedible. Golden rule: scale spices to 75% and adjust at the end.',
        '<strong>Yeast:</strong> In large fermented doughs, friction generates more heat and accelerates fermentation. Doubling the dough requires less than double the yeast.',
        '<strong>Cooking times:</strong> A 10kg turkey doesn\'t take twice as long as a 5kg one. Heat transmission depends on thickness. Always use a probe thermometer.',
      ],
    },
    {
      type: 'title',
      text: 'Professional Cooking Tricks',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Egg as a unit:</strong> If scaling asks for 2.3 eggs, weigh the exact amount or round as needed.',
        '<strong>Surface vs Volume:</strong> When reducing sauces, evaporation is faster. Watch the reduction carefully.',
        '<strong>Metric System:</strong> Always weigh in grams. It\'s more accurate when scaling.',
      ],
    },
  ],
  schemas: [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Ingredient Rescaler',
      description: 'Scale recipes automatically based on the number of servings. Calculate exact ingredient quantities by multiplying or reducing your recipe without complications.',
      url: 'https://jjlmoya.es/en/ingredient-rescaler',
      applicationCategory: 'Utilities',
      inLanguage: 'en-US',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Ingredient Rescaler - Scale Your Recipes Easily',
      description: 'Scale recipes automatically based on the number of servings. Calculate exact ingredient quantities by multiplying or reducing your recipe without complications.',
      author: {
        '@type': 'Person',
        name: 'jjlmoya',
      },
      inLanguage: 'en-US',
      isPartOf: {
        '@type': 'WebSite',
        name: 'jjlmoya Utilities',
        url: 'https://jjlmoya.es',
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://jjlmoya.es/en',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Utilities',
          item: 'https://jjlmoya.es/en/utilities',
        },
        {
          '@type': 'ListItem',
          position: 3,
          name: 'Cooking',
          item: 'https://jjlmoya.es/en/cooking',
        },
        {
          '@type': 'ListItem',
          position: 4,
          name: 'Ingredient Rescaler',
          item: 'https://jjlmoya.es/en/ingredient-rescaler',
        },
      ],
    },
  ],
};
