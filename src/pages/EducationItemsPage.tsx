import React, { useState } from 'react';
import { BookOpen, Users, ChefHat, Award, Calendar, Clock, Camera } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

const EducationItemsPage: React.FC = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'workshops' | 'training' | 'catering' | 'events'>('workshops');
  const [uploadedImages, setUploadedImages] = useState<Record<string, string>>({});

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

  const workshops = [
    {
      title: { EN: 'Taste of Cameroon', KR: '카메룬의 맛' },
      description: { 
        EN: 'Learn authentic Cameroon cooking techniques in this immersive 2-hour class', 
        KR: '몰입형 2시간 클래스에서 정통 카메룬 요리 기술을 배우세요' 
      },
      price: '₩35,000',
      duration: '2 hours',
      capacity: '12 participants',
      schedule: { EN: 'Weekends 10:00 AM & 3:00 PM', KR: '주말 오전 10시 & 오후 3시' },
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop',
      id: 'workshop1'
    },
    {
      title: { EN: 'Korean-African Fusion Cooking', KR: '한국-아프리카 퓨전 요리' },
      description: { 
        EN: 'Discover how to blend Korean and African flavors in creative new dishes', 
        KR: '한국과 아프리카 풍미를 창의적인 새 요리에 어떻게 융합하는지 알아보세요' 
      },
      price: '₩42,000',
      duration: '3 hours',
      capacity: '10 participants',
      schedule: { EN: 'Saturdays 2:00 PM', KR: '토요일 오후 2시' },
      image: 'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=500&h=400&fit=crop',
      id: 'workshop2'
    },
    {
      title: { EN: 'African Spice Mastery', KR: '아프리카 스파이스 마스터리' },
      description: { 
        EN: 'Explore the rich variety of African spices and their traditional uses', 
        KR: '다양한 아프리카 스파이스와 전통적인 용법을 탐색해보세요' 
      },
      price: '₩28,000',
      duration: '90 minutes',
      capacity: '15 participants',
      schedule: { EN: 'Weekdays 6:00 PM', KR: '평일 오후 6시' },
      image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&h=400&fit=crop',
      id: 'workshop3'
    },
    {
      title: { EN: 'Traditional African Bread', KR: '전통 아프리카 빵' },
      description: { 
        EN: 'Master the art of making traditional African breads and pastries', 
        KR: '전통 아프리카 빵과 페이스트리 만들기의 예술을 마스터하세요' 
      },
      price: '₩38,000',
      duration: '2.5 hours',
      capacity: '12 participants',
      schedule: { EN: 'Sundays 10:00 AM', KR: '일요일 오전 10시' },
      image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500&h=400&fit=crop',
      id: 'workshop4'
    }
  ];

  const trainingPrograms = [
    {
      title: { EN: 'Food Truck Bootcamp', KR: '푸드트럭 부트캠프' },
      description: { 
        EN: 'Complete entrepreneurship program for starting an African food business', 
        KR: '아프리카 음식 사업을 시작하기 위한 완전한 창업 프로그램' 
      },
      duration: '6 weeks',
      price: '₩480,000',
      topics: [
        { EN: 'Business Planning', KR: '사업 계획' },
        { EN: 'Menu Development', KR: '메뉴 개발' },
        { EN: 'Operations', KR: '운영' },
        { EN: 'Marketing', KR: '마케팅' },
        { EN: 'Food Safety', KR: '식품 안전' }
      ],
      startDate: 'Feb 10, 2026',
      id: 'training1'
    },
    {
      title: { EN: 'Culinary Internship', KR: '요리 인턴십' },
      description: { 
        EN: 'Hands-on professional training and cultural exchange program', 
        KR: '현장 중심의 전문 교육 및 문화 교류 프로그램' 
      },
      duration: '8 weeks',
      price: '₩240,000',
      topics: [
        { EN: 'Advanced Techniques', KR: '고급 기술' },
        { EN: 'Kitchen Management', KR: '주방 관리' },
        { EN: 'Cultural Heritage', KR: '문화유산' },
        { EN: 'Customer Service', KR: '고객 서비스' }
      ],
      startDate: 'Feb 24, 2026',
      id: 'training2'
    },
    {
      title: { EN: 'Professional Chef Certification', KR: '전문 셰프 자격증' },
      description: { 
        EN: 'Comprehensive certification in African and fusion cuisine', 
        KR: '아프리카 및 퓨전 요리에 대한 포괄적 자격증' 
      },
      duration: '12 weeks',
      price: '₩720,000',
      topics: [
        { EN: 'Advanced Cooking', KR: '고급 요리' },
        { EN: 'Food Science', KR: '식품 과학' },
        { EN: 'Nutrition', KR: '영양학' },
        { EN: 'Menu Planning', KR: '메뉴 계획' },
        { EN: 'Restaurant Management', KR: '레스토랑 경영' }
      ],
      startDate: 'Mar 10, 2026',
      id: 'training3'
    }
  ];

  const cateringServices = [
    { 
      type: { EN: 'Private Event Catering', KR: '개인 이벤트 케이터링' }, 
      capacity: '20-500 guests', 
      minOrder: '₩500,000', 
      description: { EN: 'Customized menus for your special event', KR: '특별한 이벤트를 위한 맞춤 메뉴' },
      id: 'catering1'
    },
    { 
      type: { EN: 'Corporate Catering', KR: '기업 케이터링' }, 
      capacity: 'Flexible', 
      minOrder: '₩300,000', 
      description: { EN: 'Professional catering for business events', KR: '비즈니스 이벤트를 위한 전문 케이터링' },
      id: 'catering2'
    },
    { 
      type: { EN: 'Weekly Meal Prep', KR: '주간 밀 준비' }, 
      capacity: 'Individual/Family', 
      minOrder: '₩150,000', 
      description: { EN: 'Healthy meal plans delivered weekly', KR: '건강한 식단을 주간 배송' },
      id: 'catering3'
    },
    { 
      type: { EN: 'Festival Catering', KR: '축제 케이터링' }, 
      capacity: '100-1000+ guests', 
      minOrder: '₩1,000,000', 
      description: { EN: 'Large-scale event catering', KR: '대규모 이벤트 케이터링' },
      id: 'catering4'
    }
  ];

  const events = [
    {
      title: { EN: 'Cultural Festival', KR: '문화 축제' },
      date: 'March 15, 2026',
      time: '11:00 AM - 6:00 PM',
      location: { EN: 'Maavii Events Space', KR: '마아비 이벤트 공간' },
      description: { EN: 'Celebrate African culture with food, music, and crafts', KR: '음식, 음악, 공예로 아프리카 문화를 축하하세요' },
      id: 'event1'
    },
    {
      title: { EN: 'Themed Dinner Night', KR: '테마 저녁 식사' },
      date: 'March 22, 2026',
      time: '7:00 PM - 10:00 PM',
      location: { EN: 'Maavii Restaurant', KR: '마아비 레스토랑' },
      description: { EN: "Chef's special 5-course fusion menu with wine pairings", KR: '와인 페어링과 함께하는 셰프 특선 5코스 퓨전 메뉴' },
      id: 'event2'
    },
    {
      title: { EN: 'Beginner Cooking Workshop', KR: '초보자 요리 워크숍' },
      date: 'March 29, 2026',
      time: '2:00 PM - 4:30 PM',
      location: { EN: 'Maavii Kitchen Studio', KR: '마아비 키친 스튜디오' },
      description: { EN: 'Perfect for first-time cookers - learn African basics', KR: '처음 요리하는 분들에게 완벽 - 아프리카 요리 기초 배우기' },
      id: 'event3'
    }
  ];

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Header onCartToggle={() => {}} />
      
      <main className="min-h-screen bg-cream pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter">
              {language === 'EN' ? 'Education & Professional Services' : '교육 및 전문 서비스'}
            </h1>
            <p className="text-xl text-charcoal/70 max-w-3xl mx-auto font-serif italic">
              {language === 'EN' 
                ? 'Learn, grow, and master African cuisine' 
                : '배우고 성장하며 아프리카 요리를 마스터하세요'}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: 'workshops', label: { EN: 'Workshops', KR: '워크숍' }, icon: ChefHat },
              { id: 'training', label: { EN: 'Training Programs', KR: '교육 프로그램' }, icon: Award },
              { id: 'catering', label: { EN: 'Catering', KR: '케이터링' }, icon: Users },
              { id: 'events', label: { EN: 'Events', KR: '이벤트' }, icon: Calendar }
            ].map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-6 py-4 rounded-xl font-bold transition-all border-3 ${
                    activeTab === tab.id
                      ? 'bg-maaviiTeal text-cream border-charcoal'
                      : 'bg-cream border-charcoal/10 text-charcoal hover:border-maaviiTeal'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  {tab.label[language]}
                </button>
              );
            })}
          </div>

          {/* Workshops */}
          {activeTab === 'workshops' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {workshops.map((workshop) => (
                  <div key={workshop.id} className="group bg-white rounded-2xl overflow-hidden border-3 border-charcoal/5 hover:shadow-xl transition-all">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={getImageSrc(workshop.id, workshop.image)}
                        alt={workshop.title[language]}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <label className="absolute bottom-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 cursor-pointer transition-all shadow-md">
                        <Camera className="w-5 h-5 text-gray-600" />
                        <input 
                          type="file" 
                          accept="image/*" 
                          onChange={(e) => handleImageUpload(workshop.id, e)}
                          className="hidden"
                        />
                      </label>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-black text-charcoal mb-3">{workshop.title[language]}</h3>
                      <p className="text-charcoal/60 font-serif mb-6">{workshop.description[language]}</p>
                      <div className="space-y-2 mb-6 text-sm font-bold text-charcoal/70">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {workshop.duration}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          {workshop.capacity}
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {workshop.schedule[language]}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-black text-maaviiOrange">{workshop.price}</span>
                        <button className="px-6 py-3 bg-charcoal text-cream rounded-lg font-bold hover:bg-maaviiOrange transition-colors">
                          {language === 'EN' ? 'Register' : '등록'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Training Programs */}
          {activeTab === 'training' && (
            <div className="space-y-8">
              {trainingPrograms.map((program) => (
                <div key={program.id} className="bg-white rounded-2xl p-8 border-3 border-charcoal/5 hover:shadow-xl transition-all">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div>
                      <h3 className="text-3xl font-black text-charcoal mb-3">{program.title[language]}</h3>
                      <p className="text-charcoal/60 font-serif mb-6">{program.description[language]}</p>
                      <div className="space-y-2 text-charcoal/70 font-serif">
                        <p><strong>{language === 'EN' ? 'Duration:' : '기간:'}</strong> {program.duration}</p>
                        <p><strong>{language === 'EN' ? 'Start Date:' : '시작일:'}</strong> {program.startDate}</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-black text-charcoal mb-4 uppercase">
                        {language === 'EN' ? 'Topics Covered' : '포함 주제'}
                      </h4>
                      <ul className="space-y-2 text-charcoal/70 font-serif">
                        {program.topics.map((topic, i) => (
                          <li key={i}>✓ {topic[language]}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-black text-maaviiOrange mb-6">{program.price}</div>
                      <button className="w-full px-6 py-4 bg-charcoal text-cream rounded-xl font-black hover:bg-maaviiOrange transition-colors mb-3">
                        {language === 'EN' ? 'Apply Now' : '지금 신청'}
                      </button>
                      <button className="w-full px-6 py-2 bg-cream border-2 border-charcoal text-charcoal rounded-xl font-bold hover:bg-charcoal/5">
                        {language === 'EN' ? 'Learn More' : '자세히 보기'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Catering */}
          {activeTab === 'catering' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                {cateringServices.map((service) => (
                  <div key={service.id} className="p-8 bg-white rounded-2xl border-3 border-charcoal/5 hover:shadow-xl transition-all">
                    <h3 className="text-2xl font-black text-charcoal mb-2">{service.type[language]}</h3>
                    <p className="text-charcoal/60 font-serif mb-6">{service.description[language]}</p>
                    <div className="space-y-3 mb-6 text-charcoal/70 font-bold">
                      <p><strong>{language === 'EN' ? 'Capacity:' : '수용 인원:'}</strong> {service.capacity}</p>
                      <p>
                        <strong>{language === 'EN' ? 'Minimum Order:' : '최소 주문:'}</strong> 
                        <span className="text-maaviiOrange text-lg"> {service.minOrder}</span>
                      </p>
                    </div>
                    <button className="w-full px-6 py-4 bg-charcoal text-cream rounded-lg font-black hover:bg-maaviiOrange transition-colors">
                      {language === 'EN' ? 'Get Quote' : '견적 받기'}
                    </button>
                  </div>
                ))}
              </div>
              <div className="p-8 bg-maaviiYellow/10 rounded-2xl border-3 border-maaviiYellow">
                <h4 className="text-2xl font-black text-charcoal mb-4">
                  {language === 'EN' ? 'Catering Inquiry Form' : '케이터링 문의 양식'}
                </h4>
                <p className="text-charcoal/70 font-serif mb-6">
                  {language === 'EN' 
                    ? 'Tell us about your event and we\'ll create a customized catering proposal just for you.' 
                    : '이벤트에 대해 알려주시면 귀하만을 위한 맞춤형 케이터링 제안서를 만들어 드립니다.'}
                </p>
                <button className="px-8 py-4 bg-charcoal text-cream rounded-lg font-black hover:bg-maaviiOrange transition-colors">
                  {language === 'EN' ? 'Start Catering Inquiry' : '케이터링 문의 시작'}
                </button>
              </div>
            </div>
          )}

          {/* Events */}
          {activeTab === 'events' && (
            <div className="space-y-8">
              {events.map((event) => (
                <div key={event.id} className="p-8 bg-white rounded-2xl border-3 border-charcoal/5 hover:shadow-xl transition-all">
                  <div className="flex flex-col md:flex-row md:items-center gap-8">
                    <div className="flex-1">
                      <h3 className="text-3xl font-black text-charcoal mb-4">{event.title[language]}</h3>
                      <div className="space-y-3 text-charcoal/70 font-serif mb-6">
                        <p><strong>{language === 'EN' ? 'Date:' : '날짜:'}</strong> {event.date}</p>
                        <p><strong>{language === 'EN' ? 'Time:' : '시간:'}</strong> {event.time}</p>
                        <p><strong>{language === 'EN' ? 'Location:' : '장소:'}</strong> {event.location[language]}</p>
                      </div>
                      <p className="text-charcoal/60 font-serif">{event.description[language]}</p>
                    </div>
                    <div className="flex flex-col gap-3">
                      <button className="px-8 py-4 bg-maaviiTeal text-cream rounded-lg font-black hover:bg-teal-700 transition-colors whitespace-nowrap">
                        {language === 'EN' ? 'Register' : '등록'}
                      </button>
                      <button className="px-8 py-4 bg-cream border-2 border-charcoal text-charcoal rounded-lg font-bold hover:bg-charcoal/5">
                        {language === 'EN' ? 'Learn More' : '자세히 보기'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EducationItemsPage;