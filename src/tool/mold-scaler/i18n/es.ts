import type { ToolLocaleContent } from '../../../types';

export const content: ToolLocaleContent = {
	slug: 'escalador-moldes',
	title: 'Escalador de Moldes para Repostería',
	description:
		'Calcula automáticamente el factor multiplicador de ingredientes al cambiar de molde. Soporta moldes redondos, cuadrados y rectangulares.',
	faqTitle: 'Preguntas Frecuentes',
	bibliographyTitle: 'Referencias',

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
			question: '¿Cómo calcula el escalador el factor multiplicador?',
			answer:
				'Calcula el área total de cada molde: para moldes redondos usa π×r², para cuadrados lado², y para rectangulares ancho×largo. El factor es la razón entre el área del molde objetivo y la del original.',
		},
		{
			question: '¿Puedo cambiar entre diferentes formas de molde?',
			answer:
				'Sí, completamente. Puedes cambiar el molde original de redondo a rectangular, y tu molde objetivo de cuadrado a redondo. El cálculo se actualiza automáticamente.',
		},
		{
			question: '¿Qué pasa si los moldes tienen la misma área?',
			answer:
				'Si tienen la misma área, el factor multiplicador será x1.00 y podrás usar exactamente las mismas cantidades de ingredientes sin modificación.',
		},
		{
			question: '¿Cómo añado más ingredientes?',
			answer:
				'Haz clic en "Añadir Ingrediente" y aparecerá un nuevo campo. Escribe el nombre del ingrediente y su peso original en gramos. El sistema calculará automáticamente la cantidad final basada en el factor.',
		},
		{
			question: '¿Puedo editar los nombres de los ingredientes?',
			answer:
				'Sí, todos los campos son editables. Cambia el nombre del ingrediente, el peso original, y la cantidad final se recalculará automáticamente cuando cambies el factor.',
		},
	],

	bibliography: [
		{
			name: 'Ciencia de la Repostería: Escalado de Recetas',
			url: 'https://www.scienceofdough.com/',
		},
		{
			name: 'Professional Pastry Chef - The Culinary Institute of America',
			url: 'https://www.ciachef.edu/',
		},
	],

	howTo: [
		{
			name: 'Selecciona la forma del molde original',
			text: 'Elige si tu molde original es redondo, cuadrado o rectangular.',
		},
		{
			name: 'Ingresa las dimensiones',
			text: 'Introduce el diámetro (redondo), lado (cuadrado) o ancho y largo (rectangular) en centímetros.',
		},
		{
			name: 'Configura tu molde objetivo',
			text: 'Selecciona la forma y dimensiones del molde que quieres usar para la receta escalada.',
		},
		{
			name: 'Observa el factor y ajusta ingredientes',
			text: 'El sistema mostrará automáticamente el factor multiplicador y te permitirá añadir ingredientes para calcular sus cantidades finales.',
		},
	],

	seo: [
		{
			type: 'title',
			text: 'Escalado Profesional de Recetas de Repostería',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'En repostería, el escalado de recetas no es tan simple como multiplicar cada ingrediente por una constante. El verdadero desafío radica en entender cómo los <strong>moldes de diferentes tamaños y formas</strong> afectan la proporción de ingredientes y, por lo tanto, el resultado final del pastel, tarta o postre.',
		},
		{
			type: 'paragraph',
			html: 'Una receta diseñada para un molde redondo de 20 cm de diámetro no puede simplemente multiplicarse por 1.5 cuando usas un molde de 25 cm. El cálculo correcto requiere entender <strong>geometría y proporciones de área</strong>.',
		},
		{
			type: 'title',
			text: 'Fundamentos Matemáticos del Escalado',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'El factor multiplicador se basa en la <strong>razón de áreas</strong> entre los moldes. Si el molde objetivo tiene el doble de área que el original, necesitarás multiplicar cada ingrediente por 2 (aproximadamente). Para moldes circulares, el área se calcula como A = π × r², donde r es el radio. Un cambio de diámetro implica un cambio cuadrático en área, no lineal.',
		},
		{
			type: 'table',
			headers: ['Forma', 'Fórmula de Área', 'Ejemplo'],
			rows: [
				['Redondo', 'π × r²', 'r = 10 cm → 314.16 cm²'],
				['Cuadrado', 'lado²', 'lado = 20 cm → 400 cm²'],
				['Rectangular', 'ancho × largo', 'ancho = 20 cm, largo = 30 cm → 600 cm²'],
			],
		},
		{
			type: 'title',
			text: 'Por Qué No Puedes Simplemente Multiplicar Ingredientes',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Muchos panaderos principiantes cometen el error de multiplicar todos los ingredientes de forma lineal. Por ejemplo, si duplican el tamaño del molde, multiplican cada ingrediente por 2. <strong>Esto es matemáticamente incorrecto</strong> cuando el cambio es en área, no en volumen lineal.',
		},
		{
			type: 'paragraph',
			html: 'Los factores que se ven afectados de manera <strong>no lineal</strong> incluyen el tiempo de cocción (que puede variar no proporcionalmente con el tamaño), la distribución del calor, y en ciertos casos, la concentración de ingredientes químicos activos como levadura o polvo de hornear.',
		},
		{
			type: 'title',
			text: 'Aplicación Práctica: Ejemplo Detallado',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Imagine que tiene una receta para un molde redondo de 20 cm de diámetro (radio = 10 cm, área = 314.16 cm²). Ahora quiere usar un molde redondo de 25 cm de diámetro (radio = 12.5 cm, área = 490.87 cm²).',
		},
		{
			type: 'paragraph',
			html: 'El factor multiplicador es: 490.87 ÷ 314.16 = <strong>1.56</strong>. Si la receta original lleva 200 g de harina, necesitarás 200 × 1.56 = <strong>312 g</strong> de harina, no 250 g como erróneamente podrías pensar al pensar en un aumento del 25% en diámetro.',
		},
		{
			type: 'title',
			text: 'Moldes Rectangulares: Complejidad Adicional',
			level: 3,
		},
		{
			type: 'paragraph',
			html: 'Cuando cambias de un molde redondo a uno rectangular (o viceversa), además de considerar el área, debes tener en cuenta cómo la <strong>forma afecta la distribución del calor</strong> durante el horneado. Un pastel en un molde rectangular estrecho será más alto y cocerá diferente que el mismo volumen en un molde redondo ancho.',
		},
		{
			type: 'title',
			text: 'Ajustes Adicionales Más Allá del Escalado',
			level: 2,
		},
		{
			type: 'list',
			items: [
				'<strong>Tiempo de cocción:</strong> Aumenta en un 10-25% si el molde es significativamente más grande. Usa un palillo o termómetro para verificar el punto de cocción.',
				'<strong>Temperatura:</strong> Algunos panaderos reducen la temperatura en 10-15°C para moldes muy grandes, permitiendo que el centro se cocine sin que los bordes se quemen.',
				'<strong>Levaduras y agentes activos:</strong> Si usas polvo de hornear o levadura, el escalado puede requerir ajustes. No todos los ingredientes activos escalan linealmente con el área.',
				'<strong>Humedad:</strong> Un molde más grande puede perder humedad diferente. Considera cubrir con papel aluminio si es necesario.',
			],
		},
		{
			type: 'tip',
			html: '<strong>Consejo profesional:</strong> Antes de confiar en una receta escalada, realiza una prueba pequeña. El escalado matemático es correcto para la mayoría de casos, pero cada horno y molde tiene sus propias características. Documenta los resultados para futuras referencias.',
		},
	],

	schemas: [],
};
