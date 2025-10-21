import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProblemStatement from './components/ProblemStatement';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import FAQ from './components/FAQs';
import AppUI from './components/AppUI';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import CancelMembership from './components/CancelMembership';

function App() {
  const [theme, setTheme] = useState('light');

  // This is the core logic that changes the theme for the entire webpage
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      {/* The button is passed down to the Navbar component */}
      <Navbar toggleTheme={toggleTheme} currentTheme={theme} />
      <main>
        <Hero theme={theme} />
        {/* Pass the 'theme' prop to the components that need it */}
        <WhyUs currentTheme={theme} />
        <Services currentTheme={theme} />
        <HowItWorks currentTheme={theme} />
        <FAQ />
        <div id="privacy-policy">
          <PrivacyPolicy />
        </div>
        <div id="cancel-membership">
          <CancelMembership />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;