import React from 'react';
import { Phone, MessageCircle, Heart, BookOpen } from 'lucide-react';
import { Language } from '../types';
import { getTranslation } from '../utils/translations';

interface ResourcesProps {
  language: Language;
}

export const Resources: React.FC<ResourcesProps> = ({ language }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
        <Heart className="mr-2 text-red-400" size={20} />
        {getTranslation(language, 'supportResources')}
      </h3>
      
      <div className="space-y-4">
        <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
          <Phone className="text-red-500 mt-1" size={18} />
          <div>
            <p className="font-medium text-red-800">{getTranslation(language, 'crisisSupport')}</p>
            {language === 'en' ? (
              <>
                <p className="text-sm text-red-700">988 - Suicide & Crisis Lifeline</p>
                <p className="text-xs text-red-600">Available 24/7 for immediate support</p>
              </>
            ) : (
              <>
                <p className="text-sm text-red-700">119 ext 8 - Hotline Kesehatan Jiwa</p>
                <p className="text-xs text-red-600">Tersedia 24/7 untuk dukungan segera</p>
              </>
            )}
          </div>
        </div>
        
        <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
          <MessageCircle className="text-blue-500 mt-1" size={18} />
          <div>
            <p className="font-medium text-blue-800">{getTranslation(language, 'crisisTextLine')}</p>
            {language === 'en' ? (
              <>
                <p className="text-sm text-blue-700">Text HOME to 741741</p>
                <p className="text-xs text-blue-600">Free, confidential support via text</p>
              </>
            ) : (
              <>
                <p className="text-sm text-blue-700">WhatsApp: +62 811-9911-0091</p>
                <p className="text-xs text-blue-600">Dukungan gratis dan rahasia via teks</p>
              </>
            )}
          </div>
        </div>
        
        <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
          <BookOpen className="text-green-500 mt-1" size={18} />
          <div>
            <p className="font-medium text-green-800">{getTranslation(language, 'mentalHealthResources')}</p>
            {language === 'en' ? (
              <>
                <p className="text-sm text-green-700">NAMI.org - National Alliance on Mental Illness</p>
                <p className="text-xs text-green-600">Education, support groups, and advocacy</p>
              </>
            ) : (
              <>
                <p className="text-sm text-green-700">SehatMental.id - Kesehatan Mental Indonesia</p>
                <p className="text-xs text-green-600">Edukasi, grup dukungan, dan advokasi</p>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-purple-50 rounded-lg">
        <p className="text-sm text-purple-800">
          <strong>{language === 'en' ? 'Remember:' : 'Ingat:'}</strong> {getTranslation(language, 'disclaimer')}
        </p>
      </div>
    </div>
  );
};