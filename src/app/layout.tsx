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
  themeColor: "#0D0C0B",
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
    <html lang="en" className={`${sans.variable} ${serif.variable} dark`}>
      <head>
        <meta
          name="description"
          content="Buildings shaped by climate, city, and the people who use them. High-end luxury residences, healthcare complexes, master planning, and sustainable architecture across Kolkata and Bhubaneswar."
        />
        <link
          rel="preload"
          as="image"
          href="/images/all-images/img-1.jpg"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-screen bg-[#0D0C0B] text-[#F7F5F0] flex flex-col antialiased selection:bg-[#C5A85C] selection:text-[#0D0C0B]">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
