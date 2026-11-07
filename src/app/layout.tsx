import type { Metadata } from "next";
import { Geist, Geist_Mono, Newsreader, Figtree } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Display face for headlines. Clean geometric sans chosen to match the
// Gould Creative logo lettering.
const display = Figtree({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Editorial serif used for the italic philosophy quotes.
const serif = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Gould Creative · Design & Manufacturing",
    template: "%s · Gould Creative",
  },
  description:
    "Gould Creative offers design, development and manufacturing services for automotive, luggage, leather accessories and footwear production. Studios in London, Amsterdam and Shanghai.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${serif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <ScrollProgress />
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <div className="grain" aria-hidden />
      </body>
    </html>
  );
}
