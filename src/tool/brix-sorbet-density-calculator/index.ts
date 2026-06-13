import type { ToolDefinition } from '../../types';
import { brixSorbetDensity } from './entry';

export * from './entry';

export const BRIX_SORBET_DENSITY_CALCULATOR_TOOL: ToolDefinition = {
  entry: brixSorbetDensity,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
