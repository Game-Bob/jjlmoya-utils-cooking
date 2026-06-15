import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Cheese Flocculation Multiplier Calculator';
const description = 'Find the exact moment to cut the curd in artisan cheesemaking. Use the flocculation multiplier method to calculate coagulation time, control moisture, and improve cheese yield with our free calculator.';
const faq = [
  {
    question: 'What is the flocculation method in cheesemaking?',
    answer: 'The flocculation method is a technique used to determine the precise moment to cut the curd. It measures the time from the addition of rennet to the first sign of gelation (flocculation), and multiplies this time by a specific factor depending on the cheese style.'
  },
  {
    question: 'How do I detect the flocculation point?',
    answer: 'The most common way is the bowl method. Place a small, sterilized, light plastic bowl on the surface of the milk after adding rennet. Tap or spin it gently every minute. Initially, it spins freely. The moment the bowl stops spinning or resists movement because the milk has begun to gel is the flocculation point.'
  },
  {
    question: 'Why is the curd cutting time so critical?',
    answer: 'Cutting curd at the correct moment controls syneresis (moisture loss). Cutting too early results in fragile curds, loss of fat, and low yield. Cutting too late yields a tough curd that retains too much moisture or fails to drain properly, leading to sour, over-acidified cheese.'
  },
  {
    question: 'What is a flocculation multiplier?',
    answer: 'A multiplier is a numerical factor applied to the primary flocculation time to compute the total coagulation time before cutting. Standard multipliers range from 2.0x (dry cheeses like Parmesan) to 5.0x or 6.0x (moist cheeses like Camembert).'
  },
  {
    question: 'How do temperature and rennet strength affect flocculation?',
    answer: 'Higher temperatures and stronger rennet accelerate flocculation, meaning the milk gels faster. However, because the total cutting time is directly proportional to the flocculation time, the multiplier method automatically compensates for these changes, ensuring consistent curd properties.'
  }
];

