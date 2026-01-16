import { services } from '../constants/services';
import { useLanguage } from '../context/LanguageContext';
import Catering from './Catering';

export default function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 px-4 bg-maaviiYellow/10 scroll-mt-24 border-t border-charcoal/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-8">
          <h2 className="text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter">
            {t('navServices')}
          </h2>
          <p className="text-xl text-charcoal/70 max-w-3xl mx-auto font-serif italic">
            Authentic African & Korean fusion experiences across multiple service offerings
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group bg-cream rounded-2xl overflow-hidden border-4 border-charcoal/5 hover:border-maaviiOrange hover:shadow-2xl transition-all flex flex-col h-full">
              <div className="p-8 flex-1 flex flex-col items-center text-center">
                <div className="text-maaviiOrange mb-6 group-hover:text-maaviiTeal transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-charcoal mb-4 uppercase">{service.title}</h3>
                <p className="text-charcoal/60 font-serif">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Catering section */}
        <Catering />
      </div>
    </section>
  );
}