import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Footer = () => {
  const [ref, isVisible] = useScrollReveal({ rootMargin: '0px 0px 50px 0px' });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer ref={ref} className="relative pt-20 pb-10 bg-[#0f081d] text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-900/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className={`lg:col-span-4 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '100ms' }}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                <i className="fas fa-rocket text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
                Beyond Syllabus
              </span>
            </div>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-sm">
              Empowering the next generation of tech leaders by bridging the gap between classroom theory and real-world innovation.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: 'fa-twitter', label: 'Twitter', href: 'https://x.com/BeyondTSyllabus' },
                { icon: 'fa-facebook-f', label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61574266706740' },
                { icon: 'fa-telegram-plane', label: 'Telegram', href: 'https://t.me/beyondTsyllabus' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-white/10 rounded-lg flex items-center justify-center text-white/50 hover:text-white hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300"
                  aria-label={social.label}
                >
                  <i className={`fab ${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className={`lg:col-span-4 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '300ms' }}>
            <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              {['About', 'Why Attend', 'Highlights', 'Sponsorship'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                    className="text-white/60 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-0 h-0.5 bg-white mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-200"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className={`lg:col-span-4 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '500ms' }}>
            <h4 className="text-lg font-semibold mb-6 text-white uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-white/70">
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1.5 mr-3 text-white/40"></i>
                <a href="mailto:beyondthesyllabus001@gmail.com" className="hover:text-white transition-colors cursor-pointer text-sm">beyondthesyllabus001@gmail.com</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1.5 mr-3 text-white/40"></i>
                <a href="tel:07047788318" className="hover:text-white transition-colors cursor-pointer">07047788318</a>
              </li>
              <li className="flex items-start">
                <i className="fab fa-whatsapp mt-1.5 mr-3 text-white/40"></i>
                <a href="https://wa.me/2347047788318" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors cursor-pointer">WhatsApp Us</a>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1.5 mr-3 text-white/40"></i>
                <span>Venue:<br />Yet to be disclosed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={`pt-8 border-t border-white/10 flex flex-col md:row items-center justify-between transition-all duration-1000 transform ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '700ms' }}>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Beyond the Syllabus. All rights reserved.
            </p>
          </div>
          <div className="flex items-center text-gray-500 text-sm">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

