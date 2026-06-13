import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Macaron Shell Drying Predictor: Humidity & Temperature Drying Time Calculator';
const description = 'Calculate exactly how long macaron shells need to dry based on humidity, temperature, and shell size. Avoid cracked shells and ensure perfect feet every time.';

const faq = [
  {
    question: 'Why do macaron shells need to dry before baking?',
    answer: 'Drying forms a thin skin on the surface of the macaron shell. This skin is essential because it traps steam during baking, forcing it to escape downward through the feet rather than cracking the top. Without proper drying, macarons crack, have no feet, or bake unevenly.',
  },
  {
    question: 'How does humidity affect macaron drying time?',
    answer: 'Humidity is the most critical factor. In high humidity (above 60%), the air is already saturated with moisture, dramatically slowing evaporation from the shell surface. Drying time can double or triple compared to a dry day. In very dry conditions (below 30%), shells can over-dry and develop a thick skin that prevents proper rise.',
  },
  {
    question: 'What is the ideal temperature for drying macaron shells?',
    answer: 'Room temperature between 20°C and 25°C is ideal. Warmer air holds more moisture and accelerates drying, but too hot (above 30°C) can cause the shells to dry unevenly with a crusty exterior and wet interior. Cool temperatures below 18°C slow drying significantly.',
  },
  {
    question: 'How does shell size affect drying time?',
    answer: 'Larger shells have more surface area and volume, requiring proportionally longer drying. A 2cm mini macaron may dry in 15 minutes, while a 5cm large macaron can take over an hour. The relationship is not linear: doubling the diameter roughly triples the drying time due to the square-cube relationship of surface area to volume.',
  },
];

