import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Professional construction team" 
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
              <p>
                Now, she leads every build personally — alongside her son, who was trained directly by her and brings a hands-on, modern touch to the business.
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
