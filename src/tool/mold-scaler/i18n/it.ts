import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calcolatore per Adattare Stampi da Pasticceria';
const description =
	'Adatta qualsiasi ricetta di pasticceria ai tuoi stampi. Calcola automaticamente il fattore di conversione per stampi rotondi, quadrati e rettangolari con precisione professionale.';

const faq = [
	{
		question: 'Come funziona esattamente il fattore di moltiplicazione?',
		answer:
			'Il fattore si ottiene dividendo l\'area del tuo stampo obiettivo per l\'area dello stampo della ricetta originale. Se il risultato è 1.5, devi moltiplicare ogni ingrediente per quella cifra.',
	},
	{
		question: 'Posso convertire uno stampo rotondo in uno quadrato?',
		answer:
			'Sì, lo strumento utilizza formule geometriche precise per confrontare le superfici indipendentemente dalla forma. Inserisci le misure e il sistema farà l\'equivalenza automaticamente.',
	},
	{
		question: 'Cosa succede con l\'altezza degli stampi?',
		answer:
			'Questo strumento si concentra sull\'area della base. Se il tuo stampo è significativamente più alto o basso dell\'originale, potresti aver bisogno di un piccolo aggiustamento nel tempo di cottura.',
	},
	{
		question: 'Come aggiungo ingredienti alla lista?',
		answer:
			'Clicca sul pulsante in basso per aggiungere una nuova riga. Scrivi il nome e il peso originale; la colonna finale si aggiornerà istantaneamente con la quantità scalata.',
	},
	{
		question: 'La conversione è affidabile per teglie molto grandi?',
		answer:
			'Matematicamente sì, ma considera che torte molto grandi richiedono più tempo per cuocere al centro. Potrebbe essere necessario abbassare leggermente la temperatura del forno.',
	},
];

