import React from 'react';
import { Wand2, FileText, Maximize2, Minimize2, Languages, Search } from 'lucide-react';
import { FeatureOption } from '../types';
import { featureOptions } from '../data/features';

interface FeatureSelectorProps {
  selectedFeature: FeatureOption;
  onFeatureSelect: (feature: FeatureOption) => void;
}

const iconMap = {
  Wand2,
  FileText,
  Maximize2,
  Minimize2,
  Languages,
  Search
};

const FeatureSelector: React.FC<FeatureSelectorProps> = ({ selectedFeature, onFeatureSelect }) => {
  return (
    <div className="glass-card rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        Choose Your Action
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {featureOptions.map((feature) => {
          const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
          
          return (
            <button
              key={feature.id}
              onClick={() => onFeatureSelect(feature)}
              className={`group relative overflow-hidden rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105 h-[120px] flex items-center justify-center ${
                selectedFeature.id === feature.id 
                  ? 'ring-2 ring-white/50 bg-white/20' 
                  : 'bg-white/10 hover:bg-white/15'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-300/10 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-3 mb-2">
                  <IconComponent className="w-6 h-6 text-white" />
                  <h4 className="text-white font-medium">{feature.name}</h4>
                </div>
                <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-20">
                  <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-2">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {selectedFeature.id === feature.id && (
                <div className="absolute top-2 right-2">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureSelector;