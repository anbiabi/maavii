import React, { useState } from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

const MenuPage: React.FC = () => {
  const { itemCount } = useCart();

  const [isCartOpen, setIsCartOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-cream text-charcoal selection:bg-deepRed/10">
      <Header 
        onCartToggle={() => setIsCartOpen(true)} 
      />
      <main>
        <Menu />
      </main>
      <Footer />
    </div>
  );
};

export default MenuPage;