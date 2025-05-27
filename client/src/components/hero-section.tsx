import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
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
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')`
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-playfair text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
            Affordable Custom Homes <span className="text-warm-brown">Built with Integrity</span>
          </h1>
          <motion.p 
            className="text-xl lg:text-2xl mb-8 text-gray-200 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            San Antonio & Boerne's trusted custom home builder — personal service, no fluff, and expert craftsmanship without the brand-name markup.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-warm-brown text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-200 text-center"
            >
              Start Your Journey
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-charcoal transition-all duration-200 text-center"
            >
              Our Process
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
