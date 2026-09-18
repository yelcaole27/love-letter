// components/BirthdayLetter.tsx
"use client";

export default function BirthdayLetter() {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 md:p-12 rounded-3xl bg-[#fffdfa] border border-[#e5dcd0] shadow-xl space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="border-b border-[#ebd8c8] pb-6 text-center space-y-2">
        <span className="text-xs font-serif tracking-widest text-[#c86d7c] uppercase">
          Happy Birthday
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2c221e]">
          Celebrating You Today
        </h1>
        <p className="text-xs font-serif italic text-[#7a675c]">
          A Very Special Day For An Extraordinary Person
        </p>
      </div>

      {/* Scrolling Birthday Wish Letter */}
      <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#3d2f28] font-serif font-light max-h-[55vh] overflow-y-auto pr-4 custom-scrollbar">
        <p>
          Happy Birthday to the most amazing girl in the world! Today is all about celebrating you, your beautiful smile, and the wonderful person you are.
        </p>
        <p>
          I hope your special day brings you as much happiness, warmth, and love as you bring into my life every single day. You deserve all the good things this world has to offer.
        </p>
        <p>
          May this new year of your life be filled with new adventures, achieved goals, endless laughter, and moments that make your heart smile.
        </p>
        <p>
          I am so grateful to be part of your journey and to celebrate another year of your life right beside you.
        </p>
        <div className="pt-6 border-t border-[#ebd8c8] text-right">
          <p className="font-serif italic text-[#c86d7c]">With all my love,</p>
          <p className="font-serif font-bold text-[#2c221e] mt-1">Christoper Uriel</p>
        </div>
      </div>
    </div>
  );
}