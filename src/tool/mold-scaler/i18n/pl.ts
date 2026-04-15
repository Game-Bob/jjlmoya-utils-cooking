import type { ToolLocaleContent } from '../../../types';

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
			'Kliknij przycisk na dole, aby dodać nowy wiersz. Wpisz nazwę i oryginalną wagę; ostateczna ilość zostanie natychmiast obliczona.',
	},
];

const howTo = [
	{
		name: 'Zdefiniuj formę z przepisu',
		text: 'Wybierz kształt i wymiary formy, dla której oryginalnie został opracowany przepis.',
	},
	{
		name: 'Skonfiguruj własną formę',
		text: 'Wprowadź wymiary formy, którą masz w domu. System natychmiast obliczy współczynnik konwersji.',
	},
	{
		name: 'Użyj kalkulatora składników',
		text: 'Dodaj składniki swojego przepisu, aby zobaczyć dokładne ilości potrzebne dla Twojej formy.',
	},
	{
		name: 'Dostosuj pieczenie',
		text: 'Pamiętaj, że zmiana rozmiaru zazwyczaj wiąże się ze zmianą czasu pieczenia, nawet jeśli temperatura pozostaje ta sama.',
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
	slug: 'formy-do-pieczenia',
	title,
	description,
	faqTitle: 'Często Zadawane Pytania o Skalowanie',
	bibliographyTitle: 'Źródła i Referencje',

	ui: {
		originalRecipe: 'Oryginalny Przepis',
		yourMold: 'Twoja Forma',
		round: 'Okrągła',
		square: 'Kwadratowa',
		rectangular: 'Prostokątna',
		diameter: 'Średnica (cm)',
		side: 'Bok (cm)',
		width: 'Szerokość (cm)',
		length: 'Długość (cm)',
		multiplyingFactor: 'Współczynnik Skalowania',
		equivalentMolds: 'Formy są równoważne. Użyj tych samych ilości.',
		smallerMold: 'Twoja forma jest mniejsza. Pomnóż składniki przez',
		largerMold: 'Twoja forma jest większa. Pomnóż składniki przez',
		ingredientCalculator: 'Kalkulator Składników',
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
			text: 'Przewodnik po Skalowaniu Przepisów wg Formy',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Przeliczanie ilości dla innej formy wymaga zachowania <strong>proporcji geometrycznych</strong>, aby utrzymać idealną teksturę.',
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
					value: 'πr²',
					label: 'Wzór na pole koła',
					icon: 'mdi:math-compass',
				},
				{
					value: '0.64',
					label: 'Faktor z 25cm na 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: '2/3',
					label: 'Maks. Wypełnienie',
					icon: 'mdi:format-vertical-align-top',
				},
			],
		},
		{
			type: 'tip',
			html: 'Nigdy nie napełniaj formy więcej niż do 2/3 jej pojemności, niezależnie od obliczonego współczynnika.',
		},
	],
	schemas: [appSchema, faqSchema, howToSchema],
};
