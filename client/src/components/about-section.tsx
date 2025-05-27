import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Problem & Solution Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-8">
              Frustrated with Big Builders?
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">✕</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">Treated Like a Number</h3>
                  <p className="text-gray-600">Tired of being just another project in their pipeline?</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">✕</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">Poor Communication</h3>
                  <p className="text-gray-600">Sick of vague quotes and unanswered questions?</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-sm">✕</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">Big-Brand Markup</h3>
                  <p className="text-gray-600">Don't want to pay $120K+ more just for a logo or builder name?</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-8">
              Why Choose Us
            </h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">30+ Years Experience</h3>
                  <p className="text-gray-600">Expert purchasing and estimating with direct oversight</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">Personal Attention</h3>
                  <p className="text-gray-600">Your home is our #1 priority, not an afterthought</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">No Middlemen</h3>
                  <p className="text-gray-600">Work directly with trained estimators and owners</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Modern custom home construction" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-4">
              About Our Family Business
            </h2>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              If you've been researching affordable custom home builders in San Antonio, here's what makes us different.
            </p>
            <div className="prose prose-lg text-gray-600 space-y-6">
              <p>
                We're a family-owned builder specializing in affordable custom homes in San Antonio and Boerne without the inflated cost.
              </p>
              <p>
                This isn't a big-name builder hiding behind layers of reps and vague pricing. When you work with us, you're speaking directly with the person who's been the head of purchasing and estimating for some of the most respected builders in Texas for over 30 years.
              </p>
              <p>
                She's trained countless estimators, overseen multimillion-dollar budgets, and knows exactly what it takes to deliver a custom home that's on time, on budget, and built right.
              </p>

            </div>
            
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-warm-brown mb-2">30+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-warm-brown mb-2">100%</div>
                <div className="text-sm text-gray-600">Family Owned</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
