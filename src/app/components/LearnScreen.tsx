import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const CONTEXTS = [
  { id: "airport", label: "✈️ Airport", color: "#FFD600" },
  { id: "hospital", label: "🏥 Hospital", color: "#FF6B6B" },
  { id: "hotel", label: "🏨 Hotel", color: "#4ECDC4" },
  { id: "restaurant", label: "🍽️ Restaurant", color: "#FF9F43" },
  { id: "police", label: "🚔 Police", color: "#5F6DF6" },
  { id: "shopping", label: "🛍️ Shopping", color: "#F368E0" },
  { id: "transport", label: "🚌 Transport", color: "#26de81" },
  { id: "bank", label: "🏦 Bank", color: "#FFA502" },
];

type Phrase = {
  en: string;
  vi: string;
  level: "basic" | "advanced";
};

const PHRASE_DATA: Record<string, Phrase[]> = {
  airport: [
    { en: "Where is the check-in counter?", vi: "Quầy làm thủ tục ở đâu?", level: "basic" },
    { en: "My flight has been delayed.", vi: "Chuyến bay của tôi bị trễ.", level: "basic" },
    { en: "I need to go to gate B12.", vi: "Tôi cần đến cổng B12.", level: "basic" },
    { en: "Can I upgrade to business class?", vi: "Tôi có thể nâng cấp lên hạng thương gia không?", level: "advanced" },
    { en: "My luggage is lost.", vi: "Hành lý của tôi bị thất lạc.", level: "basic" },
    { en: "Is this seat taken?", vi: "Ghế này có ai ngồi chưa?", level: "basic" },
  ],
  hospital: [
    { en: "I need to see a doctor.", vi: "Tôi cần gặp bác sĩ.", level: "basic" },
    { en: "I have a severe headache.", vi: "Tôi bị đau đầu dữ dội.", level: "basic" },
    { en: "Do you have any pain medication?", vi: "Bạn có thuốc giảm đau không?", level: "basic" },
    { en: "I'm allergic to penicillin.", vi: "Tôi dị ứng với penicillin.", level: "advanced" },
    { en: "Where is the emergency room?", vi: "Phòng cấp cứu ở đâu?", level: "basic" },
    { en: "I need an ambulance.", vi: "Tôi cần xe cấp cứu.", level: "basic" },
  ],
  hotel: [
    { en: "I have a reservation under my name.", vi: "Tôi có đặt phòng theo tên tôi.", level: "basic" },
    { en: "Can I have an extra pillow?", vi: "Tôi có thể xin thêm gối không?", level: "basic" },
    { en: "The air conditioner isn't working.", vi: "Máy lạnh không hoạt động.", level: "basic" },
    { en: "What time is checkout?", vi: "Mấy giờ phải trả phòng?", level: "basic" },
    { en: "Can I store my luggage?", vi: "Tôi có thể gửi hành lý không?", level: "basic" },
    { en: "Is breakfast included?", vi: "Có bao gồm bữa sáng không?", level: "basic" },
  ],
  restaurant: [
    { en: "A table for two, please.", vi: "Cho tôi bàn cho 2 người.", level: "basic" },
    { en: "What do you recommend?", vi: "Bạn gợi ý món gì?", level: "basic" },
    { en: "I'm vegetarian.", vi: "Tôi ăn chay.", level: "basic" },
    { en: "Can I have the bill, please?", vi: "Cho tôi hóa đơn.", level: "basic" },
    { en: "This dish is not what I ordered.", vi: "Món này không phải thứ tôi gọi.", level: "advanced" },
    { en: "Is there gluten in this dish?", vi: "Món này có gluten không?", level: "advanced" },
  ],
  police: [
    { en: "I want to report a theft.", vi: "Tôi muốn báo cáo vụ trộm.", level: "basic" },
    { en: "My passport was stolen.", vi: "Hộ chiếu của tôi bị đánh cắp.", level: "basic" },
    { en: "I need a police report.", vi: "Tôi cần biên bản của cảnh sát.", level: "basic" },
    { en: "I don't understand the charge.", vi: "Tôi không hiểu tội danh này.", level: "advanced" },
    { en: "Can I call my embassy?", vi: "Tôi có thể gọi cho đại sứ quán không?", level: "advanced" },
    { en: "I need a translator.", vi: "Tôi cần phiên dịch.", level: "basic" },
  ],
  shopping: [
    { en: "How much does this cost?", vi: "Cái này giá bao nhiêu?", level: "basic" },
    { en: "Can I try this on?", vi: "Tôi có thể thử cái này không?", level: "basic" },
    { en: "Do you have a smaller size?", vi: "Bạn có size nhỏ hơn không?", level: "basic" },
    { en: "I'd like to return this item.", vi: "Tôi muốn trả lại món này.", level: "basic" },
    { en: "Is there a discount?", vi: "Có giảm giá không?", level: "basic" },
    { en: "Do you accept credit cards?", vi: "Bạn có nhận thẻ tín dụng không?", level: "basic" },
  ],
  transport: [
    { en: "How do I get to downtown?", vi: "Làm thế nào để đến trung tâm?", level: "basic" },
    { en: "Which bus goes to the station?", vi: "Xe buýt nào đi đến ga?", level: "basic" },
    { en: "How long does it take?", vi: "Mất bao lâu?", level: "basic" },
    { en: "Can you stop here, please?", vi: "Bạn dừng ở đây được không?", level: "basic" },
    { en: "I'd like a one-way ticket.", vi: "Tôi muốn vé một chiều.", level: "basic" },
    { en: "Is this the right platform?", vi: "Đây có phải sân ga đúng không?", level: "basic" },
  ],
  bank: [
    { en: "I'd like to exchange currency.", vi: "Tôi muốn đổi ngoại tệ.", level: "basic" },
    { en: "My card is not working.", vi: "Thẻ của tôi không hoạt động.", level: "basic" },
    { en: "What is the exchange rate?", vi: "Tỷ giá hối đoái là bao nhiêu?", level: "basic" },
    { en: "I need to make a wire transfer.", vi: "Tôi cần chuyển tiền quốc tế.", level: "advanced" },
    { en: "Is there an ATM nearby?", vi: "Có máy ATM gần đây không?", level: "basic" },
    { en: "Can I open an account?", vi: "Tôi có thể mở tài khoản không?", level: "advanced" },
  ],
};

