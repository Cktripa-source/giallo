import  { motion } from 'framer-motion';
import ParallaxBanner from '../components/ParallaxBanner';
import FloatingShapes from '../components/FloatingShapes';
import { education, experience, skills } from '../data';
import Image from '../assets/491997742_1030601815834939_7107904779397755225_n.jpg'
import Image2 from '../assets/491997742_1030601815834939_7107904779397755225_n-removebg-preview.png'
import { TypeAnimation } from 'react-type-animation';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <ParallaxBanner 
        imageUrl={Image}
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
                  'About Me', 1500,
                  'Professional Background', 1500,
                  'Expertise & Qualifications', 1500,
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
            Professional background, expertise, and qualifications
          </motion.p>
        </div>
      </ParallaxBanner>
      
      {/* Biography Section */}
      <section className="py-20 relative overflow-hidden">
        <FloatingShapes count={6} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img 
                  src={Image2} 
                  alt="Muvunnyi Giallo" 
                  className="rounded-lg shadow-xl w-full"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-500/20 rounded-lg blur-3xl -z-10"></div>
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-accent-700/20 rounded-lg blur-3xl -z-10"></div>
              </div>
            </motion.div>
            
            <div>
              <motion.h2 
                className="text-3xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Muvunnyi Giallo
              </motion.h2>
              
              <motion.h3
                className="text-xl text-accent-500 mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Professional Land Surveyor
              </motion.h3>
              
              <motion.div 
                className="space-y-4 text-white/80"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <p>
                  With over 2 years of experience in land surveying, I have dedicated my career to providing precise geospatial data and comprehensive surveying solutions for projects of all scales and complexities.
                </p>
                
                <p>
                  After graduating with honors from the Colorado School of Mines and earning my Master's degree from UC Berkeley, I've applied my technical knowledge to a wide range of projects, from urban development to environmental conservation initiatives.
                </p>
                
                <p>
                  My approach combines traditional surveying fundamentals with cutting-edge technology, including UAV mapping, 3D laser scanning, and advanced GPS systems. This integration allows me to deliver accurate and comprehensive surveying data that forms the foundation for successful planning and development.
                </p>
                
                <p>
                  I'm passionate about precision and committed to exceeding client expectations through meticulous attention to detail and innovative problem-solving. When I'm not in the field or analyzing data, I enjoy hiking, landscape photography, and volunteering for community mapping projects.
                </p>
              </motion.div>
              
              <motion.div 
                className="mt-8 flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="glass-effect-light p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-accent-500">2+</h4>
                  <p className="text-sm text-white/70">Years Experience</p>
                </div>
                
                <div className="glass-effect-light p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-accent-500">10+</h4>
                  <p className="text-sm text-white/70">Projects Completed</p>
                </div>
                
                <div className="glass-effect-light p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-accent-500">95%</h4>
                  <p className="text-sm text-white/70">Client Satisfaction</p>
                </div>
                
                <div className="glass-effect-light p-4 rounded-lg text-center">
                  <h4 className="text-2xl font-bold text-accent-500">4</h4>
                  <p className="text-sm text-white/70">Professional Certifications</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-20 glass-effect">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Education & Certifications
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {education.map((item, index) => (
              <motion.div 
                key={item.id}
                className="mb-10 relative pl-8 border-l-2 border-accent-500/30"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-accent-500" />
                <div className="glass-effect-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-1">{item.degree}</h3>
                  <div className="flex justify-between flex-wrap mb-3">
                    <p className="text-accent-400">{item.institution}</p>
                    <p className="text-white/50">{item.duration}</p>
                  </div>
                  <p className="text-white/70">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 relative">
        <FloatingShapes count={4} />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Professional Experience
          </motion.h2>
          
          <div className="max-w-3xl mx-auto">
            {experience.map((item, index) => (
              <motion.div 
                key={item.id}
                className="mb-10 relative pl-8 border-l-2 border-accent-500/30"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="absolute left-[-8px] top-0 w-3 h-3 rounded-full bg-accent-500" />
                <div className="glass-effect-light p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-white mb-1">{item.position}</h3>
                  <div className="flex justify-between flex-wrap mb-3">
                    <p className="text-accent-400">{item.company}</p>
                    <p className="text-white/50">{item.duration}</p>
                  </div>
                  <p className="text-white/70 mb-4">{item.description}</p>
                  
                  {item.responsibilities && (
                    <ul className="space-y-2">
                      {item.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-accent-500 mt-1">•</span>
                          <span className="text-white/70">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-20 glass-effect">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Skills & Expertise
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.entries(
              skills.reduce((acc: Record<string, typeof skills>, skill) => {
                if (!acc[skill.category]) {
                  acc[skill.category] = [];
                }
                acc[skill.category].push(skill);
                return acc;
              }, {})
            ).map(([category, categorySkills], categoryIndex) => (
              <motion.div 
                key={category}
                className="glass-effect-light p-6 rounded-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-accent-500 mb-6">{category}</h3>
                
                <div className="space-y-5">
                  {(categorySkills as typeof skills).map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-white">{skill.name}</span>
                        <span className="text-white/50">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-accent-500 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 + skillIndex * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
