import React, { useEffect, useRef, useState } from 'react';
import { useScrollAnimations, useMagneticButton } from '../hooks/useScrollAnimations';

const Hero = ({ onOpenRegister }) => {
  const [counters, setCounters] = useState({
    students: 0,
    speakers: 0,
    workshops: 0,
    sponsors: 0
  });

  const statsRef = useRef(null);
  const magneticButtonRef = useMagneticButton();
  const { visibleElements } = useScrollAnimations();
  
  const fullText = "Beyond the Syllabus 2026 is an empowering academic and tech-driven event designed to expose young minds to diverse skills in Web2 and Web3, while guiding them on how to choose, learn, and effectively balance these opportunities with academic success.";
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const renderStyledText = (text) => {
    const parts = text.split(/(tech|Web2|Web3)/);
    return parts.map((part, index) => {
      if (part === 'tech' || part === 'Web2' || part === 'Web3') {
        return <span key={index} className="red-text">{part}</span>;
      }
      return part;
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    const targets = {
      students: 500,
      speakers: 20,
      workshops: 10,
      sponsors: 15
    };

    const duration = 2000;
    const steps = 60;
    const increment = {
      students: targets.students / steps,
      speakers: targets.speakers / steps,
      workshops: targets.workshops / steps,
      sponsors: targets.sponsors / steps
    };

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCounters({
        students: Math.min(Math.floor(increment.students * currentStep), targets.students),
        speakers: Math.min(Math.floor(increment.speakers * currentStep), targets.speakers),
        workshops: Math.min(Math.floor(increment.workshops * currentStep), targets.workshops),
        sponsors: Math.min(Math.floor(increment.sponsors * currentStep), targets.sponsors)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, duration / steps);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-white" style={{ backgroundColor: '#FFFFFF' }}>
      {/* Clean white background */}
      <div className="absolute inset-0 bg-white" style={{ backgroundColor: '#FFFFFF', zIndex: -1 }}></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 reveal">
            <span className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-sm font-semibold mb-4 text-purple-700 animate-slideInFromTop pulse-purple">
              <i className="fas fa-calendar-alt mr-2"></i>March 2026
            </span>
          </div>
          
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight reveal text-black" style={{ animationDelay: '0.2s' }}>
            <span>Beyond the</span>
            <span> Syllabus</span>
            <br />2026
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-600 mb-6 max-w-2xl mx-auto reveal" style={{ animationDelay: '0.4s' }}>
            {renderStyledText(displayedText)}
            <span className="animate-pulse text-purple-500">|</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 reveal" style={{ animationDelay: '0.6s' }}>
            <button 
              ref={magneticButtonRef}
              onClick={onOpenRegister}
              className="gradient-button px-8 py-4 rounded-full text-lg font-semibold text-white magnetic-button animate-glow"
            >
              <i className="fas fa-ticket-alt mr-2"></i>Register Now
            </button>
          </div>
          
          <div ref={statsRef} className="flex justify-center space-x-8 text-purple-500">
            <div className="text-center reveal animate-stagger-1">
              <div className="text-2xl font-bold text-purple-700 text-glow-purple pulse-purple">{counters.students}+</div>
              <div className="text-sm">Students</div>
            </div>
            <div className="text-center reveal animate-stagger-2">
              <div className="text-2xl font-bold text-purple-600 text-glow-purple pulse-purple">{counters.speakers}+</div>
              <div className="text-sm">Speakers</div>
            </div>
            <div className="text-center reveal animate-stagger-3">
              <div className="text-2xl font-bold text-purple-800 text-glow-purple pulse-purple">{counters.workshops}+</div>
              <div className="text-sm">Workshops</div>
            </div>
            <div className="text-center reveal animate-stagger-4">
              <div className="text-2xl font-bold text-purple-700 text-glow-purple pulse-purple">{counters.sponsors}+</div>
              <div className="text-sm">Sponsors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
