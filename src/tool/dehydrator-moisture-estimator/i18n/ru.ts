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
      text: 'Сколько веса потеряют продукты в дегидраторе? Рассчитайте время сушки и влажность',
      level: 2
    },
    {
      type: 'paragraph',
      html: 'Независимо от того, готовите ли вы <strong>джерки (вяленое мясо)</strong>, <strong>пастилу (fruit leather)</strong>, <strong>сушеные яблоки</strong> или <strong>вяленый арбуз</strong>, ключом к стабильному результату является понимание влажности. Пищевая безопасность и длительное хранение зависят от достижения целевого уровня влажности. Наш <strong>калькулятор влажности для дегидратора</strong> рассчитывает конечный вес, объем испарившейся воды и время сушки в зависимости от ингредиента и настроек.'
    },
    {
      type: 'stats',
      columns: 4,
      items: [
        { value: '70%', label: 'Влажность Мяса', icon: 'mdi:food' },
        { value: '92%', label: 'Влажность Арбуза', icon: 'mdi:water' },
        { value: '10%', label: 'Цель для Джерки', icon: 'mdi:shield' },
        { value: '55°C', label: 'Средняя Темп. Сушки', icon: 'mdi:thermometer' }
      ]
    },
    {
      type: 'title',
      text: 'Какой уровень влажности правильный для сушеных продуктов?',
      level: 2
    },
    {
      type: 'table',
      headers: ['Ингредиент', 'Начальная Влажность', 'Целевая Влажность', 'Типичное Время', 'Признак Готовности'],
      rows: [
        ['Джерки из говядины', '70%', '10-15%', '4-8 ч', 'Плотная текстура, гнется без излома'],
        ['Яблочные кольца', '86%', '15-20%', '6-10 ч', 'Гибкие, похожи на кожу, нет липких мест'],
        ['Слайсы манго', '84%', '15-18%', '6-10 ч', 'Тягучие, без следов влаги'],
        ['Грибы', '92%', '5-8%', '4-8 ч', 'Ломкие и хрустящие'],
        ['Вяленый арбуз', '92%', '10-12%', '10-16 ч', 'С хрустом ломается при сгибании']
      ]
    },
    {
      type: 'title',
      text: 'Частые проблемы при дегидратации и их решение',
      level: 2
    },
    {
      type: 'list',
      items: [
        '<strong>"Zakalivaniye" poverkhnosti (Case hardening):</strong> Vneshniy sloy sokhnet slishkom bystro, zapiraya vlagu vnutri. Snizyte temperaturu na 5-10 °C i uluchshite ventilyatsiyu.',
        '<strong>Плесень при хранении:</strong> Продукт не был досушен до безопасного уровня влажности. С помощью калькулятора определите целевой вес и проверьте готовность.',
        '<strong>Неравномерная сушка:</strong> Кусочки нарезаны разной толщины или дегидратор перегружен. Нарезайте продукты одинаково и оставляйте место между ними.',
        '<strong>Продукты пересушены и крошатся:</strong> Избыточная сушка приводит к потере вкуса и текстуры. Проверяйте нормы влажности для каждого конкретного ингредиента.'
      ]
    },
    {
      type: 'title',
      text: 'Руководство по температурам сушки для разных типов продуктов',
      level: 3
    },
    {
      type: 'paragraph',
      html: 'Temperatura vlijaet kak na skorost sushki, tak i na kachestvo gotovogo produkta. Vysokiye temperatury uskorjajut ispareniye vody, no mogut vyzvat zhestkost poverkhnosti, razrusheniye poleznykh veshchestv i neravnomernyy rezultat. Ispolzuyte sledujushchiye oriyentiry dlya degidratatora:'
    },
    {
      type: 'comparative',
      columns: 3,
      items: [
        {
          title: 'Nizkaya temperatura 40 do 50 gradusov',
          icon: 'mdi:thermometer',
          description: 'Идеально для сохранения энзимов, витаминов и деликатных ароматов.',
          points: ['Травы и зелень', 'Грибы', 'Сохранение сыроедческих продуктов', 'Требуется больше времени']
        },
        {
          title: 'Srednyaya temperatura 50 do 60 gradusov',
          icon: 'mdi:thermometer',
          description: 'Стандартный диапазон для большинства фруктов и овощей.',
          highlight: true,
          points: ['Яблоки и манго', 'Большинство овощей', 'Фруктовая пастила', 'Баланс скорости и качества']
        },
        {
          title: 'Vysokaya temperatura 60 do 70 gradusov',
          icon: 'mdi:thermometer',
          description: 'Используется для вяленого мяса и плотных продуктов из соображений безопасности.',
          points: ['Джерки из говядины и птицы', 'Плотные корнеплоды', 'Приоритет пищевой безопасности', 'Более короткий цикл сушки']
        }
      ]
    },
    {
      type: 'tip',
      title: 'Всегда делайте предварительную обработку фруктов',
      html: 'Перед сушкой опустите яблоки, бананы и груши в лимонный сок или раствор аскорбиновой кислоты, чтобы они не темнели и сохраняли цвет.'
    },
    {
      type: 'tip',
      title: 'Поворачивайте поддоны во время сушки',
      html: 'V degidratorakh chasto byvajut boleye goryachiye zony. Perestavlyayte poddony sverkhu vniz i povernivayte ikh kazhdyye 2-3 chasa dlya ravnomernogo rezultata.'
    },
    {
      type: 'tip',
      title: 'Dayte produktam otlezhatsa pered khraneniyem',
      html: 'Posle sushki ostudite produkty i podderzhite v zakrytoy emkosti 1 nedelyu ezhednevno vstryakhivaja. Yesli poyavitsya kondensat, dousushite.'
    },
    {
      type: 'title',
      text: 'Глоссарий дегидратации',
      level: 3
    },
    {
      type: 'glossary',
      items: [
        { term: 'Zhestkost poverkhnosti', definition: 'Sostoyaniye, kogda vneshnyaya poverkhnost produkta vysykhayet slishkom bystro, obrazuya korku, kotoraya zaderzhivayet vlagu vnutri i meshayet polnoy sushke.' },
        { term: 'Активность воды (aw)', definition: 'Показатель свободной воды, доступной для роста микроорганизмов. Для безопасного хранения вяленых продуктов aw должна быть ниже 0,60.' },
        { term: 'Содержание влаги', definition: 'Процент веса воды относительно общего веса продукта. Позволяет контролировать ход сушки и безопасность хранения.' },
        { term: 'Коэффициент усушки', definition: 'Отношение первоначального веса к весу готового продукта после сушки. Важно для расчета объемов сырья и тары.' }
      ]
    },
    {
      type: 'summary',
      title: 'Ключевые выводы для идеальной сушки',
      items: [
        'U raznykh produktov raznaya nachalnaya vlazhnost (70-92%). Ispolzuyte predoustanovki dlya tochnykh raschetov.',
        'Tselevaya vlazhnost zavisit ot produkta: 10% dlya dzhurki, 15-20% dlya fruktov, 5-8% dlya ovoshchey i gribov.',
        'Temperatura sushki vlijaet na skorost i kachestvo. Derzhites diapazona 50-60 °C dlya bolshinstva produktov.',
        'Zhestkost poverkhnosti portit teksturu. Ne prevyshajte temperaturu v 70 °C i obespechtye khoroshuyu tsirkulyatsiyu vozdukha.',
        'Vsegda davayte produktam otlezhatsa nedelyu pered dolgosrochnym khraneniyem, chtoby vlaga vnutri raspredelilas ravnomerno.'
      ]
    }
  ],
  bibliography,
  schemas: [faqSchema, howToSchema, appSchema]
};
