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
        <div className="min-h-screen bg-cream pt-32 pb-24">
            <Container>
                <SectionTitle
                    title="African Grocery Marketplace"
                    subtitle="Authentic ingredients delivered nationwide"
                />
                
                {/* Link to Full Grocery Page */}
                <div className="text-center mb-12">
                    <a 
                        href="/grocery"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-maaviiOrange text-cream rounded-xl font-black text-lg hover:bg-orange-700 transition-colors shadow-lg"
                    >
                        <ShoppingBag className="w-6 h-6" />
                        Explore Full Grocery Selection
                    </a>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {groceryPreviewItems.map(item => {
                        const isJustAdded = addedId === `grocery-${item.id}`;
                        
                        return (
                            <div key={item.id} className="bg-white rounded-2xl overflow-hidden border-3 border-charcoal/5 hover:border-maaviiOrange hover:shadow-xl transition-all group">
                                <div className="h-64 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Add to Cart Button on Image */}
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white transition-all duration-300 ${
                                            isJustAdded 
                                                ? 'bg-maaviiTeal scale-125 rotate-12' 
                                                : 'bg-maaviiOrange hover:scale-110 border-2 border-white'
                                        }`}
                                        title="Add to Cart"
                                    >
                                        {isJustAdded ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <div className="p-6">
                                    <div className="mb-3 text-sm font-bold text-maaviiTeal uppercase tracking-wider">
                                        {item.origin}
                                    </div>
                                    <h3 className="text-xl font-black text-charcoal mb-2">{item.name}</h3>
                                    <p className="text-charcoal/60 font-serif text-sm mb-6">{item.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-2xl font-black text-maaviiOrange">₩{item.price.toLocaleString()}</span>
                                        <button 
                                            onClick={() => handleAddToCart(item)}
                                            className={`p-3 rounded-lg transition-colors ${
                                                isJustAdded 
                                                    ? 'bg-maaviiTeal' 
                                                    : 'bg-maaviiYellow hover:bg-maaviiGold'
                                            }`}
                                        >
                                            <ShoppingBag className={`w-5 h-5 ${
                                                isJustAdded 
                                                    ? 'text-white' 
                                                    : 'text-charcoal'
                                            }`} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </Container>
        </div>
    );
};

export default GroceryMarketplace;