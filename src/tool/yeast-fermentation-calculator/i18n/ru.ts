import type { ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FermentationUI } from '../ui';

const title = "Калькулятор Времени Брожения Дрожжей для Хлеба, Закваски и Пива";
const description = "Оцените время расстойки хлеба, брожения закваски и пива на основе температуры, количества дрожжей и цели. Метрические и имперские единицы.";

const faq = [
  {
    "question": "Что рассчитывает этот калькулятор?",
    "answer": "Он оценивает интервал времени для теста, закваски или пива."
  },
  {
    "question": "Почему температура так сильно влияет?",
    "answer": "Температура напрямую меняет скорость метаболизма дрожжей."
  },
  {
    "question": "Что вводить для закваски?",
    "answer": "Вес муки как объем партии и вес закваски как количество культуры."
  },
  {
    "question": "Что вводить для пива?",
    "answer": "Объем сусла в литрах и сухие дрожжи в граммах."
  },
  {
    "question": "Нужно ли останавливать брожение по окончании времени?",
    "answer": "Нет, проверьте тесто визуально или измерьте плотность сусла."
  },
  {
    "question": "Можно ли использовать имперские единицы?",
    "answer": "Да, переключателем в верхней части."
  }
];

const howTo = [
  {
    "name": "Выберите режим",
    "text": "Выберите хлеб, закваску или пиво."
  },
  {
    "name": "Задайте культуру и температуру",
    "text": "Укажите тип дрожжей и температуру."
  },
  {
    "name": "Введите объем и дрожжи",
    "text": "Укажите муку/сусло и количество дрожжей."
  },
  {
    "name": "Установите цель",
    "text": "Выберите подъем теста или степень сбраживания."
  }
];

const faqSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'FAQPage' as const,
  mainEntity: faq.map((item) => ({ '@type': 'Question' as const, name: item.question, acceptedAnswer: { '@type': 'Answer' as const, text: item.answer } })),
};

const howToSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'HowTo' as const,
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep' as const, name: step.name, text: step.text })),
};

const appSchema = {
  '@context': 'https://schema.org' as const,
  '@type': 'SoftwareApplication' as const,
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'All',
};

const ui: FermentationUI = {
  "modeBread": "Хлеб",
  "modeSourdough": "Закваска",
  "modeBeer": "Пиво",
  "modeBreadHint": "промышленные дрожжи",
  "modeSourdoughHint": "дикая культура",
  "modeBeerHint": "элем или лагер",
  "temperature": "Температура брожения",
  "temperatureHelp": "Используйте температуру теста или сусла.",
  "systemLabel": "Система измерений",
  "metricSystem": "Метрическая",
  "imperialSystem": "Имперская",
  "useImperial": "Использовать имперскую",
  "useMetric": "Использовать метрическую",
  "imperialTemperatureUnit": "°F",
  "metricTemperatureUnit": "°C",
  "imperialMassUnit": "oz",
  "metricMassUnit": "г",
  "imperialFlourUnit": "oz",
  "metricFlourUnit": "г",
  "imperialWortUnit": "gal",
  "metricWortUnit": "л",
  "batchSize": "Размер партии",
  "batchSizeHelp": "Вес муки для теста или объем сусла для пива.",
  "flour": "Вес муки",
  "wort": "Объем сусла",
  "yeastAmount": "Количество культуры",
  "yeastAmountHelp": "Взвесьте дрожжи или закваску.",
  "yeastType": "Тип культуры",
  "instant": "Сухие инстантные",
  "active": "Сухие активные",
  "fresh": "Свежие дрожжи",
  "starter": "Закваска",
  "ale": "Элевые дрожжи",
  "lager": "Лагерные дрожжи",
  "targetRise": "Целевой подъем",
  "targetAttenuation": "Целевая аттенюация",
  "targetHelp": "Это ориентир, а не автоматическая гарантия.",
  "riseUnit": "x объем",
  "attenuationUnit": "%",
  "presetRoom": "Комнатная",
  "presetWarm": "Теплая",
  "presetCool": "Прохладная",
  "presetOvernight": "Ночная",
  "calculate": "Обновить расчет",
  "reset": "Сбросить к хлебу",
  "estimatedWindow": "Оценочное окно брожения",
  "rate": "Скорость работы",
  "pitchDensity": "Плотность засева",
  "status": "Показания",
  "steady": "стабильные условия",
  "watch": "наблюдайте за культурой",
  "caution": "вне оптимума",
  "invalid": "введите корректные данные",
  "steadyText": "Данные близки к профилю. Наблюдайте за тестом или суслом.",
  "watchText": "Оценка служит ориентиром, но температура делает окно изменчивым.",
  "cautionText": "Комбинация далека от нормы. Используйте как ориентировочный сигнал.",
  "invalidText": "Введите положительные значения.",
  "assumptions": "Допущения модели",
  "assumptionsText": "Модель использует температурный фактор Q10 и сублинейную коррекцию дозы.",
  "targetMarker": "цель",
  "riseScene": "объем теста",
  "attenuationScene": "сброженный сахар",
  "hours": "часов",
  "days": "дней",
  "perLiter": "г/л",
  "perGallon": "oz/gal",
  "perFlour": "муки",
  "enterValid": "Введите данные.",
  "faqTitle": "Часто Задаваемые Вопросы",
  "bibliographyTitle": "Библиография и Источники"
};

export const content: ToolLocaleContent<FermentationUI> = {
  slug: "kalkulyator-vremeni-brozheniya-drozhzhey",
  title,
  description,
  ui,
  faqTitle: ui.faqTitle,
  faq,
  bibliographyTitle: ui.bibliographyTitle,
  bibliography,
  howTo,
  seo: [
    { type: 'title', text: "Как работает оценка времени брожения", level: 2 },
    { type: 'paragraph', html: "Ищете калькулятор времени брожения дрожжей, закваски или пива? Этот инструмент дает практический временной интервал на основе температуры, дрожжей, объема партии и цели." },
    { type: 'stats', columns: 3, items: [{ value: '3', label: "режима брожения", icon: 'mdi:flask-outline' }, { value: 'Q10', label: "температурный фактор", icon: 'mdi:thermometer' }, { value: 'range', label: "формат результата", icon: 'mdi:arrow-expand-horizontal' }] },
    { type: 'title', text: "Факторы, влияющие на временное окно", level: 3 },
    { type: 'table', headers: ["Переменная","Хлеб и закваска","Пиво"], rows: [["Размер партии","Мука в граммах","Сусло в литрах"],["Количество культуры","Дрожжи/закваска в граммах","Сухие дрожжи в граммах"],["Цель","Коэффициент объема","Целевая аттенюация"],["Проверка","Объем и эластичность","Стабильные замеры плотности"]] },
    { type: 'title', text: "Почему результат задается диапазоном", level: 3 },
    { type: 'paragraph', html: "Тесто по одному рецепту может бродить с разной скоростью из-за колебаний температуры и активности дрожжей. Диапазон отражает эту реальную неопределенность." },
    { type: 'tip', title: "Используйте цель как визуальный ориентир", html: "Для теста оценивайте подъем и структуру. Для пива подтверждайте плотность ареометром." },
  ],
  schemas: [appSchema, faqSchema, howToSchema],
};
