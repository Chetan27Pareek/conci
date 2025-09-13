import React from 'react';
import revenueModelImage from '../rev.png';

const HowItWorks = () => {
  return (
    <section id="howitworks" className="p-20 text-center bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-6">
          Our service simplifies life for families by combining multiple scattered services into one affordable, reliable app.
        </h2>
        <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-10">
          OUR REVENUE MODEL: ONE PLAN REPLACES SCATTERED APPS AT HALF THE COST.
        </h3>
        <img src={revenueModelImage} alt="Conci revenue model and cost savings" className="w-full h-auto rounded-lg shadow-xl" />
      </div>
    </section>
  );
};

export default HowItWorks;