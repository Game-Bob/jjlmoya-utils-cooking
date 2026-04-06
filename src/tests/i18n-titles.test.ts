import { describe, it, expect } from "vitest";
import { ALL_TOOLS } from "../index";

describe("i18n titles for FAQ and Bibliography", () => {
  it("all tools should have faqTitle and bibliographyTitle at root level", async () => {
    expect(ALL_TOOLS.length).toBeGreaterThan(0);

    for (const { entry } of ALL_TOOLS) {
      const esContent = await entry.i18n.es();
      const enContent = await entry.i18n.en();

      expect(esContent.faqTitle, `Tool ${entry.id} missing Spanish faqTitle`).toBeDefined();
      expect(esContent.faqTitle).not.toBe("");
      expect(esContent.bibliographyTitle, `Tool ${entry.id} missing Spanish bibliographyTitle`).toBeDefined();
      expect(esContent.bibliographyTitle).not.toBe("");


      expect(enContent.faqTitle, `Tool ${entry.id} missing English faqTitle`).toBeDefined();
      expect(enContent.faqTitle).not.toBe("");
      expect(enContent.bibliographyTitle, `Tool ${entry.id} missing English bibliographyTitle`).toBeDefined();
      expect(enContent.bibliographyTitle).not.toBe("");

      expect(esContent.hasOwnProperty("faqTitle")).toBe(true);
      expect(esContent.hasOwnProperty("bibliographyTitle")).toBe(true);
      expect(enContent.hasOwnProperty("faqTitle")).toBe(true);
      expect(enContent.hasOwnProperty("bibliographyTitle")).toBe(true);
    }
  });

  it("all tools should have non-empty faq and bibliography arrays", async () => {
    for (const { entry } of ALL_TOOLS) {
      const esContent = await entry.i18n.es();
      const enContent = await entry.i18n.en();

      expect(Array.isArray(esContent.faq), `Tool ${entry.id} faq should be an array`).toBe(true);
      expect(Array.isArray(enContent.faq), `Tool ${entry.id} English faq should be an array`).toBe(true);
      expect(esContent.faq.length, `Tool ${entry.id} should have FAQ items`).toBeGreaterThan(0);
      expect(enContent.faq.length, `Tool ${entry.id} should have English FAQ items`).toBeGreaterThan(0);

      expect(Array.isArray(esContent.bibliography), `Tool ${entry.id} bibliography should be an array`).toBe(true);
      expect(Array.isArray(enContent.bibliography), `Tool ${entry.id} English bibliography should be an array`).toBe(true);
      expect(esContent.bibliography.length, `Tool ${entry.id} should have bibliography entries`).toBeGreaterThan(0);
      expect(enContent.bibliography.length, `Tool ${entry.id} should have English bibliography entries`).toBeGreaterThan(0);
    }
  });

  it("should have 10 tools with complete i18n setup", async () => {
    expect(ALL_TOOLS.length).toBe(10);
  });

  it("tool IDs should be correctly registered", () => {
    const toolIds = ALL_TOOLS.map((tool) => tool.entry.id);
    expect(toolIds).toContain("brine-calculator");
    expect(toolIds).toContain("american-kitchen-converter");
    expect(toolIds).toContain("kitchen-timer");
    expect(toolIds).toContain("pizza");
    expect(toolIds).toContain("egg-timer");
    expect(toolIds).toContain("banana-ripeness");
    expect(toolIds).toContain("meringue-peak");
    expect(toolIds).toContain("mold-scaler");
    expect(toolIds).toContain("ingredient-rescaler");
    expect(toolIds).toContain("sourdough-calculator");
  });
});
