import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Conversor de Levadura: Fresca, Seca y Masa Madre';
const description =
	'Convierte con precisión entre levadura fresca, levadura seca y masa madre. Obtén los ajustes de receta necesarios al usar masa madre para mantener la hidratación perfecta.';

const faq = [
	{
		question: '¿Cuál es la diferencia entre la levadura fresca y la seca?',
		answer:
			'La levadura fresca contiene aproximadamente un 70% de agua, mientras que la seca contiene un 8%. El factor de conversión es: 1 parte de levadura seca equivale a 3 partes de levadura fresca. La levadura seca es más potente y estable, ideal para un almacenamiento prolongado.',
	},
	{
		question: '¿Cuánta masa madre necesito?',
		answer:
			'La masa madre suele tener una hidratación del 100% (partes iguales de harina y agua). Para sustituir 1g de levadura fresca, necesitas 5g de masa madre (ratio 1:5). Ajusta siempre tu receta restando la harina y el agua que ya aporta la masa madre.',
	},
	{
		question: '¿Por qué debo ajustar mi receta al usar masa madre?',
		answer:
			'La masa madre contiene tanto levadura como harina y agua. Al añadirla, estás incorporando ingredientes extra a tu receta. Debes restar la cantidad equivalente de harina y agua del total para mantener la hidratación y estructura correctas.',
	},
	{
		question: '¿Puedo usar levadura instantánea en lugar de levadura seca activa?',
		answer:
			'La levadura instantánea es un tipo de levadura seca de grano muy fino. El ratio de conversión sigue siendo el mismo: 1:3 respecto a la fresca. La instantánea puede requerir ligeramente menos líquido debido a su facilidad de disolución.',
	},
];

