"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Leaf, Sun, RefreshCw, Sparkles, Quote } from "lucide-react";
import { NATURE_PILLARS } from "@/data/studio";
import ArchitecturalVideoPlayer from "@/components/ArchitecturalVideoPlayer";

export default function DialogueNaturePage() {
  return (
    <div className="pt-32 pb-28 bg-[#0D0C0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#262420]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A85C]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
              Environmental Philosophy · Ecological Stewardship
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F7F5F0] tracking-tight mb-4">
            Dialogue with Nature
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[#D8BD74] italic font-serif">
            <span>&quot;Vriksho rakshati rakshitah&quot; — He who protects trees is protected by them</span>
            <span>·</span>
            <span>Sarvam Khalvidam Brahma</span>
          </div>
        </div>

        {/* 16:9 Architectural Video Showcase */}
        <div className="mb-16">
          <div className="mb-3 flex items-center justify-between text-xs font-mono text-[#858178]">
            <span className="uppercase text-[#C5A85C] tracking-widest">
              Architectural Video Study · 16:9 Aspect Ratio
            </span>
            <span>Dialogue with Nature Cinema</span>
          </div>

          <ArchitecturalVideoPlayer
            src="/videos/dialogue-with-nature.mp4"
            poster="/images/nature/nature-hero.jpg"
            caption="Salient Architectural Motion Study"
            title="Biophilic Harmony: Man, Architecture, and Natural Flow"
          />
        </div>

        {/* Hero Visual & Opening Manifesto */}
        <div className="relative aspect-[21/9] min-h-[260px] w-full overflow-hidden border border-[#262420] mb-16">
          <Image
            src="/images/nature/nature-hero.jpg"
            alt="Dialogue with Nature architectural landscape"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-[#0D0C0B]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 max-w-3xl">
            <Quote className="w-8 h-8 text-[#C5A85C] mb-2 opacity-60" />
            <p className="text-base sm:text-xl font-serif text-[#F7F5F0] leading-snug">
              &quot;Mother Earth, may whatever I dig from you grow back again quickly, and may we not injure you by our labour.&quot;
            </p>
            <span className="text-xs font-mono text-[#C5A85C] uppercase tracking-widest mt-2 block">
              — Atharva Veda
            </span>
          </div>
        </div>

        {/* Narrative Discourse */}
        <div className="max-w-4xl space-y-6 text-sm sm:text-base text-[#B5B0A6] font-light leading-relaxed mb-20">
          <p>
            Although being a world savior might seem like a Herculean task in this era of acute climate disruption, protecting nature collectively is the first headway we make. Nature is an inseparable part of human existence—we are the children of nature’s cosmic forces, a microcosm of the universe and continuity of the cosmos.
          </p>

          <p>
            Ancient Indian scriptures translate into an unbroken way of life where there is no separation between the divine and the world of nature. The cultural heritage of India reflects a profound concern for an eco-centric way of living. At Redefining Architecture, we articulate these very virtues through the tectonics and climatic physics of our buildings.
          </p>

          <p>
            <strong className="text-[#F7F5F0] font-normal">Retain, Revere, Regenerate, and Rejoice</strong>—these 4 pillars represent our cornerstone ethos.
          </p>
        </div>

        {/* The 4 Pillars Detailed Exploration */}
        <div className="space-y-16">
          {NATURE_PILLARS.map((pillar) => (
            <div
              key={pillar.keyword}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 p-8 sm:p-12 border border-[#22201C] bg-[#141311] items-center"
            >
              <div className="lg:col-span-4 relative aspect-[4/3] overflow-hidden border border-[#262420] bg-[#0D0C0B]">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>

              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-[#C5A85C] font-semibold">
                    PILLAR 0{pillar.number}
                  </span>
                  <span className="w-6 h-[1px] bg-[#C5A85C]" />
                  <span className="text-xs font-mono text-[#858178] uppercase tracking-widest">
                    Ecological Imperative
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif text-[#F7F5F0]">
                  {pillar.keyword}: {pillar.title}
                </h2>

                <p className="text-sm text-[#B5B0A6] leading-relaxed font-light">
                  {pillar.description}
                </p>

                <div className="p-4 bg-[#191815] border-l border-[#C5A85C] text-xs italic text-[#D8BD74] font-serif">
                  &quot;{pillar.quote}&quot;
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-20 p-8 border border-[#262420] bg-[#141311] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-serif text-[#F7F5F0]">
              Interested in IGBC Green Building Certification?
            </h3>
            <p className="text-xs text-[#858178] mt-1">
              We provide complete energy simulation, carbon accounting, and statutory documentation.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3.5 bg-[#C5A85C] text-[#0D0C0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D8BD74] transition-colors shrink-0"
          >
            Start Sustainable Project
          </Link>
        </div>
      </div>
    </div>
  );
}
