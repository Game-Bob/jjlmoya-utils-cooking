import { describe, expect, it } from "vitest";
import { getCacheControl, LONG_LIVED_ASSET_CACHE } from "../worker";

describe("MFE cache contract", () => {
    it("caches versioned assets and manifests for one year", () => {
        expect(getCacheControl("/_utilities/cooking/images/tool.webp")).toBe(LONG_LIVED_ASSET_CACHE);
        expect(getCacheControl("/_utilities/cooking/styles/tool.css")).toBe(LONG_LIVED_ASSET_CACHE);
        expect(getCacheControl("/en/utilities/categories/cooking/tool/manifest.json")).toBe(LONG_LIVED_ASSET_CACHE);
    });

});
