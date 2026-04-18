import type { CookingCategoryEntry } from '../types';
import { americanKitchenConverter } from '../tool/american-kitchen-converter/entry';
import { meringuePeak } from '../tool/meringue-peak/entry';
import { bananaCare } from '../tool/banana-ripeness/entry';
import { eggTimer } from '../tool/egg-timer/entry';
import { kitchenTimer } from '../tool/kitchen-timer/entry';
import { pizza } from '../tool/pizza/entry';
import { brine } from '../tool/brine/entry';
import { moldScaler } from '../tool/mold-scaler/entry';
import { ingredientRescaler } from '../tool/ingredient-rescaler/entry';
import { sourdoughCalculator } from '../tool/sourdough-calculator/entry';
import { rouxGuide } from '../tool/roux-guide/entry';
import { cookwareGuide } from '../tool/cookware-guide/entry';

export const cookingCategory: CookingCategoryEntry = {
  icon: 'mdi:chef-hat',
  tools: [
    americanKitchenConverter,
    meringuePeak,
    bananaCare,
    eggTimer,
    kitchenTimer,
    pizza,
    brine,
    moldScaler,
    ingredientRescaler,
    sourdoughCalculator,
    rouxGuide,
    cookwareGuide,
  ],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    de: () => import('./i18n/de').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
  },
};

