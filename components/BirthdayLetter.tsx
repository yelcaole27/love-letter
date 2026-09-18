// components/BirthdayLetter.tsx
"use client";

export default function BirthdayLetter() {
  return (
    <div className="w-full max-w-2xl mx-auto my-6 p-8 md:p-12 rounded-3xl bg-[#fffdfa] border border-[#e5dcd0] shadow-xl space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="border-b border-[#ebd8c8] pb-6 text-center space-y-2">
        <span className="text-xs font-serif tracking-widest text-[#c86d7c] uppercase">
          Happy 20th Birthday
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2c221e]">
          Hello Love!
        </h1>
        <p className="text-xs font-serif italic text-[#7a675c]">
          Celebrating You Today
        </p>
      </div>

      {/* Scrolling Birthday Wish Letter */}
      <div className="space-y-6 text-base md:text-lg leading-relaxed text-[#3d2f28] font-serif font-light max-h-[55vh] overflow-y-auto pr-4 custom-scrollbar">
        <p>
          Happiest Birthday Darling ko! Wow, 20 yrs old ka na. Time flies so fast talaga.
        </p>
        <p>
          Darling ko, I hope you are enjoying your birthday. I know na wala masyadong ganap when it comes to your family, that&apos;s why baby I am doing my best to make you happy through your day, mahal ko.
        </p>
        <p>
          Mahal na mahal kita. You know I&apos;m always here naman diba?
        </p>
        <p>
          I hope you enjoy this celebration of us kahit simple lang, pero I know naman nag-eenjoy ka basta kasama ako hehehe. I hope you enjoy your day darling, I love you so much!
        </p>

        <div className="pt-6 border-t border-[#ebd8c8] text-right">
          <p className="font-serif italic text-[#c86d7c]">With all my love,</p>
          <p className="font-serif font-bold text-[#2c221e] mt-1">your darling, yel</p>
        </div>
      </div>
    </div>
  );
}