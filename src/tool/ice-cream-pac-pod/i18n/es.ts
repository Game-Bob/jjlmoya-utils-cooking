import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora PAC POD de Helado Guia de Formulacion Criogenica";
const description = "Calcula el poder anticongelante y el poder edulcorante para helados. Formula perfiles de azucar precisos, porcentaje de solidos y temperaturas de servicio.";
const faq = [
  {
    question: "Que es PAC en la formulacion de helados?",
    answer: "PAC significa Potere Anticongelante, que representa el poder anticongelante. Determina cuanta agua permanece congelada a una temperatura de servicio dada, controlando la dureza fisica del helado."
  },
  {
    question: "Que es POD y por que es importante?",
    answer: "POD significa Potere Dolcificante, que representa el poder edulcorante relativo. Mide la dulzura en relacion a la sacarosa (azucar de mesa), que tiene un valor base de 100."
  },
  {
    question: "Por que equilibramos multiples azucares en el helado?",
    answer: "Diferentes azucares tienen caracteristicas unicas de PAC y POD. Por ejemplo, la dextrosa ofrece un alto poder anticongelante con una dulzura moderada, mientras que la sacarosa proporciona cuerpo y dulzura estandar. Mezclarlos permite controlar la cremosidad sin hacer el producto excesivamente dulce."
  },
  {
    question: "Cual es el porcentaje optimo de solidos para helado?",
    answer: "El porcentaje total de solidos tipicamente oscila entre 36% y 42%. Un porcentaje de solidos por debajo de este rango produce texturas heladas, mientras que un porcentaje por encima puede resultar en arenosidad o una sensacion pesada en boca."
  }
];

