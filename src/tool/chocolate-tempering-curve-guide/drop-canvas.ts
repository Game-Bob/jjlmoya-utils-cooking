let canvasEl: HTMLCanvasElement | null = null;
let currentStep = 1;
let currentWeight = 500;
let currentType = 'dark';
let animationFrameId = 0;
let frame = 0;

interface DrawContext {
  ctx: CanvasRenderingContext2D;
  cx: number;
  cy: number;
}

interface PhaseParams {
  baseColor: string;
  glossAlpha: number;
  isLiquid: boolean;
  crystalProgress: number;
  bloomColor?: string;
  hasBloom?: boolean;
}

const PARAMS_MAP: Record<string, Record<number, PhaseParams>> = {
  white: {
    1: { baseColor: '#ebdcb9', glossAlpha: 0.95, isLiquid: true, crystalProgress: 0 },
    2: { baseColor: '#dec9a0', glossAlpha: 0.5, isLiquid: false, crystalProgress: 0.5 },
    3: { baseColor: '#d0bb91', glossAlpha: 1.0, isLiquid: false, crystalProgress: 1.0 }
  },
  milk: {
    1: { baseColor: '#6a4631', glossAlpha: 0.9, isLiquid: true, crystalProgress: 0 },
    2: { baseColor: '#5c3d2a', glossAlpha: 0.4, isLiquid: false, crystalProgress: 0.5 },
    3: { baseColor: '#4b3020', glossAlpha: 1.0, isLiquid: false, crystalProgress: 1.0 }
  },
  dark: {
    1: { baseColor: '#3a1f13', glossAlpha: 0.9, isLiquid: true, crystalProgress: 0 },
    2: { baseColor: '#2f180d', glossAlpha: 0.4, isLiquid: false, crystalProgress: 0.5 },
    3: { baseColor: '#231007', glossAlpha: 1.0, isLiquid: false, crystalProgress: 1.0 }
  }
};

const BLOOM_MAP: Record<string, { baseColor: string; bloomColor: string; glossAlpha: number }> = {
  white: { baseColor: '#eee5d0', bloomColor: 'rgba(255, 255, 255, 0.35)', glossAlpha: 0.2 },
  milk: { baseColor: '#7a5a47', bloomColor: 'rgba(240, 230, 220, 0.25)', glossAlpha: 0.15 },
  dark: { baseColor: '#4a3325', bloomColor: 'rgba(235, 225, 215, 0.22)', glossAlpha: 0.15 }
};

export function initChocolateCanvas(canvas: HTMLCanvasElement) {
  canvasEl = canvas;
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  function tick() {
    frame++;
    draw();
    animationFrameId = requestAnimationFrame(tick);
  }
  
  tick();
}

export function setCanvasState(step: number, weight: number, type: string) {
  currentStep = step;
  currentWeight = weight;
  currentType = type;
}

function getThemeParams(type: string, step: number) {
  const typeKey = PARAMS_MAP[type] ? type : 'dark';
  const phase = PARAMS_MAP[typeKey][step];
  if (phase) {
    return {
      ...phase,
      bloomColor: '',
      hasBloom: false
    };
  }
  const bloom = BLOOM_MAP[typeKey];
  return {
    baseColor: bloom.baseColor,
    bloomColor: bloom.bloomColor,
    glossAlpha: bloom.glossAlpha,
    isLiquid: false,
    crystalProgress: 0,
    hasBloom: true
  };
}

function drawDropShape(
  drawCtx: DrawContext,
  wx: number,
  wy: number,
  color: string
) {
  const { ctx, cx, cy } = drawCtx;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(cx, cy - 60);
  ctx.bezierCurveTo(cx + 40 + wx, cy - 30, cx + 55, cy + 10 + wy, cx + 45, cy + 40);
  ctx.bezierCurveTo(cx + 35, cy + 60, cx - 35, cy + 60, cx - 45, cy + 40);
  ctx.bezierCurveTo(cx - 55, cy + 10 - wy, cx - 40 - wx, cy - 30, cx, cy - 60);
  ctx.closePath();
  ctx.fill();
}

