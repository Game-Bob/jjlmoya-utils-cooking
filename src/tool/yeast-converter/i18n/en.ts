import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Yeast Converter: Fresh, Dry & Sourdough Starter';
const description =
	'Convert between fresh yeast, dry yeast, and sourdough starter with precision. Get recipe adjustments when using sourdough starter to maintain perfect hydration.';

const faq = [
	{
		question: 'What is the difference between fresh and dry yeast?',
		answer:
			'Fresh yeast contains about 70% water, while dry yeast contains about 8%. The conversion factor is 1 part dry equals 3 parts fresh yeast. Dry yeast is more potent and shelf-stable, making it ideal for long-term storage.',
	},
	{
		question: 'How much sourdough starter do I need?',
		answer:
			'Sourdough starter is 100% hydration by default (equal parts flour and water). To replace 1g fresh yeast, you need 5g starter (1:5 ratio). Always adjust your recipe to account for the extra flour and water in the starter.',
	},
	{
		question: 'Why do I need to adjust my recipe for sourdough?',
		answer:
			'Sourdough starter contains both yeast and flour/water. When you add it, you\'re adding ingredients to your recipe. You must subtract the equivalent flour and water from your total to maintain correct hydration and structure.',
	},
	{
		question: 'Can I use instant yeast instead of active dry yeast?',
		answer:
			'Instant yeast is a type of active dry yeast that is finely milled. The conversion ratio remains the same: 1:3 between dry and fresh. Instant yeast may require slightly less liquid due to its fine particle size.',
	},
];

const howTo = [
	{
		name: 'Select your yeast type',
		text: 'Choose the type of yeast you have available: Fresh (cake yeast), Dry (instant or active dry), or Sourdough Starter (100% hydration).',
	},
	{
		name: 'Enter the amount',
		text: 'Input the quantity in grams. Be precise for best results—use a kitchen scale whenever possible.',
	},
	{
		name: 'Apply the conversions',
		text: 'The tool shows you the equivalent amounts for all three types. If converting to sourdough, subtract the flour and water from your recipe.',
	},
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
	operatingSystem: 'All',
};

export const content: ToolLocaleContent = {
	slug: 'yeast-converter-fresh-dry-sourdough-starter',
	title,
	description,
	ui: {
		selectYeastType: 'Select Yeast Type',
		freshYeast: 'Fresh Yeast (Cake)',
		dryYeast: 'Dry Yeast (Instant)',
		sourdough: 'Sourdough Starter (100%)',
		enterAmount: 'Enter amount',
		quantity: 'Quantity',
		grams: 'Grams (g)',
		ounces: 'Ounces (oz)',
		pounds: 'Pounds (lb)',
		milligrams: 'Milligrams (mg)',
		reset: 'Reset',
		conversions: 'Conversions',
		copy: 'Copy',
		copied: 'Copied!',
		recipeAdjustment: 'Recipe Adjustment',
		flourSubtract: 'Subtract from flour:',
		waterSubtract: 'Subtract from water:',
	},
	faqTitle: 'Frequently Asked Questions',
	faq,
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Yeast Conversion Formula & Science Guide',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Yeast conversion</strong> is essential for baking consistency. Whether you\'re replacing commercial yeast with sourdough starter or adjusting between fresh and dry varieties, understanding the exact ratios ensures reliable fermentation and consistent results.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'Dry to Fresh Ratio',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: 'Fresh to Sourdough',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: 'Water in Fresh Yeast',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: 'Water in Dry Yeast',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: 'Types of Leavening Agents & Their Properties',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Fresh Yeast (Cake Yeast)',
					icon: 'mdi:cube',
					description: 'Living yeast cells suspended in starch and moisture.',
					points: [
						'Potency: 100% (baseline)',
						'Shelf life: 2-3 weeks refrigerated',
						'Water content: ~70%',
						'Best for: Professional bakers, immediate use',
					],
				},
				{
					title: 'Dry Yeast (Instant)',
					icon: 'mdi:spray-bottle',
					description: 'Desiccated yeast cells, more concentrated than fresh.',
					points: [
						'Potency: 3x fresh yeast',
						'Shelf life: 1-2 years unopened',
						'Water content: ~8%',
						'Best for: Home bakers, long-term storage',
					],
				},
				{
					title: 'Sourdough Starter',
					icon: 'mdi:flask-outline',
					description: 'Wild yeast and bacteria culture at 100% hydration.',
					highlight: true,
					points: [
						'Potency: 1 part = 5 parts fresh yeast',
						'Shelf life: Indefinite with care',
						'Water content: 50% (equal parts flour)',
						'Best for: Complex flavor, slow fermentation',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Conversion Ratios & Mathematical Formula',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Source Yeast', 'Target Yeast', 'Conversion Formula', 'Example'],
			rows: [
				['Fresh Yeast', 'Dry Yeast', 'Fresh ÷ 3 = Dry', '30g Fresh = 10g Dry'],
				['Dry Yeast', 'Fresh Yeast', 'Dry × 3 = Fresh', '10g Dry = 30g Fresh'],
				['Fresh Yeast', 'Sourdough (100%)', 'Fresh × 5 = Sourdough', '20g Fresh = 100g Starter'],
				['Sourdough (100%)', 'Fresh Yeast', 'Sourdough ÷ 5 = Fresh', '100g Starter = 20g Fresh'],
				['Dry Yeast', 'Sourdough (100%)', 'Dry × 15 = Sourdough', '10g Dry = 150g Starter'],
				['Sourdough (100%)', 'Dry Yeast', 'Sourdough ÷ 15 = Dry', '150g Starter = 10g Dry'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Critical: Recipe Adjustment for Sourdough',
			html: 'When substituting fresh or dry yeast with sourdough starter, you MUST adjust your recipe. Sourdough starter contains 50% flour and 50% water. If your conversion requires 100g starter, subtract 50g flour and 50ml water from your recipe to maintain correct hydration.',
		},
		{
			type: 'title',
			text: 'Fermentation Characteristics by Yeast Type',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Yeast Type', 'Fermentation Speed', 'Flavor Development', 'CO₂ Production'],
			rows: [
				['Fresh Yeast', 'Fast (2-3 hrs)', 'Neutral to mild', 'High and rapid'],
				['Dry Yeast', 'Medium (3-4 hrs)', 'Slightly more complex', 'Consistent'],
				['Sourdough', 'Slow (8-48 hrs)', 'Complex, tangy', 'Gradual, sustained'],
			],
		},
		{
			type: 'tip',
			title: 'Pro Tip: Temperature Adjustments',
			html: 'Cold fermentation with sourdough (2-4°C for 8-16 hours) develops superior flavor and structure compared to warm fermentation. This is why professional bakeries prefer sourdough for long-fermented breads.',
		},
		{
			type: 'paragraph',
			html: 'Our converter simplifies the math so you can focus on perfecting your baking technique and flavor development.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
