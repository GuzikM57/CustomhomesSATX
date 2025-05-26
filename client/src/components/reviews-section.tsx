import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "They didn't just give us a price — they explained what would cost more and what wasn't worth it.",
    author: "Gustavo S."
  },
  {
    quote: "Every question I had — and I had a lot — was answered quickly and clearly.",
    author: "Jessica W."
  },
  {
    quote: "It's rare to find people this knowledgeable and this available.",
    author: "Leo G."
  },
  {
    quote: "These guys built our home like it was their own.",
    author: "Jack R."
  },
  {
    quote: "No fluff. Just two people who know what they're doing and care.",
    author: "Rachel M."
  },
  {
    quote: "Weekly updates with photos and walkthroughs made it easy.",
    author: "Eric T."
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
          <p className="text-xl text-gray-600">
            We don't just talk about quality, honesty, and service — we live it.
          </p>
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
              <cite className="font-semibold text-charcoal">— {testimonial.author}</cite>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
