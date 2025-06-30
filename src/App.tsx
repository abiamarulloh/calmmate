import React, { useState, useRef, useEffect } from 'react';
import { Message as MessageType, Language } from './types';
import { generateResponse } from './utils/responses';
import { getTranslation } from './utils/translations';
import { Header } from './components/Header';
import { Message } from './components/Message';
import { MoodButtons } from './components/MoodButtons';
import { ChatInput } from './components/ChatInput';
import { Resources } from './components/Resources';

function App() {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>('en');
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize welcome message based on selected language
  useEffect(() => {
    const welcomeMessage: MessageType = {
      id: '1',
      text: getTranslation(selectedLanguage, 'welcomeMessage'),
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([welcomeMessage]);
  }, [selectedLanguage]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleLanguageChange = (language: Language) => {
    setSelectedLanguage(language);
  };

  const handleSendMessage = (text: string) => {
    const userMessage: MessageType = {
      id: Date.now().toString(),
      text,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate typing delay for more natural conversation
    setTimeout(() => {
      const botResponse: MessageType = {
        id: (Date.now() + 1).toString(),
        text: generateResponse(text, selectedLanguage),
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500 + Math.random() * 1000); // 1.5-2.5 second delay
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Header 
          selectedLanguage={selectedLanguage}
          onLanguageChange={handleLanguageChange}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Section */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 overflow-hidden">
              {/* Messages */}
              <div className="h-96 overflow-y-auto p-6 space-y-4">
                {messages.map((message) => (
                  <Message key={message.id} message={message} />
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-gray-100">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {/* Input Section */}
              <div className="p-4 border-t border-gray-100 bg-gray-50/50">
                <MoodButtons 
                  onMoodSelect={handleSendMessage} 
                  language={selectedLanguage}
                />
                <ChatInput 
                  onSendMessage={handleSendMessage} 
                  disabled={isTyping}
                  language={selectedLanguage}
                />
              </div>
            </div>
            
            {/* Gentle Reminder */}
            <div className="mt-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-white/20">
              <p className="text-sm text-gray-600 text-center">
                💝 {getTranslation(selectedLanguage, 'gentleReminder')}
              </p>
            </div>
          </div>
          
          {/* Resources Sidebar */}
          <div className="lg:col-span-1">
            <Resources language={selectedLanguage} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;