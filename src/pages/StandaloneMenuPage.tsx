import React, { useState, useMemo, useEffect } from 'react';
import { Plus, Flame, Search, X, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { MENU_ITEMS } from '../constants';

type Category = 'all' | 'main' | 'snack';

const StandaloneMenuPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [carouselStates, setCarouselStates] = useState<Record<string, number>>({});

  // Food images from the food folder with proper matching to menu items
  const foodImages = [
    {
      url: 'https://braziliankitchenabroad.com/wp-content/uploads/2022/11/Funnel-Cake-Bites-Steps-4-1024x683.png',
      name: 'fried_dough_balls',
      keywords: ['dough', 'balls', 'golden', 'fried']
    },
    {
      url: 'https://braziliankitchenabroad.com/wp-content/uploads/2022/11/Funnel-Cake-Bites-Steps-5.png',
      name: 'fried_dough_balls',
      keywords: ['dough', 'balls', 'golden', 'fried']
    },
    {
      url: 'https://braziliankitchenabroad.com/wp-content/uploads/2022/11/Funnel-Cake-Bites-Steps-1.png',
      name: 'fried_dough_balls',
      keywords: ['dough', 'balls', 'golden', 'fried']
    },
    {
      url: 'https://nutritionrefined.com/wp-content/uploads/2023/08/homemade-garden-salad-featured.jpg',
      name: 'garden_salad',
      keywords: ['salad', 'lettuce', 'tomato', 'cheese', 'onion']
    },
    {
      url: 'https://feelgoodfoodie.net/wp-content/uploads/2023/03/Everyday-Garden-Salad-07.jpg',
      name: 'garden_salad',
      keywords: ['salad', 'lettuce', 'tomato', 'cheese', 'onion']
    },
    {
      url: 'https://veenaazmanov.com/wp-content/uploads/2022/04/Garden-Salad-Recipe23.jpg',
      name: 'garden_salad',
      keywords: ['salad', 'lettuce', 'tomato', 'cheese', 'onion']
    },
    {
      url: 'https://www.recipetineats.com/tachyon/2022/07/Crispy-Baked-Chicken-Drumsticks_5-SQ.jpg',
      name: 'chicken_wings',
      keywords: ['chicken', 'wings', 'drumsticks', 'grilled', 'roasted']
    },
    {
      url: 'https://www.freshsavory.com/wp-content/uploads/2025/10/chicken-drumsticks-resting.jpg',
      name: 'chicken_wings',
      keywords: ['chicken', 'wings', 'drumsticks', 'grilled', 'roasted']
    },
    {
      url: 'https://thecookful.com/wp-content/uploads/2024/04/Crispiest-Chicken-Drumsticks-DSC_3675-square-1200.jpg',
      name: 'chicken_wings',
      keywords: ['chicken', 'wings', 'drumsticks', 'grilled', 'roasted']
    },
    {
      url: 'https://cdn.cuisineandtravel.com/wp-content/uploads/2024/05/02121047/Chicken-Kabobs-on-Grill-Pan-web.jpg',
      name: 'chicken_skewers',
      keywords: ['skewers', 'kabobs', 'chicken', 'grilled', 'meat']
    },
    {
      url: 'https://www.stuckonsweet.com/wp-content/uploads/2025/06/Grilled-Skewers-web-27-scaled.jpg',
      name: 'chicken_skewers',
      keywords: ['skewers', 'kabobs', 'chicken', 'grilled', 'meat']
    },
    {
      url: 'https://www.wholesomeyum.com/wp-content/uploads/2021/07/wholesomeyum-Grilled-Mediterranean-Chicken-Kabobs-With-Vegetables-10.jpg',
      name: 'chicken_skewers',
      keywords: ['skewers', 'kabobs', 'chicken', 'grilled', 'meat']
    },
    {
      url: 'https://www.errenskitchen.com/wp-content/uploads/2024/10/Apple-Fitters-1-9-683x1024.jpg',
      name: 'fried_pastries',
      keywords: ['pastries', 'fritters', 'fried', 'golden', 'cake']
    },
    {
      url: 'https://cleobuttera.com/wp-content/uploads/2015/06/main-pist-wl.jpg',
      name: 'fried_pastries',
      keywords: ['pastries', 'fritters', 'fried', 'golden', 'cake']
    },
    {
      url: 'https://preppykitchen.com/wp-content/uploads/2023/09/Apple-Fritters-Blog-1.jpg',
      name: 'fried_pastries',
      keywords: ['pastries', 'fritters', 'fried', 'golden', 'cake']
    },
    {
      url: 'https://i.ytimg.com/vi/outElNf9I5E/maxresdefault.jpg',
      name: 'dense_cake_slice',
      keywords: ['cake', 'slice', 'dense', 'moist', 'baking']
    },
    {
      url: 'https://www.hummingbirdhigh.com/wp-content/uploads/2020/07/01_cassava-cake_IMG_0037.jpg',
      name: 'dense_cake_slice',
      keywords: ['cake', 'slice', 'dense', 'moist', 'baking']
    },
    {
      url: 'https://imhungryforthat.com/wp-content/uploads/2024/02/Cassava-Cake-recipe-735x1103.jpg',
      name: 'dense_cake_slice',
      keywords: ['cake', 'slice', 'dense', 'moist', 'baking']
    },
    {
      url: 'https://www.nordicware.com/wp-content/uploads/2023/08/Bee-Sting5539-KC-copy_1K.jpg',
      name: 'bundt_cake',
      keywords: ['cake', 'ring', 'bundt', 'golden', 'yellow']
    },
    {
      url: 'https://mojo.generalmills.com/api/public/content/IZuAKP5y00eXZiqO6MFZaw_webp_base.webp?v=ad50857d&t=191ddcab8d1c415fa10fa00a14351227',
      name: 'bundt_cake',
      keywords: ['cake', 'ring', 'bundt', 'golden', 'yellow']
    },
    {
      url: 'https://alicezaslavsky.com/wp-content/uploads/Golden-bundt-cake-1_1.jpg',
      name: 'bundt_cake',
      keywords: ['cake', 'ring', 'bundt', 'golden', 'yellow']
    },
    {
      url: 'https://images.food52.com/WlPvKHlWDDn2WJZ5VuQNZ5PtX9c=/8b707c5e-5c49-4997-8655-707cd5cc0b6a--hotmilksponge-lemoncurd.jpg',
      name: 'sliced_cake',
      keywords: ['cake', 'sliced', 'sponge', 'yellow', 'fluffy']
    },
    {
      url: 'https://letthebakingbegin.com/wp-content/uploads/2017/09/Simple-Yellow-Sponge-Cake-foolproof-recipe-for-a-fluffy-delicious-yellow-cake-that-can-be-used-for-cakes-and-cupcakes-by-Let-the-Baking-Begin-2-5-2.jpg',
      name: 'sliced_cake',
      keywords: ['cake', 'sliced', 'sponge', 'yellow', 'fluffy']
    },
    {
      url: 'https://stylesweet.com/wp-content/uploads/2023/03/Yellow8inchCake_trimmed.jpg',
      name: 'sliced_cake',
      keywords: ['cake', 'sliced', 'sponge', 'yellow', 'fluffy']
    },
    {
      url: 'https://blog.amigofoods.com/wp-content/uploads/2022/05/brazilian-pastel.jpg',
      name: 'fried_pastries',
      keywords: ['pastries', 'fritters', 'fried', 'golden', 'cake']
    },
    {
      url: 'https://spicetraveller.com/wp-content/uploads/2025/04/Brazilian-Pastels-with-banana-1024x685.jpg',
      name: 'fried_pastries',
      keywords: ['pastries', 'fritters', 'fried', 'golden', 'cake']
    },
    {
      url: 'http://static1.squarespace.com/static/59779bc11e5b6c85f3cae024/597f93e2cab339ae809fe107/5bf5e85b0e2e726025ca9237/1542848050571/edited-0011.jpg?format=1500w',
      name: 'fried_pastries',
      keywords: ['pastries', 'fritters', 'fried', 'golden', 'cake']
    },
    {
      url: 'https://c8.alamy.com/comp/2AB87T3/wooden-bowl-with-salted-brown-peanuts-2AB87T3.jpg',
      name: 'roasted_peanuts',
      keywords: ['nuts', 'peanuts', 'roasted', 'caramelized', 'snack']
    },
    {
      url: 'https://likehotketo.com/wp-content/uploads/Like-Hot-Keto-Chinese-Spiced-Boiled-Peanuts-16x9-1.jpg',
      name: 'roasted_peanuts',
      keywords: ['nuts', 'peanuts', 'roasted', 'caramelized', 'snack']
    },
    {
      url: 'https://www.thalimethod.com/wp-content/uploads/2025/07/seasoning-cooling-roasted-spices.jpg',
      name: 'roasted_peanuts',
      keywords: ['nuts', 'peanuts', 'roasted', 'caramelized', 'snack']
    },
    {
      url: 'https://roamingtaste.com/wp-content/uploads/pancakes-ingredients-1.jpg',
      name: 'rolled_crepes',
      keywords: ['crepes', 'pancakes', 'rolled', 'thin', 'flat']
    },
    {
      url: 'https://www.ice.edu/sites/default/files/styles/width_1000/public/content/blog-article/header-image/crepes%20header.jpg.webp?itok=bBgA_ktP',
      name: 'rolled_crepes',
      keywords: ['crepes', 'pancakes', 'rolled', 'thin', 'flat']
    },
    {
      url: 'https://i.ytimg.com/vi/MFlj9d7endY/sddefault.jpg',
      name: 'rolled_crepes',
      keywords: ['crepes', 'pancakes', 'rolled', 'thin', 'flat']
    }
  ];

  // Extract just the URLs for backward compatibility
  const foodImageUrls = foodImages.map(img => img.url);

  // Function to match menu items to relevant food images based on keywords
  const getMenuItemImage = (menuItem: any, index: number) => {
    const itemName = menuItem.name.EN.toLowerCase();
    
    // Create a mapping of menu item names to relevant images
    if (itemName.includes('chicken') && itemName.includes('wings')) {
      return foodImages.filter(img => img.keywords.some(keyword => 
        keyword.includes('chicken') || keyword.includes('wings') || keyword.includes('drumsticks')
      ));
    } else if (itemName.includes('meat') && itemName.includes('skewers')) {
      return foodImages.filter(img => img.keywords.some(keyword => 
        keyword.includes('skewers') || keyword.includes('kabobs') || keyword.includes('meat') || keyword.includes('grilled')
      ));
    } else if (itemName.includes('jollof') && itemName.includes('rice')) {
      // Since we don't have specific rice images, we'll use general food images
      return foodImages;
    } else if (itemName.includes('fried') && (itemName.includes('dough') || itemName.includes('balls'))) {
      return foodImages.filter(img => img.keywords.some(keyword => 
        keyword.includes('dough') || keyword.includes('balls') || keyword.includes('fried')
      ));
    } else if (itemName.includes('nuts') || itemName.includes('peanuts')) {
      return foodImages.filter(img => img.keywords.some(keyword => 
        keyword.includes('nuts') || keyword.includes('peanuts') || keyword.includes('roasted')
      ));
    } else if (itemName.includes('bread') && itemName.includes('pudding')) {
      return foodImages.filter(img => img.keywords.some(keyword => 
        keyword.includes('cake') || keyword.includes('dense') || keyword.includes('moist')
      ));
    } else if (itemName.includes('ring') || itemName.includes('cake')) {
      return foodImages.filter(img => img.keywords.some(keyword => 
        keyword.includes('cake') || keyword.includes('ring') || keyword.includes('bundt')
      ));
    } else {
      // Default fallback to all images
      return foodImages;
    }
  };

  // Function to get multiple images for each menu item based on matching
  const getItemImages = (item: any) => {
    const relevantImages = getMenuItemImage(item, 0);
    
    // Use item ID to create a consistent starting point for image selection
    let hash = 0;
    for (let i = 0; i < item.id.length; i++) {
      hash = item.id.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    // Select 3 different images for each item based on the hash
    const startIndex = Math.abs(hash) % relevantImages.length;
    const images = [];
    for (let i = 0; i < 3; i++) {
      images.push(relevantImages[(startIndex + i) % relevantImages.length].url);
    }
    return images;
  };

  // Function to handle next image in carousel
  const nextImage = (itemId: string) => {
    setCarouselStates(prev => {
      const currentIndex = prev[itemId] || 0;
      const totalImages = 3; // We have 3 images per item
      const nextIndex = (currentIndex + 1) % totalImages;
      return { ...prev, [itemId]: nextIndex };
    });
  };

  // Function to handle previous image in carousel
  const prevImage = (itemId: string) => {
    setCarouselStates(prev => {
      const currentIndex = prev[itemId] || 0;
      const totalImages = 3;
      const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
      return { ...prev, [itemId]: prevIndex };
    });
  };

  // Function to get current image based on carousel state
  const getCurrentImage = (item: any) => {
    const images = getItemImages(item);
    const currentIndex = carouselStates[item.id] || 0;
    return images[currentIndex];
  };

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter(item => {
      const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
      const matchesSearch = 
        item.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description[language].toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm, language]);

  // Group items by category for McDonald's style layout
  const groupedItems = {
    main: filteredItems.filter(item => item.category === 'main'),
    snack: filteredItems.filter(item => item.category === 'snack')
  };
  
  // Auto-rotation effect for carousels
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselStates(prev => {
        const newState = {...prev};
        // Get all unique item IDs that appear in the current view
        const allItems = [...groupedItems.main, ...groupedItems.snack];
        
        allItems.forEach(item => {
          const currentIndex = prev[item.id] || 0;
          const totalImages = 3;
          const nextIndex = (currentIndex + 1) % totalImages;
          newState[item.id] = nextIndex;
        });
        
        return newState;
      });
    }, 5000); // Rotate every 5 seconds
    
    return () => clearInterval(interval);
  }, [groupedItems.main, groupedItems.snack]);

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-maaviiOrange py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-black text-center text-charcoal uppercase tracking-tighter">
            <span className="text-maaviiOrange">MAAVII'S</span> MENU
          </h1>
          <p className="text-center text-lg text-charcoal/70 mt-2 font-serif italic">
            {t('heroTagline')}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto relative group">
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

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

        {/* Menu Categories - McDonald's Style Layout */}
        {(activeCategory === 'all' || activeCategory === 'main') && groupedItems.main.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Star className="text-maaviiTeal mr-3" size={32} />
              <h2 className="text-3xl md:text-4xl font-black text-maaviiTeal uppercase tracking-tight">
                {t('mainDishes')}
              </h2>
              <div className="flex-grow ml-4 border-t-2 border-charcoal/20"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedItems.main.map(item => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-charcoal/10 hover:shadow-xl transition-all">
                  <div className="relative">
                    <div className="relative h-56">
                      <img 
                        src={getCurrentImage(item)} 
                        alt={item.name[language]} 
                        className="w-full h-full object-cover"
                      />
                      <button 
                        onClick={() => prevImage(item.id)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => nextImage(item.id)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
                        {[0, 1, 2].map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCarouselStates(prev => ({ ...prev, [item.id]: idx }))}
                            className={`w-2 h-2 rounded-full ${carouselStates[item.id] === idx ? 'bg-white' : 'bg-white/50'}`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-maaviiYellow px-3 py-1 rounded-full font-black text-charcoal shadow-md">
                      ₩ {item.price.toLocaleString()}
                    </div>
                    {item.category === 'main' && (
                      <div className="absolute top-4 left-4 bg-maaviiOrange p-2 rounded-full text-cream">
                        <Flame className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-black text-charcoal mb-2 uppercase tracking-tight">
                      {item.name[language]}
                    </h3>
                    <p className="text-charcoal/70 font-serif mb-4 text-sm leading-relaxed">
                      {item.description[language]}
                    </p>
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-cream py-3 rounded-xl font-bold hover:bg-maaviiOrange transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      {t('addToCart')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {(activeCategory === 'all' || activeCategory === 'snack') && groupedItems.snack.length > 0 && (
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <Star className="text-maaviiOrange mr-3" size={32} />
              <h2 className="text-3xl md:text-4xl font-black text-maaviiOrange uppercase tracking-tight">
                {t('snacksDesserts')}
              </h2>
              <div className="flex-grow ml-4 border-t-2 border-charcoal/20"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {groupedItems.snack.map(item => (
                <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-charcoal/10 hover:shadow-xl transition-all">
                  <div className="relative">
                    <div className="relative h-56">
                      <img 
                        src={getCurrentImage(item)} 
                        alt={item.name[language]} 
                        className="w-full h-full object-cover"
                      />
                      <button 
                        onClick={() => prevImage(item.id)}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button 
                        onClick={() => nextImage(item.id)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1 z-10">
                        {[0, 1, 2].map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCarouselStates(prev => ({ ...prev, [item.id]: idx }))}
                            className={`w-2 h-2 rounded-full ${carouselStates[item.id] === idx ? 'bg-white' : 'bg-white/50'}`}
                            aria-label={`Go to image ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-maaviiYellow px-3 py-1 rounded-full font-black text-charcoal shadow-md">
                      ₩ {item.price.toLocaleString()}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-black text-charcoal mb-2 uppercase tracking-tight">
                      {item.name[language]}
                    </h3>
                    <p className="text-charcoal/70 font-serif mb-4 text-sm leading-relaxed">
                      {item.description[language]}
                    </p>
                    <button 
                      onClick={() => addToCart(item)}
                      className="w-full inline-flex items-center justify-center gap-2 bg-charcoal text-cream py-3 rounded-xl font-bold hover:bg-maaviiOrange transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      {t('addToCart')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* No Results */}
        {filteredItems.length === 0 && (
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
        )}
      </main>

      {/* Back to Top Button */}
      <div className="fixed bottom-6 right-6">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="bg-maaviiOrange text-cream p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
          aria-label="Back to top"
        >
          ↑
        </button>
      </div>
    </div>
  );
};

export default StandaloneMenuPage;