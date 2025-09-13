// src/components/ServiceBox.jsx
import React from 'react';

const ServiceBox = ({ title, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition-colors duration-300 h-28"> {/* Added h-28 for fixed height */}
      <div className="text-3xl mb-2">{icon}</div> {/* Icon will be displayed here */}
      <p className="text-sm font-semibold text-center text-gray-800 dark:text-gray-200">{title}</p>
    </div>
  );
};

export default ServiceBox;