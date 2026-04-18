export * from './entry';
export const ROUX_GUIDE_TOOL: ToolDefinition = {
	entry: rouxGuide,
	Component: () => import('./component.astro'),
	SEOComponent: () => import('./seo.astro'),
	BibliographyComponent: () => import('./bibliography.astro'),
};
