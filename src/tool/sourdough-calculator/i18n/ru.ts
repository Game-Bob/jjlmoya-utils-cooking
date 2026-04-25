import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Калькулятор закваски: пропорции ферментации";
const description = "Автоматический расчет пропорций закваски, муки и воды для поддержания вашей культуры. Предустановленные или пользовательские соотношения.";
const faq = [
	{
		question: 'Что такое соотношение 1:1:1?',
		answer: 'Это самое распространенное соотношение для поддержания закваски при комнатной температуре. Означает 1 часть закваски, 1 часть муки и 1 часть воды. Полезно при ежедневном освежении.',
	},
	{
		question: 'Когда использовать 1:2:2?',
		answer: 'Соотношение 1:2:2 используется для активации закваски. Оно обеспечивает более медленную, но предсказуемую ферментацию. Идеально, если культура хранилась в холоде.',
	},
	{
		question: 'Что такое "sweet spot" 1:5:5?',
		answer: 'Соотношение 1:5:5 — это "золотая середина" для многих пекарей. Оно позволяет ферментировать закваску 8-12 часов при комнатной температуре до достижения пика.',
	},
	{
		question: 'Можно ли использовать свои пропорции?',
		answer: 'Конечно. Если у вас есть специфический протокол, вы можете ввести свои данные. Некоторые пекари используют 1:10:10 для очень долгой ферментации.',
	},
];
const howTo = [
	{
		name: 'Введите общее необходимое количество',
		text: 'Укажите общий вес закваски, который требуется по вашему рецепту (например, 300 г для обычного хлеба).',
	},
	{
		name: 'Выберите пропорцию освежения',
		text: 'Выберите предустановленное соотношение (Поддержка, Активация, Замедление, Сила, Sweet Spot) или создайте свое.',
	},
	{
		name: 'Получите точные веса',
		text: 'Калькулятор покажет, сколько закваски-стартера, муки и воды вам нужно. Смешайте и оставьте бродить.',
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
	slug: 'zakvaska',
	title,
	description,
	faqTitle: 'Часто задаваемые вопросы',
	faq,  howTo,
	seo: [
		{
			type: 'title',
			text: 'Руководство мастера по поддержке и освежению закваски',
			level: 2,
		},
		{
			type: 'paragraph',
			html: '<strong>Закваска</strong> — это не просто ингредиент, а живая экосистема диких дрожжей и молочнокислых бактерий. Здоровье этой культуры — ключ к превосходному хлебу.',
		},
	],
	ui: {
		totalAmount: 'Общее количество',
		refreshRatio: 'Пропорция освежения',
		maintain: 'Поддержка',
		activate: 'Активация',
		retard: 'Замедление',
		strong: 'Сила',
		sweetSpot: 'Sweet Spot',
		custom: 'Свое',
		sourdough: 'Закваска',
		activeCulture: 'Активный стартер',
		flour: 'Мука',
		flourType: ' Сильная или цельнозерновая',
		water: 'Вода',
		chlorineFree: 'Без хлора',
		todayFormula: 'Формула на сегодня',
		hydration: 'Гидратация 100 %',
		totalDough: 'Всего закваски',
		mm: 'ЗК',
	},
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
