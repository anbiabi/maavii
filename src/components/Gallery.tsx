import { Container } from './ui/Container';

const images = [
  { src: '/dsc0619.jpg', alt: 'Grilled chicken brochettes' },
  { src: '/dsc0641.jpg', alt: 'Platter of African food' },
  { src: '/dsc0649.jpg', alt: 'Close-up of a delicious dish' },
  { src: '/dsc0921.jpg', alt: 'Catering setup for an event' },
  { src: '/dsc0939.jpg', alt: 'A plate of Cameroonian food' },
  { src: '/maavii.jpg', alt: 'Maavii presenting her food' }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <Container>
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">Gallery</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, i) => (
            <div key={i} className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <a href="#" data-bs-toggle="modal" data-bs-target={`#galleryModal-${i}`}>
                <img src={image.src} alt={image.alt} className="w-full h-60 object-cover cursor-pointer transform hover:scale-105 transition-transform duration-300" />
              </a>
            </div>
          ))}
        </div>
      </Container>

      {/* Modals */}
      {images.map((image, i) => (
        <div key={`modal-${i}`} className="modal fade" id={`galleryModal-${i}`} tabIndex={-1} aria-labelledby={`galleryModalLabel-${i}`} aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id={`galleryModalLabel-${i}`}>{image.alt}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <img src={image.src} alt={image.alt} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
