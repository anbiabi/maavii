import React, { useState } from 'react';
import { ShoppingCart, Clock, Truck, MapPin, Phone, MessageCircle } from 'lucide-react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';

const OrderingPage: React.FC = () => {
  const [selectedService, setSelectedService] = useState<'order-ahead' | 'delivery' | 'pickup'>('order-ahead');

  const services = [
    {
      id: 'order-ahead',
      title: 'Order Ahead',
      icon: Clock,
      description: 'Pre-order and skip the line',
      details: 'Place your order online and pick it up at your preferred time',
      color: 'bg-maaviiTeal'
    },
    {
      id: 'delivery',
      title: 'Delivery',
      icon: Truck,
      description: 'We bring it to you',
      details: 'Fast delivery service across Seoul',
      color: 'bg-maaviiOrange'
    },
    {
      id: 'pickup',
      title: 'Pickup',
      icon: MapPin,
      description: 'Come grab it fresh',
      details: 'Pick up your order at our location',
      color: 'bg-maaviiGold'
    }
  ];

  return (
    <div className="min-h-screen bg-cream pt-32 pb-24">
      <Container>
        <SectionTitle
          title="Order Your Fusion Feast"
          subtitle="Choose your favorite fulfillment option"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <button
                key={service.id}
                onClick={() => setSelectedService(service.id as any)}
                className={`p-8 rounded-[2rem] border-4 transition-all ${
                  selectedService === service.id
                    ? `${service.color} text-cream border-charcoal shadow-2xl -translate-y-2`
                    : 'bg-cream border-charcoal/5 text-charcoal hover:border-charcoal/20'
                }`}
              >
                <Icon className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-black uppercase mb-2">{service.title}</h3>
                <p className="font-serif text-sm opacity-80">{service.details}</p>
              </button>
            );
          })}
        </div>

        <div className="bg-white rounded-[2rem] p-12 border-4 border-charcoal/5 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-3xl font-black text-charcoal mb-8 uppercase">Menu Items</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {[
                  { name: 'Grilled Meat Skewers (Brochettes)', price: '₩12,000', variants: ['Pork', 'Chicken', 'Beef'] },
                  { name: 'Fresh Garden Salad', price: '₩8,500', variants: ['Classic', 'With Goat Cheese'] },
                  { name: 'Golden Fried Dough Balls', price: '₩6,000', variants: ['Sweet', 'Savory'] },
                  { name: 'Golden Fried Pastries', price: '₩7,500', variants: ['Spinach', 'Meat'] },
                  { name: 'Rolled Crepes/Pancakes', price: '₩9,000', variants: ['Sweet', 'Savory'] },
                ].map((item, idx) => (
                  <div key={idx} className="p-4 bg-cream rounded-xl border-2 border-charcoal/5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-charcoal">{item.name}</h4>
                      <span className="text-maaviiOrange font-black">{item.price}</span>
                    </div>
                    <p className="text-sm text-charcoal/60">
                      {item.variants.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black text-charcoal mb-8 uppercase">Contact Options</h3>
              <div className="space-y-6">
                <div className="p-6 bg-maaviiGold/20 rounded-xl border-3 border-maaviiGold">
                  <div className="flex items-center gap-4 mb-3">
                    <Phone className="w-8 h-8 text-maaviiOrange" />
                    <h4 className="font-black text-charcoal">Phone Order</h4>
                  </div>
                  <p className="text-2xl font-black text-maaviiOrange">010-4409-2301</p>
                </div>

                <div className="p-6 bg-maaviiTeal/20 rounded-xl border-3 border-maaviiTeal">
                  <div className="flex items-center gap-4 mb-3">
                    <MessageCircle className="w-8 h-8 text-maaviiTeal" />
                    <h4 className="font-black text-charcoal">KakaoTalk (Korean)</h4>
                  </div>
                  <p className="text-sm font-serif text-charcoal/70">Direct messaging available</p>
                  <button className="mt-4 w-full px-6 py-3 bg-maaviiTeal text-cream rounded-lg font-bold hover:bg-teal-700 transition-colors">
                    Open KakaoTalk
                  </button>
                </div>

                <div className="p-6 bg-green-100 rounded-xl border-3 border-green-500">
                  <div className="flex items-center gap-4 mb-3">
                    <MessageCircle className="w-8 h-8 text-green-600" />
                    <h4 className="font-black text-charcoal">WhatsApp</h4>
                  </div>
                  <p className="text-sm font-serif text-charcoal/70">International messaging</p>
                  <button className="mt-4 w-full px-6 py-3 bg-green-500 text-white rounded-lg font-bold hover:bg-green-600 transition-colors">
                    Open WhatsApp
                  </button>
                </div>

                <div className="p-6 bg-maaviiOrange/20 rounded-xl border-3 border-maaviiOrange">
                  <h4 className="font-black text-charcoal mb-3">Fulfillment Time</h4>
                  <div className="space-y-2 text-charcoal/70 font-serif">
                    <p><strong>Order Ahead:</strong> Ready in 30-45 mins</p>
                    <p><strong>Delivery:</strong> 45-60 mins</p>
                    <p><strong>Pickup:</strong> Immediate availability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-maaviiYellow/10 rounded-xl border-3 border-maaviiYellow">
            <h4 className="font-black text-charcoal mb-4">Special Orders & Bulk Orders</h4>
            <p className="text-charcoal/70 font-serif mb-6">
              For large quantities, catering requests, or special customizations, please contact us directly. We offer special pricing for bulk orders and can accommodate unique requests with advance notice.
            </p>
            <button className="px-8 py-4 bg-charcoal text-cream rounded-xl font-black hover:bg-maaviiOrange transition-colors">
              Request Custom Order
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default OrderingPage;
