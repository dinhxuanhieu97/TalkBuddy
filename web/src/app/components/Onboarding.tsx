import { useState } from "react";
import { useNavigate } from "react-router";
import { motion, AnimatePresence } from "motion/react";

const slides = [
  {
    id: 0,
    emoji: "🚨",
    title: "English for\nEmergencies",
    subtitle: "Instantly find the right phrase for any urgent situation — airport, hospital, hotel, and more.",
    bg: "#FFD600",
    textColor: "#1C1C1E",
  },
  {
    id: 1,
    emoji: "🗣️",
    title: "Master\nPronunciation",
    subtitle: "Listen, repeat, and perfect your English accent with interactive phonics exercises.",
    bg: "#1C1C1E",
    textColor: "#FFD600",
  },
  {
    id: 2,
    emoji: "📚",
    title: "Track Your\nProgress",
    subtitle: "Every phrase you learn is saved. Review your history and watch your English grow day by day.",
    bg: "#FFD600",
    textColor: "#1C1C1E",
  },
];

export function Onboarding() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (current < slides.length - 1) {
      setCurrent(current + 1);
    } else {
      navigate("/app");
    }
  };

  const handleSkip = () => {
    navigate("/app");
  };

  const slide = slides[current];

  return (
    <div
      className="w-full h-full flex flex-col"
      style={{ backgroundColor: slide.bg, transition: "background-color 0.4s ease" }}
    >
      {/* Skip */}
      <div className="flex justify-end px-6 pt-14">
        <button
          onClick={handleSkip}
          style={{ color: slide.textColor, opacity: 0.5 }}
          className="text-sm"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.35 }}
            className="flex flex-col items-center text-center"
          >
            {/* Emoji Icon */}
            <div
              className="w-28 h-28 rounded-3xl flex items-center justify-center mb-10 shadow-lg"
              style={{
                backgroundColor: slide.textColor === "#1C1C1E" ? "rgba(28,28,30,0.1)" : "rgba(255,214,0,0.15)",
              }}
            >
              <span style={{ fontSize: 56 }}>{slide.emoji}</span>
            </div>

            {/* Title */}
            <h1
              className="mb-4 whitespace-pre-line"
              style={{
                color: slide.textColor,
                fontSize: 36,
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              {slide.title}
            </h1>

            {/* Subtitle */}
            <p
              style={{
                color: slide.textColor,
                opacity: 0.7,
                fontSize: 15,
                lineHeight: 1.6,
                maxWidth: 300,
              }}
            >
              {slide.subtitle}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom */}
      <div className="px-8 pb-12">
        {/* Dots */}
        <div className="flex justify-center gap-2 mb-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: slide.textColor,
                opacity: i === current ? 1 : 0.25,
                transition: "all 0.3s ease",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>

        {/* Button */}
        <button
          onClick={handleNext}
          className="w-full py-4 rounded-2xl shadow-lg active:scale-95 transition-transform"
          style={{
            backgroundColor: slide.textColor,
            color: slide.bg,
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          {current < slides.length - 1 ? "Continue" : "Get Started →"}
        </button>
      </div>
    </div>
  );
}
