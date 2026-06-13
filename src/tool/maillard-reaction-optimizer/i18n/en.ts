import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Maillard Reaction Optimizer: pH & Temperature Browning Calculator';
const description = 'Calculate exactly how much baking soda to add per kilo of food to accelerate the Maillard reaction. Avoid soapy flavors by staying within safe alkalinity limits.';

const faq = [
  {
    question: 'What is the Maillard reaction and why does it matter in cooking?',
    answer: 'The Maillard reaction is a chemical reaction between amino acids and reducing sugars that gives browned food its distinctive flavor. It is responsible for the crust on seared steak, the golden color of bread, roasted coffee, and caramelized onions. The reaction occurs most rapidly between 140°C and 165°C.',
  },
  {
    question: 'How does baking soda (sodium bicarbonate) accelerate browning?',
    answer: 'Baking soda raises the pH of the food surface, making it more alkaline. The Maillard reaction proceeds significantly faster in alkaline environments. Raising the pH from 6 to 8 can double or triple the browning speed. However, too much baking soda produces a metallic, soapy aftertaste - which is why this calculator enforces safe limits.',
  },
  {
    question: 'What is the maximum safe amount of baking soda per kilogram of food?',
    answer: 'The general safe limit is 1.5 grams of baking soda per kilogram of food. Beyond this threshold, the risk of off-flavors (metallic, soapy, or chemical tastes) increases dramatically. Our recommended amount is half the maximum, which provides significant browning acceleration with minimal flavor risk.',
  },
  {
    question: 'What happens if the temperature is too low for the Maillard reaction?',
    answer: 'Below 110°C, there is primarily water evaporation and no meaningful Maillard browning. Between 110°C and 140°C, browning occurs slowly. The optimal temperature range is 140°C to 180°C. Above 180°C, pyrolysis begins - where food burns and produces bitter, acrid compounds rather than desirable browning flavors.',
  },
];

