import type { ToolLocaleContent } from "../../../types";
import { bibliography } from "../bibliography";

const title = "Professional Roux Ratio Calculator and Sauce Guide";
const description = "Master the foundation of French mother sauces. Calculate exact roux proportions for Béchamel, Velouté, and Espagnole with professional accuracy.";
const faq = [
    {
      question: "What is a Roux and why is it used?",
      answer:
        "A Roux is a mixture of equal parts fat and flour cooked together. It acts as the primary structure for French mother sauces, providing a smooth, stable thickness that doesn't separate.",
    },
    {
      question: "What is the ideal proportion for a Roux?",
      answer:
        "The professional standard is a 1:1 ratio by weight. For example, 50g of butter to 50g of flour. This specific amount is designed to thicken approximately 1 liter of liquid safely.",
    },
    {
      question: "How do the different types of Roux differ?",
      answer:
        "White Roux is cooked for 2-3 mins (best for Béchamel). Blond Roux for 5-8 mins (Velouté). Brown Roux for 15-20 mins (Espagnole). Darker roux offers more depth of flavor but provides less thickening power.",
    },
    {
      question: "How can I avoid lumps in my sauce?",
      answer:
        "Follow the 'thermal shock' rule: add cold liquid to hot roux, or hot liquid to cold roux. Whisk constantly while adding the liquid in small increments to ensure total integration.",
    },
  ];
