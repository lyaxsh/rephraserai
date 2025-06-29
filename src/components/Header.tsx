import React from 'react';
import { Sparkles, Palette } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="relative z-10 text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <div className="relative">
          <Palette className="w-8 h-8 text-white" />
          <Sparkles className="w-4 h-4 text-gray-300 absolute -top-1 -right-1 animate-pulse" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
          Rephraser AI
        </h1>
      </div>
      <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
        Transform your text with AI-powered rewriting, summarizing, translation, and search. 
        <span className="block mt-1 text-white">Choose your style, unleash creativity.</span>
      </p>
    </header>
  );
};

export default Header;