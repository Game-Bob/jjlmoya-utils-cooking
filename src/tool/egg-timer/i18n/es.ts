import type { ToolLocaleContent } from "../../../types";

const title = "Cronómetro de Huevos Científico";
const description = "Calculadora termodinámica para la cocción perfecta de huevos según altitud, temperatura y tamaño.";
const faq = [
    {
      question: "¿Por qué importa la altitud al cocer huevos?",
      answer:
        "El agua no siempre hierve a 100°C. A mayor altitud, menor presión atmosférica, y el agua hierve a menor temperatura. En Madrid (600m) hierve a 98°C, requiriendo más tiempo que a nivel del mar. En el Everest (70°C) es imposible cocer un huevo duro.",
    },
    {
      question: "¿Huevo de nevera o temperatura ambiente?",
      answer:
        "Huevo de nevera (4°C) necesita más tiempo que uno a temperatura ambiente (20°C). La diferencia puede ser de 2-3 minutos. Esta calculadora ajusta el tiempo automáticamente según la temperatura inicial.",
    },
    {
      question: "¿Por qué aparece un anillo verde en la yema?",
      answer:
        "Es sulfuro ferroso, resultado de sobrecocción. Cuando superas 80°C por mucho tiempo, el azufre de la clara reacciona con el hierro de la yema. No es tóxico, pero indica que te pasaste de tiempo. Usa baño de hielo inmediato para evitarlo.",
    },
    {
      question: "¿Cómo pelo un huevo fácilmente?",
      answer:
        "Usa huevos de 1-2 semanas (no frescos del día), empieza con agua hirviendo (no fría), y sumerge en agua helada inmediatamente al terminar. El choque térmico contrae el huevo y facilita el pelado.",
    },
  ];
