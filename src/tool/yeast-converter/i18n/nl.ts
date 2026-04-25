import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Gistomzetter: Verse, Gedroogde & Desem';
const description =
	'Reken nauwkeurig om tussen verse gist, droge gist en zuurdesemstarter. Ontvang receptaanpassingen bij het gebruik van zuurdesem om de perfecte hydratatie te behouden.';

const faq = [
	{
		question: 'Wat is het verschil tussen verse en droge gist?',
		answer:
			'Verse gist bevat ongeveer 70% water, terwijl droge gist ongeveer 8% bevat. De omrekeningsfactor is: 1 deel droog staat gelijk aan 3 delen verse gist. Droge gist is krachtiger en langer houdbaar, wat het ideaal maakt voor langdurige opslag.',
	},
	{
		question: 'Hoeveel zuurdesemstarter heb ik nodig?',
		answer:
			'Zuurdesemstarter heeft standaard een hydratatie van 100% (gelijke delen bloem en water). Om 1g verse gist te vervangen, heb je 5g starter nodig (ratio 1:5). Pas je recept altijd aan door de bloem en het water uit de starter van je totalen af te trekken.',
	},
	{
		question: 'Waarom moet ik mijn recept aanpassen bij zuurdesem?',
		answer:
			'Zuurdesemstarter bevat zowel gist als bloem en water. Wanneer je het toevoegt, voeg je ingrediënten toe aan je recept. Je moet de equivalente hoeveelheid bloem en water van je totaal aftrekken om de juiste hydratatie en structuur te behouden.',
	},
	{
		question: 'Kan ik instant gist gebruiken in plaats van actieve droge gist?',
		answer:
			'Instant gist is een type droge gist dat fijn gemalen is. De omrekeningsratio blijft hetzelfde: 1:3 tussen droog en vers. Instant gist heeft soms iets minder vloeistof nodig vanwege de fijne deeltjes.',
	},
];

