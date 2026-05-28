import Link from "next/link";
import { Instagram, Linkedin, Youtube } from "lucide-react";
import { certifications, contact, navItems } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-black pt-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-industrial-oxygen to-transparent" />
      <div className="container-shell grid gap-10 pb-12 md:grid-cols-[1.4fr_.8fr_.8fr_.8fr]">
        <div>
          <p className="font-display text-2xl font-semibold text-white">{contact.brand}</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-white/[.58]">
            Shree Ganpati Gastech Private Limited is an industrial and medical gas manufacturing company built for certified supply, operational reliability, and enterprise-scale industrial demand.
          </p>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[.18em] text-industrial-silver">Quick Links</p>
          <div className="mt-5 grid gap-3">
            {navItems.map((item) => (
              <Link key={item} href={`#${item.toLowerCase()}`} className="text-sm text-white/[.58] transition hover:text-white">
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[.18em] text-industrial-silver">Certifications</p>
          <div className="mt-5 grid gap-3">
            {certifications.map((item) => (
              <span key={item} className="text-sm text-white/[.58]">{item}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[.18em] text-industrial-silver">Social</p>
          <div className="mt-5 flex gap-3">
            {[Linkedin, Instagram, Youtube].map((Icon, index) => (
              <span key={index} className="grid h-10 w-10 place-items-center rounded-md border border-white/[.12] bg-white/[.04] text-white/70 transition hover:border-industrial-oxygen/60 hover:text-industrial-oxygen">
                <Icon className="h-4 w-4" />
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <div className="container-shell flex flex-col justify-between gap-3 text-xs text-white/[.42] sm:flex-row">
          <span>Copyright 2026 {contact.company}. All rights reserved.</span>
          <span>Burhar, Shahdol, Madhya Pradesh, India</span>
        </div>
      </div>
    </footer>
  );
}
