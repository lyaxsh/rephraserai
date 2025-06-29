import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { languageOptions } from '../data/features';

interface LanguageSelectorProps {
  selectedLanguage: string;
  onLanguageSelect: (language: string) => void;
  show: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  selectedLanguage, 
  onLanguageSelect, 
  show 
}) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!show) return null;

  const selectedLang = languageOptions.find(lang => lang.name === selectedLanguage);

  return (
    <div className="glass-card rounded-2xl p-6 mb-8 animate-fadeIn relative z-40">
      <div className="flex items-center gap-3 mb-4">
        <Globe className="w-5 h-5 text-white" />
        <h3 className="text-lg font-semibold text-white">Target Language</h3>
      </div>
      
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-white/10 hover:bg-white/15 border border-white/20 rounded-xl text-white transition-all duration-200"
        >
          <span className="font-medium">{selectedLang?.name || 'Select Language'}</span>
          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 max-h-64 overflow-y-auto bg-black/95 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl z-50">
            <div className="p-2">
              {languageOptions.map((language) => (
                <button
                  key={language.code}
                  onClick={() => {
                    onLanguageSelect(language.name);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedLanguage === language.name
                      ? 'bg-white/20 text-white ring-1 ring-white/50'
                      : 'text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {language.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;