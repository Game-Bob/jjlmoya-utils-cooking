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
	{
		question: 'Rondt de calculator de grammen af?',
		answer: 'Ja. Hij rondt af op het dichtstbijzijnde gehele getal voor het gemak. Kleine afrondingsverschillen hebben geen invloed op de fermentatie.',
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
	slug: 'zuurdesem-starter-calculator',
	title,
	description,
	faqTitle: 'Veelgestelde Vragen',
	faq,
	howTo,
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
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '24-26°C',
					label: 'Optimale Temp.',
					icon: 'mdi:thermometer',
				},
				{
					value: '3.8 - 4.2',
					label: 'Ideale pH',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: 'Std. Hydratatie',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: 'Groei bij Piek',
					icon: 'mdi:trending-up',
				},
			],
		},
		{
			type: 'title',
			text: 'Vergelijking van Zuurdesemculturen',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Vloeibare Desem (100% Hydr.)',
					icon: 'mdi:water',
					description: 'De meest gebruikte vorm in het moderne ambachtelijke bakken. Makkelijk te mengelen.',
					points: [
						'Snellere fermentatie',
						'Milder, zacht melkzuurprofiel',
						'Eenvoudig te meten en te verversen',
						'Ideaal voor stokbrood en vloerbrood',
					],
				},
				{
					title: 'Vaste Desem (Pasta Madre)',
					icon: 'mdi:bread-slice-outline',
					description: 'Traditioneel in Italië. Hydratatie rond 50%. Grote drijfkracht.',
					highlight: true,
					points: [
						'Langzamere en stabielere fermentatie',
						'Meer azijnzuurprofiel',
						'Grote triebkracht voor verrijkt deeg',
						'Ideaal voor Panettone en Brioche',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Wiskundige Verversingsverhoudingen Begrijpen',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'De verhouding geeft de delen starter aan ten opzichte van bloem en water. 1:2:2 betekent 1 deel starter op 2 delen bloem en 2 delen water.',
		},
		{
			type: 'table',
			headers: ['Verhouding', 'Aanbevolen Gebruik', 'Geschatte Tijd (24°C)', 'Belangrijkste Voordeel'],
			rows: [
				['1:1:1', 'Dagelijks onderhoud', '4-6 uur', 'Snelle verzorging'],
				['1:2:2', 'Activering voor het bakken', '6-8 uur', 'Balans in zuurgraad'],
				['1:5:5', 'Standaard deeggebruik', '8-12 uur', 'Voorspelbare piek'],
				['1:10:10', 'Langdurige vertraging', '16-24 uur', 'Flexibele planning'],
			],
		},
		{
			type: 'title',
			text: 'Bloemkeuze voor Zuurdesemvoeding',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Volkoren Roggebloem',
					icon: 'mdi:grain',
					description: 'Superfood voor wilde gisten. Bevat meer voedingsstoffen en enzymen dan tarwe.',
					points: [
						'Explosieve fermentatie-activiteit',
						'Brengt diepe, aardse aroma\'s',
						'Houdt de zuurgraad beter stabiel',
					],
				},
				{
					title: 'Witte Tarwebloem',
					icon: 'mdi:shaker-outline',
					description: 'Ideaal voor wie een mildere smaak zoekt waarbij de desem het brood niet overheerst.',
					points: [
						'Neutralere en veelzijdige smaak',
						'Zeer duidelijke bubbelobservatie',
						'Minder snel overgefermenteerd',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Tekenen van een Hongerige Zuurdesem',
			html: 'Als er een donkere vloeistof (hooch) op het oppervlak staat, het sterk naar azijn of aceton ruikt, of snel instort na de piek, heeft het een hogere verhouding nodig.',
		},
		{
			type: 'title',
			text: 'Technische Zuurdesem Glossarium',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Levain',
					definition: 'Een voordeeg bereid uit de moederstarter, bedoeld voor een specifiek broodrecept.',
				},
				{
					term: 'Hooch',
					definition: 'Een alcohollaag die ontstaat wanneer de cultuur de voedingsstoffen heeft verbruikt.',
				},
				{
					term: 'Activiteitspiek',
					definition: 'Het moment van maximale uitzetting en gistdichtheid. Ideaal moment om te kneden.',
				},
				{
					term: 'Melkzuurbacteriën (LAB)',
					definition: 'Micro-organismen die organische zuren produceren voor smaak en houdbaarheid.',
				},
			],
		},
		{
			type: 'tip',
			title: 'De Drijftest',
			html: 'Om te controleren of je desem klaar is, laat je een theelepel in een glas water vallen: als het blijft drijven, bevat het voldoende CO2.',
		},
		{
			type: 'paragraph',
			html: 'Met onze calculator standaardiseer je het bakproces en begrijp je de biologie van je brood beter.',
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
