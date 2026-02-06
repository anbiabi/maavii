'use client';

import React, { useState } from 'react';
import { Instagram } from 'lucide-react';
import Container from './ui/Container';

const FullGallery: React.FC = () => {
  // Get all images from both food and general images directories
  const allImages = [
    '/images/food/02_roasted_chicken_pieces.jpg',
    '/images/food/03_chicken_vegetable_skewers.jpg',
    '/images/food/04_fried_dough_balls_bolinho.jpg',
    '/images/food/07_bundt_ring_cake.jpg',
    '/images/food/08_sliced_sponge_cake.jpg',
    '/images/food/09_dense_cake_slice.jpg',
    '/images/food/10_fried_pastries_pastel.jpg',
    '/images/food/11_rolled_crepes_panquecas.jpg',
    '/images/food/boiled_cassava_manioc.png',
    '/images/food/cabage stew.jpg',
    '/images/food/cameroonian-meal-platter.jpg',
    '/images/food/chapati_flatbread.jpg',
    '/images/food/chicken ocra.jpg',
    '/images/food/colorful-meat-skewers.jpg',
    '/images/food/corn_fufu_couscous_mais.jpg',
    '/images/food/crepes.jpg',
    '/images/food/cut_fritters.jpg',
    '/images/food/eru.jpg',
    '/images/food/fish_rolls_pastries.jpg',
    '/images/food/fried fish.jpg',
    '/images/food/fried vegetable.jpg',
    '/images/food/meat-pie.jpg',
    '/images/food/ndole-fish-meal.jpg',
    '/images/food/ndole_bitterleaf_stew.jpg',
    '/images/food/okra_soup_with_meat_fish.jpg',
    '/images/food/piment.jpg',
    '/images/food/pili-pili.jpg',
    '/images/food/plantain-meat_mix.jpg',
    '/images/food/poisson_frit_fried_fish.jpg',
    '/images/food/puff puff.jpg',
    '/images/food/rice-sauce-meal.jpg',
    '/images/food/rolled-meat-pie.jpg',
    '/images/food/rosted fish.jpg',
    '/images/food/rosted_fish_plantain.jpg',
    '/images/food/salad.jpg',
    '/images/food/salade.jpg',
    '/images/food/salad_vinaigrette_0.jpg',
    '/images/food/salad_vinaigrette_1.jpg',
    '/images/food/salad_vinaigrette_2.jpg',
    '/images/food/sauce_arachide_peanut_soup.jpg',
    '/images/food/soya_beef_skewer.jpg',
    '/images/food/steamed-spaghetti.jpg',
    '/images/food/stew.jpg',
    '/images/food/water_fufu.jpg',
    '/images/DSC_0167.JPG',
    '/images/20250927_172607.jpg',
    '/images/20250930_065334.jpg',
    '/images/DSC_0921.JPG',
    '/images/DSC_0939.JPG',
    '/images/event.jpg',
    '/images/food/busan_catering.jpg',
    '/images/food/catering.jpg',
    '/images/food/outdoor-catering-tent.jpg',
    '/images/food/party-menu.jpg',
    '/images/food/party-menu1.jpg',
    '/images/food/Party_table.jpg',
    '/images/food/african-festival-market.jpg',
    '/images/food/food-vendor-stall.jpg',
    '/images/food/lunch-box.jpg',
    '/images/Food_truck1.jpeg',
    '/images/Food_truck.jpeg',
    '/images/truck africa.png',
    '/images/truck africa.jpeg',
    '/images/Founder.png',
    '/images/maav.png',
    '/images/logo.png',
    '/images/logoflat1.png',
    '/images/maavi.png',
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openLightbox = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-24 bg-cream min-h-screen">
      <Container>
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-black text-charcoal uppercase tracking-tighter mb-4">
            Culinary Gallery
          </h1>
          <p className="text-xl text-charcoal/60 font-serif italic max-w-2xl mx-auto">
            A visual journey through our vibrant flavors and colorful presentations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allImages.map((src, index) => (
            <div
              key={index}
              className="group relative aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-charcoal/20 cursor-pointer"
              onClick={() => openLightbox(src)}
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>

              {/* Instagram Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="w-16 h-16 bg-cream/90 rounded-full flex items-center justify-center shadow-xl">
                  <Instagram className="w-8 h-8 text-charcoal" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-auto">
            <button
              className="absolute -top-16 right-0 text-maaviiYellow text-xl font-bold bg-charcoal px-4 py-2 rounded-lg"
              onClick={closeLightbox}
            >
              Close ×
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FullGallery;