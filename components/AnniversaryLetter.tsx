// components/AnniversaryLetter.tsx
"use client";

export default function AnniversaryLetter() {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 md:p-12 rounded-3xl bg-[#fffdfa] border border-[#e5dcd0] shadow-xl space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="border-b border-[#ebd8c8] pb-6 text-center space-y-2">
        <span className="text-xs font-serif tracking-widest text-[#c86d7c] uppercase">
          Happy 3rd Anniversary
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2c221e]">
          Hello Love!
        </h1>
        <p className="text-xs font-serif italic text-[#7a675c]">
          3 Years &amp; Still Counting
        </p>
      </div>

      {/* Scrolling Letter Content */}
      <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#3d2f28] font-serif font-light max-h-[55vh] overflow-y-auto pr-4 custom-scrollbar">
        <p>
          Hello Love, Happy 3rd Anniversary!
        </p>
        <p>
          3 yrs na tayo bebe and still counting hehehe. Sorry mahal ha, sa mga nagawa kong masakit sayo bebe, all of our arguments mahal. Alam mo bebe, I always listen to you, kahit na ganto ugali ko mahal.
        </p>
        <p>
          You chose to stay and understand, and I love that of you. Napaka-understandable mo mahal and ayon, you are with me through ups and downs and I appreciate that, mahal ko.
        </p>
        <p>
          Sorry mahal ko sa mga nagawa ko. Mahal na mahal kita baby ko!
        </p>
        <p className="font-semibold text-[#c86d7c] pt-2">
          This celebration is the proof that Love still wins no matter what. Mahal na mahal kita!
        </p>

        <div className="pt-6 border-t border-[#ebd8c8] text-right">
          <p className="font-serif italic text-[#c86d7c]">Forever yours,</p>
          <p className="font-serif font-bold text-[#2c221e] mt-1">your baby, yel</p>
        </div>
      </div>
    </div>
  );
}