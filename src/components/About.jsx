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
      {/* Decorative background elements - subtle for white theme */}
      <div className={`absolute top-0 right-0 w-96 h-96 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 transition-transform duration-[2000ms] ${isVisible ? 'translate-x-1/3 -translate-y-1/3' : 'translate-x-full -translate-y-full'}`}></div>
      <div className={`absolute bottom-0 left-0 w-80 h-80 bg-indigo-50 rounded-full mix-blend-multiply filter blur-3xl opacity-60 transition-transform duration-[2000ms] ${isVisible ? '-translate-x-1/3 translate-y-1/3' : '-translate-x-full translate-y-full'}`}></div>
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <div className="w-full max-w-4xl mt-6">
          
          {/* Badge */}
          <div className={`mb-8 transition-all duration-700 delay-100 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <span className="inline-block px-4 py-2 bg-purple-50 border border-purple-200 rounded-full text-sm font-semibold mb-4 text-purple-700 shadow-sm cursor-default hover:bg-purple-100 transition-colors duration-300">
              <i className="fas fa-info-circle mr-2 text-purple-500"></i>Discover Our Mission
            </span>
          </div>
          
          {/* Main Title */}
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-10 leading-tight transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} style={{ color: '#1a1a1a' }}>
            About <br/><span className="gradient-text tracking-tight">Beyond the Syllabus</span>
          </h2>
          
          {/* Centralized Mission Container with Enhanced Professional Animation */}
          <div className={`relative group transition-all duration-[1200ms] ease-out transform ${isVisible ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-16 opacity-0'}`}>
            {/* Background Glow Effect behind card */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 blur-3xl rounded-[3rem] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            
            <div className={`bg-white border border-purple-100 rounded-3xl p-8 md:p-14 shadow-[0_20px_60px_rgba(109,40,217,0.06)] hover:shadow-[0_40px_80px_rgba(109,40,217,0.1)] transition-all duration-500 hover:-translate-y-2`}>
              {/* Paragraph 1 */}
              <p className="text-xl md:text-3xl leading-snug text-black mb-10 font-extrabold text-center tracking-tight">
                Beyond the Syllabus 2026 is a <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600">flagship academic and tech convergence</span> initiative designed for undergraduate students. It strategically bridges the gap between traditional education and the fast-evolving global tech ecosystem.
              </p>
              
              <div className="flex items-center justify-center space-x-4 mb-10">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-200"></div>
                <div className="w-3 h-3 rounded-full border-2 border-purple-400 animate-pulse"></div>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-200"></div>
              </div>

              {/* Paragraph 2 */}
              <p className="text-lg md:text-2xl leading-relaxed text-black font-semibold text-center italic opacity-90 max-w-3xl mx-auto">
                Our mission is to equip students with high-impact Web3 and tech skills, enabling them to navigate innovation-driven industries while maintaining strong academic performance. The program is structured to develop future-ready graduates who are both academically grounded and technologically proficient.
              </p>
            </div>
          </div>
          
          {/* Feature Cards Group - Repositioned for flow */}
          <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center py-4">
            
            {/* Card 1 */}
            <div className={`bg-white rounded-2xl p-6 border border-purple-100 flex items-center text-left transition-all duration-[1200ms] delay-[700ms] hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group cursor-default flex-1 max-w-sm mx-auto w-full transform ${isVisible ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-20 -translate-x-20 opacity-0'}`}>
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white rounded-xl w-14 h-14 flex items-center justify-center text-2xl shrink-0 mr-5 shadow-md group-hover:scale-110 transition-transform duration-300">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">Academic Edge</h4>
                <p className="text-sm text-gray-500">Excelling in core studies</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className={`bg-white rounded-2xl p-6 border border-purple-100 flex items-center text-left transition-all duration-[1200ms] delay-[900ms] hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500/10 group cursor-default flex-1 max-w-sm mx-auto w-full transform ${isVisible ? 'translate-y-0 translate-x-0 opacity-100' : 'translate-y-20 translate-x-20 opacity-0'}`}>
              <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-xl w-14 h-14 flex items-center justify-center text-2xl shrink-0 mr-5 shadow-md group-hover:scale-110 transition-transform duration-300">
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
