"use client";

import React, { useState } from "react";
import { ArrowUpRight, Phone, Mail, MapPin, CheckCircle, Send, Loader2, AlertCircle } from "lucide-react";
import { STUDIO_DATA, SERVICES } from "@/data/studio";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [emailDelivered, setEmailDelivered] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Architecture",
    location: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitted(true);
        setEmailDelivered(data.emailSent || false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "Architecture",
          location: "",
          message: "",
        });
      } else {
        setErrorMessage(data.error || "Failed to submit enquiry. Please try again or reach out directly.");
      }
    } catch (err: any) {
      setErrorMessage("Network error connecting to inquiry service. Please call or email directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-28 bg-[#0D0C0B]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 pb-8 border-b border-[#262420]">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#C5A85C]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
              Let&apos;s Connect · Kolkata & Bhubaneswar
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-normal text-[#F7F5F0] tracking-tight mb-4">
            Start a Conversation
          </h1>

          <p className="text-base sm:text-lg text-[#858178] max-w-3xl leading-relaxed">
            Tell us about your site, your brief, your timeline, or your statutory sanction requirements. Inquiries are delivered directly to our studio team at info@redefinedesignstudio.in.
          </p>
        </div>

        {/* Contact Layout: Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Office Locations & Details (Col 5) */}
          <div className="lg:col-span-5 space-y-10">
            {/* Kolkata Studio */}
            <div className="p-8 bg-[#141311] border border-[#262420] space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A85C]" />
                <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-[#F7F5F0]">
                  Kolkata Studio
                </h3>
              </div>

              <p className="text-xs text-[#B5B0A6] leading-relaxed">
                Blob Studio, 5th Floor, Yamuna Building, 86 Golaghata Rd, Sreebhumi, Lake Town, Kolkata, West Bengal 700048
              </p>

              <div className="pt-2 flex flex-col space-y-2 text-xs text-[#969188]">
                <a
                  href="tel:+919836421375"
                  className="flex items-center gap-2 text-[#ECE9E1] hover:text-[#C5A85C] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A85C]" />
                  +91 98364 21375
                </a>
                <a
                  href={`mailto:${STUDIO_DATA.generalEmail}`}
                  className="flex items-center gap-2 text-[#ECE9E1] hover:text-[#C5A85C] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5A85C]" />
                  kolkata@redefiningarchitecture.com
                </a>
              </div>
            </div>

            {/* Bhubaneswar Studio */}
            <div className="p-8 bg-[#141311] border border-[#262420] space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#C5A85C]" />
                <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-[#F7F5F0]">
                  Bhubaneswar Studio
                </h3>
              </div>

              <p className="text-xs text-[#B5B0A6] leading-relaxed">
                Bhubaneswar, Odisha 751006
              </p>

              <div className="pt-2 flex flex-col space-y-2 text-xs text-[#969188]">
                <a
                  href="tel:+919836421375"
                  className="flex items-center gap-2 text-[#ECE9E1] hover:text-[#C5A85C] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C5A85C]" />
                  +91 98364 21375
                </a>
                <a
                  href={`mailto:${STUDIO_DATA.generalEmail}`}
                  className="flex items-center gap-2 text-[#ECE9E1] hover:text-[#C5A85C] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#C5A85C]" />
                  bhubaneswar@redefiningarchitecture.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (Col 7) */}
          <div className="lg:col-span-7 p-8 sm:p-12 bg-[#141311] border border-[#262420]">
            {submitted ? (
              <div className="py-16 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-[#C5A85C] mx-auto" />
                <h3 className="text-2xl font-serif text-[#F7F5F0]">
                  Thank You for Reaching Out
                </h3>
                <p className="text-xs text-[#969188] max-w-md mx-auto leading-relaxed">
                  Your project enquiry has been delivered to info@redefinedesignstudio.in and logged in our studio directory. Our Principal Architect will review your brief and connect within two working days.
                </p>

                <div className="pt-2">
                  <span className="inline-block px-3 py-1 bg-[#1A1815] border border-[#2E2B25] text-[11px] font-mono text-[#C5A85C]">
                    ✓ Delivered to info@redefinedesignstudio.in
                  </span>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 border border-[#C5A85C] text-[#C5A85C] text-xs uppercase tracking-widest hover:bg-[#C5A85C] hover:text-[#0D0C0B] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-serif text-[#F7F5F0] mb-2">
                    Project Consultation Request
                  </h3>
                  <p className="text-xs text-[#858178]">
                    Please share fundamental details regarding your prospective development.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#969188] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sen"
                      className="w-full px-4 py-3 bg-[#0D0C0B] border border-[#262420] text-[#F7F5F0] text-xs focus:outline-none focus:border-[#C5A85C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#969188] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@company.com"
                      className="w-full px-4 py-3 bg-[#0D0C0B] border border-[#262420] text-[#F7F5F0] text-xs focus:outline-none focus:border-[#C5A85C] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#969188] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98300 00000"
                      className="w-full px-4 py-3 bg-[#0D0C0B] border border-[#262420] text-[#F7F5F0] text-xs focus:outline-none focus:border-[#C5A85C] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[#969188] mb-2">
                      Service / Discipline *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0D0C0B] border border-[#262420] text-[#F7F5F0] text-xs focus:outline-none focus:border-[#C5A85C] transition-colors"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Statutory Approvals (KMC/BDA)">Statutory Approvals (KMC/BDA)</option>
                      <option value="Comprehensive Architecture & PMC">Comprehensive Architecture & PMC</option>
                      <option value="Other">Other Query</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#969188] mb-2">
                    Project Location / City
                  </label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Ballygunge, Kolkata or Chandrasekharpur, Bhubaneswar"
                    className="w-full px-4 py-3 bg-[#0D0C0B] border border-[#262420] text-[#F7F5F0] text-xs focus:outline-none focus:border-[#C5A85C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[#969188] mb-2">
                    About the Project & Site Scope *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe the site area, intended program, target timeline, and specific requirements..."
                    className="w-full px-4 py-3 bg-[#0D0C0B] border border-[#262420] text-[#F7F5F0] text-xs focus:outline-none focus:border-[#C5A85C] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-[#C5A85C] text-[#0D0C0B] text-xs font-bold uppercase tracking-[0.2em] transition-all hover:bg-[#D8BD74] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Recording Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Inquiry</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
