"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface HeroSlide {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  image: string;
  projectSlug: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "01",
    number: "01",
    title: "THE BEST POINT",
    subtitle: "IS RISING FOR BETTER",
    category: "Residential: High-End Luxury",
    location: "Ballygunge, Kolkata",
    image: "/images/hero/slide-1-duet.jpg",
    projectSlug: "the-duet-ballygunge",
  },
  {
    id: "02",
    number: "02",
    title: "DESIGN",
    subtitle: "DRIVEN WITH PURPOSE",
    category: "Tertiary Healthcare",
    location: "Bhubaneswar, Odisha",
    image: "/images/hero/slide-2-hospital.jpg",
    projectSlug: "medical-college-bhubaneswar",
  },
  {
    id: "03",
    number: "03",
    title: "PORTAL",
    subtitle: "TO LIFE IN MOTION",
    category: "Interiors Architecture",
    location: "Kolkata, West Bengal",
    image: "/images/hero/slide-3-reception.jpg",
    projectSlug: "high-end-club-interiors",
  },
  {
    id: "04",
    number: "04",
    title: "CREATING",
    subtitle: "SUSTAINABLE SPACES",
    category: "Coastal Healthcare",
    location: "Puri, Odisha",
    image: "/images/hero/slide-4-puri.jpg",
    projectSlug: "puri-diagnostic-centre",
  },
  {
    id: "05",
    number: "05",
    title: "CANVAS",
    subtitle: "CRAFTING SUSTAINABILITY",
    category: "Hospitality & Wellness",
    location: "Kolkata, West Bengal",
    image: "/images/hero/slide-5-club.jpg",
    projectSlug: "high-end-club-interiors",
  },
  {
    id: "06",
    number: "06",
    title: "LEGACY",
    subtitle: "STORY ENDURING ELEGANCE",
    category: "Waterfront Private Villa",
    location: "Murshidabad, West Bengal",
    image: "/images/hero/slide-6-villa.jpg",
    projectSlug: "dhuliyan-luxury-villa",
  },
  {
    id: "07",
    number: "07",
    title: "REVIVAL",
    subtitle: "HERITAGE REIMAGINED",
    category: "Civic & Hospitality",
    location: "Kolkata, West Bengal",
    image: "/images/hero/slide-7-exhibition.jpg",
    projectSlug: "kolkata-exhibition-centre",
  },
  {
    id: "08",
    number: "08",
    title: "TRANSFORMING",
    subtitle: "DREAMS INTO REALITY",
    category: "Curvilinear Luxury High-Rise",
    location: "Kolkata, West Bengal",
    image: "/images/hero/slide-8-curve.jpg",
    projectSlug: "the-curve-residences",
  },
  {
    id: "09",
    number: "09",
    title: "ESCAPE",
    subtitle: "PEACE REDEFINED IN LUXURY",
    category: "Night Elevation Architecture",
    location: "Ballygunge, Kolkata",
    image: "/images/hero/slide-9-night.jpg",
    projectSlug: "the-duet-ballygunge",
  },
];

const SLIDE_DURATION_MS = 6000;

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Automatic Smooth Continuous Auto-Play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION_MS);

    return () => clearInterval(timer);
  }, [nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    setTouchStart(null);
  };

  const currentSlide = HERO_SLIDES[currentIndex];

  return (
    <section
      className="relative w-full h-[94vh] min-h-[660px] max-h-[1100px] overflow-hidden bg-[#0D0C0B] select-none"
      aria-label="Architectural Portfolio Hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Carousel with Ken-Burns and Crossfade */}
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentSlide.id}
          initial={hasMounted ? { opacity: 0, scale: 1.05 } : false}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.0, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
          className="absolute inset-0 w-full h-full transform-gpu"
        >
          <Image
            src={currentSlide.image}
            alt={`${currentSlide.title} - ${currentSlide.subtitle}`}
            fill
            priority
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Reference Architectural Lighting Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0C0B] via-[#0D0C0B]/35 to-[#0D0C0B]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D0C0B]/95 via-[#0D0C0B]/40 to-transparent w-full md:w-3/4" />
        </motion.div>
      </AnimatePresence>

      {/* Hero Content Overlay (Pure Editorial Layout matching Salient Design Studio) */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between pt-32 pb-16">
        {/* Top Category Badge */}
        <div className="flex items-center gap-4">
          <motion.div
            key={`badge-${currentSlide.id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center gap-3"
          >
            <span className="w-8 h-[1.5px] bg-[#C5A85C]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#C5A85C] font-semibold">
              {currentSlide.category}
            </span>
            <span className="text-[11px] text-[#6E675A]">·</span>
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#C5BFB5]">
              {currentSlide.location}
            </span>
          </motion.div>
        </div>

        {/* Central Bold Editorial Title with Automatic Staggered Animations */}
        <div className="max-w-3xl my-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={`text-${currentSlide.id}`}
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-4"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-medium tracking-tight text-[#F7F5F0] leading-[1.04]">
                {currentSlide.title}
              </h1>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-sm sm:text-base md:text-lg font-sans uppercase tracking-[0.32em] text-[#D8BD74] font-normal"
              >
                {currentSlide.subtitle}
              </motion.p>

              {/* Automatic Animated Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="pt-6 flex flex-wrap items-center gap-4"
              >
                {/* Primary Button with Live Shimmer Effect */}
                <Link
                  href={`/projects/${currentSlide.projectSlug}`}
                  className="relative group overflow-hidden px-7 py-4 bg-[#F7F5F0] text-[#0D0C0B] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#C5A85C] hover:text-[#0D0C0B] shadow-2xl flex items-center gap-3"
                >
                  <span className="relative z-10">Explore Project</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1.5" />

                  {/* Continuous Sheen Sweep Animation */}
                  <motion.div
                    animate={{
                      x: ["-100%", "200%"],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                      repeatDelay: 1,
                    }}
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                  />
                </Link>

                {/* Secondary Button with Active Border Draw */}
                <Link
                  href="/projects"
                  className="group relative px-7 py-4 border border-[#423E36] bg-[#0D0C0B]/40 backdrop-blur-sm text-[#ECE9E1] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:border-[#C5A85C] hover:text-[#C5A85C]"
                >
                  <span className="relative z-10">All Projects</span>
                  <div className="absolute inset-0 border border-[#C5A85C]/0 group-hover:border-[#C5A85C]/60 transition-all duration-300 pointer-events-none" />
                </Link>

                {/* Direct Action Link to Consultation */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#C5A85C] hover:text-[#F7F5F0] transition-colors py-2 px-3"
                >
                  Start Inquiry →
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Editorial Slide Number Indicator */}
        <div className="flex items-center justify-between text-xs text-[#A8A398] font-mono">
          <div className="flex items-center gap-3">
            <span className="text-xl font-light text-[#C5A85C] font-mono">
              {currentSlide.id}
            </span>
            <span className="text-sm text-[#8E8A80]">/</span>
            <span className="text-xs text-[#A8A398]">
              0{HERO_SLIDES.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
