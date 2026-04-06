type CookingStyle = 'sear' | 'delicate' | 'stew' | 'fast';
type MaintenanceLevel = 'lazy' | 'care' | 'ritual';

interface State {
	style: CookingStyle | null;
	maint: MaintenanceLevel | null;
}

interface MaterialData {
	name: string;
	tag: string;
	grad: string;
	icon: string;
	pros: string;
	cons: string;
	tip: string;
}

interface MaterialGrads {
	stainless: string;
	nonstick: string;
	castiron: string;
	carbon: string;
	enameled: string;
}

const GRADS: MaterialGrads = {
	stainless: 'linear-gradient(135deg, hsl(217, 33%, 37%), hsl(217, 33%, 17%))',
	nonstick: 'linear-gradient(135deg, hsl(280, 8%, 43%), hsl(217, 33%, 7%))',
	castiron: 'linear-gradient(135deg, hsl(24, 77%, 25%), hsl(217, 33%, 7%))',
	carbon: 'linear-gradient(135deg, hsl(217, 60%, 27%), hsl(217, 33%, 7%))',
	enameled: 'linear-gradient(135deg, hsl(0, 74%, 42%), hsl(0, 74%, 17%))',
};

function createMaterial(ui: Record<string, string>, prefix: string, grad: string, icon: string): MaterialData {
	return {
		name: ui[`${prefix}Name`],
		tag: ui[`${prefix}Tag`],
		grad,
		icon,
		pros: ui[`${prefix}Pro`],
		cons: ui[`${prefix}Con`],
		tip: ui[`${prefix}Tip`],
	};
}

function buildMaterialDB(ui: Record<string, string>): Record<string, MaterialData> {
	return {
		stainless: createMaterial(ui, 'stainless', GRADS.stainless, 'stainless'),
		nonstick: createMaterial(ui, 'nonstick', GRADS.nonstick, 'nonstick'),
		castiron: createMaterial(ui, 'castiron', GRADS.castiron, 'castiron'),
		carbon: createMaterial(ui, 'carbon', GRADS.carbon, 'carbon'),
		enameled: createMaterial(ui, 'enamel', GRADS.enameled, 'enameled'),
	};
}

const LOGIC: Record<CookingStyle, Record<MaintenanceLevel, string>> = {
	sear: { lazy: 'stainless', care: 'stainless', ritual: 'castiron' },
	delicate: { lazy: 'nonstick', care: 'nonstick', ritual: 'carbon' },
	stew: { lazy: 'stainless', care: 'enameled', ritual: 'enameled' },
	fast: { lazy: 'stainless', care: 'stainless', ritual: 'carbon' },
};

interface CookwareElements {
	styleButtons: NodeListOf<Element>;
	maintButtons: NodeListOf<Element>;
	progressBar: HTMLElement;
	cardGrad: HTMLElement;
	resName: HTMLElement;
	resTag: HTMLElement;
	resPros: HTMLElement;
	resCons: HTMLElement;
	resTip: HTMLElement;
	resDetails: HTMLElement;
	iconPlaceholder: HTMLElement | null;
	resultIcons: NodeListOf<Element>;
}

function getRequiredElement(id: string): HTMLElement | null {
	return document.getElementById(id);
}

function setupElements(): CookwareElements | null {
	const progressBar = getRequiredElement('progress-bar');
	const cardGrad = getRequiredElement('card-grad');
	const resName = getRequiredElement('res-name');
	const resTag = getRequiredElement('res-tag');
	const resPros = getRequiredElement('res-pros');
	const resCons = getRequiredElement('res-cons');
	const resTip = getRequiredElement('res-tip');
	const resDetails = getRequiredElement('res-details');

	const required = [progressBar, cardGrad, resName, resTag, resPros, resCons, resTip, resDetails];
	if (required.some((el) => !el)) return null;

	return {
		styleButtons: document.querySelectorAll('.style-btn'),
		maintButtons: document.querySelectorAll('.maint-btn'),
		progressBar: progressBar as HTMLElement,
		cardGrad: cardGrad as HTMLElement,
		resName: resName as HTMLElement,
		resTag: resTag as HTMLElement,
		resPros: resPros as HTMLElement,
		resCons: resCons as HTMLElement,
		resTip: resTip as HTMLElement,
		resDetails: resDetails as HTMLElement,
		iconPlaceholder: getRequiredElement('icon-placeholder'),
		resultIcons: document.querySelectorAll('.cw-result-icon'),
	};
}

function updateDisplay(state: State, els: CookwareElements, db: Record<string, MaterialData>): void {
	const progress = (state.style ? 50 : 0) + (state.maint ? 50 : 0);
	els.progressBar.style.width = `${progress}%`;

	if (!state.style || !state.maint) return;

	const key = LOGIC[state.style][state.maint];
	const data = db[key];

	els.cardGrad.style.background = data.grad;
	els.resName.textContent = data.name;
	els.resTag.textContent = data.tag;
	els.resPros.textContent = data.pros;
	els.resCons.textContent = data.cons;
	els.resTip.textContent = `"${data.tip}"`;
	els.resDetails.classList.remove('cw-hidden');

	if (els.iconPlaceholder) {
		els.iconPlaceholder.classList.add('cw-hidden');
	}
	els.resultIcons.forEach((icon) => icon.classList.add('cw-hidden'));
	const targetIcon = document.getElementById(`icon-${key}`);
	if (targetIcon) {
		targetIcon.classList.remove('cw-hidden');
	}
}

function setupStyleButtons(styleButtons: NodeListOf<Element>, state: State, els: CookwareElements, db: Record<string, MaterialData>): void {
	styleButtons.forEach((btn) => {
		btn.addEventListener('click', () => {
			styleButtons.forEach((b) => b.classList.remove('active'));
			btn.classList.add('active');
			state.style = (btn as HTMLElement).dataset.value as CookingStyle;
			updateDisplay(state, els, db);
		});
	});
}

function setupMaintenanceButtons(maintButtons: NodeListOf<Element>, state: State, els: CookwareElements, db: Record<string, MaterialData>): void {
	maintButtons.forEach((btn) => {
		btn.addEventListener('click', () => {
			maintButtons.forEach((b) => b.classList.remove('active'));
			btn.classList.add('active');
			state.maint = (btn as HTMLElement).dataset.value as MaintenanceLevel;
			updateDisplay(state, els, db);
		});
	});
}

export function initCookwareGuide(ui: Record<string, string>): void {
	const els = setupElements();
	if (!els) return;

	const state: State = { style: null, maint: null };
	const db = buildMaterialDB(ui);

	if (ui.defaultTip) {
		els.resTip.textContent = `"${ui.defaultTip}"`;
	}

	setupStyleButtons(els.styleButtons, state, els, db);
	setupMaintenanceButtons(els.maintButtons, state, els, db);
}
