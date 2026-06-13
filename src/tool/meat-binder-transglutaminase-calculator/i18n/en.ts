import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Meat Binder Transglutaminase Calculator: Molecular Gastronomy Dosing Guide';
const description = 'Calculate precise transglutaminase (TG) dosage for meat binding. Get dry dusting or slurry ratios, incubation time, and temperature safety alerts.';

const faq = [
  {
    question: 'What is transglutaminase and how does it bind meat?',
    answer: 'Transglutaminase (TG), also known as "meat glue," is an enzyme that catalyzes the formation of covalent bonds between the amino acids glutamine and lysine in proteins. When applied to meat surfaces, it creates cross-links that fuse separate pieces into a single cohesive slab. The reaction requires time and cold temperatures (2-5Â°C) to develop fully, typically 6 to 24 hours.',
  },
  {
    question: 'What is the difference between dry dusting and slurry application?',
    answer: 'Dry dusting involves sprinkling the TG powder directly onto the meat surface at 0.75-1.5% of the meat weight. The slurry method mixes one part TG with four parts water to create a brushable paste, ideal for coating irregular surfaces or applying thin, even layers to large roasts or skin-on fillets.',
  },
  {
    question: 'Does temperature affect transglutaminase activity?',
    answer: 'Yes. TG is most active between 2Â°C and 15Â°C. At higher temperatures (up to 40Â°C) the reaction accelerates but must be closely monitored. Above 60Â°C, the enzyme denatures and becomes permanently inactive â€" the cross-linking reaction stops entirely. Always keep TG-bound meat below 60Â°C during cooking to preserve the bond.',
  },
  {
    question: 'Can I use transglutaminase on fish or shellfish?',
    answer: 'Yes, but fish and shellfish have lower levels of lysine and glutamine in their muscle proteins compared to red meat and poultry. You may need a higher TG ratio (1.2-1.5%) and longer incubation times. For delicate scallops or thin fish fillets, consider the slurry method for more even coverage.',
  },
];

