import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Baño de Esferificación Guía de Gastronomía Molecular de Precisión";
const description = "Calcula las proporciones exactas de alginato de sodio y lactato de calcio para esferificación directa e inversa. Corrige la viscosidad y acidez con xantana y citrato.";
const faq = [
  {
    question: "¿Cuál es la diferencia entre esferificación directa e inversa?",
    answer: "La esferificación directa añade alginato de sodio a la base aromatizada y la sumerge en un baño de calcio, creando una membrana fina que continúa gelificándose hacia adentro. La esferificación inversa añade calcio a la base y la sumerge en un baño de alginato, creando una membrana que crece hacia afuera, deteniendo el proceso de gelificación al enjuagarla."
  },
  {
    question: "¿Por qué mis esferas salen planas o no se hunden?",
    answer: "Si el líquido base es menos denso que el baño de alginato de sodio, flotará en lugar de formar una esfera. Añadir una pequeña cantidad de goma xantana aumenta la viscosidad de la base, permitiendo que se hunda y forme esferas perfectas."
  },
  {
    question: "¿Qué hace el citrato de sodio en la esferificación?",
    answer: "El citrato de sodio es un secuestrante que se une a los iones de calcio y eleva el pH. Si un líquido base es muy ácido (pH inferior a 4.5) o contiene calcio, el alginato de sodio gelificará prematuramente. Añadir citrato neutraliza esta acidez."
  },
  {
    question: "¿Puedo usar cualquier agua para el baño de calcio?",
    answer: "El agua del grifo con alto contenido mineral puede hacer que el alginato de sodio se aglutine o gelifique prematuramente. Es mejor usar agua destilada o embotellada baja en calcio."
  }
];

