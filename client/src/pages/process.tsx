import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import landPhoto from "@assets/Screenshot 2025-05-27 142248.png";

const processSteps = [
  {
    number: 1,
    title: "Secure Financing",
    description: "We help you figure out land loans, construction loans, and connect you with trusted lenders.",
    details: [
      "Land loan consultation and guidance",
      "Construction-to-permanent loan options", 
      "Trusted lender network referrals",
      "Budget planning and approval process"
    ]
  },
  {
    number: 2,
    title: "Find & Evaluate Land",
    description: "We assess buildability, slope, drainage, and help you avoid costly mistakes before you buy.",
    details: [
      "Site evaluation and feasibility studies",
      "Soil testing and drainage assessment",
      "Utility availability and costs",
      "HOA and deed restriction review"
    ]
  },
  {
    number: 3,
    title: "Finalize Floor Plan",
    description: "We help shape or modify your floor plan to match your land and budget, no surprises.",
    details: [
      "Custom floor plan design",
      "Site-specific modifications",
      "Budget optimization recommendations",
      "3D renderings and walkthroughs"
    ]
  },
  {
    number: 4,
    title: "Submit for Approvals",
    description: "HOA, city, and lender paperwork — we handle it all for you.",
    details: [
      "Building permit applications",
      "HOA architectural review submissions",
      "City planning and zoning approvals",
      "Lender plan and specification review"
    ]
  },
  {
    number: 5,
    title: "Build Begins",
    description: "We manage the full build and send weekly updates — often visiting the site daily.",
    details: [
      "Daily site supervision and quality control",
      "Weekly photo updates and progress reports",
      "Subcontractor coordination and management",
      "Material delivery and inspection"
    ]
  },
  {
    number: 6,
    title: "Walkthrough & Move-In",
    description: "We hand you the keys, handle final touches, and offer post-move-in support.",
    details: [
      "Pre-final walkthrough and punch list",
      "Final inspection and city approvals",
      "Key handover and home orientation",
      "One-year warranty and support"
    ]
  }
];

export default function Process() {
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
              Our Proven Process
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From financing to final walkthrough, we guide you through every step with transparency and expertise
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                className="grid lg:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-warm-brown rounded-full flex items-center justify-center mr-6">
                      <span className="text-white font-bold text-xl">{step.number}</span>
                    </div>
                    <h2 className="font-playfair text-3xl font-bold text-charcoal">
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                          <span className="text-green-600 text-sm">✓</span>
                        </div>
                        <span className="text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={index === 1 ? landPhoto : `https://images.unsplash.com/photo-${
                        index === 0 ? '1554224155-8d04cb21cd6c' : // financing
                        index === 1 ? '1500382017468-c7330b4b2fe0' : // land (fallback, won't be used)
                        index === 2 ? '1503387837-b154d5074bd2' : // floor plan
                        index === 3 ? '1507003211169-0a1dd7ef0a50' : // approvals
                        index === 4 ? '1504615755583-2916b52192a3' : // building
                        '1560518883-ce04c40253b8' // walkthrough
                      }?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400`}
                      alt={`Step ${step.number}: ${step.title}`}
                      className="w-full h-64 object-cover rounded-lg mb-4"
                    />
                    <div className="text-center">
                      <div className="text-warm-brown font-semibold text-sm mb-2">
                        STEP {step.number}
                      </div>
                      <h3 className="font-playfair text-xl font-bold text-charcoal">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss your vision and walk through how we can bring your dream home to life.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-warm-brown text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Start the Conversation
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}