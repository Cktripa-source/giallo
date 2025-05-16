import  { motion } from 'framer-motion';

interface FloatingShapesProps {
  count?: number;
  className?: string;
}

const FloatingShapes = ({ count = 15, className = '' }: FloatingShapesProps) => {
  // Generate random shapes
  const shapes = Array.from({ length: count }).map((_, index) => {
    const size = Math.random() * 70 + 30; // Random size between 30 and 100
    const xPos = Math.random() * 100; // Random position 0-100%
    const yPos = Math.random() * 100; // Random position 0-100%
    const duration = Math.random() * 15 + 15; // Random duration between 15 and 30s
    const delay = Math.random() * 5; // Random delay between 0 and 5s
    
    const opacity = Math.random() * 0.07 + 0.03; // Random opacity between 0.03 and 0.1
    
    // Randomly choose shape type
    const shapeType = Math.floor(Math.random() * 3); // 0: circle, 1: square, 2: triangle
    
    return {
      id: index,
      size,
      xPos,
      yPos,
      duration,
      delay,
      opacity,
      shapeType,
    };
  });

  const renderShape = (shape: typeof shapes[0]) => {
    const baseClasses = `absolute opacity-${Math.round(shape.opacity * 100)} backdrop-blur-3xl z-0`;
    
    if (shape.shapeType === 0) {
      // Circle
      return (
        <motion.div
          key={shape.id}
          className={`rounded-full bg-accent-500/10 ${baseClasses}`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.xPos}%`,
            top: `${shape.yPos}%`,
          }}
          animate={{
            x: [0, 30, -30, 20, -20, 0],
            y: [0, -30, 30, -20, 20, 0],
            rotate: [0, 45, -45, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      );
    } else if (shape.shapeType === 1) {
      // Square/Rectangle
      return (
        <motion.div
          key={shape.id}
          className={`bg-accent-600/10 ${baseClasses}`}
          style={{
            width: shape.size,
            height: shape.size * 0.8,
            left: `${shape.xPos}%`,
            top: `${shape.yPos}%`,
          }}
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 40, -40, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      );
    } else {
      // Triangle (using clip-path)
      return (
        <motion.div
          key={shape.id}
          className={`bg-accent-700/10 ${baseClasses}`}
          style={{
            width: shape.size,
            height: shape.size,
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
            left: `${shape.xPos}%`,
            top: `${shape.yPos}%`,
          }}
          animate={{
            x: [0, 50, -50, 25, -25, 0],
            y: [0, -50, 50, 0],
            rotate: [0, 120, -120, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      );
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {shapes.map(renderShape)}
    </div>
  );
};

export default FloatingShapes;
  