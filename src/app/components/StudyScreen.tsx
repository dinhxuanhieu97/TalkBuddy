import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type PhonemeCard = {
  symbol: string;
  example: string;
  word: string;
  type: "vowel" | "consonant";
};

const PHONEMES: PhonemeCard[] = [
  { symbol: "/iː/", example: "ee", word: "sheep", type: "vowel" },
  { symbol: "/ɪ/", example: "i", word: "ship", type: "vowel" },
  { symbol: "/e/", example: "e", word: "bed", type: "vowel" },
  { symbol: "/æ/", example: "a", word: "cat", type: "vowel" },
  { symbol: "/ɑː/", example: "ar", word: "car", type: "vowel" },
  { symbol: "/ɒ/", example: "o", word: "hot", type: "vowel" },
  { symbol: "/ɔː/", example: "or", word: "law", type: "vowel" },
  { symbol: "/ʊ/", example: "oo", word: "foot", type: "vowel" },
  { symbol: "/uː/", example: "oo", word: "food", type: "vowel" },
  { symbol: "/ʌ/", example: "u", word: "cup", type: "vowel" },
  { symbol: "/ɜː/", example: "er", word: "bird", type: "vowel" },
  { symbol: "/ə/", example: "a", word: "about", type: "vowel" },
  { symbol: "/p/", example: "p", word: "pen", type: "consonant" },
  { symbol: "/b/", example: "b", word: "bad", type: "consonant" },
  { symbol: "/t/", example: "t", word: "ten", type: "consonant" },
  { symbol: "/d/", example: "d", word: "dog", type: "consonant" },
  { symbol: "/k/", example: "k", word: "key", type: "consonant" },
  { symbol: "/g/", example: "g", word: "go", type: "consonant" },
  { symbol: "/θ/", example: "th", word: "think", type: "consonant" },
  { symbol: "/ð/", example: "th", word: "this", type: "consonant" },
  { symbol: "/s/", example: "s", word: "see", type: "consonant" },
  { symbol: "/z/", example: "z", word: "zoo", type: "consonant" },
  { symbol: "/ʃ/", example: "sh", word: "she", type: "consonant" },
  { symbol: "/ʒ/", example: "s", word: "vision", type: "consonant" },
];

const PRACTICE_WORDS = [
  { word: "Beautiful", ipa: "/ˈbjuːtɪfʊl/", syllables: "beau-ti-ful", tip: "Stress on first syllable" },
  { word: "Comfortable", ipa: "/ˈkʌmftəbl/", syllables: "com-fort-a-ble", tip: "Often 3 syllables in natural speech" },
  { word: "Entrepreneur", ipa: "/ˌɒntrəprəˈnɜː/", syllables: "en-tre-pre-neur", tip: "Stress on last syllable" },
  { word: "February", ipa: "/ˈfebrʊəri/", syllables: "Feb-ru-ar-y", tip: "Second 'r' often dropped" },
  { word: "Particularly", ipa: "/pəˈtɪkjʊləli/", syllables: "par-tic-u-lar-ly", tip: "5 syllables" },
  { word: "Pronunciation", ipa: "/prəˌnʌnsiˈeɪʃn/", syllables: "pro-nun-ci-a-tion", tip: "Stress on 4th syllable" },
  { word: "Vocabulary", ipa: "/vəˈkæbjʊləri/", syllables: "vo-cab-u-la-ry", tip: "Stress on 2nd syllable" },
  { word: "Rhythm", ipa: "/ˈrɪðəm/", syllables: "rhyth-m", tip: "Silent 'h' in 'rh'" },
];

type Tab = "phonemes" | "practice" | "tongue";

const TONGUE_TWISTERS = [
  {
    text: "She sells seashells by the seashore.",
    focus: "/ʃ/ vs /s/",
    difficulty: "Easy",
  },
  {
    text: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
    focus: "/w/ sound",
    difficulty: "Medium",
  },
  {
    text: "Peter Piper picked a peck of pickled peppers.",
    focus: "/p/ sound",
    difficulty: "Easy",
  },
  {
    text: "The thirty-three thieves thought that they thrilled the throne throughout Thursday.",
    focus: "/θ/ vs /ð/",
    difficulty: "Hard",
  },
  {
    text: "Red lorry, yellow lorry.",
    focus: "/r/ vs /l/",
    difficulty: "Easy",
  },
];

