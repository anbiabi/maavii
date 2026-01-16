"use client";

import React, { useState, useMemo } from 'react';
import Container from './ui/Container';
import { useCart } from '@/context/CartContext';
import { MenuItem as BaseMenuItem } from '@/types';

// Local interface for display and logic
interface UIDisplayMenuItem {
    id: string;
    name: string;
    priceNum: number;
    priceStr: string;
    description: string;
    category: string;
    image: string;
}

// Helper to format price
const formatPrice = (price: number) => `$${price.toFixed(2)}`;

// Raw data from file listing
const rawMenuItems = [
    { file: "02_roasted_chicken_pieces.jpg", cat: "Mains", price: 15 },
    { file: "03_chicken_vegetable_skewers.jpg", cat: "Grill", price: 4 },
    { file: "04_fried_dough_balls_bolinho.jpg", cat: "Starters", price: 4 },
    { file: "07_bundt_ring_cake.jpg", cat: "Desserts", price: 12 },
    { file: "08_sliced_sponge_cake.jpg", cat: "Desserts", price: 5 },
    { file: "09_dense_cake_slice.jpg", cat: "Desserts", price: 5 },
    { file: "10_fried_pastries_pastel.jpg", cat: "Starters", price: 3.5 },
    { file: "11_rolled_crepes_panquecas.jpg", cat: "Desserts", price: 5 },
    { file: "boiled_cassava_manioc.png", cat: "Starters", price: 6 },
    { file: "cabage stew.jpg", cat: "Mains", price: 14 },
    { file: "cameroonian-meal-platter.jpg", cat: "Specials", price: 45 },
    { file: "chapati_flatbread.jpg", cat: "Sides", price: 3 },
    { file: "chicken ocra.jpg", cat: "Mains", price: 18 },
    { file: "colorful-meat-skewers.jpg", cat: "Grill", price: 5 },
    { file: "corn_fufu_couscous_mais.jpg", cat: "Sides", price: 5 },
    { file: "crepes.jpg", cat: "Desserts", price: 6 },
    { file: "cut_fritters.jpg", cat: "Starters", price: 4.5 },
    { file: "eru.jpg", cat: "Mains", price: 18 },
    { file: "fish_rolls_pastries.jpg", cat: "Starters", price: 3 },
    { file: "fried fish.jpg", cat: "Mains", price: 20 },
    { file: "fried vegetable.jpg", cat: "Mains", price: 14 },
    { file: "meat-pie.jpg", cat: "Starters", price: 3.5 },
    { file: "ndole-fish-meal.jpg", cat: "Mains", price: 22 },
    { file: "ndole_bitterleaf_stew.jpg", cat: "Mains", price: 18 },
    { file: "okra_soup_with_meat_fish.jpg", cat: "Mains", price: 18 },
    { file: "pepper_sauce_piment.jpg", cat: "Sides", price: 2 },
    { file: "pili-pili.jpg", cat: "Sides", price: 2 },
    { file: "plantain-meat_mix.jpg", cat: "Starters", price: 8 },
    { file: "poisson_frit_fried_fish.jpg", cat: "Mains", price: 15 },
    { file: "puff puff.jpg", cat: "Starters", price: 4 },
    { file: "rice-sauce-meal.jpg", cat: "Mains", price: 16 },
    { file: "rolled-meat-pie.jpg", cat: "Starters", price: 4 },
    { file: "rosted fish.jpg", cat: "Mains", price: 16 },
    { file: "rosted_fish_plantain.jpg", cat: "Mains", price: 18 },
    { file: "salad.jpg", cat: "Starters", price: 8 },
    { file: "sauce_arachide_peanut_soup.jpg", cat: "Mains", price: 17 },
    { file: "soya_beef_skewer.jpg", cat: "Grill", price: 4 },
    { file: "steamed-spaghetti.jpg", cat: "Mains", price: 15 },
    { file: "stew.jpg", cat: "Mains", price: 14 },
    { file: "water_fufu_fermented_cassava.jpg", cat: "Sides", price: 4 },
];

