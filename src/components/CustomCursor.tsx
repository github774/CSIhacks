import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let points: { x: number; y: number; age: number }[] = [];
    let mouseX = -100;
    let mouseY = -100;
    let isHovering = false;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = 
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button');
        
      isHovering = !!isClickable;

      // Interpolate points for a dense, continuous trail even when moving fast
      if (mouseX !== -100 && mouseY !== -100) {
        const dx = e.clientX - mouseX;
        const dy = e.clientY - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const steps = Math.max(1, Math.floor(dist / 5)); // Add a point every 5px
        
        for (let i = 1; i <= steps; i++) {
          points.push({
            x: mouseX + (dx * i) / steps,
            y: mouseY + (dy * i) / steps,
            age: 0
          });
        }
      } else {
        points.push({ x: e.clientX, y: e.clientY, age: 0 });
      }

      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    window.addEventListener('mousemove', onMouseMove);

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Age points
      points.forEach(p => p.age += 1);
      // Remove old points (trail length)
      const maxAge = 20;
      points = points.filter(p => p.age < maxAge);

      // Draw electricity trail
      if (points.length > 1) {
        const drawStrand = (jitterMultiplier: number, lineWidth: number, color: string, glow: number) => {
          ctx.beginPath();
          ctx.moveTo(points[0].x, points[0].y);
          
          for (let i = 1; i < points.length; i++) {
            const p = points[i];
            const intensity = 1 - (p.age / maxAge);
            // The jitter creates the crackling electricity effect
            const jitter = 15 * intensity * jitterMultiplier; 
            const offsetX = (Math.random() - 0.5) * jitter;
            const offsetY = (Math.random() - 0.5) * jitter;
            
            ctx.lineTo(p.x + offsetX, p.y + offsetY);
          }
          ctx.shadowBlur = glow;
          ctx.shadowColor = '#0ea5e9'; // sky-500
          ctx.strokeStyle = color;
          ctx.lineWidth = lineWidth;
          ctx.lineCap = 'round';
          ctx.lineJoin = 'round';
          ctx.stroke();
        };

        // Outer thick glow strand
        drawStrand(1.2, 3, '#38bdf8', 20); // sky-400
        // Inner bright core strand
        drawStrand(0.5, 1.5, '#ffffff', 10);
        // Secondary wild crackle strand
        drawStrand(2.5, 1, '#7dd3fc', 15); // sky-300
      }

      // Draw cursor head
      if (mouseX !== -100 && mouseY !== -100) {
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#0ea5e9';
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(mouseX, mouseY, isHovering ? 6 : 3, 0, Math.PI * 2);
        ctx.fill();

        // Hover effect ring (jittery/electric)
        if (isHovering) {
          ctx.beginPath();
          ctx.arc(mouseX, mouseY, 15 + Math.random() * 3, 0, Math.PI * 2);
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
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
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[100] hidden md:block mix-blend-screen"
    />
  );
}
