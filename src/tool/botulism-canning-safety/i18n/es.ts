import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Seguridad en Conservas: Botulismo y Muerte Térmica";
const description = "Calcula la reducción térmica de esporas y la letalidad de esterilización F0 para Clostridium botulinum. Evalúa las zonas de seguridad en conservas de baja acidez y ácidas.";
const faq = [
  {
    question: "¿Por qué Clostridium botulinum es una gran preocupación en las conservas caseras?",
    answer: "Clostridium botulinum es una bacteria anaerobia formadora de esporas que produce la toxina botulínica, una de las sustancias biológicas más letales conocidas. Las esporas son extremadamente resistentes al calor y pueden sobrevivir en condiciones anaerobias dentro de frascos sellados si las temperaturas son insuficientes."
  },
  {
    question: "¿Cuál es la importancia crítica del pH 4.6 en la conservación de alimentos?",
    answer: "Los alimentos con un pH inferior a 4.6 se clasifican como ácidos. En estos entornos, las esporas de Botulinum no pueden germinar ni producir toxinas. Para alimentos con pH de 4.6 o superior, el envasado a presión es obligatorio para alcanzar temperaturas superiores a 116 grados Celsius y destruir las esporas."
  },
  {
    question: "¿Qué es el valor F0 de letalidad de esterilización?",
    answer: "El valor F0 mide el tiempo de esterilización equivalente a 121.11 grados Celsius. Un proceso estándar de esterilización de baja acidez requiere un valor F0 de 3.0 minutos o superior, lo que representa una reducción decimal de doce en la población de esporas."
  },
  {
    question: "¿Por qué no puedo usar un baño de agua para alimentos de baja acidez?",
    answer: "El envasado en baño de agua solo alcanza el punto de ebullición (100 grados Celsius). Esta temperatura es insuficiente para matar las esporas resistentes al calor de Clostridium botulinum en alimentos de baja acidez. Las esporas sobreviven y producen toxina a temperatura ambiente."
  }
];

