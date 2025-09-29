import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logoImage from '../conci_white.png';

const Navbar = ({ toggleTheme, currentTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-4 mt-6 flex justify-between items-center w-full px-10 relative">
      
      {/* Conci Logo on the left side */}
      <div className="flex items-center">
        <img src={logoImage} alt="Conci Logo" className="h-14 w-auto" />
      </div>

      {/* Hamburger menu icon for mobile */}
      <div className="md:hidden flex items-center ml-auto">
        <button onClick={handleMenuClick} className="text-white focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h4"></path>
          </svg>
        </button>
      </div>

      {/* Full navigation links for desktop */}
      <div className="hidden md:flex items-center space-x-6"> 
        <a href="#whyus" className="text-white font-medium hover:text-blue-600 transition-colors">
          WHY US
        </a>
        <a href="#services" className="text-white font-medium hover:text-blue-600 transition-colors">
          SERVICES
        </a>
        <a href="#howitworks" className="text-white font-medium hover:text-blue-600 transition-colors">
          HOW IT WORKS
        </a>
        <a href="#contact" className="text-white font-medium hover:text-blue-600 transition-colors">
          CONTACT US
        </a>
        <a href="#faq" className="text-white font-medium hover:text-blue-600 transition-colors">
          FAQs
        </a>
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-white text-gray-800 focus:outline-none"
        >
          {currentTheme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Mobile navigation menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-800 dark:bg-gray-900 py-4 z-50">
          <div className="flex flex-col items-center space-y-4">
            <a onClick={handleMenuClick} href="#whyus" className="text-white font-medium hover:text-blue-600 transition-colors">WHY US</a>
            <a onClick={handleMenuClick} href="#services" className="text-white font-medium hover:text-blue-600 transition-colors">SERVICES</a>
            <a onClick={handleMenuClick} href="#howitworks" className="text-white font-medium hover:text-blue-600 transition-colors">HOW IT WORKS</a>
            <a onClick={handleMenuClick} href="#contact" className="text-white font-medium hover:text-blue-600 transition-colors">CONTACT US</a>
            <a onClick={handleMenuClick} href="#faq" className="text-white font-medium hover:text-blue-600 transition-colors">FAQs</a>
            <button
              onClick={() => { toggleTheme(); handleMenuClick(); }}
              className="mt-4 p-2 rounded-full bg-white text-gray-800 focus:outline-none"
            >
              {currentTheme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
