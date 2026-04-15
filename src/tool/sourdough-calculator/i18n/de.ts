import type { ToolLocaleContent } from '../../../types';

const title = "Sauerteig Rechner: Fermentationsverhältnisse";
const description = "Berechnen Sie automatisch die Proportionen von Sauerteig, Mehl und Wasser zur Pflege Ihres Ansatzes. Vordefinierte oder benutzerdefinierte Verhältnisse.";
const faq = [
	{
		question: 'Was bedeutet das Verhältnis 1:1:1?',
		answer: 'Es ist das gängigste Verhältnis für die Pflege bei Raumtemperatur. Es bedeutet 1 Teil Sauerteig, 1 Teil Mehl und 1 Teil Wasser. Sinnvoll bei täglicher Auffrischung.',
	},
	{
		question: 'Wann nutze ich 1:2:2?',
		answer: 'Das Verhältnis 1:2:2 dient der Aktivierung. Es sorgt für eine langsamere, aber vorhersehbare Fermentation. Ideal, wenn der Ansatz kühl gelagert wurde.',
	},
	{
		question: 'Was ist der "Sweet Spot" 1:5:5?',
		answer: 'Das Verhältnis 1:5:5 ist für viele Bäcker der ideale Punkt. Es ermöglicht 8-12 Stunden Fermentation bei Raumtemperatur, bevor der Sauerteig einsatzbereit ist.',
	},
	{
		question: 'Kann ich benutzerdefinierte Verhältnisse verwenden?',
		answer: 'Absolut. Wenn Sie ein spezielles Protokoll haben, können Sie Ihre eigenen Werte eingeben, z.B. 1:10:10 für eine sehr langsame Fermentation.',
	},
];
const howTo = [
	{
		name: 'Benötigte Gesamtmenge eingeben',
		text: 'Geben Sie das Gesamtgewicht des Sauerteigs an, das Sie für Ihr Rezept benötigen (z.B. 300g für ein typisches Brot).',
	},
	{
		name: 'Auffrischungsverhältnis wählen',
		text: 'Wählen Sie aus den vordefinierten Verhältnissen (Pflegen, Aktivieren, Verzögern, Stark, Sweet Spot) oder erstellen Sie ein eigenes.',
	},
	{
		name: 'Exakte Mengen erhalten',
		text: 'Der Rechner zeigt Ihnen, wie viel Anstellgut, Mehl und Wasser Sie benötigen. Mischen Sie diese und lassen Sie sie fermentieren.',
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
	slug: 'sauerteig',
	title,
	description,
	faqTitle: 'Häufig gestellte Fragen',
	faq,
	bibliographyTitle: 'Bibliografie',
	bibliography: [
		{
			name: 'Tartine Bread - Chad Robertson',
			url: 'https://www.penguinrandomhouse.com/books/310016/tartine-bread-by-chad-robertson/',
		},
	],
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Meisterleitfaden für die Pflege und Auffrischung von Sauerteig',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Sauerteig</strong> ist nicht nur eine Zutat, sondern ein lebendiges Ökosystem aus wilden Hefen und Milchsäurebakterien (LAB). Die Gesundheit dieses Ansatzes ist der Schlüssel zu exzellentem Brot.',
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
					label: 'Idealer pH-Wert',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: 'Std. Hydratation',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: 'Wachstum im Peak',
					icon: 'mdi:trending-up',
				},
			],
		},
	],
	ui: {
		totalAmount: 'Gesamtmenge',
		refreshRatio: 'Auffrischungsverhältnis',
		maintain: 'Pflegen',
		activate: 'Aktivieren',
		retard: 'Verzögern',
		strong: 'Stark',
		sweetSpot: 'Sweet Spot',
		custom: 'Benutzerdefiniert',
		sourdough: 'Sauerteig',
		activeCulture: 'Aktives Anstellgut',
		flour: 'Mehl',
		flourType: 'Type oder Vollkorn',
		water: 'Wasser',
		chlorineFree: 'Chlorfrei',
		todayFormula: 'Heutige Formel',
		hydration: '100% Hydratation',
		totalDough: 'Gesamtgewicht',
		mm: 'ASG',
	},
	schemas: [faqSchema, howToSchema, appSchema],
};