const howTo = [
	{
		name: 'Selecteer je gisttype',
		text: 'Kies het type gist dat je beschikbaar hebt: Vers (blokje), Droog (instant of actief) of Zuurdesemstarter (100% hydratatie).',
	},
	{
		name: 'Voer de hoeveelheid in',
		text: 'Voer de hoeveelheid in grammen in. Wees nauwkeurig voor het beste resultaat—gebruik indien mogelijk een keukenweegschaal.',
	},
	{
		name: 'Pas de omrekening toe',
		text: 'De tool toont de equivalente hoeveelheden voor alle drie de typen. Bij omrekening naar zuurdesem trek je de bloem en het water van je recept af.',
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
	slug: 'gistomzetter-vers-droog-zuurdesem',
	title,
	description,
	ui: {
		selectYeastType: 'Selecteer Gisttype',
		freshYeast: 'Verse Gist (Blokje)',
		dryYeast: 'Droge Gist (Instant)',
		sourdough: 'Zuurdesemstarter (100%)',
		enterAmount: 'Hoeveelheid invoeren',
		quantity: 'Hoeveelheid',
		grams: 'Gram (g)',
		ounces: 'Ounces (oz)',
		pounds: 'Ponden (lb)',
		milligrams: 'Milligram (mg)',
		reset: 'Reset',
		conversions: 'Omrekeningen',
		copy: 'Kopiëren',
		copied: 'Gekopieerd!',
		recipeAdjustment: 'Receptaanpassing',
		flourSubtract: 'Bloem aftrekken:',
		waterSubtract: 'Water aftrekken:',
	},
	faqTitle: 'Veelgestelde Vragen',
	faq,
	bibliographyTitle: 'Bibliografie & Bronnen',
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Gistomzettingsformules & Wetenschappelijke Gids',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Gistomzetting</strong> is essentieel voor consistentie in het bakken. Of je nu commerciële gist vervangt door zuurdesem of wisselt tussen verse en droge varianten, het begrijpen van de exacte ratio\'s zorgt voor betrouwbare fermentatie.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'Ratio Droog naar Vers',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: 'Vers naar Zuurdesem',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: 'Water in Verse Gist',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: 'Water in Droge Gist',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: 'Soorten Rijsmiddelen & Hun Eigenschappen',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Verse Gist (Blokje)',
					icon: 'mdi:cube',
					description: 'Levende gistcellen in een mengsel van zetmeel en vocht.',
					points: [
						'Kracht: 100% (basis)',
						'Houdbaarheid: 2-3 weken gekoeld',
						'Watergehalte: ~70%',
						'Ideaal voor: Professionele bakkers, direct gebruik',
					],
				},
				{
					title: 'Droge Gist (Instant)',
					icon: 'mdi:spray-bottle',
					description: 'Gedroogde gistcellen, geconcentreerder dan verse gist.',
					points: [
						'Kracht: 3x verse gist',
						'Houdbaarheid: 1-2 jaar ongeopend',
						'Watergehalte: ~8%',
						'Ideaal voor: Thuisbakkers, voorraad',
					],
				},
				{
					title: 'Zuurdesemstarter',
					icon: 'mdi:flask-outline',
					description: 'Wilde gist- en bacteriecultuur op 100% hydratatie.',
					highlight: true,
					points: [
						'Kracht: 1 deel = 5 delen verse gist',
						'Houdbaarheid: Onbeperkt mits goed verzorgd',
						'Watergehalte: 50% (gelijke delen bloem)',
						'Ideaal voor: Complexe smaak, langzame rijping',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Omrekeningsratio\'s & Wiskundige Formule',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Bron Gist', 'Doel Gist', 'Omrekeningsformule', 'Voorbeeld'],
			rows: [
				['Verse Gist', 'Droge Gist', 'Vers ÷ 3 = Droog', '30g Vers = 10g Droog'],
				['Droge Gist', 'Verse Gist', 'Droog × 3 = Vers', '10g Droog = 30g Vers'],
				['Verse Gist', 'Zuurdesem (100%)', 'Vers × 5 = Zuurdesem', '20g Vers = 100g Starter'],
				['Zuurdesem (100%)', 'Verse Gist', 'Zuurdesem ÷ 5 = Vers', '100g Starter = 20g Vers'],
				['Droge Gist', 'Zuurdesem (100%)', 'Droog × 15 = Zuurdesem', '10g Droog = 150g Starter'],
				['Zuurdesem (100%)', 'Droge Gist', 'Zuurdesem ÷ 15 = Droog', '150g Starter = 10g Droog'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Cruciaal: Receptaanpassing voor Zuurdesem',
			html: 'Wanneer je gist vervangt door zuurdesem, MOET je het recept aanpassen. Zuurdesemstarter bestaat voor 50% uit bloem en 50% uit water. Als je 100g starter nodig hebt, trek dan 50g bloem en 50ml water van je recept af.',
		},
		{
			type: 'title',
			text: 'Fermentatiekenmerken per Gisttype',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Gisttype', 'Fermentatiesnelheid', 'Smaakontwikkeling', 'CO₂ Productie'],
			rows: [
				['Verse Gist', 'Snel (2-3 uur)', 'Neutraal tot mild', 'Hoog en rap'],
				['Droge Gist', 'Gemiddeld (3-4 uur)', 'Iets complexer', 'Consistent'],
				['Zuurdesem', 'Langzaam (8-48 uur)', 'Complex, zurig', 'Geleidelijk, aanhoudend'],
			],
		},
		{
			type: 'tip',
			title: 'Pro Tip: Temperatuuraanpassingen',
			html: 'Koude fermentatie met zuurdesem (2-4°C voor 8-16 uur) zorgt voor een superieure smaak en structuur. Daarom verkiezen professionele bakkerijen zuurdesem voor lang-gefermenteerd brood.',
		},
		{
			type: 'paragraph',
			html: 'Onze omzetter vereenvoudigt het rekenwerk zodat jij je kunt focussen op je techniek en smaak.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
