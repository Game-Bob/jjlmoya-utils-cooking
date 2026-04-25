import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Bakvorm Umrechner Schalen voor Patisserie';
const description =
	'Pas elk bakrecept aan je eigen vormen aan. Bereken automatisch de omrekeningsfactor voor ronde, vierkante en rechthoekige vormen met professionele precisie.';

const faq = [
	{
		question: 'Hoe werkt de vermenigvuldigingsfactor precies?',
		answer:
			'De factor wordt berekend door de oppervlakte van jouw gewenste bakvorm te delen door de oppervlakte van de vorm uit het originele recept. Als de uitkomst 1.5 is, vermenigvuldig je elk ingrediënt met dat getal.',
	},
	{
		question: 'Kan ik een ronde vorm omzetten naar een vierkante?',
		answer:
			'Ja, de tool gebruikt nauwkeurige geometrische formules om oppervlakken te vergelijken, ongeacht de vorm. Voer gewoon de maten in en het systeem berekent de equivalentie automatisch.',
	},
	{
		question: 'Hoe zit het met de hoogte van de vormen?',
		answer:
			'Deze tool richt zich op de oppervlakte van de bodem. Als jouw vorm aanzienlijk hoger of lager is dan het origineel, moet je de baktijd mogelijk enigszins aanpassen.',
	},
	{
		question: 'Hoe voeg ik ingrediënten toe aan de lijst?',
		answer:
			'Klik op de knop onderaan om een nieuwe rij toe te voegen. Voer de naam en het originele gewicht in; het geschaalde gewicht wordt direct bijgewerkt.',
	},
];

const howTo = [
	{
		name: 'Definieer de vorm van het recept',
		text: 'Selecteer de vorm en afmetingen van de bakvorm waarvoor het recept oorspronkelijk is geschreven.',
	},
	{
		name: 'Configureer je eigen vorm',
		text: 'Voer de afmetingen in van de vorm die je thuis hebt. Het systeem berekent direct de omrekeningsfactor.',
	},
	{
		name: 'Gebruik de ingrediënten-calculator',
		text: 'Voeg de ingrediënten van je recept toe om de exacte hoeveelheden te zien die je nodig hebt voor jouw vorm.',
	},
	{
		name: 'Pas het bakken aan',
		text: 'Vergeet niet dat een verandering in grootte vaak een verandering in baktijd betekent, zelfs bij dezelfde temperatuur.',
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
	slug: 'bakvormen',
	title,
	description,
	faqTitle: 'Veelgestelde vragen over Schalen',	ui: {
		originalRecipe: 'Origineel Recept',
		yourMold: 'Jouw Bakvorm',
		round: 'Rond',
		square: 'Vierkant',
		rectangular: 'Rechthoekig',
		diameter: 'Diameter (cm)',
		side: 'Zijde (cm)',
		width: 'Breedte (cm)',
		length: 'Lengte (cm)',
		multiplyingFactor: 'Vermenigvuldigingsfactor',
		equivalentMolds: 'De vormen zijn gelijk. Gebruik dezelfde hoeveelheden.',
		smallerMold: 'Jouw vorm is kleiner. Vermenigvuldig de ingrediënten met',
		largerMold: 'Jouw vorm is groter. Vermenigvuldig de ingrediënten met',
		ingredientCalculator: 'Ingrediënten Calculator',
		addIngredient: 'Ingrediënt Toevoegen',
		ingredient: 'Ingrediënt',
		original: 'Origineel',
		final: 'Eindresultaat',
		exampleIngredient: 'Bijv. Bloem',
		delete: 'Verwijderen',
		originalVisualization: 'Origineel',
		yourVisualization: 'Jouw Vorm',
		defaultIngredient1: 'Bloem',
		defaultIngredient2: 'Suiker',
		reduce: 'Verminderen',
		increase: 'Vermeerderen',
	},

	faq,	howTo,
	seo: [
		{
			type: 'title',
			text: 'Gids voor het Schalen van Recepten naar Bakvorm',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Het omzetten van receptmaten voor een andere bakvorm vereist het respecteren van de <strong>geometrische verhoudingen</strong> om de juiste textuur en garing te behouden.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: 'Factor 20cm naar 25cm',
					icon: 'mdi:resize',
				},
				{
					value: 'πr²',
					label: 'Oppervlakte cirkel',
					icon: 'mdi:math-compass',
				},
				{
					value: '0.64',
					label: 'Factor 25cm naar 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: '2/3',
					label: 'Max. Vulniveau',
					icon: 'mdi:format-vertical-align-top',
				},
			],
		},
		{
			type: 'tip',
			html: 'Vul een bakvorm nooit voor meer dan 2/3, ongeacht de berekende factor.',
		},
	],
  bibliography,
  schemas: [appSchema, faqSchema, howToSchema],
};
