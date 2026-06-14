import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Baking Soda and Baking Powder Calculator: Leavener Acid Neutralizer";
const description = "Calculate the exact baking soda and baking powder ratio for your recipe. Neutralize acidic ingredients like buttermilk and yogurt, avoid metallic aftertaste, and achieve perfect rise every time.";
const faq = [
  {
    question: "Why does substituting baking soda for baking powder require acid?",
    answer: "Baking soda is a pure base. It requires an acid source to activate and release carbon dioxide gas. Without sufficient acid, the baking soda will not fully react, leaving a bitter, metallic taste in the baked goods."
  },
  {
    question: "What is the difference between baking soda and baking powder?",
    answer: "Baking soda is 100% sodium bicarbonate, a base. Baking powder is a complete leavener, containing baking soda plus a dry acidifying agent (like cream of tartar) and starch. Baking powder is self-neutralizing."
  },
  {
    question: "How much baking powder equals 1 teaspoon of baking soda?",
    answer: "Baking soda is roughly 3-4 times stronger than baking powder. To replace 1 teaspoon of baking soda, you need approximately 3-4 teaspoons of baking powder. However, this substitution also adds acid salts that can alter flavor, so it's best to use our calculator for precise conversions."
  },
  {
    question: "Why does my cake taste soapy or metallic?",
    answer: "A soapy or metallic aftertaste is the classic sign of unreacted baking soda. When there isn't enough acid in the batter to fully neutralize the sodium bicarbonate, the alkaline residue remains after baking, imparting that unpleasant chemical flavor. Use our calculator to ensure complete neutralization."
  },
  {
    question: "Can I use Dutch-process cocoa powder as an acid?",
    answer: "No. Dutch-process cocoa powder has been treated with an alkalizing agent to reduce its natural acidity (pH ~7-8). Only natural cocoa powder (pH ~5-6) is acidic and will neutralize baking soda."
  },
  {
    question: "How does baking soda affect the browning of baked goods?",
    answer: "Baking soda increases the pH of the batter, making it more alkaline. A higher pH accelerates the Maillard browning reaction, resulting in darker crusts and deeper flavors in cookies and cakes."
  }
];

