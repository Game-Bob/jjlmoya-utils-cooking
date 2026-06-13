import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Carry Over Cooking Predictor: Thermal Inertia Calculator';
const description = 'Predict how many degrees your roast will continue cooking after you pull it from the oven. Get the exact pull temperature for a perfect medium rare.';

const faq = [
  {
    question: 'What is carry-over cooking and why does it happen?',
    answer: 'Carry-over cooking, also called thermal inertia, is the continued rise in internal temperature after food is removed from the oven. Heat stored in the outer layers continues conducting toward the center. A roast pulled at 50°C can reach 54°C during resting - the difference between rare and medium-rare.',
  },
  {
    question: 'How does oven temperature affect carry-over?',
    answer: 'Higher oven temperatures (200-250°C) create a larger temperature gradient between the surface and the core, storing more latent heat in the crust. This increases the carry-over effect. A roast cooked at 120°C will have minimal carry-over (~1°C), while one at 220°C can gain 5-8°C during rest.',
  },
  {
    question: 'Does the shape of the meat change the carry-over calculation?',
    answer: 'Yes. Geometry significantly affects heat penetration. Whole birds and thick roasts have more thermal mass relative to surface area, so they retain more heat and carry over more. Flat cuts like steaks have high surface-to-volume ratios and cool quickly, with minimal carry-over.',
  },
  {
    question: 'How long should I rest the meat after pulling it?',
    answer: 'Rest time depends on weight and geometry. A general rule is about 1 minute per 100g of meat, minimum 10 minutes, maximum 45 minutes. A 2kg roast needs roughly 16 minutes of rest. During this time the internal temperature equalizes and the carry-over effect completes.',
  },
];

