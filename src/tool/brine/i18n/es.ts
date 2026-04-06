import type { ToolLocaleContent } from "../../../types";

const title = "Calculadora de Salmuera por Equilibrio";
const description = "La ciencia del equilibrio para carnes jugosas y fermentados perfectos. Calcula la salinidad exacta basada en el peso total de ingrediente y agua.";
const faq = [
    {
      question: "¿Qué es el método de salmuera por equilibrio?",
      answer:
        "El método de equilibrio calcula la sal en función del peso total (agua + ingrediente), no solo del agua. Esto garantiza una concentración de sal consistente independientemente de la cantidad de ingrediente que uses.",
    },
    {
      question: "¿Cuánta sal necesito para hacer encurtidos?",
      answer:
        "Para vegetales fermentados (pepinillos, chucrut, kimchi) se recomienda entre 2% y 3% de sal. Para carnes, entre 1.5% y 2%. La calculadora te da la cantidad exacta según tu peso de ingredientes.",
    },
    {
      question: "¿Puedo congelar la carne después de la salmuera?",
      answer:
        "Sí, es ideal. La salmuera protege contra quemaduras por congelación y la carne estará lista para cocinar al descongelar. Sin embargo, evita congelar vegetales fermentados ya que se volverán papilla.",
    },
    {
      question: "¿Por qué añadir azúcar a la salmuera?",
      answer:
        "El azúcar tiene dos funciones: facilita la reacción de Maillard (dorado) en carnes y equilibra el sabor salino sin hacer que el producto sepa dulce. No convierte tu salmuera en un postre.",
    },
  ];
