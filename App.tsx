
import React, { useState } from 'react';
import { ChatMessage, Sender } from './types';
import ChatHistory from './components/ChatHistory';
import ChatInput from './components/ChatInput';
import BotIcon from './components/icons/BotIcon';

const App: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'initial-message',
      text: 'What are you thinking?',
      sender: Sender.BOT,
    },
  ]);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      text,
      sender: Sender.USER,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setIsBotTyping(true);

    // Simulate bot "thinking" then responding
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        text: 'Remember you are mortal.',
        sender: Sender.BOT,
      };
      setIsBotTyping(false);
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    }, 1200);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-gray-100 font-sans">
      <header className="bg-gray-800/50 backdrop-blur-sm shadow-md p-4 flex items-center border-b border-gray-700 z-10">
        <div className="w-10 h-10 mr-4">
          <BotIcon />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Auriga</h1>
          <p className="text-sm text-green-400">Online</p>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <ChatHistory messages={messages} isBotTyping={isBotTyping} />
      </main>
      <footer className="p-4 bg-gray-900 border-t border-gray-700">
        <ChatInput onSendMessage={handleSendMessage} disabled={isBotTyping} />
      </footer>
    </div>
  );
};

export default App;
