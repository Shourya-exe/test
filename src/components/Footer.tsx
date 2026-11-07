import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { STUDIO_DATA } from "@/data/studio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#F4F1EA] border-t border-[#E7E3DA] text-[#4D4942] text-xs pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F2EFE8]">
          {/* Brand & Mission (Col Span 4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-3.5 group focus:outline-none"
              aria-label="Redefining Architecture Home"
            >
              <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Redefining Architecture Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain brightness-0"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-semibold uppercase tracking-[0.22em] text-[#141311]">
                  Redefining
                </span>
                <span className="text-[10px] font-light uppercase tracking-[0.3em] text-[#757066]">
                  Architecture
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#7A746B] leading-relaxed max-w-sm">
              Buildings shaped by climate, city, and the people who use them. Led by an architect with over twenty years of experience in India and the Gulf.
            </p>

            <div className="pt-2 text-[11px] font-mono text-[#9E7D2D]">
              Kolkata · Bhubaneswar
            </div>
          </div>

          {/* Quick Navigation (Col Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#141311] font-semibold">
              Destinations
            </h3>
            <ul className="space-y-2.5 text-xs text-[#68635A]">
              <li>
                <Link href="/beyond-sustainability" className="hover:text-[#141311] transition-colors">
                  Beyond Sustainability
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-[#141311] transition-colors">
                  Our Projects
                </Link>
              </li>
              <li>
                <Link href="/who-we-are" className="hover:text-[#141311] transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="/design" className="hover:text-[#141311] transition-colors">
                  Design R+I
                </Link>
              </li>
              <li>
                <Link href="/dialogue-with-india" className="hover:text-[#141311] transition-colors">
                  Dialogue With India
                </Link>
              </li>
              <li>
                <Link href="/life-at-studio" className="hover:text-[#141311] transition-colors">
                  Life at Studio
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-[#141311] transition-colors">
                  News & Accolades
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#141311] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Studio Offices (Col Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#141311] font-semibold">
              Studio Locations
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs text-[#68635A]">
              <div>
                <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#9E7D2D] block mb-1.5">
                  Kolkata Studio
                </span>
                <p className="leading-relaxed text-[#68635A]">
                  Blob Studio, 5th Floor, Yamuna Building, 86 Golaghata Rd, Sreebhumi, Lake Town, Kolkata 700048
                </p>
                <a
                  href="tel:+919836421375"
                  className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-[#141311] hover:text-[#9E7D2D] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#9E7D2D]" />
                  +91 98364 21375
                </a>
              </div>

              <div>
                <span className="text-[11px] font-sans font-medium uppercase tracking-wider text-[#9E7D2D] block mb-1.5">
                  Bhubaneswar Studio
                </span>
                <p className="leading-relaxed text-[#68635A]">
                  Bhubaneswar, Odisha 751006
                </p>
                <a
                  href="tel:+919836421375"
                  className="mt-2 inline-flex items-center gap-1.5 text-[11px] text-[#141311] hover:text-[#9E7D2D] transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#9E7D2D]" />
                  +91 98364 21375
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <a
                href={`mailto:${STUDIO_DATA.generalEmail}`}
                className="inline-flex items-center gap-2 text-xs text-[#141311] hover:text-[#9E7D2D] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#9E7D2D]" />
                {STUDIO_DATA.generalEmail}
              </a>
              <div className="flex items-center gap-4">
                {STUDIO_DATA.socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[11px] font-mono uppercase tracking-widest text-[#7A746B] hover:text-[#9E7D2D] transition-colors"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Transparency Note & Bottom Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#8C867B]">
          <p>
            © {currentYear} {STUDIO_DATA.name}. All rights reserved. Registered with COA, KMC, BDA.
          </p>
          <p className="text-center md:text-right text-[10px] text-[#545048] max-w-xl">
            {STUDIO_DATA.transparencyNote}
          </p>
        </div>
      </div>
    </footer>
  );
}
