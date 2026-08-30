import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Calculadora para Escalar Formas de Pastelaria';
const description =
	'Adapte qualquer receita de pastelaria às suas formas. Calcule automaticamente o fator de conversão para formas redondas, quadradas e retangulares com precisão profissional.';

const faq = [
	{
		question: 'Como funciona exatamente o fator multiplicador?',
		answer:
			'O fator obtém-se dividindo a área da sua forma pretendida pela área da forma da receita original. Se o resultado for 1.5, significa que deve multiplicar cada ingrediente por esse valor.',
	},
	{
		question: 'Posso converter uma forma redonda para uma quadrada?',
		answer:
			'Sim, a ferramenta utiliza fórmulas geométricas precisas para comparar superfícies independentemente da forma. Basta introduzir as medidas e o sistema fará a equivalência automaticamente.',
	},
	{
		question: 'O que acontece com a altura das formas?',
		answer:
			'Esta ferramenta foca-se na área da base. Se a sua forma for significativamente mais alta ou baixa que a original, poderá necessitar de um pequeno ajuste no tempo de cozedura.',
	},
	{
		question: 'Como adiciono ingredientes à lista?',
		answer:
			'Clique no botão abaixo para adicionar uma nova linha. Escreva o nome e o peso original; a coluna final será atualizada instantaneamente com a quantidade multiplicada.',
	},
	{
		question: 'A conversão é fiável para formas de tabuleiro muito grandes?',
		answer:
			'Matematicamente sim, mas tenha em mente que bolos muito grandes demoram mais tempo a cozer no centro. Pode ser necessário baixar ligeiramente a temperatura do forno.',
	},
];

