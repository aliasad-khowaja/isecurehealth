import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartHandshake, ShieldCheck, Sparkles, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export function SectionIntro({ eyebrow, title, text, centered = false }: { eyebrow: string; title: string; text?: string; centered?: boolean }) {
  return <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    <p className="eyebrow">{eyebrow}</p>
    <h2 className="heading-lg">{title}</h2>
    {text && <p className="mt-5 text-lg leading-8 text-slate-600">{text}</p>}
  </div>;
}

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return <section className="relative overflow-hidden bg-cloud py-16 sm:py-20">
    <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
    <div className="container-site relative">
      <div className="max-w-3xl">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{text}</p>
      </div>
    </div>
  </section>;
}

export function ServiceCard({ icon: Icon, title, text, href = "/contact" }: { icon: LucideIcon; title: string; text: string; href?: string }) {
  return <article className="group rounded-3xl border border-slate-100 bg-white p-7 shadow-soft transition hover:-translate-y-1">
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/10 text-teal"><Icon size={24} /></div>
    <h3 className="mt-6 text-xl font-bold text-navy">{title}</h3>
    <p className="mt-3 leading-7 text-slate-600">{text}</p>
    <Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-blue transition group-hover:text-teal">Learn more <ArrowRight size={15} /></Link>
  </article>;
}

export function CTASection() {
  return <section className="section-pad">
    <div className="container-site">
      <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-14 text-center text-white shadow-soft sm:px-12">
        <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-teal/25 blur-3xl" />
        <div className="relative mx-auto max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-teal">Your healthier future starts here</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Healthcare decisions feel easier with the right guide.</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-blue-100">Tell us what matters to you. We’ll help you understand your options and move forward with confidence.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-navy transition hover:bg-teal hover:text-white">Get Free Consultation <ArrowRight size={16} /></Link>
        </div>
      </div>
    </div>
  </section>;
}

export const values = [
  { icon: ShieldCheck, title: "Clear, honest guidance", text: "We explain your options in plain language so you can make an informed choice." },
  { icon: Users, title: "Personalized support", text: "Your family, health priorities, and budget shape every recommendation." },
  { icon: HeartHandshake, title: "People-first service", text: "You receive patient, attentive help from the first conversation onward." },
  { icon: Sparkles, title: "Less stress, more clarity", text: "We simplify a complicated process and stay available when questions come up." },
];

export function CheckList({ items }: { items: string[] }) {
  return <ul className="grid gap-4">{items.map(item => <li key={item} className="flex gap-3 leading-7 text-slate-700"><CheckCircle2 className="mt-1 shrink-0 text-teal" size={20} />{item}</li>)}</ul>;
}
