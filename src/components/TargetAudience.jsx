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
    <section ref={ref} className="py-20 bg-white overflow-hidden target-audience">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-purple-700 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Who Should <span className="gradient-text">Attend</span>
          </h2>
          <div className={`bg-white border border-purple-200 rounded-lg p-6 text-left transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <p className="text-xl text-purple-600 mb-6">
              Beyond the Syllabus 2026 is designed for undergraduate students from all disciplines who are curious about technology and want to future-proof their careers.
            </p>
            <div className="space-y-3">
              {audiences.map((audience, index) => (
                <div key={index} className={`flex items-start transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`} style={{ transitionDelay: `${index * 150 + 400}ms` }}>
                  <i className="fas fa-check-circle text-purple-500 mt-1 mr-3 flex-shrink-0"></i>
                  <span className="text-purple-600">
                    <strong className="text-purple-700">{audience.title}</strong> {audience.description}
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
