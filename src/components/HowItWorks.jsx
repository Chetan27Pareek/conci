import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, MousePointerClick, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Smartphone,
      title: 'Download the App',
      description: 'Get Conci from App Store or Play Store',
    },
    {
      number: '02',
      icon: MousePointerClick,
      title: 'Choose Your Service',
      description: 'Browse services and request what you need',
    },
    {
      number: '03',
      icon: CheckCircle,
      title: 'We Handle the Rest',
      description: 'Sit back while our trusted helpers take care of it',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-heading">How It Works</h2>
          <p className="section-subheading">
            Getting help has never been easier
          </p>
        </motion.div>

        {/* Steps Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative"
        >
          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number Badge */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary-light flex items-center justify-center">
                    <span className="text-2xl md:text-3xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white shadow-md border border-border-gray flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-semibold text-dark mb-2">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm md:text-base max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;