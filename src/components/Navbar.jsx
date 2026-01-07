import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll handler
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: 'Services', sectionId: 'services' },
    { name: 'How it Works', sectionId: 'how-it-works' },
  ];

  return (
    <>
      {/* Navbar Container */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className={`
            navbar-glass rounded-full px-8 md:px-10 py-4
            flex items-center justify-between
            w-full max-w-2xl
            transition-all duration-300
            ${isScrolled ? 'shadow-navbar' : 'shadow-sm'}
          `}
        >
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-dark hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Nav Links - Left */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.sectionId)}
                className="text-sm font-medium text-dark hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Logo - Absolute Center */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="absolute left-1/2 -translate-x-1/2 flex items-center"
          >
            <img
              src="/assets/conci_blue.png"
              alt="Conci"
              className="h-8 w-auto"
            />
          </button>

          {/* Download & Privacy - Right */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollToSection('download')}
              className="text-sm font-medium text-dark hover:text-primary transition-colors"
            >
              Download
            </button>
            <button
              onClick={() => onNavigate && onNavigate('privacy')}
              className="hidden sm:block text-sm font-medium text-dark hover:text-primary transition-colors"
            >
              Privacy
            </button>
          </div>
        </motion.div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/20 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="fixed top-20 left-4 right-4 z-50 md:hidden bg-white rounded-2xl shadow-xl border border-border-gray overflow-hidden"
            >
              <div className="p-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.sectionId)}
                    className="w-full text-left px-4 py-3 text-base font-medium text-dark hover:bg-primary-light hover:text-primary rounded-lg transition-colors"
                  >
                    {link.name}
                  </button>
                ))}

                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onNavigate && onNavigate('privacy');
                  }}
                  className="w-full text-left px-4 py-3 text-base font-medium text-dark hover:bg-primary-light hover:text-primary rounded-lg transition-colors"
                >
                  Privacy Policy
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
