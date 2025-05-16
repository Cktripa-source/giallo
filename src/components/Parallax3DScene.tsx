import  { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Parallax3DSceneProps {
  children: React.ReactNode;
  depth?: number;
}

const Parallax3DScene: React.FC<Parallax3DSceneProps> = ({ 
  children, 
  depth = 50 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const { scrollYProgress } = useScroll();
  
  const y = useTransform(scrollYProgress, [0, 1], [0, depth * 2]);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Normalize values between -1 and 1
      setMouseX((e.clientX - centerX) / (rect.width / 2));
      setMouseY((e.clientY - centerY) / (rect.height / 2));
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  const rotateX = -mouseY * 5; // Inverse Y for natural tilt
  const rotateY = mouseX * 5;
  
  return (
    <motion.div
      ref={containerRef}
      className="relative"
      style={{ 
        perspective: '1000px',
        y,
      }}
    >
      <motion.div
        className="relative"
        style={{ 
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        transition={{ type: "spring", damping: 20 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default Parallax3DScene;
  