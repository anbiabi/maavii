'use client';

import React from 'react';
import Link from 'next/link';
import { Calendar, Users, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Container from './ui/Container';

const ActivitiesSection: React.FC = () => {
    const { language } = useLanguage();
    
    const activities = [
        {
            id: 1,
            title: {
                EN: 'Korean Cultural Exchange',
                KR: '한국 문화 교류'
            },
            description: {
                EN: 'Experience traditional Korean culture through food and activities',
                KR: '음식과 활동을 통해 전통 한국 문화 체험'
            },
            image: '/images/afrovil/camko.jpg'
        },
        {
            id: 2,
            title: {
                EN: 'African Heritage Festival',
                KR: '아프리카 유산 축제'
            },
            description: {
                EN: 'Celebrate African traditions with authentic dishes and performances',
                KR: '정통 아프리카 요리와 공연으로 전통 기립'
            },
            image: '/images/Miss Afrik(1).PNG'
        }
    ];

    return (
        <section id="activities" className="py-24 bg-maaviiTeal/5">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">
                            {language === 'EN' ? 'Activities' : '활동'}
                        </h2>
                        <p className="text-xl text-charcoal/60 font-serif italic border-l-4 border-maaviiOrange pl-6">
                            {language === 'EN' 
                                ? 'Cultural experiences that bring communities together'
                                : '커뮤니티를 하나로 묶는 문화 체험'
                            }
                        </p>
                    </div>
                    <Link 
                        href="/activities" 
                        className="px-8 py-4 bg-maaviiTeal text-cream rounded-xl font-black hover:bg-maaviiTeal/80 transition-all flex items-center gap-2"
                    >
                        <Calendar className="w-5 h-5" />
                        {language === 'EN' ? 'View All Activities' : '모든 활동 보기'}
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {activities.map((activity) => (
                        <div 
                            key={activity.id} 
                            className="group relative bg-white rounded-[2rem] overflow-hidden border-4 border-charcoal/5 hover:border-maaviiTeal hover:shadow-2xl transition-all"
                        >
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={activity.image}
                                    alt={activity.title[language]}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                                <div className="absolute top-4 right-4">
                                    <div className="w-12 h-12 bg-maaviiOrange/90 rounded-full flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-cream" />
                                    </div>
                                </div>
                            </div>
                            
                            <div className="p-8">
                                <h3 className="text-2xl font-black text-charcoal mb-3 uppercase tracking-tight">
                                    {activity.title[language]}
                                </h3>
                                <p className="text-charcoal/60 font-serif mb-6">
                                    {activity.description[language]}
                                </p>
                                <Link 
                                    href="/activities" 
                                    className="inline-flex items-center gap-2 font-black text-maaviiTeal uppercase tracking-widest hover:text-maaviiOrange transition-colors"
                                >
                                    {language === 'EN' ? 'Learn More' : '더 알아보기'}
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default ActivitiesSection;
