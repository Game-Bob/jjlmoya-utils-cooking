import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora PAC POD de Helado: Guía de Formulación Criogénica";
const description = "Calcula el poder anticongelante y el poder edulcorante para helados. Formula perfiles de azúcar precisos, porcentaje de sólidos y temperaturas de servicio.";
const faq = [
  {
    question: "¿Qué es el PAC en la formulación de helados?",
    answer: "PAC significa Potere Anticongelante, que representa el poder anticongelante. Determina cuánta agua permanece congelada a una temperatura de servicio dada, controlando la dureza física del helado."
  },
  {
    question: "¿Qué es el POD y por qué es importante?",
    answer: "POD significa Potere Dolcificante, que representa el poder edulcorante relativo. Mide la dulzura en relación a la sacarosa (azúcar de mesa), que tiene un valor base de 100."
  },
  {
    question: "¿Por qué equilibramos múltiples azúcares en el helado?",
    answer: "Diferentes azúcares tienen características únicas de PAC y POD. Por ejemplo, la dextrosa ofrece un alto poder anticongelante con una dulzura moderada, mientras que la sacarosa proporciona cuerpo y dulzura estándar. Mezclarlos permite controlar la cremosidad sin hacer el producto excesivamente dulce."
  },
  {
    question: "¿Cuál es el porcentaje óptimo de sólidos para helado?",
    answer: "El porcentaje total de sólidos típicamente oscila entre 36% y 42%. Un porcentaje de sólidos por debajo de este rango produce texturas heladas, mientras que un porcentaje por encima puede resultar en arenosidad o una sensación pesada en boca."
  }
];

const howTo = [
  {
    name: "Configurar la mezcla base y temperatura de servicio",
    text: "Define el peso de tu mezcla líquida base e ingresa la temperatura de servicio objetivo a la que planeas servir el helado."
  },
  {
    name: "Ingresar cantidades de azúcar",
    text: "Ajusta los controles deslizantes para diferentes azúcares como sacarosa, dextrosa, glucosa, azúcar invertido y trehalosa para construir tu receta."
  },
  {
    name: "Analizar valores de PAC y POD",
    text: "Compara los valores calculados de PAC y POD con los valores objetivo recomendados para tu temperatura objetivo."
  },
  {
    name: "Verificar la proporción de sólidos y la textura",
    text: "Asegúrate de que el porcentaje total de sólidos esté dentro de la zona óptima y revisa el indicador de textura para predecir la consistencia final."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({
    '@type': 'Question' as const,
    name: item.question,
    acceptedAnswer: { '@type': 'Answer' as const, text: item.answer },
  })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep' as const,
    name: step.name,
    text: step.text,
  })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'EUR' },
};