const howTo = [
  {
    name: 'Select application method',
    text: 'Choose Dry Dusting for even surfaces like roasts and steaks. Choose Slurry for irregular cuts, thin layers, or skin-on proteins.',
  },
  {
    name: 'Enter meat weight',
    text: 'Input the total weight of the meat or protein you want to bind in grams.',
  },
  {
    name: 'Specify protein type',
    text: 'Select the protein type that best matches your cut. Red meats need less TG; fish and shellfish need more.',
  },
  {
    name: 'Set incubation temperature',
    text: 'Enter the cold storage temperature (2-40Â°C). The calculator will estimate the required binding time.',
  },
  {
    name: 'Weigh and apply TG',
    text: 'Measure the calculated TG powder. Apply by dusting or brushing the slurry, then press protein surfaces together firmly.',
  },
  {
    name: 'Rest and refrigerate',
    text: 'Wrap tightly in plastic film and refrigerate for the recommended incubation period before cooking.',
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
  slug: 'meat-binder-transglutaminase-calculator',
  title: 'Meat Binder Transglutaminase Calculator',
  description: 'Calculate precise transglutaminase (TG) dosage for meat binding. Get dry dusting or slurry ratios, incubation time, and temperature safety alerts.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Meat Binder Transglutaminase Calculator',
    subtitle: 'Molecular precision for protein binding',
    methodLabel: 'Application Method',
    dryMethod: 'Dry Dusting',
    slurryMethod: 'Slurry (Paintable Paste)',
    weightLabel: 'Meat / Protein Weight',
    proteinLabel: 'Protein Type',
    redMeat: 'Red Meat (Beef, Lamb, Game)',
    poultry: 'Poultry (Chicken, Turkey, Duck)',
    fish: 'Fish (Firm Fillets, Whole Fish)',
    shellfish: 'Shellfish (Scallops, Shrimp, Lobster)',
    unitLabel: 'Measurement System',
    metricUnit: 'Metric (g / Â°C)',
    imperialUnit: 'Imperial (oz / Â°F)',
    tempLabel: 'Incubation Temperature',
    resultTitle: 'Dosing Results',
    tgAmount: 'Transglutaminase (TG)',
    waterAmount: 'Water (for Slurry)',
    totalWeight: 'Total Bound Weight',
    ratioLabel: 'TG Ratio',
    incubationLabel: 'Recommended Incubation',
    incubationRange: '{min}h to {max}h',
    dryDustingDesc: 'Sprinkle TG powder evenly over the meat surface, then press pieces together. Ideal for flat cuts and roasts.',
    slurryDesc: 'Mix TG with 4 parts water to create a brushable paste. Apply with a brush for irregular surfaces, fillets, or skin bonding.',
    enzymeDestroyed: 'Enzyme Destroyed â€" Temperature exceeds the denaturation threshold. Transglutaminase is denatured and will not bind.',
    noWarning: '',
    hours: 'hours',
    grams: 'g',
    milliliters: 'ml',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'How much transglutaminase should you use per kilo of meat?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The right dose depends on the type of protein and the application method. For red meat, use 0.75â€"1.0% TG by weight (7.5â€"10 g per kg). For poultry, 1.0â€"1.2%. For fish and shellfish, 1.2â€"1.5%. Apply as a dry dust for flat cuts or mix with 4 parts water as a slurry for irregular surfaces. Enter your protein weight in the calculator above to get an exact measurement.',
    },
    {
      type: 'title',
      text: 'Dry dusting vs. slurry: which method should you choose?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dry dusting works best on flat, even surfaces like steaks, roasts, or cutlets. Sprinkle the TG powder directly (0.75â€"1.5% of meat weight) and press the pieces together. The slurry method (1 part TG to 4 parts water) is better for irregular cuts, skin-on fillets, or delicate scallops where even coverage matters. Brush the paste on, assemble, and wrap tightly. Both methods require cold incubation to complete the bond.',
    },
    {
      type: 'title',
      text: 'Why temperature control makes or breaks your bind',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Transglutaminase works best between 2Â°C and 5Â°C, forming strong cross-links over 6â€"24 hours. At higher fridge temperatures (5â€"15Â°C) the reaction speeds up to 3â€"8 hours, but the bonds may be shallower. Above 40Â°C the enzyme denatures quickly, and at 60Â°C it is destroyed instantly â€" any existing bonds stop forming and the meat will separate during cooking. Always monitor your cold storage temperature with the gauge in the visualizer above.',
    },
    {
      type: 'table',
      headers: ['Protein', 'TG Dose (% of weight)', 'Method', 'Incubation (2â€"5Â°C)', 'Bond Strength'],
      rows: [
        ['Beef, Lamb, Game', '0.75â€"1.0%', 'Dry dust', '6â€"12 h', 'Very strong'],
        ['Chicken, Turkey, Duck', '1.0â€"1.2%', 'Either', '8â€"16 h', 'Strong'],
        ['Salmon, Cod, Sea Bass', '1.2â€"1.5%', 'Slurry', '12â€"24 h', 'Moderate'],
        ['Scallops, Shrimp, Lobster', '1.0â€"1.5%', 'Slurry', '12â€"24 h', 'Moderate'],
      ],
    },
    {
      type: 'title',
      text: 'Common mistakes when binding meat with TG',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Too much enzyme:</strong> Using more than 1.5% TG leaves a visible white residue and a chalky texture. The excess does not make the bond stronger.',
        '<strong>Fat or silver skin on the surface:</strong> TG cannot bind to fat or connective tissue. Trim surfaces clean until you see bare muscle fibers before applying.',
        '<strong>Skipping the rest period:</strong> The cross-linking reaction takes hours. Cooking immediately after assembly will wash the enzyme away before bonds form.',
        '<strong>Heat above 60Â°C during cooking:</strong> The bond holds through gentle cooking (sous vide at 55â€"58Â°C is ideal), but high searing temperatures can weaken the interface.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
