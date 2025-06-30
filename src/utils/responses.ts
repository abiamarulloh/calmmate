import { Language } from '../types';

export const generateResponse = (userMessage: string, language: Language): string => {
  const message = userMessage.toLowerCase();
  
  // Crisis detection for both languages
  const crisisKeywordsEn = ['hurt', 'harm', 'suicide', 'end it', 'kill myself', 'die'];
  const crisisKeywordsId = ['menyakiti', 'bunuh diri', 'mengakhiri', 'mati', 'ingin mati'];
  
  const isCrisis = crisisKeywordsEn.some(keyword => message.includes(keyword)) ||
                   crisisKeywordsId.some(keyword => message.includes(keyword));
  
  if (isCrisis) {
    return language === 'id' 
      ? "Saya sangat khawatir dengan kondisi kamu saat ini. Tolong segera hubungi layanan krisis seperti Hotline 119 ext 8 atau konselor profesional. Kamu tidak sendirian dalam menghadapi ini."
      : "I'm really concerned about you right now. Please reach out to a crisis helpline immediately - you can call 988 for the Suicide & Crisis Lifeline. You don't have to go through this alone, and there are people who want to help.";
  }
  
  if (language === 'id') {
    return generateIndonesianResponse(message);
  } else {
    return generateEnglishResponse(message);
  }
};

