import { useNavigate } from 'react-router-dom';
import { Truck, Home, Warehouse, Settings, Check } from 'lucide-react';

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      icon: <Truck size={40} />,
      title: "Porta Cabins",
      description: "High-quality portable cabins for offices, living, or site use.",
      features: ["Custom sizes", "Quick install", "Built to last"],
      buttonText: "Buy Porta Cabin"
    },
    {
      icon: <Warehouse size={40} />,
      title: "Container Offices",
      description: "Modern container offices with full amenities and sleek design.",
      features: ["Modular setup", "Climate-controlled", "Professional look"],
      buttonText: "Buy Container Office"
    },
    {
      icon: <Home size={40} />,
      title: "Container Café",
      description: "Trendy container cafés crafted for style and mobility.",
      features: ["Elegant design", "Fast setup", "Easy to relocate"],
      buttonText: "Buy Container Café"
    },
    {
      icon: <Settings size={40} />,
      title: "Rental Services",
      description: "Flexible portable cabin rentals for worksites and events.",
      features: ["Short or long term", "Delivery included", "Maintenance support"],
      buttonText: "Book Rental Cabin"
    }
  ];

  return (
    <section
      id="products"
      className="py-20 bg-primary-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="products-title text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
            Our <span className="text-secondary-700">Products</span>
          </h2>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
            We provide a full range of portable office solutions tailored to your unique requirements. From design to installation, we manage every step with precision, quality, and care.
          </p>
          <p className="text-lg text-secondary-600 max-w-3xl mx-auto mt-4">
            Our products include portable cabins, container offices, prefab houses, security cabins, labour colonies, and container cafés, all designed for durability and quick setup. Each unit ensures comfort, strength, and custom finishes to meet your exact needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-card bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
            >
              {/* Icon */}
              <div className="mb-6 inline-flex w-16 h-16 bg-secondary-700 rounded-lg items-center justify-center text-white">
                {product.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-secondary-600 text-sm mb-6 flex-grow">
                {product.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-secondary-700 text-sm">
                    <Check size={16} className="text-secondary-700 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full px-4 py-2 border-2 border-secondary-700 text-secondary-700 rounded-lg font-medium hover:bg-secondary-700 hover:text-white transition-all">
                {product.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* View All Products Button */}
        <div className="mt-16 text-center">
          <button
            onClick={() => navigate('/products')}
            className="px-8 py-4 bg-secondary-700 text-white rounded-lg font-semibold hover:bg-secondary-800 transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
