import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "talkbuddy_srs_progress";

export interface PhraseProgress {
  phraseId: string;
  srsInterval: number;
  srsEaseFactor: number;
  srsNextReview: string;
  srsRepetitions: number;
  readCount: number;
  mastery: number;
  lastPracticedAt: number;
  dictationScore?: number;
  shadowingScore?: number;
  listeningScore?: number;
}

const SRS_DEFAULTS = {
  srsInterval: 1,
  srsEaseFactor: 2.5,
  srsRepetitions: 0,
};

const getToday = (): string => {
  return new Date().toISOString().slice(0, 10);
};

const ensureSrsFields = (p: PhraseProgress): PhraseProgress => {
  if (p.srsInterval !== undefined && p.srsEaseFactor !== undefined) return p;
  return {
    ...SRS_DEFAULTS,
    ...p,
    srsInterval: 1,
    srsEaseFactor: 2.5,
    srsRepetitions: 0,
  };
};

export const scoreToQuality = (score: number): number => {
  if (score < 50) return 1;
  if (score < 70) return 2;
  if (score < 85) return 3;
  if (score < 95) return 4;
  return 5;
};

export interface SrsResult {
  srsInterval: number;
  srsEaseFactor: number;
  srsNextReview: string;
  srsRepetitions: number;
}

export const calculateNextReview = (
  current: Pick<
    PhraseProgress,
    "srsInterval" | "srsEaseFactor" | "srsRepetitions"
  >,
  quality: number,
): SrsResult => {
  let { srsInterval, srsEaseFactor, srsRepetitions } = current;

  if (quality < 3) {
    srsRepetitions = 0;
    srsInterval = 1;
  } else {
    if (srsRepetitions === 0) {
      srsInterval = 1;
    } else if (srsRepetitions === 1) {
      srsInterval = 3;
    } else {
      srsInterval = Math.round(srsInterval * srsEaseFactor);
    }

    srsEaseFactor =
      srsEaseFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    srsEaseFactor = Math.max(1.3, srsEaseFactor);

    srsRepetitions++;
  }

  const next = new Date();
  next.setDate(next.getDate() + srsInterval);
  const srsNextReview = next.toISOString().slice(0, 10);

  return { srsInterval, srsEaseFactor, srsNextReview, srsRepetitions };
};

const calculateMastery = (p: PhraseProgress): number => {
  const scores = [
    p.dictationScore ?? 0,
    p.shadowingScore ?? 0,
    p.listeningScore ?? 0,
  ];
  const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
  const repetitionBonus = Math.min(p.srsRepetitions * 5, 25);
  return Math.min(100, Math.round(avgScore * 0.75 + repetitionBonus));
};

export const srsService = {
  loadProgress: async (): Promise<Record<string, PhraseProgress>> => {
    try {
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if (!data) return {};
      const parsed = JSON.parse(data) as Record<string, PhraseProgress>;
      Object.values(parsed).forEach((p) => ensureSrsFields(p));
      return parsed;
    } catch {
      return {};
    }
  },

  saveProgress: async (
    progress: Record<string, PhraseProgress>,
  ): Promise<void> => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  },

  recordScore: async (
    phraseId: string,
    mode: "dictation" | "shadowing" | "practice",
    score: number,
  ): Promise<PhraseProgress> => {
    const all = await srsService.loadProgress();
    const raw = all[phraseId] ?? {
      phraseId,
      ...SRS_DEFAULTS,
      readCount: 0,
      mastery: 0,
      lastPracticedAt: Date.now(),
    };
    const existing = ensureSrsFields(raw);

    const modeScoreUpdate =
      mode === "dictation"
        ? { dictationScore: Math.max(existing.dictationScore ?? 0, score) }
        : mode === "shadowing"
          ? { shadowingScore: Math.max(existing.shadowingScore ?? 0, score) }
          : { listeningScore: Math.max(existing.listeningScore ?? 0, score) };

    const quality = scoreToQuality(score);
    const srsUpdate = calculateNextReview(existing, quality);

    const updated: PhraseProgress = {
      ...existing,
      lastPracticedAt: Date.now(),
      ...modeScoreUpdate,
      ...srsUpdate,
    };
    updated.mastery = calculateMastery(updated);

    all[phraseId] = updated;
    await srsService.saveProgress(all);

    return updated;
  },

  recordRead: async (phraseId: string): Promise<PhraseProgress> => {
    const all = await srsService.loadProgress();
    const existing = ensureSrsFields(
      all[phraseId] ?? {
        phraseId,
        ...SRS_DEFAULTS,
        readCount: 0,
        mastery: 0,
        lastPracticedAt: Date.now(),
      },
    );

    const updated: PhraseProgress = {
      ...existing,
      readCount: existing.readCount + 1,
      lastPracticedAt: Date.now(),
    };
    updated.mastery = calculateMastery(updated);

    all[phraseId] = updated;
    await srsService.saveProgress(all);

    return updated;
  },

  getDueForReview: async (): Promise<PhraseProgress[]> => {
    const today = getToday();
    const all = await srsService.loadProgress();

    return Object.values(all)
      .map(ensureSrsFields)
      .filter((p) => p.srsNextReview <= today)
      .sort((a, b) => {
        if (a.srsNextReview < b.srsNextReview) return -1;
        if (a.srsNextReview > b.srsNextReview) return 1;
        return 0;
      });
  },

  getProgressByPhrase: async (
    phraseId: string,
  ): Promise<PhraseProgress | null> => {
    const all = await srsService.loadProgress();
    const p = all[phraseId];
    return p ? ensureSrsFields(p) : null;
  },

  getStats: async (): Promise<{
    totalLearned: number;
    dueToday: number;
    mastered: number;
    avgMastery: number;
  }> => {
    const all = await srsService.loadProgress();
    const due = await srsService.getDueForReview();
    const values = Object.values(all);
    const mastered = values.filter((p) => (p.mastery ?? 0) >= 80).length;
    const avgMastery =
      values.length > 0
        ? Math.round(
            values.reduce((sum, p) => sum + (p.mastery ?? 0), 0) /
              values.length,
          )
        : 0;

    return {
      totalLearned: values.filter((p) => (p.readCount ?? 0) > 0).length,
      dueToday: due.length,
      mastered,
      avgMastery,
    };
  },

  clearAll: async (): Promise<void> => {
    await AsyncStorage.removeItem(STORAGE_KEY);
  },
};
