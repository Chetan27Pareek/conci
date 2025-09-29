// src/components/Footer.jsx

import React from 'react';
import logoImage from '../conci_white.png';
import emailIcon from '../assets/envelope-solid-full.svg'; // Check the correct path
import linkedinIcon from '../assets/linkedin-brands-solid-full.svg'; // Check the correct path
import instagramIcon from '../assets/instagram-brands-solid-full.svg'; // Check the correct path

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-10 mt-12 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {/* About Section */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <img src={logoImage} alt="Conci Logo" className="h-10 mb-4" />
          <p className="text-sm text-gray-400">
            Conci is your trusted partner for a wide range of concierge services, from daily errands to urgent help.
          </p>
        </div>

        {/* Contact Information - Now a horizontal row */}
        <div
          id="contact"
          className="flex flex-row flex-wrap justify-center sm:justify-start gap-8 text-center sm:text-left"
        >
          {/* Email section */}
          <div className="w-full sm:w-auto">
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <img src={emailIcon} alt="Email" className="w-6 h-6 mr-2 filter brightness-0 invert" />
            </h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>
                <a href="mailto:help@conci.in" className="hover:text-white transition-colors">
                  help@conci.in
                </a>
              </li>
            </ul>
          </div>
          
          {/* LinkedIn section */}
          <div className="w-full sm:w-auto">
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 mr-2 filter brightness-0 invert" />
            </h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li><a href="https://www.linkedin.com/in/deepakpareek08/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Deepak Pareek</a></li>
              <li><a href="https://www.linkedin.com/in/tanmeet-singh-sehmi-036342205/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tanmeet Singh Sehmi</a></li>
              <li><a href="https://www.linkedin.com/in/jashan-singh-a554b117a/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Jashan Singh</a></li>
            </ul>
          </div>

          {/* Instagram section */}
          <div className="w-full sm:w-auto">
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6 mr-2 filter brightness-0 invert" />
            </h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li>
                <a href="https://www.instagram.com/conci.in?igsh=Nm56enFmdmc3bDN1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  conci.in
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-8 pt-4 border-t border-gray-700">
        <a 
          href="/privacy_policy.html"  /* This is the new link! */
          className="hover:text-white transition-colors mr-4"
        >
          Privacy Policy
        </a>
        <span>&middot;</span>
        <a 
          href="/terms_of_service.html"  /* Recommended: Add a Terms link too */
          className="hover:text-white transition-colors ml-4"
        >
          Terms of Service
        </a>
        
        <p className="mt-2">
            © {new Date().getFullYear()} Conci. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;