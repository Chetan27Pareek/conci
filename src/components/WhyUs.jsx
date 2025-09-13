import {Card} from './Card'; 
import whyData from './why.json';

const WhyUs = () => {
  return (
    <div id='whyus' className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 dark:bg-slate-900 dark:text-white">
      
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-700 dark:text-gray-400 mb-4">
          <span className="text-blue-600 dark:text-blue-400">Why Conci?</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-500 max-w-2xl mx-auto">
          Simplifying your life with trusted, accessible, and affordable househelp equipped to provide aplethora of services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {whyData.map((feature, index) => (
          <Card
            key={index}
            title={feature.title}
            description={feature.description}
            iconName={feature.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default WhyUs