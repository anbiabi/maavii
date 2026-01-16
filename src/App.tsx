
import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { CartProvider } from './context/CartContext';
import PageRouter from './pages/PageRouter';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CartProvider>
        <PageRouter />
      </CartProvider>
    </LanguageProvider>
  );
};

export default App;