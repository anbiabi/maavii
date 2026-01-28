'use client';

import React from 'react';
import Link from 'next/link';
import { Truck, Sparkles, Users, Rocket, TrendingUp, Globe, Store, Heart, Target } from 'lucide-react';
import Container from './ui/Container';

const ComingSoon: React.FC = () => {
    return (
        <div className="min-h-screen bg-cream">
            {/* Hero Section */}

                <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: 'url("/images/maavii-hero-bg.jpg")' }}></div>
                <div className="absolute top-0 left-0 w-96 h-96 bg-maaviiTeal/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-maaviiYellow/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

                <Container>
                    <div className="max-w-5xl mx-auto text-center mb-12">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-maaviiOrange text-cream rounded-full font-black text-sm uppercase tracking-widest mb-6">
                            <Sparkles size={16} />
                            Join Our Vision
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter mb-6">
                            African Cultural & Entrepreneurial Hub
                        </h1>
                        <p className="text-2xl md:text-3xl text-charcoal/80 font-serif italic mb-8">
                            Building Bridges Between Africa & Busan
                        </p>
                        <p className="text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
                            Starting with a food truck, growing into a movement. We&apos;re creating a platform that supports African entrepreneurs, promotes culture, and connects communities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                            <img
                                src="/images/Food_truck1.jpeg"
                                alt="Maavii Food Truck"
                                className="w-full h-80 object-cover"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-maaviiOrange text-cream rounded-lg font-black text-xs uppercase mb-2">
                                    <Truck size={12} />
                                    Phase 1
                                </div>
                                <p className="text-cream font-bold text-lg">Food Truck Launch</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="p-6 bg-white rounded-2xl border-2 border-maaviiTeal/20 shadow-lg">
                                <Target className="w-8 h-8 text-maaviiTeal mb-2" />
                                <h3 className="font-black text-xl mb-2">Our Mission</h3>
                                <p className="text-charcoal/70">Create a thriving platform supporting African entrepreneurs while promoting culture and building community bridges.</p>
                            </div>
                            <div className="p-6 bg-white rounded-2xl border-2 border-maaviiOrange/20 shadow-lg">
                                <Rocket className="w-8 h-8 text-maaviiOrange mb-2" />
                                <h3 className="font-black text-xl mb-2">Growth Vision</h3>
                                <p className="text-charcoal/70">From food truck to cultural hub to African Union Food Truck Chain across South Korea.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Journey Section */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-charcoal mb-4">
                            The Journey Ahead
                        </h2>
                        <p className="text-xl text-charcoal/60 max-w-2xl mx-auto">
                            A strategic, scalable approach from street food to cultural institution
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Phase 1 */}
                        <div className="relative">
                            <div className="p-8 bg-gradient-to-br from-maaviiOrange/10 to-maaviiOrange/5 rounded-3xl border-4 border-maaviiOrange/20">
                                <div className="w-16 h-16 bg-maaviiOrange text-cream rounded-2xl flex items-center justify-center text-2xl font-black mb-6">
                                    1
                                </div>
                                <h3 className="text-2xl font-black mb-4">Food Truck Launch</h3>
                                <ul className="space-y-3 text-charcoal/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiOrange mt-1">✓</span>
                                        <span>Mobile ambassador bringing African cuisine to Busan streets</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiOrange mt-1">✓</span>
                                        <span>Community outreach & brand building</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiOrange mt-1">✓</span>
                                        <span>Catering for diplomatic events & festivals</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiOrange mt-1">✓</span>
                                        <span>Revenue generation & proof of concept</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="relative">
                            <div className="p-8 bg-gradient-to-br from-maaviiTeal/10 to-maaviiTeal/5 rounded-3xl border-4 border-maaviiTeal/20">
                                <div className="w-16 h-16 bg-maaviiTeal text-cream rounded-2xl flex items-center justify-center text-2xl font-black mb-6">
                                    2
                                </div>
                                <h3 className="text-2xl font-black mb-4">Cultural Hub</h3>
                                <ul className="space-y-3 text-charcoal/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiTeal mt-1">✓</span>
                                        <span>Co-working spaces for African entrepreneurs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiTeal mt-1">✓</span>
                                        <span>Business training & development programs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiTeal mt-1">✓</span>
                                        <span>Weekly cultural events & festivals</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiTeal mt-1">✓</span>
                                        <span>Partnership with embassies & UN</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="relative">
                            <div className="p-8 bg-gradient-to-br from-maaviiYellow/10 to-maaviiYellow/5 rounded-3xl border-4 border-maaviiYellow/20">
                                <div className="w-16 h-16 bg-maaviiYellow text-charcoal rounded-2xl flex items-center justify-center text-2xl font-black mb-6">
                                    3
                                </div>
                                <h3 className="text-2xl font-black mb-4">Franchise Chain</h3>
                                <ul className="space-y-3 text-charcoal/70">
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiYellow mt-1">✓</span>
                                        <span>African Union Food Truck Chain nationwide</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiYellow mt-1">✓</span>
                                        <span>Franchise opportunities for entrepreneurs</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiYellow mt-1">✓</span>
                                        <span>Supply chain supporting African farmers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <span className="text-maaviiYellow mt-1">✓</span>
                                        <span>Employment & cultural impact across Korea</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Partnership Opportunities */}
            <section className="py-20 bg-gradient-to-br from-charcoal/5 to-maaviiTeal/5">
                <Container>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-maaviiTeal text-cream rounded-full font-black text-sm uppercase tracking-widest mb-6">
                            <Users size={16} />
                            Partnership Opportunities
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-charcoal mb-4">
                            Join the Movement
                        </h2>
                        <p className="text-xl text-charcoal/60 max-w-3xl mx-auto">
                            We&apos;re seeking visionary partners who believe in cultural entrepreneurship and community impact
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <div className="p-6 bg-white rounded-2xl border-2 border-charcoal/5 shadow-lg hover:shadow-xl transition-shadow">
                            <Store className="w-10 h-10 text-maaviiOrange mb-4" />
                            <h3 className="font-black text-lg mb-2">Investors</h3>
                            <p className="text-sm text-charcoal/60">Early-stage investment in scalable food & cultural venture</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border-2 border-charcoal/5 shadow-lg hover:shadow-xl transition-shadow">
                            <TrendingUp className="w-10 h-10 text-maaviiTeal mb-4" />
                            <h3 className="font-black text-lg mb-2">Franchisees</h3>
                            <p className="text-sm text-charcoal/60">Run your own food truck in the African Union chain</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border-2 border-charcoal/5 shadow-lg hover:shadow-xl transition-shadow">
                            <Globe className="w-10 h-10 text-maaviiYellow mb-4" />
                            <h3 className="font-black text-lg mb-2">Sponsors</h3>
                            <p className="text-sm text-charcoal/60">Cultural events, training programs & community initiatives</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border-2 border-charcoal/5 shadow-lg hover:shadow-xl transition-shadow">
                            <Heart className="w-10 h-10 text-deepRed mb-4" />
                            <h3 className="font-black text-lg mb-2">Community</h3>
                            <p className="text-sm text-charcoal/60">Membership programs for supporters & stakeholders</p>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Why Partner With Us */}
            <section className="py-20 bg-white">
                <Container>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-charcoal text-center mb-12">
                            Why Partner With Maavii?
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="p-8 bg-cream rounded-2xl border-4 border-charcoal/5">
                                <h3 className="text-2xl font-black mb-4 text-maaviiOrange">Proven Concept</h3>
                                <p className="text-charcoal/70 leading-relaxed">
                                    Our Afro-Korean fusion cuisine has already won hearts. Now we&apos;re taking it mobile and expanding the vision to create lasting cultural & economic impact.
                                </p>
                            </div>
                            <div className="p-8 bg-cream rounded-2xl border-4 border-charcoal/5">
                                <h3 className="text-2xl font-black mb-4 text-maaviiTeal">Market Gap</h3>
                                <p className="text-charcoal/70 leading-relaxed">
                                    No comprehensive African cultural & business hub exists in Busan. We&apos;re filling this void while building bridges with the local community.
                                </p>
                            </div>
                            <div className="p-8 bg-cream rounded-2xl border-4 border-charcoal/5">
                                <h3 className="text-2xl font-black mb-4 text-maaviiYellow">Scalable Model</h3>
                                <p className="text-charcoal/70 leading-relaxed">
                                    From one food truck to a nationwide chain. From street food to cultural institution. Every phase designed for sustainable growth.
                                </p>
                            </div>
                            <div className="p-8 bg-cream rounded-2xl border-4 border-charcoal/5">
                                <h3 className="text-2xl font-black mb-4 text-deepRed">Social Impact</h3>
                                <p className="text-charcoal/70 leading-relaxed">
                                    Beyond profit: supporting entrepreneurs, preserving culture, creating jobs, and strengthening the African diaspora community in Korea.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-gradient-to-br from-maaviiOrange to-deepRed text-cream relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
                
                <Container>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black mb-6">
                            Ready to Make History?
                        </h2>
                        <p className="text-xl md:text-2xl mb-8 opacity-90">
                            Join us in building the first African Cultural & Entrepreneurial Hub in Busan
                        </p>
                        <p className="text-lg mb-12 opacity-80 max-w-2xl mx-auto">
                            Whether you&apos;re an investor, potential franchisee, sponsor, or community supporter, we want to hear from you. Let&apos;s create something extraordinary together.
                        </p>
                        <div className="flex flex-wrap gap-6 justify-center">
                            <Link 
                                href="/#contact" 
                                className="px-10 py-5 bg-white text-maaviiOrange rounded-2xl font-black text-lg hover:bg-cream transition-colors shadow-2xl inline-flex items-center gap-3"
                            >
                                <Users size={24} />
                                Become a Partner
                            </Link>
                            <a 
                                href="https://wa.me/821044092301?text=I'm%20interested%20in%20partnering%20with%20Maavii!" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 bg-green-500 text-white rounded-2xl font-black text-lg hover:bg-green-600 transition-colors shadow-2xl inline-flex items-center gap-3"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                WhatsApp Us
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default ComingSoon;