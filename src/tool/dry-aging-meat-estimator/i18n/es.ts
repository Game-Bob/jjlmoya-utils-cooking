import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Calculadora de Coste y Rendimiento de Maduración en Seco";
const description = "Calcule la pérdida de peso de la carne, el desperdicio por recorte de película y el coste real por kilogramo al madurar carne de vacuno en seco en casa o en cámara.";
const faq = [
  {
    question: "¿Cuánta masa pierde la carne durante la maduración en seco?",
    answer: "Durante un proceso estándar de maduración en seco de 30 a 45 días, la carne pierde aproximadamente entre un 15% y un 25% de su peso debido a la evaporación de la humedad. Además, se pierde alrededor de un 15% del peso inicial al recortar la corteza exterior seca (película) antes de cocinar."
  },
  {
    question: "¿Cuál es la humedad óptima para la maduración en seco?",
    answer: "La humedad relativa ideal para madurar carne en seco es entre el 75% y el 85%. Si la humedad es demasiado baja (inferior al 75%), la superficie se seca demasiado rápido, formando una barrera dura que atrapa la humedad en el interior. Si es demasiado alta (superior al 85%), aumenta el riesgo de moho y deterioro."
  },
  {
    question: "¿Por qué aumenta tanto el precio por kilogramo?",
    answer: "Dado que se pierde peso por la pérdida de agua y el recorte, el peso final utilizable es menor que el peso inicial. El coste total sigue siendo el mismo, lo que significa que el coste por kilogramo utilizable aumenta proporcionalmente a la pérdida total de peso."
  }
];

