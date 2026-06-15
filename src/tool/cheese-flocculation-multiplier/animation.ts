import type { State } from './helpers';

export interface Micelle {
  element: SVGCircleElement;
  angle: number;
  baseRadius: number;
  currentRadius: number;
  speed: number;
  seed: number;
}

export class MicelleAnimationManager {
  private micelles: Micelle[] = [];
  private container: SVGElement;

  constructor(container: SVGElement) {
    this.container = container;
  }

  init(count: number) {
    this.container.innerHTML = '';
    this.micelles.length = 0;
    for (let i = 0; i < count; i++) {
      const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      const angle = (i / count) * Math.PI * 2 + Math.random() * 0.2;
      const baseRadius = 25 + Math.random() * 50;
      circle.setAttribute('r', (2 + Math.random() * 3).toFixed(1));
      circle.setAttribute('fill', '#f59e0b');
      circle.setAttribute('opacity', (0.3 + Math.random() * 0.5).toFixed(2));
      this.container.appendChild(circle);
      this.micelles.push({
        element: circle,
        angle,
        baseRadius,
        currentRadius: baseRadius,
        speed: 0.02 + Math.random() * 0.03,
        seed: Math.random() * 100
      });
    }
  }

  private updateSingleMicelle(m: Micelle, idx: number, now: number, state: State) {
    let speedFactor = 1.0;
    let targetRad = m.baseRadius;
    if (state.phase === 'phase1') {
      speedFactor = 3.5;
      targetRad = m.baseRadius + Math.sin(now * 0.005 + m.seed) * 8;
    } else if (state.phase === 'phase2') {
      const elapsed = Math.floor((now - state.startTime) / 1000);
      const ratio = Math.min(1.0, elapsed / (state.totalTime - state.flocculationTime || 1));
      speedFactor = Math.max(0.01, 3.5 * (1 - ratio));
      const clusterAngle = Math.floor(m.angle / (Math.PI / 4)) * (Math.PI / 4);
      m.angle = m.angle * 0.96 + clusterAngle * 0.04;
      const targetClusterRadius = 22 + Math.sin(idx * 2) * 6;
      targetRad = m.baseRadius * (1 - ratio) + targetClusterRadius * ratio;
    } else if (state.phase === 'complete') {
      speedFactor = 0.0;
      const clusterAngle = Math.floor(m.angle / (Math.PI / 4)) * (Math.PI / 4);
      m.angle = clusterAngle;
      targetRad = 22 + Math.sin(idx * 2) * 6;
    } else {
      speedFactor = 0.5;
      targetRad = m.baseRadius + Math.sin(now * 0.001 + m.seed) * 3;
    }
    m.angle += m.speed * speedFactor;
    m.currentRadius = m.currentRadius * 0.95 + targetRad * 0.05;
    const x = 100 + Math.cos(m.angle) * m.currentRadius;
    const y = 100 + Math.sin(m.angle) * m.currentRadius;
    m.element.setAttribute('cx', x.toFixed(1));
    m.element.setAttribute('cy', y.toFixed(1));
  }

  update(state: State) {
    const now = Date.now();
    this.micelles.forEach((m, idx) => {
      this.updateSingleMicelle(m, idx, now, state);
    });
  }
}
