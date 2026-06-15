import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Koji Inoculation and Hydration Calculator";
const description = "Calculate the perfect moisture content, spore inoculation dosage, and incubation temperature for making koji at home. Avoid failed batches with our free koji inoculation and hydration calculator.";
const faq = [
  {
    question: "What is the target moisture content for cooking koji substrate?",
    answer: "The ideal total moisture content for steamed rice or barley when inoculating Koji is between 30% and 35%. This corresponds to a steamed weight of approximately 1.35x to 1.40x the initial dry weight."
  },
  {
    question: "How much spore powder (tane-koji) do I need?",
    answer: "The standard inoculation rate is 1 gram of standard spore mix per 1 kilogram of dry substrate. If using concentrated spores, you need less (0.5g), whereas diluted mixes require more (2.0g)."
  },
  {
    question: "Why is temperature control critical during koji incubation?",
    answer: "Aspergillus oryzae grows optimally between 28C and 34C. If the temperature exceeds 38C, the mold can overheat, stop growing, or produce undesired green/black spores. Below 20C, growth slows down significantly."
  },
  {
    question: "What happens during the exothermic phase?",
    answer: "After 18 to 24 hours of incubation, the koji starts growing rapidly and generates its own heat. During this exothermic peak, you must stir the substrate and lower incubator heat to prevent overheating."
  }
];