export const content: ToolLocaleContent = {
  slug: 'helado-pac-pod',
  title: 'Calculadora PAC POD de Helado',
  description: 'Calcula el poder anticongelante y el poder edulcorante para helados. Formula perfiles de azúcar precisos, porcentaje de sólidos y temperaturas de servicio.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: "Calculadora Criogénica de Helado",
    subtitle: "Panel de formulación criogénica de precisión para gastronomía molecular",
    unitLabel: "Sistema de Unidades",
    metricUnit: "Métrico (gramos)",
    imperialUnit: "Imperial (onzas)",
    baseWeightLabel: "Peso de la Mezcla Base",
    targetTempLabel: "Temperatura de Servicio",
    sucroseLabel: "Sacarosa",
    dextroseLabel: "Dextrosa",
    glucoseLabel: "Glucosa DE40",
    invertedLabel: "Azúcar Invertido",
    trehaloseLabel: "Trehalosa",
    pacLabel: "Poder Anticongelante (PAC)",
    podLabel: "Poder Edulcorante (POD)",
    solidsLabel: "Sólidos Totales",
    targetPacLabel: "PAC Objetivo",
    scoopabilityLabel: "Estado de Textura",
    stoneState: "Duro como Piedra",
    creamyState: "Cremosidad Perfecta",
    soupState: "Sopa Derretida",
    stoneDesc: "El poder anticongelante es demasiado bajo para esta temperatura. La mezcla se congelará como una roca.",
    creamyDesc: "El equilibrio de PAC es óptimo. El helado será cremoso y fácil de servir.",
    soupDesc: "El poder anticongelante es demasiado alto. El helado se derretirá rápidamente y permanecerá líquido.",
    gLabel: "g",
    ozLabel: "oz",
    cLabel: "grados C",
    fLabel: "grados F",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Principios Científicos de la Formulación Criogénica de Helados y Control de la Fase de Transición Vítrea',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El helado es una emulsión termodinámica multifásica compleja compuesta por células de aire, glóbulos de grasa, cristales de hielo y una fase sérica concentrada no congelada. Lograr la cremosidad y textura perfectas requiere un control cuidadoso de la depresión del punto de congelación del agua en la mezcla. A medida que la temperatura desciende por debajo del punto de congelación, el agua comienza a cristalizar en hielo. La concentración de solutos disueltos en el suero líquido restante aumenta, lo que reduce aún más su punto de congelación. El equilibrio entre los cristales de hielo y la fase de jarabe no congelada determina la dureza y suavidad del producto final.',
    },
    {
      type: 'title',
      text: 'Entendiendo PAC: Poder Anticongelante y Matemáticas de Depresión',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, o Potere Anticongelante, representa el poder anticongelante de un soluto en relación a la sacarosa. La sacarosa se designa como el estándar de referencia con un PAC de 100. El mecanismo se rige por propiedades coligativas, lo que significa que la depresión del punto de congelación depende del número de moléculas activas disueltas en agua, no de su masa. Los monosacáridos como la dextrosa (peso molecular 180 g/mol) proporcionan aproximadamente el doble de moléculas por gramo que los disacáridos como la sacarosa (peso molecular 342 g/mol), resultando en un PAC de 190. Valores de PAC más altos significan que más agua permanece líquida a una temperatura dada, evitando que el helado se congele demasiado duro.',
    },
    {
      type: 'title',
      text: 'Entendiendo POD: Poder Edulcorante y Equilibrio Sensorial',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, o Potere Dolcificante, es una métrica que mide la dulzura relativa en comparación con la sacarosa (valor base de 100). Al formular helados de alta calidad, equilibrar la dulzura es tan importante como la solidez estructural. Si un formulador solo usa sacarosa para bajar el punto de congelación (aumentar PAC), el helado se volverá empalagosamente dulce antes de alcanzar la suavidad deseada. Para evitar esta limitación, la gastronomía molecular utiliza azúcares como dextrosa (POD 70), trehalosa (POD 45) o glucosa atomizada DE40 (POD 40). Estos permiten configurar personalizadamente la curva de congelación sin abrumar el paladar.',
    },
    {
      type: 'title',
      text: 'Base de Datos Comparativa de Azúcares Comunes para Formulación Criogénica',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo de Azúcar', 'PAC Relativo', 'POD Relativo', 'Contenido de Sólidos (%)', 'Uso Culinario'],
      rows: [
        ['Sacarosa', '100', '100', '100%', 'Cuerpo estándar, perfil dulce limpio, línea base estándar'],
        ['Dextrosa', '190', '70', '100%', 'Deprime el punto de congelación, aumenta suavidad, reduce dulzura'],
        ['Glucosa DE40', '90', '40', '95%', 'Añade cuerpo, evita recristalización, aumenta viscosidad'],
        ['Azúcar Invertido', '190', '130', '70%', 'Añade suavidad, propiedades humectantes, realza sabores frutales'],
        ['Trehalosa', '100', '45', '90%', 'Agente de cuerpo con baja dulzura, protege proteínas, final limpio'],
      ],
    },
    {
      type: 'title',
      text: 'Proporción de Sólidos Totales y Estabilidad de la Emulsión Estructural',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los sólidos totales comprenden todos los elementos no acuosos en la formulación, incluyendo grasas, sólidos lácteos no grasos, estabilizantes, emulsionantes y azúcares. Una mezcla óptima de helado contiene entre 36% y 42% de sólidos totales. Si los sólidos son demasiado bajos, el alto contenido de agua provoca el crecimiento de grandes cristales de hielo y una textura gruesa. Si los sólidos son demasiado altos, la velocidad aumenta excesivamente, resultando en una sensación de boca pesada y posible arenosidad debido a la cristalización de la lactosa.',
    },
    {
      type: 'title',
      text: 'Pasos Prácticos para el Éxito en Formulación Criogénica',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Determina la temperatura de servicio objetivo de tu vitrina. Los gelatos se sirven típicamente a -12 grados Celsius, mientras que los helados industriales se sirven más fríos a -18 grados Celsius.',
        'Calcula el PAC objetivo usando la fórmula de temperatura estándar. Para -12 grados Celsius, el PAC objetivo es aproximadamente 216.',
        'Selecciona una mezcla de azúcares. Combina sacarosa para dulzura estándar, dextrosa para deprimir el punto de congelación y glucosa para mejorar cuerpo y textura.',
        'Verifica que los sólidos totales estén dentro del rango seguro de 36% a 42% para asegurar una aireación óptima y un perfil de fusión suave en el paladar.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
