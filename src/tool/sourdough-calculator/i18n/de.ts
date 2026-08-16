import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

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
	{
		question: 'Rundet der Rechner die Grammangaben ab?',
		answer: 'Ja. Er rundet aus praktischen Gründen auf die nächste ganze Zahl. Kleine Rundungsdifferenzen beeinträchtigen die Fermentation nicht spürbar.',
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
	faq,  howTo,
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
		{
			type: 'title',
			text: 'Vergleich verschiedener Sauerteig-Kulturen',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Flüssiger Sauerteig (100% Hydr.)',
					icon: 'mdi:water',
					description: 'Die am weitesten verbreitete Form im modernen handwerklichen Backen. Leicht zu mischen.',
					points: [
						'Schnellere Fermentation',
						'Milder, milchsaurer Geschmack',
						'Einfach zu messen und aufzufrischen',
						'Ideal für Baguettes und Landbrote',
					],
				},
				{
					title: 'Fester Sauerteig (Pasta Madre)',
					icon: 'mdi:bread-slice-outline',
					description: 'Traditionell in Italien. Hydratation liegt meist bei ca. 50%. Sehr triebstark.',
					highlight: true,
					points: [
						'Langsamer und stabiler',
						'Essigsaureres Geschmacksprofil',
						'Hohe Triebkraft für schwere Teige',
						'Ideal für Panettone und Brioche',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Mathematische Auffrischungsverhältnisse verstehen',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Das Verhältnis gibt den Anteil von Anstellgut (ASG) zu Mehl und Wasser an. 1:2:2 bedeutet 1 Teil ASG auf 2 Teile Mehl und 2 Teile Wasser.',
		},
		{
			type: 'table',
			headers: ['Verhältnis', 'Empfohlene Nutzung', 'Geschätzte Zeit (24°C)', 'Hauptvorteil'],
			rows: [
				['1:1:1', 'Tägliche Fütterung', '4-6 Stunden', 'Schnelle Pflege'],
				['1:2:2', 'Aktivierung vor dem Backen', '6-8 Stunden', 'Ausgewogene Säure'],
				['1:5:5', 'Standard-Backansatz', '8-12 Stunden', 'Vorhersehbarer Peak'],
				['1:10:10', 'Verzögerte Fütterung', '16-24 Stunden', 'Flexibler Zeitplan'],
			],
		},
		{
			type: 'title',
			text: 'Mehlwahl für die Sauerteigfütterung',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Roggenvollkornmehl',
					icon: 'mdi:grain',
					description: 'Nahrung pur für wilde Hefen. Enthält mehr Nährstoffe und Enzyme als Weizen.',
					points: [
						'Explosive Fermentationsaktivität',
						'Bringt tiefe, erdige Aromen',
						'Hält den Säuregehalt stabil',
					],
				},
				{
					title: 'Weizenmehl Type 550',
					icon: 'mdi:shaker-outline',
					description: 'Ideal für alle, die ein mildes Aroma suchen, bei dem der Sauerteig das Brot nicht dominiert.',
					points: [
						'Neutralerer und vielseitiger Geschmack',
						'Sehr gute Sichtbarkeit der Bläschen',
						'Neigt weniger zur Überfermentation',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Anzeichen für einen hungrigen Sauerteig',
			html: 'Wenn sich eine dunkle Flüssigkeit (Fusel) bildet, der Ansatz stark nach Essig oder Aceton riecht oder nach dem Peak schnell zusammenfällt, benötigt er ein höheres Fütterungsverhältnis.',
		},
		{
			type: 'title',
			text: 'Technisches Sauerteig-Glossar',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Levain',
					definition: 'Ein aus der Mutterkultur angesetzter Vorteig für ein konkretes Brot-Rezept.',
				},
				{
					term: 'Fusel (Hooch)',
					definition: 'Eine Alkoholschicht, die entsteht, wenn die Nahrung aufgebraucht ist. Harmlos, zeigt aber Hunger an.',
				},
				{
					term: 'Aktivitätspeak',
					definition: 'Der Zeitpunkt maximaler Volumen- und Hefedichte. Der ideale Zeitpunkt zum Verbacken.',
				},
				{
					term: 'Milchsäurebakterien (LAB)',
					definition: 'Mikroorganismen, die organische Säuren bilden und für Geschmack und Haltbarkeit sorgen.',
				},
			],
		},
		{
			type: 'tip',
			title: 'Der Schwimmtest',
			html: 'Um zu prüfen, ob der Sauerteig backbereit ist, gib einen Teelöffel in ein Glas Wasser. Schwimmt er oben, enthält er genug CO2.',
		},
		{
			type: 'paragraph',
			html: 'Mit unserem Rechner standardisieren Sie Ihren Backprozess und verstehen die Biologie Ihres Brotes besser.',
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
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
