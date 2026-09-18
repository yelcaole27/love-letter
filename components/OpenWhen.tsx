// components/OpenWhen.tsx
"use client";

import { useState } from "react";
import { OPEN_WHEN_MESSAGES } from "@/data/celebrationData";

export default function OpenWhen() {
  const [activeMessage, setActiveMessage] = useState<string | null>(null);
  const selectedItem = OPEN_WHEN_MESSAGES.find((item) => item.id === activeMessage);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-8 rounded-3xl bg-[#fffdfa] border border-[#e5dcd0] shadow-xl text-center space-y-6 animate-fade-in-up">
      <div className="space-y-1">
        <span className="text-[11px] font-serif tracking-widest text-[#c86d7c] uppercase">
          Virtual Envelopes
        </span>
        <h3 className="text-2xl font-serif font-bold text-[#2c221e]">
          Open When...
        </h3>
        <p className="text-xs font-serif italic text-[#7a675c]">
          Click an envelope whenever you need it
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
        {OPEN_WHEN_MESSAGES.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveMessage(item.id)}
            className="p-4 rounded-2xl border border-[#ebd8c8] bg-[#f9f5ee] hover:bg-[#f2ece2] hover:border-[#c86d7c] transition-all duration-300 text-center space-y-2 group shadow-sm"
          >
            <div className="text-2xl group-hover:scale-110 transition-transform">✉️</div>
            <p className="text-xs font-serif font-medium text-[#2c221e] group-hover:text-[#c86d7c]">
              {item.title}
            </p>
          </button>
        ))}
      </div>

      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-fade-in-up"
          onClick={() => setActiveMessage(null)}
        >
          <div
            className="relative max-w-md w-full bg-[#fffdfa] border border-[#e5dcd0] rounded-3xl p-8 shadow-2xl text-center space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="text-3xl">💌</span>
            <h4 className="text-lg font-serif font-bold text-[#2c221e]">
              {selectedItem.title}
            </h4>
            <p className="text-sm font-serif italic text-[#4a3b32] leading-relaxed">
              {selectedItem.message}
            </p>
            <button
              onClick={() => setActiveMessage(null)}
              className="px-5 py-2 rounded-full bg-[#c86d7c] text-white text-xs font-serif hover:bg-[#b55b6a] transition-all"
            >
              Close Message ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}