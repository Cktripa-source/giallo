import  { motion } from 'framer-motion';
import AnimatedText from '../components/AnimatedText';
import { TypeAnimation } from 'react-type-animation';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import TestimonialCard from '../components/TestimonialCard';
import ParallaxBanner from '../components/ParallaxBanner';
import FloatingShapes from '../components/FloatingShapes';
import { services, projects, testimonials } from '../data';
import { ArrowRight } from 'lucide-react';
import Image from '../assets/491997742_1030601815834939_7107904779397755225_n-removebg-preview.png';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <ParallaxBanner 
        imageUrl={Image}
        height="h-screen"
        opacity={0.7}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center h-full text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl md:text-2xl font-semibold mb-4 tracking-wide text-white/90 drop-shadow-lg">
              <span className="bg-gradient-to-r from-white to-red-500 via-[#a0522d] bg-clip-text text-transparent">
                <TypeAnimation
                  sequence={[
                    'Land Surveying Professional', 1500,
                    '', 500,
                    'Topography Expert', 1500,
                    '', 500,
                    'Geo-Spatial Mapper', 1500,
                    '', 500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-white via-red-500 to-[#a0522d] bg-clip-text text-transparent drop-shadow-2xl">
              <TypeAnimation
                sequence={[
                  'Muvunyi Giallo', 1500,
                  'Precision Mapping for Your Vision', 1500,
                  '', 500,
                  'Detailed Terrain Data', 1500,
                  '', 500,
                  'Reliable Surveying Results', 1500,
                  '', 500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-lg md:text-2xl text-white/80 mb-10 max-w-2xl mx-auto font-light drop-shadow">
              <AnimatedText 
                text="Expert land surveying services delivering accurate geospatial data for planning, development, and construction projects." 
                delay={0.4}
              />
            </p>
          </motion.div>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.a 
              href="#services" 
              className="px-8 py-4 bg-accent-600 hover:bg-accent-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center text-lg gap-2 group"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Explore Services</span>
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-8 py-4 bg-transparent border border-white/40 hover:border-white/80 text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center text-lg gap-2"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Get in Touch</span>
            </motion.a>
          </motion.div>
        </div>
      </ParallaxBanner>
      
      {/* Services Section */}
      <section id="services" className="py-20 relative overflow-hidden">
        <FloatingShapes count={8} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Professional Services
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Comprehensive land surveying solutions delivered with precision and expertise
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a
              href="/services"
              className="inline-flex items-center px-6 py-3 bg-accent-600/20 hover:bg-accent-600/30 text-accent-400 font-medium rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Services <ArrowRight size={18} className="ml-2" />
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* About Preview Section */}
      <section className="py-20 glass-effect overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img 
                src={Image} 
                alt="Muvunnyi Giallo - Land Surveying Professional" 
                className="rounded-lg w-full h-auto shadow-xl"
              />
            </motion.div>
            
            <div>
              <motion.span 
                className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-accent-600/20 text-accent-400"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                About Me
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Muvunyi Giallo
              </motion.h2>
              
              <motion.p 
                className="text-white/70 mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                With over 7 years of experience in land surveying, I specialize in delivering precise geospatial data and surveying solutions for projects of all scales. My expertise spans topographic surveys, boundary determinations, construction staking, and advanced 3D mapping.
              </motion.p>
              
              <motion.p 
                className="text-white/70 mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                I leverage cutting-edge technology including UAV mapping, 3D laser scanning, and advanced GPS systems to deliver accurate and comprehensive surveying data that forms the foundation for successful planning and development.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <a 
                  href="/about" 
                  className="inline-flex items-center px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-lg transition-colors duration-300"
                >
                  More About Me <ArrowRight size={18} className="ml-2" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Showcase */}
      <section id="projects" className="py-20 relative overflow-hidden">
        <FloatingShapes count={6} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Featured Projects
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Explore my recent surveying and mapping projects
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <motion.a
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-accent-600/20 hover:bg-accent-600/30 text-accent-400 font-medium rounded-lg transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects <ArrowRight size={18} className="ml-2" />
            </motion.a>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 glass-effect">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Client Testimonials
            </motion.h2>
            <motion.p 
              className="text-lg text-white/70 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              What clients say about my surveying services
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
            ))}
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
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to Start Your Project?</h3>
                <p className="text-white/70">Let's discuss how my surveying expertise can help you achieve precision results.</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a 
                  href="/contact" 
                  className="px-6 py-3 bg-accent-600 hover:bg-accent-700 text-white font-medium rounded-lg transition-colors duration-300 inline-flex items-center"
                >
                  Get in Touch <ArrowRight size={18} className="ml-2" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
