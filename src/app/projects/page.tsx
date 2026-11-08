"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { Filter, Maximize2, X, ChevronLeft, ChevronRight } from "lucide-react";
import { CATEGORIES, PROJECT_IMAGES, ProjectImage } from "@/data/projects";
import { STUDIO_DATA } from "@/data/studio";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages: ProjectImage[] =
    selectedCategory === "All"
      ? PROJECT_IMAGES
      : PROJECT_IMAGES.filter(
          (img) =>
            img.category.toLowerCase().includes(selectedCategory.toLowerCase()) ||
            img.category === selectedCategory
        );

  const handlePrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredImages.length) % filteredImages.length
    );
  }, [lightboxIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredImages.length
    );
  }, [lightboxIndex, filteredImages.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext, handleClose]);

  // Prevent background scrolling when lightbox open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [lightboxIndex]);

  // Count helper
  const getCount = (cat: string) => {
    if (cat === "All") return PROJECT_IMAGES.length;
    return PROJECT_IMAGES.filter(
      (img) =>
        img.category.toLowerCase().includes(cat.toLowerCase()) ||
        img.category === cat
    ).length;
  };

  return (
    <div className="pt-32 pb-28 bg-[#FBFBFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Editorial Header */}
        <div className="mb-12 pb-8 border-b border-[#E7E3DA]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#9E7D2D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#9E7D2D]">
              Studio Portfolio Selection
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-normal text-[#141311] tracking-tight">
                Our Projects
              </h1>
              <p className="mt-3 text-sm md:text-base text-[#5E5950] max-w-2xl font-light leading-relaxed">
                A visual anthology of luxury residences, tertiary healthcare facilities, master plans, and bespoke contemporary interior environments across India.
              </p>
            </div>

            <div className="text-xs font-mono text-[#827C72] self-start lg:self-end">
              Displaying <span className="text-[#9E7D2D] font-bold">{filteredImages.length}</span> photographs
            </div>
          </div>
        </div>

        {/* Typology Filter Bar */}
        <div className="mb-10 flex items-center gap-2 overflow-x-auto pb-3 scrollbar-thin">
          <div className="flex items-center gap-2 shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-[#827C72] pr-3 border-r border-[#E7E3DA]">
              <Filter className="w-3.5 h-3.5 text-[#9E7D2D]" />
              Filter
            </span>

            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = getCount(cat);

              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-200 border flex items-center gap-2 ${
                    isSelected
                      ? "bg-[#141311] border-[#141311] text-white shadow-sm font-semibold"
                      : "bg-[#FFFFFF] border-[#E7E3DA] text-[#5E5950] hover:border-[#9E7D2D] hover:text-[#141311]"
                  }`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] font-mono ${isSelected ? "text-white/80" : "text-[#9E7D2D]"}`}>
                    ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Pure Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative aspect-[4/3] overflow-hidden bg-[#F2EFE9] border border-[#E7E3DA] cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
            >
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Subtle Hover Reveal */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A85C] mb-1">
                  {image.category}
                </span>
                <h3 className="text-xs sm:text-sm font-serif font-medium text-[#F7F5F0] line-clamp-2 leading-snug">
                  {image.title}
                </h3>
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-[#F7F5F0]">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredImages.length === 0 && (
          <div className="py-20 text-center text-[#827C72]">
            <p className="text-sm">No images currently available in this category.</p>
          </div>
        )}
      </div>

      {/* Fullscreen Architectural Lightbox Modal */}
      {lightboxIndex !== null && filteredImages[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={handleClose}
        >
          {/* Top Bar: Counter & Close */}
          <div className="flex items-center justify-between text-white/80 z-20 pb-2">
            <span className="font-mono text-xs tracking-widest text-[#C5A85C]">
              {lightboxIndex + 1} / {filteredImages.length}
            </span>
            <button
              onClick={handleClose}
              className="p-2 text-white/70 hover:text-white transition-colors"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Center Image with Prev / Next Navigation */}
          <div
            className="relative flex-1 flex items-center justify-center my-auto min-h-0"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-3 bg-black/50 hover:bg-[#9E7D2D] text-white rounded-full transition-colors backdrop-blur-sm"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-w-6xl max-h-[75vh]">
              <Image
                src={filteredImages[lightboxIndex].src}
                alt={filteredImages[lightboxIndex].title}
                fill
                priority
                className="object-contain"
                sizes="95vw"
              />
            </div>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-3 bg-black/50 hover:bg-[#9E7D2D] text-white rounded-full transition-colors backdrop-blur-sm"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Bottom Caption */}
          <div
            className="text-center z-20 pt-3 space-y-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[11px] font-mono uppercase tracking-widest text-[#C5A85C]">
              {filteredImages[lightboxIndex].category} · {filteredImages[lightboxIndex].location}
            </div>
            <h2 className="text-sm sm:text-base font-serif text-[#F7F5F0]">
              {filteredImages[lightboxIndex].title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
