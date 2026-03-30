import React, { useEffect, useState, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className={`absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 transition-transform duration-[2000ms] ${isVisible ? 'translate-x-1/3 -translate-y-1/3' : 'translate-x-full -translate-y-full'}`}></div>
      <div className={`absolute bottom-0 left-0 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 transition-transform duration-[2000ms] ${isVisible ? '-translate-x-1/3 translate-y-1/3' : '-translate-x-full translate-y-full'}`}></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="w-full max-w-4xl mt-6">
          
          {/* Badge */}
          <div className={`mb-6 transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <span className="inline-block px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-sm font-semibold mb-4 text-purple-700 shadow-sm cursor-default hover:bg-purple-100 transition-colors duration-300">
              <i className="fas fa-info-circle mr-2 text-purple-500"></i>Discover Our Mission
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ color: '#1a1a1a' }}>
            About <br/><span className="gradient-text tracking-tight">Beyond the Syllabus</span>
          </h2>
          
          {/* Paragraph 1 */}
          <p className={`text-lg md:text-xl leading-relaxed text-purple-700 mb-6 font-medium transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            Beyond the Syllabus 2026 is a groundbreaking academic-tech convergence event designed exclusively for undergraduate students. We bridge the gap between traditional education and the rapidly evolving tech landscape.
          </p>
          
          {/* Paragraph 2 */}
          <p className={`text-lg md:text-xl leading-relaxed text-purple-700 mb-12 font-medium transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`}>
            Our mission is to empower students with cutting-edge technical skills, with a special focus on Web2 and Web3 technologies, blockchain, and decentralized systems, while ensuring academic excellence remains the foundation of their success.
          </p>
          
          {/* Feature Cards Group */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center overflow-hidden py-4">
            
            {/* Card 1: Slides in from the left and up */}
            <div className={`bg-white rounded-2xl p-5 border border-purple-100 flex items-center text-left transition-all duration-[1200ms] delay-[700ms] hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group cursor-default flex-1 max-w-xs mx-auto w-full transform ${isVisible ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-20 -translate-x-20 opacity-0'}`}>
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl w-14 h-14 flex items-center justify-center text-2xl shrink-0 mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Academic Edge</h4>
                <p className="text-sm text-gray-500">Excelling in core studies</p>
              </div>
            </div>
            
            {/* Card 2: Slides in from the right and up */}
            <div className={`bg-white rounded-2xl p-5 border border-purple-100 flex items-center text-left transition-all duration-[1200ms] delay-[900ms] hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group cursor-default flex-1 max-w-xs mx-auto w-full transform ${isVisible ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-20 translate-x-20 opacity-0'}`}>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl w-14 h-14 flex items-center justify-center text-2xl shrink-0 mr-4 shadow-md group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-laptop-code"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Tech Mastery</h4>
                <p className="text-sm text-gray-500">Learning Web3 & latest tech</p>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
