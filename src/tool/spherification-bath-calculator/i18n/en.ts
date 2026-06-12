import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Spherification Bath Calculator Precision Molecular Gastronomy Guide";
const description = "Calculate exact ratios of sodium alginate and calcium lactate for direct and reverse spherification. Correct viscosity and acidity with xanthan and citrate.";

const faq = [
  {
    question: "What is the difference between direct and reverse spherification?",
    answer: "Direct spherification adds sodium alginate to the flavored base and drops it into a calcium bath, creating a thin membrane that continues to gel inward. Reverse spherification adds calcium to the base and drops it into an alginate bath, creating a membrane that grows outward, stopping the gelling process when rinsed."
  },
  {
    question: "Why do my spheres turn out flat or fail to sink?",
    answer: "If the flavored base liquid is less dense than the sodium alginate bath, it will float instead of forming a sphere. Adding a small amount of xanthan gum increases the base viscosity, allowing it to sink and form perfect spheres."
  },
  {
    question: "What does sodium citrate do in spherification?",
    answer: "Sodium citrate is a sequestrant that binds calcium ions and raises pH. If a base liquid is highly acidic (pH under 4.5) or contains calcium, the sodium alginate will gel prematurely. Adding citrate neutralizes this acidity."
  },
  {
    question: "Can I use any water for the calcium bath?",
    answer: "Tap water with high mineral content can cause sodium alginate to clump or gel prematurely. It is best to use distilled or low-calcium bottled water."
  }
];

