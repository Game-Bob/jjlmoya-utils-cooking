import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Massa Mãe Rátios de Fermentação";
const description = "Calcula automaticamente as proporções de massa mãe, farinha e água para manter o teu cultivo. Rátios predefinidos ou personalizados.";
const faq = [
	{
		question: 'O que é o rátio 1:1:1?',
		answer: 'É o rátio mais comum para manter a massa mãe à temperatura ambiente. Significa 1 parte de massa mãe, 1 parte de farinha e 1 parte de água. Útil para refrescos diários.',
	},
	{
		question: 'Quando uso 1:2:2?',
		answer: 'O rátio 1:2:2 serve para ativar a massa mãe. Gera uma fermentação mais lenta mas previsível. Ideal se guardas o cultivo no frio e queres revigorá-lo.',
	},
	{
		question: 'Qual é o "sweet spot" 1:5:5?',
		answer: 'O rátio 1:5:5 é o "sweet spot" para muitos padeiros. Permite 8-12 horas de fermentação à temperatura ambiente antes de a massa mãe estar pronta.',
	},
	{
		question: 'Posso usar rátios personalizados?',
		answer: 'Absolutamente. Se tens um protocolo específico, podes inserir os teus próprios rátios. Alguns padeiros usam 1:10:10 para fermentação muito lenta.',
	},
];
const howTo = [
	{
		name: 'Insere a quantidade total que precisas',
		text: 'Define o peso total de massa mãe que requeres para a tua receita (ex: 300g para um pão típico).',
	},
	{
		name: 'Seleciona o rátio de refresco',
		text: 'Escolhe entre os rátios predefinidos (Manter, Activar, Retardar, Forte, Sweet Spot) ou cria um personalizado.',
	},
	{
		name: 'Obtém as quantidades exactas',
		text: 'A calculadora mostra-te quanto de massa mãe, farinha e água precisas. Mistura e deixa fermentar.',
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
	slug: 'massa-mae',
	title,
	description,
	faqTitle: 'Perguntas Frequentes',
	faq,  howTo,
	seo: [
		{
			type: 'title',
			text: 'Guia Mestre para a Manutenção e Refresco da Massa Mãe',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'A <strong>massa mãe</strong> é um ecossistema vivo de leveduras selvagens e bactérias lácticas (LAB). A chave de um pão excepcional reside na saúde deste cultivo.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '24-26°C',
					label: 'Temp. Actividade Óptima',
					icon: 'mdi:thermometer',
				},
				{
					value: '3.8 - 4.2',
					label: 'pH Ideal',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: 'Hidratação Std.',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: 'Crescimento no Pico',
					icon: 'mdi:trending-up',
				},
			],
		},
	],
	ui: {
		totalAmount: 'Quantidade Final',
		refreshRatio: 'Rátio de Refresco',
		maintain: 'Manter',
		activate: 'Activar',
		retard: 'Retardar',
		strong: 'Forte',
		sweetSpot: 'Sweet Spot',
		custom: 'Custom',
		sourdough: 'Massa Mãe',
		activeCulture: 'Cultivo activo',
		flour: 'Farinha',
		flourType: 'Força ou Integral',
		water: 'Água',
		chlorineFree: 'Sem cloro',
		todayFormula: 'Fórmula de Hoje',
		hydration: 'Hidratação 100 %',
		totalDough: 'Total Massa',
		mm: 'MM',
	},
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
