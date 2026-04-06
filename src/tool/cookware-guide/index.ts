import type { CookingToolEntry, ToolDefinition } from '../../types';
import CookwareGuideComponent from './component.astro';
import CookwareGuideSEO from './seo.astro';
import CookwareGuideBibliography from './bibliography.astro';

export const cookwareGuide: CookingToolEntry = {
	id: 'cookware-guide',
	icons: {
		bg: 'mdi:chef-hat',
		fg: 'mdi:pot-mix',
	},
	i18n: {
		es: () => import('./i18n/es').then((m) => m.content),
		en: () => import('./i18n/en').then((m) => m.content),
	},
};

export const COOKWARE_GUIDE_TOOL: ToolDefinition = {
	entry: cookwareGuide,
	Component: CookwareGuideComponent,
	SEOComponent: CookwareGuideSEO,
	BibliographyComponent: CookwareGuideBibliography,
};