const SEARCH_SUGGESTIONS = [
  "Help me",
  "Where is",
  "I need",
  "How much",
  "Can you",
  "I don't understand",
  "Emergency",
  "Please call",
];

export function LearnScreen() {
  const [selectedContext, setSelectedContext] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [savedPhrases, setSavedPhrases] = useState<string[]>([]);
  const [showDetail, setShowDetail] = useState<Phrase | null>(null);

  const phrases = selectedContext ? PHRASE_DATA[selectedContext] ?? [] : [];
  const filteredPhrases = searchQuery
    ? Object.values(PHRASE_DATA)
        .flat()
        .filter(
          (p) =>
            p.en.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.vi.toLowerCase().includes(searchQuery.toLowerCase())
        )
    : phrases;

  const toggleSave = (en: string) => {
    setSavedPhrases((prev) =>
      prev.includes(en) ? prev.filter((p) => p !== en) : [...prev, en]
    );
    // Save to history
    const stored = JSON.parse(localStorage.getItem("eng_history") || "[]");
    const phrase = Object.values(PHRASE_DATA).flat().find((p) => p.en === en);
    if (phrase && !stored.find((s: any) => s.en === en)) {
      stored.unshift({ ...phrase, date: new Date().toISOString(), context: selectedContext });
      localStorage.setItem("eng_history", JSON.stringify(stored.slice(0, 100)));
    }
  };

  return (
    <div className="w-full h-full flex flex-col" style={{ backgroundColor: "#F9F9F9" }}>
      {/* Header */}
      <div
        className="px-5 pt-14 pb-5"
        style={{ backgroundColor: "#FFD600" }}
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <p style={{ fontSize: 12, color: "#1C1C1E", opacity: 0.6 }}>Emergency English</p>
            <h1 style={{ fontSize: 24, fontWeight: 800, color: "#1C1C1E", lineHeight: 1.2 }}>
              What do you need?
            </h1>
          </div>
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: "#1C1C1E" }}
          >
            <span style={{ fontSize: 16 }}>🔥</span>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search phrases..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setSelectedContext(null);
            }}
            className="w-full py-3 pl-10 pr-4 rounded-2xl outline-none"
            style={{
              backgroundColor: "#FFFFFF",
              fontSize: 14,
              color: "#1C1C1E",
              boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
            }}
          />
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9E9E9E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>

        {/* Quick suggestions */}
        {searchQuery === "" && !selectedContext && (
          <div className="flex gap-2 mt-3 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {SEARCH_SUGGESTIONS.map((s) => (
              <button
                key={s}
                onClick={() => setSearchQuery(s)}
                className="flex-shrink-0 px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: "rgba(28,28,30,0.1)",
                  color: "#1C1C1E",
                  fontSize: 12,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
        {/* Context Chips */}
        {!searchQuery && (
          <div className="px-5 pt-4">
            <p style={{ fontSize: 12, fontWeight: 700, color: "#9E9E9E", letterSpacing: 1, textTransform: "uppercase" }} className="mb-3">
              Choose Context
            </p>
            <div className="grid grid-cols-4 gap-2">
              {CONTEXTS.map((ctx) => {
                const isSelected = selectedContext === ctx.id;
                return (
                  <button
                    key={ctx.id}
                    onClick={() => setSelectedContext(isSelected ? null : ctx.id)}
                    className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-2xl active:scale-95 transition-transform"
                    style={{
                      backgroundColor: isSelected ? "#1C1C1E" : "#FFFFFF",
                      boxShadow: isSelected ? "0 4px 12px rgba(0,0,0,0.2)" : "0 2px 8px rgba(0,0,0,0.06)",
                    }}
                  >
                    <span style={{ fontSize: 22 }}>{ctx.label.split(" ")[0]}</span>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        color: isSelected ? "#FFD600" : "#1C1C1E",
                        textAlign: "center",
                        lineHeight: 1.2,
                      }}
                    >
                      {ctx.label.split(" ").slice(1).join(" ")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Phrases List */}
        {(selectedContext || searchQuery) && (
          <div className="px-5 pt-4 pb-4">
            <div className="flex items-center justify-between mb-3">
              <p style={{ fontSize: 12, fontWeight: 700, color: "#9E9E9E", letterSpacing: 1, textTransform: "uppercase" }}>
                {searchQuery ? `Results for "${searchQuery}"` : `${filteredPhrases.length} Phrases`}
              </p>
              {selectedContext && (
                <button
                  onClick={() => setSelectedContext(null)}
                  style={{ fontSize: 12, color: "#FFD600", fontWeight: 700 }}
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex flex-col gap-3">
              {filteredPhrases.length === 0 && (
                <div className="text-center py-8">
                  <p style={{ fontSize: 32 }}>🔍</p>
                  <p style={{ color: "#9E9E9E", fontSize: 14, marginTop: 8 }}>No phrases found</p>
                </div>
              )}
              {filteredPhrases.map((phrase, idx) => {
                const isSaved = savedPhrases.includes(phrase.en);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className="rounded-2xl p-4"
                    style={{
                      backgroundColor: "#FFFFFF",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                    }}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span
                            className="px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: phrase.level === "basic" ? "#E8F9EE" : "#FFF3CD",
                              color: phrase.level === "basic" ? "#2ECC71" : "#F39C12",
                              fontSize: 9,
                              fontWeight: 700,
                              textTransform: "uppercase",
                            }}
                          >
                            {phrase.level}
                          </span>
                        </div>
                        <p style={{ fontSize: 15, fontWeight: 700, color: "#1C1C1E", lineHeight: 1.4 }}>
                          {phrase.en}
                        </p>
                        <p style={{ fontSize: 13, color: "#9E9E9E", marginTop: 4, lineHeight: 1.4 }}>
                          {phrase.vi}
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => setShowDetail(phrase)}
                          className="w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: "#FFD600" }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#1C1C1E" strokeWidth="2.5">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                          </svg>
                        </button>
                        <button
                          onClick={() => toggleSave(phrase.en)}
                          className="w-9 h-9 rounded-xl flex items-center justify-center"
                          style={{ backgroundColor: isSaved ? "#1C1C1E" : "#F3F3F3" }}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill={isSaved ? "#FFD600" : "none"} stroke={isSaved ? "#FFD600" : "#9E9E9E"} strokeWidth="2">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        )}

        {/* Empty state */}
        {!selectedContext && !searchQuery && (
          <div className="px-5 pt-6">
            <div
              className="rounded-3xl p-5"
              style={{ backgroundColor: "#1C1C1E" }}
            >
              <p style={{ fontSize: 13, color: "#FFD600", fontWeight: 700, marginBottom: 6 }}>
                🚨 Emergency Tip
              </p>
              <p style={{ fontSize: 14, color: "#FFFFFF", lineHeight: 1.6 }}>
                Select a context above or type a phrase to find instant English help for any situation.
              </p>
            </div>

            {/* Popular phrases */}
            <p style={{ fontSize: 12, fontWeight: 700, color: "#9E9E9E", letterSpacing: 1, textTransform: "uppercase", marginTop: 20, marginBottom: 12 }}>
              Popular Right Now
            </p>
            <div className="flex flex-col gap-3">
              {[
                { en: "I need help!", vi: "Tôi cần giúp đỡ!", ctx: "🚨" },
                { en: "Where is the nearest hospital?", vi: "Bệnh viện gần nhất ở đâu?", ctx: "🏥" },
                { en: "Call the police!", vi: "Gọi cảnh sát!", ctx: "🚔" },
                { en: "I don't speak English well.", vi: "Tôi không nói tiếng Anh giỏi.", ctx: "💬" },
              ].map((p, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-4 flex items-center gap-3"
                  style={{ backgroundColor: "#FFFFFF", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}
                >
                  <span style={{ fontSize: 24 }}>{p.ctx}</span>
                  <div>
                    <p style={{ fontSize: 14, fontWeight: 700, color: "#1C1C1E" }}>{p.en}</p>
                    <p style={{ fontSize: 12, color: "#9E9E9E" }}>{p.vi}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ height: 16 }} />
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {showDetail && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 flex items-end"
            style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 50 }}
            onClick={() => setShowDetail(null)}
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
              <p style={{ fontSize: 11, color: "#FFD600", fontWeight: 800, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8 }}>
                English Phrase
              </p>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#1C1C1E", lineHeight: 1.3, marginBottom: 8 }}>
                {showDetail.en}
              </h2>
              <p style={{ fontSize: 16, color: "#9E9E9E", marginBottom: 24 }}>{showDetail.vi}</p>

              <div className="flex gap-3">
                <button
                  className="flex-1 py-4 rounded-2xl flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#FFD600" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#1C1C1E" strokeWidth="2.5">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                  <span style={{ fontWeight: 700, color: "#1C1C1E", fontSize: 14 }}>Listen</span>
                </button>
                <button
                  onClick={() => {
                    toggleSave(showDetail.en);
                    setShowDetail(null);
                  }}
                  className="flex-1 py-4 rounded-2xl flex items-center justify-center gap-2"
                  style={{ backgroundColor: "#1C1C1E" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFD600" strokeWidth="2">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                  <span style={{ fontWeight: 700, color: "#FFD600", fontSize: 14 }}>Save</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
