import React from "react";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import HeroCarousel from "@/components/HeroCarousel";
import StudioIntro from "@/components/StudioIntro";
import Statistics from "@/components/Statistics";
import NewsSection from "@/components/NewsSection";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = {
  title: "Redefining Architecture | Multidisciplinary Architecture Studio",
  description:
    "Multidisciplinary architecture and master planning studio based in Kolkata and Bhubaneswar. Over 20 years of expertise across luxury residences, healthcare complexes, and sustainable architecture.",
};

// Code-split below-the-fold interactive client components for performance (TBT, LCP, Main-thread)
const Expertise = dynamic(() => import("@/components/Expertise"), { ssr: true });
const DialogueNature = dynamic(() => import("@/components/DialogueNature"), { ssr: true });
const DialogueIndia = dynamic(() => import("@/components/DialogueIndia"), { ssr: true });

export default function HomePage() {
  const featuredProjects = [PROJECTS[0], PROJECTS[1], PROJECTS[2], PROJECTS[3], PROJECTS[4], PROJECTS[5]];

  return (
    <div className="flex flex-col w-full">
      {/* SECTION 02 — HERO IMAGE CAROUSEL */}
      <HeroCarousel />

      {/* SECTION 03 — STUDIO INTRODUCTION (Zero-JS Server Component) */}
      <StudioIntro />

      {/* SECTION 04 — STUDIO STATISTICS (Lightweight native observer) */}
      <Statistics />

      {/* FEATURED WORK PREVIEW GALLERY */}
      <section className="py-24 md:py-32 bg-[#0D0C0B] border-t border-[#262420]">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#262420]">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1px] bg-[#C5A85C]" />
                <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
                  Portfolio Selection · Built & Commissioned
                </span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F7F5F0] tracking-tight">
                Selected Works
              </h2>
            </div>

            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A85C] hover:text-[#F7F5F0] transition-colors"
            >
              Explore All Projects ({PROJECTS.length})
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetrical 3-Column Architectural Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group flex flex-col justify-between border border-[#22201C] bg-[#141311] overflow-hidden transition-all duration-500 hover:border-[#C5A85C]/60"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0D0C0B]">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-[#F7F5F0] bg-[#0D0C0B]/80 backdrop-blur-sm px-2.5 py-1 border border-[#262420]">
                    {project.id}
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#A8A398]">
                    <span className="uppercase text-[#C5A85C] tracking-wider">{project.category}</span>
                    <span>{project.location}</span>
                  </div>

                  <h3 className="text-xl font-serif text-[#F7F5F0] leading-snug group-hover:text-[#C5A85C] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-[#B5B0A6] line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>

                  <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[#C5A85C] group-hover:text-[#F7F5F0] transition-colors">
                    View Project
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 05 — EXPERTISE */}
      <Expertise />

      {/* SECTION 06 — DIALOGUE WITH NATURE */}
      <DialogueNature />

      {/* SECTION 07 — DIALOGUE WITH INDIA */}
      <DialogueIndia />

      {/* SECTION 08 — NEWS (Zero-JS Server Component) */}
      <NewsSection />
    </div>
  );
}
