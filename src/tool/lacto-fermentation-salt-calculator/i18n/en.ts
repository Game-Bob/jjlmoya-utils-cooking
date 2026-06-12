import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Lacto Fermentation Salt Calculator Bio Organic Scientific Guide";
const description = "Calculate precise salt percentages for dry salting and wet brining. Balance bacteria populations, prevent mold, and master food preservation.";
const faq = [
  {
    question: "Why is salt percentage critical in lacto-fermentation?",
    answer: "Salt suppresses harmful pathogens and molds through osmotic pressure while allowing salt-tolerant Lactic Acid Bacteria (LAB) to thrive, ferment sugars, and produce lactic acid."
  },
  {
    question: "What is the difference between dry salting and wet brining?",
    answer: "Dry salting uses salt drawn directly from the food's own moisture (ideal for shredded cabbage). Wet brining introduces external water and salt to fully submerge whole or chunky vegetables."
  },
  {
    question: "Can I use chlorinated tap water for fermentation?",
    answer: "Chlorine can inhibit bacterial growth. It is highly recommended to use filtered or spring water for consistent fermentation results."
  },
  {
    question: "Is weight percentage better than volume measurements?",
    answer: "Yes. Different salt types (Kosher, sea salt, table salt) have varying crystal sizes and density. Weighing salt in grams ensures exact salinity regardless of the salt type used."
  }
];

