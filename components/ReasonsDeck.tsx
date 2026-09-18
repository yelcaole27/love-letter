// components/ReasonsDeck.tsx
"use client";

import { useState } from "react";
import { REASONS_LIST } from "@/data/celebrationData";

export default function ReasonsDeck() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReason = () => {
    setCurrentIndex((prev) => (prev + 1) % REASONS_LIST.length);
  };

  const prevReason = () => {
    setCurrentIndex((prev) => (prev - 1 + REASONS_LIST.length) % REASONS_LIST.length);
  };

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 rounded-3xl bg-[#fffdfa] border border-[#e5dcd0] shadow-xl text-center space-y-6 animate-fade-in-up">
      <div className="space-y-1">
        <span className="text-[11px] font-serif tracking-widest text-[#c86d7c] uppercase">
          Little Reminders
        </span>
        <h3 className="text-2xl font-serif font-bold text-[#2c221e]">
          Reasons Why I Love You
        </h3>
      </div>

      <div className="relative min-h-[160px] p-6 rounded-2xl bg-[#f9f5ee] border border-[#ebd8c8] flex flex-col justify-between shadow-inner">
        <div className="text-xs font-serif italic text-[#c86d7c]">
          Reason #{currentIndex + 1} of {REASONS_LIST.length}
        </div>
        <p className="text-base md:text-lg font-serif italic text-[#2c221e] my-4 leading-relaxed">
          &ldquo;{REASONS_LIST[currentIndex]}&rdquo;
        </p>
        <div className="text-[11px] font-serif text-[#7a675c]">
          Click next to flip ➔
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 pt-2">
        <button
          onClick={prevReason}
          className="px-4 py-2 rounded-full border border-[#dcd2c4] bg-[#f3ede3] text-xs font-serif text-[#5c4a40] hover:bg-[#e8decb] transition-all"
        >
          ← Previous
        </button>
        <button
          onClick={nextReason}
          className="px-5 py-2 rounded-full border border-[#c86d7c] bg-[#c86d7c] text-xs font-serif text-white hover:bg-[#b55b6a] transition-all shadow-sm"
        >
          Next Reason →
        </button>
      </div>
    </div>
  );
}