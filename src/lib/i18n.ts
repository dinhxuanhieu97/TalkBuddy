import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import zh from "../locales/zh";
import { type LocaleKeys } from "../locales/zh";

export type { LocaleKeys };

// ============================================================
// Locale Store
// ============================================================

export type Locale = "zh";

export const LOCALE_OPTIONS: {
  value: Locale;
  labelKey: LocaleKeys;
  descKey: LocaleKeys;
  flag: string;
}[] = [
  { value: "zh", labelKey: "lang.zh", descKey: "lang.zhDesc", flag: "CN" },
];

// Detect device locale on first launch
function getInitialLocale(): Locale {
  return "zh";
}

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: getInitialLocale() as Locale,
      setLocale: (locale) => set({ locale }),
      _hasHydrated: false,
      setHasHydrated: (state) => set({ _hasHydrated: state }),
    }),
    {
      name: "talkbuddy-locale-storage",
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);

export const useLocaleHydrated = () => useLocaleStore((s) => s._hasHydrated);

// ============================================================
// Translation dictionaries
// ============================================================

const dictionaries: Record<Locale, Record<string, string>> = {
  zh: zh as Record<string, string>,
};

// ============================================================
// useT hook — the main translation interface
// ============================================================

/**
 * Returns a `t` function that translates keys with optional interpolation.
 *
 * Usage:
 * ```tsx
 * const t = useT();
 * t("nav.learn")                    // → "学习"
 * t("learn.mastery", { percent: 85 }) // → "掌握度 85%"
 * ```
 */
export function useT() {
  // Force zh locale since the app only supports Chinese
  const locale: Locale = "zh";
  const dict = dictionaries[locale] || {};

  return function t(
    key: LocaleKeys,
    params?: Record<string, string | number>,
  ): string {
    let text = dict[key] ?? key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
      }
    }
    return text;
  };
}
