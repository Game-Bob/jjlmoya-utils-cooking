export class AmericanKitchenEngine {
  static initTabs() {
    const tabs = document.querySelectorAll(".akc-tab-btn");
    const contents = document.querySelectorAll(".akc-tab-content");
    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const targetId = tab.getAttribute("data-tab");
        if (!targetId) return;
        tabs.forEach((t) => t.classList.remove("active"));
        tab.classList.add("active");
        contents.forEach((c) => {
          if (c.id === `content-${targetId}`) {
            c.classList.add("active");
          } else {
            c.classList.remove("active");
          }
        });
      });
    });
  }
  private static createCupUpdater(
    cupInput: HTMLInputElement,
    cupResult: HTMLElement,
    density: { value: number }
  ) {
    return () => {
      let val = parseFloat(cupInput.value);
      if (isNaN(val) || val < 0) val = 0;
      cupResult.textContent = Math.round(val * density.value).toString();
    };
  }
  private static setupCupItems(
    cupItems: NodeListOf<Element>,
    density: { value: number },
    updateFn: () => void
  ) {
    cupItems.forEach((item) => {
      item.addEventListener("click", () => {
        cupItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        const densityVal = item.getAttribute("data-density");
        if (densityVal) {
          density.value = parseFloat(densityVal);
          updateFn();
        }
      });
    });
  }
  private static setupCupButtons(
    cupInput: HTMLInputElement | null,
    cupPlus: HTMLElement | null,
    cupMinus: HTMLElement | null,
    updateFn: () => void
  ) {
    if (cupPlus && cupInput) {
      cupPlus.addEventListener("click", () => {
        cupInput.value = (parseFloat(cupInput.value) + 0.25).toString();
        updateFn();
      });
    }

    if (cupMinus && cupInput) {
      cupMinus.addEventListener("click", () => {
        const newVal = parseFloat(cupInput.value) - 0.25;
        if (newVal >= 0) {
          cupInput.value = newVal.toString();
          updateFn();
        }
      });
    }
  }
  private static setupCupQuicks(
    cupQuicks: NodeListOf<Element>,
    cupInput: HTMLInputElement | null,
    updateFn: () => void
  ) {
    cupQuicks.forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-val");
        if (val && cupInput) {
          cupInput.value = val;
          updateFn();
        }
      });
    });
  }
  static initCups() {
    const cupInput = document.getElementById("cup-input") as HTMLInputElement | null;
    const cupResult = document.getElementById("cup-result");
    if (!cupInput || !cupResult) return;

    const density = { value: 120 };
    const updateCups = this.createCupUpdater(cupInput, cupResult, density);

    cupInput.addEventListener("input", updateCups);
    this.setupCupItems(document.querySelectorAll(".cup-item"), density, updateCups);
    this.setupCupButtons(
      cupInput,
      document.getElementById("cup-plus"),
      document.getElementById("cup-minus"),
      updateCups
    );
    this.setupCupQuicks(document.querySelectorAll(".cup-quick"), cupInput, updateCups);
  }
  private static createSpoonUpdater(
    spoonInput: HTMLInputElement,
    spoonResult: HTMLElement,
    state: { density: number; multiplier: number }
  ) {
    return () => {
      let val = parseFloat(spoonInput.value);
      if (isNaN(val) || val < 0) val = 0;
      const result =
        state.multiplier === 0.3333
          ? ((val * state.density) / 3).toFixed(1)
          : (val * state.density).toFixed(1);
      spoonResult.textContent = result.replace(".0", "");
    };
  }
  private static setupSpoonItems(
    spoonItems: NodeListOf<Element>,
    state: { density: number; multiplier: number },
    updateFn: () => void
  ) {
    spoonItems.forEach((item) => {
      item.addEventListener("click", () => {
        spoonItems.forEach((i) => i.classList.remove("active"));
        item.classList.add("active");
        const density = item.getAttribute("data-density");
        if (density) {
          state.density = parseFloat(density);
          updateFn();
        }
      });
    });
  }
  private static setupSpoonToggles(
    spoonToggles: NodeListOf<Element>,
    state: { density: number; multiplier: number },
    updateFn: () => void
  ) {
    spoonToggles.forEach((toggle) => {
      toggle.addEventListener("click", () => {
        spoonToggles.forEach((t) => t.classList.remove("active"));
        toggle.classList.add("active");
        const mult = toggle.getAttribute("data-multiplier");
        if (mult) {
          state.multiplier = parseFloat(mult);
          updateFn();
        }
      });
    });
  }
  private static setupSpoonButtons(
    spoonInput: HTMLInputElement | null,
    spoonPlus: HTMLElement | null,
    spoonMinus: HTMLElement | null,
    updateFn: () => void
  ) {
    if (spoonPlus && spoonInput) {
      spoonPlus.addEventListener("click", () => {
        spoonInput.value = (parseFloat(spoonInput.value) + 0.25).toString();
        updateFn();
      });
    }

    if (spoonMinus && spoonInput) {
      spoonMinus.addEventListener("click", () => {
        const newVal = parseFloat(spoonInput.value) - 0.25;
        if (newVal >= 0) {
          spoonInput.value = newVal.toString();
          updateFn();
        }
      });
    }
  }
  private static setupSpoonQuicks(
    spoonQuicks: NodeListOf<Element>,
    spoonInput: HTMLInputElement | null,
    updateFn: () => void
  ) {
    spoonQuicks.forEach((btn) => {
      btn.addEventListener("click", () => {
        const val = btn.getAttribute("data-val");
        if (val && spoonInput) {
          spoonInput.value = val;
          updateFn();
        }
      });
    });
  }
  static initSpoons() {
    const spoonInput = document.getElementById("spoon-input") as HTMLInputElement | null;
    const spoonResult = document.getElementById("spoon-result");
    if (!spoonInput || !spoonResult) return;

    const state = { density: 15, multiplier: 1 };
    const updateSpoons = this.createSpoonUpdater(spoonInput, spoonResult, state);

    spoonInput.addEventListener("input", updateSpoons);
    this.setupSpoonItems(document.querySelectorAll(".spoon-item"), state, updateSpoons);
    this.setupSpoonToggles(document.querySelectorAll(".spoon-toggle"), state, updateSpoons);
    this.setupSpoonButtons(
      spoonInput,
      document.getElementById("spoon-plus"),
      document.getElementById("spoon-minus"),
      updateSpoons
    );
    this.setupSpoonQuicks(document.querySelectorAll(".spoon-quick"), spoonInput, updateSpoons);
  }
  private static setupTempConversion(
    tempF: HTMLInputElement,
    tempC: HTMLInputElement
  ) {
    const updateF = () => {
      const c = parseFloat(tempC.value);
      if (isNaN(c)) {
        tempF.value = "";
      } else {
        tempF.value = Math.round((c * 9) / 5 + 32).toString();
      }
    };

    const updateC = () => {
      const f = parseFloat(tempF.value);
      if (isNaN(f)) {
        tempC.value = "";
      } else {
        tempC.value = Math.round(((f - 32) * 5) / 9).toString();
      }
    };

    tempF.addEventListener("input", updateC);
    tempC.addEventListener("input", updateF);
  }
  private static setupTempPresets(
    tempF: HTMLInputElement,
    tempC: HTMLInputElement
  ) {
    const tempPresets = document.querySelectorAll(".temp-preset");
    tempPresets.forEach((preset) => {
      preset.addEventListener("click", () => {
        const f = preset.getAttribute("data-f");
        if (f) {
          tempF.value = f;
          const c = Math.round(((parseFloat(f) - 32) * 5) / 9);
          tempC.value = c.toString();
        }
      });
    });
  }
  static initTemperatures() {
    const tempF = document.getElementById("temp-f-input") as HTMLInputElement | null;
    const tempC = document.getElementById("temp-c-input") as HTMLInputElement | null;
    if (!tempF || !tempC) return;

    this.setupTempConversion(tempF, tempC);
    this.setupTempPresets(tempF, tempC);
  }}
