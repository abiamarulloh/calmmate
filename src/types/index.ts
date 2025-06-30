export interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export interface MoodOption {
  emoji: string;
  label: string;
  value: string;
}

export type Language = 'en' | 'id';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}