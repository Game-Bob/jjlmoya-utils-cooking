import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Sous Vide Pasteurization Curves Calculator';
const description = 'Calculate the exact time needed for safe core pasteurization against Salmonella and Listeria in sous vide cooking, factoring in meat shape and thickness.';

const faq = [
  {
    question: 'What is pasteurization in sous vide cooking?',
    answer: 'Pasteurization is the process of heating food to a specific temperature and holding it there long enough to reduce pathogenic microorganisms (like Salmonella, Listeria, and E. coli) to safe, acceptable levels. Unlike sterilization, it does not destroy all bacterial spores but makes the food safe to consume.',
  },
  {
    question: 'Why does meat thickness affect the cooking time so dramatically?',
    answer: 'Heat transfer in food is governed by conduction. The time required for the core (coldest spot) of the food to reach the water bath temperature increases quadratically with thickness. Doubling the thickness of a steak increases the heating time by approximately four times.',
  },
  {
    question: 'Why is 54.4°C (130°F) considered the minimum safe sous vide temperature?',
    answer: 'At temperatures below 54.4°C, common foodborne pathogens like Salmonella can survive and actively multiply. If food is kept in this "danger zone" for more than 4 hours, toxins can form that are heat-resistant, posing severe food safety risks.',
  },
  {
    question: 'What is a 6D or 6.5D reduction?',
    answer: 'A D-reduction refers to a decimal (logarithmic) reduction in the bacterial population. A 6.5D reduction means that 99.99995% of the target pathogen is killed. For example, if there were 1,000,000 bacteria originally, fewer than 1 would survive.',
  },
  {
    question: 'How does food geometry alter heating rate?',
    answer: 'Heat penetrates a sphere from all directions (3 dimensions) and a cylinder from the sides (2 dimensions), whereas a flat slab is heated primarily from the top and bottom (1 dimension). Thus, spheres heat the fastest, followed by cylinders, with slabs taking the longest time.',
  },
];

