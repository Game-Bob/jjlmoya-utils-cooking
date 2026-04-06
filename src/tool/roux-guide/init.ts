type LiquidType = 'milk' | 'lightStock' | 'darkStock' | 'tomato';
type TextureLevel = 1 | 2 | 3 | 4;

interface LiquidConfig {
	name: string;
	rouxType: 'white' | 'blond' | 'brown';
	tip: string;
}

interface RouxInfo {
	label: string;
	time: string;
	description: string;
}

interface State {
	volume: number;
	liquid: LiquidType;
	level: TextureLevel;
}

const VISCOSITY_RATIOS: Record<TextureLevel, number> = {
	1: 50,
	2: 90,
	3: 130,
	4: 185,
};

const LIQUID_CONFIG: Record<LiquidType, LiquidConfig> = {
	milk: {
		name: 'Béchamel',
		rouxType: 'white',
		tip: 'Usa leche fría. Añádela gradualmente al principio o de golpe si bates fuerte.',
	},
	lightStock: {
		name: 'Velouté',
		rouxType: 'blond',
		tip: 'Usa fondo de ave o pescado. Deja que el roux huela a galleta antes de ligar.',
	},
	darkStock: {
		name: 'Espagnole',
		rouxType: 'brown',
		tip: 'Para salsas oscuras potentes. El roux debe estar color chocolate, pero sin quemarse.',
	},
	tomato: {
		name: 'Salsa de Tomate',
		rouxType: 'blond',
		tip: 'El roux ayudará a dar cuerpo y suavidad a la textura final del tomate.',
	},
};

const ROUX_INFO: Record<'white' | 'blond' | 'brown', RouxInfo> = {
	white: {
		label: 'Blanco',
		time: '2-3 min',
		description: 'Cocina solo hasta perder el olor a harina cruda. Sin color.',
	},
	blond: {
		label: 'Rubio',
		time: '5-8 min',
		description: 'Busca un color de mantequilla tostada y un aroma a nueces.',
	},
	brown: {
		label: 'Oscuro',
		time: '15-20 min',
		description: 'Fuego muy suave. Color chocolate. Nota: requiere un 10% más de peso.',
	},
};

interface RouxElements {
	volumeInput: HTMLInputElement;
	liquidBtns: NodeListOf<Element>;
	textureBtns: NodeListOf<Element>;
	progressBar: HTMLElement;
	butterOut: HTMLElement;
	flourOut: HTMLElement;
	rouxLabel: HTMLElement;
	cookInst: HTMLElement;
	sauceName: HTMLElement;
	ratioDisp: HTMLElement;
	chefTip: HTMLElement;
}

function getRequiredElements(): Record<string, HTMLElement | null> {
	return {
		volumeInput: document.getElementById('volume-input'),
		progressBar: document.getElementById('progress-bar'),
		butterOut: document.getElementById('butter-output'),
		flourOut: document.getElementById('flour-output'),
		rouxLabel: document.getElementById('roux-type-label'),
		cookInst: document.getElementById('cooking-instructions'),
		sauceName: document.getElementById('sauce-name'),
		ratioDisp: document.getElementById('ratio-display'),
		chefTip: document.getElementById('chef-tip'),
	};
}

function validateElements(els: Record<string, HTMLElement | null>): boolean {
	const requiredKeys = ['volumeInput', 'progressBar', 'butterOut', 'flourOut', 'rouxLabel', 'cookInst', 'sauceName', 'ratioDisp', 'chefTip'];
	return requiredKeys.every((key) => els[key]);
}

function setupElements(): RouxElements | null {
	const els = getRequiredElements();
	if (!validateElements(els)) return null;

	const volumeInput = els.volumeInput as HTMLInputElement;
	return {
		volumeInput,
		liquidBtns: document.querySelectorAll('.liquid-btn'),
		textureBtns: document.querySelectorAll('.texture-btn'),
		progressBar: els.progressBar as HTMLElement,
		butterOut: els.butterOut as HTMLElement,
		flourOut: els.flourOut as HTMLElement,
		rouxLabel: els.rouxLabel as HTMLElement,
		cookInst: els.cookInst as HTMLElement,
		sauceName: els.sauceName as HTMLElement,
		ratioDisp: els.ratioDisp as HTMLElement,
		chefTip: els.chefTip as HTMLElement,
	};
}

function setupLiquidButtons(els: RouxElements, state: State, updateCalculations: () => void): void {
	els.liquidBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			els.liquidBtns.forEach((b) => {
				b.classList.remove('active', 'bg-white', 'dark:bg-slate-700', 'shadow-md', 'ring-2', 'ring-indigo-500/20');
			});
			btn.classList.add('active', 'bg-white', 'dark:bg-slate-700', 'shadow-md', 'ring-2', 'ring-indigo-500/20');
			state.liquid = (btn as HTMLElement).dataset.type as LiquidType || 'milk';
			updateCalculations();
		});
	});
}

function setupTextureButtons(els: RouxElements, state: State, updateCalculations: () => void): void {
	els.textureBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			els.textureBtns.forEach((b) => {
				b.classList.remove('active', 'border-amber-500/50', 'bg-amber-50', 'dark:bg-amber-900/10');
				b.classList.add('border-slate-100', 'dark:border-slate-800', 'bg-white', 'dark:bg-slate-900');
			});

			btn.classList.remove('border-slate-100', 'dark:border-slate-800', 'bg-white', 'dark:bg-slate-900');
			btn.classList.add('active', 'border-amber-500/50', 'bg-amber-50', 'dark:bg-amber-900/10');
			state.level = parseInt((btn as HTMLElement).dataset.level || '2') as TextureLevel;
			updateCalculations();
		});
	});
}

function updateDisplay(els: RouxElements, state: State): void {
	const config = LIQUID_CONFIG[state.liquid];
	const baseRatio = VISCOSITY_RATIOS[state.level];
	const liters = state.volume / 1000;
	const correctionFactor = config.rouxType === 'brown' ? 1.15 : 1.0;
	const totalRoux = Math.round(baseRatio * liters * correctionFactor);
	const each = Math.round(totalRoux / 2);

	els.butterOut.textContent = each.toString();
	els.flourOut.textContent = each.toString();

	const info = ROUX_INFO[config.rouxType];
	els.rouxLabel.textContent = info.label;
	els.cookInst.textContent = `${info.description} (${info.time})`;
	els.sauceName.textContent = config.name;
	els.ratioDisp.textContent = `${totalRoux}g/L`;
	els.chefTip.textContent = `"${config.tip}"`;
	els.progressBar.style.width = `${(state.level / 4) * 100}%`;
}

export function initRouxGuide(): void {
	const els = setupElements();
	if (!els) return;

	const state: State = { volume: 1000, liquid: 'milk', level: 2 };
	const updateCalculations = () => updateDisplay(els, state);

	els.volumeInput.addEventListener('input', (e) => {
		state.volume = parseInt((e.target as HTMLInputElement).value) || 0;
		updateCalculations();
	});

	setupLiquidButtons(els, state, updateCalculations);
	setupTextureButtons(els, state, updateCalculations);
	updateCalculations();
}
