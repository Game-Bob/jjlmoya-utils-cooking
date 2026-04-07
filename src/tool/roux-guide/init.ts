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
				b.classList.remove('active');
			});
			btn.classList.add('active');
			state.liquid = (btn as HTMLElement).dataset.type as LiquidType || 'milk';
			updateCalculations();
		});
	});
}

function setupTextureButtons(els: RouxElements, state: State, updateCalculations: () => void): void {
	els.textureBtns.forEach((btn) => {
		btn.addEventListener('click', () => {
			els.textureBtns.forEach((b) => {
				b.classList.remove('active');
			});
			btn.classList.add('active');
			state.level = parseInt((btn as HTMLElement).dataset.level || '2') as TextureLevel;
			updateCalculations();
		});
	});
}

function updateDisplay(els: RouxElements, state: State, LIQUID_CONFIG: Record<LiquidType, LiquidConfig>, ROUX_INFO: Record<'white' | 'blond' | 'brown', RouxInfo>): void {
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

export function initRouxGuide(ui: Record<string, string>): void {
	const LIQUID_CONFIG: Record<LiquidType, LiquidConfig> = {
		milk: {
			name: ui.recipeBechamel as string,
			rouxType: 'white',
			tip: ui.tipBechamel as string,
		},
		lightStock: {
			name: ui.recipeVeloute as string,
			rouxType: 'blond',
			tip: ui.tipVeloute as string,
		},
		darkStock: {
			name: ui.recipeEspagnole as string,
			rouxType: 'brown',
			tip: ui.tipEspagnole as string,
		},
		tomato: {
			name: ui.recipeTomato as string,
			rouxType: 'blond',
			tip: ui.tipTomato as string,
		},
	};

	const ROUX_INFO: Record<'white' | 'blond' | 'brown', RouxInfo> = {
		white: {
			label: ui.rouxWhiteLabel as string,
			time: ui.timeWhite as string,
			description: ui.descWhite as string,
		},
		blond: {
			label: ui.rouxBlondLabel as string,
			time: ui.timeBlond as string,
			description: ui.descBlond as string,
		},
		brown: {
			label: ui.rouxBrownLabel as string,
			time: ui.timeBrown as string,
			description: ui.descBrown as string,
		},
	};

	const els = setupElements();
	if (!els) return;

	const state: State = { volume: 1000, liquid: 'milk', level: 2 };
	const updateCalculations = () => updateDisplay(els, state, LIQUID_CONFIG, ROUX_INFO);

	els.volumeInput.addEventListener('input', (e: Event) => {
		state.volume = parseInt((e.target as HTMLInputElement).value) || 0;
		updateCalculations();
	});

	setupLiquidButtons(els, state, updateCalculations);
	setupTextureButtons(els, state, updateCalculations);
	updateCalculations();
}
