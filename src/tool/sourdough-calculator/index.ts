import { sourdoughCalculator } from './entry';
export * from './entry';
export const SOURDOUGH_CALCULATOR_TOOL: ToolDefinition = {
	entry: sourdoughCalculator,
	Component: () => import('./component.astro'),
	SEOComponent: () => import('./seo.astro'),
	BibliographyComponent: () => import('./bibliography.astro'),
};
