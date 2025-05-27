import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "They didn't just give us a price — they explained what would cost more and what wasn't worth it.",
    author: "Gustavo S.",
    rating: 5,
    project: "Custom Hill Country Home"
  },
  {
    quote: "Every question I had — and I had a lot — was answered quickly and clearly.",
    author: "Jessica W.",
    rating: 5,
    project: "Modern Family Home"
  },
  {
    quote: "It's rare to find people this knowledgeable and this available.",
    author: "Leo G.",
    rating: 5,
    project: "Luxury Estate"
  },
  {
    quote: "These guys built our home like it was their own.",
    author: "Jack R.",
    rating: 5,
    project: "Ranch Style Home"
  },
  {
    quote: "No fluff. Just two people who know what they're doing and care.",
    author: "Rachel M.",
    rating: 5,
    project: "Contemporary Design"
  },
  {
    quote: "Weekly updates with photos and walkthroughs made it easy.",
    author: "Eric T.",
    rating: 5,
    project: "Traditional Home"
  },
  {
    quote: "They told us what wouldn't work — not just what we wanted to hear.",
    author: "Allison V.",
    rating: 5,
    project: "Custom Floor Plan"
  },
  {
    quote: "They helped us find land and gave us real cost info.",
    author: "James H.",
    rating: 5,
    project: "Dream Home Build"
  },
  {
    quote: "You can tell we weren't just another job.",
    author: "Brittany L.",
    rating: 5,
    project: "Family Estate"
  }
];

export default function Reviews() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-playfair text-4xl lg:text-5xl font-bold mb-6">
              What Our Clients Say
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We don't just talk about quality, honesty, and service — we live it. Here's what our clients have to say about their experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-6">
                  <h3 className="font-semibold text-charcoal">{testimonial.author}</h3>
                  <p className="text-sm text-gray-500">{testimonial.project}</p>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600">
              Numbers that speak to our commitment to excellence
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              className="text-center p-6 bg-light-gray rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-warm-brown mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-light-gray rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-warm-brown mb-2">200+</div>
              <div className="text-sm text-gray-600">Homes Completed</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-light-gray rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-warm-brown mb-2">95%</div>
              <div className="text-sm text-gray-600">On-Time Delivery</div>
            </motion.div>
            <motion.div
              className="text-center p-6 bg-light-gray rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-warm-brown mb-2">100%</div>
              <div className="text-sm text-gray-600">Referral Rate</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-charcoal text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold mb-6">
              Ready to Join Our Happy Clients?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the difference that personal attention and expert craftsmanship can make.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-warm-brown text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}