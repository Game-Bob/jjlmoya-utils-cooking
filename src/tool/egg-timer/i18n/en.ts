import type { ToolLocaleContent } from "../../../types";

export const content: ToolLocaleContent = {
  slug: "egg-timer",
  title: "Scientific Egg Timer Calculator",
  description:
    "Thermodynamic calculator for perfectly cooked eggs based on altitude, temperature, and size.",
  faqTitle: "Frequently Asked Questions",
  bibliographyTitle: "Scientific References",
  ui: {
    parameters: "Parameters",
    initial_temperature: "Initial Temperature",
    fridge: "Fridge",
    ambient: "Ambient",
    egg_size: "Egg Size",
    altitude: "Altitude",
    use_location: "Use my location",
    altitude_help:
      "Water boils at lower temperatures at higher altitudes, affecting cooking time.",
    sea_level: "Sea",
    soft_cooked: "Soft Cooked",
    soft_description: "Liquid yolk, soft white.",
    mollet: "Mollet",
    mollet_description: "Creamy yolk, firm white.",
    hard_cooked: "Hard Cooked",
    hard_description: "Fully set, firm yolk.",
  },
  faq: [
    {
      question: "Why does altitude matter when boiling eggs?",
      answer:
        "Water doesn't always boil at 100°C. At higher altitudes, lower atmospheric pressure causes water to boil at lower temperatures. In Madrid (600m) it boils at 98°C, requiring more time than at sea level. At Everest (70°C) it's impossible to hard-boil an egg.",
    },
    {
      question: "Fridge egg or room temperature egg?",
      answer:
        "A fridge egg (4°C) takes longer than a room temperature one (20°C). The difference can be 2-3 minutes. This calculator automatically adjusts the time based on initial temperature.",
    },
    {
      question: "Why does the yolk turn green?",
      answer:
        "It's ferrous sulfide, resulting from overcooking. When you exceed 80°C for too long, the sulfur in the white reacts with iron in the yolk. It's not toxic, but it indicates you overcooked. Use an immediate ice bath to prevent it.",
    },
    {
      question: "How do I peel an egg easily?",
      answer:
        "Use eggs that are 1-2 weeks old (not fresh from today), start with already boiling water (not cold), and immediately submerge in ice water when done. The thermal shock contracts the egg and makes peeling easier.",
    },
  ],
  bibliography: [
    {
      name: "The Science of Boiling an Egg - Charles D. H. Williams",
      url: "https://newton.ex.ac.uk/teaching/CDHW/Egg/",
    },
    {
      name: "The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt",
      url: "https://www.seriouseats.com/the-food-lab-hard-boiled-eggs-recipe",
    },
    {
      name: "The Food Lab: Perfect Soft Boiled Eggs",
      url: "https://www.seriouseats.com/soft-boiled-eggs-recipe",
    },
  ],
  howTo: [
    {
      name: "Select initial temperature",
      text: "Choose whether your egg is in the fridge (4°C) or at room temperature (20°C). This is the internal temperature of the egg, not the air.",
    },
    {
      name: "Choose egg size",
      text: "S (small, 53g), M (medium, 58g), L (large, 63g), or XL (extra large, 73g). Size determines how long heat takes to reach the center.",
    },
    {
      name: "Specify your altitude",
      text: "Enter manually, use the Sea button for sea level (0m), Madrid for 600m, or geolocate your location. Every 300m drops about 1°C from the water boiling point.",
    },
    {
      name: "Apply thermal shock",
      text: "When the timer sounds, immediately submerge in ice water. This stops cooking and makes peeling easier. Thermal shock is critical for accuracy.",
    },
  ],
  seo: [
    {
      type: "title",
      text: "The Science of the Perfect Egg",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Boiling an egg seems like the simplest culinary task, but it's actually a <strong>complex thermodynamics problem</strong>. The difference between a perfect egg and a mediocre one is a matter of degrees and seconds. This tool is not just a simple timer; it's a physics calculator based on the model by <strong>Charles Williams</strong> from the University of Exeter.",
    },
    {
      type: "title",
      text: "Why Altitude Matters",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Water doesn't always boil at 100°C. As we climb in altitude, atmospheric pressure decreases, making it easier for water molecules to escape into the air. For every 300 meters of elevation, the boiling point drops approximately <strong>1°C</strong>.",
    },
    {
      type: "paragraph",
      html: "At Everest, water boils at 70°C, making it impossible to hard-boil an egg (proteins need higher temperatures to fully denature). In Madrid (600m), water boils at 98°C, requiring more cooking time than at sea level in coastal cities.",
    },
    {
      type: "title",
      text: "The Thermodynamic Formula",
      level: 3,
    },
    {
      type: "paragraph",
      html: "This calculation is based on the <strong>heat conduction equation</strong> derived by Charles Williams. The formula assumes the egg is a sphere, heat transfers uniformly from the surface, and the target point is the center of the yolk.",
    },
    {
      type: "code",
      text: "t = 0.451 * M^(2/3) * ln((Tw - To) / (Tw - Ty))",
    },
    {
      type: "list",
      items: [
        "<strong>M:</strong> Mass of the egg in grams",
        "<strong>Tw:</strong> Water boiling point temperature (depends on altitude)",
        "<strong>To:</strong> Initial egg temperature (4°C or 20°C)",
        "<strong>Ty:</strong> Target temperature desired in the yolk",
      ],
    },
    {
      type: "title",
      text: "Guide to Internal Temperatures",
      level: 3,
    },
    {
      type: "paragraph",
      html: "Each temperature produces a different protein structure. Egg proteins denature in specific ranges:",
    },
    {
      type: "table",
      headers: ["Temperature", "State", "Description"],
      rows: [
        [
          "62°C - 65°C",
          "Soft Cooked",
          "The protein <em>ovotransferrin</em> coagulates. Soft white and liquid yolk.",
        ],
        [
          "65°C - 70°C",
          "Mollet/Runny",
          "The yolk begins to thicken. <em>Ovalbumin</em> coagulates, creating tender structure.",
        ],
        [
          "&gt; 77°C",
          "Hard Cooked",
          "Complete coagulation. If you exceed 80°C, ferrous sulfide forms (green ring).",
        ],
      ],
    },
    {
      type: "title",
      text: "Professional Tips",
      level: 3,
    },
    {
      type: "list",
      items: [
        "<strong>Thermal Shock:</strong> Submerge eggs in ice water immediately after cooking. Stops cooking instantly and contracts the egg inside the shell, making peeling easier.",
        "<strong>Fresh vs Aged Eggs:</strong> Very fresh eggs are hard to peel because the white's low pH adheres to the membrane. For hard-boiled, use 1-2 week old eggs.",
        "<strong>Start with Boiling Water:</strong> Putting the egg in already boiling water (not cold) makes peeling easier and offers more precise time control.",
        "<strong>Precision Matters:</strong> Every 5-10 seconds counts. The difference between a creamy yolk and overcooked is minimal. That's why thermal shock is critical.",
      ],
    },
    {
      type: "tip",
      html: "<strong>Scientific fact:</strong> Heat transfer in an egg is a three-dimensional heat conduction problem. That's why Williams' formula uses mass raised to the 2/3 power (relationship between volume and surface area).",
    },
  ],
  schemas: [],
};
