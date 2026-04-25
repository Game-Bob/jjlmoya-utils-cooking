import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Hefe Umrechner: Frischhefe, Trockenhefe & Sauerteig';
const description =
	'Rechnen Sie präzise zwischen Frischhefe, Trockenhefe und Sauerteig-Starter um. Erhalten Sie Rezeptanpassungen bei der Verwendung von Sauerteig, um die perfekte Hydratation beizubehalten.';

const faq = [
	{
		question: 'Was ist der Unterschied zwischen Frischhefe und Trockenhefe?',
		answer:
			'Frischhefe besteht zu etwa 70 % aus Wasser, während Trockenhefe etwa 8 % enthält. Der Umrechnungsfaktor ist: 1 Teil Trockenhefe entspricht 3 Teilen Frischhefe. Trockenhefe ist potenter und länger haltbar, was sie ideal für die Vorratshaltung macht.',
	},
	{
		question: 'Wie viel Sauerteig-Starter benötige ich?',
		answer:
			'Sauerteig-Starter hat standardmäßig eine Hydratation von 100 % (gleiche Teile Mehl und Wasser). Um 1 g Frischhefe zu ersetzen, benötigen Sie 5 g Starter (Verhältnis 1:5). Passen Sie Ihr Rezept immer an, indem Sie das Mehl und Wasser aus dem Starter abziehen.',
	},
	{
		question: 'Warum muss ich mein Rezept bei Sauerteig anpassen?',
		answer:
			'Sauerteig-Starter enthält sowohl Hefe als auch Mehl und Wasser. Wenn Sie ihn hinzufügen, geben Sie zusätzliche Zutaten in Ihr Rezept. Sie müssen die entsprechende Menge Mehl und Wasser von der Gesamtmenge abziehen, um die korrekte Hydratation und Struktur zu erhalten.',
	},
	{
		question: 'Kann ich Instant-Hefe anstelle von aktiver Trockenhefe verwenden?',
		answer:
			'Instant-Hefe ist eine Art von Trockenhefe, die feiner gemahlen ist. Das Umrechnungsverhältnis von 1:3 zwischen Trocken- und Frischhefe bleibt gleich. Instant-Hefe benötigt aufgrund der feinen Partikelgröße oft geringfügig weniger Flüssigkeit.',
	},
];

