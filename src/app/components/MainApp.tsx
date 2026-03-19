import { useState } from "react";
import { LearnScreen } from "./LearnScreen";
import { StudyScreen } from "./StudyScreen";
import { HistoryScreen } from "./HistoryScreen";
import { ProfileScreen } from "./ProfileScreen";
import { motion, AnimatePresence, LayoutGroup } from "motion/react";

type Tab = "learn" | "study" | "history" | "profile";

const tabs: { id: Tab; label: string; icon: (active: boolean) => React.ReactNode }[] = [
  {
    id: "learn",
    label: "Learn",
    icon: (active) => (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
        stroke={active ? "#1C1C1E" : "currentColor"} strokeWidth={active ? 2.5 : 2}
        strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "study",
    label: "Study",
    icon: (active) => (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
        stroke={active ? "#1C1C1E" : "currentColor"} strokeWidth={active ? 2.5 : 2}
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    id: "history",
    label: "History",
    icon: (active) => (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
        stroke={active ? "#1C1C1E" : "currentColor"} strokeWidth={active ? 2.5 : 2}
        strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    icon: (active) => (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none"
        stroke={active ? "#1C1C1E" : "currentColor"} strokeWidth={active ? 2.5 : 2}
        strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

/* ── Spring presets ─────────────────────────────── */
const PILL_SPRING = { type: "spring", stiffness: 420, damping: 34, mass: 0.9 } as const;
const ICON_SPRING = { type: "spring", stiffness: 500, damping: 28 } as const;
const TAP_SPRING  = { type: "spring", stiffness: 600, damping: 28 } as const;

export function MainApp() {
  const [activeTab, setActiveTab] = useState<Tab>("learn");

  return (
    <div className="w-full h-full flex flex-col bg-[var(--background)]">

      {/* ── Screen with fade-slide transition ─── */}
      <div className="flex-1 overflow-hidden relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="absolute inset-0"
          >
            {activeTab === "learn"   && <LearnScreen   />}
            {activeTab === "study"   && <StudyScreen   />}
            {activeTab === "history" && <HistoryScreen />}
            {activeTab === "profile" && <ProfileScreen />}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Liquid Glass Bottom Nav ──────────── */}
      <div
        className="glass-nav flex items-center justify-around px-3 pt-2"
        style={{ paddingBottom: 20 }}
      >
        <LayoutGroup id="bottom-nav">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileTap={{ scale: 0.84 }}
                transition={TAP_SPRING}
                className="relative flex items-center justify-center"
                style={{ minWidth: 64, minHeight: 44 }}
              >
                {/* Sliding glass pill (shared layout across buttons) */}
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    transition={PILL_SPRING}
                    className="absolute inset-0 rounded-full glass-tab-active"
                    initial={{ scale: 0.75, opacity: 0 }}
                    animate={{ scale: 1,    opacity: 1 }}
                    style={{ zIndex: 0 }}
                  />
                )}

                {/* Content above the pill */}
                <div className="relative z-10 flex items-center gap-1.5 px-3 py-2">
                  {/* Icon: bounces up + thickens stroke when active */}
                  <motion.span
                    animate={{
                      y:     isActive ? -1 : 0,
                      scale: isActive ? 1.10 : 1,
                    }}
                    transition={ICON_SPRING}
                    style={{ display: "flex", alignItems: "center", color: isActive ? "#1C1C1E" : "var(--muted-foreground)" }}
                  >
                    {tab.icon(isActive)}
                  </motion.span>

                  {/* Label: slides in only when active */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.span
                        key="label"
                        initial={{ opacity: 0, width: 0, x: -8 }}
                        animate={{ opacity: 1, width: "auto", x: 0 }}
                        exit={{   opacity: 0, width: 0,    x: -4 }}
                        transition={{ ...PILL_SPRING, delay: 0.05 }}
                        style={{
                          color: "#1C1C1E",
                          fontSize: 13,
                          fontWeight: 700,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                        }}
                      >
                        {tab.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.button>
            );
          })}
        </LayoutGroup>
      </div>
    </div>
  );
}
