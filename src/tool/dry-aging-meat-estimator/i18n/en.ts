import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Dry Aging Meat Yield and Cost Calculator";
const description = "Calculate meat weight loss, pellicle trim waste, and actual cost per kilogram when dry aging beef or other meats at home or in a chamber.";
const faq = [
  {
    question: "How much weight does meat lose during dry aging?",
    answer: "During a standard 30 to 45 day dry aging process, meat loses approximately 15% to 25% of its weight due to moisture evaporation. Additionally, about 15% of the initial weight is lost when trimming the dry outer crust (pellicle) before cooking."
  },
  {
    question: "What is the optimal humidity for dry aging?",
    answer: "The ideal relative humidity for dry aging meat is between 75% and 85%. If the humidity is too low (below 75%), the surface dries out too quickly, forming a hard barrier that traps moisture inside. If it is too high (above 85%), it increases the risk of mold and spoilage."
  },
  {
    question: "Why does the price per kilogram increase so much?",
    answer: "Since you lose weight from water loss and trimming, the final usable weight is lower than the starting weight. The total cost remains the same, meaning the cost per usable kilogram increases proportionally to the total weight lost."
  }
];

const howTo = [
  {
    name: "Input initial weight",
    text: "Enter the starting weight of the subprimal cut before dry aging."
  },
  {
    name: "Set aging days",
    text: "Select the total duration of dry aging, typically between 1 and 60 days."
  },
  {
    name: "Adjust relative humidity",
    text: "Set the humidity of your chamber (ideal is 75% to 85%) to determine water loss rate."
  },
  {
    name: "Enter starting price",
    text: "Provide the cost per kilogram of the raw meat to compare it against the final usable yield cost."
  }
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
  slug: 'dry-aging-meat-estimator',
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Dry Aging Meat Estimator',
    subtitle: 'Simulate weight loss and calculate final yield cost',
    startWeightLabel: 'Starting Weight',
    daysLabel: 'Aging Time',
    pricePerKgLabel: 'Original Price',
    humidityLabel: 'Relative Humidity',
    finalWeightLabel: 'Final Usable Weight',
    yieldLabel: 'Total Usable Yield',
    originalCostLabel: 'Initial Total Cost',
    finalCostPerKgLabel: 'Final Usable Price',
    moistureLossLabel: 'Moisture Evaporation Loss',
    trimmingLossLabel: 'Pellicle Trim Waste',
    warningLowHumidity: 'Warning: Humidity is below 75%. Surface may dry too rapidly, causing case hardening.',
    warningHighHumidity: 'Warning: Humidity is above 85%. Elevated risk of bacterial spoilage or unwanted mold growth.',
    timelineTitle: 'Dry Aging Progression Timeline',
    timelineInfoText: 'Click along the timeline to preview the physical changes in the meat cut'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Science and Economics of Dry Aging Meat',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Dry aging is a culinary art that combines microbiology, biochemistry, and physics to transform standard subprimal beef cuts into tender, flavor-concentrated delicacies. By placing meat in a temperature and humidity-controlled environment, two primary changes occur: enzymatic breakdown and moisture evaporation.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Ideal Humidity',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Optimal Temp',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Pellicle Trim Loss',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 d',
          label: 'Standard Aging',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Understanding Weight Loss Dynamics and the Asymptotic Curve',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'The weight loss during dry aging is asymptotic. In the first 14 days, moisture evaporates rapidly from the outer layers of the meat. As the outer layer dehydrates, it forms a dark, hard crust known as the pellicle. This pellicle acts as a protective barrier, slowing down further evaporation. Consequently, the rate of water loss stabilizes after two to three weeks.'
    },
    {
      type: 'list',
      items: [
        '<strong>Days 1-14:</strong> High evaporation rate. The meat loses up to 10% to 12% of its weight, primarily water. The muscle fibers shrink as moisture escapes, concentrating sugars and proteins.',
        '<strong>Days 15-30:</strong> Evaporation slows down as the pellicle hardens. Enzymatic activity intensifies, enhancing tenderness. Calpain and cathepsin enzymes break down tough collagen and connective tissue.',
        '<strong>Days 30-45:</strong> Minimal additional moisture loss. Deep flavor compounds develop, yielding signature nutty and blue-cheese notes from beneficial mold growth and fat oxidation.',
        '<strong>Trimming Loss:</strong> When the aging is complete, this crust must be trimmed off. The trimming removes approximately 15% of the total weight.'
      ]
    },
    {
      type: 'title',
      text: 'Environmental Controls in the Dry Aging Chamber',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Consistent air quality, temperature, and humidity are critical to dry aging. A deviation in any of these parameters can ruin the subprimal cut, leading to either rot or insufficient enzyme development.'
    },
    {
      type: 'list',
      items: [
        '<strong>Temperature Control:</strong> The chamber must remain between 1C and 3C (34F to 37F). Temperatures below 0C (32F) freeze the enzymes, stopping the tenderization process. Temperatures above 4C (40F) promote rapid growth of pathogenic bacteria.',
        '<strong>Relative Humidity (RH):</strong> The ideal range is 75% to 85%. If RH drops below 70%, case hardening occurs, locking moisture inside and preventing deep curing. If RH exceeds 85%, harmful mold and slime bacteria can develop on the surface.',
        '<strong>Air Flow:</strong> Moderate, continuous airflow (approx. 0.5 to 2.0 m/s) is necessary to sweep evaporating water away from the meat surface, allowing the pellicle to form quickly and dry evenly.'
      ]
    },
    {
      type: 'title',
      text: 'Cost Implications and Financial Calculations of Dry Aging',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Because of moisture evaporation and pellicle removal, the final edible portion of the meat is significantly smaller than the starting weight. Since the total monetary value of the meat piece remains constant, the unit price per usable kilogram increases. Using this calculator helps butchers and home chefs determine if the flavor concentration justifies the raw product loss.'
    },
    {
      type: 'table',
      headers: ['Aging Duration', 'Avg. Evaporation Loss', 'Avg. Trim Loss', 'Total Yield', 'Final Cost Multiplier'],
      rows: [
        ['14 Days', '10.5%', '15.0%', '74.5%', '1.34x'],
        ['21 Days', '13.5%', '15.0%', '71.5%', '1.40x'],
        ['30 Days', '17.5%', '15.0%', '67.5%', '1.48x'],
        ['45 Days', '21.0%', '15.0%', '64.0%', '1.56x'],
        ['60 Days', '24.0%', '15.0%', '61.0%', '1.64x']
      ]
    },
    {
      type: 'title',
      text: 'Safety Guidelines: Microbiology and Identification of Good vs. Bad Mold',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Safe dry aging relies on the growth of beneficial microflora, particularly fungi from the genus <em>Thamnidium</em>, <em>Mucor</em>, and <em>Rhizopus</em>. These molds release enzymes that help tenderize meat. However, maintaining strict hygiene is essential to prevent contamination.'
    },
    {
      type: 'list',
      items: [
        '<strong>Good Indicators:</strong> A dry, firm, dark purple or dark brown crust. A white, dusty, thread-like mold layer (similar to cheese rind) is normal and safe, as it will be trimmed off.',
        '<strong>Bad Indicators:</strong> Sticky, slimy, or wet surface areas. Green, black, or yellowish molds. Sour, putrid, or ammonia-like smells indicate spoilage. Throw the meat away if these are present.',
        '<strong>Cleanliness:</strong> Always sterilize the chamber, hooks, and racks before placing new meat. Use gloves when handling the subprimal, and sanitize all knives and cutting boards before trimming.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
