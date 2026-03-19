import { useState } from "react";
import { LearnScreen } from "./LearnScreen";
import { StudyScreen } from "./StudyScreen";
import { HistoryScreen } from "./HistoryScreen";
import { ProfileScreen } from "./ProfileScreen";

type Tab = "learn" | "study" | "history" | "profile";

const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
  {
    id: "learn",
    label: "Learn",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    id: "study",
    label: "Study",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
  },
  {
    id: "history",
    label: "History",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    id: "profile",
    label: "Profile",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
];

export function MainApp() {
  const [activeTab, setActiveTab] = useState<Tab>("learn");

  return (
    <div className="w-full h-full flex flex-col bg-white">
      {/* Screen Content */}
      <div className="flex-1 overflow-hidden">
        {activeTab === "learn" && <LearnScreen />}
        {activeTab === "study" && <StudyScreen />}
        {activeTab === "history" && <HistoryScreen />}
        {activeTab === "profile" && <ProfileScreen />}
      </div>

      {/* Bottom Nav */}
      <div
        className="flex items-center justify-around px-4 py-3 border-t border-gray-100"
        style={{ backgroundColor: "#FFFFFF", paddingBottom: 20 }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex flex-col items-center gap-1 relative"
              style={{ minWidth: 64 }}
            >
              {isActive ? (
                <div
                  className="flex items-center gap-1.5 px-4 py-2 rounded-full"
                  style={{ backgroundColor: "#FFD600" }}
                >
                  <span style={{ color: "#1C1C1E" }}>{tab.icon}</span>
                  <span
                    style={{
                      color: "#1C1C1E",
                      fontSize: 13,
                      fontWeight: 700,
                    }}
                  >
                    {tab.label}
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-0.5 py-2 px-3">
                  <span style={{ color: "#9E9E9E" }}>{tab.icon}</span>
                  <span style={{ color: "#9E9E9E", fontSize: 10 }}>{tab.label}</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
