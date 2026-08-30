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
	{
		question: 'Avrundar kalkylatorn grammen?',
		answer: 'Ja. Den avrundar till närmaste heltal för praktisk användning. Små avrundningsskillnader påverkar inte fermenteringen märkbart.',
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
	slug: 'surdeg-kalkylator',
	title,
	description,
	faqTitle: 'Vanliga Frågor',
	faq,
	howTo,
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
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '24-26°C',
					label: 'Optimal Temp.',
					icon: 'mdi:thermometer',
				},
				{
					value: '3.8 - 4.2',
					label: 'Idealiskt pH',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: 'Std. Hydrering',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: 'Tillväxt vid Pik',
					icon: 'mdi:trending-up',
				},
			],
		},
		{
			type: 'title',
			text: 'Jämförelse av Olika Surdegskulturer',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Flytande Surdeg (100% Hydr.)',
					icon: 'mdi:water',
					description: 'Det vanligaste valet i modern hantverksbakning. Lätt att blanda och använda.',
					points: [
						'Snabbare fermentering',
						'Mildare, mer mjölksur smakprofil',
						'Lätt att mäta och mata',
						'Idealisk för baguetter och matbröd',
					],
				},
				{
					title: 'Fast Surdeg (Pasta Madre)',
					icon: 'mdi:bread-slice-outline',
					description: 'Traditionell i Italiensk bakning. Hydrering runt 50%. Mycket stark.',
					highlight: true,
					points: [
						'Långsammare och mer stabil fermentering',
						'Mer ättiksur smakprofil',
						'Större jäs-kraft för tunga degar',
						'Idealisk för Panettone och Brioche',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Förstå Matematiska Matningsförhållanden',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Förhållandet anger delar av surdegsgrund i förhållande till Mjöl och Vatten. 1:2:2 betyder 1 del grund till 2 delar mjöl och 2 delar vatten.',
		},
		{
			type: 'table',
			headers: ['Förhållande', 'Rekommenderad Användning', 'Uppskattad Tid (24°C)', 'Främsta Fördel'],
			rows: [
				['1:1:1', 'Dagligt underhåll', '4-6 timmar', 'Snabb matning'],
				['1:2:2', 'Aktivering före bakning', '6-8 timmar', 'Balanserad syra'],
				['1:5:5', 'Standard bakanvändning', '8-12 timmar', 'Förutsägbar pik'],
				['1:10:10', 'Långtidsfördröjning', '16-24 timmar', 'Flexibel schemaläggning'],
			],
		},
		{
			type: 'title',
			text: 'Val av Mjöl för Matning av Surdeg',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Fint Rågmjöl / Fullkornsråg',
					icon: 'mdi:grain',
					description: 'Supermat för vildjäst. Innehåller mer näringsämnen och enzymer än vete.',
					points: [
						'Explosiv fermenteringsaktivitet',
						'Ger djupa, jordiga aromer',
						'Håller syranivåer mer stabila',
					],
				},
				{
					title: 'Vetemjöl Special / Siktat Vete',
					icon: 'mdi:shaker-outline',
					description: 'Idealisk för den som söker en mildare smak där surdegen inte dominerar brödet.',
					points: [
						'Mer neutral och mångsidig smak',
						'Mycket tydlig observation av bubblor',
						'Mindre benägen att överfermentera',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Tecken på en Hungrig Surdeg',
			html: 'Om det bildats en mörk vätska (hooch) på ytan, doftar starkt av ättika/aceton eller kollapsar snabbt efter piken, behöver den ett högre matningsförhållande.',
		},
		{
			type: 'title',
			text: 'Teknisk Ordlista för Surdeg',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Levain',
					definition: 'En fördeg beredd från modersurdegen avsedd för ett specifikt brödrecept.',
				},
				{
					term: 'Hooch',
					definition: 'Ett skikt av alkohol och vatten som bildas när kulturen har förbrukat näringen.',
				},
				{
					term: 'Aktivitetspik',
					definition: 'Ögonblicket för maximal volym och jästäthet. Idealiskt tillfälle att knåda degen.',
				},
				{
					term: 'Mjölksyrabakterier (LAB)',
					definition: 'Mikroorganismer som ansvarar för att producera organiska syror som ger smak och hållbarhet.',
				},
			],
		},
		{
			type: 'tip',
			title: 'Flyttestet',
			html: 'För att kontrollera om din surdeg är redo, släpp en tesked i ett glas vatten: om den flyter innehåller den tillräckligt med CO2.',
		},
		{
			type: 'paragraph',
			html: 'Med vår kalkylator standardiserar du bakprocessen och förstår biologin i ditt bröd bättre.',
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
