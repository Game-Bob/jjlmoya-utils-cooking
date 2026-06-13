import type { ToolDefinition } from '../../types';
import { meatBinder } from './entry';

export * from './entry';

export const MEAT_BINDER_TRANSGLUTAMINASE_TOOL: ToolDefinition = {
  entry: meatBinder,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
