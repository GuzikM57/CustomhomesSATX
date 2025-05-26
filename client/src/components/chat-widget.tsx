import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

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
            className="mb-4 bg-white rounded-lg shadow-lg border border-gray-200 p-4 max-w-xs"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-charcoal text-sm">
                Need to get in touch?
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 ml-2"
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-3">
              Questions about your custom home project? We're here to help with honest answers.
            </p>
            <button
              onClick={scrollToFooter}
              className="w-full bg-warm-brown text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors duration-200"
            >
              View Contact Info
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-warm-brown text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-all duration-200 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <MessageCircle size={24} />
      </motion.button>
    </div>
  );
}