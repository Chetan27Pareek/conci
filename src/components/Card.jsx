import React from 'react';
import { motion } from 'framer-motion';

// Update import statements with the correct file names
import dollarIcon from '../assets/icons/dollar-sign-solid-full.svg';
import handIcon from '../assets/icons/hand-point-up-solid-full.svg';
import heartIcon from '../assets/icons/heart-solid-full.svg';
import shieldIcon from '../assets/icons/shield-solid-full.svg';

const iconMap = {
  shield: shieldIcon,
  hand: handIcon,
  dollar: dollarIcon,
  heart: heartIcon,
};

export const Card = ({ title, description, iconName }) => {
  const Icon = iconMap[iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
    >
      <div className="flex items-center justify-center h-16 w-16 mb-6 rounded-full bg-blue-100 dark:bg-blue-900 mx-auto">
        <img src={Icon} alt={`${iconName} icon`} className="h-10 w-10" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  );
};