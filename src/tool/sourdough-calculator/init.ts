interface Ratio {
	s: number;
	f: number;
	w: number;
}

interface CalculationResult {
	starter: number;
	flour: number;
	water: number;
}

class SourdoughCalculator {
	static calculate(totalAmount: number, ratio: Ratio): CalculationResult {
		if (totalAmount <= 0) {
			return { starter: 0, flour: 0, water: 0 };
		}

		const totalParts = ratio.s + ratio.f + ratio.w;
		if (totalParts <= 0) {
			return { starter: 0, flour: 0, water: 0 };
		}

		const unitWeight = totalAmount / totalParts;

		return {
			starter: Math.round(unitWeight * ratio.s),
			flour: Math.round(unitWeight * ratio.f),
			water: Math.round(unitWeight * ratio.w),
		};
	}
}

interface SourdoughElements {
	totalInput: HTMLInputElement;
	ratioBtns: NodeListOf<Element>;
	customInputsDiv: HTMLElement | null;
	customInputs: NodeListOf<HTMLInputElement>;
	outStarter: HTMLElement;
	outFlour: HTMLElement;
	outWater: HTMLElement;
	outTotal: HTMLElement;
}

function setupElements(): SourdoughElements | null {
	const totalInput = document.getElementById('total-amount') as HTMLInputElement | null;
	const outStarter = document.getElementById('val-starter');
	const outFlour = document.getElementById('val-flour');
	const outWater = document.getElementById('val-water');
	const outTotal = document.getElementById('val-total');

	if (!totalInput || !outStarter || !outFlour || !outWater || !outTotal) {
		return null;
	}

	return {
		totalInput,
		ratioBtns: document.querySelectorAll('.ratio-btn'),
		customInputsDiv: document.getElementById('custom-ratio-inputs'),
		customInputs: document.querySelectorAll('.custom-input') as NodeListOf<HTMLInputElement>,
		outStarter,
		outFlour,
		outWater,
		outTotal,
	};
}

function setupRatioButtons(els: SourdoughElements, currentRatio: Ratio, calculate: () => void, updateFromCustom: () => void): void {
	els.ratioBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			els.ratioBtns.forEach((b) => {
				b.classList.remove('ratio-active');
				b.classList.add('ratio-inactive');
			});

			btn.classList.remove('ratio-inactive');
			btn.classList.add('ratio-active');

			if (btn.id === 'custom-ratio-btn') {
				els.customInputsDiv?.classList.add('visible');
				updateFromCustom();
			} else {
				els.customInputsDiv?.classList.remove('visible');
				const ratioStr = btn.getAttribute('data-ratio');
				if (ratioStr) {
					const parts = ratioStr.split(':').map(Number);
					currentRatio.s = parts[0];
					currentRatio.f = parts[1];
					currentRatio.w = parts[2];
					calculate();
				}
			}
		});
	});
}

function setupCustomInputs(els: SourdoughElements, updateFromCustom: () => void): void {
	els.customInputs.forEach((inp) => {
		inp.addEventListener('input', updateFromCustom);
	});
}

export function initSourdoughCalculator(): void {
	const els = setupElements();
	if (!els) return;

	let currentRatio: Ratio = { s: 1, f: 1, w: 1 };

	function calculate(): void {
		const total = parseInt(els.totalInput.value) || 0;
		const result = SourdoughCalculator.calculate(total, currentRatio);

		els.outStarter.textContent = result.starter.toString();
		els.outFlour.textContent = result.flour.toString();
		els.outWater.textContent = result.water.toString();
		els.outTotal.textContent = `${result.starter + result.flour + result.water} g`;
	}

	function updateFromCustom(): void {
		const s = parseFloat((document.getElementById('custom-s') as HTMLInputElement)?.value) || 1;
		const f = parseFloat((document.getElementById('custom-f') as HTMLInputElement)?.value) || 1;
		const w = parseFloat((document.getElementById('custom-w') as HTMLInputElement)?.value) || 1;
		currentRatio = { s, f, w };
		calculate();
	}

	els.totalInput.addEventListener('input', calculate);
	setupRatioButtons(els, currentRatio, calculate, updateFromCustom);
	setupCustomInputs(els, updateFromCustom);
	calculate();
}
