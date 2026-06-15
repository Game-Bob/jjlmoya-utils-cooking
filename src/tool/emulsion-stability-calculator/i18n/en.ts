import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Emulsion Stability and Oil Limit Calculator";
const description = "Find out exactly how much oil your mayonnaise, aioli, or vinaigrette can handle before it breaks. Prevent split sauces with our free emulsion stability calculator.";
const faq = [
  {
    question: "How much oil can I add to my mayonnaise before it breaks?",
    answer: "It depends on the emulsifier. Egg yolk supports up to ~78% oil (about 3.5x the water volume), mustard up to 70%, soy lecithin up to 82%, and polysorbate up to 85%. Use the calculator above to get the exact maximum for your specific amounts."
  },
  {
    question: "Why did my emulsion break or separate?",
    answer: "An emulsion breaks when the oil volume fraction exceeds the emulsifier's maximum packing limit. At that point, the oil droplets are squeezed so tightly together that they merge and the mixture separates. This happens instantly - it's not a gradual process."
  },
  {
    question: "How do I fix a broken mayonnaise or aioli?",
    answer: "Start with a fresh egg yolk or a tablespoon of warm water in a clean bowl. Slowly drizzle the broken mixture into it while whisking constantly, just as if you were adding raw oil. The calculator above tells you exactly how much water or yolk you need."
  },
  {
    question: "Does adding oil too fast cause an emulsion to break?",
    answer: "Adding oil too quickly can temporarily overload the emulsifier, but the real cause of breaking is always an incorrect phase ratio. If your oil fraction stays below the emulsifier's limit, the emulsion stays stable regardless of speed. If it exceeds the limit, breaking is inevitable."
  },
  {
    question: "What is the difference between egg yolk and mustard as emulsifiers?",
    answer: "Egg yolk (78% max oil) contains lecithin and lipoproteins that form a robust film around droplets. Mustard (70% max oil) relies on mucilage and proteins - it's weaker but adds flavor. Soy lecithin (82%) and polysorbate (85%) are highly efficient industrial-grade emulsifiers."
  }
];

