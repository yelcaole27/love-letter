// components/TimeTogetherCounter.tsx
"use client";

import { useState, useEffect } from "react";
import { ANNIVERSARY_START_DATE } from "@/data/celebrationData";

export default function TimeTogetherCounter() {
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const start = new Date(ANNIVERSARY_START_DATE).getTime();
      const now = new Date().getTime();
      const difference = now - start;

      if (difference > 0) {
        const seconds = Math.floor((difference / 1000) % 60);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const daysTotal = Math.floor(difference / (1000 * 60 * 60 * 24));
        const years = Math.floor(daysTotal / 365);
        const days = daysTotal % 365;

        setTimeTogether({ years, days, hours, minutes, seconds });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl mx-auto my-6 p-6 rounded-2xl bg-[#fffdfa] border border-[#e5dcd0] shadow-sm text-center space-y-3 animate-fade-in-up">
      <span className="text-[11px] font-serif tracking-widest text-[#c86d7c] uppercase">
        Together Since September 18, 2023
      </span>
      <h3 className="text-xl font-serif font-bold text-[#2c221e]">
        We Have Been Together For
      </h3>

      <div className="grid grid-cols-5 gap-2 pt-2">
        <div className="p-2.5 rounded-xl bg-[#f7f4ee] border border-[#e2d9cd]">
          <div className="text-lg md:text-xl font-serif font-bold text-[#2c221e]">{timeTogether.years}</div>
          <div className="text-[10px] font-serif text-[#7a675c]">Years</div>
        </div>
        <div className="p-2.5 rounded-xl bg-[#f7f4ee] border border-[#e2d9cd]">
          <div className="text-lg md:text-xl font-serif font-bold text-[#2c221e]">{timeTogether.days}</div>
          <div className="text-[10px] font-serif text-[#7a675c]">Days</div>
        </div>
        <div className="p-2.5 rounded-xl bg-[#f7f4ee] border border-[#e2d9cd]">
          <div className="text-lg md:text-xl font-serif font-bold text-[#2c221e]">{timeTogether.hours}</div>
          <div className="text-[10px] font-serif text-[#7a675c]">Hours</div>
        </div>
        <div className="p-2.5 rounded-xl bg-[#f7f4ee] border border-[#e2d9cd]">
          <div className="text-lg md:text-xl font-serif font-bold text-[#2c221e]">{timeTogether.minutes}</div>
          <div className="text-[10px] font-serif text-[#7a675c]">Mins</div>
        </div>
        <div className="p-2.5 rounded-xl bg-[#f7f4ee] border border-[#e2d9cd]">
          <div className="text-lg md:text-xl font-serif font-bold text-[#c86d7c]">{timeTogether.seconds}</div>
          <div className="text-[10px] font-serif text-[#7a675c]">Secs</div>
        </div>
      </div>
    </div>
  );
}