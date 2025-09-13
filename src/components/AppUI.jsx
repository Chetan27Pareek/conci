import React from 'react';
import appUI from '../app_ui.png';

const AppUI = () => {
  return (
    <section className="p-20 flex flex-col md:flex-row justify-center items-center bg-white dark:bg-blue-900">
      <div className="md:w-1/2 p-10 text-center">
        <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          The <span className="text-blue-600 dark:text-blue-400">conci</span> app is designed with thriving families in mind:
        </h2>
        <p className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          simple & clean UI, multilingual and effortless to use.
        </p>
      </div>
      <div className="md:w-1/2 p-10">
        <img src={appUI} alt="Screenshots of the Conci app UI" className="w-full h-auto" />
      </div>
    </section>
  );
};

export default AppUI;