import  { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard = ({ testimonial, index }: TestimonialCardProps) => {
  return (
    <motion.div
      className="glass-effect-light p-6 rounded-lg relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Quote 
        size={32} 
        className="absolute top-4 right-4 text-accent-500 opacity-20" 
      />
      
      <p className="text-white/80 mb-4 relative z-10">
        "{testimonial.content}"
      </p>
      
      <div className="flex items-center mt-4">
        {testimonial.avatar && (
          <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
            <img 
              src={testimonial.avatar} 
              alt={testimonial.name} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        
        <div>
          <h4 className="font-medium text-white">{testimonial.name}</h4>
          <p className="text-sm text-white/60">{testimonial.position}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
  