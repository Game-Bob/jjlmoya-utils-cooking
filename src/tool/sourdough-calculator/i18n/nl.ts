import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Zuurdesem Calculator Fermentatie Ratios";
const description = "Bereken automatisch de verhoudingen van zuurdesem, bloem en water om je cultuur te onderhouden. Vooraf ingestelde of aangepaste verhoudingen.";
const faq = [
	{
		question: 'Wat betekent de verhouding 1:1:1?',
		answer: 'Dit is de meest voorkomende verhouding voor onderhoud op kamertemperatuur. Het betekent 1 deel desem, 1 deel bloem en 1 deel water. Handig bij dagelijkse verversing.',
	},
	{
		question: 'Wanneer gebruik ik 1:2:2?',
		answer: 'De verhouding 1:2:2 is voor het activeren van de zuurdesem. Het zorgt voor een langzamere maar voorspelbare fermentatie. Ideaal na bewaring in de koelkast.',
	},
	{
		question: 'Wat is de "sweet spot" 1:5:5?',
		answer: 'De verhouding 1:5:5 is de "sweet spot" voor veel bakkers. Het zorgt voor 8-12 uur fermentatie op kamertemperatuur voordat de desem klaar is voor gebruik.',
	},
	{
		question: 'Kan ik aangepaste verhoudingen gebruiken?',
		answer: 'Absoluut. Als je een specifiek protocol hebt, kun je je eigen verhoudingen invoeren. Sommige bakkers gebruiken 1:10:10 voor zeer langzame fermentatie.',
	},
];
const howTo = [
	{
		name: 'Voer de totale hoeveelheid in die je nodig hebt',
		text: 'Bepaal het totale gewicht aan zuurdesem dat je nodig hebt voor je recept (bijv. 300g voor een standaard brood).',
	},
	{
		name: 'Selecteer de verversingsratio',
		text: 'Kies uit vooraf ingestelde ratios (Onderhouden, Activeren, Vertragen, Sterk, Sweet Spot) of maak een aangepaste.',
	},
	{
		name: 'Krijg de exacte hoeveelheden',
		text: 'De calculator laat zien hoeveel desem, bloem en water je nodig hebt. Meng deze en laat fermenteren.',
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
	operatingSystem: 'Web',
	offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
	slug: 'zuurdesem',
	title,
	description,
	faqTitle: 'Veelgestelde Vragen',
	faq,  howTo,
	seo: [
		{
			type: 'title',
			text: 'Meestergids voor Onderhoud en Verversing van Zuurdesem',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Zuurdesem</strong> is niet zomaar een ingrediënt, het is een levend ecosysteem van wilde gisten en melkzuurbacteriën (LAB). De sleutel tot uitzonderlijk brood ligt in de gezondheid hiervan.',
		},
	],
	ui: {
		totalAmount: 'Eindhoeveelheid',
		refreshRatio: 'Verversingsratio',
		maintain: 'Onderhouden',
		activate: 'Activeren',
		retard: 'Vertragen',
		strong: 'Sterk',
		sweetSpot: 'Sweet Spot',
		custom: 'Aangepast',
		sourdough: 'Zuurdesem',
		activeCulture: 'Actieve cultuur',
		flour: 'Bloem',
		flourType: 'Sterkte of Volkoren',
		water: 'Water',
		chlorineFree: 'Chloorvrij',
		todayFormula: 'Formule van Vandaag',
		hydration: 'Hydratatie 100 %',
		totalDough: 'Totaal Desem',
		mm: 'ZD',
	},
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
