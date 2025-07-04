import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800",
    alt: "Modern luxury custom home",
    title: "Contemporary Design"
  },
  {
    src: "/classic-elegance.png",
    alt: "Stone and brick luxury home",
    title: "Classic Elegance"
  },
  {
    src: "/outdoor-living.png",
    alt: "Contemporary home with outdoor space",
    title: "Outdoor Living"
  },
  {
    src: "/hill-country-style.png",
    alt: "Hill country style luxury home",
    title: "Hill Country Style"
  },
  {
    src: "/quality-craftsmanship.png",
    alt: "Quality craftsmanship custom home",
    title: "Quality Craftsmanship",
    span: "md:col-span-2"
  }
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-6">
            Our Luxury Custom Homes
          </h2>
          <p className="text-xl text-gray-600">
            Every home is a masterpiece, crafted with attention to detail and built to last.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.slice(0, 4).map((image, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Centered Quality Craftsmanship image for desktop */}
        <div className="flex justify-center mt-6">
          <motion.div
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full max-w-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img 
              src="/quality-craftsmanship.png" 
              alt="Quality craftsmanship custom home" 
              className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-white font-semibold text-lg">Quality Craftsmanship</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
