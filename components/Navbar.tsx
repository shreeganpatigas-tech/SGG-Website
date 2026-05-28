"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Mail, Menu, Phone, Youtube } from "lucide-react";
import { navItems, contact, contactLinks } from "@/lib/data";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="border-b border-white/10 bg-black/[.35] text-xs text-white/70 backdrop-blur-xl">
        <div className="container-shell flex h-10 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-5">
            <a className="hidden items-center gap-2 transition hover:text-white sm:flex" href={contactLinks.email}>
              <Mail className="h-3.5 w-3.5 text-industrial-oxygen" />
              <span className="truncate">{contact.email}</span>
            </a>
            <a className="flex items-center gap-2 transition hover:text-white" href={contactLinks.phone}>
              <Phone className="h-3.5 w-3.5 text-industrial-oxygen" />
              <span>{contact.phone}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Linkedin className="h-4 w-4 transition hover:text-industrial-oxygen" />
            <Instagram className="h-4 w-4 transition hover:text-industrial-oxygen" />
            <Youtube className="h-4 w-4 transition hover:text-industrial-red" />
          </div>
        </div>
      </div>
      <nav className={cn("transition duration-300", scrolled ? "border-b border-white/10 bg-black/[.58] shadow-metal backdrop-blur-2xl" : "bg-black/15 backdrop-blur-lg")}>
        <div className="container-shell flex h-20 items-center justify-between">
          <Link href="#home" className="flex items-center gap-3">
            <Image src="/logosgg.png" alt="SGG Gas Dynamics logo" width={48} height={48} className="h-12 w-12 rounded-sm object-contain" priority />
            <span className="leading-tight">
              <span className="block font-display text-lg font-semibold text-white">SGG Gas Dynamics</span>
              <span className="block text-[11px] uppercase tracking-[.24em] text-industrial-silver">Gas Infrastructure</span>
            </span>
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative rounded px-4 py-2 font-display text-sm font-medium text-white/[.72] transition hover:text-white"
              >
                {item}
                <span className="absolute inset-x-4 bottom-0 h-px origin-left scale-x-0 bg-industrial-red transition group-hover:scale-x-100" />
              </Link>
            ))}
          </div>
          <button
            className="grid h-11 w-11 place-items-center rounded-md border border-white/15 bg-white/5 text-white lg:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle navigation"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {open ? (
          <div className="container-shell pb-5 lg:hidden">
            <div className="grid gap-2 rounded-lg border border-white/10 bg-black/[.82] p-3 backdrop-blur-xl">
              {navItems.map((item) => (
                <Link key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)} className="rounded px-3 py-3 text-sm text-white/[.78] hover:bg-white/[.08] hover:text-white">
                  {item}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
