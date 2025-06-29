import React from 'react';
import { Wand2, Loader2, FileText, Maximize2, Minimize2, Languages, Search } from 'lucide-react';
import { FeatureOption } from '../types';

interface TransformButtonProps {
  onClick: () => void;
  disabled: boolean;
  loading: boolean;
  feature: FeatureOption;
}

const iconMap = {
  Wand2,
  FileText,
  Maximize2,
  Minimize2,
  Languages,
  Search
};

const TransformButton: React.FC<TransformButtonProps> = ({ onClick, disabled, loading, feature }) => {
  const IconComponent = iconMap[feature.icon as keyof typeof iconMap] || Wand2;
  
  const getButtonText = () => {
    if (loading) return 'Processing...';
    
    switch (feature.id) {
      case 'rewrite': return 'Rewrite Text';
      case 'summarize': return 'Summarize Text';
      case 'expand': return 'Expand Text';
      case 'shorten': return 'Shorten Text';
      case 'translate': return 'Translate Text';
      case 'search': return 'Search with AI';
      default: return 'Transform Text';
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`group relative w-full md:w-auto mx-auto flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform ${
        disabled || loading
          ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
          : 'bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-white hover:scale-105 hover:shadow-xl hover:shadow-white/25'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-200/20 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      
      {loading ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>{getButtonText()}</span>
        </>
      ) : (
        <>
          <IconComponent className="w-5 h-5" />
          <span>{getButtonText()}</span>
        </>
      )}
    </button>
  );
};

export default TransformButton;