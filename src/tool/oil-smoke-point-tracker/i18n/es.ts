import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Monitor de Punto de Humo del Aceite: Estimador de Vida Útil y Degradación del Aceite de Fritura';
const description = 'Supervisa la calidad del aceite de fritura y estima la caída actual del punto de humo. Registra los usos, las temperaturas y los tipos de alimentos para evitar la acumulación nociva de compuestos polares.';

const faq = [
  {
    question: '¿Por qué baja el punto de humo del aceite de fritura con el tiempo?',
    answer: 'Cada vez que el aceite se calienta a temperaturas de fritura, la degradación térmica, la hidrólisis y la oxidación descomponen los triglicéridos en ácidos grasos libres (AGL), monoacilgliceroles y diacilgliceroles. Estos productos de descomposición tienen un punto de ebullición y de humo mucho más bajo que los triglicéridos intactos, lo que hace que el aceite humee a temperaturas más bajas con el uso repetido.',
  },
  {
    question: '¿Qué son los compuestos polares y por qué están regulados?',
    answer: 'Los compuestos polares (CPT) son los productos de degradación que se forman durante la fritura. Cuando superan el 25 % del peso del aceite, este se considera degradado, oxidado y perjudicial para el consumo, provocando malos sabores y posibles riesgos cardiovasculares. En muchos países europeos, la ley obliga a desechar el aceite de fritura cuando los CPT superan el 25 %.',
  },
  {
    question: '¿Cómo afecta el empanado o la harina a la degradación del aceite?',
    answer: 'Los empanados, rebozados y la harina suelta desprenden partículas de alimento en el aceite caliente. Estas partículas se carbonizan rápidamente a temperaturas superiores a 180 grados Celsius, liberando ácidos grasos libres y actuando como catalizadores que aceleran la degradación térmica. Los almidones limpios, como las patatas, degradan el aceite mucho más lentamente.',
  },
  {
    question: '¿Cuál es el límite seguro para reutilizar el aceite?',
    answer: 'Como regla general, los aceites refinados de alta temperatura como canola o cacahuete se pueden reutilizar de 5 a 8 veces en condiciones limpias. Sin embargo, los aceites sin refinar o los aceites expuestos a temperaturas superiores a 190 grados Celsius o a alimentos empanados deben desecharse después de 1 a 3 usos.',
  },
];

const howTo = [
  {
    name: 'Selecciona el tipo de aceite de fritura',
    text: 'Elige tu aceite de la lista. Los aceites refinados de alta temperatura tienen un punto de humo inicial más alto que las opciones sin refinar.',
  },
  {
    name: 'Registra los ciclos de fritura',
    text: 'Introduce el número total de freidurías que ha soportado el lote de aceite actual.',
  },
  {
    name: 'Indica la temperatura de fritura',
    text: 'Ajusta el deslizador para que coincida con la temperatura media de tus sesiones de fritura. Las temperaturas superiores a 180 grados Celsius aceleran la descomposición.',
  },
  {
    name: 'Identifica el tipo de cobertura del alimento',
    text: 'Especifica si estás friendo almidones limpios o alimentos enharinados/empanados que dejan residuos carbonizados.',
  },
  {
    name: 'Comprueba el punto de humo y el estado de descarte',
    text: 'Revisa el punto de humo degradado y el indicador de descarte. Desecha inmediatamente si la salud del aceite entra en la zona crítica.',
  },
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
  offers: { '@type': 'Offer' as const, price: '0', priceCurrency: 'USD' },
};

