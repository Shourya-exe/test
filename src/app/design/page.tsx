"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Compass, Atom, Sparkles, Wind, Sun, Layers } from "lucide-react";

export default function DesignRIPage() {
  const researchTopics = [
    {
      category: "VEDIC SCIENCES",
      title: "Decoding Geopathy & Telluric Energies",
      subtitle: "Aligning human biology with terrestrial electromagnetic fields",
      icon: <Compass className="w-5 h-5 text-[#C5A85C]" />,
      desc: "In our architectural practice, geopathy refers to the rigorous consideration of the Earth's natural energies and geological features when locating foundations and human sleep/work zones. By mapping underground water veins, faults, and natural electromagnetic fields, we craft spatial volumes that enhance vitality, clarity, and deep restorative rest.",
      image: "/images/india/pattern.jpg",
    },
    {
      category: "VERNACULARITY",
      title: "Decoding the Vernacular: Art, Architecture & Materials",
      subtitle: "Centuries of regional wisdom translated into modern steel and glass",
      icon: <Layers className="w-5 h-5 text-[#C5A85C]" />,
      desc: "Vernacular architecture is not a nostalgic style—it is empirical science refined over generations. By studying Bengal's terracotta jalis, deep shaded verandas, and high ceilings with natural stack ventilation, we engineer contemporary structures that consume a fraction of the cooling energy required by standard commercial glass boxes.",
      image: "/images/india/codes.jpg",
    },
    {
      category: "BIOPHILIC DESIGN",
      title: "Buildings for Enhanced Human Performance",
      subtitle: "The innate biological necessity of natural immersion",
      icon: <Wind className="w-5 h-5 text-[#C5A85C]" />,
      desc: "Humans evolved in multisensory immersion with living nature. Biophilic design weaves vegetative courtyards, living green walls, daylight modulation, and natural tactile timber and stone into the everyday workflow. Studies demonstrate a 15% increase in cognitive performance and marked reduction in stress markers.",
      image: "/images/nature/nature-hero.jpg",
    },
    {
      category: "SUSTAINABILITY IN PRACTICE",
      title: "Thermodynamic Envelope & Microclimate Engineering",
      subtitle: "Beyond certifications to thermodynamic reality",
      icon: <Sun className="w-5 h-5 text-[#C5A85C]" />,
      desc: "Energy simulation software guides our massing from Day One. Double-skin ventilated facades, thermal break windows, horizontal overhangs calibrated to Bengal's solar angles, and zero-discharge water recycling systems ensure that high sustainability performance is built directly into the tectonic envelope.",
      image: "/images/hero/slide-4-puri.jpg",
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
              Design Research + Innovation (R+I)
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F7F5F0] tracking-tight mb-4">
            Innovate · Adapt · Create
          </h1>

          <p className="text-base sm:text-lg text-[#858178] max-w-3xl leading-relaxed">
            Our architectural journey is nurtured by rigorous research and ingenious design strategies backed by Vedic sciences, bioclimatic simulations, and vernacular engineering.
          </p>

          <div className="mt-4 flex items-center gap-3 text-xs font-mono text-[#C5A85C]">
            <span>प्रक्रिया : The Research Process</span>
            <span>·</span>
            <span>Evidence-Based Design Methodology</span>
          </div>
        </div>

        {/* Featured Research Topic Cards */}
        <div className="space-y-16">
          {researchTopics.map((topic, idx) => (
            <div
              key={topic.category}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center p-8 sm:p-12 border border-[#22201C] bg-[#141311] ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={`lg:col-span-7 space-y-4 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-2.5 text-xs font-mono text-[#C5A85C] uppercase tracking-widest">
                  {topic.icon}
                  <span>{topic.category}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F5F0] leading-snug">
                  {topic.title}
                </h2>

                <p className="text-xs font-mono text-[#D8BD74] uppercase tracking-wider">
                  {topic.subtitle}
                </p>

                <p className="text-sm text-[#B5B0A6] leading-relaxed font-light">
                  {topic.desc}
                </p>

                <div className="pt-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C5A85C] hover:text-[#F7F5F0] transition-colors"
                  >
                    Consult On This Research Domain →
                  </Link>
                </div>
              </div>

              <div className={`lg:col-span-5 relative aspect-[16/11] overflow-hidden border border-[#262420] bg-[#0D0C0B] ${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <Image
                  src={topic.image}
                  alt={topic.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B]/80 via-transparent to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
