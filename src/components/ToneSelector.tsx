import React from 'react';
import { 
  Briefcase, 
  Coffee, 
  Palette, 
  Building2, 
  Heart, 
  GraduationCap, 
  Zap, 
  BookOpen, 
  TrendingUp, 
  Smile, 
  Megaphone, 
  Target 
} from 'lucide-react';
import { ToneOption } from '../types';
import { toneOptions } from '../data/tones';

interface ToneSelectorProps {
  selectedTone: ToneOption;
  onToneSelect: (tone: ToneOption) => void;
}

const iconMap = {
  Briefcase,
  Coffee,
  Palette,
  Building2,
  Heart,
  GraduationCap,
  Zap,
  BookOpen,
  TrendingUp,
  Smile,
  Megaphone,
  Target
};

const ToneSelector: React.FC<ToneSelectorProps> = ({ selectedTone, onToneSelect }) => {
  return (
    <div className="glass-card rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <span className="w-2 h-2 bg-white rounded-full"></span>
        Choose Your Tone
      </h3>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {toneOptions.map((tone) => {
          const IconComponent = iconMap[tone.icon as keyof typeof iconMap];
          
          return (
            <button
              key={tone.id}
              onClick={() => onToneSelect(tone)}
              className={`group relative overflow-hidden rounded-xl p-4 text-center transition-all duration-300 transform hover:scale-105 h-[100px] flex items-center justify-center ${
                selectedTone.id === tone.id 
                  ? 'ring-2 ring-white/50 bg-white/20' 
                  : 'bg-white/10 hover:bg-white/15'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-300/10 opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              
              <div className="relative z-10 flex flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-2 mb-1">
                  <IconComponent className="w-5 h-5 text-white" />
                  <h4 className="text-white font-medium text-center text-sm">{tone.name}</h4>
                </div>
                <div className="overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-16">
                  <p className="text-gray-400 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 px-1 text-center">
                    {tone.description}
                  </p>
                </div>
              </div>
              
              {selectedTone.id === tone.id && (
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

export default ToneSelector;