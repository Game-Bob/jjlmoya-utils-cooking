import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Jästomvandlare: Färsk, Torr & Surdeg';
const description =
	'Omvandla exakt mellan färsk jäst, torrjäst och surdegsstart. Få receptjusteringar när du använder surdeg för att bibehålla perfekt hydrering.';

const faq = [
	{
		question: 'Vad är skillnaden mellan färsk jäst och torrjäst?',
		answer:
			'Färsk jäst innehåller ca 70 % vatten, medan torrjäst innehåller ca 8 %. Omvandlingsfaktorn är: 1 del torr motsvarar 3 delar färsk jäst. Torrjäst är mer koncentrerad och hållbar, vilket gör den idealisk för långtidsförvaring.',
	},
	{
		question: 'Hur mycket surdegsstart behöver jag?',
		answer:
			'En surdegsstart har normalt 100 % hydrering (lika delar mjöl och vatten). För att ersätta 1 g färsk jäst behöver du 5 g surdegsstart (förhållande 1:5). Justera alltid ditt recept genom att dra av mjölet och vattnet i starten från totalen.',
	},
	{
		question: 'Varför behöver jag justera receptet vid surdeg?',
		answer:
			'En surdegsstart innehåller både jäst, mjöl och vatten. När du tillsätter den lägger du till ingredienser i ditt recept. Du måste dra av motsvarande mängd mjöl och vatten för att bibehålla rätt hydrering och struktur.',
	},
	{
		question: 'Kan jag använda torrjäst för söta degar istället för vanlig torrjäst?',
		answer:
			'Ja, men förhållandet 1:3 mellan torrt och färskt förblir detsamma. Instant-jäst (torrjäst som inte behöver aktiveras) kan kräva något mindre vätska på grund av dess finhet.',
	},
];

const howTo = [
	{
		name: 'Välj jästtyp',
		text: 'Välj den typ av jäst du har hemma: Färsk (kronjäst), Torr (instant eller aktiv) eller Surdegsstart (100 % hydrering).',
	},
	{
		name: 'Ange mängd',
		text: 'Skriv in mängden i gram. Var noggrann för bästa resultat — använd köksvåg om möjligt.',
	},
	{
		name: 'Se omvandlingen',
		text: 'Verktyget visar motsvarande mängder för alla tre typer. Om du byter till surdeg, dra av mjöl och vatten från ditt recept.',
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
	slug: 'jastomvandlare-farsk-torr-surdeg',
	title,
	description,
	ui: {
		selectYeastType: 'Välj jästtyp',
		freshYeast: 'Färsk jäst (Kronjäst)',
		dryYeast: 'Torrjäst (Instant)',
		sourdough: 'Surdegsstart (100%)',
		enterAmount: 'Ange mängd',
		quantity: 'Kvantitet',
		grams: 'Gram (g)',
		ounces: 'Ounces (oz)',
		pounds: 'Pund (lb)',
		milligrams: 'Milligram (mg)',
		reset: 'Nollställ',
		conversions: 'Omvandlingar',
		copy: 'Kopiera',
		copied: 'Kopierat!',
		recipeAdjustment: 'Receptjustering',
		flourSubtract: 'Dra av mjöl:',
		waterSubtract: 'Dra av vatten:',
	},
	faqTitle: 'Vanliga frågor',
	faq,
	bibliographyTitle: 'Bibliografi & Resurser',
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Jästomvandling: Formler & Vetenskaplig guide',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Jästomvandling</strong> är avgörande för ett lyckat bakresultat. Oavsett om du ersätter kommersiell jäst med surdeg eller växlar mellan färsk och torr jäst, ger de exakta förhållandena en pålitlig jäsning.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'Torr till färsk ratio',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: 'Färsk till surdeg',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: 'Vatten i färsk jäst',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: 'Vatten i torrjäst',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: 'Olika jästmedel & deras egenskaper',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Färsk jäst (Kronjäst)',
					icon: 'mdi:cube',
					description: 'Levande jästceller suspenderade i stärkelse och fukt.',
					points: [
						'Potens: 100 % (bas)',
						'Hållbarhet: 2-3 veckor i kyl',
						'Vatteninnehåll: ~70 %',
						'Bäst för: Proffsbagare, direkt användning',
					],
				},
				{
					title: 'Torrjäst (Instant)',
					icon: 'mdi:spray-bottle',
					description: 'Torkade jästceller, mer koncentrerade än färsk jäst.',
					points: [
						'Potens: 3x färsk jäst',
						'Hållbarhet: 1-2 år oöppnad',
						'Vatteninnehåll: ~8 %',
						'Bäst för: Hemmabagare, långtidsförvaring',
					],
				},
				{
					title: 'Surdegsstart',
					icon: 'mdi:flask-outline',
					description: 'Vildjäst- och bakteriekultur vid 100 % hydrering.',
					highlight: true,
					points: [
						'Potens: 1 del = 5 delar färsk jäst',
						'Hållbarhet: Obegränsad med rätt skötsel',
						'Vatteninnehåll: 50 % (lika delar mjöl)',
						'Bäst för: Komplex smak, långsam jäsning',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Omvandlingstabell & Matematisk formel',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Källjäst', 'Måljäst', 'Omvandlingsformel', 'Exempel'],
			rows: [
				['Färsk jäst', 'Torrjäst', 'Färsk ÷ 3 = Torr', '30g Färsk = 10g Torr'],
				['Torrjäst', 'Färsk jäst', 'Torr × 3 = Färsk', '10g Torr = 30g Färsk'],
				['Färsk jäst', 'Surdeg (100%)', 'Färsk × 5 = Surdeg', '20g Färsk = 100g Start'],
				['Surdeg (100%)', 'Färsk jäst', 'Surdeg ÷ 5 = Färsk', '100g Start = 20g Färsk'],
				['Torrjäst', 'Surdeg (100%)', 'Torr × 15 = Surdeg', '10g Torr = 150g Start'],
				['Surdeg (100%)', 'Torrjäst', 'Surdeg ÷ 15 = Torr', '150g Start = 10g Torr'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Viktigt: Receptjustering för surdeg',
			html: 'När du ersätter jäst med surdegsstart MÅSTE du justera ditt recept. En start består av 50 % mjöl och 50 % vatten. Om din omvandling kräver 100 g start, dra av 50 g mjöl och 50 ml vatten från ditt recept.',
		},
		{
			type: 'title',
			text: 'Jäsningsegenskaper per jästtyp',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Jästtyp', 'Jäshastighet', 'Smakutveckling', 'CO₂-produktion'],
			rows: [
				['Färsk jäst', 'Snabb (2-3 h)', 'Neutral till mild', 'Hög och snabb'],
				['Torrjäst', 'Medium (3-4 h)', 'Något mer komplex', 'Konsekvent'],
				['Surdeg', 'Långsam (8-48 h)', 'Komplex, syrlig', 'Gradvis, uthållig'],
			],
		},
		{
			type: 'tip',
			title: 'Proffstips: Temperaturjusteringar',
			html: 'Kalljäsning med surdeg (2-4°C i 8-16 timmar) ger överlägsen smak och struktur. Det är därför professionella bagerier föredrar surdeg för långjästa bröd.',
		},
		{
			type: 'paragraph',
			html: 'Vår omvandlare förenklar matematiken så att du kan fokusera på din teknik och smakutveckling.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
