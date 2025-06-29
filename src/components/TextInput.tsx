import React from 'react';
import { FileText, Search } from 'lucide-react';

interface TextInputProps {
  text: string;
  onTextChange: (text: string) => void;
  maxLength?: number;
  isSearchMode?: boolean;
}

const TextInput: React.FC<TextInputProps> = ({ text, onTextChange, maxLength = 2000, isSearchMode = false }) => {
  const characterCount = text.length;
  const isNearLimit = characterCount > maxLength * 0.8;
  const isOverLimit = characterCount > maxLength;

  return (
    <div className="glass-card rounded-2xl p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {isSearchMode ? (
            <Search className="w-5 h-5 text-white" />
          ) : (
            <FileText className="w-5 h-5 text-white" />
          )}
          <h3 className="text-lg font-semibold text-white">
            {isSearchMode ? 'Your Search Query' : 'Your Text'}
          </h3>
        </div>
        
        <div className={`text-sm font-medium ${
          isOverLimit ? 'text-red-400' : isNearLimit ? 'text-yellow-400' : 'text-gray-400'
        }`}>
          {characterCount}/{maxLength}
        </div>
      </div>
      
      <textarea
        value={text}
        onChange={(e) => onTextChange(e.target.value)}
        placeholder={isSearchMode ? "Ask me anything... What would you like to know?" : "Enter the text you want to transform..."}
        className={`w-full h-32 bg-white/10 border rounded-xl px-4 py-3 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 ${
          isOverLimit 
            ? 'border-red-400/50 focus:ring-red-500' 
            : isSearchMode
            ? 'border-white/50 focus:ring-white/50'
            : 'border-white/20 focus:ring-white/50'
        }`}
        maxLength={maxLength}
      />
      
      {isOverLimit && (
        <p className="text-red-400 text-sm mt-2">
          Text exceeds maximum length. Please shorten your text.
        </p>
      )}
    </div>
  );
};

export default TextInput;