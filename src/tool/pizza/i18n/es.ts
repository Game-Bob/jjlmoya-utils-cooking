import type { ToolLocaleContent } from "../../../types";

const title = "Calculadora de Masa Pizza Napolitana";
const description = "Calcula las proporciones exactas de harina, agua, sal y levadura para preparar la auténtica pizza napolitana en casa.";
const faq = [
  {
    question: "¿Cuál es la hidratación ideal para la pizza napolitana?",
    answer:
      "Según el protocolo AVPN, la hidratación estándar es 63-67%. Para principiantes, 60-62% es más manejable. Para pizzeros avanzados con harina fuerte (W300+), 70-75% produce masas extraordinarias pero requiere técnica.",
  },
  {
    question: "¿Cuánto tiempo debe fermentar la masa?",
    answer:
      "Mínimo 24 horas en nevera (4°C) para activar las enzimas. El óptimo es 48-72 horas. Más allá de 72 horas, necesitas harina muy fuerte (W300+) o la masa se vuelve ácida.",
  },
  {
    question: "¿Se puede hacer con levadura seca?",
    answer:
      "Sí. La levadura seca equivale a 0.4x la fresca (1g seca = 2.5g fresca). La calidad es similar, pero la fresca aporta un sabor más completo.",
  },
  {
    question: "¿Puedo hacer pizza napolitana en horno doméstico?",
    answer:
      "Sí, pero con adaptaciones. Precalienta a máximo (250-280°C) con piedra refractaria 45-60 minutos. La cocción durará 5-7 minutos en lugar de 60-90 segundos, pero el resultado es aceptable.",
  },
  {
    question: "¿Qué harina debo usar?",
    answer:
      "Ideal: Caputo Pizzeria (W260-280) o Manitoba (W350-400). Alternativa: cualquier harina con 11-13g de proteína por 100g. Evita harinas débiles (W130-160) para fermentaciones largas.",
  },
  {
    question: "¿La masa se rompe al estirar?",
    answer:
      "El gluten no está relajado. Deja reposar la bola 2-3 horas a temperatura ambiente. Si repites el error, el amasado fue insuficiente o la harina es muy débil.",
  },
];
const howTo = [
  {
    name: "Calcula las proporciones",
    text: "Usa esta calculadora para obtener los gramos exactos de cada ingrediente según el número de pizzas y el peso de cada bola.",
  },
  {
    name: "Mezcla la masa",
    text: "Combina la harina con agua tibia (22-25°C), sal (disuelta primero) y levadura. Amasa 8-10 minutos con amasadora o 15-20 minutos a mano.",
  },
  {
    name: "Fermenta en bloque",
    text: "Deja fermentar la masa entera 1-2 horas a temperatura ambiente (20-25°C) hasta que doble volumen.",
  },
  {
    name: "Divide en bolas",
    text: "Divide la masa en porciones del peso indicado. Deja reposar 15-20 minutos antes de formar bolas.",
  },
  {
    name: "Fermentación larga",
    text: "Coloca las bolas en recipiente hermético en nevera (4°C) durante 24-72 horas. Éste es el paso crítico que genera sabor y digestibilidad.",
  },
  {
    name: "Estira y hornea",
    text: "Saca del frío 30 minutos antes. Estira desde el centro hacia afuera. Hornea a máxima temperatura 60-90 segundos (leña) o 5-7 minutos (doméstico).",
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
  slug: "pizza",
  title: "Calculadora de Masa Pizza Napolitana",
  description:
    "Calcula las proporciones exactas de harina, agua, sal y levadura para preparar la auténtica pizza napolitana en casa.",
  faqTitle: "Preguntas Frecuentes",
  bibliographyTitle: "Referencias",
  ui: {
    parameters: "Parámetros",
    quantity: "Cantidad",
    pizzas: "pizzas",
    weight: "Peso por bola",
    small: "Pequeña (180g)",
    standard: "Estándar (260g)",
    large: "Grande (350g)",
    hydration: "Hidratación",
    classic: "Clásica (55-60%)",
    modern: "Moderna (65-70%)",
    high: "Alta (75%+)",
    salt: "Sal",
    fermentation_tip_title: "Tip de Fermentación",
    fermentation_tip:
      "Para una masa más digerible y sabrosa, deja fermentar la masa en bloque durante 24h en nevera (4°C) usando <strong>0.3g</strong> de levadura fresca por cada 100g de harina.",
    your_recipe: "Tu Receta",
    fresh_yeast: "Levadura Fresca",
    dry_yeast: "Seca",
    flour: "Harina (W260-300)",
    water: "Agua",
    salt_label: "Sal Marina",
    yeast: "Levadura",
    yeast_note: "Para 8h a T.A. (20°C)",
    total_weight: "Peso Total Masa",
    approx: "aprox.",
    visual_note:
      "El tamaño visual representa el diámetro aproximado de la pizza estirada según el peso de la bola.",
  },
  faq: [
    {
      question: "¿Cuál es la hidratación ideal para la pizza napolitana?",
      answer:
        "Según el protocolo AVPN, la hidratación estándar es 63-67%. Para principiantes, 60-62% es más manejable. Para pizzeros avanzados con harina fuerte (W300+), 70-75% produce masas extraordinarias pero requiere técnica.",
    },
    {
      question: "¿Cuánto tiempo debe fermentar la masa?",
      answer:
        "Mínimo 24 horas en nevera (4°C) para activar las enzimas. El óptimo es 48-72 horas. Más allá de 72 horas, necesitas harina muy fuerte (W300+) o la masa se vuelve ácida.",
    },
    {
      question: "¿Se puede hacer con levadura seca?",
      answer:
        "Sí. La levadura seca equivale a 0.4x la fresca (1g seca = 2.5g fresca). La calidad es similar, pero la fresca aporta un sabor más completo.",
    },
    {
      question: "¿Puedo hacer pizza napolitana en horno doméstico?",
      answer:
        "Sí, pero con adaptaciones. Precalienta a máximo (250-280°C) con piedra refractaria 45-60 minutos. La cocción durará 5-7 minutos en lugar de 60-90 segundos, pero el resultado es aceptable.",
    },
    {
      question: "¿Qué harina debo usar?",
      answer:
        "Ideal: Caputo Pizzeria (W260-280) o Manitoba (W350-400). Alternativa: cualquier harina con 11-13g de proteína por 100g. Evita harinas débiles (W130-160) para fermentaciones largas.",
    },
    {
      question: "¿La masa se rompe al estirar?",
      answer:
        "El gluten no está relajado. Deja reposar la bola 2-3 horas a temperatura ambiente. Si repites el error, el amasado fue insuficiente o la harina es muy débil.",
    },
  ],
  howTo: [
    {
      name: "Calcula las proporciones",
      text: "Usa esta calculadora para obtener los gramos exactos de cada ingrediente según el número de pizzas y el peso de cada bola.",
    },
    {
      name: "Mezcla la masa",
      text: "Combina la harina con agua tibia (22-25°C), sal (disuelta primero) y levadura. Amasa 8-10 minutos con amasadora o 15-20 minutos a mano.",
    },
    {
      name: "Fermenta en bloque",
      text: "Deja fermentar la masa entera 1-2 horas a temperatura ambiente (20-25°C) hasta que doble volumen.",
    },
    {
      name: "Divide en bolas",
      text: "Divide la masa en porciones del peso indicado. Deja reposar 15-20 minutos antes de formar bolas.",
    },
    {
      name: "Fermentación larga",
      text: "Coloca las bolas en recipiente hermético en nevera (4°C) durante 24-72 horas. Éste es el paso crítico que genera sabor y digestibilidad.",
    },
    {
      name: "Estira y hornea",
      text: "Saca del frío 30 minutos antes. Estira desde el centro hacia afuera. Hornea a máxima temperatura 60-90 segundos (leña) o 5-7 minutos (doméstico).",
    },
  ],
  bibliography: [
    {
      name: "Associazione Verace Pizza Napoletana",
      url: "https://www.pizzanapoletana.org/",
    },
    {
      name: "The Pizza Bible - Tony Gemignani",
      url: "https://www.amazon.es/Pizza-Bible-Everything-Need-Perfect/dp/0393634039/",
    },
    {
      name: "Franco Pepe - Pepe in Grani",
      url: "https://www.pepeingranitalia.com/",
    },
    {
      name: "Harina Caputo",
      url: "https://www.caputoprepara.com/",
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Guía Maestro para la Masa de Pizza Napolitana Auténtica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La <strong>pizza napolitana</strong> es mucho más que una receta: es un legado cultural protegido que exige precisión milimétrica. La base del éxito no reside solo en los ingredientes, sino en entender la interacción de las variables de tiempo, temperatura e hidratación.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: 'Temp. Cocción Ideal',
          icon: 'mdi:fire',
        },
        {
          value: '60-90s',
          label: 'Tiempo en Horno',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: 'Hidratación Estándar',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: 'Fuerza de Harina',
          icon: 'mdi:grain',
        },
      ],
    },
    {
      type: 'title',
      text: 'La Importancia Crucial de la Hidratación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La hidratación (porcentaje de agua respecto al peso de la harina) determina la textura del <strong>cornicione</strong>. Dominar este parámetro es lo que separa a un aficionado de un maestro pizzero.',
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Hidratación 55 a 60%',
          icon: 'mdi:water-minus',
          description: 'Masa muy manejable, ideal para principiantes y hornos domésticos de baja temperatura.',
          points: [
            'Formación fácil de la malla de gluten',
            'Masa menos pegajosa',
            'Corteza crujiente y firme',
          ],
        },
        {
          title: 'Hidratación 63 a 67%',
          icon: 'mdi:water',
          description: 'El estándar de la AVPN. Equilibrio perfecto para una masa ligera con alveolatura visible.',
          highlight: true,
          points: [
            'Textura elástica tradicional',
            'Ideal para hornos de leña',
            'Requiere técnica de amasado media',
          ],
        },
        {
          title: 'Hidratación 70%+',
          icon: 'mdi:water-plus',
          description: 'Pizzas contemporáneas con bordes gigantes. Muy difícil de manejar sin técnica avanzada.',
          points: [
            'Alvéolos extremadamente grandes',
            'Masa muy ligera y digestible',
            'Necesita harinas de gran fuerza',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tipos de Levadura y Cuál Elegir',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Levadura Fresca Prensada',
          icon: 'mdi:bread-slice-outline',
          description: 'La opción tradicional preferida por los maestros pizzeros. Aporta un perfil de sabor más complejo.',
          points: [
            'Sabor más profundo y limpio',
            'Acción enzimática más equilibrada',
            'Se disuelve fácilmente en agua tibia',
            'Caducidad corta (requiere frescura)',
          ],
        },
        {
          title: 'Levadura Seca Instantánea',
          icon: 'mdi:shaker-outline',
          description: 'Mucho más estable y fácil de almacenar. Ideal para tener siempre disponible en la despensa.',
          points: [
            'Larga conservación (hasta 2 años)',
            'No necesita rehidratación previa',
            'Tres veces más potente que la fresca',
            'Sabor ligeramente más neutro',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Guía de Harinas por su Índice de Fuerza W',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo de Harina', 'Fuerza (W)', 'Tiempo de Fermentación', 'Uso Recomendado'],
      rows: [
        ['Harina Débil', 'W130-180', '4-8 horas', 'Repostería rápida'],
        ['Media Fuerza', 'W200-240', '8-24 horas', 'Pizza rápida o pan simple'],
        ['Harina de Fuerza', 'W260-320', '24-72 horas', 'Auténtica Pizza Napolitana'],
        ['Gran Fuerza', 'W350+', '72+ horas', 'Panettones o masas de alta hidratación'],
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Control de Temperatura de Amasado',
      html: 'La masa no debe superar los 24°C al terminar el amasado. El calor excesivo de la fricción degrada el gluten y acelera la fermentación erráticamente.',
    },
    {
      type: 'title',
      text: 'Glosario para el Futuro Maestro Pizzero',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Cornicione',
          definition: 'El borde elevado y aireado de la pizza. Debe estar lleno de alvéolos y no tener miga compacta.',
        },
        {
          term: 'Maduración',
          definition: 'Proceso enzimático distinto a la fermentación donde las proteínas y azúcares se descomponen para mejorar sabor y digestibilidad.',
        },
        {
          term: 'Punto de Pasta',
          definition: 'Momento en que la masa alcanza su elasticidad y resistencia óptima sin ser pegajosa.',
        },
        {
          term: 'Autólisis',
          definition: 'Reposo tras mezclar solo harina y agua que facilita el desarrollo del gluten sin esfuerzo mecánico.',
        },
      ],
    },
    {
      type: 'tip',
      title: 'El truco de la Nevera',
      html: 'La fermentación en bloque de 24 horas a 4°C no solo facilita el manejo de la masa, sino que crea sabores complejos imposibles de obtener a temperatura ambiente.',
    },
    {
      type: 'paragraph',
      html: 'Nuestra calculadora automatiza las proporciones para que puedas centrarte en lo más importante: la técnica y el amor por el producto final.',
    },
  ],

  schemas: [faqSchema, howToSchema, appSchema],
};
