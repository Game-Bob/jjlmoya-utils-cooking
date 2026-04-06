import type { ToolLocaleContent } from "../../../types";

const title = "Neapolitan Pizza Dough Calculator";
const description = "Calculate the exact proportions of flour, water, salt and yeast to prepare authentic Neapolitan pizza at home with professional results.";
const faq = [
    {
      question: "What is the ideal hydration for Neapolitan pizza?",
      answer:
        "According to AVPN protocol, standard hydration is 63-67%. For beginners, 60-62% is more manageable. For advanced pizzaiolos with strong flour (W300+), 70-75% produces extraordinary doughs but requires technique.",
    },
    {
      question: "How long should the dough ferment?",
      answer:
        "Minimum 24 hours in fridge (4°C) to activate enzymes. Optimal is 48-72 hours. Beyond 72 hours, you need very strong flour (W300+) or the dough becomes too acidic.",
    },
    {
      question: "Can I use dry yeast?",
      answer:
        "Yes. Dry yeast equals 0.4x fresh (1g dry = 2.5g fresh). Quality is similar, but fresh yeast provides more complex flavor.",
    },
    {
      question: "Can I make Neapolitan pizza in a home oven?",
      answer:
        "Yes, but with adaptations. Preheat to maximum (250-280°C) with pizza stone for 45-60 minutes. Cooking will take 5-7 minutes instead of 60-90 seconds, but results are acceptable.",
    },
    {
      question: "What flour should I use?",
      answer:
        "Ideal: Caputo Pizzeria (W260-280) or Manitoba (W350-400). Alternative: any flour with 11-13g protein per 100g. Avoid weak flours (W130-160) for long fermentations.",
    },
    {
      question: "Why does the dough tear when stretching?",
      answer:
        "The gluten isn't relaxed. Let the ball rest 2-3 hours at room temperature. If it repeats, kneading was insufficient or flour is too weak.",
    },
  ];
