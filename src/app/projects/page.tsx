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
    <div className="pt-32 pb-28 bg-[#0D0C0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="mb-14 pb-8 border-b border-[#262420]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A85C]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
              Portfolio Archives · Built Works
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F7F5F0] tracking-tight mb-4">
            Our Projects
          </h1>

          <p className="text-sm md:text-base text-[#858178] max-w-3xl leading-relaxed">
            A comprehensive survey of high-rise residential architecture, tertiary hospital campuses, commercial landmarks, MSME industrial master plans, and private waterfront estates across Eastern India.
          </p>

          {/* Mandatory Attribution Notice */}
          <div className="mt-6 p-4 bg-[#141311] border-l-2 border-[#C5A85C] text-xs text-[#858178] max-w-3xl font-sans leading-normal">
            <strong className="text-[#A8A398] uppercase tracking-wider block mb-1">
              Attribution & Practice History
            </strong>
            {STUDIO_DATA.transparencyNote}
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3 text-xs font-mono uppercase tracking-widest text-[#78736A]">
            <Filter className="w-3.5 h-3.5 text-[#C5A85C]" />
            <span>Filter Disciplines:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-sans uppercase tracking-[0.12em] transition-all duration-300 border ${
                    isSelected
                      ? "bg-[#C5A85C] border-[#C5A85C] text-[#0D0C0B] font-bold"
                      : "bg-[#141311] border-[#262420] text-[#969188] hover:text-[#F7F5F0] hover:border-[#423E36]"
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
                  className="group flex flex-col justify-between h-full border border-[#22201C] bg-[#141311] overflow-hidden transition-all duration-500 hover:border-[#C5A85C]/60"
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

                    <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-widest text-[#C5A85C] bg-[#0D0C0B]/80 backdrop-blur-sm px-2 py-1 border border-[#262420]">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-[#858178] mb-2">
                        <span className="uppercase text-[#C5A85C] tracking-wider">{project.category}</span>
                        <span>{project.location}</span>
                      </div>

                      <h2 className="text-xl font-serif text-[#F7F5F0] leading-snug group-hover:text-[#C5A85C] transition-colors mb-2">
                        {project.title}
                      </h2>

                      <p className="text-xs text-[#858178] line-clamp-2 leading-relaxed">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#1E1C19] flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-[#C5A85C] group-hover:text-[#F7F5F0] transition-colors">
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
          <div className="py-20 text-center text-[#78736A]">
            <p className="text-sm">No projects currently listed in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
