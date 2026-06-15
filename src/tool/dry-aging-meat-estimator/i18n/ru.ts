import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';

const title = "Калькулятор сухого созревания мяса: выход и стоимость";
const description = "Рассчитайте потерю веса мяса, отходы от зачистки сухой корки и фактическую стоимость за килограмм при сухом созревании говядины или другого мяса дома или в камере.";
const faq = [
  {
    question: "Сколько веса теряет мясо при сухом созревании?",
    answer: "В процессе стандартного сухого созревания (от 30 до 45 дней) мясо теряет около 15-25% своего веса из-за испарения влаги. Дополнительно около 15% первоначального веса теряется при срезании сухой внешней корки (зачистке) перед приготовлением."
  },
  {
    question: "Какая влажность оптимальна для сухого созревания?",
    answer: "Идеальная относительная влажность воздуха для сухого вызревания мяса составляет от 75% до 85%. Если влажность слишком низкая (ниже 75%), поверхность сохнет слишком быстро, образуя твердую корку. Если слишком высокая (выше 85%), возрастает риск появления плесени и порчи."
  },
  {
    question: "Почему цена за килограмм так сильно увеличивается?",
    answer: "Поскольку вы теряете вес из-за испарения воды и зачистки корки, конечный полезный вес будет меньше начального. Общая стоимость куска мяса не меняется, поэтому цена за один полезный килограмм увеличивается пропорционально потерянному весу."
  }
];

const howTo = [
  {
    name: "Введите начальный вес",
    text: "Укажите исходный вес отруба перед началом сухого созревания."
  },
  {
    name: "Установите дни созревания",
    text: "Выберите общую длительность созревания, обычно от 1 до 60 дней."
  },
  {
    name: "Настройте относительную влажность",
    text: "Задайте влажность в камере (оптимально 75-85%) для расчета скорости испарения воды."
  },
  {
    name: "Введите исходную цену",
    text: "Укажите стоимость сырого мяса за килограмм для сравнения с итоговой стоимостью полезного выхода."
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
  slug: 'kalkulyator-suhogo-sozrevaniya-myasa',
  title,
  description,
  faqTitle: 'Часто задаваемые вопросы',
  ui: {
    title: 'Калькулятор вызревания мяса',
    subtitle: 'Симуляция потери веса и расчет стоимости готового выхода',
    startWeightLabel: 'Начальный вес',
    daysLabel: 'Время созревания',
    pricePerKgLabel: 'Исходная цена',
    humidityLabel: 'Относительная влажность',
    finalWeightLabel: 'Конечный полезный вес',
    yieldLabel: 'Общий полезный выход',
    originalCostLabel: 'Начальная общая стоимость',
    finalCostPerKgLabel: 'Конечная полезная цена',
    moistureLossLabel: 'Потеря влаги при испарении',
    trimmingLossLabel: 'Отходы от зачистки корки',
    warningLowHumidity: 'Предупреждение: влажность ниже 75%. Поверхность может высохнуть слишком быстро, вызвав закал мяса.',
    warningHighHumidity: 'Предупреждение: влажность выше 85%. Повышенный риск бактериальной порчи или роста нежелательной плесени.',
    timelineTitle: 'Хронология сухого созревания',
    timelineInfoText: 'Кликните по временной шкале, чтобы просмотреть физические изменения куска мяса'
  },
  faq,
  howTo,
  seo: [
    {
      type: 'title',
      text: 'Наука и экономика сухого вызревания мяса',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Сухое созревание - это кулинарное искусство, объединяющее микробиологию, биохимию и физику для превращения обычных отрубов говядины в нежнейшие деликатесы с концентрированным вкусом.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        {
          value: '75-85%',
          label: 'Влажность',
          icon: 'mdi:water-percent'
        },
        {
          value: '1-3°C',
          label: 'Температура',
          icon: 'mdi:thermometer'
        },
        {
          value: '15%',
          label: 'Потери на зачистку',
          icon: 'mdi:knife'
        },
        {
          value: '30-45 дн.',
          label: 'Обычно созревание',
          icon: 'mdi:clock-outline'
        }
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
