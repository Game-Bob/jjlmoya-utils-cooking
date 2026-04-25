import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Przelicznik drożdży: Świeże, suszone i zakwas';
const description =
	'Precyzyjnie przeliczaj ilości między drożdżami świeżymi, suszonymi a zakwasem. Otrzymaj korekty przepisu przy użyciu zakwasu, aby zachować idealne nawodnienie.';

const faq = [
	{
		question: 'Jaka jest różnica między drożdżami świeżymi a suszonymi?',
		answer:
			'Drożdże świeże zawierają około 70% wody, podczas gdy suszone około 8%. Współczynnik konwersji wynosi: 1 część drożdży suszonych odpowiada 3 częściom świeżych. Drożdże suszone są mocniejsze i trwalsze, co czyni je idealnymi do dłuższego przechowywania.',
	},
	{
		question: 'Ile zakwasu potrzebuję?',
		answer:
			'Zakwas ma domyślnie 100% nawodnienia (równe części mąki i wody). Aby zastąpić 1g drożdży świeżych, potrzebujesz 5g zakwasu (stosunek 1:5). Zawsze koryguj przepis, odejmując mąkę i wodę zawartą w zakwasie od całkowitej ilości.',
	},
	{
		question: 'Dlaczego muszę korygować przepis przy użyciu zakwasu?',
		answer:
			'Zakwas zawiera zarówno drożdże, jak i mąkę oraz wodę. Dodając go, wprowadzasz dodatkowe składniki do przepisu. Musisz odjąć równoważną ilość mąki i wody, aby utrzymać prawidłowe nawodnienie i strukturę ciasta.',
	},
	{
		question: 'Czy mogę użyć drożdży instant zamiast aktywnych drożdży suszonych?',
		answer:
			'Drożdże instant to rodzaj drożdży suszonych o bardzo drobnym ziarnie. Współczynnik przeliczania pozostaje ten sam: 1:3 względem świeżych. Drożdże instant mogą wymagać nieco mniej płynu ze względu na swoją formę.',
	},
];

