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
	slug: 'pasta-madre',
	title,
	description,
	faqTitle: 'Domande Frequenti',
	faq,  howTo,
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
