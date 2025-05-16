import  { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParallaxBanner from '../components/ParallaxBanner';
import FloatingShapes from '../components/FloatingShapes';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';
import ServiceImage2 from '../assets/Survey-Picture-2.jpg'
import { TypeAnimation } from 'react-type-animation';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  // Extract unique categories from projects
  const categories = ['All', ...Array.from(new Set(projects.map(project => project.category)))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  return (
    <div>
      {/* Hero Section */}
      <ParallaxBanner 
        imageUrl={ServiceImage2}
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
                  'Projects Portfolio', 1500,
                  'Surveying Excellence', 1500,
                  'Mapping Achievements', 1500,
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
            Showcasing precision and expertise in land surveying
          </motion.p>
        </div>
      </ParallaxBanner>
      
      {/* Projects Section */}
      <section className="py-20 relative overflow-hidden">
        <FloatingShapes count={8} />
        <div className="container mx-auto px-4 relative z-10">
          {/* Filters */}
          <div className="mb-12 glass-effect-light p-6 rounded-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-lg font-medium">Filter by Category</h3>
              </div>
              
              <div className="flex flex-wrap items-center justify-center gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      filter === category 
                        ? 'bg-accent-600 text-white' 
                        : 'glass-effect-light hover:bg-dark-700'
                    }`}
                    onClick={() => setFilter(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Projects Grid with Animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
              
              {filteredProjects.length === 0 && (
                <div className="col-span-full text-center py-12">
                  <h3 className="text-xl text-white mb-2">No projects found</h3>
                  <p className="text-white/70">Try selecting a different category filter.</p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
      
      {/* Project Process */}
      <section className="py-20 glass-effect">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Project Workflow
          </motion.h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-accent-500/30 z-0" />
              
              {/* Timeline items */}
              {[
                {
                  title: "Project Assessment",
                  description: "Initial consultation to understand client needs, project scope, and requirements for accurate planning.",
                  icon: "MessageCircle"
                },
                {
                  title: "Research & Planning",
                  description: "Comprehensive research of existing records, and development of a detailed survey plan and methodology.",
                  icon: "Search"
                },
                {
                  title: "Field Survey",
                  description: "Execution of field work using advanced equipment to collect precise measurements and data.",
                  icon: "Map"
                },
                {
                  title: "Data Processing",
                  description: "Analysis and processing of collected data to create accurate spatial representations.",
                  icon: "Cpu"
                },
                {
                  title: "Quality Control",
                  description: "Rigorous verification procedures to ensure all deliverables meet the highest standards of accuracy.",
                  icon: "CheckCircle"
                },
                {
                  title: "Final Deliverables",
                  description: "Creation and delivery of final products including maps, reports, 3D models, and other documentation.",
                  icon: "FileText"
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  className={`relative mb-12 md:w-1/2 ${
                    index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8 md:text-right'
                  } pl-10 md:pl-0`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Circle on the timeline */}
                  <div className={`absolute left-[-5px] md:left-auto ${
                    index % 2 === 0 ? 'md:left-[-5px]' : 'md:right-[-5px]'
                  } top-0 w-10 h-10 rounded-full bg-accent-600 flex items-center justify-center z-10`}>
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  
                  <div className="glass-effect-light p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Project Statistics */}
      <section className="py-20 relative">
        <FloatingShapes count={4} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-16 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Project Success Metrics
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "96%", label: "Client Satisfaction", icon: "Heart" },
              { value: "10+", label: "Projects Completed", icon: "CheckCircle" },
              { value: "100+", label: "Acres Surveyed", icon: "Map" },
              { value: "3+", label: "Repeat Clients", icon: "Users" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-effect-light p-6 rounded-lg text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-3xl font-bold text-accent-500 mb-2">{stat.value}</h3>
                  <p className="text-white/70">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