const howTo = [
    {
      name: "Select your base liquid",
      text: "Choose between milk, light stock, or dark stock depending on the mother sauce you are creating.",
    },
    {
      name: "Define desired thickness",
      text: "Decide if you need a light cream, a standard coating sauce, or a thick base for croquettes or fillings.",
    },
    {
      name: "Input your liquid volume",
      text: "Enter the total amount of liquid. Our calculator will provide the exact butter and flour weights required.",
    },
    {
      name: "Apply the correct cook time",
      text: "Cook your butter-flour mix to the specified level (White, Blond, or Brown) to match your sauce's flavor profile.",
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
  slug: "roux-ratio-calculator-thickening-sauce-guide",
  title: "Professional Roux Ratio Calculator and Sauce Guide",
  description:
    "Master the foundation of French mother sauces. Calculate exact roux proportions for Béchamel, Velouté, and Espagnole with professional accuracy.",
  ui: {
    baseLiquid: "Base Liquid",
    volume: "Volume",
    ml: "ml",
    liquidType: "Liquid Type",
    milk: "Milk",
    lightStock: "Light Stock",
    darkStock: "Dark Stock",
    tomato: "Tomato",
    sauceTexture: "Sauce Texture",
    soup: "Soup / Cream",
    normalSauce: "Standard Sauce",
    thick: "Thick / Filling",
    croquette: "Croquette / Dough",
    rouxMix: "Roux Mixture",
    butter: "Butter",
    flour: "Flour",
    instructions: "Instructions",
    sauceName: "Sauce Type",
    ratio: "Ratio",
    chefTip: "Chef's Tip",
    white: "White",
    blond: "Blond",
    brown: "Brown",
    beurreManied: "Beurre Manié (For final adjustments)",
    recipeBechamel: "Béchamel",
    recipeVeloute: "Velouté",
    recipeEspagnole: "Espagnole",
    recipeTomato: "Tomato Sauce",
    tipBechamel: "Use cold milk. Add it gradually at first or all at once if you whisk vigorously.",
    tipVeloute: "Use light poultry or fish stock. Let the roux smell like biscuits before adding the liquid.",
    tipEspagnole: "For powerful dark sauces. The roux should be chocolate-colored but not burnt.",
    tipTomato: "The roux will help give body and smoothness to the tomato's final texture.",
    rouxWhiteLabel: "White Roux",
    rouxBlondLabel: "Blond Roux",
    rouxBrownLabel: "Brown Roux",
    descWhite: "Cook only until it loses the raw flour smell. No color.",
    descBlond: "Look for a toasted butter color and nutty aroma.",
    descBrown: "Very low heat. Chocolate color. Note: requires +10% weight.",
    timeWhite: "2-3 min",
    timeBlond: "5-8 min",
    timeBrown: "15-20 min",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "What is a Roux and why is it used?",
      answer:
        "A Roux is a mixture of equal parts fat and flour cooked together. It acts as the primary structure for French mother sauces, providing a smooth, stable thickness that doesn't separate.",
    },
    {
      question: "What is the ideal proportion for a Roux?",
      answer:
        "The professional standard is a 1:1 ratio by weight. For example, 50g of butter to 50g of flour. This specific amount is designed to thicken approximately 1 liter of liquid safely.",
    },
    {
      question: "How do the different types of Roux differ?",
      answer:
        "White Roux is cooked for 2-3 mins (best for Béchamel). Blond Roux for 5-8 mins (Velouté). Brown Roux for 15-20 mins (Espagnole). Darker roux offers more depth of flavor but provides less thickening power.",
    },
    {
      question: "How can I avoid lumps in my sauce?",
      answer:
        "Follow the 'thermal shock' rule: add cold liquid to hot roux, or hot liquid to cold roux. Whisk constantly while adding the liquid in small increments to ensure total integration.",
    },
  ],
  howTo: [
    {
      name: "Select your base liquid",
      text: "Choose between milk, light stock, or dark stock depending on the mother sauce you are creating.",
    },
    {
      name: "Define desired thickness",
      text: "Decide if you need a light cream, a standard coating sauce, or a thick base for croquettes or fillings.",
    },
    {
      name: "Input your liquid volume",
      text: "Enter the total amount of liquid. Our calculator will provide the exact butter and flour weights required.",
    },
    {
      name: "Apply the correct cook time",
      text: "Cook your butter-flour mix to the specified level (White, Blond, or Brown) to match your sauce's flavor profile.",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Master Guide for Roux Calculation and Mother Sauce Standards",
      level: 2,
    },
    {
      type: "paragraph",
      html: "A <strong>roux</strong> is the structural foundation of classical French cuisine. Understanding the precise relationship between flour, butter, and liquid is the difference between a velvety sauce and a lumpy mixture that tastes of raw flour.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "1:1",
          label: "Flour:Fat Ratio",
          icon: "mdi:scale-balance",
        },
        {
          value: "3 min",
          label: "White Roux Time",
          icon: "mdi:timer-sand",
        },
        {
          value: "100g/L",
          label: "Thick Sauce Ratio",
          icon: "mdi:waves",
        },
        {
          value: "15 min",
          label: "Brown Roux Time",
          icon: "mdi:fire",
        },
      ],
    },
    {
      type: "title",
      text: "Levels of Toasting and Thickening Power",
      level: 3,
    },
    {
      type: "comparative",
      columns: 3,
      items: [
        {
          title: "White Roux",
          icon: "mdi:flask-round-bottom-outline",
          description: "Cooked for 2-3 minutes. The most potent starch binder.",
          points: [
            "Base for Béchamel",
            "Maximum thickening power",
            "Neutral cream/milk flavor",
            "No visible color change",
          ],
        },
        {
          title: "Blond Roux",
          icon: "mdi:gold",
          description: "Cooked for 5-8 minutes until a pale golden hue is reached.",
          highlight: true,
          points: [
            "Base for Velouté",
            "Medium thickening power",
            "Light nutty aroma",
            "Ideal for light stocks",
          ],
        },
        {
          title: "Brown Roux",
          icon: "mdi:coffee",
          description: "Cooked for 15-20 minutes. Deep, roasted flavor profile.",
          points: [
            "Base for Espagnole sauce",
            "Lower thickening power (-30%)",
            "Complex roasted nut flavor",
            "Thinner, more liquid texture",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Roux Weight per Liter by Desired Texture",
      level: 3,
    },
    {
      type: "table",
      headers: ["Desired Texture", "Butter (g)", "Flour (g)", "Liquid (L)"],
      rows: [
        ["Light Soup / Cream", "25g", "25g", "1 Liter"],
        ["Standard Coating Sauce", "50g", "50g", "1 Liter"],
        ["Binding Sauce (Gratins)", "70g", "70g", "1 Liter"],
        ["Croquette Dough / Filling", "125g", "125g", "1 Liter"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Lumpy Sauce or Floury Aftertaste?",
      html: "If your sauce is lumpy, you likely added hot liquid to a hot roux. Always apply thermal shock (cold liquid over hot roux). If it tastes like flour, increase the initial cooking time before adding liquid to properly gelatinize the starch.",
    },
    {
      type: "title",
      text: "Glossary of Sauce Technology",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Dextrinization",
          definition:
            "The thermal breakdown of starch into short chains. Increases flavor but weakens thickening.",
        },
        {
          term: "Gelatinization",
          definition:
            "The process where starch granules absorb liquid and expand, creating thickness.",
        },
        {
          term: "Beurre Manié",
          definition:
            "A cold mixture of flour and butter used for quick texture corrections at the end.",
        },
        {
          term: "Mother Sauces",
          definition:
            "Escoffier's 5 base sauces (Béchamel, Velouté, Espagnole, Hollandaise, and Tomato).",
        },
      ],
    },
    {
      type: "tip",
      title: "The Cold Butter Trick (Monter au Beurre)",
      html: "At the very end, whisk in a small knob of cold butter. This provides a professional high-gloss finish and an incredibly silky mouthfeel when serving.",
    },
    {
      type: "paragraph",
      html: "Our roux ratio calculator ensures your sauces always have the perfect technical consistency for every dish.",
    },
  ],
  bibliography,
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
