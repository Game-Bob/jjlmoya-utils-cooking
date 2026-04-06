import type { CookingToolEntry, ToolDefinition } from '../../types';
import MoldScalerComponent from './component.astro';
import MoldScalerSEO from './seo.astro';
import MoldScalerBibliography from './bibliography.astro';

export const moldScaler: CookingToolEntry = {
	id: 'mold-scaler',
	icons: {
		bg: 'mdi:cake',
		fg: 'mdi:resize',
	},
	i18n: {
		es: () => import('./i18n/es').then((m) => m.content),
		en: () => import('./i18n/en').then((m) => m.content),
		fr: () => import('./i18n/fr').then((m) => m.content),
	},
};

export { MoldScalerComponent, MoldScalerSEO, MoldScalerBibliography };

export const MOLD_SCALER_TOOL: ToolDefinition = {
	entry: moldScaler,
	Component: MoldScalerComponent,
	SEOComponent: MoldScalerSEO,
	BibliographyComponent: MoldScalerBibliography,
};
