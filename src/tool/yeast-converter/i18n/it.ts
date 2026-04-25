import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Convertitore di Lievito: Fresco, Secco e Pasta Madre';
const description =
	'Converti con precisione tra lievito fresco, lievito secco e pasta madre. Ottieni le regolazioni della ricetta necessarie quando usi la pasta madre per mantenere una perfetta idratazione.';

const faq = [
	{
		question: 'Qual è la differenza tra lievito fresco e secco?',
		answer:
			'Il lievito fresco contiene circa il 70% di acqua, mentre quello secco ne contiene circa l\'8%. Il fattore di conversione è: 1 parte di lievito secco equivale a 3 parti di lievito fresco. Il lievito secco è più potente e stabile, il che lo rende ideale per la conservazione a lungo termine.',
	},
	{
		question: 'Quanta pasta madre mi serve?',
		answer:
			'La pasta madre è solitamente al 100% di idratazione (parti uguali di farina e acqua). Per sostituire 1g di lievito fresco, servono 5g di pasta madre (rapporto 1:5). Regola sempre la tua ricetta sottraendo la farina e l\'acqua già presenti nella pasta madre.',
	},
	{
		question: 'Perché devo regolare la mia ricetta per la pasta madre?',
		answer:
			'La pasta madre contiene sia lievito che farina e acqua. Aggiungendola, stai inserendo ingredienti extra nella tua ricetta. Devi sottrarre la quantità equivalente di farina e acqua dal totale per mantenere la corretta idratazione e struttura.',
	},
	{
		question: 'Posso usare il lievito istantaneo al posto del lievito secco attivo?',
		answer:
			'Il lievito istantaneo è un tipo di lievito secco macinato finemente. Il rapporto di conversione rimane lo stesso: 1:3 tra secco e fresco. Il lievito istantaneo può richiedere leggermente meno liquido a causa della sua finezza.',
	},
];

