import type { ToolLocaleContent } from '../../../types';

const title = 'Калькулятор масштабирования форм для выпечки';
const description =
	'Адаптируйте любой рецепт под ваши формы. Автоматический расчет коэффициента конверсии для круглых, квадратных и прямоугольных форм с профессиональной точностью.';

const faq = [
	{
		question: 'Как именно работает коэффициент масштабирования?',
		answer:
			'Коэффициент получается путем деления площади вашей целевой формы на площадь формы из оригинального рецепта. Если результат 1.5, значит, нужно умножить количество каждого ингредиента на это число.',
	},
	{
		question: 'Можно ли пересчитать круглую форму в квадратную?',
		answer:
			'Да, инструмент использует точные геометрические формулы для сравнения площадей независимо от формы. Просто введите размеры, и система сама сделает расчет.',
	},
	{
		question: 'Что делать с высотой форм?',
		answer:
			'Этот инструмент ориентирован на площадь дна. Если ваша форма значительно выше или ниже оригинала, вам может потребоваться небольшая корректировка времени выпечки.',
	},
	{
		question: 'Как добавить ингредиенты в список?',
		answer:
			'Нажмите кнопку внизу, чтобы добавить новую строку. Введите название и оригинальный вес; итоговое количество обновится мгновенно.',
	},
];

const howTo = [
	{
		name: 'Определите форму из рецепта',
		text: 'Выберите форму и размеры емкости, для которой изначально написан рецепт.',
	},
	{
		name: 'Настройте свою форму',
		text: 'Введите размеры формы, которая есть у вас дома. Система мгновенно рассчитает коэффициент.',
	},
	{
		name: 'Используйте калькулятор ингредиентов',
		text: 'Добавьте ингредиенты вашего рецепта, чтобы увидеть точные количества для вашей формы.',
	},
	{
		name: 'Скорректируйте выпечку',
		text: 'Помните, что изменение размера обычно влечет за собой изменение времени выпечки, даже если температура остается прежней.',
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
	slug: 'formi-dlya-vipechki',
	title,
	description,
	faqTitle: 'Часто задаваемые вопросы о масштабировании',
	bibliographyTitle: 'Источники и рекомендации',

	ui: {
		originalRecipe: 'Оригинальный рецепт',
		yourMold: 'Ваша форма',
		round: 'Круглая',
		square: 'Квадратная',
		rectangular: 'Прямоугольная',
		diameter: 'Диаметр (см)',
		side: 'Сторона (см)',
		width: 'Ширина (см)',
		length: 'Длина (см)',
		multiplyingFactor: 'Коэффициент умножения',
		equivalentMolds: 'Формы эквивалентны. Используйте те же количества.',
		smallerMold: 'Ваша форма меньше. Умножьте ингредиенты на',
		largerMold: 'Ваша форма больше. Умножьте ингредиенты на',
		ingredientCalculator: 'Калькулятор ингредиентов',
		addIngredient: 'Добавить ингредиент',
		ingredient: 'Ингредиент',
		original: 'Оригинал',
		final: 'Итог',
		exampleIngredient: 'Напр. Мука',
		delete: 'Удалить',
		originalVisualization: 'Оригинал',
		yourVisualization: 'Ваша',
		defaultIngredient1: 'Мука',
		defaultIngredient2: 'Сахар',
		reduce: 'Уменьшить',
		increase: 'Увеличить',
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
			text: 'Руководство по пересчету рецептов под разные формы',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Пересчет ингредиентов для другой формы требует соблюдения <strong>геометрических пропорций</strong> для сохранения идеальной текстуры.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: 'С 20см на 25см',
					icon: 'mdi:resize',
				},
				{
					value: 'πr²',
					label: 'Площадь круга',
					icon: 'mdi:math-compass',
				},
				{
					value: '0.64',
					label: 'С 25см на 20см',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: '2/3',
					label: 'Макс. заполнение',
					icon: 'mdi:format-vertical-align-top',
				},
			],
		},
		{
			type: 'tip',
			html: 'Никогда не заполняйте форму более чем на 2/3 объема, независимо от расчетов.',
		},
	],
	schemas: [appSchema, faqSchema, howToSchema],
};
