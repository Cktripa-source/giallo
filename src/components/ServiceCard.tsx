import  { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse movement effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const rotateX = useSpring(0, { stiffness: 150, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 150, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate center position
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate mouse position relative to center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    // Update rotation values with limited range
    const maxRotation = 5; // degrees
    const rotationX = (mouseY / (rect.height / 2)) * -maxRotation;
    const rotationY = (mouseX / (rect.width / 2)) * maxRotation;
    
    rotateX.set(rotationX);
    rotateY.set(rotationY);
  };

  // Get icon component dynamically
  const IconComponent = (LucideIcons as Record<string, React.FC<any>>)[service.icon] || 
                       (LucideIcons as Record<string, React.FC<any>>)['HelpCircle'];

  // Card animation
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="glass-effect-light p-6 rounded-lg"
      style={{ 
        transformStyle: "preserve-3d",
        rotateX,
        rotateY,
        perspective: 1000
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
        rotateX.set(0);
        rotateY.set(0);
      }}
      variants={cardVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div 
        className={`transition-transform duration-300 transform ${isHovered ? 'scale-[1.02]' : 'scale-1'}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div 
          className="rounded-full p-3 mb-4 inline-flex items-center justify-center bg-accent-600/20 text-accent-500"
          style={{ transform: "translateZ(20px)" }}
        >
          <IconComponent size={28} />
        </div>
        
        <h3 
          className="text-xl font-bold mb-3 text-white group-hover:text-accent-400 transition-colors duration-300"
          style={{ transform: "translateZ(30px)" }}
        >
          {service.title}
        </h3>
        
        <p 
          className="text-white/70 mb-4"
          style={{ transform: "translateZ(20px)" }}
        >
          {service.description}
        </p>
        
        {service.features && (
          <ul className="space-y-2 mb-4">
            {service.features.map((feature, idx) => (
              <li 
                key={idx} 
                className="flex items-start gap-2"
                style={{ transform: "translateZ(20px)" }}
              >
                <span className="text-accent-500 mt-1">•</span>
                <span className="text-white/70">{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        <motion.div 
          className="mt-4 flex items-center text-accent-500 font-medium cursor-pointer"
          whileHover={{ x: 5 }}
          style={{ transform: "translateZ(30px)" }}
        >
          Learn More <ArrowRight size={16} className="ml-1" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
  