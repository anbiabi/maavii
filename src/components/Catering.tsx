import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Catering: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="catering" className="py-24 px-4 bg-maaviiTeal/10 scroll-mt-24 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-8">
          <h2 className="text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter">
            Catering Services
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto font-serif italic">
            Signature Fusion catering for embassies, festivals, corporate events, and private parties
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-black text-charcoal mb-6 uppercase">Event Catering</h3>
            <p className="text-charcoal/70 font-serif text-lg mb-6">
              We provide signature fusion catering for embassies, festivals, corporate events, and private parties.
            </p>
            <p className="text-charcoal/70 font-serif text-lg">
              Contact us for custom menus and quotes tailored to your specific event needs.
            </p>
          </div>

          <div className="bg-cream rounded-2xl p-8 border-4 border-charcoal/5 shadow-xl">
            <h4 className="text-2xl font-black text-charcoal mb-4 uppercase">Book Catering</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <span className="text-lg text-charcoal">info@maaviiglobaleats.com</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <a href="https://wa.me/821044092301" target="_blank" rel="noopener noreferrer" className="text-lg text-green-600 font-bold hover:underline">WhatsApp</a>
                  <span className="mx-2">|</span>
                  <a href="https://open.kakao.com/o/sfnml5di" target="_blank" rel="noopener noreferrer" className="text-lg text-yellow-500 font-bold hover:underline">KakaoTalk</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-3xl font-black text-charcoal mb-6 uppercase">Cultural Events</h3>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto font-serif mb-8">
            Maavii hosts monthly cultural nights featuring soulful music, dance, food tastings, and storytelling — open to the public. Follow @maaviifood on Instagram for updates.
          </p>
          <div className="inline-flex gap-4">
            <a
              href="https://www.instagram.com/maaviifood"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-maaviiOrange text-cream rounded-xl font-black text-lg hover:bg-orange-700 transition-colors"
            >
              Follow on Instagram
            </a>
            <a
              href="https://wa.me/821044092301"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-500 text-white rounded-xl font-black text-lg hover:bg-green-600 transition-colors"
            >
              Contact for Events
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;