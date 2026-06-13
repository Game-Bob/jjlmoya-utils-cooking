import type { ToolDefinition } from '../../types';
import { macaronDrying } from './entry';

export * from './entry';

export const MACARON_DRYING_TOOL: ToolDefinition = {
  entry: macaronDrying,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
