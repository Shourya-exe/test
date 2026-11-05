"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Play, Pause } from "lucide-react";
import { INDIA_PILLARS } from "@/data/studio";

export default function DialogueIndia() {
  const [activeTab, setActiveTab] = useState(INDIA_PILLARS[0].id);
  const [isAutoCycle, setIsAutoCycle] = useState(true);
  const cycleTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAutoCycle) return;

    cycleTimerRef.current = setInterval(() => {
      setActiveTab((prevTab) => {
        const curIdx = INDIA_PILLARS.findIndex((p) => p.id === prevTab);
        const nextIdx = (curIdx + 1) % INDIA_PILLARS.length;
        return INDIA_PILLARS[nextIdx].id;
      });
    }, 5000);

    return () => {
      if (cycleTimerRef.current) clearInterval(cycleTimerRef.current);
    };
  }, [isAutoCycle]);

  const currentPillar = INDIA_PILLARS.find((p) => p.id === activeTab) || INDIA_PILLARS[0];

  return (
    <section className="relative py-24 md:py-32 bg-[#0D0C0B] border-t border-[#262420]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#262420]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#C5A85C]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
                Section 07 · Cultural Context
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F7F5F0] tracking-tight">
              Dialogue with India
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAutoCycle(!isAutoCycle)}
              className="px-3 py-1.5 border border-[#262420] bg-[#141311] text-[10px] font-mono uppercase tracking-widest text-[#969188] hover:text-[#C5A85C] hover:border-[#C5A85C] transition-colors flex items-center gap-1.5"
              aria-label="Toggle auto theme cycle"
            >
              {isAutoCycle ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isAutoCycle ? "Auto Theme: ON" : "Auto Theme: OFF"}</span>
            </button>

            <Link
              href="/dialogue-with-india"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A85C] hover:text-[#F7F5F0] transition-colors"
            >
              Explore India Dialogue
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 6 Thematic Navigation Tabs matching Reference with Active Indicators */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 mb-12 border-b border-[#262420] pb-6">
          {INDIA_PILLARS.map((pillar) => {
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                role="tab"
                aria-selected={isActive}
                aria-label={`Select ${pillar.title} theme`}
                onClick={() => {
                  setIsAutoCycle(false);
                  setActiveTab(pillar.id);
                }}
                className={`py-3.5 px-4 text-center transition-all duration-300 border relative overflow-hidden ${
                  isActive
                    ? "border-[#C5A85C] bg-[#191815] text-[#F7F5F0]"
                    : "border-transparent bg-[#141311] text-[#A8A398] hover:text-[#ECE9E1] hover:border-[#2C2A26]"
                }`}
              >
                <span className="block text-xs font-mono font-medium tracking-[0.2em] uppercase">
                  {pillar.title}
                </span>

                {isActive && (
                  <motion.div
                    layoutId="active-india-tab"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C5A85C]"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Interactive Thematic Showcase Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Sketch / Visual Architecture */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#262420] bg-[#141311]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPillar.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={currentPillar.image}
                    alt={currentPillar.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-transparent opacity-80" />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#969188]">
                <span className="font-mono uppercase tracking-widest text-[#C5A85C]">
                  Theme: {currentPillar.title}
                </span>
                <span className="font-mono">Dialogue with Indian Tectonics</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Discourse */}
          <div className="lg:col-span-5 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPillar.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-[#C5A85C] uppercase tracking-widest">
                    Thematic Lens
                  </span>
                  <span className="w-6 h-[1px] bg-[#C5A85C]" />
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif text-[#F7F5F0] font-normal leading-tight">
                  {currentPillar.subhead}
                </h3>

                <p className="text-sm text-[#B5B0A6] leading-relaxed font-light">
                  {currentPillar.description}
                </p>

                <div className="pt-4 border-t border-[#262420]">
                  <Link
                    href={`/dialogue-with-india#${currentPillar.id}`}
                    className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A85C] hover:text-[#F7F5F0] transition-colors"
                  >
                    Read Full Thematic Study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
