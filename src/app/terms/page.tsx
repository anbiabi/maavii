import React from 'react';
import Container from '@/components/ui/Container';

export const metadata = {
    title: 'Maavii | Terms of Service',
    description: 'Terms of Service for Maavii Global Eats.',
};

export default function TermsPage() {
    return (
        <div className="bg-cream min-h-screen pt-32 pb-20">
            <Container>
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border-4 border-charcoal/5">
                    <h1 className="text-4xl md:text-6xl font-black text-charcoal mb-8 uppercase tracking-tighter">Terms of Service</h1>
                    <p className="text-gray-500 mb-10 italic">Last Updated: January 2026</p>

                    <div className="space-y-8 text-charcoal/80 font-serif leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-wide">1. Agreement to Terms</h2>
                            <p>
                                These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity (“you”) and Maavii (“we,” “us” or “our”), concerning your access to and use of the Maavii website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-wide">2. Products and Orders</h2>
                            <p>
                                Our website serves as a catalog and informational hub. Placing items in your cart on this website does not constitute a confirmed financial transaction. Final orders and payments are processed via third-party communication channels (WhatsApp or KakaoTalk) or in-person. Prices and availability of products are subject to change without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-wide">3. Intellectual Property</h2>
                            <p>
                                Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-wide">4. Allergy Disclaimer</h2>
                            <p>
                                <strong>Important:</strong> Our food is prepared in a kitchen that handles nuts, gluten, dairy, seafood, and other common allergens. While we take care to prevent cross-contamination, we cannot guarantee that any food item is completely free of allergens. Please inform us directly via WhatsApp/KakaoTalk of any allergies when finalizing your order.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-wide">5. Governing Law</h2>
                            <p>
                                These Terms shall be governed by and defined following the laws of South Korea. Maavii and yourself irrevocably consent that the courts of South Korea shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.
                            </p>
                        </section>
                        <section>
                            <h2 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-wide">6. Contact</h2>
                            <p>
                                For any questions or complaints regarding the Site, please contact us via the information provided on our Contact page.
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
}
