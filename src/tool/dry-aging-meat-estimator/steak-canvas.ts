export interface SteakColors {
  innerColor: string;
  fatColor: string;
  crustColor: string;
}

function getSteakColors(days: number): SteakColors {
  if (days > 35) {
    return {
      innerColor: '#5c0f0d',
      fatColor: '#d2c499',
      crustColor: '#1a0201',
    };
  }
  if (days > 15) {
    return {
      innerColor: '#8e1c19',
      fatColor: '#e5dcbe',
      crustColor: '#300807',
    };
  }
  return {
    innerColor: '#c62828',
    fatColor: '#f5f0e1',
    crustColor: '#4e1412',
  };
}

function drawCrust(ctx: CanvasRenderingContext2D, crustColor: string) {
  ctx.fillStyle = crustColor;
  ctx.beginPath();
  ctx.moveTo(0, -60);
  ctx.bezierCurveTo(60, -55, 75, 10, 60, 55);
  ctx.bezierCurveTo(45, 80, -10, 70, -30, 60);
  ctx.bezierCurveTo(-70, 45, -75, -20, -50, -45);
  ctx.bezierCurveTo(-35, -60, -15, -62, 0, -60);
  ctx.fill();
}

function drawFatCap(ctx: CanvasRenderingContext2D, fatColor: string, pellicleThickness: number) {
  ctx.fillStyle = fatColor;
  ctx.beginPath();
  ctx.moveTo(0, -60 + pellicleThickness);
  ctx.bezierCurveTo(60 - pellicleThickness, -55 + pellicleThickness, 75 - pellicleThickness, 10, 60 - pellicleThickness, 55 - pellicleThickness);
  ctx.lineTo(40, 40);
  ctx.bezierCurveTo(50, 0, 40, -40, 0, -45);
  ctx.closePath();
  ctx.fill();
}

function drawInnerMeat(ctx: CanvasRenderingContext2D, innerColor: string, pellicleThickness: number) {
  ctx.fillStyle = innerColor;
  ctx.beginPath();
  ctx.moveTo(0, -60 + pellicleThickness);
  ctx.bezierCurveTo(-15, -62 + pellicleThickness, -35, -60 + pellicleThickness, -50 + pellicleThickness, -45 + pellicleThickness);
  ctx.bezierCurveTo(-75 + pellicleThickness, -20, -70 + pellicleThickness, 45, -30 + pellicleThickness, 60 - pellicleThickness);
  ctx.bezierCurveTo(-10 + pellicleThickness, 70 - pellicleThickness, 30, 50, 40, 40);
  ctx.bezierCurveTo(40, -10, 20, -40, 0, -45);
  ctx.closePath();
  ctx.fill();
}

function drawMarbling(ctx: CanvasRenderingContext2D, fatColor: string) {
  ctx.strokeStyle = fatColor;
  ctx.globalAlpha = 0.65;
  ctx.lineWidth = 1.5;
  
  ctx.beginPath();
  ctx.moveTo(-30, -20);
  ctx.bezierCurveTo(-20, -25, -10, -10, -20, 10);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(-45, 10);
  ctx.bezierCurveTo(-35, 15, -30, 30, -35, 45);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(-15, -35);
  ctx.bezierCurveTo(-10, -25, -5, -30, 0, -20);
  ctx.stroke();
  
  ctx.globalAlpha = 1.0;
}

function drawBone(ctx: CanvasRenderingContext2D) {
  ctx.fillStyle = '#f8f5ee';
  ctx.strokeStyle = '#d7ceb8';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(-4, -45);
  ctx.bezierCurveTo(-4, -20, -20, -20, -25, -15);
  ctx.bezierCurveTo(-25, -10, -15, -10, -3, -13);
  ctx.lineTo(-3, 35);
  ctx.bezierCurveTo(-3, 40, 3, 40, 3, 35);
  ctx.lineTo(3, -13);
  ctx.bezierCurveTo(15, -10, 25, -10, 25, -15);
  ctx.bezierCurveTo(20, -20, 4, -20, 4, -45);
  ctx.closePath();
  ctx.fill();
  ctx.stroke();
}

export function drawMeatModel(canvas: HTMLCanvasElement, days: number) {
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  
  const shrinkFactor = Math.max(0.65, 1.0 - (days / 60) * 0.25);
  const rawPellicleThickness = (days / 60) * 8;
  const pellicleThickness = Math.max(1.5, rawPellicleThickness);
  
  const colors = getSteakColors(days);
  
  ctx.save();
  ctx.translate(centerX, centerY);
  ctx.scale(shrinkFactor, shrinkFactor);
  
  drawCrust(ctx, colors.crustColor);
  if (days > 0) {
    drawFatCap(ctx, colors.fatColor, pellicleThickness);
  }
  drawInnerMeat(ctx, colors.innerColor, pellicleThickness);
  drawMarbling(ctx, colors.fatColor);
  drawBone(ctx);
  
  ctx.restore();
}
