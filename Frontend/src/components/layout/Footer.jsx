import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-white border-t border-gray-100 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand Section */}
          {/* <div className="space-y-4">
            <Link to="/#home" className="inline-block">
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900">
                Royal <span className="text-secondary-700">Shelter</span>
              </h1>
            </Link>
            <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
              Providing premium quality shelter solutions with royalty in every detail. Your dream home, our responsibility.
            </p>
          </div> */}

          {/* Brand Section */}
          <div className="flex flex-col items-start">
            {/* Logo Section */}
            <a
              href="#home"
              className="group block -ml-2" // Logo ka extra whitespace compensate karne ke liye negative margin
              onClick={(e) => {
                if (window.location.pathname === "/") {
                  e.preventDefault();
                  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {/* Height ko h-24 kiya hai taaki alignment professional lage */}
              <img
                src="/images/image.png"
                alt="Royal Shelter Solutions"
                className="h-16 w-auto object-contain transition-transform group-hover:scale-105 mb-4"
              />
            </a>

            {/* Text Section - Isme mt-0 ya negative margin ka use kiya hai logo ke whitespace ko hatane ke liye */}
            <div className="space-y-3 -mt-2">
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                Providing premium quality shelter solutions with royalty in every detail.
                <span className="block mt-1 font-semibold text-slate-800">
                  Your dream home, our responsibility.
                </span>
              </p>
            </div>
          </div>

          {/* Quick Links with Hover Effect */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="relative group font-semibold text-slate-600 hover:text-secondary-700 text-sm transition-colors duration-300"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4 uppercase tracking-wider text-xs">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-slate-600 text-sm cursor-pointer">
                <Phone size={16} className="text-secondary-700" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-600 text-sm cursor-pointer">
                <Mail size={16} className="text-secondary-700" />
                <span>contact@royalshelter.com</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-600 text-sm cursor-pointer">
                <MapPin size={16} className="text-secondary-700" />
                <span>123 Royal Street, City Center</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Icons & Copyright */}
        <div className="border-t border-gray-400 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-secondary-700 transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-secondary-700 transition-colors">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-secondary-700 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
          <p className="text-slate-500 text-xs">
            © {currentYear} Royal Shelter. All rights reserved.
          </p>
          <a href='https://daktechno.com/' className="text-slate-500 text-xs hover:text-secondary-700 transition-colors">
            Developed by Dak Technology
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;