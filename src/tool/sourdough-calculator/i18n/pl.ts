import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Kalkulator Zakwasu Proporcje Fermentacji";
const description = "Automatycznie oblicz proporcje zakwasu, mąki i wody, aby utrzymać swoją kulturę. Proporcje predefiniowane lub własne.";
const faq = [
	{
		question: 'Co oznacza proporcja 1:1:1?',
		answer: 'To najczęstsza proporcja do utrzymania zakwasu w temperaturze pokojowej. Oznacza 1 część zakwasu, 1 część mąki i 1 część wody. Pomocna przy codziennym odświeżaniu.',
	},
	{
		question: 'Kiedy użyć 1:2:2?',
		answer: 'Proporcja 1:2:2 służy do aktywacji zakwasu. Zapewnia wolniejszą, ale bardziej przewidywalną fermentację. Idealna, gdy przechowujesz kulturę w zimnie.',
	},
	{
		question: 'Co to jest "sweet spot" 1:5:5?',
		answer: 'Proporcja 1:5:5 to "złoty środek" dla wielu piekarzy. Pozwala na 8-12 godzin fermentacji w temperaturze pokojowej przed osiągnięciem szczytu aktywności.',
	},
	{
		question: 'Czy mogę użyć własnych proporcji?',
		answer: 'Oczywiście. Jeśli masz konkretny protokół, możesz wpisać własne dane. Niektórzy piekarze używają 1:10:10 do bardzo długiej fermentacji.',
	},
];
const howTo = [
	{
		name: 'Wpisz całkowitą ilość, której potrzebujesz',
		text: 'Określ całkowitą wagę zakwasu wymaganą w przepisie (np. 300g dla typowego chleba).',
	},
	{
		name: 'Wybierz proporcję dokarmiania',
		text: 'Wybierz spośród predefiniowanych proporcji (Utrzymanie, Aktywacja, Opóźnienie, Silny, Sweet Spot) lub stwórz własną.',
	},
	{
		name: 'Otrzymaj dokładne ilości',
		text: 'Kalkulator pokaże Ci, ile zakwasu-startera, mąki i wody potrzebujesz. Wymieszaj i pozostaw do fermentacji.',
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
	offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
};

export const content: ToolLocaleContent = {
	slug: 'zakwas',
	title,
	description,
	faqTitle: 'Często zadawane pytania',
	faq,  howTo,
	seo: [
		{
			type: 'title',
			text: 'Mistrzowski przewodnik po utrzymaniu i dokarmianiu zakwasu',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Zakwas</strong> to nie tylko składnik, to żywy ekosystem dzikich drożdży i bakterii kwasu mlekowego (LAB). Klucz do doskonałego chleba tkwi w zdrowiu tej kultury.',
		},
	],
	ui: {
		totalAmount: 'Ilość Końcowa',
		refreshRatio: 'Proporcja dokarmiania',
		maintain: 'Utrzymanie',
		activate: 'Aktywacja',
		retard: 'Opóźnienie',
		strong: 'Silny',
		sweetSpot: 'Sweet Spot',
		custom: 'Własny',
		sourdough: 'Zakwas',
		activeCulture: 'Aktywny starter',
		flour: 'Mąka',
		flourType: 'Typ lub Pełnoziarnista',
		water: 'Woda',
		chlorineFree: 'Bez chloru',
		todayFormula: 'Dzisiejsza formuła',
		hydration: 'Hydracja 100 %',
		totalDough: 'Cały zakwas',
		mm: 'ZK',
	},
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
