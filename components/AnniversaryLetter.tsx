// components/AnniversaryLetter.tsx
"use client";

export default function AnniversaryLetter() {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 md:p-12 rounded-3xl bg-[#fffdfa] border border-[#e5dcd0] shadow-xl space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="border-b border-[#ebd8c8] pb-6 text-center space-y-2">
        <span className="text-xs font-serif tracking-widest text-[#c86d7c] uppercase">
          Happy Anniversary
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2c221e]">
          To My Love
        </h1>
        <p className="text-xs font-serif italic text-[#7a675c]">
          Our Special Chapter
        </p>
      </div>

      {/* Scrolling Letter Content */}
      <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#3d2f28] font-serif font-light max-h-[55vh] overflow-y-auto pr-4 custom-scrollbar">
        <p>
          Happy Anniversary, my love! Looking back at everything we have shared, I am constantly reminded of how lucky I am to have you by my side.
        </p>
        <p>
          From our late-night conversations to simple everyday moments, every memory with you holds a special place in my heart. You have been my constant support, my greatest joy, and my best friend.
        </p>
        <p>
          Thank you for all the laughter, the patience, and the unconditional love you give me every single day. Being with you makes life so much brighter.
        </p>
        <p>
          As we celebrate another year of togetherness, I look forward to creating countless more memories, growing together, and loving you more with each passing day.
        </p>
        <div className="pt-6 border-t border-[#ebd8c8] text-right">
          <p className="font-serif italic text-[#c86d7c]">Forever yours,</p>
          <p className="font-serif font-bold text-[#2c221e] mt-1">Christoper Uriel</p>
        </div>
      </div>
    </div>
  );
}