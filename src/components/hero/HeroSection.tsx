import React from 'react';
import { Hero3DCenterpiece } from './Hero3DCenterpiece';
import { CountdownTimer } from './CountdownTimer';
import { ArrowRight, Compass, Calendar, MapPin, Sparkles, User, ShieldCheck } from 'lucide-react';
import { EVENT_METADATA } from '../../data/eventData';

interface HeroSectionProps {
  onOpenRegister: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-[100svh] min-h-[760px] flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-12 bg-obsidian overflow-hidden"
    >
      {/* LAYER B: Immersive Full-Bleed 3D Kinetic Sculpture (Zero container clipping) */}
      <Hero3DCenterpiece />

      {/* Atmospheric Lighting: Restrained laser cyan and deep slate ambient glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-laser/[0.04] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[550px] h-[550px] bg-blue-ultra/[0.04] rounded-full blur-[150px] pointer-events-none" />

      {/* LAYER A: Editorial Foreground Content */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-between py-4">
        <div className="max-w-3xl flex flex-col space-y-7">
          {/* Event Identity & Edition Marker */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center space-x-2.5 bg-surface/85 border border-surface-border px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-lime-accent animate-pulse" />
              <span className="font-display font-bold text-xs uppercase tracking-wider text-white-soft">
                TEKNO KRAFT
              </span>
              <span className="text-silver-muted text-xs">/</span>
              <span className="font-mono text-xs text-cyan-laser tracking-widest font-semibold">
                ITER · SOA / 2026
              </span>
            </div>

            <div className="inline-flex items-center space-x-2 bg-midnight/80 border border-surface-border/70 px-3.5 py-1.5 rounded-full text-xs font-mono text-silver-muted backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-lime-accent" />
              <span>ORGANIZED BY GDG ITER</span>
            </div>
          </div>

          {/* Monumental Editorial Headline (Single H1) */}
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] leading-[0.98] tracking-tight text-white-soft select-none">
            BUILD WHAT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white-soft via-cyan-laser to-white-soft">
              COMES NEXT.
            </span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-silver-muted text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed font-sans font-normal">
            A convergence of technology, creative thinking, and the people building tomorrow. Two intensive days of engineering tracks, autonomous systems, and non-stop prototyping at ITER, Siksha 'O' Anusandhan, Bhubaneswar.
          </p>

          {/* Luxury Tactile CTA Group (18px Sculpted Radii with SmookyDev Uiverse Expansion) */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            {/* From Uiverse.io by SmookyDev */}
            <button
              onClick={onOpenRegister}
              className="group relative z-30 inline-flex items-center justify-center space-x-3 bg-[rgb(77,235,255)] text-obsidian hover:text-white-soft font-display font-bold text-sm tracking-wide px-8 py-4 rounded-2xl overflow-hidden cursor-pointer shadow-lg shadow-cyan-laser/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-700 [text-shadow:1px_1px_2px_rgba(8,51,68,0.4)] hover:[text-shadow:0_0_12px_rgb(77,235,255)] after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[#083344] after:left-5 after:bottom-0 after:translate-y-full after:rounded-md hover:after:scale-[300] after:hover:scale-[300] hover:after:transition-all hover:after:duration-700 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700"
            >
              <span className="relative z-10 flex items-center space-x-3 text-obsidian group-hover:text-white-soft transition-colors duration-700">
                <span>SECURE YOUR SPOT</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 group-hover:text-white-soft transition-all duration-300" />
              </span>
            </button>

            {/* From Uiverse.io by SmookyDev (Cyan Expansion Variant) */}
            <a
              href="#schedule"
              className="group relative z-30 inline-flex items-center justify-center space-x-2.5 bg-surface/70 text-white-soft hover:text-obsidian border border-surface-border hover:border-transparent font-display font-semibold text-sm tracking-wide px-7 py-4 rounded-2xl backdrop-blur-md overflow-hidden cursor-pointer transition-all duration-700 hover:-translate-y-0.5 active:translate-y-0 after:-z-20 after:absolute after:h-1 after:w-1 after:bg-[rgb(77,235,255)] after:left-5 after:bottom-0 after:translate-y-full after:rounded-md hover:after:scale-[300] after:hover:scale-[300] hover:after:transition-all hover:after:duration-700 after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700"
            >
              <span className="relative z-10 flex items-center space-x-2.5 text-white-soft group-hover:text-obsidian transition-colors duration-700">
                <Compass className="w-4 h-4 text-cyan-laser group-hover:text-obsidian group-hover:rotate-45 transition-all duration-300" />
                <span>EXPLORE EXPERIENCE</span>
              </span>
            </a>
          </div>

          {/* Quick Event Location & Lead Contact Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-silver-muted">
            <div className="flex items-center space-x-2 bg-surface/60 border border-surface-border/70 px-3.5 py-2 rounded-xl backdrop-blur-sm">
              <Calendar className="w-3.5 h-3.5 text-cyan-laser" />
              <span>OCTOBER 24-25, 2026</span>
            </div>

            <div className="flex items-center space-x-2 bg-surface/60 border border-surface-border/70 px-3.5 py-2 rounded-xl backdrop-blur-sm">
              <MapPin className="w-3.5 h-3.5 text-lime-accent" />
              <span>ITER CAMPUS 1, SOA, BHUBANESWAR</span>
            </div>

            <div className="flex items-center space-x-2 bg-surface/60 border border-surface-border/70 px-3.5 py-2 rounded-xl backdrop-blur-sm">
              <User className="w-3.5 h-3.5 text-white-soft" />
              <span>LEAD: {EVENT_METADATA.leadOrganizer.toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* Bottom Floating Telemetry & Synchronized Countdown Dock */}
        <div className="mt-12 pt-6 border-t border-surface-border/50 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <CountdownTimer />

          {/* Kinetic Live System Status Floating Pill */}
          <div className="hidden sm:flex items-center space-x-4 bg-surface/70 border border-surface-border/80 px-4 py-2.5 rounded-2xl backdrop-blur-md text-xs font-mono">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-laser" />
              <span className="text-white-soft font-semibold">3D KINETIC MONOLITH</span>
            </div>
            <span className="text-silver-muted">/</span>
            <span className="text-lime-accent">FPS 60 · CHROMIUM WEBGL</span>
            <span className="text-silver-muted">/</span>
            <span className="text-cyan-laser">7 ACTIVE TRACKS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
