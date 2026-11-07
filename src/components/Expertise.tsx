"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Play, Pause } from "lucide-react";
import { SERVICES } from "@/data/studio";

export default function Expertise() {
  const [activeServiceId, setActiveServiceId] = useState(SERVICES[0].id);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayTimerRef.current = setInterval(() => {
      setActiveServiceId((prevId) => {
        const currentIndex = SERVICES.findIndex((s) => s.id === prevId);
        const nextIndex = (currentIndex + 1) % SERVICES.length;
        return SERVICES[nextIndex].id;
      });
    }, 4500);

    return () => {
      if (autoPlayTimerRef.current) clearInterval(autoPlayTimerRef.current);
    };
  }, [isAutoPlaying]);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  return (
    <section id="expertise" className="relative py-24 md:py-32 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#E7E3DA]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#9E7D2D]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
                Section 05 · Core Capabilities
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#141311] tracking-tight">
              Expertise
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="px-3 py-1.5 border border-[#E7E3DA] bg-[#FFFFFF] text-[10px] font-mono uppercase tracking-widest text-[#757066] hover:text-[#9E7D2D] hover:border-[#9E7D2D] transition-colors flex items-center gap-1.5"
              aria-label="Toggle auto preview"
            >
              {isAutoPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isAutoPlaying ? "Auto Cycle: ON" : "Auto Cycle: OFF"}</span>
            </button>

            <p className="hidden md:block max-w-xs text-xs text-[#7A746B] leading-relaxed">
              Eleven multidisciplinary services operating from concept through handover.
            </p>
          </div>
        </div>

        {/* Master Interactive Expertise Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Numbered Service Rows */}
          <div className="lg:col-span-7 divide-y divide-[#E7E3DA] border-y border-[#E7E3DA]">
            {SERVICES.map((service) => {
              const isActive = service.id === activeServiceId;
              return (
                <div
                  key={service.id}
                  onMouseEnter={() => {
                    setIsAutoPlaying(false);
                    setActiveServiceId(service.id);
                  }}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setActiveServiceId(service.id);
                  }}
                  className={`group py-5 px-3 transition-all duration-300 cursor-pointer ${
                    isActive ? "bg-[#FFFFFF] -mx-3 px-6 border-l-2 border-[#9E7D2D]" : "hover:bg-[#F4F1EA]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`text-xs font-mono tracking-widest transition-colors ${
                          isActive ? "text-[#9E7D2D] font-bold" : "text-[#545048] group-hover:text-[#757066]"
                        }`}
                      >
                        {service.number}
                      </span>
                      <div>
                        <h3
                          className={`text-base sm:text-xl font-sans uppercase font-medium tracking-wide transition-colors ${
                            isActive ? "text-[#141311]" : "text-[#4D4942] group-hover:text-[#141311]"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="mt-1 text-xs text-[#7A746B] leading-relaxed max-w-xl">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    <ArrowUpRight
                      className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                        isActive
                          ? "text-[#9E7D2D] opacity-100 rotate-0"
                          : "text-[#545048] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Preview Frame with Smooth Transitions */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative aspect-[4/3] sm:aspect-[16/12] w-full overflow-hidden border border-[#E7E3DA] bg-[#FFFFFF]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService.id}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={activeService.image}
                    alt={activeService.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFA] via-[#FBFBFA]/40 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Foreground Details Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#FBFBFA] via-[#FBFBFA]/90 to-transparent">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-mono tracking-widest text-[#9E7D2D] uppercase">
                    Service {activeService.number} Details
                  </span>
                </div>
                <h4 className="text-xl font-serif text-[#141311] mb-3">
                  {activeService.title}
                </h4>

                {/* Key Deliverables Bullet Points */}
                <ul className="space-y-1.5 mb-4">
                  {activeService.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-[11px] text-[#4D4942]">
                      <CheckCircle2 className="w-3 h-3 text-[#9E7D2D] shrink-0" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9E7D2D] hover:text-[#141311] transition-colors"
                >
                  Commission This Service
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
