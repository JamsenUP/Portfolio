import type { Metadata } from "next";
import { Outfit, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin", "cyrillic"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jamsen — Kinetic Spatial Glass Portfolio",
  description:
    "Ultra-modern high-performance developer portfolio based on Kinetic Spatial Glass aesthetic in Deep Truffle Mineral palette.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Jamsen — Kinetic Spatial Glass Portfolio",
    description:
      "Разрабатываю и продвигаю сайты — от идеи до первых клиентов из поиска. Next.js, Telegram WebApp, SEO PageSpeed 98+.",
    type: "website",
    url: "https://jamsen.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body
        className={`${outfit.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#2B221C] text-[#F8F6F0] selection:bg-[#EADEC9] selection:text-[#2B221C]`}
      >
        {children}
      </body>
    </html>
  );
}