const howTo = [
    {
      name: "Selecciona la temperatura inicial",
      text: "Elige si tu huevo está en nevera (4°C) o a temperatura ambiente (20°C). Esta es la temperatura interna del huevo, no la del aire.",
    },
    {
      name: "Elige el tamaño del huevo",
      text: "S (pequeño, 53g), M (mediano, 58g), L (grande, 63g), o XL (muy grande, 73g). El tamaño determina cuánto tiempo tarda el calor en alcanzar el centro.",
    },
    {
      name: "Especifica tu altitud",
      text: "Introduce manualmente, usa el botón Mar para nivel del mar (0m), Madrid para 600m, o geoposiciona tu ubicación. Cada 300m baja 1°C el punto de ebullición del agua.",
    },
    {
      name: "Aplica choque térmico",
      text: "Cuando el temporizador suene, sumerge inmediatamente en agua con hielo. Esto detiene la cocción y facilita el pelado. El choque térmico es crítico para la precisión.",
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
  slug: "huevos",
  title: "Cronómetro de Huevos Científico",
  description:
    "Calculadora termodinámica para la cocción perfecta de huevos según altitud, temperatura y tamaño.",
  faqTitle: "Preguntas Frecuentes",
  bibliographyTitle: "Referencias Científicas",
  ui: {
    parameters: "Parámetros",
    initial_temperature: "Temperatura Inicial",
    fridge: "Nevera",
    ambient: "Ambiente",
    egg_size: "Tamaño del Huevo",
    altitude: "Altitud",
    use_location: "Usar mi ubicación",
    altitude_help:
      "El agua hierve a menor temperatura a mayor altitud, afectando el tiempo de cocción.",
    sea_level: "Mar",
    soft_cooked: "Clara Cuajada",
    soft_description: "Yema líquida, clara blanca y suave.",
    mollet: "Mollet",
    mollet_description: "Yema cremosa, clara firme.",
    hard_cooked: "Duro",
    hard_description: "Totalmente cocido, yema firme.",
  },
  faq: [
    {
      question: "¿Por qué importa la altitud al cocer huevos?",
      answer:
        "El agua no siempre hierve a 100°C. A mayor altitud, menor presión atmosférica, y el agua hierve a menor temperatura. En Madrid (600m) hierve a 98°C, requiriendo más tiempo que a nivel del mar. En el Everest (70°C) es imposible cocer un huevo duro.",
    },
    {
      question: "¿Huevo de nevera o temperatura ambiente?",
      answer:
        "Huevo de nevera (4°C) necesita más tiempo que uno a temperatura ambiente (20°C). La diferencia puede ser de 2-3 minutos. Esta calculadora ajusta el tiempo automáticamente según la temperatura inicial.",
    },
    {
      question: "¿Por qué aparece un anillo verde en la yema?",
      answer:
        "Es sulfuro ferroso, resultado de sobrecocción. Cuando superas 80°C por mucho tiempo, el azufre de la clara reacciona con el hierro de la yema. No es tóxico, pero indica que te pasaste de tiempo. Usa baño de hielo inmediato para evitarlo.",
    },
    {
      question: "¿Cómo pelo un huevo fácilmente?",
      answer:
        "Usa huevos de 1-2 semanas (no frescos del día), empieza con agua hirviendo (no fría), y sumerge en agua helada inmediatamente al terminar. El choque térmico contrae el huevo y facilita el pelado.",
    },
  ],
  bibliography: [
    {
      name: "The Science of Boiling an Egg - Charles D. H. Williams",
      url: "https://newton.ex.ac.uk/teaching/CDHW/Egg/",
    },
    {
      name: "The Food Lab: The Science of the Best Hard Boiled Eggs - J. Kenji López-Alt",
      url: "https://www.seriouseats.com/the-food-lab-hard-boiled-eggs-recipe",
    },
    {
      name: "The Food Lab: Perfect Soft Boiled Eggs",
      url: "https://www.seriouseats.com/soft-boiled-eggs-recipe",
    },
  ],
  howTo: [
    {
      name: "Selecciona la temperatura inicial",
      text: "Elige si tu huevo está en nevera (4°C) o a temperatura ambiente (20°C). Esta es la temperatura interna del huevo, no la del aire.",
    },
    {
      name: "Elige el tamaño del huevo",
      text: "S (pequeño, 53g), M (mediano, 58g), L (grande, 63g), o XL (muy grande, 73g). El tamaño determina cuánto tiempo tarda el calor en alcanzar el centro.",
    },
    {
      name: "Especifica tu altitud",
      text: "Introduce manualmente, usa el botón Mar para nivel del mar (0m), Madrid para 600m, o geoposiciona tu ubicación. Cada 300m baja 1°C el punto de ebullición del agua.",
    },
    {
      name: "Aplica choque térmico",
      text: "Cuando el temporizador suene, sumerge inmediatamente en agua con hielo. Esto detiene la cocción y facilita el pelado. El choque térmico es crítico para la precisión.",
    },
  ],
	seo: [
		{
			type: 'title',
			text: 'Guía Maestro para la Cocción Perfecta del Huevo',
			level: 2,
		},
		{
			type: 'paragraph',
			html: 'Cocer un huevo es un ejercicio de <strong>termodinámica aplicada</strong>. La precisión en la temperatura inicial, el tamaño del huevo y la altitud geográfica determina si obtendrás una yema líquida sedosa o un sólido sobrecocido con el indeseado anillo verde.',
		},
		{
			type: 'stats',
			columns: 4,
			items: [
				{
					value: '62°C',
					label: 'Coagulación Clara',
					icon: 'mdi:egg-outline',
				},
				{
					value: '68°C',
					label: 'Coagulación Yema',
					icon: 'mdi:egg-fried',
				},
				{
					value: '-1°C',
					label: 'Ebullición / 300m',
					icon: 'mdi:mountain',
				},
				{
					value: '0s',
					label: 'Error Tolerado',
					icon: 'mdi:timer-check-outline',
				},
			],
		},
		{
			type: 'title',
			text: 'Comparativa de Estados de Cocción',
			level: 3,
		},
		{
			type: 'comparative',
			columns: 3,
			items: [
				{
					title: 'Huevo Pasado por Agua',
					icon: 'mdi:coffee-outline',
					description: 'Clara parcialmente cuajada y yema totalmente líquida.',
					points: [
						'Textura muy delicada',
						'Ideal para mojar pan',
						'Cocción rápida (3-4 min)',
						'Difícil de pelar',
					],
				},
				{
					title: 'Huevo Mollet / Ceroso',
					icon: 'mdi:water-percent',
					description: 'Clara firme y yema cremosa, densa pero no sólida.',
					highlight: true,
					points: [
						'El estándar gourmet',
						'Yema con textura de miel',
						'Piel elástica y firme',
						'Perfecto para ensaladas',
					],
				},
				{
					title: 'Huevo Duro / Cocido',
					icon: 'mdi:circle-slice-8',
					description: 'Totalmente sólido pero tierno, sin anillo verde.',
					points: [
						'Yema opaca y firme',
						'Fácil transporte y pelado',
						'Ideal para rellenar',
						'Requiere enfriado rápido',
					],
				},
			],
		},
		{
			type: 'title',
			text: 'Punto de Ebullición según la Altitud',
			level: 3,
		},
		{
			type: 'table',
			headers: ['Ciudad / Altitud', 'Metros (msnm)', 'Ebullición (°C)', 'Tiempo Extra'],
			rows: [
				['Nivel del Mar (Cádiz)', '0m', '100°C', '0s'],
				['Madrid', '650m', '97.8°C', '+25s'],
				['Ciudad de México', '2240m', '92.6°C', '+75s'],
				['La Paz (Bolivia)', '3640m', '88.1°C', '+140s'],
			],
		},
		{
			type: 'diagnostic',
			variant: 'warning',
			title: '¿Yema con Anillo Verde o Difícil de Pelar?',
			html: 'El anillo verde es <strong>sulfuro ferroso</strong> caused por sobrecocción (reacción del azufre de la clara con el hierro de la yema). Si el huevo no se pela bien, es por ser demasiado fresco; el pH bajo hace que la clara se pegue a la membrana. Usa huevos de 1 semana y choque térmico en hielo.',
		},
		{
			type: 'title',
			text: 'Glosario de Ciencias del Huevo',
			level: 3,
		},
		{
			type: 'glossary',
			items: [
				{
					term: 'Ovotransferrina',
					definition: 'Proteína de la clara que coagula primero (62°C), dando la estructura blanca inicial.',
				},
				{
					term: 'Ovalbúmina',
					definition: 'Proteína mayoritaria que requiere más calor (80°C) para una firmeza total.',
				},
				{
					term: 'Presión Atmosférica',
					definition: 'Factor que determina la temperatura del agua hirviendo; a menor presión, menor temperatura.',
				},
				{
					term: 'Choque Térmico',
					definition: 'Inmersión en agua helada para detener la cocción residual de forma instantánea.',
				},
			],
		},
		{
			type: 'tip',
			title: 'El truco del Vinagre',
			html: 'Añade un chorro de vinagre al agua. Si la cáscara se agrieta, el ácido ayudará a coagular la clara que escape rápidamente, sellando la grieta y salvando el huevo.',
		},
		{
			type: 'paragraph',
			html: 'Nuestra calculadora utiliza la ecuación de Charles Williams para ajustar cada segundo según tu ubicación exacta y el estado de tu nevera.',
		},
	],

  schemas: [faqSchema, howToSchema, appSchema],
};
