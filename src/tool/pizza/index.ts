import { pizza } from './entry';
export * from './entry';
export const PIZZA_TOOL: ToolDefinition = {
  entry: pizza,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
