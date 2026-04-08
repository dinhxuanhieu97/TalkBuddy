import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { useSyncExternalStore } from "react";
import {
  Plane,
  Building2,
  UtensilsCrossed,
  ShoppingBag,
  Car,
  HeartPulse,
  MessageCircle,
  ShieldAlert,
  Drama,
  Landmark,
  Home,
  Scissors,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

/** Merge Tailwind CSS classes without conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Speed multiplier for TTS */
export const SPEECH_SPEED_MAP = {
  slow: 0.7,
  normal: 1.0,
  fast: 1.2,
} as const;

/** Google Cloud TTS Journey voice names by accent (most natural) */
export const VOICE_MAP = {
  "en-US": { female: "en-US-Journey-F", male: "en-US-Journey-D" },
  "en-GB": { female: "en-GB-Journey-F", male: "en-GB-Journey-D" },
  "en-AU": { female: "en-AU-Journey-F", male: "en-AU-Journey-D" },
} as const;

/** Scene category labels (zh/en) with Lucide icons */
export const SCENE_CATEGORY_LABELS: Record<
  string,
  { zh: string; en: string; icon: LucideIcon }
> = {
  airport: { zh: "机场", en: "Airport", icon: Plane },
  hotel: { zh: "酒店", en: "Hotel", icon: Building2 },
  restaurant: { zh: "餐厅", en: "Restaurant", icon: UtensilsCrossed },
  shopping: { zh: "购物", en: "Shopping", icon: ShoppingBag },
  transport: { zh: "交通", en: "Transport", icon: Car },
  medical: { zh: "就医", en: "Medical", icon: HeartPulse },
  social: { zh: "社交", en: "Social", icon: MessageCircle },
  emergency: { zh: "紧急", en: "Emergency", icon: ShieldAlert },
  entertainment: { zh: "娱乐", en: "Entertainment", icon: Drama },
  banking: { zh: "银行通讯", en: "Banking & Telecom", icon: Landmark },
  accommodation: { zh: "住宿", en: "Accommodation", icon: Home },
  "daily-life": { zh: "日常生活", en: "Daily Life", icon: Scissors },
  foundation: { zh: "基础", en: "Foundation", icon: GraduationCap },
};

/** Map otherRoleIcon string keys to Lucide icons */
export { ROLE_ICON_MAP } from "@/lib/role-icons";

/** Format milliseconds to mm:ss */
export function formatDuration(ms: number): string {
  const seconds = Math.floor(ms / 1000);
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

/** Retry wrapper with exponential backoff */
export async function withRetry<T>(
  fn: () => Promise<T>,
  options: { maxRetries?: number; baseDelayMs?: number } = {}
): Promise<T> {
  const { maxRetries = 3, baseDelayMs = 1000 } = options;

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries) throw error;
      const delay = baseDelayMs * Math.pow(2, attempt);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }

  throw new Error("Unreachable");
}

// ============================================================
// Hydration-safe mounted check (React 19 compatible)
// ============================================================

const emptySubscribe = () => () => {};

/**
 * Returns `true` on the client after hydration, `false` during SSR/initial render.
 * Uses useSyncExternalStore to avoid the React Compiler warning
 * about setState inside useEffect.
 */
export function useHydrated(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,   // client
    () => false    // server
  );
}
