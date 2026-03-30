import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Partnership = () => {
  const [ref, isVisible] = useScrollReveal();


  return (
    <section id="sponsors" ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 mx-auto max-w-4xl">
          <h2 className={`text-sm md:text-base font-bold uppercase tracking-widest mb-2 text-purple-500 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Partnership Opportunities
          </h2>
          <h3 className={`text-4xl md:text-5xl font-bold mb-4 text-purple-700 transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Become a <span className="gradient-text">Sponsor</span>
          </h3>
          <p className={`text-xl text-purple-600 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Position your brand at the forefront of innovation by partnering with Beyond the Syllabus 2026. Gain direct access to a vibrant community of undergraduates, tech enthusiasts, and emerging Web3 talents shaping the future.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className={`bg-white border border-purple-200 rounded-lg p-6 text-center mb-8 transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-2xl font-bold mb-4 text-purple-700">Why Sponsor Beyond the Syllabus 2026?</h3>
            <p className="text-purple-600 mb-6">
              Connect with 500+ bright undergraduate students, showcase your brand, and contribute to the next generation of tech leaders. Our event offers unparalleled access to emerging talent and innovative minds.
            </p>
            
            <div className={`mt-10 p-8 border border-purple-100 bg-purple-50 rounded-xl transition-all duration-700 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
              <h4 className="text-2xl font-bold mb-3 text-purple-700">Get Our Sponsorship Deck</h4>
              <p className="text-purple-600 mb-8 max-w-2xl mx-auto">
                Interested in sponsoring Beyond the Syllabus 2026? Reach out to us and we'll share our comprehensive sponsorship deck with all available packages and benefits.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                <a href="mailto:partnership@beyondsyllabus.com" className="flex items-center text-lg font-bold text-purple-700 hover:text-purple-500 transition-colors">
                  <i className="fas fa-envelope mr-3 text-2xl"></i>
                  partnership@beyondsyllabus.com
                </a>
                <span className="text-purple-400 font-medium hidden md:inline">or</span>
                <a href="#" className="flex items-center px-6 py-3 bg-[#0088cc] hover:bg-[#0077b5] text-white rounded-full font-bold transition-transform hover:-translate-y-1 shadow-md hover:shadow-lg">
                  <i className="fab fa-telegram-plane mr-2 text-xl"></i>
                  Message on Telegram
                </a>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default Partnership;
