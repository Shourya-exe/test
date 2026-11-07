"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import { PROJECTS, CATEGORIES } from "@/data/projects";
import { STUDIO_DATA } from "@/data/studio";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) || p.category === selectedCategory);

  return (
    <div className="pt-32 pb-28 bg-[#FBFBFA]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-14 pb-8 border-b border-[#E7E3DA]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#9E7D2D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
              Portfolio Archives · Built Works
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal text-[#141311] tracking-tight mb-4">
            Our Projects
          </h1>

          <p className="text-sm md:text-base text-[#7A746B] max-w-3xl leading-relaxed">
            A comprehensive survey of high-rise residential architecture, tertiary hospital campuses, commercial landmarks, MSME industrial master plans, and private waterfront estates across Eastern India.
          </p>

          {/* Mandatory Attribution Notice */}
          <div className="mt-6 p-4 bg-[#FAF9F5] border-l-2 border-[#9E7D2D] border border-[#E7E3DA] text-xs text-[#5E5950] max-w-3xl font-sans leading-normal shadow-sm">
            <strong className="text-[#68635A] uppercase tracking-wider block mb-1">
              Attribution & Practice History
            </strong>
            {STUDIO_DATA.transparencyNote}
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-[#827C72]">
            <Filter className="w-3.5 h-3.5 text-[#9E7D2D]" />
            <span>Filter Disciplines:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.12em] transition-all duration-300 border shadow-sm ${
                    isSelected
                      ? "bg-[#9E7D2D] border-[#9E7D2D] text-white font-semibold"
                      : "bg-[#FFFFFF] border-[#E7E3DA] text-[#4D4942] hover:text-[#141311] hover:border-[#9E7D2D]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <Link
                  href={`/projects/${project.slug}`}
                  className="group flex flex-col justify-between h-full border border-[#E7E3DA] bg-white overflow-hidden transition-all duration-500 hover:border-[#9E7D2D]/60 shadow-sm hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#FBFBFA]">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FBFBFA] via-transparent to-transparent opacity-60" />

                    <div className="absolute top-4 left-4 font-mono text-[10px] uppercase tracking-widest text-[#141311] bg-[#FAF9F5]/90 backdrop-blur-sm px-2.5 py-1 border border-[#E7E3DA] shadow-sm font-semibold">
                      {project.id}
                    </div>

                    <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-widest text-[#9E7D2D] bg-[#FAF9F5]/90 backdrop-blur-sm px-2 py-1 border border-[#E7E3DA] shadow-sm font-semibold">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#7A746B] mb-2">
                        <span className="uppercase text-[#9E7D2D] tracking-wider">{project.category}</span>
                        <span>{project.location}</span>
                      </div>

                      <h2 className="text-xl font-serif text-[#141311] leading-snug group-hover:text-[#9E7D2D] transition-colors mb-2">
                        {project.title}
                      </h2>

                      <p className="text-xs text-[#7A746B] line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F2EFE8] flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#9E7D2D] group-hover:text-[#141311] transition-colors">
                      <span>View Specifications</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center text-[#827C72]">
            <p className="text-sm">No projects currently listed in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
