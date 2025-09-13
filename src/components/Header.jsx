import React from 'react';
import { motion } from 'framer-motion';

const Header = ({ toggleTheme, currentTheme }) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex justify-between items-center p-5 md:p-5 dark:bg-gray-800"
    >
      <div className="text-gray-900 dark:text-gray-100 font-bold text-2xl">
        Conci
      </div>
      <nav>
        <a href="#services" className="text-gray-600 dark:text-gray-300 mr-5 hover:text-blue-500 transition-colors">Services</a>
        <a href="#pricing" className="text-gray-600 dark:text-gray-300 mr-5 hover:text-blue-500 transition-colors">Pricing</a>
        
        {/* The theme toggle button */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-300 focus:outline-none"
        >
          {currentTheme === 'light' ? '🌙' : '☀️'}
        </button>
      </nav>
    </motion.header>
  );
};

export default Header;