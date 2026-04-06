import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
	slug: 'escalador-moldes',
	title: 'Calculadora para Escalar Moldes de Repostería',
	description:
		'Adapta cualquier receta de repostería a tus moldes. Calcula automáticamente el factor de conversión para moldes redondos, cuadrados y rectangulares con precisión profesional.',
	faqTitle: 'Preguntas Frecuentes sobre el Escalado',
	bibliographyTitle: 'Fuentes y Referencias Científicas',

	ui: {
		originalRecipe: 'Receta Original',
		yourMold: 'Tu Molde',
		round: 'Redondo',
		square: 'Cuadrado',
		rectangular: 'Rectangular',
		diameter: 'Diámetro (cm)',
		side: 'Lado (cm)',
		width: 'Ancho (cm)',
		length: 'Largo (cm)',
		multiplyingFactor: 'Factor Multiplicador',
		equivalentMolds: 'Los moldes son equivalentes. Usa las mismas cantidades.',
		smallerMold: 'Tu molde es más pequeño. Reduce los ingredientes multiplicándolos por',
		largerMold: 'Tu molde es más grande. Aumenta los ingredientes multiplicándolos por',
		ingredientCalculator: 'Calculadora de Ingredientes',
		addIngredient: 'Añadir Ingrediente',
		ingredient: 'Ingrediente',
		original: 'Original',
		final: 'Final',
		exampleIngredient: 'Ej. Harina',
		delete: 'Eliminar',
		originalVisualization: 'Original',
		yourVisualization: 'Tuyo',
		defaultIngredient1: 'Harina',
		defaultIngredient2: 'Azúcar',
		reduce: 'Reduce',
		increase: 'Aumenta',
	},

	faq: [
		{
			question: '¿Cómo funciona exactamente el factor multiplicador?',
			answer:
				'El factor se obtiene dividiendo el área de tu molde objetivo entre el área del molde de la receta original. Si el resultado es 1.5, significa que debes multiplicar cada ingrediente por esa cifra para obtener el volumen correcto.',
		},
		{
			question: '¿Puedo convertir un molde redondo a uno cuadrado?',
			answer:
				'Sí, la herramienta utiliza fórmulas geométricas precisas para comparar superficies sin importar la forma. Solo introduce las medidas y el sistema hará la equivalencia de áreas automáticamente.',
		},
		{
			question: '¿Qué ocurre con la altura de los moldes?',
			answer:
				'Esta herramienta se centra en el área de la base, que es el factor más crítico. Si tu molde es significativamente más alto o bajo que el original, podrías necesitar un pequeño ajuste adicional en el tiempo de horneado.',
		},
		{
			question: '¿Cómo añado ingredientes a la lista?',
			answer:
				'Haz clic en el botón inferior para añadir una nueva fila. Escribe el nombre y el peso original; la columna final se actualizará instantáneamente con la cantidad escalada.',
		},
		{
			question: '¿Es fiable el escalado para moldes muy grandes?',
			answer:
				'Matemáticamente es exacto, pero ten en cuenta que los pasteles muy grandes tardan más en cocinarse en el centro y pueden necesitar una temperatura ligeramente inferior para evitar que se quemen los bordes.',
		},
	],

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

	howTo: [
		{
			name: 'Define el molde de la receta',
			text: 'Selecciona la forma y dimensiones del molde para el que está diseñada originalmente la receta que quieres preparar.',
		},
		{
			name: 'Configura tu propio molde',
			text: 'Introduce las medidas del molde que tienes en casa. El sistema calculará el factor de conversión inmediatamente.',
		},
		{
			name: 'Utiliza la calculadora de ingredientes',
			text: 'Añade los ingredientes de tu receta para ver las cantidades exactas que necesitas para que el pastel tenga el mismo grosor.',
		},
		{
			name: 'Ajusta el horneado',
			text: 'Recuerda que un cambio de tamaño suele implicar una variación en el tiempo de horno aunque la temperatura sea la misma.',
		},
	],

	seo: [
		{
			type: 'title',
			text: 'Guía Avanzada para Escalar Recetas según el Molde',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Convertir las cantidades de una receta para un molde diferente es una de las tareas más comunes y, a la vez, más propensas a errores en la repostería profesional. No se trata simplemente de sumar un poco más de cada cosa, sino de respetar las <strong>proporciones geométricas</strong> para mantener la textura y el punto de cocción ideales.',
		},
		{
			type: 'diagnostic',
			variant: 'info',
			title: 'El Secreto del Área',
			html: 'El secreto de un buen escalado reside en el área, no en el diámetro. Un aumento del 25% en el diámetro de un molde redondo casi duplica su superficie total.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.56',
					label: 'Factor de 20cm a 25cm',
					icon: 'mdi:resize',
				},
				{
					value: 'x2.25',
					label: 'Factor de 15cm a 22.5cm',
					icon: 'mdi:arrow-up-bold-outline',
				},
				{
					value: '0.64',
					label: 'Factor de 25cm a 20cm',
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
			text: 'Comparativa de Formas y su Eficiencia en el Horno',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Moldes Redondos',
					icon: 'mdi:circle-outline',
					description: 'El estándar de la repostería. Ofrecen una cocción muy uniforme desde los bordes hacia el centro.',
					points: [
						'Distribución de calor óptima',
						'Ideal para bizcochos altos',
						'Cálculo basado en el radio',
					],
				},
				{
					title: 'Moldes Cuadrados',
					icon: 'mdi:square-outline',
					description: 'Permiten un aprovechamiento total del espacio. Ideales para brownies y cortes individuales perfectos.',
					highlight: true,
					points: [
						'Esquinas con cocción rápida',
						'Fácil de porcionar',
						'Cálculo Lado x Lado',
					],
				},
				{
					title: 'Moldes Rectangulares',
					icon: 'mdi:rectangle-outline',
					description: 'Perfectos para tartas grandes y bandejas de horno. Requieren vigilar los tiempos en el centro.',
					points: [
						'Gran capacidad total',
						'Versatilidad de uso',
						'Cálculo Ancho x Largo',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Fundamentos Matemáticos del Escalado de Superficies',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Para calcular el factor de conversión adecuado, debemos comparar las áreas de la base de ambos moldes siguiendo estas fórmulas estándar:',
		},
		{
			type: 'table',
			headers: ['Forma de Molde', 'Fórmula de Área', 'Consideración Clave'],
			rows: [
				['Circular', 'π × Radio²', 'El radio es la mitad del diámetro'],
				['Cuadrado', 'Lado × Lado', 'Misma medida para ambos ejes'],
				['Rectangular', 'Ancho × Largo', 'Ideal para bandejas y brownies'],
			],
		},
		{
			type: 'title',
			text: 'Errores Comunes al Cambiar el Tamaño de un Pastel',
			level: 3,
		},
		{
			type: 'list',
			items: [
				'<strong>Escalado lineal:</strong> Doblar el diámetro no dobla los ingredientes, los cuadruplica.',
				'<strong>Ignorar la altura:</strong> Si el molde es más profundo, el centro tardará mucho más en cocinarse.',
				'<strong>No ajustar agentes leudantes:</strong> A veces, la levadura química no necesita un escalado estrictamente lineal.',
				'<strong>Temperatura constante:</strong> En moldes masivos, es mejor bajar 10 grados y hornear más tiempo.',
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Límite de Capacidad',
			html: 'Nunca llenes un molde más de 2/3 de su capacidad total, independientemente del factor de conversión que hayas calculado.',
		},
		{
			type: 'title',
			text: 'Glosario de Términos para el Escalado',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Factor de Escalado',
					definition: 'Número por el cual se deben multiplicar todos los ingredientes para adaptar la receta al nuevo molde.',
				},
				{
					term: 'Área Superficial',
					definition: 'La medida de la base del molde. En repostería, es el dato más relevante para el volumen del bizcocho.',
				},
				{
					term: 'Radio',
					definition: 'Distancia desde el centro hasta el borde de un círculo. Crucial para la fórmula πr².',
				},
				{
					term: 'Transferencia de Calor',
					definition: 'Cómo viaja la energía térmica en el molde. Cambia drásticamente según la forma y material.',
				},
			],
		},
		{
			type: 'tip',
			html: 'Si pasas a un molde mucho más grande, utiliza tiras de horneado o un núcleo de calor en el centro para asegurar que el calor se distribuya uniformemente sin secar los bordes.',
		},
		{
			type: 'paragraph',
			html: 'Dominar el escalado de moldes te permite libertad creativa total en la cocina. Usa esta calculadora para eliminar las suposiciones y obtener resultados profesionales consistentes en cada horneado.',
		},
	],


	schemas: [
		{
			'@context': 'https://schema.org',
			'@type': 'WebApplication',
			'name': 'Escalador de Moldes JJLMoya',
			'url': 'https://utils.jjlmoya.com/es/escalador-moldes',
			'description': 'Herramienta profesional para convertir cantidades de ingredientes entre diferentes tamaños de moldes de repostería.',
			'applicationCategory': 'UtilitiesApplication',
			'operatingSystem': 'All',
		},
	],
};

