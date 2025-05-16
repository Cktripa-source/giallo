import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const currentScroll = window.scrollY;
      
      // Calculate scroll percentage
      const scrollPercentage = (currentScroll / totalScroll) * 100;
      setScrollProgress(scrollPercentage);
      
      // Show button after scrolling down 20%
      setShowButton(scrollPercentage > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-accent-600 to-accent-400 z-50"
        style={{ width: `${scrollProgress}%` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />
      
      <AnimatePresence>
        {showButton && (
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-accent-600 text-white flex items-center justify-center z-50"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)" }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollProgress;
  