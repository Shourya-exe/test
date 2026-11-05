"use client";

import React, { useEffect, useRef, useState } from "react";
import { STATISTICS } from "@/data/studio";

interface CounterProps {
  finalValue: number;
  suffix?: string;
  duration?: number;
}

function AnimatedCounter({ finalValue, suffix = "", duration = 1800 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easedProgress * finalValue));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setCount(finalValue);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [inView, finalValue, duration]);

  return (
    <span ref={ref} className="font-mono text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#F7F5F0]">
      {count}
      <span className="text-[#C5A85C] ml-0.5">{suffix}</span>
    </span>
  );
}

export default function Statistics() {
  return (
    <section className="relative bg-[#12110F] border-y border-[#262420] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header Label */}
        <div className="flex items-center justify-between mb-12">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1px] bg-[#C5A85C]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
              By The Numbers · Practice Metrics
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#A8A398] hidden sm:inline-block">
            VERIFIED CREDENTIALS
          </span>
        </div>

        {/* 4 Primary Highlight Numbers (Salient Reference Style) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-16 border-b border-[#22201C]">
          {STATISTICS.slice(0, 4).map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col space-y-2 border-l border-[#2E2B25] pl-6 hover:border-[#C5A85C] transition-colors"
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C5A85C]">
                {stat.label}
              </div>

              <div className="py-1">
                <AnimatedCounter
                  finalValue={stat.number}
                  suffix={stat.suffix}
                />
              </div>

              <p className="text-xs text-[#ECE9E1] leading-relaxed font-sans">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Supporting Architectural Regulatory Credentials Footer Strip */}
        <div className="pt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-[#A8A398]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C5A85C]" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#F7F5F0]">
              Statutory Authority Registrations
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] text-[#A8A398]">
            <span className="border-b border-[#2E2B25] pb-0.5">Council of Architecture (COA)</span>
            <span className="border-b border-[#2E2B25] pb-0.5">KMC Licensed Class-1</span>
            <span className="border-b border-[#2E2B25] pb-0.5">BDA / BMC Empanelled</span>
            <span className="border-b border-[#2E2B25] pb-0.5">IGBC AP Member</span>
          </div>
        </div>
      </div>
    </section>
  );
}
