import React from 'react';
import { motion } from 'framer-motion';
import chatImage from '../chat.png';

const ProblemStatement = () => {
  return (
    <section className="p-20 flex flex-col md:flex-row justify-between items-center bg-blue-900">
      <div className="md:w-1/2 text-left p-10">
        <h2 className="text-5xl font-bold text-gray-200">
          At Conci -<br />Help is<br />always a<br />couple of<br />taps away.
        </h2>
      </div>
      <div className="md:w-1/2 p-10">
        <img src={chatImage} alt="Chat conversation showing delayed help" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default ProblemStatement;