const howTo = [
	{
		name: 'Selecciona tu tipo de levadura',
		text: 'Elige el tipo de levadura que tienes disponible: Fresca (prensada), Seca (instantánea o activa) o Masa Madre (hidratación 100%).',
	},
	{
		name: 'Introduce la cantidad',
		text: 'Indica la cantidad en gramos. Sé preciso para obtener los mejores resultados; usa una báscula de cocina siempre que sea posible.',
	},
	{
		name: 'Aplica las conversiones',
		text: 'La herramienta te mostrará las cantidades equivalentes para los tres tipos. Si conviertes a masa madre, resta la harina y el agua correspondientes de tu receta.',
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
	slug: 'conversor-levadura-fresca-seca-masa-madre',
	title,
	description,
	ui: {
		selectYeastType: 'Seleccionar tipo de levadura',
		freshYeast: 'Levadura Fresca (Prensada)',
		dryYeast: 'Levadura Seca (Instantánea)',
		sourdough: 'Masa Madre (100%)',
		enterAmount: 'Introduce la cantidad',
		quantity: 'Cantidad',
		grams: 'Gramos (g)',
		ounces: 'Onzas (oz)',
		pounds: 'Libras (lb)',
		milligrams: 'Miligramos (mg)',
		reset: 'Reiniciar',
		conversions: 'Conversiones',
		copy: 'Copiar',
		copied: '¡Copiado!',
		recipeAdjustment: 'Ajuste de la Receta',
		flourSubtract: 'Restar de harina:',
		waterSubtract: 'Restar de agua:',
	},
	faqTitle: 'Preguntas Frecuentes',
	faq,
	bibliographyTitle: 'Bibliografía y Recursos',
	howTo,
	seo: [
		{
			type: 'title',
			text: 'Fórmulas de Conversión de Levadura y Guía Científica',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'La <strong>conversión de levadura</strong> es fundamental para la consistencia en el horneado. Ya sea que estés sustituyendo levadura comercial por masa madre o ajustando entre variedades frescas y secas, comprender los ratios exactos garantiza una fermentación fiable y resultados constantes.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:3',
					label: 'Ratio Seca a Fresca',
					icon: 'mdi:scale',
				},
				{
					value: '1:5',
					label: 'Fresca a Masa Madre',
					icon: 'mdi:flask-outline',
				},
				{
					value: '70%',
					label: 'Agua en Levadura Fresca',
					icon: 'mdi:water-percent',
				},
				{
					value: '8%',
					label: 'Agua en Levadura Seca',
					icon: 'mdi:water-opacity',
				},
			],
		},
		{
			type: 'title',
			text: 'Tipos de Agentes Leudantes y sus Propiedades',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Levadura Fresca (Prensada)',
					icon: 'mdi:cube',
					description: 'Células de levadura vivas suspendidas en almidón y humedad.',
					points: [
						'Potencia: 100% (base)',
						'Vida útil: 2-3 semanas refrigerada',
						'Contenido de agua: ~70%',
						'Ideal para: Panaderos profesionales, uso inmediato',
					],
				},
				{
					title: 'Levadura Seca (Instantánea)',
					icon: 'mdi:spray-bottle',
					description: 'Células de levadura desecadas, más concentradas que la fresca.',
					points: [
						'Potencia: 3 veces la levadura fresca',
						'Vida útil: 1-2 años sin abrir',
						'Contenido de agua: ~8%',
						'Ideal para: Panaderos caseros, almacenamiento largo',
					],
				},
				{
					title: 'Masa Madre',
					icon: 'mdi:flask-outline',
					description: 'Cultivo de levaduras salvajes y bacterias a 100% de hidratación.',
					highlight: true,
					points: [
						'Potencia: 1 parte = 5 partes de levadura fresca',
						'Vida útil: Indefinida con los cuidados adecuados',
						'Contenido de agua: 50% (partes iguales con harina)',
						'Ideal para: Sabor complejo, fermentación lenta',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Ratios de Conversión y Fórmula Matemática',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Levadura Origen', 'Levadura Destino', 'Fórmula de Conversión', 'Ejemplo'],
			rows: [
				['Levadura Fresca', 'Levadura Seca', 'Fresca ÷ 3 = Seca', '30g Fresca = 10g Seca'],
				['Levadura Seca', 'Levadura Fresca', 'Seca × 3 = Fresca', '10g Seca = 30g Fresca'],
				['Levadura Fresca', 'Masa Madre (100%)', 'Fresca × 5 = Masa Madre', '20g Fresca = 100g Masa Madre'],
				['Masa Madre (100%)', 'Levadura Fresca', 'Masa Madre ÷ 5 = Fresca', '100g Masa Madre = 20g Fresca'],
				['Levadura Seca', 'Masa Madre (100%)', 'Seca × 15 = Masa Madre', '10g Seca = 150g Masa Madre'],
				['Masa Madre (100%)', 'Levadura Seca', 'Masa Madre ÷ 15 = Seca', '150g Masa Madre = 10g Seca'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Crítico: Ajuste de la Receta para Masa Madre',
			html: 'Al sustituir levadura fresca o seca por masa madre, DEBES ajustar tu receta. La masa madre contiene un 50% de harina y un 50% de agua por peso. Si tu conversión requiere 100g de masa madre, resta 50g de harina y 50ml de agua de tu receta original para mantener la hidratación correcta.',
		},
		{
			type: 'title',
			text: 'Características de Fermentación por Tipo de Levadura',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Tipo de Levadura', 'Velocidad de Fermentación', 'Desarrollo de Sabor', 'Producción de CO₂'],
			rows: [
				['Levadura Fresca', 'Rápida (2-3 h)', 'Neutro a suave', 'Alta y rápida'],
				['Levadura Seca', 'Media (3-4 h)', 'Algo más complejo', 'Constante'],
				['Masa Madre', 'Lenta (8-48 h)', 'Complejo y ácido', 'Gradual y sostenida'],
			],
		},
		{
			type: 'tip',
			title: 'Consejo Pro: Ajustes de Temperatura',
			html: 'La fermentación en frío con masa madre (2-4°C durante 8-16 horas) desarrolla un sabor y una estructura superiores en comparación con la fermentación en caliente. Por eso las panaderías profesionales prefieren la masa madre para panes de larga fermentación.',
		},
		{
			type: 'paragraph',
			html: 'Nuestro conversor simplifica los cálculos para que puedas centrarte en perfeccionar tu técnica de horneado y el desarrollo del sabor.',
		},
	],

  bibliography,
	schemas: [appSchema, faqSchema, howToSchema],
};
