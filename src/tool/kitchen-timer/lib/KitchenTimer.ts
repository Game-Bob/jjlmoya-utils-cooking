export class KitchenTimer extends EventTarget {
	element: HTMLElement;
	private inputs: { h: HTMLInputElement; m: HTMLInputElement; s: HTMLInputElement };
	private btnToggle: HTMLButtonElement;
	private btnReset: HTMLButtonElement;
	private btnAdd1m: HTMLButtonElement;
	private btnAdd5m: HTMLButtonElement;
	private statusText: HTMLElement;
	private timerNameInput: HTMLInputElement;

	totalSeconds: number = 0;
	remainingSeconds: number = 0;
	private intervalId: number | null = null;
	isRunning: boolean = false;

	private audioContext: AudioContext | null = null;

	constructor(element: HTMLElement) {
		super();
		this.element = element;

		const hoursInput = element.querySelector(".hours") as HTMLInputElement | null;
		const minutesInput = element.querySelector(".minutes") as HTMLInputElement | null;
		const secondsInput = element.querySelector(".seconds") as HTMLInputElement | null;

		if (!minutesInput || !secondsInput) {
			throw new Error("Missing required time input elements");
		}

		this.inputs = {
			h: hoursInput || document.createElement('input'),
			m: minutesInput,
			s: secondsInput,
		};

		this.btnToggle = element.querySelector(".btn-toggle") as HTMLButtonElement;
		this.btnReset = element.querySelector(".btn-reset") as HTMLButtonElement;
		this.btnAdd1m = element.querySelector(".btn-add-1m") as HTMLButtonElement;
		this.btnAdd5m = element.querySelector(".btn-add-5m") as HTMLButtonElement;
		this.statusText = element.querySelector(".status-text") as HTMLElement;
		this.timerNameInput = element.querySelector(".timer-name") as HTMLInputElement;

		if (!this.btnToggle || !this.btnReset || !this.statusText || !this.timerNameInput) {
			throw new Error("Missing required control elements");
		}

		this.initEvents();
		this.validateInputs();
	}

	private initEvents() {
		this.btnToggle.addEventListener("click", () => this.toggle());
		this.btnReset.addEventListener("click", () => this.reset());
		this.btnAdd1m.addEventListener("click", () => this.addTime(60));
		this.btnAdd5m.addEventListener("click", () => this.addTime(300));

		Object.values(this.inputs).forEach((input) => {
			input.addEventListener("change", () => this.validateInputs());
			input.addEventListener("input", () => {
				if (this.isRunning) this.pause();
				this.checkStartButton();
			});
		});

		this.timerNameInput.addEventListener("input", () => {
			this.dispatchUpdate();
		});
	}

	private getInputSeconds(): number {
		const h = parseInt(this.inputs.h.value) || 0;
		const m = parseInt(this.inputs.m.value) || 0;
		const s = parseInt(this.inputs.s.value) || 0;
		return h * 3600 + m * 60 + s;
	}

	private setDisplay(totalSec: number) {
		const h = Math.floor(totalSec / 3600);
		const m = Math.floor((totalSec % 3600) / 60);
		const s = totalSec % 60;

		if (this.element.querySelector(".hours")) {
			this.inputs.h.value = h.toString().padStart(2, "0");
			this.inputs.m.value = m.toString().padStart(2, "0");
		} else {
			this.inputs.m.value = Math.floor(totalSec / 60).toString().padStart(2, "0");
		}
		this.inputs.s.value = s.toString().padStart(2, "0");
	}

	private validateInputs() {
		let s = this.getInputSeconds();
		if (s < 0) s = 0;
		this.setDisplay(s);
		this.remainingSeconds = s;
		this.totalSeconds = s;
		this.checkStartButton();
		this.dispatchUpdate();
	}

	private addTime(seconds: number) {
		const current = this.getInputSeconds();
		this.pause();
		this.setDisplay(current + seconds);
		this.validateInputs();
	}

	toggle() {
		if (this.isRunning) {
			this.pause();
		} else {
			this.start();
		}
	}

	start() {
		if (this.remainingSeconds <= 0) this.validateInputs();
		if (this.remainingSeconds <= 0) return;

		this.isRunning = true;
		this.updateUIState();
		this.dispatchUpdate();

		if (!this.audioContext) {
			try {
				const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
				this.audioContext = new AudioContextClass();
			} catch {
				console.warn("AudioContext not available");
			}
		}

		if (this.audioContext?.state === "suspended") {
			this.audioContext.resume().catch(() => {
				console.warn("Could not resume AudioContext");
			});
		}

		this.intervalId = window.setInterval(() => {
			this.tick();
		}, 1000);
	}

	pause() {
		this.isRunning = false;
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
		this.updateUIState();
		this.dispatchUpdate();
	}

	reset() {
		this.pause();
		this.setDisplay(0);
		this.remainingSeconds = 0;
		this.totalSeconds = 0;
		this.statusText.textContent = "Listo";
		this.statusText.classList.remove("running", "finished");
		this.element.classList.remove("finished");
		this.dispatchUpdate();
	}

	tick() {
		if (this.remainingSeconds > 0) {
			this.remainingSeconds--;
			this.setDisplay(this.remainingSeconds);
			this.updateProgressBar();
			this.dispatchUpdate();
		} else {
			this.timeUp();
		}
	}

	private timeUp() {
		this.pause();
		this.playAlarm();
		this.statusText.textContent = "¡TIEMPO!";
		this.statusText.classList.add("finished");
		this.element.classList.add("finished");

		if ("Notification" in window && Notification.permission === "granted") {
			new Notification(`Temporizador Terminado de ${this.getName()}`);
		}
		this.dispatchUpdate();
	}

	private playAlarm() {
		if (!this.audioContext) return;

		const playTone = () => {
			try {
				const osc = this.audioContext!.createOscillator();
				const gain = this.audioContext!.createGain();

				osc.connect(gain);
				gain.connect(this.audioContext!.destination);

				osc.type = "square";
				osc.frequency.setValueAtTime(880, this.audioContext!.currentTime);
				osc.frequency.setValueAtTime(440, this.audioContext!.currentTime + 0.2);
				osc.frequency.setValueAtTime(880, this.audioContext!.currentTime + 0.4);

				gain.gain.setValueAtTime(0.3, this.audioContext!.currentTime);
				gain.gain.exponentialRampToValueAtTime(0.01, this.audioContext!.currentTime + 0.6);

				osc.start();
				osc.stop(this.audioContext!.currentTime + 0.6);
			} catch {
				console.warn("Could not play alarm tone");
			}
		};

		playTone();
		let count = 0;
		const alarmInterval = setInterval(() => {
			count++;
			if (count > 5) clearInterval(alarmInterval);
			playTone();
		}, 1000);
	}

	private updateUIState() {
		if (this.isRunning) {
			this.updateUIRunning();
		} else {
			this.updateUIPaused();
		}
		this.checkStartButton();
	}

	private updateUIRunning() {
		const btnText = this.element.querySelector(".btn-toggle .btn-text");
		const iconPlay = this.element.querySelector(".icon-play");
		const iconPause = this.element.querySelector(".icon-pause");

		iconPlay?.setAttribute("style", "display: none;");
		iconPause?.removeAttribute("style");
		if (btnText) btnText.textContent = "Pausar";

		this.element.classList.add("running");
		this.statusText.classList.add("running");
		this.statusText.textContent = "Corriendo";

		Object.values(this.inputs).forEach((i) => (i.disabled = true));
	}

	private updateUIPaused() {
		const btnText = this.element.querySelector(".btn-toggle .btn-text");
		const iconPlay = this.element.querySelector(".icon-play");
		const iconPause = this.element.querySelector(".icon-pause");

		iconPlay?.removeAttribute("style");
		iconPause?.setAttribute("style", "display: none;");
		if (btnText) btnText.textContent = "Iniciar";

		this.element.classList.remove("running");
		this.statusText.classList.remove("running");
		this.statusText.textContent =
			this.remainingSeconds > 0 && this.remainingSeconds < this.totalSeconds
				? "Pausado"
				: "Listo";

		Object.values(this.inputs).forEach((i) => (i.disabled = false));
	}

	private checkStartButton() {
		if (this.isRunning) {
			this.btnToggle.disabled = false;
			this.btnToggle.classList.remove("disabled");
			return;
		}

		const currentSeconds = this.getInputSeconds();
		if (currentSeconds > 0) {
			this.btnToggle.disabled = false;
			this.btnToggle.classList.remove("disabled");
		} else {
			this.btnToggle.disabled = true;
			this.btnToggle.classList.add("disabled");
		}
	}

	private updateProgressBar() {
		if (this.totalSeconds === 0) return;
		const progress = 1 - this.remainingSeconds / this.totalSeconds;
		const progressFill = this.element.querySelector(".progress-fill") as HTMLElement;
		if (progressFill) {
			progressFill.style.transform = `scaleX(${progress})`;
		}
	}

	private dispatchUpdate() {
		this.dispatchEvent(new CustomEvent("update", { detail: this }));
	}

	public getName(): string {
		return this.timerNameInput.value;
	}
}
