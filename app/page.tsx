// app/page.tsx
"use client";

import { useState } from "react";
import HeaderNav from "@/components/HeaderNav";
import PhotoBackdrop from "@/components/PhotoBackdrop";
import WelcomeChoice from "@/components/WelcomeChoice";
import EnvelopeSeal from "@/components/EnvelopeSeal";
import AnniversaryLetter from "@/components/AnniversaryLetter";
import BirthdayLetter from "@/components/BirthdayLetter";
import TimeTogetherCounter from "@/components/TimeTogetherCounter";
import ReasonsDeck from "@/components/ReasonsDeck";
import OpenWhen from "@/components/OpenWhen";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  const [selectedOccasion, setSelectedOccasion] = useState<"anniversary" | "birthday" | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const anniversaryPhotos = [
    "/photos/us1.jpg",
    "/photos/us2.jpg",
    "/photos/us3.jpg",
    "/photos/us4.jpg",
  ];

  const birthdayPhotos = [
    "/photos/bday1.jpg",
    "/photos/bday2.jpg",
    "/photos/bday3.jpg",
    "/photos/bday4.jpg",
  ];

  return (
    <main className="min-h-screen relative flex items-center justify-center p-6 pt-24 pb-16">
      <MusicPlayer />

      {selectedOccasion && (
        <HeaderNav
          activeTab={selectedOccasion}
          setActiveTab={(tab) => {
            setSelectedOccasion(tab);
            setIsOpen(false);
          }}
        />
      )}

      <PhotoBackdrop
        photos={selectedOccasion === "birthday" ? birthdayPhotos : anniversaryPhotos}
      />

      {/* Step 1: Welcome Choice Screen */}
      {!selectedOccasion && (
        <WelcomeChoice onSelect={(choice) => setSelectedOccasion(choice)} />
      )}

      {/* Step 2: Sealed Envelope */}
      {selectedOccasion && !isOpen && (
        <EnvelopeSeal
          recipientName="My Love"
          onOpen={() => setIsOpen(true)}
        />
      )}

      {/* Step 3: Unsealed Letter & Experience */}
      {selectedOccasion && isOpen && (
        <div className="w-full flex flex-col items-center space-y-8">
          <TimeTogetherCounter />
          
          {selectedOccasion === "anniversary" ? (
            <AnniversaryLetter />
          ) : (
            <BirthdayLetter />
          )}

          <ReasonsDeck />
          <OpenWhen />

          {/* Navigation Controls */}
          <div className="flex items-center gap-4 text-xs font-serif">
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#c86d7c] hover:underline"
            >
              Re-seal Letter ✉️
            </button>
            <span className="text-[#dcd2c4]">•</span>
            <button
              onClick={() => {
                setSelectedOccasion(null);
                setIsOpen(false);
              }}
              className="text-[#c86d7c] hover:underline"
            >
              Back to Home 🏠
            </button>
          </div>
        </div>
      )}
    </main>
  );
}