const FullMenu: React.FC = () => {
    const { addToCart } = useCart();
    const [addedId, setAddedId] = useState<string | null>(null);

    // Generate menu items efficiently
    const menuItems: UIDisplayMenuItem[] = useMemo(() => {
        return rawMenuItems.map((item, index) => {
            // Clean up name
            let name = item.file
                .replace(/\.(jpg|jpeg|png|webp)$/i, '') // remove extension
                .replace(/^\d+[_ ]*/, '') // remove leading numbers
                .replace(/[_]/g, ' ') // replace underscores with spaces
                .replace(/([A-Z])/g, ' $1') // space before caps if camelCase
                .trim();

            // Capitalize First Letter of each word
            name = name.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

            return {
                id: `menu-item-${index}`,
                name: name,
                priceNum: item.price,
                priceStr: formatPrice(item.price),
                description: `Authentic ${name.toLowerCase()} prepared with fresh ingredients and traditional spices.`,
                category: item.cat,
                image: `/images/food/${item.file}`
            };
        });
    }, []);

    const categories = Array.from(new Set(menuItems.map(item => item.category)));
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredItems = menuItems.filter(item => {
        const matchesCategory = activeCategory === "All" || item.category === activeCategory;
        const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleAddToCart = (item: UIDisplayMenuItem) => {
        // Construct the expected MenuItem type for the context
        const contextItem: BaseMenuItem = {
            id: item.id,
            name: { EN: item.name, KR: item.name }, // Simple mapping for now
            description: { EN: item.description, KR: item.description },
            price: item.priceNum,
            category: item.category.toLowerCase() as any,
            image: item.image
        };

        addToCart(contextItem);
        setAddedId(item.id);
        setTimeout(() => setAddedId(null), 1500);
    };

    return (
        <section className="py-24 bg-cream min-h-screen">
            <Container>

                {/* Header */}
                <div className="text-center mb-16 pt-8">
                    <h1 className="text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter mb-4">
                        Maavii Menu
                    </h1>
                    <p className="text-xl text-charcoal/60 font-serif italic max-w-2xl mx-auto">
                        Explore our complete selection of savory dishes, snacks, and sweet treats.
                    </p>
                </div>

                {/* Controls: Search & Filter */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 sticky top-24 z-30 bg-cream/95 backdrop-blur-md p-4 rounded-3xl shadow-sm border border-charcoal/5">

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => setActiveCategory("All")}
                            className={`px-5 py-2 rounded-full font-bold uppercase text-xs tracking-wider transition-all ${activeCategory === "All"
                                ? "bg-charcoal text-maaviiYellow shadow-md"
                                : "bg-white text-charcoal border border-charcoal/10 hover:bg-gray-100"
                                }`}
                        >
                            All
                        </button>
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-5 py-2 rounded-full font-bold uppercase text-xs tracking-wider transition-all ${activeCategory === category
                                    ? "bg-charcoal text-maaviiYellow shadow-md"
                                    : "bg-white text-charcoal border border-charcoal/10 hover:bg-gray-100"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Search for a dish..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-6 pr-12 py-3 rounded-full border-2 border-charcoal/10 bg-white focus:border-maaviiOrange focus:ring-0 outline-none transition-all font-serif"
                        />
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-charcoal/40">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {filteredItems.map((item) => {
                        const isJustAdded = addedId === item.id;

                        return (
                            <div key={item.id} className="group bg-white rounded-[2.5rem] overflow-hidden border border-charcoal/5 shadow-sm hover:shadow-2xl hover:border-maaviiOrange/30 transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1">

                                {/* Image Container */}
                                <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                                    {/* Price Tag */}
                                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full text-charcoal font-black shadow-lg border border-charcoal/10">
                                        {item.priceStr}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow relative">
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className={`absolute -top-6 right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white transition-all duration-300 transform ${isJustAdded ? 'bg-maaviiTeal scale-125 rotate-12' : 'bg-maaviiOrange hover:scale-110'
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

                                    <span className="text-[10px] font-black text-maaviiOrange uppercase tracking-[0.2em] mb-3 block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-2xl font-black text-charcoal mb-3 leading-tight group-hover:text-maaviiTeal transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-charcoal/60 font-serif text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {filteredItems.length === 0 && (
                    <div className="text-center py-20 text-charcoal/40">
                        <p className="text-xl font-serif italic">No dishes found matching your criteria.</p>
                        <button onClick={() => { setActiveCategory("All"); setSearchQuery(""); }} className="mt-4 text-maaviiOrange font-bold hover:underline">Clear Filters</button>
                    </div>
                )}

            </Container>
        </section>
    );
};

export default FullMenu;
