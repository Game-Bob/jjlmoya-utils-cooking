import type { ToolDefinition } from '../../types';
import { yeastConverter } from './entry';

export * from './entry';

export const YEAST_CONVERTER_TOOL: ToolDefinition = {
	entry: yeastConverter,
	Component: () => import('./component.astro'),
	SEOComponent: () => import('./seo.astro'),
	BibliographyComponent: () => import('./bibliography.astro'),
};
