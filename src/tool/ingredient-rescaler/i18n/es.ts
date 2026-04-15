import type { ToolLocaleContent } from '../../../types';

const title = 'Escalador de Ingredientes Ajuste de Recetas';
const description = 'Escala recetas automáticamente según el número de raciones. Calcula las cantidades exactas de ingredientes multiplicando o reduciendo tu receta sin complicaciones.';

const faq = [
  {
    question: '¿Por qué mi factor de conversión incluye decimales?',
    answer: 'Porque las proporciones culinarias no siempre son redondas. Si escalas una receta para 4 personas a 7, el factor es 1.75 exactamente. Los ingredientes se multiplican por ese número, aunque encuentres fracciones. Es más exacto que redondear arbitrariamente.',
  },
  {
    question: '¿Qué pasa si ingreso "1/2 cucharadita de sal"?',
    answer: 'El parser busca el número primero. Reconocerá "1" como cantidad, luego "/2" como parte de la unidad. El resultado será "0.5", y al escalar se multiplicará correctamente. Para fracciones como "1/2", ingresa "0.5" directamente (más claro) o la herramienta las interpreta como división.',
  },
  {
    question: '¿Debo redondear los resultados finales?',
    answer: 'Depende del ingrediente. Para harinas, sí. Para levaduras o especias, la precisión importa menos (escala al 75% de lo indicado). Para huevos: si obtienes 2.3, usa 2 completos + parte de un tercero (pesada), o redondea a 2 si el plato lo permite.',
  },
  {
    question: '¿Por qué no cambia el resultado cuando cambio las raciones?',
    answer: 'Asegúrate de que el campo de ingredientes tenga contenido. Si está vacío, no hay nada que escalar. También verifica que los números en tus ingredientes sean reconocibles (ej: "500g", "1/2 cucharadita").',
  },
  {
    question: '¿Funciona con medidas imperiales (onzas, tazas)?',
    answer: 'Técnicamente sí, la herramienta lee números y escala. Pero la precisión es limitada con tazas (volumen inconsistente). Se recomienda convertir a gramos antes de escalar.',
  },
];