const howTo = [
    {
      name: "Calculate proportions",
      text: "Use this calculator to get exact grams of each ingredient based on pizza quantity and ball weight.",
    },
    {
      name: "Mix the dough",
      text: "Combine flour with warm water (22-25°C), salt (dissolved first) and yeast. Knead 8-10 minutes with mixer or 15-20 minutes by hand.",
    },
    {
      name: "Bulk ferment",
      text: "Let entire dough ferment 1-2 hours at room temperature (20-25°C) until doubled in volume.",
    },
    {
      name: "Divide into balls",
      text: "Divide dough into portions of indicated weight. Rest 15-20 minutes before shaping balls.",
    },
    {
      name: "Long fermentation",
      text: "Place balls in sealed container in fridge (4°C) for 24-72 hours. This critical step generates flavor and digestibility.",
    },
    {
      name: "Stretch and bake",
      text: "Remove from cold 30 minutes before. Stretch from center outward. Bake at maximum temperature 60-90 seconds (wood) or 5-7 minutes (home).",
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
  slug: "neapolitan-pizza-dough-calculator-authentic-recipe",
  title: "Neapolitan Pizza Dough Calculator",
  description:
    "Calculate the exact proportions of flour, water, salt and yeast to prepare authentic Neapolitan pizza at home with professional results.",
  faqTitle: "Frequently Asked Questions",
  bibliographyTitle: "Scientific References",
  ui: {
    parameters: "Parameters",
    quantity: "Quantity",
    pizzas: "pizzas",
    weight: "Weight per ball",
    small: "Small (180g)",
    standard: "Standard (260g)",
    large: "Large (350g)",
    hydration: "Hydration",
    classic: "Classic (55-60%)",
    modern: "Modern (65-70%)",
    high: "High (75%+)",
    salt: "Salt",
    fermentation_tip_title: "Fermentation Tip",
    fermentation_tip:
      "For a more digestible and flavorful dough, ferment the bulk dough for 24h in the fridge (4°C) using <strong>0.3g</strong> fresh yeast per 100g flour.",
    your_recipe: "Your Recipe",
    fresh_yeast: "Fresh Yeast",
    dry_yeast: "Dry",
    flour: "Flour (W260-300)",
    water: "Water",
    salt_label: "Sea Salt",
    yeast: "Yeast",
    yeast_note: "For 8h at room temp (20°C)",
    total_weight: "Total Dough Weight",
    approx: "approx.",
    visual_note:
      "The visual size represents the approximate diameter of the stretched pizza based on the ball weight.",
  },
  faq: [
    {
      question: "What is the ideal hydration for Neapolitan pizza?",
      answer:
        "According to AVPN protocol, standard hydration is 63-67%. For beginners, 60-62% is more manageable. For advanced pizzaiolos with strong flour (W300+), 70-75% produces extraordinary doughs but requires technique.",
    },
    {
      question: "How long should the dough ferment?",
      answer:
        "Minimum 24 hours in fridge (4°C) to activate enzymes. Optimal is 48-72 hours. Beyond 72 hours, you need very strong flour (W300+) or the dough becomes too acidic.",
    },
    {
      question: "Can I use dry yeast?",
      answer:
        "Yes. Dry yeast equals 0.4x fresh (1g dry = 2.5g fresh). Quality is similar, but fresh yeast provides more complex flavor.",
    },
    {
      question: "Can I make Neapolitan pizza in a home oven?",
      answer:
        "Yes, but with adaptations. Preheat to maximum (250-280°C) with pizza stone for 45-60 minutes. Cooking will take 5-7 minutes instead of 60-90 seconds, but results are acceptable.",
    },
    {
      question: "What flour should I use?",
      answer:
        "Ideal: Caputo Pizzeria (W260-280) or Manitoba (W350-400). Alternative: any flour with 11-13g protein per 100g. Avoid weak flours (W130-160) for long fermentations.",
    },
    {
      question: "Why does the dough tear when stretching?",
      answer:
        "The gluten isn't relaxed. Let the ball rest 2-3 hours at room temperature. If it repeats, kneading was insufficient or flour is too weak.",
    },
  ],
  howTo: [
    {
      name: "Calculate proportions",
      text: "Use this calculator to get exact grams of each ingredient based on pizza quantity and ball weight.",
    },
    {
      name: "Mix the dough",
      text: "Combine flour with warm water (22-25°C), salt (dissolved first) and yeast. Knead 8-10 minutes with mixer or 15-20 minutes by hand.",
    },
    {
      name: "Bulk ferment",
      text: "Let entire dough ferment 1-2 hours at room temperature (20-25°C) until doubled in volume.",
    },
    {
      name: "Divide into balls",
      text: "Divide dough into portions of indicated weight. Rest 15-20 minutes before shaping balls.",
    },
    {
      name: "Long fermentation",
      text: "Place balls in sealed container in fridge (4°C) for 24-72 hours. This critical step generates flavor and digestibility.",
    },
    {
      name: "Stretch and bake",
      text: "Remove from cold 30 minutes before. Stretch from center outward. Bake at maximum temperature 60-90 seconds (wood) or 5-7 minutes (home).",
    },
  ],
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
    {
      name: "The Pizza Bible - Tony Gemignani",
      url: "https://www.amazon.com/Pizza-Bible-Everything-Need-Perfect/dp/0393634039/",
    },
    {
      name: "Franco Pepe - Pepe in Grani",
      url: "https://www.pepeingranitalia.com/",
    },
    {
      name: "Caputo Flour",
      url: "https://www.caputoprepara.com/",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Master Guide for Authentic Neapolitan Pizza Dough",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<strong>Neapolitan pizza</strong> is much more than a recipe: it's a protected cultural legacy that requires scientific precision. Success depends on understanding how time, temperature, and hydration interact.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "480°C",
          label: "Ideal Baking Temp",
          icon: "mdi:fire",
        },
        {
          value: "60-90s",
          label: "Baking Time",
          icon: "mdi:clock-fast",
        },
        {
          value: "65%",
          label: "Std Hydration",
          icon: "mdi:water-percent",
        },
        {
          value: "W280",
          label: "Flour Strength",
          icon: "mdi:grain",
        },
      ],
    },
    {
      type: "title",
      text: "The Crucial Importance of Hydration",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Hydration (percentage of water relative to flour weight) determines the <strong>cornicione</strong> texture. Mastering this parameter separates an amateur from a pizza master.",
    },
    {
      type: "comparative",
      columns: 3,
      items: [
        {
          title: "Hydration 55-60%",
          icon: "mdi:water-percent",
          description: "Very manageable dough, ideal for beginners and lower-temperature home ovens.",
          points: [
            "Easy gluten mesh formation",
            "Less sticky dough",
            "Firm and crispy crust",
          ],
        },
        {
          title: "Hydration 63-67%",
          icon: "mdi:water",
          description: "The AVPN standard. Perfect balance for a light dough with visible crumb development.",
          highlight: true,
          points: [
            "Traditional elastic texture",
            "Ideal for wood-fired ovens",
            "Requires medium kneading skill",
          ],
        },
        {
          title: "Hydration 70%+",
          icon: "mdi:water-plus",
          description: "Contemporary pizzas with giant rims. Very difficult to handle without advanced technique.",
          points: [
            "Extremely large alveoli",
            "Very light and digestible",
            "Requires high-strength flours",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Yeast Types and Choosing Which One to Use",
      level: 3,
    },
    {
      type: "comparative",
      columns: 2,
      items: [
        {
          title: "Pressed Fresh Yeast",
          icon: "mdi:bread-slice-outline",
          description: "The traditional choice preferred by pizza masters. Provides a more complex flavor profile.",
          points: [
            "Deeper and cleaner flavor",
            "Balanced enzymatic action",
            "Dissolves easily in warm water",
            "Short shelf life (requires freshness)",
          ],
        },
        {
          title: "Instant Dry Yeast",
          icon: "mdi:shaker-outline",
          description: "Much more stable and easy to store. Ideal for always having available in the pantry.",
          points: [
            "Long shelf life (up to 2 years)",
            "No prior rehydration needed",
            "Three times more powerful than fresh",
            "Slightly more neutral flavor",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Flour Selection Guide by W Strength Index",
      level: 3,
    },
    {
      type: "table",
      headers: ["Flour Type", "Strength (W)", "Fermentation Time", "Recommended Use"],
      rows: [
        ["Weak Flour", "W130-180", "4-8 hours", "Short-term baking"],
        ["Medium Strength", "W200-240", "8-24 hours", "Quick pizza or basic bread"],
        ["Strong Flour", "W260-320", "24-72 hours", "Authentic Neapolitan Pizza"],
        ["Extra Strong", "W350+", "72+ hours", "Panettones or high-hydration doughs"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Kneading Temperature Control",
      html: "The dough should not exceed 24°C by the end of kneading. Excessive friction heat degrades gluten and causes erratic fermentation.",
    },
    {
      type: "title",
      text: "Glossary for the Future Pizza Master",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Cornicione",
          definition: "The raised and airy edge of the pizza. It should be full of alveoli and not have compact crumb.",
        },
        {
          term: "Maturation",
          definition: "An enzymatic process distinct from fermentation where proteins and sugars break down for better flavor and digestibility.",
        },
        {
          term: "Dough Development",
          definition: "The point where the dough reaches its optimal elasticity and resistance without being sticky.",
        },
        {
          term: "Autolysis",
          definition: "A rest period after mixing only flour and water that facilitates gluten development without mechanical effort.",
        },
      ],
    },
    {
      type: "tip",
      title: "The Fridge Hack",
      html: "Bulk fermentation for 24 hours at 4°C doesn't just make the dough easier to handle; it creates complex organic compounds impossible to obtain at room temperature.",
    },
    {
      type: "paragraph",
      html: "Our calculator automates specific proportions so you can focus on what matters most: technique and passion for the final product.",
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
