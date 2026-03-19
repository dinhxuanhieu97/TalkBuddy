import { useState } from "react";
import { motion } from "motion/react";

const AVATAR_URL = "https://images.unsplash.com/photo-1631284443067-d875ada6ff9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHlvdW5nJTIwd29tYW4lMjBzdHVkZW50JTIwc21pbGluZ3xlbnwxfHx8fDE3NzM4NDY3OTZ8MA&ixlib=rb-4.1.0&q=80&w=400";

const BADGES = [
  { emoji: "🔥", label: "7-Day Streak", earned: true },
  { emoji: "✈️", label: "Airport Pro", earned: true },
  { emoji: "🏥", label: "Medical Ready", earned: true },
  { emoji: "🗣️", label: "Phonetics Fan", earned: false },
  { emoji: "📚", label: "50 Phrases", earned: false },
  { emoji: "⭐", label: "Master", earned: false },
];

const SETTINGS = [
  { icon: "🔔", label: "Daily Reminder", value: "9:00 AM", hasToggle: true },
  { icon: "🌐", label: "Language", value: "Vietnamese → English" },
  { icon: "🎯", label: "Daily Goal", value: "10 phrases/day" },
  { icon: "🔊", label: "Sound Effects", value: "", hasToggle: true },
  { icon: "📊", label: "Progress Report", value: "Weekly" },
  { icon: "💾", label: "Clear History", value: "", danger: true },
];

