import { useState, useMemo, useCallback, useRef, useEffect } from "react";

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
};

const CONTEXTS: {
  id: string;
  icon: string;
  emoji: string;
}[] = [
  { id: "airport", icon: "airplane", emoji: "\u2708\uFE0E" },
  { id: "medical", icon: "medical", emoji: "\u{1F3E5}" },
  { id: "hotel", icon: "bed", emoji: "\u{1F3E8}" },
  { id: "restaurant", icon: "restaurant", emoji: "\u{1F37D}\uFE0E" },
  { id: "emergency", icon: "shield", emoji: "\u{1F6E1}\uFE0E" },
  { id: "shopping", icon: "cart", emoji: "\u{1F6CD}\uFE0E" },
  { id: "transport", icon: "bus", emoji: "\u{1F68C}" },
  { id: "banking", icon: "business", emoji: "\u{1F3E6}" },
  { id: "accommodation", icon: "home", emoji: "\u{1F3E0}" },
  { id: "social", icon: "people", emoji: "\u{1F465}" },
  { id: "entertainment", icon: "film", emoji: "\u{1F3AC}" },
  { id: "foundation", icon: "book", emoji: "\u{1F4DA}" },
  { id: "daily-life", icon: "calendar", emoji: "\u{1F4C5}" },
];

// Filter contexts that have scenes (avoid empty categories)
const CONTEXTS_WITH_SCENES = CONTEXTS.filter(
  (ctx) => getScenesByCategory(ctx.id).length > 0,
);

// Get scenes by category using preset-scenes.ts helpers
const getScenesForCategory = (categoryId: string): PresetScene[] => {
  return getScenesByCategory(categoryId);
};

type Phrase = {
  id: string;
  en: string;
  vi: string;
  level: "Basic" | "Intermediate" | "Advanced";
  contextLabel: string;
  speaker: "you" | "them";
  role?: string;
  themEn?: string;
  themVi?: string;
};

