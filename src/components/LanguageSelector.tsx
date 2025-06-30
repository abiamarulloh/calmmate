import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Language, LanguageOption } from '../types';

interface LanguageSelectorProps {
  selectedLanguage: Language;
  onLanguageChange: (language: Language) => void;
}

const languageOptions: LanguageOption[] = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  selectedLanguage,
  onLanguageChange,
}) => {
  const selectedOption = languageOptions.find(option => option.code === selectedLanguage);

  return (
    <div className="relative">
      <select
        value={selectedLanguage}
        onChange={(e) => onLanguageChange(e.target.value as Language)}
        className="appearance-none bg-white/80 backdrop-blur-sm border border-white/30 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-gray-700 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent transition-all duration-200 cursor-pointer"
      >
        {languageOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.flag} {option.name}
          </option>
        ))}
      </select>
      <ChevronDown 
        size={16} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none"
      />
    </div>
  );
};