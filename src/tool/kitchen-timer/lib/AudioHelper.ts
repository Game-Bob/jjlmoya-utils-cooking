export function getAudioContext(): AudioContext | null {
	try {
		const audioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
		if (audioContextClass) {
			return new audioContextClass();
		}
	} catch {
		console.warn("AudioContext not available");
	}
	return null;
}

export function playBeep(audioContext: AudioContext, frequency: number = 800, duration: number = 0.1): void {
	const now = audioContext.currentTime;
	const osc = audioContext.createOscillator();
	const gain = audioContext.createGain();

	osc.connect(gain);
	gain.connect(audioContext.destination);
	osc.type = "sine";
	osc.frequency.value = frequency;
	gain.gain.setValueAtTime(0.3, now);
	gain.gain.exponentialRampToValueAtTime(0.01, now + duration);

	osc.start(now);
	osc.stop(now + duration);
}
