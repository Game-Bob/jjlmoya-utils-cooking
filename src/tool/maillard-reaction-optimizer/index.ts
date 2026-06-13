import type { ToolDefinition } from '../../types';
import { maillardReaction } from './entry';

export * from './entry';

export const MAILLARD_REACTION_TOOL: ToolDefinition = {
  entry: maillardReaction,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
