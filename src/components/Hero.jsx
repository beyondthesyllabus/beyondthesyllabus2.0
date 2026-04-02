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
  
  const fullText = "Beyond the Syllabus 2026 is an academic and tech-driven event exposing young minds to Web3 and tech skills, while guiding them to balance innovation with academic success.";
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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-[#0f081d]" style={{ backgroundColor: '#0f081d' }}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-20"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6 leading-tight reveal text-white" style={{ animationDelay: '0.2s' }}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">Beyond the</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-purple-400">Syllabus 2026</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto reveal leading-relaxed" style={{ animationDelay: '0.4s' }}>
            {renderStyledText(displayedText)}
            <span className="animate-pulse text-white">|</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16 reveal" style={{ animationDelay: '0.6s' }}>
            <button 
              ref={magneticButtonRef}
              onClick={onOpenRegister}
              className="gradient-button px-10 py-5 rounded-xl text-lg font-bold text-white shadow-2xl shadow-purple-600/20 hover:shadow-purple-600/40 transform transition-all active:scale-95"
            >
              <i className="fas fa-ticket-alt mr-2 text-white/80"></i>Register Now
            </button>
          </div>
          
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center reveal animate-stagger-1 p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-1">{counters.students}+</div>
              <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">Students</div>
            </div>
            <div className="text-center reveal animate-stagger-2 p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-1">{counters.speakers}+</div>
              <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">Speakers</div>
            </div>
            <div className="text-center reveal animate-stagger-3 p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-1">{counters.workshops}+</div>
              <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">Workshops</div>
            </div>
            <div className="text-center reveal animate-stagger-4 p-6 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm">
              <div className="text-3xl font-bold text-white mb-1">{counters.sponsors}+</div>
              <div className="text-xs uppercase tracking-widest text-white/70 font-semibold">Sponsors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
