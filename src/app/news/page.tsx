"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Award } from "lucide-react";
import { NEWS_ARTICLES } from "@/data/studio";

export default function NewsPage() {
  return (
    <div className="pt-32 pb-28 bg-[#0D0C0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#262420]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A85C]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
              Editorial · Recognition & Project Milestones
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F7F5F0] tracking-tight mb-4">
            News & Accolades
          </h1>

          <p className="text-base sm:text-lg text-[#858178] max-w-3xl leading-relaxed">
            Documenting our architectural recognitions, project inaugurations, academic lectures, and milestone achievements across Kolkata, Bhubaneswar, and Eastern India.
          </p>
        </div>

        {/* Full Editorial Articles List */}
        <div className="space-y-16">
          {NEWS_ARTICLES.map((article, idx) => (
            <article
              key={article.id}
              id={article.slug}
              className="scroll-mt-32 p-8 sm:p-12 border border-[#22201C] bg-[#141311] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-5 relative aspect-[16/10] overflow-hidden border border-[#262420] bg-[#0D0C0B]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-2.5 py-1 bg-[#0D0C0B]/90 backdrop-blur-sm border border-[#C5A85C]/60 text-[10px] font-mono uppercase tracking-widest text-[#C5A85C] flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-[#C5A85C]" />
                  <span>{article.category}</span>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-[#858178]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C5A85C]" />
                    {article.date}
                  </span>
                  <span>·</span>
                  <span className="uppercase text-[#C5A85C] font-semibold">{article.category}</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif text-[#F7F5F0] leading-snug">
                  {article.title}
                </h2>

                <div className="space-y-3 text-sm text-[#B5B0A6] font-light leading-relaxed">
                  {article.fullText.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A85C] hover:text-[#F7F5F0] transition-colors"
                  >
                    Enquire About Studio Collaborations →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
