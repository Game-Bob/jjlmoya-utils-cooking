import type { CookingToolEntry, ToolLocaleContent } from '../../types';

export interface FoodSafetyCheckerUI {
  title: string;
  eyebrow: string;
  subtitle: string;
  foodLabel: string;
  temperatureLabel: string;
  unitCelsius: string;
  unitFahrenheit: string;
  resultTitle: string;
  measuredLabel: string;
  targetLabel: string;
  differenceLabel: string;
  statusBelow: string;
  statusMeets: string;
  statusAbove: string;
  belowDescription: string;
  meetsDescription: string;
  aboveDescription: string;
  restLabel: string;
  noRestNeeded: string;
  sourceLabel: string;
  sourceName: string;
  placementTip: string;
  noteTitle: string;
  noteText: string;
  poultryOption: string;
  groundMeatOption: string;
  redMeatCutsOption: string;
  porkCutsOption: string;
  rawHamOption: string;
  precookedHamOption: string;
  rabbitVenisonOption: string;
  fishOption: string;
  eggDishesOption: string;
  casserolesOption: string;
  leftoversOption: string;
  poultryNote: string;
  groundMeatNote: string;
  redMeatCutsNote: string;
  porkCutsNote: string;
  rawHamNote: string;
  precookedHamNote: string;
  rabbitVenisonNote: string;
  fishNote: string;
  eggDishesNote: string;
  casserolesNote: string;
  leftoversNote: string;
  [key: string]: string;
}

export type FoodSafetyCheckerLocaleContent = ToolLocaleContent<FoodSafetyCheckerUI>;

export const foodSafeTemperatureChecker: CookingToolEntry<FoodSafetyCheckerUI> = {
  id: 'food-safe-temperature-checker',
  icons: {
    bg: 'mdi:thermometer',
    fg: 'mdi:thermometer-check',
  },
  i18n: {
    de: () => import('./i18n/de').then((module) => module.content),
    en: () => import('./i18n/en').then((module) => module.content),
    es: () => import('./i18n/es').then((module) => module.content),
    fr: () => import('./i18n/fr').then((module) => module.content),
    id: () => import('./i18n/id').then((module) => module.content),
    it: () => import('./i18n/it').then((module) => module.content),
    ja: () => import('./i18n/ja').then((module) => module.content),
    ko: () => import('./i18n/ko').then((module) => module.content),
    nl: () => import('./i18n/nl').then((module) => module.content),
    pl: () => import('./i18n/pl').then((module) => module.content),
    pt: () => import('./i18n/pt').then((module) => module.content),
    ru: () => import('./i18n/ru').then((module) => module.content),
    sv: () => import('./i18n/sv').then((module) => module.content),
    tr: () => import('./i18n/tr').then((module) => module.content),
    zh: () => import('./i18n/zh').then((module) => module.content),
  },
};
