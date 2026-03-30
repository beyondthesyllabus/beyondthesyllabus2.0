import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const EventHighlights = () => {
  const [ref, isVisible] = useScrollReveal();

  const highlights = [
    {
      icon: 'fas fa-microphone',
      title: 'Inspiring Talks',
      description: 'Hear from industry experts, successful entrepreneurs, and academic leaders sharing their journeys and insights.'
    },
    {
      icon: 'fas fa-laptop-code',
      title: 'Hands-on Workshops',
      description: 'Participate in interactive workshops covering blockchain development, smart contracts, and Web3 technologies.'
    },
    {
      icon: 'fas fa-trophy',
      title: 'Hackathon & Competitions',
      description: 'Showcase your skills in our hackathon and win exciting prizes while solving real-world problems.'
    },
    {
      icon: 'fas fa-user-graduate',
      title: 'Mentorship Sessions',
      description: 'Get personalized guidance from industry professionals and senior students who\'ve walked the path before you.'
    }
  ];

  return (
    <section id="highlights" ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 text-purple-700 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Event <span className="gradient-text">Highlights</span>
          </h2>
          <p className={`text-xl text-purple-600 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>Immerse yourself in an unforgettable learning experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className={`bg-white border border-purple-200 rounded-lg p-6 flex items-start space-x-4 transition-all duration-700 hover:shadow-lg transform ${isVisible ? 'translate-x-0 opacity-100' : (index % 2 === 0 ? '-translate-x-16 opacity-0' : 'translate-x-16 opacity-0')}`} style={{ transitionDelay: `${index * 150 + 300}ms` }}>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <i className={`${highlight.icon} text-white`}></i>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-purple-700">{highlight.title}</h3>
                <p className="text-purple-600">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
