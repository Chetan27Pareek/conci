import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="p-4 mt-6 flex justify-center items-center">
      <div className="flex items-center space-x-6 p-4 px-10 bg-white rounded-full shadow-lg"> 
        <a href="#whyus" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
          WHY US
        </a>
        <a href="#services" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
          SERVICES
        </a>
        <div className="text-blue-600 text-3xl font-bold px-4 tracking-wider">
          CONCI
        </div>
        <a href="#howitworks" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
          HOW IT WORKS
        </a>
        <a href="#faq" className="text-gray-800 font-medium hover:text-blue-600 transition-colors">
          FAQs
        </a>
      </div>
    </nav>
  );
};

export default Navbar;