import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  ShoppingBag, 
  Home, 
  ChefHat, 
  Car, 
  Droplets,
  ShoppingCart,
  Package,
  PawPrint,
  MoreHorizontal,
  Check
} from 'lucide-react';

const Services = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
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

  const serviceCategories = [
    {
      title: 'Specialized Services',
      description: 'Professional help for your home',
      icon: Sparkles,
      iconBg: 'bg-blue-100',
      iconColor: 'text-primary',
      services: [
        { name: 'House Cleaning', icon: Home },
        { name: 'Cook', icon: ChefHat },
        { name: 'Driver', icon: Car },
        { name: 'Car/Bike Wash', icon: Droplets },
      ],
    },
    {
      title: 'Everyday Errands',
      description: 'We run so you don\'t have to',
      icon: ShoppingBag,
      iconBg: 'bg-blue-100',
      iconColor: 'text-primary',
      services: [
        { name: 'Grocery Shopping', icon: ShoppingCart },
        { name: 'Local Courier', icon: Package },
        { name: 'Pet Care', icon: PawPrint },
        { name: 'And more', icon: MoreHorizontal },
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-light-gray">
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-heading">What We Do</h2>
          <p className="section-subheading">
            Reliable help for your home and daily life
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
        >
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              className="card group"
            >
              {/* Card Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className={`p-3 rounded-xl ${category.iconBg}`}>
                  <category.icon className={`w-6 h-6 ${category.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-dark mb-1">
                    {category.title}
                  </h3>
                  <p className="text-secondary text-sm md:text-base">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Services List */}
              <ul className="space-y-3">
                {category.services.map((service) => (
                  <li
                    key={service.name}
                    className="flex items-center gap-3 text-dark"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-light flex items-center justify-center">
                      <service.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-base">{service.name}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;