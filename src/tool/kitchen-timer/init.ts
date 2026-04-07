import { KitchenTimer } from "./lib/KitchenTimer";

function setupAddTimerButton(
	timerTemplate: HTMLTemplateElement,
	timersGrid: HTMLElement,
	activeTimers: KitchenTimer[],
	ui: Record<string, string>
) {
	document.getElementById("add-timer-btn")?.addEventListener("click", () => {
		if (!timerTemplate || !timersGrid) return;

		const clone = timerTemplate.content.cloneNode(true) as DocumentFragment;
		const newCard = clone.querySelector(".timer-card") as HTMLElement;

		const count = activeTimers.length + 1;
		newCard.setAttribute("data-index", count.toString());
		const nameInput = newCard.querySelector(".timer-name") as HTMLInputElement;
		if (nameInput) nameInput.value = `${ui.defaultName} ${count}`;

		timersGrid.appendChild(newCard);

		const timer = new KitchenTimer(newCard, {
			ready: ui.statusReady as string,
			running: ui.statusRunning as string,
			paused: ui.statusPaused as string,
			finished: ui.statusFinished as string,
			start: ui.start as string,
			pause: ui.pause as string,
			finishNotification: ui.finishNotification as string
		});
		activeTimers.push(timer);

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

export function initKitchenTimers(ui: Record<string, string>) {
	const timersGrid = document.getElementById("timers-grid") as HTMLElement;
	const timerTemplate = document.getElementById("timer-template") as HTMLTemplateElement;
	const activeTimers: KitchenTimer[] = [];

	document.querySelectorAll(".timer-card").forEach((card) => {
		const timer = new KitchenTimer(card as HTMLElement, {
			ready: ui.statusReady as string,
			running: ui.statusRunning as string,
			paused: ui.statusPaused as string,
			finished: ui.statusFinished as string,
			start: ui.start as string,
			pause: ui.pause as string,
			finishNotification: ui.finishNotification as string
		});
		activeTimers.push(timer);
	});

	setupAddTimerButton(timerTemplate, timersGrid, activeTimers, ui);
	setupStopAllButton(activeTimers);
	requestNotificationPermission();
}
