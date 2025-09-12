import React from 'react';
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

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <WhyUs />
        <Services />
        <HowItWorks />
        <FAQ />
        {/* The FAQs section will go here */}
      </main>
      <Footer />
    </div>
  );
};

export default App;