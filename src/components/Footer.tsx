"use client";

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-charcoal relative overflow-hidden text-cream border-t-[8px] border-maaviiOrange">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none african-pattern"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-2xl rotate-3 shadow-2xl border-b-4 border-maaviiOrange">
              <span className="text-maaviiOrange font-black text-3xl italic">M</span>
            </div>
            <div>
              <span className="font-black tracking-tighter text-white text-3xl block leading-none italic uppercase">MAAVII<span className="text-maaviiOrange">S</span></span>
              <span className="text-xs font-black text-maaviiTeal uppercase tracking-[0.4em] mt-1 block">Culinary Fusion</span>
            </div>
          </div>

          <p className="text-cream/60 text-lg font-serif text-center md:text-left leading-relaxed max-w-md italic">
            © {new Date().getFullYear()} <span className="text-maaviiYellow font-black">MAAVII</span>. Crafted with passion, heritage & the perfect level of spice.
          </p>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-10 text-sm font-black uppercase tracking-[0.3em]">
              <a href="#" className="text-maaviiYellow hover:text-maaviiOrange transition-all hover:scale-110">Privacy</a>
              <a href="#" className="text-maaviiYellow hover:text-maaviiOrange transition-all hover:scale-110">Terms</a>
            </div>
            <div className="text-[10px] font-black text-maaviiTeal uppercase tracking-widest bg-white/5 px-4 py-1 rounded-full">
              Made in Yangsan with Love
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
