import  { useState, useRef } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Mouse position for parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smooth movement
  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate normalized values -1 to 1
    const normalizedX = (e.clientX - centerX) / (rect.width / 2);
    const normalizedY = (e.clientY - centerY) / (rect.height / 2);
    
    // Apply to motion values with limit to prevent extreme movement
    mouseX.set(normalizedX * 15); // Control parallax intensity
    mouseY.set(normalizedY * 15);
  };

  const resetMousePosition = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative h-80 rounded-xl overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={resetMousePosition}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 h-full w-full"
        style={{ 
          backgroundImage: `url(${project.image})`,
          x,
          y,
          scale: isHovered ? 1.1 : 1,
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark-950 via-dark-950/70 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
      
      {/* Content */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">
        <div className="overflow-hidden">
          <motion.span 
            className="inline-block px-3 py-1 mb-3 text-xs font-medium rounded-full bg-accent-600/30 text-accent-400"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            viewport={{ once: true }}
          >
            {project.category}
          </motion.span>
        </div>
        
        <div className="overflow-hidden">
          <motion.h3 
            className="text-xl font-semibold text-white mb-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {project.title}
          </motion.h3>
        </div>
        
        <div className="overflow-hidden">
          <motion.p 
            className="text-white/70 text-sm line-clamp-2 mb-3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {project.description}
          </motion.p>
        </div>
        
        <div className="overflow-hidden">
          <motion.div 
            className="flex flex-wrap gap-2"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span 
                key={index} 
                className="text-xs px-2 py-1 rounded-md bg-dark-800/70 text-white/70"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs px-2 py-1 rounded-md bg-dark-800/70 text-white/70">
                +{project.technologies.length - 3} more
              </span>
            )}
          </motion.div>
        </div>
      </div>
      
      {/* Overlay for hover interaction */}
      <div className="absolute inset-0 cursor-pointer" />
    </motion.div>
  );
};

export default ProjectCard;
  