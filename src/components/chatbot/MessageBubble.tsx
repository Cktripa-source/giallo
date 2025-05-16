import  { motion } from 'framer-motion';
import { ChatMessage } from '../../types';

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === 'user';
  
  const formatTimestamp = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <motion.div 
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div 
        className={`rounded-lg py-2 px-4 max-w-[80%] ${
          isUser 
            ? 'bg-accent-600 text-white' 
            : 'bg-dark-800/70 backdrop-blur-sm text-white'
        }`}
      >
        <div className="text-sm whitespace-pre-wrap">{message.content}</div>
        <div className={`text-[10px] mt-1 ${isUser ? 'text-white/70' : 'text-white/50'} text-right`}>
          {formatTimestamp(message.timestamp)}
        </div>
      </div>
    </motion.div>
  );
};

export default MessageBubble;
  