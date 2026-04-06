import type { ToolLocaleContent } from "../../../types";

const title = "Precision Scientific Egg Timer and Altitude Calculator";
const description = "Master the thermodynamics of the perfect egg. Calculate exact boiling times based on your altitude, egg size, and initial temperature.";
const faq = [
    {
      question: "Why does altitude affect how long eggs take to boil?",
      answer:
        "Water boils at lower temperatures as you go higher in altitude because there is less atmospheric pressure. At 2,000 meters, water boils at roughly 93°C instead of 100°C, meaning your egg needs much more time to reach the same internal temperature.",
    },
    {
      question: "Should I use eggs straight from the fridge?",
      answer:
        "Fridge eggs (around 4°C) require roughly 1.5 to 2 minutes more than room-temperature eggs. Our calculator adjusts for this 'thermal starting line' automatically to ensure perfect results.",
    },
    {
      question: "What causes the unappealing green ring on yolks?",
      answer:
        "The green ring is ferrous sulfide. It forms when the sulfur in the egg white reacts with the iron in the yolk due to overcooking or high heat. To prevent it, use our timer and immediately submerge the egg in an ice bath.",
    },
    {
      question: "Why are some eggs so difficult to peel?",
      answer:
        "Very fresh eggs have a lower pH, making the membrane stick tightly to the shell. For easy peeling, use eggs that are 1-2 weeks old, drop them into already boiling water, and use an ice bath after cooking.",
    },
  ];
