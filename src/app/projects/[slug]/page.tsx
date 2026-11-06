import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, CheckCircle2, MapPin, Calendar, Maximize2, ShieldAlert } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    slug: p.slug,
  }));
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = PROJECTS[projectIndex];
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const relatedProjects = PROJECTS.filter((p) => p.id !== project.id && p.categorySlug === project.categorySlug).slice(0, 3);

  return (
    <div className="pt-28 pb-28 bg-[#0D0C0B]">
      {/* Back to Projects Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 border-b border-[#262420] flex items-center justify-between">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#969188] hover:text-[#C5A85C] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Back to All Projects
        </Link>

        <span className="text-xs font-mono text-[#545048]">
          Project {project.id} of {PROJECTS.length < 10 ? `0${PROJECTS.length}` : PROJECTS.length}
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10">
        {/* Project Header Info */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A85C]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
              {project.category}
            </span>
            <span className="text-[#545048]">·</span>
            <span className="text-[11px] font-mono text-[#858178] uppercase">{project.location}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F7F5F0] tracking-tight leading-[1.08] mb-6">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-[#D8BD74] font-serif max-w-4xl leading-relaxed">
            {project.tagline}
          </p>

          {project.disciplines.some((d) => d.toLowerCase().includes("igbc")) && (
            <div className="mt-5 inline-flex items-center gap-2.5 px-4 py-2 bg-[#C5A85C]/15 border border-[#C5A85C] text-[#F7F5F0] text-xs font-mono font-bold uppercase tracking-widest">
              <CheckCircle2 className="w-4 h-4 text-[#C5A85C]" />
              <span>
                {project.disciplines.find((d) => d.toLowerCase().includes("igbc"))}
              </span>
            </div>
          )}
        </div>

        {/* Hero Large Cover Photograph */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-[#262420] bg-[#141311] mb-16">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>

        {/* Project Specifications & Brief Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Main Content & Narrative (Col 8) */}
          <div className="lg:col-span-8 space-y-8">
            <div>
              <h2 className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A85C] mb-3">
                Architectural Brief
              </h2>
              <p className="text-lg font-serif text-[#ECE9E1] leading-relaxed">
                {project.brief}
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#B5B0A6] font-light leading-relaxed">
              <h3 className="text-xs font-mono uppercase tracking-[0.25em] text-[#C5A85C] pt-4">
                Design & Engineering Narrative
              </h3>
              {project.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Key Innovations / Highlights */}
            <div className="p-6 bg-[#141311] border border-[#262420] space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-[#F7F5F0]">
                Key Design Innovations & Specifications
              </h4>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2.5 text-xs text-[#B5B0A6]">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A85C] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar Project Facts & Data (Col 4) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 bg-[#141311] border border-[#262420] divide-y divide-[#262420]">
              <div className="pb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#78736A] block">
                  Executed For / Context
                </span>
                <span className="text-xs text-[#ECE9E1] font-medium mt-1 block">
                  {project.workedFor}
                </span>
              </div>

              <div className="py-3 flex justify-between items-center text-xs">
                <span className="text-[#78736A] font-mono">Location</span>
                <span className="text-[#F7F5F0] font-medium">{project.location}</span>
              </div>

              <div className="py-3 flex justify-between items-center text-xs">
                <span className="text-[#78736A] font-mono">Category</span>
                <span className="text-[#F7F5F0] font-medium">{project.category}</span>
              </div>

              <div className="py-3 flex justify-between items-center text-xs">
                <span className="text-[#78736A] font-mono">Completed Year</span>
                <span className="text-[#F7F5F0] font-medium">{project.year}</span>
              </div>

              <div className="py-3 flex justify-between items-center text-xs">
                <span className="text-[#78736A] font-mono">Built-up Area</span>
                <span className="text-[#C5A85C] font-mono font-bold">{project.area}</span>
              </div>

              <div className="py-3 flex justify-between items-center text-xs">
                <span className="text-[#78736A] font-mono">Status</span>
                <span className="text-[#F7F5F0] font-medium">{project.status}</span>
              </div>

              <div className="pt-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#78736A] block mb-2">
                  Integrated Disciplines
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.disciplines.map((d) => {
                    const isIgbc = d.toLowerCase().includes("igbc");
                    return (
                      <span
                        key={d}
                        className={`px-2 py-1 border text-[10px] font-mono ${
                          isIgbc
                            ? "bg-[#C5A85C]/20 border-[#C5A85C] text-[#F7F5F0] font-bold"
                            : "bg-[#1A1815] border-[#2E2B25] text-[#A8A398]"
                        }`}
                      >
                        {d}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Mandatory Attribution Badge */}
            <div className="p-4 bg-[#141311] border-l-2 border-[#C5A85C] text-[11px] text-[#858178] leading-relaxed">
              <strong className="text-[#A8A398] block uppercase text-[10px] tracking-wider mb-1">
                Notice & Attribution
              </strong>
              Projects shown were executed while working for real estate developers and premier design consultancies.
            </div>

            <Link
              href="/contact"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 bg-[#C5A85C] text-[#0D0C0B] text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:bg-[#D8BD74]"
            >
              Enquire About Similar Project
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Image Gallery Showcase */}
        {project.gallery.length > 1 && (
          <div className="mb-24 pt-12 border-t border-[#262420]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl sm:text-3xl font-serif text-[#F7F5F0]">
                Project Gallery & Drawings
              </h3>
              <span className="text-xs font-mono text-[#858178]">
                {project.gallery.length} High-Resolution Plates
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[16/10] overflow-hidden border border-[#262420] bg-[#141311] group"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} - Plate ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-[#0D0C0B]/80 text-[10px] font-mono text-[#C5A85C] border border-[#262420]">
                    Plate 0{idx + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Previous & Next Project Navigation */}
        <div className="pt-12 border-t border-[#262420] grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link
            href={`/projects/${prevProject.slug}`}
            className="group p-6 border border-[#262420] bg-[#141311] hover:border-[#C5A85C]/60 transition-colors"
          >
            <div className="flex items-center gap-2 text-xs font-mono text-[#858178] uppercase mb-2">
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>Previous Project</span>
            </div>
            <h4 className="text-xl font-serif text-[#F7F5F0] group-hover:text-[#C5A85C] transition-colors">
              {prevProject.title}
            </h4>
            <span className="text-xs text-[#78736A] font-mono mt-1 block">
              {prevProject.category} · {prevProject.location}
            </span>
          </Link>

          <Link
            href={`/projects/${nextProject.slug}`}
            className="group p-6 border border-[#262420] bg-[#141311] hover:border-[#C5A85C]/60 transition-colors text-right"
          >
            <div className="flex items-center justify-end gap-2 text-xs font-mono text-[#858178] uppercase mb-2">
              <span>Next Project</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </div>
            <h4 className="text-xl font-serif text-[#F7F5F0] group-hover:text-[#C5A85C] transition-colors">
              {nextProject.title}
            </h4>
            <span className="text-xs text-[#78736A] font-mono mt-1 block">
              {nextProject.category} · {nextProject.location}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
