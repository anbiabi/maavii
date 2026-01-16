import React, { useState } from 'react';
import { ShoppingBag, Truck, Package, Search, Filter, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const GroceryItemsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [uploadedImages, setUploadedImages] = useState<Record<string, string>>({});

  const categories = [
    { id: 'all', name: { EN: 'All Items', KR: '모든 상품' } },
    { id: 'Fresh Produce', name: { EN: 'Fresh Produce', KR: '신선 식품' } },
    { id: 'Grains & Legumes', name: { EN: 'Grains & Legumes', KR: '곡물 및 콩류' } },
    { id: 'Spices & Seasonings', name: { EN: 'Spices & Seasonings', KR: '향신료 및 양념' } },
    { id: 'Oils & Condiments', name: { EN: 'Oils & Condiments', KR: '기름 및 조미료' } }
  ];

  const handleImageUpload = (itemId: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages(prev => ({
          ...prev,
          [itemId]: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const getImageSrc = (itemId: string, defaultSrc: string) => {
    return uploadedImages[itemId] || defaultSrc;
  };

  const groceryItems = [
    {
      id: 1,
      name: { EN: 'Cameroon Black Peppercorns', KR: '카메룬 블랙 후추' },
      category: 'Spices & Seasonings',
      price: '₩8,500',
      origin: { EN: 'Cameroon', KR: '카메룬' },
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b61?w=500&h=500&fit=crop',
      description: { 
        EN: 'Authentic Cameroon black pepper for authentic African cuisine', 
        KR: '정통 아프리카 요리를 위한 카메룬산 블랙 후추' 
      }
    },
    {
      id: 2,
      name: { EN: 'Nigerian Palm Oil', KR: '나이지리아 팜 오일' },
      category: 'Oils & Condiments',
      price: '₩12,000',
      origin: { EN: 'Nigeria', KR: '나이지리아' },
      image: 'https://images.unsplash.com/photo-1585518419759-29b7ead9acc3?w=500&h=500&fit=crop',
      description: { 
        EN: 'Pure, unrefined palm oil for traditional recipes', 
        KR: '전통 레시피를 위한 순수하고 무정제 팜 오일' 
      }
    },
    {
      id: 3,
      name: { EN: 'Cassava Flour', KR: '카사바 가루' },
      category: 'Grains & Legumes',
      price: '₩6,500',
      origin: { EN: 'Cameroon', KR: '카메룬' },
      image: 'https://images.unsplash.com/photo-1585707572215-39ffed77cda5?w=500&h=500&fit=crop',
      description: { 
        EN: 'Fine cassava flour for plantain and traditional dishes', 
        KR: '플랜테인 및 전통 요리를 위한 고운 카사바 가루' 
      }
    },
    {
      id: 4,
      name: { EN: 'Dried African Chilies', KR: '말린 아프리카 칠리' },
      category: 'Spices & Seasonings',
      price: '₩7,000',
      origin: { EN: 'Ghana', KR: '가나' },
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b61?w=500&h=500&fit=crop',
      description: { 
        EN: 'Authentic African chili peppers for bold flavors', 
        KR: '강렬한 맛을 위한 정통 아프리카 칠리 고추' 
      }
    },
    {
      id: 5,
      name: { EN: 'Black Eyed Peas', KR: '블랙 아이드 피' },
      category: 'Grains & Legumes',
      price: '₩5,500',
      origin: { EN: 'Senegal', KR: '세네갈' },
      image: 'https://images.unsplash.com/photo-1599599810981-e61f0b46db74?w=500&h=500&fit=crop',
      description: { 
        EN: 'Premium quality black eyed peas', 
        KR: '프리미엄 퀄리티 블랙 아이드 피' 
      }
    },
    {
      id: 6,
      name: { EN: 'African Plantain', KR: '아프리카 플랜테인' },
      category: 'Fresh Produce',
      price: '₩4,500',
      origin: { EN: 'Cameroon', KR: '카메룬' },
      image: 'https://images.unsplash.com/photo-1599599810981-e61f0b46db74?w=500&h=500&fit=crop',
      description: { 
        EN: 'Fresh plantains for frying or cooking', 
        KR: '구이 또는 요리용 신선한 플랜테인' 
      }
    }
  ];

  const filteredItems = groceryItems.filter(item => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch = 
      item.name[language].toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description[language].toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header onCartToggle={() => {}} />
      
      <main className="min-h-screen bg-cream pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter">
              {language === 'EN' ? 'African Grocery Marketplace' : '아프리카 식료품 마켓'}
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto font-serif italic">
              {language === 'EN' 
                ? 'Authentic ingredients delivered nationwide' 
                : '정통 아프리카 식료품을 전국으로 배송해 드립니다'}
            </p>
          </div>

          <div className="mb-12">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-charcoal/40" />
                <input
                  type="text"
                  placeholder={language === 'EN' ? 'Search ingredients...' : '재료 검색...'}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-white rounded-xl border-3 border-charcoal/5 focus:border-maaviiTeal outline-none font-bold text-lg"
                />
              </div>
              <button className="flex items-center gap-2 px-6 py-4 bg-charcoal text-cream rounded-xl font-bold hover:bg-maaviiOrange transition-colors">
                <Filter className="w-5 h-5" />
                {language === 'EN' ? 'Advanced Filters' : '고급 필터'}
              </button>
            </div>

            <div className="flex flex-wrap gap-3 mt-6">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3 rounded-lg font-bold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-maaviiTeal text-cream'
                      : 'bg-cream border-2 border-charcoal/10 text-charcoal hover:border-maaviiTeal'
                  }`}
                >
                  {cat.name[language]}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredItems.map(item => (
              <div key={item.id} className="group relative bg-cream rounded-2xl overflow-hidden border-3 border-charcoal/5 hover:border-maaviiOrange hover:shadow-xl transition-all">
                <div className="h-64 overflow-hidden">
                  <img
                    src={getImageSrc(item.id.toString(), item.image)}
                    alt={item.name[language]}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <label className="absolute bottom-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 cursor-pointer transition-all shadow-md">
                    <Camera className="w-5 h-5 text-gray-600" />
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => handleImageUpload(item.id.toString(), e)}
                      className="hidden"
                    />
                  </label>
                </div>
                <div className="p-6">
                  <div className="mb-3 text-sm font-bold text-maaviiTeal uppercase tracking-wider">
                    {item.origin[language]}
                  </div>
                  <h3 className="text-xl font-black text-charcoal mb-2">{item.name[language]}</h3>
                  <p className="text-charcoal/60 font-serif text-sm mb-6">{item.description[language]}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-maaviiOrange">{item.price}</span>
                    <button className="p-3 bg-maaviiYellow rounded-lg hover:bg-maaviiGold transition-colors">
                      <ShoppingBag className="w-5 h-5 text-charcoal" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-maaviiTeal/10 rounded-2xl border-3 border-maaviiTeal">
              <div className="flex items-center gap-4 mb-6">
                <Package className="w-10 h-10 text-maaviiTeal" />
                <h3 className="text-2xl font-black text-charcoal">
                  {language === 'EN' ? 'African Grocery Box' : '아프리카 식료품 박스'}
                </h3>
              </div>
              <p className="text-charcoal/70 font-serif mb-6">
                {language === 'EN' 
                  ? 'Curated boxes with hand-picked African ingredients. Each month we select authentic, hard-to-find items perfect for traditional African cuisine in Korea.' 
                  : '정성스럽게 고른 아프리카 식료품 박스. 매월 한국에서 전통 아프리카 요리를 즐기기에 완벽한 희귀하고 정통한 재료들을 선별합니다.'}
              </p>
              <ul className="space-y-3 mb-8 text-charcoal/70 font-serif">
                <li>✓ {language === 'EN' ? 'Monthly curated selection' : '월간 큐레이션 상품'}</li>
                <li>✓ {language === 'EN' ? '20% savings vs. individual items' : '개별 상품 대비 20% 절약'}</li>
                <li>✓ {language === 'EN' ? 'Recipe cards included' : '레시피 카드 포함'}</li>
                <li>✓ {language === 'EN' ? 'Free nationwide shipping' : '전국 무료 배송'}</li>
              </ul>
              <button className="w-full px-6 py-4 bg-maaviiTeal text-cream rounded-xl font-black hover:bg-teal-700 transition-colors">
                {language === 'EN' ? 'Subscribe to Box' : '박스 구독하기'}
              </button>
            </div>

            <div className="p-8 bg-maaviiOrange/10 rounded-2xl border-3 border-maaviiOrange">
              <div className="flex items-center gap-4 mb-6">
                <Truck className="w-10 h-10 text-maaviiOrange" />
                <h3 className="text-2xl font-black text-charcoal">
                  {language === 'EN' ? 'National Delivery' : '전국 배송'}
                </h3>
              </div>
              <p className="text-charcoal/70 font-serif mb-6">
                {language === 'EN' 
                  ? 'Fast, reliable delivery to anywhere in South Korea. Orders are carefully packed and shipped with care to ensure freshness.' 
                  : '韓国 전 지역에 빠르고 안정적인 배송. 신선도를 유지하기 위해 주문 상품은 신중하게 포장 및 배송됩니다.'}
              </p>
              <ul className="space-y-3 mb-8 text-charcoal/70 font-serif">
                <li>✓ {language === 'EN' ? '2-3 day delivery' : '2-3일 배송'}</li>
                <li>✓ {language === 'EN' ? 'Real-time tracking' : '실시간 배송 추적'}</li>
                <li>✓ {language === 'EN' ? 'Secure packaging' : '안전한 포장'}</li>
                <li>✓ {language === 'EN' ? 'Guaranteed freshness' : '신선도 보장'}</li>
              </ul>
              <button className="w-full px-6 py-4 bg-maaviiOrange text-cream rounded-xl font-black hover:bg-orange-700 transition-colors">
                {language === 'EN' ? 'Track Your Order' : '주문 추적하기'}
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GroceryItemsPage;