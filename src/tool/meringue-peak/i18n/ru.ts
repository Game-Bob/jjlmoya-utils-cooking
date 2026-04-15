import type { ToolLocaleContent } from '../../../types';

const title = "Калькулятор меренги и взбитых белков";
const description = "Рассчитайте точное количество сахара для французской, итальянской или швейцарской меренги в зависимости от веса белков. Время взбивания и кулинарные хитрости.";
const faq = [
  {
    question: 'Какое соотношение сахара и белков идеально?',
    answer: 'Золотое правило кондитерского искусства — соотношение 1:2. На каждый грамм яичного белка следует использовать два грамма сахара, чтобы обеспечить стабильную и плотную структуру.',
  },
  {
    question: 'Как понять, что белки взбиты "до твердых пиков"?',
    answer: 'Твердые пики достигаются, когда при поднятии венчика меренга образует острый кончик, который держится вертикально и не падает. Кроме того, меренга должна стать очень глянцевой.',
  },
  {
    question: 'Какая меренга самая стабильная для декора?',
    answer: 'Итальянская меренга — самая стабильная из трех основных видов. Благодаря горячему сиропу белки слегка завариваются, создавая структуру, более устойчивую к теплу и влаге.',
  },
  {
    question: 'Можно ли использовать пастеризованные белки из бутылки?',
    answer: 'Да, можно, но они часто взбиваются дольше, чем свежие белки. Хитрость заключается в том, чтобы добавить щепотку винного камня или несколько капель лимонного сока для стабильности.',
  },
];
const howTo = [
  {
    name: 'Взвесьте белки',
    text: 'Используйте цифровые весы, чтобы получить точный вес белков без капли желтка.',
  },
  {
    name: 'Введите вес',
    text: 'Введите вес в наш калькулятор, чтобы узнать необходимое количество сахара.',
  },
  {
    name: 'Выберите технику',
    text: 'Выберите, какую меренгу вы будете готовить: французскую (базовая), итальянскую (стабильная) или швейцарскую (шелковистая).',
  },
  {
    name: 'Взбейте и проверьте',
    text: 'Следуйте указанному времени и проверяйте консистенцию до получения твердых пиков.',
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
  slug: 'kalculyator-merengi-belki',
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  bibliographyTitle: 'Источники и ссылки',
  ui: {
    whitesLabel: 'Вес белков',
    whitesPlaceholder: 'Напр. 120',
    whitesUnit: 'г',
    typeLabel: 'Тип меренги',
    typeFrench: 'Французская',
    typeItalian: 'Итальянская',
    typeSwiss: 'Швейцарская',
    timesHeading: 'Ориентировочное время (взбивание на средн./высок. скорости)',
    stageSpumado: 'Пена',
    stageSpumadoDesc: 'Крупные пузыри, похожие на мыльную пену.',
    stageSoftPeaks: 'Мягкие пики',
    stageSoftPeaksDesc: 'Кончик загибается при поднятии венчика.',
    stageStiffPeaks: 'Твердые пики',
    stageStiffPeaksDesc: 'Острый, плотный и блестящий пик.',
    frenchSugarWhite: 'Сахар',
    frenchSugarPowder: 'Сахарная пудра',
    frenchTip: 'Французская меренга — самая простая, идеальна для выпекания безе. Не подходит для употребления в сыром виде.',
    frenchTime1: '1-2 мин',
    frenchTime2: '3-5 мин',
    frenchTime3: '7-9 мин',
    italianSugarSyrup: 'Сахар для сиропа',
    italianWater: 'Вода',
    italianTip: 'Итальянская меренга самая стабильная. Готовится на сиропе 118°C. Идеальна для украшения тортов.',
    italianTime1: '2 мин',
    italianTime2: '5 мин',
    italianTime3: '10-12 мин',
    swissSugarWhite: 'Сахар',
    swissMaxTemp: 'Макс. темп.',
    swissTip: 'Швейцарская меренга прогревается на водяной бане до растворения сахара. Отличная база для масляного крема.',
    swissTime1: '1-2 мин',
    swissTime2: '4-6 мин',
    swissTime3: '8-10 мин',
    invalidWeightError: 'Введите корректный вес',
  },
  faq,
  howTo,
  bibliography: [
    {
      name: 'Ларусс Гастрономик: Типы меренги',
      url: 'https://laroussecocina.mx/palabra/merengue/',
    },
    {
      name: 'Exploratorium: Science of Eggs',
      url: 'https://www.exploratorium.edu/explore/cooking/egg-science',
    },
  ],
  seo: [
    {
      type: 'title',
      text: 'Руководство мастера: расчет меренги и взбитых белков',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Умение правильно взбивать <strong>белки до пиков</strong> и готовить меренгу выводит ваши десерты на профессиональный уровень. Весь секрет в точном весе.',
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '1:2',
          label: 'Соотношение Белок:Сахар',
          icon: 'mdi:scale-balance',
        },
        {
          value: '118°C',
          label: 'Итальянский сироп',
          icon: 'mdi:thermometer-high',
        },
        {
          value: '60°C',
          label: 'Швейцарская баня',
          icon: 'mdi:beaker-question-outline',
        },
        {
          value: '0%',
          label: 'Жироустойчивость',
          icon: 'mdi:close-circle-outline',
        },
      ],
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Французская меренга',
          icon: 'mdi:baguette',
          description: 'Самая простая, но наименее стабильная.',
          points: [
            'Идеальна для безе',
            'Легкая текстура',
            'Требует выпекания',
            'Быстро готовится',
          ],
        },
        {
          title: 'Итальянская меренга',
          icon: 'mdi:pizza',
          description: 'Максимально стабильная.',
          highlight: true,
          points: [
            'Для декора тортов',
            'Можно есть без выпечки',
            'Стойкость к влажности',
            'Плотная и блестящая',
          ],
        },
        {
          title: 'Швейцарская меренга',
          icon: 'mdi:cheese',
          description: 'Прогревается на бане.',
          points: [
            'База для масляных кремов',
            'Шелковистая текстура',
            'Для начинок',
            'Высокая стабильность',
          ],
        },
      ],
    },
    {
      type: 'tip',
      title: 'Хитрость с металлической чашей',
      html: 'Протрите чашу уксусом или лимоном. Малейшие следы жира не дадут белкам подняться.',
    },
  ],
  schemas: [faqSchema, howToSchema, appSchema],
};
