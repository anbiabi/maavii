"use client";

import React, { useState, useMemo } from 'react';
import { Plus, Flame, Search, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../constants';
import { Category } from '../types';

type FilterCategory = 'all' | Category;

const Menu: React.FC = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<FilterCategory>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch =
        item.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description[language].toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm, language]);

  const handleAddToCart = (item: typeof MENU_ITEMS[0]) => {
    addToCart(item);
    setAddedIds(prev => new Set(prev).add(item.id));
    setTimeout(() => {
      setAddedIds(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }, 1500);
  };

  return (
    <section id="menu" className="py-24 px-4 bg-maaviiYellow/10 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-8">
          <h2 className="text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter">
            Our <span className="text-maaviiOrange italic">Original Menu</span>
          </h2>

          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
              <Search className="w-6 h-6 text-charcoal/40 group-focus-within:text-maaviiTeal transition-colors" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full pl-16 pr-12 py-5 bg-cream rounded-2xl font-bold text-lg border-4 border-charcoal/5 focus:border-maaviiTeal outline-none transition-all shadow-xl placeholder:text-charcoal/30"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute inset-y-0 right-6 flex items-center text-charcoal/40 hover:text-deepRed"
              >
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-lg border-b-4 ${activeCategory === 'all'
                  ? 'bg-charcoal text-maaviiYellow border-black -translate-y-1'
                  : 'bg-cream text-charcoal border-charcoal/10 hover:border-charcoal'
                }`}
            >
              {t('all')}
            </button>
            <button
              onClick={() => setActiveCategory('main')}
              className={`px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-lg border-b-4 ${activeCategory === 'main'
                  ? 'bg-maaviiTeal text-maaviiYellow border-teal-900 -translate-y-1'
                  : 'bg-cream text-charcoal border-charcoal/10 hover:border-maaviiTeal'
                }`}
            >
              {t('mainDishes')}
            </button>
            <button
              onClick={() => setActiveCategory('snack')}
              className={`px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-lg border-b-4 ${activeCategory === 'snack'
                  ? 'bg-maaviiOrange text-maaviiYellow border-orange-900 -translate-y-1'
                  : 'bg-cream text-charcoal border-charcoal/10 hover:border-maaviiOrange'
                }`}
            >
              {t('snacksDesserts')}
            </button>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-cream/50 rounded-[3rem] border-4 border-dashed border-charcoal/10">
            <div className="max-w-md mx-auto space-y-6">
              <Search className="w-20 h-20 mx-auto text-charcoal/10" />
              <p className="text-2xl font-black text-charcoal/40 font-serif italic">
                {t('noResults')}
              </p>
              <button
                onClick={() => { setSearchTerm(''); setActiveCategory('all'); }}
                className="px-8 py-3 bg-charcoal text-maaviiYellow rounded-xl font-bold hover:bg-maaviiOrange transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map(item => {
              const isJustAdded = addedIds.has(item.id);

              return (
                <div key={item.id} className="group relative bg-cream rounded-[2.5rem] overflow-hidden border-4 border-charcoal/5 hover:border-maaviiOrange hover:shadow-2xl transition-all flex flex-col">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name[language]}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 left-4 bg-maaviiYellow px-4 py-2 rounded-xl font-black text-charcoal shadow-lg border-2 border-amber-900/10">
                      ₩ {item.price.toLocaleString()}
                    </div>
                    {item.category === 'main' && (
                      <div className="absolute top-4 right-4 bg-maaviiOrange p-2 rounded-full text-cream animate-pulse">
                        <Flame className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between relative">
                    <button
                      onClick={() => handleAddToCart(item)}
                      className={`absolute -top-6 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white transition-all duration-300 transform {isJustAdded ? 'bg-maaviiTeal scale-125 rotate-12' : 'bg-maaviiOrange hover:scale-110'
                        }`}
                      title="Add to Cart"
                    >
                      {isJustAdded ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      )}
                    </button>

                    <div>
                      <h3 className="text-3xl font-black text-charcoal mb-3 leading-tight uppercase tracking-tight">{item.name[language]}</h3>
                      <p className="text-charcoal/60 font-serif text-lg leading-relaxed mb-8">
                        {item.description[language]}
                      </p>
                    </div>

                    <button
                      onClick={() => handleAddToCart(item)}
                      className="w-full inline-flex items-center justify-center gap-3 bg-charcoal text-maaviiYellow py-5 rounded-2xl font-black text-lg hover:bg-maaviiOrange transition-all group/btn shadow-xl active:scale-95 opacity-0 absolute top-0 left-0"
                    >
                      <Plus className="w-6 h-6 group-hover/btn:rotate-90 transition-transform" />
                      {t('addToCart')}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;