const howTo = [
  {
    name: "Input dry substrate weight",
    text: "Enter the initial dry weight of your rice or barley to establish target hydration thresholds."
  },
  {
    name: "Track steamed weight",
    text: "Enter the actual steamed weight after cooking. The calculator determines the moisture percentage and checks if it falls within the 30-35% ideal range."
  },
  {
    name: "Calculate spore dosage",
    text: "Select your spore potency (standard, concentrated, or diluted) to obtain the exact weight of spore powder to inoculate."
  },
  {
    name: "Monitor incubation parameters",
    text: "Adjust temperature and relative humidity to simulate mycelium growth and review the 48-hour thermal curve timeline."
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
  slug: 'koji-inoculation-calculator',
  title: 'Koji Inoculation and Hydration Calculator',
  description: 'Calculate the perfect moisture content, spore inoculation dosage, and incubation temperature for making koji at home. Avoid failed batches with our free koji inoculation and hydration calculator.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Koji Inoculation Analyzer',
    subtitle: 'Optimize solid state koji fermentation parameters',
    dryWeightLabel: 'Dry Substrate Weight',
    steamedWeightLabel: 'Actual Steamed Weight',
    targetRangeLabel: 'Target Steamed Weight Range',
    moistureLabel: 'Current Moisture',
    potencyLabel: 'Spore Potency',
    standardPotency: 'Standard Spores',
    concentratedPotency: 'Concentrated',
    dilutedPotency: 'Diluted Mix',
    sporeDosageLabel: 'Spore Dosage',
    tempLabel: 'Incubator Temperature',
    humidityLabel: 'Relative Humidity',
    statusIdeal: 'Ideal Incubation',
    statusSlow: 'Slow Growth',
    statusInhibited: 'Inhibited / Cold',
    statusOverheating: 'Overheating / Sporulation',
    timelineTitle: '48h Thermal Incubation Cycle',
    stage1Name: '0-18h: Warming',
    stage2Name: '18-36h: Exothermic Peak',
    stage3Name: '36-48h: Maturation'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'How to Make Koji: The Perfect Moisture, Spore Dosage, and Temperature for Aspergillus Oryzae',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Making koji at home requires three things to go right: <strong>substrate hydration</strong>, <strong>spore inoculation density</strong>, and <strong>incubation temperature control</strong>. Get any of these wrong and your batch can overheat, fail to inoculate, or grow the wrong mold. Our <strong>koji inoculation calculator</strong> takes the guesswork out by computing your target steamed weight, exact spore dosage, and real-time incubation status based on your specific inputs.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '30-35%',
          label: 'Target Moisture',
          icon: 'mdi:water-percent'
        },
        {
          value: '1 g/kg',
          label: 'Standard Spore Rate',
          icon: 'mdi:seed-outline'
        },
        {
          value: '28-34°C',
          label: 'Ideal Temperature',
          icon: 'mdi:thermometer'
        },
        {
          value: '48 h',
          label: 'Total Incubation',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Why Moisture Content Determines Koji Quality',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'The single most important factor in successful koji cultivation is <strong>substrate moisture</strong>. When rice or barley is steamed, the starch granules gelatinize and absorb water, becoming accessible to the enzymes produced by Aspergillus oryzae. The ideal moisture range is narrow: <strong>30% to 35%</strong>. Below 30%, the mycelium cannot draw enough water to grow and enzyme production stalls. Above 35%, the grains become sticky and clump together, reducing air porosity and suffocating the aerobic mold.'
    },
    {
      type: 'list',
      items: [
        '<strong>Too dry (under 30%):</strong> Mycelium growth is stunted, enzyme production drops, and the koji never fully colonizes the grain.',
        '<strong>Too wet (over 35%):</strong> Grains stick together, air pockets collapse, and bacteria or unwanted molds can outcompete Aspergillus oryzae.',
        '<strong>Target range (30-35%):</strong> The grain feels firm, individual kernels separate easily, and the mycelium spreads evenly within 48 hours.',
        '<strong>How to measure:</strong> Weigh your dry grain, steam it, then weigh again. The calculator computes your exact moisture percentage from these two numbers.'
      ]
    },
    {
      type: 'table',
      headers: ['Grain Type', 'Dry Weight', 'Target Steamed Weight', 'Soak Time', 'Steam Time'],
      rows: [
        ['White Rice (short grain)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['White Rice (long grain)', '1000 g', '1350-1400 g', '2-4 h', '30-40 min'],
        ['Pearl Barley', '1000 g', '1350-1400 g', '4-8 h', '40-50 min'],
        ['Brown Rice', '1000 g', '1350-1400 g', '8-12 h', '45-60 min']
      ]
    },
    {
      type: 'title',
      text: 'Spore Inoculation: How Much Tane-Koji Do You Need?',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Inoculation density directly affects how quickly the mold colonizes the substrate and how competitive it is against contaminants. The standard rate is <strong>1 gram of spore mix per kilogram of dry substrate</strong>, but this varies by spore type.'
    },
    {
      type: 'proscons',
      title: 'Choosing Your Spore Type',
      items: [
        {
          pro: 'Standard spores are the most common format, forgiving for beginners, and well documented in home-brewing literature.',
          con: 'Higher powder volume per batch and may contain filler that does not contribute to inoculation.'
        },
        {
          pro: 'Concentrated spores use half the powder for the same inoculation, have higher purity, and are more economical for large batches.',
          con: 'Easier to overdose, requires a precise scale (0.01 g resolution), and leaves less room for error if under-dosed.'
        },
        {
          pro: 'Diluted mixes distribute easily over large surfaces, are more forgiving with uneven mixing, and suit beginners who prefer visible coverage.',
          con: 'Uses more powder per batch and may introduce excess starch from filler.'
        }
      ]
    },
    {
      type: 'title',
      text: 'The Exothermic Heat Curve: Why Koji Generates Its Own Heat',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'As Aspergillus oryzae consumes starches and transforms them into simple sugars, it generates metabolic heat. Between hours <strong>18 and 36</strong> of incubation, the biological activity peaks, producing an exothermic surge that can raise the grain bed temperature by 5-10C above the incubator ambient temperature.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Signs Your Koji Is Overheating',
      html: 'If the grain bed temperature exceeds <strong>38C</strong>, the mold enzymes begin to denature and the fungus switches to reproductive mode, producing <strong>green or black spores</strong>. The batch will smell ammonia-like instead of sweet and chestnutty. You must stir the substrate immediately and reduce incubator temperature to bring it back below 34C.'
    },
    {
      type: 'tip',
      title: 'The 12 Hour Turn Schedule',
      html: 'Starting at hour 18, break up the grain bed and stir it every 12 hours. This releases trapped heat, redistributes moisture, and gives the mycelium access to fresh oxygen. Use clean, sanitized hands or a sterile spoon.'
    },
    {
      type: 'tip',
      title: 'Humidity Matters Too',
      html: 'Keep relative humidity above <strong>65%</strong> during incubation. Below 40%, the substrate dries out and growth stops. Above 90%, condensation can promote bacterial growth on the grain surface.'
    },
    {
      type: 'tip',
      title: 'Trust Your Nose',
      html: 'Healthy koji smells like sweet roasted chestnuts or fresh mushrooms. If you detect ammonia, sourness, or rot, the batch may have overheated or been contaminated. Remove and discard affected grain immediately.'
    },
    {
      type: 'card',
      icon: 'mdi:rice',
      title: 'Sake & Miso Making',
      html: 'Koji inoculated rice is the foundation of <strong>sake</strong>, <strong>miso</strong>, and <strong>amazake</strong>. Precise moisture control ensures proper enzyme development for starch-to-sugar conversion.'
    },
    {
      type: 'card',
      icon: 'mdi:soy-sauce',
      title: 'Soy Sauce & Tamari',
      html: 'Koji grown on <strong>soybeans</strong> or a soybean-wheat blend drives the fermentation that produces umami-rich soy sauce. Consistent temperature avoids off-flavors.'
    },
    {
      type: 'card',
      icon: 'mdi:shaker-outline',
      title: 'Shio Koji & Garum',
      html: '<strong>Shio koji</strong> (salt-fermented koji) and <strong>meat garums</strong> rely on fully colonized grain. Our calculator ensures your substrate is in the ideal moisture window before inoculation.'
    },
    {
      type: 'title',
      text: 'Koji Incubation Glossary',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Tane-Koji',
          definition: 'The spore powder used to inoculate steamed grain. Typically Aspergillus oryzae spores mixed with a starch carrier like rice flour.'
        },
        {
          term: 'Exothermic Phase',
          definition: 'The period between 18 and 36 hours of incubation when Aspergillus oryzae generates enough metabolic heat to raise the grain bed temperature above ambient levels.'
        },
        {
          term: 'Gelatinization',
          definition: 'The process of heating starch in the presence of water so that the granules swell and become accessible to amylase enzymes produced by the mold.'
        },
        {
          term: 'Sporulation',
          definition: 'When the mold switches from vegetative growth to reproductive mode, turning green or black. This is triggered by heat stress above 38C and ruins the batch for culinary use.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Key Takeaways for Perfect Koji',
      items: [
        'Target 30-35% moisture in steamed grain. Use the calculator to find your exact steamed weight target.',
        'Inoculate at 1 g/kg for standard spores, 0.5 g/kg for concentrated, or 2 g/kg for diluted mixes.',
        'Maintain 28-34C and above 65% humidity during incubation. Stir every 12 hours after hour 18.',
        'Watch for the exothermic peak at 18-36 hours. If temperature exceeds 38C, stir immediately and lower heat.',
        'Trust your senses: sweet chestnut aroma = good koji. Ammonia or sour smell = overheating or contamination.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
