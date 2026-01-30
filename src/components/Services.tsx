import React from 'react';
import { Utensils, GraduationCap, ShoppingBag } from 'lucide-react';
import Container from './ui/Container';
import SectionTitle from './ui/SectionTitle';

export default function Services() {
  const serviceItems = [
    {
      id: 1,
      title: 'Catering & Events',
      icon: Utensils,
      description: 'Full-service catering for weddings, corporate events, and private parties.',
      image: '/images/event.jpg', // Image of a catering event
      details: 'We provide signature fusion catering for embassies, festivals, corporate events, and private parties. Our experienced team handles everything from setup to service, ensuring your event is memorable.',
      anchor: 'catering'
    },
    {
      id: 2,
      title: 'Cooking Classes',
      icon: GraduationCap,
      description: 'Learn the art of Signature Fusion cuisine with our expert chefs.',
      image: '/images/food/Breads.jpg', // Image of cooking or food preparation
      details: 'Join our hands-on cooking classes where you\'ll learn traditional techniques and modern fusion approaches. From basic knife skills to mastering complex flavors, our classes cater to all skill levels.',
      anchor: 'cooking'
    },
    {
      id: 3,
      title: 'Grocery Market',
      icon: ShoppingBag,
      description: 'Shop authentic ingredients to recreate our flavors at home.',
      image: '/images/20251214_194729.jpg', // Image representing grocery market
      details: 'Find premium authentic ingredients, spices, and specialty items sourced directly from producers. Our grocery section ensures you can recreate unique flavors in your own kitchen with high-quality, genuine products.',
      anchor: 'grocery'
    }
  ];

  return (
    <section className="py-24 bg-cream min-h-screen">
      <Container>
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter mb-4 px-4">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-charcoal/60 font-serif italic max-w-2xl mx-auto px-6">
            Signature fusion experiences across multiple service offerings
          </p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {serviceItems.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} id={service.anchor} className="grid md:grid-cols-2 gap-10 md:gap-12 items-center px-4 sm:px-0">
                <div className="relative group">
                  <div className="aspect-[4/3] md:aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-maaviiYellow">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maaviiOrange/60 to-transparent"></div>
                  </div>
                </div>

                <div className="mt-4 md:mt-0">
                  <div className="text-maaviiOrange mb-4 md:mb-6 group-hover:text-maaviiTeal transition-colors">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-maaviiOrange flex items-center justify-center mb-4 md:mb-6">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-charcoal" />
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-5xl font-black text-charcoal uppercase tracking-tighter mb-4 md:mb-6">
                    {service.title}
                  </h2>

                  <p className="text-lg md:text-xl text-charcoal/70 font-serif mb-4 md:mb-6">
                    {service.description}
                  </p>

                  <p className="text-base md:text-lg text-charcoal/60 font-serif mb-6 md:mb-8 leading-relaxed">
                    {service.details}
                  </p>

                  <button className="w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 bg-maaviiTeal text-cream rounded-xl font-black text-sm md:text-base hover:bg-teal-700 transition-colors shadow-lg">
                    Learn More {service.title.split(' ')[0] === 'Catering' ? 'About Catering' : service.title.split(' ')[0] === 'Cooking' ? 'About Cooking' : 'About Market'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 md:mt-24 text-center px-4">
          <h3 className="text-2xl md:text-3xl font-black text-charcoal mb-4 md:mb-6 uppercase">Ready to Experience Our Services?</h3>
          <p className="text-lg md:text-xl text-charcoal/70 max-w-3xl mx-auto font-serif mb-8 md:mb-10">
            Contact us today to book your catering event, join a cooking class, or explore our grocery selection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+821044092301"
              className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-maaviiOrange text-cream rounded-xl font-black text-base md:text-lg hover:bg-orange-700 transition-colors min-w-[200px]"
            >
              010-4409-2301
            </a>
            <a
              href="mailto:info@maaviiglobaleats.com"
              className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-maaviiTeal text-cream rounded-xl font-black text-base md:text-lg hover:bg-teal-700 transition-colors min-w-[200px]"
            >
              Email Us
            </a>
            <a
              href="https://wa.me/821044092301"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 md:px-8 md:py-4 bg-green-500 text-white rounded-xl font-black text-base md:text-lg hover:bg-green-600 transition-colors min-w-[200px]"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}