import React from 'react';
import { motion } from 'framer-motion';

// Import your local images
import subsImage from '../subs.jpeg'; 
import taskImage from '../task.png'; 
import concierge from '../concierge.jpeg';

const steps = [
  {
    number: 1,
    title: 'Sign up for a subscription.',
    description: 'Our flexible and affordable plans are designed to fit your unique needs. Simply choose the best plan that provides all the services you need.',
    image: subsImage
  },
  {
    number: 2,
    title: 'Request a service on our app.',
    description: 'With a simple tap, you can schedule a service from any of our categories—routine, scheduled, or emergency—right from your mobile device.',
    image: taskImage
  },
  {
    number: 3,
    title: 'Your concierge takes over.',
    description: 'A dedicated, verified professional will handle your request promptly, ensuring a seamless and hassle-free experience from start to finish.',
    image: concierge // Add the image here
  }
];

const HowItWorks = () => {
  return (
    <section id="howitworks" className="p-16 text-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
          How it works
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
          Simplifying your life is our priority. With just a few simple steps, you can get reliable help for any of your daily tasks.
        </p>

        <div className="flex flex-col gap-16">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className={`flex flex-col items-center md:flex-row gap-8 lg:gap-16 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Image Column (only if image exists) */}
              {step.image && (
                <div className="w-full md:w-1/2 flex justify-center">
                  <img 
                    src={step.image} 
                    alt={`Step ${step.number}`} 
                    className="rounded-lg shadow-lg w-full max-w-sm md:max-w-md lg:max-w-lg" 
                  />
                </div>
              )}

              {/* Text Content Column */}
              <div className="w-full md:w-1/2 text-left">
                {/* Step Number Circle */}
                <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-400 text-white font-bold text-xl mb-4">
                  {step.number}
                </div>
                
                {/* Step Title and Description */}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;