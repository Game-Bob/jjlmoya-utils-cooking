import type { ToolLocaleContent } from '../../../types';

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
			'Clique no botão inferior para adicionar uma nova linha. Escreva o nome e o peso original; a coluna final será atualizada instantaneamente com a quantidade escalada.',
	},
];

const howTo = [
	{
		name: 'Defina a forma da receita',
		text: 'Selecione a forma e dimensões da forma para a qual a receita original foi desenhada.',
	},
	{
		name: 'Configure a sua própria forma',
		text: 'Introduza as medidas da forma que tem em casa. O sistema calculará o fator de conversão imediatamente.',
	},
	{
		name: 'Utilize a calculadora de ingredientes',
		text: 'Adicione os ingredientes da sua receita para ver as quantidades exatas que precisa para a sua forma.',
	},
	{
		name: 'Ajuste a cozedura',
		text: 'Lembre-se que uma mudança de tamanho implica frequentemente uma variação no tempo de forno, mesmo com a mesma temperatura.',
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
	slug: 'formas',
	title,
	description,
	faqTitle: 'Perguntas Frequentes sobre a Escala',
	bibliographyTitle: 'Fontes e Referências',

	ui: {
		originalRecipe: 'Receita Original',
		yourMold: 'A Sua Forma',
		round: 'Redonda',
		square: 'Quadrada',
		rectangular: 'Retangular',
		diameter: 'Diâmetro (cm)',
		side: 'Lado (cm)',
		width: 'Largura (cm)',
		length: 'Comprimento (cm)',
		multiplyingFactor: 'Fator Multiplicador',
		equivalentMolds: 'As formas são equivalentes. Use as mesmas quantidades.',
		smallerMold: 'A sua forma é mais pequena. Multiplique os ingredientes por',
		largerMold: 'A sua forma é maior. Multiplique os ingredientes por',
		ingredientCalculator: 'Calculadora de Ingredientes',
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
			text: 'Guia para Escalar Receitas segundo a Forma',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Converter quantidades para uma forma diferente exige respeitar as <strong>proporções geométricas</strong> para manter a textura e cozedura ideais.',
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
					value: 'πr²',
					label: 'Fórmula de área circular',
					icon: 'mdi:math-compass',
				},
				{
					value: '0.64',
					label: 'Fator de 25cm para 20cm',
					icon: 'mdi:arrow-down-bold-outline',
				},
				{
					value: '2/3',
					label: 'Capacidade Máx',
					icon: 'mdi:format-vertical-align-top',
				},
			],
		},
		{
			type: 'tip',
			html: 'Nunca encha uma forma mais de 2/3 da sua capacidade, independentemente do fator calculado.',
		},
	],
	schemas: [appSchema, faqSchema, howToSchema],
};
