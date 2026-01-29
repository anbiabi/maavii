'use client';

import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import CartSidebar from './CartSidebar';

interface MainLayoutProps {
    children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <div className="min-h-screen bg-white text-charcoal selection:bg-maaviiOrange/30">
            <Header onCartToggle={() => setIsCartOpen(true)} />
            <main className="pt-24 min-h-screen">
                {children}
            </main>
            <Footer />
            <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
    );
};

export default MainLayout;
