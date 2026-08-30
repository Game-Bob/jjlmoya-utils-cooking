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
	{
		question: 'A calculadora arredonda os gramas?',
		answer: 'Sim. Arredonda para o número inteiro mais próximo por praticidade. Pequenas diferenças de arredondamento não afectam a fermentação.',
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
	slug: 'calculadora-refresco-massa-mae',
	title,
	description,
	faqTitle: 'Perguntas Frequentes',
	faq,
	howTo,
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
		{
			type: 'title',
			text: 'Comparação de Tipos de Massa Mãe',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Massa Mãe Líquida (100% Hidr.)',
					icon: 'mdi:water',
					description: 'A escolha mais comum na panificação artesanal moderna. Fácil de misturar e incorporar.',
					points: [
						'Fermentação mais rápida',
						'Perfil aromático mais láctico (suave)',
						'Fácil de medir e refrescar',
						'Ideal para baguetes e pães de forma',
					],
				},
				{
					title: 'Massa Mãe Sólida (Pasta Madre)',
					icon: 'mdi:bread-slice-outline',
					description: 'Tradicional em Itália. Hidratação habitualmente perto dos 50%. Muito forte.',
					highlight: true,
					points: [
						'Fermentação mais lenta e estável',
						'Perfil aromático mais acético',
						'Maior impulso para massas ricas',
						'Ideal para Panettone e Brioche',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Compreender os Rátios Matemáticos de Refresco',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'O rátio indica as partes de inóculo relativamente à Farinha e Água. Exemplo: 1:2:2 significa 1 parte de cultivo para 2 partes de farinha e 2 de água.',
		},
		{
			type: 'table',
			headers: ['Rátio', 'Uso Recomendado', 'Tempo Estimado (24°C)', 'Vantagem Principal'],
			rows: [
				['1:1:1', 'Manutenção diária', '4-6 horas', 'Refresco rápido'],
				['1:2:2', 'Ativação pré-panificação', '6-8 horas', 'Equilíbrio de acidez'],
				['1:5:5', 'Uso padrão em pão', '8-12 horas', 'Pico previsível'],
				['1:10:10', 'Retardo de longa duração', '16-24 horas', 'Gestão flexível do tempo'],
			],
		},
		{
			type: 'title',
			text: 'Escolha da Farinha para Alimentar a Massa Mãe',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Farinha Integral de Centeio',
					icon: 'mdi:grain',
					description: 'Um superalimento para leveduras selvagens. Contém mais nutrientes e enzimas.',
					points: [
						'Atividade fermentativa explosiva',
						'Traz aromas profundos e rústicos',
						'Mantém melhor os níveis de acidez',
					],
				},
				{
					title: 'Farinha de Trigo Branca',
					icon: 'mdi:shaker-outline',
					description: 'Ideal para quem procura um sabor mais suave onde a massa mãe não domine o pão.',
					points: [
						'Sabor mais neutro e versátil',
						'Observação muito clara de bolhas',
						'Menos propensa a sobre-fermentação',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Sinais de uma Massa Mãe Com Fome',
			html: 'Se a tua massa mãe tem líquido escuro à superfície (hooch), cheira a vinagre/acetona ou colapsa rapidamente após o pico, necessita de um rátio superior.',
		},
		{
			type: 'title',
			text: 'Glossário Técnico de Massa Mãe',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Levain / Isqueiro',
					definition: 'Um pré-fermento preparado a partir da mãe destinado a um pão específico.',
				},
				{
					term: 'Hooch (Líquido acídico)',
					definition: 'Camada de álcool e água acumulada quando o cultivo esgota o alimento.',
				},
				{
					term: 'Pico de Atividade',
					definition: 'O momento de máxima expansão e densidade de leveduras. Ponto ideal para amassar.',
				},
				{
					term: 'Bactérias Lácticas (LAB)',
					definition: 'Microorganismos responsáveis por produzir ácidos orgânicos que dão sabor e conservabilidade.',
				},
			],
		},
		{
			type: 'tip',
			title: 'O Teste da Flutuação',
			html: 'Para verificar se a massa mãe está pronta, deita uma colher de chá num copo com água: se flutuar, retém CO2 suficiente.',
		},
		{
			type: 'paragraph',
			html: 'O uso da nossa calculadora permite padronizar o processo e compreender melhor a biologia do teu pão.',
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
