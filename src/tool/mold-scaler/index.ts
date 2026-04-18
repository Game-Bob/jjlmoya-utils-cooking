import { moldScaler } from './entry';
export * from './entry';
export const MOLD_SCALER_TOOL: ToolDefinition = {
	entry: moldScaler,
	Component: () => import('./component.astro'),
	SEOComponent: () => import('./seo.astro'),
	BibliographyComponent: () => import('./bibliography.astro'),
};