const howTo = [
  {
    name: 'Ingresa tus raciones',
    text: 'En el campo "Original", coloca el número de personas para el que la receta está diseñada. En "Deseado", coloca el número de personas que vas a cocinar.',
  },
  {
    name: 'Pega tu lista de ingredientes',
    text: 'Copia y pega tu lista tal cual. Cada ingrediente en una línea. La herramienta reconoce números al inicio (500g, 1/2, 2.5) y escala automáticamente.',
  },
  {
    name: 'Ajusta según contexto',
    text: 'Los resultados son matemáticamente exactos, pero la cocina es arte. Especias: escala al 75%. Levaduras: menos de lo teórico en grandes cantidades. Tiempos: no se escalan nunca.',
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
  slug: 'escalador-ingredientes-recetas',
  title,
  description,
  ui: {
    servings: 'Raciones',
    original: 'Original',
    desired: 'Deseado',
    multiplyingFactor: 'Factor Multiplicador',
    ingredientsList: 'Lista de Ingredientes',
    pasteHere: 'Pega aquí tu lista.',
    exampleLine1: 'Ej:',
    exampleLine2: '500g Harina',
    exampleLine3: '300ml Agua',
    exampleLine4: '10g Sal',
    result: 'Resultado',
    copy: 'Copiar',
    copied: 'Copiado!',
    emptyState: 'Tus ingredientes ajustados aparecerán aquí...',
    defaultIngredient1: '200g Harina',
    defaultIngredient2: '100ml Leche',
    defaultIngredient3: '2 Huevos',
  },
  faqTitle: 'Preguntas Frecuentes',
  faq,
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'Harold McGee - On Food and Cooking: The Science and Lore of the Kitchen',
      url: 'https://en.wikipedia.org/wiki/Harold_McGee',
    },
    {
      name: 'The Flavor Bible by Karen Page and Andrew Dornenburg',
      url: 'https://www.flavorprints.com/',
    },
    {
      name: 'Modernist Cuisine - Técnicas de escalado científico',
      url: 'https://www.modernistcuisine.com/',
    },
  ],
  howTo,
	seo: [
		{
			type: 'title',
			text: 'Guía Maestro para el Escalado y Conversión de Recetas',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'El <strong>escalado de ingredientes</strong> es una de las tareas más críticas y propensas a errores en la cocina profesional. No se trata simplemente de multiplicar números, sino de entender cómo la química y la física de los alimentos reaccionan ante cambios de volumen y superficie.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: 'x1.75',
					label: 'Factor de 4 a 7 per.',
					icon: 'mdi:calculator',
				},
				{
					value: '75%',
					label: 'Ajuste de Especias',
					icon: 'mdi:shaker-outline',
				},
				{
					value: '0%',
					label: 'Escalado del Tiempo',
					icon: 'mdi:timer-off',
				},
				{
					value: '100g',
					label: 'Base de Referencia',
					icon: 'mdi:weight-gram',
				},
			],
		},
		{
			type: 'title',
			text: 'Diferencias entre Escalado Lineal y Contextual',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Escalado Lineal Matemático',
					icon: 'mdi:math-log',
					description: 'Multiplicación directa de todos los valores por el factor de conversión obtenido.',
					points: [
						'Perfecto para harinas y líquidos base',
						'Ideal para repostería de precisión fría',
						'Funciona bien en cambios pequeños (x2, x0.5)',
						'Fácil de calcular automáticamente',
					],
				},
				{
					title: 'Escalado Contextual de Cocina',
					icon: 'mdi:chef-hat',
					description: 'Ajuste de proporciones basado en la saturación de sabor y evaporación.',
					highlight: true,
					points: [
						'Evita el exceso de sal y especias',
						'Considera la superficie de evaporación',
						'Ajusta levaduras según fricción',
						'Requiere experiencia y criterio del chef',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Factores de Conversión por Número de Comensales',
			level: 3,
		},
		{
			type: 'table',
			headers: ['De Raciones', 'A Raciones', 'Factor (FC)', 'Dificultad de Ajuste'],
			rows: [
				['2 personas', '4 personas', 'x 2.0', 'Baja (Lineal)'],
				['4 personas', '6 personas', 'x 1.5', 'Baja (Lineal)'],
				['4 personas', '10 personas', 'x 2.5', 'Media (Ojo con especias)'],
				['4 personas', '25 personas', 'x 6.25', 'Alta (Contextual)'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Problemas Comunes al Doblar una Receta',
			html: 'Si notas que el sabor es demasiado intenso tras escalar (especialmente con picantes o sal), reduce el escalado de estos ingredientes específicos al 75%. Nunca dupliques el tiempo de cocción; la temperatura interna se alcanza según el grosor de la pieza, no según el peso total de la masa.',
		},
		{
			type: 'title',
			text: 'Glosario de Terminología de Estandarización',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Factor de Conversión',
					definition: 'Número por el que se multiplican todos los ingredientes: Cantidad Deseada / Cantidad Original.',
				},
				{
					term: 'Merma de Cocción',
					definition: 'Pérdida de peso de un ingrediente por evaporación o pérdida de grasa. No escala de forma lineal.',
				},
				{
					term: 'Peso Bruto vs Neto',
					definition: 'El peso antes y después de limpiar el ingrediente. Escalamos siempre sobre el peso de la receta original.',
				},
				{
					term: 'Rendimiento',
					definition: 'Cantidad total de producto terminado tras el escalado y la cocción.',
				},
			],
		},
		{
			type: 'tip',
			title: 'El truco del Huevo Batido',
			html: 'Si la calculadora indica 2.3 huevos, bate un huevo entero, pésalo y utiliza solo el porcentaje correspondiente (0.3). Es la única forma de mantener la precisión en repostería fina.',
		},
		{
			type: 'paragraph',
			html: 'Nuestra herramienta simplifica la matemática para que puedas dedicar tu energía a lo que realmente importa: la creatividad y el sabor.',
		},
	],

  schemas: [appSchema, faqSchema, howToSchema],
};