const howTo = [
	{
		name: 'Seleziona il tipo di lievito',
		text: 'Scegli il tipo di lievito che hai a disposizione: Fresco (in panetto), Secco (istantaneo o attivo) o Pasta Madre (idratazione 100%).',
	},
	{
		name: 'Inserisci la quantità',
		text: 'Inserisci la quantità in grammi. Sii preciso per ottenere i migliori risultati: usa una bilancia da cucina se possibile.',
	},
	{
		name: 'Applica le conversioni',
		text: 'Lo strumento mostra le quantità equivalenti per i tre tipi. Se converti in pasta madre, sottrai la farina e l\'acqua dalla tua ricetta.',
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
	slug: 'convertitore-lievito-fresco-secco-pasta-madre',
	title,
	description,
	ui: {
		selectYeastType: 'Seleziona tipo di lievito',
		freshYeast: 'Lievito Fresco (Panetto)',
		dryYeast: 'Lievito Secco (Istantaneo)',
		sourdough: 'Pasta Madre (100%)',
		enterAmount: 'Inserisci quantità',
		quantity: 'Quantità',
		grams: 'Grammi (g)',
		ounces: 'Once (oz)',
		pounds: 'Libbre (lb)',
		milligrams: 'Milligrammi (mg)',
		reset: 'Resetta',
		conversions: 'Conversioni',
		copy: 'Copia',
		copied: 'Copiato!',
		recipeAdjustment: 'Regolazione Ricetta',
		flourSubtract: 'Sottrai farina:',
		waterSubtract: 'Sottrai acqua:',
	},
	faqTitle: 'Domande Frequenti',
	faq,
	bibliographyTitle: 'Bibliografia e Risorse',
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Formule di Conversione del Lievito e Guida Scientifica',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'La <strong>conversione del lievito</strong> è essenziale per la costanza nei risultati. Sia che tu stia sostituendo il lievito commerciale con la pasta madre, sia che tu stia adattando tra varietà fresche e secche, comprendere i rapporti esatti garantisce una fermentazione affidabile.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'Rapporto Secco/Fresco',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: 'Fresco/Pasta Madre',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: 'Acqua nel Fresco',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: 'Acqua nel Secco',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: 'Tipi di Agenti Lievitanti e loro Proprietà',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Lievito Fresco (in Panetto)',
					icon: 'mdi:cube',
					description: 'Cellule di lievito vive sospese in amido e umidità.',
					points: [
						'Potenza: 100% (riferimento)',
						'Durata: 2-3 settimane in frigo',
						'Contenuto d\'acqua: ~70%',
						'Ideale per: Professionisti, uso immediato',
					],
				},
				{
					title: 'Lievito Secco (Istantaneo)',
					icon: 'mdi:spray-bottle',
					description: 'Cellule di lievito essiccate, più concentrate del fresco.',
					points: [
						'Potenza: 3x lievito fresco',
						'Durata: 1-2 anni sigillato',
						'Contenuto d\'acqua: ~8%',
						'Ideale per: Uso domestico, lunga conservazione',
					],
				},
				{
					title: 'Pasta Madre',
					icon: 'mdi:flask-outline',
					description: 'Cultura di lieviti naturali e batteri al 100% di idratazione.',
					highlight: true,
					points: [
						'Potenza: 1 parte = 5 parti di lievito fresco',
						'Durata: Illimitata con cura costante',
						'Contenuto d\'acqua: 50% (parti uguali di farina)',
						'Ideale per: Aromi complessi, fermentazione lenta',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Rapporti di Conversione e Formula Matematica',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Lievito Origine', 'Lievito Destinazione', 'Formula di Conversione', 'Esempio'],
			rows: [
				['Lievito Fresco', 'Lievito Secco', 'Fresco ÷ 3 = Secco', '30g Fresco = 10g Secco'],
				['Lievito Secco', 'Lievito Fresco', 'Secco × 3 = Fresco', '10g Secco = 30g Fresco'],
				['Lievito Fresco', 'Pasta Madre (100%)', 'Fresco × 5 = Pasta Madre', '20g Fresco = 100g Starter'],
				['Pasta Madre (100%)', 'Lievito Fresco', 'Pasta Madre ÷ 5 = Fresco', '100g Starter = 20g Fresco'],
				['Lievito Secco', 'Pasta Madre (100%)', 'Secco × 15 = Pasta Madre', '10g Secco = 150g Starter'],
				['Pasta Madre (100%)', 'Lievito Secco', 'Pasta Madre ÷ 15 = Secco', '150g Starter = 10g Secco'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Critico: Regolazione della ricetta per la pasta madre',
			html: 'Quando sostituisci il lievito con la pasta madre, DEVI regolare la tua ricetta. La pasta madre contiene il 50% di farina e il 50% di acqua. Se la conversione richiede 100g di starter, sottrai 50g di farina e 50ml di acqua dalla tua ricetta per mantenere l\'idratazione corretta.',
		},
		{
			type: 'title',
			text: 'Caratteristiche della Fermentazione per Tipo di Lievito',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Tipo di Lievito', 'Velocità Fermentazione', 'Sviluppo Aromi', 'Produzione CO₂'],
			rows: [
				['Lievito Fresco', 'Rapida (2-3 ore)', 'Da neutro a delicato', 'Alta e rapida'],
				['Lievito Secco', 'Media (3-4 ore)', 'Leggermente più complesso', 'Costante'],
				['Pasta Madre', 'Lenta (8-48 ore)', 'Complesso, pungente', 'Graduale, prolungata'],
			],
		},
		{
			type: 'tip',
			title: 'Consiglio Pro: Regolazioni della Temperatura',
			html: 'La fermentazione a freddo con pasta madre (2-4°C per 8-16 ore) sviluppa aromi e struttura superiori. Per questo i professionisti preferiscono la pasta madre per i pani a lunga fermentazione.',
		},
		{
			type: 'paragraph',
			html: 'Il nostro convertitore semplifica i calcoli in modo che tu possa concentrarti sul perfezionamento della tecnica e del sapore.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
