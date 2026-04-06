type Shape = 'round' | 'square' | 'rectangular';

interface Mold {
	shape: Shape;
	dim1: number;
	dim2: number;
}

interface Ingredient {
	id: string;
	name: string;
	weight: number;
}

interface MoldScalerState {
	original: Mold;
	target: Mold;
	ingredients: Ingredient[];
	factor: number;
}

interface MoldScalerElements {
	originalInputs: HTMLElement | null;
	targetInputs: HTMLElement | null;
	resultFactor: HTMLElement | null;
	resultText: HTMLElement | null;
	shapeOriginal: SVGPathElement | null;
	shapeTarget: SVGPathElement | null;
	ingredientsList: HTMLElement | null;
	addBtn: HTMLElement | null;
}

interface MoldScalerContext {
	state: MoldScalerState;
	els: MoldScalerElements;
	ui: Record<string, string>;
}

class MoldLogic {
	static getArea(mold: Mold): number {
		if (mold.shape === 'round') {
			return Math.PI * Math.pow(mold.dim1 / 2, 2);
		}
		if (mold.shape === 'square') {
			return mold.dim1 * mold.dim1;
		}
		return mold.dim1 * mold.dim2;
	}

	static getPath(mold: Mold, scale = 6): string {
		if (mold.shape === 'round') {
			const r = (mold.dim1 / 2) * scale;
			return `M 0,${-r} A ${r},${r} 0 1,1 0,${r} A ${r},${r} 0 1,1 0,${-r}`;
		}
		const w = mold.dim1 * scale;
		const h = (mold.shape === 'square' ? mold.dim1 : mold.dim2) * scale;
		const x = -w / 2;
		const y = -h / 2;
		return `M ${x},${y} h ${w} v ${h} h ${-w} Z`;
	}

	static calculateFactor(original: Mold, target: Mold): number {
		const area1 = this.getArea(original);
		const area2 = this.getArea(target);
		return Math.round((area2 / area1) * 100) / 100;
	}
}

function getInputHtml(shape: Shape, mold: Mold, type: string, ui: Record<string, string>): string {
	if (shape === 'round') {
		return `<div class="ms-input-group"><label class="ms-label">${ui.diameter}</label><input type="number" class="ms-input" value="${mold.dim1}" min="1" step="0.5" data-type="${type}" data-key="dim1"></div>`;
	}
	if (shape === 'square') {
		return `<div class="ms-input-group"><label class="ms-label">${ui.side}</label><input type="number" class="ms-input" value="${mold.dim1}" min="1" step="0.5" data-type="${type}" data-key="dim1"></div>`;
	}
	return `<div class="ms-inputs-grid"><div class="ms-input-group"><label class="ms-label">${ui.width}</label><input type="number" class="ms-input" value="${mold.dim1}" min="1" step="0.5" data-type="${type}" data-key="dim1"></div><div class="ms-input-group"><label class="ms-label">${ui.length}</label><input type="number" class="ms-input" value="${mold.dim2}" min="1" step="0.5" data-type="${type}" data-key="dim2"></div></div>`;
}

function renderInput(ctx: MoldScalerContext, type: 'original' | 'target'): void {
	const container = type === 'original' ? ctx.els.originalInputs : ctx.els.targetInputs;
	if (!container) return;
	const html = getInputHtml(ctx.state[type].shape, ctx.state[type], type, ctx.ui);
	container.innerHTML = html;
}

function buildIngredientRow(ing: Ingredient, factor: number, ui: Record<string, string>): string {
	const finalValue = Math.round(ing.weight * factor);
	return `<div class="ms-ingredient-row" data-id="${ing.id}"><div class="ms-input-group"><label class="ms-label">${ui.ingredient}</label><input type="text" class="ms-input ms-ing-name" value="${ing.name}" placeholder="${ui.exampleIngredient}"></div><div class="ms-input-group"><label class="ms-label">${ui.original}</label><input type="number" class="ms-input ms-ing-weight" value="${ing.weight || ''}" placeholder="0"></div><div class="ms-input-group"><label class="ms-label">${ui.final}</label><div class="ms-ingredient-final">${ing.weight > 0 ? `${finalValue}g` : '-'}</div></div><button class="ms-del-btn" data-id="${ing.id}" title="${ui.delete}"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button></div>`;
}

