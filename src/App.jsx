import React, { useState, useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import DownloadCTA from './components/DownloadCTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import DeleteAccount from './components/DeleteAccount';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Handle navigation
  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle back to home
  const handleBack = () => {
    setCurrentPage('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle browser back button
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL hash based on current page
  useEffect(() => {
    if (currentPage === 'home') {
      window.history.pushState(null, '', '/');
    } else {
      window.history.pushState(null, '', `#${currentPage}`);
    }
  }, [currentPage]);

  // Check URL hash on initial load
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === 'privacy' || hash === 'privacy-policy') {
      setCurrentPage('privacy');
    } else if (hash === 'delete-account' || hash === 'cancel-membership') {
      setCurrentPage('delete-account');
    }
  }, []);

  // Render Privacy Policy page
  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={handleBack} />;
  }

  // Render Delete Account page
  if (currentPage === 'delete-account') {
    return <DeleteAccount onBack={handleBack} />;
  }

  // Render Landing Page (Home)
  return (
    <div className="min-h-screen bg-white">
      <Navbar onNavigate={handleNavigate} />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <DownloadCTA />
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;