const howTo = [
	{
		name: 'Hefe-Typ auswählen',
		text: 'Wählen Sie die Hefeart, die Sie zur Verfügung haben: Frischhefe (Würfelhefe), Trockenhefe (Instant oder aktiv) oder Sauerteig-Starter (100 % Hydratation).',
	},
	{
		name: 'Menge eingeben',
		text: 'Geben Sie die Menge in Gramm ein. Seien Sie präzise für beste Ergebnisse – verwenden Sie nach Möglichkeit eine Küchenwaage.',
	},
	{
		name: 'Umrechnung anwenden',
		text: 'Das Tool zeigt Ihnen die entsprechenden Mengen für alle drei Typen an. Wenn Sie auf Sauerteig umrechnen, ziehen Sie Mehl und Wasser von Ihrem Rezept ab.',
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
	slug: 'hefe-umrechner-frischhefe-trockenhefe-sauerteig',
	title,
	description,
	ui: {
		selectYeastType: 'Hefe-Typ wählen',
		freshYeast: 'Frischhefe (Würfel)',
		dryYeast: 'Trockenhefe (Instant)',
		sourdough: 'Sauerteig-Starter (100%)',
		enterAmount: 'Menge eingeben',
		quantity: 'Menge',
		grams: 'Gramm (g)',
		ounces: 'Unzen (oz)',
		pounds: 'Pfund (lb)',
		milligrams: 'Milligramm (mg)',
		reset: 'Zurücksetzen',
		conversions: 'Umrechnungen',
		copy: 'Kopieren',
		copied: 'Kopiert!',
		recipeAdjustment: 'Rezeptanpassung',
		flourSubtract: 'Mehl abziehen:',
		waterSubtract: 'Wasser abziehen:',
	},
	faqTitle: 'Häufig gestellte Fragen',
	faq,
	bibliographyTitle: 'Bibliografie & Ressourcen',
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Hefe-Umrechnungsformeln & wissenschaftlicher Leitfaden',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Die <strong>Hefe-Umrechnung</strong> ist entscheidend für gleichbleibende Backergebnisse. Egal, ob Sie kommerzielle Hefe durch Sauerteig ersetzen oder zwischen frischen und trockenen Sorten wechseln, das Verständnis der exakten Verhältnisse sichert eine zuverlässige Fermentation.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'Verhältnis Trocken zu Frisch',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: 'Frisch zu Sauerteig',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: 'Wasser in Frischhefe',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: 'Wasser in Trockenhefe',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: 'Arten von Triebmitteln & ihre Eigenschaften',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Frischhefe (Würfelhefe)',
					icon: 'mdi:cube',
					description: 'Lebende Hefezellen in einer Mischung aus Stärke und Feuchtigkeit.',
					points: [
						'Triebkraft: 100 % (Basis)',
						'Haltbarkeit: 2-3 Wochen gekühlt',
						'Wassergehalt: ~70 %',
						'Ideal für: Profi-Bäcker, sofortiger Einsatz',
					],
				},
				{
					title: 'Trockenhefe (Instant)',
					icon: 'mdi:spray-bottle',
					description: 'Getrocknete Hefezellen, konzentrierter als Frischhefe.',
					points: [
						'Triebkraft: 3x Frischhefe',
						'Haltbarkeit: 1-2 Jahre ungeöffnet',
						'Wassergehalt: ~8 %',
						'Ideal für: Hobbybäcker, Vorratshaltung',
					],
				},
				{
					title: 'Sauerteig Starter',
					icon: 'mdi:flask-outline',
					description: 'Wilde Hefe- und Bakterienkultur bei 100 % Hydratation.',
					highlight: true,
					points: [
						'Triebkraft: 1 Teil = 5 Teile Frischhefe',
						'Haltbarkeit: Bei Pflege unbegrenzt',
						'Wassergehalt: 50 % (gleiche Teile Mehl)',
						'Ideal für: Komplexes Aroma, lange Gärung',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Umrechnungsverhältnisse & mathematische Formel',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Ausgangshefe', 'Zielhefe', 'Umrechnungsformel', 'Beispiel'],
			rows: [
				['Frischhefe', 'Trockenhefe', 'Frisch ÷ 3 = Trocken', '30g Frisch = 10g Trocken'],
				['Trockenhefe', 'Frischhefe', 'Trocken × 3 = Frisch', '10g Trocken = 30g Frisch'],
				['Frischhefe', 'Sauerteig (100%)', 'Frisch × 5 = Sauerteig', '20g Frisch = 100g Starter'],
				['Sauerteig (100%)', 'Frischhefe', 'Sauerteig ÷ 5 = Frisch', '100g Starter = 20g Frisch'],
				['Trockenhefe', 'Sauerteig (100%)', 'Trocken × 15 = Sauerteig', '10g Trocken = 150g Starter'],
				['Sauerteig (100%)', 'Trockenhefe', 'Sauerteig ÷ 15 = Trocken', '150g Starter = 10g Trocken'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Wichtig: Rezeptanpassung für Sauerteig',
			html: 'Wenn Sie Hefe durch Sauerteig ersetzen, MÜSSEN Sie Ihr Rezept anpassen. Sauerteig besteht zu 50 % aus Mehl und 50 % aus Wasser. Wenn Ihre Umrechnung 100 g Starter ergibt, ziehen Sie 50 g Mehl und 50 ml Wasser von Ihrem Rezept ab.',
		},
		{
			type: 'title',
			text: 'Fermentationseigenschaften nach Hefetyp',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Hefetyp', 'Gärgeschwindigkeit', 'Aromaentwicklung', 'CO₂-Produktion'],
			rows: [
				['Frischhefe', 'Schnell (2-3 Std.)', 'Neutral bis mild', 'Hoch und rasant'],
				['Trockenhefe', 'Mittel (3-4 Std.)', 'Etwas komplexer', 'Beständig'],
				['Sauerteig', 'Langsam (8-48 Std.)', 'Komplex, säuerlich', 'Allmählich, anhaltend'],
			],
		},
		{
			type: 'tip',
			title: 'Pro Tipp: Temperaturanpassungen',
			html: 'Kalte Gärung mit Sauerteig (2-4°C für 8-16 Stunden) entwickelt ein überlegenes Aroma und eine bessere Struktur. Deshalb bevorzugen Profi-Bäckereien Sauerteig für lang geführte Brote.',
		},
		{
			type: 'paragraph',
			html: 'Unser Umrechner vereinfacht die Mathematik, damit Sie sich auf Ihre Backtechnik und den Geschmack konzentrieren können.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
