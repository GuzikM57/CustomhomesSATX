import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ContactSection from "@/components/contact-section";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
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
              Questions About Custom Building? We Have Answers.
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Confused by conflicting bids? Wondering what's realistic for your budget? Not sure where to start? Let's cut through the noise with a straightforward conversation about your project.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Contact Form Section */}
      <ContactSection />

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-charcoal mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about building your custom home
            </p>
          </motion.div>
          
          <div className="space-y-8">
            <motion.div
              className="bg-light-gray rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-charcoal mb-3">
                How long does it take to build a custom home?
              </h3>
              <p className="text-gray-600">
                Typically 6-9 months from ground breaking to move-in, depending on the size and complexity of your home. We provide realistic timelines upfront and keep you updated throughout the process.
              </p>
            </motion.div>

            <motion.div
              className="bg-light-gray rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-charcoal mb-3">
                Do you help with land selection?
              </h3>
              <p className="text-gray-600">
                Absolutely! We help evaluate potential lots for buildability, drainage, utilities, and other factors that affect both construction costs and your daily living experience.
              </p>
            </motion.div>

            <motion.div
              className="bg-light-gray rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-charcoal mb-3">
                What's included in your pricing?
              </h3>
              <p className="text-gray-600">
                We provide detailed, transparent pricing that includes all construction costs, permits, and standard finishes. No hidden fees or surprise markups — just honest, competitive pricing.
              </p>
            </motion.div>

            <motion.div
              className="bg-light-gray rounded-xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="font-semibold text-lg text-charcoal mb-3">
                Can I make changes during construction?
              </h3>
              <p className="text-gray-600">
                Yes, within reason and timing. We'll discuss change order costs upfront and help you understand how modifications might affect your timeline and budget.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}