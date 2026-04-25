import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "US Cooking Conversion Calculator: Cups to Grams";
const description = "Convert cups, tablespoons, and Fahrenheit to the metric system. Your professional compass for decoding American recipes with absolute precision.";
const faq = [
    {
      question: "What's the difference between 1 cup and 250ml?",
      answer: "1 US cup is approximately 236.6ml, not 250ml. For practical kitchen results, we use 240ml. Even this small 4% difference can affect sensitive recipes like macarons or professional pastries.",
    },
    {
      question: "Why doesn't flour always weigh the same?",
      answer: "Flour compacts over time and during transport. A freshly sifted cup of flour weighs less than a 'packed' cup from the bottom of the bag. Professional bakers always weigh ingredients for consistency.",
    },
    {
      question: "What's the difference between Tbsp and tsp?",
      answer: "1 Tablespoon (Tbsp) is 15ml, while 1 Teaspoon (tsp) is 5ml. Exactly three teaspoons fit into one tablespoon. Errors in spice measurements (usually tsp) are common in home baking.",
    },
    {
      question: "Is a US cup the same as an imperial cup?",
      answer: "No. A US cup is 236ml, whereas an Imperial (UK) cup is 284ml—a 20% difference! Most online recipes use US cups. If not specified, the US standard is the safest assumption.",
    },
    {
      question: "What temperature is 'Gas Mark 4'?",
      answer: "Gas Mark 4 is equivalent to 350°F or 175°C. This is the most common temperature for standard cake baking.",
    },
  ];
