import { ToneOption } from '../types';

export const toneOptions: ToneOption[] = [
  {
    id: 'formal',
    name: 'Formal',
    description: 'Professional and respectful tone',
    prompt: 'Rewrite this text in a formal, professional tone suitable for business communication',
    color: 'from-white to-gray-200',
    icon: 'Briefcase'
  },
  {
    id: 'casual',
    name: 'Casual',
    description: 'Relaxed and conversational',
    prompt: 'Rewrite this text in a casual, friendly, conversational tone',
    color: 'from-white to-gray-200',
    icon: 'Coffee'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Imaginative and expressive',
    prompt: 'Rewrite this text in a creative, imaginative, and expressive way',
    color: 'from-white to-gray-200',
    icon: 'Palette'
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Clear and business-oriented',
    prompt: 'Rewrite this text in a clear, concise, professional manner',
    color: 'from-white to-gray-200',
    icon: 'Building2'
  },
  {
    id: 'friendly',
    name: 'Friendly',
    description: 'Warm and approachable',
    prompt: 'Rewrite this text in a warm, friendly, and approachable tone',
    color: 'from-white to-gray-200',
    icon: 'Heart'
  },
  {
    id: 'academic',
    name: 'Academic',
    description: 'Scholarly and analytical',
    prompt: 'Rewrite this text in an academic, scholarly tone with proper analysis',
    color: 'from-white to-gray-200',
    icon: 'GraduationCap'
  },
  {
    id: 'genz',
    name: 'GenZ',
    description: 'Fun and trendy with slang',
    prompt: 'Rewrite this text using GenZ slang, internet memes, and emojis. Make it sound trendy and fun like "that\'s lowkey fire 🔥"',
    color: 'from-white to-gray-200',
    icon: 'Zap'
  },
  {
    id: 'simplified',
    name: 'Simplified',
    description: 'Easy to understand',
    prompt: 'Rewrite this text using simple, easy-to-understand English suitable for non-native speakers or young readers',
    color: 'from-white to-gray-200',
    icon: 'BookOpen'
  },
  {
    id: 'corporate',
    name: 'Corporate',
    description: 'Polished and persuasive',
    prompt: 'Rewrite this text in a polished, confident, and persuasive corporate tone suitable for client-facing content',
    color: 'from-white to-gray-200',
    icon: 'TrendingUp'
  },
  {
    id: 'sarcastic',
    name: 'Sarcastic',
    description: 'Humorous and witty',
    prompt: 'Rewrite this text with a sarcastic, witty, and humorous tone that\'s entertaining and snarky',
    color: 'from-white to-gray-200',
    icon: 'Smile'
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Persuasive with call-to-action',
    prompt: 'Rewrite this text in a persuasive marketing tone with call-to-action style that highlights product/service value',
    color: 'from-white to-gray-200',
    icon: 'Megaphone'
  },
  {
    id: 'motivational',
    name: 'Motivational',
    description: 'Encouraging and positive',
    prompt: 'Rewrite this text in a motivational and inspirational tone with encouraging, positive language suitable for speeches or bios',
    color: 'from-white to-gray-200',
    icon: 'Target'
  }
];