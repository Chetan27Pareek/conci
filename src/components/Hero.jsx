import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const Hero = () => {
  // Animation variants for staggered fade-in
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const storeLinks = {
    appStore: 'https://apps.apple.com/in/app/conci-trusted-help/id6754289662',
    playStore: 'https://play.google.com/store/apps/details?id=com.conciapp.services',
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 rounded-b-[40px] md:rounded-b-[60px]">
      {/* Background with blue gradient at bottom - stronger */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white via-30% to-primary/40 pointer-events-none" />
      
      {/* Main Content Area - Centered vertically and horizontally */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 pt-20 md:pt-28 lg:pt-32 pb-4">
        {/* Center Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center max-w-3xl"
        >
          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700 leading-tight mb-4 md:mb-6"
          >
            Your Trusted Help
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-secondary leading-relaxed mb-6 md:mb-8 max-w-2xl px-4"
          >
            From house cleaning, cooking and driver to grocery runs and errands — we handle the tasks, so you focus on what matters.
          </motion.p>

          {/* Location Badge */}
          <motion.div variants={itemVariants}>
            <div className="location-badge">
              <MapPin size={18} className="text-primary" />
              <span className="text-base md:text-lg">Now live in parts of Gurugram</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile - Female Staff Centered */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="md:hidden absolute bottom-0 left-0 right-0 flex justify-center"
      >
        <img
          src="/assets/female_staff.png"
          alt="Female Staff Member"
          className="h-[200px] sm:h-[240px] w-auto object-contain object-bottom"
        />
      </motion.div>

      {/* Desktop - Left Staff - Female */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="hidden md:block absolute bottom-0 left-0"
      >
        <img
          src="/assets/female_staff.png"
          alt="Female Staff Member"
          className="h-[380px] lg:h-[420px] xl:h-[480px] w-auto object-contain object-bottom"
        />
      </motion.div>

      {/* Desktop - Right Staff - Male */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hidden md:block absolute bottom-0 right-0"
      >
        <img
          src="/assets/male_staff.png"
          alt="Male Staff Member"
          className="h-[380px] lg:h-[420px] xl:h-[480px] w-auto object-contain object-bottom"
        />
      </motion.div>
    </section>
  );
};

export default Hero;