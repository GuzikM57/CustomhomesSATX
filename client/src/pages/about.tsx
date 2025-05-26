import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";

export default function About() {
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
              About Custom Homes Boerne
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Family-owned expertise with over 30 years of custom home building experience in Texas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional construction team" 
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-8">
                Our Story
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-6">
                <p>
                  When you work with us, you're speaking directly with the person who's been the head of purchasing and estimating for over 30 years at some of the most respected homebuilders in Texas.
                </p>
                <p>
                  She's trained countless estimators, overseen multimillion-dollar budgets, and knows exactly what it takes to deliver a custom home that's on time, on budget, and built right.
                </p>
                <p>
                  Now, she leads every build personally — alongside her son, who was trained directly by her and brings a hands-on, modern touch to the business.
                </p>
                <p className="font-semibold text-charcoal">
                  No fluff. No middlemen. Just high-level knowledge and a commitment to making sure your money is spent wisely — and your home is done right.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="font-playfair text-3xl font-bold text-charcoal mb-8 text-center">
              Our Values
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💎</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">Integrity</h3>
                <p className="text-gray-600">
                  Honest pricing, clear communication, and transparent processes from start to finish.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🏗️</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">Expertise</h3>
                <p className="text-gray-600">
                  Three decades of purchasing, estimating, and building experience at your service.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">👥</span>
                </div>
                <h3 className="font-playfair text-xl font-bold text-charcoal mb-3">Personal Touch</h3>
                <p className="text-gray-600">
                  Family-owned business where your home gets the personal attention it deserves.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-warm-brown mb-2">30+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-warm-brown mb-2">100%</div>
              <div className="text-sm text-gray-600">Family Owned</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-warm-brown mb-2">200+</div>
              <div className="text-sm text-gray-600">Homes Built</div>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-warm-brown mb-2">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}