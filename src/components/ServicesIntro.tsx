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
            link: '/services',
            color: 'bg-maaviiOrange'
        },
        {
            title: 'Cooking Classes',
            icon: GraduationCap,
            description: 'Learn the art of African & Fusion cuisine with our expert chefs.',
            link: '/services',
            color: 'bg-maaviiTeal'
        },
        {
            title: 'Grocery Market',
            icon: ShoppingBag,
            description: 'Shop authentic ingredients to recreate our flavors at home.',
            link: '/services',
            color: 'bg-maaviiYellow'
        }
    ];

    return (
        <section id="services" className="py-32 bg-maaviiTeal/10 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 mask-overlay opacity-30 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-4 african-pattern opacity-30"></div>

            <Container className="relative z-10">
                <div className="text-center mb-20 relative">
                    <div className="w-24 h-2 bg-maaviiOrange mx-auto mb-6 rounded-full"></div>
                    <h2 className="text-6xl md:text-8xl font-black text-charcoal uppercase tracking-tighter mb-6 leading-none">
                        Our <span className="text-maaviiTeal">Services</span>
                    </h2>
                    <p className="text-2xl text-charcoal/70 font-serif italic max-w-2xl mx-auto glass-vibrant p-6 rounded-2xl border-2 border-maaviiTeal/40 shadow-xl">
                        Experience more than just a meal. We bring <span className="text-maaviiOrange font-bold">culture, education, and community</span> to your table.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={`service-${index}`}
                                className="group relative bg-white rounded-[3.5rem] p-10 border-[8px] border-white shadow-2xl hover:border-maaviiOrange transition-all duration-500 hover:-translate-y-4"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 african-pattern opacity-5 rounded-bl-[4rem] group-hover:opacity-20 transition-opacity"></div>

                                <div
                                    className={`w-24 h-24 rounded-3xl ${service.color} flex items-center justify-center mb-8 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all border-b-6 border-black/20`}
                                >
                                    <Icon className="w-12 h-12 text-charcoal" />
                                </div>

                                <h3 className="text-3xl font-black text-charcoal mb-6 uppercase tracking-tight">
                                    {service.title}
                                </h3>

                                <p className="text-charcoal/70 font-serif mb-10 text-xl leading-relaxed italic border-l-4 border-maaviiOrange/30 pl-4">
                                    {service.description}
                                </p>

                                <Link
                                    href={service.link}
                                    className="inline-flex items-center gap-4 font-black text-xl text-charcoal uppercase tracking-widest hover:text-maaviiOrange transition-colors group/btn"
                                >
                                    Learn More <ArrowRight className="w-6 h-6 group-hover/btn:translate-x-3 transition-transform" />
                                </Link>
                            </div>
                        );
                    })}
                </div>

                <div className="text-center mt-20">
                    <Link
                        href="/services"
                        className="inline-block px-14 py-7 vibrant-gradient text-white rounded-[2.5rem] font-black text-2xl hover:scale-110 transition-all shadow-2xl border-b-8 border-maaviiChocolate uppercase tracking-widest"
                    >
                        View All Services
                    </Link>
                </div>
            </Container>

            <div className="absolute bottom-0 left-0 w-full h-4 african-pattern opacity-30"></div>
        </section>
    );
};

export default ServicesIntro;
