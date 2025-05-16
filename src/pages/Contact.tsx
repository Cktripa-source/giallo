import  { useState } from 'react';
import { motion } from 'framer-motion';
import ParallaxBanner from '../components/ParallaxBanner';
import FloatingShapes from '../components/FloatingShapes';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import ServiceImage2 from '../assets/Survey-Picture-2.jpg'
import { TypeAnimation } from 'react-type-animation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      }, 3000);
    }, 1500);
  };

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
                  'Contact Me', 1500,
                  'Let\'s Connect', 1500,
                  'Get in Touch', 1500,
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
            Get in touch to discuss your surveying needs
          </motion.p>
        </div>
      </ParallaxBanner>
      
      {/* Contact Section */}
      <section className="py-20 relative overflow-hidden">
        <FloatingShapes count={6} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Get In Touch</h2>
              <p className="text-white/70 mb-8">
                Have questions about my services or want to discuss your project? Feel free to reach out through any of the contact methods below or by filling out the contact form.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-600/20 flex items-center justify-center text-accent-500 flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Email</h3>
                    <a href="mailto:contact@muvunnyigiallo.com" className="text-white/70 hover:text-accent-400 transition-colors duration-300">
                     giallomuvunnyi@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-600/20 flex items-center justify-center text-accent-500 flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Phone</h3>
                    <a href="tel:+25079xxxxxxxxx" className="text-white/70 hover:text-accent-400 transition-colors duration-300">
                      (+250) 79xxxxxxxxx
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-600/20 flex items-center justify-center text-accent-500 flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Office</h3>
                    <p className="text-white/70">
                     Coming Soon ....
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-accent-600/20 flex items-center justify-center text-accent-500 flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white mb-1">Office Hours</h3>
                    <p className="text-white/70">
                      Coming Soon ...
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="glass-effect-light p-6 rounded-lg">
                <h3 className="text-lg font-medium text-white mb-4">Follow Me</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-accent-600/20 flex items-center justify-center text-accent-500 hover:bg-accent-600/40 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-accent-600/20 flex items-center justify-center text-accent-500 hover:bg-accent-600/40 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-accent-600/20 flex items-center justify-center text-accent-500 hover:bg-accent-600/40 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-accent-600/20 flex items-center justify-center text-accent-500 hover:bg-accent-600/40 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
            
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="glass-effect p-8 rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-white">Send a Message</h2>
                
                {submitted ? (
                  <motion.div
                    className="bg-accent-600/20 border border-accent-500/30 text-accent-400 rounded-lg p-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}  
                  >
                    <motion.div 
                      className="w-16 h-16 mx-auto rounded-full bg-accent-600/30 flex items-center justify-center mb-4"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Check size={32} className="text-accent-500" />
                    </motion.div>
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-white/70 mb-2">Your Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          className="w-full bg-dark-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-transparent"
                          placeholder="eg:giallo muvunnyi"
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-white/70 mb-2">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          className="w-full bg-dark-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-transparent"
                          placeholder="eg: giallomuvunnyi@gmail.com"
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-white/70 mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="w-full bg-dark-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-transparent"
                          placeholder="eg: (+250) 79xxxxxxxxx"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-white/70 mb-2">Subject *</label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          className="w-full bg-dark-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-transparent"
                          value={formData.subject}
                          onChange={handleChange}
                        >
                          <option value="" disabled>Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Project Quote">Project Quote</option>
                          <option value="Service Information">Service Information</option>
                          <option value="Partnership Opportunity">Partnership Opportunity</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-white/70 mb-2">Your Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        className="w-full bg-dark-800/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-accent-500/50 focus:border-transparent"
                        placeholder="Tell me about your project or inquiry..."
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    
                    <motion.button
                      type="submit"
                      className="w-full bg-accent-600 hover:bg-accent-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send size={18} className="ml-2" />
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="glass-effect-light overflow-hidden rounded-lg h-[400px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.6829680914356!2d-122.25988442392004!3d37.87215597205247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80857c25f9d20d69%3A0xee46dd27b05f6c01!2sUniversity%20of%20California%2C%20Berkeley!5e0!3m2!1sen!2sus!4v1683922349113!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-20 glass-effect">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Frequently Asked Questions
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                question: "What areas do you serve?",
                answer: "I primarily serve the San Francisco Bay Area, including Berkeley, Oakland, San Francisco, and surrounding counties. For larger projects, I'm available to travel throughout California and neighboring states."
              },
              {
                question: "How quickly can you start a new project?",
                answer: "Typically, I can begin new projects within 1-2 weeks of project approval. For urgent matters, I offer expedited services when my schedule permits."
              },
              {
                question: "What information do you need for a project quote?",
                answer: "To provide an accurate quote, I'll need details about the project location, type of survey required, timeframe, and any specific deliverables you need. The more information you can provide, the more precise the estimate will be."
              },
              {
                question: "Do you provide services for residential properties?",
                answer: "Yes, I offer surveying services for residential properties, including boundary surveys, topographic surveys, and construction staking for home improvements or additions."
              },
              {
                question: "How long does a typical surveying project take?",
                answer: "Project timelines vary based on complexity, size, and deliverable requirements. A standard boundary survey might take 1-2 weeks, while more complex projects could require several weeks to complete."
              },
              {
                question: "What formats do you provide for deliverables?",
                answer: "I provide deliverables in various formats including AutoCAD (.dwg), PDF, GIS shapefiles, and other industry-standard formats. Custom formats can be accommodated upon request."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="glass-effect-light p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
