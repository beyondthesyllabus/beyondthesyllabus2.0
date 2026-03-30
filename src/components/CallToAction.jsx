import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CallToAction = ({ onOpenRegister }) => {
  const [ref, isVisible] = useScrollReveal();
  return (
    <section ref={ref} className="py-20 bg-white cta-section overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`bg-white border border-purple-200 rounded-lg p-8 glow-purple transition-all duration-1000 transform ${isVisible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-purple-700 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Ready to Transform Your <span className="gradient-text">Future?</span>
            </h2>
            <p className={`text-xl text-purple-600 mb-8 transition-all duration-700 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              Join 500+ students who are already bridging the gap between academics and technology. 
              Limited spots available - secure your place today!
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-700 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <button onClick={onOpenRegister} className="gradient-button px-8 py-4 rounded-full text-lg font-semibold text-white hover:-translate-y-1 hover:shadow-xl transition-all">
                <i className="fas fa-ticket-alt mr-2"></i>Register Now - $29 Early Bird
              </button>
              <button className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-500 text-purple-700 hover:bg-purple-500 hover:text-white transition-all hover:-translate-y-1">
                <i className="fas fa-users mr-2"></i>Bring Your Group
              </button>
            </div>
            
            <div className={`flex flex-col sm:flex-row justify-center sm:space-x-6 space-y-4 sm:space-y-0 text-purple-600 transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="flex items-center justify-center">
                <i className="fas fa-clock mr-2"></i>
                <span>Limited Time Offer</span>
              </div>
              <div className="flex items-center justify-center">
                <i className="fas fa-shield-alt mr-2"></i>
                <span>Money-Back Guarantee</span>
              </div>
              <div className="flex items-center justify-center">
                <i className="fas fa-certificate mr-2"></i>
                <span>Certificate Included</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