const generateIndonesianResponse = (message: string): string => {
  // Positive/good feelings
  if (message.includes('baik') || message.includes('senang') || message.includes('bahagia') || 
      message.includes('gembira') || message.includes('bagus')) {
    return "Senang sekali mendengar itu! Momen-momen baik seperti ini patut disyukuri. Coba tulis apa yang membuatmu merasa bahagia hari ini - bisa jadi pengingat indah saat hari-hari sulit datang.";
  }
  
  // Anxious/worried
  if (message.includes('cemas') || message.includes('khawatir') || message.includes('takut') || 
      message.includes('stress') || message.includes('tegang')) {
    return "Perasaan cemas itu sangat berat ya, dan wajar sekali kamu merasakannya. Coba tarik napas dalam-dalam - hirup 4 hitungan, tahan 4 hitungan, buang 6 hitungan. Jalan-jalan sebentar di luar juga bisa membantu menenangkan pikiran.";
  }
  
  // Sad/depressed
  if (message.includes('sedih') || message.includes('down') || message.includes('murung') || 
      message.includes('kosong') || message.includes('hampa')) {
    return "Aku mengerti perasaanmu, dan tidak apa-apa merasa sedih - perasaanmu sangat valid. Saat kesedihan terasa berat, coba dengarkan musik yang menenangkan atau lakukan gerakan ringan seperti stretching. Pertimbangkan untuk berbicara dengan orang yang kamu percaya.";
  }
  
  // Angry/frustrated
  if (message.includes('marah') || message.includes('kesal') || message.includes('jengkel') || 
      message.includes('frustrasi')) {
    return "Kemarahan yang kamu rasakan terdengar sangat intens, dan wajar sekali kamu merasa seperti itu. Coba tarik napas dalam atau lakukan gerakan ringan untuk melepaskan ketegangan. Menulis tentang apa yang mengganggu juga bisa membantu memproses perasaan ini.";
  }
  
  // Tired/exhausted
  if (message.includes('lelah') || message.includes('capek') || message.includes('kelelahan') || 
      message.includes('kewalahan')) {
    return "Terdengar sangat melelahkan ya, dan penting untuk mengakui saat kita sudah kehabisan energi. Bersikap lembutlah pada diri sendiri - bahkan hal kecil seperti minum air yang cukup atau istirahat sebentar bisa membantu. Istirahat itu bukan egois, tapi kebutuhan.";
  }
  
  // Lonely/isolated
  if (message.includes('kesepian') || message.includes('sendiri') || message.includes('terisolasi') || 
      message.includes('terputus')) {
    return "Kesepian memang sangat menyakitkan, dan aku ingin kamu tahu bahwa perasaanmu penting. Koneksi kecil pun bisa membantu - mungkin menghubungi teman lama, bergabung dengan komunitas, atau menghabiskan waktu di tempat umum seperti kafe.";
  }
  
  // Default Indonesian responses
  const defaultResponses = [
    "Terima kasih sudah berbagi denganku - butuh keberanian untuk mengungkapkan perasaan. Ingat bahwa semua emosi itu sementara dan valid. Luangkan waktu sebentar untuk dirimu hari ini, mungkin dengan bernapas tenang atau melakukan aktivitas yang menenangkan.",
    "Aku mendengarmu, dan apa yang kamu alami terdengar sangat menantang. Perasaanmu sangat valid. Kadang menulis pikiran atau jalan-jalan sebentar bisa membantu memproses apa yang kita rasakan. Kamu tidak sendirian menghadapi ini.",
    "Tidak apa-apa merasakan apa yang kamu rasakan sekarang. Emosi ini adalah bagian dari menjadi manusia, dan tidak akan berlangsung selamanya. Cobalah bersabar dengan dirimu sendiri, dan pertimbangkan melakukan hal kecil yang membuatmu nyaman."
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};

const generateEnglishResponse = (message: string): string => {
  // Positive/good feelings
  if (message.includes('good') || message.includes('great') || message.includes('happy') || 
      message.includes('excited') || message.includes('wonderful')) {
    return "That's wonderful to hear! It's beautiful when we can recognize and appreciate the good moments. Consider writing down what's making you feel this way - it can be a lovely reminder during tougher times.";
  }
  
  // Anxious/worried
  if (message.includes('anxious') || message.includes('worried') || message.includes('nervous') || 
      message.includes('stress')) {
    return "That sounds really overwhelming, and it's completely understandable to feel anxious sometimes. Try taking three slow, deep breaths - in for 4 counts, hold for 4, out for 6. Sometimes a short walk outside can also help calm those racing thoughts.";
  }
  
  // Sad/depressed
  if (message.includes('sad') || message.includes('down') || message.includes('depressed') || 
      message.includes('low') || message.includes('empty')) {
    return "I hear you, and it's okay to feel sad - your feelings are completely valid. When sadness feels heavy, sometimes gentle movement like stretching or listening to music that comforts you can provide a small shift. Consider reaching out to someone you trust when you're ready.";
  }
  
  // Angry/frustrated
  if (message.includes('angry') || message.includes('mad') || message.includes('frustrated') || 
      message.includes('irritated')) {
    return "That frustration sounds really intense, and it makes sense that you'd feel angry about that. Try some deep breathing or even gentle physical movement to help release that tension. Journaling about what's bothering you can also help you process these strong feelings.";
  }
  
  // Tired/exhausted
  if (message.includes('tired') || message.includes('exhausted') || message.includes('drained') || 
      message.includes('overwhelmed')) {
    return "That sounds incredibly draining, and it's important to acknowledge when we're running on empty. Be gentle with yourself right now - even small acts of self-care like staying hydrated or taking short breaks can help. Rest is not selfish, it's necessary.";
  }
  
  // Lonely/isolated
  if (message.includes('lonely') || message.includes('alone') || message.includes('isolated') || 
      message.includes('disconnected')) {
    return "Feeling lonely can be so painful, and I want you to know that your feelings matter. Even small connections can help - perhaps reaching out to an old friend, joining a community group, or even spending time in a public space like a café can ease that isolation.";
  }
  
  // Default English responses
  const defaultResponses = [
    "Thank you for sharing that with me - it takes courage to express how you're feeling. Remember that all emotions are temporary and valid. Consider taking a few minutes for yourself today, maybe with some gentle breathing or a peaceful activity you enjoy.",
    "I hear you, and what you're experiencing sounds really challenging. Your feelings are completely valid. Sometimes writing down our thoughts or taking a short walk can help us process what we're going through. You don't have to face this alone.",
    "It's okay to feel exactly how you're feeling right now. These emotions are part of being human, and they won't last forever. Try to be patient with yourself, and consider doing something small that brings you comfort - maybe listening to calming music or reaching out to someone who cares about you."
  ];
  
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
};