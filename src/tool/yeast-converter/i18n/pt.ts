import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Conversor de Fermento: Fresco, Seco e Massa Madre';
const description =
	'Converta com precisão entre fermento fresco, fermento seco e massa madre (levain). Obtenha ajustes de receita ao usar massa madre para manter a hidratação perfeita.';

const faq = [
	{
		question: 'Qual é a diferença entre fermento fresco e seco?',
		answer:
			'O fermento fresco contém cerca de 70% de água, enquanto o seco contém cerca de 8%. O fator de conversão é: 1 parte de seco equivale a 3 partes de fermento fresco. O fermento seco é mais potente e estável, sendo ideal para armazenamento a longo prazo.',
	},
	{
		question: 'De quanta massa madre eu preciso?',
		answer:
			'A massa madre (levain) tem, por padrão, 100% de hidratação (partes iguais de farinha e água). Para substituir 1g de fermento fresco, você precisa de 5g de massa madre (proporção 1:5). Ajuste sempre sua receita subtraindo a farina e a água presentes na massa madre.',
	},
	{
		question: 'Por que preciso ajustar minha receita para massa madre?',
		answer:
			'A massa madre contém fermento, farinha e água. Ao adicioná-la, você está incluindo ingredientes extras na sua receita. É necessário subtrair a quantidade equivalente de farinha e água do total para manter a hidratação e estrutura corretas.',
	},
	{
		question: 'Posso usar fermento instantâneo em vez de fermento seco ativo?',
		answer:
			'O fermento instantâneo é um tipo de fermento seco finamente moído. A proporção de conversão permanece a mesma: 1:3 entre seco e fresco. O fermento instantâneo pode exigir um pouco menos de líquido devido à sua granulometria fina.',
	},
];

const howTo = [
	{
		name: 'Selecione o tipo de fermento',
		text: 'Escolha o tipo de fermento que você tem disponível: Fresco (biológico prensado), Seco (instantâneo ou ativo) ou Massa Madre (100% de hidratação).',
	},
	{
		name: 'Insira a quantidade',
		text: 'Insira a quantidade em gramas. Seja preciso para melhores resultados — use uma balança de cozinha sempre que possível.',
	},
	{
		name: 'Aplique as conversões',
		text: 'A ferramenta mostra as quantidades equivalentes para os três tipos. Se converter para massa madre, subtraia a farinha e a água da sua receita.',
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
	slug: 'conversor-fermento-fresco-seco-massa-madre',
	title,
	description,
	ui: {
		selectYeastType: 'Selecionar tipo de fermento',
		freshYeast: 'Fermento Fresco (Prensado)',
		dryYeast: 'Fermento Seco (Instantâneo)',
		sourdough: 'Massa Madre (100%)',
		enterAmount: 'Inserir quantidade',
		quantity: 'Quantidade',
		grams: 'Gramas (g)',
		ounces: 'Onças (oz)',
		pounds: 'Libras (lb)',
		milligrams: 'Miligramas (mg)',
		reset: 'Reiniciar',
		conversions: 'Conversões',
		copy: 'Copiar',
		copied: 'Copiado!',
		recipeAdjustment: 'Ajuste de Receita',
		flourSubtract: 'Subtrair de farinha:',
		waterSubtract: 'Subtrair de água:',
	},
	faqTitle: 'Perguntas Frequentes',
	faq,
	bibliographyTitle: 'Bibliografia e Recursos',
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Fórmulas de Conversão de Fermento e Guia Científico',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'A <strong>conversão de fermento</strong> é essencial para a consistência na panificação. Seja substituindo o fermento comercial por massa madre ou ajustando entre variedades frescas e secas, entender as proporções exatas garante uma fermentação confiável.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'Razão Seco para Fresco',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: 'Fresco para Massa Madre',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: 'Água no Fermento Fresco',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: 'Água no Fermento Seco',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: 'Tipos de Agentes de Levedação e Propriedades',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Fermento Fresco (Prensado)',
					icon: 'mdi:cube',
					description: 'Células de levedura vivas suspensas em amido e umidade.',
					points: [
						'Potência: 100% (referência)',
						'Validade: 2-3 semanas refrigerado',
						'Conteúdo de água: ~70%',
						'Ideal para: Padeiros profissionais, uso imediato',
					],
				},
				{
					title: 'Fermento Seco (Instantâneo)',
					icon: 'mdi:spray-bottle',
					description: 'Células de levedura desidratadas, mais concentradas que o fresco.',
					points: [
						'Potência: 3x fermento fresco',
						'Validade: 1-2 anos fechado',
						'Conteúdo de água: ~8%',
						'Ideal para: Padeiros caseiros, armazenamento longo',
					],
				},
				{
					title: 'Massa Madre (Levain)',
					icon: 'mdi:flask-outline',
					description: 'Cultura de leveduras selvagens e bactérias a 100% de hidratação.',
					highlight: true,
					points: [
						'Potência: 1 parte = 5 partes de fermento fresco',
						'Validade: Indefinida com cuidados',
						'Conteúdo de água: 50% (partes iguais de farinha)',
						'Ideal para: Sabor complexo, fermentação lenta',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Proporções de Conversão e Fórmula Matemática',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Fermento Origem', 'Fermento Destino', 'Fórmula de Conversão', 'Exemplo'],
			rows: [
				['Fermento Fresco', 'Fermento Seco', 'Fresco ÷ 3 = Seco', '30g Fresco = 10g Seco'],
				['Fermento Seco', 'Fermento Fresco', 'Seco × 3 = Fresco', '10g Seco = 30g Fresco'],
				['Fermento Fresco', 'Massa Madre (100%)', 'Fresco × 5 = Massa Madre', '20g Fresco = 100g Massa Madre'],
				['Massa Madre (100%)', 'Fermento Fresco', 'Massa Madre ÷ 5 = Fresco', '100g Massa Madre = 20g Fresco'],
				['Fermento Seco', 'Massa Madre (100%)', 'Seco × 15 = Massa Madre', '10g Seco = 150g Massa Madre'],
				['Massa Madre (100%)', 'Fermento Seco', 'Massa Madre ÷ 15 = Seco', '150g Massa Madre = 10g Seco'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Crítico: Ajuste de Receita para Massa Madre',
			html: 'Ao substituir fermento por massa madre, você DEVE ajustar sua receita. A massa madre contém 50% de farinha e 50% de água. Se sua conversão pede 100g de levain, subtraia 50g de farinha e 50ml de água da sua receita original.',
		},
		{
			type: 'title',
			text: 'Características de Fermentação por Tipo',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Tipo de Fermento', 'Velocidade de Geração', 'Desenvolvimento de Sabor', 'Produção de CO₂'],
			rows: [
				['Fermento Fresco', 'Rápida (2-3 h)', 'Neutro a suave', 'Alta e rápida'],
				['Fermento Seco', 'Média (3-4 h)', 'Um pouco mais complexo', 'Consistente'],
				['Massa Madre', 'Lenta (8-48 h)', 'Complexo, ácido', 'Gradual, sustentada'],
			],
		},
		{
			type: 'tip',
			title: 'Dica Pro: Ajustes de Temperatura',
			html: 'A fermentação a frio com massa madre (2-4°C por 8-16 horas) desenvolve sabor e estrutura superiores. Por isso padeiros profissionais preferem massa madre para pães de longa fermentação.',
		},
		{
			type: 'paragraph',
			html: 'Nosso conversor simplifica a matemática para que você possa focar em aperfeiçoar sua técnica e o sabor do seu pão.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