const howTo = [
  {
    name: "Enter flour weight",
    text: "Input the total weight of flour in your recipe in grams or ounces to calculate the total required leavening power."
  },
  {
    name: "Add acidic ingredients",
    text: "Select your recipe's acidic ingredients (such as buttermilk, yogurt, or lemon juice) and input their weights."
  },
  {
    name: "Check the pH balance",
    text: "Observe the virtual pH balance scale. A balanced scale indicates optimal neutralization without metallic off-flavors."
  },
  {
    name: "Measure the leaveners",
    text: "Read the recommended amount of baking soda for neutralization and the necessary baking powder booster to achieve the target rise."
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
  slug: 'leavener-acid-neutralizer',
  title: 'Leavener Acid Neutralizer',
  description: 'Calculate the exact baking soda and baking powder ratio for your recipe. Neutralize acidic ingredients like buttermilk and yogurt, avoid metallic aftertaste, and achieve perfect rise every time.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: "Leavener Acid Neutralizer",
    subtitle: "Precise stoichiometry for perfect pastry rise and flavor",
    flourLabel: "Flour Weight",
    addAcidLabel: "Add Acidic Ingredient",
    weightLabel: "Weight",
    removeButton: "Remove",
    bakingSodaNeeded: "Neutralized Baking Soda",
    requiredBakingPowder: "Target Leavening",
    providedBakingPowderEquivalent: "Leavening from Baking Soda",
    boosterBakingPowder: "Extra Baking Powder Booster",
    resultsTitle: "Calculated Leaveners",
    statusBalanced: "Balanced",
    statusAcidic: "Excess Acid",
    statusAlkaline: "Excess Base",
    gramsUnit: "g",
    ouncesUnit: "oz",
    teaspoonsUnit: "tsp",
    scaleBalanceTitle: "Virtual pH Balance",
    acidListTitle: "Acidic Ingredients",
    unitLabel: "Measurement System",
    metricUnit: "Metric (g)",
    imperialUnit: "Imperial (oz)",
    acid_buttermilk: "Buttermilk",
    acid_yogurt: "Yogurt",
    acid_sour_cream: "Sour Cream",
    acid_honey: "Honey",
    acid_molasses: "Molasses",
    acid_cocoa: "Natural Cocoa Powder",
    acid_lemon_juice: "Lemon Juice",
    acid_vinegar: "Vinegar",
    stoichiometryBadge: "pH Stoichiometry",
    simulateSodaLabel: "Simulate Added Baking Soda",
    autoBalanceBtn: "Auto-Balance",
    sodaAddedLabel: "Baking Soda Added"
  },
  faq,
  howTo,
  seo: [
    {
      type: 'summary',
      title: 'Key Takeaways for Perfect Leavening',
      items: [
        'Baking soda needs acid to activate ; without it, your bake will taste soapy and metallic',
        'Baking powder is self-neutralizing and provides extra leavening power as a booster',
        'The standard target is 4% of flour weight in baking powder equivalent for proper rise',
        'Use the neutralization table below to match your acidic ingredients to the correct amount of baking soda'
      ]
    },
    {
      type: 'title',
      text: 'The Chemistry of Chemical Leaveners in Baking',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Chemical leavening relies on <strong>acid-base neutralization reactions</strong> to produce carbon dioxide (CO2) gas, which gets trapped in the batter matrix, causing it to rise during baking. Achieving the correct ratio between sodium bicarbonate (baking soda) and acidic ingredients is crucial. <strong>Too much soda</strong> leads to unreacted alkaline residue, which imparts a soapy, metallic flavor and yellow discoloration. <strong>Too much acid</strong> can result in a dense, flat bake with poor volume.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '3-4x',
          label: 'Soda stronger than baking powder',
          icon: 'mdi:flash'
        },
        {
          value: '4%',
          label: 'Target leavening (% of flour weight)',
          icon: 'mdi:target'
        },
        {
          value: '1/4 tsp',
          label: 'Soda per 120g buttermilk/yogurt',
          icon: 'mdi:spoon-sugar'
        },
        {
          value: '0.0125',
          label: 'Neutralization ratio (dairy acids)',
          icon: 'mdi:scale-balance'
        }
      ]
    },
    {
      type: 'title',
      text: 'Baking Soda vs. Baking Powder: The Complete Comparison',
      level: 3
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Baking Soda',
          icon: 'mdi:flask-outline',
          description: 'Pure sodium bicarbonate (NaHCO3). A strong alkaline base that requires external acid to activate and produce CO2.',
          points: [
            '3-4x stronger than baking powder',
            'Needs acid (buttermilk, yogurt, lemon juice) to react',
            'Excess causes soapy, metallic taste and yellow crumb',
            'Raises pH ; enhances Maillard browning in cookies',
            'Single-acting: releases CO2 immediately upon mixing'
          ]
        },
        {
          title: 'Baking Powder',
          icon: 'mdi:flask-round-bottom-outline',
          description: 'A complete leavening system containing baking soda + dry acid salts + starch filler. Self-neutralizing and reliable.',
          highlight: true,
          points: [
            'Contains its own acid (monocalcium phosphate, SAP)',
            'Double-acting: releases CO2 when mixed AND when heated',
            'No metallic aftertaste ; already pH-balanced',
            'Weaker per gram ; use 3-4x more to match soda power',
            'Best as a booster when soda alone can\'t lift all the flour'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Acid Ingredient', 'Standard Weight', 'Neutralized Baking Soda', 'Neutralization Ratio'],
      rows: [
        ['Buttermilk / Yogurt / Sour Cream', '120g (1/2 Cup)', '1.5g (1/4 tsp)', '0.0125'],
        ['Lemon Juice / Vinegar', '15g (1 tbsp)', '1.5g (1/4 tsp)', '0.1000'],
        ['Natural Cocoa Powder', '80g (1 Cup)', '3.0g (1/2 tsp)', '0.0375'],
        ['Honey', '340g (1 Cup)', '3.0g (1/2 tsp)', '0.0088'],
        ['Molasses', '328g (1 Cup)', '3.0g (1/2 tsp)', '0.0091']
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Troubleshooting: Is Your Leavening Out of Balance?',
      badge: 'Quick Check',
      html: '<strong>If your cake collapsed:</strong> Too much acid or too little leavening overall ; the CO2 escaped before the structure set.<br/><br/><strong>If your cake is dense and flat:</strong> Too much acid without enough baking soda to neutralize it, or insufficient total leavening for the flour weight.<br/><br/><strong>If your cake tastes soapy or metallic:</strong> Excess unreacted baking soda ; add more acidic ingredients or reduce the soda.<br/><br/><strong>If your cake has yellow spots:</strong> Classic sign of undissolved, unreacted baking soda clumps ; sift your soda with the flour next time.'
    },
    {
      type: 'title',
      text: 'How to Balance Leaveners and Avoid Metallic Taste',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'To achieve optimal flavor and rise, follow this process: <strong>First</strong>, determine the amount of baking soda needed to fully neutralize the acidic components of your batter using the table above. <strong>Next</strong>, convert that baking soda to its baking powder equivalent (multiply by 4) and compare it with the total leavening power needed for your flour ; typically <strong>4% of the flour weight</strong> in baking powder equivalent. <strong>If there is a shortfall</strong>, add the remaining leavening power in the form of neutral baking powder as a booster. Our calculator does all of this automatically.'
    },
    {
      type: 'list',
      icon: 'mdi:alert-circle-outline',
      items: [
        'Never substitute baking soda 1:1 for baking powder ; soda is 3-4x stronger and needs acid',
        'Always sift baking soda with dry ingredients to prevent bitter clumps',
        'Dutch-process cocoa is NOT acidic ; use natural cocoa powder if relying on cocoa for acid',
        'Honey and molasses are weakly acidic ; they need much less soda per gram than lemon juice',
        'Work quickly after mixing: chemical leavening starts reacting immediately upon contact with liquid'
      ]
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Neutralization Ratio',
          definition: 'The proportion of baking soda needed to completely neutralize a given weight of acid ingredient. Lower ratios mean the ingredient is less acidic per gram.'
        },
        {
          term: 'Leavening Power',
          definition: 'The total amount of CO2 gas a leavening agent can produce. Measured in baking powder equivalents, where 4% of flour weight is the standard target for cakes and muffins.'
        },
        {
          term: 'Double-Acting Baking Powder',
          definition: 'Baking powder that releases CO2 in two stages: first when mixed with liquid at room temperature, and second when exposed to oven heat. Provides a more reliable rise.'
        },
        {
          term: 'Maillard Reaction',
          definition: 'A chemical reaction between amino acids and reducing sugars that browns food and creates complex flavors. Enhanced by higher pH from excess baking soda ; desirable in cookies, undesirable in delicate cakes.'
        },
        {
          term: 'pH Balance',
          definition: 'The measure of acidity or alkalinity of the batter. A neutral pH (around 7) means all baking soda has reacted with all acid. Slightly alkaline favors browning; acidic favors tenderness.'
        }
      ]
    },
    {
      type: 'tip',
      html: '<strong>Browning and pH:</strong> While complete neutralization is key for flavor, a slightly alkaline batter (due to a tiny excess of baking soda) can be desirable in chocolate cakes and cookies. A higher pH enhances Maillard browning, yielding darker colors, crisper edges, and deeper caramelized notes. For delicate vanilla cakes, aim for exact neutralization to preserve a pure, clean taste.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