const howTo = [
  {
    name: 'Pipe your macaron shells',
    text: 'Pipe evenly sized rounds onto parchment paper or a silicone mat. Use a template for consistent sizing.',
  },
  {
    name: 'Measure your environment',
    text: 'Check the ambient humidity and temperature of your kitchen using a hygrometer and thermometer.',
  },
  {
    name: 'Enter values into the calculator',
    text: 'Input the humidity, temperature, and your shell diameter to get the estimated drying time.',
  },
  {
    name: 'Test the skin',
    text: 'After the predicted time, lightly touch the surface of a shell. It should feel dry and matte, not sticky. If it sticks to your finger, give it more time.',
  },
  {
    name: 'Bake when ready',
    text: 'Once the skin is formed, bake immediately. Do not let shells sit too long after drying or they may over-dry and crack.',
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
  slug: 'macaron-drying-predictor',
  title: 'Macaron Shell Drying Predictor',
  description: 'Calculate exactly how long macaron shells need to dry based on humidity, temperature, and shell size. Avoid cracked shells and ensure perfect feet every time.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    humidityLabel: 'Ambient Humidity',
    humidityUnit: '%',
    tempLabel: 'Room Temperature',
    tempUnit: '°C',
    tempUnitF: '°F',
    sizeLabel: 'Shell Diameter',
    sizeUnit: 'cm',
    sizeUnitIn: 'in',
    dryingTimeLabel: 'Estimated Drying Time',
    minutesUnit: 'min',
    readinessLabel: 'Surface Readiness',
    skinStatusReady: 'Ready to Bake',
    skinStatusForming: 'Forming Skin',
    skinStatusSticky: 'Still Sticky',
    skinStatusOverDry: 'Over-Dried',
    humidityTagHigh: 'High humidity',
    humidityTagNormal: 'Normal humidity',
    humidityTagLow: 'Low humidity',
    humidityDescHigh: 'Very humid day. Drying will take significantly longer. Use a dehumidifier or air-conditioned room if possible.',
    humidityDescNormal: 'Moderate humidity. Drying should proceed at a normal pace with good skin formation.',
    humidityDescLow: 'Very dry air. Shells may dry too quickly and risk over-drying. Monitor closely and reduce drying time.',
    tempTagHot: 'Warm room',
    tempTagIdeal: 'Ideal room temp',
    tempTagCool: 'Cool room',
    sizeTagMini: 'Mini',
    sizeTagStandard: 'Standard',
    sizeTagLarge: 'Large',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'The Science of Macaron Shell Drying: Why Skin Formation Determines Success',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The macaron is one of the most technically demanding pastries in French patisserie. Its signature smooth dome and ruffled base, known as the "foot" or "pied", depend entirely on a critical step: drying the piped shells before baking. This resting period allows a thin protein film to form on the surface of each shell. During baking, this skin traps expanding steam inside the shell, forcing it downward to escape through the base, which lifts the shell and creates the coveted foot. Without adequate drying, steam bursts through the top, causing cracks. With excessive drying, the skin becomes too rigid and the shells cannot rise properly.',
    },
    {
      type: 'title',
      text: 'Humidity and Its Dominant Role in Drying Kinetics',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Relative humidity is the single most influential variable in macaron shell drying. At 50% relative humidity, a standard 3cm shell typically requires 30-40 minutes to develop an adequate skin. At 70% humidity, this can extend to 60-90 minutes. At 30% humidity, drying may complete in as little as 15-20 minutes. The physics behind this is straightforward: evaporation rate is proportional to the vapor pressure deficit between the shell surface and the surrounding air. Humid air has a smaller deficit, slowing evaporation. Professional patisseries control humidity meticulously, often maintaining dedicated macaron rooms at 40-50% relative humidity.',
    },
    {
      type: 'title',
      text: 'Drying Time Reference Table by Humidity and Shell Size',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Humidity', '2cm Mini', '3cm Standard', '4cm Large', '5cm Extra Large'],
      rows: [
        ['30% (Very Dry)', '10-15 min', '15-20 min', '25-30 min', '35-45 min'],
        ['40% (Dry)', '15-20 min', '20-30 min', '30-40 min', '45-60 min'],
        ['50% (Moderate)', '20-25 min', '30-40 min', '40-55 min', '55-75 min'],
        ['60% (Humid)', '25-35 min', '40-55 min', '55-75 min', '75-100 min'],
        ['70% (Very Humid)', '35-50 min', '55-75 min', '75-100 min', '100-130 min'],
        ['80% (Extremely Humid)', '50-70 min', '75-100 min', '100-140 min', '130-180 min'],
      ],
    },
    {
      type: 'title',
      text: 'The Role of Temperature in Evaporation Rate',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Temperature affects drying through two mechanisms. First, warmer air can hold more water vapor, increasing the potential evaporation rate from the shell surface. Second, molecular kinetic energy increases with temperature, accelerating the rate at which water molecules escape the liquid phase. However, temperature also affects the meringue stability. Above 28°C, the egg white proteins in the meringue may begin to destabilize, leading to a weakened structure. The ideal range for macaron drying is 20-25°C. Below 18°C, the evaporation rate slows to the point where drying becomes impractical for standard-sized shells.',
    },
    {
      type: 'title',
      text: 'Shell Size and the Square-Cube Law of Drying',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Shell diameter has a non-linear effect on drying time due to the square-cube relationship between surface area and volume. A 2cm mini macaron has approximately 3.1 cm² of surface area for 0.5 cm³ of volume, giving a favorable surface-to-volume ratio of about 6:1. A 5cm large macaron has about 19.6 cm² of surface for 8.2 cm³ of volume, a ratio of only 2.4:1. This means larger shells have proportionally less surface area through which moisture can escape, dramatically increasing drying time. The calculator models this using a power-law relationship calibrated to empirical data from professional pastry kitchens.',
    },
    {
      type: 'title',
      text: 'Troubleshooting Common Macaron Drying Failures',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Cracked shells with no feet',
      html: 'The most common macaron failure. This almost always indicates the shells were not dried long enough before baking. The surface skin was too weak to contain the expanding steam, which burst through the top. <strong>Solution: Increase drying time by 10-15 minutes and test the surface with a light fingertip touch before baking.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'error',
      title: 'Lopsided or slanted feet',
      html: 'Uneven drying is the culprit. If one side of the tray dries faster than the other, the feet will rise unevenly. This often happens when trays are placed near a window, fan, or heat source. <strong>Solution: Rotate trays during drying and ensure even air circulation around all shells.</strong>',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hollow shells after baking',
      html: 'Hollow shells can result from over-drying, which creates a skin that is too thick and rigid. The shell cannot expand properly during baking, leaving an air gap inside. <strong>Solution: Reduce drying time and check for skin formation earlier. The surface should feel dry but still have a slight give when pressed gently.</strong>',
    },
    {
      type: 'title',
      text: 'Pro Tips from Professional Patisserie Chefs',
      level: 3,
    },
    {
      type: 'tip',
      title: 'The Oven Door Technique for Humid Days',
      html: 'On extremely humid days, professional chefs use a technique called "oven drying". Preheat the oven to the lowest possible setting (typically 50°C), turn it off, then place the piped macarons inside with the door slightly ajar for 5-10 minutes. This creates a warm, low-humidity microclimate that accelerates skin formation without beginning to bake the shells.',
    },
    {
      type: 'tip',
      title: 'The Touch Test for Perfect Skin',
      html: 'The definitive test for macaron readiness: lightly touch the surface of one shell with a clean, dry fingertip. If the batter sticks to your finger, it needs more time. If the surface feels dry and matte and does not stick, the skin has formed. If the surface feels hard and crusty with no give, the shells are over-dried.',
    },
    {
      type: 'tip',
      title: 'Humidity Control Without Equipment',
      html: 'If you do not have a dehumidifier, place a bowl of uncooked rice or silica gel packets near the drying macarons. These desiccants absorb ambient moisture, creating a drier microclimate around the tray. In professional kitchens without climate control, this simple trick can cut drying time by 30-40% on humid days.',
    },
    {
      type: 'title',
      text: 'The Egg White Aging Factor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Aged egg whites produce more stable meringues that dry more predictably. Fresh egg whites contain more water and less elastic protein structure, leading to weaker meringues that take longer to form a proper skin. Professional recipes call for egg whites aged 24-72 hours at room temperature or 3-5 days in the refrigerator. Aged whites lose approximately 10-15% of their water content through evaporation, concentrating the proteins and improving meringue strength.',
    },
    {
      type: 'title',
      text: 'Quick Reference: Drying Times for Common Conditions',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Typical drying times for 3cm standard macaron shells',
      items: [
        'Air-conditioned kitchen (22°C, 45% humidity): 25-30 minutes',
        'Spring day, windows open (20°C, 55% humidity): 35-45 minutes',
        'Summer day, no AC (28°C, 70% humidity): 60-90 minutes  -  use oven drying technique',
        'Winter heated home (21°C, 30% humidity): 15-20 minutes  -  watch for over-drying',
        'Rainy day (18°C, 80% humidity): 75-100 minutes  -  strongly consider dehumidifier',
        'Professional pastry kitchen (22°C, 45% humidity, convection): 20-25 minutes',
      ],
    },
    {
      type: 'paragraph',
      html: 'Every kitchen environment is unique. This calculator accounts for the three critical variables  -  humidity, temperature, and shell size  -  to give you a personalized drying time prediction. Enter your conditions and pipe with confidence.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
