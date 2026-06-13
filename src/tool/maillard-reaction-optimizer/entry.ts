import type { CookingToolEntry } from '../../types';

export const maillardReaction: CookingToolEntry = {
  id: 'maillard-reaction-optimizer',
  icons: {
    bg: 'mdi:food-croissant',
    fg: 'mdi:flask',
  },
  i18n: {
    en: () => import('./i18n/en').then((m) => m.content),
  },
};
