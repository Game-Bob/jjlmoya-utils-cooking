import type { CookingToolEntry, ToolDefinition } from '../../types';
import KitchenTimerComponent from './component.astro';
import KitchenTimerSEO from './seo.astro';
import KitchenTimerBibliography from './bibliography.astro';

export const kitchenTimer: CookingToolEntry = {
	id: 'kitchen-timer',
	icons: {
		bg: 'mdi:clock-outline',
		fg: 'mdi:fire',
	},
	i18n: {
		es: () => import('./i18n/es').then((m) => m.content),
		en: () => import('./i18n/en').then((m) => m.content),
		fr: () => import('./i18n/fr').then((m) => m.content),
	},
};

export { KitchenTimerComponent, KitchenTimerSEO, KitchenTimerBibliography };

export const KITCHEN_TIMER_TOOL: ToolDefinition = {
	entry: kitchenTimer,
	Component: KitchenTimerComponent,
	SEOComponent: KitchenTimerSEO,
	BibliographyComponent: KitchenTimerBibliography,
};
