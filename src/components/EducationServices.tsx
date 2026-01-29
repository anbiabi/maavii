'use client';

import React, { useState } from 'react';
import { Users, ChefHat, Award, Calendar, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';

const EducationServices: React.FC = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'workshops' | 'training' | 'catering' | 'events'>('workshops');

    const workshops = [
        {
            title: 'Taste of Cameroon',
            description: 'Learn authentic Cameroon cooking techniques in this immersive 2-hour class',
            price: '₩35,000',
            duration: '2 hours',
            capacity: '12 participants',
            schedule: 'Weekends 10:00 AM & 3:00 PM',
            image: '/images/camerfoot.jpg'
        },
        {
            title: 'Korean-African Fusion Cooking',
            description: 'Discover how to blend Korean and African flavors in creative new dishes',
            price: '₩42,000',
            duration: '3 hours',
            capacity: '10 participants',
            schedule: 'Saturdays 2:00 PM',
            image: '/images/food/salad.jpg'
        },
        {
            title: 'African Spice Mastery',
            description: 'Explore the rich variety of African spices and their traditional uses',
            price: '₩28,000',
            duration: '90 minutes',
            capacity: '15 participants',
            schedule: 'Weekdays 6:00 PM',
            image: '/images/20251214_194752.jpg'
        },
        {
            title: 'Traditional African Bread',
            description: 'Master the art of making traditional African breads and pastries',
            price: '₩38,000',
            duration: '2.5 hours',
            capacity: '12 participants',
            schedule: 'Sundays 10:00 AM',
            image: '/images/20250927_172708.jpg'
        }
    ];

    const trainingPrograms = [
        {
            title: 'Food Truck Bootcamp',
            description: 'Complete entrepreneurship program for starting an African food business',
            duration: '6 weeks',
            price: '₩480,000',
            topics: ['Business Planning', 'Menu Development', 'Operations', 'Marketing', 'Food Safety'],
            startDate: 'Feb 10, 2026'
        },
        {
            title: 'Culinary Internship',
            description: 'Hands-on professional training and cultural exchange program',
            duration: '8 weeks',
            price: '₩240,000',
            topics: ['Advanced Techniques', 'Kitchen Management', 'Cultural Heritage', 'Customer Service'],
            startDate: 'Feb 24, 2026'
        },
        {
            title: 'Professional Chef Certification',
            description: 'Comprehensive certification in African and fusion cuisine',
            duration: '12 weeks',
            price: '₩720,000',
            topics: ['Advanced Cooking', 'Food Science', 'Nutrition', 'Menu Planning', 'Restaurant Management'],
            startDate: 'Mar 10, 2026'
        },
    ];

    const cateringServices = [
        { type: 'Private Event Catering', capacity: '20-500 guests', minOrder: '₩500,000', description: 'Customized menus for your special event' },
        { type: 'Corporate Catering', capacity: 'Flexible', minOrder: '₩300,000', description: 'Professional catering for business events' },
        { type: 'Weekly Meal Prep', capacity: 'Individual/Family', minOrder: '₩150,000', description: 'Healthy meal plans delivered weekly' },
        { type: 'Festival Catering', capacity: '100-1000+ guests', minOrder: '₩1,000,000', description: 'Large-scale event catering' }
    ];

    const events = [
        {
            title: 'Cultural Festival',
            date: 'March 15, 2026',
            time: '11:00 AM - 6:00 PM',
            location: 'Maavii Events Space',
            description: 'Celebrate African culture with food, music, and crafts'
        },
        {
            title: 'Themed Dinner Night',
            date: 'March 22, 2026',
            time: '7:00 PM - 10:00 PM',
            location: 'Maavii Restaurant',
            description: 'Chef&apos;s special 5-course fusion menu with wine pairings'
        },
        {
            title: 'Beginner Cooking Workshop',
            date: 'March 29, 2026',
            time: '2:00 PM - 4:30 PM',
            location: 'Maavii Kitchen Studio',
            description: 'Perfect for first-time cookers - learn African basics'
        }
    ];

    return (
        <div className="min-h-screen bg-white relative overflow-hidden pt-32 pb-32">
            {/* Background Decorations */}
            <div className="absolute inset-0 mask-overlay opacity-30 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-1/2 h-full african-pattern opacity-10 -skew-y-12 translate-x-1/2 pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="text-center mb-20 relative">
                    <div className="inline-flex items-center gap-4 px-10 py-5 bg-maaviiTeal text-charcoal rounded-3xl font-black text-3xl shadow-2xl border-b-8 border-maaviiChocolate mb-10 -rotate-1">
                        <ChefHat size={40} className="animate-bounce" />
                        Academy
                    </div>

                    <h2 className="text-6xl md:text-8xl font-black text-charcoal leading-none tracking-tighter uppercase mb-8">
                        Learn & <span className="text-maaviiOrange">Grow</span>
                    </h2>

                    <p className="text-2xl text-charcoal/80 font-serif italic max-w-3xl mx-auto glass-vibrant p-8 rounded-3xl border-2 border-maaviiTeal shadow-xl">
                        {t('educationSubtitle') || "Master the art of African and Fusion cuisine through our professional workshops and training programs."}
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 mb-20">
                    {[
                        { id: 'workshops', label: 'Workshops', icon: ChefHat },
                        { id: 'training', label: 'Pro Training', icon: Award },
                        { id: 'catering', label: 'Catering', icon: Users },
                        { id: 'events', label: 'Events', icon: Calendar }
                    ].map(tab => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id as any)}
                                className={`flex items-center gap-4 px-10 py-6 rounded-[2rem] font-black text-xl uppercase tracking-widest transition-all shadow-2xl ${isActive
                                    ? 'vibrant-gradient text-white scale-110 border-b-8 border-maaviiChocolate'
                                    : 'bg-white border-4 border-charcoal/5 text-charcoal hover:border-maaviiOrange hover:-translate-y-2'
                                    }`}
                            >
                                <Icon className={`w-8 h-8 ${isActive ? 'animate-spin-slow' : 'text-maaviiOrange'}`} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>

                {/* Workshops */}
                {activeTab === 'workshops' && (
                    <div className="space-y-12 animate-in fade-in slide-in-from-bottom duration-700">
                        <div className="grid md:grid-cols-2 gap-12">
                            {workshops.map((workshop, idx) => (
                                <div key={idx} className="bg-white rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-2xl hover:border-maaviiOrange transition-all duration-500 group flex flex-col hover:-translate-y-4">
                                    <div className="h-64 overflow-hidden relative">
                                        <img
                                            src={workshop.image}
                                            alt={workshop.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-maaviiChocolate/60 via-transparent to-transparent opacity-60"></div>
                                        <div className="absolute top-0 right-0 w-32 h-32 african-pattern opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-[4rem]"></div>
                                    </div>
                                    <div className="p-10 flex-grow flex flex-col">
                                        <h3 className="text-3xl font-black text-charcoal mb-4 uppercase tracking-tight leading-tight group-hover:text-maaviiOrange transition-colors">{workshop.title}</h3>
                                        <p className="text-charcoal/70 font-serif mb-8 text-xl italic border-l-4 border-maaviiTeal/30 pl-4 flex-grow">{workshop.description}</p>

                                        <div className="grid grid-cols-2 gap-4 mb-8">
                                            <div className="flex items-center gap-3 text-sm font-black text-charcoal/60 uppercase tracking-widest bg-maaviiTeal/10 p-4 rounded-2xl">
                                                <Clock className="w-6 h-6 text-maaviiTeal" />
                                                {workshop.duration}
                                            </div>
                                            <div className="flex items-center gap-3 text-sm font-black text-charcoal/60 uppercase tracking-widest bg-maaviiOrange/10 p-4 rounded-2xl">
                                                <Users className="w-6 h-6 text-maaviiOrange" />
                                                {workshop.capacity}
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between pt-8 border-t-4 border-double border-charcoal/10">
                                            <div className="leading-none">
                                                <span className="text-sm font-black text-charcoal/40 uppercase block mb-1">Fee</span>
                                                <span className="text-4xl font-black text-maaviiOrange tracking-tighter">{workshop.price}</span>
                                            </div>
                                            <button className="px-10 py-5 bg-charcoal text-maaviiYellow rounded-2xl font-black text-xl hover:bg-maaviiOrange hover:text-white transition-all hover:scale-110 shadow-xl border-b-6 border-maaviiChocolate uppercase">
                                                Register
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
                        {trainingPrograms.map((program, idx) => (
                            <div key={idx} className="bg-white rounded-[3rem] p-10 border-[10px] border-white shadow-2xl hover:border-maaviiTeal transition-all duration-500 group">
                                <div className="grid md:grid-cols-3 gap-12 items-center">
                                    <div className="space-y-6">
                                        <h3 className="text-3xl font-black text-charcoal uppercase tracking-tight">{program.title}</h3>
                                        <p className="text-charcoal/70 font-serif text-xl italic border-l-4 border-maaviiOrange pl-6">{program.description}</p>
                                        <div className="space-y-3 font-black text-sm uppercase tracking-widest text-maaviiTeal bg-maaviiTeal/10 p-6 rounded-2xl">
                                            <p className="flex justify-between"><span>Duration:</span> <span className="text-charcoal">{program.duration}</span></p>
                                            <p className="flex justify-between"><span>Start:</span> <span className="text-charcoal">{program.startDate}</span></p>
                                        </div>
                                    </div>
                                    <div className="bg-charcoal/5 p-8 rounded-[2rem] border-4 border-dashed border-charcoal/10">
                                        <h4 className="font-black text-charcoal mb-6 uppercase tracking-widest text-sm">Curriculum</h4>
                                        <ul className="space-y-3 text-charcoal/80 font-serif italic text-lg">
                                            {program.topics.map((topic, i) => (
                                                <li key={i} className="flex items-center gap-3">
                                                    <Award size={20} className="text-maaviiOrange" />
                                                    {topic}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="text-center space-y-8">
                                        <div className="leading-none">
                                            <span className="text-sm font-black text-charcoal/40 uppercase block mb-2">Program Fee</span>
                                            <div className="text-5xl font-black text-maaviiOrange tracking-tighter">{program.price}</div>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <button className="w-full px-10 py-6 bg-charcoal text-maaviiYellow rounded-[2rem] font-black text-xl hover:bg-maaviiOrange hover:text-white transition-all shadow-xl border-b-6 border-maaviiChocolate uppercase">
                                                Apply Now
                                            </button>
                                            <button className="w-full px-10 py-4 bg-white border-4 border-charcoal/5 text-charcoal rounded-[2rem] font-black hover:border-maaviiTeal transition-all uppercase text-sm tracking-widest">
                                                Learn More
                                            </button>
                                        </div>
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
                            {cateringServices.map((service, idx) => (
                                <div key={idx} className="p-10 bg-white rounded-[3.5rem] border-[12px] border-white shadow-2xl hover:border-maaviiOrange transition-all duration-500 group">
                                    <h3 className="text-3xl font-black text-charcoal mb-4 uppercase tracking-tight">{service.type}</h3>
                                    <p className="text-charcoal/70 font-serif text-xl italic mb-8 border-l-4 border-maaviiTeal pl-6">{service.description}</p>
                                    <div className="grid grid-cols-2 gap-6 mb-10">
                                        <div className="bg-maaviiTeal/10 p-6 rounded-2xl">
                                            <p className="text-xs font-black text-maaviiTeal uppercase tracking-widest mb-1">Capacity</p>
                                            <p className="font-black text-charcoal text-lg">{service.capacity}</p>
                                        </div>
                                        <div className="bg-maaviiOrange/10 p-6 rounded-2xl">
                                            <p className="text-xs font-black text-maaviiOrange uppercase tracking-widest mb-1">Min Order</p>
                                            <p className="font-black text-maaviiOrange text-lg">{service.minOrder}</p>
                                        </div>
                                    </div>
                                    <button className="w-full px-10 py-6 bg-charcoal text-maaviiYellow rounded-[2rem] font-black text-2xl hover:bg-maaviiOrange hover:text-white transition-all shadow-xl border-b-6 border-maaviiChocolate uppercase">
                                        Get Quote
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="p-12 rounded-[4rem] border-[12px] border-maaviiYellow/20 bg-maaviiYellow/5 shadow-2xl relative overflow-hidden group">
                            <div className="absolute top-0 right-0 w-64 h-64 african-pattern opacity-5 rounded-bl-[8rem]"></div>
                            <h4 className="text-4xl font-black text-charcoal mb-6 uppercase tracking-tighter">Custom Inquiry</h4>
                            <p className="text-2xl text-charcoal/70 font-serif italic mb-10 max-w-2xl leading-relaxed">
                                Tell us about your event and we&apos;ll create a <span className="text-maaviiOrange font-black underline decoration-maaviiYellow underline-offset-8">bespoke catering experience</span> just for you.
                            </p>
                            <button className="px-12 py-8 bg-charcoal text-maaviiYellow rounded-[2.5rem] font-black text-2xl hover:bg-maaviiOrange hover:text-white transition-all shadow-2xl border-b-8 border-maaviiChocolate uppercase">
                                Start Catering Inquiry
                            </button>
                        </div>
                    </div>
                )}

                {/* Events */}
                {activeTab === 'events' && (
                    <div className="space-y-8">
                        {events.map((event, idx) => (
                            <div key={idx} className="bg-white rounded-[3.5rem] p-12 border-[12px] border-white shadow-2xl hover:border-maaviiTeal transition-all duration-500 group">
                                <div className="flex flex-col lg:flex-row lg:items-center gap-16">
                                    <div className="flex-1 space-y-8">
                                        <div className="flex items-center gap-6">
                                            <div className="w-20 h-20 bg-maaviiTeal/10 rounded-3xl flex items-center justify-center text-maaviiTeal group-hover:bg-maaviiTeal group-hover:text-white transition-all">
                                                <Calendar size={40} />
                                            </div>
                                            <div>
                                                <h3 className="text-4xl font-black text-charcoal uppercase tracking-tighter">{event.title}</h3>
                                                <p className="text-maaviiOrange font-black uppercase tracking-[0.2em]">{event.date}</p>
                                            </div>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-8 text-xl text-charcoal/70 font-serif italic border-l-4 border-maaviiTeal pl-8">
                                            <p className="flex items-center gap-3"><Clock className="text-maaviiTeal shrink-0" /> {event.time}</p>
                                            <p className="flex items-center gap-3"><Award className="text-maaviiTeal shrink-0" /> {event.location}</p>
                                        </div>
                                        <p className="text-2xl text-charcoal/60 leading-relaxed">{event.description}</p>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <button className="px-12 py-8 bg-maaviiTeal text-charcoal rounded-[2.5rem] font-black text-2xl hover:bg-maaviiOrange hover:text-white transition-all shadow-2xl border-b-8 border-maaviiChocolate uppercase">
                                            Register
                                        </button>
                                        <button className="px-12 py-4 bg-white border-4 border-charcoal/5 text-charcoal rounded-[2.5rem] font-black hover:border-maaviiTeal transition-all uppercase text-sm tracking-widest">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </div>
    );
};

export default EducationServices;
