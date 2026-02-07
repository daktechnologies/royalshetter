import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import scrollToSection from "../../utils/scrollToSection";
import useScrollSpy from "../../hooks/useScrollSpy";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Products", id: "products" },
    { name: "Why Choose Us", id: "why-choose-us" },
    { name: "Gallery", id: "gallery" },
    { name: "Contact", id: "contact" },
  ];

  const activeSection = useScrollSpy(
    navItems.map((item) => item.id),
    100
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();

    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }

    setIsOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="/#home"
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center"
          >
            <img
              src="/images/logo.png"
              alt="Royal Shelter Solutions"
              className="h-36 w-auto mt-3"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                onClick={(e) => handleNavClick(e, item.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-semibold transition",
                  activeSection === item.id
                    ? "text-secondary-600"
                    : "hover:text-secondary-600"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute left-0 bottom-0 h-0.5 w-full bg-secondary-600 transition-transform origin-left",
                    activeSection === item.id
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href="#"
                onClick={(e) => handleNavClick(e, item.id)}
                className="block px-4 py-3 font-bold rounded-lg hover:bg-secondary-600 hover:text-white transition"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
