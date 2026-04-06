import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
	slug: 'cake-pan-size-converter-calculator',
	title: 'Cake Pan Size Converter and Baking Scaler',
	description:
		'Scale any baking recipe to your pans instantly. Calculate the conversion factor for round, square, and rectangular molds with professional precision.',
	faqTitle: 'Baking Scaling Frequently Asked Questions',
	bibliographyTitle: 'Scientific Baking Resources and References',

	ui: {
		originalRecipe: 'Original Recipe',
		yourMold: 'Your Pan',
		round: 'Round',
		square: 'Square',
		rectangular: 'Rectangular',
		diameter: 'Diameter (cm)',
		side: 'Side (cm)',
		width: 'Width (cm)',
		length: 'Length (cm)',
		multiplyingFactor: 'Scaling Factor',
		equivalentMolds: 'The pans are equivalent. Use the same amounts.',
		smallerMold: 'Your pan is smaller. Reduce ingredients by multiplying them by',
		largerMold: 'Your pan is larger. Increase ingredients by multiplying them by',
		ingredientCalculator: 'Ingredient Weight Scaler',
		addIngredient: 'Add Ingredient',
		ingredient: 'Ingredient',
		original: 'Original',
		final: 'Final',
		exampleIngredient: 'e.g. Flour',
		delete: 'Delete',
		originalVisualization: 'Original',
		yourVisualization: 'Yours',
		defaultIngredient1: 'Flour',
		defaultIngredient2: 'Sugar',
		reduce: 'Reduce',
		increase: 'Increase',
	},

	faq: [
		{
			question: 'How exactly is the multiplying factor calculated?',
			answer:
				'The factor is derived by dividing the surface area of your target pan by the surface area of the original pan mentioned in the recipe. If the result is 1.5, you multiply every ingredient weight by 1.5.',
		},
		{
			question: 'Can I convert a round cake pan to a square one?',
			answer:
				'Yes, our tool uses geometric formulas to compare surface areas regardless of shape. Simply enter the dimensions and the system handles the area equivalence automatically.',
		},
		{
			question: 'Does pan height affect the calculation?',
			answer:
				'This tool focuses on the base area, which is the most critical factor for most cakes. If your pan is significantly taller or shorter than the original, you might need additional timing adjustments during baking.',
		},
		{
			question: 'How do I add multiple ingredients to my list?',
			answer:
				'Click the "Add Ingredient" button to create a new row. Type the name and original weight; the final column updates instantly with the scaled amount based on the current factor.',
		},
		{
			question: 'Is scaling reliable for very large sheet pans?',
			answer:
				'Mathematically yes, but keep in mind that very large cakes take much longer to cook in the center. You may need to lower the oven temperature slightly to prevent the edges from over-baking.',
		},
	],

	bibliography: [
		{
			name: 'Baking Science and Technology - E.J. Pyler',
			url: 'https://www.bakingbusiness.com/',
		},
		{
			name: 'The Professional Pastry Chef - Bo Friberg',
			url: 'https://www.wiley.com/',
		},
	],

	howTo: [
		{
			name: 'Define the original recipe pan',
			text: 'Select the shape and dimensions of the cake pan the recipe was originally designed for.',
		},
		{
			name: 'Input your target pan measurements',
			text: 'Select your pan shape and enter its dimensions. The system will calculate the scaling factor immediately.',
		},
		{
			name: 'Use the ingredient weight converter',
			text: 'Add your recipe ingredients to see exactly how much of each you need for the new pan size.',
		},
		{
			name: 'Monitor bake times',
			text: 'Remember that changing pan size usually requires timing adjustments even if the temperature remains the same.',
		},
	],

	seo: [
		{
			type: 'title',
			text: 'Advanced Guide to Scaling Baking Recipes for Different Pans',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Converting cake recipe amounts for different pan sizes is a fundamental skill in professional baking. It is not just about adding more ingredients by eye; it requires respecting <strong>geometric proportions</strong> to maintain the same cake height, texture, and moisture levels.',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: 'The Surface Area Secret',
			html: 'The secret to proper scaling lies in surface area, not diameter. A 25% increase in diameter for a round pan nearly doubles the total surface area and ingredient requirements.',
		},
		{
			type: 'title',
			text: 'Mathematics Behind Surface Area Scaling',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'To calculate the correct scaling factor, we must compare the base surface areas using these standard geometric formulas:',
		},
		{
			type: 'table',
			headers: ['Pan Shape', 'Area Formula', 'Key Consideration'],
			rows: [
				['Circular', 'π × Radius²', 'Radius is half of the diameter'],
				['Square', 'Side × Side', 'Internal measurements only'],
				['Rectangular', 'Width × Length', 'Standard for sheet cakes and brownies'],
			],
		},
		{
			type: 'title',
			text: 'Common Errors When Changing Pan Sizes',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Many home bakers make the mistake of scaling ingredients linearly based on diameter. Avoid these common pitfalls for better results:',
		},
		{
			type: 'list',
			items: [
				'<strong>Linear scaling:</strong> Doubling the diameter does not double the ingredients; it quadruples them.',
				'<strong>Ignoring pan depth:</strong> Deep pans require longer baking at lower temperatures to reach the center.',
				'<strong>Leavening agents:</strong> Baking powder and yeast sometimes do not require a perfectly linear scaling.',
				'<strong>Surface tension:</strong> Smaller batches might dry out faster due to higher surface-to-volume ratios.',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Pan Capacity Limit',
			html: 'Never fill a pan more than 2/3 full, regardless of the scaling factor you have calculated, to allow for proper expansion.',
		},
		{
			type: 'title',
			text: 'Pro Tips for Baking Scaled Recipes',
			level: 3,
		},
		{
			type: 'tip',
			html: 'When moving to a much larger pan, use bake-even strips or a heating core in the center to ensure even heat distribution without drying out the edges.',
		},
	],

	schemas: [
		{
			'@context': 'https://schema.org',
			'@type': 'WebApplication',
			'name': 'JJLMoya Cake Pan Scaler',
			'url': 'https://utils.jjlmoya.com/en/cake-pan-size-converter-calculator',
			'description': 'Professional tool to convert ingredient weights between different baking pan sizes and shapes.',
			'applicationCategory': 'UtilitiesApplication',
			'operatingSystem': 'All',
		},
	],
};
