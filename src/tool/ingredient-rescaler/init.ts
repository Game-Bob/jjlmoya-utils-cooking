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

// eslint-disable-next-line max-lines-per-function
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

	function update(): void {
		const original = parseFloat(originalInput!.value) || 1;
		const target = parseFloat(targetInput!.value) || 1;

		let ratio = 1;
		if (original > 0) {
			ratio = target / original;
		}

		multiplierDisplay!.textContent = `${ratio.toFixed(2).replace('.', ',')}x`;

		const text = ingredientsInput!.value;
		const lines = text.split('\n');

		resultsContainer!.innerHTML = '';

		if (!text.trim()) {
			resultsContainer!.innerHTML = `<div class="ir-empty-state"><span class="ir-empty-icon"></span><p>${ui.emptyState}</p></div>`;
			return;
		}

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
				resultsContainer!.appendChild(row);
			} else if (line.trim()) {
				const row = document.createElement('div');
				row.className = 'ir-no-amount-row';
				row.textContent = line;
				resultsContainer!.appendChild(row);
			}
		});
	}

	originalInput.addEventListener('input', update);
	targetInput.addEventListener('input', update);
	ingredientsInput.addEventListener('input', update);

	if (!ingredientsInput.value.trim()) {
		ingredientsInput.value = `${ui.defaultIngredient1}\n${ui.defaultIngredient2}\n${ui.defaultIngredient3}`;
		update();
	} else {
		update();
	}

	copyBtn.addEventListener('click', () => {
		const lines: string[] = [];
		const original = parseFloat(originalInput!.value) || 1;
		const target = parseFloat(targetInput!.value) || 1;
		const ratio = original > 0 ? target / original : 1;
		const text = ingredientsInput!.value;

		text.split('\n').forEach((line) => {
			const parsed = parseLine(line);
			if (parsed.amount !== null) {
				const newAmount = parsed.amount * ratio;
				lines.push(`${parsed.prefix}${formatAmount(newAmount)}${parsed.ingredient}`);
			} else {
				lines.push(line);
			}
		});

		navigator.clipboard.writeText(lines.join('\n')).then(() => {
			const originalText = copyBtn!.innerHTML;
			copyBtn!.textContent = ui.copied;
			copyBtn!.classList.add('ir-copied');
			copyBtn!.classList.remove('ir-default');
			setTimeout(() => {
				copyBtn!.innerHTML = originalText;
				copyBtn!.classList.remove('ir-copied');
				copyBtn!.classList.add('ir-default');
			}, 2000);
		});
	});
}
