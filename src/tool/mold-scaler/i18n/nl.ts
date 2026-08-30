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
			'Klik op de knop hieronder om een nieuwe rij toe te voegen. Vul de naam en het oorspronkelijke gewicht in; de laatste kolom wordt direct bijgewerkt.',
	},
	{
		question: 'Is de omrekening betrouwbaar voor zeer grote bakplaten?',
		answer:
			'Mathematisch gezien wel, maar houd er rekening mee dat zeer grote cakes in het midden langer nodig hebben om te garen. Mogelijk moet u de oventemperatuur iets verlagen.',
	},
];

const howTo = [
	{
		name: 'Bepaal de originele receptvorm',
		text: 'Selecteer de vorm en afmetingen van de bakvorm waarvoor het recept oorspronkelijk is ontworpen.',
	},
	{
		name: 'Stel jouw bakvorm in',
		text: 'Voer de maten in van de vorm die je thuis hebt. Het systeem berekent direct de omrekenfactor.',
	},
	{
		name: 'Gebruik de ingrediëntenomrekenaar',
		text: 'Voeg de ingrediënten van je recept toe om exact te zien hoeveel je nodig hebt voor de nieuwe vorm.',
	},
	{
		name: 'Pas de baktijd aan',
		text: 'Houd er rekening mee dat een andere vormgrootte meestal aanpassingen in de baktijd vereist.',
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
	slug: 'bakvorm-omrekenen',
	title,
	description,
	faqTitle: 'Veelgestelde Vragen',
	ui: {
		originalMold: 'Originele Receptvorm',
		yourMold: 'Jouw Doelvorm',
		shape: 'Vorm van de Bakvorm',
		diameter: 'Diameter',
		side: 'Zijde',
		width: 'Breedte',
		length: 'Lengte',
		unit: 'Eenheid',
		cm: 'cm',
		inches: 'inch',
		round: 'Rond',
		square: 'Vierkant',
		rectangular: 'Rechthoekig',
		resultTitle: 'Omrekenresultaat',
		originalArea: 'Origineel Oppervlak',
		yourArea: 'Jouw Oppervlak',
		multiplyingFactor: 'Omrekenfactor',
		equivalentMolds: 'De vormen zijn gelijkwaardig. Gebruik dezelfde hoeveelheden.',
		smallerMold: 'Jouw vorm is kleiner. Verminder de ingrediënten door ze te vermenigvuldigen met',
		largerMold: 'Jouw vorm is groter. Vermeerder de ingrediënten door ze te vermenigvuldigen met',
		ingredientCalculator: 'Ingrediënten Gewicht Omrekenaar',
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

	faq,
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Uitgebreide Gids voor het Schalen van Recepten naar Bakvorm',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Het omzetten van receptmaten voor een andere bakvorm vereist het respecteren van de <strong>geometrische verhoudingen</strong> om de juiste textuur, hoogte en garing te behouden.',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: 'Het Geheim van het Grondoppervlak',
			html: 'Het geheim van een juiste omrekening zit in het bodemoppervlak, niet in de diameter. Een toename van 25% in diameter verdubbelt het totale oppervlak bijna.',
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
					value: 'x2.25',
					label: 'Factor 15cm naar 22.5cm',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: 'Factor 25cm naar 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: 'πr²',
					label: 'Oppervlakte cirkel',
					icon: 'mdi:math-compass',
				},
			],
		},
		{
			type: 'title',
			text: 'Vormvergelijking en Ovenefficiëntie',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Ronde Bakvormen',
					icon: 'mdi:circle-outline',
					description: 'De standaard in het bakken. Bieden zeer gelijkmatige garing van de rand naar het midden.',
					points: [
						'Optimale warmteverdeling',
						'Ideaal voor hoge biscuit taarten',
						'Berekend via de straal',
					],
				},
				{
					title: 'Vierkante Bakvormen',
					icon: 'mdi:square-outline',
					description: 'Maximale benutting van de ovenruimte. Ideaal voor brownies.',
					highlight: true,
					points: [
						'Snellere garing van de hoeken',
						'Makkelijk te portioneren',
						'Berekend Zijde x Zijde',
					],
				},
				{
					title: 'Rechthoekige Bakvormen',
					icon: 'mdi:rectangle-outline',
					description: 'Perfect voor grote plaatgebakken. Vereist controle van het midden.',
					points: [
						'Hoogste totale capaciteit',
						'Veelzijdig gebruik',
						'Berekend Breedte x Lengte',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Wiskunde Achter Oppervlakte-omrekening',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Om de juiste omrekenfactor te berekenen, vergelijken we de bodemoppervlakten met deze formules:',
		},
		{
			type: 'table',
			headers: ['Bakvorm Vorm', 'Oppervlakte Formule', 'Belangrijkste Aandachtspunt'],
			rows: [
				['Cirkelvormig', 'π × Straal²', 'Straal is de helft van de diameter'],
				['Vierkant', 'Zijde × Zijde', 'Alleen binnenmaten gebruiken'],
				['Rechthoekig', 'Breedte × Lengte', 'Standaard voor plaatgebak'],
			],
		},
		{
			type: 'title',
			text: 'Veelgemaakte Fouten bij het Veranderen van Vormgrootte',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Lineaire omrekening:</strong> Het verdubbelen van de diameter verdubbelt de ingrediënten niet; het verviervoudigt ze.',
				'<strong>Hoogte negeren:</strong> Diepere vormen vereisen meer baktijd op een lagere temperatuur.',
				'<strong>Rijsmiddelen:</strong> Bakpoeder vereist niet altijd een exact lineaire omrekening.',
				'<strong>Verdamping:</strong> Kleinere hoeveelheden kunnen sneller uitdrogen.',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Maximale Vulhoogte',
			html: 'Vul een bakvorm nooit voor meer dan 2/3 van de totale capaciteit, ongeacht de berekende factor.',
		},
		{
			type: 'title',
			text: 'Begrippenlijst Omrekenen',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Omrekenfactor',
					definition: 'Het getal waarmee u alle ingrediënten moet vermenigvuldigen.',
				},
				{
					term: 'Bodemoppervlak',
					definition: 'De meting van de onderkant van de vorm.',
				},
				{
					term: 'Straal (Radius)',
					definition: 'De afstand van het middelpunt tot de rand van een cirkel.',
				},
				{
					term: 'Warmteoverdracht',
					definition: 'Hoe thermische energie door de vorm beweegt op basis van vorm en materiaal.',
				},
			],
		},
		{
			type: 'tip',
			html: 'Wanneer u overstapt op een veel grotere bakvorm, gebruik dan isoleerbanden om de vorm voor gelijkmatige warmteverdeling.',
		},
		{
			type: 'paragraph',
			html: 'Het beheersen van bakvormomrekening geeft u totale creatieve vrijheid. Gebruik deze rekenmachine voor constante professionele resultaten.',
		},
	],
	bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
