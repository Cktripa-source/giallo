import  { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 glass-effect py-10 mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Muvunnyi Giallo</h3>
            <p className="text-white/70 mb-4">
              Professional land surveyor providing precision mapping and geospatial services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-accent-500 transition-colors duration-300">
                <Github size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-accent-500 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-accent-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-white/70 hover:text-accent-500 transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {['Topographic Surveys', 'Boundary Surveys', 'Construction Surveys', 'Drone Aerial Surveys', 'GIS Mapping'].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services"
                    className="text-white/70 hover:text-accent-500 transition-colors duration-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-accent-500 mt-1 flex-shrink-0" />
                <span className="text-white/70">Rwanda-West-Rubavu-Rubavu-Karukogo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-accent-500 flex-shrink-0" />
                <span className="text-white/70">(+250) 79xxxxxxxxx</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-accent-500 flex-shrink-0" />
                <span className="text-white/70">giallomuvunnyi@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Muvunnyi Giallo. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li>
                <a href="#" className="text-white/60 hover:text-accent-500 text-sm transition-colors duration-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent-500 text-sm transition-colors duration-300">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-accent-500 text-sm transition-colors duration-300">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  