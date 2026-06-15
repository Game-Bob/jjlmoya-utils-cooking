import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Chocolate Tempering Curve and Seeding Guide";
const description = "Master chocolate tempering at home. Calculate required seeding callets weight and follow step-by-step thermodynamic temperature curves for dark, milk, and white chocolate.";
const faq = [
  {
    question: "What is chocolate tempering?",
    answer: "Chocolate tempering is the process of heating, cooling, and gently reheating chocolate to control the crystallization of cocoa butter. This forces the fat molecules to crystallize into stable Form V (Beta) crystals, giving the chocolate a glossy shine, a crisp snap, and preventing it from melting easily at room temperature."
  },
  {
    question: "What is the seeding method?",
    answer: "The seeding method involves melting a portion of the chocolate, and then adding solid, already tempered chocolate pieces (seeds or callets) during the cooling phase. These solid seeds act as templates, guiding the melted fat molecules to freeze into the desired Form V crystal structure without requiring a marble slab."
  },
  {
    question: "Why did my chocolate develop white streaks (fat bloom)?",
    answer: "White streaks or spots are known as fat bloom. This occurs when chocolate is not properly tempered, allowing unstable cocoa butter crystals to rise to the surface and recrystallize. It is still safe to eat but lacks the proper texture and gloss."
  },
  {
    question: "Can I temper chocolate that has already bloomed?",
    answer: "Yes. Blooming is purely a physical separation of fat or sugar crystals, not a chemical spoilage. Melting the bloomed chocolate completely to the correct melting temperature (typically 45-50°C) breaks down all the misaligned crystal structures, allowing you to start the tempering process fresh."
  },
  {
    question: "How does ambient kitchen humidity and temperature affect tempering?",
    answer: "Chocolate is highly sensitive to the environment. The ideal kitchen temperature for tempering is between 18°C and 22°C (64°F to 72°F) with relative humidity below 50%. High humidity can cause moisture condensation on the chocolate, leading to sugar bloom or seizing, where the chocolate turns into a thick, unworkable paste."
  },
  {
    question: "Can I use standard chocolate chips for tempering?",
    answer: "Standard grocery store chocolate chips often contain added stabilizers, emulsifiers, and lower percentages of cocoa butter to help them retain their shape during baking. For successful tempering and a premium glossy snap, it is highly recommended to use professional couverture chocolate, which contains at least 31% cocoa butter."
  }
];

