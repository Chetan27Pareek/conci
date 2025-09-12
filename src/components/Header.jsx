import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 5%',
        backgroundColor: 'var(--secondary-blue)'
      }}
    >
      <div style={{ color: 'var(--text-light)', fontWeight: '700', fontSize: '24px' }}>
        Conci
      </div>
      <nav>
        <a href="#services" style={{ color: 'var(--text-light)', textDecoration: 'none', marginRight: '20px' }}>Services</a>
        <a href="#pricing" style={{ color: 'var(--text-light)', textDecoration: 'none', marginRight: '20px' }}>Pricing</a>
        <a href="#contact" className="btn">Contact Us</a>
      </nav>
    </motion.header>
  );
};

export default Header;