import React, { useState } from 'react';
import { Camera, Phone, MapPin, Instagram, Heart, Flame, Utensils } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MenuItemsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const { addToCart } = useCart();
  const [uploadedImages, setUploadedImages] = useState<Record<string, string>>({});

  const handleImageUpload = (section: string, event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImages(prev => ({
          ...prev,
          [section]: e.target?.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const getImageSrc = (section: string, defaultSrc: string) => {
    return uploadedImages[section] || defaultSrc;
  };

  const menuItems = [
    {
      name: "Grilled Chicken Wings",
      desc: language === 'EN' 
        ? "Crispy, juicy, seasoned to perfection" 
        : "바삭하고 육즙이 풍부하며 완벽하게 양념한 날개 요리",
      category: "main"
    },
    {
      name: "Grilled Meat Skewers",
      desc: language === 'EN' 
        ? "Tender beef or chicken, marinated and char-grilled" 
        : "부드러운 소고기 또는 닭고기, 밀가 마리네이드 후 직화로 구움",
      category: "main"
    },
    {
      name: "Fresh Garden Salad",
      desc: language === 'EN' 
        ? "Crisp lettuce, ripe tomatoes, onions, and cheese, served with dressing on the side" 
        : "신선한 양상추, 익은 토마토, 양파, 치즈, 드레싱 별도 제공",
      category: "snack"
    },
    {
      name: "Golden Fried Dough Balls",
      desc: language === 'EN' 
        ? "Crunchy on the outside, soft on the inside; available in sweet or savory options" 
        : "겉은 바삭하고 속은 부드러운 도우볼, 단맛 또는 짭짤한 맛으로 제공",
      category: "snack"
    },
    {
      name: "Mini Fried Dough Balls",
      desc: language === 'EN' 
        ? "Bite-sized delights bursting with flavor" 
        : "작은 크기로 한입에 즐기는 풍부한 맛",
      category: "snack"
    },
    {
      name: "Caramelized Nuts",
      desc: language === 'EN' 
        ? "Sweet, crunchy, and irresistibly addictive" 
        : "달콤하고 바삭하며 중독성 있는 맛",
      category: "snack"
    },
    {
      name: "Golden Fried Pastries",
      desc: language === 'EN' 
        ? "Flaky, buttery, and filled with sweet or spiced goodness" 
        : "부드럽고 버터향이 나며 달거나 향신료가 들어간 속이 듬뿍",
      category: "snack"
    },
    {
      name: "Ring-shaped Cake",
      desc: language === 'EN' 
        ? "Light, moist, and dusted with powdered sugar" 
        : "부드럽고 촉촉하며 가루 설탕을 뿌린 링 모양 케이크",
      category: "snack"
    },
    {
      name: "Sliced Sponge Cake",
      desc: language === 'EN' 
        ? "Soft, airy, and perfect with tea or coffee" 
        : "부드럽고 가볍며 차나 커피와 잘 어울리는 스폰지 케이크",
      category: "snack"
    },
    {
      name: "Bread Pudding",
      desc: language === 'EN' 
        ? "Warm, custardy, and rich with cinnamon and raisins" 
        : "따뜻하고 크림 같은 브레드 푸딩, 계피와 건포도 풍부하게",
      category: "snack"
    },
    {
      name: "Rolled Crepes/Pancakes",
      desc: language === 'EN' 
        ? "Choose sweet options like Nutella, fruit, or honey, or savory fillings like cheese or ham" 
        : "누텔라, 과일, 꿀 등 단맛 또는 치즈, 햄 등 짭짤한 속으로 선택 가능",
      category: "snack"
    }
  ];

  const mainDishes = menuItems.filter(item => item.category === "main");
  const snacksDesserts = menuItems.filter(item => item.category === "snack");

  return (
    <div className="min-h-screen bg-amber-50">
      <Header onCartToggle={() => {}} />
      
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Header Section */}
        <header className="bg-white shadow-sm border-b-4 border-red-600 mb-12">
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                <Utensils className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-red-600 tracking-tight">
                  {language === 'EN' ? 'MAAVII MENU' : '마아비 메뉴'}
                </h1>
                <p className="text-sm text-gray-600 mt-1">{t('heroTagline')}</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Dishes Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600 flex items-center">
              <Flame className="w-6 h-6 mr-2" />
              {language === 'EN' ? 'MAIN DISHES' : '메인 요리'}
            </h2>
            <span className="text-sm text-gray-600 hidden md:block">
              {language === 'EN' ? 'Perfect for sharing or satisfying your cravings' : '공유하거나 갈증을 해소하기에 완벽'}
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              {mainDishes.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                  <button 
                    onClick={() => addToCart({
                      id: `item-${index}`,
                      name: { EN: item.name, KR: item.name },
                      description: { EN: item.desc, KR: item.desc },
                      price: 18000,
                      category: item.category,
                      image: 'https://via.placeholder.com/400x300'
                    })}
                    className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    {t('addToCart')}
                  </button>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <img 
                src={getImageSrc('main', 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=1200&auto=format&fit=crop')} 
                alt="Main dishes" 
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-md"
              />
              <label className="absolute bottom-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 cursor-pointer transition-all shadow-md">
                <Camera className="w-5 h-5 text-gray-600" />
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={(e) => handleImageUpload('main', e)}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </section>

        {/* Snacks & Desserts Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-red-600">
              {language === 'EN' ? 'SNACKS & DESSERTS' : '스낵 & 디저트'}
            </h2>
            <span className="text-sm text-gray-600 hidden md:block">
              {language === 'EN' ? 'Sweet, savory, crispy, and comforting' : '달콤하고, 짭짤하고, 바삭하며 편안한'}
            </span>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {snacksDesserts.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="font-semibold text-gray-800 mb-1">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                  <button 
                    onClick={() => addToCart({
                      id: `item-${index + mainDishes.length}`,
                      name: { EN: item.name, KR: item.name },
                      description: { EN: item.desc, KR: item.desc },
                      price: 12000,
                      category: item.category,
                      image: 'https://via.placeholder.com/400x300'
                    })}
                    className="mt-2 px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-sm"
                  >
                    {t('addToCart')}
                  </button>
                </div>
              ))}
            </div>
            
            <div className="relative">
              <img 
                src={getImageSrc('desserts', 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop')} 
                alt="Snacks and desserts" 
                className="w-full h-96 object-cover rounded-lg shadow-md"
              />
              <label className="absolute bottom-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 cursor-pointer transition-all shadow-md">
                <Camera className="w-5 h-5 text-gray-600" />
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={(e) => handleImageUpload('desserts', e)}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-12">
          <h2 className="text-2xl font-bold text-red-600 mb-6 text-center">
            {language === 'EN' ? 'CONTACT US' : '문의하기'}
          </h2>
          
          <div className="text-center space-y-4">
            <p className="text-gray-700 font-medium">
              {language === 'EN' ? 'Order Ahead • Delivery Available • Catering Inquiries' : '사전 주문 • 배달 가능 • 케이터링 문의'}
            </p>
            
            <div className="flex items-center justify-center space-x-2 text-gray-800">
              <Phone className="w-5 h-5 text-red-600" />
              <span className="font-semibold">010-4409-2301</span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <MapPin className="w-5 h-5" />
              <span>
                {language === 'EN' 
                  ? 'Visit us at your local market or DM for pickup/delivery!' 
                  : '로컬 마켓에서 만나거나 DM으로 픽업/배송 문의!'}
              </span>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-gray-600">
              <Instagram className="w-5 h-5" />
              <span>
                {language === 'EN' 
                  ? 'Follow @maaviifood on Instagram for daily specials!' 
                  : '인스타그램 @maaviifood에서 데일리 특별 메뉴 확인!'}
              </span>
            </div>
          </div>
        </section>

        {/* Footer Notes */}
        <div className="mt-8 text-center space-y-2">
          <p className="text-gray-600 italic">
            {language === 'EN' 
              ? '✨ All items are made fresh daily. Inquire about our seasonal specials!' 
              : '✨ 모든 메뉴는 매일 신선하게 준비됩니다. 시즌 특별 메뉴 문의주세요!'}
          </p>
          <p className="flex items-center justify-center text-gray-700">
            <Heart className="w-4 h-4 text-red-500 mr-1" />
            {language === 'EN' 
              ? 'Thank you for supporting small businesses!' 
              : '소상공인을 응원해주셔서 감사합니다!'}
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default MenuItemsPage;