import { bananaCare } from './entry';
export * from './entry';
export const BANANA_CARE_TOOL: ToolDefinition = {
  entry: bananaCare,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
