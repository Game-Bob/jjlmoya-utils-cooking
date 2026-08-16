import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calcolatore Pasta Madre Rapporti di Fermentazione";
const description = "Calcola automaticamente le proporzioni di pasta madre, farina e acqua per mantenere il tuo rinfresco. Rapporti predefiniti o personalizzati.";
const faq = [
	{
		question: "Cos'è il rapporto 1:1:1?",
		answer: "È il rapporto più comune per mantenere la pasta madre a temperatura ambiente. Significa 1 parte di pasta madre, 1 parte di farina e 1 parte di acqua. Utile per rinfreschi giornalieri.",
	},
	{
		question: "Quando uso 1:2:2?",
		answer: "Il rapporto 1:2:2 serve per attivare la pasta madre. Genera una fermentazione più lenta ma prevedibile. Ideale se conservi il lievito in frigo e vuoi rinvigorirlo.",
	},
	{
		question: 'Cos\'è lo "sweet spot" 1:5:5?',
		answer: 'Il rapporto 1:5:5 è lo "sweet spot" per molti panificatori. Permette 8-12 ore di fermentazione a temperatura ambiente prima che la pasta madre sia pronta.',
	},
	{
		question: "Posso usare rapporti personalizzati?",
		answer: "Assolutamente. Se hai un protocollo specifico, puoi inserire i tuoi rapporti. Alcuni usano 1:10:10 per una fermentazione lentissima.",
	},
	{
		question: "Il calcolatore arrotonda i grammi?",
		answer: "Sì. Arrotonda al numero intero più vicino per praticità. Piccole differenze di arrotondamento non influenzano significativamente la fermentazione.",
	},
];
const howTo = [
	{
		name: "Inserisci la quantità totale necessaria",
		text: "Definisci il peso totale di pasta madre richiesto per la tua ricetta (es: 300g per un pane tipico).",
	},
	{
		name: "Seleziona il rapporto di rinfresco",
		text: "Scegli tra i rapporti predefiniti (Mantenimento, Attivazione, Ritardo, Forte, Sweet Spot) o creane uno personalizzato.",
	},
	{
		name: "Ottieni le quantità esatte",
		text: "Il calcolatore ti mostra quanto lievito madre, farina e acqua ti servono. Mescola e lascia fermentare.",
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
	slug: 'calcolatore-rinfresco-pasta-madre',
	title,
	description,
	faqTitle: 'Domande Frequenti',
	faq,
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Guida Maestro per il Mantenimento e Rinfresco della Pasta Madre',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'La <strong>pasta madre</strong> è un ecosistema vivo di lieviti selvaggi e batteri lattici (LAB). La chiave di un pane eccezionale risiede nella salute di questo lievito.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '24-26°C',
					label: 'Temp. Ottimale',
					icon: 'mdi:thermometer',
				},
				{
					value: '3.8 - 4.2',
					label: 'pH Ideale',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: 'Idratazione Std.',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: 'Crescita al Picco',
					icon: 'mdi:trending-up',
				},
			],
		},
		{
			type: 'title',
			text: 'Confronto tra i Tipi di Lievito Madre',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Lievito Liquido (Licoli 100% Idr.)',
					icon: 'mdi:water',
					description: 'La scelta più diffusa nella panificazione moderna. Facile da rinfrescare e incorporare.',
					points: [
						'Fermentazione più rapida',
						'Profilo aromatico più lattico (delicato)',
						'Facile da misurare',
						'Ideale per baguette e pani da tavola',
					],
				},
				{
					title: 'Pasta Madre Solida (50% Idr.)',
					icon: 'mdi:bread-slice-outline',
					description: 'Tradizionale nella grande lievitazione italiana. Grande forza strutturale.',
					highlight: true,
					points: [
						'Fermentazione più lenta e stabile',
						'Profilo aromatico più acetico',
						'Maggiore spinta per impasti ricchi',
						'Ideale per Panettone e Colomba',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Comprendere i Rapporti Matematici di Rinfresco',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Il rapporto indica le parti di inoculo rispetto a Farina e Acqua. Ad esempio 1:2:2 significa 1 parte di lievito per 2 parti di farina e 2 di acqua.',
		},
		{
			type: 'table',
			headers: ['Rapporto', 'Uso Consigliato', 'Tempo Stimato (24°C)', 'Vantaggio Principale'],
			rows: [
				['1:1:1', 'Mantenimento giornaliero', '4-6 ore', 'Rinfresco rapido'],
				['1:2:2', 'Attivazione pre-impasto', '6-8 ore', 'Bilanciamento acidità'],
				['1:5:5', 'Impasto standard', '8-12 ore', 'Picco prevedibile'],
				['1:10:10', 'Conservazione prolungata', '16-24 ore', 'Gestione orari flessibile'],
			],
		},
		{
			type: 'title',
			text: 'Scelta della Farina per il Rinfresco',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Farina Integrale di Segale',
					icon: 'mdi:grain',
					description: 'Un superalimento per i lieviti selvaggi. Ricca di nutrimento ed enzimi.',
					points: [
						'Attività fermentativa esplosiva',
						'Apporta aromi profondi e rustici',
						'Mantiene stabile l\'acidità',
					],
				},
				{
					title: 'Farina Tipo 0 / 00',
					icon: 'mdi:shaker-outline',
					description: 'Ideale per chi cerca un aroma più delicato dove il lievito non domina sul pane.',
					points: [
						'Gusto più neutro e versatile',
						'Ottima visibilità delle bolle',
						'Meno soggetta a sovrafermentazione',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Segnali di una Pasta Madre Affamata',
			html: 'Se in superficie si forma un liquido scuro (liquore/hooch), odora fortemente di aceto o acetone o crolla subito dopo il picco, richiede un rapporto di rinfresco più alto.',
		},
		{
			type: 'title',
			text: 'Glossario Tecnico della Panificazione',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Lievito/Prefermento',
					definition: 'Pre-impasto preparato dalla madre destinato a uno specifico pane.',
				},
				{
					term: 'Hooch (Liquore di fermentazione)',
					definition: 'Strato alcolico che si crea quando la coltura ha esaurito gli zuccheri.',
				},
				{
					term: 'Picco di Attività',
					definition: 'Il momento di massima espansione e densità di lieviti vive. Momento ideale per impastare.',
				},
				{
					term: 'Batteri Lattici (LAB)',
					definition: 'Microorganismi responsabili della produzione di acidi organici che donano sapore e conservabilità.',
				},
			],
		},
		{
			type: 'tip',
			title: 'Il Test del Galleggiamento',
			html: 'Per verificare se la pasta madre è pronta, fa cadere un cucchiaino in un bicchiere d\'acqua: se galleggia, contiene abbastanza CO2.',
		},
		{
			type: 'paragraph',
			html: 'Usare il nostro calcolatore ti permette di standardizzare il processo di panificazione e comprendere la biologia del pane.',
		},
	],
	ui: {
		totalAmount: 'Quantità Finale',
		refreshRatio: 'Rapporto di Rinfresco',
		maintain: 'Mantenimento',
		activate: 'Attivazione',
		retard: 'Ritardo',
		strong: 'Forte',
		sweetSpot: 'Sweet Spot',
		custom: 'Personalizzato',
		sourdough: 'Pasta Madre',
		activeCulture: 'Lievito attivo',
		flour: 'Farina',
		flourType: 'Forza o Integrale',
		water: 'Acqua',
		chlorineFree: 'Senza cloro',
		todayFormula: 'Formula di Oggi',
		hydration: 'Idratazione 100 %',
		totalDough: 'Totale Impasto',
		mm: 'PM',
	},
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