const howTo = [
    {
      name: "Define starting conditions",
      text: "Select your egg's initial temperature (Fridge vs. Room) and size (S to XL) to establish the thermodynamic base.",
    },
    {
      name: "Adjust for your location",
      text: "Enter your altitude or use our automatic geolocation to calibrate the exact boiling point of water at your current pressure.",
    },
    {
      name: "Start the precision timer",
      text: "Begin the countdown. Our tool calculates the precise seconds needed to denature specific egg proteins.",
    },
    {
      name: "Apply the ice bath",
      text: "When the timer ends, immediately move the egg to ice-cold water. This 'thermal shock' stops residual cooking and ensures easy peeling.",
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
  slug: "perfect-boiled-egg-timer-altitude-calculator",
  title: "Precision Scientific Egg Timer and Altitude Calculator",
  description:
    "Master the thermodynamics of the perfect egg. Calculate exact boiling times based on your altitude, egg size, and initial temperature.",
  ui: {
    parameters: "Cooking Parameters",
    initial_temperature: "Initial Temp",
    fridge: "Fridge (4°C)",
    ambient: "Room (20°C)",
    egg_size: "Egg Size",
    altitude: "Your Altitude",
    use_location: "Detect Location",
    altitude_help:
      "Lower atmospheric pressure at high altitudes reduces the water boiling point.",
    sea_level: "0m",
    soft_cooked: "Soft Boiled",
    soft_description: "Runny yolk, just-set whites.",
    mollet: "Mollet (Jammy)",
    mollet_description: "Custard-like yolk, firm whites.",
    hard_cooked: "Hard Boiled",
    hard_description: "Solid yolk, fully set whites.",
  },
  faqTitle: "Frequently Asked Questions",
  faq: [
    {
      question: "Why does altitude affect how long eggs take to boil?",
      answer:
        "Water boils at lower temperatures as you go higher in altitude because there is less atmospheric pressure. At 2,000 meters, water boils at roughly 93°C instead of 100°C, meaning your egg needs much more time to reach the same internal temperature.",
    },
    {
      question: "Should I use eggs straight from the fridge?",
      answer:
        "Fridge eggs (around 4°C) require roughly 1.5 to 2 minutes more than room-temperature eggs. Our calculator adjusts for this 'thermal starting line' automatically to ensure perfect results.",
    },
    {
      question: "What causes the unappealing green ring on yolks?",
      answer:
        "The green ring is ferrous sulfide. It forms when the sulfur in the egg white reacts with the iron in the yolk due to overcooking or high heat. To prevent it, use our timer and immediately submerge the egg in an ice bath.",
    },
    {
      question: "Why are some eggs so difficult to peel?",
      answer:
        "Very fresh eggs have a lower pH, making the membrane stick tightly to the shell. For easy peeling, use eggs that are 1-2 weeks old, drop them into already boiling water, and use an ice bath after cooking.",
    },
  ],
  howTo: [
    {
      name: "Define starting conditions",
      text: "Select your egg's initial temperature (Fridge vs. Room) and size (S to XL) to establish the thermodynamic base.",
    },
    {
      name: "Adjust for your location",
      text: "Enter your altitude or use our automatic geolocation to calibrate the exact boiling point of water at your current pressure.",
    },
    {
      name: "Start the precision timer",
      text: "Begin the countdown. Our tool calculates the precise seconds needed to denature specific egg proteins.",
    },
    {
      name: "Apply the ice bath",
      text: "When the timer ends, immediately move the egg to ice-cold water. This 'thermal shock' stops residual cooking and ensures easy peeling.",
    },
  ],
  bibliographyTitle: "Scientific Sources & Thermodynamics",
  bibliography: [
    {
      name: "Charles D. H. Williams - The Physics of Boiling an Egg",
      url: "https://newton.ex.ac.uk/teaching/CDHW/Egg/",
    },
    {
      name: "The Food Lab: The Science of Hard Boiled Eggs",
      url: "https://www.seriouseats.com/the-food-lab-hard-boiled-eggs-recipe",
    },
    {
      name: "Exploratorium - Egg Science and Protein Denaturation",
      url: "https://www.exploratorium.edu/explore/cooking/egg-science",
    },
  ],
  seo: [
    {
      type: "title",
      text: "Master Guide for Precision Egg Boiling and Thermodynamics",
      level: 2,
    },
    {
      type: "paragraph",
      html: "Boiling an egg is a classic exercise in <strong>applied thermodynamics</strong>. Achieving a specific texture is about controlling the rate of heat transfer from the boiling water to the core of the egg, which varies based on pressure, mass, and starting energy.",
    },
    {
      type: "stats",
      columns: 4,
      items: [
        {
          value: "62°C",
          label: "White Sets",
          icon: "mdi:egg-outline",
        },
        {
          value: "68°C",
          label: "Yolk Sets",
          icon: "mdi:egg-fried",
        },
        {
          value: "-1°C",
          label: "Boil Drop / 300m",
          icon: "mdi:mountain",
        },
        {
          value: "0s",
          label: "Timing Margin",
          icon: "mdi:timer-check-outline",
        },
      ],
    },
    {
      type: "title",
      text: "Comparison of Egg Boiling Stages",
      level: 3,
    },
    {
      type: "comparative",
      columns: 3,
      items: [
        {
          title: "Soft Boiled (Dippy)",
          icon: "mdi:coffee-outline",
          description: "Partially set whites and completely liquid, golden yolk.",
          points: [
            "Delicate silken texture",
            "Perfect for toast soldiers",
            "Quick 3-5 min cook time",
            "Highest peeling difficulty",
          ],
        },
        {
          title: "Mollet (Jammy)",
          icon: "mdi:water-percent",
          description: "Firm, established whites with a custard-like, thick yolk.",
          highlight: true,
          points: [
            "The culinary gold standard",
            "Honey-thick yolk texture",
            "Elastic, resilient whites",
            "Ideal for bowls and ramen",
          ],
        },
        {
          title: "Hard Boiled",
          icon: "mdi:circle-slice-8",
          description: "Completely set proteins with a solid, tender yolk.",
          points: [
            "Solid and opaque center",
            "Easiest to transport/peel",
            "Mainstay for deviled eggs",
            "Requires instant cooling",
          ],
        },
      ],
    },
    {
      type: "title",
      text: "Water Boiling Points by Altitude",
      level: 3,
    },
    {
      type: "table",
      headers: [
        "City / Altitude",
        "Elevation (m)",
        "Boiling Point (°C)",
        "Added Time",
      ],
      rows: [
        ["Sea Level (Coast)", "0m", "100°C", "0s"],
        ["Denver, USA", "1600m", "94.5°C", "+55s"],
        ["Mexico City", "2240m", "92.6°C", "+75s"],
        ["La Paz, Bolivia", "3640m", "88.1°C", "+140s"],
      ],
    },
    {
      type: "diagnostic",
      variant: "warning",
      title: "Hard to Peel or Green Yolk Syndrome?",
      html: "The green ring is <strong>ferrous sulfide</strong> caused by overcooking (sulfur from whites reacting with iron in yolks). If eggs won't peel, they are too fresh; a low pH causes the membrane to fuse to the shell. Use week-old eggs and a vigorous ice bath.",
    },
    {
      type: "title",
      text: "Egg Science Technical Glossary",
      level: 3,
    },
    {
      type: "glossary",
      items: [
        {
          term: "Ovotransferrin",
          definition:
            "The egg white protein that sets first at 62°C, providing the initial white structure.",
        },
        {
          term: "Ovalbumin",
          definition:
            "The major egg protein requiring higher heat (80°C) to reach full solidification.",
        },
        {
          term: "Atmospheric Pressure",
          definition:
            "The external force affecting boiling temperature; lower pressure equals a lower boil.",
        },
        {
          term: "Thermal Shock",
          definition:
            "The process of rapid cooling to instantly halt residual internal heat transfer.",
        },
      ],
    },
    {
      type: "tip",
      title: "The Vinegar and Salt Hook",
      html: "Add vinegar to your boiling water. If an egg cracks, the acid will cause the leaking white to coagulate instantly, plugging the hole and preventing a 'web' from forming.",
    },
    {
      type: "paragraph",
      html: "Our calculator utilizes the Charles Williams equation to calibrate every second based on your location and fridge temperature.",
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
