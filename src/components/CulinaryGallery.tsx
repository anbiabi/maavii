"use client";

import React from 'react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';
import Container from './ui/Container';

const CulinaryGallery: React.FC = () => {
    const images = [
        '/images/food/02_roasted_chicken_pieces.jpg',
        '/images/food/04_fried_dough_balls_bolinho.jpg',
        '/images/food/03_chicken_vegetable_skewers.jpg'
    ];

    return (
        <section id="gallery" className="py-32 bg-maaviiChocolate text-cream overflow-hidden relative">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 mask-overlay opacity-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-1/3 h-full african-pattern opacity-5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">
                        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-6 text-stroke-vibrant leading-none">Gallery</h2>
                        <p className="text-2xl text-cream/80 font-serif italic border-l-[12px] border-maaviiOrange pl-8 glass-vibrant p-6 rounded-r-[2rem]">
                            A visual journey through our <span className="text-maaviiYellow font-black">vibrant flavors</span> and colorful presentations.
                        </p>
                    </div>
                    <Link href="/gallery" className="px-12 py-6 bg-maaviiOrange text-white rounded-[2rem] font-black text-xl hover:bg-maaviiYellow hover:text-charcoal transition-all shadow-2xl border-b-6 border-black/30">
                        View Full Gallery
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {images.map((src, index) => (
                        <div key={index} className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden border-[12px] border-white/10 shadow-2xl transition-all duration-500 hover:border-maaviiYellow hover:-rotate-2">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-maaviiChocolate/40 group-hover:bg-transparent transition-colors"></div>

                            {/* Decorative Corner */}
                            <div className="absolute top-0 left-0 w-24 h-24 african-pattern opacity-0 group-hover:opacity-100 transition-opacity rounded-br-[3rem]"></div>

                            {/* Instagram Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-24 h-24 vibrant-gradient rounded-full flex items-center justify-center shadow-2xl border-4 border-white">
                                    <Instagram className="w-12 h-12 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            <div className="absolute bottom-0 left-0 w-full h-8 african-pattern opacity-30"></div>
        </section>
    );
};

export default CulinaryGallery;
