"use client";

import React from 'react';
import Link from 'next/link';
import { Truck, Sparkles } from 'lucide-react';
import Container from './ui/Container';

const FusionConcept: React.FC = () => {
    return (
        <section id="fusion" className="py-32 relative bg-maaviiYellow/10 overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-maaviiTeal/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden border-[10px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/Food_truck.jpeg"
                                alt="Maavii Food Truck Fusion"
                                className="w-full h-full object-cover scale-105"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-maaviiOrange text-cream rounded-lg font-black text-xs uppercase tracking-widest mb-2">
                                    <Truck size={14} />
                                    On The Move
                                </div>
                                <p className="text-cream font-bold text-lg">Bringing fusion flavors to your neighborhood.</p>
                            </div>
                        </div>

                        {/* Decorative element behind */}
                        <div className="absolute -inset-4 bg-maaviiOrange/20 rounded-[3.5rem] -z-10 -rotate-3 scale-105"></div>
                    </div>

                    <div className="space-y-8 order-1 lg:order-2">
                        <div>
                            <div className="inline-flex items-center gap-2 text-maaviiTeal font-black uppercase tracking-[0.2em] mb-4">
                                <Sparkles size={20} />
                                Upcoming Concepts
                            </div>
                            <h2 className="text-5xl md:text-7xl font-black text-charcoal leading-none mb-6">
                                Fusion on Wheels
                            </h2>
                            <p className="text-xl text-charcoal/70 font-serif italic border-l-4 border-maaviiOrange pl-6 leading-relaxed">
                                "We are taking our signature Afro-Korean fusion to the streets. Experience the vibrant culture and taste of Maavii at festivals, markets, and private events."
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="p-6 bg-white rounded-2xl border-2 border-charcoal/5 shadow-lg">
                                <h3 className="font-black text-xl mb-2">Pop-up Events</h3>
                                <p className="text-charcoal/60 text-sm">Follow our journey across major city festivals.</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border-2 border-charcoal/5 shadow-lg">
                                <h3 className="font-black text-xl mb-2">Private Booking</h3>
                                <p className="text-charcoal/60 text-sm">Book our truck for your special celebration.</p>
                            </div>
                        </div>

                        <Link href="/coming-soon" className="inline-block px-10 py-5 bg-charcoal text-cream rounded-2xl font-black text-lg hover:bg-maaviiOrange hover:-translate-y-1 transition-all shadow-xl">
                            Learn About Our Concept
                        </Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FusionConcept;
