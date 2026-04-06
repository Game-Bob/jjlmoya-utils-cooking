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
  },
};

