import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#0D0C0B] px-6 py-24">
      <div className="max-w-md w-full text-center space-y-6 border border-[#262420] bg-[#141311] p-10">
        <div className="flex items-center justify-center gap-3">
          <span className="w-8 h-[1px] bg-[#C5A85C]" />
          <span className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#C5A85C]">
            404 · Page Not Found
          </span>
          <span className="w-8 h-[1px] bg-[#C5A85C]" />
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif text-[#F7F5F0]">
          Structure Not Found
        </h1>

        <p className="text-xs text-[#A8A398] leading-relaxed font-sans">
          The requested architectural document or page does not exist or has been relocated within the practice archive.
        </p>

        <div className="pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F7F5F0] text-[#0D0C0B] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#C5A85C] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Return to Studio Home
          </Link>
        </div>
      </div>
    </div>
  );
}
