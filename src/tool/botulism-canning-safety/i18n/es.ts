import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Seguridad en Conservas Botulismo Muerte Termica";
const description = "Calcula la reduccion termica de esporas y la letalidad de esterilizacion F0 para Clostridium botulinum. Evalua las zonas de seguridad en conservas de baja acidez y acidas.";
const faq = [
  {
    question: "Por que Clostridium botulinum es una gran preocupacion en las conservas caseras?",
    answer: "Clostridium botulinum es una bacteria anaerobia formadora de esporas que produce la toxina botulinica, una de las sustancias biologicas mas letales conocidas. Las esporas son extremadamente resistentes al calor y pueden sobrevivir en condiciones anaerobias dentro de frascos sellados si las temperaturas son insuficientes."
  },
  {
    question: "Cual es la importancia critica del pH 4.6 en la conservacion de alimentos?",
    answer: "Los alimentos con un pH inferior a 4.6 se clasifican como acidos. En estos entornos, las esporas de Botulinum no pueden germinar ni producir toxinas. Para alimentos con pH de 4.6 o superior, el envasado a presion es obligatorio para alcanzar temperaturas superiores a 116 grados Celsius y destruir las esporas."
  },
  {
    question: "Que es el valor F0 de letalidad de esterilizacion?",
    answer: "El valor F0 mide el tiempo de esterilizacion equivalente a 121.11 grados Celsius. Un proceso estandar de esterilizacion de baja acidez requiere un valor F0 de 3.0 minutos o superior, lo que representa una reduccion decimal de doce en la poblacion de esporas."
  },
  {
    question: "Por que no puedo usar un bano de agua para alimentos de baja acidez?",
    answer: "El envasado en bano de agua solo alcanza el punto de ebullicion (100 grados Celsius). Esta temperatura es insuficiente para matar las esporas resistentes al calor de Clostridium botulinum en alimentos de baja acidez. Las esporas sobreviven y producen toxina a temperatura ambiente."
  }
];

