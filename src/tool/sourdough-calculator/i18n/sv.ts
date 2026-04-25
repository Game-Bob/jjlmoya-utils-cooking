import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Surdegskalkylator: Fermenteringsförhållanden";
const description = "Beräkna automatiskt proportionerna av surdeg, mjöl och vatten för att underhålla din surdegsgrund. Förinställda eller anpassade förhållanden.";
const faq = [
	{
		question: 'Vad betyder förhållandet 1:1:1?',
		answer: 'Det är det vanligaste förhållandet för underhåll i rumstemperatur. Det betyder 1 del surdegsgrund, 1 del mjöl och 1 del vatten. Praktiskt vid daglig matning.',
	},
	{
		question: 'När använder jag 1:2:2?',
		answer: 'Förhållandet 1:2:2 är för att aktivera surdegen. Det ger en långsammare men mer förutsägbar fermentering. Idealiskt om grunden förvarats kallt.',
	},
	{
		question: 'Vad är "sweet spot" 1:5:5?',
		answer: 'Förhållandet 1:5:5 är "sweet spot" för många bagare. Det ger 8-12 timmars fermentering i rumstemperatur innan surdegen är redo.',
	},
	{
		question: 'Kan jag använda anpassade förhållanden?',
		answer: 'Absolut. Om du har ett specifikt protokoll kan du ange dina egna förhållanden. Vissa bagare använder 1:10:10 för mycket långsam fermentering.',
	},
];
const howTo = [
	{
		name: 'Ange den totala mängden du behöver',
		text: 'Definiera den totala vikten surdeg som krävs för ditt recept (t.ex. 300g för ett typiskt bröd).',
	},
	{
		name: 'Välj matningsförhållande',
		text: 'Välj mellan förinställda förhållanden (Underhåll, Aktivera, Fördröj, Stark, Sweet Spot) eller skapa ett eget.',
	},
	{
		name: 'Få exakta mängder',
		text: 'Kalkylatorn visar hur mycket surdegsgrund, mjöl och vatten du behöver. Blanda och låt fermentera.',
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
	slug: 'surdeg',
	title,
	description,
	faqTitle: 'Vanliga Frågor',
	faq,  howTo,
	seo: [
		{
			type: 'title',
			text: 'Mästarguide för Underhåll och Matning av Surdeg',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Surdeg</strong> är inte bara en ingrediens, det är ett levande ekosystem av vildjäst och mjölksyrabakterier (LAB). Nyckeln till fantastiskt bröd ligger i hälsan hos denna kultur.',
		},
	],
	ui: {
		totalAmount: 'Total Mängd',
		refreshRatio: 'Matningsförhållande',
		maintain: 'Underhåll',
		activate: 'Aktivera',
		retard: 'Fördröj',
		strong: 'Stark',
		sweetSpot: 'Sweet Spot',
		custom: 'Anpassat',
		sourdough: 'Surdeg',
		activeCulture: 'Aktiv grund',
		flour: 'Mjöl',
		flourType: 'Starkt eller Fullkorn',
		water: 'Vatten',
		chlorineFree: 'Klorfritt',
		todayFormula: 'Dagens Formel',
		hydration: 'Hydrering 100 %',
		totalDough: 'Total Deg',
		mm: 'SG',
	},
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
