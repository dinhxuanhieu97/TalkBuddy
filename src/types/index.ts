// ============================================================
// TalkBuddy Core Types
// ============================================================

/** Scene categories for organizing learning content (17 categories) */
export type SceneCategory =
  | "airport"
  | "hotel"
  | "restaurant"
  | "shopping"
  | "transport"
  | "medical"
  | "social"
  | "emergency"
  | "entertainment"
  | "banking"
  | "accommodation"
  | "daily-life"
  | "foundation"
  | "housing"
  | "government"
  | "education"
  | "workplace";

/** Journey phase — where in the travel timeline this scene occurs */
export type JourneyPhase =
  | "pre-departure"
  | "airport"
  | "in-flight"
  | "arrival"
  | "transit"
  | "check-in"
  | "daily"
  | "emergency"
  | "return";

/** Scene priority — how likely a traveler needs this */
export type ScenePriority = "must" | "likely" | "rare";

/** Content quality tier */
export type ContentTier = "expert" | "ai_verified" | "ai_generated";

/** Learning mastery level */
export type MasteryLevel = "unknown" | "learning" | "familiar" | "mastered";

/** Voice accent options */
export type VoiceAccent = "en-US" | "en-GB" | "en-AU";

/** Speech speed options */
export type SpeechSpeed = "slow" | "normal" | "fast";

// ============================================================
// Scene & Phrase
// ============================================================

export interface Scene {
  id: string;
  category: SceneCategory;
  titleZh: string;
  titleEn: string;
  description?: string;
  contentTier: ContentTier;
  phrases: Phrase[];
}

export interface Phrase {
  id: string;
  sceneId: string;
  textEn: string;
  textZh: string;
  formalVersion?: string;
  casualVersion?: string;
  culturalNote?: string;
  words: WordInfo[];
}

export interface WordInfo {
  text: string;
  phonetic: string;
  meaningZh: string;
  startTime?: number;
  endTime?: number;
}

// ============================================================
// AI Scene Generation
// ============================================================

export interface SceneGenerateRequest {
  description: string;
  context?: SceneCategory;
  locale?: string;
}

export interface SceneGenerateResponse {
  scene: {
    titleZh: string;
    titleEn: string;
    category: SceneCategory;
  };
  phrases: {
    textEn: string;
    textZh: string;
    formalVersion?: string;
    casualVersion?: string;
    culturalNote?: string;
  }[];
}

// ============================================================
// TTS
// ============================================================

export interface TTSRequest {
  text: string;
  accent: VoiceAccent;
  speed: SpeechSpeed;
}

export interface TTSResponse {
  audioUrl: string;
  wordTimestamps: {
    word: string;
    startMs: number;
    endMs: number;
  }[];
}

// ============================================================
// Pronunciation Assessment
// ============================================================

export interface PronunciationAssessmentRequest {
  referenceText: string;
  audio: string; // base64 encoded WAV audio
  locale: "en-US" | "en-GB" | "en-AU";
}

export interface PronunciationScores {
  accuracy: number; // 0-100
  fluency: number; // 0-100
  completeness: number; // 0-100
  pronunciation: number; // 0-100 overall
}

export interface PronunciationWordResult {
  word: string;
  accuracy: number; // 0-100
  error: "None" | "Omission" | "Insertion" | "Mispronunciation";
}

export interface PronunciationAssessmentResponse {
  recognizedText: string;
  scores: PronunciationScores;
  words: PronunciationWordResult[];
}

// ============================================================
// Word Lookup
// ============================================================

export interface WordLookupResponse {
  word: string;
  phonetic: string;
  meaningZh: string;
  partOfSpeech: string;
  examples: {
    en: string;
    zh: string;
  }[];
}

// ============================================================
// Learning Record
// ============================================================

export interface LearningRecord {
  id: string;
  phraseId: string;
  masteryLevel: MasteryLevel;
  nextReviewAt: Date;
  reviewCount: number;
  lastScore?: number;
  learnedAt: Date;
  location?: string;
}

// ============================================================
// UI State
// ============================================================

export type LoadingState = "idle" | "loading" | "success" | "error";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
}
