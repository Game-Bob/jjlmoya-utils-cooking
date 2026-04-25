import type { CookingToolEntry } from '../../types';

export const yeastConverter: CookingToolEntry = {
	id: 'yeast-converter',
	icons: {
		bg: 'mdi:pot-steam',
		fg: 'mdi:flask-outline',
	},
	i18n: {
		en: () => import('./i18n/en').then((m) => m.content),
	},
};
