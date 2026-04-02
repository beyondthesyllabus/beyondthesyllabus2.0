import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const WhyAttend = () => {
  const [ref, isVisible] = useScrollReveal();

  const benefits = [
    {
      icon: 'fas fa-globe',
      title: 'Explore Tech & Web3',
      description: 'Get exposed to both traditional tech fields and emerging Web3 opportunities such as blockchain, crypto, and decentralized applications.'
    },
    {
      icon: 'fas fa-compass',
      title: 'Find Your Path',
      description: 'Gain clarity on how to choose the right path whether in tech, Web3, or a combination of both.'
    },
    {
      icon: 'fas fa-code',
      title: 'Learn Future-Ready Skills',
      description: 'Discover in-demand skills across software development, design, and Web3 ecosystems.'
    },
    {
      icon: 'fas fa-balance-scale',
      title: 'Balance Academics & Skill Growth',
      description: 'Learn practical ways to combine academic excellence with building relevant tech and Web3 skills.'
    },
    {
      icon: 'fas fa-users',
      title: 'Connect & Collaborate',
      description: 'Meet like-minded individuals, mentors, and communities in both tech and Web3 spaces.'
    },
    {
      icon: 'fas fa-rocket',
      title: 'Position Yourself Early',
      description: 'Prepare for global opportunities in tech and the decentralized future.'
    }
  ];

  return (
    <section id="why-attend" ref={ref} className="py-24 bg-[#0f081d] relative overflow-hidden" style={{ backgroundColor: '#0f081d' }}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 mx-auto max-w-4xl">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-white transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-500">Attend?</span>
          </h2>
          <p className={`text-xl text-white transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Beyond the Syllabus 2026 is a forward-thinking academic and tech experience designed to equip undergraduates with the knowledge, exposure, and direction needed to thrive beyond the classroom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className={`bg-white/5 border border-white/10 rounded-2xl p-8 text-center transition-all duration-700 hover:bg-white/10 hover:-translate-y-2 hover:border-purple-500/50 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}`} 
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-purple-800/20 border border-purple-500/30 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-500/10">
                <i className={`${benefit.icon} text-purple-400 text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{benefit.title}</h3>
              <p className="text-white leading-relaxed text-sm opacity-90">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAttend;
