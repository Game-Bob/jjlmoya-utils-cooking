import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Pectin and Jam Setting Calculator for Perfect Gel Every Time';
const description = 'Calculate exactly how much pectin, citric acid, and sugar your fruit needs to achieve the perfect jam set. Avoid runny or rubbery preserves with precision chemistry.';

const faq = [
  {
    question: 'Why does pectin make jam gel?',
    answer: 'Pectin is a natural polysaccharide found in fruit cell walls. When heated with sugar and acid (pH 2.8-3.5), pectin molecules form a three-dimensional gel network that traps water and sugar, creating the spreadable texture of jam.',
  },
  {
    question: 'What is the difference between HM and LM pectin?',
    answer: 'High Methoxyl (HM) pectin requires at least 60% sugar and a pH below 3.5 to gel - ideal for traditional jams. Low Methoxyl (LM) pectin gels via calcium ions instead of sugar, allowing low-sugar or sugar-free preserves.',
  },
  {
    question: 'Why does my jam sometimes turn out runny?',
    answer: 'Runny jam typically results from insufficient pectin (the fruit naturally lacks it), insufficient acid (pH too high for gelation), or not enough sugar (for HM pectin). Over-dilution with water or under-cooking can also prevent setting.',
  },
  {
    question: 'Can I use lemon juice instead of citric acid powder?',
    answer: 'Yes. This calculator converts citric acid into lemon juice equivalents. Approximately 25 ml of lemon juice provides the same acidity as 1 g of citric acid. Lemon juice also adds fresh flavor to jams.',
  },
  {
    question: 'Which fruits are naturally high in pectin?',
    answer: 'Apples, quince, blackberries, cranberries, and gooseberries are naturally rich in pectin and often require no added pectin. Underripe fruit also contains more pectin than fully ripe fruit.',
  },
];

