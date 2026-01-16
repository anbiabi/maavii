import React, { useState } from 'react';
import { ShoppingBag, Truck, Package, Search, Filter } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';

const GroceryMarketplace: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Fresh Produce', 'Grains & Legumes', 'Spices & Seasonings', 'Oils & Condiments'];

  const groceryItems = [
    {
      id: 1,
      name: 'Cameroon Black Peppercorns',
      category: 'Spices & Seasonings',
      price: '₩8,500',
      origin: 'Cameroon',
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b61?w=500&h=500&fit=crop',
      description: 'Authentic Cameroon black pepper for authentic African cuisine'
    },
    {
      id: 2,
      name: 'Nigerian Palm Oil',
      category: 'Oils & Condiments',
      price: '₩12,000',
      origin: 'Nigeria',
      image: 'https://images.unsplash.com/photo-1585518419759-29b7ead9acc3?w=500&h=500&fit=crop',
      description: 'Pure, unrefined palm oil for traditional recipes'
    },
    {
      id: 3,
      name: 'Cassava Flour',
      category: 'Grains & Legumes',
      price: '₩6,500',
      origin: 'Cameroon',
      image: 'https://images.unsplash.com/photo-1585707572215-39ffed77cda5?w=500&h=500&fit=crop',
      description: 'Fine cassava flour for plantain and traditional dishes'
    },
    {
      id: 4,
      name: 'Dried African Chilies',
      category: 'Spices & Seasonings',
      price: '₩7,000',
      origin: 'Ghana',
      image: 'https://images.unsplash.com/photo-1599599810694-b5ac4dd64b61?w=500&h=500&fit=crop',
      description: 'Authentic African chili peppers for bold flavors'
    },
    {
      id: 5,
      name: 'Black Eyed Peas',
      category: 'Grains & Legumes',
      price: '₩5,500',
      origin: 'Senegal',
      image: 'https://images.unsplash.com/photo-1599599810981-e61f0b46db74?w=500&h=500&fit=crop',
      description: 'Premium quality black eyed peas'
    },
    {
      id: 6,
      name: 'African Plantain',
      category: 'Fresh Produce',
      price: '₩4,500',
      origin: 'Cameroon',
      image: 'https://images.unsplash.com/photo-1599599810981-e61f0b46db74?w=500&h=500&fit=crop',
      description: 'Fresh plantains for frying or cooking'
    }
  ];

  const filteredItems = groceryItems.filter(item => {
    const matchCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 mb-8 text-right">
        <a 
          href="/groceryItems" 
          className="inline-block px-6 py-3 bg-maaviiOrange text-cream rounded-xl font-bold hover:bg-orange-700 transition-colors"
        >
          View Full Grocery Items Page
        </a>
      </div>
      <Container>
        <SectionTitle
          title="African Grocery Marketplace"
          subtitle="Authentic ingredients delivered nationwide"
        />
        <div className="text-center mb-8">
          <a 
            href="/groceryItems" 
            className="inline-block px-8 py-4 bg-maaviiTeal text-cream rounded-xl font-black text-xl hover:bg-teal-700 transition-colors"
          >
            Explore Full Grocery Selection
          </a>
        </div>

        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-charcoal/40" />
              <input
                type="text"
                placeholder="Search ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-white rounded-xl border-3 border-charcoal/5 focus:border-maaviiTeal outline-none font-bold text-lg"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-4 bg-charcoal text-cream rounded-xl font-bold hover:bg-maaviiOrange transition-colors">
              <Filter className="w-5 h-5" />
              Advanced Filters
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-3 rounded-lg font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-maaviiTeal text-cream'
                    : 'bg-cream border-2 border-charcoal/10 text-charcoal hover:border-maaviiTeal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden border-3 border-charcoal/5 hover:border-maaviiOrange hover:shadow-xl transition-all group">
              <div className="h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="mb-3 text-sm font-bold text-maaviiTeal uppercase tracking-wider">
                  {item.origin}
                </div>
                <h3 className="text-xl font-black text-charcoal mb-2">{item.name}</h3>
                <p className="text-charcoal/60 font-serif text-sm mb-6">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-maaviiOrange">{item.price}</span>
                  <button className="p-3 bg-maaviiYellow rounded-lg hover:bg-maaviiGold transition-colors">
                    <ShoppingBag className="w-5 h-5 text-charcoal" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-maaviiTeal/10 rounded-2xl border-3 border-maaviiTeal">
            <div className="flex items-center gap-4 mb-6">
              <Package className="w-10 h-10 text-maaviiTeal" />
              <h3 className="text-2xl font-black text-charcoal">African Grocery Box</h3>
            </div>
            <p className="text-charcoal/70 font-serif mb-6">
              Curated boxes with hand-picked African ingredients. Each month we select authentic, hard-to-find items perfect for traditional African cuisine in Korea.
            </p>
            <ul className="space-y-3 mb-8 text-charcoal/70 font-serif">
              <li>✓ Monthly curated selection</li>
              <li>✓ 20% savings vs. individual items</li>
              <li>✓ Recipe cards included</li>
              <li>✓ Free nationwide shipping</li>
            </ul>
            <button className="w-full px-6 py-4 bg-maaviiTeal text-cream rounded-xl font-black hover:bg-teal-700 transition-colors">
              Subscribe to Box
            </button>
          </div>

          <div className="p-8 bg-maaviiOrange/10 rounded-2xl border-3 border-maaviiOrange">
            <div className="flex items-center gap-4 mb-6">
              <Truck className="w-10 h-10 text-maaviiOrange" />
              <h3 className="text-2xl font-black text-charcoal">National Delivery</h3>
            </div>
            <p className="text-charcoal/70 font-serif mb-6">
              Fast, reliable delivery to anywhere in South Korea. Orders are carefully packed and shipped with care to ensure freshness.
            </p>
            <ul className="space-y-3 mb-8 text-charcoal/70 font-serif">
              <li>✓ 2-3 day delivery</li>
              <li>✓ Real-time tracking</li>
              <li>✓ Secure packaging</li>
              <li>✓ Guaranteed freshness</li>
            </ul>
            <button className="w-full px-6 py-4 bg-maaviiOrange text-cream rounded-xl font-black hover:bg-orange-700 transition-colors">
              Track Your Order
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default GroceryMarketplace;
