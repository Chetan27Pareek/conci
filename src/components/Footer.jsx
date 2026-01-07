import React from 'react';
import { Mail, Instagram } from 'lucide-react';

const Footer = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const handleNavigation = (page, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-primary text-white rounded-t-[40px] md:rounded-t-[60px]">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-16">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/assets/conci_white.png"
            alt="Conci"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-8">
          <a
            href="#privacy-policy"
            onClick={(e) => handleNavigation('privacy', e)}
            className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <span className="text-white/40">•</span>
          <a
            href="#delete-account"
            onClick={(e) => handleNavigation('delete-account', e)}
            className="text-sm md:text-base text-white/80 hover:text-white transition-colors"
          >
            Delete Account
          </a>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
          {/* Email */}
          <a
            href="mailto:help@conci.in"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <Mail size={18} />
            <span className="text-sm md:text-base">help@conci.in</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/conci.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
          >
            <Instagram size={18} />
            <span className="text-sm md:text-base">@conci.in</span>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-white/10">
          <p className="text-sm text-white/60">
            © {currentYear} Conci. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
