import { HeartHandshake, Lightbulb, ShieldCheck, Users } from "lucide-react";
import { CTASection, PageHero, SectionIntro, values } from "@/components/ui";

export const metadata = { title: "About Us", description: "Learn how iSecure Health makes affordable healthcare easier to understand and access." };

export default function About() {
  return <>
    <PageHero eyebrow="About iSecure Health" title="Healthcare guidance with a human touch." text="We believe everyone deserves to understand their healthcare choices and feel confident about the path forward." />
    <section className="section-pad">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-navy p-8 text-white sm:p-12"><HeartHandshake className="text-teal" size={42} /><p className="mt-8 text-2xl font-bold leading-relaxed sm:text-3xl">“Our purpose is simple: listen closely, explain clearly, and help every client make a choice that supports their health and financial well-being.”</p></div>
        <div><SectionIntro eyebrow="Our approach" title="We put your needs before the paperwork." text="Healthcare options can feel complicated, but choosing one doesn’t have to. iSecure Health brings personal attention and practical guidance to individuals and families throughout Houston and surrounding communities." /><p className="mt-5 leading-7 text-slate-600">We take time to learn what matters to you, answer questions in plain language, and help you consider solutions that align with your needs. No pressure. No one-size-fits-all recommendations. Just thoughtful support.</p></div>
      </div>
    </section>
    <section className="section-pad bg-cloud"><div className="container-site"><SectionIntro eyebrow="What guides us" title="Values you can feel in every conversation" centered /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map(({icon: Icon, title, text}) => <article key={title} className="rounded-3xl bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10"><Icon className="text-teal" size={22} /></div><h3 className="text-lg font-bold leading-snug text-navy">{title}</h3></div><p className="mt-4 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></div></section>
    <section className="section-pad"><div className="container-site grid gap-6 md:grid-cols-3">{[[Users,"Who we serve","Individuals, families, self-employed professionals, and people navigating life changes."],[Lightbulb,"What we simplify","The language, comparisons, and questions that can make healthcare decisions overwhelming."],[ShieldCheck,"What you receive","Clear answers, personal support, and a knowledgeable partner focused on your priorities."]].map(([Icon,title,text]) => { const I=Icon as typeof Users; return <article key={title as string} className="rounded-3xl border border-slate-100 p-7"><div className="flex items-center gap-3"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-teal/10"><I className="text-teal" size={23} /></div><h3 className="text-xl font-bold text-navy">{title as string}</h3></div><p className="mt-4 leading-7 text-slate-600">{text as string}</p></article>})}</div></section>
    <CTASection />
  </>;
}