const howTo = [
  {
    name: "Configurar la mezcla base y temperatura de servicio",
    text: "Define el peso de tu mezcla liquida base e ingresa la temperatura de servicio objetivo a la que planeas servir el helado."
  },
  {
    name: "Ingresar cantidades de azucar",
    text: "Ajusta los controles deslizantes para diferentes azucares como sacarosa, dextrosa, glucosa, azucar invertido y trehalosa para construir tu receta."
  },
  {
    name: "Analizar valores de PAC y POD",
    text: "Compara los valores calculados de PAC y POD con los valores objetivo recomendados para tu temperatura objetivo."
  },
  {
    name: "Verificar la proporcion de solidos y la textura",
    text: "Asegurate de que el porcentaje total de solidos este dentro de la zona optima y revisa el indicador de textura para predecir la consistencia final."
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
  description: 'Calcula el poder anticongelante y el poder edulcorante para helados. Formula perfiles de azucar precisos, porcentaje de solidos y temperaturas de servicio.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: "Calculadora Criogenica de Helado",
    subtitle: "Panel de formulacion criogenica de precision para gastronomia molecular",
    unitLabel: "Sistema de Unidades",
    metricUnit: "Metrico (gramos)",
    imperialUnit: "Imperial (onzas)",
    baseWeightLabel: "Peso de la Mezcla Base",
    targetTempLabel: "Temperatura de Servicio",
    sucroseLabel: "Sacarosa",
    dextroseLabel: "Dextrosa",
    glucoseLabel: "Glucosa DE40",
    invertedLabel: "Azucar Invertido",
    trehaloseLabel: "Trehalosa",
    pacLabel: "Poder Anticongelante (PAC)",
    podLabel: "Poder Edulcorante (POD)",
    solidsLabel: "Solidos Totales",
    targetPacLabel: "PAC Objetivo",
    scoopabilityLabel: "Estado de Textura",
    stoneState: "Duro como Piedra",
    creamyState: "Cremosidad Perfecta",
    soupState: "Sopa Derretida",
    stoneDesc: "El poder anticongelante es demasiado bajo para esta temperatura. La mezcla se congelara como una roca.",
    creamyDesc: "El equilibrio de PAC es optimo. El helado sera cremoso y facil de servir.",
    soupDesc: "El poder anticongelante es demasiado alto. El helado se derretira rapidamente y permanecera liquido.",
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
      text: 'Principios Cientificos de la Formulacion Criogenica de Helados y Control de la Fase de Transicion Vitrea',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El helado es una emulsion termodinamica multifasica compleja compuesta por celulas de aire, globulos de grasa, cristales de hielo y una fase serica concentrada no congelada. Lograr la cremosidad y textura perfectas requiere un control cuidadoso de la depresion del punto de congelacion del agua en la mezcla. A medida que la temperatura desciende por debajo del punto de congelacion, el agua comienza a cristalizar en hielo. La concentracion de solutos disueltos en el suero liquido restante aumenta, lo que reduce aun mas su punto de congelacion. El equilibrio entre los cristales de hielo y la fase de jarabe no congelada determina la dureza y suavidad del producto final.',
    },
    {
      type: 'title',
      text: 'Entendiendo PAC: Poder Anticongelante y Matematicas de Depresion',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'PAC, o Potere Anticongelante, representa el poder anticongelante de un soluto en relacion a la sacarosa. La sacarosa se designa como el estandar de referencia con un valor de PAC de 100. El mecanismo se rige por propiedades coligativas, lo que significa que la depresion del punto de congelacion depende del numero de moleculas activas disueltas en agua, no de su masa. Los monosacaridos como la dextrosa (peso molecular 180 g/mol) proporcionan aproximadamente el doble de moleculas por gramo que los disacaridos como la sacarosa (peso molecular 342 g/mol), resultando en un PAC de 190. Valores de PAC mas altos significan que mas agua permanece liquida a una temperatura dada, evitando que el helado se congele demasiado duro.',
    },
    {
      type: 'title',
      text: 'Entendiendo POD: Poder Edulcorante y Equilibrio Sensorial',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'POD, o Potere Dolcificante, es una metrica que mide la dulzura relativa en comparacion con la sacarosa (valor base de 100). Al formular helados de alta calidad, equilibrar la dulzura es tan importante como la solidez estructural. Si un formulador solo usa sacarosa para bajar el punto de congelacion (aumentar PAC), el helado se volvera empalagosamente dulce antes de alcanzar la suavidad deseada. Para evitar esta limitacion, la gastronomia molecular utiliza azucares como dextrosa (POD 70), trehalosa (POD 45) o glucosa atomizada DE40 (POD 40). Estos permiten configurar personalizadamente la curva de congelacion sin abrumar el paladar.',
    },
    {
      type: 'title',
      text: 'Base de Datos Comparativa de Azucares Comunes para Formulacion Criogenica',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Tipo de Azucar', 'PAC Relativo', 'POD Relativo', 'Contenido de Solidos (%)', 'Uso Culinario'],
      rows: [
        ['Sacarosa', '100', '100', '100%', 'Cuerpo estandar, perfil dulce limpio, linea base estandar'],
        ['Dextrosa', '190', '70', '100%', 'Deprime el punto de congelacion, aumenta suavidad, reduce dulzura'],
        ['Glucosa DE40', '90', '40', '95%', 'Anade cuerpo, evita recristalizacion, aumenta viscosidad'],
        ['Azucar Invertido', '190', '130', '70%', 'Anade suavidad, propiedades humectantes, realza sabores frutales'],
        ['Trehalosa', '100', '45', '90%', 'Agente de cuerpo con baja dulzura, protege proteinas, final limpio'],
      ],
    },
    {
      type: 'title',
      text: 'Proporcion de Solidos Totales y Estabilidad de la Emulsion Estructural',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los solidos totales comprenden todos los elementos no acuosos en la formulacion, incluyendo grasas, solidos lacteos no grasos, estabilizantes, emulsionantes y azucares. Una mezcla optima de helado contiene entre 36% y 42% de solidos totales. Si los solidos son demasiado bajos, el alto contenido de agua provoca el crecimiento de grandes cristales de hielo y una textura gruesa. Si los solidos son demasiado altos, la viscosidad aumenta excesivamente, resultando en una sensacion pesada en boca y posible arenosidad debido a la cristalizacion de la lactosa.',
    },
    {
      type: 'title',
      text: 'Pasos Practicos para el Exito en Formulacion Criogenica',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Determina la temperatura de servicio objetivo de tu vitrina. Los gelatos se sirven tipicamente a -12 grados Celsius, mientras que los helados industriales se sirven mas frios a -18 grados Celsius.',
        'Calcula el PAC objetivo usando la formula de temperatura estandar. Para -12 grados Celsius, el PAC objetivo es aproximadamente 216.',
        'Selecciona una mezcla de azucares. Combina sacarosa para dulzura estandar, dextrosa para deprimir el punto de congelacion y glucosa para mejorar cuerpo y textura.',
        'Verifica que los solidos totales esten dentro del rango seguro de 36% a 42% para asegurar una aireacion optima y un perfil de fusion suave en el paladar.'
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
