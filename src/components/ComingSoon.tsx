'use client';

import React from 'react';
import Link from 'next/link';
import { Truck, Sparkles, Users, Rocket, TrendingUp, Globe, Store, Heart, Target } from 'lucide-react';
import Container from './ui/Container';

const ComingSoon: React.FC = () => {
    return (
        <div className="min-h-screen bg-cream relative overflow-hidden">
            <div className="absolute inset-0 mask-overlay opacity-10 pointer-events-none"></div>

            {/* Hero Section */}
            <section className="relative py-24 overflow-hidden border-b-8 border-maaviiYellow">
                <div className="absolute inset-0 bg-cover bg-center brightness-[0.8] contrast-[1.1]" style={{ backgroundImage: 'url("/images/maavii-hero-bg.jpg")' }}></div>
                <div className="absolute inset-0 bg-gradient-to-b from-cream/20 via-transparent to-cream/80"></div>

                <div className="absolute top-0 left-0 w-96 h-96 bg-maaviiTeal/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-maaviiYellow/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-pulse-slow"></div>

                <Container>
                    <div className="max-w-5xl mx-auto text-center mb-16 relative z-10">
                        <div className="inline-flex items-center gap-3 px-4 py-2 md:px-6 md:py-3 vibrant-gradient text-cream rounded-full font-black text-xs md:text-sm uppercase tracking-widest mb-6 md:mb-8 shadow-2xl rotate-1">
                            <Sparkles size={18} className="animate-spin-slow" />
                            Join Our Vision
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-charcoal uppercase tracking-tighter mb-6 md:mb-8 leading-none">
                            African Cultural <span className="text-maaviiOrange">&</span> <br />
                            Entrepreneurial <span className="text-maaviiTeal">Hub</span>
                        </h1>
                        <p className="text-lg sm:text-2xl md:text-4xl text-charcoal/90 font-serif italic mb-8 md:mb-10 leading-tight">
                            Building Bridges Between Africa <span className="text-maaviiOrange">&</span> Busan
                        </p>
                        <p className="text-base sm:text-lg md:text-xl text-charcoal/80 max-w-4xl mx-auto leading-relaxed glass-vibrant p-6 md:p-8 rounded-3xl border-2 border-maaviiOrange/30 shadow-2xl">
                            Starting with a food truck, growing into a movement. We&apos;re creating a platform that supports African entrepreneurs, promotes culture, and connects communities.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto relative z-10">
                        <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border-[8px] md:border-[12px] border-white shadow-2xl rotate-1 md:rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="/images/Food_truck1.jpeg"
                                alt="Maavii Food Truck"
                                className="w-full h-72 md:h-96 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-maaviiChocolate/90 via-transparent to-transparent p-6 md:p-10 flex flex-col justify-end">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-maaviiOrange text-cream rounded-xl font-black text-[10px] md:text-xs uppercase mb-2 md:mb-3 shadow-lg self-start">
                                    <Truck size={14} />
                                    Phase 1
                                </div>
                                <p className="text-cream font-black text-2xl md:text-3xl drop-shadow-md">Food Truck Launch</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center space-y-4 md:space-y-6">
                            <div className="p-6 md:p-8 bg-white rounded-3xl border-l-[8px] md:border-l-[12px] border-maaviiTeal shadow-2xl hover:translate-x-2 transition-transform glass-vibrant group">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-maaviiTeal/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-maaviiTeal transition-colors">
                                    <Target className="w-6 h-6 md:w-8 md:h-8 text-maaviiTeal group-hover:text-white" />
                                </div>
                                <h3 className="font-black text-xl md:text-2xl mb-2 md:mb-3">Our Mission</h3>
                                <p className="text-charcoal/70 text-base md:text-lg leading-relaxed">Create a thriving platform supporting fusion entrepreneurs while promoting culture and building community bridges.</p>
                            </div>
                            <div className="p-6 md:p-8 bg-white rounded-3xl border-l-[8px] md:border-l-[12px] border-maaviiOrange shadow-2xl hover:translate-x-2 transition-transform glass-vibrant group">
                                <div className="w-12 h-12 md:w-14 md:h-14 bg-maaviiOrange/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-maaviiOrange transition-colors">
                                    <Rocket className="w-6 h-6 md:w-8 md:h-8 text-maaviiOrange group-hover:text-white" />
                                </div>
                                <h3 className="font-black text-xl md:text-2xl mb-2 md:mb-3">Growth Vision</h3>
                                <p className="text-charcoal/70 text-base md:text-lg leading-relaxed">From food truck to cultural hub to African Union Food Truck Chain across South Korea.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* The Journey Section */}
            <section className="py-32 bg-white relative">
                <div className="absolute top-0 left-0 right-0 h-4 african-pattern opacity-10"></div>
                <Container>
                    <div className="text-center mb-12 md:mb-20 relative">
                        <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-charcoal mb-4 md:mb-6 uppercase tracking-tighter">
                            The Journey Ahead
                        </h2>
                        <div className="w-16 md:w-24 h-2 bg-maaviiOrange mx-auto mb-6 md:mb-8 rounded-full"></div>
                        <p className="text-xl md:text-2xl text-charcoal/60 max-w-3xl mx-auto font-serif italic px-4">
                            A strategic, scalable approach from street food to cultural institution
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-10">
                        {/* Phase 1 */}
                        <div className="relative group">
                            <div className="h-full p-10 bg-white rounded-[3rem] border-4 border-maaviiOrange/20 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 african-pattern opacity-5 -translate-y-12 translate-x-12"></div>
                                <div className="w-20 h-20 bg-[#000033] text-white rounded-[1.5rem] flex items-center justify-center text-4xl font-black mb-8 shadow-lg rotate-2 border-2 border-[#00d4ff]">
                                    1
                                </div>
                                <h3 className="text-3xl font-black mb-6 text-charcoal">Food Truck Launch</h3>
                                <ul className="space-y-4 text-charcoal/80 text-lg">
                                    <li className="flex items-start gap-3">
                                        <span className="text-maaviiOrange font-black mt-1">✓</span>
                                        <span>Mobile ambassador bringing African cuisine to Busan streets</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-maaviiOrange font-black mt-1">✓</span>
                                        <span>Community outreach & brand building</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-maaviiOrange font-black mt-1">✓</span>
                                        <span>Catering for diplomatic events & festivals</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 2 */}
                        <div className="relative group">
                            <div className="h-full p-10 bg-white rounded-[3rem] border-4 border-maaviiTeal/20 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 african-pattern opacity-5 -translate-y-12 translate-x-12"></div>
                                <div className="w-20 h-20 bg-[#000033] text-white rounded-[1.5rem] flex items-center justify-center text-4xl font-black mb-8 shadow-lg -rotate-2 border-2 border-[#00d4ff]">
                                    2
                                </div>
                                <h3 className="text-3xl font-black mb-6 text-charcoal">Cultural Hub</h3>
                                <ul className="space-y-4 text-charcoal/80 text-lg">
                                    <li className="flex items-start gap-3">
                                        <span className="text-maaviiTeal font-black mt-1">✓</span>
                                        <span>Co-working spaces for fusion entrepreneurs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-maaviiTeal font-black mt-1">✓</span>
                                        <span>Business training & development programs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-maaviiTeal font-black mt-1">✓</span>
                                        <span>Weekly cultural events & festivals</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Phase 3 */}
                        <div className="relative group">
                            <div className="h-full p-10 bg-white rounded-[3rem] border-4 border-maaviiGold/20 shadow-xl group-hover:shadow-2xl group-hover:-translate-y-2 transition-all relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 african-pattern opacity-5 -translate-y-12 translate-x-12"></div>
                                <div className="w-20 h-20 bg-[#000033] text-white rounded-[1.5rem] flex items-center justify-center text-4xl font-black mb-8 shadow-lg rotate-3 border-2 border-[#00d4ff]">
                                    3
                                </div>
                                <h3 className="text-3xl font-black mb-6 text-charcoal">Franchise Chain</h3>
                                <ul className="space-y-4 text-charcoal/80 text-lg">
                                    <li className="flex items-start gap-3">
                                        <span className="text-maaviiGold font-black mt-1">✓</span>
                                        <span>Heritage Union Food Truck Chain nationwide</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-maaviiGold font-black mt-1">✓</span>
                                        <span>Franchise opportunities for entrepreneurs</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <span className="text-maaviiGold font-black mt-1">✓</span>
                                        <span>Supply chain supporting boutique farmers</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Partnership Opportunities */}
            <section className="py-32 bg-maaviiYellow relative overflow-hidden">
                <div className="absolute inset-0 african-pattern opacity-15 pointer-events-none"></div>
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-maaviiOrange/10 rounded-full blur-[120px]"></div>
                <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-maaviiTeal/10 rounded-full blur-[120px]"></div>

                <Container>
                    <div className="text-center mb-20 relative z-10">
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white text-charcoal rounded-full font-black text-sm uppercase tracking-widest mb-8 border-2 border-maaviiOrange shadow-xl">
                            <Users size={20} className="text-maaviiOrange" />
                            Partnership Opportunities
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-charcoal mb-6 uppercase tracking-tighter drop-shadow-sm">
                            Join the <span className="text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">Movement</span>
                        </h2>
                        <p className="text-2xl text-charcoal/80 max-w-4xl mx-auto font-serif italic leading-relaxed bg-white/40 backdrop-blur-sm p-4 rounded-2xl">
                            We&apos;re seeking visionary partners who believe in cultural entrepreneurship and community impact
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto relative z-10">
                        {[
                            { icon: Store, bg: 'bg-maaviiOrange/20', title: 'Investors', text: 'Early-stage investment in scalable food & cultural venture' },
                            { icon: TrendingUp, bg: 'bg-maaviiTeal/20', title: 'Franchisees', text: 'Run your own food truck in the Heritage Union chain' },
                            { icon: Globe, bg: 'bg-maaviiGold/20', title: 'Sponsors', text: 'Cultural events, training programs & community initiatives' },
                            { icon: Heart, bg: 'bg-maaviiRed/20', title: 'Community', text: 'Membership programs for supporters & stakeholders' }
                        ].map((item, idx) => (
                            <div key={idx} className={`p-6 md:p-10 ${item.bg} rounded-[2rem] md:rounded-[2.5rem] border-4 border-maaviiGold shadow-2xl hover:scale-105 transition-all hover:-translate-y-2 group relative overflow-hidden backdrop-blur-md`}>
                                <div className="absolute top-0 right-0 w-24 h-24 african-pattern opacity-10 -translate-y-8 translate-x-8"></div>
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-maaviiChocolate/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 border-2 border-maaviiChocolate/20 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-8 h-8 md:w-10 md:h-10 text-maaviiChocolate" />
                                </div>
                                <h3 className="font-black text-xl md:text-2xl mb-3 md:mb-4 text-maaviiChocolate uppercase tracking-tight">{item.title}</h3>
                                <p className="text-base md:text-lg text-[#064e3b] font-serif italic font-bold leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Why Partner With Us */}
            <section className="py-32 bg-white relative">
                <div className="absolute top-0 right-0 w-1/2 h-full african-pattern opacity-5 pointer-events-none"></div>
                <Container>
                    <div className="max-w-6xl mx-auto relative z-10">
                        <h2 className="text-5xl md:text-7xl font-black text-charcoal text-center mb-20 uppercase tracking-tighter">
                            Why Partner With <span className="text-maaviiOrange">Maavii?</span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12">
                            {[
                                { title: 'Proven Concept', color: 'text-maaviiOrange', border: 'border-maaviiOrange', text: "Our African & Korean fusion cuisine has already won hearts. Now we're taking it mobile and expanding the vision." },
                                { title: 'Market Gap', color: 'text-maaviiTeal', border: 'border-maaviiTeal', text: "No comprehensive signature cultural & business hub exists in Busan. We're filling this void with local pride." },
                                { title: 'Scalable Model', color: 'text-maaviiGold', border: 'border-maaviiGold', text: "From one food truck to a nationwide chain. Every phase is designed for sustainable and aggressive growth." },
                                { title: 'Social Impact', color: 'text-maaviiRed', border: 'border-maaviiRed', text: "Beyond profit: supporting entrepreneurs, preserving culture, and strengthening the global diaspora." }
                            ].map((item, idx) => (
                                <div key={idx} className={`p-10 bg-cream rounded-[3rem] border-l-[16px] ${item.border} shadow-xl hover:shadow-2xl transition-all`}>
                                    <h3 className={`text-3xl font-black mb-6 ${item.color} uppercase tracking-tight`}>{item.title}</h3>
                                    <p className="text-charcoal/70 text-lg leading-relaxed font-serif italic">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Container>
            </section>

            {/* Call to Action */}
            <section className="py-32 bg-white relative overflow-hidden border-t-8 border-maaviiOrange">
                <div className="absolute inset-0 african-pattern opacity-30 pointer-events-none" style={{ backgroundSize: '120px 120px' }}></div>
                <div className="absolute inset-0 bg-gradient-to-br from-maaviiOrange/20 via-maaviiTeal/20 to-maaviiGold/20"></div>
                <div className="absolute top-0 right-0 w-1/2 h-full african-pattern opacity-20 pointer-events-none -skew-x-12 translate-x-1/4" style={{ filter: 'hue-rotate(45deg)' }}></div>

                <Container>
                    <div className="max-w-5xl mx-auto text-center relative z-10">
                        <h2 className="text-4xl sm:text-6xl md:text-9xl font-black mb-6 md:mb-8 uppercase tracking-tighter leading-none drop-shadow-2xl animate-pulse-slow text-[#064e3b]">
                            Ready to Make <br /> <span className="text-maaviiYellow drop-shadow-[0_4px_4px_rgba(0,0,0,0.4)]">History?</span>
                        </h2>
                        <p className="text-xl sm:text-3xl md:text-4xl mb-8 md:mb-12 font-serif italic text-[#064e3b] font-black leading-tight px-4">
                            Join us in building the first African Cultural & Entrepreneurial Hub in Busan
                        </p>
                        <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center scale-100 md:scale-110">
                            <Link
                                href="/#contact"
                                className="px-8 py-4 md:px-12 md:py-6 bg-white text-maaviiChocolate rounded-2xl md:rounded-3xl font-black text-xl md:text-2xl hover:bg-maaviiYellow transition-all shadow-2xl hover:scale-110 uppercase tracking-tight"
                            >
                                Become a Partner
                            </Link>
                            <a
                                href="https://wa.me/821044092301?text=I'm%20interested%20in%20partnering%20with%20Maavii!"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 md:px-12 md:py-6 bg-green-500 text-white rounded-2xl md:rounded-3xl font-black text-xl md:text-2xl hover:bg-green-600 transition-all shadow-2xl hover:scale-110 flex items-center gap-3 md:gap-4 uppercase tracking-tight"
                            >
                                <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default ComingSoon;