const howTo = [
  {
    name: "Choose chocolate type",
    text: "Select Dark, Milk, or White chocolate to load the specific temperature thresholds."
  },
  {
    name: "Input total weight",
    text: "Enter the total target weight of tempered chocolate you wish to prepare."
  },
  {
    name: "Melt phase",
    text: "Melt 75% of the chocolate (as calculated) to the target melt temperature (e.g. 50C for dark) to break all crystal structures."
  },
  {
    name: "Cool and seed phase",
    text: "Cool the melted chocolate down while stirring in the remaining 25% of solid seeds (callets) until the cooling temperature is reached."
  },
  {
    name: "Work phase",
    text: "Gently reheat the chocolate to the working temperature to melt unstable crystals before using it."
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
  slug: 'chocolate-tempering-curve-guide',
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Chocolate Tempering Assistant',
    subtitle: 'Thermodynamic curves and seeding calculator',
    chocolateTypeLabel: 'Chocolate Type',
    totalWeightLabel: 'Total Target Weight',
    meltLabel: 'Melt Phase',
    coolLabel: 'Cool & Seed Phase',
    workLabel: 'Work Phase',
    meltTempLabel: 'Melt Temp',
    coolTempLabel: 'Cool Temp',
    workTempLabel: 'Work Temp',
    meltWeightLabel: 'Weight to Melt',
    seedWeightLabel: 'Seed Weight (Callets)',
    molecularLabel: 'Molecular Crystal State',
    seedingTitle: 'Seeding Method (25%) Calculator',
    stepTitle: 'Tempering Steps',
    darkOption: 'Dark Chocolate',
    milkOption: 'Milk Chocolate',
    whiteOption: 'White Chocolate',
    resetButton: 'Reset Guide',
    warningOverheated: 'Warning: Temperature is too high! You may burn the cocoa solids or denature milk proteins.',
    warningUnderheated: 'Warning: Temperature is too low. Stable crystals will not have formed or the chocolate will solidify too soon.',
    interactiveInfo: 'Interact with the steps or drag the thermometer to preview molecular phases'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Thermodynamics of Cocoa Butter Crystallization',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Cocoa butter is polymorphic, meaning it can solidify into six different crystal forms (I through VI). Each form has a unique melting point and molecular stability. The goal of chocolate tempering is to maximize Form V (Beta) crystals while suppressing unstable forms I through IV. Form V crystals yield the characteristic glossy finish, firm texture, and clean snap of professional confectionary.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: 'Form V',
          label: 'Target Beta Crystal',
          icon: 'mdi:hexagon-multiple-outline'
        },
        {
          value: '25-30%',
          label: 'Seed Callet Ratio',
          icon: 'mdi:scale'
        },
        {
          value: '31-32°C',
          label: 'Dark Working Temp',
          icon: 'mdi:thermometer'
        },
        {
          value: '0.1-0.2C',
          label: 'Ideal Cooling Rate/min',
          icon: 'mdi:trending-down'
        }
      ]
    },
    {
      type: 'title',
      text: 'The Six Polymorphic Crystal Forms of Cocoa Butter',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Understanding the thermodynamics of each crystal form is critical to avoiding tempering failures. Below is a scientific breakdown of cocoa butter crystal forms, their melting points, and their structural properties:'
    },
    {
      type: 'table',
      headers: ['Crystal Form', 'Structure Name', 'Melting Point', 'Stability & Texture'],
      rows: [
        ['Form I', 'Gamma (γ)', '17°C (62.6°F)', 'Very unstable, soft, melts instantly in hand, no snap.'],
        ['Form II', 'Alpha (α)', '21°C (69.8°F)', 'Unstable, soft, crumbly structure, melts very easily.'],
        ['Form III', 'Beta Prime (β\')', '25.5°C (77.9°F)', 'Unstable, firm but lacks clean snap, dull surface.'],
        ['Form IV', 'Beta Prime (β\')', '27.3°C (81.1°F)', 'Unstable, firm, melts slightly too easily, poor gloss.'],
        ['Form V', 'Beta (β)', '33.8°C (92.8°F)', 'Highly stable, glossy shine, sharp crisp snap (Desired Form).'],
        ['Form VI', 'Beta (β)', '36.3°C (97.3°F)', 'Most stable, hard, develops over months, causes fat bloom.']
      ]
    },
    {
      type: 'title',
      text: 'Understanding the Seeding Method (Siembra)',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'The seeding method is a highly reliable technique for tempering chocolate without a marble working table. By reserving 25% of the total chocolate weight as solid unmelted callets, you introduce a large concentration of stable Form V crystals directly into the warm chocolate. As the mixture is stirred, these seeds act as templates, causing the melted chocolate fats to copy the stable crystal structure.'
    },
    {
      type: 'title',
      text: 'Step-by-Step Science of the Tempering Curve',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Phase 1: Melting (T > 40°C):</strong> Heating the chocolate completely melts all existing crystal structures (Forms I through VI). This creates a completely amorphous liquid fat state, allowing you to start with a blank canvas.',
        '<strong>Phase 2: Cooling & Seeding (T ≈ 27°C):</strong> Cooling the chocolate down to the seeding zone starts crystallization. Stirring in 25% solid callets introduces pre-formed stable Form V crystals that act as templates, encouraging the liquid fats to adopt the same stable crystal grid.',
        '<strong>Phase 3: Reheating & Working (T ≈ 31°C):</strong> Gently reheating the chocolate melts away any unstable Form IV crystals that may have formed during cooling. This leaves only stable Form V crystals, ensuring a perfect glossy finish and a satisfying snap.'
      ]
    },
    {
      type: 'title',
      text: 'Practical Home Tempering Techniques',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'While industrial kitchens use tempering machines, home cooks can achieve professional results using one of these three common methods. Use our seeding calculator above to measure your weights accurately before starting:'
    },
    {
      type: 'list',
      items: [
        '<strong>Double Boiler (Bain-Marie) Method:</strong> Place 75% of your chocolate in a heat-resistant bowl set over a saucepan of simmering water. Ensure the bottom of the bowl does not touch the water and that no steam escapes into the chocolate. Heat to the melting temperature, remove from heat, wipe any water off the bottom of the bowl, and stir in the remaining 25% seeding chocolate. Stir constantly until cooled to the cooling temperature, then return to the water bath briefly to reach the working temperature.',
        '<strong>Microwave Method:</strong> Place 75% of the chocolate in a microwave-safe plastic bowl. Microwave in 15-to-30-second bursts at 50% power, stirring thoroughly between each interval to distribute the heat. Once melted to the target temperature, stir in the remaining 25% seed callets and stir continuously until cooled to the target temperature. Gently reheat in 5-to-10-second bursts until working temperature is reached.',
        '<strong>Sous Vide Method:</strong> Place all chocolate in a vacuum-sealed bag. Set the sous vide bath to the melting temperature and submerge the bag until completely melted. Lower the bath temperature to the cooling temperature and add ice to speed up the cooling process, squeezing the bag frequently to agitate it. Finally, raise the bath temperature to the working temperature to finish the tempering process.'
      ]
    },
    {
      type: 'title',
      text: 'How to Perform a Chocolate Tempering Test',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Before pouring your tempered chocolate into molds or coating confections, you should always test if it is correctly tempered. Dip the tip of a clean knife, metal spatula, or a strip of parchment paper into the chocolate. Leave it to rest at room temperature (18-22°C / 64-72°F). If properly tempered, the chocolate will set evenly within 3 to 5 minutes. It should have a glossy finish, feel dry to the touch, and snap cleanly when bent. If it remains sticky or streaky after 5 minutes, it is not tempered and must be reheated to start again.'
    },
    {
      type: 'title',
      text: 'Troubleshooting Common Tempering Failures',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'If chocolate is not tempered correctly, cocoa butter fat crystals separate and migrate to the surface, creating a dusty white appearance known as <em>fat bloom</em>. If your chocolate is dull, soft, or streaky, it is likely untempered. You can fix this by reheating the chocolate to the melting point and beginning the tempering process again.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
