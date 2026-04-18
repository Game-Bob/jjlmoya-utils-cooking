export * from './entry';
export const KITCHEN_TIMER_TOOL: ToolDefinition = {
	entry: kitchenTimer,
	Component: () => import('./component.astro'),
	SEOComponent: () => import('./seo.astro'),
	BibliographyComponent: () => import('./bibliography.astro'),
};
