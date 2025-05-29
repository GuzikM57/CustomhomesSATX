import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

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

  const isActivePage = (path: string) => {
    if (path === "/" && location === "/") return true;
    if (path !== "/" && location.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16 lg:h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-12">
              <Link href="/">
                <span className={`px-6 py-3 text-lg font-semibold transition-colors duration-200 ${
                  isActivePage("/") ? "text-warm-brown" : "text-charcoal hover:text-warm-brown"
                }`}>
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className={`px-6 py-3 text-lg font-semibold transition-colors duration-200 ${
                  isActivePage("/about") ? "text-warm-brown" : "text-charcoal hover:text-warm-brown"
                }`}>
                  About
                </span>
              </Link>
              <Link href="/process">
                <span className={`px-6 py-3 text-lg font-semibold transition-colors duration-200 ${
                  isActivePage("/process") ? "text-warm-brown" : "text-charcoal hover:text-warm-brown"
                }`}>
                  Process
                </span>
              </Link>

              <Link href="/reviews">
                <span className={`px-6 py-3 text-lg font-semibold transition-colors duration-200 ${
                  isActivePage("/reviews") ? "text-warm-brown" : "text-charcoal hover:text-warm-brown"
                }`}>
                  Reviews
                </span>
              </Link>
              <Link href="/contact">
                <span className={`px-8 py-3 rounded-md text-lg font-semibold transition-colors duration-200 ${
                  isActivePage("/contact") 
                    ? "bg-warm-brown text-white" 
                    : "bg-charcoal text-white hover:bg-warm-brown"
                }`}>
                  Contact
                </span>
              </Link>
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
            <Link href="/" onClick={() => setIsOpen(false)}>
              <span className={`block w-full text-left px-3 py-2 font-medium ${
                isActivePage("/") ? "text-warm-brown" : "text-charcoal hover:text-warm-brown"
              }`}>
                Home
              </span>
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              <span className={`block w-full text-left px-3 py-2 font-medium ${
                isActivePage("/about") ? "text-warm-brown" : "text-charcoal hover:text-warm-brown"
              }`}>
                About
              </span>
            </Link>
            <Link href="/process" onClick={() => setIsOpen(false)}>
              <span className={`block w-full text-left px-3 py-2 font-medium ${
                isActivePage("/process") ? "text-warm-brown" : "text-charcoal hover:text-warm-brown"
              }`}>
                Process
              </span>
            </Link>

            <Link href="/reviews" onClick={() => setIsOpen(false)}>
              <span className={`block w-full text-left px-3 py-2 font-medium ${
                isActivePage("/reviews") ? "text-warm-brown" : "text-charcoal hover:text-warm-brown"
              }`}>
                Reviews
              </span>
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              <span className={`block w-full text-left px-3 py-2 font-medium ${
                isActivePage("/contact") ? "text-warm-brown" : "text-charcoal hover:text-warm-brown"
              }`}>
                Contact
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