function bindNameInputs(ctx: MoldScalerContext): void {
	ctx.els.ingredientsList?.querySelectorAll('.ms-ing-name').forEach((input) => {
		const inp = input as HTMLInputElement;
		inp.addEventListener('change', (e: Event) => {
			const target = e.target as HTMLInputElement;
			const id = target.closest('.ms-ingredient-row')?.getAttribute('data-id') ?? '';
			const ing = ctx.state.ingredients.find((i: Ingredient) => i.id === id);
			if (ing) ing.name = target.value;
		});
	});
}

function bindWeightInputs(ctx: MoldScalerContext, updateUI: () => void): void {
	ctx.els.ingredientsList?.querySelectorAll('.ms-ing-weight').forEach((input) => {
		const inp = input as HTMLInputElement;
		inp.addEventListener('input', (e: Event) => {
			const target = e.target as HTMLInputElement;
			const id = target.closest('.ms-ingredient-row')?.getAttribute('data-id') ?? '';
			const ing = ctx.state.ingredients.find((i: Ingredient) => i.id === id);
			if (ing) {
				ing.weight = parseFloat(target.value) || 0;
				updateUI();
			}
		});
	});
}

function bindDeleteButtons(ctx: MoldScalerContext, updateUI: () => void): void {
	ctx.els.ingredientsList?.querySelectorAll('.ms-del-btn').forEach((btn) => {
		const button = btn as HTMLButtonElement;
		button.addEventListener('click', (e: Event) => {
			const id = (e.currentTarget as HTMLElement).getAttribute('data-id') ?? '';
			ctx.state.ingredients = ctx.state.ingredients.filter((i: Ingredient) => i.id !== id);
			renderIngredients(ctx, updateUI);
		});
	});
}

function bindIngredientEvents(ctx: MoldScalerContext, updateUI: () => void): void {
	bindNameInputs(ctx);
	bindWeightInputs(ctx, updateUI);
	bindDeleteButtons(ctx, updateUI);
}

function renderIngredients(ctx: MoldScalerContext, updateUI: () => void): void {
	if (!ctx.els.ingredientsList) return;

	if (ctx.state.ingredients.length === 0) {
		ctx.els.ingredientsList.innerHTML = `<div class="ms-empty-state">${ctx.ui.addIngredient}</div>`;
		return;
	}

	ctx.els.ingredientsList.innerHTML = ctx.state.ingredients.map((ing: Ingredient) => buildIngredientRow(ing, ctx.state.factor, ctx.ui)).join('');
	bindIngredientEvents(ctx, updateUI);
}

function updateResultText(ctx: MoldScalerContext): void {
	if (!ctx.els.resultText) return;
	if (ctx.state.factor === 1) {
		ctx.els.resultText.innerHTML = ctx.ui.equivalentMolds;
	} else if (ctx.state.factor < 1) {
		ctx.els.resultText.innerHTML = `${ctx.ui.smallerMold} <strong>${ctx.state.factor}</strong>.`;
	} else {
		ctx.els.resultText.innerHTML = `${ctx.ui.largerMold} <strong>${ctx.state.factor}</strong>.`;
	}
}