export const content: ToolLocaleContent = {
  slug: 'monitor-punto-humo-aceite',
  title: 'Monitor de Punto de Humo del Aceite',
  description: 'Supervisa la calidad del aceite de fritura y estima la caída actual del punto de humo. Registra los usos, las temperaturas y los tipos de alimentos para evitar la acumulación nociva de compuestos polares.',
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    oilPresetLabel: 'Tipo de Aceite de Fritura',
    presetAvocadoRefined: 'Aceite de Aguacate (Refinado)',
    presetSunflowerRefined: 'Aceite de Girasol (Refinado)',
    presetPeanutRefined: 'Aceite de Cacahuete (Refinado)',
    presetCanolaRefined: 'Aceite de Canola (Refinado)',
    presetOliveEV: 'Aceite de Oliva Virgen Extra',
    presetOlivePomace: 'Aceite de Orujo de Oliva',
    presetCoconutUnrefined: 'Aceite de Coco (Sin Refinar)',
    presetSunflowerUnrefined: 'Aceite de Girasol (Sin Refinar)',
    usesLabel: 'Ciclos de Fritura (Usos)',
    tempLabel: 'Temperatura de Fritura',
    foodTypeLabel: 'Preparación / Cobertura del Alimento',
    optionStarch: 'Almidón Limpio (Patatas, Patatas Fritas)',
    optionBreading: 'Alimentos Enharinados, Rebozados o Empanados',
    baseSmokePointLabel: 'Punto de Humo Inicial',
    currentSmokePointLabel: 'Punto de Humo Degradado',
    polarCompoundsLabel: 'Compuestos Polares (CPT)',
    polymerizationLabel: 'Salud de Polimerización del Aceite',
    statusLabel: 'Perfil de Seguridad del Aceite',
    statusGood: 'SEGURO PARA REUTILIZAR',
    statusCaution: 'PRECAUCIÓN - FILTRAR PRONTO',
    statusDiscard: 'DESECHAR INMEDIATAMENTE',
    adviceGood: 'Las propiedades del aceite son estables. Sigue friendo, pero filtra las partículas residuales de comida después de enfriar.',
    adviceCaution: 'La degradación ha comenzado. El punto de humo ha bajado. Recomendamos filtrar y usar solo una vez más.',
    adviceDiscard: 'Degradación crítica alcanzada. Alta concentración de compuestos polares. Desecha para evitar rancidez y riesgos para la salud.',
    gaugeSafe: 'Seguro',
    gaugeCaution: 'Precaución',
    gaugeDiscard: 'Desechar',
    limitLabel: 'Límite',
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'La Química de la Fritura Profunda: Por Qué se Degradan los Aceites',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La fritura profunda es una de las técnicas de cocina químicamente más intensas. Cuando los alimentos se sumergen en aceite a altas temperaturas (normalmente entre 160 y 190 grados Celsius), el aceite se expone simultáneamente al calor, la humedad del alimento y el oxígeno del aire. Esto desencadena tres reacciones químicas distintas: hidrólisis (el agua rompe los enlaces éster), oxidación (el oxígeno crea hidroperóxidos) y polimerización (las moléculas degradadas se unen formando cadenas espesas y viscosas). A medida que estas reacciones avanzan, la concentración de compuestos polares totales (CPT) aumenta, y la temperatura a la que el aceite comienza a descomponerse y humear disminuye significativamente.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '25 % CPT',
          label: 'Límite Legal de Descarte',
          icon: 'mdi:alert-octagon',
        },
        {
          value: '180 °C',
          label: 'Umbral Crítico de Temperatura',
          icon: 'mdi:thermometer-alert',
        },
        {
          value: '2,2x',
          label: 'Tasa de Degradación con Empanado',
          icon: 'mdi:chart-timeline-variant',
        },
        {
          value: 'AGL',
          label: 'Causa: Ácidos Grasos Libres',
          icon: 'mdi:molecule',
        },
      ],
    },
    {
      type: 'title',
      text: 'Compuestos Polares y Normativas Sanitarias',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los compuestos polares totales (CPT) son el estándar internacional para medir el nivel de degradación de las grasas de fritura. En cocinas profesionales, usar aceite con una concentración de CPT superior al 25 % está prohibido por ley en varios países por motivos de seguridad. Estos compuestos polares son inhibidores de la absorción, reducen la eficiencia de cocción y degradan el crujiente del rebozado. Más importante aún, consumir aceite oxidado con regularidad contribuye a la ingesta de radicales libres y compuestos tóxicos asociados con problemas cardiovasculares.',
    },
    {
      type: 'title',
      text: 'Comparativa de Tipos de Aceite: Puntos de Humo Iniciales',
      level: 3,
    },
    {
      type: 'comparative',
      columns: 2,
      items: [
        {
          title: 'Aceites Refinados (Alta Temperatura)',
          icon: 'mdi:shield-check',
          description: 'Aceites procesados para eliminar compuestos volátiles, ácidos grasos libres e impurezas. Tienen puntos de humo iniciales excepcionalmente altos.',
          points: [
            'Aguacate Refinado: 270 °C / 518 °F',
            'Girasol Refinado: 232 °C / 450 °F',
            'Cacahuete Refinado: 232 °C / 450 °F',
            'Alta resistencia a la degradación inicial',
          ],
        },
        {
          title: 'Aceites Sin Refinar (Baja Temperatura / Sabrosos)',
          icon: 'mdi:leaf',
          description: 'Aceites prensados en frío o vírgenes que contienen altas cantidades de elementos naturales, minerales y ácidos grasos libres.',
          highlight: true,
          points: [
            'Oliva Virgen Extra: 190 °C / 374 °F',
            'Coco Sin Refinar: 177 °C / 350 °F',
            'Girasol Sin Refinar: 107 °C / 225 °F',
            'Se degrada extremadamente rápido bajo calor',
          ],
        },
      ],
    },
    {
      type: 'title',
      text: 'Tabla de Referencia: Punto de Humo y Reutilización Máxima del Aceite de Fritura',
      level: 3,
    },
    {
      type: 'table',
      headers: ['Variedad de Aceite', 'Punto de Humo Inicial (°C)', 'Punto de Humo Inicial (°F)', 'Estado / Procesado', 'Usos Máximos Recomendados'],
      rows: [
        ['Aceite de Aguacate (Refinado)', '270 °C', '518 °F', 'Refinado', '10 a 12 usos'],
        ['Aceite de Orujo de Oliva', '238 °C', '460 °F', 'Refinado', '8 a 10 usos'],
        ['Aceite de Girasol (Refinado)', '232 °C', '450 °F', 'Refinado', '6 a 8 usos'],
        ['Aceite de Cacahuete (Refinado)', '232 °C', '450 °F', 'Refinado', '6 a 8 usos'],
        ['Aceite de Canola (Refinado)', '204 °C', '400 °F', 'Refinado', '5 a 7 usos'],
        ['Aceite de Oliva Virgen Extra', '190 °C', '374 °F', 'Prensado en Frío', '2 a 3 usos'],
        ['Aceite de Coco (Sin Refinar)', '177 °C', '350 °F', 'Sin Refinar', '1 a 2 usos'],
        ['Aceite de Girasol (Sin Refinar)', '107 °C', '225 °F', 'Sin Refinar', 'No usar para fritura profunda'],
      ],
    },
    {
      type: 'title',
      text: 'Señales Críticas de Advertencia de Aceite Degradado',
      level: 3,
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Peligro: Cuando el Aceite de Fritura se Vuelve Tóxico',
      html: 'No sigas reutilizando el aceite si observas alguno de los siguientes síntomas: <strong>olor rancio o a jabón</strong>, un color oscuro y turbio, o <strong>formación excesiva de espuma</strong> alrededor de los alimentos. Si el aceite empieza a humear a temperaturas normales de cocción (170-180 °C), indica que el punto de humo se ha desplomado debido a una acumulación extrema de ácidos grasos libres (AGL). Cocinar con aceite degradado transfiere compuestos polares tóxicos y elementos cancerígenos a los alimentos, perjudicando tanto el sabor como la salud.',
    },
    {
      type: 'title',
      text: 'Cómo Prolongar la Calidad del Aceite de Fritura',
      level: 3,
    },
    {
      type: 'tip',
      title: 'Filtra los Residuos Carbonizados Inmediatamente',
      html: 'Freír alimentos rebozados o enharinados deja micropartículas que se depositan en el fondo de la freidora. Estas partículas continúan carbonizándose durante la cocción, actuando como catalizadores que aceleran la degradación del aceite. Para ralentizar este proceso, retira siempre los restos de la superficie durante la fritura y <strong>filtra el aceite enfriado</strong> a través de una malla fina, estameña o filtro de café después de cada sesión de fritura. Guarda el aceite filtrado en un recipiente de vidrio hermético en un lugar oscuro y fresco.',
    },
    {
      type: 'title',
      text: 'Buenas Prácticas para la Fritura Profunda',
      level: 3,
    },
    {
      type: 'list',
      items: [
        '<strong>Seca bien la superficie de los alimentos</strong> - El exceso de humedad provoca una hidrólisis rápida, descomponiendo el aceite en ácidos grasos libres.',
        '<strong>Evita salar antes de freír</strong> - La sal actúa como catalizador acelerando la oxidación del aceite; sazona los alimentos inmediatamente después de sacarlos del aceite caliente.',
        '<strong>Mantén las temperaturas óptimas</strong> - Permanece entre 170 °C y 180 °C. Superar este rango acelera la degradación térmica, mientras que bajar de él hace que los alimentos absorban exceso de grasa.',
        '<strong>No rellenes con aceite fresco el viejo</strong> - Mezclar aceite nuevo con aceite degradado acelera la descomposición del aceite nuevo en lugar de restaurarlo.',
      ],
    },
    {
      type: 'title',
      text: 'Glosario de Fritura Profunda y Degradación Lipídica',
      level: 3,
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Punto de Humo',
          definition: 'Temperatura a la que un aceite o grasa comienza a descomponerse de forma continua y a producir humo azulado visible, liberando acroleína.',
        },
        {
          term: 'Compuestos Polares Totales (CPT)',
          definition: 'Indicador estándar mundial de la degradación del aceite, que representa el porcentaje total en peso de compuestos oxidados, AGL y polímeros.',
        },
        {
          term: 'Hidrólisis',
          definition: 'Reacción química en la que las moléculas de agua descomponen los triglicéridos en ácidos grasos libres y glicerol. Provocada por la humedad de los alimentos.',
        },
        {
          term: 'Polimerización',
          definition: 'Proceso en el que las moléculas de aceite dañadas por el calor se unen para formar grandes estructuras macromoleculares, aumentando la viscosidad del aceite.',
        },
        {
          term: 'Ácidos Grasos Libres (AGL)',
          definition: 'Ácidos carboxílicos liberados de los triglicéridos durante la hidrólisis. Reducen directamente el punto de humo inicial de la grasa.',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
