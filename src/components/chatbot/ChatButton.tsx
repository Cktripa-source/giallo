import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, ChevronUp } from 'lucide-react';
import ChatWindow from './ChatWindow';

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [unreadMessages, setUnreadMessages] = useState(0);
  
  useEffect(() => {
    // Show chat button after a delay
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // After initial appearance, simulate new message notification
  useEffect(() => {
    if (showButton && !isOpen) {
      const timer = setTimeout(() => {
        setUnreadMessages(1);
      }, 15000);
      
      return () => clearTimeout(timer);
    }
  }, [showButton, isOpen]);

  // Reset unread message counter when chat is opened
  useEffect(() => {
    if (isOpen) {
      setUnreadMessages(0);
    }
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setUnreadMessages(0);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <ChatWindow onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showButton && (
          <motion.div
            className="fixed bottom-6 right-6 z-40"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
            <motion.button
              className="w-14 h-14 rounded-full bg-accent-600 text-white flex items-center justify-center shadow-lg relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleChat}
            >
              {isOpen ? (
                <X size={24} />
              ) : (
                <MessageCircle size={24} />
              )}
              
              {/* Unread messages badge */}
              {unreadMessages > 0 && !isOpen && (
                <motion.div 
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                >
                  {unreadMessages}
                </motion.div>
              )}
            </motion.button>
            
            {/* Welcome tooltip */}
            {showButton && !isOpen && unreadMessages > 0 && (
              <motion.div
                className="absolute bottom-16 right-0 glass-effect-light p-3 rounded-lg text-white text-sm max-w-xs shadow-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
              >
                <div className="flex items-start space-x-2">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-accent-600/20 flex items-center justify-center">
                      <MessageCircle size={16} className="text-accent-400" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Need surveying help?</p>
                    <p className="text-white/70 text-xs mt-1">Click to chat with my virtual assistant</p>
                  </div>
                </div>
                <div className="absolute bottom-[-6px] right-4 w-3 h-3 glass-effect-light rotate-45"></div>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatButton;
  