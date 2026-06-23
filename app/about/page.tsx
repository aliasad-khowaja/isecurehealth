import Image from "next/image";
import { AchievementsGallery } from "@/components/AchievementsGallery";
import { CTASection, SectionIntro, values } from "@/components/ui";

export const metadata = { title: "About Us", description: "Learn how iSecure Health makes affordable healthcare easier to understand and access." };

export default function About() {
  return <>
    <section className="relative overflow-hidden bg-cloud pt-7 sm:pt-8">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-red/10 blur-3xl" />
      <div className="container-site relative grid min-h-[520px] items-center gap-10 lg:min-h-0 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow">About iSecure Health</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">Professional guidance for confident healthcare decisions.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">We believe everyone deserves to understand their healthcare choices and feel confident about the path forward. We provide personalized support for individuals, families, self-employed professionals, and people comparing Medicare, Medicaid, marketplace, life, dental, vision, group, travel, or short-term coverage options.</p>
        </div>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto flex w-full max-w-md justify-center opacity-20 sm:opacity-25 lg:pointer-events-auto lg:relative lg:inset-auto lg:z-auto lg:max-w-lg lg:opacity-100">
          <div className="hidden absolute bottom-0 h-3/4 w-3/4 rounded-full bg-white shadow-soft lg:block" />
          <div className="hidden absolute bottom-6 h-2/3 w-2/3 rounded-full bg-teal/10 blur-2xl lg:block" />
          <Image
            src="/about-advisor.png"
            alt="Professional healthcare advisor standing with folded arms"
            width={1024}
            height={1536}
            priority
            className="relative h-auto w-[79%] max-w-[351px] sm:w-[74%] lg:max-w-[387px] lg:drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
    <section className="section-pad">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-navy p-8 text-white sm:p-12"><p className="text-2xl font-bold leading-relaxed sm:text-3xl">“Our purpose is simple: listen closely, explain clearly, and help every client make a choice that supports their health and financial well-being.”</p></div>
        <div>
          <div className="max-w-3xl">
            <p className="eyebrow">Our approach</p>
            <h2 className="heading-lg">We put your needs before the paperwork.</h2>
            <p className="mt-5 leading-7 text-slate-600">Healthcare options can feel complicated, but choosing one doesn’t have to. iSecure Health brings personal attention and practical guidance to individuals and families throughout Houston and surrounding communities.</p>
          </div>
          <p className="mt-5 leading-7 text-slate-600">We take time to learn what matters to you, answer questions in plain language, and help you consider solutions that align with your needs. No pressure. No one-size-fits-all recommendations. Just thoughtful support.</p>
        </div>
      </div>
    </section>
    <section className="section-pad overflow-hidden bg-navy">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-red">Our achievements</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Recognition earned through service and dedication</h2>
          <p className="mt-5 text-lg font-medium leading-8 text-white">We’re proud to be recognized by trusted healthcare and insurance partners for our commitment to the people we serve.</p>
        </div>
        <AchievementsGallery />
      </div>
    </section>
    <section className="section-pad bg-cloud"><div className="container-site"><SectionIntro eyebrow="What guides us" title="Values you can feel in every conversation" centered /><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{values.map(({icon: Icon, title, text}) => <article key={title} className="rounded-3xl bg-white p-6 shadow-sm"><div className="flex items-center gap-3"><div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10"><Icon className="text-teal" size={22} /></div><h3 className="text-lg font-bold leading-snug text-navy">{title}</h3></div><p className="mt-4 text-sm leading-6 text-slate-600">{text}</p></article>)}</div></div></section>
    <CTASection />
  </>;
}
