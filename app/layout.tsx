import type { Metadata } from "next";
import { Inter_Tight, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sgggasdynamics.com"),
  title: {
    default: "SGG Gas Dynamics | Industrial & Medical Gas Manufacturer in Madhya Pradesh",
    template: "%s | SGG Gas Dynamics",
  },
  description:
    "Shree Ganpati Gastech Private Limited manufactures and supplies industrial oxygen, medical oxygen, argon, nitrogen, CO2, nitrous oxide, dissolved acetylene, and LPG from Burhar, Shahdol, Madhya Pradesh.",
  keywords: [
    "industrial oxygen manufacturer",
    "oxygen gas supplier India",
    "argon gas supplier",
    "nitrogen gas manufacturer",
    "medical oxygen supplier",
    "industrial gas manufacturer Madhya Pradesh",
  ],
  openGraph: {
    title: "SGG Gas Dynamics",
    description:
      "Next-generation industrial and medical gas manufacturing infrastructure for enterprise industries in India.",
    url: "https://sgggasdynamics.com",
    siteName: "SGG Gas Dynamics",
    type: "website",
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${interTight.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
