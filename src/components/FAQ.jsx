import React, { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [ref, isVisible] = useScrollReveal();

  const faqs = [
    {
      question: '1. What is Beyond the Syllabus 2026?',
      answer: 'Beyond the Syllabus 2026 is an academic and tech-focused event designed to expose undergraduates to opportunities in tech and Web3 while helping them balance these skills with academic success.'
    },
    {
      question: '2. Who can attend the event?',
      answer: 'The event is open to all undergraduate students, regardless of department or level, as well as anyone interested in tech and Web3.'
    },
    {
      question: '3. Is the event free or paid?',
      answer: 'Details about registration fees will be communicated during registration. Some sessions may be free while others may require a pass.'
    },
    {
      question: '4. When and where will the event take place?',
      answer: 'The date, time, and venue will be officially announced. Stay updated through our communication channels.'
    },
    {
      question: '5. What should I expect at the event?',
      answer: 'You will experience insightful talks, tech and Web3 exposure sessions, networking opportunities, and practical guidance on skill development.'
    },
    {
      question: '6. Do I need prior tech experience to attend?',
      answer: 'No. The event is beginner-friendly and designed to guide participants from any background.'
    },
    {
      question: '7. What kind of tech skills will be discussed?',
      answer: 'Areas such as web development, design, data, and Web3 technologies like blockchain and decentralized applications will be introduced.'
    },
    {
      question: '8. How will this event help my academic life?',
      answer: 'You will learn strategies to effectively balance your studies with skill acquisition and personal development.'
    },
    {
      question: '9. Will there be hands-on sessions or workshops?',
      answer: 'Yes, selected sessions may include practical demonstrations and beginner-friendly workshops.'
    },
    {
      question: '10. Can I network with professionals?',
      answer: 'Yes. The event provides opportunities to connect with speakers, mentors, and like-minded students.'
    },
    {
      question: '11. Will I receive a certificate?',
      answer: 'Participants may receive a certificate of attendance after the event.'
    },
    {
      question: '12. How do I register for the event?',
      answer: 'Registration details will be shared through official platforms. Ensure you sign up early to secure your spot.'
    },
    {
      question: '13. What should I bring to the event?',
      answer: 'You are advised to come with a notebook, a mobile device or laptop, and a willingness to learn.'
    },
    {
      question: '14. What is the dress code for the event?',
      answer: 'The dress code is smart casual. Dress comfortably and appropriately.'
    },
    {
      question: '15. Will there be opportunities after the event?',
      answer: 'Yes. Participants may get access to communities, learning resources, and future opportunities in tech and Web3.'
    },
    {
      question: '16. Can I attend if I am not studying engineering or tech?',
      answer: 'Absolutely. The event is open to students from all disciplines.'
    },
    {
      question: '17. How can I become a speaker or volunteer?',
      answer: 'Opportunities for volunteering or speaking will be announced. Interested individuals can apply when applications open.'
    },
    {
      question: '18. Will the sessions be recorded?',
      answer: 'Some sessions may be recorded and shared with registered participants after the event.'
    },
    {
      question: '19. How can my organization partner or sponsor the event?',
      answer: 'You can reach out through the official contact channels to receive the sponsorship deck and partnership details.'
    },
    {
      question: '20. Where can I get updates about the event?',
      answer: 'Follow our official social media pages and communication platforms for the latest updates and announcements.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_rgba(242,236,255,0.3)_0%,_transparent_70%)] -z-10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className={`text-4xl md:text-5xl font-extrabold mb-5 text-black transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className={`text-xl text-black font-medium opacity-60 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Everything you need to know about the event.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`bg-white border border-purple-100 rounded-2xl overflow-hidden transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'} ${activeIndex === index ? 'shadow-[0_15px_40px_rgba(109,40,217,0.08)] border-purple-200' : 'hover:border-purple-200 hover:shadow-md'}`} 
              style={{ transitionDelay: `${index * 50 + 300}ms` }}
            >
              <button 
                className={`w-full text-left py-6 px-8 flex justify-between items-center transition-all duration-300 ${activeIndex === index ? 'bg-purple-50/30' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                <span className={`text-lg md:text-xl font-bold text-black transition-colors ${activeIndex === index ? 'text-purple-700' : ''}`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full border border-purple-200 flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-purple-600 border-purple-600 rotate-180' : 'text-purple-400'}`}>
                  <i className={`fas fa-chevron-down text-sm ${activeIndex === index ? 'text-white' : ''}`}></i>
                </div>
              </button>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-8">
                  <div className="w-full h-[1px] bg-purple-100 mb-6"></div>
                  <p className="text-black text-lg font-medium leading-relaxed opacity-80">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
