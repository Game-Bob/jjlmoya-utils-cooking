import { dehydratorMoistureEstimator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const DEHYDRATOR_MOISTURE_ESTIMATOR_TOOL: ToolDefinition = {
  entry: dehydratorMoistureEstimator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
