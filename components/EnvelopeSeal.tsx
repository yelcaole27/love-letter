// components/EnvelopeSeal.tsx
"use client";

interface EnvelopeSealProps {
  recipientName?: string;
  onOpen: () => void;
}

export default function EnvelopeSeal({ recipientName = "My Love", onOpen }: EnvelopeSealProps) {
  return (
    <div className="w-full max-w-md mx-auto my-12 p-8 md:p-10 rounded-3xl bg-[#fffdfa] border border-[#e5dcd0] shadow-xl text-center space-y-6 animate-fade-in-up">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#f3ede3] border border-[#dcd2c4] text-xs font-serif text-[#785b4d]">
        <span>🕊️</span> HAND DELIVERED
      </div>

      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#2c221e]">
          For {recipientName}
        </h2>
        <p className="text-xs font-serif italic text-[#7a675c]">
          A personal letter written just for you
        </p>
      </div>

      {/* Wax Seal Button */}
      <div className="pt-4 pb-2">
        <button
          onClick={onOpen}
          className="group relative inline-flex items-center justify-center p-6 rounded-full bg-[#c86d7c] hover:bg-[#b55b6a] text-white shadow-md hover:scale-105 active:scale-95 transition-all duration-300"
        >
          <div className="relative flex flex-col items-center gap-1">
            <span className="text-3xl group-hover:rotate-12 transition-transform">💌</span>
            <span className="text-[10px] font-serif tracking-wider uppercase">
              Open Letter
            </span>
          </div>
        </button>
      </div>

      <p className="text-xs font-serif italic text-[#9e887c]">
        Click the seal to open
      </p>
    </div>
  );
}