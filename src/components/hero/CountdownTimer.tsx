import React, { useEffect, useState } from 'react';
import { EVENT_METADATA } from '../../data/eventData';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(EVENT_METADATA.targetDateIso).getTime();

    const calculate = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  const format2 = (val: number) => String(val).padStart(2, '0');

  return (
    <div className="bg-surface/75 border border-surface-border/90 backdrop-blur-md px-5 py-4 rounded-2xl max-w-lg shadow-xl shadow-black/40">
      <div className="flex items-center justify-between mb-3 border-b border-surface-border/60 pb-2">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
          <span className="text-[11px] font-mono text-silver-muted uppercase tracking-widest font-semibold">
            SYNCHRONIZED COUNTDOWN
          </span>
        </div>
        <span className="text-xs font-mono text-cyan-laser font-bold">OCT 24-25, 2026</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center">
        <div className="bg-midnight/90 border border-surface-border/80 py-2 px-2.5 rounded-xl">
          <span className="block font-display font-extrabold text-2xl sm:text-3xl text-white-soft leading-tight">{timeLeft.days}</span>
          <span className="text-[10px] font-mono text-silver-muted uppercase tracking-widest block mt-0.5">DAYS</span>
        </div>
        <div className="bg-midnight/90 border border-surface-border/80 py-2 px-2.5 rounded-xl">
          <span className="block font-display font-extrabold text-2xl sm:text-3xl text-cyan-laser leading-tight">{format2(timeLeft.hours)}</span>
          <span className="text-[10px] font-mono text-silver-muted uppercase tracking-widest block mt-0.5">HOURS</span>
        </div>
        <div className="bg-midnight/90 border border-surface-border/80 py-2 px-2.5 rounded-xl">
          <span className="block font-display font-extrabold text-2xl sm:text-3xl text-white-soft leading-tight">{format2(timeLeft.minutes)}</span>
          <span className="text-[10px] font-mono text-silver-muted uppercase tracking-widest block mt-0.5">MINS</span>
        </div>
        <div className="bg-midnight/90 border border-surface-border/80 py-2 px-2.5 rounded-xl">
          <span className="block font-display font-extrabold text-2xl sm:text-3xl text-lime-accent leading-tight">{format2(timeLeft.seconds)}</span>
          <span className="text-[10px] font-mono text-silver-muted uppercase tracking-widest block mt-0.5">SECS</span>
        </div>
      </div>
    </div>
  );
};
