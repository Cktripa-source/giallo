import  { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Map } from 'lucide-react';
import LogoImg from '../assets/491997742_1030601815834939_7107904779397755225_n.jpg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const menuItems = ['Home', 'About', 'Services', 'Projects', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navbarClasses = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
    scrolled ? 'py-2 glass-effect' : 'py-4 bg-transparent'
  }`;

  const menuVariants = {
    closed: {
      opacity: 0,
      x: '-100%',
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <nav className={navbarClasses}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-xl font-semibold text-white"
          >
            <img src={LogoImg} alt="Logo" className="w-8 h-8 rounded-full object-cover border-2 border-accent-500" />
            <span>
              <span className="text-accent-500">M</span>uvunnyi
              <span className="text-accent-500">G</span>iallo
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className={`text-white/80 hover:text-accent-400 font-medium animated-underline transition-colors duration-300 ${
                  (location.pathname === '/' && item === 'Home') || 
                  (location.pathname === `/${item.toLowerCase()}` && item !== 'Home')
                    ? 'active-nav-link'
                    : ''
                }`}
              >
                {item}
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Toggle */}
          <motion.button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full left-0 right-0 h-screen bg-dark-900/95 backdrop-blur-lg md:hidden z-50"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {menuItems.map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: menuItems.indexOf(item) * 0.1 }}
                >
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={`text-2xl font-medium text-white hover:text-accent-500 transition-colors duration-300 ${
                      (location.pathname === '/' && item === 'Home') || 
                      (location.pathname === `/${item.toLowerCase()}` && item !== 'Home')
                        ? 'text-accent-500'
                        : ''
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
