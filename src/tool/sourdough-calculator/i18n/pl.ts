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
	{
		question: 'Czy kalkulator zaokrągla gramy?',
		answer: 'Tak. Zaokrągla do najbliższej liczby całkowitej dla wygody. Małe różnice zaokrągleń nie wpływają znacząco na fermentację.',
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
	slug: 'kalkulator-zakwasu-chlebowego',
	title,
	description,
	faqTitle: 'Często zadawane pytania',
	faq,
	howTo,
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
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '24-26°C',
					label: 'Optymalna Temp.',
					icon: 'mdi:thermometer',
				},
				{
					value: '3.8 - 4.2',
					label: 'Idealne pH',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: 'Std. Hydracja',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: 'Wzrost w Szczycie',
					icon: 'mdi:trending-up',
				},
			],
		},
		{
			type: 'title',
			text: 'Porównanie Rodzajów Zakwasu',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Zakwas Płynny (100% Hydr.)',
					icon: 'mdi:water',
					description: 'Najpopularniejszy wybór we współczesnym piekarnictwie rzemieślniczym. Łatwy w mieszaniu.',
					points: [
						'Szybsza fermentacja',
						'Łagodniejszy, bardziej mlekowy profil smakowy',
						'Łatwy do odmierzania i dokarmiania',
						'Idealny do bagietek i chlebów pszennych',
					],
				},
				{
					title: 'Zakwas Gęsty (Pasta Madre)',
					icon: 'mdi:bread-slice-outline',
					description: 'Tradycyjny we Włoszech. Hydracja zazwyczaj w granicach 50%. Bardzo silny.',
					highlight: true,
					points: [
						'Wolniejsza i bardziej stabilna fermentacja',
						'Bardziej octowy profil smakowy',
						'Duża siła wyrastania dla ciast bogatych',
						'Idealny do Panettone i Brioche',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Zrozumienie Matematycznych Proporcji Dokarmiania',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Proporcja oznacza części zakwasu matki w stosunku do Mąki i Wody. Np. 1:2:2 oznacza 1 część zakwasu na 2 części mąki i 2 części wody.',
		},
		{
			type: 'table',
			headers: ['Proporcja', 'Zalecane Zastosowanie', 'Szacowany Czas (24°C)', 'Główna Zaleta'],
			rows: [
				['1:1:1', 'Codzienne dokarmianie', '4-6 godzin', 'Szybka pielęgnacja'],
				['1:2:2', 'Aktywacja przed pieczeniem', '6-8 godzin', 'Równowaga kwasowości'],
				['1:5:5', 'Standardowe użycie do chleba', '8-12 godzin', 'Przewidywalny szczyt'],
				['1:10:10', 'Długie opóźnienie', '16-24 godzin', 'Elastyczny harmonogram'],
			],
		},
		{
			type: 'title',
			text: 'Wybór Mąki do Dokarmiania Zakwasu',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Mąka Żytnia Razowa',
					icon: 'mdi:grain',
					description: 'Super-pożywienie dla dzikich drożdży. Zawiera więcej składników odżywczych niż pszenica.',
					points: [
						'Eksplozywna aktywność fermentacyjna',
						'Daje głębokie, głębokie aromaty',
						'Utrzymuje stabilniejszy poziom kwasowości',
					],
				},
				{
					title: 'Mąka Pszenna Chlebowa',
					icon: 'mdi:shaker-outline',
					description: 'Idealna dla poszukujących łagodniejszego smaku, gdzie zakwas nie dominuje w chlebie.',
					points: [
						'Bardziej neutralny i wszechstronny smak',
						'Bardzo wyraźna obserwacja pęcherzyków',
						'Mniejsza tendencja do przefermentowania',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Oznaki Głodnego Zakwasu',
			html: 'Jeśli na powierzchni pojawi się ciemny płyn (hooch), pachnie intensywnie octem lub acetonem albo szybko opada po szczycie, wymaga wyższej proporcji dokarmiania.',
		},
		{
			type: 'title',
			text: 'Techniczny Słowniczek Zakwasowy',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Levain / Zaczyn',
					definition: 'Zaczyn przygotowany z zakwasu matki przeznaczony do konkretnego wypieku.',
				},
				{
					term: 'Hooch',
					definition: 'Warstwa alkoholu i wody powstająca, gdy kultura wyczerpie pożywienie.',
				},
				{
					term: 'Szczyt Aktywności',
					definition: 'Moment maksymalnej objętości i gęstości drożdży. Idealny czas na mieszanie ciasta.',
				},
				{
					term: 'Bakterie Kwasu Mlekowego (LAB)',
					definition: 'Mikroorganizmy odpowiedzialne za wytwarzanie kwasów organicznych dających smak i świeżość.',
				},
			],
		},
		{
			type: 'tip',
			title: 'Test Pływalności',
			html: 'Aby sprawdzić, czy zakwas jest gotowy, wrzuć łyżeczkę do szklanki z wodą: jeśli unosi się na powierzchni, zawiera wystarczająco dużo CO2.',
		},
		{
			type: 'paragraph',
			html: 'Użycie naszego kalkulatora pozwala ustandaryzować proces wypieku i lepiej zrozumieć biologię chleba.',
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