// Convert difficulty from web format to display format
function getDifficultyLabel(
  difficulty: string,
): "Basic" | "Intermediate" | "Advanced" {
  switch (difficulty) {
    case "basic":
      return "Basic";
    case "intermediate":
      return "Intermediate";
    case "advanced":
      return "Advanced";
    default:
      return "Basic";
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

export default function LearnScreen() {
  const insets = useSafeAreaInsets();
  const t = useT();
  const [selectedContext, setSelectedContext] = useState<string | null>(null);
  const [selectedScene, setSelectedScene] = useState<PresetScene | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 300);
  const [difficultyFilter, setDifficultyFilter] = useState<
    "all" | "Basic" | "Intermediate" | "Advanced"
  >("all");
  const {
    phrases: savedPhrasesList,
    togglePhrase,
    isSaved,
  } = useSavedPhrasesStore();
  const [expandedPhraseId, setExpandedPhraseId] = useState<string | null>(null);
  const [playingPhraseId, setPlayingPhraseId] = useState<string | null>(null);
  const [activePractice, setActivePractice] = useState<{
    mode: "practice" | "dictation" | "shadow";
    phrase: Phrase;
  } | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPlayingAll, setIsPlayingAll] = useState(false);
  const [playingTurnIndex, setPlayingTurnIndex] = useState<number | null>(null);
  const [scrollOffset, setScrollOffset] = useState(0);
  const isPlayingAllRef = useRef(false); // Ref for loop to check current state
  const scrollViewRef = useRef<ScrollView>(null);
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
          setRecentScenes(JSON.parse(savedScenes).slice(0, 5));
        }
        // Load category progress
        const savedProgress = await AsyncStorage.getItem("categoryProgress");
        if (savedProgress) {
          setCategoryProgress(JSON.parse(savedProgress));
        }
        // Load popular phrases
        const savedPopular = await AsyncStorage.getItem("popularPhrases");
        if (savedPopular) {
          setPopularPhrases(JSON.parse(savedPopular));
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
        const updated = [
          newEntry,
          ...recentScenes.filter(
            (r) => !(r.contextId === contextId && r.sceneName === sceneName),
          ),
        ].slice(0, 5);
        setRecentScenes(updated);
        await AsyncStorage.setItem("recentScenes", JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save recent scene:", e);
      }
    },
    [recentScenes],
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

  // Get scenes for selected category
  const categoryScenes = selectedContext
    ? getScenesByCategory(selectedContext)
    : [];

  // Get phrases - either from selected scene or all phrases in category
  const phrases = useMemo(() => {
    if (selectedScene) {
      return convertScenesToPhrases([selectedScene]);
    }
    return selectedContext ? getPhrasesForContext(selectedContext) : [];
  }, [selectedContext, selectedScene]);

  const sceneCount = selectedContext
    ? getScenesByCategory(selectedContext).length
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
    if (difficultyFilter !== "all") {
      result = result.filter((p) => p.level === difficultyFilter);
    }

    // Apply search filter if exists
    if (debouncedSearchQuery && matchingScenes.length > 0) {
      const searchResult: Phrase[] = [];
      matchingScenes.forEach(({ scenes }) => {
        const scenePhrases = convertScenesToPhrases(scenes);
        searchResult.push(...scenePhrases);
      });
      result =
        difficultyFilter !== "all"
          ? searchResult.filter((p) => p.level === difficultyFilter)
          : searchResult;
    }

    return result;
  }, [debouncedSearchQuery, phrases, matchingScenes, difficultyFilter]);

  const toggleSave = useCallback(
    (phrase: Phrase) => {
      togglePhrase(phrase);
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
        accent: "en-US",
        speed: "normal",
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
      console.log("[TTS] Stopping playback");
      isPlayingAllRef.current = false;
      await stopSpeaking();
      setIsPlayingAll(false);
      setPlayingTurnIndex(null);
      return;
    }

    if (phrases.length === 0) {
      console.log("[TTS] No phrases to play");
      return;
    }

    console.log(`[TTS] Starting playback of ${phrases.length} phrases`);
    isPlayingAllRef.current = true;
    setIsPlayingAll(true);

    for (let i = 0; i < phrases.length; i++) {
      // Check if stopped using ref (not state)
      if (!isPlayingAllRef.current) {
        console.log("[TTS] Playback stopped by user");
        break;
      }

      console.log(
        `[TTS] Playing phrase ${i + 1}/${phrases.length}: "${phrases[i].en}"`,
      );
      setPlayingTurnIndex(i);

      // Auto-scroll to current phrase - position at bottom of visible area
      setTimeout(() => {
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
          accent: "en-US",
          speed: "normal",
        });
        console.log(`[TTS] Phrase ${i + 1} completed`);
      } catch (error) {
        console.error(`[TTS] Error on phrase ${i + 1}:`, error);
        // Continue to next phrase even on error
      }

      // Check again after speak completes using ref
      if (!isPlayingAllRef.current) {
        console.log("[TTS] Playback stopped by user after speak");
        break;
      }

      // Small delay between phrases
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    console.log("[TTS] Playback completed");
    isPlayingAllRef.current = false;
    setIsPlayingAll(false);
    setPlayingTurnIndex(null);
  };

  const handleSearchChange = (text: string) => {
    setSearchQuery(text);
    if (text) {
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
      {/* Header */}
      <View style={[styles.header, { paddingTop: insets.top + 20 }]}>
        <View style={styles.headerContent}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerSubtitle}>
              {t("learn.headerSubtitle")}
            </Text>
            <Text style={styles.headerTitle}>{t("learn.headerTitle")}</Text>
          </View>
          <TouchableOpacity style={styles.profileButton} onPress={() => {}}>
            <View style={styles.profileAvatar}>
              <Ionicons name="person" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
        </View>

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

        {/* Sticky button in header - shows when scrolled past original button */}
        {selectedContext &&
          phrases.length > 0 &&
          isPlayingAll &&
          scrollOffset > 50 && (
            <View style={styles.stickyButtonWrapper}>
              <TouchableOpacity
                style={[styles.playAllButton, styles.playAllButtonActive]}
                onPress={handlePlayAll}
              >
                <Ionicons name="stop" size={18} color="#fff" />
                <Text style={[styles.playAllText, styles.playAllTextActive]}>
                  Stop {(playingTurnIndex ?? 0) + 1}/{phrases.length}
                </Text>
              </TouchableOpacity>
            </View>
          )}
      </View>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={[
          styles.scrollContent,
          { paddingBottom: insets.bottom + 100 },
        ]}
        showsVerticalScrollIndicator={false}
      >
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
                    <Text style={styles.recentSceneIcon}>
                      {ctx?.emoji || "📚"}
                    </Text>
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

        {/* Contexts */}
        {!searchQuery && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t("learn.chooseContext")}</Text>
            <View style={styles.contextGrid}>
              {CONTEXTS_WITH_SCENES.map((ctx) => {
                const progress = categoryProgress[ctx.id];
                const progressPercent = progress
                  ? Math.round((progress.learned / progress.total) * 100)
                  : 0;
                return (
                  <TouchableOpacity
                    key={ctx.id}
                    style={[
                      styles.contextCard,
                      selectedContext === ctx.id && styles.contextCardActive,
                    ]}
                    onPress={() =>
                      setSelectedContext(
                        selectedContext === ctx.id ? null : ctx.id,
                      )
                    }
                  >
                    <View style={styles.contextContent}>
                      <Text style={styles.contextIcon}>{ctx.emoji}</Text>
                      <Text
                        style={[
                          styles.contextName,
                          selectedContext === ctx.id &&
                            styles.contextNameActive,
                        ]}
                      >
                        {t(CONTEXT_ID_TO_KEY[ctx.id] as any)}
                      </Text>
                      {progress && progress.total > 0 && (
                        <View style={styles.progressContainer}>
                          <View style={styles.progressBar}>
                            <View
                              style={[
                                styles.progressFill,
                                { width: `${progressPercent}%` },
                              ]}
                            />
                          </View>
                          <Text style={styles.progressText}>
                            {progressPercent}%
                          </Text>
                        </View>
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        )}

        {/* Scene List - when category selected but no scene selected */}
        {selectedContext && !selectedScene && !searchQuery && (
          <View style={styles.sceneListSection}>
            <ScrollView
              style={styles.sceneListContainer}
              showsVerticalScrollIndicator={false}
              stickyHeaderIndices={[0]}
            >
              <View style={styles.sceneListStickyHeader}>
                <TouchableOpacity
                  onPress={() => setSelectedContext(null)}
                  style={styles.backButton}
                >
                  <Ionicons name="chevron-back" size={20} color="#1c1c1e" />
                  <Text style={styles.backButtonText}>Categories</Text>
                </TouchableOpacity>
                <Text style={styles.sceneCountText}>{sceneCount} scenes</Text>
              </View>
              {categoryScenes
                .filter((scene) => convertScenesToPhrases([scene]).length > 0)
                .map((scene) => {
                  const phraseCount = convertScenesToPhrases([scene]).length;
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
                        <Text style={styles.sceneTitleEn}>{scene.titleEn}</Text>
                        <Text style={styles.sceneTitleZh}>{scene.titleZh}</Text>
                        <Text style={styles.sceneDescription} numberOfLines={2}>
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
                })}
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
                    onPress={() => setSelectedScene(null)}
                    style={styles.backButton}
                  >
                    <Ionicons name="chevron-back" size={20} color="#1c1c1e" />
                    <Text style={styles.backButtonText}>Scenes</Text>
                  </TouchableOpacity>
                )}
                <Text style={styles.sectionTitle}>
                  {searchQuery
                    ? t("learn.searchResults")
                    : selectedScene
                      ? selectedScene.titleEn
                      : t("learn.phrases", {
                          context: selectedContext?.toUpperCase() || "",
                        })}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  setSelectedScene(null);
                  if (searchQuery) setSearchQuery("");
                }}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>{t("learn.close")}</Text>
              </TouchableOpacity>
            </View>

            {/* Difficulty Filter */}
            <View style={styles.difficultyFilter}>
              {(["all", "Basic", "Intermediate", "Advanced"] as const).map(
                (level) => (
                  <TouchableOpacity
                    key={level}
                    style={[
                      styles.difficultyButton,
                      difficultyFilter === level &&
                        styles.difficultyButtonActive,
                    ]}
                    onPress={() => setDifficultyFilter(level)}
                  >
                    <Text
                      style={[
                        styles.difficultyButtonText,
                        difficultyFilter === level &&
                          styles.difficultyButtonTextActive,
                      ]}
                    >
                      {level === "all" ? "All" : level}
                    </Text>
                  </TouchableOpacity>
                ),
              )}
            </View>

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
                          <View
                            style={[
                              styles.levelBadge,
                              phrase.level === "Advanced" &&
                                styles.levelBadgeAdvanced,
                              phrase.level === "Intermediate" &&
                                styles.levelBadgeIntermediate,
                            ]}
                          >
                            <Text style={styles.levelText}>{phrase.level}</Text>
                          </View>
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
                              phrase={phrase}
                              onClose={closePracticeMode}
                            />
                          ) : activePractice.mode === "dictation" ? (
                            <DictationMode
                              phrase={phrase}
                              onClose={closePracticeMode}
                            />
                          ) : (
                            <ShadowMode
                              phrase={phrase}
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

        {/* Empty State with Emergency Tip */}
        {!selectedContext && !searchQuery && (
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
                            <Text style={styles.commonEmoji}>
                              {ctx?.emoji || "📚"}
                            </Text>
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
                          icon: "🛂",
                        },
                        {
                          label: "Need a Doctor",
                          contextId: "medical",
                          icon: "🏥",
                        },
                        {
                          label: "Order Food",
                          contextId: "restaurant",
                          icon: "🍕",
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
                            <Text style={styles.commonEmoji}>{item.icon}</Text>
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
    fontSize: 12,
    color: "#666",
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1c1c1e",
  },
  profileButton: {
    marginLeft: 12,
  },
  profileAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
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
    borderWidth: 1,
    borderColor: "rgba(255, 210, 0, 0.3)",
  },
  searchIcon: {
    marginRight: 8,
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
  },
  recentSceneIcon: {
    fontSize: 28,
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
  contextGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  contextCard: {
    width: "23%",
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    paddingVertical: 8,
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
    fontSize: 28,
    marginBottom: 4,
  },
  contextName: {
    fontSize: 10,
    fontWeight: "700",
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
    fontSize: 28,
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
    maxHeight: 500,
  },
  sceneListStickyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  sceneTitleEn: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1c1c1e",
    marginBottom: 2,
  },
  sceneTitleZh: {
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