export function ProfileScreen() {
  const [notifOn, setNotifOn] = useState(true);
  const [soundOn, setSoundOn] = useState(true);
  const [level, setLevel] = useState<"beginner" | "intermediate" | "advanced">("beginner");

  const stats = [
    { label: "Phrases\nLearned", value: "47" },
    { label: "Day\nStreak", value: "7" },
    { label: "Contexts\nMastered", value: "3" },
  ];

  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: "#F9F9F9" }}>
      {/* Header / Profile Card */}
      <div
        className="px-5 pt-14 pb-6"
        style={{ backgroundColor: "#1C1C1E" }}
      >
        <div className="flex items-center gap-4 mb-5">
          <div
            className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0"
            style={{ border: "3px solid #FFD600" }}
          >
            <img
              src={AVATAR_URL}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 style={{ fontSize: 20, fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2 }}>
              Minh Anh
            </h2>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", marginTop: 2 }}>
              minh.anh@email.com
            </p>
            <div
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full mt-2"
              style={{ backgroundColor: "rgba(255,214,0,0.15)" }}
            >
              <span style={{ fontSize: 10 }}>⭐</span>
              <span style={{ fontSize: 10, fontWeight: 700, color: "#FFD600", textTransform: "uppercase" }}>
                Beginner
              </span>
            </div>
          </div>
          <button
            className="ml-auto w-9 h-9 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex-1 rounded-2xl p-3 flex flex-col items-center"
              style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
            >
              <span style={{ fontSize: 22, fontWeight: 800, color: "#FFD600" }}>{s.value}</span>
              <span
                style={{
                  fontSize: 9,
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 700,
                  textAlign: "center",
                  textTransform: "uppercase",
                  lineHeight: 1.3,
                  whiteSpace: "pre-line",
                  letterSpacing: 0.3,
                }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-4" style={{ scrollbarWidth: "none" }}>
        {/* Level Selector */}
        <div className="mb-5">
          <p style={{ fontSize: 12, fontWeight: 700, color: "#9E9E9E", letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>
            My Level
          </p>
          <div
            className="flex gap-1 p-1 rounded-2xl"
            style={{ backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            {(["beginner", "intermediate", "advanced"] as const).map((l) => (
              <button
                key={l}
                onClick={() => setLevel(l)}
                className="flex-1 py-2.5 rounded-xl transition-all"
                style={{
                  backgroundColor: level === l ? "#FFD600" : "transparent",
                  color: level === l ? "#1C1C1E" : "#9E9E9E",
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: "capitalize",
                }}
              >
                {l === "beginner" ? "Beginner" : l === "intermediate" ? "Inter." : "Advanced"}
              </button>
            ))}
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="mb-5">
          <p style={{ fontSize: 12, fontWeight: 700, color: "#9E9E9E", letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>
            Weekly Progress
          </p>
          <div
            className="rounded-2xl p-4"
            style={{ backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            <div className="flex justify-between items-end mb-3">
              {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => {
                const heights = [60, 80, 100, 40, 90, 30, 70];
                const isToday = i === 2;
                return (
                  <div key={i} className="flex flex-col items-center gap-1">
                    <div
                      className="w-6 rounded-t-lg"
                      style={{
                        height: (heights[i] / 100) * 60,
                        backgroundColor: isToday ? "#FFD600" : "#F3F3F5",
                      }}
                    />
                    <span
                      style={{
                        fontSize: 10,
                        color: isToday ? "#1C1C1E" : "#9E9E9E",
                        fontWeight: isToday ? 700 : 400,
                      }}
                    >
                      {day}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="flex items-center justify-between">
              <span style={{ fontSize: 12, color: "#9E9E9E" }}>This week</span>
              <span style={{ fontSize: 14, fontWeight: 800, color: "#1C1C1E" }}>47 phrases</span>
            </div>
          </div>
        </div>

        {/* Badges */}
        <div className="mb-5">
          <p style={{ fontSize: 12, fontWeight: 700, color: "#9E9E9E", letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>
            Achievements
          </p>
          <div className="grid grid-cols-3 gap-2">
            {BADGES.map((b, i) => (
              <motion.div
                key={i}
                whileTap={{ scale: 0.92 }}
                className="rounded-2xl p-3 flex flex-col items-center gap-1.5"
                style={{
                  backgroundColor: b.earned ? "#FFFFFF" : "#F9F9F9",
                  boxShadow: b.earned ? "0 2px 8px rgba(0,0,0,0.08)" : "none",
                  opacity: b.earned ? 1 : 0.4,
                }}
              >
                <span style={{ fontSize: 24, filter: b.earned ? "none" : "grayscale(1)" }}>
                  {b.emoji}
                </span>
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    color: b.earned ? "#1C1C1E" : "#9E9E9E",
                    textAlign: "center",
                    lineHeight: 1.2,
                  }}
                >
                  {b.label}
                </span>
                {b.earned && (
                  <div
                    className="w-4 h-4 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#FFD600" }}
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#1C1C1E" strokeWidth="3">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Settings */}
        <div className="mb-5">
          <p style={{ fontSize: 12, fontWeight: 700, color: "#9E9E9E", letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>
            Settings
          </p>
          <div
            className="rounded-2xl overflow-hidden"
            style={{ backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
          >
            {SETTINGS.map((s, i) => (
              <div
                key={i}
                className="flex items-center gap-3 px-4 py-3.5"
                style={{
                  borderBottom: i < SETTINGS.length - 1 ? "1px solid #F3F3F5" : "none",
                }}
              >
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: s.danger ? "#FFE8E8" : "#F9F9F9" }}
                >
                  <span style={{ fontSize: 16 }}>{s.icon}</span>
                </div>
                <span
                  style={{
                    flex: 1,
                    fontSize: 14,
                    fontWeight: 600,
                    color: s.danger ? "#E74C3C" : "#1C1C1E",
                  }}
                >
                  {s.label}
                </span>
                {s.hasToggle ? (
                  <button
                    onClick={() => {
                      if (s.label === "Daily Reminder") setNotifOn(!notifOn);
                      if (s.label === "Sound Effects") setSoundOn(!soundOn);
                    }}
                    className="relative w-11 h-6 rounded-full transition-all"
                    style={{
                      backgroundColor:
                        (s.label === "Daily Reminder" ? notifOn : soundOn) ? "#FFD600" : "#E0E0E0",
                    }}
                  >
                    <div
                      className="absolute top-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-all"
                      style={{
                        left: (s.label === "Daily Reminder" ? notifOn : soundOn) ? "calc(100% - 22px)" : 2,
                      }}
                    />
                  </button>
                ) : s.value ? (
                  <span style={{ fontSize: 12, color: "#9E9E9E" }}>{s.value}</span>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={s.danger ? "#E74C3C" : "#C0C0C0"} strokeWidth="2.5">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 16 }} />
      </div>
    </div>
  );
}
