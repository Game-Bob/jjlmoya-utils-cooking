import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
  slug: 'meringue-calculator',
  title: 'Meringue and Snow Peak Calculator',
  description: 'Calculate the exact amount of sugar for French, Italian or Swiss meringue based on your egg whites weight. Whipping times and pastry tricks.',
  faqTitle: 'Frequently Asked Questions',
  bibliographyTitle: 'Sources and References',
  ui: {
    whitesLabel: 'Egg Whites Weight',
    whitesPlaceholder: 'E.g. 120',
    whitesUnit: 'g',
    typeLabel: 'Meringue Type',
    typeFrench: 'French',
    typeItalian: 'Italian',
    typeSwiss: 'Swiss',
    timesHeading: 'Estimated Times (Whipping at medium/high speed)',
    stageSpumado: 'Foamy',
    stageSpumadoDesc: 'Large bubbles, like soap.',
    stageSoftPeaks: 'Soft Peaks',
    stageSoftPeaksDesc: 'Tip bends when lifted.',
    stageStiffPeaks: 'Stiff Peaks',
    stageStiffPeaksDesc: 'Firm and shiny tip.',
    frenchSugarWhite: 'Granulated Sugar',
    frenchSugarPowder: 'Powdered Sugar',
    frenchTip: 'French meringue is the most common and easiest. Ideal for baking meringue cookies or adding to airy batters. Not suitable for eating raw.',
    frenchTime1: '1-2 min',
    frenchTime2: '3-5 min',
    frenchTime3: '7-9 min',
    italianSugarSyrup: 'Syrup Sugar',
    italianWater: 'Water',
    italianTip: 'Italian meringue is the most stable. Made with hot syrup at 118°C. Perfect for decorating cakes and eating directly.',
    italianTime1: '2 min',
    italianTime2: '5 min',
    italianTime3: '10-12 min',
    swissSugarWhite: 'Granulated Sugar',
    swissMaxTemp: 'Max Temperature',
    swissTip: 'Swiss meringue is heated in a double boiler until sugar dissolves. Very versatile and ideal for buttercreams.',
    swissTime1: '1-2 min',
    swissTime2: '4-6 min',
    swissTime3: '8-10 min',
    invalidWeightError: 'Please enter a valid weight',
  },
  faq: [
    {
      question: 'What is the ideal egg white to sugar ratio?',
      answer: 'The golden rule in pastry is the 1:2 ratio. For every gram of egg white, use two grams of sugar to ensure a stable and firm structure.',
    },
    {
      question: 'How do I know if meringue is at stiff peaks?',
      answer: 'Stiff peaks or firm peaks are reached when, lifting the whisk, the meringue forms a point that stays vertical without bending. The meringue should also look very shiny.',
    },
    {
      question: 'Which meringue is most stable for decorating?',
      answer: 'Italian meringue is the most stable of the three main types, thanks to hot syrup slightly cooking the egg white proteins, creating a structure more resistant to heat and time.',
    },
    {
      question: 'Can I use pasteurized egg whites from a bottle?',
      answer: 'Yes, you can use them, but they usually take longer to whip than fresh egg whites. A trick is adding a pinch of cream of tartar or a few drops of lemon juice to help with stability.',
    },
  ],
  howTo: [
    {
      name: 'Weigh the egg whites',
      text: 'Use a digital scale to get the exact weight of egg whites with no yolk trace.',
    },
    {
      name: 'Enter weight',
      text: 'Type that weight in our calculator to get the sugar amounts needed.',
    },
    {
      name: 'Choose technique',
      text: 'Select if you\'re making French meringue (basic), Italian (stable), or Swiss (silky).',
    },
    {
      name: 'Whip and verify',
      text: 'Follow estimated times and check consistency until reaching firm stiff peaks.',
    },
  ],
  bibliography: [
    {
      name: 'Larousse Cooking: Types of Meringues and How to Make Them',
      url: 'https://laroussecocina.mx/palabra/merengue/',
    },
    {
      name: 'Exploratorium: The Science of Cooking - Egg Science',
      url: 'https://www.exploratorium.edu/explore/cooking/egg-science',
    },
    {
      name: 'Serious Eats: A Guide to Making Perfect Meringue',
      url: 'https://www.seriouseats.com/',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'How to Make Perfect Meringue? Science and Proportions',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Meringue is one of the most fundamental and, at the same time, intimidating preparations in classical pastry. Though its ingredients are deceptively simple—egg whites and sugar—the magic lies in technique and strict respect for physical-chemical proportions. Whipping egg whites to stiff peaks isn\'t just moving your arm or a machine; it\'s a protein denaturation process where we create a structure capable of trapping millions of tiny air bubbles.',
    },
    {
      type: 'paragraph',
      html: 'Our <strong>meringue calculator</strong> is designed to eliminate doubt. Whether you have three leftover egg whites from another recipe or are preparing a large cake for an event, knowing the exact sugar weight and estimated whipping times is the difference between a firm, shiny meringue and a sad liquid that deflates in minutes.',
    },
    {
      type: 'title',
      text: 'Types of Meringue: Which to Choose for Your Recipe?',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Not all meringues are the same. Depending on how you apply sugar and temperature, you\'ll get different textures and stability:',
    },
    {
      type: 'list',
      items: [
        '<strong>French Meringue:</strong> The simplest. Whip egg whites and add sugar gradually. Ideal for making meringue cookies (sighs) or pavlovas, since it must be cooked necessarily.',
        '<strong>Italian Meringue:</strong> Considered the most stable and safe. Sugar is added as syrup at 118°C. The syrup heat \'cooks\' the whites, making it safe to eat uncooked. Preferred for decorating cakes and pies.',
        '<strong>Swiss Meringue:</strong> Prepared by heating whites and sugar in a double boiler to 60°C before whipping. It has a very silky consistency and is the perfect base for buttercreams or Swiss meringue buttercream.',
      ],
    },
    {
      type: 'title',
      text: 'The Golden Rule: Sugar Proportions',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'The standard proportion in almost any pastry manual is <strong>1:2</strong>. For every gram of egg white, we use two grams of sugar. This amount isn\'t arbitrary; sugar acts as a stabilizer. Without enough sugar, the protein network in the white (mainly ovalbumin) stretches too much and eventually collapses, expelling water and ruining the mixture.',
    },
    {
      type: 'paragraph',
      html: 'However, depending on meringue type, sugar type can vary. In French meringue, for example, it\'s common to use a mix of white and powdered sugar to achieve superior drying in the oven. Our calculator breaks down these needs automatically based on your egg white weight.',
    },
    {
      type: 'title',
      text: 'The 3 Stages of Whipping: From Foamy to Stiff Peaks',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'It\'s crucial to visually identify what stage your meringue is in to know when to stop whipping. Overwhipping is a common mistake that breaks structure and causes meringue to \'break\'.',
    },
    {
      type: 'list',
      items: [
        '<strong>Foamy Stage:</strong> Egg whites start to bubble and turn white, but are still liquid. Time to start adding sugar.',
        '<strong>Soft Peaks:</strong> Lifting the whisk, meringue forms a point that gently folds down. Ideal for light mousses.',
        '<strong>Stiff Peaks / Firm Peaks:</strong> Meringue is shiny and lifting the whisk, the point stays vertical without moving. If you tilt the bowl, contents shouldn\'t fall.',
      ],
    },
    {
      type: 'title',
      text: 'Factors That Ruin Meringue',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Even with perfect proportions from our calculator, invisible enemies can sabotage your preparation:',
    },
    {
      type: 'list',
      items: [
        '<strong>Fat:</strong> The number one enemy. The tiniest drop of yolk or trace of grease in the bowl will prevent whites from whipping. Use metal or glass bowls, avoiding plastic that usually retains fatty residue.',
        '<strong>Temperature:</strong> For French meringue, room temperature egg whites whip faster and with more volume. For Italian, syrup temperature control is essential.',
        '<strong>Humidity:</strong> Sugar is hygroscopic, meaning it absorbs moisture from air. On very rainy or humid days, meringue can become sticky or struggle to dry in the oven.',
      ],
    },
    {
      type: 'tip',
      html: '<strong>Professional tip:</strong> Add a pinch of cream of tartar or a few drops of lemon juice at the start of whipping. The acid helps stabilize the protein network, making overwhipping much harder.',
    },
    {
      type: 'title',
      text: 'Frequently Asked Questions About Stiff Peaks',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>How much does one egg white weigh?</strong><br />On average, one large egg white weighs about 30-35 grams. However, we always recommend using a digital scale for absolute precision, as egg size varies considerably.',
    },
    {
      type: 'paragraph',
      html: '<strong>Can you overwhip meringue?</strong><br />Yes. If you whip too much once stiff peaks are reached, proteins agglomerate so much they expel water, creating grainy, dry-looking texture. Once there, it\'s hard to recover.',
    },
    {
      type: 'paragraph',
      html: '<strong>Why does my meringue \'cry\'?</strong><br />If you see syrup drops coming from baked meringue, usually sugar didn\'t dissolve correctly during whipping or your oven was too hot.',
    },
    {
      type: 'title',
      text: 'Gastronomic Uses of Meringue',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Once you master the technique with our tool, possibilities are endless. Meringue isn\'t just a dessert itself like meringue cookies or Australian pavlova, but a structural component of:',
    },
    {
      type: 'list',
      items: [
        '<strong>Macarons:</strong> Require very precise French or Italian meringue to achieve the characteristic \'foot\'.',
        '<strong>Classic mousses:</strong> Where it provides airiness without adding heavy fats.',
        '<strong>Soufflés:</strong> Where the trapped air in whites is the engine of rise in the oven.',
        '<strong>Lemon Pie:</strong> Decorated with torched Italian meringue that resists hours without losing shape.',
      ],
    },
    {
      type: 'paragraph',
      html: 'As you see, pastry is applied chemistry. Our meringue calculator lets you focus on creativity while we handle the math. Happy baking!',
    },
  ],
  schemas: [],
};