const howTo = [
  {
    name: "Ingresa el nivel de acidez del alimento",
    text: "Determina e ingresa el valor de pH de tus ingredientes. Si el pH es igual o mayor a 4.6, el alimento es de baja acidez."
  },
  {
    name: "Selecciona la técnica de envasado",
    text: "Elige entre envasado en baño de agua o envasado a presión según tu equipo de conservación."
  },
  {
    name: "Define la temperatura y duración",
    text: "Ingresa la temperatura de procesamiento y el tiempo en minutos que los frascos permanecen a esa temperatura."
  },
  {
    name: "Evalúa los diagnósticos de seguridad",
    text: "Revisa el valor F0 resultante, el conteo de reducción decimal de esporas y el indicador de zona de seguridad para verificar el cumplimiento."
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
  slug: 'seguridad-conservas-botulismo',
  title: 'Calculadora de Seguridad en Conservas Botulismo',
  description: 'Calcula la reducción térmica de esporas y la letalidad de esterilización F0 para Clostridium botulinum. Evalúa las zonas de seguridad en conservas de baja acidez y ácidas.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: "Monitor de Autoclave para Conservas",
    subtitle: "Diagnósticos de muerte térmica y evaluador de seguridad botulínica",
    methodLabel: "Método de Envasado",
    waterBath: "Envasado en Baño de Agua",
    pressureCanner: "Envasado a Presión",
    tempLabel: "Temperatura de Envasado",
    timeLabel: "Tiempo de Procesamiento",
    phLabel: "pH del Alimento",
    f0Label: "Valor de Letalidad F0",
    dLabel: "Valor D Calculado",
    sporesLabel: "Población de Esporas",
    statusSafe: "Esterilización Completa",
    statusMarginal: "Esterilización Marginal",
    statusUnsafe: "Alto Riesgo de Botulismo",
    statusSafeDesc: "La letalidad térmica supera el F0 objetivo de 3.0 minutos. Las esporas están totalmente desactivadas.",
    statusMarginalDesc: "El proceso alcanza una desactivación parcial pero permanece por debajo del estándar de seguridad 12D. Ajusta el tiempo o la temperatura.",
    statusUnsafeDesc: "El proceso no desactiva Clostridium botulinum. Los alimentos de baja acidez en baños de agua siguen siendo peligrosos.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Reducción Decimal",
    dValueUnit: "minutos",
    indicatorSectionTitle: "Indicadores de Diagnóstico",
    visualizerSectionTitle: "Reducción de Esporas",
    f0Tooltip: "Tiempo de esterilización equivalente en minutos a 121.11°C. El umbral seguro es 3.0 o superior.",
    dTooltip: "Tiempo de reducción decimal: duración en minutos necesaria para destruir el 90% de las esporas a la temperatura actual.",
    logReductionTooltip: "Número de reducciones decimales (10 veces). Una reducción 12D es el estándar de seguridad.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mecanismos Científicos del Procesamiento Térmico y la Cinética de Desactivación de Esporas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El procesamiento térmico en conservas garantiza la esterilidad comercial al destruir microorganismos patógenos y de deterioro. El enfoque principal de las pautas de seguridad en la conservación de alimentos de baja acidez es Clostridium botulinum. Las esporas de Botulinum son altamente resistentes al calor en comparación con las células vegetativas. Desactivar estas esporas requiere un proceso de tiempo de muerte térmica que aplique alta temperatura durante una duración calculada. La relación matemática entre temperatura y tasa de desactivación se expresa a través del tiempo de reducción técnica (valor D) y el factor de dependencia de temperatura (valor z).',
    },
    {
      type: 'title',
      text: 'Clasificación de Alimentos y el Crucial Umbral de Seguridad pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un valor de pH de 4.6 es la línea divisoria para la seguridad en la conservación. Los alimentos ácidos por debajo de pH 4.6 inhiben naturalmente la germinación y la producción de toxina de las esporas de Botulinum. Para estos alimentos, el procesamiento a 100 grados Celsius en un baño de agua hirviendo es suficiente. Sin embargo, los alimentos de baja acidez por encima de pH 4.6 deben someterse a envasado a presión para elevar la temperatura del vapor y lograr la destrucción térmica total de las esporas. La siguiente tabla detalla las clasificaciones y métodos de envasado para ingredientes comunes:',
    },
    {
      type: 'table',
      headers: ['Grupo de Alimento', 'Rango de pH', 'Método de Envasado Requerido', 'Ejemplos Comunes'],
      rows: [
        ['Alta Acidez', 'Por debajo de 4.0', 'Envasado en Baño de Agua', 'Manzanas, Bayas, Cítricos, Duraznos, Encurtidos'],
        ['Acidificados o Acidez Media', '4.0 a 4.6', 'Baño de Agua con Ajuste de Ácido', 'Tomates, Higos, Peras'],
        ['Baja Acidez', '4.6 y superior', 'Envasado a Presión Obligatorio', 'Carnes, Mariscos, Frijoles, Maíz, Papas, Sopas'],
      ],
    },
    {
      type: 'title',
      text: 'Ajustes por Altitud y Correcciones de Seguridad del Punto de Ebullición',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A medida que aumenta la altitud, la presión atmosférica disminuye, lo que hace que el punto de ebullición del agua descienda por debajo de 100 grados Celsius. En el envasado en baño de agua, esta temperatura más baja aumenta el valor D de las esporas, lo que requiere tiempos de procesamiento más largos. En el envasado a presión, los ajustes del manómetro de dial o de peso deben aumentarse para mantener la temperatura interna de esterilización objetivo. A continuación se presenta la guía de referencia para los puntos de ebullición y los ajustes necesarios del envasado a presión:',
    },
    {
      type: 'table',
      headers: ['Rango de Altitud', 'Punto de Ebullición del Agua', 'Presión Requerida Manómetro de Dial', 'Presión Requerida Manómetro de Peso'],
      rows: [
        ['0 a 300 metros', '100.0 °C', '11 PSI (121 °C)', '10 PSI (121 °C)'],
        ['300 a 600 metros', '99.0 °C', '11 PSI (121 °C)', '15 PSI (121 °C)'],
        ['600 a 900 metros', '98.0 °C', '12 PSI (121 °C)', '15 PSI (121 °C)'],
        ['900 a 1200 metros', '97.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1200 a 1500 metros', '96.0 °C', '13 PSI (121 °C)', '15 PSI (121 °C)'],
        ['1500 a 2000 metros', '94.5 °C', '14 PSI (121 °C)', '15 PSI (121 °C)'],
      ],
    },
    {
      type: 'title',
      text: 'Por qué el Concepto de Reducción de Esporas 12D Previene el Botulismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La destrucción bacteriana por calor es logarítmica. El valor D representa el tiempo requerido a una temperatura específica para destruir el 90% de la población de esporas, lo que equivale a una reducción logarítmica decimal. El estándar de referencia para Clostridium botulinum es un valor D de 0.21 minutos a 121.11 grados Celsius. Para lograr altos márgenes de seguridad, los estándares comerciales exigen un proceso de reducción decimal de doce (12D), lo que significa que la población de esporas se reduce en doce factores de diez. Esto produce un valor F0 objetivo de 3.0 minutos, que garantiza la seguridad en alimentos de baja acidez.',
    },
    {
      type: 'title',
      text: 'Guía Práctica de Conservas Caseras y Consejos de Seguridad',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Acidifica siempre los tomates con jugo de limón o ácido cítrico antes del procesamiento en baño de agua, ya que su pH natural fluctúa cerca del umbral crítico de 4.6.',
        'Nunca acortes los tiempos de procesamiento ni reduzcas las temperaturas. La cinética de muerte térmica es logarítmica y ajustes menores pueden permitir que las esporas sobrevivan.',
        'Asegúrate de que los manómetros de dial de las envasadoras a presión se prueben anualmente para verificar su precisión, ya que lecturas de presión incorrectas comprometen directamente las temperaturas internas de esterilización.',
        'Compensa las diferencias de altitud ajustando los tiempos de procesamiento en baños de agua o aumentando la configuración de PSI en las envasadoras a presión.',
        'Evita envasar recetas mixtas que contengan ingredientes de baja acidez como carnes o frijoles en una envasadora de baño de agua, incluso si la receta general contiene ácido.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
