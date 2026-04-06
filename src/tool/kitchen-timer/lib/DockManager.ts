import type { KitchenTimer } from "./KitchenTimer";

export class DockManager {
	private dockElement: HTMLElement | null;
	private containerElement: HTMLElement | null;
	private timers: KitchenTimer[] = [];

	constructor(dockId: string, containerId: string) {
		this.dockElement = document.getElementById(dockId);
		this.containerElement = document.getElementById(containerId);
	}

	public registerTimer(timer: KitchenTimer) {
		this.timers.push(timer);

		timer.addEventListener("update", () => this.sync());
		this.sync();
	}

	public sync() {
		if (!this.containerElement || !this.dockElement) return;

		const relevantTimers = this.timers.filter(
			(t) => t.totalSeconds > 0 && t.remainingSeconds > 0
		);

		if (relevantTimers.length === 0) {
			this.dockElement.setAttribute("data-visible", "false");
			return;
		}

		this.dockElement.setAttribute("data-visible", "true");
		this.containerElement.innerHTML = "";

		relevantTimers.sort((a, b) => a.remainingSeconds - b.remainingSeconds);

		relevantTimers.forEach((t) => {
			const item = this.createDockItem(t);
			this.containerElement?.appendChild(item);
		});
	}

	private createDockItem(timer: KitchenTimer): HTMLElement {
		const item = document.createElement("div");
		const baseClasses =
			"flex items-center gap-2 px-3 py-2 rounded-lg border min-w-[130px] max-w-[160px] flex-shrink-0 shadow-sm transition-colors";
		const stateClasses = timer.isRunning
			? "border-orange-500 bg-orange-50/30 dark:border-orange-500 dark:bg-orange-900/20"
			: "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700";

		item.className = `${baseClasses} ${stateClasses}`;
		item.innerHTML = this.getDockItemHTML(timer);

		this.attachDockItemListeners(item, timer);
		return item;
	}

	private getDockItemHTML(timer: KitchenTimer): string {
		const formattedTime = this.formatTimeMin(timer.remainingSeconds);
		const timerName = timer.getName();
		const buttonClass = timer.isRunning
			? "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
			: "bg-orange-500 text-white hover:bg-orange-600";
		const iconPath = timer.isRunning
			? '<path d="M14,19H18V5H14M6,19H10V5H6V19Z" />'
			: '<path d="M8,5.14V19.14L19,12.14L8,5.14Z" />';

		return `
            <div class="flex-1 min-w-0 flex flex-col justify-center">
                <div class="text-[10px] text-slate-500 dark:text-slate-400 truncate uppercase tracking-wide leading-tight font-bold">${timerName}</div>
                <div class="text-base font-mono font-bold text-slate-900 dark:text-white leading-none mt-0.5 tabular-nums">${formattedTime}</div>
            </div>
            <button class="dock-toggle p-1.5 rounded-full flex-shrink-0 transition-colors ${buttonClass}">
                <svg class="w-3.5 h-3.5 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">${iconPath}</svg>
            </button>
        `;
	}

	private attachDockItemListeners(item: HTMLElement, timer: KitchenTimer) {
		const btn = item.querySelector(".dock-toggle");
		btn?.addEventListener("click", (e) => {
			e.stopPropagation();
			timer.toggle();
		});

		item.addEventListener("click", () => {
			timer.element.scrollIntoView({ behavior: "smooth", block: "center" });
		});
	}

	private formatTimeMin(seconds: number): string {
		if (seconds < 60) return `${seconds}s`;
		const m = Math.floor(seconds / 60);
		const s = seconds % 60;
		return `${m}:${s.toString().padStart(2, "0")}`;
	}
}
