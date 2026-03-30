import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import WhyAttend from './components/WhyAttend';
import EventHighlights from './components/EventHighlights';
import TargetAudience from './components/TargetAudience';
import Partnership from './components/Partnership';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import RegisterModal from './components/RegisterModal';
import { initializeAnimations, addHoverEffects, initializeParallax } from './utils/AnimationInitializer';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initialize animations when component mounts
    const timer = setTimeout(() => {
      initializeAnimations();
      addHoverEffects();
      initializeParallax();
    }, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="gradient-bg relative">
      <RegisterModal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} />
      
      <Navigation isScrolled={isScrolled} onOpenRegister={() => setIsRegisterOpen(true)} />
      <Hero onOpenRegister={() => setIsRegisterOpen(true)} />
      <About />
      <div className="section-light">
        <WhyAttend />
      </div>
      <EventHighlights />
      <div className="section-light">
        <TargetAudience />
      </div>
      <Partnership />
      <div className="section-bw">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
