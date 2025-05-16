import  { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SurveyModel = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);
  
  // Simple 3D-like effect using canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    
    // Animation variables
    let angle = 0;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const maxRadius = Math.min(centerX, centerY) * 0.8;
    
    // Points to represent terrain
    const points: { x: number; y: number; z: number; color: string }[] = [];
    const gridSize = 15;
    const spacing = maxRadius * 2 / gridSize;
    
    // Generate a grid of points
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        const x = (i - gridSize / 2) * spacing;
        const y = (j - gridSize / 2) * spacing;
        
        // Create terrain-like elevation
        const distFromCenter = Math.sqrt(x * x + y * y) / maxRadius;
        const elevation = Math.sin(distFromCenter * Math.PI) * 50 + 
                         Math.sin(x / 20) * 10 + 
                         Math.cos(y / 15) * 10;
        
        // Color based on elevation
        let color;
        if (elevation > 40) {
          color = '#e5e7eb'; // Light gray for peaks
        } else if (elevation > 20) {
          color = '#64748b'; // Mid gray for hills
        } else if (elevation > 0) {
          color = '#475569'; // Dark gray for lowlands
        } else {
          color = '#38bdf8'; // Blue for water
        }
        
        points.push({ 
          x,
          y: elevation,
          z: y,
          color
        });
      }
    }
    
    // Draw function
    const draw = () => {
      if (!ctx || !canvas) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Rotate points
      angle += 0.005;
      const cosA = Math.cos(angle);
      const sinA = Math.sin(angle);
      
      // Sort points by depth for proper rendering
      const sortedPoints = [...points].sort((a, b) => {
        const aZ = a.z * cosA - a.x * sinA;
        const bZ = b.z * cosA - b.x * sinA;
        return bZ - aZ;
      });
      
      // Draw terrain points
      for (const point of sortedPoints) {
        // Apply rotation
        const rotX = point.x * cosA + point.z * sinA;
        const rotZ = point.z * cosA - point.x * sinA;
        
        // Project 3D to 2D
        const scale = 500 / (500 + rotZ);
        const x2d = rotX * scale + centerX;
        const y2d = point.y * scale + centerY;
        
        // Draw point
        ctx.beginPath();
        ctx.arc(x2d, y2d, 2 * scale, 0, Math.PI * 2);
        ctx.fillStyle = point.color;
        ctx.fill();
        
        // Draw connecting lines to nearest neighbors
        ctx.strokeStyle = point.color;
        ctx.lineWidth = 0.5 * scale;
        
        for (const otherPoint of points) {
          const dx = point.x - otherPoint.x;
          const dz = point.z - otherPoint.z;
          const dist = Math.sqrt(dx * dx + dz * dz);
          
          if (dist < spacing * 1.5) {
            const otherRotX = otherPoint.x * cosA + otherPoint.z * sinA;
            const otherRotZ = otherPoint.z * cosA - otherPoint.x * sinA;
            const otherScale = 500 / (500 + otherRotZ);
            const otherX2d = otherRotX * otherScale + centerX;
            const otherY2d = otherPoint.y * otherScale + centerY;
            
            ctx.beginPath();
            ctx.moveTo(x2d, y2d);
            ctx.lineTo(otherX2d, otherY2d);
            ctx.stroke();
          }
        }
      }
      
      // Draw grid underlay
      ctx.strokeStyle = '#1e293b';
      ctx.lineWidth = 0.5;
      const gridStep = 40;
      
      for (let i = -500; i <= 500; i += gridStep) {
        // Horizontal lines
        const startX1 = i * cosA + centerX;
        const startY1 = centerY + 200;
        const endX1 = i * cosA + centerX;
        const endY1 = centerY - 200;
        
        ctx.beginPath();
        ctx.moveTo(startX1, startY1);
        ctx.lineTo(endX1, endY1);
        ctx.stroke();
        
        // Vertical lines
        const startX2 = centerX - 200;
        const startY2 = i * cosA + centerY;
        const endX2 = centerX + 200;
        const endY2 = i * cosA + centerY;
        
        ctx.beginPath();
        ctx.moveTo(startX2, startY2);
        ctx.lineTo(endX2, endY2);
        ctx.stroke();
      }
      
      requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => {
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <motion.div
      ref={ref}
      className="relative w-full h-[350px] md:h-[400px] rounded-xl glass-effect-light overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.8 }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
      <div className="absolute top-4 left-4 rounded-md px-3 py-1.5 text-sm font-medium glass-effect text-primary-400">
        3D Terrain Model
      </div>
    </motion.div>
  );
};

export default SurveyModel;
  