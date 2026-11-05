import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Award } from "lucide-react";
import { NEWS_ARTICLES } from "@/data/studio";

export default function NewsSection() {
  const featuredNews = NEWS_ARTICLES.find((n) => n.featured) || NEWS_ARTICLES[0];
  const supportingNews = NEWS_ARTICLES.filter((n) => n.id !== featuredNews.id);

  return (
    <section className="relative py-24 md:py-32 bg-[#12110F] border-t border-[#262420]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#262420]">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#C5A85C]" />
              <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
                Section 08 · Editorial & Media
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif font-normal text-[#F7F5F0] tracking-tight">
              News & Accolades
            </h2>
          </div>

          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C5A85C] hover:text-[#F7F5F0] transition-colors"
          >
            All Editorial Articles
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Master News Grid: Large Featured Item + Supporting Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Large Featured News Item (Column Span 7) */}
          <div className="lg:col-span-7 group border border-[#262420] bg-[#141311] overflow-hidden">
            <Link href={`/news#${featuredNews.slug}`} className="block">
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0D0C0B]">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-transparent to-transparent" />

                <div className="absolute top-5 left-5 px-3 py-1 bg-[#0D0C0B]/90 backdrop-blur-sm border border-[#C5A85C]/60 text-[10px] font-mono uppercase tracking-widest text-[#C5A85C] flex items-center gap-2">
                  <Award className="w-3 h-3 text-[#C5A85C]" />
                  <span>Featured Accolade</span>
                </div>
              </div>

              <div className="p-8 sm:p-10 space-y-4">
                <div className="flex items-center gap-4 text-xs font-mono text-[#858178]">
                  <span className="uppercase text-[#C5A85C] tracking-widest font-semibold">
                    {featuredNews.category}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3 h-3" />
                    {featuredNews.date}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F5F0] leading-snug group-hover:text-[#C5A85C] transition-colors">
                  {featuredNews.title}
                </h3>

                <p className="text-sm text-[#B5B0A6] leading-relaxed font-light">
                  {featuredNews.snippet}
                </p>

                <div className="pt-4 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A85C] group-hover:text-[#F7F5F0] transition-colors">
                  Read Full Article
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>

          {/* Supporting News Cards (Column Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            {supportingNews.map((news) => (
              <div
                key={news.id}
                className="group border border-[#262420] bg-[#141311] overflow-hidden"
              >
                <Link href={`/news#${news.slug}`} className="grid grid-cols-1 sm:grid-cols-12 gap-0">
                  <div className="sm:col-span-5 relative aspect-[16/10] sm:aspect-auto overflow-hidden bg-[#0D0C0B]">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 20vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="sm:col-span-7 p-6 space-y-2.5">
                    <div className="flex items-center gap-2 text-[10px] font-mono text-[#A8A398]">
                      <span className="text-[#C5A85C] uppercase">{news.category}</span>
                      <span>·</span>
                      <span>{news.date}</span>
                    </div>

                    <h3 className="text-base font-serif text-[#F7F5F0] line-clamp-2 leading-snug group-hover:text-[#C5A85C] transition-colors">
                      {news.title}
                    </h3>

                    <p className="text-xs text-[#B5B0A6] line-clamp-2 leading-relaxed">
                      {news.snippet}
                    </p>

                    <div className="pt-2 flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#C5A85C]">
                      Read Story →
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
