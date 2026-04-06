import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
	slug: 'mold-scaler',
	title: 'Mold Scaler for Pastry',
	description:
		'Automatically calculate the multiplying factor for ingredients when changing molds. Supports round, square, and rectangular molds.',
	faqTitle: 'Frequently Asked Questions',
	bibliographyTitle: 'References',

	ui: {
		originalRecipe: 'Original Recipe',
		yourMold: 'Your Mold',
		round: 'Round',
		square: 'Square',
		rectangular: 'Rectangular',
		diameter: 'Diameter (cm)',
		side: 'Side (cm)',
		width: 'Width (cm)',
		length: 'Length (cm)',
		multiplyingFactor: 'Multiplying Factor',
		equivalentMolds: 'The molds are equivalent. Use the same amounts.',
		smallerMold: 'Your mold is smaller. Reduce the ingredients by multiplying them by',
		largerMold: 'Your mold is larger. Increase the ingredients by multiplying them by',
		ingredientCalculator: 'Ingredient Calculator',
		addIngredient: 'Add Ingredient',
		ingredient: 'Ingredient',
		original: 'Original',
		final: 'Final',
		exampleIngredient: 'E.g. Flour',
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
			question: 'How does the scaler calculate the multiplying factor?',
			answer:
				'It calculates the total area of each mold: for round molds it uses π×r², for square ones side², and for rectangular ones width×length. The factor is the ratio between the target mold area and the original.',
		},
		{
			question: 'Can I switch between different mold shapes?',
			answer:
				'Yes, completely. You can change the original mold from round to rectangular, and your target mold from square to round. The calculation updates automatically.',
		},
		{
			question: 'What happens if the molds have the same area?',
			answer:
				'If they have the same area, the multiplying factor will be x1.00 and you can use exactly the same amounts of ingredients without modification.',
		},
		{
			question: 'How do I add more ingredients?',
			answer:
				'Click on "Add Ingredient" and a new field will appear. Type the ingredient name and its original weight in grams. The system will automatically calculate the final quantity based on the factor.',
		},
		{
			question: 'Can I edit the ingredient names?',
			answer:
				'Yes, all fields are editable. Change the ingredient name, the original weight, and the final amount will recalculate automatically when you change the factor.',
		},
	],

	bibliography: [
		{
			name: 'Science of Baking: Recipe Scaling',
			url: 'https://www.scienceofdough.com/',
		},
		{
			name: 'Professional Pastry Chef - The Culinary Institute of America',
			url: 'https://www.ciachef.edu/',
		},
	],

	howTo: [
		{
			name: 'Select the original mold shape',
			text: 'Choose whether your original mold is round, square, or rectangular.',
		},
		{
			name: 'Enter the dimensions',
			text: 'Input the diameter (round), side (square), or width and length (rectangular) in centimeters.',
		},
		{
			name: 'Configure your target mold',
			text: 'Select the shape and dimensions of the mold you want to use for the scaled recipe.',
		},
		{
			name: 'Observe the factor and adjust ingredients',
			text: 'The system will automatically show the multiplying factor and allow you to add ingredients to calculate their final amounts.',
		},
	],

	seo: [
		{
			type: 'title',
			text: 'Professional Recipe Scaling for Pastry',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'In pastry making, scaling recipes is not as simple as multiplying each ingredient by a constant. The real challenge lies in understanding how <strong>molds of different sizes and shapes</strong> affect ingredient proportions and, therefore, the final result of cakes, tarts, or desserts.',
		},
		{
			type: 'paragraph',
			html: 'A recipe designed for a 20 cm diameter round mold cannot simply be multiplied by 1.5 when you use a 25 cm mold. The correct calculation requires understanding <strong>geometry and area ratios</strong>.',
		},
		{
			type: 'title',
			text: 'Mathematical Foundations of Scaling',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'The multiplying factor is based on the <strong>area ratio</strong> between molds. If the target mold has twice the area of the original, you will need to multiply each ingredient by 2 (approximately). For circular molds, area is calculated as A = π × r², where r is the radius. A diameter change implies a quadratic change in area, not linear.',
		},
		{
			type: 'table',
			headers: ['Shape', 'Area Formula', 'Example'],
			rows: [
				['Round', 'π × r²', 'r = 10 cm → 314.16 cm²'],
				['Square', 'side²', 'side = 20 cm → 400 cm²'],
				['Rectangular', 'width × length', 'width = 20 cm, length = 30 cm → 600 cm²'],
			],
		},
		{
			type: 'title',
			text: 'Why You Cannot Simply Multiply Ingredients',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Many beginner bakers make the mistake of multiplying all ingredients linearly. For example, if they double the mold size, they multiply each ingredient by 2. <strong>This is mathematically incorrect</strong> when the change is in area, not linear volume.',
		},
		{
			type: 'paragraph',
			html: 'Factors that are affected <strong>non-linearly</strong> include baking time (which may vary disproportionately with size), heat distribution, and in certain cases, the concentration of active ingredients like yeast or baking powder.',
		},
		{
			type: 'title',
			text: 'Practical Application: Detailed Example',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Imagine you have a recipe for a 20 cm diameter round mold (radius = 10 cm, area = 314.16 cm²). Now you want to use a 25 cm diameter round mold (radius = 12.5 cm, area = 490.87 cm²).',
		},
		{
			type: 'paragraph',
			html: 'The multiplying factor is: 490.87 ÷ 314.16 = <strong>1.56</strong>. If the original recipe calls for 200 g of flour, you will need 200 × 1.56 = <strong>312 g</strong> of flour, not 250 g as you might mistakenly think from a 25% diameter increase.',
		},
		{
			type: 'title',
			text: 'Rectangular Molds: Additional Complexity',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'When switching from a round mold to a rectangular one (or vice versa), beyond considering area, you must account for how <strong>shape affects heat distribution</strong> during baking. A cake in a narrow rectangular mold will be taller and bake differently than the same volume in a wide round mold.',
		},
		{
			type: 'title',
			text: 'Adjustments Beyond Scaling',
			level: 2,
		},
		{
			type: 'list',
			items: [
				'<strong>Baking time:</strong> Increase by 10-25% if the mold is significantly larger. Use a toothpick or thermometer to verify doneness.',
				'<strong>Temperature:</strong> Some bakers reduce temperature by 10-15°C for very large molds, allowing the center to cook without the edges burning.',
				'<strong>Leavening and active agents:</strong> If using baking powder or yeast, scaling may require adjustments. Not all active ingredients scale linearly with area.',
				'<strong>Moisture:</strong> A larger mold may lose moisture differently. Consider covering with aluminum foil if necessary.',
			],
		},
		{
			type: 'tip',
			html: '<strong>Professional tip:</strong> Before trusting a scaled recipe, do a small test. Mathematical scaling is correct for most cases, but every oven and mold has its own characteristics. Document results for future reference.',
		},
	],

	schemas: [],
};
