import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
  const [ref, isVisible] = useScrollReveal({ rootMargin: '0px 0px 50px 0px' });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={ref} className="py-12 bg-white border-t border-purple-200 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="fas fa-rocket text-white"></i>
              </div>
              <span className="text-xl font-bold text-purple-700">Beyond Syllabus</span>
            </div>
            <p className="text-purple-600">
              Empowering students to bridge the gap between academics and technology.
            </p>
          </div>
          
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <h4 className="text-lg font-semibold mb-4 text-purple-700">Quick Links</h4>
            <ul className="space-y-2 text-purple-600">
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-purple-500 transition"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('why-attend')} 
                  className="hover:text-purple-500 transition"
                >
                  Why Attend
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('highlights')} 
                  className="hover:text-purple-500 transition"
                >
                  Highlights
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('sponsors')} 
                  className="hover:text-purple-500 transition"
                >
                  Sponsors
                </button>
              </li>
            </ul>
          </div>
          
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            <h4 className="text-lg font-semibold mb-4 text-purple-700">Contact</h4>
            <ul className="space-y-2 text-purple-600">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                info@beyondsyllabus.com
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone mr-2"></i>
                +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                Virtual Event
              </li>
            </ul>
          </div>
          
          <div className={`transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '700ms' }}>
            <h4 className="text-lg font-semibold mb-4 text-purple-700">Follow Us</h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition hover:-translate-y-1"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-white"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition hover:-translate-y-1"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram text-white"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-500 transition hover:-translate-y-1"
                aria-label="Discord"
              >
                <i className="fab fa-discord text-white"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className={`border-t border-purple-200 mt-8 pt-8 text-center text-purple-600 transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '900ms' }}>
          <p>
            &copy; 2026 Beyond the Syllabus. All rights reserved. | 
            <a href="#" className="hover:text-purple-500 transition ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-purple-500 transition ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