const howTo = [
  {
    name: "Introducir peso inicial",
    text: "Introduzca el peso inicial del corte antes de la maduración en seco."
  },
  {
    name: "Establecer días de maduración",
    text: "Seleccione la duración total de la maduración en seco, normalmente entre 1 y 60 días."
  },
  {
    name: "Ajustar humedad relativa",
    text: "Establezca la humedad de su cámara (la ideal es del 75% al 85%) para determinar la tasa de pérdida de agua."
  },
  {
    name: "Introducir precio inicial",
    text: "Proporcione el coste por kilogramo de la carne cruda para compararlo con el coste final del rendimiento utilizable."
  }
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
  slug: 'estimador-maduracion-carne',
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Estimador de Maduración en Seco',
    subtitle: 'Simule la pérdida de peso y calcule el coste del rendimiento final',
    startWeightLabel: 'Peso Inicial',
    daysLabel: 'Tiempo de Maduración',
    pricePerKgLabel: 'Precio Original',
    humidityLabel: 'Humedad Relativa',
    finalWeightLabel: 'Peso Útil Final',
    yieldLabel: 'Rendimiento Útil Total',
    originalCostLabel: 'Coste Total Inicial',
    finalCostPerKgLabel: 'Precio Útil Final',
    moistureLossLabel: 'Pérdida por Evaporación de Humedad',
    trimmingLossLabel: 'Mermas por Recorte de Película',
    warningLowHumidity: 'Advertencia: La humedad es inferior al 75%. La superficie puede secarse demasiado rápido, provocando endurecimiento de la capa externa.',
    warningHighHumidity: 'Advertencia: La humedad es superior al 85%. Riesgo elevado de deterioro bacteriano o crecimiento de moho no deseado.',
    timelineTitle: 'Línea de Tiempo de Maduración en Seco',
    timelineInfoText: 'Haga clic a lo largo de la línea de tiempo para previsualizar los cambios físicos en el corte de carne'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Ciencia y Economía de la Maduración de Carne en Seco',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La maduración en seco es un arte culinario que combina microbiología, bioquímica y física para transformar cortes de carne de vacuno estándar en delicias tiernas y concentradas en sabor. Al colocar la carne en un ambiente controlado de temperatura y humedad, ocurren dos cambios principales: la degradación enzimática y la evaporación de la humedad.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Humedad Ideal',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Temp. Óptima',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Merma por Recorte',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 d',
          label: 'Maduración Estándar',
          icon: 'mdi:clock-outline'
        }
      ]
    },
    {
      type: 'title',
      text: 'Dinámica de Pérdida de Peso y la Curva Asintótica',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La pérdida de peso durante la maduración en seco es asintótica. En los primeros 14 días, la humedad se evapora rápidamente de las capas externas. A medida que la superficie se deshidrata, forma una corteza oscura y dura. Esta corteza actúa como una barrera protectora, ralentizando la evaporación posterior. En consecuencia, la tasa de pérdida de agua se estabiliza tras dos o tres semanas.'
    },
    {
      type: 'list',
      items: [
        '<strong>Días 1-14:</strong> Alta tasa de evaporación. La carne pierde entre un 10% y un 12% de su peso, principalmente agua. Las fibras musculares se encogen, concentrando azúcares y proteínas.',
        '<strong>Días 15-30:</strong> La evaporación se ralentiza a medida que la corteza se endurece. Se intensifica la actividad enzimática, mejorando la ternura gracias a las enzimas calpaína y catepsina.',
        '<strong>Días 30-45:</strong> Pérdida de humedad adicional mínima. Se desarrollan sabores profundos, con notas a nuez y queso azul por la oxidación de grasas y mohos beneficiosos.',
        '<strong>Mermas por Recorte:</strong> Al finalizar, esta corteza debe ser retirada. El recorte elimina aproximadamente el 15% del peso total.'
      ]
    },
    {
      type: 'title',
      text: 'Controles Ambientales en la Cámara de Maduración',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La consistencia en la calidad del aire, la temperatura y la humedad es crítica. Una desviación en estos parámetros puede arruinar el corte, provocando pudrición o un desarrollo enzimático deficiente.'
    },
    {
      type: 'list',
      items: [
        '<strong>Control de Temperatura:</strong> La cámara debe mantenerse entre 1C y 3C. Las temperaturas inferiores a 0C congelan las enzimas, deteniendo la maduración. Las superiores a 4C promueven el crecimiento de bacterias patógenas.',
        '<strong>Humedad Relativa (HR):</strong> El rango ideal es del 75% al 85%. Si baja del 70%, ocurre endurecimiento de la superficie, atrapando la humedad. Si supera el 85%, mohos dañinos y bacterias viscosas pueden proliferar.',
        '<strong>Flujo de Aire:</strong> Es necesario un flujo de aire moderado y continuo (aprox. 0.5 a 2.0 m/s) para retirar el agua evaporada y permitir que la corteza se forme de manera uniforme.'
      ]
    },
    {
      type: 'title',
      text: 'Implicaciones de Coste y Cálculos Financieros',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Debido a la evaporación y al recorte, la porción comestible final de la carne es significativamente menor que el peso inicial. Dado que el valor monetario total de la pieza permanece constante, el precio unitario por kilogramo utilizable aumenta.'
    },
    {
      type: 'table',
      headers: ['Duración', 'Pérdida por Evaporación Promedio', 'Mermas por Recorte Promedio', 'Rendimiento Total', 'Multiplicador de Coste Final'],
      rows: [
        ['14 Días', '10.5%', '15.0%', '74.5%', '1.34x'],
        ['21 Días', '13.5%', '15.0%', '71.5%', '1.40x'],
        ['30 Días', '17.5%', '15.0%', '67.5%', '1.48x'],
        ['45 Días', '21.0%', '15.0%', '64.0%', '1.56x'],
        ['60 Días', '24.0%', '15.0%', '61.0%', '1.64x']
      ]
    },
    {
      type: 'title',
      text: 'Pautas de Seguridad: Microbiología y Moho Bueno vs. Malo',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'La maduración segura depende del crecimiento de microflora beneficiosa, en particular de hongos de los géneros <em>Thamnidium</em>, <em>Mucor</em> y <em>Rhizopus</em>. Sin embargo, mantener una higiene estricta es esencial para prevenir contaminación.'
    },
    {
      type: 'list',
      items: [
        '<strong>Indicadores Buenos:</strong> Corteza seca, firme y de color púrpura oscuro o marrón. Una capa de moho blanco y polvoriento es normal y segura, ya que se recortará.',
        '<strong>Indicadores Malos:</strong> Áreas pegajosas, viscosas o húmedas. Mohos de color verde, negro o amarillento. Olores agrios o a amoníaco indican descomposición; deseche la carne de inmediato.',
        '<strong>Limpieza:</strong> Esterilice siempre la cámara, ganchos y rejillas antes de colocar carne nueva. Use guantes y desinfecte cuchillos y tablas.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
