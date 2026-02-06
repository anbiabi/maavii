'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Globe, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 md:py-32 px-4 relative bg-white overflow-hidden scroll-mt-24">
      {/* Decorative background elements - HIGHER VISIBILITY */}
      <div className="absolute inset-0 mask-overlay opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-maaviiYellow/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-maaviiTeal/15 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
        <div className="relative order-2 lg:order-1 px-4 sm:px-0">
          {/* Artisanal Image Frame - BOLDER */}
          <div className="aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border-[10px] md:border-[16px] border-maaviiYellow shadow-2xl relative rotate-3 transition-all hover:rotate-0 duration-700 group">
            <img
              src="/images/maavi.png"
              alt="Culinary Passion"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maaviiChocolate/70 via-transparent to-transparent"></div>
            <div className="absolute inset-0 african-pattern opacity-10 pointer-events-none"></div>
          </div>

          {/* Floating Stats or Badges - BOLDER */}
          <div className="absolute -bottom-6 md:-bottom-10 -right-2 md:-right-10 vibrant-gradient p-6 md:p-10 rounded-2xl md:rounded-3xl shadow-[0_20px_40px_rgba(249,115,22,0.3)] md:shadow-[0_30px_60px_rgba(249,115,22,0.4)] border-4 md:border-6 border-white -rotate-6 group-hover:rotate-0 transition-all duration-500 z-20 hover:animate-wiggle">
            <div className="flex items-center gap-4 md:gap-6">
              <Heart className="text-white w-8 h-8 md:w-12 md:h-12 animate-pulse" />
              <div className="text-white">
                <p className="font-black text-3xl md:text-5xl leading-none italic mb-1">100%</p>
                <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-90">Handcrafted</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10 md:space-y-12 order-1 lg:order-2">
          <div className="inline-flex items-center gap-3 md:gap-4 px-6 py-2 md:px-8 md:py-3 bg-maaviiTeal text-charcoal rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] shadow-xl border-b-4 border-black/20 hover:animate-jelly transition-all">
            <Utensils size={18} className="animate-bounce" />
            Our Heritage
          </div>

          <h2 className="text-5xl md:text-8xl font-black text-charcoal leading-[1] tracking-tighter">
            {t('aboutTitle').split(' ').map((word, i) => (
              <span key={i} className={word === "Maavii's" || word === 'Cuisine' ? 'text-maaviiOrange block text-stroke-vibrant transform -rotate-1 hover:animate-wiggle cursor-default' : 'inline-block mr-3 md:mr-4 hover:scale-110 transition-transform cursor-default'}>
                {word}
              </span>
            ))}
          </h2>

          <div className="space-y-8 md:space-y-10">
            <p className="text-xl md:text-3xl text-charcoal/90 font-serif leading-relaxed italic border-l-[10px] md:border-l-[16px] border-maaviiYellow pl-6 md:pl-10 glass-vibrant p-7 md:p-10 rounded-2xl md:rounded-3xl shadow-xl hover:animate-float transition-all">
              {t('aboutBody1')}
            </p>
            <p className="text-base md:text-xl text-charcoal/70 font-serif leading-relaxed px-2 md:px-4">
              {t('aboutBody2')}
            </p>
          </div>

          <div className="pt-10 md:pt-12 border-t-8 border-double border-maaviiOrange/30">
            <div className="flex flex-col sm:flex-row gap-8 md:gap-10 items-center justify-center sm:justify-start">
              <div className="flex items-center gap-4 md:gap-5">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-charcoal rounded-2xl md:rounded-[2rem] flex items-center justify-center text-maaviiYellow shadow-2xl border-b-6 md:border-b-8 border-maaviiChocolate rotate-3 hover:rotate-0 transition-transform hover:animate-jelly">
                  <Globe className="w-8 h-8 md:w-10 md:h-10 animate-spin-slow" />
                </div>
                <span className="font-black text-base md:text-lg uppercase tracking-widest text-charcoal/80 max-w-[150px]">{t('aboutBody3')}</span>
              </div>

              <div className="sm:ml-auto w-full sm:w-auto text-center sm:text-left">
                <Link href="/about" className="w-full sm:w-auto px-10 py-5 md:px-12 md:py-6 bg-maaviiTeal text-charcoal rounded-[2rem] font-black text-lg md:text-xl hover:bg-maaviiOrange hover:text-white transition-all hover:scale-110 shadow-2xl inline-block border-b-6 border-black/20">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tribal decorative line at bottom - MUCH STRONGER */}
      <div className="absolute bottom-0 left-0 right-0 h-12 african-pattern opacity-60"></div>
    </section>
  );
};

export default About;