import React from 'react';
import { Language } from '../types';
import { getTranslation } from '../utils/translations';

interface MoodButtonsProps {
  onMoodSelect: (mood: string) => void;
  language: Language;
}

const moodKeys = ['great', 'good', 'okay', 'down', 'anxious', 'sad'];
const moodEmojis = ['😊', '😌', '😐', '😔', '😰', '😢'];

export const MoodButtons: React.FC<MoodButtonsProps> = ({ onMoodSelect, language }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
      <h3 className="text-sm font-medium text-gray-700 mb-3">
        {getTranslation(language, 'moodCheckIn')}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {moodKeys.map((moodKey, index) => (
          <button
            key={moodKey}
            onClick={() => onMoodSelect(getTranslation(language, `moodValues.${moodKey}`))}
            className="flex flex-col items-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200 hover:shadow-sm"
          >
            <span className="text-2xl mb-1">{moodEmojis[index]}</span>
            <span className="text-xs text-gray-600 text-center">
              {getTranslation(language, `moods.${moodKey}`)}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};