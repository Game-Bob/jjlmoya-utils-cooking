import type { ToolLocaleContent } from '../../../types';

const title = 'Backform Umrechner Skalierung für Konditorei';
const description =
	'Passen Sie jedes Backrezept an Ihre Formen an. Berechnen Sie automatisch den Umrechnungsfaktor für runde, quadratische und rechteckige Formen mit professioneller Präzision.';

const faq = [
	{
		question: 'Wie funktioniert der Multiplikationsfaktor genau?',
		answer:
			'Der Faktor ergibt sich aus der Fläche Ihrer Zielform geteilt durch die Fläche der Originalform aus dem Rezept. Wenn das Ergebnis 1,5 ist, multiplizieren Sie jede Zutat mit diesem Wert.',
	},
	{
		question: 'Kann ich eine runde Form in eine quadratische umrechnen?',
		answer:
			'Ja, das Tool nutzt präzise geometrische Formeln, um Oberflächen unabhängig von der Form zu vergleichen. Geben Sie einfach die Maße ein, und das System berechnet die Entsprechung automatisch.',
	},
	{
		question: 'Was ist mit der Höhe der Backformen?',
		answer:
			'Dieses Tool konzentriert sich auf die Grundfläche, den kritischsten Faktor. Wenn Ihre Form deutlich höher oder flacher als das Original ist, müssen Sie die Backzeit eventuell leicht anpassen.',
	},
	{
		question: 'Wie füge ich Zutaten zur Liste hinzu?',
		answer:
			'Klicken Sie auf die Schaltfläche unten, um eine neue Zeile hinzuzufügen. Geben Sie den Namen und das Originalgewicht ein; das skalierte Gewicht wird sofort berechnet.',
	},
];

const howTo = [
	{
		name: 'Originalrezept definieren',
		text: 'Wählen Sie Form und Maße der Backform aus, für die das Rezept ursprünglich geschrieben wurde.',
	},
	{
		name: 'Eigene Form konfigurieren',
		text: 'Geben Sie die Maße Ihrer eigenen Backform ein. Das System berechnet sofort den Umrechnungsfaktor.',
	},
	{
		name: 'Zutatenrechner nutzen',
		text: 'Fügen Sie die Zutaten Ihres Rezepts hinzu, um die exakten Mengen für Ihre Form zu sehen.',
	},
	{
		name: 'Backzeit anpassen',
		text: 'Beachten Sie, dass eine Änderung der Größe meist eine Änderung der Backzeit bedeutet, auch wenn die Temperatur gleich bleibt.',
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
	slug: 'backform-rechner',
	title,
	description,
	faqTitle: 'Häufig gestellte Fragen zur Skalierung',
	bibliographyTitle: 'Quellen und Referenzen',

	ui: {
		originalRecipe: 'Originalrezept',
		yourMold: 'Ihre Form',
		round: 'Rund',
		square: 'Quadratisch',
		rectangular: 'Rechteckig',
		diameter: 'Durchmesser (cm)',
		side: 'Seite (cm)',
		width: 'Breite (cm)',
		length: 'Länge (cm)',
		multiplyingFactor: 'Umrechnungsfaktor',
		equivalentMolds: 'Die Formen sind identisch. Verwenden Sie dieselben Mengen.',
		smallerMold: 'Ihre Form ist kleiner. Multiplizieren Sie die Zutaten mit',
		largerMold: 'Ihre Form ist größer. Multiplizieren Sie die Zutaten mit',
		ingredientCalculator: 'Zutatenrechner',
		addIngredient: 'Zutat hinzufügen',
		ingredient: 'Zutat',
		original: 'Original',
		final: 'Ergebnis',
		exampleIngredient: 'z.B. Mehl',
		delete: 'Löschen',
		originalVisualization: 'Original',
		yourVisualization: 'Ihre Form',
		defaultIngredient1: 'Mehl',
		defaultIngredient2: 'Zucker',
		reduce: 'Reduzieren',
		increase: 'Erhöhen',
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
			text: 'Leitfaden zur Skalierung von Backrezepten',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Das Umrechnen von Rezeptmengen für verschiedene Backformen ist eine grundlegende Aufgabe in der Konditorei. Es geht darum, die <strong>geometrischen Proportionen</strong> zu wahren.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: 'Faktor 20cm zu 25cm',
					icon: 'mdi:resize',
				},
				{
					value: 'πr²',
					label: 'Kreisflächenformel',
					icon: 'mdi:math-compass',
				},
				{
					value: '0.64',
					label: 'Faktor 25cm zu 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: '2/3',
					label: 'Max. Füllhöhe',
					icon: 'mdi:format-vertical-align-top',
				},
			],
		},
		{
			type: 'title',
			text: 'Fehler beim Ändern der Größe',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Lineare Skalierung:</strong> Den Durchmesser zu verdoppeln vervierfacht die Zutatenmenge.',
				'<strong>Höhe ignorieren:</strong> Tiefere Formen brauchen deutlich mehr Zeit im Zentrum.',
				'<strong>Backtriebmittel:</strong> Backpulver muss nicht immer exakt linear mitskaliert werden.',
			],
		},
		{
			type: 'tip',
			html: 'Füllen Sie eine Backform nie mehr als zu 2/3, um ein Überlaufen beim Backen zu verhindern.',
		},
	],
	schemas: [appSchema, faqSchema, howToSchema],
};
