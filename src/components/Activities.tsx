'use client';

import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';

const Activities: React.FC = () => {
    const { language } = useLanguage();
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
    // Activity data with language-specific content
    const activities = [
        {
            id: 1,
            title: {
                EN: 'Korean Cultural Exchange Workshop',
                KR: '한국 문화 교류 워크숍'
            },
            description: {
                EN: 'Experience traditional Korean culture through food, music, and art. Learn to make kimchi, try traditional games, and enjoy Korean performances.',
                KR: '음식, 음악, 예술을 통해 전통 한국 문화를 경험하세요. 김치 만들기, 전통 게임, 한국 공연을 즐기실 수 있습니다.'
            },
            image: '/images/afrovil/activitykr.jpg',
            date: 'Every Saturday',
            time: '2:00 PM - 5:00 PM',
            location: 'Maavii Cultural Center',
            participants: '20-30 people',
            price: '₩25,000 per person'
        },
        {
            id: 2,
            title: {
                EN: 'African Heritage Festival',
                KR: '아프리카 유산 축제'
            },
            description: {
                EN: 'Celebrate African traditions with authentic dishes, traditional music, dance performances, and cultural storytelling from various African countries.',
                KR: '정통 아프리카 요리, 전통 음악, 춤 공연, 다양한 아프리카 국가의 문화 이야기로 아프리카 전통을 기립니다.'
            },
            image: '/images/afrovil/activityen.jpg',
            date: 'Monthly',
            time: '11:00 AM - 8:00 PM',
            location: 'Busan Cultural Park',
            participants: '200+ people',
            price: 'Free entry'
        },
        {
            id: 3,
            title: {
                EN: 'Fusion Cooking Masterclass',
                KR: '퓨전 요리 마스터클래스'
            },
            description: {
                EN: 'Learn to blend African and Korean flavors in creative ways. Master techniques for combining spices, ingredients, and cooking methods from both cultures.',
                KR: '아프리카와 한국 맛을 창의적인 방식으로 결합하는 법을 배우세요. 양쪽 문화의 향신료, 재료, 조리법을 결합하는 기법을 마스터합니다.'
            },
            image: '/images/afrovil/activityvar.jpg',
            date: 'Every Sunday',
            time: '10:00 AM - 2:00 PM',
            location: 'Maavii Kitchen Studio',
            participants: '12 people max',
            price: '₩45,000 per person'
        }
    ];

    return (
        <div className="min-h-screen bg-cream pt-32 pb-24">
            <Container>
                <SectionTitle
                    title={language === 'EN' ? 'Our Activities' : '우리의 활동'}
                    subtitle={language === 'EN' 
                        ? 'Cultural experiences that bring communities together' 
                        : '커뮤니티를 하나로 묶는 문화 체험'
                    }
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {activities.map((activity) => (
                        <div 
                            key={activity.id} 
                            className="bg-white rounded-[2rem] overflow-hidden border-4 border-charcoal/5 hover:border-maaviiOrange hover:shadow-2xl transition-all group"
                        >
                            <div 
                                className="relative h-64 overflow-hidden cursor-pointer"
                                onClick={() => {
                                    setCurrentImageIndex(activity.id - 1);
                                    setModalOpen(true);
                                }}
                            >
                                <img
                                    src={activity.image}
                                    alt={activity.title[language]}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <span className="inline-block px-3 py-1 bg-maaviiOrange text-cream rounded-lg font-bold text-sm">
                                        {activity.price}
                                    </span>
                                </div>
                                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-cream font-black text-lg bg-black/50 px-4 py-2 rounded-lg">
                                        {language === 'EN' ? 'View Full Image' : '전체 이미지 보기'}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-6">
                                <h3 className="text-2xl font-black text-charcoal mb-3 uppercase tracking-tight">
                                    {activity.title[language]}
                                </h3>
                                
                                <p className="text-charcoal/60 font-serif mb-6 text-sm leading-relaxed">
                                    {activity.description[language]}
                                </p>
                                
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center gap-2 text-charcoal/70">
                                        <Calendar className="w-4 h-4" />
                                        <span className="text-sm font-bold">{activity.date}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-charcoal/70">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm font-bold">{activity.time}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-charcoal/70">
                                        <MapPin className="w-4 h-4" />
                                        <span className="text-sm font-bold">{activity.location}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-charcoal/70">
                                        <Users className="w-4 h-4" />
                                        <span className="text-sm font-bold">{activity.participants}</span>
                                    </div>
                                </div>
                                
                                <button className="w-full px-6 py-3 bg-maaviiTeal text-cream rounded-xl font-black hover:bg-teal-700 transition-colors">
                                    {language === 'EN' ? 'Register Now' : '지금 등록하기'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-maaviiYellow/10 rounded-[2rem] p-8 border-4 border-maaviiYellow text-center">
                    <h3 className="text-3xl font-black text-charcoal mb-4 uppercase">
                        {language === 'EN' ? 'Stay Updated' : '업데이트 소식 받기'}
                    </h3>
                    <p className="text-charcoal/70 font-serif mb-6 max-w-2xl mx-auto">
                        {language === 'EN' 
                            ? 'Follow us on social media and subscribe to our newsletter to never miss our cultural events and activities.'
                            : '문화 행사와 활동을 놓치지 않도록 소셜 미디어를 팔로우하고 뉴스레터를 구독하세요.'
                        }
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a 
                            href="https://www.instagram.com/maaviifood" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-black hover:scale-105 transition-transform"
                        >
                            Follow on Instagram
                        </a>
                        <a 
                            href="https://pf.kakao.com/_xjXKxj" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-yellow-400 text-charcoal rounded-xl font-black hover:scale-105 transition-transform"
                        >
                            KakaoTalk Channel
                        </a>
                        <a 
                            href="https://wa.me/821044092301" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-green-500 text-white rounded-xl font-black hover:scale-105 transition-transform"
                        >
                            WhatsApp Updates
                        </a>
                    </div>
                </div>
            </Container>
            
            {/* Full-screen slideshow modal */}
            {modalOpen && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 overflow-hidden">
                    <div className="relative w-full max-w-6xl h-full max-h-[90vh] flex flex-col bg-black rounded-xl overflow-hidden">
                        {/* Header with close button */}
                        <div className="flex justify-between items-center p-4 bg-black/80">
                            <h3 className="text-2xl font-black text-cream">
                                {activities[currentImageIndex].title[language]}
                            </h3>
                            <button
                                onClick={() => setModalOpen(false)}
                                className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-cream hover:bg-black/70 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>
                        
                        {/* Navigation buttons */}
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                            <button
                                onClick={() => setCurrentImageIndex(prev => prev === 0 ? activities.length - 1 : prev - 1)}
                                className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-cream hover:bg-black/70 transition-colors"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10">
                            <button
                                onClick={() => setCurrentImageIndex(prev => prev === activities.length - 1 ? 0 : prev + 1)}
                                className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center text-cream hover:bg-black/70 transition-colors"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                        
                        {/* Scrollable content area */}
                        <div className="flex-1 overflow-auto p-4">
                            <div className="flex flex-col items-center">
                                <img
                                    src={activities[currentImageIndex].image}
                                    alt={activities[currentImageIndex].title[language]}
                                    className="max-w-full object-contain"
                                />
                                <div className="mt-6 text-center max-w-2xl">
                                    <p className="text-lg text-cream/80 leading-relaxed">
                                        {activities[currentImageIndex].description[language]}
                                    </p>
                                    <div className="mt-4 text-sm text-cream/60">
                                        {language === 'EN' 
                                            ? `${currentImageIndex + 1} of ${activities.length}` 
                                            : `${activities.length} 중 ${currentImageIndex + 1}`
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Activities;
