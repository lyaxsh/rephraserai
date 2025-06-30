import React, { useState, useEffect, useRef } from 'react';
import { Copy, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { TransformResponse } from '../types';

interface ResultDisplayProps {
  result: TransformResponse | null;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  const [copied, setCopied] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);

  // Scroll to results when new result appears
  useEffect(() => {
    if (result && resultRef.current) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start',
          inline: 'nearest'
        });
      }, 100);
    }
  }, [result]);

  if (!result) return null;

  const copyToClipboard = async () => {
    try {
      // Remove HTML tags for clipboard
      const textToCopy = result.transformedText
        .replace(/<strong>(.*?)<\/strong>/g, '$1')
        .replace(/<em>(.*?)<\/em>/g, '$1')
        .replace(/<h[1-6]>(.*?)<\/h[1-6]>/g, '$1')
        .replace(/<a[^>]*>(.*?)<\/a>/g, '$1')
        .replace(/<[^>]*>/g, '');
      
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy text:', error);
    }
  };

  const getResultLabel = () => {
    switch (result.feature) {
      case 'Rewrite': return `Rewritten (${result.tone})`;
      case 'Summarize': return `Summary (${result.summaryType})`;
      case 'Expand': return 'Expanded';
      case 'Shorten': return 'Shortened';
      case 'Translate': return `Translated to ${result.targetLanguage}`;
      case 'AI Search': return 'AI Search Result';
      default: return 'Result';
    }
  };

  const formatDisplayText = (text: string) => {
    // Convert HTML-like formatting back to JSX for display
    const parts = text.split(/(<strong>.*?<\/strong>|<em>.*?<\/em>|<h[1-6]>.*?<\/h[1-6]>|<a[^>]*>.*?<\/a>)/);
    
    return parts.map((part, index) => {
      if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
        const content = part.slice(8, -9);
        return <span key={index} className="font-bold text-white text-xl">{content}</span>;
      }
      if (part.startsWith('<em>') && part.endsWith('</em>')) {
        return <em key={index} className="italic text-gray-300">{part.slice(4, -5)}</em>;
      }
      if (part.match(/<h[1-6]>.*?<\/h[1-6]>/)) {
        const content = part.replace(/<h[1-6]>(.*?)<\/h[1-6]>/, '$1');
        return <div key={index} className="font-bold text-2xl text-white mt-4 mb-2 border-b border-white/20 pb-1">{content}</div>;
      }
      if (part.match(/<a[^>]*>.*?<\/a>/)) {
        const href = part.match(/href="([^"]*)"/) ? part.match(/href="([^"]*)"/)?.[1] : '#';
        const content = part.replace(/<a[^>]*>(.*?)<\/a>/, '$1');
        return (
          <a 
            key={index} 
            href={href} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-1 transition-colors duration-200"
          >
            {content}
            <ExternalLink className="w-3 h-3" />
          </a>
        );
      }
      
      // Handle line breaks and preserve formatting
      return part.split('\n').map((line, lineIndex) => (
        <React.Fragment key={`${index}-${lineIndex}`}>
          {lineIndex > 0 && <br />}
          {line}
        </React.Fragment>
      ));
    });
  };

  return (
    <div ref={resultRef} className="glass-card rounded-2xl p-6 mb-8 animate-fadeIn">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
        <h3 className="text-lg font-semibold text-white">Transformed Text</h3>
        <span className="px-3 py-1 bg-white/20 border border-white/30 rounded-full text-sm text-white">
          {result.feature}
        </span>
      </div>

      <div className="space-y-6">
        {/* Original Text */}
        <div className="relative">
          <h4 className="text-gray-400 text-sm font-medium mb-2 flex items-center gap-2">
            <span className="w-1 h-1 bg-gray-400 rounded-full" />
            {result.feature === 'AI Search' ? 'Query' : 'Original'}
          </h4>
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <p className="text-gray-300 leading-relaxed">{result.originalText}</p>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center">
          <div className="p-2 bg-white/20 rounded-full">
            <ArrowRight className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Transformed Text */}
        <div className="relative">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white text-sm font-medium flex items-center gap-2">
              <span className="w-1 h-1 bg-white rounded-full" />
              {getResultLabel()}
            </h4>
            <button
              onClick={copyToClipboard}
              className="flex items-center gap-2 px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-sm text-gray-300 hover:text-white transition-all duration-200"
            >
              {copied ? (
                <>
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-green-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-xl p-4">
            <div className="text-white leading-relaxed whitespace-pre-wrap">
              {formatDisplayText(result.transformedText)}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-400 text-center">
        Generated on {new Date(result.timestamp).toLocaleString()}
      </div>
    </div>
  );
};

export default ResultDisplay;
