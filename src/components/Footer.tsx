
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-charcoal/5 bg-cream">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-deepRed flex items-center justify-center rounded-xl rotate-3 shadow-lg">
              <span className="text-cream font-bold text-xl">M</span>
            </div>
            <div>
              <span className="font-black tracking-tighter text-charcoal text-xl block leading-none">MAAVII</span>
              <span className="text-[10px] font-bold text-maaviiTeal uppercase tracking-[0.2em]">Global Eats</span>
            </div>
          </div>
          
          <p className="text-charcoal/40 text-sm font-serif text-center md:text-left">
            © {new Date().getFullYear()} MAAVII Cuisine. Crafted with passion & spice.<br/>
            Proudly serving premium African & Korean fusion.
          </p>

          <div className="flex items-center gap-8">
            <div className="flex gap-6 text-sm font-bold text-charcoal/60">
              <a href="#" className="hover:text-maaviiOrange transition-colors">Privacy</a>
              <a href="#" className="hover:text-maaviiOrange transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
