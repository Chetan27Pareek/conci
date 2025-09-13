// src/components/Services.jsx
import React from 'react';
import servicesData from './services.json'; // Make sure this is the correct path
import ServiceBox from './ServiceBox';

const Services = () => {
  return (
    <section id="services" className="p-20 text-center bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto pointer-cursor"> {/* Changed back to max-w-7xl for better readability */}
        {/* Main Title Section */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-600 dark:text-blue-400 mb-2">
          Our Monthly Subscription Covers Every Need
        </h2>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white-600 dark:text-white-400 mb-2">
          From Everyday Tasks to Urgent Help
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12">
          <span className="font-bold text-blue-600 dark:text-blue-400">conci</span> streamlines routine, scheduled, and emergency support into a single reliable touchpoint.
        </p>

        {/* The 3 Main Service Divisions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.serviceCategories.map((category, index) => (
            <div key={index} className="p-8 bg-white dark:bg-gray-800 rounded-lg text-center shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-black dark:text-white">{category.name}</h3> {/* Increased mb */}

              {/* The grid of small service boxes */}
              <div className="grid grid-cols-2 gap-4"> {/* Use grid-cols-2 for 2 boxes per row */}
                {category.services.map((service, serviceIndex) => (
                  <ServiceBox
                    key={serviceIndex}
                    title={service.title}
                    icon={service.icon} // Pass the icon from your data
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;