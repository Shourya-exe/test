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
    title: "AUTOHUB SHOWROOM",
    subtitle: "SCULPTURAL COMMERCIAL EXCELLENCE",
    category: "Mixed Commercial",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-1.jpg",
    projectSlug: "autohub-corporate",
  },
  {
    id: "02",
    number: "02",
    title: "42 STORIED LUXURY RESIDENCE",
    subtitle: "CURVILINEAR AERODYNAMIC GRANDEUR",
    category: "Residential: High-End Luxury",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-2.jpg",
    projectSlug: "the-curve-residences",
  },
  {
    id: "03",
    number: "03",
    title: "FLUID HORIZONS",
    subtitle: "CONTINUOUS PANORAMIC BALCONIES",
    category: "Residential: High-End Luxury",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-3.jpg",
    projectSlug: "the-curve-residences",
  },
  {
    id: "04",
    number: "04",
    title: "ICONIC PODIUM",
    subtitle: "LANDSCAPED SKY SANCTUARY",
    category: "Residential: High-End Luxury",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-4.webp",
    projectSlug: "the-curve-residences",
  },
  {
    id: "05",
    number: "05",
    title: "LUXURY 16 STOREY RESIDENCY",
    subtitle: "TOWERING ELEGANCE AT BALLYGUNGE",
    category: "Residential: High-End Luxury",
    location: "Ballygunge, Kolkata",
    image: "/images/all-images/img-5.jpg",
    projectSlug: "the-duet-ballygunge",
  },
  {
    id: "06",
    number: "06",
    title: "SUNCREST TOWERS",
    subtitle: "CONTEMPORARY URBAN HIGH-RISE",
    category: "Residential: High-End Luxury",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-6.jpg",
    projectSlug: "the-duet-ballygunge",
  },
  {
    id: "07",
    number: "07",
    title: "SUNCREST VILLA",
    subtitle: "SEAMLESS INDOOR-OUTDOOR LIVING",
    category: "Villas",
    location: "West Bengal",
    image: "/images/all-images/img-7.jpg",
    projectSlug: "private-villas-and-farm-house",
  },
  {
    id: "08",
    number: "08",
    title: "EXHIBITION & CONVENTION",
    subtitle: "MONUMENTAL COLUMN-FREE SPACES",
    category: "Civic & Hospitality",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-8.jpg",
    projectSlug: "kolkata-exhibition-centre",
  },
  {
    id: "09",
    number: "09",
    title: "TEACHING HOSPITAL CAMPUS",
    subtitle: "CLINICAL EXCELLENCE & HEALING",
    category: "Health Care",
    location: "Phulbani & Koraput, Odisha",
    image: "/images/all-images/img-9.jpg",
    projectSlug: "medical-college-bhubaneswar",
  },
  {
    id: "10",
    number: "10",
    title: "WATERFRONT VILLA",
    subtitle: "TROPICAL MINIMALISM BY THE RIVER",
    category: "Villas",
    location: "Murshidabad, West Bengal",
    image: "/images/all-images/img-10.jpg",
    projectSlug: "dhuliyan-luxury-villa",
  },
  {
    id: "11",
    number: "11",
    title: "COURTYARD HAVEN",
    subtitle: "VERNACULAR MASONRY & SHADING",
    category: "Villas",
    location: "Murshidabad, West Bengal",
    image: "/images/all-images/img-11.jpg",
    projectSlug: "dhuliyan-luxury-villa",
  },
  {
    id: "12",
    number: "12",
    title: "SOMNATH VILLA",
    subtitle: "TIMELESS GEOMETRY & NATURE HARMONY",
    category: "Villas",
    location: "Bangalore, Karnataka",
    image: "/images/all-images/img-12.jpg",
    projectSlug: "private-villas-and-farm-house",
  },
  {
    id: "13",
    number: "13",
    title: "PRIVATE VILLAS & FARM HOUSE",
    subtitle: "TRANQUIL AGRARIAN RETREAT",
    category: "Villas",
    location: "Mysore, Karnataka",
    image: "/images/all-images/img-13.jpg",
    projectSlug: "private-villas-and-farm-house",
  },
  {
    id: "14",
    number: "14",
    title: "BESPOKE INTERIORS",
    subtitle: "WARM ACOUSTIC CRAFTSMANSHIP",
    category: "Interiors",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-14.jpg",
    projectSlug: "interiors-contemporary",
  },
  {
    id: "15",
    number: "15",
    title: "RESIDENT'S HALL & CLUB",
    subtitle: "EXCLUSIVE VIP COMMUNITY SPACES",
    category: "Interiors",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-15.jpg",
    projectSlug: "interiors-contemporary",
  },
  {
    id: "16",
    number: "16",
    title: "CONTEMPORARY INTERIORS",
    subtitle: "TACTILE TEXTURES & REFINED LIGHT",
    category: "Interiors",
    location: "Kolkata, West Bengal",
    image: "/images/all-images/img-16.jpg",
    projectSlug: "interiors-contemporary",
  },
  {
    id: "17",
    number: "17",
    title: "BEYOND SUSTAINABILITY",
    subtitle: "REGENERATIVE ECOLOGICAL ARCHITECTURE",
    category: "Regenerative Built Systems",
    location: "Eastern India",
    image: "/images/all-images/img-17.jpg",
    projectSlug: "beyond-sustainability",
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
      className="relative w-full h-[94vh] min-h-[660px] max-h-[1100px] overflow-hidden bg-[#FBFBFA] select-none"
      aria-label="Architectural Portfolio Hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Image Carousel with Ken-Burns and Crossfade */}
      <AnimatePresence initial={false}>
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
            fetchPriority="high"
            quality={80}
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Crisp Architectural Photo with zero white haze */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Instant Cache Preload for Next Slide */}
      <div className="hidden" aria-hidden="true">
        <Image
          src={HERO_SLIDES[(currentIndex + 1) % HERO_SLIDES.length].image}
          alt="Preload next slide"
          width={1920}
          height={1080}
          priority
          quality={80}
        />
      </div>

      {/* Hero Content Overlay (Pure Editorial Layout matching Salient Design Studio) */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col justify-between pt-32 pb-16">
        {/* Top Category Badge */}
        <div className="flex items-center gap-4">
          <motion.div
            key={`badge-${currentSlide.id}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#FAF9F5]/80 backdrop-blur-md border border-[#E2DDD3] shadow-sm"
          >
            <span className="w-6 h-[1.5px] bg-[#9E7D2D]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-[#9E7D2D] font-semibold">
              {currentSlide.category}
            </span>
            <span className="text-[11px] text-[#8C867B]">·</span>
            <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#3D3933] font-medium">
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif font-medium tracking-tight text-[#141311] leading-[1.12]">
                {currentSlide.title}
              </h1>

              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="text-xs sm:text-sm font-sans uppercase tracking-[0.26em] text-[#8C6D24] font-medium"
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
                  className="relative group overflow-hidden px-6 py-3.5 bg-[#141311] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#9E7D2D] shadow-md flex items-center gap-3"
                >
                  <span className="relative z-10 text-white">Explore Project</span>
                  <ArrowRight className="w-4 h-4 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1.5" />

                  {/* Continuous Sheen Sweep Animation */}
                  <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none animate-shimmer-sweep" />
                </Link>

                {/* Secondary Button: Semi-translucent Frosted Glass ("in middle of opaque and translucent") */}
                <Link
                  href="/projects"
                  className="group relative px-6 py-3.5 border border-[#C5A85C]/70 bg-[#FAF9F5]/80 backdrop-blur-md text-[#141311] text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#FAF9F5] hover:border-[#9E7D2D] shadow-sm"
                >
                  <span className="relative z-10 text-[#141311]">All Projects</span>
                </Link>

                {/* Direct Action Link to Consultation */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#141311] bg-[#FAF9F5]/75 hover:bg-[#FAF9F5] backdrop-blur-md border border-[#DCD6C9] hover:border-[#9E7D2D] hover:text-[#9E7D2D] transition-all py-3.5 px-4 shadow-sm"
                >
                  <span>Start Inquiry</span>
                  <span>→</span>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Minimal Editorial Slide Number Indicator */}
        <div className="flex items-center justify-between text-xs text-[#68635A] font-mono">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 bg-[#FAF9F5]/80 backdrop-blur-md border border-[#E2DDD3] shadow-sm">
            <span className="text-base font-semibold text-[#9E7D2D]">
              {currentSlide.id}
            </span>
            <span className="text-xs text-[#8E8A80]">/</span>
            <span className="text-xs text-[#68635A]">
              {HERO_SLIDES.length < 10 ? `0${HERO_SLIDES.length}` : HERO_SLIDES.length}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
