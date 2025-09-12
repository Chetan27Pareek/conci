import React from 'react';
import { motion } from 'framer-motion';
import appImage from '../chat.png'; // Updated image name here

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center flex flex-col justify-start items-center p-5 pt-20"
    >
      <motion.h1 
        className="text-4xl md:text-6xl text-blue-400 font-bold mb-4"
      >
        A Personal Househelp <br /> 5X Affordable Price Than Market
      </motion.h1>
      <motion.p 
        className="max-w-xl text-lg text-gray-400 mb-8"
      >
        Want to avail services? contact at help@conci.in
      </motion.p>
      
      <motion.div
        className="max-w-xs mx-auto"
      >
        <img src={appImage} alt="Conci App UI" className="w-full h-auto rounded-xl shadow-2xl" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;