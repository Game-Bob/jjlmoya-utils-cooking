import type { ToolLocaleContent } from "../../../types";

export const content: ToolLocaleContent = {
  slug: "meringue-sugar-ratio-calculator-stiff-peaks",
  title: "Professional Meringue Sugar Ratio Calculator",
  description:
    "Calculate the exact amount of sugar for French, Italian, or Swiss meringue based on your egg whites' weight. Mastering stiff peaks with professional precision.",
  ui: {
    whitesLabel: "Egg Whites Weight",
    whitesPlaceholder: "E.g. 120",
    whitesUnit: "g",
    typeLabel: "Meringue Type",
    typeFrench: "French",
    typeItalian: "Italian",
    typeSwiss: "Swiss",
    timesHeading: "Estimated Times (Whipping at medium-high speed)",
    stageSpumado: "Foamy",
    stageSpumadoDesc: "Large bubbles, like soap water.",
    stageSoftPeaks: "Soft Peaks",
    stageSoftPeaksDesc: "Tip folds down when lifting the whisk.",
    stageStiffPeaks: "Stiff Peaks",
    stageStiffPeaksDesc: "Firm, shiny, and vertical tip.",
    frenchSugarWhite: "Granulated Sugar",
    frenchSugarPowder: "Powdered Sugar",
    frenchTip:
      "French meringue is common and simple. Ideal for baking pavlovas or as a base for batters. Not safe to eat uncooked.",
    frenchTime1: "1-2 min",
    frenchTime2: "3-5 min",
    frenchTime3: "7-9 min",
    italianSugarSyrup: "Sugar for Syrup",
    italianWater: "Water",
    italianTip:
      "Italian meringue is the most stable. Made using 118°C sugar syrup. Perfect for cake decoration and direct consumption.",
    italianTime1: "2 min",
    italianTime2: "5 min",
    italianTime3: "10-12 min",
    swissSugarWhite: "Granulated Sugar",
    swissMaxTemp: "Max Temp",
    swissTip:
      "Swiss meringue is heated in a double boiler until sugar dissolves. Extremely silky, ideal for smooth buttercreams.",
    swissTime1: "1-2 min",
    swissTime2: "4-6 min",
    swissTime3: "8-10 min",
    invalidWeightError: "Enter a valid weight",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "What is the ideal egg white to sugar ratio?",
      answer:
        "The professional standard is a 1:2 ratio. For every gram of egg white, use two grams of sugar to provide enough literal 'weight' to stabilize the protein structure.",
    },
    {
      question: "How can I tell if I've reached stiff peaks?",
      answer:
        "When you lift the whisk, the peaks should stand straight up without drooping. The mixture should also be thick, very glossy, and stay in the bowl even if held upside down.",
    },
    {
      question: "Which meringue type is best for frosting?",
      answer:
        "Italian meringue is preferred for frosting because the hot syrup 'cooks' the whites, making it both safe and structural enough to hold its shape for hours.",
    },
    {
      question: "Why do my egg whites refuse to whip up?",
      answer:
        "Even a microscopic trace of fat—from leftover grease on the bowl or a tiny drop of yolk—will prevent the whites from forming a stable foam. Always use a clean metal or glass bowl.",
    },
  ],
  howTo: [
    {
      name: "Weigh your egg whites",
      text: "Use a digital scale for precision. Even a 5-gram difference can change the required sugar amount.",
    },
    {
      name: "Calculate sugar needs",
      text: "Enter the weight into our tool to get exact granulated and/or powdered sugar measurements.",
    },
    {
      name: "Choose your technique",
      text: "Select French for simple baking, Italian for stability, or Swiss for silky fillings.",
    },
    {
      name: "Whip to perfection",
      text: "Follow the estimated timing guide until you reach that high-gloss, vertical stiff peak.",
    },
  ],
  bibliographyTitle: "Technical Sources & References",
  bibliography: [
    {
      name: "King Arthur Baking - Meringue Guide",
      url: "https://www.kingarthurbaking.com/blog/2015/07/05/meringue-types",
    },
    {
      name: "Exploratorium - The Science of Egg Foam",
      url: "https://www.exploratorium.edu/explore/cooking/egg-science",
    },
    {
      name: "Fine Cooking - Mastering the Stiff Peak",
      url: "https://www.finecooking.com/",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Master Guide for Meringue Ratios and Stiff Peak Calculation",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Mastering <strong>stiff peaks</strong> and various meringue methods is what separates home cooks from professional pastry chefs. The secret lies in the precision of the egg white weight and the exact sugar balance needed to stabilize the protein network.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "1:2",
          label: "White:Sugar Ratio",
          icon: "mdi:scale-balance",
        },
        {
          value: "118°C",
          label: "Italian Syrup",
          icon: "mdi:thermometer-high",
        },
        {
          value: "60°C",
          label: "Swiss Bain-Marie",
          icon: "mdi:beaker-question-outline",
        },
        {
          value: "0%",
          label: "Fat Tolerance",
          icon: "mdi:close-circle-outline",
        },
      ],
    },
    {
      type: "title",
      text: "Comparison of Meringue Techniques",
      level: 3,
    },
    {
      type: "comparative",
      columns: 3,
      items: [
        {
          title: "French Meringue",
          icon: "mdi:baguette",
          description:
            "The simplest but least stable. Whites and sugar whipped cold.",
          points: [
            "Ideal for baked cookies",
            "Light and airy texture",
            "Requires mandatory baking",
            "Fastest preparation method",
          ],
        },
        {
          title: "Italian Meringue",
          icon: "mdi:pizza",
          description: "Most stable. Uses hot sugar syrup at soft-ball stage.",
          highlight: true,
          points: [
            "Perfect for cake decor",
            "Safe for raw consumption",
            "Best humidity resistance",
            "Dense, glass-like shine",
          ],
        },
        {
          title: "Swiss Meringue",
          icon: "mdi:cheese",
          description:
            "Heated over a water bath. Balance of ease and stability.",
          points: [
            "Base for Buttercreams",
            "Extremely silky texture",
            "Excellent for fillings",
            "Medium food safety level",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Visual Stages of Egg White Whipping",
      level: 3,
    },
    {
      type: "table",
      headers: ["Stage", "Visual Description", "Recommended Use", "Stability"],
      rows: [
        ["Foamy", "Clear, large soap-like bubbles", "Add acid or sugar", "None"],
        ["Soft Peaks", "Tips curl down when lifted", "Mousses and soufflés", "Low"],
        [
          "Stiff Peaks",
          "Stiff, vertical, and rigid tip",
          "Decoration and baking",
          "High",
        ],
        [
          "Overwhipped",
          "Grainy and dry texture",
          "Unusable (broken)",
          "Collapse",
        ],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Is Your Meringue 'Weeping' or Releasing Liquid?",
      html: "If you see syrup leaking (syneresis), it's either because the sugar didn't fully dissolve or from high ambient humidity. In Italian meringue, ensure the syrup is poured in a slow, steady stream—never directly onto the whisk.",
    },
    {
      type: "title",
      text: "Technical Pastry Glossary",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Ovalbumin",
          definition:
            "The main protein in egg whites responsible for trapping air during whipping.",
        },
        {
          term: "Hygroscopic",
          definition:
            "Sugar's property to absorb moisture from the air, which can soften the meringue.",
        },
        {
          term: "Cream of Tartar",
          definition:
            "An acidic salt that helps prevent overwhipping and stabilizes the foam structure.",
        },
        {
          term: "Bain-Marie",
          definition:
            "The indirect heating method used to safely dissolve sugar for Swiss meringue.",
        },
      ],
    },
    {
      type: "tip",
      title: "The Vinegar Bowl Trick",
      html: "Wipe your bowl with a paper towel dampened with vinegar or lemon juice before starting. Any trace of fat will kill your foam, regardless of how much you whip.",
    },
    {
      type: "paragraph",
      html: "Our calculator automates the math so you can focus on whipping until you reach that perfect, high-gloss finish.",
    },
  ],
  schemas: [],
};
