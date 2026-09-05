import type { ToolDefinition } from '../../types';
import { foodSafeTemperatureChecker } from './entry';

export * from './entry';

export const FOOD_SAFE_TEMPERATURE_CHECKER_TOOL: ToolDefinition = {
  entry: foodSafeTemperatureChecker,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