const howTo = [
  {
    name: "Select spherification method",
    text: "Choose Direct for thin, immediate gelling, or Reverse for liquids containing alcohol, dairy, or calcium."
  },
  {
    name: "Enter liquid weights",
    text: "Input the weight of your flavored base liquid and the water bath in your preferred units."
  },
  {
    name: "Add texture and acidity corrections",
    text: "Enable Xanthan Gum if your base liquid is thin, or Sodium Citrate if it is highly acidic."
  },
  {
    name: "Measure ingredients",
    text: "Weigh out the exact amounts of sodium alginate, calcium lactate or chloride, and correction agents shown on the summary display."
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
  slug: 'spherification-bath-calculator',
  title: 'Spherification Bath Calculator',
  description: 'Calculate exact ratios of sodium alginate and calcium lactate for direct and reverse spherification. Correct viscosity and acidity with xanthan and citrate.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: "Spherification Bath Calculator",
    subtitle: "Precision ratio control for direct and reverse spherification",
    unitLabel: "Measurement System",
    metricUnit: "Metric (g / grams)",
    imperialUnit: "Imperial (oz / ounces)",
    methodLabel: "Spherification Method",
    directMethod: "Direct Spherification",
    reverseMethod: "Reverse Spherification",
    baseWeightLabel: "Base Liquid Weight",
    bathWeightLabel: "Bath Water Weight",
    xanthanLabel: "Enable Xanthan Gum (Viscosity Correction)",
    citrateLabel: "Enable Sodium Citrate (Acidity / pH Sequestrant)",
    recipeTitle: "Calculated Recipe Summary",
    baseGellingAgent: "Base Gelling Agent",
    bathGellingAgent: "Bath Gelling Agent",
    xanthanGum: "Xanthan Gum (Thickener)",
    sodiumCitrate: "Sodium Citrate (Buffer)",
    warningLabel: "Solubility Warning",
    warningDesc: "The required agent weight is near or exceeds the solubility limit for this volume of liquid. Dissolving may take longer or require gentle warming.",
    directDesc: "Ideal for light liquids with low calcium content. Creates delicate, thin-skinned spheres that must be served immediately.",
    reverseDesc: "Ideal for dairy, alcohol, calcium-rich, or acidic liquids. Creates stable spheres that do not continue gelling after rinsing.",
    sodiumAlginate: "Sodium Alginate",
    calciumChloride: "Calcium Chloride",
    calciumLactate: "Calcium Lactate",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'The Science of Molecular Spherification and Hydrocolloid Gelation',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Spherification is a revolutionary culinary technique that encapsulates a liquid core inside a thin, gelled membrane. Originating in the industrial packaging sector in the 1940s, it was adapted for modernist cuisine in the early 2000s. The underlying chemistry relies on the interactions of hydrocolloids, specifically the cross-linking of sodium alginate polymers when exposed to divalent calcium cations.',
    },
    {
      type: 'title',
      text: 'The Molecular Chemistry: Sodium Alginate and Calcium Ions',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sodium alginate is a polysaccharide extracted from brown seaweeds, composed of linear chains of beta-D-mannuronic acid (M blocks) and alpha-L-guluronic acid (G blocks). In its sodium salt form, it is fully soluble in water, forming a viscous solution. When calcium ions (such as calcium chloride or calcium lactate gluconate) are introduced, the divalent calcium ions (Ca2+) replace the monovalent sodium ions (Na+). Because calcium has two positive charges, it binds to two G blocks on adjacent polymer chains, bridging them together. This process, scientifically described as the <strong>egg-box model</strong> of gelation, links the independent polysaccharide chains into a rigid, three-dimensional hydrogel network that traps water and flavor molecules.',
    },
    {
      type: 'title',
      text: 'Direct Spherification versus Reverse Spherification Mechanisms',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The two main methods of spherification differ in where the gelling agent and the calcium salts are placed, leading to different mechanical properties:',
    },
    {
      type: 'list',
      items: [
        '<strong>Direct Spherification:</strong> Sodium alginate is dissolved in the flavored base liquid, which is then dropped into a calcium bath (usually 1.0% calcium chloride). Gelation starts instantly at the boundary. Because calcium ions are small and mobile, they continuously migrate from the bath into the core of the sphere, causing the gel membrane to grow inward. If not rinsed and served immediately, the sphere will eventually gel completely through, turning into a solid, rubbery bead.',
        '<strong>Reverse Spherification:</strong> Calcium lactate gluconate (2.0%) is dissolved in the flavored base liquid, which is then dropped into a sodium alginate bath (0.5%). Because alginate molecules are large and slow-moving, they cannot easily cross the newly formed gel barrier. Instead, calcium ions migrate outward into the bath, growing the membrane outward. This halts gelation immediately once the sphere is removed and rinsed in clear water, preserving a completely liquid core indefinitely.'
      ],
    },
    {
      type: 'title',
      text: 'Overcoming Acidity and pH Barriers with Sodium Citrate',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sodium alginate is highly sensitive to acid. When the pH of a flavored base liquid falls below 4.5, the alginate molecules cannot hydrate properly. Instead of dissolving, the alginate chains precipitate into insoluble alginic acid, forming stringy clumps. To resolve this, chefs use <strong>sodium citrate</strong> as a buffering agent. Sodium citrate neutralizes the hydrogen ions, raising the pH of acidic ingredients like passion fruit or lime juice above the critical 4.5 threshold, allowing the alginate to hydrate fully and form clean, spherical shapes.',
    },
    {
      type: 'title',
      text: 'Adjusting Fluid Density and Viscosity with Xanthan Gum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'To form a sphere, the droplet of flavored base liquid must fully submerge in the gelling bath. If the flavored base liquid is less dense than the bath (such as a light alcohol or water-based juice in a thick sodium alginate bath during reverse spherification), it will float on the surface, flattening out. Adding a tiny amount of <strong>xanthan gum</strong> (typically 0.1% to 0.2%) increases the viscosity of the base liquid. This extra body provides the momentum needed for the droplet to sink into the bath, allowing surface tension to pull the droplet into a perfect sphere.',
    },
    {
      type: 'table',
      headers: ['Spherification Method', 'Ideal Ingredients', 'Required Additives', 'Storage Characteristics', 'Gel Growth Direction'],
      rows: [
        ['Direct Method', 'Low-calcium fruit juices, clear broths, sweet syrups', '0.5% Sodium Alginate in base, 1.0% Calcium Chloride in bath', 'Must be served immediately, gels solid over time', 'Inward (towards the center)'],
        ['Reverse Method', 'Dairy, alcohol, high-calcium, or highly acidic liquids', '2.0% Calcium Lactate in base, 0.5% Sodium Alginate in bath', 'Highly stable, can be stored in oil or water for hours', 'Outward (away from the center)'],
      ],
    },
    {
      type: 'title',
      text: 'Rinsing and Final Preservation Steps',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Always rinse the finished spheres in a bath of clean, cold water immediately after removing them from the gelling bath. This washes away any residual calcium or alginate clinging to the exterior, stopping the chemical reaction and preventing off-flavors (especially the slightly bitter taste of calcium chloride). For storage, submerge the spheres in a liquid of matching density (such as the flavored base liquid without additives, or a light sugar syrup) to prevent water from moving across the membrane via osmosis, which could cause the spheres to shrivel or burst.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
