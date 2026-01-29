'use client';

import React from 'react';
import Link from 'next/link';
import { Heart, Globe, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-4 relative bg-white overflow-hidden scroll-mt-24">
      {/* Decorative background elements - HIGHER VISIBILITY */}
      <div className="absolute inset-0 mask-overlay opacity-40 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-maaviiYellow/30 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-maaviiTeal/15 rounded-full blur-[100px] translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center relative z-10">
        <div className="relative order-2 lg:order-1">
          {/* Artisanal Image Frame - BOLDER */}
          <div className="aspect-[4/5] rounded-[4rem] overflow-hidden border-[16px] border-maaviiYellow shadow-2xl relative rotate-3 transition-all hover:rotate-0 duration-700 group">
            <img
              src="/images/maavi.png"
              alt="Culinary Passion"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maaviiChocolate/70 via-transparent to-transparent"></div>
            <div className="absolute inset-0 african-pattern opacity-10 pointer-events-none"></div>
          </div>

          {/* Floating Stats or Badges - BOLDER */}
          <div className="absolute -bottom-10 -right-10 vibrant-gradient p-10 rounded-3xl shadow-[0_30px_60px_rgba(249,115,22,0.4)] border-6 border-white -rotate-6 group-hover:rotate-0 transition-all duration-500 z-20">
            <div className="flex items-center gap-6">
              <Heart className="text-white w-12 h-12 animate-pulse" />
              <div className="text-white">
                <p className="font-black text-5xl leading-none italic mb-1">100%</p>
                <p className="text-xs font-black uppercase tracking-[0.3em] opacity-90">Handcrafted</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 order-1 lg:order-2">
          <div className="inline-flex items-center gap-4 px-8 py-3 bg-maaviiTeal text-charcoal rounded-2xl font-black text-sm uppercase tracking-[0.3em] shadow-xl border-b-4 border-black/20">
            <Utensils size={20} className="animate-bounce" />
            Our Heritage
          </div>

          <h2 className="text-6xl md:text-8xl font-black text-charcoal leading-[1] tracking-tighter">
            {t('aboutTitle').split(' ').map((word, i) => (
              <span key={i} className={word === "Maavii's" || word === 'Cuisine' ? 'text-maaviiOrange block text-stroke-vibrant transform -rotate-1' : 'inline-block mr-4'}>
                {word}
              </span>
            ))}
          </h2>

          <div className="space-y-10">
            <p className="text-3xl text-charcoal/90 font-serif leading-relaxed italic border-l-[16px] border-maaviiYellow pl-10 glass-vibrant p-10 rounded-3xl shadow-xl">
              {t('aboutBody1')}
            </p>
            <p className="text-xl text-charcoal/70 font-serif leading-relaxed px-4">
              {t('aboutBody2')}
            </p>
          </div>

          <div className="pt-12 border-t-8 border-double border-maaviiOrange/30">
            <div className="flex flex-wrap gap-10 items-center">
              <div className="flex items-center gap-5">
                <div className="w-20 h-20 bg-charcoal rounded-[2rem] flex items-center justify-center text-maaviiYellow shadow-2xl border-b-8 border-maaviiChocolate rotate-3 hover:rotate-0 transition-transform">
                  <Globe className="w-10 h-10 animate-spin-slow" />
                </div>
                <span className="font-black text-lg uppercase tracking-widest text-charcoal/80 max-w-[150px]">{t('aboutBody3')}</span>
              </div>

              <div className="ml-auto">
                <Link href="#" className="px-12 py-6 bg-maaviiTeal text-charcoal rounded-[2rem] font-black text-xl hover:bg-maaviiOrange hover:text-white transition-all hover:scale-110 shadow-2xl inline-block border-b-6 border-black/20">
                  Learn More About Us
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