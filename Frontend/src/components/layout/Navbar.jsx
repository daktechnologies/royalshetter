

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import scrollToSection from "../../utils/scrollToSection";
import useScrollSpy from "../../hooks/useScrollSpy";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#products" },
    { name: "Why Choose Us", href: "#why-choose-us" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const activeSection = useScrollSpy(
    navItems.map((item) => item.href.replace("#", "")),
    100
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || isOpen
          ? "bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm text-slate-900"
          : "bg-transparent text-white"
      )}
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                scrollToSection("home");
              }
            }}
          >
            {scrolled || isOpen ? (
            <img
              src="/images/logo.png"
              alt="Royal Shelter Solutions"
              className="h-36 w-auto mt-3"
            />
          ) : (
            <img
              src="/images/zaid-bg.png"
              alt="Royal Shelter Solutions"
              className="h-36 w-auto mt-3"
            />
            )}
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "relative group px-4 py-2 text-sm font-semibold transition-all duration-300",
                    activeSection === item.href.replace("#", "")
                      ? "text-secondary-600"
                      : "text-inherit hover:text-secondary-600"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.replace("#", ""));
                  }}
                >
                  {item.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 w-full h-0.5 bg-secondary-600 transition-transform duration-300 ease-out origin-left",
                      activeSection === item.href.replace("#", "")
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    )}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden transition-all duration-300 ease-in-out overflow-hidden",
            isOpen
              ? "max-h-96 opacity-100 bg-white/95 backdrop-blur-md rounded-b-2xl shadow-xl border-t border-gray-100"
              : "max-h-0 opacity-0"
          )}
        >
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-base font-bold text-slate-700 hover:text-white hover:bg-secondary-600 rounded-lg transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.replace("#", ""));
                  setIsOpen(false);
                }}
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

export default Navbar;
