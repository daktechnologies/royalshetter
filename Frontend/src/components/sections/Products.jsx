import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Truck, Home, Warehouse, Settings } from 'lucide-react';

const Products = () => {
  const container = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({ 
      scrollTrigger: {
        trigger: container.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.from(".products-title", { y: 50, opacity: 0, duration: 0.8 })
      .from(".product-card", { y: 30, opacity: 0, duration: 0.6, stagger: 0.2 }, "-=0.4");
  }, { scope: container });

  const products = [
    {
      icon: <Truck size={40} />,
      title: "Portable Cabins",
      description: "Mobile, robust, and fully customizable structures engineered for versatility and convenience. Ideal for site offices, staff accommodation, security guardrooms, storage units, and temporary event setups.",
      features: ["Weather-resistant materials", "Instant deployment", "Perfect blend of functionality and durability"]
    },
    {
      icon: <Home size={40} />,
      title: "PUF Cabins & Expert Installation",
      description: "Experience superior thermal insulation and energy efficiency with our advanced Polyurethane Foam (PUF) panel cabins. Engineered for extreme weather conditions.",
      features: ["Exceptional structural integrity", "Noise reduction", "Professional on-site installation"]
    },
    {
      icon: <Warehouse size={40} />,
      title: "Luxury Prefab Houses & Farmhouses",
      description: "Step into the future of modern living with our elegantly designed prefabricated homes and farmhouses. Combining speed of construction with architectural beauty.",
      features: ["Complete customization", "Speed of construction", "Sophisticated comfort"]
    },
    {
      icon: <Settings size={40} />,
      title: "PEB Sheds",
      description: "Our Pre-Engineered Building (PEB) sheds are precision-engineered for strength, scalability, and cost-effectiveness. Perfect for warehouses, factories, workshops.",
      features: ["Wide column-free spans", "Rapid assembly", "Superior load-bearing capacity"]
    }
  ];

  return (
    <section id="products" ref={container} className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="products-title text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our Products & <span className="text-secondary-700">Services</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            Discover our comprehensive range of modular infrastructure solutions designed to meet diverse industrial, commercial, residential, and agricultural needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div key={index} className="product-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start mb-6">
                <div className="text-secondary-700 mr-4 flex-shrink-0">
                  {product.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-secondary-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-secondary-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-secondary-700">
                    <div className="w-2 h-2 bg-secondary-700 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-secondary-700 text-primary-100 p-8 rounded-xl text-center">
          <h3 className="text-2xl font-semibold mb-4">Custom Modular Solutions</h3>
          <p className="text-lg mb-6">
            We understand that every project is unique. That's why we offer flexible sizing, quick relocatability 
            and fully scalable modular solutions tailored to your specific requirements.
          </p>
          <button className="px-8 py-3 bg-primary-100 text-secondary-700 rounded-full font-medium hover:bg-primary-200 transition-colors">
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
