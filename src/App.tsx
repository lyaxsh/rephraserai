import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TopNavigation from './components/TopNavigation';
import ContactModal from './components/ContactModal';
import FeatureSelector from './components/FeatureSelector';
import ToneSelector from './components/ToneSelector';
import SummaryTypeSelector from './components/SummaryTypeSelector';
import LanguageSelector from './components/LanguageSelector';
import TextInput from './components/TextInput';
import TransformButton from './components/TransformButton';
import ResultDisplay from './components/ResultDisplay';
import ErrorMessage from './components/ErrorMessage';
import { OpenAIApiService } from './services/openaiApi';
import { ToneOption, FeatureOption, SummaryType, TransformResponse } from './types';
import { toneOptions } from './data/tones';
import { featureOptions, summaryTypes } from './data/features';

function App() {
  const [inputText, setInputText] = useState('');
  const [selectedFeature, setSelectedFeature] = useState<FeatureOption>(featureOptions[0]);
  const [selectedTone, setSelectedTone] = useState<ToneOption>(toneOptions[0]);
  const [selectedSummaryType, setSelectedSummaryType] = useState<SummaryType>(summaryTypes[0]);
  const [selectedLanguage, setSelectedLanguage] = useState('Spanish');
  const [result, setResult] = useState<TransformResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showContactModal, setShowContactModal] = useState(false);

  // Clear text and results when feature changes
  useEffect(() => {
    setInputText('');
    setResult(null);
    setError('');
  }, [selectedFeature.id]);

  const handleTransform = async () => {
    if (!inputText.trim()) {
      setError('Please enter some text to transform.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await OpenAIApiService.transformText({
        text: inputText,
        feature: selectedFeature,
        tone: selectedFeature.id === 'rewrite' ? selectedTone : undefined,
        summaryType: selectedFeature.id === 'summarize' ? selectedSummaryType : undefined,
        targetLanguage: selectedFeature.id === 'translate' ? selectedLanguage : undefined,
        apiKey: 'nk-dune'
      });
      
      setResult(response);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const canTransform = inputText.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Elegant monochrome background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-white/5 via-gray-500/5 to-white/3 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-gray-400/5 via-white/5 to-gray-600/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-white/8 to-gray-300/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-gray-500/8 to-white/8 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      <TopNavigation onContactClick={() => setShowContactModal(true)} />
      <ContactModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />

      <div className="relative z-10 container mx-auto px-4 pt-24 pb-8 max-w-4xl">
        <Header />
        
        <div className="space-y-8">
          <FeatureSelector selectedFeature={selectedFeature} onFeatureSelect={setSelectedFeature} />
          
          {selectedFeature.id === 'rewrite' && (
            <ToneSelector selectedTone={selectedTone} onToneSelect={setSelectedTone} />
          )}
          
          <SummaryTypeSelector 
            selectedSummaryType={selectedSummaryType} 
            onSummaryTypeSelect={setSelectedSummaryType}
            show={selectedFeature.id === 'summarize'}
          />
          
          <LanguageSelector 
            selectedLanguage={selectedLanguage} 
            onLanguageSelect={setSelectedLanguage}
            show={selectedFeature.id === 'translate'}
          />
          
          <TextInput 
            text={inputText} 
            onTextChange={setInputText} 
            isSearchMode={selectedFeature.id === 'search'}
          />
          
          {error && (
            <ErrorMessage message={error} onDismiss={() => setError('')} />
          )}
          
          <div className="flex justify-center">
            <TransformButton 
              onClick={handleTransform}
              disabled={!canTransform}
              loading={loading}
              feature={selectedFeature}
            />
          </div>
          
          <ResultDisplay result={result} />
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>
            Built with 💜 by{' '}
            <a 
              href="https://github.com/lyaxsh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white underline transition-colors duration-200"
            >
              lyaxsh
            </a>
          </p>
          <p className="mt-1 text-gray-500">
            Powered by React, TypeScript & OpenAI GPT-4
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;