const howTo = [
  {
    name: "Select your emulsifier",
    text: "Pick the emulsifier in your recipe - egg yolk for classic mayo, mustard for vinaigrettes, or soy lecithin/polysorbate for modernist cuisine. Each one sets a different maximum oil limit."
  },
  {
    name: "Enter your water phase volume",
    text: "Input the total milliliters of your aqueous ingredients: water, vinegar, lemon juice, wine, or any water-based liquid. The calculator automatically adds the water content of your chosen emulsifier."
  },
  {
    name: "Set your oil volume",
    text: "Enter the amount of oil you plan to use. Use the slider or type the value. The calculator instantly shows whether this amount will produce a stable emulsion or cause it to break."
  },
  {
    name: "Read the stability result and fix if needed",
    text: "Check the oil volume fraction gauge. If stable, you're good to go. If broken, the rescue panel tells you exactly how much water (in ml) or how many additional egg yolks you need to add to restore the balance."
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
  slug: 'emulsion-stability-calculator',
  title: 'Emulsion Stability and Oil Limit Calculator',
  description: 'Find out exactly how much oil your mayonnaise, aioli, or vinaigrette can handle before it breaks. Prevent split sauces with our free emulsion stability calculator.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Emulsion Stability Analyzer',
    subtitle: 'How much oil can your sauce handle before breaking?',
    waterLabel: 'Water Phase (ml)',
    oilLabel: 'Oil Volume (ml)',
    emulsifierLabel: 'Emulsifier Type',
    yolkOption: 'Egg Yolk',
    mustardOption: 'Mustard',
    soyLecithinOption: 'Soy Lecithin',
    polysorbateOption: 'Polysorbate',
    stableStatus: 'Stable Emulsion',
    brokenStatus: 'Broken Emulsion',
    ratioLabel: 'Oil Volume Fraction',
    maxLimitLabel: 'Maximum Oil Limit',
    fixTitle: 'Rescue Strategy',
    waterFixText: 'Add water to restore phase balance:',
    yolkFixText: 'Alternatively, use additional egg yolk:',
    idealRangeText: 'Ideal range is under the critical packing limit of 74% to 80%.'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Why Does My Mayonnaise Break? Find the Exact Oil Limit for Any Emulsifier',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'If you have ever asked yourself <strong>"why did my mayonnaise split?"</strong> or <strong>"how much oil can I add before my aioli breaks?"</strong>, the answer lies in a single number: the oil volume fraction. Every emulsion - whether a classic French mayonnaise, a garlicky aioli, a creamy vinaigrette, or a modernist foam - can only hold a finite amount of oil before it collapses. Our <strong>emulsion stability calculator</strong> tells you exactly where that breaking point is, based on your specific emulsifier, water phase, and oil volume. No more guessing, no more wasted ingredients.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '78%',
          label: 'Egg Yolk Max Oil',
          icon: 'mdi:egg-outline'
        },
        {
          value: '85%',
          label: 'Polysorbate Limit',
          icon: 'mdi:flask-outline'
        },
        {
          value: '74%',
          label: 'Theoretical Packing',
          icon: 'mdi:sphere'
        },
        {
          value: '15 ml',
          label: 'Yolk Water Content',
          icon: 'mdi:water'
        }
      ]
    },
    {
      type: 'list',
      items: [
        '<strong>You are adding oil too fast</strong> - Speed is rarely the real cause. If your oil fraction stays below the emulsifier limit, the emulsion will hold regardless of pouring speed.',
        '<strong>Your ingredients are too cold</strong> - Cold eggs or cold oil increase viscosity and make droplet formation harder. Always bring ingredients to room temperature.',
        '<strong>You exceeded the oil limit for your emulsifier</strong> - Each emulsifier has a maximum packing fraction. Egg yolk caps at 78% oil, mustard at 70%, soy lecithin at 82%, and polysorbate at 85%.',
        '<strong>Your water phase is too small</strong> - Without enough water to surround the oil droplets, they have nowhere to go but into each other. The calculator below tells you exactly how much water you need.'
      ]
    },
    {
      type: 'title',
      text: 'Which Emulsifier Should You Use? A Practical Comparison',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Choosing the right emulsifier depends on your recipe, flavor profile, and desired oil capacity. Here is how the four most common culinary emulsifiers stack up against each other in real kitchen conditions.'
    },
    {
      type: 'proscons',
      title: 'Egg Yolk',
      items: [
        { pro: 'Highest flavor compatibility for classic sauces', con: 'Adds cholesterol and egg flavor' },
        { pro: 'Contains both lecithin and lipoproteins for robust emulsions', con: 'Requires careful temperature control' },
        { pro: 'Adds natural color and richness', con: 'Not suitable for vegan preparations' },
        { pro: 'Works with up to 78% oil fraction', con: 'Limited to about 15 ml water contribution per yolk' }
      ]
    },
    {
      type: 'proscons',
      title: 'Mustard',
      items: [
        { pro: 'Adds tangy flavor and complexity to dressings', con: 'Lower max oil capacity (70%)' },
        { pro: 'Widely available and easy to use', con: 'Weaker emulsifying power than egg yolk' },
        { pro: 'Works well at room temperature', con: 'Flavor may conflict with delicate sauces' },
        { pro: 'Ideal for quick vinaigrettes', con: 'Not suitable for neutral-tasting emulsions' }
      ]
    },
    {
      type: 'proscons',
      title: 'Soy Lecithin',
      items: [
        { pro: 'High oil tolerance (82%) for stable sauces', con: 'Requires precise weighing' },
        { pro: 'Neutral taste does not alter recipes', con: 'Less forgiving than egg yolk' },
        { pro: 'Plant-based and vegan friendly', con: 'Not a pantry staple for most home cooks' },
        { pro: 'Works with small water volumes', con: 'Can create a slightly artificial texture' }
      ]
    },
    {
      type: 'proscons',
      title: 'Polysorbate',
      items: [
        { pro: 'Highest oil capacity of any emulsifier (85%)', con: 'Synthetic additive, not natural' },
        { pro: 'Creates ultra-stable foams and airs', con: 'Hard to source for home kitchens' },
        { pro: 'Works with minimal water phase', con: 'Requires scale for accurate dosing' },
        { pro: 'Ideal for modernist and experimental cuisine', con: 'Overpowering if used in excess' }
      ]
    },
    {
      type: 'comparative',
      columns: 4,
      items: [
        {
          title: 'Egg Yolk',
          icon: 'mdi:egg-outline',
          description: 'The classic mayonnaise emulsifier. Contains lecithin and lipoproteins.',
          highlight: true,
          points: [
            'Max oil: 78%',
            '~15 ml water per yolk',
            'Adds richness and color',
            'Best for mayo and aioli'
          ]
        },
        {
          title: 'Mustard',
          icon: 'mdi:shaker-outline',
          description: 'Relies on mucilage and seed proteins. Adds tangy flavor.',
          points: [
            'Max oil: 70%',
            '~10 ml water content',
            'Weaker emulsifying power',
            'Ideal for vinaigrettes'
          ]
        },
        {
          title: 'Soy Lecithin',
          icon: 'mdi:leaf',
          description: 'Highly concentrated plant-based surfactant.',
          points: [
            'Max oil: 82%',
            '~5 ml water content',
            'Neutral taste profile',
            'Modernist cuisine staple'
          ]
        },
        {
          title: 'Polysorbate',
          icon: 'mdi:flask-outline',
          description: 'Synthetic emulsifier with maximum surfactant capacity.',
          points: [
            'Max oil: 85%',
            '~2 ml water content',
            'Highest oil tolerance',
            'Used in foams and airs'
          ]
        }
      ]
    },
    {
      type: 'table',
      headers: ['Emulsifier', 'Max Oil %', 'Oil per 100 ml Water', 'Best Use Case'],
      rows: [
        ['Egg Yolk', '78%', '~355 ml', 'Mayonnaise, aioli, hollandaise'],
        ['Mustard', '70%', '~233 ml', 'Vinaigrettes, light dressings'],
        ['Soy Lecithin', '82%', '~456 ml', 'Modernist sauces, foams'],
        ['Polysorbate', '85%', '~567 ml', 'Stable foams, experimental cuisine']
      ]
    },
    {
      type: 'title',
      text: 'The Science: Why Emulsions Break and How Kepler\'s Conjecture Applies to Your Kitchen',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'A culinary emulsion works by dispersing tiny oil droplets throughout a continuous water phase. <strong>Emulsifiers</strong> - such as the lecithin in egg yolk, the mucilage in mustard, or synthetic surfactants like polysorbate - coat each droplet and prevent it from merging with its neighbors. The science behind this is pure geometry: oil droplets behave like tiny spheres packed together in a confined space.'
    },
    {
      type: 'paragraph',
      html: 'The maximum volume of spheres you can fit into a given space - known as <strong>Kepler\'s conjecture</strong> - is about 74%. In real kitchen systems, powerful emulsifiers stretch this limit to 80-85%, but beyond that point, the droplets are squeezed so tightly they merge, and the emulsion collapses instantly. This is not a gradual process: it happens in a split second, turning a silky sauce into a pool of grease.'
    },
    {
      type: 'card',
      columns: 2,
      items: [
        {
          icon: 'mdi:egg-outline',
          title: 'Classic Mayonnaise & Aioli',
          html: 'Use <strong>egg yolk</strong> for up to 78% oil. Start with one yolk per cup of oil. Add a teaspoon of water or lemon juice before pouring oil for a wider safety margin.'
        },
        {
          icon: 'mdi:shaker-outline',
          title: 'Vinaigrettes & Light Dressings',
          html: 'Use <strong>mustard</strong> for up to 70% oil. The mucilage in mustard provides enough emulsification for a temporary vinaigrette. Best when consumed fresh.'
        },
        {
          icon: 'mdi:leaf',
          title: 'Modernist Sauces & Stable Foams',
          html: 'Use <strong>soy lecithin</strong> for up to 82% oil. Ideal for neutral-tasting emulsions where you want the flavor of the oil and acid to shine through without interference.'
        },
        {
          icon: 'mdi:flask-outline',
          title: 'Experimental Foams & Airs',
          html: 'Use <strong>polysorbate</strong> for up to 85% oil. The go-to choice for modernist hydrocolloid techniques where maximum oil loading and foam stability are required.'
        }
      ]
    },
    {
      type: 'title',
      text: 'How to Rescue a Broken Emulsion Step by Step',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'If your mayonnaise or sauce has already split, <strong>do not throw it away</strong>. The fix is straightforward - but only if you understand the phase ratio. Blending harder won\'t help; you need to add more of the continuous (water) phase. Our calculator tells you exactly how much water or how many additional egg yolks you need to restore balance.'
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: '3 Signs Your Emulsion Is About to Break',
      html: 'Watch for <strong>thickening followed by sudden thinning</strong> as the first warning. Then look for a <strong>glossy surface turning grainy</strong> or <strong>visible oil pooling at the edges</strong> of the bowl. If you see any of these signs, stop adding oil immediately and whisk in a teaspoon of cold water before continuing.'
    },
    {
      type: 'title',
      text: 'Practical Tips for Perfect Emulsions Every Time',
      level: 3
    },
    {
      type: 'message',
      html: '<strong>The golden rule:</strong> The ratio of oil to water matters more than technique, temperature, or speed. Use our calculator to find your exact oil limit before you start whisking.'
    },
    {
      type: 'tip',
      title: 'Temperature Matters',
      html: 'All ingredients should be at <strong>room temperature</strong>. Cold eggs or cold oil dramatically increase the risk of breaking. Take ingredients out of the fridge 30 minutes before starting.'
    },
    {
      type: 'tip',
      title: 'The Water Safety Net',
      html: 'If your recipe doesn\'t include enough acid (vinegar, lemon juice), add <strong>one teaspoon of cold water per egg yolk</strong> before you start adding oil. This extra water creates a wider safety margin and makes your emulsion more forgiving.'
    },
    {
      type: 'tip',
      title: 'Fix a Broken Batch',
      html: 'Put a fresh egg yolk in a clean bowl. Whisk it with a teaspoon of water. Then, <strong>drizzle the broken mixture in as slowly as possible</strong>, exactly as if it were raw oil. Once it re-emulsifies, you can add the rest faster.'
    },
    {
      type: 'title',
      text: 'Culinary Emulsion Glossary',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Continuous Phase',
          definition: 'The liquid that surrounds the droplets - usually water, vinegar, or citrus juice in oil-in-water emulsions like mayonnaise.'
        },
        {
          term: 'Dispersed Phase',
          definition: 'The liquid broken into tiny droplets - oil in most culinary emulsions. The more you add, the closer the droplets pack together.'
        },
        {
          term: 'Volume Fraction',
          definition: 'The ratio of oil volume to total volume. At about 74-85% (depending on emulsifier), the emulsion reaches its geometric breaking point.'
        },
        {
          term: 'Coalescence',
          definition: 'When two or more oil droplets merge into a larger one. This is the microscopic process that triggers a visible emulsion break.'
        },
        {
          term: 'Phase Inversion',
          definition: 'The point where an oil-in-water emulsion flips to water-in-oil - as happens when making butter from cream. This is the ultimate failure mode.'
        }
      ]
    },
    {
      type: 'summary',
      title: 'Key Takeaways for Stable Emulsions',
      items: [
        'Each emulsifier has a maximum oil fraction: egg yolk 78%, mustard 70%, soy lecithin 82%, polysorbate 85%.',
        'The breaking point is determined by geometry (Kepler\'s conjecture at 74%), not by mixing speed.',
        'Always start with room temperature ingredients and add a small amount of water as a safety buffer.',
        'A broken emulsion can be rescued by adding fresh emulsifier and more water phase, not by blending harder.',
        'Use our emulsion stability calculator above to get the exact oil limit for your specific ingredients.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
