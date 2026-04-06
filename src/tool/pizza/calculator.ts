interface DOMElements {
  inputPizzas: HTMLInputElement;
  inputWeight: HTMLInputElement;
  inputHydration: HTMLInputElement;
  inputSalt: HTMLInputElement;
  displayPizzas: HTMLElement | null;
  displayWeight: HTMLElement | null;
  displayHydration: HTMLElement | null;
  displaySalt: HTMLElement | null;
  resultFlour: HTMLElement | null;
  resultWater: HTMLElement | null;
  resultSalt: HTMLElement | null;
  resultYeast: HTMLElement | null;
  resultTotal: HTMLElement | null;
  barWater: HTMLElement | null;
  doughVisual: HTMLElement;
  visualDiameter: HTMLElement | null;
  btnYeastFresh: HTMLElement | null;
  btnYeastDry: HTMLElement | null;
}

interface CalculatorState {
  useFreshYeast: boolean;
  dom: DOMElements;
}

function getInputValues(dom: DOMElements) {
  return {
    pizzas: parseInt(dom.inputPizzas.value),
    weight: parseInt(dom.inputWeight.value),
    hydration: parseInt(dom.inputHydration.value) / 100,
    salt: parseFloat(dom.inputSalt.value) / 100,
  };
}

function calculateValues(inputs: ReturnType<typeof getInputValues>, useFreshYeast: boolean) {
  const totalDoughWeight = inputs.pizzas * inputs.weight;
  const flour = totalDoughWeight / (1 + inputs.hydration + inputs.salt);
  return {
    flour,
    water: flour * inputs.hydration,
    saltGrams: flour * inputs.salt,
    yeast: useFreshYeast ? flour * 0.003 : flour * 0.001,
    totalDough: totalDoughWeight,
  };
}

function updateDisplay(state: CalculatorState) {
  const inputs = getInputValues(state.dom);
  const values = calculateValues(inputs, state.useFreshYeast);
  const totalWeight = values.flour + values.water + values.saltGrams + values.yeast;

  if (state.dom.resultFlour) state.dom.resultFlour.textContent = Math.round(values.flour).toString();
  if (state.dom.resultWater) state.dom.resultWater.textContent = Math.round(values.water).toString();
  if (state.dom.resultSalt) state.dom.resultSalt.textContent = (Math.round(values.saltGrams * 10) / 10).toString();
  if (state.dom.resultYeast) state.dom.resultYeast.textContent = (Math.round(values.yeast * 10) / 10).toString();
  if (state.dom.resultTotal) state.dom.resultTotal.textContent = Math.round(totalWeight).toString();

  if (state.dom.barWater) {
    const waterPercentage = (values.water / values.totalDough) * 100;
    state.dom.barWater.style.width = waterPercentage + "%";
  }

  const diameter = Math.round(Math.sqrt((inputs.weight * inputs.pizzas) / 0.06));
  if (state.dom.visualDiameter) state.dom.visualDiameter.textContent = diameter.toString();

  const size = Math.max(100, Math.min(300, diameter * 2));
  state.dom.doughVisual.style.width = size + "px";
  state.dom.doughVisual.style.height = size + "px";
}

function setupInputListeners(state: CalculatorState) {
  const { inputPizzas, inputWeight, inputHydration, inputSalt, displayPizzas, displayWeight, displayHydration, displaySalt } = state.dom;

  function updateDisplays() {
    if (displayPizzas) displayPizzas.textContent = inputPizzas.value;
    if (displayWeight) displayWeight.textContent = inputWeight.value;
    if (displayHydration) displayHydration.textContent = inputHydration.value;
    if (displaySalt) displaySalt.textContent = parseFloat(inputSalt.value).toFixed(1);
    updateDisplay(state);
  }

  inputPizzas.addEventListener("input", updateDisplays);
  inputWeight.addEventListener("input", updateDisplays);
  inputHydration.addEventListener("input", updateDisplays);
  inputSalt.addEventListener("input", updateDisplays);
}

function setupYeastListeners(state: CalculatorState) {
  const { btnYeastFresh, btnYeastDry } = state.dom;

  if (btnYeastFresh) {
    btnYeastFresh.addEventListener("click", () => {
      state.useFreshYeast = true;
      btnYeastFresh?.classList.add("pizza-yeast-btn-active");
      btnYeastDry?.classList.remove("pizza-yeast-btn-active");
      updateDisplay(state);
    });
  }

  if (btnYeastDry) {
    btnYeastDry.addEventListener("click", () => {
      state.useFreshYeast = false;
      btnYeastDry?.classList.add("pizza-yeast-btn-active");
      btnYeastFresh?.classList.remove("pizza-yeast-btn-active");
      updateDisplay(state);
    });
  }
}

function getDOMElements(): DOMElements {
  return {
    inputPizzas: document.getElementById("input-pizzas") as HTMLInputElement,
    inputWeight: document.getElementById("input-weight") as HTMLInputElement,
    inputHydration: document.getElementById("input-hydration") as HTMLInputElement,
    inputSalt: document.getElementById("input-salt") as HTMLInputElement,
    displayPizzas: document.getElementById("display-pizzas"),
    displayWeight: document.getElementById("display-weight"),
    displayHydration: document.getElementById("display-hydration"),
    displaySalt: document.getElementById("display-salt"),
    resultFlour: document.getElementById("result-flour"),
    resultWater: document.getElementById("result-water"),
    resultSalt: document.getElementById("result-salt"),
    resultYeast: document.getElementById("result-yeast"),
    resultTotal: document.getElementById("result-total"),
    barWater: document.getElementById("bar-water"),
    doughVisual: document.getElementById("dough-visual") as HTMLElement,
    visualDiameter: document.getElementById("visual-diameter"),
    btnYeastFresh: document.getElementById("btn-yeast-fresh"),
    btnYeastDry: document.getElementById("btn-yeast-dry"),
  };
}

export function initPizzaCalculator() {
  const state: CalculatorState = {
    useFreshYeast: true,
    dom: getDOMElements(),
  };

  setupInputListeners(state);
  setupYeastListeners(state);
  updateDisplay(state);
}
