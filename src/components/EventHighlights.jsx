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
    <section id="highlights" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(242,236,255,0.4)_100%)] -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-5 text-black transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Event <span className="gradient-text">Highlights</span>
          </h2>
          <p className={`text-xl text-black font-medium opacity-70 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Immerse yourself in an unforgettable learning experience designed for growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
          {highlights.map((highlight, index) => (
            <div 
              key={index} 
              className={`group bg-white border border-purple-100 rounded-3xl p-8 flex items-start space-x-6 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(109,40,217,0.1)] hover:-translate-y-1 transform ${isVisible ? 'translate-x-0 opacity-100' : (index % 2 === 0 ? '-translate-x-16 opacity-0' : 'translate-x-16 opacity-0')}`} 
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <i className={`${highlight.icon} text-white text-2xl`}></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3 text-black">{highlight.title}</h3>
                <p className="text-black font-medium leading-relaxed opacity-90">{highlight.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
