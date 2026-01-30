"use client";

import React from 'react';
import Link from 'next/link';
import { Heart, Globe, Utensils, MapPin, Target, Sparkles, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Container from './ui/Container';

const AboutPage: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-cream min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-charcoal">
                    <img
                        src="/images/maavi.png"
                        alt="Maavii Culinary Passion"
                        className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-cream"></div>
                </div>

                <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-3 px-6 py-2 bg-maaviiOrange text-white rounded-full font-black text-xs md:text-sm uppercase tracking-[0.2em] mb-6 shadow-lg animate-fade-in-up">
                        <Globe size={16} />
                        Our Journey
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.9] text-shadow-lg animate-fade-in-up delay-100">
                        The Story of <br /><span className="text-maaviiYellow">Maavii</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-serif italic max-w-3xl mx-auto animate-fade-in-up delay-200">
                        Bridging cultures through the universal language of authentic flavor.
                    </p>
                </div>
            </section>

            <Container className="py-20 md:py-32 relative">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-maaviiTeal/10 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-40 left-0 w-96 h-96 bg-maaviiYellow/20 rounded-full blur-[100px]"></div>

                {/* Founder & Philosophy */}
                <div className="grid lg:grid-cols-2 gap-16 items-center mb-32 relative z-10">
                    <div className="space-y-8">
                        <div className="flex items-center gap-4 text-maaviiTeal mb-2">
                            <Sparkles className="w-8 h-8" />
                            <span className="font-black text-lg uppercase tracking-widest">The Philosophy</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-charcoal leading-tight">
                            More Than Just <br />
                            <span className="text-maaviiOrange text-stroke-vibrant">Food.</span>
                        </h2>

                        <div className="space-y-6 text-lg md:text-xl text-charcoal/80 font-serif leading-relaxed">
                            <p className="border-l-4 border-maaviiYellow pl-6">
                                {t('aboutBody1')}
                            </p>
                            <p>
                                {t('aboutBody2')}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <div className="px-6 py-4 bg-white rounded-2xl shadow-lg border-l-4 border-maaviiTeal">
                                <span className="block font-black text-2xl text-charcoal mb-1">Busan</span>
                                <span className="text-xs uppercase tracking-widest text-charcoal/60">Our Home Base</span>
                            </div>
                            <div className="px-6 py-4 bg-white rounded-2xl shadow-lg border-l-4 border-maaviiOrange">
                                <span className="block font-black text-2xl text-charcoal mb-1">Global</span>
                                <span className="text-xs uppercase tracking-widest text-charcoal/60">The Vision</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
                            <img
                                src="/images/Founder.png"
                                alt="Maavii Founder"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                        {/* Abstract backdrop */}
                        <div className="absolute inset-0 bg-maaviiChocolate rounded-[3rem] rotate-6 -z-10 translate-x-4 translate-y-4"></div>
                        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-maaviiYellow rounded-full blur-2xl opacity-60 z-20"></div>
                    </div>
                </div>

                {/* The Roadmap Vision */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 justify-center mb-4">
                            <Target className="w-6 h-6 text-maaviiOrange" />
                            <span className="font-black text-maaviiOrange uppercase tracking-widest text-sm">Our Future</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter mb-6 relative inline-block">
                            The <span className="text-maaviiTeal">Vision</span> Roadmap
                            <svg className="absolute w-full h-3 -bottom-2 left-0 text-maaviiYellow opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </h2>
                        <p className="text-xl text-charcoal/60 font-serif italic max-w-2xl mx-auto">
                            From a single food truck to a global cultural movement. Witness our step-by-step journey to revolutionize fusion cuisine.
                        </p>
                    </div>

                    <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] bg-white p-4 md:p-8">
                        <img
                            src="/images/vision_maavii.png"
                            alt="Maavii Strategic Roadmap Vision"
                            className="w-full h-auto rounded-2xl"
                        />

                        {/* Interactive overlay hints (visual only) */}
                        <div className="absolute top-8 right-8 hidden md:flex items-center gap-2 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                            <Truck className="w-5 h-5 text-maaviiOrange" />
                            <span className="font-bold text-xs uppercase tracking-wider text-charcoal">Phase 1: In Motion</span>
                        </div>
                    </div>

                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-[2rem] shadow-lg border-2 border-transparent hover:border-maaviiTeal transition-all group">
                            <div className="w-12 h-12 bg-maaviiTeal/10 rounded-xl flex items-center justify-center text-maaviiTeal mb-6 group-hover:bg-maaviiTeal group-hover:text-white transition-colors">
                                <span className="font-black text-xl">01</span>
                            </div>
                            <h3 className="font-black text-xl mb-3 text-charcoal">Food Truck Chain</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                Establishing a mobile fleet to bring authentic African-Korean fusion directly to neighborhoods and festivals across Busan.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-lg border-2 border-transparent hover:border-maaviiOrange transition-all group">
                            <div className="w-12 h-12 bg-maaviiOrange/10 rounded-xl flex items-center justify-center text-maaviiOrange mb-6 group-hover:bg-maaviiOrange group-hover:text-white transition-colors">
                                <span className="font-black text-xl">02</span>
                            </div>
                            <h3 className="font-black text-xl mb-3 text-charcoal">Cultural Hub</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                Creating a physical space for dining, cooking classes, and cultural exchange events that celebrate diversity.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-[2rem] shadow-lg border-2 border-transparent hover:border-maaviiYellow transition-all group">
                            <div className="w-12 h-12 bg-maaviiYellow/20 rounded-xl flex items-center justify-center text-maaviiChocolate mb-6 group-hover:bg-maaviiYellow group-hover:text-charcoal transition-colors">
                                <span className="font-black text-xl">03</span>
                            </div>
                            <h3 className="font-black text-xl mb-3 text-charcoal">Global Franchise</h3>
                            <p className="text-charcoal/70 text-sm leading-relaxed">
                                Expanding the Maavii brand internationally, setting the standard for modern African fusion cuisine worldwide.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="bg-charcoal rounded-[3rem] p-10 md:p-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 african-pattern opacity-5"></div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-maaviiOrange rounded-full blur-[100px] opacity-20"></div>

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
                            Be Part of the <span className="text-maaviiYellow">Legacy</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-serif italic">
                            Whether you're a foodie, an investor, or a cultural enthusiast, there's a place for you at our table.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-6 justify-center">
                            <Link href="/contact" className="px-10 py-5 bg-maaviiOrange text-white rounded-full font-black text-lg hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] transition-all hover:scale-105">
                                Join the Movement
                            </Link>
                            <Link href="/menu" className="px-10 py-5 bg-transparent border-2 border-white/20 text-white rounded-full font-black text-lg hover:bg-white hover:text-charcoal transition-all">
                                Taste the Menu
                            </Link>
                        </div>
                    </div>
                </div>

            </Container>
        </div>
    );
};

export default AboutPage;
