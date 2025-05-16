import  { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Background from './Background';
import TransitionEffect from './TransitionEffect';
import ScrollProgress from './ScrollProgress';
import ChatButton from './chatbot/ChatButton';

const AppContent = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  // Simulated loading for demonstration purposes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-dark-950">
        <div className="flex flex-col items-center space-y-6">
          <div className="w-24 h-24 border-4 border-accent-600 rounded-full border-t-transparent animate-spin" />
          <h2 className="text-2xl font-medium text-accent-500">Loading...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <TransitionEffect />
      <Background />
      <ScrollProgress />
      <Navbar />
      
      <main className="flex-grow relative z-0">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      
      <Footer />
      <ChatButton />
    </div>
  );
};

export default AppContent;
  