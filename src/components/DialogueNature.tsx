"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, Sparkles, RefreshCw, Sun } from "lucide-react";
import { NATURE_PILLARS } from "@/data/studio";
import ArchitecturalVideoPlayer from "./ArchitecturalVideoPlayer";

export default function DialogueNature() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const getPillarIcon = (keyword: string) => {
    switch (keyword) {
      case "RETAIN":
        return <Leaf className="w-5 h-5 text-[#C5A85C]" />;
      case "REVERE":
        return <Sun className="w-5 h-5 text-[#C5A85C]" />;
      case "REGENERATE":
        return <RefreshCw className="w-5 h-5 text-[#C5A85C]" />;
      case "REJOICE":
        return <Sparkles className="w-5 h-5 text-[#C5A85C]" />;
      default:
        return <Leaf className="w-5 h-5 text-[#C5A85C]" />;
    }
  };

  return (
    <section className="relative py-24 md:py-32 bg-[#12110F] border-t border-[#262420] overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#262420_1px,transparent_1px)] [background-size:32px_32px] opacity-25 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#262420]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#C5A85C]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
                Section 06 · Environmental Philosophy
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F7F5F0] tracking-tight">
              Dialogue with Nature
            </h2>
          </div>

          <Link
            href="/dialogue-with-nature"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A85C] hover:text-[#F7F5F0] transition-colors"
          >
            Explore Philosophy In Full
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 4 Thematic Cards (RETAIN, REVERE, REGENERATE, REJOICE) with Flip Interactions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {NATURE_PILLARS.map((pillar, idx) => {
            const isFlipped = flippedIndex === idx;
            return (
              <div
                key={pillar.keyword}
                className="perspective-1000 h-[360px] w-full cursor-pointer"
                onMouseEnter={() => setFlippedIndex(idx)}
                onMouseLeave={() => setFlippedIndex(null)}
                onClick={() => setFlippedIndex(isFlipped ? null : idx)}
              >
                <div
                  className={`relative w-full h-full duration-700 transform-style-3d transition-transform ${
                    isFlipped ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Card: Architectural Photograph with Bold Keyword */}
                  <div className="absolute inset-0 w-full h-full backface-hidden border border-[#262420] bg-[#141311] overflow-hidden group">
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-[#0D0C0B]/50 to-transparent" />

                    <div className="absolute inset-0 p-6 flex flex-col justify-between">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs text-[#C5A85C] font-semibold">
                          0{pillar.number}
                        </span>
                        {getPillarIcon(pillar.keyword)}
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-serif font-medium uppercase tracking-wider text-[#F7F5F0] mb-2">
                          {pillar.keyword}
                        </h3>
                        <p className="text-xs text-[#B5B0A6] font-light line-clamp-2">
                          {pillar.title}
                        </p>
                        <span className="mt-3 inline-block text-[10px] font-mono uppercase tracking-widest text-[#C5A85C]">
                          Hover to reveal →
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Back Card: Ancient Vedic Citation & Philosophy */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 border border-[#C5A85C]/60 bg-[#161513] p-7 flex flex-col justify-between text-[#ECE9E1]">
                    <div>
                      <div className="flex items-center justify-between border-b border-[#2C2A26] pb-3 mb-4">
                        <span className="font-mono text-xs text-[#C5A85C]">
                          PILLAR 0{pillar.number}
                        </span>
                        <h3 className="font-sans font-bold text-sm uppercase tracking-widest text-[#F7F5F0]">
                          {pillar.keyword}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-[#B5B0A6] leading-relaxed mb-4">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#2C2A26]">
                      <span className="text-[10px] uppercase font-mono tracking-wider text-[#C5A85C] block mb-1">
                        Sanskrit Axiom
                      </span>
                      <p className="text-xs italic text-[#D8BD74] font-serif leading-snug">
                        &quot;{pillar.quote}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 16:9 ARCHITECTURAL VIDEO (Faithfully replicating Salient Design Studio in 16:9 ratio) */}
        <div className="mb-16">
          <div className="mb-4 flex items-center justify-between text-xs font-mono text-[#858178]">
            <span className="uppercase text-[#C5A85C] tracking-widest">
              Biophilic Motion Study · 16:9 Presentation
            </span>
            <span>Natural Harmony in Architecture</span>
          </div>

          <ArchitecturalVideoPlayer
            src="/videos/dialogue-with-nature.mp4"
            poster="/images/nature/nature-hero.jpg"
            caption="Salient Architectural Motion Study"
            title="Living Ecological Equilibrium"
          />
        </div>

        {/* Editorial Sustainability Manifesto (Replicating Salient verbatim) */}
        <div className="p-8 sm:p-14 bg-[#141311] border border-[#262420] relative">
          <div className="max-w-3xl space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A85C] block">
              Core Studio Manifesto
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#F7F5F0] leading-tight">
              We have Embraced Sustainability
            </h3>
            <p className="text-sm sm:text-base text-[#B5B0A6] leading-relaxed font-light">
              ...not merely as a trending concept or buzzword, but as a fundamental value that underpins everything we do. It serves as the guiding principle for all our decisions, shaping the way we operate, innovate, and interact with the world around us. From the smallest daily choices to our long-term strategic architectural goals.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                href="/dialogue-with-nature"
                className="px-6 py-3 bg-[#F7F5F0] text-[#0D0C0B] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#C5A85C]"
              >
                Read Nature Thesis
              </Link>
              <Link
                href="/projects"
                className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A85C] hover:text-[#F7F5F0] transition-colors"
              >
                View Green Certified Buildings →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
