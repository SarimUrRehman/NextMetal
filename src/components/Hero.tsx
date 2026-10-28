import React from 'react';
import { SITE_CONFIG } from '../siteConfig';
import { EmblemSVG } from './Logo';
import { Phone, ArrowRight, ShieldCheck, Flame, Wrench } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#0F1114] bg-hex-grid overflow-hidden border-b border-[#C9CED6]/10"
      aria-label="Overview & Value Proposition"
    >
      {/* Ambient Radial Arc Light & Weld Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#27B8F0]/10 blur-3xl pointer-events-none animate-weld" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-slate-700/10 blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Subheadline, Actions & Badges (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Kicker with Subtle Silver/Cyan Notch */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1B1E23] border border-[#C9CED6]/25 rounded text-xs font-semibold text-[#C9CED6] uppercase tracking-widest mb-6">
              <span className="w-2 h-2 bg-[#27B8F0] rotate-45 shrink-0" />
              <span>{SITE_CONFIG.hero.kicker}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white uppercase leading-[1.08] text-balance mb-6">
              Precision Metal Fabrication.{' '}
              <span className="text-gradient-cyan block sm:inline">Built to Last.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-[#C9CED6] leading-relaxed max-w-2xl mb-8 font-normal">
              {SITE_CONFIG.hero.subheadline}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href={SITE_CONFIG.phone.telLink}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-extrabold uppercase tracking-wider text-[#0F1114] bg-[#27B8F0] hover:bg-[#1fa5d8] transition-all duration-200 clip-chamfer glow-cyan active:scale-95 whitespace-nowrap min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Phone className="w-5 h-5 fill-current stroke-[2.5]" />
                <span>{SITE_CONFIG.hero.primaryCta}</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold uppercase tracking-wider text-white bg-[#1B1E23] hover:bg-[#252a32] border border-[#C9CED6]/30 hover:border-[#27B8F0]/60 transition-all duration-200 clip-chamfer whitespace-nowrap min-h-[48px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#27B8F0]"
              >
                <span>{SITE_CONFIG.hero.secondaryCta}</span>
                <ArrowRight className="w-4 h-4 text-[#27B8F0]" />
              </a>
            </div>

            {/* 3 Trust Badges: Zero-pill discipline, industrial styling */}
            <div className="pt-6 border-t border-white/10 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-semibold uppercase tracking-wider text-[#C9CED6]">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-[#1B1E23] border border-[#C9CED6]/20 rounded text-[#27B8F0]">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <span>{SITE_CONFIG.hero.badges[0]}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-[#1B1E23] border border-[#C9CED6]/20 rounded text-[#27B8F0]">
                    <Flame className="w-4 h-4" />
                  </div>
                  <span>{SITE_CONFIG.hero.badges[1]}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 bg-[#1B1E23] border border-[#C9CED6]/20 rounded text-[#27B8F0]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span>{SITE_CONFIG.hero.badges[2]}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual built purely from SVG & CSS (5 cols) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Visual Container with Industrial Diamond Plate & Bevel Frame */}
            <div className="relative w-full max-w-[420px] aspect-square rounded-2xl p-6 sm:p-8 bg-[#16191E] border border-[#C9CED6]/20 shadow-2xl flex flex-col items-center justify-center overflow-hidden group">
              
              {/* Subtle background technical grid */}
              <div className="absolute inset-0 bg-hex-grid opacity-50" />
              <div className="absolute inset-0 bg-radial-vignette pointer-events-none" />

              {/* Animated Welding Sparks & Arc Glow */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#27B8F0]/20 rounded-full blur-2xl animate-weld pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-400/15 rounded-full blur-xl animate-pulse pointer-events-none" />

              {/* Animated welding electrode spark effect (pure SVG) */}
              <div className="absolute top-12 right-12 pointer-events-none opacity-80 animate-weld">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <path d="M24 0 L24 48 M0 24 L48 24 M7 7 L41 41 M7 41 L41 7" stroke="#27B8F0" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="24" cy="24" r="5" fill="#67E8F9" />
                  <circle cx="24" cy="24" r="2" fill="#FFFFFF" />
                </svg>
              </div>

              {/* Large Recreated Metallic Hexagon Emblem */}
              <div className="relative z-10 transition-transform duration-500 group-hover:scale-105">
                <EmblemSVG size={220} className="drop-shadow-[0_20px_35px_rgba(0,0,0,0.8)]" />
              </div>

              {/* Technical Spec readout strip below emblem */}
              <div className="relative z-10 mt-6 w-full px-3 py-2 bg-[#0F1114]/90 border border-white/10 rounded flex items-center justify-between text-[11px] font-mono text-[#C9CED6]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#27B8F0]" />
                  <span className="text-white font-semibold">TOLERANCE</span>
                </div>
                <span className="text-[#27B8F0] tabular-nums font-bold">± 0.030" VERIFIED</span>
                <span className="text-slate-400">AB / CAN</span>
              </div>

              {/* Four Corner Rivets on the Showcase Frame */}
              <div className="absolute top-2.5 left-2.5 w-2 h-2 rounded-full bg-[#C9CED6] border border-[#0F1114] shadow" />
              <div className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#C9CED6] border border-[#0F1114] shadow" />
              <div className="absolute bottom-2.5 left-2.5 w-2 h-2 rounded-full bg-[#C9CED6] border border-[#0F1114] shadow" />
              <div className="absolute bottom-2.5 right-2.5 w-2 h-2 rounded-full bg-[#C9CED6] border border-[#0F1114] shadow" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
