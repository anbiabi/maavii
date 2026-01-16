"use client";

import React, { useState } from 'react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';

interface MenuItem {
    id: string;
    name: string;
    price: string;
    description: string;
    category: string;
    image: string;
}

const menuItems: MenuItem[] = [
    // Starters & Snacks
    {
        id: 'puff-puff',
        name: "Puff Puff (Beignets)",
        price: "$4.00",
        description: "Sweet, soft, and fluffy fried dough balls. A classic West African street food treat.",
        category: "Starters",
        image: "/images/food/puff puff.jpg"
    },
    {
        id: 'meat-pie',
        name: "Classic Meat Pie",
        price: "$3.50",
        description: "Flaky pastry filled with seasoned ground meat and vegetables.",
        category: "Starters",
        image: "/images/food/meat-pie.jpg"
    },
    {
        id: 'fish-roll',
        name: "Fish Rolls",
        price: "$3.00",
        description: "Crispy pastry rolls filled with savory spiced fish.",
        category: "Starters",
        image: "/images/food/fish_rolls_pastries.jpg"
    },
    {
        id: 'cut-fritters',
        name: "Cut Fritters",
        price: "$4.50",
        description: "Crunchy, golden-fried snacks, perfect for sharing.",
        category: "Starters",
        image: "/images/food/cut_fritters.jpg"
    },
    {
        id: 'plantain-gizdodo',
        name: "Plantain & Gizzard Mix",
        price: "$8.00",
        description: "Sweet fried plantains tossed with spicy gizzards and peppers.",
        category: "Starters",
        image: "/images/food/plantain-meat_mix.jpg"
    },

    // From the Grill (Brochettes)
    {
        id: 'beef-soya',
        name: "Beef Soya Skewer",
        price: "$3.50",
        description: "Spicy marinated beef skewers, grilled to smoky perfection.",
        category: "Grill",
        image: "/images/food/soya_beef_skewer.jpg"
    },
    {
        id: 'chicken-skewer',
        name: "Chicken Vegetable Skewer",
        price: "$3.50",
        description: "Tender chicken chunks grilled with colorful bell peppers and onions.",
        category: "Grill",
        image: "/images/food/03_chicken_vegetable_skewers.jpg"
    },
    {
        id: 'mixed-meat',
        name: "Mixed Meat Brochettes",
        price: "$4.00",
        description: "A hearty combination of grilled meats seasoned with our secret spice blend.",
        category: "Grill",
        image: "/images/food/meat-brochettes.jpg"
    },

    // Main Courses
    {
        id: 'ndole',
        name: "Ndole with Fish",
        price: "$22.00",
        description: "Cameroon's national dish. Bitterleaf stew with groundnuts, served with fried fish and plantains.",
        category: "Mains",
        image: "/images/food/ndole-fish-meal.jpg"
    },
    {
        id: 'fried-fish',
        name: "Fried Fish Platter",
        price: "$20.00",
        description: "Whole crispy fried fish served with fried plantains and pepper sauce.",
        category: "Mains",
        image: "/images/food/fried fish.jpg"
    },
    {
        id: 'rice-sauce',
        name: "Rice & Tomato Sauce",
        price: "$16.00",
        description: "Fluffy white rice served with a rich, savory tomato and meat stew.",
        category: "Mains",
        image: "/images/food/rice-sauce-meal.jpg"
    },
    {
        id: 'roasted-chicken',
        name: "Roasted Chicken Quarter",
        price: "$14.00",
        description: "Succulent oven-roasted chicken leg quarter with aromatic herbs.",
        category: "Mains",
        image: "/images/food/02_roasted_chicken_pieces.jpg"
    },
    {
        id: 'eru',
        name: "Eru & Water Fufu",
        price: "$18.00",
        description: "Wild vegetable soup cooked with palm oil and crayfish, served with fermented cassava dough.",
        category: "Mains",
        image: "/images/food/eru.jpg"
    },
    {
        id: 'okra',
        name: "Okra Soup",
        price: "$18.00",
        description: "Viscous and flavorful okra soup with meat and fish.",
        category: "Mains",
        image: "/images/food/okra_soup_with_meat_fish.jpg"
    },
    {
        id: 'maafe',
        name: "Peanut Sauce (Maafe)",
        price: "$17.00",
        description: "Rich and creamy groundnut stew with meat, served with rice or fufu.",
        category: "Mains",
        image: "/images/food/sauce_arachide_peanut_soup.jpg"
    },
    {
        id: 'cabbage-stew',
        name: "Cabbage Stew",
        price: "$15.00",
        description: "Sautéed cabbage with vegetables and meat, a healthy and comforting choice.",
        category: "Mains",
        image: "/images/food/cabage stew.jpg"
    },

    // Desserts
    {
        id: 'crepes',
        name: "Rolled Crepes",
        price: "$5.00",
        description: "Thin, delicate pancakes rolled and served lightly sweetened.",
        category: "Desserts",
        image: "/images/food/11_rolled_crepes_panquecas.jpg"
    },
    {
        id: 'cake',
        name: "Sponge Cake Slice",
        price: "$4.50",
        description: "Light and airy vanilla sponge cake, perfect for tea time.",
        category: "Desserts",
        image: "/images/food/sliced_cake_1.jpg"
    }
];

const FullMenu: React.FC = () => {
    const categories = Array.from(new Set(menuItems.map(item => item.category)));
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredItems = activeCategory === "All"
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <section className="py-32 bg-cream min-h-screen">
            <Container>
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter mb-4">
                        Full Menu
                    </h1>
                    <p className="text-xl text-charcoal/60 font-serif italic max-w-2xl mx-auto">
                        Explore our complete selection of authentic dishes, handcrafted daily.
                    </p>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 sticky top-24 z-20 md:top-32 bg-cream/95 backdrop-blur py-4 transition-all">
                    <button
                        onClick={() => setActiveCategory("All")}
                        className={`px-6 py-2 rounded-full font-black uppercase text-sm tracking-widest transition-all ${activeCategory === "All"
                            ? "bg-charcoal text-maaviiYellow shadow-lg scale-105"
                            : "bg-white text-charcoal border border-charcoal/10 hover:border-charcoal hover:bg-gray-50"
                            }`}
                    >
                        All
                    </button>
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-6 py-2 rounded-full font-black uppercase text-sm tracking-widest transition-all ${activeCategory === category
                                ? "bg-charcoal text-maaviiYellow shadow-lg scale-105"
                                : "bg-white text-charcoal border border-charcoal/10 hover:border-charcoal hover:bg-gray-50"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="group bg-white rounded-[2rem] overflow-hidden border-2 border-charcoal/5 hover:border-charcoal hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
                            <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-1 rounded-full text-charcoal font-black shadow-sm">
                                    {item.price}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <span className="text-xs font-bold text-maaviiOrange uppercase tracking-widest mb-2 block">
                                    {item.category}
                                </span>
                                <h3 className="text-2xl font-black text-charcoal mb-3 leading-tight group-hover:text-maaviiTeal transition-colors">
                                    {item.name}
                                </h3>
                                <p className="text-charcoal/60 font-serif mb-6 flex-grow">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FullMenu;
