import type { ToolLocaleContent } from '../../../types';

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
		text: 'Aggiungi gli ingredienti della tua ricetta per vedere le quantità esatte necessarie per il tuo stampo.',
	},
	{
		name: 'Regola la cottura',
		text: 'Ricorda che un cambio di dimensioni implica spesso una variazione nel tempo di cottura, anche se la temperatura resta la stessa.',
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
	slug: 'stampi',
	title,
	description,
	faqTitle: 'Domande Frequenti sull\'Adattamento',
	bibliographyTitle: 'Fonti e Riferimenti',

	ui: {
		originalRecipe: 'Ricetta Originale',
		yourMold: 'Tuo Stampo',
		round: 'Rotondo',
		square: 'Quadrato',
		rectangular: 'Rettangolare',
		diameter: 'Diametro (cm)',
		side: 'Lato (cm)',
		width: 'Larghezza (cm)',
		length: 'Lunghezza (cm)',
		multiplyingFactor: 'Fattore Multiplicatore',
		equivalentMolds: 'Gli stampi sono equivalenti. Usa le stesse quantità.',
		smallerMold: 'Il tuo stampo è più piccolo. Moltiplica gli ingredienti per',
		largerMold: 'Il tuo stampo è più grande. Moltiplica gli ingredienti per',
		ingredientCalculator: 'Calcolatore Ingredienti',
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
			text: 'Guida per Adattare le Ricette allo Stampo',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Convertire le quantità di una ricetta per uno stampo diverso richiede di rispettare le <strong>proporzioni geometriche</strong> per mantenere consistenza e cottura ideali.',
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
					value: 'πr²',
					label: 'Formula area circolare',
					icon: 'mdi:math-compass',
				},
				{
					value: '0.64',
					label: 'Fattore da 25cm a 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: '2/3',
					label: 'Capacità Max',
					icon: 'mdi:format-vertical-align-top',
				},
			],
		},
		{
			type: 'tip',
			html: 'Non riempire mai uno stampo oltre i 2/3 della sua capacità, indipendentemente dal fattore calcolato.',
		},
	],
	schemas: [appSchema, faqSchema, howToSchema],
};
