import React from 'react';
import { X, Github, Mail, ExternalLink } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="glass-card rounded-2xl p-8 max-w-md w-full mx-4 animate-fadeIn">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Contact Me</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-200"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
            <Mail className="w-6 h-6 text-white flex-shrink-0" />
            <div>
              <h3 className="text-white font-medium mb-1">Email</h3>
              <a 
                href="mailto:lakshnahar.forwork@gmail.com"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm"
              >
                lakshnahar.forwork@gmail.com
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
            <Github className="w-6 h-6 text-white flex-shrink-0" />
            <div>
              <h3 className="text-white font-medium mb-1">GitHub</h3>
              <a 
                href="https://github.com/lyaxsh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm inline-flex items-center gap-1"
              >
                github.com/lyaxsh
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Feel free to reach out for collaborations, feedback, or just to say hi! 👋
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;