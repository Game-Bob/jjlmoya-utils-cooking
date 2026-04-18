export * from './entry';
export const INGREDIENT_RESCALER_TOOL: ToolDefinition = {
	entry: ingredientRescaler,
	Component: () => import('./component.astro'),
	SEOComponent: () => import('./seo.astro'),
	BibliographyComponent: () => import('./bibliography.astro'),
};
