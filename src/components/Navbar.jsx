import React from 'react';

import { motion } from 'framer-motion';

import logoImage from '../conci_white.png';



const Navbar = ({ toggleTheme, currentTheme }) => {

return (

// Add 'relative' to the parent nav

<nav className="p-4 mt-6 flex justify-between items-center w-full px-10 relative">


{/* Left side links */}

<div className="flex items-center space-x-6">

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

</div>


{/* Center Logo with absolute positioning */}

<div className="absolute left-1/2 transform -translate-x-1/2">

<img src={logoImage} alt="Conci Logo" className="h-14 w-auto" />

</div>



{/* Right side button */}

<div className="flex items-center">

<button

onClick={toggleTheme}

className="ml-4 p-2 rounded-full bg-white text-gray-800 focus:outline-none"

>

{currentTheme === 'light' ? '🌙' : '☀️'}

</button>

</div>

</nav>

);

};



export default Navbar;