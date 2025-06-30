import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { LanguageSelector } from './LanguageSelector';

interface HeaderProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

export const Header: React.FC<HeaderProps> = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className="text-center mb-8">
      <div className="flex justify-end mb-4">
        <LanguageSelector 
          selectedLanguage={selectedLanguage}
          onLanguageChange={onLanguageChange}
        />
      </div>
      
      <div className="flex items-center justify-center mb-4">
        <div className="relative">
          <Heart className="text-pink-400" size={32} />
          <Sparkles className="absolute -top-1 -right-1 text-yellow-400" size={16} />
        </div>
      </div>
      
      <h1 className="text-3xl font-bold text-gray-800 mb-2">CalmMate</h1>
      <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
        {selectedLanguage === 'en' 
          ? "A safe space to share how you're feeling. I'm here to listen with empathy and offer gentle support."
          : "Ruang aman untuk berbagi perasaanmu. Saya di sini untuk mendengarkan dengan empati dan memberikan dukungan yang lembut."
        }
      </p>
      <span>Built with Bolt.new</span>
    </div>
  );
};