'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingCart, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import Logo from './Logo';

interface HeaderProps {
  onCartToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCartToggle }) => {
  const { language, setLanguage, t } = useLanguage();
  const { itemCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: t('navHome'), href: '/', isHash: false },
    { name: t('navAbout'), href: '/#about', isHash: true },
    { name: t('navServices'), href: '/#services', isHash: true },
    { name: t('navMenu'), href: '/#menu', isHash: true },
    { name: t('navActivities'), href: '/#activities', isHash: true },
    { name: t('navGrocery'), href: '/#grocery', isHash: true },
    { name: t('navComingSoon'), href: '/coming-soon', isHash: false },
    { name: t('navContact'), href: '/#contact', isHash: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string, isHash: boolean) => {
    if (isHash) {
      // If we are already on the home page, we can just scroll
      if (pathname === '/') {
        e.preventDefault();
        const targetId = href.replace('/#', '');
        const element = document.getElementById(targetId);
        if (element) {
          setIsMenuOpen(false);
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          window.history.pushState(null, '', href);
        }
      } else {
        // If we are not on home page, normal Link behavior will take us there
        setIsMenuOpen(false);
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  const isActive = (href: string, isHash: boolean) => {
    if (isHash) return false; // Hash links are part of home
    if (!pathname) return false; // Handle null pathname
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-cream/95 backdrop-blur-md z-50 border-b-4 border-maaviiOrange shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, '/', false)}
          className="flex items-center gap-3 group cursor-pointer shrink-0"
        >
          <Logo size="md" />
          <div className="hidden lg:block leading-none">
            <span className="font-extrabold text-2xl tracking-tighter text-charcoal uppercase">MAAVII&apos;S</span>
            <p className="text-[10px] font-bold text-maaviiTeal uppercase tracking-[0.2em]">CUISINE</p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.isHash)}
              className={`relative py-2 text-sm font-black uppercase tracking-widest transition-colors duration-300 group/link ${isActive(link.href, link.isHash) ? 'text-maaviiOrange' : 'text-charcoal hover:text-maaviiOrange'
                }`}
            >
              {link.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-maaviiOrange transition-all duration-300 ${isActive(link.href, link.isHash) ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            onClick={() => setLanguage(language === 'EN' ? 'KR' : 'EN')}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-maaviiTeal text-cream hover:bg-teal-700 transition-all font-bold shadow-md active:scale-95"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm">{language}</span>
          </button>

          <button
            onClick={onCartToggle}
            className="relative p-3 bg-maaviiYellow text-charcoal rounded-xl shadow-md hover:scale-110 transition-transform active:scale-95"
            aria-label="View Shopping Cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {mounted && itemCount > 0 && (
              <span className="absolute -top-2 -right-2 w-6 h-6 bg-deepRed text-cream text-[10px] font-black rounded-full flex items-center justify-center ring-2 ring-cream shadow-lg">
                {itemCount}
              </span>
            )}
          </button>

          <button
            className="xl:hidden p-2 text-charcoal hover:bg-charcoal/5 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-24 bg-maaviiYellow border-b-4 border-maaviiOrange shadow-2xl animate-in slide-in-from-top duration-300 max-h-[calc(100vh-6rem)] overflow-y-auto">
          <nav className="px-6 py-10 flex flex-col gap-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isHash)}
                className="flex items-center justify-between text-3xl font-black text-charcoal hover:text-cream transition-colors group"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                <span>{link.name}</span>
              </Link>
            ))}
            <div className="pt-6 border-t border-charcoal/10 flex justify-end items-center">
              <p className="text-[10px] font-black uppercase opacity-50 tracking-widest">Maavii Global Eats</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