const howTo = [
	{
		name: 'Defina a forma da receita original',
		text: 'Selecione o formato e as dimensões da forma para a qual a receita foi criada.',
	},
	{
		name: 'Configure a sua forma',
		text: 'Insira as medidas da forma que tem em casa. O sistema calculará imediatamente o fator de conversão.',
	},
	{
		name: 'Use o calculador de ingredientes',
		text: 'Adicione os ingredientes da sua receita para ver exatamente quanto precisa para a nova forma.',
	},
	{
		name: 'Ajuste os tempos de cozedura',
		text: 'Lembre-se de que alterar o tamanho da forma geralmente exige ajustes no tempo no forno.',
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
	slug: 'conversor-formas-bolo',
	title,
	description,
	faqTitle: 'Perguntas Frequentes',
	ui: {
		originalMold: 'Forma da Receita Original',
		yourMold: 'A sua Forma Alvo',
		shape: 'Formato da Forma',
		diameter: 'Diâmetro',
		side: 'Lado',
		width: 'Largura',
		length: 'Comprimento',
		unit: 'Unidade',
		cm: 'cm',
		inches: 'polegadas',
		round: 'Redonda',
		square: 'Quadrada',
		rectangular: 'Retangular',
		resultTitle: 'Resultado da Conversão',
		originalArea: 'Área Original',
		yourArea: 'A sua Área',
		multiplyingFactor: 'Fator de Conversão',
		equivalentMolds: 'As formas são equivalentes. Use as mesmas quantidades.',
		smallerMold: 'A sua forma é menor. Reduza os ingredientes multiplicando por',
		largerMold: 'A sua forma é maior. Aumente os ingredientes multiplicando por',
		ingredientCalculator: 'Calculadora de Peso dos Ingredientes',
		addIngredient: 'Adicionar Ingrediente',
		ingredient: 'Ingrediente',
		original: 'Original',
		final: 'Final',
		exampleIngredient: 'Ex. Farinha',
		delete: 'Eliminar',
		originalVisualization: 'Original',
		yourVisualization: 'A sua',
		defaultIngredient1: 'Farinha',
		defaultIngredient2: 'Açúcar',
		reduce: 'Reduzir',
		increase: 'Aumentar',
	},

	faq,
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Guia Avançado para Escalar Receitas segundo a Forma',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Converter quantidades para uma forma diferente exige respeitar as <strong>proporções geométricas</strong> para manter a textura, altura e humidade ideais.',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: 'O Segredo da Área da Base',
			html: 'O segredo de um ajuste perfeito reside na área da base, não no diâmetro. Um aumento de 25% no diâmetro quase duplica a área total.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: 'Fator de 20cm para 25cm',
					icon: 'mdi:resize',
				},
				{
					value: 'x2.25',
					label: 'Fator de 15cm para 22.5cm',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: 'Fator de 25cm para 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: 'πr²',
					label: 'Fórmula de área circular',
					icon: 'mdi:math-compass',
				},
			],
		},
		{
			type: 'title',
			text: 'Comparação de Formatos e Eficiência no Forno',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Formas Redondas',
					icon: 'mdi:circle-outline',
					description: 'O padrão da pastelaria. Oferecem uma cozedura uniforme da borda para o centro.',
					points: [
						'Distribuição de calor ideal',
						'Ideais para bolos altos',
						'Calculadas pelo raio',
					],
				},
				{
					title: 'Formas Quadradas',
					icon: 'mdi:square-outline',
					description: 'Permitem aproveitar ao máximo o espaço do forno. Ideais para brownies.',
					highlight: true,
					points: [
						'Cozedura mais rápida nos cantos',
						'Fáceis de cortar em porções',
						'Calculadas Lado x Lado',
					],
				},
				{
					title: 'Formas Retangulares',
					icon: 'mdi:rectangle-outline',
					description: 'Perfeitas para bolos de tabuleiro. Exigem atenção no centro.',
					points: [
						'Elevada capacidade total',
						'Uso polivalente',
						'Calculadas Largura x Comprimento',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Matemática do Cálculo de Superfície',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Para calcular o fator de conversão correto, comparamos as áreas da base usando estas fórmulas:',
		},
		{
			type: 'table',
			headers: ['Formato da Forma', 'Fórmula de Área', 'Consideração Chave'],
			rows: [
				['Circular', 'π × Raio²', 'O raio é metade do diâmetro'],
				['Quadrada', 'Lado × Lado', 'Apenas medidas internas'],
				['Retangular', 'Largura × Comprimento', 'Padrão para bolos de tabuleiro'],
			],
		},
		{
			type: 'title',
			text: 'Erros Comuns ao Alterar o Tamanho da Forma',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Ajuste linear:</strong> Duplicar o diâmetro quadruplica os ingredientes, não os duplica.',
				'<strong>Ignorar a altura:</strong> Formas fundas exigem mais tempo a uma temperatura mais baixa.',
				'<strong>Fermento:</strong> O fermento químico nem sempre exige uma conversão estritamente linear.',
				'<strong>Evaporação:</strong> Quantidades menores podem secar mais rapidamente.',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Limite de Capacidade da Forma',
			html: 'Nunca encha uma forma mais de 2/3 da sua capacidade, independentemente do fator calculado.',
		},
		{
			type: 'title',
			text: 'Glossário de Conversão',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Fator de Conversão',
					definition: 'O número pelo qual deve multiplicar todos os ingredientes para adaptar a receita à nova forma.',
				},
				{
					term: 'Área da Base',
					definition: 'A medida da superfície do fundo da forma.',
				},
				{
					term: 'Raio',
					definition: 'A distância do centro até à borda de um círculo.',
				},
				{
					term: 'Transferência de Calor',
					definition: 'Como a energia térmica se move pela forma segundo o formato e material.',
				},
			],
		},
		{
			type: 'tip',
			html: 'Ao mudar para uma forma muito maior, use tiras isolantes de cozedura para garantir calor uniforme até ao centro.',
		},
		{
			type: 'paragraph',
			html: 'Dominar o ajuste de formas dá-lhe total liberdade na cozinha. Use esta calculadora para obter resultados profissionais constantes.',
		},
	],
	bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