export function StudyScreen() {
  const [activeTab, setActiveTab] = useState<Tab>("phonemes");
  const [selectedPhoneme, setSelectedPhoneme] = useState<PhonemeCard | null>(null);
  const [filter, setFilter] = useState<"all" | "vowel" | "consonant">("all");
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const filteredPhonemes =
    filter === "all" ? PHONEMES : PHONEMES.filter((p) => p.type === filter);

  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: "#F9F9F9" }}>
      {/* Header */}
      <div className="px-5 pt-14 pb-5" style={{ backgroundColor: "#1C1C1E" }}>
        <p style={{ fontSize: 12, color: "#FFD600", fontWeight: 700, letterSpacing: 0.5 }}>Study Mode</p>
        <h1 style={{ fontSize: 24, fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2 }}>
          Pronunciation
        </h1>
        <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
          Master English sounds & phonics
        </p>

        {/* Tab switcher */}
        <div
          className="flex gap-1 mt-4 p-1 rounded-2xl"
          style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
        >
          {[
            { id: "phonemes" as Tab, label: "Phonemes" },
            { id: "practice" as Tab, label: "Practice" },
            { id: "tongue" as Tab, label: "Tongue" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className="flex-1 py-2 rounded-xl transition-all"
              style={{
                backgroundColor: activeTab === t.id ? "#FFD600" : "transparent",
                color: activeTab === t.id ? "#1C1C1E" : "rgba(255,255,255,0.5)",
                fontSize: 12,
                fontWeight: 700,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {/* Phonemes Tab */}
        {activeTab === "phonemes" && (
          <div className="px-5 pt-4 pb-4">
            {/* Filter */}
            <div className="flex gap-2 mb-4">
              {(["all", "vowel", "consonant"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="px-4 py-1.5 rounded-full"
                  style={{
                    backgroundColor: filter === f ? "#1C1C1E" : "#FFFFFF",
                    color: filter === f ? "#FFD600" : "#9E9E9E",
                    fontSize: 12,
                    fontWeight: 700,
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    textTransform: "capitalize",
                  }}
                >
                  {f === "all" ? "All" : f === "vowel" ? "Vowels" : "Consonants"}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-4 gap-2">
              {filteredPhonemes.map((p, i) => (
                <motion.button
                  key={i}
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setSelectedPhoneme(p)}
                  className="rounded-2xl p-3 flex flex-col items-center gap-1"
                  style={{
                    backgroundColor: "#FFFFFF",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  }}
                >
                  <span
                    style={{
                      fontSize: 18,
                      fontWeight: 800,
                      color: p.type === "vowel" ? "#FFD600" : "#1C1C1E",
                    }}
                  >
                    {p.symbol}
                  </span>
                  <span style={{ fontSize: 9, color: "#9E9E9E", fontWeight: 600 }}>{p.word}</span>
                </motion.button>
              ))}
            </div>
          </div>
        )}

        {/* Practice Tab */}
        {activeTab === "practice" && (
          <div className="px-5 pt-6 pb-4">
            <p style={{ fontSize: 12, fontWeight: 700, color: "#9E9E9E", letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>
              Flashcard Practice
            </p>

            {/* Progress */}
            <div className="flex items-center gap-2 mb-6">
              <div className="flex-1 h-1.5 rounded-full" style={{ backgroundColor: "#E0E0E0" }}>
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${((practiceIndex + 1) / PRACTICE_WORDS.length) * 100}%`,
                    backgroundColor: "#FFD600",
                  }}
                />
              </div>
              <span style={{ fontSize: 12, color: "#9E9E9E", fontWeight: 700 }}>
                {practiceIndex + 1}/{PRACTICE_WORDS.length}
              </span>
            </div>

            {/* Flashcard */}
            <div
              onClick={() => setIsFlipped(!isFlipped)}
              className="w-full rounded-3xl cursor-pointer"
              style={{ height: 220, perspective: 1000 }}
            >
              <AnimatePresence mode="wait">
                {!isFlipped ? (
                  <motion.div
                    key="front"
                    initial={{ rotateY: -90 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: 90 }}
                    className="w-full h-full rounded-3xl flex flex-col items-center justify-center p-6"
                    style={{ backgroundColor: "#FFD600", backfaceVisibility: "hidden" }}
                  >
                    <p style={{ fontSize: 11, color: "rgba(28,28,30,0.5)", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>
                      TAP TO REVEAL IPA
                    </p>
                    <h2
                      style={{ fontSize: 36, fontWeight: 800, color: "#1C1C1E", textAlign: "center" }}
                    >
                      {PRACTICE_WORDS[practiceIndex].word}
                    </h2>
                    <p style={{ fontSize: 13, color: "rgba(28,28,30,0.5)", marginTop: 8 }}>
                      {PRACTICE_WORDS[practiceIndex].syllables}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="back"
                    initial={{ rotateY: 90 }}
                    animate={{ rotateY: 0 }}
                    exit={{ rotateY: -90 }}
                    className="w-full h-full rounded-3xl flex flex-col items-center justify-center p-6"
                    style={{ backgroundColor: "#1C1C1E" }}
                  >
                    <p style={{ fontSize: 11, color: "rgba(255,214,0,0.5)", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>
                      IPA Pronunciation
                    </p>
                    <h2 style={{ fontSize: 30, fontWeight: 800, color: "#FFD600", textAlign: "center" }}>
                      {PRACTICE_WORDS[practiceIndex].ipa}
                    </h2>
                    <div
                      className="mt-4 px-4 py-2 rounded-xl"
                      style={{ backgroundColor: "rgba(255,214,0,0.1)" }}
                    >
                      <p style={{ fontSize: 12, color: "rgba(255,255,255,0.7)", textAlign: "center" }}>
                        💡 {PRACTICE_WORDS[practiceIndex].tip}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex gap-3 mt-5">
              <button
                onClick={() => {
                  setPracticeIndex(Math.max(0, practiceIndex - 1));
                  setIsFlipped(false);
                }}
                className="flex-1 py-4 rounded-2xl"
                style={{
                  backgroundColor: "#FFFFFF",
                  color: "#1C1C1E",
                  fontSize: 14,
                  fontWeight: 700,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                }}
                disabled={practiceIndex === 0}
              >
                ← Prev
              </button>
              <button
                onClick={() => {
                  setPracticeIndex(Math.min(PRACTICE_WORDS.length - 1, practiceIndex + 1));
                  setIsFlipped(false);
                }}
                className="flex-1 py-4 rounded-2xl"
                style={{ backgroundColor: "#FFD600", color: "#1C1C1E", fontSize: 14, fontWeight: 700 }}
                disabled={practiceIndex === PRACTICE_WORDS.length - 1}
              >
                Next →
              </button>
            </div>

            {/* Listen button */}
            <button
              className="w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 mt-3"
              style={{ backgroundColor: "#1C1C1E" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="2.5">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
              </svg>
              <span style={{ color: "#FFD600", fontSize: 14, fontWeight: 700 }}>Listen to Pronunciation</span>
            </button>
          </div>
        )}

        {/* Tongue Twisters Tab */}
        {activeTab === "tongue" && (
          <div className="px-5 pt-4 pb-4">
            <p style={{ fontSize: 12, fontWeight: 700, color: "#9E9E9E", letterSpacing: 1, textTransform: "uppercase", marginBottom: 4 }}>
              Tongue Twisters
            </p>
            <p style={{ fontSize: 13, color: "#9E9E9E", marginBottom: 16, lineHeight: 1.5 }}>
              Practice tricky sounds with these classic exercises
            </p>

            <div className="flex flex-col gap-4">
              {TONGUE_TWISTERS.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-2xl p-4"
                  style={{ backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor:
                          t.difficulty === "Easy" ? "#E8F9EE" : t.difficulty === "Medium" ? "#FFF3CD" : "#FFE8E8",
                        color:
                          t.difficulty === "Easy" ? "#2ECC71" : t.difficulty === "Medium" ? "#F39C12" : "#E74C3C",
                        fontSize: 10,
                        fontWeight: 700,
                      }}
                    >
                      {t.difficulty}
                    </span>
                    <span
                      className="px-2.5 py-0.5 rounded-full"
                      style={{ backgroundColor: "#F3F3F5", color: "#9E9E9E", fontSize: 10, fontWeight: 700 }}
                    >
                      Focus: {t.focus}
                    </span>
                  </div>
                  <p style={{ fontSize: 15, fontWeight: 600, color: "#1C1C1E", lineHeight: 1.5, marginBottom: 12 }}>
                    "{t.text}"
                  </p>
                  <button
                    className="flex items-center gap-2 px-4 py-2 rounded-xl"
                    style={{ backgroundColor: "#FFD600" }}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#1C1C1E" strokeWidth="2.5">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    </svg>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#1C1C1E" }}>Listen</span>
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        <div style={{ height: 16 }} />
      </div>

      {/* Phoneme Detail Modal */}
      <AnimatePresence>
        {selectedPhoneme && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-end"
            style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 50 }}
            onClick={() => setSelectedPhoneme(null)}
          >
            <motion.div
              initial={{ y: 300 }}
              animate={{ y: 0 }}
              exit={{ y: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full rounded-t-3xl p-6"
              style={{ backgroundColor: "#FFFFFF" }}
            >
              <div className="w-10 h-1 rounded-full bg-gray-200 mx-auto mb-6" />
              <div className="flex items-center gap-4 mb-4">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center"
                  style={{ backgroundColor: selectedPhoneme.type === "vowel" ? "#FFD600" : "#1C1C1E" }}
                >
                  <span
                    style={{
                      fontSize: 24,
                      fontWeight: 900,
                      color: selectedPhoneme.type === "vowel" ? "#1C1C1E" : "#FFD600",
                    }}
                  >
                    {selectedPhoneme.symbol}
                  </span>
                </div>
                <div>
                  <p style={{ fontSize: 11, color: "#9E9E9E", fontWeight: 700, textTransform: "uppercase" }}>
                    {selectedPhoneme.type}
                  </p>
                  <h3 style={{ fontSize: 20, fontWeight: 800, color: "#1C1C1E" }}>
                    As in "{selectedPhoneme.word}"
                  </h3>
                  <p style={{ fontSize: 14, color: "#9E9E9E" }}>
                    Spelled as: "{selectedPhoneme.example}"
                  </p>
                </div>
              </div>
              <button
                className="w-full py-4 rounded-2xl flex items-center justify-center gap-2"
                style={{ backgroundColor: "#FFD600" }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1C1C1E" strokeWidth="2.5">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                </svg>
                <span style={{ fontWeight: 700, color: "#1C1C1E" }}>Hear the sound</span>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
