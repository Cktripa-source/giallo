import  { motion } from 'framer-motion';

interface SuggestionChipProps {
  text: string;
  onClick: () => void;
}

const SuggestionChip = ({ text, onClick }: SuggestionChipProps) => {
  return (
    <motion.button
      className="text-xs bg-dark-800/50 hover:bg-accent-600/20 text-white/80 hover:text-white py-1.5 px-3 rounded-full transition-colors"
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {text}
    </motion.button>
  );
};

export default SuggestionChip;
  