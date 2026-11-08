import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Cormorant_Garamond } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const sans = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "600"],
  preload: true,
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500"],
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#FBFBFA",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.redefiningarchitecture.com"),
  title: {
    default: "Redefining Architecture | Multidisciplinary Architecture Studio",
    template: "%s | Redefining Architecture",
  },
  description:
    "Buildings shaped by climate, city, and the people who use them. High-end luxury residences, healthcare complexes, master planning, and sustainable architecture across Kolkata and Bhubaneswar.",
  keywords: [
    "Architecture Studio Kolkata",
    "Architect Bhubaneswar",
    "High End Luxury Residences",
    "Hospital Architecture",
    "IGBC Green Buildings",
    "Building Sanction KMC BDA",
    "Master Planning",
    "Redefining Architecture",
  ],
  authors: [{ name: "Redefining Architecture Studio" }],
  openGraph: {
    title: "Redefining Architecture | Multidisciplinary Architecture Studio",
    description:
      "Buildings shaped by climate, city, and the people who use them. High-end luxury residences, healthcare complexes, master planning, and sustainable architecture across Kolkata and Bhubaneswar.",
    url: "https://www.redefiningarchitecture.com",
    siteName: "Redefining Architecture",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable} light`}>
      <body className="min-h-screen bg-[#FBFBFA] text-[#141311] flex flex-col antialiased selection:bg-[#9E7D2D] selection:text-white">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
