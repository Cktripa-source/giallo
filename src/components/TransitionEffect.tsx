import  { motion } from 'framer-motion';

interface TransitionEffectProps {
  background?: string;
}

const TransitionEffect = ({ background = 'bg-accent-600' }: TransitionEffectProps) => {
  return (
    <>
      <motion.div 
        className={`fixed top-0 bottom-0 right-full w-screen h-screen z-50 ${background}`}
        initial={{ x: '0%', width: '100%' }}
        animate={{ x: '100%', width: '0%' }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
      />
      
      <motion.div 
        className={`fixed top-0 bottom-0 right-full w-screen h-screen z-40 bg-dark-800`}
        initial={{ x: '0%', width: '100%' }}
        animate={{ x: '100%', width: '0%' }}
        transition={{ delay: 0.2, duration: 0.8, ease: 'easeInOut' }}
      />
      
      <motion.div 
        className={`fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-dark-900`}
        initial={{ x: '0%', width: '100%' }}
        animate={{ x: '100%', width: '0%' }}
        transition={{ delay: 0.4, duration: 0.8, ease: 'easeInOut' }}
      />
    </>
  );
};

export default TransitionEffect;
  