import { Link, useLocation } from "wouter";

export default function Footer() {
  const [location] = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <footer className="bg-charcoal text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-2xl font-bold mb-4">Custom Homes Boerne</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building your dream home with integrity, expertise, and personal attention. 
              Family-owned and operated with over 30 years of experience.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <div className="grid grid-cols-3 gap-y-2 gap-x-4">
              <Link href="/" className="text-gray-300 hover:text-warm-brown transition-colors duration-200">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-warm-brown transition-colors duration-200">
                About
              </Link>
              <Link href="/process" className="text-gray-300 hover:text-warm-brown transition-colors duration-200">
                Process
              </Link>
              {location === "/" ? (
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-300 hover:text-warm-brown transition-colors duration-200 text-left"
                >
                  Gallery
                </button>
              ) : (
                <span></span>
              )}
              <Link href="/reviews" className="text-gray-300 hover:text-warm-brown transition-colors duration-200">
                Reviews
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-warm-brown transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2025 Custom Homes Boerne. All rights reserved. | 
            <a href="#" className="hover:text-warm-brown transition-colors duration-200 ml-1">Privacy Policy</a> | 
            <a href="#" className="hover:text-warm-brown transition-colors duration-200 ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
