import { useState, useEffect } from "react";
import { motion } from "motion/react";

type HistoryItem = { en: string; vi: string; level: "basic" | "advanced"; date: string; context?: string | null };

const SAMPLE_HISTORY: HistoryItem[] = [
  { en: "Where is the check-in counter?", vi: "Quầy làm thủ tục ở đâu?", level: "basic", date: new Date(Date.now() - 1000 * 60 * 5).toISOString(), context: "airport" },
  { en: "My flight has been delayed.", vi: "Chuyến bay của tôi bị trễ.", level: "basic", date: new Date(Date.now() - 1000 * 60 * 10).toISOString(), context: "airport" },
  { en: "I need to see a doctor.", vi: "Tôi cần gặp bác sĩ.", level: "basic", date: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), context: "hospital" },
  { en: "Do you have any pain medication?", vi: "Bạn có thuốc giảm đau không?", level: "basic", date: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(), context: "hospital" },
  { en: "A table for two, please.", vi: "Cho tôi bàn cho 2 người.", level: "basic", date: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), context: "restaurant" },
  { en: "What do you recommend?", vi: "Bạn gợi ý món gì?", level: "basic", date: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(), context: "restaurant" },
  { en: "I want to report a theft.", vi: "Tôi muốn báo cáo vụ trộm.", level: "basic", date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), context: "police" },
  { en: "Can I have the bill, please?", vi: "Cho tôi hóa đơn.", level: "basic", date: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), context: "restaurant" },
  { en: "I'm allergic to penicillin.", vi: "Tôi dị ứng với penicillin.", level: "advanced", date: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), context: "hospital" },
  { en: "Can I upgrade to business class?", vi: "Tôi có thể nâng cấp lên hạng thương gia không?", level: "advanced", date: new Date(Date.now() - 1000 * 60 * 60 * 48).toISOString(), context: "airport" },
];

const CONTEXT_EMOJI: Record<string, string> = {
  airport: "✈️", hospital: "🏥", hotel: "🏨", restaurant: "🍽️",
  police: "🚔", shopping: "🛍️", transport: "🚌", bank: "🏦",
};

function timeAgo(dateStr: string): string {
  const diff     = Date.now() - new Date(dateStr).getTime();
  const minutes  = Math.floor(diff / 60000);
  const hours    = Math.floor(minutes / 60);
  const days     = Math.floor(hours / 24);
  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24)  return `${hours}h ago`;
  return `${days}d ago`;
}

function groupByDate(items: HistoryItem[]) {
  const now = new Date();
  const today: HistoryItem[] = [], yesterday: HistoryItem[] = [], older: HistoryItem[] = [];
  items.forEach((item) => {
    const diffDays = Math.floor((now.getTime() - new Date(item.date).getTime()) / (1000 * 60 * 60 * 24));
    if (diffDays < 1) today.push(item);
    else if (diffDays < 2) yesterday.push(item);
    else older.push(item);
  });
  const groups: { label: string; items: HistoryItem[] }[] = [];
  if (today.length)     groups.push({ label: "Today",     items: today });
  if (yesterday.length) groups.push({ label: "Yesterday", items: yesterday });
  if (older.length)     groups.push({ label: "Earlier",   items: older });
  return groups;
}

const levelBadge = (level: "basic" | "advanced") =>
  level === "basic"
    ? { bg: "rgba(46,204,113,0.14)", color: "#2ECC71" }
    : { bg: "rgba(243,156,18,0.14)", color: "#F39C12" };

