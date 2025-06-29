import React from 'react';
import { List } from 'lucide-react';
import { SummaryType } from '../types';
import { summaryTypes } from '../data/features';

interface SummaryTypeSelectorProps {
  selectedSummaryType: SummaryType;
  onSummaryTypeSelect: (summaryType: SummaryType) => void;
  show: boolean;
}

const SummaryTypeSelector: React.FC<SummaryTypeSelectorProps> = ({ 
  selectedSummaryType, 
  onSummaryTypeSelect, 
  show 
}) => {
  if (!show) return null;

  return (
    <div className="glass-card rounded-2xl p-6 mb-8 animate-fadeIn">
      <div className="flex items-center gap-3 mb-4">
        <List className="w-5 h-5 text-white" />
        <h3 className="text-lg font-semibold text-white">Summary Type</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {summaryTypes.map((summaryType) => (
          <button
            key={summaryType.id}
            onClick={() => onSummaryTypeSelect(summaryType)}
            className={`group relative overflow-hidden rounded-xl p-4 text-left transition-all duration-300 transform hover:scale-105 ${
              selectedSummaryType.id === summaryType.id 
                ? 'ring-2 ring-white/50 bg-white/20' 
                : 'bg-white/10 hover:bg-white/15'
            }`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-300/10 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
            
            <div className="relative z-10">
              <h4 className="text-white font-medium mb-1">{summaryType.name}</h4>
              <p className="text-gray-400 text-sm line-clamp-2">{summaryType.description}</p>
            </div>
            
            {selectedSummaryType.id === summaryType.id && (
              <div className="absolute top-2 right-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SummaryTypeSelector;