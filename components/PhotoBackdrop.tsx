// components/PhotoBackdrop.tsx
"use client";

import Image from "next/image";

interface PhotoBackdropProps {
  photos: string[];
}

export default function PhotoBackdrop({ photos }: PhotoBackdropProps) {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden opacity-30 transition-opacity duration-1000">
      {/* Floating Polaroid Photo Backdrop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 p-6 h-full w-full max-w-6xl mx-auto items-center">
        {photos.map((src, idx) => (
          <div
            key={idx}
            className="relative p-3 bg-white border border-[#e5dcd0] rounded-xl shadow-md animate-float-polaroid"
            style={{ animationDelay: `${idx * 2}s` }}
          >
            {/* Polaroid Image Box */}
            <div className="relative h-56 md:h-72 w-full rounded-lg overflow-hidden">
              <Image
                src={src}
                alt="Our Memory"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}