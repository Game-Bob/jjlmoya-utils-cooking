import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'roux-master-guide',
  title: 'Roux Master Guide and Mother Sauces | Cooking Utilities',
  description: 'Interactive Roux Calculator. Learn to create perfect Béchamel, Velouté, and Espagnole with exact proportions. The foundation of French haute cuisine.',
  faqTitle: 'Frequently Asked Questions',
  faq: [
    {
      question: 'What is a Roux and what is it used for?',
      answer: 'It is a mixture of fat (usually butter) and flour cooked over low heat. It is used as the base thickening agent for French mother sauces like Béchamel or Velouté.',
    },
    {
      question: 'What is the ideal proportion for a Roux?',
      answer: 'The standard proportion is 1:1 by weight. For example, 50g of butter and 50g of flour. This mixture can thicken approximately 1 liter of liquid depending on the desired consistency.',
    },
    {
      question: 'What is the difference between types of Roux?',
      answer: 'White Roux cooks 2-3 minutes (Béchamel). Blond cooks 5-8 minutes (Velouté). Brown or "Dark" cooks up to 15-20 minutes (Espagnole). The darker it is, the more nutty flavor but less thickening power.',
    },
    {
      question: 'How do I avoid lumps?',
      answer: 'The golden rule is opposite temperature: cold liquid over hot roux, or hot liquid over cold roux. Add liquid gradually and whisk constantly.',
    },
    {
      question: 'Why do I need more dark roux?',
      answer: 'When toasting roux, heat breaks long starch chains into shorter chains called dextrins. These taste good but are less effective at thickening. That is why dark roux needs 15% more weight than white roux to thicken equally.',
    },
  ],
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'Larousse Gastronomique - The Bible of Cooking',
      url: 'https://www.laroussecocina.com/',
    },
    {
      name: 'Mastering the Art of French Cooking - Julia Child',
      url: 'https://www.juliachild.com/',
    },
    {
      name: 'On Food and Cooking - Harold McGee (The Science of Roux)',
      url: 'https://www.foodscience.org/',
    },
  ],
  howTo: [
    {
      name: 'Select the type of liquid',
      text: 'Choose between milk (Béchamel), light stock (Velouté), dark stock (Espagnole) or tomato. Each requires a different type of roux.',
    },
    {
      name: 'Define the desired thickness',
      text: 'From soup/cream to croquette dough. The calculator will automatically adjust the roux ratio needed.',
    },
    {
      name: 'Enter the volume of liquid',
      text: 'Specify how many ml of liquid you need to thicken. The calculator will tell you exactly how much butter and flour to use.',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Structural Chemistry: Gelatinization',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To master roux, you must understand what happens at the microscopic level. Wheat flour contains tightly packed starch granules (amylose and amylopectin). When heating flour in fat (which isolates particles), we prepare the starch. When we add hot liquid, the granules absorb water, swell up to 10 times their size and burst, releasing starch molecules that form a three-dimensional network that "traps" water. <strong>That is thickening.</strong>',
    },
    {
      type: 'title',
      text: 'The Cost of Flavor: Dextrinization',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'When toasting roux to develop flavor (Dark Roux), heat breaks long starch chains into shorter chains called <em>dextrins</em>. These shorter chains taste good (toasted/sweet) but are worse at building thickening networks. That is why, <strong>the darker the roux, the more of it you need to thicken the same amount.</strong>',
    },
    {
      type: 'title',
      text: 'Escoffier\'s Mother Sauces',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Auguste Escoffier codified the 5 Mother Sauces in the early 20th century. Three of them depend strictly on Roux: <strong>Béchamel</strong> (White Roux + Milk), <strong>Velouté</strong> (Blond Roux + Light Stock), and <strong>Espagnole</strong> (Dark Roux + Dark Stock). Mastering them means mastering hundreds of derivative sauces.',
    },
    {
      type: 'title',
      text: 'Common Mistakes and Solutions',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Too thin:</strong> You used less than 60g of roux per liter.',
        '<strong>Flour taste:</strong> You did not cook white roux for the minimum 2 minutes needed.',
        '<strong>Lumpy:</strong> You added hot milk to hot roux. Use thermal shock!',
        '<strong>Dark sauce watery:</strong> You did not compensate for the loss of thickening power from toasting.',
      ],
    },
  ],
  ui: {
    baseLiquid: 'Base Liquid',
    volume: 'Volume',
    ml: 'ml',
    liquidType: 'Liquid Type',
    milk: 'Milk',
    lightStock: 'Light Stock',
    darkStock: 'Dark Stock',
    tomato: 'Tomato',
    sauceTexture: 'Sauce Texture',
    soup: 'Soup / Cream',
    normalSauce: 'Normal Sauce',
    thick: 'Thick / Filling',
    croquette: 'Croquette / Dough',
    rouxMix: 'Roux Mix',
    butter: 'Butter',
    flour: 'Flour',
    instructions: 'Instructions',
    sauceName: 'Sauce Type',
    ratio: 'Ratio',
    chefTip: 'Chef\'s Tip',
    white: 'White',
    blond: 'Blond',
    brown: 'Brown',
    beurreManied: 'Beurre Manié (If you need to adjust at the end)',
  },
  schemas: [],
};
