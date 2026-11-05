"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, BookOpen, GraduationCap, Users, Coffee, Heart } from "lucide-react";

export default function LifeAtStudioPage() {
  const rituals = [
    {
      title: "Wednesday Night Crits",
      desc: "Every Wednesday evening, ongoing drawings are pinned to the studio gallery wall. Architects, structural engineers, and interns debate massing, shadows, and circulation with constructive candor to uncover blind spots before any drawing reaches site.",
      icon: <MessageSquare className="w-5 h-5 text-[#C5A85C]" />,
      tag: "Rigorous Peer Review"
    },
    {
      title: "Office Speaker Series",
      desc: "A forum where our Principal Architect, senior associates, and visiting guest experts share dialogues covering a spectrum of subjects, ranging from Vedic geometry and structural aerodynamics to municipal law and regional history.",
      icon: <GraduationCap className="w-5 h-5 text-[#C5A85C]" />,
      tag: "Intellectual Exchange"
    },
    {
      title: "IGBC Knowledge Centre",
      desc: "Weekly hands-on workshops dedicated to thermodynamic building simulations, daylight calculation, rainwater percolation audits, and statutory environmental clearance compliance.",
      icon: <BookOpen className="w-5 h-5 text-[#C5A85C]" />,
      tag: "Sustainable Literacy"
    },
    {
      title: "Community of Design (C.O.D.)",
      desc: "Our relationship with 'Men' taught us how to celebrate togetherness. Table tennis tournaments, festival celebrations, site sketch tours, and spontaneous chai brainstorming breaks that build lifelong camaraderie.",
      icon: <Users className="w-5 h-5 text-[#C5A85C]" />,
      tag: "Studio Culture"
    },
    {
      title: "Internship & Hands-on Mentorship",
      desc: "We believe young architects learn most when boots meet concrete. Interns are taken directly to active high-rise construction pours, hospital wards, and municipal sanction hearings.",
      icon: <Coffee className="w-5 h-5 text-[#C5A85C]" />,
      tag: "Next Generation"
    },
    {
      title: "Mindfulness & Spatial Focus",
      desc: "Architecture demands profound mental presence. Morning meditation and quiet drafting hours allow our teams to approach complex multi-thousand square-foot master plans with stillness and clarity.",
      icon: <Heart className="w-5 h-5 text-[#C5A85C]" />,
      tag: "Wellbeing"
    }
  ];

  return (
    <div className="pt-32 pb-28 bg-[#0D0C0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#262420]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A85C]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
              Culture · Community · Studio Rituals
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F7F5F0] tracking-tight mb-4">
            Life at Studio
          </h1>

          <p className="text-base sm:text-lg text-[#858178] max-w-3xl leading-relaxed">
            Our relationship with Nature taught us sustainability, and our relationship with People taught us how to celebrate it. An inside look into our creative laboratory across Kolkata and Bhubaneswar.
          </p>
        </div>

        {/* Studio Photographic Collage */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="relative aspect-[16/11] overflow-hidden border border-[#262420] bg-[#141311]">
            <Image
              src="/images/studio/studio-hero.jpg"
              alt="Design studio drafting and workshop"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A85C] block mb-1">
                Design Studio Workshop
              </span>
              <p className="text-sm font-serif text-[#F7F5F0]">
                Where physical models meet precision digital BIM coordination.
              </p>
            </div>
          </div>

          <div className="relative aspect-[16/11] overflow-hidden border border-[#262420] bg-[#141311]">
            <Image
              src="/images/studio/studio-culture.jpg"
              alt="Studio collaborative review session"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A85C] block mb-1">
                Collaborative Environment
              </span>
              <p className="text-sm font-serif text-[#F7F5F0]">
                Fostering intellectual humility from concept through commissioning.
              </p>
            </div>
          </div>
        </div>

        {/* Culture & Rituals Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rituals.map((r) => (
            <div
              key={r.title}
              className="p-8 bg-[#141311] border border-[#22201C] flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 bg-[#1C1A17] border border-[#2A2722]">
                    {r.icon}
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A85C]">
                    {r.tag}
                  </span>
                </div>

                <h3 className="text-xl font-serif text-[#F7F5F0] mb-2">{r.title}</h3>
                <p className="text-xs text-[#858178] leading-relaxed font-light">{r.desc}</p>
              </div>

              <div className="pt-2 text-[10px] font-mono uppercase tracking-wider text-[#78736A]">
                Studio Ritual · Redefining Architecture
              </div>
            </div>
          ))}
        </div>

        {/* Careers & Internship Notice */}
        <div className="mt-20 p-8 sm:p-12 border border-[#262420] bg-[#141311] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#C5A85C] block mb-1">
              Join Our Multidisciplinary Collective
            </span>
            <h3 className="text-2xl font-serif text-[#F7F5F0] mb-2">
              Career & Internship Opportunities
            </h3>
            <p className="text-xs text-[#858178] leading-relaxed">
              We are constantly seeking passionate architects, landscape designers, interior architects, and BIM modelers for our Kolkata and Bhubaneswar studios.
            </p>
          </div>

          <Link
            href="/contact"
            className="px-6 py-3.5 bg-[#C5A85C] text-[#0D0C0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D8BD74] transition-colors shrink-0"
          >
            Apply to the Studio
          </Link>
        </div>
      </div>
    </div>
  );
}
