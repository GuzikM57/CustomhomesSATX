import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

const pageMessages = {
  "/": {
    title: "Ready to build your dream home?",
    message: "Let's discuss your vision and see how we can make it a reality with honest pricing and expert craftsmanship."
  },
  "/about": {
    title: "Want to work with real experts?",
    message: "Skip the salespeople and talk directly with the head estimator who's built hundreds of luxury homes.",
    buttonText: "Let's talk"
  },
  "/process": {
    title: "Have questions about our process?",
    message: "Every step is designed around transparency and your peace of mind. Let's walk through what makes us different.",
    buttonText: "How can we help?"
  },
  "/reviews": {
    title: "Ready to join our happy clients?",
    message: "See why our clients say we're different. Let's discuss how we can exceed your expectations too."
  },
  "/contact": {
    title: "Need to get in touch?",
    message: "Questions about your custom home project? We're here to help with honest answers and clear next steps."
  }
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const currentMessage = pageMessages[location as keyof typeof pageMessages] || pageMessages["/"];

  const scrollToFooter = () => {
    const footer = document.querySelector('footer');
    if (footer) {
      footer.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      setIsOpen(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-sm"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-charcoal text-sm">
                {currentMessage.title}
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 ml-2 flex-shrink-0"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-3 leading-relaxed">
              {currentMessage.message}
            </p>
            <button
              onClick={scrollToFooter}
              className="w-full bg-warm-brown text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors duration-200"
            >
              {currentMessage.buttonText || "View Contact Info"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex flex-col items-end">
        {/* "Let's get in touch" bar */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-3 bg-warm-brown text-white px-4 py-2 rounded-full shadow-lg cursor-pointer hover:bg-opacity-90 transition-all duration-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-sm font-medium whitespace-nowrap">Let's get in touch</span>
        </motion.div>
        
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-warm-brown text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-200 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <MessageCircle size={24} />
        </motion.button>
      </div>
    </div>
  );
}