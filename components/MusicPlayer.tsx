// components/MusicPlayer.tsx
"use client";

import { useState, useRef } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Set the start second of your chorus here! (e.g., 45 = starts at 0:45)
  const CHORUS_START_TIME = 35;

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.currentTime = CHORUS_START_TIME; // Jumps directly to chorus!
      audioRef.current.play().catch((err) => console.log("Audio play error:", err));
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <audio ref={audioRef} src="/song.mp3" loop />
      <button
        onClick={toggleMusic}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#fffdfa] border border-[#e5dcd0] shadow-lg hover:border-[#c86d7c] transition-all text-xs font-serif text-[#2c221e]"
        aria-label="Toggle background music"
      >
        <span className={`text-base ${isPlaying ? "animate-spin" : ""}`}>🎵</span>
        <span>{isPlaying ? "Pause Music" : "Play Our Song"}</span>
      </button>
    </div>
  );
}