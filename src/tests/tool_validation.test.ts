import { describe, it, expect } from 'vitest';
import { ALL_TOOLS } from '../tools';
import { cookingCategory } from '../data';

describe('Tool Validation Suite', () => {
  describe('Library Registration', () => {
    it('should have 11 tools in ALL_TOOLS', () => {
      expect(ALL_TOOLS.length).toBe(11);
    });

    it('cookingCategory should be defined', () => {
      expect(cookingCategory).toBeDefined();
      expect(cookingCategory.i18n).toBeDefined();
    });
  });
});

