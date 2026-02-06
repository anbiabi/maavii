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
    { name: t('navComingSoon'), href: '/#vision', isHash: true },
    { name: t('navContact'), href: '/#contact', isHash: true },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLElement>, href: string, isHash: boolean) => {
    if (isHash) {
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
        setIsMenuOpen(false);
      }
    } else {
      setIsMenuOpen(false);
    }
  };

  const isActive = (href: string, isHash: boolean) => {
    if (isHash) return false;
    if (!pathname) return false;
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b-[4px] md:border-b-[6px] border-maaviiOrange shadow-xl">
      <div className="max-w-7xl mx-auto px-4 h-16 md:h-24 flex items-center justify-between">
        {/* Logo Section */}
        <Link
          href="/"
          onClick={(e) => handleNavClick(e, '/', false)}
          className="flex items-center gap-2 md:gap-3 group cursor-pointer shrink-0 hover:animate-wiggle"
        >
          <div className="logo-circle p-0.5 md:p-1 rounded-full transform group-hover:scale-110 transition-transform">
            <Logo size="sm" />
          </div>
          <div className="leading-none">
            <span className="font-black text-xl md:text-3xl tracking-tighter text-charcoal uppercase italic">
              MAAVII<span className="text-maaviiOrange">S</span>
            </span>
            <p className="text-[8px] md:text-[10px] font-black text-maaviiTeal uppercase tracking-[0.2em] md:tracking-[0.3em] block mt-0.5 md:mt-1">
              • CULINARY FUSION •
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href, link.isHash)}
              className={`relative py-2 text-sm font-black uppercase tracking-[0.2em] transition-all duration-300 group/link hover:animate-wiggle ${isActive(link.href, link.isHash) ? 'text-maaviiOrange scale-110' : 'text-charcoal hover:text-maaviiOrange'
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-1 bg-maaviiOrange transition-all duration-500 rounded-full ${isActive(link.href, link.isHash) ? 'w-full' : 'w-0 group-hover/link:w-full'}`}></span>
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <button
            onClick={() => setLanguage(language === 'EN' ? 'KR' : 'EN')}
            className="flex items-center gap-1.5 md:gap-2 px-2.5 py-1.5 md:px-4 md:py-2 rounded-xl bg-maaviiTeal text-charcoal hover:bg-maaviiOrange hover:text-white transition-all font-black shadow-lg active:scale-95 border-b-2 md:border-b-4 border-black/20 hover:animate-jelly"
          >
            <Globe className="w-4 h-4 md:w-5 md:h-5 animate-spin-slow" />
            <span className="text-xs md:text-sm font-black">{language}</span>
          </button>

          <button
            onClick={onCartToggle}
            className="relative p-2 md:p-3 bg-maaviiYellow text-charcoal rounded-xl md:rounded-2xl shadow-xl hover:scale-110 transition-all active:scale-95 border-b-2 md:border-b-4 border-maaviiOrange hover:animate-bounce"
            aria-label="View Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5 md:w-7 md:h-7" />
            {mounted && itemCount > 0 && (
              <span className="absolute -top-2 -right-2 md:-top-3 md:-right-3 w-6 h-6 md:w-8 md:h-8 vibrant-gradient text-white text-[10px] md:text-xs font-black rounded-full flex items-center justify-center ring-2 md:ring-4 ring-white shadow-2xl animate-bounce">
                {itemCount}
              </span>
            )}
          </button>

          <button
            className="xl:hidden p-2 md:p-3 bg-maaviiOrange text-white rounded-xl shadow-lg hover:scale-105 transition-all hover:animate-jelly"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="md:w-8 md:h-8" /> : <Menu size={24} className="md:w-8 md:h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-16 bg-maaviiYellow border-b-[8px] md:border-b-[10px] border-maaviiOrange shadow-2xl animate-in slide-in-from-top duration-500 min-h-screen overflow-y-auto african-pattern">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-sm pointer-events-none"></div>
          <nav className="relative z-10 px-8 py-10 flex flex-col gap-6 md:gap-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isHash)}
                className="flex items-center group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <span className="text-3xl sm:text-4xl md:text-5xl font-black text-charcoal group-hover:text-maaviiOrange transition-colors uppercase tracking-tight group-hover:translate-x-4 duration-300 hover:animate-wiggle">
                  {link.name}
                </span>
                <span className="ml-4 w-0 h-1 md:h-2 bg-maaviiOrange group-hover:w-full transition-all duration-500 rounded-full"></span>
              </Link>
            ))}
            <div className="mt-12 pt-8 border-t-4 border-maaviiOrange/30">
              <p className="text-xs font-black uppercase tracking-[0.5em] text-maaviiOrange">MAAVII GLOBAL EATS</p>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
