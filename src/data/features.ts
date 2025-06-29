import { FeatureOption, SummaryType } from '../types';

export const featureOptions: FeatureOption[] = [
  {
    id: 'rewrite',
    name: 'Rewrite',
    description: 'Change the tone and style of your text',
    prompt: 'Rewrite this text with the specified tone',
    color: 'from-white to-gray-200',
    icon: 'Wand2'
  },
  {
    id: 'summarize',
    name: 'Summarize',
    description: 'Create different types of summaries',
    prompt: 'Summarize this text',
    color: 'from-white to-gray-200',
    icon: 'FileText'
  },
  {
    id: 'expand',
    name: 'Expand',
    description: 'Add more detail and depth to your text',
    prompt: 'Expand this text by adding more detail, examples, and explanations while maintaining the original meaning',
    color: 'from-white to-gray-200',
    icon: 'Maximize2'
  },
  {
    id: 'shorten',
    name: 'Shorten',
    description: 'Make your text more concise and direct',
    prompt: 'Shorten this text while preserving all the key information and main points',
    color: 'from-white to-gray-200',
    icon: 'Minimize2'
  },
  {
    id: 'translate',
    name: 'Translate',
    description: 'Translate your text to different languages',
    prompt: 'Translate this text to',
    color: 'from-white to-gray-200',
    icon: 'Languages'
  },
  {
    id: 'search',
    name: 'AI Search',
    description: 'Get AI-powered answers and information',
    prompt: 'Provide a comprehensive and accurate answer to this question or search query',
    color: 'from-white to-gray-200',
    icon: 'Search'
  }
];

export const summaryTypes: SummaryType[] = [
  {
    id: 'tldr',
    name: 'TL;DR',
    description: 'Ultra-short summary in 1-2 sentences',
    prompt: 'Create a TL;DR (Too Long; Didn\'t Read) summary of this text in 1-2 sentences'
  },
  {
    id: 'brief',
    name: 'Brief Summary',
    description: 'Concise overview in a short paragraph',
    prompt: 'Create a brief summary of this text in a short paragraph'
  },
  {
    id: 'detailed',
    name: 'Detailed Summary',
    description: 'Comprehensive summary with key points',
    prompt: 'Create a detailed summary of this text that covers all the main points and key information'
  },
  {
    id: 'bullets',
    name: 'Bullet Points',
    description: 'Key points in bullet format',
    prompt: 'Summarize this text as bullet points, highlighting the key information and main ideas'
  }
];

export const languageOptions = [
  // English and Major Indian Languages
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'Hindi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'ta', name: 'Tamil' },
  { code: 'te', name: 'Telugu' },
  { code: 'mr', name: 'Marathi' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'kn', name: 'Kannada' },
  { code: 'or', name: 'Odia' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'as', name: 'Assamese' },
  { code: 'ur', name: 'Urdu' },
  { code: 'sa', name: 'Sanskrit' },
  { code: 'kok', name: 'Konkani' },
  { code: 'mai', name: 'Maithili' },
  { code: 'doi', name: 'Dogri' },
  { code: 'brx', name: 'Bodo' },
  { code: 'sat', name: 'Santali' },
  { code: 'ks', name: 'Kashmiri' },
  
  // Major European Languages
  { code: 'es', name: 'Spanish' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'it', name: 'Italian' },
  { code: 'pt', name: 'Portuguese' },
  { code: 'ru', name: 'Russian' },
  { code: 'nl', name: 'Dutch' },
  { code: 'uk', name: 'Ukrainian' },
  { code: 'pl', name: 'Polish' },
  { code: 'ro', name: 'Romanian' },
  { code: 'hu', name: 'Hungarian' },
  { code: 'el', name: 'Greek' },
  { code: 'cs', name: 'Czech' },
  { code: 'sk', name: 'Slovak' },
  { code: 'sr', name: 'Serbian' },
  
  // Asian Languages
  { code: 'zh-cn', name: 'Chinese (Simplified)' },
  { code: 'zh-tw', name: 'Chinese (Traditional)' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'th', name: 'Thai' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'id', name: 'Indonesian' },
  { code: 'ms', name: 'Malay' },
  { code: 'tl', name: 'Filipino (Tagalog)' },
  { code: 'ne', name: 'Nepali' },
  
  // Middle Eastern and African Languages
  { code: 'ar', name: 'Arabic' },
  { code: 'tr', name: 'Turkish' },
  { code: 'he', name: 'Hebrew' },
  { code: 'fa', name: 'Persian (Farsi)' },
  { code: 'sw', name: 'Swahili' }
];