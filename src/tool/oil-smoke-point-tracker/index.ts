import type { ToolDefinition } from '../../types';
import { oilSmokePoint } from './entry';

export * from './entry';

export const OIL_SMOKE_POINT_TRACKER_TOOL: ToolDefinition = {
  entry: oilSmokePoint,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
