import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import zh, { type LocaleKeys } from "../locales/zh";
import en from "../locales/en";
import vi from "../locales/vi";

export type { LocaleKeys };

// ============================================================
// Locale Store
// ============================================================

export type Locale = "en" | "zh" | "vi";

export const LOCALE_OPTIONS: {
  value: Locale;
  labelKey: LocaleKeys;
  descKey: LocaleKeys;
  flag: string;
}[] = [
  { value: "en", labelKey: "lang.en", descKey: "lang.enDesc", flag: "US" },
  { value: "zh", labelKey: "lang.zh", descKey: "lang.zhDesc", flag: "CN" },
  { value: "vi", labelKey: "lang.vi", descKey: "lang.viDesc", flag: "VN" },
];

// Detect device locale on first launch
function getInitialLocale(): Locale {
  try {
    const deviceLocale = Localization.getLocales()[0]?.languageCode ?? "en";
    if (deviceLocale === "vi") return "vi";
    if (deviceLocale === "zh") return "zh";
    return "en";
  } catch {
    return "en";
  }
}

interface LocaleState {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

export const useLocaleStore = create<LocaleState>()(
  persist(
    (set) => ({
      locale: getInitialLocale() as Locale,
      setLocale: (locale) => set({ locale }),
    }),
    {
      name: "talkbuddy-locale-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

// ============================================================
// Translation dictionaries
// ============================================================

const dictionaries: Record<Locale, Record<LocaleKeys, string>> = { en, zh, vi };

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
  const locale = useLocaleStore((s) => s.locale);
  const dict = dictionaries[locale];

  return function t(
    key: LocaleKeys,
    params?: Record<string, string | number>,
  ): string {
    let text = dict[key] ?? en[key] ?? key;
    if (params) {
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, "g"), String(v));
      }
    }
    return text;
  };
}
