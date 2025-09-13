import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-blue-900 p-10 text-center text-sm text-gray-600 dark:text-gray-400 mt-20">
      <div className="flex flex-col items-center">
        <p>&copy; 2025 Conci. All Rights Reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mx-2">Privacy Policy</a>
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mx-2">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;