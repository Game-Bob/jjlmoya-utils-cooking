import type { CookingCategoryEntry } from '../types';
import { americanKitchenConverter } from '../tool/american-kitchen-converter';
import { meringueCalculator } from '../tool/meringue-peak';
import { bananaCare } from '../tool/banana-ripeness';
import { kitchenTimer } from '../tool/kitchen-timer';
import { pizza } from '../tool/pizza';

export const cookingCategory: CookingCategoryEntry = {
  icon: 'mdi:chef-hat',
  tools: [
    americanKitchenConverter,
    meringueCalculator,
    bananaCare,
    kitchenTimer,
    pizza,
  ],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

