'use client';

import React, { useState } from 'react';
import { Clock, Truck, MapPin, Phone, MessageCircle, Plus } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';
import { MENU_ITEMS } from '../constants';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';

const OrderingSection: React.FC = () => {
    const [selectedService, setSelectedService] = useState<'order-ahead' | 'delivery' | 'pickup'>('order-ahead');
    const { language } = useLanguage();
    const { addToCart } = useCart();
    const [addedIds, setAddedIds] = useState<Set<string>>(new Set());

    // Show a subset of items for the quick view
    const featuredItems = MENU_ITEMS.slice(0, 5);

    const handleAddToCart = (item: typeof MENU_ITEMS[0]) => {
        addToCart(item);
        setAddedIds(prev => new Set(prev).add(item.id));
        setTimeout(() => {
            setAddedIds(prev => {
                const newSet = new Set(prev);
                newSet.delete(item.id);
                return newSet;
            });
        }, 1500);
    };

    const services = [
        {
            id: 'order-ahead',
            title: 'Order Ahead',
            icon: Clock,
            description: 'Pre-order and skip the line',
            details: 'Place your order online and pick it up at your preferred time',
            color: 'bg-maaviiTeal'
        },
        {
            id: 'delivery',
            title: 'Delivery',
            icon: Truck,
            description: 'We bring it to you',
            details: 'Fast delivery service across Seoul',
            color: 'bg-maaviiOrange'
        },
        {
            id: 'pickup',
            title: 'Pickup',
            icon: MapPin,
            description: 'Come grab it fresh',
            details: 'Pick up your order at our location',
            color: 'bg-maaviiGold'
        }
    ];

    return (
        <div className="min-h-screen bg-cream pt-32 pb-24">
            <Container>
                <SectionTitle
                    title="Order Your Fusion Feast"
                    subtitle="Choose your favorite fulfillment option"
                />

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <button
                                key={service.id}
                                onClick={() => setSelectedService(service.id as 'order-ahead' | 'delivery' | 'pickup')}
                                className={`p-8 rounded-[2rem] border-4 transition-all ${selectedService === service.id
                                    ? `${service.color} text-cream border-charcoal shadow-2xl -translate-y-2`
                                    : 'bg-cream border-charcoal/5 text-charcoal hover:border-charcoal/20'
                                    }`}
                            >
                                <Icon className="w-12 h-12 mx-auto mb-4" />
                                <h3 className="text-2xl font-black uppercase mb-2">{service.title}</h3>
                                <p className="font-serif text-sm opacity-80">{service.details}</p>
                            </button>
                        );
                    })}
                </div>

                <div className="bg-white rounded-[2rem] p-8 md:p-12 border-4 border-charcoal/5 shadow-xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <div className="flex justify-between items-end mb-8">
                                <h3 className="text-3xl font-black text-charcoal uppercase">Quick Add</h3>
                                <a href="/menu" className="text-maaviiTeal font-bold hover:underline">View Full Menu</a>
                            </div>
                            <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                                {featuredItems.map((item) => {
                                    const isJustAdded = addedIds.has(item.id);

                                    return (
                                        <div key={item.id} className="p-4 bg-cream rounded-xl border-2 border-charcoal/5 hover:border-maaviiOrange transition-colors group">
                                            <div className="flex justify-between items-start mb-2">
                                                <h4 className="font-bold text-charcoal">{item.name[language]}</h4>
                                                <span className="text-maaviiOrange font-black">₩ {item.price.toLocaleString()}</span>
                                            </div>
                                            <p className="text-sm text-charcoal/60 line-clamp-2 mb-3">
                                                {item.description[language]}
                                            </p>
                                            <button
                                                onClick={() => handleAddToCart(item)}
                                                className={`w-full py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2 ${isJustAdded
                                                        ? 'bg-maaviiTeal text-maaviiYellow'
                                                        : 'bg-charcoal text-maaviiYellow hover:bg-maaviiOrange'
                                                    }`}
                                            >
                                                {isJustAdded ? (
                                                    <>
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                        </svg>
                                                        Added!
                                                    </>
                                                ) : (
                                                    <>
                                                        <Plus className="w-4 h-4" />
                                                        Add
                                                    </>
                                                )}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div>
                            <h3 className="text-3xl font-black text-charcoal mb-8 uppercase">Contact Options</h3>
                            <div className="space-y-6">
                                <div className="p-6 bg-maaviiGold/20 rounded-xl border-3 border-maaviiGold">
                                    <div className="flex items-center gap-4 mb-3">
                                        <Phone className="w-8 h-8 text-maaviiOrange" />
                                        <h4 className="font-black text-charcoal">Phone Order</h4>
                                    </div>
                                    <p className="text-2xl font-black text-maaviiOrange">010-4409-2301</p>
                                    <p className="text-sm text-charcoal/70 mt-2">Call us directly to place your order</p>
                                </div>

                                <div className="p-6 bg-maaviiTeal/20 rounded-xl border-3 border-maaviiTeal">
                                    <div className="flex items-center gap-4 mb-3">
                                        <MessageCircle className="w-8 h-8 text-maaviiTeal" />
                                        <h4 className="font-black text-charcoal">WhatsApp Inquiry</h4>
                                    </div>
                                    <p className="text-2xl font-black text-maaviiTeal">010-4409-2301</p>
                                    <p className="text-sm text-charcoal/70 mt-2">Chat with us for inquiries and catering orders</p>
                                </div>

                                <div className="p-6 bg-maaviiOrange/10 rounded-xl border-3 border-maaviiOrange">
                                    <div className="flex items-center gap-4 mb-3">
                                        <Truck className="w-8 h-8 text-maaviiOrange" />
                                        <h4 className="font-black text-charcoal">Delivery Hours</h4>
                                    </div>
                                    <p className="text-lg font-black text-maaviiOrange">Mon-Sun: 11am - 10pm</p>
                                    <p className="text-sm text-charcoal/70 mt-2">Last order at 9pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default OrderingSection;