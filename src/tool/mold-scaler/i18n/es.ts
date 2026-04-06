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
			type: 'paragraph',
			html: 'Muchos aficionados cometen el error de escalar los ingredientes de forma lineal basándose en el diámetro. Evita estos fallos típicos para asegurar el éxito en tu cocina:',
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
			text: 'Consejos para el Horneado de Recetas Escaladas',
			level: 3,
		},
		{
			type: 'tip',
			html: 'Si pasas a un molde mucho más grande, utiliza tiras de horneado o un núcleo de calor en el centro para asegurar que el calor se distribuya uniformemente sin secar los bordes.',
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

