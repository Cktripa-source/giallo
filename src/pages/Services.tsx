import  { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ParallaxBanner from '../components/ParallaxBanner';
import FloatingShapes from '../components/FloatingShapes';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data';
import { ArrowRight } from 'lucide-react';
import ServiceImage1 from '../assets/Surveying-Instruments.jpg'
import ServiceImage2 from '../assets/Survey-Picture-2.jpg'
import { TypeAnimation } from 'react-type-animation';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  
  // Refs for section animations
  const [processRef, processInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const processSteps = [
    {
      title: "Initial Consultation",
      description: "We begin with a thorough discussion of your project requirements, goals, and constraints to determine the most appropriate surveying approach.",
      icon: "MessageCircle"
    },
    {
      title: "Data Collection Planning",
      description: "A detailed plan is developed outlining the survey methodology, equipment requirements, and timeline to ensure efficient field operations.",
      icon: "ClipboardList"
    },
    {
      title: "Field Survey Execution",
      description: "Trained surveyors use state-of-the-art equipment to collect precise measurements and spatial data according to the established plan.",
      icon: "Map"
    },
    {
      title: "Data Processing & Analysis",
      description: "Raw survey data is processed using specialized software to generate accurate coordinates, elevations, and other spatial information.",
      icon: "BarChart"
    },
    {
      title: "Deliverable Creation",
      description: "The processed data is transformed into client-specific deliverables such as survey drawings, 3D models, or geospatial databases.",
      icon: "FileText"
    },
    {
      title: "Quality Assurance",
      description: "All deliverables undergo rigorous quality checks to ensure they meet the highest standards of accuracy and completeness.",
      icon: "CheckCircle"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <ParallaxBanner 
        imageUrl={ServiceImage1}
        height="h-[400px]"
        opacity={0.7}
      >
        <div className="text-center max-w-3xl mx-auto">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-white via-red-500 to-[#a0522d] bg-clip-text text-transparent">
              <TypeAnimation
                sequence={[
                  'Our Services', 1500,
                  'Surveying Solutions', 1500,
                  'Expert Land Services', 1500,
                  '', 500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-white/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Comprehensive land surveying and geospatial solutions
          </motion.p>
        </div>
      </ParallaxBanner>
      
      {/* Services Overview */}
      <section className="py-20 relative overflow-hidden">
        <FloatingShapes count={8} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional Services
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section 
        ref={processRef} 
        className="py-20 glass-effect"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Our Process
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/70 max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A systematic approach to ensure accurate and reliable results
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="glass-effect-light p-6 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-accent-600/20 flex items-center justify-center text-accent-500 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Equipment Section */}
      <section className="py-20 relative overflow-hidden">
        <FloatingShapes count={6} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-4 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Advanced Equipment
          </motion.h2>
          
          <motion.p 
            className="text-lg text-white/70 max-w-2xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            State-of-the-art technology for precision measurements and data collection
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="glass-effect-light rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={ServiceImage1} 
                alt="GPS RTK System" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">GPS RTK Systems</h3>
                <p className="text-white/70 mb-4">High-precision global positioning system with real-time kinematic capabilities for centimeter-level accuracy.</p>
                <motion.div 
                  className="text-accent-500 font-medium flex items-center cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-effect-light rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={ServiceImage2} 
                alt="3D Laser Scanner" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">3D Laser Scanners</h3>
                <p className="text-white/70 mb-4">Advanced LiDAR technology capturing millions of data points to create detailed 3D point clouds of environments and structures.</p>
                <motion.div 
                  className="text-accent-500 font-medium flex items-center cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="glass-effect-light rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                alt="UAV Drone" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">UAV Mapping Drones</h3>
                <p className="text-white/70 mb-4">Professional-grade unmanned aerial vehicles equipped with high-resolution cameras for aerial mapping and photogrammetry.</p>
                <motion.div 
                  className="text-accent-500 font-medium flex items-center cursor-pointer"
                  whileHover={{ x: 5 }}
                >
                  Learn More <ArrowRight size={16} className="ml-1" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="glass-effect p-8 md:p-12 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Need a Specific Service?</h3>
                <p className="text-white/70">Contact me to discuss your project requirements and how I can help.</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center"
                >
                  Request a Quote <ArrowRight size={18} className="ml-2" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
