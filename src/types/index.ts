export interface ToneOption {
  id: string;
  name: string;
  description: string;
  prompt: string;
  color: string;
  icon: string;
}

export interface FeatureOption {
  id: string;
  name: string;
  description: string;
  prompt: string;
  color: string;
  icon: string;
}

export interface SummaryType {
  id: string;
  name: string;
  description: string;
  prompt: string;
}

export interface TransformRequest {
  text: string;
  feature: FeatureOption;
  tone?: ToneOption;
  summaryType?: SummaryType;
  targetLanguage?: string;
  apiKey: string;
}

export interface TransformResponse {
  originalText: string;
  transformedText: string;
  feature: string;
  tone?: string;
  summaryType?: string;
  targetLanguage?: string;
  timestamp: number;
}

export interface ApiError {
  message: string;
  code?: string;
}