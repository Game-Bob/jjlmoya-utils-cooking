import type { ToolLocaleContent } from "../../../types";
import { bibliography } from '../bibliography';

const title = "Калькулятор теста для неаполитанской пиццы";
const description = "Рассчитайте точные пропорции муки, воды, соли и дрожжей для приготовления настоящей неаполитанской пиццы дома.";
const faq = [
  {
    question: "Какая гидратация идеальна для неаполитанской пиццы?",
    answer: "Согласно протоколу AVPN, стандартная гидратация составляет 63–67%. Для новичков 60–62% более удобны в работе. Профессионалы, использующие сильную муку (W300+), могут использовать 70–75% для исключительных результатов.",
  },
  {
    question: "Как долго должно ферментироваться тесто?",
    answer: "Минимум 24 часа в холодильнике (4°C) для активации ферментов. Оптимально 48–72 часа. Для выдержки более 72 часов требуется очень сильная мука (W300+), иначе тесто перекиснет.",
  },
  {
    question: "Можно ли использовать сухие дрожжи?",
    answer: "Да. Сухие дрожжи эквивалентны 0,4 части свежих (1 г сухих = 2,5 г свежих). Качество сопоставимо, но свежие дрожжи дают более богатый вкус.",
  },
  {
    question: "Можно ли приготовить неаполитанскую пиццу в домашней духовке?",
    answer: "Да, но с нюансами. Разогрейте духовку до максимума (250–280°C) с пекарским камнем в течение 45–60 минут. Выпечка займет 5–7 минут вместо 60–90 секунд.",
  },
];
const howTo = [
  {
    name: "Рассчитайте пропорции",
    text: "Используйте этот калькулятор, чтобы получить точный вес каждого ингредиента в зависимости от количества пицц и веса каждого шарика теста.",
  },
  {
    name: "Замесите тесто",
    text: "Смешайте муку с теплой водой (22–25°C), солью и дрожжами. Вымешивайте 8–10 минут в комбайне или 15–20 минут руками.",
  },
  {
    name: "Холодная ферментация",
    text: "После предварительной расстойки поместите шарики теста в герметичный контейнер и уберите в холодильник (4°C) на 24–72 часа. Это секрет вкуса.",
  },
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
  slug: 'kalkulator-pizza-napoletano',
  title,
  description,
  faqTitle: "Часто задаваемые вопросы",
  ui: {
    parameters: "Параметры",
    quantity: "Количество",
    pizzas: "пицц",
    weight: "Вес шарика",
    small: "Малая (180г)",
    standard: "Стандарт (260г)",
    large: "Большая (350г)",
    hydration: "Гидратация",
    classic: "Классика (55-60%)",
    modern: "Модерн (65-70%)",
    high: "Высокая (75%+)",
    salt: "Соль",
    fermentation_tip_title: "Совет по ферментации",
    fermentation_tip:
      "Для более легкого теста оставьте его в холодильнике (4°C) на 24 часа, используя <strong>0,3 г</strong> свежих дрожжей на 100 г муки.",
    your_recipe: "Ваш рецепт",
    fresh_yeast: "Свежие дрожжи",
    dry_yeast: "Сухие",
    flour: "Мука (W260-300)",
    water: "Вода",
    salt_label: "Морская соль",
    yeast: "Дрожжи",
    yeast_note: "На 8ч при 20°C",
    total_weight: "Общий вес теста",
    approx: "прибл.",
    visual_note:
      "Визуальный размер представляет примерный диаметр пиццы в зависимости от веса шарика теста.",
  },
  faq,
  howTo, seo: [
    {
      type: 'title',
      text: 'Руководство мастера: Настоящее неаполитанское тесто',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Неаполитанская пицца</strong> — это культурное наследие. Успех зависит от точности времени, температуры и гидратации.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '480°C',
          label: 'Темп. выпечки',
          icon: 'mdi:fire',
        },
        {
          value: '60-90с',
          label: 'Время в печи',
          icon: 'mdi:clock-fast',
        },
        {
          value: '65%',
          label: 'Станд. гидратация',
          icon: 'mdi:water-percent',
        },
        {
          value: 'W280',
          label: 'Сила муки',
          icon: 'mdi:grain',
        },
      ],
    },
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema],
};
