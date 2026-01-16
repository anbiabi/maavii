
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

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description[language].toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm, language]);

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
              className={`px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-lg border-b-4 ${
                activeCategory === 'all' 
                ? 'bg-charcoal text-cream border-black -translate-y-1' 
                : 'bg-cream text-charcoal border-charcoal/10 hover:border-charcoal'
              }`}
            >
              {t('all')}
            </button>
            <button 
              onClick={() => setActiveCategory('main')}
              className={`px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-lg border-b-4 ${
                activeCategory === 'main' 
                ? 'bg-maaviiTeal text-cream border-teal-900 -translate-y-1' 
                : 'bg-cream text-charcoal border-charcoal/10 hover:border-maaviiTeal'
              }`}
            >
              {t('mainDishes')}
            </button>
            <button 
              onClick={() => setActiveCategory('snack')}
              className={`px-8 py-4 rounded-2xl font-black text-lg transition-all shadow-lg border-b-4 ${
                activeCategory === 'snack' 
                ? 'bg-maaviiOrange text-cream border-orange-900 -translate-y-1' 
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
                className="px-8 py-3 bg-charcoal text-cream rounded-xl font-bold hover:bg-maaviiOrange transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredItems.map(item => (
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
                
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-black text-charcoal mb-3 leading-tight uppercase tracking-tight">{item.name[language]}</h3>
                    <p className="text-charcoal/60 font-serif text-lg leading-relaxed mb-8">
                      {item.description[language]}
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full inline-flex items-center justify-center gap-3 bg-charcoal text-cream py-5 rounded-2xl font-black text-lg hover:bg-maaviiOrange transition-all group/btn shadow-xl active:scale-95"
                  >
                    <Plus className="w-6 h-6 group-hover/btn:rotate-90 transition-transform" />
                    {t('addToCart')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;