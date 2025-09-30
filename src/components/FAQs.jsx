import React, { useState } from 'react';
import faqData from './faq.json';

const FAQ = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const handleToggle = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <section id="faq" className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 text-center mb-12">
          FAQs
        </h2>
        <div className="space-y-6">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 dark:border-slate-700 rounded-lg overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer bg-gray-200 dark:bg-slate-800 hover:bg-gray-300 dark:hover:bg-slate-700 transition-colors"
                onClick={() => handleToggle(item.id)}
              >
                <h3 className="text-lg font-semibold">{item.question}</h3>
                <svg
                  className={`w-6 h-6 transform transition-transform duration-300 ${
                    openQuestionId === item.id ? 'rotate-180' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              
              <div
                className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                  openQuestionId === item.id ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="p-6 bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-300">
                  {/* FIX: Use dangerouslySetInnerHTML to correctly render the <a> tags from the JSON answer */}
                  <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
