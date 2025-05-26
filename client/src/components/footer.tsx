import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
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
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4">Custom Homes Boerne</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Building your dream home with integrity, expertise, and personal attention. 
              Family-owned and operated with over 30 years of experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-warm-brown transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-warm-brown transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-warm-brown transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-warm-brown transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-warm-brown transition-colors duration-200"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("process")}
                  className="text-gray-300 hover:text-warm-brown transition-colors duration-200"
                >
                  Process
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-gray-300 hover:text-warm-brown transition-colors duration-200"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("reviews")}
                  className="text-gray-300 hover:text-warm-brown transition-colors duration-200"
                >
                  Reviews
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span>📍</span>
                <span>Boerne, Texas</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:(830) 555-0123" className="hover:text-warm-brown transition-colors duration-200">
                  (830) 555-0123
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>
                <a href="mailto:info@customhomesboerne.com" className="hover:text-warm-brown transition-colors duration-200">
                  info@customhomesboerne.com
                </a>
              </li>
            </ul>
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
