import { useRef, useEffect } from 'react';

const BackgroundEffects = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const dots = [];
    const cols = 25;
    const rows = 15;
    const spacingX = canvas.width / cols;
    const spacingY = canvas.height / rows;

    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        dots.push({
          x: i * spacingX,
          y: j * spacingY,
          size: Math.random() * 1.2 + 0.3,
          opacity: Math.random() * 0.12 + 0.03,
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.005 + 0.002,
        });
      }
    }

    let frame;
    let time = 0;
    let mouse = { x: -9999, y: -9999 };

    const handleMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouse);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cx = canvas.width / 2;
      const cy = canvas.height / 3;
      const radGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, Math.max(canvas.width, canvas.height) * 0.65);
      radGrad.addColorStop(0, 'rgba(15, 15, 20, 0.7)');
      radGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = radGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const cellW = canvas.width / 50;
      const cellH = canvas.height / 30;
      ctx.strokeStyle = 'rgba(255,255,255,0.018)';
      ctx.lineWidth = 0.5;
      for (let x = 0; x <= canvas.width; x += cellW) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y <= canvas.height; y += cellH) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      time += 0.02;
      dots.forEach(dot => {
        const pulse = Math.sin(time * dot.speed * 60 + dot.phase) * 0.5 + 0.5;
        const dist = Math.sqrt((dot.x - mouse.x) ** 2 + (dot.y - mouse.y) ** 2);
        const mouseInfluence = Math.max(0, 1 - dist / 180) * 0.06;
        const alpha = dot.opacity * (0.5 + pulse * 0.5) + mouseInfluence;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-[-1] pointer-events-none"
    />
  );
};

export default BackgroundEffects;
