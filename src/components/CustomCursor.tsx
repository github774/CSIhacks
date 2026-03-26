import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let points: { x: number; y: number; age: number; colorIndex: number }[] = [];
    let mouseX = -100;
    let mouseY = -100;
    let frameObj = 0;

    const colors = [
      'rgba(255, 255, 255, ', 
      'rgba(20, 20, 25, ',   
      'rgba(244, 63, 94, ',  
      'rgba(225, 29, 72, ',  
    ];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      // Offset to trail from the back of the 24x24 cursor
      const offsetX = 12;
      const offsetY = 12;

      if (mouseX !== -100 && mouseY !== -100) {
        const dx = (e.clientX + offsetX) - mouseX;
        const dy = (e.clientY + offsetY) - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const steps = Math.max(1, Math.floor(dist / 20)); 
        
        for (let i = 1; i <= steps; i++) {
          points.push({
            x: mouseX + (dx * i) / steps,
            y: mouseY + (dy * i) / steps,
            age: 0,
            colorIndex: Math.floor(Math.random() * colors.length)
          });
        }
      } else {
        points.push({ x: e.clientX + offsetX, y: e.clientY + offsetY, age: 0, colorIndex: Math.floor(Math.random() * colors.length) });
      }

      mouseX = e.clientX + offsetX;
      mouseY = e.clientY + offsetY;
    };
    
    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameObj++;
      
      points.forEach(p => p.age += 1);
      const maxAge = 35;
      points = points.filter(p => p.age < maxAge);

      // Particle trail only — cursor is handled natively via CSS
      if (points.length > 0) {
        points.forEach((p) => {
          const intensity = 1 - (p.age / maxAge);
          
          ctx.save();
          ctx.translate(p.x, p.y + (p.age * 0.5));
          ctx.rotate((p.age * 5 + frameObj * 2) * Math.PI / 180);
          
          const size = Math.floor(12 * intensity);
          
          ctx.fillStyle = colors[p.colorIndex] + intensity + ')';
          ctx.fillRect(-size/2, -size/6, size, size/3);
          ctx.fillRect(-size/6, -size/2, size/3, size);
          
          ctx.restore();
        });
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[9999] hidden md:block"
    />
  );
}
