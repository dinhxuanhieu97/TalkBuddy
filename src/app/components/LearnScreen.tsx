import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { speak, stopSpeaking } from "../../services/TTSService";
import { useSavedPhrasesStore } from "../../stores/savedPhrasesStore";
import PracticeMode from "./PracticeMode";
import DictationMode from "./DictationMode";
import ShadowMode from "./ShadowMode";
import { useT } from "../../lib/i18n";
import {
  PRESET_SCENES,
  getScenesByCategory,
  getSceneById,
  getAllPhrasesFromScene,
  type PresetScene,
  type PresetPhrase,
} from "../../data/preset-scenes";
import logger from "../../lib/logger";
import contentService, { type Category } from "../../services/contentService";
import {
  VOICE_SETTINGS_STORAGE,
  DEFAULT_VOICE_SETTINGS,
  type VoiceSettings,
} from "../../types/voice";

// Custom debounce hook
function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// Pre-built search index for fast lookups
interface SearchIndexEntry {
  id: string;
  searchText: string;
  scene: PresetScene;
}

const searchIndex: SearchIndexEntry[] = PRESET_SCENES.map((scene) => ({
  id: scene.id,
  searchText:
    `${scene.titleZh} ${scene.titleEn} ${scene.category} ${scene.description}`.toLowerCase(),
  scene,
}));

function searchScenes(query: string): PresetScene[] {
  const q = query.toLowerCase().trim();
  if (!q || q.length < 2) return [];

  return searchIndex
    .filter((entry) => entry.searchText.includes(q))
    .map((entry) => entry.scene);
}

// Context ID to translation key mapping
const CONTEXT_ID_TO_KEY: Record<string, string> = {
  airport: "learn.category.airport",
  medical: "learn.category.medical",
  hotel: "learn.category.hotel",
  restaurant: "learn.category.restaurant",
  emergency: "learn.category.emergency",
  shopping: "learn.category.shopping",
  transport: "learn.category.transport",
  banking: "learn.category.banking",
  accommodation: "learn.category.accommodation",
  social: "learn.category.social",
  entertainment: "learn.category.entertainment",
  foundation: "learn.category.foundation",
  "daily-life": "learn.category.dailyLife",
  housing: "learn.category.housing",
  government: "learn.category.government",
  education: "learn.category.education",
  workplace: "learn.category.workplace",
};

// Icon mapping for categories (fallback if not provided by API)
const CATEGORY_ICONS: Record<string, { icon: string; ionicon: string }> = {
  airport: { icon: "airplane", ionicon: "airplane" },
  medical: { icon: "medical", ionicon: "medical" },
  hotel: { icon: "bed", ionicon: "bed" },
  restaurant: { icon: "restaurant", ionicon: "restaurant" },
  emergency: { icon: "shield", ionicon: "shield-checkmark" },
  shopping: { icon: "cart", ionicon: "cart" },
  transport: { icon: "bus", ionicon: "bus" },
  banking: { icon: "business", ionicon: "business" },
  accommodation: { icon: "home", ionicon: "home" },
  social: { icon: "people", ionicon: "people" },
  entertainment: { icon: "film", ionicon: "film" },
  foundation: { icon: "book", ionicon: "book" },
  "daily-life": { icon: "calendar", ionicon: "calendar" },
  housing: { icon: "hammer", ionicon: "hammer" },
  government: { icon: "government", ionicon: "business" },
  education: { icon: "school", ionicon: "school" },
  workplace: { icon: "briefcase", ionicon: "briefcase" },
};

// Default CONTEXTS (fallback when API unavailable)
const DEFAULT_CONTEXTS = Object.entries(CATEGORY_ICONS).map(
  ([id, { icon, ionicon }]) => ({
    id,
    icon,
    ionicon: ionicon as React.ComponentProps<typeof Ionicons>["name"],
  }),
);

// Get scenes by category using preset-scenes.ts helpers
const getScenesForCategory = (categoryId: string): PresetScene[] => {
  return getScenesByCategory(categoryId);
};

type Phrase = {
  id: string;
  en: string;
  vi: string;
  level?: "Basic" | "Intermediate" | "Advanced" | "";
  contextLabel: string;
  speaker: "you" | "them";
  role?: string;
  themEn?: string;
  themVi?: string;
};

// Convert difficulty from web format to display format
function getDifficultyLabel(
  difficulty: string,
): "Basic" | "Intermediate" | "Advanced" | "" {
  if (!difficulty || difficulty.trim() === "") {
    return "";
  }
  switch (difficulty) {
    case "basic":
      return "Basic";
    case "intermediate":
      return "Intermediate";
    case "advanced":
      return "Advanced";
    default:
      return "";
  }
}

// Convert PresetScene to Phrase format - include both "you" and "them" turns
function convertScenesToPhrases(scenes: PresetScene[]): Phrase[] {
  const phrases: Phrase[] = [];

  scenes.forEach((scene) => {
    scene.flows.forEach((flow) => {
      flow.turns.forEach((turn, index) => {
        if (turn.speaker === "you") {
          // Find the next "them" turn to show as context
          const nextThemTurn = flow.turns[index + 1];
          phrases.push({
            id: `${scene.id}-${flow.id}-${index}`,
            en: turn.textEn,
            vi: turn.textZh || "",
            level: getDifficultyLabel(flow.difficulty),
            contextLabel: scene.titleEn,
            speaker: "you",
            themEn:
              nextThemTurn?.speaker === "them"
                ? nextThemTurn.textEn
                : undefined,
            themVi:
              nextThemTurn?.speaker === "them"
                ? nextThemTurn.textZh
                : undefined,
          });
        } else if (turn.speaker === "them") {
          phrases.push({
            id: `${scene.id}-${flow.id}-${index}`,
            en: turn.textEn,
            vi: turn.textZh || "",
            level: getDifficultyLabel(flow.difficulty),
            contextLabel: scene.titleEn,
            speaker: "them",
            role: turn.role,
          });
        }
      });
    });
  });

  return phrases;
}

// Lazy load phrases for a specific context
function getPhrasesForContext(contextId: string): Phrase[] {
  const scenes = getScenesByCategory(contextId);
  if (!scenes) return [];
  return convertScenesToPhrases(scenes);
}

// Get all phrases for search (lazy loaded)
function getAllPhrases(): Phrase[] {
  return convertScenesToPhrases(PRESET_SCENES);
}

interface LearnScreenProps {
  onNavigateToProfile?: () => void;
}

