import type { ToolLocaleContent } from '../../../types';

const title = 'Beräkna och Skala Bakformar';
const description =
	'Anpassa alla bakrecept till dina formar. Beräkna automatiskt omräkningsfaktorn för runda, kvadratiska och rektangulära formar med professionell precision.';

const faq = [
	{
		question: 'Hur fungerar multiplikationsfaktorn exakt?',
		answer:
			'Faktorn får man genom att dela arean på din målform med arean på formen i originalreceptet. Om resultatet är 1.5 betyder det att du ska multiplicera varje ingrediens med den siffran.',
	},
	{
		question: 'Kan jag konvertera en rund form till en kvadratisk?',
		answer:
			'Ja, verktyget använder exakta geometriska formler för att jämföra ytor oavsett form. Ange bara måtten så sköter systemet beräkningen automatiskt.',
	},
	{
		question: 'Vad händer med höjden på formarna?',
		answer:
			'Detta verktyg fokuserar på bottenarean. Om din form är betydligt högre eller lägre än originalet kan du behöva justera gräddningstiden något.',
	},
	{
		question: 'Hur lägger jag till ingredienser i listan?',
		answer:
			'Klicka på knappen längst ner för att lägga till en ny rad. Skriv in namnet och ursprungsvikten; den skalade mängden beräknas direkt.',
	},
];

const howTo = [
	{
		name: 'Definiera receptets form',
		text: 'Välj form och mått på den bakform som receptet ursprungligen är skapat för.',
	},
	{
		name: 'Ställ in din egen form',
		text: 'Ange måtten på den form du har hemma. Systemet beräknar direkt omräkningsfaktorn.',
	},
	{
		name: 'Använd ingredienskalkylatorn',
		text: 'Lägg till ingredienserna i ditt recept för att se de exakta mängderna du behöver för din form.',
	},
	{
		name: 'Justera gräddningen',
		text: 'Kom ihåg att en ändrad storlek ofta innebär ändrad gräddningstid, även om temperaturen är densamma.',
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
	slug: 'bakformar',
	title,
	description,
	faqTitle: 'Vanliga frågor om Skalning',
	bibliographyTitle: 'Källor och Referenser',

	ui: {
		originalRecipe: 'Originalrecept',
		yourMold: 'Din Form',
		round: 'Rund',
		square: 'Kvadratisk',
		rectangular: 'Rektangulär',
		diameter: 'Diameter (cm)',
		side: 'Sida (cm)',
		width: 'Bredd (cm)',
		length: 'Längd (cm)',
		multiplyingFactor: 'Omräkningsfaktor',
		equivalentMolds: 'Formarna är likvärdiga. Använd samma mängder.',
		smallerMold: 'Din form är mindre. Multiplicera ingredienserna med',
		largerMold: 'Din form är större. Multiplicera ingredienserna med',
		ingredientCalculator: 'Ingredienskalkylator',
		addIngredient: 'Lägg till Ingrediens',
		ingredient: 'Ingrediens',
		original: 'Original',
		final: 'Slutlig',
		exampleIngredient: 'Ex. Mjöl',
		delete: 'Ta bort',
		originalVisualization: 'Original',
		yourVisualization: 'Din',
		defaultIngredient1: 'Mjöl',
		defaultIngredient2: 'Socker',
		reduce: 'Minska',
		increase: 'Öka',
	},

	faq,
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
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Guide för att Skala Recept efter Bakform',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Att konvertera mängder för en annan form kräver att man respekterar <strong>geometriska proportioner</strong> för att behålla rätt konsistens och gräddningsgrad.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: 'Faktor 20cm till 25cm',
					icon: 'mdi:resize',
				},
				{
					value: 'πr²',
					label: 'Cirkelns area',
					icon: 'mdi:math-compass',
				},
				{
					value: '0.64',
					label: 'Faktor 25cm till 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: '2/3',
					label: 'Max Fyllnadsnivå',
					icon: 'mdi:format-vertical-align-top',
				},
			],
		},
		{
			type: 'tip',
			html: 'Fyll aldrig en form till mer än 2/3, oavsett den beräknade faktorn.',
		},
	],
	schemas: [appSchema, faqSchema, howToSchema],
};
