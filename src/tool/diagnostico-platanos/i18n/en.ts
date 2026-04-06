import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'banana-ripeness',
  title: 'Banana Diagnostics and Conservation: Scientific Guide',
  description: 'Analyze your banana ripening stage with scientific precision. Learn conservation techniques, ethylene biochemistry, and nutritional optimization.',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Sources and References',
  ui: {
    ripesnessLabel: 'Ripeness State',
    nextStageLabel: 'Next Stage in',
    daysUnit: 'Days',
    tempLabel: 'Temperature',
    humidityLabel: 'Humidity',
    partnerToggleTitle: 'Climacteric Companion',
    partnerToggleSubtitle: 'External ethylene effect',
    conservationTitle: 'Conservation',
    accelerationTitle: 'Acceleration',
    stage1Name: 'Emerald Green',
    stage1Desc: 'Maximum resistant starch content. Full firmness.',
    stage1Conservation: 'Room temperature (18-20°C). Avoid cold (<12°C).',
    stage1Acceleration: 'Paper bag with a ripe apple or tomato.',
    stage2Name: 'Radiant Yellow',
    stage2Desc: 'Perfect balance between firmness and initial sweetness.',
    stage2Conservation: 'Cool place, separate from bunch to slow ethylene.',
    stage2Acceleration: 'Keep in bunch and wrap in plastic.',
    stage3Name: 'Sweet Spotted',
    stage3Desc: 'Antioxidant peak. Intense sweetness and creamy texture.',
    stage3Conservation: 'Refrigerate to preserve pulp (though skin darkens).',
    stage3Acceleration: 'Gentle heat (near heat source, not direct).',
    stage4Name: 'Ripe Cinnamon',
    stage4Desc: 'Very soft texture. Ideal for sugar-free baking.',
    stage4Conservation: 'Peel and freeze immediately.',
    stage4Acceleration: 'Already reached its peak.',
    stage5Name: 'Overripe / Fermented',
    stage5Desc: 'Advanced degradation process.',
    stage5Conservation: 'Not recommended for direct consumption.',
    stage5Acceleration: 'N/A',
  },
  faq: [
    {
      question: 'Why do bananas turn black in the fridge?',
      answer: 'Cold breaks down cell walls in the peel, releasing enzymes that oxidize phenols and create black polyphenols. However, the inside usually stays firm and sweet longer than outside.',
    },
    {
      question: 'How can I ripen a banana quickly?',
      answer: 'Put them in a closed paper bag with an apple or tomato. These emit ethylene gas, which accelerates ripening. If in a hurry, you can put them in the oven at low temperature for a few minutes.',
    },
    {
      question: 'Is it safe to eat spotted bananas?',
      answer: 'Yes, totally. Spots indicate starch has converted to sugar, making them sweeter and more digestible. Only discard if they have mold, smell bad, or are excessively soft.',
    },
    {
      question: 'What is ethylene?',
      answer: 'It\'s a plant hormone in gas form that regulates growth and ripening. Banana is a climacteric fruit, meaning it continues producing ethylene and ripening after harvest.',
    },
  ],
  howTo: [
    {
      name: 'Observe the color',
      text: 'Carefully examine peel color, from green to dark brown, to determine current ripening stage.',
    },
    {
      name: 'Use the simulator',
      text: 'Slide the ripeness indicator to see accurate predictions about when it reaches the next stage.',
    },
    {
      name: 'Adjust conditions',
      text: 'Modify temperature and humidity to see how they affect ripening speed.',
    },
    {
      name: 'Apply conservation',
      text: 'Follow specific conservation and acceleration recommendations based on current stage.',
    },
  ],
  bibliography: [
    {
      name: 'Ethylene and Fruit Ripening: A Biological Review (Nature Research)',
      url: 'https://www.researchgate.net/profile/Jean-Claude-Pech/publication/284632414_Ethylene_and_Fruit_Ripening/links/5aef0bcbaca2727bc006482c/Ethylene-and-Fruit-Ripening.pdf',
    },
    {
      name: 'Biochemical Changes in Musa acuminata during Ripening (Journal of Food Science)',
      url: 'https://www.foodsciencejournal.com/assets/archives/2017/vol2issue5/2-5-31-566.pdf',
    },
    {
      name: 'The Role of Respiration in Climacteric Fruits (Scientific American)',
      url: 'https://www.nature.com/articles/226976b0',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Science of Ripening in Musa × paradisiaca',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Banana is one of the most consumed fruits in the world, yet also one of the most biologically misunderstood. Unlike non-climacteric fruits like citrus or grapes, banana is a <strong>climacteric fruit</strong>. This means it continues ripening after harvest, drastically increasing cellular respiration and production of a critical gaseous phytohormone: <strong>ethylene</strong>.',
    },
    {
      type: 'paragraph',
      html: 'From a biochemical perspective, ripening is a cascade of enzymatic events. During this process, enzymes like amylase break down complex carbohydrates (starches) into simple sugars (fructose, glucose, and sucrose). This change not only alters flavor, making it sweeter, but also modifies texture by degrading pectin in cell walls, resulting in that soft, creamy consistency characterizing ripe banana.',
    },
    {
      type: 'title',
      text: 'The Ethylene Cycle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ethylene functions as a biological switch. Once fruit detects small ethylene concentration, it activates genes responsible for producing more ethylene, creating a positive feedback loop. This is why a very ripe banana accelerates ripening of all neighbors in the fruit bowl. To slow this process, it\'s vital to isolate specimens already showing brown spots from those still green.',
    },
    {
      type: 'title',
      text: 'The Refrigerator Myth',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'There\'s a popular belief that bananas shouldn\'t go in the fridge. Reality is more complex: cold (below 12°C) causes chilling injury in peel cells, releasing enzymes that oxidize phenols and turn skin black. However, this only affects appearance. If the inside has already reached desired ripeness, cold will almost completely halt pulp softening, preserving flavor and texture for several additional days.',
    },
    {
      type: 'title',
      text: 'Advanced Conservation Strategies',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Crown Wrapping:</strong> Wrapping the stem of a banana bunch with plastic wrap dramatically reduces ethylene release, extending commercial shelf life by up to 72 additional hours.',
    },
    {
      type: 'paragraph',
      html: '<strong>Dynamic Suspension:</strong> Hanging bananas prevents pressure bruising. Damaged tissues release ethylene faster, creating hotspots of accelerated ripening that spread through the fruit.',
    },
    {
      type: 'paragraph',
      html: '<strong>Cryotherapy (Freezing):</strong> For bananas in stage 4 (brown), freezing is best option. Peeling fruit before freezing prevents trapped moisture, maintaining fiber quality.',
    },
    {
      type: 'title',
      text: 'Nutritional Changes by Stage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'As banana ripens, its nutritional profile transforms dramatically, allowing it to be used as a specific dietary tool according to consumer objectives.',
    },
    {
      type: 'table',
      headers: ['Stage', 'Resistant Starch', 'Characteristics', 'Main Benefit'],
      rows: [
        ['Green (1-2)', '~80%', 'Very firm, maximum starch content', 'Gut health and glycemic control'],
        ['Yellow (3)', '~5%', 'Balance of firmness and sweetness', 'Quick energy and B vitamins'],
        ['Spotted (4)', 'Minimal', 'Very soft, high sugar content', 'Maximum antioxidant potential'],
        ['Brown/Overripe (5)', 'Practically none', 'Very soft texture, advanced fermentation', 'Not recommended for consumption'],
      ],
    },
    {
      type: 'title',
      text: 'Conclusion and Practical Application',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>Reduce food waste:</strong> Precise banana stage diagnosis enables identifying optimal consumption moment, preventing valuable fruit loss.',
        '<strong>Optimize nutritional benefits:</strong> From resistant starch in green for gut health to antioxidants in spotted for maximum antioxidant potential.',
        '<strong>Plan strategic consumption:</strong> Adapt banana use according to your health objectives: glycemic control, quick energy, digestion, or antioxidants.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Degradation Alert:</strong> External factors like relative humidity over 85% or temperatures above 25°C can drastically accelerate degradation, taking banana from optimal to inedible in hours. This simulator helps you anticipate these changes and plan strategically.',
    },
  ],
  schemas: [],
};
