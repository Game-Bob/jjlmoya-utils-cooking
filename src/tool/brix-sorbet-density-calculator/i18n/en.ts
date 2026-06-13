import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Sorbet Brix Calculator: Sugar to Fruit Ratio and Freezing Point Control for Perfect Scoopability';
const description = 'Dial in the exact sugar, fruit purée, and water balance for scoopable sorbet every time. Calculate Brix, PAC freezing point depression, and fix icy or soupy texture problems with precise measurements.';

const faq = [
  {
    question: 'What is Brix and why does it matter in sorbet?',
    answer: 'Brix (°Bx) measures the percentage of dissolved solids  -  primarily sugars  -  in a liquid solution. In sorbets, a Brix level between 25% and 30% (ideally 28%) is essential for the right texture. Below 25%, the sorbet freezes into a rock-hard icy block because there is not enough sugar to interfere with ice crystal formation. Above 30%, the freezing point drops so low that the sorbet stays soupy and never fully sets in a standard freezer.',
  },
  {
    question: 'How do I calculate the right amount of sugar for my sorbet recipe?',
    answer: 'Start by weighing your fruit purée and measuring its natural Brix with a refractometer (or selecting a preset value). Enter these into the calculator along with your desired batch size and target Brix (default 28%). The calculator determines how much sucrose and water you need to add to bring the total mix into the optimal 25-30% Brix range. It also accounts for the freezing point depression (PAC) so you can swap in dextrose if the sorbet would otherwise be too hard.',
  },
  {
    question: 'Why is my homemade sorbet always too hard or icy?',
    answer: 'An icy, rock-hard sorbet almost always means the total sugar concentration is too low (below 25% Brix). The water in the fruit freezes into large ice crystals instead of staying partially liquid. The fix: add more sucrose to raise the Brix, or replace some sucrose with dextrose  -  dextrose has nearly double the anti-freezing power (PAC 190 vs 100) and is 30% less sweet, so you can lower the freezing point without making the sorbet cloying.',
  },
  {
    question: 'What is the difference between using sucrose and dextrose in sorbet?',
    answer: 'Sucrose (table sugar) is the standard sweetener with a PAC of 100 and POD of 100. Dextrose (glucose powder) has a PAC of 190  -  nearly twice the freezing point depression  -  but only 70% of the sweetness (POD 70). This means dextrose softens sorbet far more effectively per gram without oversweetening. Use dextrose when your fruit is already naturally sweet (e.g., mango, banana) and you need more anti-freezing power without adding more sweetness.',
  },
  {
    question: 'How does fruit natural sugar affect the calculation?',
    answer: 'Different fruits have widely varying natural sugar levels: lemons and limes are around 2% Brix, strawberries about 8%, mangoes and grapes 14-18%, and bananas up to 22%. The calculator factors in your fruit\'s natural Brix so you do not accidentally overshoot or undershoot the total sugar concentration. This is why using a refractometer to measure your actual fruit is recommended  -  seasonal variation can shift Brix by 3-4 points.',
  },
];

