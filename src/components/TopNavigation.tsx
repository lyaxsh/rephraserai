import React, { useState, useEffect } from 'react';
import { Home, Mail, Github } from 'lucide-react';

interface TopNavigationProps {
  onContactClick: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ onContactClick }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop < 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300">
      <div className="flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full shadow-xl">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 px-4 py-2 text-white hover:text-gray-300 transition-colors duration-200 rounded-full hover:bg-white/10"
        >
          <Home className="w-4 h-4" />
          <span className="text-sm font-medium">Home</span>
        </button>
        
        <div className="w-px h-4 bg-white/30" />
        
        <button
          onClick={onContactClick}
          className="flex items-center gap-2 px-4 py-2 text-white hover:text-gray-300 transition-colors duration-200 rounded-full hover:bg-white/10"
        >
          <Mail className="w-4 h-4" />
          <span className="text-sm font-medium">Contact</span>
        </button>
      </div>
    </div>
  );
};

export default TopNavigation;