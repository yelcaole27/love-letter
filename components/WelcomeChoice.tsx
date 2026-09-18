// components/WelcomeChoice.tsx
"use client";

interface WelcomeChoiceProps {
  onSelect: (choice: "anniversary" | "birthday") => void;
}

export default function WelcomeChoice({ onSelect }: WelcomeChoiceProps) {
  return (
    <div className="w-full max-w-xl mx-auto my-8 p-8 md:p-12 rounded-3xl bg-[#fffdfa] border border-[#e5dcd0] shadow-xl text-center space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f3ede3] border border-[#dcd2c4] text-xs font-serif text-[#785b4d]">
          🌿 A KEEPSAKE FOR YOU
        </span>
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#2c221e]">
          Choose a Celebration
        </h1>
        <p className="text-xs font-serif italic text-[#7a675c]">
          Select which letter you would like to open first
        </p>
      </div>

      {/* Choice Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
        {/* Anniversary Card */}
        <button
          onClick={() => onSelect("anniversary")}
          className="group flex flex-col items-center p-6 rounded-2xl border border-[#e5dcd0] bg-[#f9f5ee] hover:bg-[#f2ece2] hover:border-[#c86d7c] transition-all duration-300 hover:scale-[1.02] shadow-sm text-center"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">✨</div>
          <h3 className="text-lg font-serif font-bold text-[#2c221e] group-hover:text-[#c86d7c]">
            Our Anniversary
          </h3>
          <p className="text-xs text-[#7a675c] mt-1 font-serif italic">
            Celebrating our journey together
          </p>
          <span className="mt-4 text-xs font-serif text-[#c86d7c] group-hover:underline">
            Read Letter ➔
          </span>
        </button>

        {/* Birthday Card */}
        <button
          onClick={() => onSelect("birthday")}
          className="group flex flex-col items-center p-6 rounded-2xl border border-[#e5dcd0] bg-[#f9f5ee] hover:bg-[#f2ece2] hover:border-[#c86d7c] transition-all duration-300 hover:scale-[1.02] shadow-sm text-center"
        >
          <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">🎂</div>
          <h3 className="text-lg font-serif font-bold text-[#2c221e] group-hover:text-[#c86d7c]">
            Your Birthday
          </h3>
          <p className="text-xs text-[#7a675c] mt-1 font-serif italic">
            A special letter for your birthday
          </p>
          <span className="mt-4 text-xs font-serif text-[#c86d7c] group-hover:underline">
            Read Letter ➔
          </span>
        </button>
      </div>
    </div>
  );
}