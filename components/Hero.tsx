
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
    <section id="home" className="relative pt-32 pb-20 px-4 overflow-hidden scroll-mt-24">
      {/* Pattern Background Overlay */}
      <div className="absolute top-0 right-0 w-1/2 h-full african-pattern opacity-10 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-10 z-10">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-maaviiYellow text-amber-900 rounded-2xl font-black text-sm uppercase tracking-widest shadow-lg rotate-1">
            <Flame className="w-5 h-5 text-maaviiOrange" />
            {t('heroTagline')}
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-charcoal leading-[1.1] tracking-tighter">
            {t('heroTitle').split(' ').map((word, i) => (
              <span key={i} className={word === '&' || word === 'Fusion' ? 'text-maaviiOrange' : 'inline-block mr-3'}>
                {word}
                {i === 2 && <br className="hidden md:block" />}
              </span>
            ))}
          </h1>
          
          <p className="text-2xl text-charcoal/80 font-serif max-w-lg leading-snug border-l-8 border-maaviiTeal pl-6 italic">
            Experience the soulful heat of West Africa blended with the refined umami of Korean traditions. Handcrafted daily with premium ingredients.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#menu" 
              onClick={handleMenuScroll}
              className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-charcoal text-maaviiYellow rounded-2xl font-black text-xl hover:bg-maaviiOrange hover:text-white transition-all hover:scale-105 shadow-xl"
            >
              {t('viewMenu')}
              <ArrowRight className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="relative group">
          {/* Main Visual */}
          <div className="aspect-square relative rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-maaviiYellow rotate-3 transition-transform group-hover:rotate-0 duration-700">
            <img 
              src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=1200&auto=format&fit=crop" 
              alt="Maavii Culinary Art" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-maaviiOrange/60 to-transparent"></div>
            
            {/* Centered Overlay Logo */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <Logo size="lg" />
            </div>
          </div>

          {/* Floating tribal badge */}
          <div className="absolute -top-10 -right-10 bg-maaviiTeal p-8 rounded-full shadow-2xl border-4 border-cream text-cream animate-bounce-slow hidden xl:block">
            <p className="text-center">
              <span className="block text-xs font-black uppercase">Vibrant</span>
              <span className="block text-3xl font-black leading-none">Fusion</span>
              <span className="block text-xs font-bold opacity-80 mt-1">TASTE</span>
            </p>
          </div>

          <div className="absolute -bottom-8 left-12 bg-cream py-4 px-8 rounded-2xl shadow-xl border-4 border-maaviiTeal -rotate-2">
            <span className="text-2xl font-black text-maaviiTeal tracking-tight uppercase">Authentic & Bold</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
