'use client';

import React, { useState } from 'react';
import { ShoppingBag, Truck, Package, Search, Filter } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { useCart } from '@/context/CartContext';
import { MenuItem as BaseMenuItem } from '@/types';

const FullGroceryMarketplace: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [addedId, setAddedId] = useState<string | null>(null);
    const { addToCart } = useCart();

    const categories = ['all', 'Fresh Produce', 'Grains & Legumes', 'Spices & Seasonings', 'Oils & Condiments', 'Leafy Greens'];

    // Complete list of grocery items
    const groceryItems = [
        {
            id: 1,
            name: 'Black Peppercorns (Pebe)',
            category: 'Spices & Seasonings',
            price: 8500,
            origin: 'Premium',
            image: '/images/grocery/Pebe.png',
            description: 'Authentic black peppercorns used for traditional seasoning.'
        },
        {
            id: 2,
            name: 'Red Palm Oil',
            category: 'Oils & Condiments',
            price: 12000,
            origin: 'Premium',
            image: '/images/grocery/palm oil.jpg',
            description: 'Pure red palm oil for traditional cooking.'
        },
        {
            id: 3,
            name: 'Cassava Flour',
            category: 'Grains & Legumes',
            price: 6500,
            origin: 'Premium',
            image: '/images/grocery/cassava-flour.jpg',
            description: 'Fine cassava flour for making traditional fufu.'
        },
        {
            id: 4,
            name: 'Piment',
            category: 'Spices & Seasonings',
            price: 7000,
            origin: 'Premium',
            image: '/images/grocery/piment.jpeg',
            description: 'Spicy pepper sauce for flavoring in traditional dishes.'
        },
        {
            id: 5,
            name: 'Bitter Leaves (Ndole)',
            category: 'Fresh Produce',
            price: 5500,
            origin: 'Premium',
            image: '/images/grocery/Ndole.jpg',
            description: 'Fresh bitter leaves used for the famous Ndole dish.'
        },
        {
            id: 7,
            name: 'Spinach (Eru)',
            category: 'Leafy Greens',
            price: 6000,
            origin: 'Premium',
            image: '/images/grocery/Eru.webp',
            description: 'Nutrient-rich spinach for traditional stews.'
        },
        {
            id: 8,
            name: 'Njangsang Seeds (Akpi)',
            category: 'Spices & Seasonings',
            price: 7500,
            origin: 'Premium',
            image: '/images/grocery/Njangsang Akpi.jpg',
            description: 'Essential seeds for rich, nutty flavoring in traditional dishes.'
        },
        {
            id: 9,
            name: 'Fragrant Basil (Massip)',
            category: 'Leafy Greens',
            price: 4000,
            origin: 'Premium',
            image: '/images/grocery/Basilic Africain Massip.jpg',
            description: 'Fragrant basil for flavoring traditional soups.'
        },
        {
            id: 10,
            name: 'Shea Butter',
            category: 'Oils & Condiments',
            price: 9000,
            origin: 'Premium',
            image: '/images/grocery/Shea butter.jpg',
            description: 'Pure shea butter for cooking and traditional cosmetic use.'
        },
        {
            id: 11,
            name: 'Amaranth Leaves',
            category: 'Leafy Greens',
            price: 3500,
            origin: 'Premium',
            image: '/images/grocery/Amarante.jpg',
            description: 'Nutritious amaranth leaves for traditional cuisine.'
        },
        {
            id: 12,
            name: 'Wild Hibiscus Leaves (Oseille)',
            category: 'Leafy Greens',
            price: 5000,
            origin: 'Premium',
            image: '/images/grocery/Oseille.jpg',
            description: 'Tangy hibiscus leaves for flavoring soups and stews.'
        },
        {
            id: 13,
            name: 'Cassava Tuber',
            category: 'Grains & Legumes',
            price: 3000,
            origin: 'Premium',
            image: '/images/grocery/cassava tuber.jpeg',
            description: 'Fresh cassava roots for making fufu and other dishes.'
        },
        {
            id: 14,
            name: 'Miondo (Cassava-based)',
            category: 'Grains & Legumes',
            price: 6500,
            origin: 'Premium',
            image: '/images/grocery/miondo_peeled.png',
            description: 'Cassava-derived product similar to baton de manioc but smaller.'
        },
        {
            id: 15,
            name: 'Country Onion',
            category: 'Fresh Produce',
            price: 3000,
            origin: 'Premium',
            image: '/images/grocery/Country-onion.jpg',
            description: 'Strong-flavored onions essential in traditional cooking.'
        },
        {
            id: 16,
            name: 'Premium Nuts',
            category: 'Spices & Seasonings',
            price: 8000,
            origin: 'Premium',
            image: '/images/grocery/pistache.jpg',
            description: 'Mixed selection of nuts for protein and flavoring.'
        },
        {
            id: 17,
            name: 'Messep (Spice Mix)',
            category: 'Spices & Seasonings',
            price: 7500,
            origin: 'Premium',
            image: '/images/grocery/Massep messep.webp',
            description: 'Traditional spice blend for authentic taste.'
        },
        {
            id: 18,
            name: 'Whole Nutmeg',
            category: 'Spices & Seasonings',
            price: 7000,
            origin: 'Premium',
            image: '/images/grocery/Whole-nutmeg.jpg',
            description: 'Aromatic nutmeg for traditional seasoning.'
        },
        {
            id: 19,
            name: 'Amarante Feuille',
            category: 'Leafy Greens',
            price: 4000,
            origin: 'Premium',
            image: '/images/grocery/Amarante feuille.jpg',
            description: 'Nutritious Amarante leaves for traditional cooking.'
        },
        {
            id: 20,
            name: 'Baton Manioc',
            category: 'Grains & Legumes',
            price: 3500,
            origin: 'Premium',
            image: '/images/grocery/BatonManioc.jpg',
            description: 'Fresh cassava tubers for various traditional preparations.'
        },
        {
            id: 21,
            name: 'Crissa Macrocarp Prune Natale',
            category: 'Fresh Produce',
            price: 6000,
            origin: 'Premium',
            image: '/images/grocery/Crissa Macrocarp Prune Natale.webp',
            description: 'Traditional fruit variety.'
        },
        {
            id: 22,
            name: 'Essesse',
            category: 'Leafy Greens',
            price: 4500,
            origin: 'Premium',
            image: '/images/grocery/Essesse.jpg',
            description: 'Traditional leafy vegetable for nutritious cooking.'
        },
        {
            id: 23,
            name: 'MILITAIRE',
            category: 'Leafy Greens',
            price: 8000,
            origin: 'Premium',
            image: '/images/grocery/MIlitaire.jpg',
            description: 'Traditional leafy vegetable ingredient.'
        },
        {
            id: 24,
            name: 'Messep Sec',
            category: 'Spices & Seasonings',
            price: 7000,
            origin: 'Premium',
            image: '/images/grocery/Messep Sec.png',
            description: 'Dried traditional spice blend for cooking.'
        },
        {
            id: 25,
            name: 'Organic Honey',
            category: 'Oils & Condiments',
            price: 10000,
            origin: 'Premium',
            image: '/images/grocery/Miel.jpg',
            description: 'Pure honey for natural sweetness.'
        },
        {
            id: 26,
            name: 'Miondo Packet',
            category: 'Grains & Legumes',
            price: 6000,
            origin: 'Premium',
            image: '/images/grocery/Miondo packet.jpg',
            description: 'Packaged cassava-based product for convenient cooking.'
        },
        {
            id: 27,
            name: 'Morelle Noire (Solanum nigrum)',
            category: 'Fresh Produce',
            price: 4500,
            origin: 'Premium',
            image: '/images/grocery/Morelle Noire (Solanum nigrum).webp',
            description: 'Traditional fruit variety for nutritious cooking.'
        },
        {
            id: 28,
            name: 'Njansang',
            category: 'Spices & Seasonings',
            price: 8500,
            origin: 'Premium',
            image: '/images/grocery/Njansang.jpg',
            description: 'Traditional spice seeds for rich flavors.'
        },
        {
            id: 29,
            name: 'Oseille 1',
            category: 'Leafy Greens',
            price: 4500,
            origin: 'Premium',
            image: '/images/grocery/Oseille1.jpg',
            description: 'Additional variety of hibiscus leaves for cooking.'
        },
        {
            id: 30,
            name: 'Palm Pulp',
            category: 'Oils & Condiments',
            price: 9000,
            origin: 'Premium',
            image: '/images/grocery/Palm pulp.jpg',
            description: 'Fresh palm fruit pulp for oil extraction and cooking.'
        },
        {
            id: 31,
            name: 'Placally Paste de Manioc',
            category: 'Grains & Legumes',
            price: 5500,
            origin: 'Premium',
            image: '/images/grocery/Placally pate de Manioc.jpg',
            description: 'Traditional cassava paste for various preparations.'
        },
        {
            id: 32,
            name: 'Plum Saphou Prunes',
            category: 'Fresh Produce',
            price: 7500,
            origin: 'Premium',
            image: '/images/grocery/Plum Saphou africanum Prunes.webp',
            description: 'Traditional fruit variety.'
        },
        {
            id: 33,
            name: 'Prunes Rouges',
            category: 'Fresh Produce',
            price: 6500,
            origin: 'Premium',
            image: '/images/grocery/Prunes rouges.webp',
            description: 'Red prune variety for nutritional benefits.'
        },
        {
            id: 34,
            name: 'Rondelle',
            category: 'Fresh Produce',
            price: 4000,
            origin: 'Premium',
            image: '/images/grocery/Rondelle.webp',
            description: 'Traditional round-shaped vegetable preparation.'
        },
        {
            id: 35,
            name: 'Vernonia Crinita',
            category: 'Leafy Greens',
            price: 5000,
            origin: 'Premium',
            image: '/images/grocery/Vernonia crinita.jpg',
            description: 'Traditional medicinal and culinary leafy vegetable.'
        },
        {
            id: 36,
            name: 'Bifaka',
            category: 'Leafy Greens',
            price: 8500,
            origin: 'Premium',
            image: '/images/grocery/bifaka.webp',
            description: 'Traditional leafy vegetable ingredient.'
        },
        {
            id: 37,
            name: 'Fresh Bitter Leaves',
            category: 'Leafy Greens',
            price: 4500,
            origin: 'Premium',
            image: '/images/grocery/bitter leaves.jpg',
            description: 'Fresh bitter leaves for traditional Ndole preparation.'
        },
        {
            id: 38,
            name: 'Djache',
            category: 'Leafy Greens',
            price: 8000,
            origin: 'Premium',
            image: '/images/grocery/djache.jpg',
            description: 'Traditional leafy vegetable ingredient.'
        },
        {
            id: 39,
            name: 'Feuille de Patate',
            category: 'Leafy Greens',
            price: 4000,
            origin: 'Premium',
            image: '/images/grocery/feuille de patate.webp',
            description: 'Traditional potato leaves for cooking.'
        },
        {
            id: 40,
            name: 'Folere Rouge',
            category: 'Leafy Greens',
            price: 4000,
            origin: 'Premium',
            image: '/images/grocery/folere rouge.jpg',
            description: 'Red variety of traditional leafy vegetables.'
        },
        {
            id: 41,
            name: 'Folere',
            category: 'Leafy Greens',
            price: 3500,
            origin: 'Premium',
            image: '/images/grocery/folere.jpg',
            description: 'Traditional leafy vegetable for nutritious meals.'
        },
        {
            id: 42,
            name: 'Palmiste Claire',
            category: 'Oils & Condiments',
            price: 8500,
            origin: 'Premium',
            image: '/images/grocery/palmiste claire.jpg',
            description: 'Clarified palm oil for traditional cooking.'
        },
        {
            id: 43,
            name: 'Palmiste Noire',
            category: 'Oils & Condiments',
            price: 8500,
            origin: 'Premium',
            image: '/images/grocery/palmiste noire.png',
            description: 'Dark palm oil for traditional cooking.'
        },
        {
            id: 44,
            name: 'Tap Blanc',
            category: 'Grains & Legumes',
            price: 5000,
            origin: 'Premium',
            image: '/images/grocery/tap blanc.jpg',
            description: 'White variety of traditional grain preparation.'
        },
        {
            id: 45,
            name: 'Tapioca Jaune',
            category: 'Grains & Legumes',
            price: 5500,
            origin: 'Premium',
            image: '/images/grocery/tapioca jaune.jpg',
            description: 'Yellow tapioca preparation for various dishes.'
        }
    ];

    const filteredItems = groceryItems.filter(item => {
        const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

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
        <div className="min-h-screen bg-cream pt-20 md:pt-32 pb-24">
            <div className="max-w-7xl mx-auto px-4 mb-6 md:mb-8 flex justify-center sm:justify-end">
                <a
                    href="/grocery"
                    className="inline-block px-5 py-2.5 md:px-6 md:py-3 bg-maaviiOrange text-cream rounded-xl font-bold hover:bg-orange-700 transition-colors text-sm md:text-base shadow-lg"
                >
                    View Full Grocery Page
                </a>
            </div>
            <Container>
                <SectionTitle
                    title="Gourmet Grocery"
                    subtitle="Premium ingredients delivered nationwide"
                />
                <div className="text-center mb-8 px-4">
                    <a
                        href="/grocery"
                        className="inline-block px-6 py-3 md:px-8 md:py-4 bg-maaviiTeal text-cream rounded-xl font-black text-lg md:text-xl hover:bg-teal-700 transition-colors shadow-lg"
                    >
                        Explore Selection
                    </a>
                </div>

                <div className="mb-10 md:mb-12 px-2 sm:px-0">
                    <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                        <div className="flex-1 relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-charcoal/40" />
                            <input
                                type="text"
                                placeholder="Search ingredients..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-6 py-3.5 md:py-4 bg-white rounded-xl border-2 md:border-3 border-charcoal/5 focus:border-maaviiTeal outline-none font-bold text-base md:text-lg shadow-sm"
                            />
                        </div>
                        <button className="flex items-center justify-center gap-2 px-6 py-3.5 md:py-4 bg-charcoal text-maaviiYellow rounded-xl font-bold hover:bg-maaviiOrange transition-colors text-sm md:text-base">
                            <Filter className="w-4 h-4 md:w-5 md:h-5" />
                            Filters
                        </button>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-3 mt-4 md:mt-6 overflow-x-auto pb-2 scrollbar-hide">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`px-4 py-2 md:px-6 md:py-3 rounded-lg font-bold text-[11px] md:text-sm whitespace-nowrap transition-all ${selectedCategory === cat
                                    ? 'bg-maaviiTeal text-cream shadow-md'
                                    : 'bg-white border-2 border-charcoal/10 text-charcoal hover:border-maaviiTeal'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 px-2 sm:px-0">
                    {filteredItems.map(item => {
                        const isJustAdded = addedId === `grocery-${item.id}`;

                        return (
                            <div key={item.id} className="bg-white rounded-2xl overflow-hidden border-2 md:border-3 border-charcoal/5 hover:border-maaviiOrange hover:shadow-xl transition-all group">
                                <div className="h-56 md:h-64 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Add to Cart Button on Image */}
                                    <button
                                        onClick={() => handleAddToCart(item)}
                                        className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg text-white transition-all duration-300 ${isJustAdded
                                            ? 'bg-maaviiTeal scale-125 rotate-12'
                                            : 'bg-maaviiOrange hover:scale-110 border-2 border-white'
                                            }`}
                                        title="Add to Cart"
                                    >
                                        {isJustAdded ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                            </svg>
                                        )}
                                    </button>
                                </div>
                                <div className="p-5 md:p-6">
                                    {/* origin field removed per user request */}
                                    <h3 className="text-lg md:text-xl font-black text-charcoal mb-2 line-clamp-1">{item.name}</h3>
                                    <p className="text-charcoal/60 font-serif text-xs md:text-sm mb-4 md:mb-6 line-clamp-2">{item.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-xl md:text-2xl font-black text-maaviiOrange">₩{item.price.toLocaleString()}</span>
                                        <button
                                            onClick={() => handleAddToCart(item)}
                                            className={`p-2.5 md:p-3 rounded-lg transition-colors ${isJustAdded
                                                ? 'bg-maaviiTeal'
                                                : 'bg-maaviiYellow hover:bg-maaviiGold'
                                                }`}
                                        >
                                            <ShoppingBag className={`w-4 h-4 md:w-5 md:h-5 ${isJustAdded
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-2 sm:px-0">
                    <div className="p-6 md:p-8 bg-maaviiTeal/10 rounded-2xl border-2 md:border-3 border-maaviiTeal">
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <Package className="w-8 h-8 md:w-10 md:h-10 text-maaviiTeal" />
                            <h3 className="text-xl md:text-2xl font-black text-charcoal">Gourmet Grocery Box</h3>
                        </div>
                        <p className="text-sm md:text-base text-charcoal/70 font-serif mb-6 leading-relaxed">
                            Curated boxes with hand-picked premium ingredients. Each month we select authentic, hard-to-find items perfect for traditional cuisine in Korea.
                        </p>
                        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-xs md:text-sm text-charcoal/70 font-serif">
                            <li>✓ Monthly curated selection</li>
                            <li>✓ 20% savings vs. individual items</li>
                            <li>✓ Recipe cards included</li>
                            <li>✓ Free nationwide shipping</li>
                        </ul>
                        <button className="w-full px-5 py-3 md:px-6 md:py-4 bg-maaviiTeal text-cream rounded-xl font-black text-sm md:text-base hover:bg-teal-700 transition-colors shadow-lg">
                            Subscribe to Box
                        </button>
                    </div>

                    <div className="p-6 md:p-8 bg-maaviiOrange/10 rounded-2xl border-2 md:border-3 border-maaviiOrange">
                        <div className="flex items-center gap-4 mb-4 md:mb-6">
                            <Truck className="w-8 h-8 md:w-10 md:h-10 text-maaviiOrange" />
                            <h3 className="text-xl md:text-2xl font-black text-charcoal">National Delivery</h3>
                        </div>
                        <p className="text-sm md:text-base text-charcoal/70 font-serif mb-6 leading-relaxed">
                            Fast, reliable delivery to anywhere in South Korea. Orders are carefully packed and shipped with care to ensure freshness.
                        </p>
                        <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8 text-xs md:text-sm text-charcoal/70 font-serif">
                            <li>✓ 2-3 day delivery</li>
                            <li>✓ Real-time tracking</li>
                            <li>✓ Secure packaging</li>
                            <li>✓ Guaranteed freshness</li>
                        </ul>
                        <button className="w-full px-5 py-3 md:px-6 md:py-4 bg-maaviiOrange text-cream rounded-xl font-black text-sm md:text-base hover:bg-orange-700 transition-colors shadow-lg">
                            Track Your Order
                        </button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default FullGroceryMarketplace;