import  { useEffect, useRef, useState } from 'react';

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateDimensions = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      setDimensions({ width, height });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    const particles: {
      x: number;
      y: number;
      radius: number;
      color: string;
      vx: number;
      vy: number;
    }[] = [];
    
    const colors = [
      { r: 139, g: 92, b: 246 },  // accent-600
      { r: 167, g: 139, b: 250 }, // accent-500
      { r: 79, g: 70, b: 229 },   // accent-700
      { r: 124, g: 58, b: 237 },  // accent-600 variant
      { r: 196, g: 181, b: 253 }  // accent-300
    ];

    const createParticles = () => {
      particles.length = 0;
      const count = Math.floor(canvas.width * canvas.height / 8000);
      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: `rgba(${color.r}, ${color.g}, ${color.b}, ${Math.random() * 0.5 + 0.3})`,
          vx: Math.random() * 0.2 - 0.1,
          vy: Math.random() * 0.2 - 0.1
        });
      }
    };

    createParticles();
    window.addEventListener('resize', createParticles);

    let animationId: number;

    const connectParticles = (p1: any, p2: any, distance: number) => {
      const max = 200;
      if (distance < max) {
        const opacity = 1 - distance / max;
        ctx.beginPath();
        ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        for (let j = 0; j < particles.length; j++) {
          const other = particles[j];
          if (p === other) continue;
          const dx = p.x - other.x;
          const dy = p.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          connectParticles(p, other, dist);
        }
      });

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', updateDimensions);
      window.removeEventListener('resize', createParticles);
      cancelAnimationFrame(animationId);
    };
  }, []);

  const gradients = [
    { colors: "from-accent-600 to-accent-800", position: "top-0 left-0" },
    { colors: "from-accent-500 to-accent-400", position: "bottom-0 right-0" },
    { colors: "from-accent-700 to-accent-900", position: "bottom-0 left-0" },
    { colors: "from-accent-600 to-accent-500", position: "top-0 right-0" }
  ];

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden z-[-10]"
    >
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* Animated Blobs */}
      {gradients.map((gradient, i) => (
        <div
          key={i}
          className={`fixed ${gradient.position} md:w-60 md:h-60 w-36 h-36 rounded-full 
                    bg-gradient-to-r ${gradient.colors} 
                    opacity-20 blur-3xl animate-[blob-move_25s_ease-in-out_infinite] z-[-5]`}
          style={{
            animationDelay: `${i * 3}s`,
            animationDuration: `${20 + i * 5}s`,
          }}
        />
      ))}

      {/* Noise & Vignette */}
      <div className="fixed inset-0 bg-noise opacity-5" />
      <div className="fixed inset-0 shadow-vignette" />
    </div>
  );
};

export default Background;
  