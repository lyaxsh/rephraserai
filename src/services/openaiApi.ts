import { TransformRequest, TransformResponse } from '../types';

const OPENAI_API_URL = 'xxx'; // Add API_URL here
const API_KEY = 'xxx'; // Add API_KEY here
const MODEL = 'gpt-4.1';

export class OpenAIApiService {
  private static formatText(text: string): string {
    // Convert markdown-style formatting to HTML-like formatting for display
    let formatted = text
      // Convert **bold** to proper bold formatting with larger size
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      // Convert *italic* to proper italic formatting
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      // Convert ### headings
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      // Convert ## headings
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      // Convert # headings
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      // Convert [text](url) links to proper HTML links
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
      // Convert bullet points
      .replace(/^- (.*$)/gm, '• $1')
      .replace(/^\* (.*$)/gm, '• $1')
      // Convert numbered lists
      .replace(/^(\d+)\. (.*$)/gm, '$1. $2')
      // Clean up multiple line breaks
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .replace(/\n/g, '\n');

    return formatted;
  }

  private static async callOpenAIAPI(request: TransformRequest): Promise<string> {
    let prompt = '';
    
    switch (request.feature.id) {
      case 'rewrite':
        prompt = `${request.tone?.prompt}: "${request.text}"

Please provide only the rewritten text without any additional explanation or formatting.`;
        break;
      case 'summarize':
        prompt = `${request.summaryType?.prompt}: "${request.text}"

Please provide only the summary without any additional explanation or formatting.`;
        break;
      case 'expand':
        prompt = `${request.feature.prompt}: "${request.text}"

Please provide only the expanded text without any additional explanation or formatting.`;
        break;
      case 'shorten':
        prompt = `${request.feature.prompt}: "${request.text}"

Please provide only the shortened text without any additional explanation or formatting.`;
        break;
      case 'translate':
        prompt = `${request.feature.prompt} ${request.targetLanguage}: "${request.text}"

Please provide only the translated text without any additional explanation or formatting.`;
        break;
      case 'search':
        prompt = `${request.feature.prompt}: "${request.text}"

Please provide a comprehensive, accurate, and helpful answer. Format your response using:
- **Bold text** for important points and headings
- Use markdown links like [text](url) for any URLs or references
- Use bullet points with - or * for lists
- Use proper line breaks for readability
- Structure your answer clearly with headings if needed
- DO NOT include any tables in your response - use bullet points or numbered lists instead
- Keep formatting simple and clean`;
        break;
      default:
        prompt = `Process this text: "${request.text}"`;
    }

    const requestBody = {
      model: MODEL,
      messages: [
        {
          role: 'user',
          content: prompt
        }
      ],
      temperature: 0.7,
      max_tokens: 1000,
    };

    try {
      const response = await fetch(OPENAI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${API_KEY}`,
        },
        body: JSON.stringify(requestBody)
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.error?.message || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      if (!data.choices || !data.choices[0] || !data.choices[0].message) {
        throw new Error('Invalid response format from OpenAI API');
      }

      const rawText = data.choices[0].message.content.trim();
      
      // Format the text for better display, especially for search results
      if (request.feature.id === 'search') {
        return this.formatText(rawText);
      }
      
      return rawText;
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`OpenAI API Error: ${error.message}`);
      }
      throw new Error('Unknown error occurred while calling OpenAI API');
    }
  }

  static async transformText(request: TransformRequest): Promise<TransformResponse> {
    if (!request.text.trim()) {
      throw new Error('Text to transform is required');
    }

    if (request.text.length > 2000) {
      throw new Error('Text is too long. Please limit to 2000 characters.');
    }

    try {
      const transformedText = await this.callOpenAIAPI(request);
      
      return {
        originalText: request.text,
        transformedText,
        feature: request.feature.name,
        tone: request.tone?.name,
        summaryType: request.summaryType?.name,
        targetLanguage: request.targetLanguage,
        timestamp: Date.now()
      };
    } catch (error) {
      if (error instanceof Error) {
        throw error;
      }
      throw new Error('Failed to transform text');
    }
  }

  static validateApiKey(apiKey: string): boolean {
    return apiKey.length > 5;
  }
}