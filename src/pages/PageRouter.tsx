import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartSidebar from '../components/CartSidebar';
import Hero from '../components/Hero';
import About from '../components/About';
import Menu from '../components/Menu';
import Contact from '../components/Contact';
import OrderingPage from './OrderingPage';
import GroceryMarketplace from './GroceryMarketplace';
import EducationServices from './EducationServices';
import MenuPage from './MenuPage';
import StandaloneMenuPage from './StandaloneMenuPage';
import Services from '../components/Services';

type Page = 'home' | 'ordering' | 'grocery' | 'education' | 'menu' | 'standaloneMenu';

const PageRouter: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Effect to handle URL changes and update currentPage accordingly
  useEffect(() => {
    const updatePageBasedOnUrl = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      
      // Check pathname first (more specific)
      if (path === '/ordering') {
        setCurrentPage('ordering');
      } else if (path === '/grocery') {
        setCurrentPage('grocery');
      } else if (path === '/education') {
        setCurrentPage('education');
      } else if (path === '/menu') {
        setCurrentPage('menu');
      } else if (path === '/standaloneMenu') {
        setCurrentPage('standaloneMenu');
      } else {
        // For hash-based navigation on home page
        if (hash === '#menu') {
          setCurrentPage('menu');
        } else if (hash === '#services' || hash === '#contact' || hash === '#about') {
          setCurrentPage('home'); // these are all part of home page
        } else {
          // Default to home if no specific route matches
          setCurrentPage('home');
        }
      }
    };

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', updatePageBasedOnUrl);
    // Also listen for hash changes
    window.addEventListener('hashchange', updatePageBasedOnUrl);
    
    // Also check on initial load
    updatePageBasedOnUrl();
    
    // Cleanup listeners
    return () => {
      window.removeEventListener('popstate', updatePageBasedOnUrl);
      window.removeEventListener('hashchange', updatePageBasedOnUrl);
    };
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'ordering':
        return <OrderingPage />;
      case 'grocery':
        return <GroceryMarketplace />;
      case 'education':
        return <EducationServices />;
      case 'menu':
        return <MenuPage />;
      case 'standaloneMenu':
        return <StandaloneMenuPage />;
      default:
        return (
          <>
            <Hero />
            <About />
            <Services />
            <Menu />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-cream text-charcoal selection:bg-deepRed/10">
      <Header
        onCartToggle={() => setIsCartOpen(true)}
        currentPage={currentPage}
        onPageChange={(page) => {
          setCurrentPage(page);
          // Update the URL to reflect the page change
          if (page === 'ordering') {
            window.history.pushState(null, '', '/ordering');
          } else if (page === 'grocery') {
            window.history.pushState(null, '', '/grocery');
          } else if (page === 'education') {
            window.history.pushState(null, '', '/education');
          } else if (page === 'menu') {
            window.history.pushState(null, '', '/menu');
          } else if (page === 'standaloneMenu') {
            window.history.pushState(null, '', '/standaloneMenu');
          } else {
            window.history.pushState(null, '', '/');
          }
        }}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

export default PageRouter;
