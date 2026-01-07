import React from 'react';
import { motion } from 'framer-motion';

const DownloadCTA = () => {
  const storeLinks = {
    appStore: 'https://apps.apple.com/in/app/conci-trusted-help/id6754289662',
    playStore: 'https://play.google.com/store/apps/details?id=com.conciapp.services',
  };

  return (
    <section id="download" className="py-16 md:py-24 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-gradient-to-br from-primary-light via-blue-50 to-primary-light/50 px-6 py-12 md:px-12 md:py-16">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          {/* Content */}
          <div className="relative z-10 text-center">
            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-3 md:mb-4"
            >
              Get Conci Today
            </motion.h2>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-secondary mb-8 md:mb-10 max-w-md mx-auto"
            >
              Your trusted help is just a tap away
            </motion.p>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              {/* App Store Button */}
              <a
                href={storeLinks.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="store-button"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12 md:h-14"
                />
              </a>

              {/* Play Store Button */}
              <a
                href={storeLinks.playStore}
                target="_blank"
                rel="noopener noreferrer"
                className="store-button"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-12 md:h-14"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadCTA;
