"use client";

import React from 'react';
import { Phone, Instagram, MapPin, Send, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Maavii will get back to you soon.');
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-charcoal text-cream scroll-mt-24">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none african-pattern"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-maaviiOrange rounded-lg text-cream font-black uppercase text-xs tracking-[0.3em]">
              <Truck size={16} />
              Visit The Maavii Truck
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">{t('contactTitle')}</h2>
            <p className="text-2xl text-cream/70 font-serif leading-relaxed max-w-xl">
              From colorful festivals to city street corners, we bring the <span className="text-maaviiYellow italic">Natural African Taste</span> everywhere we go.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <a href="tel:01032142301" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-maaviiTeal flex items-center justify-center text-cream group-hover:bg-maaviiYellow group-hover:text-charcoal transition-all shadow-xl">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs font-black text-maaviiTeal uppercase tracking-[0.2em]">{t('contactPhone')}</p>
                <p className="text-2xl font-black">010-3214-2301</p>
              </div>
            </a>

            <a href="https://instagram.com/maaviifood" target="_blank" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-maaviiOrange flex items-center justify-center text-cream group-hover:bg-maaviiYellow group-hover:text-charcoal transition-all shadow-xl">
                <Instagram className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs font-black text-maaviiOrange uppercase tracking-[0.2em]">Instagram</p>
                <p className="text-2xl font-black">@maavii.fusion</p>
              </div>
            </a>
          </div>

          <div className="p-8 rounded-[2rem] border-4 border-dashed border-maaviiYellow/30 bg-maaviiYellow/5">
            <div className="flex gap-4">
              <MapPin className="text-maaviiYellow w-8 h-8 shrink-0" />
              <p className="text-xl font-bold">Based in Yangsan, South Korea. Check our IG Stories for today&apos;s parking spot!</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-cream p-10 md:p-14 rounded-[3.5rem] shadow-2xl space-y-8 text-charcoal border-[10px] border-maaviiTeal/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-maaviiTeal">{t('contactName')}</label>
              <input required type="text" className="w-full px-6 py-4 bg-charcoal/5 border-b-4 border-transparent focus:border-maaviiTeal outline-none transition-all rounded-xl font-bold" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-maaviiTeal">{t('contactEmail')}</label>
              <input required type="email" className="w-full px-6 py-4 bg-charcoal/5 border-b-4 border-transparent focus:border-maaviiTeal outline-none transition-all rounded-xl font-bold" />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-maaviiTeal">{t('contactMessage')}</label>
            <textarea required rows={4} className="w-full px-6 py-4 bg-charcoal/5 border-b-4 border-transparent focus:border-maaviiTeal outline-none transition-all rounded-xl font-bold resize-none"></textarea>
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-4 bg-maaviiTeal text-cream py-6 rounded-2xl font-black text-xl hover:bg-maaviiOrange hover:-translate-y-1 transition-all shadow-xl">
            <span className="flex items-center gap-2">
              <Send className="w-6 h-6" />
              {t('contactSubmit')}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;