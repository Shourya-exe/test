"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Award, Compass, Shield, BookOpen } from "lucide-react";
import { STUDIO_DATA, SERVICES, STATISTICS } from "@/data/studio";

export default function WhoWeArePage() {
  return (
    <div className="pt-32 pb-28 bg-[#0D0C0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#262420]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A85C]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
              About The Practice · Leadership & Philosophy
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F7F5F0] tracking-tight mb-4">
            Who We Are
          </h1>

          <p className="text-base sm:text-lg text-[#858178] max-w-3xl leading-relaxed">
            Redefining Architecture is a multidisciplinary design practice operating from Kolkata and Bhubaneswar, established to bring climate-responsive intelligence, statutory mastery, and architectural beauty to Eastern India.
          </p>
        </div>

        {/* Narrative & Visual Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-[#B5B0A6] font-light leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F5F0] leading-snug font-normal">
              OUR CREATIONS ARE MODIFICATIONS OF OUR RELATIONSHIP
            </h2>

            <p>
              Redefining Architecture is led by a registered architect with more than twenty years of rigorous experience in architectural design, design management, and the coordination of large multi-disciplinary consultant teams across India and the Gulf region.
            </p>

            <p>
              Educated at prestigious institutions with a <strong className="text-[#F7F5F0] font-normal border-b border-[#C5A85C]/40">Bachelor of Architecture (B.Arch) from NIT Calicut</strong> and a <strong className="text-[#F7F5F0] font-normal">Master of Architecture (M.Arch) in Urban Development</strong>, our leadership combines micro-scale tectonic detailing with macro-scale urban planning insights.
            </p>

            <p>
              The practice operates on an uncompromising philosophy: <em className="text-[#D8BD74] not-italic">we treat drawings, bills of quantities, structural models, and consultant input as one unified job</em>. That cohesion prevents design dilution through municipal approvals, contractor bidding, and site execution.
            </p>

            <p>
              We maintain active design offices in both <strong className="text-[#F7F5F0]">Kolkata</strong> and <strong className="text-[#F7F5F0]">Bhubaneswar</strong>, traveling to construction sites frequently to guarantee adherence to specifications and design purity.
            </p>

            {/* Statutory Registrations Box */}
            <div className="p-6 bg-[#141311] border border-[#262420] space-y-3 mt-6">
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#F7F5F0]">
                Professional Licensure & Registrations
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#858178]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A85C]" />
                  <span>Council of Architecture (COA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A85C]" />
                  <span>Kolkata Municipal Corporation (KMC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A85C]" />
                  <span>Bhubaneswar Development Authority (BDA)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A85C]" />
                  <span>Cuttack Development Authority (CDA)</span>
                </li>
              </ul>
            </div>

            {/* Mandatory Transparency Disclaimer */}
            <div className="p-4 bg-[#141311] border-l-2 border-[#C5A85C] text-xs text-[#858178] leading-relaxed">
              <strong className="text-[#A8A398] block uppercase text-[10px] tracking-wider mb-1">
                Transparency & Attribution
              </strong>
              {STUDIO_DATA.transparencyNote}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#262420] bg-[#141311]">
              <Image
                src="/images/studio/studio-hero.jpg"
                alt="Studio Practice Interior & Atmosphere"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A85C] block mb-1">
                  Design Studio Culture
                </span>
                <p className="text-sm font-serif text-[#F7F5F0]">
                  Where research, Vedic mathematics, and sustainable craft converge.
                </p>
              </div>
            </div>

            {/* Studio Fast Facts */}
            <div className="p-6 bg-[#141311] border border-[#262420] space-y-3 text-xs">
              <div className="flex justify-between py-2 border-b border-[#1E1C19]">
                <span className="text-[#78736A] font-mono">Offices</span>
                <span className="text-[#F7F5F0]">Kolkata & Bhubaneswar</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1E1C19]">
                <span className="text-[#78736A] font-mono">Experience</span>
                <span className="text-[#C5A85C] font-mono font-bold">20+ Years</span>
              </div>
              <div className="flex justify-between py-2 border-b border-[#1E1C19]">
                <span className="text-[#78736A] font-mono">Education</span>
                <span className="text-[#F7F5F0]">B.Arch (NIT Calicut) · M.Arch</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-[#78736A] font-mono">Consultancy Languages</span>
                <span className="text-[#F7F5F0]">English, Hindi, Odia, Bengali</span>
              </div>
            </div>
          </div>
        </div>

        {/* 11 Integrated Services Section */}
        <div className="pt-16 border-t border-[#262420]">
          <div className="mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A85C] block mb-2">
              Comprehensive Scope
            </span>
            <h3 className="text-3xl sm:text-4xl font-serif text-[#F7F5F0]">
              11 Services Under One Roof
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.id} className="p-6 bg-[#141311] border border-[#22201C] flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono text-[#C5A85C] mb-2 block">{s.number}</span>
                  <h4 className="text-lg font-serif text-[#F7F5F0] mb-2">{s.title}</h4>
                  <p className="text-xs text-[#858178] leading-relaxed mb-4">{s.shortDesc}</p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-[#C5A85C] hover:text-[#F7F5F0] transition-colors"
                >
                  Consult on this →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