const howTo = [
  {
    name: 'Select your fruit',
    text: 'Choose the fruit you are making jam with. Each fruit has different natural pectin and acidity levels that determine what additives are needed.',
  },
  {
    name: 'Weigh your prepared fruit',
    text: 'Enter the weight of your cleaned, chopped fruit in grams. Accurate weighing is essential for precision jam-making.',
  },
  {
    name: 'Choose your pectin type',
    text: 'Select Classic (HM) for traditional high-sugar jam, or Low Sugar (LM) if you want a healthier, sugar-reduced preserve activated by calcium.',
  },
  {
    name: 'Review your perfect recipe',
    text: 'The calculator outputs exact grams of pectin powder, citric acid (or lemon juice), and sugar needed. Add these during cooking for a guaranteed set.',
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
  slug: 'pectin-jam-setting-calculator',
  title: 'Pectin & Jam Setting Calculator',
  description: 'Calculate exactly how much pectin, citric acid, and sugar your fruit needs to achieve the perfect jam set - no more runny or rubbery preserves.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Pectin & Jam Setting Calculator',
    subtitle: 'Precision gel chemistry for perfect preserves',
    fruitLabel: 'Choose Your Fruit',
    allFruits: 'All',
    highPectin: 'High Pectin',
    mediumPectin: 'Medium Pectin',
    lowPectin: 'Low Pectin',
    weightLabel: 'Fruit Weight',
    weightPlaceholder: 'e.g. 1000',
    weightUnitMetric: 'g',
    weightUnitImperial: 'oz',
    pectinTypeLabel: 'Pectin Type',
    pectinHM: 'Classic (HM)',
    pectinLM: 'Low Sugar (LM)',
    sugarModeLabel: 'Sugar Mode',
    sugarModeAuto: 'Auto',
    sugarModeManual: 'Manual',
    sugarLabel: 'Sugar Weight',
    sugarPlaceholder: 'e.g. 650',
    recipeTitle: 'Recipe',
    pectinNeeded: 'Pectin',
    citricAcidNeeded: 'Citric Acid',
    lemonJuiceNeeded: 'Lemon Juice',
    sugarNeeded: 'Sugar',
    totalYield: 'Total Yield',
    sugarPercent: 'Sugar',
    sugarLow: 'Low',
    sugarIdeal: 'Ideal',
    sugarHigh: 'High',
    sugarOfFruit: 'of fruit weight',
    sugarOfTotal: 'of total',
    statusPerfect: 'Perfect Gel',
    statusPerfectDesc: 'Your ratios are balanced. The jam will set beautifully with a silky, spreadable texture and brilliant shine.',
    statusSlightlyThin: 'Slightly Thin',
    statusSlightlyThinDesc: 'The jam may set softly. Consider adding more pectin or reducing water content for a firmer gel.',
    statusTooThin: 'Too Thin - Risk of Runny Jam',
    statusTooThinDesc: 'Without adjustment, this jam will likely remain liquid. Increase sugar (for HM) or add more pectin.',
    statusTooStiff: 'Too Stiff',
    statusTooStiffDesc: 'The gel may become rubbery. Reduce pectin by half or increase fruit weight slightly.',
    dropTestTitle: 'Cold Plate Test',
    dropTestHow: 'Drop on a chilled plate',
    dropStatusLabel: 'Result',
    dropTestPerfect: 'Will set. The drop wrinkles and holds',
    dropTestThin: 'Runny. It slides down the plate',
    dropTestStiff: 'Too stiff. Barely moves',
    dropPlateLabel: 'plate',
    dropDropLabel: 'drop',
    sugarAutoHint: 'auto-calculated',
    sugarManualHint: 'enter amount',
    unitLabel: 'Measurement System',
    metricLabel: 'Metric (g)',
    imperialLabel: 'Imperial (oz)',
    disclaimer: 'Weigh all ingredients with a digital kitchen scale for best results. Volumetric measurements are unreliable for jam-making.',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'The Complete Science of Jam Setting: Pectin, Acid, and Sugar Balance',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Jam making is a precise intersection of chemistry and cooking. At its core, the transformation of fruit pulp into a firm, spreadable gel depends on the correct balance of three molecules: <strong>pectin</strong> (the gelling agent), <strong>acid</strong> (the catalyst that activates pectin), and <strong>sugar</strong> (the dehydrating agent that draws water away from pectin chains). Without the right ratios, you end up with either fruit soup or a rubbery block.',
    },
    {
      type: 'title',
      text: 'How Pectin Forms a Gel Network',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pectin is a complex polysaccharide composed primarily of galacturonic acid units, found in the middle lamella of plant cell walls. In its natural state, pectin molecules are negatively charged and repel each other, remaining dissolved in the fruit\'s water. To form a gel, three conditions must be met simultaneously: (1) enough sugar must be present to compete for water molecules, dehydrating the pectin strands; (2) the pH must drop below 3.5, neutralizing the negative charges via protonation of carboxyl groups; and (3) the temperature must exceed 104-105°C to fully dissolve and activate the pectin. When these conditions align, pectin strands form junction zones - regions where chains associate via hydrogen bonding and hydrophobic interactions - creating a continuous three-dimensional sponge-like network that traps the fruit juice and sugar syrup.',
    },
    {
      type: 'title',
      text: 'High Methoxyl (HM) vs. Low Methoxyl (LM) Pectin',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pectin is classified by its degree of esterification (DE), which is the percentage of carboxyl groups esterified with methanol. <strong>High Methoxyl (HM) pectin</strong> (DE > 50%) requires a minimum of 55-65% soluble solids (sugar) and a pH between 2.8 and 3.5 to form a gel. This is the classic pectin used in traditional jam recipes. Without enough sugar, HM pectin forms a weak or non-existent gel. <strong>Low Methoxyl (LM) pectin</strong> (DE < 50%) gels through a different mechanism: it cross-links via divalent calcium ions (Ca²⁺) that bridge between free carboxyl groups. LM pectin can gel with little to no added sugar, making it ideal for low-calorie, diabetic-friendly, or naturally sweetened preserves. Some LM pectins also tolerate a wider pH range up to 5.5, useful for low-acid fruits like figs and pears.',
    },
    {
      type: 'title',
      text: 'Natural Pectin Content Across Fruit Varieties',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Not all fruits are created equal when it comes to pectin. Fruits fall into three categories based on their natural pectin and acid levels. Understanding where your fruit sits on this spectrum determines whether you need to supplement with powdered pectin or citric acid.',
    },
    {
      type: 'table',
      headers: ['Pectin Level', 'Acidity Level', 'Example Fruits', 'Added Pectin Needed'],
      rows: [
        ['High', 'High', 'Apple, Cranberry, Gooseberry', '0% (none)'],
        ['High', 'Medium/Low', 'Quince, Blackberry', '0% (none)'],
        ['Medium', 'High', 'Raspberry, Loganberry', '0.3% of fruit weight'],
        ['Medium', 'Medium', 'Plum, Apricot', '0.3% of fruit weight'],
        ['Medium', 'Low', 'Blueberry', '0.3% of fruit weight'],
        ['Low', 'High', 'Cherry, Grape', '0.6% of fruit weight'],
        ['Low', 'Medium', 'Peach, Mango', '0.6% of fruit weight'],
        ['Low', 'Low', 'Strawberry, Pear, Fig', '0.6% of fruit weight'],
      ],
    },
    {
      type: 'title',
      text: 'The Critical Role of pH in Jam Gelation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The pH of the jam mixture is arguably the most overlooked variable in home preserving. At a pH above 3.8, the carboxyl groups on pectin remain ionized (negatively charged), creating electrostatic repulsion that prevents gel formation regardless of how much sugar or pectin you add. As the pH drops below 3.5 through the addition of citric acid or lemon juice, these groups become protonated, allowing hydrogen bond formation between adjacent pectin chains. The optimal gelation zone is between pH 2.8 and 3.2. Below pH 2.8, the gel becomes brittle and may exhibit syneresis (weeping liquid). Above pH 3.5, syneresis also occurs, and the gel is too weak. This is why low-acid fruits like figs and strawberries almost always need added citric acid - their natural pH is too high to activate pectin properly.',
    },
    {
      type: 'title',
      text: 'Sugar Concentration and Its Effect on Gel Strength',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sugar serves two functions in HM pectin jam. First, it is highly hygroscopic - it competes fiercely with pectin for water molecules, drawing hydration shells away from the pectin strands and forcing them to interact with each other instead. Second, it raises the boiling point of the mixture, allowing the jam to reach the 104-105°C setting point. At 65% sugar concentration, pectin chains are sufficiently dehydrated to form a strong gel. Below 60%, the gel weakens linearly. Above 68%, the jam may crystallize upon cooling as sugar exceeds its solubility limit. For LM pectin jams, sugar plays only a flavor role since gelation depends on calcium bridging. Sugar content can be as low as 5-10% in LM pectin preserves sweetened with non-nutritive sweeteners.',
    },
    {
      type: 'title',
      text: 'Citric Acid vs. Lemon Juice: Conversion and Best Practices',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Citric acid (C₆H₈O₇) is the primary acid used in commercial jam-making because it is standardized, flavorless, and precise. Lemon juice contains approximately 5% citric acid by weight, plus malic acid and ascorbic acid (vitamin C). <strong>1 gram of pure citric acid is roughly equivalent to 25 ml of fresh lemon juice</strong> in terms of pH-lowering power. However, lemon juice also adds liquid volume, which must be factored into the total water content. For the most consistent results, use powdered citric acid dissolved in a small amount of water. When using lemon juice, account for an extra 20-30 ml of liquid that needs to be boiled off to reach the setting point.',
    },
    {
      type: 'title',
      text: 'The Cold Plate Test: A Visual Method for Determining the Set Point',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The traditional cold plate test (also called the wrinkle test or saucer test) remains one of the most reliable methods for home jam makers. Place a small ceramic plate in the freezer for 10 minutes before you begin cooking. When you believe the jam has reached its setting point, drop a teaspoon of the hot jam onto the chilled plate and let it cool for 30 seconds. Push the edge of the drop with your fingertip: if the surface wrinkles distinctively and the drop holds its shape, the gel point has been reached. If it runs freely, continue boiling for 2-3 minutes and test again. This calculator simulates that test visually, showing you whether your recipe\'s ratios will pass the plate test before you even start cooking.',
    },
    {
      type: 'title',
      text: 'Troubleshooting: Why Jams Fail and How to Fix Them',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Runny jam (failed to set after cooling):</strong> The most common cause is insufficient boiling - the mixture never reached 104-105°C. Reboil the jam, adding 1-2 g of citric acid per kg of fruit and testing with the cold plate method. Alternatively, dissolve 5 g of pectin powder in cold water, whisk into the jam while boiling, and cook for an additional 2 minutes.',
        '<strong>Rubbery or overly stiff jam:</strong> Too much pectin was added relative to fruit weight, or the jam was over-boiled beyond 106°C, degrading the pectin network into a tight, brittle structure. To salvage, gently reheat with 100-200 ml of apple juice or water to dilute the pectin concentration.',
        '<strong>Syneresis (water weeping from the gel):</strong> This indicates excessive acid (pH below 2.8) or sugar above 68%, both of which cause the pectin network to contract and squeeze out water. Add a small amount of baking soda (sodium bicarbonate) to raise the pH incrementally.',
        '<strong>Crystallization (grainy texture):</strong> Sugar concentration exceeded solubility, or undissolved sugar crystals acted as nucleation sites. Stir constantly during the final boil and add 1 tablespoon of corn syrup or glucose, which inhibits crystallization.',
        '<strong>Mold on the surface during storage:</strong> Jam was undercooked (did not reach sterile temperature), contained too little sugar (below 60% for HM pectin), or jars were not properly sterilized. Always use sterilized jars and process in a water bath for 10 minutes.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
