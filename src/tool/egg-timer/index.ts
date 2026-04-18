export * from './entry';
export const EGG_TIMER_TOOL: ToolDefinition = {
  entry: eggTimer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
