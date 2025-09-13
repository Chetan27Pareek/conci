import React from 'react';

const Card = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-8 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-gray-200 dark:border-slate-700 h-full">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-200 dark:bg-slate-700 text-blue-600 dark:text-blue-400 mb-6">
        {icon}
      </div>
      <h3 className="text-blue-600 dark:text-blue-400 text-3xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export { Card };