const howTo = [
  {
    name: 'Select the meat geometry',
    text: 'Choose Whole Bird for poultry, Cylindrical Roast for tenderloins and boneless cuts, or Flat Cut for steaks and fillets.',
  },
  {
    name: 'Enter the weight',
    text: 'Input the total weight of your cut in grams. Minimum weights apply per geometry type.',
  },
  {
    name: 'Set the oven temperature',
    text: 'Enter your actual oven temperature. Higher temperatures increase carry-over effect.',
  },
  {
    name: 'Set your target temperature',
    text: 'Enter the desired final internal temperature (e.g. 54°C for medium-rare beef, 74°C for poultry).',
  },
  {
    name: 'Read the pull temperature',
    text: 'The calculator tells you exactly when to pull the meat to hit your target after resting.',
  },
  {
    name: 'Rest the meat',
    text: 'Let the meat rest for the recommended time. Do not tent too tightly or the crust will soften.',
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
  slug: 'carry-over-cooking-predictor',
  title: 'Carry Over Cooking Predictor',
  description: 'Predict how many degrees your roast will continue cooking after you pull it from the oven. Get the exact pull temperature for a perfect medium rare.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Carry Over Cooking Predictor',
    subtitle: 'Thermal inertia calculator for precision roasting',
    geometryLabel: 'Meat Geometry',
    wholeBird: 'Whole Bird (Poultry)',
    cylindricalRoast: 'Cylindrical Roast (Tenderloin, Boneless)',
    flatCut: 'Flat Cut (Steak, Fillet)',
    weightLabel: 'Weight',
    ovenTempLabel: 'Oven Temperature',
    targetTempLabel: 'Target Internal Temperature',
    pullTemp: 'Pull Temperature',
    carryOver: 'Carry Over',
    restTime: 'Rest Time',
    minutes: 'min',
    degreesC: '°C',
    degreesF: '°F',
    unitLabel: 'Units',
    metricUnit: 'Metric',
    imperialUnit: 'Imperial',
    geometryDescCylindrical: 'Cylindrical roast geometry selected - moderate thermal inertia with predictable carry-over.',
    weightG: 'g',
    weightOz: 'oz',
    errorTargetExceedsOven: 'Target temperature cannot exceed oven temperature.',
    errorOvenTooHot: 'Oven temperature exceeds 350°C. Please lower the temperature.',
    errorWeightTooLow: 'Weight is below the minimum for this geometry.',
    errorWeightTooHigh: 'Weight exceeds the maximum for this geometry.',
    pullNow: 'Pull the meat now',
    pullAt: 'Pull at',
    toReach: 'to reach',
    afterRest: 'after resting',
    carryOverWillAdd: 'Carry-over will add approximately',
    footerTemplate: '{carry} carry-over · {rest} rest · {weight}{wunit}, {oven} oven → {target} target',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Carry-Over Cooking Predictor: Get the Perfect Pull Temperature Every Time',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Carry-over cooking is the continued rise in internal temperature after food leaves the oven. The outer layers store heat during roasting, and this energy keeps conducting toward the cooler center during rest. A thick roast pulled at 50°C can reach 54°C after resting - the difference between rare and medium-rare. This calculator predicts exactly how many degrees your roast will climb so you can pull it at the precise moment.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '5-8°C', label: 'Typical carry-over (hot oven)', icon: 'mdi:thermometer' },
        { value: '1-3°C', label: 'Minimal carry-over (low oven)', icon: 'mdi:thermometer-low' },
        { value: '16 min', label: 'Rest time for 2kg roast', icon: 'mdi:clock-outline' },
        { value: '45 min', label: 'Maximum recommended rest', icon: 'mdi:clock-alert' },
      ],
    },
    {
      type: 'title',
      text: 'Pull Temperature Chart by Doneness',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Use this chart to find your target internal temperature, then let the calculator determine the exact pull temperature. Remember: the pull temperature is always <strong>lower</strong> than your target because the carry-over effect will continue cooking during rest.',
    },
    {
      type: 'table',
      headers: ['Doneness', 'Target Temp', 'Pull Temp (200°C oven)', 'Rest Time'],
      rows: [
        ['Beef Rare', '52°C / 126°F', '46-48°C / 115-118°F', '10-15 min'],
        ['Beef Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Beef Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
        ['Beef Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Pork Medium', '63°C / 145°F', '57-59°C / 135-138°F', '10-15 min'],
        ['Pork Well Done', '71°C / 160°F', '65-67°C / 149-153°F', '10-15 min'],
        ['Chicken/Turkey Breast', '74°C / 165°F', '68-70°C / 154-158°F', '15-20 min'],
        ['Chicken/Turkey Thigh', '82°C / 180°F', '76-78°C / 169-172°F', '15-20 min'],
        ['Lamb Medium-Rare', '54°C / 129°F', '48-50°C / 118-122°F', '10-15 min'],
        ['Lamb Medium', '60°C / 140°F', '54-56°C / 129-133°F', '10-15 min'],
      ],
    },
    {
      type: 'title',
      text: 'How Geometry Changes the Thermal Calculus',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Whole Bird',
          icon: 'mdi:food-drumstick',
          description: 'Maximum thermal mass relative to surface area. The thick breast and thigh cores store enormous latent heat.',
          highlight: false,
          points: ['Carry-over: 5-10°C from a 200°C oven', 'Rest: 20-45 minutes', 'Best for: turkey, whole chicken, duck', 'Pull 8-10°C below target'],
        },
        {
          title: 'Cylindrical Roast',
          icon: 'mdi:food-steak',
          description: 'The most common roasting shape. Moderate heat retention with predictable carry-over values.',
          highlight: true,
          points: ['Carry-over: 3-7°C from a 200°C oven', 'Rest: 15-30 minutes', 'Best for: tenderloin, pork loin, lamb rack', 'Pull 5-7°C below target'],
        },
        {
          title: 'Flat Cut',
          icon: 'mdi:food',
          description: 'High surface-to-volume ratio means heat escapes quickly. Carry-over is minimal but still matters.',
          highlight: false,
          points: ['Carry-over: 1-3°C from a 200°C oven', 'Rest: 5-15 minutes', 'Best for: steaks, chicken breast, fish fillet', 'Pull 1-3°C below target'],
        },
      ],
    },
    {
      type: 'title',
      text: 'Common Carry-Over Mistakes and How to Fix Them',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Pulling too late',
      html: 'If you wait until the thermometer reads your target temperature before pulling, the carry-over will overshoot by 3-8°C. A medium-rare roast becomes medium or medium-well. <strong>Always pull 5-8°C below your target.</strong> Use this calculator to get the exact number.',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Carving too soon',
      html: 'Cutting into a roast immediately after pulling releases up to 30% of the juices. The thermal gradient has no time to equalize, so the center stays undercooked while the outer layers overcook. <strong>Rest for the full recommended time.</strong> Tent loosely with foil - do not wrap tightly or the steam will soften the crust.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Oven temperature too low',
      html: 'A low oven (below 150°C / 300°F) creates minimal temperature gradient between the surface and core. This means almost no carry-over effect. If you are cooking at low temperature, you can pull at your exact target temperature with minimal risk of overshoot. However, the crust development will be significantly reduced.',
    },
    {
      type: 'title',
      text: 'Pro Tips for Perfect Roasting',
      level: 3,
    },
    {
      type: 'tip',
      title: 'The 10 Degree Rule',
      html: 'A hot oven (220°C / 425°F) adds roughly 1°C of carry-over per 100g of meat for whole birds, and 0.7°C per 100g for cylindrical roasts. Use this as a sanity check against the calculator: a 2kg chicken at 220°C should carry over about 7-9°C.',
    },
    {
      type: 'tip',
      title: 'Resting Position Matters',
      html: 'Always rest meat on a warm plate or cutting board, not a cold surface. A cold surface will pull heat from the bottom of the roast, creating uneven final temperatures. For whole birds, rest breast-side up so the juices redistribute evenly through the white meat.',
    },
    {
      type: 'tip',
      title: 'Tent, Don\'t Wrap',
      html: 'Loosely tent the roast with aluminum foil during rest. Wrapping tightly traps steam and turns the crust soggy. A loose tent reduces heat loss by about 30% while allowing steam to escape, preserving both the carry-over effect and the crispy exterior.',
    },
    {
      type: 'title',
      text: 'Key Roasting Terms Glossary',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'Carry-Over Cooking', definition: 'The continued rise in internal temperature after food is removed from the heat source, caused by heat conducting from the outer layers toward the center.' },
        { term: 'Pull Temperature', definition: 'The internal temperature at which you should remove the meat from the oven. Always lower than the target temperature to account for carry-over.' },
        { term: 'Target Temperature', definition: 'The final internal temperature you want the meat to reach after resting. Also called the serving temperature.' },
        { term: 'Thermal Inertia', definition: 'The tendency of a mass to resist temperature change. Heavier, denser cuts have higher thermal inertia and carry over more.' },
        { term: 'Resting', definition: 'The period after cooking where the meat sits untouched, allowing heat to equalize and juices to redistribute throughout the fibers.' },
        { term: 'Temperature Gradient', definition: 'The difference in temperature between the surface of the meat and its core. A larger gradient stores more latent heat for carry-over.' },
        { term: 'Latent Heat', definition: 'The heat energy stored in the outer layers of the meat during cooking. This energy is released as the temperature equalizes during rest.' },
      ],
    },
    {
      type: 'title',
      text: 'Quick Reference: Recommended Pull Temperatures',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Pull at these temperatures for perfect results (200°C / 400°F oven)',
      items: [
        'Beef medium-rare: pull at 48-50°C / 118-122°F, target 54°C / 129°F',
        'Beef medium: pull at 54-56°C / 129-133°F, target 60°C / 140°F',
        'Pork loin: pull at 57-59°C / 135-138°F, target 63°C / 145°F',
        'Chicken breast: pull at 68-70°C / 154-158°F, target 74°C / 165°F',
        'Whole turkey: pull at 68-70°C / 154-158°F, target 74°C / 165°F (breast)',
        'Lamb rack: pull at 48-50°C / 118-122°F, target 54°C / 129°F',
      ],
    },
    {
      type: 'paragraph',
      html: 'Every roast is different. Weight, exact oven temperature, and the shape of the cut all shift these numbers. That is exactly what this calculator does - it takes your specific inputs and computes the precise pull temperature for your exact situation. No guesswork, no ruined roasts.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
