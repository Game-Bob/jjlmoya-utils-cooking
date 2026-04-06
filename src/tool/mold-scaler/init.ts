type Shape = 'round' | 'square' | 'rectangular';

interface MoldState {
	shape: Shape;
	dim1: number;
	dim2: number;
}

interface Ingredient {
	id: string;
	name: string;
	weight: number;
}

interface WindowGlobal extends Window {
	updateIngredient: (id: string, field: 'name' | 'weight', value: number | string) => void;
	removeIngredient: (id: string) => void;
}

// eslint-disable-next-line max-lines-per-function
export function initMoldScaler(ui: Record<string, string>): void {
	const state = {
		original: { shape: 'round' as Shape, dim1: 20, dim2: 20 } as MoldState,
		target: { shape: 'round' as Shape, dim1: 20, dim2: 20 } as MoldState,
		ingredients: [
			{ id: '1', name: ui.defaultIngredient1, weight: 0 },
			{ id: '2', name: ui.defaultIngredient2, weight: 0 },
		] as Ingredient[],
		currentFactor: 1,
	};

	const els = {
		originalInputs: document.getElementById('original-inputs'),
		targetInputs: document.getElementById('target-inputs'),
		resultFactor: document.getElementById('result-factor'),
		resultText: document.getElementById('result-text'),
		shapeOriginal: document.getElementById('shape-original'),
		shapeTarget: document.getElementById('shape-target'),
		ingredientsList: document.getElementById('ingredients-list'),
		addIngredientBtn: document.getElementById('add-ingredient-btn'),
	};

	const getRoundInput = (labelClass: string, inputClass: string, type: string, values: MoldState) => `
		<div class="ingredient-field">
			<label class="${labelClass}">${ui.diameter}</label>
			<input class="${inputClass}" type="number" value="${values.dim1}" min="1" step="0.5" data-type="${type}" data-key="dim1">
		</div>
	`;

	const getSquareInput = (labelClass: string, inputClass: string, type: string, values: MoldState) => `
		<div class="ingredient-field">
			<label class="${labelClass}">${ui.side}</label>
			<input class="${inputClass}" type="number" value="${values.dim1}" min="1" step="0.5" data-type="${type}" data-key="dim1">
		</div>
	`;

	const getRectangularInput = (labelClass: string, inputClass: string, type: string, values: MoldState) => `
		<div class="ingredient-row" style="grid-template-columns: 1fr 1fr;">
			<div class="ingredient-field">
				<label class="${labelClass}">${ui.width}</label>
				<input class="${inputClass}" type="number" value="${values.dim1}" min="1" step="0.5" data-type="${type}" data-key="dim1">
			</div>
			<div class="ingredient-field">
				<label class="${labelClass}">${ui.length}</label>
				<input class="${inputClass}" type="number" value="${values.dim2}" min="1" step="0.5" data-type="${type}" data-key="dim2">
			</div>
		</div>
	`;

	const getInputsHTML = (type: 'original' | 'target', shape: Shape, values: MoldState) => {
		const labelClass = 'ingredient-field-label';
		const inputClass = 'ingredient-input';

		if (shape === 'round') return getRoundInput(labelClass, inputClass, type, values);
		if (shape === 'square') return getSquareInput(labelClass, inputClass, type, values);
		return getRectangularInput(labelClass, inputClass, type, values);
	};

	const getArea = (s: MoldState) => {
		if (s.shape === 'round') {
			return Math.PI * Math.pow(s.dim1 / 2, 2);
		} else if (s.shape === 'square') {
			return s.dim1 * s.dim1;
		} else {
			return s.dim1 * s.dim2;
		}
	};

	const getPath = (s: MoldState, scale = 5) => {
		if (s.shape === 'round') {
			const r = (s.dim1 / 2) * scale;
			return `M 0,${-r} A ${r},${r} 0 1,1 0,${r} A ${r},${r} 0 1,1 0,${-r}`;
		} else {
			const w = s.dim1 * scale;
			const h = (s.shape === 'square' ? s.dim1 : s.dim2) * scale;
			const x = -w / 2;
			const y = -h / 2;
			return `M ${x},${y} h ${w} v ${h} h ${-w} Z`;
		}
	};

	const update = () => {
		const areaOriginal = getArea(state.original);
		const areaTarget = getArea(state.target);

		let factor = areaTarget / areaOriginal;
		factor = Math.round(factor * 100) / 100;

		if (els.resultFactor) els.resultFactor.textContent = `x${factor.toFixed(2)}`;

		if (els.resultText) {
			if (factor === 1) {
				els.resultText.textContent = ui.equivalentMolds;
			} else if (factor < 1) {
				els.resultText.innerHTML = `${ui.smallerMold} <span class="reduce-text"><strong>${factor}</strong></span>.`;
			} else {
				els.resultText.innerHTML = `${ui.largerMold} <span class="increase-text"><strong>${factor}</strong></span>.`;
			}
		}

		const scale = 6;

		if (els.shapeOriginal) els.shapeOriginal.setAttribute('d', getPath(state.original, scale));
		if (els.shapeTarget) els.shapeTarget.setAttribute('d', getPath(state.target, scale));

		state.currentFactor = factor;
		renderIngredients();
	};

	const getIngredientRowHTML = (ing: Ingredient) => {
		const finalWeight = Math.round(ing.weight * state.currentFactor);
		const isCalculated = ing.weight > 0;
		return `
			<div class="ingredient-row">
				<div class="ingredient-field">
					<label class="ingredient-field-label">${ui.ingredient}</label>
					<input type="text" value="${ing.name}" class="ingredient-input" onchange="window.updateIngredient('${ing.id}', 'name', this.value)" placeholder="${ui.exampleIngredient}">
				</div>
				<div class="ingredient-field">
					<label class="ingredient-field-label">${ui.original}</label>
					<input type="number" value="${ing.weight || ''}" class="ingredient-input" onchange="window.updateIngredient('${ing.id}', 'weight', parseFloat(this.value))" placeholder="0">
				</div>
				<div class="ingredient-field">
					<label class="ingredient-field-label final">${ui.final}</label>
					<div class="ingredient-final">${isCalculated ? finalWeight : '-'}</div>
				</div>
				<button onclick="window.removeIngredient('${ing.id}')" class="ingredient-delete" title="${ui.delete}">
					<svg xmlns="http://www.w3.org/2000/svg" class="ingredient-delete-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
				</button>
			</div>
		`;
	};

	const renderIngredients = () => {
		if (!els.ingredientsList) return;
		els.ingredientsList.innerHTML = state.ingredients.map(getIngredientRowHTML).join('');
	};

	(window as unknown as WindowGlobal).updateIngredient = (id: string, field: 'name' | 'weight', value: number | string) => {
		const ing = state.ingredients.find((i) => i.id === id);
		if (ing) {
			if (field === 'weight') ing.weight = (typeof value === 'number' ? value : 0) || 0;
			else ing.name = String(value);
			renderIngredients();
		}
	};

	(window as unknown as WindowGlobal).removeIngredient = (id: string) => {
		state.ingredients = state.ingredients.filter((i) => i.id !== id);
		renderIngredients();
	};

	const handleShapeClick = (e: Event) => {
		const btn = e.currentTarget as HTMLElement;
		const target = btn.dataset.target as 'original' | 'target';
		const shape = btn.dataset.shape as Shape;

		state[target].shape = shape;
		if (shape === 'rectangular' && state[target].dim2 === state[target].dim1) {
			state[target].dim2 = state[target].dim1 + 5;
		}

		document.querySelectorAll(`.shape-btn[data-target="${target}"]`).forEach((b) => {
			b.classList.remove('active');
		});
		btn.classList.add('active');
		renderInputs(target);
		update();
	};

	const handleInput = (e: Event) => {
		const input = e.target as HTMLInputElement;
		const type = input.dataset.type as 'original' | 'target';
		const key = input.dataset.key as 'dim1' | 'dim2';

		if (type && key) {
			state[type][key] = parseFloat(input.value) || 0;
			update();
		}
	};

	const setupListeners = () => {
		document.querySelectorAll('.shape-btn').forEach((btn) => {
			btn.addEventListener('click', handleShapeClick);
		});
		els.originalInputs?.addEventListener('input', handleInput);
		els.targetInputs?.addEventListener('input', handleInput);
		els.addIngredientBtn?.addEventListener('click', () => {
			const newId = Math.random().toString(36).slice(2, 11);
			state.ingredients.push({ id: newId, name: '', weight: 0 });
			renderIngredients();
		});
	};

	const renderInputs = (target: 'original' | 'target') => {
		const container = target === 'original' ? els.originalInputs : els.targetInputs;
		if (container) {
			container.innerHTML = getInputsHTML(target, state[target].shape, state[target]);
		}
	};

	renderInputs('original');
	renderInputs('target');
	setupListeners();
	update();
}
