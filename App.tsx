
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CartSidebar from './components/CartSidebar';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';

const PlaceholderSection: React.FC<{ id: string; title: string }> = ({ id, title }) => (
  <section id={id} className="py-24 px-4 bg-cream scroll-mt-24 border-t border-charcoal/5">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-5xl font-black text-charcoal uppercase mb-8">{title}</h2>
      <div className="h-64 bg-charcoal/5 rounded-[3rem] flex items-center justify-center border-4 border-dashed border-charcoal/10">
        <p className="text-xl font-serif italic text-charcoal/30">Content for {title} coming soon...</p>
      </div>
    </div>
  </section>
);

const MainApp: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream text-charcoal selection:bg-deepRed/10">
      <Header onCartToggle={() => setIsCartOpen(true)} />
      <main>
        <Hero />
        <About />
        <PlaceholderSection id="services" title="Our Services" />
        <Menu />
        <PlaceholderSection id="gallery" title="Culinary Gallery" />
        <PlaceholderSection id="coming-soon" title="Upcoming Fusion Concepts" />
        <Contact />
      </main>
      <Footer />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <MainApp />
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;