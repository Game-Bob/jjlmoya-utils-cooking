import type { CookingCategoryEntry } from '../types';
import { americanKitchenConverter } from '../tool/american-kitchen-converter';
import { meringuePeak } from '../tool/meringue-peak';
import { bananaCare } from '../tool/banana-ripeness';
import { eggTimer } from '../tool/egg-timer';
import { kitchenTimer } from '../tool/kitchen-timer';
import { pizza } from '../tool/pizza';
import { brine } from '../tool/brine';
import { moldScaler } from '../tool/mold-scaler';
import { ingredientRescaler } from '../tool/ingredient-rescaler';
import { sourdoughCalculator } from '../tool/sourdough-calculator';
import { rouxGuide } from '../tool/roux-guide';
import { cookwareGuide } from '../tool/cookware-guide';

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

