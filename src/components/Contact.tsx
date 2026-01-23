"use client";

import React from 'react';
import { Phone, Instagram, MapPin, Send, Truck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact: React.FC = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! Maavii will get back to you soon.');
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-charcoal text-cream scroll-mt-24">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5 pointer-events-none african-pattern"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <div className="space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-maaviiOrange rounded-lg text-cream font-black uppercase text-xs tracking-[0.3em]">
              <Truck size={16} />
              Visit The Maavii Truck
            </div>
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none">{t('contactTitle')}</h2>
            <p className="text-2xl text-cream/70 font-serif leading-relaxed max-w-xl">
              From colorful festivals to city street corners, we bring the <span className="text-maaviiYellow italic">Natural African Taste</span> everywhere we go.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <a href="tel:01032142301" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-maaviiTeal flex items-center justify-center text-cream group-hover:bg-maaviiYellow group-hover:text-charcoal transition-all shadow-xl">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs font-black text-maaviiTeal uppercase tracking-[0.2em]">{t('contactPhone')}</p>
                <p className="text-2xl font-black">010-3214-2301</p>
              </div>
            </a>

            <a href="https://instagram.com/maaviifood" target="_blank" className="flex items-center gap-6 group">
              <div className="w-16 h-16 rounded-2xl bg-maaviiOrange flex items-center justify-center text-cream group-hover:bg-maaviiYellow group-hover:text-charcoal transition-all shadow-xl">
                <Instagram className="w-8 h-8" />
              </div>
              <div>
                <p className="text-xs font-black text-maaviiOrange uppercase tracking-[0.2em]">Instagram</p>
                <p className="text-2xl font-black">@maavii.fusion</p>
              </div>
            </a>
          </div>

          <div className="p-8 rounded-[2rem] border-4 border-dashed border-maaviiYellow/30 bg-maaviiYellow/5">
            <div className="flex gap-4">
              <MapPin className="text-maaviiYellow w-8 h-8 shrink-0" />
              <p className="text-xl font-bold">Based in Yangsan, South Korea. Check our IG Stories for today&apos;s parking spot!</p>
            </div>
          </div>

          {/* QR Codes Section */}
          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-2xl p-6 border-4 border-green-200 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <div>
                  <h4 className="text-lg font-black text-green-700">WhatsApp</h4>
                  <p className="text-xs text-green-600">Quick Orders</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border-2 border-green-200">
                <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-xs text-center text-charcoal/60 font-bold px-4">
                    Scan or click below<br/>to chat on WhatsApp<br/>+82 10-4409-2301
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/821044092301"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition-colors"
              >
                Open WhatsApp
              </a>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-6 border-4 border-yellow-200 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <svg className="w-8 h-8 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.68l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.347.811a.472.472 0 1 0 .867-.37l-.376-.897zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z"/>
                </svg>
                <div>
                  <h4 className="text-lg font-black text-yellow-700">KakaoTalk</h4>
                  <p className="text-xs text-yellow-600">Chat with us</p>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl border-2 border-yellow-200">
                <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                  <p className="text-xs text-center text-charcoal/60 font-bold px-4">
                    Scan or click below<br/>to chat on KakaoTalk<br/>@maaviifood
                  </p>
                </div>
              </div>
              <a
                href="https://pf.kakao.com/_xjXKxj"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-yellow-500 text-charcoal rounded-xl font-bold hover:bg-yellow-600 transition-colors"
              >
                Open KakaoTalk
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-cream p-10 md:p-14 rounded-[3.5rem] shadow-2xl space-y-8 text-charcoal border-[10px] border-maaviiTeal/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-maaviiTeal">{t('contactName')}</label>
              <input required type="text" className="w-full px-6 py-4 bg-charcoal/5 border-b-4 border-transparent focus:border-maaviiTeal outline-none transition-all rounded-xl font-bold" />
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black uppercase tracking-widest text-maaviiTeal">{t('contactEmail')}</label>
              <input required type="email" className="w-full px-6 py-4 bg-charcoal/5 border-b-4 border-transparent focus:border-maaviiTeal outline-none transition-all rounded-xl font-bold" />
            </div>
          </div>
          <div className="space-y-3">
            <label className="text-xs font-black uppercase tracking-widest text-maaviiTeal">{t('contactMessage')}</label>
            <textarea required rows={4} className="w-full px-6 py-4 bg-charcoal/5 border-b-4 border-transparent focus:border-maaviiTeal outline-none transition-all rounded-xl font-bold resize-none"></textarea>
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-4 bg-maaviiTeal text-cream py-6 rounded-2xl font-black text-xl hover:bg-maaviiOrange hover:-translate-y-1 transition-all shadow-xl">
            <span className="flex items-center gap-2">
              <Send className="w-6 h-6" />
              {t('contactSubmit')}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;