import type { SceneCategory, JourneyPhase, ScenePriority } from "@/types";

// ============================================================
// Dialogue-based Scene Data Model (V1.5)
// Category → SubScene → PresetScene → DialogueFlow → DialogueTurn
// ============================================================

// ------------------------------------------------------------
// AlternativeExpression — structured "听力防护网"
// ------------------------------------------------------------

/** A structured alternative expression for "them" turns */
export interface AlternativeExpression {
  /** English text of the alternative phrasing */
  textEn: string;
  /** Chinese translation */
  textZh: string;
  /** Action hint — what to do when you hear this. e.g. "跟着走就行" */
  actionHint: string;
  /** How commonly you'd hear this version */
  frequency: "common" | "occasional" | "rare";
}

// ------------------------------------------------------------
// DialogueTurn — single line of dialogue (V1.5 升级)
// ------------------------------------------------------------

/** A single line of dialogue */
export interface DialogueTurn {
  /** Who speaks this line */
  speaker: "you" | "them";

  /** English text */
  textEn: string;

  /** Chinese translation */
  textZh: string;

  /** Role label for "them" speaker, e.g. "前台", "服务员", "海关官员" */
  role?: string;

  /** Casual/colloquial alternative */
  casualVersion?: string;

  /** Formal version */
  formalVersion?: string;

  /** Cultural tip or usage note */
  culturalNote?: string;

  /**
   * V1.5: Contextual vocabulary notes — meaning of words IN THIS CONTEXT.
   * Not a generic dictionary, but "在这句话里表示什么".
   * Key is the English word, value has contextual meaning and similar usage.
   */
  vocabNotes?: Record<
    string,
    {
      /** Meaning in this specific context. e.g. "在这句话里表示：可以（请求许可）" */
      meaningInContext: string;
      /** Similar usage example. e.g. "类似用法：May I have a seat?" */
      similarUsage?: string;
    }
  >;

  /**
   * V1.5: Structured alternative expressions for "them" turns.
   * Replaces simple `variations` — now with actionHint and frequency.
   * This is the "听力防护网": helps learners recognize the same meaning in different words.
   */
  alternativeExpressions?: AlternativeExpression[];

  /**
   * V1.5: Local/native expressions by region.
   * Key is locale code, value is how locals actually say it.
   * Links to user's accent setting to show the most relevant variant.
   * e.g. { "en-US": "Where's the restroom?", "en-GB": "Where's the loo?" }
   */
  localVariants?: Record<string, string>;

  /**
   * V1.5: Literal meaning — when the literal translation ≠ actual meaning.
   * e.g. "What's up?" literal = "什么在上面？", actual = "你好/怎么样"
   */
  literalMeaning?: string;

  /**
   * V1.5: Cultural meaning — what this phrase actually means in context.
   * e.g. "吃了吗？" culturalMeaning = "这是打招呼，不是真的问你吃没吃"
   */
  culturalMeaning?: string;

  /**
   * @deprecated Use alternativeExpressions instead. Kept for backward compatibility.
   * For "them" turns: other ways they might phrase the same thing.
   */
  variations?: { textEn: string; textZh: string }[];

  /**
   * Key phrases to listen for in "them" turns.
   * These are the critical words/phrases the learner must understand.
   */
  keyPhrases?: { en: string; zh: string }[];

  /**
   * Tip for how to respond to this turn (shown for "them" turns).
   * e.g. "这时你需要出示护照"
   */
  responseTip?: string;

  /**
   * Marks a point where the conversation can branch.
   * Helps learner understand "here, different things might happen."
   */
  isBranchPoint?: boolean;

  /** Description of what branch this turn represents */
  branchLabel?: string;
}

// ------------------------------------------------------------
// DialogueFlow — complete conversation path
// ------------------------------------------------------------

/** A complete conversation path through a scene */
export interface DialogueFlow {
  /** Unique flow ID within the scene */
  id: string;

  /** Chinese title, e.g. "标准入住" */
  titleZh: string;

  /** English title, e.g. "Standard Check-in" */
  titleEn: string;

  /** Brief description of this path, e.g. "有预订、一切顺利的标准流程" */
  description: string;

  /** Difficulty: basic flows first, edge cases later */
  difficulty: "basic" | "intermediate" | "advanced";

  /** Ordered dialogue turns */
  turns: DialogueTurn[];
}

// ------------------------------------------------------------
// PresetScene — complete scene with multiple paths (V1.5 升级)
// ------------------------------------------------------------

/** A complete scene with multiple conversation paths */
export interface PresetScene {
  /** Unique scene ID */
  id: string;

  /** Scene category */
  category: SceneCategory;

  /** V1.5: Which SubScene this belongs to */
  subSceneId?: string;

  /** V1.5: Where in the travel timeline. e.g. "airport", "daily" */
  journeyPhase?: JourneyPhase;

  /** V1.5: How likely a traveler needs this. "must" | "likely" | "rare" */
  priority?: ScenePriority;

  /** Chinese title */
  titleZh: string;

