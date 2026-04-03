import React, { useState } from 'react';

const Navigation = ({ isScrolled, onOpenRegister }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isMobileMenuOpen ? 'bg-transparent border-transparent' : 'bg-white/95 backdrop-blur-sm border-b border-purple-200'} ${isScrolled && !isMobileMenuOpen ? 'shadow-lg' : ''}`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center relative z-[60]">
            <div className="flex items-center space-x-2">
              <img src={isMobileMenuOpen ? "/images/white logo.png" : "/images/coloured logo.png"} alt="Beyond Syllabus Logo" className="h-14 w-auto object-contain transition-all duration-300" />
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-purple-700 hover:text-purple-500 transition">About</button>
              <button onClick={() => scrollToSection('why-attend')} className="text-purple-700 hover:text-purple-500 transition">Why Attend</button>
              <button onClick={() => scrollToSection('highlights')} className="text-purple-700 hover:text-purple-500 transition">Highlights</button>
              <button onClick={() => scrollToSection('sponsors')} className="text-purple-700 hover:text-purple-500 transition">Sponsors</button>
              <button onClick={() => scrollToSection('faq')} className="text-purple-700 hover:text-purple-500 transition">FAQ</button>
              <button onClick={onOpenRegister} className="gradient-button px-6 py-2 rounded-full text-white font-semibold">
                Register Now
              </button>
            </div>
            
            <button className={`md:hidden focus:outline-none transition-colors ${isMobileMenuOpen ? 'text-white' : 'text-purple-700'}`} onClick={toggleMobileMenu}>
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
        
      </nav>
      
      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-purple-900/95 backdrop-blur-md z-40 md:hidden transition-transform duration-300 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 px-6">
          <button onClick={() => scrollToSection('about')} className="text-3xl font-bold text-white hover:text-purple-300 transition-all transform hover:scale-110">About</button>
          <button onClick={() => scrollToSection('why-attend')} className="text-3xl font-bold text-white hover:text-purple-300 transition-all transform hover:scale-110">Why Attend</button>
          <button onClick={() => scrollToSection('highlights')} className="text-3xl font-bold text-white hover:text-purple-300 transition-all transform hover:scale-110">Highlights</button>
          <button onClick={() => scrollToSection('sponsors')} className="text-3xl font-bold text-white hover:text-purple-300 transition-all transform hover:scale-110">Sponsors</button>
          <button onClick={() => scrollToSection('faq')} className="text-3xl font-bold text-white hover:text-purple-300 transition-all transform hover:scale-110">FAQ</button>
          <button onClick={() => { toggleMobileMenu(); onOpenRegister(); }} className="bg-white text-purple-700 px-10 py-4 mt-8 rounded-full font-bold text-xl hover:bg-purple-100 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
            Register Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
