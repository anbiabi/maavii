import { Container } from './ui/Container';

export default function ComingSoon() {
  return (
    <section id="coming-soon" className="py-24 bg-white">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-orange-600 mb-4">Coming Soon: The Maavii Food Truck!</h2>
          <p className="text-xl text-gray-700 mb-8">Bringing Authentic African Flavors to the Streets</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">The Concept</h3>
            <p className="text-gray-600">
              Maavii's Cuisine is going mobile! We are developing an exciting food truck concept to bring our delicious, authentic African and French fusion dishes directly to you. Imagine enjoying our signature brochettes, savory Ndolé, and fresh French salads on the go. Our mission is to make our unique culinary experience more accessible to everyone, everywhere.
            </p>
            <h3 className="text-2xl font-semibold mt-6">Looking for a Partner!</h3>
            <p className="text-gray-600">
              To make this dream a reality, we are currently seeking a passionate and business-savvy partner to join us on this journey. If you have a love for food, a drive for success, and believe in the power of bringing people together through cuisine, we would love to hear from you.
            </p>
            <p className="text-gray-800 font-semibold">
              Interested in this exciting opportunity? Please contact us to discuss a potential partnership.
            </p>
            <a href="#contact" className="inline-block bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors">
              Contact Us
            </a>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="/truck.png" alt="African food truck concept" className="rounded-lg shadow-lg object-cover w-full h-full" />
            <img src="/design2.jpeg" alt="Food truck design" className="rounded-lg shadow-lg object-cover w-full h-full" />
            <img src="/dsc0023.jpg" alt="Maavii's delicious food" className="rounded-lg shadow-lg object-cover w-full h-full col-span-2" />
          </div>
        </div>
      </Container>
    </section>
  );
}
