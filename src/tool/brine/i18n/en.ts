import type { ToolLocaleContent } from "../../../types";

const title = "Equilibrium Brining and Fermentation Calculator";
const description = "Master the science of equilibrium brining for juicy meats and perfect fermentations. Calculate exact salinity based on total product and water weight.";
const faq = [
    {
      question: "What is the equilibrium brining method?",
      answer:
        "The equilibrium method calculates salt based on total weight (water + ingredient), not just weighted water. it guarantees consistent salt concentration regardless of the amount of ingredient you use.",
    },
    {
      question: "How much salt do I need for pickles?",
      answer:
        "For fermented vegetables (pickles, sauerkraut, kimchi), 2% to 3% salt is recommended. For meats, between 1.5% and 2%. The calculator gives the exact amount based on your ingredient weight.",
    },
    {
      question: "Can I freeze meat after brining?",
      answer:
        "Yes, it's ideal. Brine protects against freezer burn and the meat will be ready to cook upon thawing. However, avoid freezing fermented vegetables as they will turn mushy.",
    },
    {
      question: "Why add sugar to the brine?",
      answer:
        "Sugar has two functions: it facilitates the Maillard reaction (browning) in meats and balances the saline flavor without making the product taste sweet.",
    },
  ];
const howTo = [
    {
      name: "Determine your goal",
      text: "Decide if you are brining meats (1.5-2%), fermenting (2-3%), making sauces (3.5%), or long-term preserves (5%+). Each has a different time and purpose.",
    },
    {
      name: "Weigh ingredient and water",
      text: "Weigh the product (meat, vegetables) and water exactly. Precision is critical: even 5g difference changes result accuracy. Use a precision scale.",
    },
    {
      name: "Calculate with the tool",
      text: "Enter the weights into the calculator and adjust salinity according to your product type. The tool tells you exactly how much salt and sugar you need.",
    },
    {
      name: "Dissolve and mix",
      text: "Completely dissolve salt in cold water before adding product. For meats, ensure brine covers everything. For fermenteds, ensure product is submerged.",
    },
    {
      name: "Ferment or cure",
      text: "Refrigerate based on type: 4-48 hours for meats, 1-3 weeks for fermenteds. Exact time depends on temperature and personal taste.",
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
  slug: "equilibrium-brining-calculator-meat-fermentation-ratios",
  title: "Equilibrium Brining and Fermentation Calculator",
  description:
    "Master the science of equilibrium brining for juicy meats and perfect fermentations. Calculate exact salinity based on total product and water weight.",
  ui: {
    calculator: "Calculator",
    subtitle: "Enter weights to calculate the perfect balance.",
    productWeight: "Product Weight (g)",
    waterWeight: "Water Weight (g)",
    desiredSalinity: "Desired Salinity",
    meat: "Meats (1.5%)",
    fermented: "Fermenteds (2.0%)",
    sauces: "Sauces (3.5%)",
    preserves: "Preserves (5.0%)",
    addSugar: "Add Sugar",
    sugarHint: "Balances flavor and helps browning (50% of salt)",
    saltNeeded: "Salt Needed",
    sugarOptional: "Sugar (Optional)",
    estimatedTime: "Estimated Time",
    product: "Product",
    total: "Total",
    unitGrams: "grams",
    timeMeatsLabel: "Time (Meats)",
    timeMeatsDuration: "4 - 48 Hours",
    timeVegetablesLabel: "Time (Vegetables)",
    timeVegetablesDuration: "1 - 3 Weeks",
    timePreservesLabel: "Time (Preserves)",
    timePreservesDuration: "1+ Months",
  },
  faqTitle: "Frequently Asked Questions",
  bibliographyTitle: "Sources and References",
  faq: [
    {
      question: "What is the equilibrium brining method?",
      answer:
        "The equilibrium method calculates salt based on total weight (water + ingredient), not just weighted water. it guarantees consistent salt concentration regardless of the amount of ingredient you use.",
    },
    {
      question: "How much salt do I need for pickles?",
      answer:
        "For fermented vegetables (pickles, sauerkraut, kimchi), 2% to 3% salt is recommended. For meats, between 1.5% and 2%. The calculator gives the exact amount based on your ingredient weight.",
    },
    {
      question: "Can I freeze meat after brining?",
      answer:
        "Yes, it's ideal. Brine protects against freezer burn and the meat will be ready to cook upon thawing. However, avoid freezing fermented vegetables as they will turn mushy.",
    },
    {
      question: "Why add sugar to the brine?",
      answer:
        "Sugar has two functions: it facilitates the Maillard reaction (browning) in meats and balances the saline flavor without making the product taste sweet.",
    },
  ],
  howTo: [
    {
      name: "Determine your goal",
      text: "Decide if you are brining meats (1.5-2%), fermenting (2-3%), making sauces (3.5%), or long-term preserves (5%+). Each has a different time and purpose.",
    },
    {
      name: "Weigh ingredient and water",
      text: "Weigh the product (meat, vegetables) and water exactly. Precision is critical: even 5g difference changes result accuracy. Use a precision scale.",
    },
    {
      name: "Calculate with the tool",
      text: "Enter the weights into the calculator and adjust salinity according to your product type. The tool tells you exactly how much salt and sugar you need.",
    },
    {
      name: "Dissolve and mix",
      text: "Completely dissolve salt in cold water before adding product. For meats, ensure brine covers everything. For fermenteds, ensure product is submerged.",
    },
    {
      name: "Ferment or cure",
      text: "Refrigerate based on type: 4-48 hours for meats, 1-3 weeks for fermenteds. Exact time depends on temperature and personal taste.",
    },
  ],
  bibliography: [
    {
      name: "The Noma Guide to Fermentation - René Redzepi & David Zilber",
      url: "https://www.nomacph.com/",
    },
    {
      name: "Salt, Fat, Acid, Heat - Samin Nosrat",
      url: "https://www.saltfatacidheat.com/",
    },
    {
      name: "Pollan, Michael - Cooked",
      url: "https://michaelpollan.com/",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Master Guide for Equilibrium Brining and Fermentation",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<strong>Equilibrium brining</strong> is the ultimate technique to ensure juicy and safe results. Unlike traditional methods, this calculates salt based on the <strong>total weight</strong> of water and product, ensuring constant salinity regardless of container volume.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "1.5 - 2%",
          label: "Ideal Meat Ratio",
          icon: "mdi:food-steak",
        },
        {
          value: "2.5 - 3%",
          label: "Fermentation Ratio",
          icon: "mdi:flask-outline",
        },
        {
          value: "18-22°C",
          label: "Fermentation Temp",
          icon: "mdi:thermometer",
        },
        {
          value: "0.5%",
          label: "Balance Sugar",
          icon: "mdi:shaker-outline",
        },
      ],
    },
    {
      type: "title",
      text: "Differences Between Dry and Wet Brining",
      level: 3,
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Dry Brining",
          icon: "mdi:shaker-outline",
          description: "Salt is applied directly to product surface without additional water.",
          points: [
            "Much crispier skin on poultry",
            "More concentrated ingredient flavor",
            "Takes up less fridge space",
            "Ideal for steaks and whole chickens",
          ],
        },
        {
          title: "Wet Brining",
          icon: "mdi:water",
          description: "Product is submerged in water and salt solution calculated by equilibrium.",
          highlight: true,
          points: [
            "Superior moisture transfer",
            "Allows introduction of aromatics (spices)",
            "More uniform curing in large pieces",
            "Ideal for turkey, pork loin, and fish",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Times and Salinities by Application",
      level: 3,
    },
    {
      type: "table",
      headers: ["Category", "Salinity (%)", "Min. Time", "Primary Goal"],
      rows: [
        ["Poultry & Pork", "1.5% - 2.0%", "12 - 24 hours", "Juiciness and tenderness"],
        ["White Fish", "1.0% - 1.5%", "20 - 45 minutes", "Meat firmness"],
        ["Lacto-fermentation", "2.5% - 3.0%", "7 - 21 days", "Microbiological safety"],
        ["Sauces & Preserves", "3.5% - 5.0%", "1+ month", "Long-term preservation"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Identifying Brining Issues",
      html: "If brine has a foul (non-acidic) smell, colored mold (black, pink), or product becomes extremely soft, discard it. Surface white mold (Kahm yeast) is normal in fermenteds and can be removed.",
    },
    {
      type: "title",
      text: "Expert Curing Glossary",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Osmosis",
          definition: "Physical process where salt penetrates food cells to balance concentrations.",
        },
        {
          term: "Denaturation",
          definition: "Salt's effect on proteins allowing them to retain more water during cooking.",
        },
        {
          term: "Kahm Yeast",
          definition: "Thin white layer sometimes appearing on ferment surface; harmless but indicates low acidity.",
        },
        {
          term: "Lacto-fermentation",
          definition: "Anaerobic fermentation where bacteria convert sugars into lactic acid, preserving food.",
        },
      ],
    },
    {
      type: "tip",
      title: "Water Quality",
      html: "Always avoid tap water with high chlorine, as it can inhibit good bacteria growth in fermentations. Use filtered water or let water stand for 24h.",
    },
    {
      type: "paragraph",
      html: "Our equilibrium calculator eliminates guesswork from your recipes, allowing you to cook with the confidence of a professional.",
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
