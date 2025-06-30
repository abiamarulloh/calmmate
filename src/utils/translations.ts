import { Language } from '../types';

export const translations = {
  en: {
    welcomeMessage: "Hello! I'm CalmMate, and I'm here to listen and support you. How are you feeling today? You can share as much or as little as you'd like - there's no judgment here, only compassion.",
    moodCheckIn: "Quick mood check-in:",
    chatPlaceholder: "How are you feeling today? Share what's on your mind...",
    gentleReminder: "Remember to be kind to yourself today. Your feelings are valid, and seeking support shows strength.",
    supportResources: "Support Resources",
    crisisSupport: "Crisis Support",
    crisisTextLine: "Crisis Text Line",
    mentalHealthResources: "Mental Health Resources",
    disclaimer: "CalmMate provides supportive conversation but isn't a replacement for professional mental health care. If you're experiencing persistent difficulties, please consider speaking with a licensed therapist or counselor.",
    moods: {
      great: "Great",
      good: "Good", 
      okay: "Okay",
      down: "Down",
      anxious: "Anxious",
      sad: "Sad"
    },
    moodValues: {
      great: "I'm feeling great today!",
      good: "I'm feeling pretty good",
      okay: "I'm feeling okay, just getting by",
      down: "I'm feeling down and a bit sad",
      anxious: "I'm feeling anxious and stressed",
      sad: "I'm feeling really sad today"
    }
  },
  id: {
    welcomeMessage: "Halo! Saya CalmMate, dan saya di sini untuk mendengarkan dan mendukung kamu. Bagaimana perasaanmu hari ini? Kamu bisa berbagi sebanyak atau sesedikit yang kamu mau - tidak ada penilaian di sini, hanya kasih sayang.",
    moodCheckIn: "Cek perasaan cepat:",
    chatPlaceholder: "Bagaimana perasaanmu hari ini? Ceritakan apa yang ada di pikiranmu...",
    gentleReminder: "Ingatlah untuk bersikap baik pada diri sendiri hari ini. Perasaanmu valid, dan mencari dukungan menunjukkan kekuatan.",
    supportResources: "Sumber Dukungan",
    crisisSupport: "Dukungan Krisis",
    crisisTextLine: "Layanan Teks Krisis",
    mentalHealthResources: "Sumber Kesehatan Mental",
    disclaimer: "CalmMate memberikan percakapan yang mendukung tetapi bukan pengganti perawatan kesehatan mental profesional. Jika mengalami kesulitan yang berkelanjutan, pertimbangkan untuk berbicara dengan terapis atau konselor berlisensi.",
    moods: {
      great: "Baik Sekali",
      good: "Baik",
      okay: "Biasa",
      down: "Sedih",
      anxious: "Cemas", 
      sad: "Murung"
    },
    moodValues: {
      great: "Saya merasa sangat baik hari ini!",
      good: "Saya merasa cukup baik",
      okay: "Saya merasa biasa saja",
      down: "Saya merasa sedih",
      anxious: "Saya merasa cemas dan stress",
      sad: "Saya merasa sangat sedih hari ini"
    }
  }
};

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    value = value?.[k];
  }
  
  return value || key;
};