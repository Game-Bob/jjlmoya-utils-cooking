import type { ToolLocaleContent } from "../../../types";

export const content: ToolLocaleContent = {
  slug: "pizza",
  title: "Neapolitan Pizza Dough Calculator",
  description:
    "Calculate the exact proportions of flour, water, salt and yeast to prepare authentic Neapolitan pizza at home.",
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
      text: "The Science Behind Neapolitan Pizza Dough",
      level: 2,
    },
    {
      type: "paragraph",
      html: "<strong>Neapolitan pizza</strong> is much more than a recipe: it's a scientific protocol certified by the Associazione Verace Pizza Napoletana (AVPN) that defines with millimetric precision each variable of the dough. Flour must have between 11 and 13 grams of protein per 100 grams, water must be between 22 and 25°C, salt is dissolved before yeast, and fermentation never goes below 8 hours at room temperature or 24 hours in the fridge.",
    },
    {
      type: "paragraph",
      html: "The difference between a memorable pizza and a mediocre one doesn't lie in the sauce or toppings: it lies in <strong>hydration</strong>, <strong>flour strength</strong>, and <strong>fermentation time</strong>. These three factors determine dough extensibility, crust texture, alveoli development, and final digestibility.",
    },
    {
      type: "title",
      text: "Hydration: The Parameter That Changes Everything",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Hydration is the percentage of water relative to flour weight. It's the most influential parameter in final pizza texture: higher hydration produces greater extensibility, larger alveoli, and more open crumb; but also stickier dough requiring more technique to handle.",
    },
    {
      type: "title",
      text: "Pizza Flours: Complete Comparison",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Not all flours are equal for pizza. The <strong>W index</strong> measures gluten strength (its capacity to retain gases during fermentation) and is the most important parameter for choosing pizza flour. W150 flour is good for cakes but breaks down in 48-hour fermentation.",
    },
    {
      type: "table",
      headers: ["Flour", "Strength (W)", "Protein", "Max Hydration", "Optimal Fermentation"],
      rows: [
        ["00 Neapolitan (Caputo Pizzeria)", "260-280", "12.5g/100g", "67%", "24-48h fridge"],
        ["00 Manitoba", "350-400", "13-14g/100g", "75-80%", "48-72h fridge"],
        ["Strength / Extra Strength", "300-350", "12-13g/100g", "70-75%", "36-60h fridge"],
        ["Standard 0 flour (supermarket)", "180-220", "10-11g/100g", "60%", "8-16h room temp"],
      ],
    },
    {
      type: "tip",
      html: "With generic supermarket flour (W130-160), dough becomes an acidic paste without structure after 24 hours in fridge. If you can't find pizza-specific flour, look for at least 11g protein per 100g on the label.",
    },
    {
      type: "title",
      text: "Fermentation: The Variable That Makes The Most Difference",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Fermentation is the process where yeasts convert flour sugars into CO₂ (which inflates the dough) and alcohol (which adds flavor). But even more important is <strong>maturation</strong>: enzymes present in flour slowly break down gluten proteins and starch.",
    },
    {
      type: "list",
      items: [
        "<strong>4h at room temperature (25°C):</strong> Emergency fermentation.",
        "<strong>8-12h at room temperature:</strong> Acceptable for frequent home use.",
        "<strong>24h in fridge (4°C):</strong> The minimum quality standard.",
        "<strong>48-72h in fridge:</strong> The optimum for quality Neapolitan dough.",
      ],
    },
  ],
  schemas: [],
};
