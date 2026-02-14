import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "../../utils/cn";
import scrollToSection from "../../utils/scrollToSection";
import useScrollSpy from "../../hooks/useScrollSpy";
import { useNavigate, useLocation } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const navRef = useRef(null);

  // useGSAP(() => {
  //   const tl = gsap.timeline();
  //   tl.fromTo(".nav-logo",
  //     { y: -50, opacity: 0 },
  //     { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
  //   )
  //     .fromTo(".nav-item",
  //       { y: -20, opacity: 0 },
  //       { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
  //       "-=0.5"
  //     );
  // }, []);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(".nav-logo", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
      .from(".nav-item", {
        y: -15,
        opacity: 0,
        duration: 0.4,
        stagger: 0.08,
        clearProps: "all"
      }, "-=0.4");
  }, { scope: navRef });

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
      navigate("/", { replace: false });
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }

    setIsOpen(false);
  };

  return (
    <nav
      ref={navRef}
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
            className="nav-logo flex items-center"
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
                  "nav-item relative px-4 py-2 text-sm font-semibold transition group",
                  activeSection === item.id
                    ? "text-secondary-600"
                    : "hover:text-secondary-600"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute left-0 bottom-0 h-0.5 w-full bg-secondary-600 transition-transform origin-left duration-300",
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
            "md:hidden overflow-hidden transform transition-all duration-300 ease-in-out",
            isOpen
              ? "opacity-100 translate-y-0 max-h-96"
              : "opacity-0 -translate-y-2 pointer-events-none max-h-0"
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