function updateUI(ctx: MoldScalerContext): void {
	ctx.state.factor = MoldLogic.calculateFactor(ctx.state.original, ctx.state.target);

	if (ctx.els.resultFactor) {
		ctx.els.resultFactor.textContent = `x${ctx.state.factor.toFixed(2)}`;
	}

	updateResultText(ctx);

	if (ctx.els.shapeOriginal) {
		ctx.els.shapeOriginal.setAttribute('d', MoldLogic.getPath(ctx.state.original));
	}
	if (ctx.els.shapeTarget) {
		ctx.els.shapeTarget.setAttribute('d', MoldLogic.getPath(ctx.state.target));
	}

	const finalElements = document.querySelectorAll('.ms-ingredient-final');
	ctx.state.ingredients.forEach((ing: Ingredient, index: number) => {
		const el = finalElements[index];
		if (el) {
			const final = Math.round(ing.weight * ctx.state.factor);
			el.textContent = ing.weight > 0 ? `${final}g` : '-';
		}
	});
}

function bindShapeButtons(ctx: MoldScalerContext, updateFn: () => void): void {
	document.querySelectorAll('.ms-shape-btn').forEach((btn) => {
		btn.addEventListener('click', (e) => {
			const b = e.currentTarget as HTMLElement;
			const target = b.dataset.target as 'original' | 'target' | undefined;
			const shape = b.dataset.shape as Shape | undefined;

			if ((target === 'original' || target === 'target') && shape) {
				ctx.state[target].shape = shape;
				document.querySelectorAll(`.ms-shape-btn[data-target="${target}"]`).forEach((btn) => {
					btn.classList.toggle('active', btn === b);
				});
				renderInput(ctx, target);
				updateFn();
			}
		});
	});
}

function bindDimensionInputs(ctx: MoldScalerContext, updateFn: () => void): void {
	[ctx.els.originalInputs, ctx.els.targetInputs].forEach((container) => {
		container?.addEventListener('input', (e: Event) => {
			const input = e.target as HTMLInputElement;
			const type = input.dataset.type as 'original' | 'target' | undefined;
			const key = input.dataset.key as 'dim1' | 'dim2' | undefined;

			if ((type === 'original' || type === 'target') && (key === 'dim1' || key === 'dim2')) {
				ctx.state[type][key] = parseFloat(input.value) || 0;
				updateFn();
			}
		});
	});
}

function bindAddButton(ctx: MoldScalerContext): void {
	ctx.els.addBtn?.addEventListener('click', () => {
		ctx.state.ingredients.push({
			id: Math.random().toString(36).slice(2, 11),
			name: '',
			weight: 0,
		});
		renderIngredients(ctx, () => updateUI(ctx));
	});
}

export function initMoldScaler(ui: Record<string, string>): void {
	const state = {
		original: { shape: 'round' as Shape, dim1: 20, dim2: 20 },
		target: { shape: 'round' as Shape, dim1: 20, dim2: 20 },
		ingredients: [
			{ id: '1', name: ui.defaultIngredient1, weight: 0 },
			{ id: '2', name: ui.defaultIngredient2, weight: 0 },
		] as Ingredient[],
		factor: 1,
	};

	const els = {
		originalInputs: document.getElementById('original-inputs') as HTMLElement | null,
		targetInputs: document.getElementById('target-inputs') as HTMLElement | null,
		resultFactor: document.getElementById('result-factor') as HTMLElement | null,
		resultText: document.getElementById('result-text') as HTMLElement | null,
		shapeOriginal: document.getElementById('shape-original') as SVGPathElement | null,
		shapeTarget: document.getElementById('shape-target') as SVGPathElement | null,
		ingredientsList: document.getElementById('ingredients-list') as HTMLElement | null,
		addBtn: document.getElementById('add-ingredient-btn') as HTMLElement | null,
	};

	const ctx: MoldScalerContext = { state, els, ui };
	const updateFn = () => updateUI(ctx);

	renderInput(ctx, 'original');
	renderInput(ctx, 'target');
	renderIngredients(ctx, updateFn);
	bindShapeButtons(ctx, updateFn);
	bindDimensionInputs(ctx, updateFn);
	bindAddButton(ctx);
	updateFn();
}



