import  { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxBannerProps {
  imageUrl: string;
  opacity?: number;
  height?: string;
  children?: React.ReactNode;
}

const ParallaxBanner = ({ 
  imageUrl, 
  opacity = 0.7, 
  height = "h-[500px]", 
  children 
}: ParallaxBannerProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityAnim = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);
  
  return (
    <motion.div 
      ref={ref}
      className={`relative ${height} overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ y, opacity: opacityAnim }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${imageUrl})` }}
        />
        <div 
          className="absolute inset-0" 
          style={{ 
            backgroundColor: `rgba(15, 23, 42, ${opacity})`, 
            backdropFilter: 'blur(1px)'
          }} 
        />
      </motion.div>
      
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        {children}
      </div>
    </motion.div>
  );
};

export default ParallaxBanner;
  