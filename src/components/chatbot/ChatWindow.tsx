import  { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader, Map } from 'lucide-react';
import MessageBubble from './MessageBubble';
import SuggestionChip from './SuggestionChip';
import { ChatMessage } from '../../types';
import { generateRandomId } from '../../utils/helpers';

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow = ({ onClose }: ChatWindowProps) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: generateRandomId(),
      role: 'assistant',
      content: "👋 Hi there! I'm Giallo's virtual assistant. How can I help you with your land surveying needs today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const suggestions = [
    "What services do you offer?",
    "How much does a survey cost?",
    "I need help with property boundaries",
    "Tell me about 3D laser scanning"
  ];

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: generateRandomId(),
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      // Make API request to OpenAI (through proxy)
      const response = await fetchChatResponse(input);
      
      // Add bot response
      const botMessage: ChatMessage = {
        id: generateRandomId(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
      
      // Add error message
      const errorMessage: ChatMessage = {
        id: generateRandomId(),
        role: 'assistant',
        content: "I'm sorry, I encountered a problem. Please try again later.",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchChatResponse = async (userMessage: string): Promise<string> => {
    // This would typically be an API call, but we'll simulate a response for the demo
    return new Promise((resolve) => {
      // Simulate network delay
      setTimeout(() => {
        // Determine response based on user message content
        if (userMessage.toLowerCase().includes('service') || userMessage.toLowerCase().includes('offer')) {
          resolve("I offer a range of surveying services including topographic surveys, boundary surveys, construction staking, 3D laser scanning, drone surveys, and GIS mapping. Each service is tailored to meet specific project needs. Would you like details about any particular service?");
        } else if (userMessage.toLowerCase().includes('cost') || userMessage.toLowerCase().includes('price') || userMessage.toLowerCase().includes('rate')) {
          resolve("Survey costs vary depending on the project size, complexity, location, and specific requirements. For an accurate estimate, it's best to contact me directly to discuss your project details. Would you like to schedule a consultation?");
        } else if (userMessage.toLowerCase().includes('property') || userMessage.toLowerCase().includes('boundaries') || userMessage.toLowerCase().includes('boundary')) {
          resolve("Boundary surveys establish property lines by researching legal documents and conducting field measurements. This service helps resolve boundary disputes, identify encroachments, and prepare for construction projects. Do you need assistance with property boundaries?");
        } else if (userMessage.toLowerCase().includes('laser') || userMessage.toLowerCase().includes('scanning') || userMessage.toLowerCase().includes('3d')) {
          resolve("3D laser scanning creates precise digital models of existing structures or terrains using LiDAR technology. This provides accurate point cloud data for modeling, renovation planning, deformation analysis, and as-built documentation. The technology is especially valuable for complex structures or historical preservation projects.");
        } else {
          resolve("Thank you for your message. Would you like to know more about my surveying services, recent projects, or would you prefer to set up a consultation? I'm here to assist with any land surveying needs you may have.");
        }
      }, 1500);
    });
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInput(suggestion);
  };

  return (
    <motion.div
      className="fixed bottom-24 right-6 w-[350px] h-[500px] glass-effect rounded-lg shadow-xl z-40 flex flex-col overflow-hidden"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      {/* Chat header */}
      <div className="bg-accent-600/20 p-4 backdrop-blur-lg">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-accent-600/30 flex items-center justify-center mr-3">
            <Map size={20} className="text-accent-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">Surveying Assistant</h3>
            <p className="text-xs text-white/70">Available to answer your questions</p>
          </div>
        </div>
      </div>
      
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <MessageBubble key={message.id} message={message} />
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-dark-800/70 rounded-lg py-2 px-4 max-w-[80%] backdrop-blur-sm">
                <div className="flex items-center space-x-2">
                  <Loader size={16} className="text-accent-400 animate-spin" />
                  <span className="text-white/70 text-sm">Typing...</span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>
      
      {/* Suggestions */}
      {messages.length < 3 && (
        <div className="p-3 border-t border-white/10">
          <p className="text-xs text-white/50 mb-2">Suggested questions:</p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <SuggestionChip 
                key={index} 
                text={suggestion} 
                onClick={() => handleSuggestionClick(suggestion)}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Input form */}
      <form onSubmit={handleSubmit} className="border-t border-white/10 p-3">
        <div className="flex items-center bg-dark-800/50 rounded-lg">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 bg-transparent px-4 py-2 text-white focus:outline-none text-sm"
            disabled={isLoading}
          />
          <button 
            type="submit" 
            className={`w-10 h-10 flex items-center justify-center rounded-full mr-1 ${
              input.trim() ? 'text-accent-500 hover:bg-accent-600/20' : 'text-white/30'
            } transition-colors`}
            disabled={!input.trim() || isLoading}
          >
            <Send size={18} />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

export default ChatWindow;
  