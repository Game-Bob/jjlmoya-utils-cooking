import { dryAgingMeatEstimator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const DRY_AGING_MEAT_ESTIMATOR_TOOL: ToolDefinition = {
  entry: dryAgingMeatEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
