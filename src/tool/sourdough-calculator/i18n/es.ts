import type { ToolLocaleContent } from '../../../types';

const title = "Calculadora de Masa Madre Ratios de Fermentación";
const description = "Calcula automáticamente las proporciones de masa madre, harina y agua para mantener tu cultivo. Ratios predefinidos o personalizados.";
const faq = [
	{
		question: '¿Qué es el ratio 1:1:1?',
		answer: 'Es el ratio más común para mantener la masa madre a temperatura ambiente. Significa 1 parte de masa madre, 1 parte de harina y 1 parte de agua. Útil cuando refrescas diariamente.',
	},
	{
		question: '¿Cuándo uso 1:2:2?',
		answer: 'El ratio 1:2:2 es para activar la masa madre. Genera una fermentación más lenta pero predecible. Ideal si guardarás el cultivo en frío y quieres revigorarlo.',
	},
	{
		question: '¿Cuál es el "sweet spot" 1:5:5?',
		answer: 'El ratio 1:5:5 es el "sweet spot" para muchos panaderos. Permite 8-12 horas de fermentación a temperatura ambiente antes de que la masa madre esté lista. Equilibra comodidad con control de tiempo.',
	},
	{
		question: '¿Puedo usar ratios personalizados?',
		answer: 'Absolutamente. Si tienes un protocolo específico, puedes ingresar tus propios ratios. Algunos panaderos usan 1:10:10 para fermentación lentísima, otros 1:1:0.8 para menos agua.',
	},
	{
		question: '¿La calculadora redondea los gramos?',
		answer: 'Sí. Redondea al número entero más cercano para practicidad. Si necesitas máxima precisión, usa una báscula digital. Los pequeños redondeos no afectan significativamente la fermentación.',
	},
];
const howTo = [
	{
		name: 'Ingresa la cantidad total que necesitas',
		text: 'Define el peso total de masa madre que requieres para tu receta (ej: 300g para un pan típico).',
	},
	{
		name: 'Selecciona el ratio de refresco',
		text: 'Elige entre los ratios predefinidos (Mantener, Activar, Retardar, Fuerte, Sweet Spot) o crea uno personalizado.',
	},
	{
		name: 'Obtén las cantidades exactas',
		text: 'La calculadora te muestra cuánto de masa madre, harina y agua necesitas. Mezcla estos ingredientes y deja fermentar según tu protocolo.',
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
	slug: 'masa-madre',
	title: 'Calculadora de Masa Madre Ratios de Fermentación',
	description: 'Calcula automáticamente las proporciones de masa madre, harina y agua para mantener tu cultivo. Ratios predefinidos o personalizados.',
	faqTitle: 'Preguntas Frecuentes',
	faq: [
		{
			question: '¿Qué es el ratio 1:1:1?',
			answer: 'Es el ratio más común para mantener la masa madre a temperatura ambiente. Significa 1 parte de masa madre, 1 parte de harina y 1 parte de agua. Útil cuando refrescas diariamente.',
		},
		{
			question: '¿Cuándo uso 1:2:2?',
			answer: 'El ratio 1:2:2 es para activar la masa madre. Genera una fermentación más lenta pero predecible. Ideal si guardarás el cultivo en frío y quieres revigorarlo.',
		},
		{
			question: '¿Cuál es el "sweet spot" 1:5:5?',
			answer: 'El ratio 1:5:5 es el "sweet spot" para muchos panaderos. Permite 8-12 horas de fermentación a temperatura ambiente antes de que la masa madre esté lista. Equilibra comodidad con control de tiempo.',
		},
		{
			question: '¿Puedo usar ratios personalizados?',
			answer: 'Absolutamente. Si tienes un protocolo específico, puedes ingresar tus propios ratios. Algunos panaderos usan 1:10:10 para fermentación lentísima, otros 1:1:0.8 para menos agua.',
		},
		{
			question: '¿La calculadora redondea los gramos?',
			answer: 'Sí. Redondea al número entero más cercano para practicidad. Si necesitas máxima precisión, usa una báscula digital. Los pequeños redondeos no afectan significativamente la fermentación.',
		},
	],
	bibliographyTitle: 'Bibliografía',
	bibliography: [
		{
			name: 'Tartine Bread - Chad Robertson',
			url: 'https://www.penguinrandomhouse.com/books/310016/tartine-bread-by-chad-robertson/',
		},
		{
			name: 'The Flavor Bible - Scaling and Ratios',
			url: 'https://www.flavorprints.com/',
		},
		{
			name: 'Full Proof Baking - Guides on Sourdough',
			url: 'https://www.fullproofbaking.com/',
		},
	],
	howTo: [
		{
			name: 'Ingresa la cantidad total que necesitas',
			text: 'Define el peso total de masa madre que requieres para tu receta (ej: 300g para un pan típico).',
		},
		{
			name: 'Selecciona el ratio de refresco',
			text: 'Elige entre los ratios predefinidos (Mantener, Activar, Retardar, Fuerte, Sweet Spot) o crea uno personalizado.',
		},
		{
			name: 'Obtén las cantidades exactas',
			text: 'La calculadora te muestra cuánto de masa madre, harina y agua necesitas. Mezcla estos ingredientes y deja fermentar según tu protocolo.',
		},
	],
	seo: [
		{
			type: 'title',
			text: 'Guía Maestra para el Mantenimiento y Refresco de Masa Madre',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'La <strong>masa madre</strong> no es solo un ingrediente, es un ecosistema vivo de levaduras salvajes y bacterias lácticas (LAB). La clave de un pan excepcional reside en la salud de este cultivo, la cual se gestiona mediante la precisión en los ratios de refresco y el control de la temperatura.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '24-26°C',
					label: 'Temp. Actividad Óptima',
					icon: 'mdi:thermometer',
				},
				{
					value: '3.8 - 4.2',
					label: 'pH Ideal del Cultivo',
					icon: 'mdi:test-tube',
				},
				{
					value: '100%',
					label: 'Hidratación Estándar',
					icon: 'mdi:water-percent',
				},
				{
					value: 'x2 - x3',
					label: 'Crecimiento en Pico',
					icon: 'mdi:trending-up',
				},
			],
		},
		{
			type: 'title',
			text: 'Comparativa de Tipos de Cultivo de Masa Madre',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Masa Madre Líquida (100% Hid.)',
					icon: 'mdi:water',
					description: 'La más común en la panadería artesanal moderna. Muy fácil de mezclar y de incorporar a las masas finales.',
					points: [
						'Fermentación más rápida',
						'Perfil de sabor más láctico (suave)',
						'Fácil de medir y refrescar',
						'Ideal para baguettes y hogazas',
					],
				},
				{
					title: 'Masa Madre Sólida o Pasta Madre',
					icon: 'mdi:bread-slice-outline',
					description: 'Tradicional en la panadería italiana (Lievito Madre). Hidratación en torno al 50%.',
					highlight: true,
					points: [
						'Fermentación más lenta y estable',
						'Perfil de sabor más acético',
						'Mayor fuerza para masas enriquecidas',
						'Ideal para Panettone y Brioche',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Entendiendo los Ratios de Refresco Matemáticos',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'El ratio representa las partes de Inóculo (masa madre vieja) respecto a la Harina y el Agua. Por ejemplo, un ratio 1:2:2 significa 1 parte de cultivo por 2 de harina y 2 de agua.',
		},
		{
			type: 'table',
			headers: ['Ratio', 'Uso Recomendado', 'Tiempo Estimado (24°C)', 'Ventaja Principal'],
			rows: [
				['1:1:1', 'Refresco diario', '4-6 horas', 'Mantenimiento rápido'],
				['1:2:2', 'Activación previa', '6-8 horas', 'Balance de acidez'],
				['1:5:5', 'Uso en panadería', '8-12 horas', 'Pico de actividad predecible'],
				['1:10:10', 'Retardo largo', '16-24 horas', 'Gestión de horarios flexibles'],
			],
		},
		{
			type: 'title',
			text: 'Elección de Harinas para el Refresco',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Harina de Centeno Integral',
					icon: 'mdi:grain',
					description: 'El "superalimento" para las levaduras salvajes. Contiene más nutrientes y enzimas que el trigo.',
					points: [
						'Actividad fermentativa explosiva',
						'Aporta aromas terrosos y profundos',
						'Mantiene mejor la acidez',
					],
				},
				{
					title: 'Harina de Trigo Blanca',
					icon: 'mdi:shaker-outline',
					description: 'Ideal para quienes buscan un sabor más suave y una masa madre que no domine el perfil del pan.',
					points: [
						'Sabor más neutro y versátil',
						'Observación visual de burbujas clara',
						'Menos propensa a la sobrefermentación',
					],
				},
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Signos de una Masa Madre Hambrienta',
			html: 'Si tu cultivo presenta un líquido oscuro en la superficie (hooch), huele intensamente a vinagre o acetona, o colapsa muy rápido después del pico, necesita un ratio de refresco mayor (más comida) o una temperatura más baja.',
		},
		{
			type: 'title',
			text: 'Glosario Técnico de Fermentación Natural',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Levain',
					definition: 'El prefermento preparado a partir de la masa madre madre (el cultivo básico) destinado a usarse en una receta específica.',
				},
				{
					term: 'Hooch',
					definition: 'La capa de alcohol y agua que se acumula cuando la masa madre ha agotado su alimento. No es malo, solo indica hambre.',
				},
				{
					term: 'Pico de Actividad',
					definition: 'El momento de máxima expansión y población de levaduras. Es el punto ideal para mezclar la masa del pan.',
				},
				{
					term: 'Bacterias Lácticas (LAB)',
					definition: 'Microorganismos responsables de la producción de ácidos orgánicos que dan el sabor característico y mejoran la conservación.',
				},
			],
		},
		{
			type: 'tip',
			title: 'La Prueba del Flotado',
			html: 'Para saber si tu masa madre está lista, pon una cucharadita en un vaso con agua. Si flota, significa que ha atrapado suficiente CO2 y las levaduras están en su pico de actividad.',
		},
		{
			type: 'paragraph',
			html: 'Usar nuestra calculadora te permite estandarizar tus procesos y entender mejor la biología de tu pan. La constancia es el secreto de la excelencia artesanal.',
		},
	],

	ui: {
		totalAmount: 'Cantidad Final',
		refreshRatio: 'Ratio de Refresco',
		maintain: 'Mantener',
		activate: 'Activar',
		retard: 'Retardar',
		strong: 'Fuerte',
		sweetSpot: 'Sweet Spot',
		custom: 'Custom',
		sourdough: 'Masa Madre',
		activeCulture: 'Cultivo activo',
		flour: 'Harina',
		flourType: 'Fuerza o Integral',
		water: 'Agua',
		chlorineFree: 'Sin cloro',
		todayFormula: 'Formula de Hoy',
		hydration: 'Hidratación 100 %',
		totalDough: 'Total Masa',
		mm: 'MM',
	},
	schemas: [faqSchema, howToSchema, appSchema],
};