const howTo = [
  {
    name: 'Weigh your fruit puree',
    text: 'Measure the exact weight of your fruit puree or juice in grams.',
  },
  {
    name: 'Estimate or measure fruit Brix',
    text: 'Use a refractometer to find the exact Brix of your fruit, or select a typical value from our database (e.g. Mango: 14%, Strawberry: 8%).',
  },
  {
    name: 'Enter weights in the calculator',
    text: 'Input your fruit weight, fruit Brix, and target Brix level (default is 28%).',
  },
  {
    name: 'Review recommended syrup additions',
    text: 'The calculator will immediately show the recommended sugar and water to add to reach the 28% Brix target.',
  },
  {
    name: 'Adjust sugar types if needed',
    text: 'If the mixture lacks sufficient freezing point depression, introduce dextrose in place of sucrose.',
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
  slug: 'brix-sorbet-density-calculator',
  title: 'Brix Sorbet Density Calculator',
  description: 'Dial in the exact sugar, fruit purée, and water balance for scoopable sorbet every time. Fix icy or soupy texture with precise Brix and PAC calculations.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    fruitWeightLabel: 'Fruit Puree Weight',
    fruitBrixLabel: 'Fruit Brix',
    sugarWeightLabel: 'Sucrose (Sugar) Weight',
    dextroseWeightLabel: 'Dextrose Weight',
    waterWeightLabel: 'Added Water Weight',
    targetBrixLabel: 'Target Brix',
    gramsUnit: 'g',
    ouncesUnit: 'oz',
    brixUnit: '% Bx',
    totalBrixLabel: 'Total Mix Brix',
    totalWeightLabel: 'Total Batch Weight',
    totalPACLabel: 'Freezing Point Depression (PAC)',
    statusLabel: 'Sorbet Texture Profile',
    statusSoft: 'Too Soft / Soupy',
    statusOptimal: 'Optimal Scoopability',
    statusHard: 'Too Hard / Icy',
    recommendedTitle: 'Syrup Recommendation (50% Fruit)',
    recommendedSugarLabel: 'Required Sucrose',
    recommendedWaterLabel: 'Required Water',
    fruitPresetLabel: 'Fruit Preset',
    presetCustom: 'Custom Fruit',
    presetLemon: 'Lemon / Lime (2% Bx)',
    presetStrawberry: 'Strawberry / Raspberry (8% Bx)',
    presetOrange: 'Orange / Peach (10% Bx)',
    presetMango: 'Mango / Grape / Cherry (14% Bx)',
    presetBanana: 'Banana (21% Bx)',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'The Science of Sorbet Balancing: Brix, PAC, and Solids',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Making a professional sorbet is an exercise in food science. Unlike ice cream, which relies on milk fats and proteins to create structure and softness, sorbet relies entirely on dissolved sugars and stabilizers. The concentration of these dissolved sugars is measured in degrees Brix (°Bx). A perfect sorbet mix requires a sugar concentration of 25% to 30% Brix. If the sugar content is too low, the water will freeze into large, needle-like ice crystals, producing a gritty, rock-hard block. If it is too high, the freezing point is depressed too far, and the sorbet remains a semi-liquid syrup in typical home or commercial freezers.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '28%',
          label: 'Ideal Target Brix',
          icon: 'mdi:target',
        },
        {
          value: '25-30%',
          label: 'Safe Brix Range',
          icon: 'mdi:gauge',
        },
        {
          value: '≈50%',
          label: 'Optimal Fruit Ratio',
          icon: 'mdi:fruit-grapes',
        },
        {
          value: 'PAC 100/190',
          label: 'Sucrose / Dextrose',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Understanding PAC: The Freezing Point Depression Factor',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC (Potere Anticongelante, or Anti-Freezing Power) is a metric used by pastry chefs to quantify how much an ingredient lowers the freezing point of water. Sucrose, or standard table sugar, is the baseline reference with a PAC value of 100. However, sucrose is highly sweet. If you need to add more solids or increase anti-freezing capacity without making the sorbet sickly sweet, you can substitute a portion of sucrose with dextrose. Dextrose has a PAC of 190, making it nearly twice as effective as sucrose at preventing ice crystal formation, while being only 70% as sweet.',
    },
    {
      type: 'title',
      text: 'Sucrose vs Dextrose: Choosing the Right Sugar for Sorbet',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Sucrose (Table Sugar)',
          icon: 'mdi:cube-outline',
          description: 'The standard sweetener and baseline for all PAC and POD calculations. Provides clean sweetness and body.',
          points: [
            'PAC value: 100 (baseline)',
            'POD value: 100 (full sweetness)',
            'Best for: primary sweetener role',
            'Adds body and standard texture',
          ],
        },
        {
          title: 'Dextrose (Glucose Powder)',
          icon: 'mdi:grain',
          description: 'A monosaccharide with nearly double the freezing point depression power and significantly less sweetness.',
          highlight: true,
          points: [
            'PAC value: 190 (nearly 2� -  sucrose)',
            'POD value: 70 (30% less sweet)',
            'Best for: softening hard sorbets',
            'Ideal when fruit is already very sweet',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Typical Fruit Brix Values Reference Table',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Fruit Type', 'Average Brix Value', 'Water Content', 'Acidity Level'],
      rows: [
        ['Lemon / Lime', '2% - 4% Bx', 'Very High', 'Extremely High'],
        ['Strawberry / Raspberry', '7% - 9% Bx', 'High', 'Moderate'],
        ['Orange / Peach', '9% - 11% Bx', 'Medium-High', 'Low-Moderate'],
        ['Apple / Pear', '11% - 13% Bx', 'Medium', 'Low'],
        ['Mango / Grape / Cherry', '14% - 18% Bx', 'Medium-Low', 'Very Low'],
        ['Banana', '20% - 22% Bx', 'Low', 'Negligible'],
      ],
    },
    {
      type: 'title',
      text: 'How to Calibrate Your Sorbet Mix',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To balance a sorbet, first measure the weight and sugar concentration of your fruit purée. Using a refractometer is highly recommended for accuracy, as fruit sweetness varies by season and ripeness. If you do not have a refractometer, you can estimate using the table above. Once you have these values, input them into our calculator to determine the exact quantity of simple syrup (water and sugar) needed to bring the overall mix to the target 28% Brix. For optimal texture, aim for a fruit proportion of around 50% of the total batch weight.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Why Is My Sorbet Icy or Too Hard?',
      html: 'A sorbet that freezes rock-hard almost always has <strong>too little sugar</strong> (Brix below 25%). The water in the fruit purée crystallizes into large, jagged ice shards. Fix this by adding more sucrose to raise the total Brix, or swap some sucrose for dextrose to increase PAC without oversweetening. Also check that your fruit proportion is not too high  -  exceeding 60% fruit leaves insufficient room for sugar solids.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Why Is My Sorbet Soupy or Not Freezing?',
      html: 'A sorbet that stays soft or soup-like has <strong>too much sugar</strong> (Brix above 30%). The freezing point has been depressed so far that your freezer cannot solidify the mix. Reduce the total sugar input, or if the fruit is naturally very sweet (e.g., banana or mango), use proportionally less added sucrose. Check your target temperature: home freezers run at −18°C; a PAC that is appropriate for −12°C service will be too high for standard freezers.',
    },
    {
      type: 'tip',
      title: 'Measure Brix Accurately with a Refractometer',
      html: 'A digital or optical refractometer is the single best investment for consistent sorbets. Fruit ripeness varies dramatically by season, variety, and origin  -  a strawberry in June can measure 6°Bx while the same variety in August hits 10°Bx. Squeeze a drop of purée onto the prism, read the value, and enter it into the calculator. Guessing based on tables alone will produce inconsistent results.',
    },
    {
      type: 'title',
      text: 'Step by Step: How to Use This Calculator',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Weigh your fruit purée</strong>  -  Use a digital scale to measure the exact weight of your strained fruit purée or juice in grams.',
        '<strong>Measure or estimate fruit Brix</strong>  -  Use a refractometer for precision, or select a preset from the dropdown (Lemon 2%, Strawberry 8%, Mango 14%, etc.).',
        '<strong>Set your target Brix</strong>  -  The default is 28%, the ideal sweet spot. Adjust between 25% and 30% depending on your preference.',
        '<strong>Review the syrup recommendation</strong>  -  The calculator instantly shows how much sucrose and water to add to reach your target.',
        '<strong>Check the texture indicator</strong>  -  The PAC meter tells you whether the sorbet will be too hard, optimally scoopable, or too soft at your freezer temperature.',
        '<strong>Adjust with dextrose if needed</strong>  -  If the sorbet is predicted hard but already sweet enough, replace some sucrose with dextrose to boost PAC without adding sweetness.',
      ],
    },
    {
      type: 'title',
      text: 'Key Sorbet Making Terms',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Brix (°Bx)',
          definition: 'The percentage of dissolved solids (primarily sugars) in a liquid solution. In sorbets, 25-30°Bx is the target range for ideal texture and scoopability.',
        },
        {
          term: 'PAC (Potere Anticongelante)',
          definition: 'Anti-freezing power  -  a measure of how much an ingredient lowers the freezing point of water. Sucrose has a baseline PAC of 100; dextrose is 190.',
        },
        {
          term: 'POD (Potere Dolcificante)',
          definition: 'Sweetening power relative to sucrose (baseline 100). Dextrose has a POD of 70, meaning it is 30% less sweet gram-for-gram than table sugar.',
        },
        {
          term: 'Dextrose',
          definition: 'A monosaccharide (glucose powder) used in sorbet formulation to lower the freezing point without adding excessive sweetness. PAC 190, POD 70.',
        },
        {
          term: 'Refractometer',
          definition: 'An optical or digital instrument that measures the Brix value of a liquid by reading how light bends (refracts) through the sample. Essential for sorbet consistency.',
        },
        {
          term: 'Simple Syrup',
          definition: 'A 50/50 by-weight mixture of sucrose and water, heated until dissolved. The standard vehicle for adding sugar to sorbet bases.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
