import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Kalkulator Skalowania Form do Pieczenia';
const description =
	'Dostosuj dowolny przepis cukierniczy do swoich form. Automatycznie obliczaj współczynnik konwersji dla form okrągłych, kwadratowych i prostokątnych z profesjonalną precyzją.';

const faq = [
	{
		question: 'Jak dokładnie działa współczynnik skalowania?',
		answer:
			'Współczynnik otrzymuje się, dzieląc pole powierzchni formy docelowej przez pole powierzchni formy z oryginalnego przepisu. Jeśli wynik wynosi 1.5, oznacza to, że należy pomnożyć każdy składnik przez tę liczbę.',
	},
	{
		question: 'Czy mogę przeliczyć formę okrągłą na kwadratową?',
		answer:
			'Tak, narzędzie wykorzystuje precyzyjne wzory geometryczne do porównywania powierzchni bez względu na kształt. Wystarczy wprowadzić wymiary, a system automatycznie dokona obliczeń.',
	},
	{
		question: 'Co z wysokością form?',
		answer:
			'To narzędzie skupia się na powierzchni dna. Jeśli Twoja forma jest znacznie wyższa lub niższa od oryginalnej, możesz potrzebować niewielkiej korekty czasu pieczenia.',
	},
	{
		question: 'Jak dodać składniki do listy?',
		answer:
			'Kliknij przycisk poniżej, aby dodać nowy wiersz. Wpisz nazwę i wagę oryginalną; przeliczona waga pojawi się natychmiast.',
	},
	{
		question: 'Czy przelicznik jest niezawodny dla bardzo dużych blach?',
		answer:
			'Matematycznie tak, ale pamiętaj, że bardzo duże ciasta potrzebują więcej czasu na upieczenie w środku. Może być konieczne lekkie obniżenie temperatury.',
	},
];

