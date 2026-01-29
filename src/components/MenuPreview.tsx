"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from './ui/Container';

const MenuPreview: React.FC = () => {
    // Limiting to 3 items for preview
    const menuImages = [
        { src: '/images/food/soya-brochettes-grill.jpg', alt: 'Beef Brochettes' },
        { src: '/images/food/chicken_skewers.jpg', alt: 'Chicken Skewers' },
        { src: '/images/food/ndole-fish-meal.jpg', alt: 'Ndole with Fish' }
    ];

    return (
        <section id="menu" className="py-32 bg-maaviiYellow/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-full african-pattern opacity-10 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-4 african-pattern opacity-20"></div>

            <Container className="relative z-10">
                <div className="text-center mb-20 relative">
                    <div className="w-20 h-2 vibrant-gradient mx-auto mb-6 rounded-full"></div>
                    <h2 className="text-6xl md:text-8xl font-black text-charcoal uppercase tracking-tighter mb-6 leading-none">
                        Our <span className="text-maaviiOrange">Menu</span>
                    </h2>
                    <p className="text-2xl text-charcoal/70 font-serif italic max-w-2xl mx-auto glass-vibrant p-6 rounded-2xl border-2 border-maaviiYellow/50">
                        A taste of our signature dishes, from <span className="text-maaviiOrange font-bold underline decoration-maaviiYellow underline-offset-4">sizzling skewers</span> to authentic traditional plates.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-20">
                    {menuImages.map((item, index) => (
                        <div key={index} className="aspect-square relative rounded-[3rem] overflow-hidden border-[10px] border-white group shadow-2xl transition-transform hover:-rotate-2 duration-500">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-maaviiChocolate/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-cream text-2xl font-black uppercase tracking-tight opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-500">
                                    {item.alt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/menu"
                        className="inline-flex items-center gap-4 px-12 py-6 bg-charcoal text-maaviiYellow rounded-[2rem] font-black text-2xl hover:bg-maaviiOrange hover:text-white transition-all shadow-2xl hover:scale-105 border-b-6 border-maaviiChocolate"
                    >
                        View Full Menu <ArrowRight className="w-8 h-8" />
                    </Link>
                </div>
            </Container>
            <div className="absolute bottom-0 left-0 w-full h-4 african-pattern opacity-20"></div>
        </section>
    );
};

export default MenuPreview;
