import type { CookingToolEntry, ToolDefinition } from '../../types';
import SourdoughCalculatorComponent from './component.astro';
import SourdoughCalculatorSEO from './seo.astro';
import SourdoughCalculatorBibliography from './bibliography.astro';

export const sourdoughCalculator: CookingToolEntry = {
	id: 'sourdough-calculator',
	icons: {
		bg: 'mdi:bacteria',
		fg: 'mdi:scale-balance',
	},
	i18n: {
		es: () => import('./i18n/es').then((m) => m.content),
		en: () => import('./i18n/en').then((m) => m.content),
		fr: () => import('./i18n/fr').then((m) => m.content),
	},
};

export const SOURDOUGH_CALCULATOR_TOOL: ToolDefinition = {
	entry: sourdoughCalculator,
	Component: SourdoughCalculatorComponent,
	SEOComponent: SourdoughCalculatorSEO,
	BibliographyComponent: SourdoughCalculatorBibliography,
};
