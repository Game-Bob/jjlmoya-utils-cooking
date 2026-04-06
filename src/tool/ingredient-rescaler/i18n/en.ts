import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
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
      name: 'The Flavor Bible - Scaling Principles',
      url: 'https://www.worldcat.org/title/flavor-bible-the-essential-reference-for-more-than-150-essential-ingredients-and-how-to-cook-with-them/oclc/173496220',
    },
    {
      name: 'Harold McGee - On Food and Cooking',
      url: 'https://www.worldcat.org/title/on-food-and-cooking-the-science-and-lore-of-the-kitchen/oclc/1048131836',
    },
    {
      name: 'The Science of Cooking - Recipe Conversion',
      url: 'https://www.worldcat.org/title/the-science-of-cooking/oclc/911012387',
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
  seo: {
    title: 'Ingredient Scaler - Scale Your Recipes Easily',
    description: 'Scale recipes automatically based on the number of servings. Exact calculations to multiply or reduce ingredients without complications.',
    sections: [
      {
        heading: 'The Science Behind Recipe Scaling',
        content: 'Cooking is not just art, it\'s applied mathematics. Understanding how to adapt the proportions of your ingredients is the difference between a decent dish and a masterpiece, whether you\'re cooking for 2 or 20.',
      },
      {
        heading: 'How Does the Conversion Factor Work?',
        content: 'The heart of any culinary adaptation is the Conversion Factor (CF). Although our tool does it automatically, understanding the logic gives you full control over your cooking. It\'s a simple direct proportion: Desired Amount ÷ Original Amount = Factor (CF). If your recipe is for 4 people and you want to cook for 7, the factor is 1.75. Each ingredient is multiplied by that number.',
      },
      {
        heading: 'What Does NOT Scale Linearly',
        content: 'Multiplying all ingredients by 2 works for flour and water, but cooking is chemistry and thermodynamics. There are elements that behave exponentially or logarithmically, not linearly. Spices and salt: taste perception saturates. If you triple a stew, tripling cayenne pepper or clove can make it inedible. Golden rule: scale spices to 75% and adjust at the end. Yeast: in large fermented doughs, friction generates more heat and accelerates fermentation. Often, doubling the dough requires less than double the yeast to keep times controlled. Cooking times: perhaps the most common mistake. A 10kg turkey doesn\'t take twice as long as a 5kg one. Heat transmission depends on thickness, not just total weight. Always use a probe thermometer.',
      },
      {
        heading: 'Professional Cooking Tricks',
        content: 'Egg as a unit: if scaling asks you for "2.3 eggs", beat 3 eggs lightly and weigh the exact amount (an L egg is ~50g-55g without shell), or simply round if baking is not critical. Surface vs Volume: when reducing sauces, evaporation will be much faster because the relative surface is larger. Watch the reduction or add a bit more liquid. The Metric System is your friend: forget "cups" and "spoons". Scaling "1 cup + 1/4" is a nightmare. Scaling "180g" is multiplying a number. Always weigh your ingredients.',
      },
      {
        heading: 'Benefits of Scaling Correctly',
        content: 'Understanding and correctly applying recipe scaling has multiple benefits: consistency in dishes (same taste and texture every time), ingredient economy (no waste), adaptability (cooking for different numbers of people without losing quality), and culinary control (knowing exactly what you\'re doing in your kitchen).',
      },
      {
        heading: 'Complementary Tools',
        content: 'This ingredient scaler is perfect for adjusting recipes, but works well with other culinary tools: a measurement conversion calculator (to convert between cups and grams), a kitchen timer to control cooking times, and a proportion analyzer (like our Meringue Peak Calculator or Mold Scaler for baking).',
      },
    ],
  },
};
