import { Container } from './ui/Container';
import { useState, useEffect } from 'react';

const images = [
  { src: '/images/food/02_roasted_chicken_pieces.jpg', alt: 'Grilled chicken brochettes' },
  { src: '/images/food/04_fried_dough_balls_bolinho.jpg', alt: 'Fried dough balls' },
  { src: '/images/food/03_chicken_vegetable_skewers.jpg', alt: 'Close-up of delicious skewers' },
  { src: '/images/DSC_0921.JPG', alt: 'Catering setup for an event' },
  { src: '/images/DSC_0939.JPG', alt: 'A plate of Cameroonian food' },
  { src: '/images/maav.png', alt: 'Maavii presenting her food' },
  { src: '/images/20250927_172607.jpg', alt: 'Food presentation event' },
  { src: '/images/20250930_065334.jpg', alt: 'Traditional cooking method' },
  { src: '/images/Founder.png', alt: 'Founder of Maavii' },
  { src: '/images/Cambusan logo.jpg', alt: 'Company logo' },
  { src: '/images/1759119872.png', alt: 'Food preparation' },
  { src: '/images/1759120134.png', alt: 'Traditional ingredients' },
  { src: '/images/DSC_0167.JPG', alt: 'Traditional African meal' },
  { src: '/images/all-menu.jpg', alt: 'Complete menu display' },
  { src: '/images/maav3.png', alt: 'Maavii brand image' },
  { src: '/images/Food_truck1.jpeg', alt: 'Maavii Food Truck' },
  { src: '/images/Food_truck.jpeg', alt: 'Food Truck at Event' },
  { src: '/images/truck africa.png', alt: 'Mobile food service' },
  { src: '/images/truck africa.jpeg', alt: 'Food Truck in Africa Theme' },
  { src: '/images/katok.png', alt: 'Special dish' },
  { src: '/images/camerfoot.jpg', alt: 'Cameroonian cultural element' },
  { src: '/images/event.jpg', alt: 'Catering event' },
  { src: '/images/20251214_194600.jpg', alt: 'Fresh ingredients display' },
  { src: '/images/20251214_194708.jpg', alt: 'Food preparation' },
  { src: '/images/20251214_194715.jpg', alt: 'Cooking in action' },
  { src: '/images/20251214_194752.jpg', alt: 'Traditional spices' },
  { src: '/images/20251214_194805.jpg', alt: 'Market fresh produce' },
  { src: '/images/20251214_194825.jpg', alt: 'Ingredient selection' },
  { src: '/images/20251214_194840.jpg', alt: 'Food display' },
  { src: '/images/20251214_194854.jpg', alt: 'Kitchen preparation' },
  { src: '/images/20251214_194900.jpg', alt: 'Culinary showcase' },
  { src: '/images/20250927_172708.jpg', alt: 'Chef presentation' },
  { src: '/images/20250930_065334.jpg', alt: 'Traditional cooking method' },
  { src: '/images/DSC_0167.JPG', alt: 'Traditional African meal' },
  { src: '/images/food/salad.jpg', alt: 'Fresh garden salad' },
  { src: '/images/food/salade.jpg', alt: 'African salad bowl' },
  { src: '/images/food/salad_vinaigrette_1.jpg', alt: 'Vinaigrette salad' },
  { src: '/images/food/salad_vinaigrette_0.jpg', alt: 'Salad with vinaigrette dressing' },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSlideshowActive, setIsSlideshowActive] = useState(false);

  // Auto-advance the slideshow every 5 seconds
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isSlideshowActive) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isSlideshowActive, currentIndex]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleSlideshow = () => {
    setIsSlideshowActive(!isSlideshowActive);
  };

  return (
    <section id="gallery" className="py-20 bg-cream">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-charcoal mb-4 uppercase tracking-tighter">Gallery</h2>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
            Experience the vibrant flavors and rich traditions of African cuisine through our collection of authentic dishes and cultural moments.
          </p>
        </div>

        {/* Slideshow Section */}
        <div className="relative mb-12 max-w-4xl mx-auto">
          <div className="relative aspect-video overflow-hidden rounded-2xl shadow-xl">
            <img 
              src={images[currentIndex].src} 
              alt={images[currentIndex].alt} 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            {/* Navigation Arrows */}
            <button 
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-maaviiOrange/80 hover:bg-maaviiOrange text-white p-3 rounded-full shadow-lg transition-all"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-maaviiOrange/80 hover:bg-maaviiOrange text-white p-3 rounded-full shadow-lg transition-all"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="mt-6 flex flex-col items-center">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold text-charcoal">{images[currentIndex].alt}</h3>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleSlideshow}
                className={`px-6 py-2 rounded-full font-bold ${
                  isSlideshowActive 
                    ? 'bg-maaviiTeal text-white' 
                    : 'bg-charcoal text-cream hover:bg-maaviiOrange'
                }`}
              >
                {isSlideshowActive ? 'Pause Slideshow' : 'Start Slideshow'}
              </button>
              
              <div className="flex gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => goToSlide(idx)}
                    className={`w-3 h-3 rounded-full ${
                      idx === currentIndex ? 'bg-maaviiOrange' : 'bg-gray-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, i) => (
            <div 
              key={i} 
              className={`overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                i === currentIndex ? 'ring-4 ring-maaviiOrange scale-105' : ''
              }`}
              onClick={() => {
                setCurrentIndex(i);
                setIsSlideshowActive(false); // Stop slideshow when clicking a thumbnail
              }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-40 object-cover hover:scale-110 transition-transform duration-300" 
              />
              <div className="p-2 bg-white">
                <p className="text-xs text-charcoal truncate">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}