export default function LearnScreen({ onNavigateToProfile }: LearnScreenProps) {
  const insets = useSafeAreaInsets();
  const t = useT();
  const [selectedContext, setSelectedContext] = useState<string | null>(null);
  const [selectedScene, setSelectedScene] = useState<PresetScene | null>(null);

  // Close category and stop all audio
  const handleCloseCategory = useCallback(async () => {
    await stopSpeaking();
    setSelectedContext(null);
    setSelectedScene(null);
  }, []);

  // Voice settings state - loaded from AsyncStorage
  const [voiceSettings, setVoiceSettings] = useState<VoiceSettings>(
    DEFAULT_VOICE_SETTINGS["en-US"],
  );

  // Load voice settings from AsyncStorage on mount
  useEffect(() => {
    const loadVoiceSettings = async () => {
      try {
        const saved = await AsyncStorage.getItem(
          VOICE_SETTINGS_STORAGE.localStorageKey,
        );
        if (saved) {
          const parsed = JSON.parse(saved);
          if (parsed.accent && parsed.speed) {
            setVoiceSettings({ ...DEFAULT_VOICE_SETTINGS["en-US"], ...parsed });
          }
        }
      } catch (error) {
        logger.warn("Failed to load voice settings:", error);
      }
    };
    loadVoiceSettings();
  }, []);

  // Convert voice settings to TTS format (accent: US->en-US, speed: 0.75->slow)
  const accentMap: Record<string, string> = {
    US: "en-US",
    UK: "en-GB",
    AU: "en-AU",
  };
  const speedMap: Record<number, string> = {
    0.75: "slow",
    1.0: "normal",
    1.25: "fast",
  };

  // Fetch all categories from API (dynamic, not hardcoded)
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [categoriesLoading, setCategoriesLoading] = useState(true);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const cats = await contentService.getCategories();
        setAllCategories(cats);
      } catch (error) {
        logger.warn("Failed to fetch categories, using defaults", error);
      } finally {
        setCategoriesLoading(false);
      }
    };
    loadCategories();
  }, []);

  // Get practice counts from saved phrases for recommendations
  const { phrases: savedPhrasesList } = useSavedPhrasesStore();
  const categoryPracticeCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    savedPhrasesList.forEach((phrase) => {
      if (phrase.contextLabel) {
        counts[phrase.contextLabel] = (counts[phrase.contextLabel] || 0) + 1;
      }
    });
    return counts;
  }, [savedPhrasesList]);

  // Recommend Tab: recommended from practice history + random fill to 13
  const recommendedCategories = useMemo(() => {
    if (allCategories.length === 0) return [];

    // Sort categories by practice count (most practiced first)
    const sortedByPractice = [...allCategories].sort(
      (a, b) =>
        (categoryPracticeCounts[b.id] || 0) -
        (categoryPracticeCounts[a.id] || 0),
    );

    // Get recommended categories (those with practice history)
    const recommended = sortedByPractice.filter(
      (c) => (categoryPracticeCounts[c.id] || 0) > 0,
    );

    // If we have enough recommended, take top 13
    if (recommended.length >= 13) {
      return recommended
        .slice(0, 13)
        .sort((a, b) => a.displayOrder - b.displayOrder);
    }

    // Otherwise: recommended on top + fill with random from remaining
    const remaining = allCategories.filter(
      (c) => !recommended.some((r) => r.id === c.id),
    );

    // Shuffle remaining for random fill
    const shuffledRemaining = remaining.sort(() => Math.random() - 0.5);

    // Combine: recommended + fill to reach 13
    const result = [...recommended, ...shuffledRemaining].slice(0, 13);
    return result.sort((a, b) => a.displayOrder - b.displayOrder);
  }, [allCategories, categoryPracticeCounts]);

  // Tab state - must be defined before currentCategories
  const [activeLearnTab, setActiveLearnTab] = useState<"recommend" | "scenes">(
    "recommend",
  );

  // Scenes Tab: all categories
  const scenesCategories = useMemo(
    () => allCategories.sort((a, b) => a.displayOrder - b.displayOrder),
    [allCategories],
  );

  // Current categories based on active tab
  const currentCategories =
    activeLearnTab === "recommend" ? recommendedCategories : scenesCategories;

  // Build CONTEXTS from API data with fallback icons
  const CONTEXTS: Array<{
    id: string;
    icon: string;
    ionicon: React.ComponentProps<typeof Ionicons>["name"];
    sceneCount?: number;
  }> =
    currentCategories.length > 0
      ? currentCategories.map((cat) => {
          const iconMap = CATEGORY_ICONS[cat.id] || {
            icon: "folder",
            ionicon: "folder",
          };
          return {
            id: cat.id,
            icon: iconMap.icon,
            ionicon: iconMap.ionicon as React.ComponentProps<
              typeof Ionicons
            >["name"],
            sceneCount: cat.sceneCount,
          };
        })
      : DEFAULT_CONTEXTS;

  const CONTEXTS_WITH_SCENES: typeof CONTEXTS = CONTEXTS;

  // Scroll to top when category is selected
  useEffect(() => {
    if (selectedContext) {
      mainScrollRef.current?.scrollTo({ y: 0, animated: true });
    }
  }, [selectedContext]);
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedSections, setCollapsedSections] = useState<
    Record<string, boolean>
  >({
    continueLearning: false,
    weakCategory: false,
    tryNew: false,
  });
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(
    {},
  );
  const toggleSection = (section: string) => {
    setCollapsedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };
  const toggleCard = (cardId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [cardId]: !prev[cardId],
    }));
  };
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [difficultyFilter, setDifficultyFilter] = useState<
    "Basic" | "Intermediate" | "Advanced"
  >("Basic");

  // Fetch full scenes from API when category is selected (includes flows/phrases)
  const [categoryScenes, setCategoryScenes] = useState<any[]>([]);
  const [scenesLoading, setScenesLoading] = useState(false);

  useEffect(() => {
    if (!selectedContext) {
      setCategoryScenes([]);
      return;
    }

    const fetchScenes = async () => {
      setScenesLoading(true);
      try {
        // Fetch full scenes with flows from API
        const scenes = await contentService.getScenesFull(selectedContext);
        setCategoryScenes(scenes);
      } catch (error) {
        logger.warn("Failed to fetch scenes", error);
        setCategoryScenes([]);
      } finally {
        setScenesLoading(false);
      }
    };

    fetchScenes();
  }, [selectedContext]);

  const { togglePhrase, isSaved } = useSavedPhrasesStore();

  const [expandedPhraseId, setExpandedPhraseId] = useState<string | null>(null);
  const [playingPhraseId, setPlayingPhraseId] = useState<string | null>(null);
  const [activePractice, setActivePractice] = useState<{
    mode: "practice" | "dictation" | "shadow";
    phrase: Phrase;
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [playingTurnIndex, setPlayingTurnIndex] = useState<number | null>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const isPlayingAllRef = useRef(false); // Ref for loop to check current state
  const scrollViewRef = useRef<ScrollView>(null);
  const mainScrollRef = useRef<ScrollView>(null);
  const phraseRefs = useRef<{ [key: string]: View }>({});

  // Recent scenes state for "Continue Learning"
  const [recentScenes, setRecentScenes] = useState<
    {
      contextId: string;
      sceneName: string;
      timestamp: number;
    }[]
  >([]);

  // Popular phrases tracking (based on user interactions)
  const [popularPhrases, setPopularPhrases] = useState<
    {
      phraseId: string;
      en: string;
      vi: string;
      contextId: string;
      count: number;
    }[]
  >([]);

  // Category progress tracking
  const [categoryProgress, setCategoryProgress] = useState<
    Record<string, { learned: number; total: number }>
  >({});

  // Load recent scenes, progress, and popular phrases from storage
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load recent scenes
        const savedScenes = await AsyncStorage.getItem("recentScenes");
        if (savedScenes) {
          try {
            setRecentScenes(JSON.parse(savedScenes).slice(0, 5));
          } catch (e) {
            console.error("Failed to parse recentScenes:", e);
          }
        }
        // Load category progress
        const savedProgress = await AsyncStorage.getItem("categoryProgress");
        if (savedProgress) {
          try {
            setCategoryProgress(JSON.parse(savedProgress));
          } catch (e) {
            console.error("Failed to parse categoryProgress:", e);
          }
        }
        // Load popular phrases
        const savedPopular = await AsyncStorage.getItem("popularPhrases");
        if (savedPopular) {
          try {
            setPopularPhrases(JSON.parse(savedPopular));
          } catch (e) {
            console.error("Failed to parse popularPhrases:", e);
          }
        }
      } catch (e) {
        console.error("Failed to load data:", e);
      }
    };
    loadData();
  }, []);

  // Save recent scenes to storage
  const addRecentScene = useCallback(
    async (contextId: string, sceneName: string) => {
      try {
        const newEntry = { contextId, sceneName, timestamp: Date.now() };
        // Use functional update to avoid stale closure
        setRecentScenes((prev) => {
          const updated = [
            newEntry,
            ...prev.filter(
              (r) => !(r.contextId === contextId && r.sceneName === sceneName),
            ),
          ].slice(0, 5);
          // Save to storage after state update
          AsyncStorage.setItem("recentScenes", JSON.stringify(updated)).catch(
            (e) => console.error("Failed to save recent scene:", e),
          );
          return updated;
        });
      } catch (e) {
        console.error("Failed to save recent scene:", e);
      }
    },
    [],
  );

  // Track phrase interaction to build popular phrases
  const trackPhraseInteraction = useCallback(
    async (phrase: Phrase, contextId: string) => {
      try {
        const existing = popularPhrases.find((p) => p.phraseId === phrase.id);
        let updated: typeof popularPhrases;
        if (existing) {
          updated = popularPhrases.map((p) =>
            p.phraseId === phrase.id ? { ...p, count: p.count + 1 } : p,
          );
        } else {
          updated = [
            ...popularPhrases,
            {
              phraseId: phrase.id,
              en: phrase.en,
              vi: phrase.vi,
              contextId,
              count: 1,
            },
          ];
        }
        // Sort by count and keep top 5
        updated = updated.sort((a, b) => b.count - a.count).slice(0, 5);
        setPopularPhrases(updated);
        await AsyncStorage.setItem("popularPhrases", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to track phrase:", e);
      }
    },
    [popularPhrases],
  );

  // Get phrases - either from selected scene or all phrases in category
  const phrases = useMemo(() => {
    if (selectedScene) {
      return convertScenesToPhrases([selectedScene]);
    }
    return selectedContext ? getPhrasesForContext(selectedContext) : [];
  }, [selectedContext, selectedScene]);

  // Get unique levels from phrases dynamically
  const availableLevels = useMemo(() => {
    const levels = new Set(phrases.map((p) => p.level).filter((l) => l !== ""));
    return Array.from(levels).sort();
  }, [phrases]);

  // Reset difficulty filter when available levels change
  useEffect(() => {
    if (
      availableLevels.length > 0 &&
      !availableLevels.includes(difficultyFilter)
    ) {
      setDifficultyFilter(
        availableLevels[0] as "Basic" | "Intermediate" | "Advanced",
      );
    }
  }, [availableLevels]);

  const sceneCount = selectedContext
    ? allCategories.find((c) => c.id === selectedContext)?.sceneCount || 0
    : 0;

  // Search using pre-built index - O(n) but with minimal string operations
  const matchingScenes = useMemo(() => {
    if (!debouncedSearchQuery || debouncedSearchQuery.length < 2) return [];
    const results = searchScenes(debouncedSearchQuery);
    return results.length > 0 ? [{ contextId: "all", scenes: results }] : [];
  }, [debouncedSearchQuery]);

  // Only load phrases for matching scenes (not all scenes)
  const filteredPhrases = useMemo(() => {
    let result = phrases;

    // Apply difficulty filter
    result = result.filter((p) => p.level === difficultyFilter);

    // Apply search filter if exists
    if (debouncedSearchQuery && matchingScenes.length > 0) {
      const searchResult: Phrase[] = [];
      matchingScenes.forEach(({ scenes }) => {
        const scenePhrases = convertScenesToPhrases(scenes);
        searchResult.push(...scenePhrases);
      });
      result = searchResult.filter((p) => p.level === difficultyFilter);
    }

    return result;
  }, [debouncedSearchQuery, phrases, matchingScenes, difficultyFilter]);

  const toggleSave = useCallback(
    (phrase: Phrase) => {
      togglePhrase({ ...phrase, level: phrase.level || "" });
    },
    [togglePhrase],
  );

  const handleSpeak = async (text: string, phraseId: string) => {
    try {
      // Stop if already playing this phrase
      if (playingPhraseId === phraseId) {
        await stopSpeaking();
        setPlayingPhraseId(null);
        return;
      }

      // Track phrase interaction for popular phrases
      const phrase = phrases.find((p) => p.id === phraseId);
      if (phrase && selectedContext) {
        trackPhraseInteraction(phrase, selectedContext);
      }

      // Stop any ongoing speech
      await stopSpeaking();
      setPlayingPhraseId(phraseId);

      await speak(text, {
        accent: accentMap[voiceSettings.accent] as "en-US" | "en-GB" | "en-AU",
        speed: speedMap[voiceSettings.speed] as "slow" | "normal" | "fast",
        onDone: () => setPlayingPhraseId(null),
        onError: (error) => {
          setPlayingPhraseId(null);
          Alert.alert(t("common.error"), t("learn.failedToPlayAudio"));
        },
      });
    } catch (error) {
      setPlayingPhraseId(null);
      Alert.alert(t("common.error"), t("learn.failedToPlayAudio"));
    }
  };

  const openPracticeMode = (
    mode: "practice" | "dictation" | "shadow",
    phrase: Phrase,
  ) => {
    void stopSpeaking();
    setActivePractice({ mode, phrase });
  };

  const closePracticeMode = () => {
    void stopSpeaking();
    setActivePractice(null);
  };

  // Play all dialogue turns sequentially
  const handlePlayAll = async () => {
    if (isPlayingAll) {
      // Stop playing
      logger.log("[TTS] Stopping playback");
      isPlayingAllRef.current = false;
      await stopSpeaking();
      setIsPlayingAll(false);
      setPlayingTurnIndex(null);
      // Clear any pending scroll timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
        scrollTimeoutRef.current = null;
      }
      return;
    }

    if (phrases.length === 0) {
      logger.log("[TTS] No phrases to play");
      return;
    }

    logger.log(`[TTS] Starting playback of ${phrases.length} phrases`);
    isPlayingAllRef.current = true;
    setIsPlayingAll(true);

    for (let i = 0; i < phrases.length; i++) {
      // Check if stopped using ref (not state)
      if (!isPlayingAllRef.current) {
        logger.log("[TTS] Playback stopped by user");
        break;
      }

      logger.log(
        `[TTS] Playing phrase ${i + 1}/${phrases.length}: "${phrases[i].en}"`,
      );
      setPlayingTurnIndex(i);

      // Auto-scroll to current phrase - position at bottom of visible area
      // Clear previous timeout to avoid memory leak
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        const PHRASES_HEADER_HEIGHT = 100; // Height of phrases section header + button
        const ITEM_HEIGHT = 120; // Phrase card height
        const SCREEN_HEIGHT = 600; // Approximate screen height for calculation
        // Scroll so current phrase appears near bottom of screen
        const scrollY = Math.max(0, i * ITEM_HEIGHT - (SCREEN_HEIGHT - 200));
        scrollViewRef.current?.scrollTo({
          y: scrollY,
          animated: true,
        });
      }, 100);

      // Speak and wait for completion
      try {
        await speak(phrases[i].en, {
          accent: accentMap[voiceSettings.accent] as
            | "en-US"
            | "en-GB"
            | "en-AU",
          speed: speedMap[voiceSettings.speed] as "slow" | "normal" | "fast",
        });
        logger.log(`[TTS] Phrase ${i + 1} completed`);
      } catch (error) {
        console.error(`[TTS] Error on phrase ${i + 1}:`, error);
        // Continue to next phrase even on error
      }

      // Check again after speak completes using ref
      if (!isPlayingAllRef.current) {
        logger.log("[TTS] Playback stopped by user after speak");
        break;
      }

      // Small delay between phrases
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    logger.log("[TTS] Playback completed");
    isPlayingAllRef.current = false;
    setIsPlayingAll(false);
    setPlayingTurnIndex(null);
    // Clear any pending scroll timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
  };

  const handleSearchChange = async (text: string) => {
    setSearchQuery(text);
    if (text) {
      await stopSpeaking();
      setSelectedContext(null);
      // Show loading immediately on each keystroke
      setIsSearching(true);
      // Clear any previous timeout
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      // Hide loading after a short delay for visual feedback
      searchTimeoutRef.current = setTimeout(() => {
        setIsSearching(false);
      }, 150);
    } else {
      setIsSearching(false);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (searchTimeoutRef.current) {
        clearTimeout(searchTimeoutRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Helper function to highlight matched keywords
  const highlightText = (text: string, query: string) => {
    if (!query.trim()) return [{ text, highlight: false }];

    const keywords = query.toLowerCase().split(/\s+/).filter(Boolean);
    const parts: { text: string; highlight: boolean }[] = [];
    let currentText = text;
    let currentIndex = 0;

    // Find all keyword matches
    const matches: { start: number; end: number }[] = [];
    keywords.forEach((keyword) => {
      let index = currentText.toLowerCase().indexOf(keyword);
      while (index !== -1) {
        matches.push({ start: index, end: index + keyword.length });
        index = currentText.toLowerCase().indexOf(keyword, index + 1);
      }
    });

    // Sort and merge overlapping matches
    matches.sort((a, b) => a.start - b.start);
    const merged: { start: number; end: number }[] = [];
    matches.forEach((match) => {
      if (merged.length === 0 || merged[merged.length - 1].end < match.start) {
        merged.push(match);
      } else {
        merged[merged.length - 1].end = Math.max(
          merged[merged.length - 1].end,
          match.end,
        );
      }
    });

    // Build parts array
    merged.forEach((match) => {
      if (currentIndex < match.start) {
        parts.push({
          text: currentText.substring(currentIndex, match.start),
          highlight: false,
        });
      }
      parts.push({
        text: currentText.substring(match.start, match.end),
        highlight: true,
      });
      currentIndex = match.end;
    });

    if (currentIndex < currentText.length) {
      parts.push({
        text: currentText.substring(currentIndex),
        highlight: false,
      });
    }

    return parts.length > 0 ? parts : [{ text, highlight: false }];
  };

  return (
    <LinearGradient
      colors={["#FFD200", "#F9F9F9"]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      {/* Header - Same as Profile screen */}
      <View style={[styles.headerYellow, { paddingTop: insets.top + 12 }]}>
        <Text style={styles.headerTitle}>{t("learn.headerTitle")}</Text>
        <TouchableOpacity
          style={styles.headerBadge}
          onPress={() => onNavigateToProfile?.()}
        >
          <Ionicons name="person" size={16} color="#1C1C1E" />
        </TouchableOpacity>
      </View>

      <ScrollView
        ref={mainScrollRef}
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}
        showsVerticalScrollIndicator={false}
      >
        {/* Search */}
        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={20}
            color="#9E9E9E"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder={t("learn.searchScenes")}
            value={searchQuery}
            onChangeText={handleSearchChange}
            placeholderTextColor="#9E9E9E"
          />
          {isSearching && (
            <View style={styles.searchLoading}>
              <Ionicons name="hourglass-outline" size={16} color="#FFD600" />
            </View>
          )}
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Ionicons name="close-circle" size={20} color="#9E9E9E" />
            </TouchableOpacity>
          )}
        </View>

        {/* Search Title */}
        <Text style={styles.searchTitle}>{t("learn.chooseContext")}</Text>

        {/* Continue Learning - Recent Scenes */}
        {!searchQuery && recentScenes.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {t("learn.continueLearning")}
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.recentScenesContainer}
            >
              {recentScenes.map((recent, index) => {
                const ctx = CONTEXTS.find((c) => c.id === recent.contextId);
                return (
                  <TouchableOpacity
                    key={`${recent.contextId}-${recent.sceneName}-${index}`}
                    style={styles.recentSceneCard}
                    onPress={() => {
                      setSelectedContext(recent.contextId);
                      addRecentScene(recent.contextId, recent.sceneName);
                    }}
                  >
                    <Ionicons
                      name={ctx?.ionicon || "book"}
                      size={28}
                      color="#F57C00"
                      style={styles.recentSceneIcon}
                    />
                    <Text style={styles.recentSceneName} numberOfLines={1}>
                      {recent.sceneName}
                    </Text>
                    <Text style={styles.recentSceneCategory}>
                      {t(CONTEXT_ID_TO_KEY[recent.contextId] as any)}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
        )}

        {/* Tab Navigation */}
        {!searchQuery && !selectedContext && (
          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeLearnTab === "recommend" && styles.tabButtonActive,
              ]}
              onPress={() => setActiveLearnTab("recommend")}
            >
              <Ionicons
                name="sparkles"
                size={16}
                color={activeLearnTab === "recommend" ? "#1C1C1E" : "#8E8E93"}
                style={styles.tabButtonIcon}
              />
              <Text
                style={[
                  styles.tabButtonText,
                  activeLearnTab === "recommend" && styles.tabButtonTextActive,
                ]}
              >
                推荐
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tabButton,
                activeLearnTab === "scenes" && styles.tabButtonActive,
              ]}
              onPress={() => setActiveLearnTab("scenes")}
            >
              <Ionicons
                name="trending-up"
                size={16}
                color={activeLearnTab === "scenes" ? "#1C1C1E" : "#8E8E93"}
                style={styles.tabButtonIcon}
              />
              <Text
                style={[
                  styles.tabButtonText,
                  activeLearnTab === "scenes" && styles.tabButtonTextActive,
                ]}
              >
                场景
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Recommend Tab - Continue Learning + Categories */}
        {!searchQuery && activeLearnTab === "recommend" && (
          <View>
            {/* Selected Category Header with Close Button */}
            {selectedContext && !selectedScene && (
              <View style={styles.inlineSceneListHeader}>
                <TouchableOpacity
                  onPress={handleCloseCategory}
                  style={styles.inlineBackButton}
                >
                  <Ionicons name="chevron-back" size={20} color="#1c1c1e" />
                  <Text style={styles.inlineBackButtonText}>
                    {t(CONTEXT_ID_TO_KEY[selectedContext] as any) ||
                      "Categories"}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.inlineSceneCountText}>
                  {sceneCount} scenes
                </Text>
              </View>
            )}

            {/* Category List - show all 13 categories as list (1 category/row) - only when no category selected */}
            {!selectedContext && activeLearnTab === "recommend" && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                  {t("learn.chooseContext")}
                </Text>
                {CONTEXTS_WITH_SCENES.slice(0, 13).map((ctx) => {
                  const progress = categoryProgress[ctx.id];
                  const progressPercent = progress
                    ? Math.round((progress.learned / progress.total) * 100)
                    : 0;
                  return (
                    <TouchableOpacity
                      key={ctx.id}
                      style={styles.categoryListItem}
                      onPress={() =>
                        setSelectedContext(
                          selectedContext === ctx.id ? null : ctx.id,
                        )
                      }
                    >
                      <View style={styles.categoryListLeft}>
                        <Ionicons
                          name={ctx.ionicon}
                          size={24}
                          color="#666"
                          style={styles.categoryListIcon}
                        />
                        <View style={styles.categoryListInfo}>
                          <Text style={styles.categoryListName}>
                            {t(CONTEXT_ID_TO_KEY[ctx.id] as any)}
                          </Text>
                          <Text style={styles.categoryListCount}>
                            {ctx.sceneCount || 0} scenes
                          </Text>
                        </View>
                      </View>
                      <View style={styles.categoryListRight}>
                        <Text style={styles.categoryListPercent}>
                          {progressPercent}%
                        </Text>
                        <Ionicons
                          name="chevron-forward"
                          size={20}
                          color="#ccc"
                        />
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}

            {/* Inline Scene List - when category selected - show ALL scenes (1 column) */}
            {selectedContext && !selectedScene && (
              <View style={styles.inlineSceneList}>
                {scenesLoading ? (
                  <Text style={styles.loadingText}>Loading...</Text>
                ) : (
                  <View>
                    {categoryScenes.map((scene) => {
                      const phraseCount =
                        scene.flows?.length || scene.flowCount || 0;
                      return (
                        <TouchableOpacity
                          key={scene.id}
                          style={styles.inlineSceneCardSingle}
                          onPress={() => {
                            setSelectedScene(scene);
                            addRecentScene(selectedContext, scene.titleEn);
                          }}
                        >
                          <View style={styles.inlineSceneCardSingleContent}>
                            <View style={styles.inlineSceneCardSingleInfo}>
                              <Text
                                style={styles.inlineSceneTitleEnSingle}
                                numberOfLines={1}
                              >
                                {scene.titleEn}
                              </Text>
                              <Text
                                style={styles.inlineSceneTitleZhSingle}
                                numberOfLines={1}
                              >
                                {scene.titleZh}
                              </Text>
                              <Text
                                style={styles.inlineSceneDescSingle}
                                numberOfLines={2}
                              >
                                {scene.description}
                              </Text>
                            </View>
                            <View style={styles.inlineSceneCardSingleRight}>
                              <Text style={styles.inlineScenePhraseCountSingle}>
                                {phraseCount} phrases
                              </Text>
                              <Ionicons
                                name="chevron-forward"
                                size={20}
                                color="#ccc"
                              />
                            </View>
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                )}
              </View>
            )}
          </View>
        )}

        {/* Scenes Tab - Category Grid - Same as Try New Scenes */}
        {!searchQuery && !selectedContext && activeLearnTab === "scenes" && (
          <View style={styles.section}>
            <View style={styles.tryNewGrid}>
              {CONTEXTS_WITH_SCENES.map((ctx) => {
                const progress = categoryProgress[ctx.id];
                const progressPercent = progress
                  ? Math.round((progress.learned / progress.total) * 100)
                  : 0;
                return (
                  <TouchableOpacity
                    key={ctx.id}
                    style={styles.tryNewCard}
                    onPress={() =>
                      setSelectedContext(
                        selectedContext === ctx.id ? null : ctx.id,
                      )
                    }
                  >
                    <Ionicons
                      name={ctx.ionicon}
                      size={24}
                      color="#666"
                      style={styles.tryNewIcon}
                    />
                    <Text style={styles.tryNewName} numberOfLines={1}>
                      {t(CONTEXT_ID_TO_KEY[ctx.id] as any)}
                    </Text>
                    <Text style={styles.tryNewCount}>
                      {ctx.sceneCount || 0} scenes
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}

        {/* Scene List - when category selected but no scene selected - only in Scenes tab */}
        {selectedContext &&
          !selectedScene &&
          !searchQuery &&
          activeLearnTab === "scenes" && (
            <View style={styles.sceneListSection}>
              <View style={styles.inlineSceneListHeader}>
                <TouchableOpacity
                  onPress={handleCloseCategory}
                  style={[styles.inlineBackButton, { flexShrink: 1 }]}
                >
                  <Ionicons name="chevron-back" size={20} color="#1c1c1e" />
                  <Text style={styles.inlineBackButtonText} numberOfLines={1}>
                    {t(CONTEXT_ID_TO_KEY[selectedContext] as any) ||
                      "Categories"}
                  </Text>
                </TouchableOpacity>
                <Text style={styles.inlineSceneCountText}>
                  {sceneCount} scenes
                </Text>
              </View>
              <ScrollView
                style={styles.sceneListContainer}
                showsVerticalScrollIndicator={false}
              >
                {scenesLoading ? (
                  <Text style={styles.loadingText}>Loading...</Text>
                ) : (
                  categoryScenes.map((scene) => {
                    const phraseCount =
                      scene.flows?.length || scene.flowCount || 0;
                    return (
                      <TouchableOpacity
                        key={scene.id}
                        style={styles.sceneCard}
                        onPress={() => {
                          setSelectedScene(scene);
                          addRecentScene(selectedContext, scene.titleEn);
                        }}
                      >
                        <View style={styles.sceneCardContent}>
                          <Text style={styles.sceneTitleZh}>
                            {scene.titleZh}
                          </Text>
                          <Text style={styles.sceneTitleEn}>
                            {scene.titleEn}
                          </Text>
                          <Text
                            style={styles.sceneDescription}
                            numberOfLines={2}
                          >
                            {scene.description}
                          </Text>
                        </View>
                        <View style={styles.sceneCardRight}>
                          <Text style={styles.scenePhraseCount}>
                            {phraseCount} phrases
                          </Text>
                          <Ionicons
                            name="chevron-forward"
                            size={18}
                            color="#9E9E9E"
                          />
                        </View>
                      </TouchableOpacity>
                    );
                  })
                )}
              </ScrollView>
            </View>
          )}

        {/* Phrases List - when scene is selected or searching */}
        {(selectedScene || searchQuery) && (
          <View style={styles.phrasesSection}>
            <View style={styles.phrasesSectionHeader}>
              <View style={styles.phrasesHeaderLeft}>
                {selectedScene && (
                  <TouchableOpacity
                    onPress={handleCloseCategory}
                    style={styles.backButton}
                  >
                    <Ionicons name="chevron-back" size={20} color="#1c1c1e" />
                    <Text style={styles.backButtonText} numberOfLines={1}>
                      {selectedScene?.titleEn}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
              <TouchableOpacity
                onPress={async () => {
                  await stopSpeaking();
                  setSelectedScene(null);
                  if (searchQuery) setSearchQuery("");
                }}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>{t("learn.close")}</Text>
              </TouchableOpacity>
            </View>

            {/* Difficulty Filter - dynamic from phrases */}
            {availableLevels.length > 0 && (
              <View style={styles.difficultyFilter}>
                {availableLevels.map((level) => (
                  <TouchableOpacity
                    key={level}
                    style={[
                      styles.difficultyButton,
                      difficultyFilter === level &&
                        styles.difficultyButtonActive,
                    ]}
                    onPress={() =>
                      setDifficultyFilter(
                        level as "Basic" | "Intermediate" | "Advanced",
                      )
                    }
                  >
                    <Text
                      style={[
                        styles.difficultyButtonText,
                        difficultyFilter === level &&
                          styles.difficultyButtonTextActive,
                      ]}
                    >
                      {level}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}

            {/* Listen to Full Dialogue button - below PHRASES header */}
            {phrases.length > 0 && (
              <View style={styles.playAllButtonWrapper}>
                <TouchableOpacity
                  style={[
                    styles.playAllButton,
                    isPlayingAll && styles.playAllButtonActive,
                  ]}
                  onPress={handlePlayAll}
                >
                  <Ionicons
                    name={isPlayingAll ? "stop" : "volume-high"}
                    size={18}
                    color={isPlayingAll ? "#fff" : "#1c1c1e"}
                  />
                  <Text
                    style={[
                      styles.playAllText,
                      isPlayingAll && styles.playAllTextActive,
                    ]}
                  >
                    {isPlayingAll
                      ? `Stop ${(playingTurnIndex ?? 0) + 1}/${phrases.length}`
                      : "Listen to Full Dialogue"}
                  </Text>
                </TouchableOpacity>
              </View>
            )}

            <ScrollView
              ref={scrollViewRef}
              style={styles.phrasesContainer}
              onScroll={(e) => setScrollOffset(e.nativeEvent.contentOffset.y)}
              scrollEventThrottle={16}
            >
              {filteredPhrases.length === 0 ? (
                <View style={styles.emptyState}>
                  <Ionicons name="search" size={48} color="#E0E0E0" />
                  <Text style={styles.emptyText}>
                    {searchQuery
                      ? "No phrases found"
                      : "Select a context to see phrases"}
                  </Text>
                </View>
              ) : (
                filteredPhrases.map((phrase, index) => (
                  <View
                    key={phrase.id}
                    style={[
                      styles.phraseCard,
                      isPlayingAll &&
                        playingTurnIndex === index &&
                        styles.phraseCardActive,
                    ]}
                  >
                    <TouchableOpacity
                      style={styles.phraseHeader}
                      onPress={() => {
                        setExpandedPhraseId(
                          expandedPhraseId === phrase.id ? null : phrase.id,
                        );
                        // Track scene when user expands a phrase
                        if (expandedPhraseId !== phrase.id && selectedContext) {
                          addRecentScene(selectedContext, phrase.contextLabel);
                        }
                      }}
                    >
                      <View style={styles.phraseHeaderLeft}>
                        <View style={styles.phraseLabels}>
                          {phrase.level && (
                            <View
                              style={[
                                styles.levelBadge,
                                phrase.level === "Advanced" &&
                                  styles.levelBadgeAdvanced,
                                phrase.level === "Intermediate" &&
                                  styles.levelBadgeIntermediate,
                              ]}
                            >
                              <Text style={styles.levelText}>
                                {phrase.level}
                              </Text>
                            </View>
                          )}
                          {/* Speaker badge - you vs them */}
                          <View
                            style={[
                              styles.speakerBadge,
                              phrase.speaker === "them" &&
                                styles.speakerBadgeThem,
                            ]}
                          >
                            <Text
                              style={[
                                styles.speakerBadgeText,
                                phrase.speaker === "them" &&
                                  styles.speakerBadgeTextThem,
                              ]}
                            >
                              {phrase.speaker === "them"
                                ? phrase.role || "Them"
                                : "You"}
                            </Text>
                          </View>
                          <Text style={styles.contextLabel}>
                            {phrase.contextLabel}
                          </Text>
                        </View>
                        <Text
                          style={[
                            styles.phraseEn,
                            phrase.speaker === "them" && styles.phraseEnThem,
                          ]}
                        >
                          {searchQuery
                            ? highlightText(phrase.en, searchQuery).map(
                                (part, i) => (
                                  <Text
                                    key={i}
                                    style={
                                      part.highlight
                                        ? styles.highlightedText
                                        : undefined
                                    }
                                  >
                                    {part.text}
                                  </Text>
                                ),
                              )
                            : phrase.en}
                        </Text>
                        <Text style={styles.phraseVi}>
                          {searchQuery
                            ? highlightText(phrase.vi, searchQuery).map(
                                (part, i) => (
                                  <Text
                                    key={i}
                                    style={
                                      part.highlight
                                        ? styles.highlightedText
                                        : undefined
                                    }
                                  >
                                    {part.text}
                                  </Text>
                                ),
                              )
                            : phrase.vi}
                        </Text>
                        {/* Show them turn as context for "you" turns */}
                        {phrase.speaker === "you" && phrase.themEn && (
                          <View style={styles.themTurnContainer}>
                            <Text style={styles.themTurnLabel}>
                              {phrase.role || "They say"}:
                            </Text>
                            <Text style={styles.themTurnEn}>
                              {phrase.themEn}
                            </Text>
                            {phrase.themVi && (
                              <Text style={styles.themTurnVi}>
                                {phrase.themVi}
                              </Text>
                            )}
                          </View>
                        )}
                      </View>
                      <View style={styles.phraseActions}>
                        <TouchableOpacity
                          onPress={(e) => {
                            e.stopPropagation();
                            toggleSave(phrase);
                          }}
                          style={styles.actionButton}
                        >
                          <Ionicons
                            name={
                              isSaved(phrase.id)
                                ? "bookmark"
                                : "bookmark-outline"
                            }
                            size={20}
                            color={isSaved(phrase.id) ? "#FFD600" : "#9E9E9E"}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          style={styles.actionButton}
                          onPress={(e) => {
                            e.stopPropagation();
                            handleSpeak(phrase.en, phrase.id);
                          }}
                        >
                          <Ionicons
                            name={
                              playingPhraseId === phrase.id
                                ? "pause"
                                : "volume-medium"
                            }
                            size={20}
                            color={
                              playingPhraseId === phrase.id
                                ? "#FFD600"
                                : "#9E9E9E"
                            }
                          />
                        </TouchableOpacity>
                      </View>
                    </TouchableOpacity>

                    {expandedPhraseId === phrase.id && (
                      <View style={styles.phraseExpanded}>
                        {activePractice?.phrase.id === phrase.id ? (
                          activePractice.mode === "practice" ? (
                            <PracticeMode
                              phrase={{ ...phrase, level: phrase.level || "" }}
                              onClose={closePracticeMode}
                            />
                          ) : activePractice.mode === "dictation" ? (
                            <DictationMode
                              phrase={{ ...phrase, level: phrase.level || "" }}
                              onClose={closePracticeMode}
                            />
                          ) : (
                            <ShadowMode
                              phrase={{ ...phrase, level: phrase.level || "" }}
                              onClose={closePracticeMode}
                            />
                          )
                        ) : (
                          <View style={styles.practiceButtons}>
                            <TouchableOpacity
                              style={[
                                styles.practiceButton,
                                styles.practiceButtonGreen,
                              ]}
                              onPress={() =>
                                openPracticeMode("practice", phrase)
                              }
                            >
                              <Ionicons
                                name="book-outline"
                                size={16}
                                color="#2E7D32"
                              />
                              <Text
                                style={[
                                  styles.practiceButtonText,
                                  styles.practiceButtonTextGreen,
                                ]}
                              >
                                Practice
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={[
                                styles.practiceButton,
                                styles.practiceButtonPurple,
                              ]}
                              onPress={() =>
                                openPracticeMode("dictation", phrase)
                              }
                            >
                              <Ionicons
                                name="ear-outline"
                                size={16}
                                color="#7B1FA2"
                              />
                              <Text
                                style={[
                                  styles.practiceButtonText,
                                  styles.practiceButtonTextPurple,
                                ]}
                              >
                                Dictation
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              style={[
                                styles.practiceButton,
                                styles.practiceButtonOrange,
                              ]}
                              onPress={() => openPracticeMode("shadow", phrase)}
                            >
                              <Ionicons name="mic" size={16} color="#E65100" />
                              <Text
                                style={[
                                  styles.practiceButtonText,
                                  styles.practiceButtonTextOrange,
                                ]}
                              >
                                Shadow
                              </Text>
                            </TouchableOpacity>
                          </View>
                        )}
                      </View>
                    )}
                  </View>
                ))
              )}
            </ScrollView>
          </View>
        )}

        {/* Empty State with Emergency Tip - Only show in Scenes tab */}
        {!selectedContext && !searchQuery && activeLearnTab === "scenes" && (
          <View style={styles.emptyStateContainer}>
            <View style={styles.tipCard}>
              <View style={styles.tipHeader}>
                <Ionicons name="shield-checkmark" size={20} color="#FFD600" />
                <Text style={styles.tipTitle}>{t("learn.emergencyTip")}</Text>
              </View>
              <Text style={styles.tipText}>{t("learn.emergencyTipDesc")}</Text>
            </View>

            <View style={styles.commonSection}>
              <Text style={styles.sectionTitle}>
                {popularPhrases.length > 0
                  ? t("learn.popularScenes")
                  : t("learn.commonSituations")}
              </Text>
              <View style={styles.commonList}>
                {(() => {
                  if (popularPhrases.length > 0) {
                    // Show popular phrases (up to 7)
                    return popularPhrases.slice(0, 7).map((item) => {
                      const ctx = CONTEXTS.find((c) => c.id === item.contextId);
                      return (
                        <TouchableOpacity
                          key={item.phraseId}
                          style={styles.commonCard}
                          onPress={() => {
                            setSelectedContext(item.contextId);
                            setSearchQuery("");
                          }}
                        >
                          <View style={styles.commonIconContainer}>
                            <Ionicons
                              name={ctx?.ionicon || "book"}
                              size={28}
                              color="#F57C00"
                              style={styles.commonEmoji}
                            />
                          </View>
                          <View style={styles.commonContent}>
                            <Text style={styles.commonLabel} numberOfLines={1}>
                              {item.en}
                            </Text>
                            <Text style={styles.commonEn} numberOfLines={1}>
                              {item.vi}
                            </Text>
                          </View>
                          <Ionicons
                            name="chevron-forward"
                            size={18}
                            color="#E0E0E0"
                          />
                        </TouchableOpacity>
                      );
                    });
                  }
                  // Fallback: show default 3 contexts
                  return (
                    <>
                      {[
                        {
                          label: "Lost Passport",
                          contextId: "emergency",
                          ionicon: "shield-checkmark" as const,
                        },
                        {
                          label: "Need a Doctor",
                          contextId: "medical",
                          ionicon: "medical" as const,
                        },
                        {
                          label: "Order Food",
                          contextId: "restaurant",
                          ionicon: "restaurant" as const,
                        },
                      ].map((item, i) => (
                        <TouchableOpacity
                          key={i}
                          style={styles.commonCard}
                          onPress={() => {
                            setSelectedContext(item.contextId);
                            setSearchQuery("");
                          }}
                        >
                          <View style={styles.commonIconContainer}>
                            <Ionicons
                              name={item.ionicon}
                              size={28}
                              color="#F57C00"
                              style={styles.commonEmoji}
                            />
                          </View>
                          <View style={styles.commonContent}>
                            <Text style={styles.commonLabel}>{item.label}</Text>
                            <Text style={styles.commonEn} numberOfLines={1}>
                              {t(CONTEXT_ID_TO_KEY[item.contextId] as any)}
                            </Text>
                          </View>
                          <Ionicons
                            name="chevron-forward"
                            size={18}
                            color="#E0E0E0"
                          />
                        </TouchableOpacity>
                      ))}
                    </>
                  );
                })()}
              </View>
            </View>
          </View>
        )}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  headerYellow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 12,
    backgroundColor: "#FFD600",
  },
  headerBadge: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,255,255,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  headerLeft: {
    flex: 1,
  },
  headerSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#1c1c1e",
  },
  profileButton: {
    marginLeft: 8,
  },
  profileAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#1c1c1e",
    alignItems: "center",
    justifyContent: "center",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    // marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "rgba(255, 210, 0, 0.3)",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1c1c1e",
    marginHorizontal: 16,
    marginTop: 8,
    marginBottom: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "600",
    color: "#9E9E9E",
    letterSpacing: 0.5,
    marginBottom: 16,
  },
  recentScenesContainer: {
    paddingRight: 16,
    gap: 12,
  },
  recentSceneCard: {
    width: 140,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginRight: 12,
  },
  recentScenesScroll: {
    marginTop: 8,
  },
  recentSceneIcon: {
    marginBottom: 8,
  },
  recentSceneName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  recentSceneCategory: {
    fontSize: 11,
    color: "#8E8E93",
  },
  progressContainer: {
    marginTop: 6,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E5E5EA",
    borderRadius: 2,
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#34C759",
    borderRadius: 2,
  },
  progressText: {
    fontSize: 10,
    color: "#8E8E93",
    marginTop: 2,
  },
  practicedCount: {
    fontSize: 10,
    color: "#34C759",
    fontWeight: "500",
    marginTop: 2,
  },
  confidenceSection: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  confidenceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  confidenceTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  confidenceValue: {
    fontSize: 20,
    fontWeight: "700",
    color: "#34C759",
  },
  confidenceBar: {
    height: 8,
    backgroundColor: "#E8E8E8",
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  confidenceFill: {
    height: "100%",
    backgroundColor: "#34C759",
    borderRadius: 4,
  },
  confidenceDesc: {
    fontSize: 12,
    color: "#8E8E93",
  },
  sectionHeaderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  verticalList: {
    gap: 12,
  },
  weakCategoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  weakCategoryCard: {
    width: "47%",
    backgroundColor: "#FFF8E1",
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFE0B2",
  },
  weakCategoryIcon: {
    marginBottom: 4,
  },
  weakCategoryName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1c1c1e",
    textAlign: "center",
  },
  weakCategoryPercent: {
    fontSize: 12,
    color: "#F57C00",
    marginTop: 4,
  },
  tryNewGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  tryNewCard: {
    width: "31%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  tryNewIcon: {
    marginBottom: 4,
  },
  tryNewName: {
    fontSize: 11,
    fontWeight: "600",
    color: "#1c1c1e",
    textAlign: "center",
  },
  tryNewCount: {
    fontSize: 10,
    color: "#8E8E93",
    marginTop: 2,
  },
  categoryListItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  categoryListLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  categoryListIcon: {
    marginRight: 12,
  },
  categoryListInfo: {
    flex: 1,
  },
  categoryListName: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1c1c1e",
    marginBottom: 2,
  },
  categoryListCount: {
    fontSize: 12,
    color: "#8E8E93",
  },
  categoryListRight: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryListPercent: {
    fontSize: 14,
    fontWeight: "600",
    color: "#F57C00",
    marginRight: 8,
  },
  continueLearningCard: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  continueLearningLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  continueLearningIcon: {
    marginRight: 12,
  },
  continueLearningInfo: {
    flex: 1,
  },
  continueLearningName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 2,
  },
  continueLearningCategory: {
    fontSize: 12,
    color: "#8E8E93",
  },
  continueLearningRight: {
    alignItems: "flex-end",
  },
  continueLearningPercent: {
    fontSize: 14,
    fontWeight: "600",
    color: "#007AFF",
    marginBottom: 4,
  },
  continueLearningPercentHigh: {
    color: "#FF9500",
  },
  continueLearningProgressBar: {
    width: 80,
    height: 4,
    backgroundColor: "#E8E8E8",
    borderRadius: 2,
    overflow: "hidden",
    marginBottom: 4,
  },
  continueLearningProgressFill: {
    height: "100%",
    backgroundColor: "#007AFF",
    borderRadius: 2,
  },
  continueLearningProgressFillHigh: {
    backgroundColor: "#FF9500",
  },
  continueLearningCount: {
    fontSize: 10,
    color: "#8E8E93",
  },
  cardChevron: {
    marginLeft: 8,
  },
  cardExpandedContent: {
    backgroundColor: "#F5F5F5",
    padding: 12,
    borderRadius: 12,
    marginTop: -8,
    marginBottom: 8,
    alignItems: "flex-start",
  },
  expandedSectionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  expandedSectionSubtitle: {
    fontSize: 11,
    color: "#8E8E93",
    marginBottom: 8,
  },
  cardExpandedText: {
    fontSize: 12,
    color: "#8E8E93",
    textAlign: "center",
  },
  expandedPhraseItem: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 8,
    marginBottom: 6,
    width: "100%",
  },
  expandedPhraseEn: {
    fontSize: 12,
    color: "#1C1C1E",
    fontWeight: "500",
  },
  expandedPhraseVi: {
    fontSize: 11,
    color: "#8E8E93",
    marginTop: 2,
  },
  difficultyFilter: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 16,
  },
  difficultyButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#F2F2F7",
  },
  difficultyButtonActive: {
    backgroundColor: "#FFD200",
  },
  difficultyButtonText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#8E8E93",
  },
  difficultyButtonTextActive: {
    color: "#1C1C1E",
  },
  tabContainer: {
    flexDirection: "row",
    backgroundColor: "#F2F2F7",
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  tabButtonActive: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#8E8E93",
  },
  tabButtonIcon: {
    marginRight: 6,
  },
  tabButtonTextActive: {
    color: "#1C1C1E",
    fontWeight: "600",
  },
  contextGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  contextCard: {
    width: "30%",
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    padding: 4,
  },
  contextCardActive: {
    backgroundColor: "#1c1c1e",
    borderColor: "rgba(255,255,255,0.1)",
  },
  contextContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  contextIcon: {
    fontSize: 26,
    marginBottom: 1,
  },
  contextName: {
    fontSize: 13,
    fontWeight: "600",
    color: "#1c1c1e",
    textAlign: "center",
  },
  contextNameActive: {
    color: "#FFD600",
  },
  phrasesSection: {
    marginBottom: 24,
  },
  phrasesSectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  closeButton: {
    backgroundColor: "#1c1c1e",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  closeButtonText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#FFD600",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  playAllButtonWrapper: {
    marginBottom: 8,
  },
  stickyButtonWrapper: {
    marginTop: 8,
  },
  playAllButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFD600",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    gap: 8,
  },
  playAllButtonActive: {
    backgroundColor: "#1c1c1e",
  },
  playAllText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  playAllTextActive: {
    color: "#FFD600",
  },
  phrasesContainer: {
    flex: 1,
  },
  emptyState: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyText: {
    marginTop: 16,
    fontSize: 14,
    color: "#9E9E9E",
  },
  loadingText: {
    fontSize: 14,
    color: "#9E9E9E",
    textAlign: "center",
    paddingVertical: 20,
  },
  phraseCard: {
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
    borderRadius: 32,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    overflow: "hidden",
  },
  phraseCardActive: {
    borderWidth: 2,
    borderColor: "#FFD600",
    backgroundColor: "#FFFDE7",
  },
  phraseHeader: {
    flexDirection: "row",
    padding: 16,
  },
  phraseHeaderLeft: {
    flex: 1,
  },
  phraseLabels: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  levelBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#E3F2FD",
    borderRadius: 4,
  },
  levelBadgeAdvanced: {
    backgroundColor: "#FFF3E0",
  },
  levelBadgeIntermediate: {
    backgroundColor: "#E8EAF6",
  },
  levelText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#1976D2",
  },
  contextLabel: {
    fontSize: 10,
    color: "#9E9E9E",
    textTransform: "uppercase",
  },
  phraseEn: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1C1C1E",
    marginBottom: 4,
  },
  phraseVi: {
    fontSize: 14,
    color: "#666",
  },
  phraseActions: {
    flexDirection: "column",
    gap: 8,
    marginLeft: 12,
  },
  actionButton: {
    padding: 8,
  },
  phraseExpanded: {
    borderTopWidth: 1,
    borderTopColor: "#E0E0E0",
    padding: 16,
  },
  practiceButtons: {
    flexDirection: "row",
    gap: 8,
  },
  practiceButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    paddingVertical: 10,
    backgroundColor: "#F3F3F5",
    borderRadius: 8,
  },
  practiceButtonText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#1C1C1E",
  },
  practiceButtonGreen: {
    backgroundColor: "#E8F5E9",
  },
  practiceButtonTextGreen: {
    color: "#2E7D32",
  },
  practiceButtonPurple: {
    backgroundColor: "#F3E5F5",
  },
  practiceButtonTextPurple: {
    color: "#7B1FA2",
  },
  practiceButtonOrange: {
    backgroundColor: "#FFF3E0",
  },
  practiceButtonTextOrange: {
    color: "#E65100",
  },
  searchLoading: {
    marginRight: 8,
  },
  highlightedText: {
    backgroundColor: "#FFD600",
    color: "#1C1C1E",
    fontWeight: "700",
  },
  emptyStateContainer: {
    paddingBottom: 24,
  },
  tipCard: {
    backgroundColor: "#1c1c1e",
    borderRadius: 32,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.05)",
  },
  tipHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    gap: 8,
  },
  tipTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#FFD600",
  },
  tipText: {
    fontSize: 14,
    color: "rgba(255,255,255,0.8)",
    lineHeight: 20,
  },
  commonSection: {
    marginBottom: 24,
  },
  commonList: {
    gap: 16,
  },
  commonCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 32,
    padding: 16,
    borderWidth: 1,
    borderColor: "#E0E0E0",
    marginBottom: 12,
  },
  commonIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 22,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#F0F0F0",
  },
  commonEmoji: {
    // Style for Ionicons icon container
  },
  commonContent: {
    flex: 1,
  },
  commonLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 2,
  },
  commonEn: {
    fontSize: 12,
    color: "#9E9E9E",
    fontWeight: "500",
  },
  // Scene List Styles
  sceneListSection: {
    marginBottom: 24,
  },
  sceneListContainer: {
    flex: 1,
  },
  contextScrollView: {
    flex: 1,
  },
  sceneListStickyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    zIndex: 1,
  },
  sceneCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  sceneCardContent: {
    flex: 1,
  },
  sceneTitleZh: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 2,
  },
  sceneTitleEn: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
  },
  sceneDescription: {
    fontSize: 12,
    color: "#9E9E9E",
  },
  sceneCardRight: {
    alignItems: "flex-end",
    marginLeft: 12,
  },
  scenePhraseCount: {
    fontSize: 12,
    color: "#FFD200",
    fontWeight: "600",
    marginBottom: 4,
  },
  // Inline Scene List Styles
  inlineSceneListHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  inlineBackButton: {
    flexDirection: "row",
    alignItems: "center",
    flexShrink: 1,
  },
  inlineBackButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1c1c1e",
    marginLeft: 4,
    flexShrink: 1,
  },
  inlineSceneCountText: {
    fontSize: 13,
    color: "#666",
    fontWeight: "500",
  },
  inlineSceneList: {
    marginTop: 8,
  },
  inlineSceneCardSingle: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  inlineSceneCardSingleContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inlineSceneCardSingleInfo: {
    flex: 1,
    marginRight: 12,
  },
  inlineSceneCardSingleRight: {
    alignItems: "flex-end",
  },
  inlineSceneTitleEnSingle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1c1c1e",
    marginBottom: 2,
  },
  inlineSceneTitleZhSingle: {
    fontSize: 13,
    color: "#666",
    marginBottom: 4,
  },
  inlineSceneDescSingle: {
    fontSize: 12,
    color: "#9E9E9E",
    lineHeight: 16,
  },
  inlineScenePhraseCountSingle: {
    fontSize: 12,
    color: "#FFD200",
    fontWeight: "600",
    marginBottom: 4,
  },
  inlineSceneGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  inlineSceneCard: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  inlineSceneTitleEn: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
    marginBottom: 2,
  },
  inlineSceneTitleZh: {
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  inlineSceneDesc: {
    fontSize: 11,
    color: "#9E9E9E",
    marginBottom: 6,
    lineHeight: 14,
  },
  inlineScenePhraseCount: {
    fontSize: 11,
    color: "#FFD200",
    fontWeight: "600",
  },
  viewAllButton: {
    marginTop: 16,
    alignItems: "center",
    paddingVertical: 12,
    backgroundColor: "#FFD200",
    borderRadius: 12,
  },
  viewAllButtonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1c1c1e",
  },
  sceneCountText: {
    fontSize: 13,
    color: "#9E9E9E",
    fontWeight: "500",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 8,
  },
  backButtonText: {
    fontSize: 13,
    color: "#1c1c1e",
    fontWeight: "500",
  },
  phrasesHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  // Speaker badge styles
  speakerBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    backgroundColor: "#E8F5E9",
    borderRadius: 4,
  },
  speakerBadgeThem: {
    backgroundColor: "#E3F2FD",
  },
  speakerBadgeText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#2E7D32",
  },
  speakerBadgeTextThem: {
    color: "#1976D2",
  },
  phraseEnThem: {
    color: "#1976D2",
  },
  // Them turn display (response from other person)
  themTurnContainer: {
    marginTop: 8,
    padding: 12,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    borderLeftWidth: 3,
    borderLeftColor: "#1976D2",
  },
  themTurnLabel: {
    fontSize: 10,
    fontWeight: "600",
    color: "#1976D2",
    marginBottom: 4,
  },
  themTurnEn: {
    fontSize: 14,
    color: "#666",
    fontStyle: "italic",
  },
  themTurnVi: {
    fontSize: 12,
    color: "#9E9E9E",
    marginTop: 2,
  },
});
