import React from 'react';
import servicesData from './services.json';

const Services = () => {
  return (
    <section id="services" className="p-20 text-center bg-blue">
      <div className="max-w-7xl mx-auto">
        {/* Main Title Section */}
        <h2 className="text-4xl lg:text-5xl font-extrabold text-blue-400 mb-4">
          One Platform Covering Every Need:
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Conci streamlines routine, scheduled, and emergency support into a single reliable touchpoint.
        </p>

        {/* Top Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesData.headerSections.map((section, index) => (
            <div key={index} className="p-8 bg-blue-900 rounded-lg text-left">
              <h3 className="text-xl font-semibold mb-4 text-lightgray">{section.title}</h3>
              <p className="text-gray-400">{section.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Table Section */}
        <div className="mt-12 w-full max-w-7xl mx-auto border border-blue-400 bg-gray-900 rounded-lg overflow-hidden">
          {servicesData.tableRows.map((row, index) => (
            <div key={index} className="grid grid-cols-3 gap-0 border-b border-blue-400 last:border-b-0">
              <div className="col-span-1 p-6 text-lightgray font-semibold text-lg bg-blue-900 flex items-center">
                {row.category}
              </div>
              <div className="col-span-2 p-6 text-gray-200 text-base flex items-center text-left">
                {row.services}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;