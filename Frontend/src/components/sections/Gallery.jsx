import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Image as ImageIcon, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

// Register Plugin
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const container = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const galleryImages = [
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1662_labor-shelters-1-7.jpg&w=1920&q=75",
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1674_labor-shelters-1-5.jpg&w=1920&q=75",
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1691_prefab-labor-camps-1-5.jpg&w=1920&q=75",
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1727_prefab-labor-camps-1-3.jpg&w=1920&q=75",
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1744_prefab-pabor-hutments-1-4.jpg&w=1920&q=75",
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1750_prefab-pabor-hutments-1-6.jpg&w=1920&q=75",
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1762_prefab-pabor-hutments-1-1.jpg&w=1920&q=75",
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1756_prefab-pabor-hutments-1-3.jpg&w=1920&q=75",
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1774_prefab-pabor-hutments-1-2.jpg&w=1920&q=75",
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1786_prefab-pabor-hutments-1-8.jpg&w=1920&q=75",
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1809_Prefab-Labor-Sheds-1-3.jpg&w=1920&q=75",
    "https://www.samanportable.com/_next/image?url=%2FGallery%2Fimgi_1868_prefab-labor-colony-1-6.jpg&w=1920&q=75"
  ];

  const categories = [
    "Labor Shelters",
    "Prefab Labor Camps",
    "Prefab Hutments",
    "All Projects"
  ];

  // Enhanced Modal Functions
  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scroll
  };

  const navigateImage = (direction) => {
    if (direction === 'next') {
      const nextIndex = (currentImageIndex + 1) % galleryImages.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage(galleryImages[nextIndex]);
    } else {
      const prevIndex = currentImageIndex === 0 ? galleryImages.length - 1 : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage(galleryImages[prevIndex]);
    }
  };

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') navigateImage('next');
        if (e.key === 'ArrowLeft') navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentImageIndex]);

  useGSAP(() => {
    // Check if container exists to avoid errors
    if (!container.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: "top 85%", // Thoda late start karein taaki user ko animation dikhe
        toggleActions: "play none none reverse"
      }
    });

    // Pehle se hidden classes ko animate karein
    tl.fromTo(".gallery-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
      .fromTo(".gallery-subtitle",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(".gallery-image",
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.3"
      );

    // Cleanup for ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, { scope: container, revertOnUpdate: true });

  return (
    <section id="gallery" ref={container} className="py-20 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title Section - Added opacity-0 to prevent blip */}
        <div className="text-center mb-16">
          <h2 className="gallery-title opacity-0 text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Project <span className="text-secondary-700">Gallery</span>
          </h2>
          <p className="gallery-subtitle opacity-0 text-lg text-secondary-600 max-w-3xl mx-auto">
            Explore our completed projects and see quality craftsmanship that defines Royal Shelter Solutions.
            From labor shelters to prefab camps, each project showcases our commitment to excellence.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className="px-6 py-2 border border-secondary-700 text-secondary-700 rounded-full font-medium hover:bg-secondary-700 hover:text-white transition-all active:scale-95"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid - Enhanced with Premium Zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-image opacity-0 group relative overflow-hidden rounded-xl shadow-lg cursor-zoom-in"
              onClick={() => openModal(image, index)}
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={image}
                  alt={`Project ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-700 ease-in-out group-hover:scale-125" // Enhanced zoom scale
                  loading="lazy"
                />
              </div>

              {/* Modern Overlay with Blur */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-md p-3 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="text-secondary-900" size={24} />
                </div>
              </div>

              {/* Image Counter Badge */}
              <div className="absolute top-2 right-2 bg-secondary-700 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {index + 1}/{galleryImages.length}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-secondary-700 text-primary-100 rounded-full font-medium hover:bg-secondary-800 transition-colors">
            Load More Projects
          </button>
        </div>
      </div>

      {/* Enhanced Modal with Premium Zoom */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 cursor-zoom-out transition-all duration-300"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            className="absolute top-10 right-10 text-white/70 hover:text-white transition-transform hover:rotate-90 duration-300"
            onClick={closeModal}
          >
            <X size={40} strokeWidth={1.5} />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-10 text-white/70 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <ChevronLeft size={40} />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-10 text-white/70 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <ChevronRight size={40} />
          </button>

          {/* Zoomed Image Container */}
          <div
            className="relative max-w-5xl w-full transform transition-all duration-500 ease-out animate-in zoom-in-95"
            onClick={(e) => e.stopPropagation()} // Image click par band na ho
          >
            <img
              src={selectedImage}
              alt="Enlarged project view"
              className="w-full h-auto rounded-lg shadow-2xl border border-white/10"
            />

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
              <p className="text-white text-sm font-medium">
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Navigation Hints */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/60 text-sm">
            Use ← → arrows to navigate, ESC to close
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;