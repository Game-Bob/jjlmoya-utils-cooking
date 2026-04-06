import type { ToolLocaleContent } from "../../../types";

export const content: ToolLocaleContent = {
  slug: "brine",
  title: "Equilibrium Brine Calculator",
  description:
    "The science of balance for juicy meats and perfect ferments. Calculate exact salinity based on total weight of ingredient and water.",
  ui: {
    calculator: "Calculator",
    subtitle: "Enter weights to calculate the perfect balance.",
    productWeight: "Product Weight (g)",
    waterWeight: "Water Weight (g)",
    desiredSalinity: "Desired Salinity",
    meat: "Meats (1.5%)",
    fermented: "Ferments (2.0%)",
    sauces: "Sauces (3.5%)",
    preserves: "Preserves (5.0%)",
    addSugar: "Add Sugar",
    sugarHint: "Balances flavor and aids browning (50% of salt)",
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
      question: "What is the equilibrium brine method?",
      answer:
        "The equilibrium method calculates salt based on total weight (water + ingredient), not just water. This guarantees consistent salt concentration regardless of ingredient quantity.",
    },
    {
      question: "How much salt do I need to make pickles?",
      answer:
        "For fermented vegetables (pickles, sauerkraut, kimchi) 2-3% salt is recommended. For meats, 1.5-2%. The calculator gives exact amounts based on your ingredient weight.",
    },
    {
      question: "Can I freeze meat after brining?",
      answer:
        "Yes, it's ideal. Brine protects against freezer burn and meat is ready to cook when thawed. However, avoid freezing fermented vegetables as they'll become mushy.",
    },
    {
      question: "Why add sugar to brine?",
      answer:
        "Sugar has two functions: it aids the Maillard reaction (browning) in meats and balances salty flavor without making it taste sweet. It doesn't turn your brine into dessert.",
    },
  ],
  howTo: [
    {
      name: "Determine your goal",
      text: "Decide if you're making brined meats (1.5-2%), ferments (2-3%), sauces (3.5%), or long-term preserves (5%+). Each has different time and purpose.",
    },
    {
      name: "Weigh ingredient and water",
      text: "Weigh product (meat, vegetables) and water precisely. Accuracy is critical: even 5g difference changes the result. Use a precision scale.",
    },
    {
      name: "Calculate with the tool",
      text: "Enter weights in the calculator and adjust salinity for your product type. Tool shows exactly how much salt and sugar you need.",
    },
    {
      name: "Dissolve and mix",
      text: "Completely dissolve salt in cold water before adding product. For meats, ensure brine covers everything. For ferments, weight must be submerged.",
    },
    {
      name: "Ferment or cure",
      text: "Refrigerate based on type: 4-48 hours for meats, 1-3 weeks for ferments. Exact time depends on temperature and your taste.",
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
      name: "Cooked - Michael Pollan",
      url: "https://michaelpollan.com/",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Why the Equilibrium Method?",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<strong>Equilibrium brine</strong> is the professional technique to guarantee consistent, safe, and delicious results in every fermentation. Unlike traditional recipes that measure salt only by water volume, this method considers <strong>total weight</strong> (Water + Ingredient).",
    },
    {
      type: "tip",
      html: "The Old Recipe Problem: If you fill a jar with pickles, there's little water. If you put a single pickle, there's lots of water. Using the same brine in both cases results in drastically different final salinities, which can lead to <strong>mold</strong> (too little salt) or <strong>inedible food</strong> (too much salt).",
    },
    {
      type: "title",
      text: "The Importance of Sugar",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Adding sugar to brine doesn't turn it into dessert. It's a fundamental chemical tool with two main functions.",
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Maillard Reaction",
          icon: "mdi:fire",
          description: "Essential for meats.",
          points: [
            "Sugar aids browning when cooking meat (pan, oven, grill)",
            "Without sugar, brined meat can turn pale and grayish",
            "Crucial for professional results",
          ],
        },
        {
          title: "Flavor Balance",
          icon: "mdi:palette",
          description: "Softens and rounds out flavor.",
          points: [
            "Salt is aggressive. Sugar softens that salty bite",
            "Doesn't make the product taste sweet",
            "Creates a rounder, more complex flavor profile",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Critical Ingredients: Water and Salt",
      level: 3,
    },
    {
      type: "paragraph",
      html: "The quality of base ingredients determines your brine's success. Not all ingredients are created equal.",
    },
    {
      type: "list",
      items: [
        "<strong>Filtered/Mineral Water:</strong> Best option. Clean and chemical-free.",
        "<strong>Tap Water (Boiled):</strong> Boil and cool to evaporate chlorine. Note: Chloramine doesn't evaporate easily.",
        "<strong>Sea / Kosher Salt:</strong> Pure and additive-free. Ideal for fermentations.",
        "<strong>Iodized Salt:</strong> Avoid. Can darken vegetables and inhibit fermentation.",
        "<strong>Table Salt (with anti-caking agents):</strong> Can cloud brine and alter flavor.",
      ],
    },
    {
      type: "title",
      text: "The Time Factor",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Patience is the secret ingredient. Time varies dramatically depending on your goal and fermentation temperature.",
    },
    {
      type: "table",
      headers: ["Type", "Salinity", "Time", "Ideal Temperature"],
      rows: [
        ["Meats (Dry/Wet Brine)", "1.5-2%", "4-48 hours", "4°C (fridge)"],
        ["Fermented Vegetables", "2-3%", "1-3 weeks", "18-22°C"],
        ["Hot Sauces", "3.5%", "2+ weeks", "18-22°C"],
        ["Long-term Preserves", "5%+", "1+ month", "18-22°C"],
      ],
    },
    {
      type: "tip",
      html: "<strong>The Role of Temperature:</strong> Higher temperature means faster fermentation but less control. 18-22°C is ideal for developing flavor without pathogen risk. If your kitchen is cooler, increase fermentation time.",
    },
    {
      type: "title",
      text: "Freezing and Thawing",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Can you freeze in brine? The answer depends on product type.",
    },
    {
      type: "list",
      items: [
        "<strong>Brined Meats:</strong> Excellent! Brine protects against freezer burn. A professional technique is 'Equilibrium Thawing': freeze meat directly in brine and it thaws while curing.",
        "<strong>Fermented Vegetables:</strong> Avoid. Freezing breaks cell walls and thawing turns them to mush.",
        "<strong>Preserves:</strong> Only if you plan to use immediately after thawing. Freezing alters final texture.",
      ],
    },
    {
      type: "title",
      text: "Salt Percentages by Application",
      level: 3,
    },
    {
      type: "list",
      items: [
        "<strong>1.5-2.0%:</strong> Meats and poultry (chicken breast, turkey, chops). Maximum juiciness.",
        "<strong>2.0-3.0%:</strong> Vegetables in lacto-fermentation (sauerkraut, kimchi, pickles). Pathogen protection.",
        "<strong>3.0-5.0%:</strong> Hot sauces and special ferments (garlic, ginger). More intense flavor.",
        "<strong>5.0%+:</strong> Long-term preserves (cheeses, olives, lemons). Very slow fermentation.",
      ],
    },
    {
      type: "title",
      text: "Science Behind the Process",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Salt in brine isn't just for flavor. It works on three levels: <strong>denatures proteins</strong> (making them more moisture-retentive), <strong>controls bacterial growth</strong> (kills pathogens but favors beneficial lactic bacteria), and <strong>extracts flavors</strong> from ingredients.",
    },
    {
      type: "paragraph",
      html: "Fermentation is an anaerobic process where beneficial lactic bacteria convert sugars into lactic acid. This process requires the correct salt percentage: too little and mold grows, too much and even good bacteria are inhibited.",
    },
  ],
  schemas: [],
};