export function HistoryScreen() {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [filter, setFilter]   = useState<"all" | "basic" | "advanced">("all");

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("eng_history") || "[]");
    const combined = [...stored, ...SAMPLE_HISTORY.filter((s) => !stored.find((x: HistoryItem) => x.en === s.en))];
    setHistory(combined);
  }, []);

  const filtered = filter === "all" ? history : history.filter((h) => h.level === filter);
  const groups   = groupByDate(filtered);
  const stats    = { total: history.length, basic: history.filter((h) => h.level === "basic").length, advanced: history.filter((h) => h.level === "advanced").length };

  const clearHistory = () => { localStorage.removeItem("eng_history"); setHistory(SAMPLE_HISTORY); };

  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: "var(--background)" }}>

      {/* ── Glass Header ──────────────────────────── */}
      <div className="glass-header px-5 pt-14 pb-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p style={{ fontSize: 12, color: "var(--muted-foreground)", fontWeight: 600 }}>Your Learning</p>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: "var(--foreground)", lineHeight: 1.2 }}>History</h1>
          </div>
          <button
            onClick={clearHistory}
            className="glass px-3 py-1.5 rounded-xl"
            style={{ fontSize: 11, color: "var(--muted-foreground)", fontWeight: 700 }}
          >
            Reset
          </button>
        </div>

        {/* Stats Row */}
        <div className="flex gap-3">
          <div className="glass-btn-brand flex-1 rounded-2xl p-3 flex flex-col items-center">
            <span style={{ fontSize: 22, fontWeight: 800, color: "#1C1C1E" }}>{stats.total}</span>
            <span style={{ fontSize: 10, color: "#1C1C1E", fontWeight: 700, opacity: 0.6, textTransform: "uppercase" }}>Total</span>
          </div>
          <div className="glass flex-1 rounded-2xl p-3 flex flex-col items-center">
            <span style={{ fontSize: 22, fontWeight: 800, color: "#2ECC71" }}>{stats.basic}</span>
            <span style={{ fontSize: 10, color: "#2ECC71", fontWeight: 700, opacity: 0.8, textTransform: "uppercase" }}>Basic</span>
          </div>
          <div className="glass flex-1 rounded-2xl p-3 flex flex-col items-center">
            <span style={{ fontSize: 22, fontWeight: 800, color: "#F39C12" }}>{stats.advanced}</span>
            <span style={{ fontSize: 10, color: "#F39C12", fontWeight: 700, opacity: 0.8, textTransform: "uppercase" }}>Advanced</span>
          </div>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 mt-4">
          {(["all", "basic", "advanced"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-full ${filter === f ? "glass-btn-dark" : "glass"}`}
              style={{ fontSize: 12, fontWeight: 700, textTransform: "capitalize", color: filter === f ? "#FFD600" : "var(--muted-foreground)" }}
            >
              {f === "all" ? "All" : f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* ── History List ──────────────────────────── */}
      <div className="flex-1 overflow-y-auto px-5 pt-4" style={{ scrollbarWidth: "none" }}>
        {groups.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <span style={{ fontSize: 48 }}>📭</span>
            <p style={{ color: "var(--muted-foreground)", fontSize: 14, marginTop: 12 }}>No history yet</p>
            <p style={{ color: "var(--muted-foreground)", fontSize: 12, marginTop: 4, opacity: 0.6 }}>Save phrases in Learn tab</p>
          </div>
        )}

        {groups.map((group, gi) => (
          <div key={gi} className="mb-6">
            {/* Timeline header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--foreground)" }} />
              <div className="flex-1 h-px" style={{ backgroundColor: "var(--border)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, color: "var(--muted-foreground)" }}>{group.label}</span>
            </div>

            <div className="flex flex-col gap-2 ml-4">
              {group.items.map((item, ii) => {
                const badge = levelBadge(item.level);
                return (
                  <motion.div
                    key={ii}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: ii * 0.04 }}
                    className="glass rounded-2xl p-4 flex items-start gap-3"
                  >
                    {/* Context icon */}
                    <div className="glass-pill w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span style={{ fontSize: 18 }}>
                        {item.context ? CONTEXT_EMOJI[item.context] ?? "💬" : "💬"}
                      </span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p style={{ fontSize: 14, fontWeight: 700, color: "var(--foreground)", lineHeight: 1.3 }}>{item.en}</p>
                      <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 2 }}>{item.vi}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-0.5 rounded-full" style={{ backgroundColor: badge.bg, color: badge.color, fontSize: 9, fontWeight: 700, textTransform: "uppercase" }}>
                          {item.level}
                        </span>
                        <span style={{ fontSize: 10, color: "var(--muted-foreground)", opacity: 0.7 }}>{timeAgo(item.date)}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        ))}

        <div style={{ height: 16 }} />
      </div>
    </div>
  );
}
