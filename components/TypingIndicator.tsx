
import React from 'react';
import BotIcon from './icons/BotIcon';

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-3 justify-start">
      <div className="w-8 h-8 flex-shrink-0 bg-gray-700 rounded-full flex items-center justify-center mt-1">
        <BotIcon className="w-5 h-5 text-gray-300" />
      </div>
      <div className="bg-gray-700 text-gray-200 rounded-2xl rounded-bl-lg px-4 py-3 flex items-center space-x-1.5">
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0s' }}></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></span>
          <span className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></span>
      </div>
    </div>
  );
};

export default TypingIndicator;