const howTo = [
  {
    name: 'Weigh your food',
    text: 'Input the total weight of the food you want to brown in grams.',
  },
  {
    name: 'Set the cooking temperature',
    text: 'Enter your cooking surface or oven temperature. The optimal Maillard zone is 140-180°C.',
  },
  {
    name: 'Adjust the baking soda amount',
    text: 'The slider defaults to half the safe maximum. Increase carefully - the calculator will warn you before you reach the danger zone.',
  },
  {
    name: 'Read the estimated pH and speed multiplier',
    text: 'The calculator shows how much faster browning occurs at your chosen pH level versus the default pH of 6.',
  },
  {
    name: 'Check the flavor risk level',
    text: 'The flavor badge shows safe, caution, or danger based on the estimated surface pH. Stay in the green zone for best results.',
  },
  {
    name: 'Apply the baking soda evenly',
    text: 'Dissolve the recommended amount in a small amount of water and brush or toss with the food before cooking. Uneven distribution causes patchy browning.',
  },
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
  slug: 'maillard-reaction-optimizer',
  title: 'Maillard Reaction Optimizer',
  description: 'Calculate exactly how much baking soda to add per kilo of food to accelerate the Maillard reaction. Avoid soapy flavors by staying within safe alkalinity limits.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Maillard Reaction Optimizer',
    headerLabel: 'Browning Chemistry',
    flavorSafe: 'Safe pH',
    flavorCaution: 'Caution: Alkaline',
    flavorDanger: 'Danger: Soapy Risk',
    unitLabel: 'Units',
    metricUnit: 'Metric',
    imperialUnit: 'Imperial',
    weightLabel: 'Food Weight',
    weightUnit: 'g',
    weightOz: 'oz',
    tempLabel: 'Surface Temperature',
    tempUnit: '°C',
    degreesF: '°F',
    tempLow: 'Slow: {min} - {max}',
    tempOpt: 'Optimal: {min} - {max}',
    tempHigh: 'Pyrolysis: >{min}',
    sodaLabel: 'Baking Soda',
    sodaUnit: 'g',
    sodaOz: 'oz',
    sodaNote: 'Half of safe maximum, mild browning boost',
    sodaCautionNote: 'Approaching maximum, monitor flavor closely',
    sodaDangerNote: 'Exceeds safe maximum, risk of soapy taste',
    sodaRecommended: 'Recommended Baking Soda',
    sodaMax: 'Safe Maximum',
    speedLabel: 'Reaction Speed',
    browningLabel: 'Browning Progression',
    rawLabel: 'Raw',
    goldenLabel: 'Golden',
    burntLabel: 'Burnt',
    phEstimated: 'Est. Surface pH',
    timeSaved: 'Time Saved',
    errorTempTooLow: 'Temperature is below 110°C. The Maillard reaction requires at least 110°C to begin. Below this threshold, only water evaporation occurs without meaningful browning.',
    errorWeightTooLow: 'Food weight must be greater than 0g.',
    footerTemplate: '<span class="mr-footer-stat"><strong>{weight}</strong><small>{wunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">at <strong>{temp}</strong><small>{tunit}</small></span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{soda}</strong><small>{sunit}</small> baking soda</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat">x<strong>{multiplier}</strong> speed</span><span class="mr-footer-sep">·</span><span class="mr-footer-stat"><strong>{timeSaved}</strong>% saved</span>',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Maillard Reaction Optimizer: Master the Science of Browning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The Maillard reaction is the Holy Grail of savory cooking. It creates the deep, complex flavors of seared steak, golden bread crust, and caramelized onions. Named after French chemist Louis-Camille Maillard, this reaction between amino acids and reducing sugars produces hundreds of flavor compounds. By manipulating pH with baking soda, you can <strong>double or triple</strong> the browning speed without burning. This calculator shows you exactly how much to use and warns you before crossing into soapy territory.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '~140°C', label: 'Maillard activation temp', icon: 'mdi:thermometer' },
        { value: '2-3x', label: 'Speed increase at pH 8', icon: 'mdi:speedometer' },
        { value: '1.5 g/kg', label: 'Max safe baking soda', icon: 'mdi:scale' },
        { value: 'pH 8.5', label: 'Soapy taste threshold', icon: 'mdi:alert-circle' },
      ],
    },
    {
      type: 'title',
      text: 'Baking Soda Dosage Chart by Food Weight',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Use this reference table to quickly determine the recommended and maximum baking soda amounts for common food weights. The recommended amount is <strong>half the safe maximum</strong>, providing noticeable browning acceleration with minimal flavor risk.',
    },
    {
      type: 'table',
      headers: ['Food Weight', 'Recommended (g)', 'Safe Maximum (g)', 'Est. pH', 'Speed Boost'],
      rows: [
        ['250g (1 onion)', '0.19 g', '0.38 g', '6.5', 'x1.2'],
        ['500g (2 onions)', '0.38 g', '0.75 g', '6.5', 'x1.2'],
        ['750g (3 onions)', '0.56 g', '1.13 g', '6.5', 'x1.2'],
        ['1000g (1 kg)', '0.75 g', '1.50 g', '7.0', 'x1.6'],
        ['1500g', '1.13 g', '2.25 g', '7.0', 'x1.6'],
        ['2000g', '1.50 g', '3.00 g', '7.0', 'x2.0'],
        ['3000g', '2.25 g', '4.50 g', '7.0', 'x2.0'],
        ['5000g', '3.75 g', '7.50 g', '7.0', 'x2.0'],
      ],
    },
    {
      type: 'title',
      text: 'Understanding Surface pH and Its Effect on Browning',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Neutral pH (6.0)',
          icon: 'mdi:water',
          description: 'The natural pH of most raw meat and vegetables. The Maillard reaction proceeds at baseline speed.',
          highlight: false,
          points: ['Reaction speed: x1.0 (baseline)', 'All-natural, no additives', 'Best for: purists, traditional methods', 'Slower browning, more time to control doneness'],
        },
        {
          title: 'Mild Alkaline (pH 7.0 to 7.5)',
          icon: 'mdi:flask-round-bottom',
          description: 'Achieved with the recommended baking soda amount. Noticeable speed increase without flavor impact.',
          highlight: true,
          points: ['Reaction speed: x1.5-2.0', '½ tsp per kg (approx 0.75g)', 'Best for: caramelized onions, roasted vegetables', 'The sweet spot for most home cooks'],
        },
        {
          title: 'High Alkaline (pH 8.0 to 8.5)',
          icon: 'mdi:alert',
          description: 'Maximum practical alkalinity before flavor defects appear. Double the browning speed but requires careful monitoring.',
          highlight: false,
          points: ['Reaction speed: x2.0-3.0', '1 tsp per kg (approx 1.5g)', 'Best for: dark pretzel crusts, extreme caramelization', 'Taste test before serving - borderline soapy'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Temperature Zones and What They Mean for Browning',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temperature is the other critical variable for the Maillard reaction. Each zone produces fundamentally different results. Understanding these thresholds helps you choose the right heat level for your cooking goal.',
    },
    {
      type: 'table',
      headers: ['Zone', 'Temp Range', 'What Happens', 'Best For'],
      rows: [
        ['Evaporation', 'Below 110°C', 'Water evaporates, no browning occurs', 'Sous vide, poaching, steaming'],
        ['Slow Browning', '110-139°C', 'Maillard begins slowly, gentle color development', 'Slow-roasted tomatoes, low-temp dehydration'],
        ['Optimal Zone', '140-180°C', 'Maximum browning speed without burning', 'Searing, roasting, frying, baking'],
        ['Pyrolysis', 'Above 180°C', 'Burning begins, bitter acrid compounds form', 'Quick charring for flavor accent (use sparingly)'],
      ],
    },
    {
      type: 'title',
      text: 'Common Maillard Mistakes and How to Fix Them',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Adding too much baking soda',
      html: 'More is not better with baking soda. Exceeding 1.5g per kilogram of food introduces a metallic, soapy, or chemical aftertaste. The flavor compounds produced by excessive alkalinity are not the same as the rich, savory notes from proper Maillard browning. <strong>Stick to the recommended amount shown by the calculator.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Cooking at too low a temperature',
      html: 'Below 110°C, you are essentially steaming or dehydrating your food - not browning it. The Maillard reaction has a minimum activation temperature. If you want deep, complex flavors, <strong>the surface of the food must reach at least 140°C.</strong> Use a high-heat cooking method like searing, broiling, or roasting above 180°C oven temperature.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Ignoring moisture',
      html: 'Water is the enemy of the Maillard reaction. Wet surfaces cannot exceed 100°C until the water evaporates. Always <strong>pat food completely dry</strong> before searing. Baking soda helps because it also accelerates the evaporation of surface water by breaking down cell walls, but it cannot overcome visibly wet food. Dry surfaces = better browning.',
    },
    {
      type: 'title',
      text: 'Pro Tips for Perfect Browning',
      level: 3,
    },
    {
      type: 'tip',
      title: 'The Baking Soda Slurry Technique',
      html: 'Never sprinkle dry baking soda directly onto food - it will not distribute evenly. Dissolve the measured amount in 1-2 tablespoons of warm water, then brush or toss the slurry with the food. This ensures uniform alkalinity across the entire surface for even, consistent browning.',
    },
    {
      type: 'tip',
      title: 'Pair Baking Soda with Dry Brining',
      html: 'Baking soda and salt work synergistically. Dry brine your meat with salt for 1-24 hours before cooking, then apply the baking soda slurry just before it hits the heat. The salt draws out proteins that participate in the Maillard reaction, while the baking soda accelerates it. This combination produces the deepest, richest crust.',
    },
    {
      type: 'tip',
      title: 'Onion Caramelization Hack',
      html: 'A pinch of baking soda (0.3g per large onion) can reduce caramelization time from 45 minutes to 20 minutes. The alkaline environment breaks down the onion cell walls faster, releasing sugars and amino acids that fuel the Maillard reaction. But be precise - too much baking soda turns onions into mush with a chemical aftertaste.',
    },
    {
      type: 'title',
      text: 'Key Browning Terms Glossary',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Maillard Reaction', definition: 'A non-enzymatic chemical reaction between amino acids and reducing sugars that creates the brown color and complex savory flavors in cooked foods. Occurs above 110°C and is distinct from caramelization.' },
        { term: 'Pyrolysis', definition: 'The thermal decomposition of organic material at high temperatures (above 180°C). Unlike Maillard browning, pyrolysis produces bitter, acrid, and sometimes carcinogenic compounds. It is what happens when food burns.' },
        { term: 'pH', definition: 'A scale from 0 to 14 measuring acidity (low) or alkalinity (high). Neutral is 7. Most raw foods are between pH 5.5 and 6.5. Baking soda raises pH to alkaline levels, accelerating the Maillard reaction.' },
        { term: 'Sodium Bicarbonate', definition: 'Baking soda - a white crystalline powder (NaHCO₃) that acts as a mild base. In cooking, it raises surface pH, accelerates browning, tenderizes meat, and helps vegetables retain color during cooking.' },
        { term: 'Alkalinity', definition: 'The capacity of a solution to neutralize acids. In the context of Maillard acceleration, alkalinity refers to pH values above 7.0. Excess alkalinity produces bitter, soapy off-flavors.' },
        { term: 'Reaction Speed Multiplier', definition: 'How many times faster the Maillard reaction proceeds compared to baseline (pH 6). A multiplier of x2.0 means browning happens twice as fast, effectively halving the cooking time needed for the same color development.' },
        { term: 'Surface pH', definition: 'The pH at the very surface of the food where the Maillard reaction occurs, not the internal pH. Baking soda primarily affects surface pH since it does not penetrate deeply into the food during short cooking times.' },
      ],
    },
    {
      type: 'title',
      text: 'Quick Reference: Baking Soda for Common Foods',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Recommended baking soda amounts for everyday cooking',
      items: [
        'Caramelized onions (1 large): 0.3g baking soda - reduces time from 45 to ~20 minutes',
        'Roasted potatoes (500g): 0.4g baking soda - crispier, more golden exterior',
        'Pan-seared steak (250g): 0.2g baking soda - darker crust in less time',
        'Chicken wings (1kg): 0.75g baking soda - crispier skin, faster browning',
        'Pretzel dough (500g flour): 1.5g baking soda - deep brown crust after alkaline dip',
        'Roasted vegetables (1kg mix): 0.75g baking soda - more uniform caramelization',
      ],
    },
    {
      type: 'paragraph',
      html: 'Every food has a different ideal alkalinity level based on its natural pH and moisture content. This calculator takes the guesswork out of the equation - input your exact food weight and temperature, and it will give you the precise baking soda amount for perfect browning every time.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
