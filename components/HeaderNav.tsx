// components/HeaderNav.tsx
"use client";

interface HeaderNavProps {
  activeTab: "anniversary" | "birthday";
  setActiveTab: (tab: "anniversary" | "birthday") => void;
}

export default function HeaderNav({ activeTab, setActiveTab }: HeaderNavProps) {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[#f7f4ee]/90 backdrop-blur-md border-b border-[#e2d9cd] py-4 px-6 shadow-sm">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="font-serif italic text-sm tracking-wide text-[#705649]">
          for my ry 🌷
        </div>

        {/* Tab Selector */}
        <div className="flex items-center gap-2 bg-[#eae3d5] p-1 rounded-full border border-[#d6cbba]">
          <button
            onClick={() => setActiveTab("anniversary")}
            className={`px-4 py-1.5 rounded-full text-xs font-serif transition-all duration-300 ${
              activeTab === "anniversary"
                ? "bg-[#c86d7c] text-white shadow-sm"
                : "text-[#6b584e] hover:text-[#2c221e]"
            }`}
          >
            Anniversary ✨
          </button>
          <button
            onClick={() => setActiveTab("birthday")}
            className={`px-4 py-1.5 rounded-full text-xs font-serif transition-all duration-300 ${
              activeTab === "birthday"
                ? "bg-[#c86d7c] text-white shadow-sm"
                : "text-[#6b584e] hover:text-[#2c221e]"
            }`}
          >
            Birthday 🎂
          </button>
        </div>
      </div>
    </header>
  );
}