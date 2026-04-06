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

	const renderInput = (type: 'original' | 'target', mold: Mold) => {
		const container = type === 'original' ? els.originalInputs : els.targetInputs;
		if (!container) return;

		let html = '';
		if (mold.shape === 'round') {
			html = `
				<div class="ms-input-group">
					<label class="ms-label">${ui.diameter}</label>
					<input type="number" class="ms-input" value="${mold.dim1}" min="1" step="0.5" data-type="${type}" data-key="dim1">
				</div>
			`;
		} else if (mold.shape === 'square') {
			html = `
				<div class="ms-input-group">
					<label class="ms-label">${ui.side}</label>
					<input type="number" class="ms-input" value="${mold.dim1}" min="1" step="0.5" data-type="${type}" data-key="dim1">
				</div>
			`;
		} else {
			html = `
				<div class="ms-inputs-grid">
					<div class="ms-input-group">
						<label class="ms-label">${ui.width}</label>
						<input type="number" class="ms-input" value="${mold.dim1}" min="1" step="0.5" data-type="${type}" data-key="dim1">
					</div>
					<div class="ms-input-group">
						<label class="ms-label">${ui.length}</label>
						<input type="number" class="ms-input" value="${mold.dim2}" min="1" step="0.5" data-type="${type}" data-key="dim2">
					</div>
				</div>
			`;
		}
		container.innerHTML = html;
	};

	const renderIngredients = () => {
		if (!els.ingredientsList) return;
		
		if (state.ingredients.length === 0) {
			els.ingredientsList.innerHTML = `<div class="ms-empty-state">${ui.addIngredient}</div>`;
			return;
		}

		els.ingredientsList.innerHTML = state.ingredients.map(ing => {
			const finalValue = Math.round(ing.weight * state.factor);
			return `
				<div class="ms-ingredient-row" data-id="${ing.id}">
					<div class="ms-input-group">
						<label class="ms-label">${ui.ingredient}</label>
						<input type="text" class="ms-input ms-ing-name" value="${ing.name}" placeholder="${ui.exampleIngredient}">
					</div>
					<div class="ms-input-group">
						<label class="ms-label">${ui.original}</label>
						<input type="number" class="ms-input ms-ing-weight" value="${ing.weight || ''}" placeholder="0">
					</div>
					<div class="ms-input-group">
						<label class="ms-label">${ui.final}</label>
						<div class="ms-ingredient-final">${ing.weight > 0 ? `${finalValue}g` : '-'}</div>
					</div>
					<button class="ms-del-btn" data-id="${ing.id}" title="${ui.delete}">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
					</button>
				</div>
			`;
		}).join('');

		els.ingredientsList.querySelectorAll('.ms-ing-name').forEach(input => {
			input.addEventListener('change', (e) => {
				const target = e.target as HTMLInputElement;
				const id = target.closest('.ms-ingredient-row')?.getAttribute('data-id') ?? '';
				if (id) {
					const ing = state.ingredients.find(i => i.id === id);
					if (ing) ing.name = target.value;
				}
			});
		});

		els.ingredientsList.querySelectorAll('.ms-ing-weight').forEach(input => {
			input.addEventListener('input', (e) => {
				const target = e.target as HTMLInputElement;
				const id = target.closest('.ms-ingredient-row')?.getAttribute('data-id') ?? '';
				if (id) {
					const ing = state.ingredients.find(i => i.id === id);
					if (ing) {
						ing.weight = parseFloat(target.value) || 0;
						updateUI();
					}
				}
			});
		});

		els.ingredientsList.querySelectorAll('.ms-del-btn').forEach(btn => {
			btn.addEventListener('click', (e) => {
				const id = (e.currentTarget as HTMLElement).getAttribute('data-id') ?? '';
				if (id) {
					state.ingredients = state.ingredients.filter(i => i.id !== id);
					renderIngredients();
				}
			});
		});
	};



	const updateUI = () => {
		state.factor = MoldLogic.calculateFactor(state.original, state.target);
		
		if (els.resultFactor) {
			els.resultFactor.textContent = `x${state.factor.toFixed(2)}`;
		}

		if (els.resultText) {
			if (state.factor === 1) {
				els.resultText.innerHTML = ui.equivalentMolds;
			} else if (state.factor < 1) {
				els.resultText.innerHTML = `${ui.smallerMold} <strong>${state.factor}</strong>.`;
			} else {
				els.resultText.innerHTML = `${ui.largerMold} <strong>${state.factor}</strong>.`;
			}
		}

		if (els.shapeOriginal) {
			els.shapeOriginal.setAttribute('d', MoldLogic.getPath(state.original));
		}
		if (els.shapeTarget) {
			els.shapeTarget.setAttribute('d', MoldLogic.getPath(state.target));
		}

		const finalElements = document.querySelectorAll('.ms-ingredient-final');
		state.ingredients.forEach((ing, index) => {
			const el = finalElements[index];
			if (el) {
				const final = Math.round(ing.weight * state.factor);
				el.textContent = ing.weight > 0 ? `${final}g` : '-';
			}
		});
	};

	const bindEvents = () => {
		document.querySelectorAll('.ms-shape-btn').forEach(btn => {
			btn.addEventListener('click', (e) => {
				const b = e.currentTarget as HTMLElement;
				const target = b.dataset.target;
				const shape = b.dataset.shape as Shape | undefined;

				if ((target === 'original' || target === 'target') && shape) {
					state[target].shape = shape;
					
					document.querySelectorAll(`.ms-shape-btn[data-target="${target}"]`).forEach(btn => {
						btn.classList.toggle('active', btn === b);
					});

					renderInput(target, state[target]);
					updateUI();
				}
			});
		});

		[els.originalInputs, els.targetInputs].forEach(container => {
			container?.addEventListener('input', (e) => {
				const input = e.target as HTMLInputElement;
				const type = input.dataset.type;
				const key = input.dataset.key;
				
				if ((type === 'original' || type === 'target') && (key === 'dim1' || key === 'dim2')) {
					state[type][key] = parseFloat(input.value) || 0;
					updateUI();
				}
			});
		});

		els.addBtn?.addEventListener('click', () => {
			state.ingredients.push({
				id: Math.random().toString(36).slice(2, 11),
				name: '',
				weight: 0
			});
			renderIngredients();
		});
	};

	renderInput('original', state.original);
	renderInput('target', state.target);
	renderIngredients();
	bindEvents();
	updateUI();
}