const howTo = [
  {
    name: "Ingresa el nivel de acidez del alimento",
    text: "Determina e ingresa el valor de pH de tus ingredientes. Si el pH es igual o mayor a 4.6, el alimento es de baja acidez."
  },
  {
    name: "Selecciona la tecnica de envasado",
    text: "Elige entre envasado en bano de agua o envasado a presion segun tu equipo de conservacion."
  },
  {
    name: "Define la temperatura y duracion",
    text: "Ingresa la temperatura de procesamiento y el tiempo en minutos que los frascos permanecen a esa temperatura."
  },
  {
    name: "Evalua los diagnosticos de seguridad",
    text: "Revisa el valor F0 resultante, el conteo de reduccion decimal de esporas y el indicador de zona de seguridad para verificar el cumplimiento."
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
  description: 'Calcula la reduccion termica de esporas y la letalidad de esterilizacion F0 para Clostridium botulinum. Evalua las zonas de seguridad en conservas de baja acidez y acidas.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: "Monitor de Autoclave para Conservas",
    subtitle: "Diagnosticos de muerte termica y evaluador de seguridad botulinica",
    methodLabel: "Metodo de Envasado",
    waterBath: "Envasado en Bano de Agua",
    pressureCanner: "Envasado a Presion",
    tempLabel: "Temperatura de Envasado",
    timeLabel: "Tiempo de Procesamiento",
    phLabel: "pH del Alimento",
    f0Label: "Valor de Letalidad F0",
    dLabel: "Valor D Calculado",
    sporesLabel: "Poblacion de Esporas",
    statusSafe: "Esterilizacion Completa",
    statusMarginal: "Esterilizacion Marginal",
    statusUnsafe: "Alto Riesgo de Botulismo",
    statusSafeDesc: "La letalidad termica supera el F0 objetivo de 3.0 minutos. Las esporas estan totalmente desactivadas.",
    statusMarginalDesc: "El proceso alcanza una desactivacion parcial pero permanece por debajo del estandar de seguridad 12D. Ajusta el tiempo o la temperatura.",
    statusUnsafeDesc: "El proceso no desactiva Clostridium botulinum. Los alimentos de baja acidez en banos de agua siguen siendo peligrosos.",
    cLabel: "°C",
    fLabel: "°F",
    minLabel: "min",
    logReductionLabel: "Reduccion Decimal",
    dValueUnit: "minutos",
    indicatorSectionTitle: "Indicadores de Diagnostico",
    visualizerSectionTitle: "Reduccion de Esporas",
    f0Tooltip: "Tiempo de esterilizacion equivalente en minutos a 121.11°C. El umbral seguro es 3.0 o superior.",
    dTooltip: "Tiempo de reduccion decimal: duracion en minutos necesaria para destruir el 90% de las esporas a la temperatura actual.",
    logReductionTooltip: "Numero de reducciones decimales (10 veces). Una reduccion 12D es el estandar de seguridad.",
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Mecanismos Cientificos del Procesamiento Termico y la Cinética de Desactivacion de Esporas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El procesamiento termico en conservas garantiza la esterilidad comercial al destruir microorganismos patogenos y de deterioro. El enfoque principal de las pautas de seguridad en la conservacion de alimentos de baja acidez es Clostridium botulinum. Las esporas de Botulinum son altamente resistentes al calor en comparacion con las celulas vegetativas. Desactivar estas esporas requiere un proceso de tiempo de muerte termica que aplique alta temperatura durante una duracion calculada. La relacion matematica entre temperatura y tasa de desactivacion se expresa a traves del tiempo de reduccion decimal (valor D) y el factor de dependencia de temperatura (valor z).',
    },
    {
      type: 'title',
      text: 'Clasificacion de Alimentos y el Crucial Umbral de Seguridad pH 4.6',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un valor de pH de 4.6 es la linea divisoria para la seguridad en la conservacion. Los alimentos acidos por debajo de pH 4.6 inhiben naturalmente la germinacion y la produccion de toxina de las esporas de Botulinum. Para estos alimentos, el procesamiento a 100 grados Celsius en un bano de agua hirviendo es suficiente. Sin embargo, los alimentos de baja acidez por encima de pH 4.6 deben someterse a envasado a presion para elevar la temperatura del vapor y lograr la destruccion termica total de las esporas. La siguiente tabla detalla las clasificaciones y metodos de envasado para ingredientes comunes:',
    },
    {
      type: 'table',
      headers: ['Grupo de Alimento', 'Rango de pH', 'Metodo de Envasado Requerido', 'Ejemplos Comunes'],
      rows: [
        ['Alta Acidez', 'Por debajo de 4.0', 'Envasado en Bano de Agua', 'Manzanas, Bayas, Citricos, Duraznos, Encurtidos'],
        ['Acidificados o Acidez Media', '4.0 a 4.6', 'Bano de Agua con Ajuste de Acido', 'Tomates, Higos, Peras'],
        ['Baja Acidez', '4.6 y superior', 'Envasado a Presion Obligatorio', 'Carnes, Mariscos, Frijoles, Maiz, Papas, Sopas'],
      ],
    },
    {
      type: 'title',
      text: 'Ajustes por Altitud y Correcciones de Seguridad del Punto de Ebullicion',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A medida que aumenta la altitud, la presion atmosferica disminuye, lo que hace que el punto de ebullicion del agua descienda por debajo de 100 grados Celsius. En el envasado en bano de agua, esta temperatura mas baja aumenta el valor D de las esporas, lo que requiere tiempos de procesamiento mas largos. En el envasado a presion, los ajustes del manometro de dial o de peso deben aumentarse para mantener la temperatura interna de esterilizacion objetivo. A continuacion se presenta la guia de referencia para los puntos de ebullicion y los ajustes necesarios del envasado a presion:',
    },
    {
      type: 'table',
      headers: ['Rango de Altitud', 'Punto de Ebullicion del Agua', 'Presion Requerida Manometro de Dial', 'Presion Requerida Manometro de Peso'],
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
      text: 'Por que el Concepto de Reduccion de Esporas 12D Previene el Botulismo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La destruccion bacteriana por calor es logaritmica. El valor D representa el tiempo requerido a una temperatura especifica para destruir el 90% de la poblacion de esporas, lo que equivale a una reduccion logaritmica decimal. El estandar de referencia para Clostridium botulinum es un valor D de 0.21 minutos a 121.11 grados Celsius. Para lograr altos margenes de seguridad, los estandares comerciales exigen un proceso de reduccion decimal de doce (12D), lo que significa que la poblacion de esporas se reduce en doce factores de diez. Esto produce un valor F0 objetivo de 3.0 minutos, que garantiza la seguridad en alimentos de baja acidez.',
    },
    {
      type: 'title',
      text: 'Guia Practica de Conservas Caseras y Consejos de Seguridad',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Acidifica siempre los tomates con jugo de limon o acido citrico antes del procesamiento en bano de agua, ya que su pH natural fluctua cerca del umbral critico de 4.6.',
        'Nunca acortes los tiempos de procesamiento ni reduces las temperaturas. La cinetica de muerte termica es logaritmica y ajustes menores pueden permitir que las esporas sobrevivan.',
        'Asegurate de que los manometros de dial de las envasadoras a presion se prueben anualmente para verificar su precision, ya que lecturas de presion incorrectas comprometen directamente las temperaturas internas de esterilizacion.',
        'Compensa las diferencias de altitud ajustando los tiempos de procesamiento en banos de agua o aumentando la configuracion de PSI en las envasadoras a presion.',
        'Evita envasar recetas mixtas que contengan ingredientes de baja acidez como carnes o frijoles en una envasadora de bano de agua, incluso si la receta general contiene acido.',
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
