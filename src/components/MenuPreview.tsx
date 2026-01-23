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
        <section id="menu" className="py-24 bg-maaviiYellow/10">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter mb-4">
                        Our Menu
                    </h2>
                    <p className="text-xl text-charcoal/60 font-serif italic max-w-2xl mx-auto">
                        A taste of our signature dishes, from sizzling skewers to authentic traditional plates.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                    {menuImages.map((item, index) => (
                        <div key={index} className="aspect-square relative rounded-[2rem] overflow-hidden border-4 border-charcoal/5 group shadow-lg">
                            <img
                                src={item.src}
                                alt={item.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        href="/menu"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-charcoal text-cream rounded-2xl font-black text-xl hover:bg-maaviiOrange hover:-translate-y-1 transition-all shadow-xl"
                    >
                        View Full Menu <ArrowRight className="w-6 h-6" />
                    </Link>
                </div>
            </Container>
        </section>
    );
};

export default MenuPreview;
