import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Estimador de Umidade do Desidratador';
const description = 'Estime a perda de peso, evaporação de água e tempo de secagem dos seus alimentos.';

const faq = [
  {
    question: 'Como calcular a perda de peso na desidratação?',
    answer: 'A perda de peso é calculada separando a massa sólida da água. Como a matéria sólida permanece constante, o peso final é o sólido dividido por 1 menos a porcentagem de umidade desejada.'
  }
];

const howTo = [
  {
    name: 'Selecione um ingrediente ou umidade manual',
    text: 'Escolha uma predefinição ou configure os valores iniciais de umidade.'
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
  slug: 'estimador-umidade-desidratador',
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  ui: {
    title: 'Estimador de Umidade',
    subtitle: 'Calcule a perda de peso e estime o tempo de secagem',
    unitSystemLabel: 'Sistema de Unidades',
    metricOption: 'Métrico (g, °C)',
    imperialOption: 'Imperial (oz, °F)',
    ingredientLabel: 'Ingrediente',
    initialMoistureLabel: 'Umidade Inicial (%)',
    targetMoistureLabel: 'Umidade Alvo (%)',
    weightLabel: 'Peso Inicial',
    tempLabel: 'Temperatura de Secagem',
    customOption: 'Personalizado',
    beefOption: 'Carne Seca',
    watermelonOption: 'Melancia Desidratada',
    appleOption: 'Maçã Desidratada',
    mangoOption: 'Manga Desidratada',
    mushroomOption: 'Cogumelos',
    targetWeightLabel: 'Peso Final',
    waterEvaporatedLabel: 'Água Evaporada',
    estimatedHoursLabel: 'Tempo de Secagem Estimado',
    shrinkageLabel: 'Redução de Peso'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Calcule Perda de Peso e Umidade na Desidratação',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Evite desperdício e melhore a conservação prevendo o tempo e peso final exato do seu lote.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
