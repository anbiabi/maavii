'use client';

import React from 'react';
import { Heart, Globe, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-4 relative bg-cream overflow-hidden scroll-mt-24">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-maaviiYellow/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-maaviiTeal/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1">
          {/* Artisanal Image Frame */}
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border-8 border-maaviiYellow shadow-2xl relative rotate-2 transition-transform hover:rotate-0 duration-500">
            <img
              src="/images/maavi.png"
              alt="Culinary Passion"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 to-transparent"></div>
          </div>

          {/* Floating Stats or Badges */}
          <div className="absolute -bottom-6 -right-6 bg-maaviiOrange p-6 rounded-2xl shadow-xl border-4 border-cream -rotate-3 hidden md:block">
            <div className="flex items-center gap-4">
              <Heart className="text-cream w-8 h-8 animate-pulse" />
              <div className="text-cream">
                <p className="font-black text-xl leading-none">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Handcrafted</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-10 order-1 lg:order-2">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-maaviiTeal/10 rounded-full text-maaviiTeal font-black text-xs uppercase tracking-[0.2em]">
            <Utensils size={14} />
            Our Heritage
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-charcoal leading-[1.1] tracking-tighter">
            {t('aboutTitle').split(' ').map((word, i) => (
              <span key={i} className={word === "Maavii's" || word === 'Cuisine' ? 'text-maaviiOrange block' : 'inline-block mr-3'}>
                {word}
              </span>
            ))}
          </h2>

          <div className="space-y-6">
            <p className="text-2xl text-charcoal/90 font-serif leading-relaxed italic border-l-8 border-maaviiYellow pl-6">
              {t('aboutBody1')}
            </p>
            <p className="text-lg text-charcoal/70 font-serif leading-relaxed">
              {t('aboutBody2')}
            </p>
          </div>

          <div className="pt-8 border-t-2 border-dashed border-charcoal/10">
            <div className="flex flex-wrap gap-8 items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center text-maaviiYellow shadow-lg">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="font-black text-sm uppercase tracking-widest text-charcoal/60">{t('aboutBody3')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tribal decorative line at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-4 african-pattern opacity-20"></div>
    </section>
  );
};

export default About;