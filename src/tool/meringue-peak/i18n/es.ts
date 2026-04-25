import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Merengue y Punto de Nieve";
const description = "Calcula la cantidad exacta de azúcar para merengue francés, italiano o suizo según el peso de tus claras. Tiempos de batido y trucos de repostería.";
const faq = [
	{
		question: '¿Qué relación de azúcar y clara es la ideal?',
		answer: 'La regla de oro en repostería es el ratio 1:2. Por cada gramo de clara de huevo, se deben utilizar dos gramos de azúcar para asegurar una estructura estable y firme.',
	},
	{
		question: '¿Cómo saber si el merengue está a punto de nieve?',
		answer: 'El punto de nieve o pico firme se alcanza cuando, al levantar las varillas, el merengue forma una punta que se mantiene vertical sin doblarse. Además, el merengue debe verse muy brillante.',
	},
	{
		question: '¿Cuál es el merengue más estable para decorar?',
		answer: 'El merengue italiano es el más estable de los tres tipos principales, gracias a que el almíbar caliente cocina ligeramente las proteínas de la clara, creando una estructura más resistente al calor y al paso del tiempo.',
	},
	{
		question: '¿Se pueden usar claras pasteurizadas de bote?',
		answer: 'Sí, se pueden utilizar, pero suelen tardar un poco más en montar que las claras frescas. Un truco es añadir una pizca de cremor tártaro o unas gotas de limón para ayudar a la estabilidad.',
	},
];
const howTo = [
	{
		name: 'Pesar las claras',
		text: 'Utiliza una báscula digital para obtener el peso exacto de las claras de huevo sin rastro de yema.',
	},
	{
		name: 'Introducir peso',
		text: 'Escribe ese peso en nuestra calculadora para obtener las cantidades de azúcar necesarias.',
	},
	{
		name: 'Elegir técnica',
		text: 'Selecciona si vas a preparar un merengue francés (básico), italiano (estable) o suizo (sedoso).',
	},
	{
		name: 'Batir y verificar',
		text: 'Sigue los tiempos estimados y comprueba la consistencia hasta alcanzar el punto de nieve firme.',
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
	slug: 'calculadora-punto-de-nieve-merengue',
	title: 'Calculadora de Merengue y Punto de Nieve',
	description: 'Calcula la cantidad exacta de azúcar para merengue francés, italiano o suizo según el peso de tus claras. Tiempos de batido y trucos de repostería.',
	faqTitle: 'Preguntas Frecuentes',
	ui: {
		whitesLabel: 'Peso de las Claras',
		whitesPlaceholder: 'Ej. 120',
		whitesUnit: 'g',
		typeLabel: 'Tipo de Merengue',
		typeFrench: 'Francés',
		typeItalian: 'Italiano',
		typeSwiss: 'Suizo',
		timesHeading: 'Tiempos Estimados (Batido a media/alta velocidad)',
		stageSpumado: 'Espumado',
		stageSpumadoDesc: 'Burbujas grandes, como jabón.',
		stageSoftPeaks: 'Pico Blando',
		stageSoftPeaksDesc: 'La punta se dobla al levantar.',
		stageStiffPeaks: 'Punto de Nieve',
		stageStiffPeaksDesc: 'Pico firme y brillante.',
		frenchSugarWhite: 'Azúcar Blanquilla',
		frenchSugarPowder: 'Azúcar Glas',
		frenchTip: 'El merengue francés es el más común y fácil, ideal para hornear suspiros o añadir a masas aireadas. No es apto para comer en crudo.',
		frenchTime1: '1-2 min',
		frenchTime2: '3-5 min',
		frenchTime3: '7-9 min',
		italianSugarSyrup: 'Azúcar para Almíbar',
		italianWater: 'Agua',
		italianTip: 'El merengue italiano es el más estable. Se hace con almíbar caliente a 118°C. Es perfecto para decorar tartas y comer directamente.',
		italianTime1: '2 min',
		italianTime2: '5 min',
		italianTime3: '10-12 min',
		swissSugarWhite: 'Azúcar Blanquilla',
		swissMaxTemp: 'Temperatura Máx',
		swissTip: 'El merengue suizo se calienta al baño maría hasta que el azúcar se disuelve. Es muy versátil y ideal para cremas de mantequilla.',
		swissTime1: '1-2 min',
		swissTime2: '4-6 min',
		swissTime3: '8-10 min',
		invalidWeightError: 'Introduce un peso válido',
	},
	faq: [
		{
			question: '¿Qué relación de azúcar y clara es la ideal?',
			answer: 'La regla de oro en repostería es el ratio 1:2. Por cada gramo de clara de huevo, se deben utilizar dos gramos de azúcar para asegurar una estructura estable y firme.',
		},
		{
			question: '¿Cómo saber si el merengue está a punto de nieve?',
			answer: 'El punto de nieve o pico firme se alcanza cuando, al levantar las varillas, el merengue forma una punta que se mantiene vertical sin doblarse. Además, el merengue debe verse muy brillante.',
		},
		{
			question: '¿Cuál es el merengue más estable para decorar?',
			answer: 'El merengue italiano es el más estable de los tres tipos principales, gracias a que el almíbar caliente cocina ligeramente las proteínas de la clara, creando una estructura más resistente al calor y al paso del tiempo.',
		},
		{
			question: '¿Se pueden usar claras pasteurizadas de bote?',
			answer: 'Sí, se pueden utilizar, pero suelen tardar un poco más en montar que las claras frescas. Un truco es añadir una pizca de cremor tártaro o unas gotas de limón para ayudar a la estabilidad.',
		},
	],
	howTo: [
		{
			name: 'Pesar las claras',
			text: 'Utiliza una báscula digital para obtener el peso exacto de las claras de huevo sin rastro de yema.',
		},
		{
			name: 'Introducir peso',
			text: 'Escribe ese peso en nuestra calculadora para obtener las cantidades de azúcar necesarias.',
		},
		{
			name: 'Elegir técnica',
			text: 'Selecciona si vas a preparar un merengue francés (básico), italiano (estable) o suizo (sedoso).',
		},
		{
			name: 'Batir y verificar',
			text: 'Sigue los tiempos estimados y comprueba la consistencia hasta alcanzar el punto de nieve firme.',
		},
	],
	seo: [
		{
			type: 'title',
			text: 'Guía Maestro para el Cálculo de Merengue y Punto de Nieve',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Dominar el <strong>punto de nieve</strong> y los diferentes tipos de merengue es elevar tu repostería al nivel profesional. La clave reside en la precisión del peso de las claras y la relación exacta de azúcar para estabilizar la red de proteínas.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1:2',
					label: 'Ratio Clara:Azúcar',
					icon: 'mdi:scale-balance',
				},
				{
					value: '118°C',
					label: 'Almíbar Italiano',
					icon: 'mdi:thermometer-high',
				},
				{
					value: '60°C',
					label: 'Baño María Suizo',
					icon: 'mdi:beaker-question-outline',
				},
				{
					value: '0%',
					label: 'Tolerancia a Grasa',
					icon: 'mdi:close-circle-outline',
				},
			],
		},
		{
			type: 'title',
			text: 'Comparativa de Técnicas de Merengue',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Merengue Francés',
					icon: 'mdi:baguette',
					description: 'El más simple pero menos estable. Se baten las claras con azúcar en frío.',
					points: [
						'Ideal para hornear (suspiros)',
						'Textura ligera y aireada',
						'Requiere cocción obligatoria',
						'Rápido de preparar',
					],
				},
				{
					title: 'Merengue Italiano',
					icon: 'mdi:pizza',
					description: 'El más estable de todos. Se usa almíbar a punto de bola blanda.',
					highlight: true,
					points: [
						'Perfecto para decorar tartas',
						'Apto para comer en crudo',
						'Resiste mejor la humedad',
						'Estructura densa y brillante',
					],
				},
				{
					title: 'Merengue Suizo',
					icon: 'mdi:cheese',
					description: 'Calentado al baño maría. Equilibrio entre facilidad y estabilidad.',
					points: [
						'Base para Buttercreams',
						'Textura muy sedosa',
						'Excelente para rellenos',
						'Seguridad alimentaria media',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Estados Visuales del Batido de Claras',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Estado', 'Descripción Visual', 'Uso Recomendado', 'Estabilidad'],
			rows: [
				['Espumado', 'Burbujas grandes, transparente', 'Añadir ácidos/azúcar', 'Nula'],
				['Picos Blandos', 'La punta se dobla hacia abajo', 'Mousses y soufflés', 'Baja'],
				['Pico Firme', 'Punta vertical y rígida', 'Decoración y horneado', 'Alta'],
				['Sobrebatido', 'Textura granulosa y seca', 'Inservible (se corta)', 'Colapso'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: '¿Tu Merengue Llora o suelta Líquido?',
			html: 'Si ves almíbar escapando del merengue (sinéresis), se debe a que el azúcar no se disolvió totalmente o a un exceso de humedad ambiental. En el merengue italiano, asegura que el almíbar caiga en hilo fino sobre las claras en movimiento, nunca sobre las varillas.',
		},
		{
			type: 'title',
			text: 'Glosario de Repostería Técnica',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Ovoalbúmina',
					definition: 'Principal proteína de la clara responsable de atrapar el aire en el batido.',
				},
				{
					term: 'Higroscópico',
					definition: 'Propiedad del azúcar de absorber humedad del aire, lo que puede ablandar el merengue.',
				},
				{
					term: 'Cremor Tártaro',
					definition: 'Sal ácida que ayuda a prevenir el sobrebatido y estabiliza la espuma.',
				},
				{
					term: 'Baño María',
					definition: 'Método de calor indirecto crucial para disolver el azúcar en el merengue suizo.',
				},
			],
		},
		{
			type: 'tip',
			title: 'El truco del Bol de Metal',
			html: 'Limpia tu bol con una servilleta y un chorro de vinagre o limón antes de empezar. Cualquier rastro de grasa impedirá que las claras suban, por mucha energía que apliques.',
		},
		{
			type: 'paragraph',
			html: 'Nuestra calculadora automatiza las proporciones para que tú solo tengas que preocuparte de batir hasta alcanzar ese brillo perfecto.',
		},
	],
  bibliography,
	schemas: [faqSchema, howToSchema, appSchema],
};