const howTo = [
  {
    name: "Choose fermentation mode",
    text: "Select Dry mode if you are relying on the vegetables own juices, or Wet mode if adding water to cover the ingredients."
  },
  {
    name: "Weigh ingredients",
    text: "Input the exact weight of vegetables in grams. If using wet brining, input the weight of water too."
  },
  {
    name: "Adjust salinity target",
    text: "Slide the salinity percentage control. Aim for 2.0% to 3.5% for general safety and optimal lactic acid bacteria growth."
  },
  {
    name: "Measure the salt",
    text: "Use the digital scale output to measure the exact grams of salt required. Add it to your fermentation vessel."
  }
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
  slug: 'lacto-fermentation-salt-calculator',
  title: 'Lacto Fermentation Salt Calculator',
  description: 'Calculate precise salt percentages for dry salting and wet brining. Balance bacteria populations, prevent mold, and master food preservation.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: "Lacto Fermentation Salt Calculator",
    subtitle: "Precision salinity control for bio organic preservation",
    unitLabel: "Measurement System",
    metricUnit: "Metric (g / grams)",
    imperialUnit: "Imperial (oz / ounces)",
    modeLabel: "Fermentation Mode",
    dryMode: "Dry Salting",
    wetMode: "Wet Brining",
    vegWeightLabel: "Vegetable Weight",
    waterWeightLabel: "Water Weight",
    salinityLabel: "Target Salinity (%)",
    saltGramsLabel: "Required Salt",
    fineSaltLabel: "Fine Salt (teaspoons)",
    kosherSaltLabel: "Kosher Salt (teaspoons)",
    statusDanger: "Danger Zone",
    statusDangerDesc: "Salinity below 2.0% is insufficient to block pathogens and mold growth. Increase salinity to ensure safety.",
    statusOptimal: "Optimal LAB Zone",
    statusOptimalDesc: "Salinity between 2.0% and 3.5% is ideal for Lactic Acid Bacteria (LAB) to dominate and ferment safely.",
    statusInhibited: "Inhibited Zone",
    statusInhibitedDesc: "Salinity above 3.5% slows or stops fermentation entirely. Useful for long-term preservation but delays bacterial activity.",
    petriTitle: "Microbiological Simulation",
    scaleTitle: "Digital Scale Display",
    disclaimer: "Note: Weighing salt using a digital scale is strongly recommended over volumetric measurements.",
    kosherLabel: "Kosher Salt",
    fineLabel: "Fine Salt",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'The Ultimate Guide to Lacto-Fermentation Chemistry and Salinity Control',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Lacto-fermentation is a dynamic biochemical process driven by Lactic Acid Bacteria (LAB) to preserve vegetables and fruits. The entire mechanism depends on establishing a selective environment where beneficial bacteria thrive while spoilage organisms, molds, and pathogens are suppressed. Salinity control is the most critical lever in achieving this biological selectivity.',
    },
    {
      type: 'title',
      text: 'The Biochemical Action of Salt in Preservation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When salt is introduced to raw vegetables, it works through a physical process known as <strong>osmotic pressure</strong>. The high concentration of salt outside the plant cells draws water and dissolved sugars out of the vegetable tissues through osmosis (plasmolysis). This creates a nutrient-rich brine that serves as the perfect fuel for Lactic Acid Bacteria. Concurrently, the osmotic pressure dehydrates and lyses the cellular membranes of undesirable molds, yeasts, and pathogenic bacteria such as <em>Escherichia coli</em> or <em>Clostridium botulinum</em>, which cannot tolerate elevated salinity levels.',
    },
    {
      type: 'title',
      text: 'Microbiological Succession: How LAB Colonizes Ferments',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lacto-fermentation is not carried out by a single bacterial species, but by a succession of different strains that dominate as the acidity increases. In a typical vegetable ferment, the cycle occurs in three distinct phases:',
    },
    {
      type: 'list',
      items: [
        '<strong>Phase 1 - Leuconostoc mesenteroides:</strong> This heterofermentative bacterium initiates the fermentation. It is highly active at the start, producing lactic acid, acetic acid, carbon dioxide gas (which helps create an anaerobic atmosphere), and ethanol. It quickly lowers the pH, preparing the medium for subsequent species.',
        '<strong>Phase 2 - Lactobacillus plantarum & Lactobacillus brevis:</strong> As the pH drops below 5.0, <em>L. mesenteroides</em> dies off, and acid-tolerant homofermentative bacteria like <em>L. plantarum</em> take over. They efficiently ferment remaining simple sugars exclusively into lactic acid, dropping the pH rapidly.',
        '<strong>Phase 3 - Pediococcus pentosaceus & others:</strong> In long-term ferments, these highly acid-tolerant bacteria continue to produce acid until the sugars are completely depleted or the pH bottoms out around 3.5 to 3.8, stabilizing the environment indefinitely.'
      ],
    },
    {
      type: 'title',
      text: 'Protecting Vegetable Texture: The Pectin Connection',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'One common issue in home fermentation is mushiness. Plant cells are held together by a structural polysaccharide called pectin. Spoilage microorganisms produce enzymes called <strong>pectinases</strong>, which break down pectin and degrade the vegetable walls, causing mushiness. Maintaining a salinity level above 2.0% directly inhibits the activity of these pectinase enzymes. Additionally, calcium ions present in unrefined sea salt or added as calcium chloride can cross-link with pectin molecules, forming calcium pectate, which keeps pickles and sauerkraut crunchy.',
    },
    {
      type: 'title',
      text: 'Dry Salting vs. Wet Brining Mathematics',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Understanding the formula for calculating salt is critical. For dry salting (commonly used for shredded vegetables like cabbage in sauerkraut), the salt percentage is calculated solely based on the weight of the vegetable. For wet brining (used for whole or larger chunk vegetables like cucumbers or carrots), the salt percentage must be calculated based on the <strong>total weight of both the vegetables and the added water</strong>. Calculating salt based on water weight alone is a common mistake that dilutes the final salinity, as the water inside the vegetables eventually dilutes the brine.',
    },
    {
      type: 'table',
      headers: ['Salinity Range', 'Microbiological State', 'Typical Use Cases', 'Safety Level'],
      rows: [
        ['< 2.0%', 'Pathogen Risk / Mold Danger', 'Not recommended', 'Low'],
        ['2.0% - 2.5%', 'Optimal Lactic Acid Bacteria Bloom', 'Sauerkraut, Kimchi, Pickled cucumbers', 'High'],
        ['2.5% - 3.5%', 'Slowed fermentation / High texture retention', 'Hot sauces, garlic, root vegetables', 'High'],
        ['> 3.5%', 'Bacterial inhibition / Preservation only', 'Olives, long-aged peppers, high-temperature storage', 'Safe but inactive'],
      ],
    },
    {
      type: 'title',
      text: 'Why Weighing Salt Beats Volume Measurement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Measuring salt by volume (tablespoons or teaspoons) is notoriously inaccurate. Table salt is fine and packs densely, meaning a teaspoon can weigh up to 6 grams. Conversely, Kosher salt has large, flaky crystals with air pockets, weighing as little as 4 grams per teaspoon. Coarse sea salt falls somewhere in between. Using volume measurements can easily cause a ferment to be either unsafely under-salted or completely stalled due to over-salting. Weighing ingredients in grams or ounces on a digital scale guarantees consistent, safe, and repeatable results.',
    },
    {
      type: 'title',
      text: 'Lacto-Fermentation Troubleshooting and Best Practices',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To ensure a successful ferment, always follow these rules: Keep all vegetables completely submerged below the brine to prevent aerobic molds from growing. Use clean vessels and weights. Ferment at a cool room temperature (18°C to 22°C) to prevent phase-1 bacteria from being outcompeted. If a white film forms on top, check if it is Kahm yeast (a harmless wild yeast that forms due to oxygen exposure) or mold. Mold is fuzzy and colorful, and if present, the ferment should be discarded. Kahm yeast can be scraped off, though it may affect flavor.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
