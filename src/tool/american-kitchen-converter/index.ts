export * from './entry';
export const AMERICAN_KITCHEN_CONVERTER_TOOL: ToolDefinition = {
  entry: americanKitchenConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
