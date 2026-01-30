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
    <section id="contact" className="py-32 px-4 relative overflow-hidden bg-charcoal text-white scroll-mt-24">
      {/* Background patterns - HIGHER VISIBILITY */}
      <div className="absolute inset-0 opacity-15 pointer-events-none african-pattern"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-maaviiOrange/20 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-maaviiTeal/20 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10 px-4 sm:px-0">
        <div className="space-y-12 md:space-y-16">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-flex items-center gap-3 md:gap-4 px-6 py-3 md:px-8 md:py-4 bg-maaviiOrange rounded-3xl text-maaviiChocolate font-black uppercase text-xs md:text-sm tracking-[0.3em] md:tracking-[0.4em] shadow-2xl border-b-4 md:border-b-6 border-black/30 -rotate-1">
              <Truck size={20} className="animate-bounce" />
              Visit The Maavii Truck
            </div>
            <h2 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter leading-none text-stroke-vibrant">{t('contactTitle')}</h2>
            <p className="text-xl md:text-3xl text-white/80 font-serif leading-relaxed max-w-xl italic border-l-6 md:border-l-8 border-maaviiYellow pl-6 md:pl-8">
              From colorful festivals to city street corners, we bring the <span className="text-maaviiYellow font-black underline decoration-maaviiOrange underline-offset-8">Natural African Taste</span> everywhere we go.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
            <a href="tel:01032142301" className="flex items-center gap-6 md:gap-8 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-3xl bg-maaviiTeal flex items-center justify-center text-charcoal group-hover:scale-110 group-hover:bg-maaviiOrange transition-all shadow-2xl border-b-4 md:border-b-6 border-black/20">
                <Phone className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm font-black text-maaviiTeal uppercase tracking-[0.2em] md:tracking-[0.3em] mb-0.5 md:mb-1">{t('contactPhone')}</p>
                <p className="text-xl md:text-3xl font-black group-hover:text-maaviiOrange transition-colors">010-3214-2301</p>
              </div>
            </a>

            <a href="https://instagram.com/maaviifood" target="_blank" className="flex items-center gap-6 md:gap-8 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-[1.5rem] md:rounded-3xl bg-maaviiOrange flex items-center justify-center text-maaviiChocolate group-hover:scale-110 group-hover:bg-maaviiTeal transition-all shadow-2xl border-b-4 md:border-b-6 border-black/20">
                <Instagram className="w-8 h-8 md:w-10 md:h-10" />
              </div>
              <div>
                <p className="text-[10px] md:text-sm font-black text-maaviiOrange uppercase tracking-[0.2em] md:tracking-[0.3em] mb-0.5 md:mb-1">Instagram</p>
                <p className="text-xl md:text-3xl font-black group-hover:text-maaviiTeal transition-colors">@maavii.fusion</p>
              </div>
            </a>
          </div>

          <div className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] border-4 md:border-8 border-dashed border-maaviiYellow/40 bg-maaviiYellow/10 shadow-2xl">
            <div className="flex gap-4 md:gap-6">
              <MapPin className="text-maaviiYellow w-8 h-8 md:w-12 md:h-12 shrink-0 animate-bounce" />
              <p className="text-lg md:text-2xl font-black leading-snug">Based in Yangsan, South Korea. Check our IG Stories for today&apos;s parking spot!</p>
            </div>
          </div>

          {/* QR Codes Section */}
          <div className="mt-8 md:mt-12 grid sm:grid-cols-2 gap-8 md:gap-10">
            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border-[6px] md:border-[10px] border-green-500/20 shadow-2xl space-y-5 md:space-y-6 hover:-rotate-2 transition-transform">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500 rounded-xl flex items-center justify-center text-white shadow-lg">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-charcoal leading-none">WhatsApp</h4>
                  <p className="text-[10px] md:text-sm font-bold text-green-600 uppercase tracking-widest mt-1">Quick Orders</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border-4 border-dashed border-gray-200">
                <p className="text-center text-charcoal/60 font-black px-2 leading-relaxed text-sm md:text-base">
                  Click below to chat on WhatsApp<br />
                  <span className="text-green-600 text-lg md:text-xl font-black">+82 10-4409-2301</span>
                </p>
              </div>
              <a
                href="https://wa.me/821044092301"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 md:py-6 bg-green-500 text-white rounded-2xl font-black text-lg md:text-xl hover:bg-green-600 transition-all shadow-xl hover:scale-105"
              >
                Chat Now
              </a>
            </div>

            <div className="bg-white rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-10 border-[6px] md:border-[10px] border-yellow-500/20 shadow-2xl space-y-5 md:space-y-6 rotate-2 hover:rotate-0 transition-transform">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-yellow-400 rounded-xl flex items-center justify-center text-charcoal shadow-lg">
                  <svg className="w-6 h-6 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 3c5.799 0 10.5 3.664 10.5 8.185 0 4.52-4.701 8.184-10.5 8.184a13.5 13.5 0 0 1-1.727-.11l-4.408 2.883c-.501.265-.678.236-.472-.413l.892-3.678c-2.88-1.46-4.785-3.99-4.785-6.866C1.5 6.665 6.201 3 12 3zm5.907 8.06l1.47-1.424a.472.472 0 0 0-.656-.68l-1.928 1.866V9.282a.472.472 0 0 0-.944 0v2.557a.471.471 0 0 0 0 .222V13.5a.472.472 0 0 0 .944 0v-1.363l.427-.413 1.428 2.033a.472.472 0 1 0 .773-.543l-1.514-2.155zm-2.958 1.924h-1.46V9.297a.472.472 0 0 0-.943 0v4.159c0 .26.21.472.471.472h1.932a.472.472 0 1 0 0-.944zm-5.857-1.092l.696-1.707.638 1.707H9.092zm2.523.488l.002-.016a.469.469 0 0 0-.127-.32l-1.046-2.8a.69.69 0 0 0-.627-.474.696.696 0 0 0-.653.447l-1.661 4.075a.472.472 0 0 0 .874.357l.33-.813h2.07l.347.811a.472.472 0 1 0 .867-.37l-.376-.897zM8.293 9.302a.472.472 0 0 0-.471-.472H4.577a.472.472 0 1 0 0 .944h1.16v3.736a.472.472 0 0 0 .944 0V9.774h1.14c.261 0 .472-.212.472-.472z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-black text-charcoal leading-none">KakaoTalk</h4>
                  <p className="text-[10px] md:text-sm font-bold text-yellow-600 uppercase tracking-widest mt-1">Direct Chat</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border-4 border-dashed border-gray-200">
                <p className="text-center text-charcoal/60 font-black px-2 leading-relaxed text-sm md:text-base">
                  Click below to chat on KakaoTalk<br />
                  <span className="text-yellow-600 text-lg md:text-xl font-black">@maaviifood</span>
                </p>
              </div>
              <a
                href="https://pf.kakao.com/_xjXKxj"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-4 md:py-6 bg-yellow-400 text-charcoal rounded-2xl font-black text-lg md:text-xl hover:bg-yellow-500 transition-all shadow-xl hover:scale-105"
              >
                Chat Now
              </a>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl space-y-8 md:space-y-10 text-charcoal border-[10px] md:border-[20px] border-maaviiTeal/30 relative">
          <div className="absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 african-pattern opacity-5 rounded-bl-[2.5rem] md:rounded-bl-[4rem] pointer-events-none"></div>

          <div className="space-y-3 md:space-y-4">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-charcoal">Send a Message</h3>
            <p className="text-lg md:text-xl text-charcoal/60 font-serif italic">We respond within 24 hours.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <div className="space-y-3 md:space-y-4">
              <label className="text-xs md:text-sm font-black uppercase tracking-widest text-maaviiTeal">{t('contactName')}</label>
              <input required type="text" className="w-full px-6 md:px-8 py-4 md:py-5 bg-charcoal/5 border-b-4 md:border-b-6 border-transparent focus:border-maaviiOrange outline-none transition-all rounded-2xl md:rounded-[2rem] font-black text-lg md:text-xl" />
            </div>
            <div className="space-y-3 md:space-y-4">
              <label className="text-xs md:text-sm font-black uppercase tracking-widest text-maaviiTeal">{t('contactEmail')}</label>
              <input required type="email" className="w-full px-6 md:px-8 py-4 md:py-5 bg-charcoal/5 border-b-4 md:border-b-6 border-transparent focus:border-maaviiOrange outline-none transition-all rounded-2xl md:rounded-[2rem] font-black text-lg md:text-xl" />
            </div>
          </div>
          <div className="space-y-3 md:space-y-4">
            <label className="text-xs md:text-sm font-black uppercase tracking-widest text-maaviiTeal">{t('contactMessage')}</label>
            <textarea required rows={5} className="w-full px-6 md:px-8 py-4 md:py-5 bg-charcoal/5 border-b-4 md:border-b-6 border-transparent focus:border-maaviiOrange outline-none transition-all rounded-[2rem] md:rounded-[2.5rem] font-black text-lg md:text-xl resize-none"></textarea>
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-4 md:gap-5 bg-maaviiTeal text-charcoal py-6 md:py-8 rounded-2xl md:rounded-[2.5rem] font-black text-2xl md:text-3xl hover:bg-maaviiOrange hover:text-white hover:-translate-y-2 transition-all shadow-2xl border-b-6 md:border-b-8 border-black/20 group">
            <span className="flex items-center gap-4">
              <Send className="w-7 h-7 md:w-8 md:h-8 group-hover:translate-x-3 group-hover:-translate-y-3 transition-transform" />
              {t('contactSubmit')}
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;