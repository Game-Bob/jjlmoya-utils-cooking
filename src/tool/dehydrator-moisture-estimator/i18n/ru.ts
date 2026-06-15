import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = 'Калькулятор Влажности в Дегидраторе';
const description = 'Оцените потерю веса, испарение воды и время сушки продуктов в дегидраторе.';

const faq = [
  {
    question: 'Как рассчитывается потеря веса при дегидратации?',
    answer: 'Потеря веса рассчитывается путем разделения сухого вещества и воды. Поскольку сухая масса остается постоянной, конечный вес равен массе сухого вещества, деленной на 1 минус целевой процент влажности.'
  }
];

const howTo = [
  {
    name: 'Выберите предустановку или настройте влажность вручную',
    text: 'Выберите продукт из списка или укажите начальную влажность самостоятельно.'
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
  slug: 'degidrator-ocenka-vlazhnosti',
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  ui: {
    title: 'Калькулятор Влажности',
    subtitle: 'Рассчитайте усушку продуктов и примерное время сушки',
    unitSystemLabel: 'Система Измерений',
    metricOption: 'Метрическая (г, °C)',
    imperialOption: 'Имперская (унции, °F)',
    ingredientLabel: 'Продукт',
    initialMoistureLabel: 'Начальная Влажность (%)',
    targetMoistureLabel: 'Целевая Влажность (%)',
    weightLabel: 'Начальный Вес',
    tempLabel: 'Температура Сушки',
    customOption: 'Вручную',
    beefOption: 'Вяленая Говядина',
    watermelonOption: 'Вяленый Арбуз',
    appleOption: 'Яблочные Чипсы',
    mangoOption: 'Сушеный Манго',
    mushroomOption: 'Грибы',
    targetWeightLabel: 'Целевой Вес',
    waterEvaporatedLabel: 'Испарившаяся Вода',
    estimatedHoursLabel: 'Оценочное Время Сушки',
    shrinkageLabel: 'Усушка Продукта'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Рассчитать Усушку и Время Дегидратации Продуктов',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Наш инструмент помогает прогнозировать конечный вес продуктов и испарение влаги.'
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
