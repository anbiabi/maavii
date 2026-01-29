'use client';

import React, { useState } from 'react';
import { ShoppingBag, Truck, Package, Search, Filter } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { useCart } from '@/context/CartContext';
import { MenuItem as BaseMenuItem } from '@/types';

const GroceryMarketplace: React.FC = () => {
    const [addedId, setAddedId] = useState<string | null>(null);
    const { addToCart } = useCart();

    // Only showing 3 items for the homepage preview
    const groceryPreviewItems = [
        {
            id: 1,
            name: 'Cameroon Black Peppercorns (Pebe)',
            category: 'Spices & Seasonings',
            price: 8500,
            origin: 'Africa',
            image: '/images/grocery/Pebe.png',
            description: 'Authentic Cameroon black peppercorns used for traditional seasoning.'
        },
        {
            id: 2,
            name: 'Nigerian Palm Oil',
            category: 'Oils & Condiments',
            price: 12000,
            origin: 'Africa',
            image: '/images/grocery/palm oil.jpg',
            description: 'Pure red palm oil for traditional African cooking.'
        },
        {
            id: 3,
            name: 'Cassava Flour',
            category: 'Grains & Legumes',
            price: 6500,
            origin: 'Africa',
            image: '/images/grocery/cassava-flour.jpg',
            description: 'Fine cassava flour for making traditional fufu.'
        }
    ];

    const handleAddToCart = (item: any) => {
        // Construct the expected MenuItem type for the context
        const contextItem: BaseMenuItem = {
            id: `grocery-${item.id}`,
            name: { EN: item.name, KR: item.name }, // Simple mapping for now
            description: { EN: item.description, KR: item.description },
            price: item.price / 1000, // Convert KRW to a more reasonable price
            category: item.category.toLowerCase().includes('spice') ? 'main' :
                item.category.toLowerCase().includes('oil') ? 'main' :
                    item.category.toLowerCase().includes('fresh') ? 'main' : 'snack' as any,
            image: item.image
        };

        addToCart(contextItem);
        setAddedId(`grocery-${item.id}`);
        setTimeout(() => setAddedId(null), 1500);
    };

    return (
        <div className="min-h-screen bg-white relative overflow-hidden pt-32 pb-32">
            {/* Background Decorations */}
            <div className="absolute inset-0 mask-overlay opacity-30 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-2/3 h-full african-pattern opacity-10 -skew-x-12 translate-x-1/2 pointer-events-none"></div>

            <Container className="relative z-10">
                <div className="text-center mb-24">
                    <div className="inline-flex items-center gap-4 px-10 py-5 bg-maaviiOrange text-maaviiChocolate rounded-[2rem] font-black text-3xl uppercase tracking-widest shadow-2xl mb-12 border-b-8 border-maaviiChocolate -rotate-1">
                        <ShoppingBag size={40} className="animate-bounce" />
                        Marketplace
                    </div>

                    <h2 className="text-6xl md:text-8xl font-black text-charcoal leading-none tracking-tighter uppercase mb-8">
                        African <span className="text-maaviiTeal">Flavors</span>
                    </h2>

                    <p className="text-2xl text-charcoal/80 font-serif italic max-w-3xl mx-auto glass-vibrant p-10 rounded-3xl border-2 border-maaviiOrange shadow-xl">
                        Hand-selected ingredients from the heart of Africa. <span className="text-maaviiOrange font-black">Authentic, premium, and delivered nationwide.</span>
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                    {groceryPreviewItems.map(item => {
                        const isJustAdded = addedId === `grocery-${item.id}`;

                        return (
                            <div key={item.id} className="bg-white rounded-[3rem] overflow-hidden border-[10px] border-white shadow-2xl hover:border-maaviiYellow transition-all duration-500 group flex flex-col hover:-translate-y-4">
                                <div className="h-72 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-maaviiChocolate/40 via-transparent to-transparent opacity-60"></div>

                                    {/* Tribal pattern overlay on image hover */}
                                    <div className="absolute inset-0 african-pattern opacity-0 group-hover:opacity-10 transition-opacity pointer-events-none"></div>

                                    {/* Add to Cart Button on Image - BIGGER & BOLDER */}
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className={`absolute bottom-6 left-1/2 transform -translate-x-1/2 w-20 h-20 rounded-full flex items-center justify-center shadow-2xl text-white transition-all duration-500 scale-90 group-hover:scale-110 ${isJustAdded
                                            ? 'bg-maaviiTeal rotate-12'
                                            : 'vibrant-gradient border-4 border-white'
                                            }`}
                                        title="Add to Cart"
                                    >
                                        {isJustAdded ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="mb-4 inline-block px-4 py-1.5 bg-maaviiTeal/15 text-maaviiChocolate text-xs font-black uppercase tracking-[0.3em] rounded-full self-start">
                                        {item.origin}
                                    </div>
                                    <h3 className="text-2xl font-black text-charcoal mb-3 uppercase tracking-tight leading-tight">{item.name}</h3>
                                    <p className="text-charcoal/70 font-serif text-lg mb-8 italic flex-grow leading-relaxed line-clamp-2">{item.description}</p>

                                    <div className="flex items-center justify-between pt-6 border-t-4 border-double border-charcoal/10">
                                        <div className="leading-none">
                                            <span className="text-sm font-black text-charcoal/40 uppercase block mb-1">Price</span>
                                            <span className="text-4xl font-black text-maaviiOrange tracking-tighter">₩{item.price.toLocaleString()}</span>
                                        </div>
                                        <button
                                            onClick={() => handleAddToCart(item)}
                                            className={`w-16 h-16 rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center ${isJustAdded
                                                ? 'bg-maaviiTeal text-white'
                                                : 'bg-maaviiYellow text-charcoal hover:bg-maaviiOrange hover:text-white hover:scale-110'
                                                }`}
                                        >
                                            <ShoppingBag className="w-8 h-8" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <a
                        href="/grocery"
                        className="inline-flex items-center gap-5 px-16 py-8 bg-charcoal text-maaviiYellow rounded-[3rem] font-black text-3xl hover:bg-maaviiOrange hover:text-white transition-all hover:scale-110 shadow-[0_30px_60px_rgba(0,0,0,0.3)] border-b-8 border-maaviiChocolate group"
                    >
                        <ShoppingBag className="w-10 h-10 group-hover:bounce" />
                        Explore Selection
                    </a>
                </div>
            </Container>

            {/* Tribal border at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-8 african-pattern opacity-30"></div>
        </div>
    );
};

export default GroceryMarketplace;