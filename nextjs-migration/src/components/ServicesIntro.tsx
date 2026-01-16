"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Utensils, GraduationCap, ShoppingBag } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';

const ServicesIntro: React.FC = () => {
    const services = [
        {
            title: 'Catering & Events',
            icon: Utensils,
            description: 'Full-service catering for weddings, corporate events, and private parties.',
            link: '/education',
            color: 'bg-maaviiOrange'
        },
        {
            title: 'Cooking Classes',
            icon: GraduationCap,
            description: 'Learn the art of African & Fusion cuisine with our expert chefs.',
            link: '/education',
            color: 'bg-maaviiTeal'
        },
        {
            title: 'Grocery Market',
            icon: ShoppingBag,
            description: 'Shop authentic ingredients to recreate our flavors at home.',
            link: '/grocery',
            color: 'bg-maaviiYellow'
        }
    ];

    return (
        <section id="services" className="py-24 bg-cream">
            <Container>
                <SectionTitle
                    title="Our Services"
                    subtitle="More than just a meal"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div key={index} className="group relative bg-white rounded-[2.5rem] p-8 border-4 border-charcoal/5 hover:border-charcoal hover:shadow-2xl transition-all duration-300">
                                <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <Icon className="w-8 h-8 text-charcoal" />
                                </div>

                                <h3 className="text-2xl font-black text-charcoal mb-4 uppercase">{service.title}</h3>
                                <p className="text-charcoal/60 font-serif mb-8 text-lg">{service.description}</p>

                                <Link href={service.link} className="inline-flex items-center gap-2 font-black text-charcoal uppercase tracking-widest hover:text-maaviiOrange transition-colors">
                                    Learn More <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
};

export default ServicesIntro;