const howTo = [
  {
    name: 'Set bath temperature',
    text: 'Adjust the slider to match your water bath temperature. Note that higher temperatures pasteurize exponentially faster.',
  },
  {
    name: 'Specify meat thickness',
    text: 'Measure the thickest part of your meat in millimeters and enter it into the calculator.',
  },
  {
    name: 'Select geometry shape',
    text: 'Choose whether your food is shaped like a flat slab (steak, chicken breast), a cylinder (beef tenderloin, ballotine), or a sphere (meatball).',
  },
  {
    name: 'Select target pathogen',
    text: 'Choose Salmonella for standard meat and poultry safety, or Listeria monocytogenes for high-risk individuals or extended safety.',
  },
  {
    name: 'Review total cook time',
    text: 'The calculator outputs the core heating time and lethality hold time. Add them together for the total safe cooking duration.',
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
  slug: 'sous-vide-pasteurization-curves',
  title: 'Sous Vide Pasteurization Curves',
  description: 'Calculate the exact time needed for safe core pasteurization against Salmonella and Listeria in sous vide cooking, factoring in meat shape and thickness.',
  faqTitle: 'Frequently Asked Questions',
  ui: {
    title: 'Sous Vide Pasteurization Curves',
    subtitle: 'Thermal lethality kinetics and core temperature compensation',
    bathTempLabel: 'Water Bath Temperature',
    thicknessLabel: 'Meat Thickness',
    shapeLabel: 'Meat Geometry',
    shapeSlab: 'Flat Slab (e.g. Steak, Chicken Breast)',
    shapeCylinder: 'Cylinder (e.g. Tenderloin, Roulade)',
    shapeSphere: 'Sphere (e.g. Meatball)',
    pathogenLabel: 'Target Pathogen',
    pathogenSalmonella: 'Salmonella (Standard)',
    pathogenListeria: 'Listeria monocytogenes',
    resultsTitle: 'Safe Pasteurization Time',
    heatingTime: 'Core Heating Time',
    lethalityTime: 'Pathogen Letality Time',
    totalTime: 'Total Cooking Time',
    dangerZoneTitle: 'Biological Hazard Danger Zone',
    dangerZoneDesc: 'Temperatures below 54.4°C (130°F) cannot safely pasteurize food because bacterial replication rates can exceed thermal death rates. Do not cook sous vide below this temperature for more than 4 hours.',
    chartTitle: 'Logarithmic Bacterial Reduction Curve',
    chartXLabel: 'Time (minutes)',
    chartYLabel: 'Log Reduction',
    disclaimer: 'Calculations assume starting temperature of 5°C and thermal diffusivity of lean meat. Always use a calibrated digital thermometer to verify bath temperature.',
    minutesUnit: 'min',
    mmUnit: 'mm',
    inUnit: 'in',
    tempUnitC: '°C',
    tempUnitF: '°F',
    systemLabel: 'Measurement System',
    systemMetric: 'Metric',
    systemImperial: 'Imperial'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Sous Vide Pasteurization: The Complete Safety Guide for Home Cooks',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sous vide cooking has transformed home kitchens by making impossible-to-overcook steaks accessible to anyone with an immersion circulator. But the method hides a critical complexity: at the low temperatures that produce that perfect medium-rare pink edge to edge, you are operating millimeters above the thermal death threshold of dangerous bacteria. This guide explains exactly how to calculate safe pasteurization times for any cut of meat, at any temperature, so you never serve undercooked chicken or fish again.',
    },
    {
      type: 'title',
      text: 'Why Sous Vide Safety Is Different from Traditional Cooking',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'When you sear a chicken breast at 200°C, the surface hits lethal temperatures instantly and bacteria die in seconds. Sous vide flips this model: the water bath runs at the exact final temperature you want the food to reach, sometimes as low as 55°C. At these temperatures, killing Salmonella or Listeria is not instant  -  it is a slow, time-dependent process measured in minutes or even hours. The USDA FSIS Appendix A tables specify that achieving a 6.5-log reduction in Salmonella requires holding poultry at 60°C for approximately 28 minutes after the core reaches temperature. At 55°C, this time stretches to nearly 90 minutes. If you pull the bag out when the timer beeps without accounting for lethality time, you may be serving under-pasteurized food.',
    },
    {
      type: 'title',
      text: 'Real-World Sous Vide Times: What Home Cooks Actually Need',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'The following table reflects what home cooks actually search for: specific cuts of meat, at common temperatures, with total times that include both the heat-up lag and the pathogen lethality hold. These values assume a 25mm thickness, starting from refrigerated temperature (5°C), targeting a 6.5-log Salmonella reduction.',
    },
    {
      type: 'table',
      headers: ['Food', 'Bath Temp', 'Core Heat-Up', 'Lethality Hold', 'Total Time', 'Result'],
      rows: [
        ['Chicken Breast', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Juicy, fully pasteurized'],
        ['Chicken Breast', '65°C / 149°F', '~35 min', '~3 min', '~38 min', 'Firmer, traditional texture'],
        ['Salmon Fillet', '50°C / 122°F', '~20 min', '~55 min', '~75 min', 'Buttery, translucent, safe'],
        ['Beef Steak', '55°C / 131°F', '~40 min', '~89 min', '~129 min', 'Medium-rare, pasteurized surface'],
        ['Pork Tenderloin', '60°C / 140°F', '~35 min', '~28 min', '~63 min', 'Tender with slight pink'],
        ['Duck Breast', '57°C / 135°F', '~35 min', '~52 min', '~87 min', 'Rich, medium, food-safe'],
        ['Turkey Breast', '63°C / 145°F', '~40 min', '~9 min', '~49 min', 'Moist, never dry'],
        ['Meatballs (sphere)', '60°C / 140°F', '~25 min', '~28 min', '~53 min', 'Uniformly cooked'],
      ],
    },
    {
      type: 'title',
      text: 'The Logarithmic Math of Bacterial Death: D-Values and z-Values Explained',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bacteria do not die all at once like flipping a switch. Thermal death follows first-order kinetics: a constant fraction of the population is killed per unit of time at a given temperature. The <strong>D-value</strong> (decimal reduction time) is the time required at a specific temperature to kill 90% of the bacteria present  -  a 1-log reduction. For Salmonella at 60°C, the D-value is approximately 4.3 minutes. The <strong>z-value</strong> (typically 5.5°C for Salmonella) tells us how much we need to raise the temperature to make the process 10 times faster. Raise the bath from 55°C to 60.5°C, and the required lethality time drops by a factor of 10  -  from 89 minutes to about 9 minutes. This exponential relationship is why cooking at 65°C is dramatically faster and safer than cooking at 55°C, even though the food looks barely different.',
    },
    {
      type: 'title',
      text: 'The Danger Zone: Why 54.4°C (130°F) Is the Absolute Floor',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Biological Hazard Below 54.4 C (130 F)',
      html: 'Never sous vide below 54.4 C (130 F) for more than 4 hours. At temperatures below this threshold, the thermal death rate of bacteria like Salmonella and Clostridium perfringens is actually slower than their natural reproduction rate. The bacterial population can grow during cooking. Worse, certain pathogens like Bacillus cereus and Clostridium botulinum Type E can produce heat-stable toxins that survive cooking. If your circulator reads 52 C and you leave meat in for 8 hours thinking low and slow is safer, you are creating a biological hazard.',
    },
    {
      type: 'title',
      text: 'How Meat Shape and Thickness Dominate Cooking Time',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The thermal center of your food  -  the last point to reach the target temperature  -  dictates total cooking time. Heat conduction follows Fourier\'s law, and the time for the core to reach within 1°C of the bath temperature scales with the <strong>square of the thickness</strong>. Double the thickness of a chicken breast from 25mm to 50mm, and the heating time quadruples from 35 minutes to approximately 140 minutes. Shape matters enormously: a <strong>flat slab</strong> (steak, fillet) heats from two opposing surfaces and is the slowest geometry. A <strong>cylinder</strong> (tenderloin, roulade) receives heat radially from all sides and heats roughly 1.4 times faster than a slab of the same thickness. A <strong>sphere</strong> (meatball) heats from all directions and is the fastest geometry, about 1.7 times faster than a slab. This is why spherical items like meatballs or arancini reach safe core temperatures surprisingly quickly.',
    },
    {
      type: 'title',
      text: 'Salmonella vs. Listeria: Choosing Your Target Pathogen',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Salmonella (Standard)',
          icon: 'mdi:bacteria-outline',
          description: 'Most common poultry contaminant, moderately heat-sensitive, widely used as the reference pathogen in USDA FSIS standards.',
          points: [
            'z-value of 5.5 C: moderately heat-sensitive',
            'Target: 6.5-log reduction for poultry, 5-log for beef',
            'D60 = 4.3 minutes: dies relatively quickly at 60 C',
            'Safe for healthy adults with standard pasteurization times',
            'Surrogate for Salmonella enterica serovars in all meat types',
          ],
        },
        {
          title: 'Listeria monocytogenes',
          icon: 'mdi:shield-alert-outline',
          description: 'Higher heat resistance than Salmonella. Critical for vulnerable populations including pregnant women and immunocompromised individuals.',
          highlight: true,
          points: [
            'Higher heat resistance than Salmonella',
            'z-value of 6.0 C: requires more temperature increase to accelerate kill',
            'Target: 6-log reduction recommended',
            'D60 = 7.7 minutes: takes nearly twice as long as Salmonella',
            'Critical for pregnant women, elderly, and immunocompromised individuals',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Food Safety for Vulnerable Populations: When Standard Pasteurization Is Not Enough',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pregnant women, adults over 65, chemotherapy patients, transplant recipients, and people with HIV or autoimmune conditions face dramatically higher risks from foodborne illness. Listeria monocytogenes in particular can cross the placental barrier and cause miscarriage, stillbirth, or neonatal meningitis  -  even when the mother shows no symptoms. For these populations, the standard 6.5-log Salmonella reduction is insufficient. Select Listeria as the target pathogen and extend cooking times accordingly. At 60°C, the additional lethality time for Listeria versus Salmonella adds approximately 16 extra minutes for a 25mm chicken breast  -  a small time investment for substantial safety margins.',
    },
    {
      type: 'title',
      text: 'Why Cold Start Temperature Matters: Always Measure from Refrigerated',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'This calculator assumes a starting temperature of 5°C  -  standard refrigerator temperature. If you take meat directly from the freezer at -18°C, the core will take significantly longer to reach target temperature. The latent heat of melting ice within frozen muscle tissue creates a plateau at 0°C that can add 30-50% to the heating time. Always thaw frozen items completely in the refrigerator before sous vide cooking and verify the core starting temperature. Similarly, if you leave meat on the counter to temper for 30 minutes before bagging, the reduced heating time is not captured by this model and you may overshoot pasteurization  -  which is safe but may affect texture.',
    },
    {
      type: 'title',
      text: 'Pasteurization Does Not Mean Sterilization: What Survives',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pasteurization reduces pathogens to levels considered safe by public health standards  -  typically a 5-log to 7-log reduction. It does not produce a sterile product. Certain bacterial spores, including <em>Clostridium botulinum</em> and <em>Clostridium perfringens</em>, can survive pasteurization temperatures and germinate if food is improperly stored. After sous vide cooking, food must be either served immediately, held above 54.4°C for service, or rapidly chilled in an ice bath to below 4°C within 2 hours. Vacuum-sealed bags create an anaerobic environment that Clostridium botulinum finds ideal; never leave cooked sous vide bags at room temperature. For extended refrigerator storage beyond 5 days, freezing is recommended.',
    },
    {
      type: 'title',
      text: 'USDA FSIS Compliance: Meeting Regulatory Standards at Home',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The USDA Food Safety and Inspection Service (FSIS) Appendix A provides the definitive regulatory framework for lethality performance standards in meat and poultry products. These tables specify the time-temperature combinations required for specific log reductions in Salmonella. While designed for commercial processors, home cooks can use the same science. For example, FSIS Appendix A mandates that ready-to-eat poultry achieve a 6.5-log reduction in Salmonella. At 60°C, the required holding time after the entire product reaches temperature is 28.1 minutes. This calculator implements the FSIS mathematical model using first-order Arrhenius kinetics with D-values and z-values derived from peer-reviewed thermal inactivation studies, adapted for home sous vide circulator use.',
    },
    {
      type: 'title',
      text: 'Fish and Seafood: Different Rules for Different Proteins',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Fish muscle has different thermal properties than mammalian or avian meat. Fish heats faster due to lower density and thinner typical cuts, but the pathogens of concern differ. For raw or lightly cooked fish, <em>Vibrio</em> species and <em>Anisakis</em> parasites are the primary concerns rather than Salmonella. The FDA recommends freezing fish at -20°C for 7 days before raw consumption to kill parasites, then sous vide pasteurizing against Listeria at the final cook. Salmon cooked at 50°C requires approximately 55 minutes of hold time for a 6-log Listeria reduction, producing a unique texture that is impossible to achieve with any other cooking method. Tuna and other scombroid fish require additional care: histamine produced by bacterial action before cooking is heat-stable and not destroyed by pasteurization; always source sushi-grade fish from reputable suppliers and keep it below 4°C before cooking.',
    },
    {
      type: 'title',
      text: 'The Texture-Safety Tradeoff: Why Higher Temperatures Are Faster but Different',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Every sous vide cook faces the same decision: cook lower and longer for better texture, or cook higher and faster for convenience and safety margin. Chicken breast cooked at 60°C produces meat so juicy it challenges expectations of what poultry can be, but requires a 28-minute lethality hold after core equilibration for a total cook time of over an hour. At 65°C, the same breast pasteurizes in just 3 minutes of hold time for a total of 38 minutes, but the muscle fibers contract more, expelling some moisture. Neither approach is wrong; the calculator simply gives you the numbers to make an informed choice. For dinner parties where timing is flexible, go low. For weeknight meals, go higher. The food will always be safe if the calculated time is respected.',
    },
    {
      type: 'title',
      text: 'Equipment Calibration: Your Circulator Might Be Lying to You',
      level: 3,
    },
    {
      type: 'tip',
      html: '<strong>Verify your immersion circulator temperature with a calibrated digital thermometer.</strong> Consumer circulators can drift by 1-2°C over time, which at the margins of pasteurization (55-58°C) can mean the difference between a safe 89-minute cook and a dangerous under-pasteurization. Test your circulator against a reference thermometer in a well-insulated container once a month. A 1°C error at 55°C changes lethality time by approximately 30 minutes for Salmonella.',
    },
    {
      type: 'title',
      text: 'Cooking Multiple Items: How Bag Count Affects Heat Transfer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A common mistake is loading a sous vide bath with multiple bags and assuming the timing calculated for a single item still applies. Water must circulate freely between bags for effective heat transfer. A tightly packed bath creates stagnant cold zones where bags insulate each other from the heated water. As a rule of thumb, leave at least 2cm of water space between bags, and if cooking more than 4 items, increase the calculated time by 15-20% to compensate. Better yet, use a container large enough that water can freely circulate around every bag. For spherical items like meatballs, the geometry advantage diminishes significantly if they are touching or stacked, as the contact points block radial heat transfer.',
    },
    {
      type: 'title',
      text: 'Quick Reference: Minimum Safe Temperatures and Times per Food Type',
      level: 2,
    },
    {
      type: 'table',
      headers: ['Food Type', 'Minimum Core Temp', 'Pasteurization Time at Min Temp', 'Faster at', 'Recommended for'],
      rows: [
        ['Chicken & Poultry', '60°C / 140°F', '~28 min (6.5-log Salmonella)', '65°C: ~3 min hold', 'All consumers'],
        ['Pork (whole cuts)', '60°C / 140°F', '~28 min (6.5-log Salmonella)', '65°C: ~3 min hold', 'All consumers'],
        ['Beef (steaks, roasts)', '55°C / 131°F', '~89 min (6.5-log Salmonella)', '60°C: ~28 min hold', 'Healthy adults (surface pasteurization)'],
        ['Ground Beef', '60°C / 140°F', '~28 min (6.5-log Salmonella)', '65°C: immediate', 'All consumers (bacteria mixed throughout)'],
        ['Fish & Seafood', '50°C / 122°F', '~55 min (Listeria)', '55°C: ~22 min hold', 'Pre-frozen for parasite control'],
        ['Eggs (in shell)', '57°C / 135°F', '~75 min (Salmonella)', '60°C: ~28 min hold', 'Pasteurized shell eggs'],
        ['Vegetables', '85°C / 185°F', 'Not applicable (enzyme inactivation)', 'N/A', 'Pectin breakdown, no pathogen concern'],
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
