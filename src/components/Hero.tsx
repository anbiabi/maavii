"use client";

import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Logo from './Logo';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  const handleMenuScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('menu');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', '#menu');
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 px-4 overflow-hidden scroll-mt-24 bg-maaviiYellow/10">
      {/* Pattern Background Overlay - HIGH CONTRAST */}
      <div className="absolute inset-0 mask-overlay opacity-50 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full african-pattern opacity-20 -skew-x-12 translate-x-1/4 pointer-events-none"></div>

      <div className="absolute -top-24 -left-24 w-96 h-96 bg-maaviiOrange/30 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-maaviiTeal/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white text-maaviiOrange rounded-3xl font-black text-sm uppercase tracking-[0.4em] shadow-2xl rotate-1 border-b-6 border-maaviiOrange transition-all hover:rotate-0 cursor-default">
            <Flame className="w-7 h-7 text-maaviiRed animate-pulse" />
            {t('heroTagline')}
          </div>

          <h1 className="text-7xl md:text-9xl font-black text-charcoal leading-[0.9] tracking-tighter">
            {t('heroTitle').split(' ').map((word, i) => (
              <span key={i} className={word === '&' || word === 'Fusion' || word === 'Culinary' ? 'text-maaviiOrange inline-block transform hover:scale-110 transition-transform cursor-default text-stroke-vibrant' : 'inline-block mr-5'}>
                {word}
                {i === 2 && <br className="hidden lg:block" />}
              </span>
            ))}
          </h1>

          <p className="text-3xl text-charcoal/90 font-serif max-w-xl leading-relaxed border-l-[14px] border-maaviiTeal pl-10 italic glass-vibrant p-12 rounded-[2.5rem] shadow-2xl">
            Experience the <span className="text-maaviiOrange font-black underline decoration-maaviiYellow underline-offset-8">soulful heat</span> of West Africa blended with the <span className="text-maaviiTeal font-black underline decoration-maaviiYellow underline-offset-8">refined umami</span> of Korean traditions.
          </p>

          <div className="flex flex-col sm:flex-row gap-8">
            <a
              href="#menu"
              onClick={handleMenuScroll}
              className="inline-flex items-center justify-center gap-5 px-14 py-7 bg-charcoal text-maaviiYellow rounded-[2.5rem] font-black text-3xl hover:bg-maaviiOrange hover:text-white transition-all hover:scale-110 shadow-[0_30px_60px_rgba(249,115,22,0.4)] border-b-8 border-maaviiChocolate group"
            >
              {t('viewMenu')}
              <ArrowRight className="w-10 h-10 group-hover:translate-x-3 transition-transform" />
            </a>
          </div>
        </div>

        <div className="relative group">
          {/* Main Visual - BOLDER FRAME */}
          <div className="aspect-square relative rounded-[4rem] overflow-hidden shadow-[0_60px_100px_rgba(0,0,0,0.3)] border-[20px] border-white rotate-2 transition-all group-hover:rotate-0 duration-700">
            <img
              src="/images/food/cameroonian-meal-platter.jpg"
              alt="Maavii Culinary Art"
              className="w-full h-full object-cover scale-110 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maaviiChocolate/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>

            {/* Centered Overlay Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 scale-150">
              <Logo size="lg" />
            </div>
            {/* Visual texture */}
            <div className="absolute inset-0 african-pattern opacity-10 pointer-events-none"></div>
          </div>

          {/* Floating tribal badge - LARGER */}
          <div className="absolute -top-16 -right-16 vibrant-gradient p-14 rounded-full shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-[10px] border-white text-white animate-spin-slow hover:animate-none hidden xl:block z-20 cursor-default">
            <p className="text-center">
              <span className="block text-sm font-black uppercase tracking-[0.3em] mb-2 opacity-80">Vibrant</span>
              <span className="block text-6xl font-black leading-none drop-shadow-2xl">Fusion</span>
              <span className="block text-sm font-black opacity-80 mt-3 tracking-[0.3em] uppercase">TASTE</span>
            </p>
          </div>

          <div className="absolute -bottom-12 -left-8 bg-white py-8 px-12 rounded-[3rem] shadow-2xl border-l-[20px] border-maaviiTeal -rotate-3 group-hover:rotate-0 transition-all duration-500">
            <span className="text-5xl font-black text-charcoal tracking-tighter uppercase block leading-none">Authentic</span>
            <span className="text-3xl font-black text-maaviiTeal tracking-widest uppercase block mt-2">& BOLD</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