  /** English title */
  titleEn: string;

  /** Scene context — what situation is this? */
  description: string;

  /** Who you're talking to */
  otherRole: string;

  /** Icon for the other person's role (emoji) */
  otherRoleIcon?: string;

  /** Multiple dialogue flows (tree branches flattened to paths) */
  flows: DialogueFlow[];
}

// ------------------------------------------------------------
// SubScene — groups variant scenes under a category (V1.5 新增)
// ------------------------------------------------------------

/** A sub-scene groups related variant scenes within a category */
export interface SubScene {
  /** Unique sub-scene ID, e.g. "airport-checkin" */
  id: string;

  /** Which category this belongs to */
  category: SceneCategory;

  /** Chinese title, e.g. "值机" */
  titleZh: string;

  /** English title, e.g. "Check-in" */
  titleEn: string;

  /** Brief description */
  description: string;

  /** Display order within the category */
  order: number;
}

// ------------------------------------------------------------
// MicroInteraction — high-frequency 3-second dialogues (V1.5 新增)
// ------------------------------------------------------------

/** A group of micro-interactions (e.g. "付款时会听到的话") */
export interface MicroInteractionGroup {
  /** Unique group ID */
  id: string;

  /** Chinese title, e.g. "付款时会听到的话" */
  titleZh: string;

  /** English title, e.g. "What You'll Hear at Checkout" */
  titleEn: string;

  /** Emoji icon */
  icon: string;

  /** The micro-interaction items */
  items: MicroInteraction[];
}

/** A single micro-interaction — a 3-second real-life exchange */
export interface MicroInteraction {
  /** What you'll hear or need to say */
  textEn: string;

  /** Chinese translation */
  textZh: string;

  /** How to respond (if applicable) */
  responseEn?: string;

  /** Response translation */
  responseZh?: string;

  /** Cultural note explaining why/when this happens */
  note?: string;
}

// ============================================================
// Helper types & functions
// ============================================================

/** Flat phrase for backward compat with existing learning components */
export interface PresetPhrase {
  textEn: string;
  textZh: string;
  culturalNote?: string;
  casualVersion?: string;
  /** Extended fields for dialogue context */
  speaker?: "you" | "them";
  role?: string;
  variations?: { textEn: string; textZh: string }[];
  keyPhrases?: { en: string; zh: string }[];
  responseTip?: string;
  /** V1.5 fields (optional for backward compat) */
  vocabNotes?: DialogueTurn["vocabNotes"];
  alternativeExpressions?: AlternativeExpression[];
  localVariants?: Record<string, string>;
  literalMeaning?: string;
  culturalMeaning?: string;
}

/** Convert a DialogueTurn to a PresetPhrase (backward compat) */
export function turnToPhrase(turn: DialogueTurn): PresetPhrase {
  return {
    textEn: turn.textEn,
    textZh: turn.textZh,
    culturalNote: turn.culturalNote,
    casualVersion: turn.casualVersion,
    speaker: turn.speaker,
    role: turn.role,
    variations: turn.variations,
    keyPhrases: turn.keyPhrases,
    responseTip: turn.responseTip,
    vocabNotes: turn.vocabNotes,
    alternativeExpressions: turn.alternativeExpressions,
    localVariants: turn.localVariants,
    literalMeaning: turn.literalMeaning,
    culturalMeaning: turn.culturalMeaning,
  };
}

/** Get all learnable turns from a scene (across all flows) */
export function getLearnableTurns(scene: PresetScene): {
  turn: DialogueTurn;
  flowId: string;
  turnIndex: number;
  /** Progress key: "sceneId:flowId-turnIndex" */
  progressKey: string;
}[] {
  const result: {
    turn: DialogueTurn;
    flowId: string;
    turnIndex: number;
    progressKey: string;
  }[] = [];

  for (const flow of scene.flows) {
    for (let i = 0; i < flow.turns.length; i++) {
      result.push({
        turn: flow.turns[i],
        flowId: flow.id,
        turnIndex: i,
        progressKey: `${scene.id}:${flow.id}-${i}`,
      });
    }
  }

  return result;
}

/** Get "you" turns only (for speaking practice) */
export function getSpeakingTurns(scene: PresetScene) {
  return getLearnableTurns(scene).filter((t) => t.turn.speaker === "you");
}

/** Get "them" turns only (for listening comprehension) */
export function getListeningTurns(scene: PresetScene) {
  return getLearnableTurns(scene).filter((t) => t.turn.speaker === "them");
}

/** Count total turns across all flows (deduplicated by textEn) */
export function countUniqueTurns(scene: PresetScene): {
  total: number;
  you: number;
  them: number;
} {
  const seen = new Set<string>();
  let you = 0;
  let them = 0;

  for (const flow of scene.flows) {
    for (const turn of flow.turns) {
      if (!seen.has(turn.textEn)) {
        seen.add(turn.textEn);
        if (turn.speaker === "you") you++;
        else them++;
      }
    }
  }

  return { total: you + them, you, them };
}
