type ParsedLine = {
	original: string;
	amount: number | null;
	unit: string | null;
	ingredient: string;
	prefix: string;
};

interface IngredientRescalerUI {
	copy: string;
	copied: string;
	emptyState: string;
}

const NUMBER_REGEX = /(\d+[\.,]\d+|\d+\/\d+|\d+)/;

function parseLine(line: string): ParsedLine {
	const cleanLine = line.trim();
	if (!cleanLine) return { original: line, amount: null, unit: null, ingredient: '', prefix: '' };

	const match = cleanLine.match(NUMBER_REGEX);

	if (!match) {
		return { original: line, amount: null, unit: null, ingredient: cleanLine, prefix: '' };
	}

	const numberStr = match[0];
	const index = match.index || 0;

	const prefix = cleanLine.substring(0, index);
	const rest = cleanLine.substring(index + numberStr.length);

	let amount = 0;
	if (numberStr.includes('/')) {
		const [num, den] = numberStr.split('/');
		if (parseFloat(den) !== 0) {
			amount = parseFloat(num) / parseFloat(den);
		} else {
			amount = parseFloat(num);
		}
	} else {
		amount = parseFloat(numberStr.replace(',', '.'));
	}

	return {
		original: line,
		amount,
		unit: null,
		ingredient: rest,
		prefix,
	};
}

function formatAmount(amount: number): string {
	if (Number.isInteger(amount)) return amount.toString();
	const rounded = Math.round(amount * 100) / 100;
	return rounded.toString().replace('.', ',');
}

function renderEmptyState(resultsContainer: HTMLDivElement, emptyStateText: string): void {
	resultsContainer.innerHTML = `<div class="ir-empty-state"><span class="ir-empty-icon"></span><p>${emptyStateText}</p></div>`;
}

function renderResult(resultsContainer: HTMLDivElement, lines: string[], ratio: number): void {
	lines.forEach((line) => {
		const parsed = parseLine(line);

		if (parsed.amount !== null) {
			const newAmount = parsed.amount * ratio;
			const formatted = formatAmount(newAmount);

			const row = document.createElement('div');
			row.className = 'ir-result-row';
			row.innerHTML = `
				<span class="ir-original-amount">${parsed.original}</span>
				<span class="ir-new-amount">
					${parsed.prefix}<span class="ir-new-value">${formatted}</span>${parsed.ingredient}
				</span>
			 `;
			resultsContainer.appendChild(row);
		} else if (line.trim()) {
			const row = document.createElement('div');
			row.className = 'ir-no-amount-row';
			row.textContent = line;
			resultsContainer.appendChild(row);
		}
	});
}

interface RescalerInputs {
	originalInput: HTMLInputElement;
	targetInput: HTMLInputElement;
	ingredientsInput: HTMLTextAreaElement;
}

function getCopyLines(inputs: RescalerInputs): string[] {
	const lines: string[] = [];
	const original = parseFloat(inputs.originalInput.value) || 1;
	const target = parseFloat(inputs.targetInput.value) || 1;
	const ratio = original > 0 ? target / original : 1;

	inputs.ingredientsInput.value.split('\n').forEach((line) => {
		const parsed = parseLine(line);
		if (parsed.amount !== null) {
			const newAmount = parsed.amount * ratio;
			lines.push(`${parsed.prefix}${formatAmount(newAmount)}${parsed.ingredient}`);
		} else {
			lines.push(line);
		}
	});

	return lines;
}

function updateButtonState(copyBtn: HTMLButtonElement, copied: boolean, copiedText: string): void {
	if (copied) {
		copyBtn.textContent = copiedText;
		copyBtn.classList.add('ir-copied');
		copyBtn.classList.remove('ir-default');
	} else {
		copyBtn.classList.remove('ir-copied');
		copyBtn.classList.add('ir-default');
	}
}

function setupCopyButton(copyBtn: HTMLButtonElement, inputs: RescalerInputs, copiedText: string): void {
	copyBtn.addEventListener('click', () => {
		const lines = getCopyLines(inputs);
		const originalText = copyBtn.innerHTML;

		navigator.clipboard.writeText(lines.join('\n')).then(() => {
			updateButtonState(copyBtn, true, copiedText);
			setTimeout(() => {
				copyBtn.innerHTML = originalText;
				updateButtonState(copyBtn, false, copiedText);
			}, 2000);
		});
	});
}

interface UpdateContext {
	originalInput: HTMLInputElement;
	targetInput: HTMLInputElement;
	ingredientsInput: HTMLTextAreaElement;
	multiplierDisplay: HTMLSpanElement;
	resultsContainer: HTMLDivElement;
	emptyStateText: string;
}

function createUpdateFunction(ctx: UpdateContext): () => void {
	return () => {
		const original = parseFloat(ctx.originalInput.value) || 1;
		const target = parseFloat(ctx.targetInput.value) || 1;
		const ratio = original > 0 ? target / original : 1;

		ctx.multiplierDisplay.textContent = `${ratio.toFixed(2).replace('.', ',')}x`;
		ctx.resultsContainer.innerHTML = '';

		const text = ctx.ingredientsInput.value;
		if (!text.trim()) {
			renderEmptyState(ctx.resultsContainer, ctx.emptyStateText);
			return;
		}

		renderResult(ctx.resultsContainer, text.split('\n'), ratio);
	};
}

export function initIngredientRescaler(ui: IngredientRescalerUI & Record<string, string>): void {
	const originalInput = document.getElementById('original-servings') as HTMLInputElement | null;
	const targetInput = document.getElementById('target-servings') as HTMLInputElement | null;
	const ingredientsInput = document.getElementById('ingredients-input') as HTMLTextAreaElement | null;
	const multiplierDisplay = document.getElementById('multiplier-display') as HTMLSpanElement | null;
	const resultsContainer = document.getElementById('results-container') as HTMLDivElement | null;
	const copyBtn = document.getElementById('copy-btn') as HTMLButtonElement | null;

	if (!originalInput || !targetInput || !ingredientsInput || !multiplierDisplay || !resultsContainer || !copyBtn) {
		return;
	}

	const update = createUpdateFunction({
		originalInput,
		targetInput,
		ingredientsInput,
		multiplierDisplay,
		resultsContainer,
		emptyStateText: ui.emptyState,
	});

	originalInput.addEventListener('input', update);
	targetInput.addEventListener('input', update);
	ingredientsInput.addEventListener('input', update);

	if (!ingredientsInput.value.trim()) {
		ingredientsInput.value = `${ui.defaultIngredient1}\n${ui.defaultIngredient2}\n${ui.defaultIngredient3}`;
	}

	update();
	setupCopyButton(copyBtn, { originalInput, targetInput, ingredientsInput }, ui.copied);
}
