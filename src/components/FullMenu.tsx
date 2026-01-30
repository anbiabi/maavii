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
    { file: "02_roasted_chicken_pieces.jpg", cat: "Mains", price: 4 },
    { file: "03_chicken_vegetable_skewers.jpg", cat: "Grill", price: 4 },
    { file: "04_fried_dough_balls_bolinho.jpg", cat: "Starters", price: 3 },
    { file: "croquettes.jpg", cat: "Starters", price: 3 },
    { file: "salad_vinaigrette_1.jpg", cat: "Starters", price: 3 },
    { file: "salade.jpg", cat: "Starters", price: 3 },
    { file: "cake.jpg", cat: "Desserts", price: 4 },
    { file: "gateau.jpeg", cat: "Desserts", price: 5 },
    { file: "gateaux.jpeg", cat: "Desserts", price: 5 },
    { file: "10_fried_pastries_pastel.jpg", cat: "Starters", price: 3.5 },
    { file: "11_rolled_crepes_panquecas.jpg", cat: "Desserts", price: 5 },
    { file: "boiled_cassava_manioc.png", cat: "Mains", price: 7 },
    { file: "cabage stew.jpg", cat: "Mains", price: 8 },
    { file: "signature-meal-platter.jpg", cat: "Specials", price: 45 },
    { file: "ndole-fish-meal.jpg", cat: "Specials", price: 45 },
    { file: "party-menu.jpg", cat: "Specials", price: 45 },
    { file: "party-platter.jpg.jpg", cat: "Specials", price: 45 },
    { file: "Party_table.jpg", cat: "Specials", price: 45 },
    { file: "chapati_flatbread.jpg", cat: "Sides", price: 3 },
    { file: "chicken ocra.jpg", cat: "Mains", price: 10 },
    { file: "colorful-meat-skewers.jpg", cat: "Grill", price: 5 },
    { file: "corn_fufu_couscous_mais.jpg", cat: "Mains", price: 8 },
    { file: "crepes.jpg", cat: "Desserts", price: 2 },
    { file: "cut_fritters.jpg", cat: "Starters", price: 4.5 },
    { file: "eru.jpg", cat: "Mains", price: 12 },
    { file: "fish_rolls_pastries.jpg", cat: "Starters", price: 4 },
    { file: "fried fish.jpg", cat: "Mains", price: 9 },
    { file: "fried vegetable.jpg", cat: "Mains", price: 10 },
    { file: "meat-pie.jpg", cat: "Starters", price: 3.5 },
    { file: "ndole-fish-meal.jpg", cat: "Mains", price: 12 },
    { file: "ndole_bitterleaf_stew.jpg", cat: "Mains", price: 10 },
    { file: "okra_soup_with_meat_fish.jpg", cat: "Mains", price: 7.5 },
    { file: "piment.jpg", cat: "Sides", price: 2 },
    { file: "pili-pili.jpg", cat: "Sides", price: 3 },
    { file: "plantain-meat_mix.jpg", cat: "Starters", price: 12 },
    { file: "poisson_frit_fried_fish.jpg", cat: "Mains", price: 8 },
    { file: "puff puff.jpg", cat: "Starters", price: 4 },
    { file: "meat-pie-raw.jpg", cat: "Mains", price: 8 },
    { file: "rolled-meat-pie.jpg", cat: "Starters", price: 4 },
    { file: "rosted fish.jpg", cat: "Mains", price: 12 },
    { file: "rosted_fish_plantain.jpg", cat: "Mains", price: 10 },
    { file: "salad.jpg", cat: "Starters", price: 8 },
    { file: "sauce_arachide_peanut_soup.jpg", cat: "Mains", price: 12 },
    { file: "soya_beef_skewer.jpg", cat: "Grill", price: 4 },
    { file: "steamed-spaghetti.jpg", cat: "Mains", price: 8 },
    { file: "stew.jpg", cat: "Mains", price: 12 },
    { file: "water_fufu.jpg", cat: "Sides", price: 4 },
    { file: "couscous stew.jpg", cat: "Mains", price: 12 },
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
                <div className="text-center mb-10 md:mb-16 pt-8">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter mb-4">
                        Maavii Menu
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-charcoal/60 font-serif italic max-w-2xl mx-auto px-4">
                        Explore our complete selection of savory dishes, snacks, and sweet treats.
                    </p>
                </div>

                {/* Controls: Search & Filter */}
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-12 sticky top-[72px] md:top-24 z-30 bg-cream/95 backdrop-blur-md p-4 rounded-3xl shadow-sm border border-charcoal/5">

                    {/* Categories */}
                    <div className="flex flex-wrap justify-center gap-2">
                        <button
                            onClick={() => setActiveCategory("All")}
                            className={`px-4 py-2 md:px-5 md:py-2 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-wider transition-all ${activeCategory === "All"
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
                                className={`px-4 py-2 md:px-5 md:py-2 rounded-full font-bold uppercase text-[10px] md:text-xs tracking-wider transition-all ${activeCategory === category
                                    ? "bg-charcoal text-maaviiYellow shadow-md"
                                    : "bg-white text-charcoal border border-charcoal/10 hover:bg-gray-100"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full lg:w-80">
                        <input
                            type="text"
                            placeholder="Search for a dish..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-6 pr-12 py-3 rounded-full border-2 border-charcoal/10 bg-white focus:border-maaviiOrange focus:ring-0 outline-none transition-all font-serif text-sm"
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

                                    {/* Add to Cart Button on Image */}
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg text-white transition-all duration-300 ${isJustAdded
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

                                {/* Content */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <span className="text-[10px] font-black text-maaviiOrange uppercase tracking-[0.2em] mb-2 md:mb-3 block">
                                        {item.category}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-black text-charcoal mb-2 md:mb-3 leading-tight group-hover:text-maaviiTeal transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-charcoal/60 font-serif text-xs md:text-sm leading-relaxed mb-4 md:mb-6 flex-grow line-clamp-3">
                                        {item.description}
                                    </p>

                                    {/* Add to Cart Button in Content Area */}
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className={`mt-4 w-full py-3 rounded-full font-bold uppercase text-xs md:text-sm tracking-wider transition-all ${isJustAdded
                                            ? 'bg-maaviiTeal text-maaviiYellow'
                                            : 'bg-charcoal text-maaviiYellow hover:bg-maaviiOrange'
                                            }`}
                                    >
                                        {isJustAdded ? '✓ ADDED TO CART' : '+ ADD TO CART'}
                                    </button>
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