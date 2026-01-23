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
        <section id="gallery" className="py-24 bg-charcoal text-cream overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter mb-4">Gallery</h2>
                        <p className="text-xl text-cream/60 font-serif italic border-l-4 border-maaviiOrange pl-6">
                            A visual journey through our vibrant flavors and colorful presentations.
                        </p>
                    </div>
                    <Link href="/gallery" className="px-8 py-4 bg-maaviiTeal text-cream rounded-xl font-black hover:bg-white hover:text-charcoal transition-all">
                        View Full Gallery
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {images.map((src, index) => (
                        <div key={index} className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-charcoal/20">
                            <img
                                src={src}
                                alt={`Gallery image ${index + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

                            {/* Instagram Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-16 h-16 bg-cream/90 rounded-full flex items-center justify-center shadow-xl">
                                    <Instagram className="w-8 h-8 text-charcoal" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default CulinaryGallery;