const howTo = [
	{
		name: 'Definisci lo stampo della ricetta',
		text: 'Seleziona la forma e le dimensioni dello stampo originale per cui è stata pensata la ricetta.',
	},
	{
		name: 'Configura il tuo stampo',
		text: 'Inserisci le misure dello stampo che hai a casa. Il sistema calcolerà immediatamente il fattore di conversione.',
	},
	{
		name: 'Usa il calcolatore di ingredienti',
		text: 'Aggiungi gli ingredienti della tua ricetta per vedere esattamente quanto ti serve per il nuovo stampo.',
	},
	{
		name: 'Adatta i tempi di cottura',
		text: 'Ricorda che cambiare dimensione dello stampo richiede spesso di adeguare il tempo di cottura.',
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
	slug: 'convertitore-stampi-pasticceria',
	title,
	description,
	faqTitle: 'Domande Frequenti',
	ui: {
		originalMold: 'Stampo Ricetta Originale',
		yourMold: 'Tuo Stampo Obiettivo',
		shape: 'Forma dello Stampo',
		diameter: 'Diametro',
		side: 'Lato',
		width: 'Larghezza',
		length: 'Lunghezza',
		unit: 'Unità',
		cm: 'cm',
		inches: 'pollici',
		round: 'Rotondo',
		square: 'Quadrato',
		rectangular: 'Rettangolare',
		resultTitle: 'Risultato della Conversione',
		originalArea: 'Area Originale',
		yourArea: 'Tua Area',
		multiplyingFactor: 'Fattore di Conversione',
		equivalentMolds: 'Gli stampi sono equivalenti. Usa le stesse quantità.',
		smallerMold: 'Il tuo stampo è più piccolo. Riduci gli ingredienti moltiplicandoli per',
		largerMold: 'Il tuo stampo è più grande. Aumenta gli ingredienti moltiplicandoli per',
		ingredientCalculator: 'Calcolatore Peso Ingredienti',
		addIngredient: 'Aggiungi Ingrediente',
		ingredient: 'Ingrediente',
		original: 'Originale',
		final: 'Finale',
		exampleIngredient: 'Es. Farina',
		delete: 'Elimina',
		originalVisualization: 'Originale',
		yourVisualization: 'Tuo',
		defaultIngredient1: 'Farina',
		defaultIngredient2: 'Zucchero',
		reduce: 'Riduci',
		increase: 'Aumenta',
	},

	faq,
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Guida Avanzata per Adattare le Ricette allo Stampo',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Convertire le quantità di una ricetta per uno stampo diverso richiede di rispettare le <strong>proporzioni geometriche</strong> per mantenere consistenza, altezza e umidità ideali.',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: 'Il Segreto dell\'Area della Base',
			html: 'Il segreto di un adattamento perfetto risiede nell\'area della base, non nel diametro. Un aumento del 25% del diametro raddoppia quasi l\'area totale.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: 'Fattore da 20cm a 25cm',
					icon: 'mdi:resize',
				},
				{
					value: 'x2.25',
					label: 'Fattore da 15cm a 22.5cm',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: 'Fattore da 25cm a 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: 'πr²',
					label: 'Formula area circolare',
					icon: 'mdi:math-compass',
				},
			],
		},
		{
			type: 'title',
			text: 'Confronto Forme ed Efficienza di Cottura',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Stampi Rotondi',
					icon: 'mdi:circle-outline',
					description: 'Lo standard di pasticceria. Offrono una cottura uniforme dal bordo al centro.',
					points: [
						'Distribuzione calore ottimale',
						'Ideali per pan di spagna alti',
						'Calcolati tramite il raggio',
					],
				},
				{
					title: 'Stampi Quadrati',
					icon: 'mdi:square-outline',
					description: 'Permettono il massimo uso dello spazio nel forno. Ideali per brownies.',
					highlight: true,
					points: [
						'Cottura più rapida degli angoli',
						'Facili da porzionare',
						'Calcolati Lato x Lato',
					],
				},
				{
					title: 'Stampi Rettangolari',
					icon: 'mdi:rectangle-outline',
					description: 'Perfetti per torte da trancio. Richiedono controllo del centro.',
					points: [
						'Capacità totale elevata',
						'Uso multiuso',
						'Calcolati Larghezza x Lunghezza',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Matematica del Calcolo delle Superfici',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Per calcolare il fattore di conversione corretto, confrontiamo le aree della base usando queste formule:',
		},
		{
			type: 'table',
			headers: ['Forma Stampo', 'Formula Area', 'Considerazione Chiave'],
			rows: [
				['Circolare', 'π × Raggio²', 'Il raggio è metà del diametro'],
				['Quadrato', 'Lato × Lato', 'Solo misure interne'],
				['Rettangolare', 'Larghezza × Lunghezza', 'Standard per torte in teglia'],
			],
		},
		{
			type: 'title',
			text: 'Errori Comuni nel Cambio di Dimensione dello Stampo',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Adattamento lineare:</strong> Raddoppiare il diametro quadruplica gli ingredienti, non li raddoppia.',
				'<strong>Ignorare l\'altezza:</strong> Stampi profondi richiedono più tempo a temperatura inferiore.',
				'<strong>Lievito:</strong> Il lievito chimico non sempre richiede un adattamento perfettamente lineare.',
				'<strong>Evaporazione:</strong> Piccole dosi possono asciugarsi più velocemente.',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Limite di Capacità dello Stampo',
			html: 'Non riempire mai uno stampo oltre i 2/3 della sua capacità, indipendentemente dal fattore calcolato.',
		},
		{
			type: 'title',
			text: 'Glossario di Conversione',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Fattore di Conversione',
					definition: 'Il numero per cui moltiplicare tutti gli ingredienti per adattarli al nuovo stampo.',
				},
				{
					term: 'Superficie della Base',
					definition: 'La misura dell\'area della base dello stampo.',
				},
				{
					term: 'Raggio',
					definition: 'La distanza dal centro al bordo di un cerchio.',
				},
				{
					term: 'Trasferimento di Calore',
					definition: 'Come l\'energia termica si muove nello stampo in base a forma e materiale.',
				},
			],
		},
		{
			type: 'tip',
			html: 'Quando si passa a uno stampo molto più grande, usa fasce isolanti per teglie per una cottura uniforme al centro.',
		},
		{
			type: 'paragraph',
			html: 'Padroneggiare l\'adattamento degli stampi ti offre totale libertà in cucina. Usa questo calcolatore per risultati professionali costanti.',
		},
	],
	bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
