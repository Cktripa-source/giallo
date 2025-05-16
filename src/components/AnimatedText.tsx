import  { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
  delay?: number;
}

const AnimatedText = ({ text, className = '', once = true, delay = 0 }: AnimatedTextProps) => {
  const { ref, inView } = useInView({
    triggerOnce: once,
    threshold: 0.1,
  });

  const wordVariants = {
    hidden: {},
    visible: {},
  };

  const letterVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const words = text.split(' ');

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      aria-label={text}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={`word-${wordIndex}`}
          className="inline-block whitespace-nowrap"
          variants={wordVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          transition={{
            delayChildren: delay + wordIndex * 0.025,
            staggerChildren: 0.03,
          }}
        >
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span
              key={`letter-${wordIndex}-${letterIndex}`}
              className="inline-block"
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
          {wordIndex !== words.length - 1 && '\u00A0'}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default AnimatedText;
  