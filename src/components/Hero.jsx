import React from 'react';
import { motion } from 'framer-motion';
import appImage from '../famm.png';

const Hero = ({ theme }) => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center flex flex-col justify-start items-center p-5 pt-20 bg-gray-100 dark:bg-gray-900"
    >
      <motion.h1 
        className="text-4xl md:text-6xl text-blue-400 font-bold mb-4"
      >
        Gurgaon's First Errand Partner
      </motion.h1>
      {/* Updated line below */}
      <p 
        className={`text-6xl font-bold ${theme === 'light' ? 'text-black' : 'text-white'}`}
      >
        One Subscription, One App, A Bundle of Services
      </p>
      <motion.p 
        className="max-w-xl text-lg text-gray-600 dark:text-gray-200 mb-8"
      >
        Want to avail our services? contact at help@conci.in
      </motion.p>
      
      <motion.div
        className="max-w-2xl mx-auto"
      >
        <img src={appImage} alt="Conci App UI" className="w-full h-auto rounded-xl shadow-2xl" />
      </motion.div>
    </motion.section>
  );
};

export default Hero;