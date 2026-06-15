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
      text: 'Calcula la Pérdida de Peso y Humedad al Deshidratar',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Nuestra calculadora de deshidratación te permite predecir el peso final y la tasa de evaporación para optimizar tus lotes.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
