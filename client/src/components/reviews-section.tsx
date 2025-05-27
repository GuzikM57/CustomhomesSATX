import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "I appreciated that they walked us through every line item and actually talked us OUT of some expensive upgrades that wouldn't add real value. Most builders just say yes to everything that costs more money.",
    author: "Gustavo S."
  },
  {
    quote: "I'm the type who asks a million questions, and I never felt rushed or like I was bothering them. They'd text me back photos from the site when I was curious about progress — little things that meant a lot.",
    author: "Jessica W."
  },
  {
    quote: "After dealing with three other builders who kept passing us off to different people, finding someone who actually picks up their phone and knows every detail of your project was refreshing.",
    author: "Leo G."
  },
  {
    quote: "The attention to detail blew me away. They caught things our architect missed and fixed problems before they became expensive headaches. You can tell they take pride in their work.",
    author: "Jack R."
  }
];

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">We don't just talk about quality, honesty, and service. We live it.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-light-gray rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "{testimonial.quote}"
              </blockquote>
              <cite className="font-semibold text-charcoal">{testimonial.author}</cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
