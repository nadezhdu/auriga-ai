
import React from 'react';
import { ChatMessage, Sender } from '../types';
import BotIcon from './icons/BotIcon';
import UserIcon from './icons/UserIcon';

interface MessageBubbleProps {
  message: ChatMessage;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === Sender.USER;

  return (
    <div className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="w-8 h-8 flex-shrink-0 bg-gray-700 rounded-full flex items-center justify-center mt-1">
          <BotIcon className="w-5 h-5 text-gray-300" />
        </div>
      )}
      <div
        className={`max-w-md md:max-w-lg lg:max-w-2xl px-4 py-3 rounded-2xl shadow-md ${
          isUser
            ? 'bg-indigo-600 text-white rounded-br-lg'
            : 'bg-gray-700 text-gray-200 rounded-bl-lg'
        }`}
      >
        <p className="whitespace-pre-wrap">{message.text}</p>
      </div>
       {isUser && (
        <div className="w-8 h-8 flex-shrink-0 bg-gray-700 rounded-full flex items-center justify-center mt-1">
          <UserIcon className="w-5 h-5 text-gray-300" />
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