const howTo = [
  {
    name: 'Add rennet and start the timer',
    text: 'Stir in your rennet thoroughly, then immediately start the Phase 1 stopwatch in the calculator.'
  },
  {
    name: 'Perform the bowl test',
    text: 'Place a light plastic bowl on the milk surface and test for resistance regularly.'
  },
  {
    name: 'Mark the flocculation point',
    text: 'The moment the bowl resists spinning or tapping, click the stop button to record the flocculation time.'
  },
  {
    name: 'Select your cheese type or multiplier',
    text: 'Choose a cheese style from the database or enter a custom multiplier. The app calculates the total time and initiates the countdown for cutting.'
  },
  {
    name: 'Cut the curd at the signal',
    text: 'When the timer hits zero, the curd has reached optimal tension. Cut the curd into cubes as specified in your recipe.'
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
  slug: 'cheese-flocculation-multiplier',
  title,
  description: 'Find the exact moment to cut the curd in artisan cheesemaking. Use the flocculation multiplier method to calculate coagulation time, control moisture, and improve cheese yield with our free calculator.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Cheese Flocculation Multiplier',
    subtitle: 'Find the perfect curd cutting window based on actual gelation behavior',
    flocculationLabel: 'Primary Flocculation Time (minutes:seconds)',
    multiplierLabel: 'Flocculation Multiplier',
    cheeseTypeLabel: 'Cheese Style Preset',
    totalCoagulationLabel: 'Total Coagulation Time',
    timeRemainingLabel: 'Time Remaining until Cut',
    flocculationTimeLabel: 'Flocculation Time',
    moistureLabel: 'Expected Curd Moisture Retention',
    customOption: 'Custom Multiplier',
    startTimer: 'Start Rennet Timer',
    markFlocculation: 'Mark Flocculation',
    resetTimer: 'Reset Timer',
    warningTitle: 'Rennet Quality Warning',
    warningText: 'The recorded flocculation time is exceptionally short. This may indicate an excessive rennet dose or incorrect temperature settings, which could cause a rubbery texture or bitter flavors.',
    phase1Title: 'Phase 1: Renneting & Flocculation',
    phase2Title: 'Phase 2: Coagulation Countdown',
    phaseComplete: 'Curd is ready to cut!',
    statusWaiting: 'Stirring rennet...',
    statusFlocculated: 'Flocculation detected',
    statusCoagulating: 'Coagulating...',
    statusReady: 'Ready to Cut',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'When to Cut the Curd: The Flocculation Multiplier Method for Perfect Cheese Every Batch',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'If you have ever asked yourself <strong>"when should I cut the curd?"</strong> or <strong>"how do I know the curd is ready?"</strong>, the answer lies in the flocculation multiplier method. Unlike industrial cheesemaking which relies on fixed timers, artisan cheesemakers measure the moment the milk first begins to gel (the flocculation point) and multiply that time by a style-specific factor. This captures all variables - milk acidity, calcium level, temperature, rennet strength - in a single measurement. Our <strong>cheese flocculation multiplier calculator</strong> does the math so you can cut at the perfect moment, every time.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '2.0x', label: 'Hard Cheeses', icon: 'mdi:cheese' },
        { value: '3.0x', label: 'Medium Hard Cheeses', icon: 'mdi:cheese' },
        { value: '5.0x', label: 'Soft Cheeses', icon: 'mdi:cheese' },
        { value: '10-15m', label: 'Typical Flocculation', icon: 'mdi:timer-outline' }
      ]
    },
    {
      type: 'title',
      text: 'Common Cheesemaking Problems Solved by the Flocculation Method',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Inconsistent curd firmness:</strong> Fixed timers cannot account for batch variations in milk. The flocculation method adapts to your actual milk chemistry.',
        '<strong>Low cheese yield:</strong> Cutting too early or too late causes fat and protein loss. The multiplier method targets the exact window for optimal retention.',
        '<strong>Wrong moisture content:</strong> Hard cheeses need dry curds; soft cheeses need moist curds. Different multipliers (2.0x to 6.0x) directly control syneresis.',
        '<strong>Variable rennet activity:</strong> Rennet strength changes over time and between brands. Flocculation timing captures the actual activity in your vat right now.'
      ]
    },
    {
      type: 'title',
      text: 'How to Perform the Bowl Test: Step by Step',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'The bowl test is the simplest way to detect flocculation without special equipment. After adding rennet and stirring thoroughly, place a small sterilized plastic bowl or bottle cap on the milk surface. Every 30 to 60 seconds, gently tap or spin it. While the milk is still liquid, the bowl moves freely. The moment it resists movement - that is your <strong>flocculation point</strong>. Record this time and enter it into the calculator above.'
    },
    {
      type: 'tip',
      title: 'Use a Bottle Cap for More Sensitivity',
      html: 'A lightweight plastic bottle cap is more sensitive than a bowl and gives a clearer stop point. Sterilize it in boiling water for 2 minutes before use, and keep it floating on the milk from the moment you add rennet.'
    },
    {
      type: 'tip',
      title: 'Keep Your Temperature Stable',
      html: 'Flocculation time is highly temperature dependent. A drop of just 2C can double your flocculation time. Keep the milk at a stable temperature (typically 30-35C depending on cheese style) throughout the coagulation phase.'
    },
    {
      type: 'tip',
      title: 'Watch for Very Fast Flocculation',
      html: 'If flocculation occurs in under 8 minutes (480 seconds), you may have added too much rennet or your milk temperature is too high. This can cause a rubbery texture and bitter flavors. The calculator will warn you if this happens.'
    },
    {
      type: 'title',
      text: 'Flocculation Multiplier Reference by Cheese Type',
      level: 2
    },
    {
      type: 'table',
      headers: ['Cheese Style', 'Multiplier', 'Expected Moisture', 'Cut Firmness', 'Aging Potential'],
      rows: [
        ['Parmesan, Grana', '2.0x', 'Very Low', 'Very Firm', '12+ months'],
        ['Mozzarella (fresh)', '2.0x', 'Very High', 'Soft / Stretchy', 'Fresh only'],
        ['Swiss, Alpine', '2.5x', 'Low', 'Firm', '6-12 months'],
        ['Cheddar, Gouda', '3.0x', 'Medium-Low', 'Firm / Springy', '3-12 months'],
        ['Blue Cheese', '3.5x - 4.0x', 'Medium', 'Tender', '2-6 months'],
        ['Camembert, Brie', '5.0x', 'High', 'Very Tender', '3-8 weeks'],
        ['Lactic / Fresh Chevre', '5.0x - 6.0x', 'Very High', 'Delicate', 'Fresh - 2 weeks']
      ]
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Low Multiplier 2.0x to 2.5x',
          icon: 'mdi:cheese',
          description: 'Used for hard, dry cheese varieties requiring low moisture retention.',
          highlight: false,
          points: ['Mozzarella & Parmesan: 2.0x', 'Alpine styles: 2.5x', 'Rapid whey drainage', 'Produces dense, age-worthy curds']
        },
        {
          title: 'Medium Multiplier 3.0x to 4.0x',
          icon: 'mdi:cheese',
          description: 'Standard range for Medium Hard cheeses balancing moisture and acidity.',
          highlight: true,
          points: ['Cheddar & Gouda: 3.0x', 'Blue cheeses: 3.5x to 4.0x', 'Balanced whey expulsion', 'Flexible curing potential']
        },
        {
          title: 'High Multiplier 5.0x to 6.0x',
          icon: 'mdi:cheese',
          description: 'Used for soft, creamy, high-moisture cheeses.',
          highlight: false,
          points: ['Camembert & Brie: 5.0x', 'Lactic & soft bloomy rinds', 'High moisture retention', 'Delicate, creamy paste development']
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Troubleshooting: 3 Signs Your Curd Is Not Setting Right',
      html: '<strong>Flocculation in under 6 minutes:</strong> Too much rennet or milk too hot. Reduce rennet by 25% next batch. <strong>Flocculation takes over 25 minutes:</strong> Rennet may be expired, milk too cold, or calcium content too low. Add calcium chloride. <strong>Curd is slimy or brittle at cut time:</strong> The multiplier may be too high or too low for your cheese style. Adjust by 0.5x increments.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Hard Cheeses (Parmesan, Alpine)',
      html: 'Use <strong>2.0x - 2.5x multiplier</strong>. Cut the curd sooner for maximum whey expulsion. These curds are cut when the gel is still relatively fragile, producing a dense, dry curd ideal for long aging. The calculator will show a shorter total coagulation time.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Medium Hard Cheeses (Cheddar, Gouda)',
      html: 'Use <strong>3.0x multiplier</strong>. The standard range for most artisan cheesemaking. Balances moisture retention with whey drainage. Curd is springy and clean breaking. Most cheese recipes fall into this category.'
    },
    {
      type: 'card',
      icon: 'mdi:cheese',
      title: 'Soft Cheeses (Camembert, Brie)',
      html: 'Use <strong>5.0x - 6.0x multiplier</strong>. Allow the gel to strengthen significantly before cutting. This locks moisture inside the curd, creating the creamy, spreadable texture characteristic of bloomy rind cheeses. Handle the curd gently to avoid losing the retained whey.'
    },
    {
      type: 'title',
      text: 'Artisan Cheesemaking Curd Glossary',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Flocculation Point', definition: 'The moment in the cheesemaking process where milk proteins begin to clump together and form a soft gel.' },
        { term: 'Rennet', definition: 'A complex of enzymes (primarily chymosin) used to coagulate milk, separating it into solids (curd) and liquid (whey).' },
        { term: 'Syneresis', definition: 'The extraction or expulsion of a liquid from a gel, such as whey draining from cheese curds.' },
        { term: 'Coagulation Time', definition: 'The total duration from rennet addition until the curd is ready to be cut.' }
      ]
    },
    {
      type: 'summary',
      title: 'Key Takeaways for Perfect Curd Cutting',
      items: [
        'Measure flocculation time precisely using the bowl test. Enter it into the calculator above.',
        'Select the multiplier that matches your cheese style: 2.0x for hard, 3.0x for Medium Hard, 5.0x for soft cheeses.',
        'Keep milk temperature stable during coagulation. Even a 2C change alters flocculation time significantly.',
        'If flocculation happens in under 8 minutes, reduce rennet next time. If over 25 minutes, check rennet freshness.',
        'The calculator handles the math so you can focus on technique and consistency.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
