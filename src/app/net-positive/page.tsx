"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Leaf, Shield, Sun, Sparkles } from "lucide-react";

export default function NetPositivePage() {
  const philosophies = [
    {
      title: "The Limitlessness Within A Limit",
      desc: "Constraints in architecture—site setbacks, municipal FAR, extreme heatwaves, and tight budgets—are not impediments. They are the generative boundary conditions from which pure architectural innovation blooms.",
      icon: <Compass className="w-5 h-5 text-[#C5A85C]" />,
    },
    {
      title: "The Journey of Realisation",
      desc: "Design is an art of discovery, not arbitrary imposition. Research, humility, and site listening guide our pencils from initial massing diagrams to final occupancy commissioning.",
      icon: <Sparkles className="w-5 h-5 text-[#C5A85C]" />,
    },
    {
      title: "Technology for Sustainability",
      desc: "We deploy advanced thermodynamic simulation, solar path algorithms, and rainwater percolation modeling not as superficial tech gimmicks, but to ensure minimal operational carbon over a 100-year lifecycle.",
      icon: <Sun className="w-5 h-5 text-[#C5A85C]" />,
    },
    {
      title: "Keep Nature First",
      desc: "Before a single foundation footing is excavated, existing mature trees, surface water drainages, and wind vectors are meticulously mapped and woven into the building geometry.",
      icon: <Leaf className="w-5 h-5 text-[#C5A85C]" />,
    },
    {
      title: "The 5S Philosophy",
      desc: "Rooted in Vedic sciences: Save, Support, Simplify, Sustain, and Sanctify. Every wall, joinery detail, and service duct must satisfy these five qualitative touchstones.",
      icon: <Shield className="w-5 h-5 text-[#C5A85C]" />,
    },
    {
      title: "India is About Continuity",
      desc: "Our architectural heritage is not locked in a museum; it is a living river of contextual wisdom that provides modern architecture with dignity, cultural resonance, and climatic resilience.",
      icon: <Compass className="w-5 h-5 text-[#C5A85C]" />,
    },
  ];

  return (
    <div className="pt-32 pb-28 bg-[#0D0C0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#262420]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A85C]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
              Philosophy · Ecological Net Positivity
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F7F5F0] tracking-tight mb-4">
            Net Positive
          </h1>

          <p className="text-base sm:text-lg text-[#858178] max-w-3xl leading-relaxed">
            Going beyond zero-carbon neutrality to design regenerative built environments that give back more clean energy, fresh water, and biodiversity than they consume.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative aspect-[21/9] min-h-[320px] w-full overflow-hidden border border-[#262420] mb-20 bg-[#141311]">
          <Image
            src="/images/hero/slide-4-puri.jpg"
            alt="Net positive sustainable architecture"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-[#0D0C0B]/40 to-transparent" />
          <div className="absolute bottom-8 left-8 right-8 max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A85C] block mb-2">
              Regenerative Built Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F5F0]">
              Save · Support · Simplify · Sustain
            </h2>
            <p className="text-xs sm:text-sm text-[#B5B0A6] mt-2 font-light">
              With integration of Vedic science into architectural thinking, buildings transform from energy consumers into living ecological contributors.
            </p>
          </div>
        </div>

        {/* 6 Philosophies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {philosophies.map((p) => (
            <div
              key={p.title}
              className="p-8 bg-[#141311] border border-[#22201C] flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="p-2.5 bg-[#1C1A17] border border-[#2A2722] w-fit mb-4">
                  {p.icon}
                </div>
                <h3 className="text-xl font-serif text-[#F7F5F0] mb-2">{p.title}</h3>
                <p className="text-xs text-[#858178] leading-relaxed font-light">{p.desc}</p>
              </div>

              <div className="pt-2 text-[10px] font-mono uppercase tracking-wider text-[#C5A85C]">
                Net Positive Principle
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="p-8 sm:p-12 border border-[#262420] bg-[#141311] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif text-[#F7F5F0]">
              Commission a Net Positive Development
            </h3>
            <p className="text-xs text-[#858178] mt-1 max-w-xl">
              From daylight simulations and passive cooling verandas to rainwater aquifer replenishment and IGBC certification filings.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3.5 bg-[#C5A85C] text-[#0D0C0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D8BD74] transition-colors shrink-0"
          >
            Start Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