const howTo = [
    {
      name: "Determina tu objetivo",
      text: "Decide si vas a hacer carnes en salmuera (1.5-2%), fermentados (2-3%), salsas (3.5%) o conservas de larga duración (5%+). Cada una tiene un tiempo y propósito diferente.",
    },
    {
      name: "Pesa ingrediente y agua",
      text: "Pesa el producto (carne, vegetales) y el agua exactamente. La precisión es crítica: incluso 5g de diferencia cambia el resultado. Usa una balanza de precisión.",
    },
    {
      name: "Calcula con la herramienta",
      text: "Introduce los pesos en la calculadora y ajusta la salinidad según tu tipo de producto. La herramienta te dirá exactamente cuánta sal y azúcar necesitas.",
    },
    {
      name: "Disuelve y mezcla",
      text: "Disuelve completamente la sal en agua fría antes de añadir el producto. Para carnes, asegúrate de que la salmuera cubra todo. Para fermentados, el peso debe estar sumergido.",
    },
    {
      name: "Fermenta o cura",
      text: "Refrigera según el tipo: 4-48 horas para carnes, 1-3 semanas para fermentados. El tiempo exacto depende de la temperatura y tu gusto personal.",
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
  slug: "salmuera",
  title: "Calculadora de Salmuera por Equilibrio",
  description:
    "La ciencia del equilibrio para carnes jugosas y fermentados perfectos. Calcula la salinidad exacta basada en el peso total de ingrediente y agua.",
  ui: {
    calculator: "Calculadora",
    subtitle: "Introduce los pesos para calcular el equilibrio perfecto.",
    productWeight: "Peso del Producto (g)",
    waterWeight: "Peso del Agua (g)",
    desiredSalinity: "Salinidad Deseada",
    meat: "Carnes (1.5%)",
    fermented: "Fermentados (2.0%)",
    sauces: "Salsas (3.5%)",
    preserves: "Conservas (5.0%)",
    addSugar: "Añadir Azúcar",
    sugarHint: "Equilibra el sabor y ayuda al dorado (50% de la sal)",
    saltNeeded: "Sal Necesaria",
    sugarOptional: "Azúcar (Opcional)",
    estimatedTime: "Tiempo Estimado",
    product: "Producto",
    total: "Total",
    unitGrams: "gramos",
    timeMeatsLabel: "Tiempo (Carnes)",
    timeMeatsDuration: "4 - 48 Horas",
    timeVegetablesLabel: "Tiempo (Vegetales)",
    timeVegetablesDuration: "1 - 3 Semanas",
    timePreservesLabel: "Tiempo (Conservas)",
    timePreservesDuration: "1+ Meses",
  },
  faqTitle: "Preguntas Frecuentes",
  bibliographyTitle: "Fuentes y Referencias",
  faq: [
    {
      question: "¿Qué es el método de salmuera por equilibrio?",
      answer:
        "El método de equilibrio calcula la sal en función del peso total (agua + ingrediente), no solo del agua. Esto garantiza una concentración de sal consistente independientemente de la cantidad de ingrediente que uses.",
    },
    {
      question: "¿Cuánta sal necesito para hacer encurtidos?",
      answer:
        "Para vegetales fermentados (pepinillos, chucrut, kimchi) se recomienda entre 2% y 3% de sal. Para carnes, entre 1.5% y 2%. La calculadora te da la cantidad exacta según tu peso de ingredientes.",
    },
    {
      question: "¿Puedo congelar la carne después de la salmuera?",
      answer:
        "Sí, es ideal. La salmuera protege contra quemaduras por congelación y la carne estará lista para cocinar al descongelar. Sin embargo, evita congelar vegetales fermentados ya que se volverán papilla.",
    },
    {
      question: "¿Por qué añadir azúcar a la salmuera?",
      answer:
        "El azúcar tiene dos funciones: facilita la reacción de Maillard (dorado) en carnes y equilibra el sabor salino sin hacer que el producto sepa dulce. No convierte tu salmuera en un postre.",
    },
  ],
  howTo: [
    {
      name: "Determina tu objetivo",
      text: "Decide si vas a hacer carnes en salmuera (1.5-2%), fermentados (2-3%), salsas (3.5%) o conservas de larga duración (5%+). Cada una tiene un tiempo y propósito diferente.",
    },
    {
      name: "Pesa ingrediente y agua",
      text: "Pesa el producto (carne, vegetales) y el agua exactamente. La precisión es crítica: incluso 5g de diferencia cambia el resultado. Usa una balanza de precisión.",
    },
    {
      name: "Calcula con la herramienta",
      text: "Introduce los pesos en la calculadora y ajusta la salinidad según tu tipo de producto. La herramienta te dirá exactamente cuánta sal y azúcar necesitas.",
    },
    {
      name: "Disuelve y mezcla",
      text: "Disuelve completamente la sal en agua fría antes de añadir el producto. Para carnes, asegúrate de que la salmuera cubra todo. Para fermentados, el peso debe estar sumergido.",
    },
    {
      name: "Fermenta o cura",
      text: "Refrigera según el tipo: 4-48 horas para carnes, 1-3 semanas para fermentados. El tiempo exacto depende de la temperatura y tu gusto personal.",
    },
  ],
  bibliography: [
    {
      name: "The Noma Guide to Fermentation - René Redzepi & David Zilber",
      url: "https://www.nomacph.com/",
    },
    {
      name: "Salt, Fat, Acid, Heat - Samin Nosrat",
      url: "https://www.saltfatacidheat.com/",
    },
    {
      name: "Pollan, Michael - Cooked",
      url: "https://michaelpollan.com/",
    },
  ],
	seo: [
		{
			type: 'title',
			text: 'Guía Maestro de Salmuera por Equilibrio y Fermentación',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'La <strong>salmuera por equilibrio</strong> es la técnica definitiva para garantizar resultados jugosos y seguros. A diferencia de los métodos tradicionales, este calcula la sal basándose en el <strong>peso total</strong> del agua y el producto, asegurando una salinidad constante independientemente del volumen del recipiente.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '1.5 - 2%',
					label: 'Ratio Ideal Carnes',
					icon: 'mdi:food-steak',
				},
				{
					value: '2.5 - 3%',
					label: 'Ratio Fermentados',
					icon: 'mdi:flask-outline',
				},
				{
					value: '18-22°C',
					label: 'Temp. Fermentación',
					icon: 'mdi:thermometer',
				},
				{
					value: '0.5%',
					label: 'Azúcar de Equilibrio',
					icon: 'mdi:shaker-outline',
				},
			],
		},
		{
			type: 'title',
			text: 'Diferencias entre Salmuera Seca y Humeda',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 2,
			items: [
				{
					title: 'Salmuera Seca (Dry Brining)',
					icon: 'mdi:shaker-outline',
					description: 'Se aplica la sal directamente sobre la superficie del producto sin usar agua adicional.',
					points: [
						'Piel mucho más crujiente en aves',
						'Sabor más concentrado del ingrediente',
						'Ocupa menos espacio en la nevera',
						'Ideal para filetes y pollos enteros',
					],
				},
				{
					title: 'Salmuera Húmeda (Wet Brining)',
					icon: 'mdi:water',
					description: 'El producto se sumerge en una solución de agua y sal calculada por equilibrio.',
					highlight: true,
					points: [
						'Transferencia de humedad superior',
						'Permite introducir aromas (especias)',
						'Curado más uniforme en piezas grandes',
						'Ideal para pavo, lomo de cerdo y pescados',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Tiempos y Salinidades según la Aplicación',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Categoría', 'Salinidad (%)', 'Tiempo Mínimo', 'Objetivo Principal'],
			rows: [
				['Aves y Cerdo', '1.5% - 2.0%', '12 - 24 horas', 'Jugosidad y ternura'],
				['Pescados Blancos', '1.0% - 1.5%', '20 - 45 minutos', 'Firmeza de la carne'],
				['Lacto-fermentados', '2.5% - 3.0%', '7 - 21 días', 'Seguridad microbiológica'],
				['Salsas y Conservas', '3.5% - 5.0%', '1+ mes', 'Preservación a largo plazo'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: 'Identificación de Problemas en la Salmuera',
			html: 'Si la salmuera presenta un olor fétido (no ácido), moho de colores (negro, rosa) o el producto se vuelve extremadamente blando, deséchalo. El moho blanco superficial (levadura Kahm) es normal en fermentados y se puede retirar.',
		},
		{
			type: 'title',
			text: 'Glosario del Experto en Curados',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Ósmosis',
					definition: 'Proceso físico por el cual la sal penetra en las células del alimento para equilibrar las concentraciones.',
				},
				{
					term: 'Desnaturalización',
					definition: 'Efecto de la sal sobre las proteínas que permite que estas retengan más agua durante la cocción.',
				},
				{
					term: 'Levadura Kahm',
					definition: 'Capa blanca y fina que aparece a veces en la superficie de los fermentados; es inofensiva pero indica falta de acidez.',
				},
				{
					term: 'Lacto-fermentación',
					definition: 'Fermentación anaeróbica donde las bacterias convierten azúcares en ácido láctico, preservando el alimento.',
				},
			],
		},
		{
			type: 'tip',
			title: 'Calidad del Agua',
			html: 'Evita siempre el agua del grifo con mucho cloro, ya que puede inhibir el crecimiento de las bacterias buenas en tus fermentaciones. Usa agua filtrada o deja reposar el agua 24h.',
		},
		{
			type: 'paragraph',
			html: 'Nuestra calculadora de equilibrio elimina las conjeturas de tus recetas, permitiéndote cocinar con la confianza de un profesional del sector.',
		},
	],

  schemas: [faqSchema, howToSchema, appSchema],
};
