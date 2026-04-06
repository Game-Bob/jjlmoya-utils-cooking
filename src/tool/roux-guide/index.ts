import type { CookingToolEntry, ToolDefinition } from '../../types';
import RouxGuideComponent from './component.astro';
import RouxGuideSEO from './seo.astro';
import RouxGuideBibliography from './bibliography.astro';

export const rouxGuide: CookingToolEntry = {
	id: 'roux-guide',
	icons: {
		bg: 'mdi:chef-hat',
		fg: 'mdi:pot-mix',
	},
	i18n: {
		es: () => import('./i18n/es').then((m) => m.content),
		en: () => import('./i18n/en').then((m) => m.content),
		fr: () => import('./i18n/fr').then((m) => m.content),
	},
};

export const ROUX_GUIDE_TOOL: ToolDefinition = {
	entry: rouxGuide,
	Component: RouxGuideComponent,
	SEOComponent: RouxGuideSEO,
	BibliographyComponent: RouxGuideBibliography,
};