const howTo = [
    {
      name: "Select conversion type",
      text: "Choose between Cups to Grams, Tablespoons/Teaspoons to Grams, or Fahrenheit to Celsius.",
    },
    {
      name: "Pick your ingredient",
      text: "Every food has a different density. Flour, sugar, and butter all weigh differently per cup.",
    },
    {
      name: "Enter the quantity",
      text: "Input the number of cups, spoons, or degrees. The converter calculates the metric equivalent instantly.",
    },
    {
      name: "Adjust your recipe",
      text: "With exact metric measurements, you can now replicate any international recipe with professional success.",
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
  slug: "us-cooking-conversion-calculator-cups-to-grams-fahrenheit",
  title: "US Cooking Conversion Calculator: Cups to Grams",
  description:
    "Convert cups, tablespoons, and Fahrenheit to the metric system. Your professional compass for decoding American recipes with absolute precision.",
  ui: {
    copied: "Copied",
    noHistory: "No history",
    load: "Load",
    delete: "Delete",
    tabCups: "Cups to Grams",
    tabSpoons: "Spoons to Grams",
    tabTemperatures: "Temperatures",
    tabCupsAriaLabel: "Cups to Grams",
    tabSpoonsAriaLabel: "Spoons to Grams",
    tabTempsAriaLabel: "Oven Temperatures",
    stepSelectIngredient: "Select Ingredient",
    stepHowManyCups: "How Many Cups?",
    stepSelectMeasure: "Select Measure",
    stepQuantity: "Quantity",
    stepOvenConversion: "Oven Conversion",
    stepFrequentTemps: "Frequent Recipe Temperatures",
    cupFlour: "Flour",
    cupFlourSub: "120g / cup",
    cupWhiteSugar: "White Sugar",
    cupWhiteSugarSub: "200g / cup",
    cupBrownSugar: "Brown Sugar",
    cupBrownSugarSub: "220g / cup",
    cupPowderSugar: "Powdered Sugar",
    cupPowderSugarSub: "115g / cup",
    cupButter: "Butter",
    cupButterSub: "227g / cup",
    cupCocoa: "Cocoa Powder",
    cupCocoaSub: "85g / cup",
    cupLiquids: "Liquids",
    cupLiquidsSub: "240g / cup",
    cupOats: "Oats",
    cupOatsSub: "90g / cup",
    cupFlourAriaLabel: "Flour",
    cupWhiteSugarAriaLabel: "White Sugar",
    cupBrownSugarAriaLabel: "Brown Sugar",
    cupPowderSugarAriaLabel: "Powdered Sugar",
    cupButterAriaLabel: "Butter",
    cupCocoaAriaLabel: "Cocoa",
    cupLiquidsAriaLabel: "Liquid",
    cupOatsAriaLabel: "Oats",
    stepperMinus: "Subtract",
    stepperPlus: "Add",
    cupsAmountLabel: "Amount of Cups",
    spoonQuantityLabel: "Quantity",
    cupQuick1_4: "1/4 Cup",
    cupQuick1_3: "1/3 Cup",
    cupQuick1_2: "1/2 Cup",
    cupQuick1: "1 Cup",
    unitGrams: "Grams",
    unitGramsML: "Grams / Milliliters",
    spoonMeasureLabel: "Select Measure",
    spoonTablespoon: "Tablespoon (Tbsp)",
    spoonTeaspoon: "Teaspoon (tsp)",
    spoonTablespoonAriaLabel: "Large tablespoon",
    spoonTeaspoonAriaLabel: "Small teaspoon",
    spoonSelectIngredient: "Select Ingredient",
    spoonLeavening: "Leavening",
    spoonLeaveningSub: "Baking Powder",
    spoonSalt: "Fine Salt",
    spoonSaltSub: "Mineral",
    spoonSugar: "White Sugar",
    spoonSugarSub: "Granulated",
    spoonLiquids: "Liquids",
    spoonLiquidsSub: "Water, Oil",
    spoonLeavingAriaLabel: "Chemical Leavening",
    spoonSaltAriaLabel: "Salt",
    spoonSugarAriaLabel: "White Sugar",
    spoonLiquidsAriaLabel: "Liquid",
    spoonQuick1_4: "1/4",
    spoonQuick1_2: "1/2",
    spoonQuick1: "1",
    spoonQuick2: "2",
    tempFahrenheit: "Fahrenheit (°F)",
    tempCelsius: "Celsius (°C)",
    tempFahrenheitAriaLabel: "Fahrenheit",
    tempCelsiusAriaLabel: "Celsius",
    tempPreset275: "275°F",
    tempPreset275Desc: "135°C - Drying",
    tempPreset275AriaLabel: "Set 275 Fahrenheit",
    tempPreset325: "325°F",
    tempPreset325Desc: "165°C - Dense cake",
    tempPreset325AriaLabel: "Set 325 Fahrenheit",
    tempPreset350: "350°F",
    tempPreset350Desc: "175°C - Standard baking",
    tempPreset350AriaLabel: "Set 350 Fahrenheit",
    tempPreset400: "400°F",
    tempPreset400Desc: "200°C - Breads / Pies",
    tempPreset400AriaLabel: "Set 400 Fahrenheit",
    tempPreset425: "425°F",
    tempPreset425Desc: "220°C - Pizzas / Pastries",
    tempPreset425AriaLabel: "Set 425 Fahrenheit",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "What's the difference between 1 cup and 250ml?",
      answer: "1 US cup is approximately 236.6ml, not 250ml. For practical kitchen results, we use 240ml. Even this small 4% difference can affect sensitive recipes like macarons or professional pastries.",
    },
    {
      question: "Why doesn't flour always weigh the same?",
      answer: "Flour compacts over time and during transport. A freshly sifted cup of flour weighs less than a 'packed' cup from the bottom of the bag. Professional bakers always weigh ingredients for consistency.",
    },
    {
      question: "What's the difference between Tbsp and tsp?",
      answer: "1 Tablespoon (Tbsp) is 15ml, while 1 Teaspoon (tsp) is 5ml. Exactly three teaspoons fit into one tablespoon. Errors in spice measurements (usually tsp) are common in home baking.",
    },
    {
      question: "Is a US cup the same as an imperial cup?",
      answer: "No. A US cup is 236ml, whereas an Imperial (UK) cup is 284ml—a 20% difference! Most online recipes use US cups. If not specified, the US standard is the safest assumption.",
    },
    {
      question: "What temperature is 'Gas Mark 4'?",
      answer: "Gas Mark 4 is equivalent to 350°F or 175°C. This is the most common temperature for standard cake baking.",
    },
  ],
  howTo: [
    {
      name: "Select conversion type",
      text: "Choose between Cups to Grams, Tablespoons/Teaspoons to Grams, or Fahrenheit to Celsius.",
    },
    {
      name: "Pick your ingredient",
      text: "Every food has a different density. Flour, sugar, and butter all weigh differently per cup.",
    },
    {
      name: "Enter the quantity",
      text: "Input the number of cups, spoons, or degrees. The converter calculates the metric equivalent instantly.",
    },
    {
      name: "Adjust your recipe",
      text: "With exact metric measurements, you can now replicate any international recipe with professional success.",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Master Guide for American Kitchen Measure Conversions",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Converting <strong>cups to grams</strong> or <strong>Fahrenheit to Celsius</strong> is the first step to mastering international recipes. American cooking relies on volume, which introduces up to 25% variability in dry ingredients like flour.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "120g",
          label: "1 Cup of Flour",
          icon: "mdi:grain",
        },
        {
          value: "227g",
          label: "Butter Stick",
          icon: "mdi:cube-outline",
        },
        {
          value: "175°C",
          label: "350°F Equivalent",
          icon: "mdi:thermometer",
        },
        {
          value: "240ml",
          label: "1 Cup Volume",
          icon: "mdi:water-percent",
        },
      ],
    },
    {
      type: "title",
      text: "Critical Differences Between Volume and Weight",
      level: 3,
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Volume Measurement (Cups)",
          icon: "mdi:cup-water",
          description: "Used in US home recipes. Measures the space an ingredient occupies.",
          points: [
            "Highly dependent on compaction",
            "Common 20-30% error in flours",
            "Inconsistent across cup brands",
            "Requires sifting for better accuracy",
          ],
        },
        {
          title: "Weight Measurement (Grams)",
          icon: "mdi:scale-balance",
          description: "The standard for European and professional baking. Absolute precision.",
          highlight: true,
          points: [
            "Precision of +/- 1g always",
            "Consistent, repeatable results",
            "Less cleanup (single bowl)",
            "Facilitates mathematical scaling",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Common Ingredient Equivalencies",
      level: 3,
    },
    {
      type: "table",
      headers: ["Ingredient", "1 Cup (Volume)", "Grams (Weight)", "Density"],
      rows: [
        ["All-Purpose Flour", "1 Cup", "120g", "Low"],
        ["White Sugar", "1 Cup", "200g", "Medium"],
        ["Brown Sugar", "1 Cup", "220g (packed)", "High"],
        ["Butter", "1 Cup (2 sticks)", "227g", "High"],
        ["Cocoa Powder", "1 Cup", "85g", "Very Low"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Is Your Cake Coming Out Dry?",
      html: "The most common issue with cups is 'dipping the cup' into the flour bag. This compacts the powder, and you might be adding up to 40g of extra flour per cup. The solution is <strong>always converting to grams</strong> using our calculator.",
    },
    {
      type: "title",
      text: "Glossary of US Kitchen Units",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Cup",
          definition: "A unit of volume equal to about 240ml. The backbone of American cooking.",
        },
        {
          term: "Tbsp (Tablespoon)",
          definition: "A large spoon measurement, equal to 15ml or 3 teaspoons.",
        },
        {
          term: "tsp (Teaspoon)",
          definition: "A small spoon measurement, equal to 5ml. Critical for leavening and salt.",
        },
        {
          term: "Stick of Butter",
          definition: "Common US butter format weighing exactly 4oz or 113.5g (half a cup).",
        },
      ],
    },
    {
      type: "tip",
      title: "The Spoon and Level Method",
      html: "If you don't have a scale and MUST use cups, spoon the ingredient into the cup without packing it, then level off with a knife. It's far more accurate than dipping.",
    },
    {
      type: "paragraph",
      html: "Using a professional converter turns the frustration of foreign recipes into the success of a perfect bake.",
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
