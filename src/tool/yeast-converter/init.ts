type YeastType = 'fresh' | 'dry' | 'sourdough';
type UnitType = 'g' | 'oz' | 'lb' | 'mg';

interface ConversionResult {
	fresh: number | null;
	dry: number | null;
	sourdough: number | null;
	flourAdjustment: number | null;
	waterAdjustment: number | null;
}

const UNIT_TO_GRAMS: Record<UnitType, number> = {
	g: 1,
	oz: 28.3495,
	lb: 453.592,
	mg: 0.001,
};

function toGrams(amount: number, unit: UnitType): number {
	return amount * UNIT_TO_GRAMS[unit];
}

function fromGrams(amount: number, unit: UnitType): number {
	return amount / UNIT_TO_GRAMS[unit];
}

function calculateFreshYeast(amount: number): ConversionResult {
	return {
		fresh: amount,
		dry: amount / 3,
		sourdough: amount * 5,
		flourAdjustment: (amount * 5) / 2,
		waterAdjustment: (amount * 5) / 2,
	};
}

function calculateDryYeast(amount: number): ConversionResult {
	return {
		dry: amount,
		fresh: amount * 3,
		sourdough: amount * 15,
		flourAdjustment: (amount * 15) / 2,
		waterAdjustment: (amount * 15) / 2,
	};
}

function calculateSourdough(amount: number): ConversionResult {
	return {
		sourdough: amount,
		fresh: amount / 5,
		dry: amount / 15,
		flourAdjustment: amount / 2,
		waterAdjustment: amount / 2,
	};
}

function calculateConversions(amount: number, sourceType: YeastType): ConversionResult {
	if (amount <= 0) {
		return { fresh: null, dry: null, sourdough: null, flourAdjustment: null, waterAdjustment: null };
	}

	if (sourceType === 'fresh') return calculateFreshYeast(amount);
	if (sourceType === 'dry') return calculateDryYeast(amount);
	return calculateSourdough(amount);
}

interface ConverterContext {
	amountInput: HTMLInputElement;
	sourceSelect: HTMLSelectElement;
	unitSelect: HTMLSelectElement;
	resultsContainer: HTMLDivElement;
	ui: Record<string, string>;
}

const STORAGE_KEYS = {
	unit: 'yeast-converter-unit',
	amount: 'yeast-converter-amount',
	sourceType: 'yeast-converter-source',
};

function saveToStorage(key: string, value: string): void {
	try {
		localStorage.setItem(key, value);
	} catch {
		// Silently fail if localStorage is unavailable
	}
}

function loadFromStorage(key: string, defaultValue: string): string {
	try {
		return localStorage.getItem(key) ?? defaultValue;
	} catch {
		return defaultValue;
	}
}

function formatAmount(amount: number | null): string {
	if (amount === null || isNaN(amount)) return '—';
	if (Number.isInteger(amount)) return amount.toString();
	const rounded = Math.round(amount * 100) / 100;
	return rounded.toString();
}

function getResultItems(
	result: ConversionResult,
	sourceType: YeastType,
	unit: UnitType,
	ui: Record<string, string>,
): Array<{ label: string; value: number | null; unit: UnitType }> {
	const items: Array<{ label: string; value: number | null; unit: UnitType }> = [];
	if (sourceType !== 'fresh') {
		const value = result.fresh !== null ? fromGrams(result.fresh, unit) : null;
		items.push({ label: ui.freshYeast, value, unit });
	}
	if (sourceType !== 'dry') {
		const value = result.dry !== null ? fromGrams(result.dry, unit) : null;
		items.push({ label: ui.dryYeast, value, unit });
	}
	if (sourceType !== 'sourdough') {
		const value = result.sourdough !== null ? fromGrams(result.sourdough, unit) : null;
		items.push({ label: ui.sourdough, value, unit });
	}
	return items;
}

function renderResultRows(container: HTMLDivElement, items: Array<{ label: string; value: number | null; unit: string }>): void {
	items.forEach((item) => {
		const row = document.createElement('div');
		row.className = 'yc-result-row';
		row.innerHTML = `<span class="yc-result-label">${item.label}</span><span class="yc-result-value">${formatAmount(item.value)} ${item.unit}</span>`;
		container.appendChild(row);
	});
}

function renderAdjustmentCard(container: HTMLDivElement, result: ConversionResult, unit: UnitType, ui: Record<string, string>): void {
	const adjustmentCard = document.createElement('div');
	adjustmentCard.className = 'yc-adjustment-card';
	const flourValue = result.flourAdjustment !== null ? fromGrams(result.flourAdjustment, unit) : null;
	const waterValue = result.waterAdjustment !== null ? fromGrams(result.waterAdjustment, unit) : null;
	adjustmentCard.innerHTML = `<h4 class="yc-adjustment-title">${ui.recipeAdjustment}</h4><div class="yc-adjustment-items"><div class="yc-adjustment-item"><span class="yc-adjustment-label">${ui.flourSubtract}</span><span class="yc-adjustment-value">${formatAmount(flourValue)} ${unit}</span></div><div class="yc-adjustment-item"><span class="yc-adjustment-label">${ui.waterSubtract}</span><span class="yc-adjustment-value">${formatAmount(waterValue)} ${unit}</span></div></div>`;
	container.appendChild(adjustmentCard);
}

interface RenderState {
	result: ConversionResult;
	sourceType: YeastType;
	unit: UnitType;
}

