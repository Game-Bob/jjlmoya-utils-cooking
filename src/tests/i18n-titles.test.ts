import { describe, it, expect } from "vitest";
import { ALL_TOOLS } from "../index";

describe("i18n titles for FAQ", () => {

  it("all tools should have non-empty faq arrays", async () => {
    for (const { entry } of ALL_TOOLS) {
      if (!entry.i18n.es || !entry.i18n.en) continue;
      const esContent = await entry.i18n.es();
      const enContent = await entry.i18n.en();

      expect(Array.isArray(esContent.faq), `Tool ${entry.id} faq should be an array`).toBe(true);
      expect(Array.isArray(enContent.faq), `Tool ${entry.id} English faq should be an array`).toBe(true);
      expect(esContent.faq.length, `Tool ${entry.id} should have FAQ items`).toBeGreaterThan(0);
      expect(enContent.faq.length, `Tool ${entry.id} should have English FAQ items`).toBeGreaterThan(0);
    }
  }, 30000);
});

