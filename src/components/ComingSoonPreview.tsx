'use client';

import React from 'react';
import Link from 'next/link';
import { Truck, Sparkles, ArrowRight } from 'lucide-react';
import Container from './ui/Container';

const ComingSoonPreview: React.FC = () => {
    return (
        <section id="vision" className="py-40 bg-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 mask-overlay opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-2/3 h-full african-pattern opacity-10 -skew-x-12 -translate-x-1/4 pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full african-pattern opacity-5 skew-x-12 translate-x-1/4 pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                    <div className="space-y-12">
                        <div>
                            <div className="inline-flex items-center gap-4 px-8 py-4 bg-maaviiTeal text-charcoal rounded-[2rem] font-black uppercase tracking-[0.3em] text-sm shadow-2xl mb-10 -rotate-1">
                                <Sparkles size={24} className="animate-pulse" />
                                Our Vision
                            </div>
                            <h2 className="text-6xl md:text-8xl font-black text-charcoal leading-none tracking-tighter uppercase mb-10 text-stroke-vibrant">
                                The Cultural <span className="text-maaviiOrange">Hub</span>
                            </h2>
                            <p className="text-3xl text-charcoal/80 font-serif italic border-l-[12px] border-maaviiOrange pl-10 leading-relaxed mb-12 glass-vibrant p-8 rounded-r-3xl">
                                Starting with a food truck, growing into a movement. We&apos;re building a platform that <span className="text-maaviiTeal font-black">empowers entrepreneurs</span>, promotes culture, and connects communities.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div className="p-8 bg-white rounded-[2.5rem] border-[10px] border-maaviiOrange/10 shadow-2xl transform transition-all hover:rotate-1 hover:-translate-y-2 group">
                                <div className="w-14 h-14 bg-maaviiOrange/10 rounded-2xl flex items-center justify-center text-maaviiOrange mb-6 group-hover:bg-maaviiOrange group-hover:text-white transition-colors">
                                    <Truck size={32} />
                                </div>
                                <h3 className="font-black text-2xl mb-4 uppercase tracking-tight">Phase 1: Truck</h3>
                                <p className="text-charcoal/60 text-lg font-serif italic leading-snug">Mobile ambassador bringing African cuisine to every corner.</p>
                            </div>
                            <div className="p-8 bg-white rounded-[2.5rem] border-[10px] border-maaviiTeal/10 shadow-2xl transform transition-all hover:-rotate-1 hover:-translate-y-2 group">
                                <div className="w-14 h-14 bg-maaviiTeal/10 rounded-2xl flex items-center justify-center text-maaviiTeal mb-6 group-hover:bg-maaviiTeal group-hover:text-white transition-colors">
                                    <Sparkles size={32} />
                                </div>
                                <h3 className="font-black text-2xl mb-4 uppercase tracking-tight">Phase 2: Hub</h3>
                                <p className="text-charcoal/60 text-lg font-serif italic leading-snug">A physical space for business growth and cultural exchange.</p>
                            </div>
                        </div>

                        <div className="pt-10">
                            <Link
                                href="/vision"
                                className="inline-flex items-center gap-6 px-12 py-8 bg-charcoal text-maaviiYellow rounded-[3rem] font-black text-2xl hover:bg-maaviiOrange hover:text-white transition-all hover:scale-110 shadow-2xl border-b-8 border-maaviiChocolate group"
                            >
                                <Truck className="w-10 h-10 group-hover:bounce" />
                                <span>Discover Our Vision</span>
                                <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="relative z-10 rounded-[4rem] overflow-hidden border-[16px] border-white shadow-[0_50px_100px_rgba(0,0,0,0.3)] rotate-3 hover:rotate-0 transition-all duration-700 aspect-[4/5]">
                            <img
                                src="/images/Food_truck1.jpeg"
                                alt="Maavii Food Truck - African Cultural Hub"
                                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-maaviiChocolate/80 via-transparent to-transparent"></div>
                            <div className="absolute bottom-12 left-12 right-12">
                                <div className="inline-flex items-center gap-3 px-6 py-3 bg-maaviiYellow text-charcoal rounded-2xl font-black text-sm uppercase tracking-widest mb-6 shadow-xl">
                                    <Truck size={20} className="text-maaviiOrange" />
                                    Join Our Journey
                                </div>
                                <p className="text-white font-black text-4xl leading-tight tracking-tighter lowercase italic">
                                    From food truck to <span className="text-maaviiOrange block text-5xl not-italic uppercase">Cultural Institution.</span>
                                </p>
                            </div>
                        </div>

                        {/* Decorative background element */}
                        <div className="absolute -inset-10 african-pattern opacity-10 rounded-[5rem] -rotate-6 scale-105 pointer-events-none"></div>
                        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-maaviiOrange/20 rounded-full blur-[100px] pointer-events-none"></div>
                    </div>
                </div>
            </Container>

            {/* Bottom Tribal Pattern */}
            <div className="absolute bottom-0 left-0 w-full h-8 african-pattern opacity-30"></div>
        </section>
    );
};

export default ComingSoonPreview;
