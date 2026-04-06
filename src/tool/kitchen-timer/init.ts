import { KitchenTimer } from "./lib/KitchenTimer";
import { DockManager } from "./lib/DockManager";

function setupAddTimerButton(
	timerTemplate: HTMLTemplateElement,
	timersGrid: HTMLElement,
	activeTimers: KitchenTimer[],
	dockManager: DockManager
) {
	document.getElementById("add-timer-btn")?.addEventListener("click", () => {
		if (!timerTemplate || !timersGrid) return;

		const clone = timerTemplate.content.cloneNode(true) as DocumentFragment;
		const newCard = clone.querySelector(".timer-card") as HTMLElement;

		const count = activeTimers.length + 1;
		newCard.setAttribute("data-index", count.toString());
		const nameInput = newCard.querySelector(".timer-name") as HTMLInputElement;
		if (nameInput) nameInput.value = `Temporizador ${count}`;

		timersGrid.appendChild(newCard);

		const timer = new KitchenTimer(newCard);
		activeTimers.push(timer);
		dockManager.registerTimer(timer);

		newCard.scrollIntoView({ behavior: "smooth", block: "center" });
	});
}

function setupStopAllButton(activeTimers: KitchenTimer[]) {
	document.getElementById("stop-all")?.addEventListener("click", () => {
		activeTimers.forEach((t) => t.pause());
	});
}

function requestNotificationPermission() {
	if ("Notification" in window) {
		if (Notification.permission !== "granted" && Notification.permission !== "denied") {
			Notification.requestPermission();
		}
	}
}

export function initKitchenTimers() {
	const timersGrid = document.getElementById("timers-grid") as HTMLElement;
	const timerTemplate = document.getElementById("timer-template") as HTMLTemplateElement;
	const activeTimers: KitchenTimer[] = [];
	const dockManager = new DockManager("mobile-dock", "mobile-dock-container");

	document.querySelectorAll(".timer-card").forEach((card) => {
		const timer = new KitchenTimer(card as HTMLElement);
		activeTimers.push(timer);
		dockManager.registerTimer(timer);
	});

	setupAddTimerButton(timerTemplate, timersGrid, activeTimers, dockManager);
	setupStopAllButton(activeTimers);
	requestNotificationPermission();
}
