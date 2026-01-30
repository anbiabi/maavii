import React from 'react';
import Container from '@/components/ui/Container';

export const metadata = {
    title: 'Maavii | Privacy Policy',
    description: 'Privacy Policy for Maavii Global Eats.',
};

export default function PrivacyPage() {
    return (
        <div className="bg-cream min-h-screen pt-32 pb-20">
            <Container>
                <div className="max-w-4xl mx-auto bg-white p-8 md:p-16 rounded-[3rem] shadow-xl border-4 border-charcoal/5">
                    <h1 className="text-4xl md:text-6xl font-black text-charcoal mb-8 uppercase tracking-tighter">Privacy Policy</h1>
                    <p className="text-gray-500 mb-10 italic">Last Updated: January 2026</p>

                    <div className="space-y-8 text-charcoal/80 font-serif leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-wide">1. Introduction</h2>
                            <p>
                                Welcome to Maavii. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-wide">2. Information We Collect</h2>
                            <p>
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong>Identity Data:</strong> includes first name, last name, or similar identifier provided via contact forms.</li>
                                <li><strong>Contact Data:</strong> includes email address and telephone number provided for inquiries or orders.</li>
                                <li><strong>Technical Data:</strong> includes internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                                <li><strong>Usage Data:</strong> includes information about how you use our website, products and services (e.g., cart contents stored locally).</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-wide">3. How We Use Your Data</h2>
                            <p>
                                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>To communicate with you regarding your inquiries or direct orders (via WhatsApp/KakaoTalk).</li>
                                <li>To improve our website, products/services, marketing and customer relationships.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-wide">4. Data Security</h2>
                            <p>
                                We have implemented appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-black text-charcoal mb-4 uppercase tracking-wide">5. Contact Us</h2>
                            <p>
                                If you have any questions about this privacy policy or our privacy practices, please contact us via email or our provided phone numbers.
                            </p>
                        </section>
                    </div>
                </div>
            </Container>
        </div>
    );
}
