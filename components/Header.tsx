"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/components/LanguageProvider";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const languageToggle = <div className="flex rounded-full border border-slate-200 bg-cloud p-1" aria-label="Language selection">
    {(["en", "es"] as const).map(option => <button key={option} type="button" onClick={() => setLanguage(option)} aria-label={option === "en" ? "English" : "Spanish"} className={`rounded-full px-2.5 py-1 text-xs font-bold transition ${language === option ? "bg-navy text-white" : "text-slate-500 hover:text-navy"}`}>{option.toUpperCase()}</button>)}
  </div>;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-5">
        <Link href="/" aria-label="iSecure Health home" className="shrink-0">
          <Image src="/logo.png" alt="iSecure Health" width={1840} height={560} priority className="h-auto w-[175px] sm:w-[205px]" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className={`text-sm font-semibold transition hover:text-red ${pathname === link.href ? "text-red" : "text-slate-700"}`}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          {languageToggle}
          <Link href="/contact" className="btn-primary">
            <Phone size={16} /> Free Consultation
          </Link>
        </div>
        <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-navy lg:hidden" aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav aria-label="Mobile navigation" className="border-t border-slate-100 bg-white px-5 pb-6 pt-3 lg:hidden">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-3 font-semibold text-slate-700">
              {link.label}
            </Link>
          ))}
          <div className="mt-5 flex justify-center">{languageToggle}</div>
          <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-5 w-full">Get Free Consultation</Link>
        </nav>
      )}
    </header>
  );
}