const howTo = [
	{
		name: 'Wybierz rodzaj drożdży',
		text: 'Wybierz typ drożdży, którymi dysponujesz: Świeże (w kostce), Suszone (instant lub aktywne) lub Zakwas (100% nawodnienia).',
	},
	{
		name: 'Wprowadź ilość',
		text: 'Podaj ilość w gramach. Bądź precyzyjny — jeśli to możliwe, użyj wagi kuchennej.',
	},
	{
		name: 'Zastosuj przeliczenie',
		text: 'Narzędzie pokaże ekwiwalent dla wszystkich trzech typów. Jeśli wybierzesz zakwas, odejmij odpowiednią ilość mąki i wody z przepisu.',
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
	slug: 'przelicznik-drozdzy-swieze-suszone-zakwas',
	title,
	description,
	ui: {
		selectYeastType: 'Wybierz rodzaj drożdży',
		freshYeast: 'Drożdże świeże (Kostka)',
		dryYeast: 'Drożdże suszone (Instant)',
		sourdough: 'Zakwas (100%)',
		enterAmount: 'Wprowadź ilość',
		quantity: 'Ilość',
		grams: 'Gramy (g)',
		ounces: 'Uncje (oz)',
		pounds: 'Funty (lb)',
		milligrams: 'Miligramy (mg)',
		reset: 'Resetuj',
		conversions: 'Przeliczenia',
		copy: 'Kopiuj',
		copied: 'Skopiowano!',
		recipeAdjustment: 'Korekta przepisu',
		flourSubtract: 'Odejmij mąkę:',
		waterSubtract: 'Odejmij wodę:',
	},
	faqTitle: 'Często zadawane pytania',
	faq,
	bibliographyTitle: 'Bibliografia i źródła',
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Formuły przeliczania drożdży i przewodnik naukowy',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Przeliczanie drożdży</strong> jest kluczowe dla powtarzalności wypieków. Niezależnie od tego, czy zastępujesz drożdże komercyjne zakwasem, czy przechodzisz ze świeżych na suszone, zrozumienie dokładnych proporcji gwarantuje udaną fermentację.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'Suszone do świeżych',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: 'Świeże do zakwasu',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: 'Woda w świeżych',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: 'Woda w suszonych',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: 'Rodzaje środków spulchniających i ich właściwości',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Drożdże świeże (Kostka)',
					icon: 'mdi:cube',
					description: 'Żywe komórki drożdży zawieszone w skrobi i wilgoci.',
					points: [
						'Siła: 100% (odniesienie)',
						'Trwałość: 2-3 tygodnie w lodówce',
						'Zawartość wody: ~70%',
						'Najlepsze dla: Profesjonalistów, szybkich wypieków',
					],
				},
				{
					title: 'Drożdże suszone (Instant)',
					icon: 'mdi:spray-bottle',
					description: 'Wysuszone komórki drożdży, bardziej skoncentrowane niż świeże.',
					points: [
						'Siła: 3x drożdże świeże',
						'Trwałość: 1-2 lata (zamknięte)',
						'Zawartość wody: ~8%',
						'Najlepsze dla: Domowych piekarzy, długie przechowywanie',
					],
				},
				{
					title: 'Zakwas',
					icon: 'mdi:flask-outline',
					description: 'Dzika kultura drożdży i bakterii o 100% nawodnieniu.',
					highlight: true,
					points: [
						'Siła: 1 część = 5 części świeżych drożdży',
						'Trwałość: Nieograniczona przy odpowiedniej opiece',
						'Zawartość wody: 50% (równe części mąki)',
						'Najlepsze dla: Złożonego smaku, wolnej fermentacji',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Proporcje przeliczania i formuła matematyczna',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Drożdże źródłowe', 'Drożdże docelowe', 'Formuła przeliczania', 'Przykład'],
			rows: [
				['Świeże', 'Suszone', 'Świeże ÷ 3 = Suszone', '30g świeżych = 10g suszonych'],
				['Suszone', 'Świeże', 'Suszone × 3 = Świeże', '10g suszonych = 30g świeżych'],
				['Świeże', 'Zakwas (100%)', 'Świeże × 5 = Zakwas', '20g świeżych = 100g zakwasu'],
				['Zakwas (100%)', 'Świeże', 'Zakwas ÷ 5 = Świeże', '100g zakwasu = 20g świeżych'],
				['Suszone', 'Zakwas (100%)', 'Suszone × 15 = Zakwas', '10g suszonych = 150g zakwasu'],
				['Zakwas (100%)', 'Suszone', 'Zakwas ÷ 15 = Suszone', '150g zakwasu = 10g suszonych'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Ważne: Korekta przepisu dla zakwasu',
			html: 'Zastępując drożdże zakwasem, MUSISZ skorygować przepis. Zakwas składa się w 50% z mąki i w 50% z wody. Jeśli Twoje przeliczenie wymaga 100g zakwasu, odejmij 50g mąki i 50ml wody z oryginalnego przepisu.',
		},
		{
			type: 'title',
			text: 'Charakterystyka fermentacji wg rodzaju drożdży',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Rodzaj drożdży', 'Prędkość fermentacji', 'Rozwój smaku', 'Produkcja CO₂'],
			rows: [
				['Świeże', 'Szybka (2-3 h)', 'Neutralny do łagodnego', 'Wysoka i gwałtowna'],
				['Suszone', 'Średnia (3-4 h)', 'Nieco bardziej złożony', 'Stała'],
				['Zakwas', 'Wolna (8-48 h)', 'Złożony, kwaskowaty', 'Stopniowa, długotrwała'],
			],
		},
		{
			type: 'tip',
			title: 'Porada eksperta: Korekty temperatury',
			html: 'Fermentacja na zimno z zakwasem (2-4°C przez 8-16 godzin) rozwija lepszy smak i strukturę niż fermentacja na ciepło. Dlatego profesjonalne piekarnie wybierają zakwas do chlebów długo fermentujących.',
		},
		{
			type: 'paragraph',
			html: 'Nasz przelicznik upraszcza matematykę, abyś mógł skupić się na doskonaleniu techniki i smaku swojego pieczywa.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