function renderResults(container: HTMLDivElement, state: RenderState, ctx: ConverterContext): void {
	container.innerHTML = '';

	if (state.result.fresh === null) {
		container.innerHTML = `<div class="yc-empty-state"><p>${ctx.ui.enterAmount}</p></div>`;
		return;
	}

	const items = getResultItems(state.result, state.sourceType, state.unit, ctx.ui);
	renderResultRows(container, items);

	if (state.sourceType === 'sourdough') {
		renderAdjustmentCard(container, state.result, state.unit, ctx.ui);
	}
}

function updateState(ctx: ConverterContext): void {
	const amount = parseFloat(ctx.amountInput.value) || 0;
	const sourceType = (ctx.sourceSelect.value || 'fresh') as YeastType;
	const unit = (ctx.unitSelect.value || 'g') as UnitType;
	const amountInGrams = toGrams(amount, unit);
	const result = calculateConversions(amountInGrams, sourceType);
	const state: RenderState = { result, sourceType, unit };
	renderResults(ctx.resultsContainer, state, ctx);
}

function buildYeastLines(result: ConversionResult, unit: UnitType): string {
	const lines: string[] = [];
	if (result.fresh !== null) lines.push(`Fresh Yeast: ${formatAmount(fromGrams(result.fresh, unit))}${unit}`);
	if (result.dry !== null) lines.push(`Dry Yeast: ${formatAmount(fromGrams(result.dry, unit))}${unit}`);
	if (result.sourdough !== null) lines.push(`Sourdough Starter: ${formatAmount(fromGrams(result.sourdough, unit))}${unit}`);
	return lines.join('\n');
}

function buildCopyText(result: ConversionResult, sourceType: YeastType, unit: UnitType): string {
	let text = buildYeastLines(result, unit);

	if (sourceType === 'sourdough' && result.flourAdjustment !== null && result.waterAdjustment !== null) {
		text += '\n\nRecipe Adjustment:\n';
		const flourVal = formatAmount(fromGrams(result.flourAdjustment, unit));
		const waterVal = formatAmount(fromGrams(result.waterAdjustment, unit));
		text += `Flour to subtract: ${flourVal}${unit}\n`;
		text += `Water to subtract: ${waterVal}${unit}`;
	}
	return text;
}

function setupCopyButton(copyBtn: HTMLButtonElement, ctx: ConverterContext): void {
	copyBtn.addEventListener('click', () => {
		const amount = parseFloat(ctx.amountInput.value) || 0;
		const sourceType = (ctx.sourceSelect.value || 'fresh') as YeastType;
		const unit = (ctx.unitSelect.value || 'g') as UnitType;
		const amountInGrams = toGrams(amount, unit);
		const result = calculateConversions(amountInGrams, sourceType);
		const textToCopy = buildCopyText(result, sourceType, unit);

		navigator.clipboard.writeText(textToCopy).then(() => {
			const originalText = copyBtn.innerHTML;
			copyBtn.textContent = ctx.ui.copied ?? 'Copied!';
			copyBtn.classList.add('yc-copied');
			setTimeout(() => {
				copyBtn.innerHTML = originalText;
				copyBtn.classList.remove('yc-copied');
			}, 2000);
		});
	});
}

function setupResetButton(resetBtn: HTMLButtonElement, ctx: ConverterContext, update: () => void): void {
	resetBtn.addEventListener('click', () => {
		ctx.amountInput.value = '';
		ctx.sourceSelect.value = 'fresh';
		update();
	});
}

function restoreSavedState(
	amountInput: HTMLInputElement,
	sourceSelect: HTMLSelectElement,
	unitSelect: HTMLSelectElement,
): void {
	unitSelect.value = loadFromStorage(STORAGE_KEYS.unit, 'g');
	amountInput.value = loadFromStorage(STORAGE_KEYS.amount, '');
	sourceSelect.value = loadFromStorage(STORAGE_KEYS.sourceType, 'fresh');
}

function setupEventListeners(
	ctx: ConverterContext,
	resetBtn: HTMLButtonElement,
	copyBtn: HTMLButtonElement,
	update: () => void,
): void {
	ctx.amountInput.addEventListener('input', () => {
		saveToStorage(STORAGE_KEYS.amount, ctx.amountInput.value);
		update();
	});

	ctx.sourceSelect.addEventListener('change', () => {
		saveToStorage(STORAGE_KEYS.sourceType, ctx.sourceSelect.value);
		update();
	});

	ctx.unitSelect.addEventListener('change', () => {
		saveToStorage(STORAGE_KEYS.unit, ctx.unitSelect.value);
		update();
	});

	setupResetButton(resetBtn, ctx, update);
	setupCopyButton(copyBtn, ctx);
}

export function initYeastConverter(ui: Record<string, string>): void {
	const amountInput = document.getElementById('yeast-amount') as HTMLInputElement | null;
	const sourceSelect = document.getElementById('yeast-source') as HTMLSelectElement | null;
	const unitSelect = document.getElementById('yeast-unit') as HTMLSelectElement | null;
	const resetBtn = document.getElementById('reset-btn') as HTMLButtonElement | null;
	const resultsContainer = document.getElementById('results-container') as HTMLDivElement | null;
	const copyBtn = document.getElementById('copy-btn') as HTMLButtonElement | null;

	if (!amountInput || !sourceSelect || !unitSelect || !resultsContainer || !resetBtn || !copyBtn) {
		return;
	}

	restoreSavedState(amountInput, sourceSelect, unitSelect);
	const ctx: ConverterContext = { amountInput, sourceSelect, unitSelect, resultsContainer, ui };
	const update = () => updateState(ctx);
	setupEventListeners(ctx, resetBtn, copyBtn, update);
	update();
}
