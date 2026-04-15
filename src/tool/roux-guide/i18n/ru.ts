import type { ToolLocaleContent } from '../../../types';

const title = "Экспертное руководство по Ру и материнским соусам";
const description = "Интерактивный калькулятор Ру. Научитесь готовить Бешамель, Велюте и Эспаньоль с точными пропорциями. Основа французской кухни.";
const faq = [
    {
      question: 'Что такое Ру (Roux) и для чего он нужен?',
      answer: 'Это смесь жира (обычно сливочного масла) и муки, проваренная на медленном огне. Используется как базовый загуститель для французских материнских соусов, таких как Бешамель или Велюте.',
    },
    {
      question: ' Какая идеальная пропорция для Ру?',
      answer: 'Стандартная пропорция — 1:1 по весу. Например, 50 г масла и 50 г муки. Эта смесь может загустить примерно 1 литр жидкости в зависимости от желаемой плотности.',
    },
    {
      question: 'В чем разница между видами Ру?',
      answer: 'Белый Ру готовится 2-3 мин (Бешамель). Золотистый 5-8 мин (Велюте). Темный Ру — до 15-20 мин (Эспаньоль). Чем темнее цвет, тем больше орехового вкуса, но меньше загущающая способность.',
    },
    {
      question: 'Как избежать комочков?',
      answer: 'Золотое правило — контраст температур: холодная жидкость в горячий Ру или горячая жидкость в холодный Ру. Добавляйте жидкость понемногу, постоянно помешивая венчиком.',
    },
  ];
const howTo = [
  {
    name: 'Выберите тип жидкости',
    text: 'Выберите молоко (Бешамель), светлый бульон (Велюте), темный бульон (Эспаньоль) или томат.',
  },
  {
    name: 'Определите желаемую густоту',
    text: 'От супа/крема до теста для крокетов. Калькулятор автоматически настроит необходимое количество Ру.',
  },
  {
    name: 'Введите объем жидкости',
    text: 'Укажите объем жидкости в мл. Калькулятор подскажет точное количество масла и муки.',
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
  slug: 'roux-guide',
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  faq,
  bibliographyTitle: 'Библиография',
  bibliography: [
    {
      name: 'Larousse Gastronomique',
      url: 'https://www.laroussecocina.com/',
    },
  ],
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Расчет Ру и материнских соусов: руководство мастера',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '<strong>Ру</strong> — это структурная основа классической французской кухни. Понимание соотношения муки, масла и жидкости — это разница между бархатистым соусом и жидкостью с комочками.',
    },
  ],
  ui: {
    baseLiquid: 'Базовая жидкость',
    volume: 'Объем',
    ml: 'мл',
    liquidType: 'Тип жидкости',
    milk: 'Молоко',
    lightStock: 'Светлый бульон',
    darkStock: 'Темный бульон',
    tomato: 'Томат',
    sauceTexture: 'Текстура соуса',
    soup: 'Суп / Крем',
    normalSauce: 'Обычный соус',
    thick: 'Густой / Начинка',
    croquette: 'Крокеты / Тесто',
    rouxMix: 'Смесь Ру',
    butter: 'Масло',
    flour: 'Мука',
    instructions: 'Инструкции',
    sauceName: 'Тип соуса',
    ratio: 'Пропорция',
    chefTip: 'Совет шефа',
    white: 'Белый',
    blond: 'Золотистый',
    brown: 'Темный',
    beurreManied: 'Бер-манье (для исправления густоты)',
    recipeBechamel: "Бешамель",
    recipeVeloute: "Велюте",
    recipeEspagnole: "Эспаньоль",
    recipeTomato: "Томатный соус",
    tipBechamel: "Используйте холодное молоко. Добавляйте постепенно или сразу, если интенсивно мешаете.",
    tipVeloute: "Используйте куриный или рыбный бульон. Ру должен пахнуть печеньем.",
    tipEspagnole: "Ру должен быть цвета шоколада, но не подгоревшим.",
    tipTomato: "Ру поможет придать томатному соусу плотность и мягкость текстуры.",
    rouxWhiteLabel: "Белый Ру",
    rouxBlondLabel: "Золотистый Ру",
    rouxBrownLabel: "Темный Ру",
    descWhite: "Готовьте до исчезновения запаха сырой муки. Без изменения цвета.",
    descBlond: "Добейтесь золотистого цвета и орехового аромата.",
    descBrown: "Очень слабый огонь. Цвет шоколада. Требуется на 10% больше веса.",
    timeWhite: "2-3 мин",
    timeBlond: "5-8 мин",
    timeBrown: "15-20 мин",
  },
  schemas: [faqSchema as any, howToSchema as any, appSchema as any],
};