const howTo = [
  {
    name: "Selecciona el método de esferificación",
    text: "Elige Directa para gelificación fina e inmediata, o Inversa para líquidos que contengan alcohol, lácteos o calcio."
  },
  {
    name: "Ingresa los pesos de los líquidos",
    text: "Introduce el peso de tu líquido base aromatizado y del baño de agua en tus unidades preferidas."
  },
  {
    name: "Añade correcciones de textura y acidez",
    text: "Activa Goma Xantana si tu líquido base es fino, o Citrato de Sodio si es muy ácido."
  },
  {
    name: "Mide los ingredientes",
    text: "Pesa las cantidades exactas de alginato de sodio, lactato o cloruro de calcio, y agentes correctores mostrados en la pantalla de resumen."
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
  slug: 'calculadora-bano-esferificacion',
  title: 'Calculadora de Baño de Esferificación',
  description: 'Calcula las proporciones exactas de alginato de sodio y lactato de calcio para esferificación directa e inversa. Corrige la viscosidad y acidez con xantana y citrato.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: "Calculadora de Baño de Esferificación",
    subtitle: "Control preciso de proporciones para esferificación directa e inversa",
    unitLabel: "Sistema de Medida",
    metricUnit: "Métrico (g / gramos)",
    imperialUnit: "Imperial (oz / onzas)",
    methodLabel: "Método de Esferificación",
    directMethod: "Esferificación Directa",
    reverseMethod: "Esferificación Inversa",
    baseWeightLabel: "Peso del Líquido Base",
    bathWeightLabel: "Peso del Agua del Baño",
    xanthanLabel: "Activar Goma Xantana (Corrección de Viscosidad)",
    citrateLabel: "Activar Citrato de Sodio (Acidez / Secuestrante de pH)",
    recipeTitle: "Resumen de la Receta Calculada",
    baseGellingAgent: "Agente Gelificante Base",
    bathGellingAgent: "Agente Gelificante del Baño",
    xanthanGum: "Goma Xantana (Espesante)",
    sodiumCitrate: "Citrato de Sodio (Tampón)",
    warningLabel: "Advertencia de Solubilidad",
    warningDesc: "El peso del agente requerido está cerca o supera el límite de solubilidad para este volumen de líquido. La disolución puede llevar más tiempo o requerir calentamiento suave.",
    directDesc: "Ideal para líquidos ligeros con bajo contenido de calcio. Crea esferas delicadas de piel fina que deben servirse inmediatamente.",
    reverseDesc: "Ideal para lácteos, alcohol, líquidos ricos en calcio o ácidos. Crea esferas estables que no continúan gelificándose después del enjuague.",
    sodiumAlginate: "Alginato de Sodio",
    calciumChloride: "Cloruro de Calcio",
    calciumLactate: "Lactato de Calcio",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Ciencia de la Esferificación Molecular y la Gelificación con Hidrocoloides',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La esferificación es una técnica culinaria revolucionaria que encapsula un núcleo líquido dentro de una membrana gelificada fina. Originada en el sector del envasado industrial en la década de 1940, fue adaptada para la cocina modernista a principios de los 2000. La química subyacente se basa en las interacciones de los hidrocoloides, específicamente el entrecruzamiento de los polímeros de alginato de sodio cuando se exponen a cationes divalentes de calcio.',
    },
    {
      type: 'title',
      text: 'La Química Molecular: Alginato de Sodio e Iones de Calcio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El alginato de sodio es un polisacárido extraído de algas pardas, compuesto por cadenas lineales de ácido beta-D-manurónico (bloques M) y ácido alfa-L-gulurónico (bloques G). En su forma de sal sódica, es completamente soluble en agua, formando una solución viscosa. Cuando se introducen iones de calcio (como cloruro de calcio o lactogluconato de calcio), los iones divalentes de calcio (Ca2+) reemplazan a los iones monovalentes de sodio (Na+). Debido a que el calcio tiene dos cargas positivas, se une a dos bloques G en cadenas poliméricas adyacentes, puenteándolos. Este proceso, científicamente descrito como el <strong>modelo de caja de huevos</strong> de gelificación, une las cadenas independientes de polisacáridos en una red de hidrogel tridimensional rígida que atrapa agua y moléculas de sabor.',
    },
    {
      type: 'title',
      text: 'Mecanismos de Esferificación Directa versus Esferificación Inversa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los dos métodos principales de esferificación difieren en dónde se colocan el agente gelificante y las sales de calcio, lo que lleva a diferentes propiedades mecánicas:',
    },
    {
      type: 'list',
      items: [
        '<strong>Esferificación Directa:</strong> El alginato de sodio se disuelve en el líquido base aromatizado, que luego se deja caer en un baño de calcio (generalmente 1.0% de cloruro de calcio). La gelificación comienza instantáneamente en el límite. Debido a que los iones de calcio son pequeños y móviles, migran continuamente del baño al núcleo de la esfera, haciendo que la membrana de gel crezca hacia adentro. Si no se enjuaga y sirve inmediatamente, la esfera eventualmente se gelificará completamente, convirtiéndose en una perilla sólida y gomosa.',
        '<strong>Esferificación Inversa:</strong> El lactogluconato de calcio (2.0%) se disuelve en el líquido base aromatizado, que luego se deja caer en un baño de alginato de sodio (0.5%). Debido a que las moléculas de alginato son grandes y de movimiento lento, no pueden cruzar fácilmente la barrera de gel recién formada. En cambio, los iones de calcio migran hacia afuera al baño, haciendo crecer la membrana hacia afuera. Esto detiene la gelificación inmediatamente una vez que la esfera se retira y se enjuaga en agua clara, preservando un núcleo completamente líquido indefinidamente.'
      ],
    },
    {
      type: 'title',
      text: 'Superando Barreras de Acidez y pH con Citrato de Sodio',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'El alginato de sodio es altamente sensible a los ácidos. Cuando el pH de un líquido base aromatizado cae por debajo de 4.5, las moléculas de alginato no pueden hidratarse adecuadamente. En lugar de disolverse, las cadenas de alginato precipitan en ácido algínico insoluble, formando grumos fibrosos. Para resolver esto, los chefs usan <strong>citrato de sodio</strong> como agente tampón. El citrato de sodio neutraliza los iones de hidrógeno, elevando el pH de ingredientes ácidos como el maracuyá o el jugo de lima por encima del umbral crítico de 4.5, permitiendo que el alginato se hidrate completamente y forme formas esféricas limpias.',
    },
    {
      type: 'title',
      text: 'Ajustando Densidad y Viscosidad del Fluido con Goma Xantana',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Para formar una esfera, la gota de líquido base aromatizado debe sumergirse completamente en el baño de gelificación. Si el líquido base es menos denso que el baño (como un alcohol ligero o jugo a base de agua en un baño espeso de alginato de sodio durante la esferificación inversa), flotará en la superficie, aplanándose. Añadir una cantidad mínima de <strong>goma xantana</strong> (típicamente 0.1% a 0.2%) aumenta la viscosidad del líquido base. Este cuerpo extra proporciona el impulso necesario para que la gota se hunda en el baño, permitiendo que la tensión superficial forme una esfera perfecta.',
    },
    {
      type: 'table',
      headers: ['Método de Esferificación', 'Ingredientes Ideales', 'Aditivos Requeridos', 'Características de Almacenamiento', 'Dirección del Crecimiento del Gel'],
      rows: [
        ['Método Directo', 'Jugos de fruta bajos en calcio, caldos claros, jarabes dulces', '0.5% Alginato de Sodio en base, 1.0% Cloruro de Calcio en baño', 'Debe servirse inmediatamente, se gelifica con el tiempo', 'Hacia adentro (hacia el centro)'],
        ['Método Inverso', 'Lácteos, alcohol, líquidos con alto calcio o muy ácidos', '2.0% Lactato de Calcio en base, 0.5% Alginato de Sodio en baño', 'Altamente estable, puede almacenarse en aceite o agua por horas', 'Hacia afuera (desde el centro)'],
      ],
    },
    {
      type: 'title',
      text: 'Enjuague y Pasos Finales de Conservación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Enjuaga siempre las esferas terminadas en un baño de agua limpia y fría inmediatamente después de sacarlas del baño de gelificación. Esto elimina cualquier residuo de calcio o alginato adherido al exterior, deteniendo la reacción química y previniendo sabores desagradables (especialmente el sabor ligeramente amargo del cloruro de calcio). Para almacenar, sumerge las esferas en un líquido de densidad similar (como el líquido base aromatizado sin aditivos, o un jarabe de azúcar ligero) para evitar que el agua se mueva a través de la membrana por ósmosis, lo que podría hacer que las esferas se arruguen o estallen.',
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
