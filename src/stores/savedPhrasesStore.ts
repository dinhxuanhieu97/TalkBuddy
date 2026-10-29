import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface SavedPhrase {
  id: string;
  en: string;
  vi: string;
  level: string;
  contextLabel: string;
  savedAt: string;
}

type PhraseInput = Omit<SavedPhrase, "savedAt">;

interface SavedPhrasesState {
  phrases: SavedPhrase[];
  togglePhrase: (phrase: PhraseInput) => void;
  isSaved: (id: string) => boolean;
  removePhrase: (id: string) => void;
  clearAll: () => void;
}

export const useSavedPhrasesStore = create<SavedPhrasesState>()(
  persist(
    (set, get) => ({
      phrases: [],

      togglePhrase: (phrase) => {
        const { phrases } = get();
        const exists = phrases.some((p) => p.id === phrase.id);
        if (exists) {
          set({ phrases: phrases.filter((p) => p.id !== phrase.id) });
        } else {
          set({
            phrases: [
              { ...phrase, savedAt: new Date().toISOString() },
              ...phrases,
            ],
          });
        }
      },

      isSaved: (id) => {
        return get().phrases.some((p) => p.id === id);
      },

      removePhrase: (id) => {
        set({ phrases: get().phrases.filter((p) => p.id !== id) });
      },

      clearAll: () => set({ phrases: [] }),
    }),
    {
      name: "talkbuddy-saved-phrases",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
