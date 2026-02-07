// import { useRef } from 'react';
// import gsap from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ArrowRight, Building2 } from 'lucide-react';
// import { DotGlobeHero } from '../ui/GlobeHero';

// const Hero = () => {
//   const container = useRef();

//   useGSAP(() => {
//     const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

//     tl.from(".hero-title", { y: 100, opacity: 0, duration: 1, stagger: 0.2 })
//       .from(".hero-sub", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
//       .from(".hero-btn", { scale: 0.8, opacity: 0, duration: 0.5 }, "-=0.3")
//       .from(".hero-icon", { scale: 0, rotation: 180, duration: 0.8 }, "-=0.2");
//   }, { scope: container });

//   return (
//     <section id="home">
//     <DotGlobeHero 
//       ref={container}
//       rotationSpeed={0.003}
//       globeRadius={1.2}
//       className="pt-16"
//     >
//       <div className="hero-icon mb-8 p-4 bg-secondary-700 rounded-full">
//         <Building2 size={48} className="text-primary-100" />
//       </div>
      
//       <h1 className="hero-title display-text text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-center mb-6">
//         Royal <span className="text-secondary-700">Shelter</span>
//         <br />
//         <span className="text-3xl md:text-4xl lg:text-5xl font-heading font-normal text-secondary-600">Solutions</span>
//       </h1>
      
//       <p className="hero-sub text-secondary-700 mt-6 text-lg md:text-xl max-w-3xl text-center leading-relaxed px-4 font-medium">
//         Engineering Excellence in Modular Infrastructure
//       </p>
      
//       <p className="hero-sub text-secondary-600 mt-4 text-base md:text-lg max-w-2xl text-center leading-relaxed px-4">
//         Delivering innovative and sustainable infrastructure solutions that redefine standards of quality, efficiency, and comfort across India.
//       </p>

//       <div className="flex flex-col sm:flex-row gap-4 mt-10">
//         <button className="hero-btn px-8 py-4 bg-secondary-700 text-primary-100 rounded-full font-heading font-semibold flex items-center justify-center gap-2 hover:bg-secondary-800 transition-colors shadow-lg">
//           Explore Our Solutions <ArrowRight size={20} />
//         </button>
//         <button className="hero-btn px-8 py-4 border-2 border-secondary-700 text-secondary-700 rounded-full font-heading font-semibold hover:bg-secondary-700 hover:text-primary-100 transition-colors">
//           Get Quote
//         </button>
//       </div>
//     </DotGlobeHero>
//     </section>
//   );
// };

// export default Hero;





import { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, Building2 } from 'lucide-react';
import scrollToSection from '../../utils/scrollToSection';

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

const Hero = () => {
  const container = useRef(null);
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  /* HERO TEXT ANIMATION */
  useGSAP(() => {
    const container = document.querySelector('#home');

    if (!container) {
      console.error("GSAP target '#home' not found. Ensure the element is rendered.");
      return;
    }

    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    tl.from('.hero-title', { y: 100, opacity: 0, duration: 1 })
      .from('.hero-sub', { opacity: 0, y: 20, duration: 0.8 }, '-=0.5')
      .from('.hero-btn', { scale: 0.85, opacity: 0, duration: 0.5 }, '-=0.3')
      .from('.hero-icon', { scale: 0, rotation: 180, duration: 0.8 }, '-=0.2');
  }, { scope: container });

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(sliderRef.current, {
        xPercent: -(index + 1) * 100,
        duration: 1.2,
        ease: 'power3.inOut',
        onComplete: () => {
          setIndex((prev) => (prev + 1) % galleryImages.length);
          if (sliderRef.current) {
            gsap.set(sliderRef.current, {
              xPercent: -((index + 1) % galleryImages.length) * 100,
            });
          }
        },
      });
    }, 4500);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
  if (window.location.hash) {
    scrollToSection(window.location.hash.replace("#", ""));
  }
}, []);

  return (
    <section
      id="home"
      ref={container}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* 🔥 SLIDE CAROUSEL */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex h-full w-full"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {galleryImages.map((img, i) => (
            <img
              key={i}
              src={img}
              alt="Project"
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-black/45" />
      </div>

      {/* CONTENT */}
      <div className="text-center px-4 flex flex-col items-center">
        <div className="hero-icon mb-8 p-4 bg-secondary-700 rounded-full">
          <Building2 size={48} className="text-white" />
        </div>

        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6">
          Royal <span className="text-secondary-400">Shelter</span>
          <br />
          <span className="text-3xl md:text-4xl lg:text-5xl font-normal text-secondary-200">
            Solutions
          </span>
        </h1>

        <p className="hero-sub mt-4 text-lg md:text-xl max-w-3xl text-secondary-100">
          Engineering Excellence in Modular Infrastructure
        </p>

        <p className="hero-sub mt-3 text-base md:text-lg max-w-2xl text-secondary-200">
          Delivering innovative and sustainable infrastructure solutions across India.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="hero-btn px-8 py-4 bg-secondary-700 text-white rounded-full flex items-center gap-2">
            Explore Our Solutions <ArrowRight size={20} />
          </button>
          <button className="hero-btn px-8 py-4 border-2 border-secondary-300 text-white rounded-full hover:bg-secondary-700">
            Get Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
