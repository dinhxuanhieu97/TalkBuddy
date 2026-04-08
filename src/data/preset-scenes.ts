import {
  AIRPORT_SCENES,
  HOTEL_SCENES,
  RESTAURANT_SCENES,
  SHOPPING_SCENES,
  TRANSPORT_SCENES,
  MEDICAL_SCENES,
  SOCIAL_SCENES,
  EMERGENCY_SCENES,
  FOUNDATION_SCENES,
  ENTERTAINMENT_SCENES,
  BANKING_SCENES,
  ACCOMMODATION_SCENES,
  DAILY_LIFE_SCENES,
  // Expansion scenes (V2)
  AIRPORT_SCENES_EXT,
  HOTEL_SCENES_EXT,
  RESTAURANT_SCENES_EXT,
  SHOPPING_SCENES_EXT,
  TRANSPORT_SCENES_EXT,
  MEDICAL_SCENES_EXT,
  SOCIAL_SCENES_EXT,
  EMERGENCY_SCENES_EXT,
  ENTERTAINMENT_SCENES_EXT,
  FOUNDATION_SCENES_EXT,
  BANKING_SCENES_EXT,
  ACCOMMODATION_SCENES_EXT,
  DAILY_LIFE_SCENES_EXT,
} from "./scenes";

// Re-export micro-interactions
export { MICRO_INTERACTIONS } from "./micro-interactions";

// Re-export types from the new data model
export type {
  PresetScene,
  DialogueFlow,
  DialogueTurn,
  PresetPhrase,
  AlternativeExpression,
  SubScene,
  MicroInteractionGroup,
  MicroInteraction,
} from "./scene-types";
export {
  turnToPhrase,
  getLearnableTurns,
  getSpeakingTurns,
  getListeningTurns,
  countUniqueTurns,
} from "./scene-types";

// Re-import for local use
import type { PresetScene, PresetPhrase } from "./scene-types";

// ============================================================
// Aggregated scene list — single source of truth
// ============================================================

export const PRESET_SCENES: PresetScene[] = [
  // Core scenes (V1.5)
  ...AIRPORT_SCENES,
  ...HOTEL_SCENES,
  ...RESTAURANT_SCENES,
  ...SHOPPING_SCENES,
  ...TRANSPORT_SCENES,
  ...MEDICAL_SCENES,
  ...SOCIAL_SCENES,
  ...EMERGENCY_SCENES,
  ...FOUNDATION_SCENES,
  ...ENTERTAINMENT_SCENES,
  ...BANKING_SCENES,
  ...ACCOMMODATION_SCENES,
  ...DAILY_LIFE_SCENES,
  // Expansion scenes (V2)
  ...AIRPORT_SCENES_EXT,
  ...HOTEL_SCENES_EXT,
  ...RESTAURANT_SCENES_EXT,
  ...SHOPPING_SCENES_EXT,
  ...TRANSPORT_SCENES_EXT,
  ...MEDICAL_SCENES_EXT,
  ...SOCIAL_SCENES_EXT,
  ...EMERGENCY_SCENES_EXT,
  ...ENTERTAINMENT_SCENES_EXT,
  ...FOUNDATION_SCENES_EXT,
  ...BANKING_SCENES_EXT,
  ...ACCOMMODATION_SCENES_EXT,
  ...DAILY_LIFE_SCENES_EXT,
];

// ============================================================
// Precomputed indexes — O(1) lookups (built once at module load)
// ============================================================

/** ID → Scene map for O(1) lookup */
const SCENE_BY_ID = new Map<string, PresetScene>();

/** Category → Scene[] map for O(1) category filtering */
const SCENES_BY_CATEGORY = new Map<string, PresetScene[]>();

/** Scene ID → index within its category (for subscription gating) */
const SCENE_INDEX_IN_CATEGORY = new Map<string, number>();

/** Scene ID → phrases cache (avoids repeated extraction) */
const PHRASES_CACHE = new Map<string, PresetPhrase[]>();

// Build all indexes in a single pass
for (const scene of PRESET_SCENES) {
  SCENE_BY_ID.set(scene.id, scene);

  let catList = SCENES_BY_CATEGORY.get(scene.category);
  if (!catList) {
    catList = [];
    SCENES_BY_CATEGORY.set(scene.category, catList);
  }
  SCENE_INDEX_IN_CATEGORY.set(scene.id, catList.length);
  catList.push(scene);
}

// ============================================================
// Query helpers (O(1) instead of O(n))
// ============================================================

/** Get scenes filtered by category */
export function getScenesByCategory(category: string): PresetScene[] {
  if (category === "all") return [...PRESET_SCENES];
  const list = SCENES_BY_CATEGORY.get(category);
  return list ? [...list] : [];
}

/** Get a single scene by ID — O(1) */
export function getSceneById(id: string): PresetScene | undefined {
  return SCENE_BY_ID.get(id);
}

/** Get the index of a scene within its category — O(1) */
export function getSceneIndexInCategory(sceneId: string): number {
  return SCENE_INDEX_IN_CATEGORY.get(sceneId) ?? -1;
}

// ============================================================
// Backward compatibility: flatten flows → phrases
// ============================================================

/**
 * Get a flat list of "you" phrases from a scene (for existing components).
 * Maps each "you" turn from the first (basic) flow into a PresetPhrase.
 */
export function getBasicPhrases(scene: PresetScene): PresetPhrase[] {
  const basicFlow =
    scene.flows.find((f) => f.difficulty === "basic") ?? scene.flows[0];
  if (!basicFlow) return [];

  return basicFlow.turns
    .filter((t) => t.speaker === "you")
    .map((t) => ({
      textEn: t.textEn,
      textZh: t.textZh,
      culturalNote: t.culturalNote,
      casualVersion: t.casualVersion,
      speaker: t.speaker,
      role: t.role,
    }));
}

/**
 * Legacy-compatible phrases getter (memoized).
 * Returns all turns from the first flow as PresetPhrase[].
 */
export function getAllPhrasesFromScene(scene: PresetScene): PresetPhrase[] {
  const cached = PHRASES_CACHE.get(scene.id);
  if (cached) return cached;

  const basicFlow =
    scene.flows.find((f) => f.difficulty === "basic") ?? scene.flows[0];
  if (!basicFlow) return [];

  const phrases = basicFlow.turns.map((t) => ({
    textEn: t.textEn,
    textZh: t.textZh,
    culturalNote: t.culturalNote,
    casualVersion: t.casualVersion,
    speaker: t.speaker,
    role: t.role,
    variations: t.variations,
    keyPhrases: t.keyPhrases,
    responseTip: t.responseTip,
  }));

  PHRASES_CACHE.set(scene.id, phrases);
  return phrases;
}
