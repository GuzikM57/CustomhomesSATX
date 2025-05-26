import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-playfair text-xl lg:text-2xl font-bold text-charcoal">
              Custom Homes Boerne
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="text-charcoal hover:text-warm-brown px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-charcoal hover:text-warm-brown px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-charcoal hover:text-warm-brown px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("gallery")}
                className="text-charcoal hover:text-warm-brown px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection("reviews")}
                className="text-charcoal hover:text-warm-brown px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-charcoal text-white px-6 py-2 rounded-md text-sm font-medium hover:bg-warm-brown transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-charcoal hover:text-warm-brown p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 text-charcoal hover:text-warm-brown font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 text-charcoal hover:text-warm-brown font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left px-3 py-2 text-charcoal hover:text-warm-brown font-medium"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-3 py-2 text-charcoal hover:text-warm-brown font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("reviews")}
              className="block w-full text-left px-3 py-2 text-charcoal hover:text-warm-brown font-medium"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 text-charcoal hover:text-warm-brown font-medium"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
