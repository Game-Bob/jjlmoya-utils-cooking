import { brine } from './entry';
export * from './entry';
export const BRINE_TOOL: ToolDefinition = {
  entry: brine,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
