// src/components/Footer.jsx

import React from 'react';
import logoImage from '../conci_white.png';

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

        {/* Contact Information */}
        <div
          id="contact"
          className="text-center sm:text-left space-y-4"
        >
          {/* Email section */}
          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <i className="fa-solid fa-envelope mr-2"></i> Email
            </h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li><a href="mailto:deepak.pareek@conci.in" className="hover:text-white transition-colors">deepak.pareek@conci.in</a></li>
              <li><a href="mailto:tanmeet.singh@conci.in" className="hover:text-white transition-colors">tanmeet.singh@conci.in</a></li>
              <li><a href="mailto:jashan0620@gmail.com" className="hover:text-white transition-colors">jashan0620@gmail.com</a></li>
            </ul>
          </div>
          
          {/* LinkedIn section with margin-top */}
          <div className="mt-4">
            <h4 className="text-lg font-semibold mb-3 flex items-center">
              <i className="fa-brands fa-linkedin mr-2"></i> LinkedIn
            </h4>
            <ul className="text-sm space-y-2 text-gray-400">
              <li><a href="https://www.linkedin.com/in/deepak-pareek-b01a6120a" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Deepak Pareek</a></li>
              <li><a href="https://www.linkedin.com/in/tanmeet-singh-sehmi" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Tanmeet Singh Sehmi</a></li>
              <li><a href="https://www.linkedin.com/in/jashan-singh" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Jashan Singh</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-8 pt-4 border-t border-gray-700">
        © {new Date().getFullYear()} Conci. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;