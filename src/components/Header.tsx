"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Phone, Mail, MapPin } from "lucide-react";
import { STUDIO_DATA } from "@/data/studio";

const NAV_LINKS = [
  { label: "Beyond Sustainability", href: "/beyond-sustainability", number: "01" },
  { label: "Our Projects", href: "/projects", number: "02" },
  { label: "Who We Are", href: "/who-we-are", number: "03" },
  { label: "Design R+I", href: "/design", number: "04" },
  { label: "Dialogue With Nature", href: "/dialogue-with-nature", number: "05" },
  { label: "Dialogue With India", href: "/dialogue-with-india", number: "06" },
  { label: "Life at Studio", href: "/life-at-studio", number: "07" },
  { label: "News", href: "/news", number: "08" },
  { label: "Contact Us", href: "/contact", number: "09" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const shouldScroll = window.scrollY > 40;
          setIsScrolled((prev) => (prev !== shouldScroll ? shouldScroll : prev));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-[#0D0C0B]/95 backdrop-blur-md py-4 border-b border-[#262420]"
            : "bg-gradient-to-b from-[#0D0C0B]/80 via-[#0D0C0B]/40 to-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3.5 group focus:outline-none"
            aria-label="Redefining Architecture Home"
          >
            <div className="relative w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo.png"
                alt="Redefining Architecture Logo"
                width={40}
                height={40}
                priority
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-semibold uppercase tracking-[0.22em] text-[#F7F5F0] transition-colors group-hover:text-[#C5A85C]">
                Redefining
              </span>
              <span className="text-[10px] font-light uppercase tracking-[0.3em] text-[#969188]">
                Architecture
              </span>
            </div>
          </Link>

          {/* Desktop Direct Links (Key destinations) */}
          <nav className="hidden lg:flex items-center gap-8 text-[12px] font-medium tracking-[0.14em] uppercase text-[#B5B0A6]">
            {NAV_LINKS.slice(0, 5).map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors duration-200 hover:text-[#F7F5F0] relative py-1 ${
                    isActive ? "text-[#C5A85C]" : ""
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="header-active-pill"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A85C]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action & Menu Button */}
          <div className="flex items-center gap-5">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] px-4 py-2 border border-[#C5A85C]/60 text-[#F7F5F0] transition-all duration-300 hover:bg-[#C5A85C] hover:text-[#0D0C0B]"
            >
              Start Conversation
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            {/* Reference-matching Hamburger Toggle with Spring Animation */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-11 h-11 flex flex-col items-center justify-center gap-1.5 focus:outline-none border border-[#2E2B25] bg-[#141311] hover:border-[#C5A85C]/80 transition-colors p-2"
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              <span
                className={`w-6 h-[1.5px] bg-[#F7F5F0] transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 translate-y-2 bg-[#C5A85C]" : ""
                }`}
              />
              <span
                className={`w-4 h-[1.5px] bg-[#F7F5F0] self-end transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-[1.5px] bg-[#F7F5F0] transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 -translate-y-2 bg-[#C5A85C]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Menu Drawer (Full fidelity replication of Salient's overlay) */}
      <AnimatePresence>
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-[#0D0C0B]/85 backdrop-blur-md"
            />

            {/* Slide-out Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative ml-auto w-full max-w-xl h-full bg-[#12110F] border-l border-[#262420] text-[#F7F5F0] flex flex-col justify-between p-8 sm:p-14 overflow-y-auto"
            >
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between border-b border-[#262420] pb-6">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <Image
                      src="/images/logo.png"
                      alt="RA Logo"
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.24em] text-[#969188]">
                    Navigation Menu
                  </span>
                </div>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 text-[#969188] hover:text-[#F7F5F0] transition-colors focus:outline-none"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links with Editorial Numbers */}
              <nav className="my-8 flex flex-col space-y-4">
                {NAV_LINKS.map((link, idx) => {
                  const isActive = pathname === link.href;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`group flex items-baseline justify-between py-2 border-b border-[#1E1C19] hover:border-[#C5A85C]/60 transition-all ${
                          isActive ? "text-[#C5A85C]" : "text-[#ECE9E1] hover:text-[#C5A85C]"
                        }`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="text-[11px] font-mono tracking-widest text-[#78736A] group-hover:text-[#C5A85C]">
                            {link.number}
                          </span>
                          <span className="text-xl sm:text-2xl font-serif tracking-wide font-normal group-hover:translate-x-1 transition-transform">
                            {link.label}
                          </span>
                        </div>
                        <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#C5A85C]" />
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* Drawer Footer Information */}
              <div className="pt-6 border-t border-[#262420] space-y-4 text-[12px] text-[#969188]">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <span className="block uppercase text-[10px] tracking-[0.2em] text-[#C5A85C] mb-1 font-semibold">
                      Kolkata Studio
                    </span>
                    <p className="text-[11px] leading-relaxed text-[#B5B0A6]">
                      86 Golaghata Rd, Lake Town, Kolkata 700048
                    </p>
                  </div>
                  <div>
                    <span className="block uppercase text-[10px] tracking-[0.2em] text-[#C5A85C] mb-1 font-semibold">
                      Bhubaneswar Studio
                    </span>
                    <p className="text-[11px] leading-relaxed text-[#B5B0A6]">
                      Bhubaneswar, Odisha 751006
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-3 text-[11px] text-[#78736A]">
                  <div className="flex items-center gap-4">
                    <a
                      href="tel:+919836421375"
                      className="hover:text-[#F7F5F0] transition-colors flex items-center gap-1.5"
                    >
                      <Phone className="w-3 h-3 text-[#C5A85C]" />
                      +91 98364 21375
                    </a>
                    <a
                      href={`mailto:${STUDIO_DATA.generalEmail}`}
                      className="hover:text-[#F7F5F0] transition-colors flex items-center gap-1.5"
                    >
                      <Mail className="w-3 h-3 text-[#C5A85C]" />
                      Email Us
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    {STUDIO_DATA.socials.map((s) => (
                      <a
                        key={s.name}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-[#C5A85C] transition-colors uppercase tracking-widest text-[10px]"
                      >
                        {s.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
