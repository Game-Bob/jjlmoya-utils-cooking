import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Estimador de Humedad de Deshidratador';
const description = 'Calcula la pérdida de peso, la evaporación de agua y el tiempo de secado de tus alimentos en el deshidratador.';

const faq = [
  {
    question: '¿Cómo se calcula la pérdida de peso en el deshidratador?',
    answer: 'La pérdida de peso se calcula separando el contenido sólido del agua. Como la masa sólida no cambia, el peso final es el sólido dividido por 1 menos el porcentaje de humedad deseado.'
  },
  {
    question: '¿Por qué la temperatura afecta al tiempo de secado?',
    answer: 'Las temperaturas más altas aceleran la evaporación. Sin embargo, si es demasiado alta, puede endurecer la capa exterior atrapando la humedad dentro.'
  }
];

const howTo = [
  {
    name: 'Selecciona un ingrediente o humedad personalizada',
    text: 'Elige un ingrediente predefinido o introduce la humedad inicial manualmente.'
  },
  {
    name: 'Ajusta la humedad inicial y la humedad objetivo',
    text: 'Desliza para configurar la humedad inicial y la humedad final que deseas obtener.'
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
  slug: 'estimador-humedad-deshidratador',
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  ui: {
    title: 'Estimador de Humedad',
    subtitle: 'Calcula la pérdida de peso y el tiempo estimado de deshidratación',
    unitSystemLabel: 'Sistema de Unidades',
    metricOption: 'Métrico (g, °C)',
    imperialOption: 'Imperial (oz, °F)',
    ingredientLabel: 'Ingrediente',
    initialMoistureLabel: 'Humedad Inicial (%)',
    targetMoistureLabel: 'Humedad Objetivo (%)',
    weightLabel: 'Peso Inicial',
    tempLabel: 'Temperatura de Secado',
    customOption: 'Personalizado',
    beefOption: 'Cecina de Vaca',
    watermelonOption: 'Sandía Deshidratada',
    appleOption: 'Manzana Deshidratada',
    mangoOption: 'Mango Deshidratado',
    mushroomOption: 'Champiñones',
    targetWeightLabel: 'Peso Final',
    waterEvaporatedLabel: 'Agua Evaporada',
    estimatedHoursLabel: 'Tiempo de Secado Estimado',
    shrinkageLabel: 'Contracción por Peso'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: '¿Cuánto peso perderá tu alimento en el deshidratador? Calcula el tiempo de secado y la humedad',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Tanto si estás preparando <strong>cecina (jerky)</strong>, <strong>láminas de fruta deshidratada</strong>, <strong>rodajas de manzana</strong> o <strong>sandía deshidratada</strong>, la clave para obtener resultados consistentes es comprender el contenido de humedad. La seguridad alimentaria y la conservación a largo plazo dependen de alcanzar el nivel de humedad objetivo adecuado. Nuestro <strong>estimador de humedad para deshidratador</strong> predice el peso final, el agua evaporada y el tiempo de secado en función de tu ingrediente y configuración específicos.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Humedad de la Carne', icon: 'mdi:food' },
        { value: '92%', label: 'Humedad de la Sandía', icon: 'mdi:water' },
        { value: '10%', label: 'Objetivo para Cecina', icon: 'mdi:shield' },
        { value: '55°C', label: 'Temp. Media de Secado', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: '¿Cuál es el nivel de humedad adecuado para los alimentos deshidratados?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Ingrediente', 'Humedad Inicial', 'Humedad Objetivo', 'Tiempo Típico', 'Indicador de Punto de Secado'],
      rows: [
        ['Cecina de Vaca', '70%', '10-15%', '4-8 h', 'Consistencia correosa, se dobla sin romperse'],
        ['Rodajas de Manzana', '86%', '15-20%', '6-10 h', 'Flexible y de textura gomosa, sin zonas pegajosas'],
        ['Mango Deshidratado', '84%', '15-18%', '6-10 h', 'Masticable, sin humedad visible al presionarlo'],
        ['Champiñones', '92%', '5-8%', '4-8 h', 'Quebradizos y crujientes'],
        ['Sandía Deshidratada', '92%', '10-12%', '10-16 h', 'Crujiente, se quiebra al doblarla']
      ]
    },
    {
      type: 'title',
      text: 'Problemas comunes en la deshidratación y cómo solucionarlos',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>Endurecimiento exterior (Case hardening):</strong> La capa externa se seca demasiado rápido y atrapa la humedad en el interior. Reduce la temperatura entre 5 y 10 °C y aumenta la circulación de aire.',
        '<strong>Moho durante el almacenamiento:</strong> El alimento no se secó lo suficiente. Utiliza la calculadora para determinar el peso final objetivo y verifícalo con una prueba de humedad.',
        '<strong>Secado irregular:</strong> Las piezas se cortaron con grosores diferentes o el deshidratador está sobrecargado. Corta los alimentos de forma uniforme y deja suficiente espacio entre ellos.',
        '<strong>Alimentos demasiado secos y quebradizos:</strong> Una deshidratación excesiva provoca la pérdida de sabor y altera la textura. Comprueba los niveles de humedad objetivo para tu ingrediente específico.'
      ]
    },
    {
      type: 'title',
      text: 'Guía de temperaturas de secado por tipo de alimento',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'La temperatura influye tanto en la velocidad de secado como en la calidad final de los alimentos. Las temperaturas más elevadas evaporan el agua más rápido, pero pueden provocar endurecimiento exterior, pérdida de nutrientes y resultados desiguales. Utiliza estas pautas generales para ajustar tu deshidratador:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Temperatura baja (40 a 50 °C)',
          icon: 'mdi:thermometer',
          description: 'Ideal para conservar enzimas, nutrientes y sabores delicados.',
          points: ['Hierbas y hojas verdes', 'Champiñones y setas', 'Preservación de alimentos crudos', 'Requiere un tiempo de secado más prolongado']
        },
        {
          title: 'Temperatura media (50 a 60 °C)',
          icon: 'mdi:thermometer',
          description: 'Rango estándar para la mayoría de frutas y verduras.',
          highlight: true,
          points: ['Rodajas de manzana y mango', 'La mayoría de las verduras', 'Láminas de fruta (fruit leathers)', 'Equilibrio óptimo entre velocidad y calidad']
        },
        {
          title: 'Temperatura alta (60 a 70 °C)',
          icon: 'mdi:thermometer',
          description: 'Se utiliza para cecina (jerky) y alimentos densos que requieren máxima seguridad alimentaria.',
          points: ['Cecina de vaca y pavo', 'Tubérculos y raíces densas', 'Prioridad de seguridad alimentaria', 'Intervalo de secado más corto']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Pretrata siempre las frutas',
      html: 'Sumerge las manzanas, plátanos y peras en zumo de limón o en una solución de ácido ascórbico antes de deshidratarlos para evitar la oxidación y mantener su color original.'
    },
    {
      type: 'tip',
      title: 'Rota las bandejas durante el secado',
      html: 'Los deshidratadores suelen tener zonas más calientes que otras. Rota las bandejas de arriba a abajo y de delante a atrás cada 2 o 3 horas para conseguir un secado homogéneo.'
    },
    {
      type: 'tip',
      title: 'Acondiciona antes de almacenar',
      html: 'Tras la deshidratación, deja enfriar el alimento y acondicionándolo en un recipiente hermético durante una semana. Agítalo a diario. Si aparece condensación, significa que necesita más tiempo de secado.'
    },
    {
      type: 'title',
      text: 'Glosario de deshidratación y humedad',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Endurecimiento exterior', definition: 'Fenómeno en el que la superficie externa del alimento se seca con excesiva rapidez, formando una costra dura que atrapa la humedad en el interior e impide una deshidratación correcta.' },
        { term: 'Actividad de agua (aw)', definition: 'Medida del agua libre disponible para el crecimiento microbiano. Los alimentos deshidratados estables suelen tener una aw inferior a 0,60.' },
        { term: 'Contenido de humedad', definition: 'Porcentaje del peso del agua en relación con el peso total del alimento. Se utiliza para determinar el progreso del secado y los niveles objetivo de seguridad alimentaria.' },
        { term: 'Índice de contracción', definition: 'Proporción del peso original que se conserva tras la deshidratación. Es una métrica fundamental para planificar el tamaño de los lotes y el almacenamiento.' }
      ]
    },
    {
      type: 'summary',
      title: 'Puntos clave para una deshidratación perfecta',
      items: [
        'Los diferentes ingredientes presentan niveles de humedad inicial muy diversos (70-92%). Utiliza los valores preestablecidos para obtener estimaciones precisas.',
        'La humedad objetivo varía según el alimento: 10% para cecina, 15-20% para frutas, y 5-8% para verduras y champiñones.',
        'La temperatura de secado influye en la velocidad y la calidad. Mantente en el rango de 50-60 °C para la mayoría de los alimentos.',
        'El endurecimiento exterior estropea la textura. Evita superar los 70 °C y asegúrate de contar con una buena circulación de aire.',
        'Acondiciona siempre los alimentos deshidratados durante una semana antes de guardarlos a largo plazo para asegurar una distribución uniforme de la humedad.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