function drawBloom(drawCtx: DrawContext, color: string) {
  const { ctx, cx, cy } = drawCtx;
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(cx, cy - 60);
  ctx.bezierCurveTo(cx + 40, cy - 30, cx + 55, cy + 10, cx + 45, cy + 40);
  ctx.bezierCurveTo(cx + 35, cy + 60, cx - 35, cy + 60, cx - 45, cy + 40);
  ctx.bezierCurveTo(cx - 55, cy + 10, cx - 40, cy - 30, cx, cy - 60);
  ctx.closePath();
  ctx.fill();
}

function drawCrystals(
  drawCtx: DrawContext,
  progress: number,
  ticks: number,
  type: string
) {
  if (progress <= 0) return;
  const { ctx, cx, cy } = drawCtx;
  ctx.save();
  const stroke = type === 'white' ? 'rgba(139, 90, 43, 0.2)' : `rgba(212, 175, 55, ${progress * 0.18})`;
  ctx.strokeStyle = stroke;
  ctx.lineWidth = 1.5;
  const size = 12;
  const drawHex = (hx: number, hy: number) => {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i + (ticks * 0.005);
      ctx.lineTo(hx + size * Math.cos(angle), hy + size * Math.sin(angle));
    }
    ctx.closePath();
    ctx.stroke();
  };
  drawHex(cx - 15, cy + 20);
  drawHex(cx + 20, cy - 10);
  drawHex(cx, cy + 55);
  ctx.restore();
}

function drawGloss(
  drawCtx: DrawContext,
  alpha: number,
  step: number,
  ticks: number
) {
  if (alpha <= 0.1) return;
  const { ctx, cx, cy } = drawCtx;
  ctx.save();
  const pulse = alpha + (step === 3 ? Math.sin(ticks * 0.04) * 0.05 : 0);
  ctx.globalAlpha = Math.max(0.1, Math.min(1.0, pulse));
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth = 4;
  ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.arc(cx - 15, cy + 10, 25, Math.PI, Math.PI * 1.5);
  ctx.stroke();
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(cx - 20, cy + 5, 12, Math.PI, Math.PI * 1.5);
  ctx.stroke();
  ctx.restore();
}

function drawLiquidBase(
  drawCtx: DrawContext,
  isLiquid: boolean,
  ticks: number,
  type: string
) {
  if (!isLiquid) return;
  const { ctx, cx, cy } = drawCtx;
  ctx.save();
  const pulse = 30 + Math.sin(ticks * 0.07) * 3;
  const fill = type === 'white' ? 'rgba(139, 90, 43, 0.08)' : 'rgba(255, 255, 255, 0.15)';
  ctx.fillStyle = fill;
  ctx.beginPath();
  ctx.ellipse(cx, cy + 45, pulse, 8, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function draw() {
  if (!canvasEl) return;
  const ctx = canvasEl.getContext('2d');
  if (!ctx) return;
  const w = canvasEl.width;
  const h = canvasEl.height;
  ctx.clearRect(0, 0, w, h);
  const cx = w / 2;
  const cy = h / 2 + 10;
  ctx.save();
  const scale = 0.65 + (Math.min(2000, Math.max(100, currentWeight)) / 2000) * 0.45;
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.translate(-cx, -cy);
  const p = getThemeParams(currentType, currentStep);
  const wx = p.isLiquid ? Math.sin(frame * 0.05) * 4 : 0;
  const wy = p.isLiquid ? Math.cos(frame * 0.06) * 3 : 0;
  const dCtx = { ctx, cx, cy };
  drawDropShape(dCtx, wx, wy, p.baseColor);
  if (p.hasBloom && p.bloomColor) drawBloom(dCtx, p.bloomColor);
  drawCrystals(dCtx, p.crystalProgress, frame, currentType);
  drawGloss(dCtx, p.glossAlpha, currentStep, frame);
  drawLiquidBase(dCtx, p.isLiquid, frame, currentType);
  ctx.restore();
}
