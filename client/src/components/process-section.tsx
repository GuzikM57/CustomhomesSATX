import { motion } from "framer-motion";

const processSteps = [
  {
    number: 1,
    title: "Secure Financing",
    description: "We help you figure out land loans, construction loans, and connect you with trusted lenders."
  },
  {
    number: 2,
    title: "Find & Evaluate Land",
    description: "We assess buildability, slope, drainage, and help you avoid costly mistakes before you buy."
  },
  {
    number: 3,
    title: "Finalize Floor Plan",
    description: "We help shape or modify your floor plan to match your land and budget, no surprises."
  },
  {
    number: 4,
    title: "Submit for Approvals",
    description: "HOA, city, and lender paperwork — we handle it all for you."
  },
  {
    number: 5,
    title: "Build Begins",
    description: "We manage the full build and send weekly updates — often visiting the site daily."
  },
  {
    number: 6,
    title: "Walkthrough & Move-In",
    description: "We hand you the keys, handle final touches, and offer post-move-in support."
  }
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From financing to final walkthrough, we guide you through every step with transparency and expertise.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.number}
              className="bg-light-gray rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mb-6">
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="font-playfair text-xl font-bold text-charcoal mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
