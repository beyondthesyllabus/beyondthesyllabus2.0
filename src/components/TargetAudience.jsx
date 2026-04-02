import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const TargetAudience = () => {
  const [ref, isVisible] = useScrollReveal();
  const audiences = [
    {
      title: 'Computer Science & IT Students',
      description: 'looking to explore Web3 and blockchain technologies'
    },
    {
      title: 'Non-Tech Students',
      description: 'interested in understanding how technology impacts their field'
    },
    {
      title: 'Beginners',
      description: 'with no prior coding experience but curious about tech'
    },
    {
      title: 'Students',
      description: 'seeking career clarity and direction in the tech industry'
    },
    {
      title: 'Academic Achievers',
      description: 'wanting to balance studies with practical tech skills'
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden target-audience">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(242,236,255,0.4)_0%,_transparent_60%)] -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-10 text-black transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Who Should <span className="gradient-text">Attend</span>
          </h2>
          
          <div className={`bg-white border border-purple-100 rounded-3xl p-8 md:p-14 shadow-[0_20px_50px_rgba(109,40,217,0.06)] text-left transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'} hover:shadow-[0_40px_80px_rgba(109,40,217,0.1)] transition-all duration-500`} style={{ transitionDelay: '200ms' }}>
            <p className="text-xl md:text-2xl text-black font-extrabold mb-10 leading-relaxed border-l-4 border-purple-500 pl-6 italic">
              Beyond the Syllabus 2026 is designed for undergraduate students from all disciplines who are curious about technology and want to future-proof their careers.
            </p>
            
            <div className="space-y-5">
              {audiences.map((audience, index) => (
                <div 
                  key={index} 
                  className={`flex items-start transition-all duration-700 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'} hover:translate-x-3 transition-transform`} 
                  style={{ transitionDelay: `${index * 150 + 500}ms` }}
                >
                  <div className="w-8 h-8 bg-purple-500/10 rounded-full flex items-center justify-center mr-5 flex-shrink-0 mt-1">
                    <i className="fas fa-check text-purple-600 text-sm"></i>
                  </div>
                  <span className="text-black text-lg md:text-xl font-medium leading-relaxed">
                    <strong className="text-black font-extrabold">{audience.title}</strong>{' '}
                    <span className="opacity-80 font-semibold">{audience.description}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
