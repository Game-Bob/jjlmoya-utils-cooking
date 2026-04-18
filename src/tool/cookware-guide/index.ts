import { cookwareGuide } from './entry';
export * from './entry';
export const COOKWARE_GUIDE_TOOL: ToolDefinition = {
	entry: cookwareGuide,
	Component: () => import('./component.astro'),
	SEOComponent: () => import('./seo.astro'),
	BibliographyComponent: () => import('./bibliography.astro'),
};