const howTo = [
	{
		name: 'Określ oryginalną formę z przepisu',
		text: 'Wybierz kształt i wymiary formy, dla której przepis został pierwotnie stworzony.',
	},
	{
		name: 'Skonfiguruj swoją formę',
		text: 'Wprowadź wymiary formy, którą dysponujesz. System natychmiast obliczy przelicznik.',
	},
	{
		name: 'Użyj przelicznika wag składników',
		text: 'Dodaj składniki ze swojego przepisu, aby zobaczyć dokładne ilości potrzebne do nowej formy.',
	},
	{
		name: 'Dostosuj czas pieczenia',
		text: 'Pamiętaj, że zmiana rozmiaru formy zazwyczaj wymaga dostosowania czasu w piekarniku.',
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
	slug: 'przelicznik-form-do-pieczenia',
	title,
	description,
	faqTitle: 'Często Zadawane Pytania',
	ui: {
		originalMold: 'Forma z Przepisu',
		yourMold: 'Twoja Forma Docelowa',
		shape: 'Kształt Formy',
		diameter: 'Średnica',
		side: 'Bok',
		width: 'Szerokość',
		length: 'Długość',
		unit: 'Jednostka',
		cm: 'cm',
		inches: 'cale',
		round: 'Okrągła',
		square: 'Kwadratowa',
		rectangular: 'Prostokątna',
		resultTitle: 'Wynik Przeliczenia',
		originalArea: 'Powierzchnia Oryginalna',
		yourArea: 'Twoja Powierzchnia',
		multiplyingFactor: 'Współczynnik Przeliczeniowy',
		equivalentMolds: 'Formy są równe. Użyj tych samych ilości.',
		smallerMold: 'Twoja forma jest mniejsza. Zmniejsz składniki mnożąc je przez',
		largerMold: 'Twoja forma jest większa. Zwiększ składniki mnożąc je przez',
		ingredientCalculator: 'Przelicznik Wagi Składników',
		addIngredient: 'Dodaj Składnik',
		ingredient: 'Składnik',
		original: 'Oryginał',
		final: 'Wynik',
		exampleIngredient: 'Np. Mąka',
		delete: 'Usuń',
		originalVisualization: 'Oryginał',
		yourVisualization: 'Twoja',
		defaultIngredient1: 'Mąka',
		defaultIngredient2: 'Cukier',
		reduce: 'Zmniejsz',
		increase: 'Zwiększ',
	},

	faq,
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Zaawansowany Przewodnik po Skalowaniu Przepisów wg Formy',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Przeliczanie ilości dla innej formy wymaga zachowania <strong>proporcji geometrycznych</strong>, aby utrzymać idealną teksturę, wysokość i wilgotność wypieku.',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: 'Tajemnica Powierzchni Dna',
			html: 'Tajemnica prawidłowego przeliczania tkwi w powierzchni dna, a nie w średnicy. Zwiększenie średnicy o 25% niemal podwaja całkowitą powierzchnię.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: 'Faktor z 20cm na 25cm',
					icon: 'mdi:resize',
				},
				{
					value: 'x2.25',
					label: 'Faktor z 15cm na 22.5cm',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: 'Faktor z 25cm na 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: 'πr²',
					label: 'Wzór na pole koła',
					icon: 'mdi:math-compass',
				},
			],
		},
		{
			type: 'title',
			text: 'Porównanie Kształtów i Efektywność Pieczenia',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Formy Okrągłe',
					icon: 'mdi:circle-outline',
					description: 'Standard w cukiernictwie. Zapewniają bardzo równomierne pieczenie od brzegu do środka.',
					points: [
						'Optymalny rozkład ciepła',
						'Idealne do wysokich biszkoptów',
						'Obliczane na podstawie promienia',
					],
				},
				{
					title: 'Formy Kwadratowe',
					icon: 'mdi:square-outline',
					description: 'Maksymalne wykorzystanie przestrzeni piekarnika. Idealne do brownies.',
					highlight: true,
					points: [
						'Szybsze pieczenie rogów',
						'Łatwe do porcjowania',
						'Obliczane Bok x Bok',
					],
				},
				{
					title: 'Formy Prostokątne',
					icon: 'mdi:rectangle-outline',
					description: 'Doskonałe do dużych ciast z blachy. Wymagają kontroli środka.',
					points: [
						'Największa pojemność całkowita',
						'Wielozadaniowe zastosowanie',
						'Obliczane Szerokość x Długość',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Matematyka Przeliczania Powierzchni',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Aby obliczyć prawidłowy współczynnik, porównujemy powierzchnie dna za pomocą wzorów:',
		},
		{
			type: 'table',
			headers: ['Kształt Formy', 'Wzór na Pole', 'Kluczowa Uwaga'],
			rows: [
				['Okrągła', 'π × Promień²', 'Promień to połowa średnicy'],
				['Kwadratowa', 'Bok × Bok', 'Tylko wymiary wewnętrzne'],
				['Prostokątna', 'Szerokość × Długość', 'Standard dla ciast z blachy'],
			],
		},
		{
			type: 'title',
			text: 'Częste Błędy przy Zmianie Rozmiaru Formy',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Przeliczanie liniowe:</strong> Podwojenie średnicy nie podwaja składników; zwiększa je czterokrotnie.',
				'<strong>Ignorowanie wysokości:</strong> Głębokie formy wymagają dłuższego pieczenia w niższej temperaturze.',
				'<strong>Proszek do pieczenia:</strong> Proszek nie zawsze wymaga ściśle liniowego zwiększenia.',
				'<strong>Odparowywanie:</strong> Mniejsze porcje mogą szybciej wysychać.',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Limit Pojemności Formy',
			html: 'Nigdy nie napełniaj formy więcej niż do 2/3 jej pojemności, niezależnie od obliczonego współczynnika.',
		},
		{
			type: 'title',
			text: 'Słowniczek Pojęć Przeliczeniowych',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Współczynnik Przeliczeniowy',
					definition: 'Liczba, przez którą należy pomnożyć wszystkie składniki.',
				},
				{
					term: 'Powierzchnia Dna',
					definition: 'Wymiar powierzchni podstawy formy.',
				},
				{
					term: 'Promień',
					definition: 'Odległość od środka do brzegu koła.',
				},
				{
					term: 'Przekazywanie Ciepła',
					definition: 'Sposób przemieszczania się energii cieplnej w formie w zależności od materiału.',
				},
			],
		},
		{
			type: 'tip',
			html: 'Przy zmianie na znacznie większą formę użyj opasek izolacyjnych, aby zapewnić równomierne pieczenie.',
		},
		{
			type: 'paragraph',
			html: 'Opanowanie przeliczania form daje pełną swobodę w kuchni. Użyj tego kalkulatora do profesjonalnych rezultatów.',
		},
	],
	bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
