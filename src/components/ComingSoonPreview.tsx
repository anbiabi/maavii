'use client';

import React from 'react';
import Link from 'next/link';
import { Truck, Sparkles, ArrowRight } from 'lucide-react';
import Container from './ui/Container';

const ComingSoonPreview: React.FC = () => {
    return (
        <section id="coming-soon" className="py-32 bg-gradient-to-br from-maaviiOrange/10 to-charcoal/5 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-maaviiTeal/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-maaviiYellow/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 text-maaviiTeal font-black uppercase tracking-[0.2em] mb-4">
                                <Sparkles size={20} />
                                Partnership Opportunity
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-charcoal leading-none mb-6">
                                African Cultural & Entrepreneurial Hub
                            </h2>
                            <p className="text-xl text-charcoal/70 font-serif italic border-l-4 border-maaviiOrange pl-6 leading-relaxed mb-8">
                                Starting with a food truck, growing into a movement. We&apos;re building a platform that supports African entrepreneurs, promotes culture, and connects communities.
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-white rounded-2xl border-2 border-charcoal/5 shadow-lg">
                                <h3 className="font-black text-xl mb-2">Phase 1: Food Truck</h3>
                                <p className="text-charcoal/60 text-sm">Mobile ambassador bringing African cuisine to Busan streets</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border-2 border-charcoal/5 shadow-lg">
                                <h3 className="font-black text-xl mb-2">Phase 2: Cultural Hub</h3>
                                <p className="text-charcoal/60 text-sm">Co-working spaces and business development programs</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Link 
                                href="/coming-soon" 
                                className="inline-flex items-center gap-3 px-8 py-4 bg-maaviiOrange text-cream rounded-xl font-black text-lg hover:bg-orange-700 transition-colors shadow-lg group"
                            >
                                <Truck className="w-6 h-6" />
                                <span>Discover Our Vision</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>

                    <div className="relative order-1 lg:order-2">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border-[10px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/Food_truck1.jpeg"
                                alt="Maavii Food Truck - African Cultural Hub"
                                className="w-full h-full object-cover scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-maaviiOrange text-cream rounded-lg font-black text-xs uppercase tracking-widest mb-2">
                                    <Truck size={14} />
                                    Join Our Journey
                                </div>
                                <p className="text-cream font-bold text-lg">From food truck to cultural institution.</p>
                            </div>
                        </div>

                        {/* Decorative element behind */}
                        <div className="absolute -inset-4 bg-maaviiOrange/20 rounded-[3.5rem] -z-10 -rotate-3 scale-105"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ComingSoonPreview;
