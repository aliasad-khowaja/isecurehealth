import Image from "next/image";
import { CheckCircle2, ClipboardCheck, MessagesSquare, SearchCheck } from "lucide-react";
import { CTASection, SectionIntro } from "@/components/ui";

export const metadata = { title: "How It Works", description: "See how iSecure Health helps you find and understand affordable healthcare solutions." };

export default function HowItWorks() {
  const steps = [
    [MessagesSquare, "01", "Start with a free consultation", "Tell us about your situation, priorities, and questions. We listen first so our guidance begins with a real understanding of what matters to you.", ["No-cost introductory conversation", "A comfortable, pressure-free experience", "Time to ask your most important questions"]],
    [SearchCheck, "02", "Explore your options", "We help you look at suitable healthcare solutions and understand the important details in clear, everyday language.", ["Personalized option review", "Clear explanation of costs and considerations", "Answers tailored to your situation"]],
    [ClipboardCheck, "03", "Make a confident choice", "Once you understand the possibilities, we support you in choosing the direction that fits your needs and budget.", ["Patient decision support", "Help with your next steps", "A resource you can return to"]],
  ] as const;
  return <>
    <section className="relative overflow-hidden bg-cloud py-7 sm:py-8 lg:py-16">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-red/10 blur-3xl" />
      <div className="container-site relative grid min-h-[380px] items-center gap-10 sm:min-h-[430px] lg:min-h-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow">How it works</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">A simple path from questions to confident coverage.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">We make the process easier by listening first, explaining your options clearly, and helping you take the next step with confidence.</p>
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 opacity-20 sm:opacity-25 lg:pointer-events-auto lg:relative lg:inset-auto lg:z-auto lg:w-full lg:opacity-100">
          <div className="hidden absolute -inset-4 rounded-[2rem] bg-white/70 shadow-soft lg:block" />
          <div className="hidden absolute -right-5 -top-5 h-28 w-28 rounded-full bg-red/15 blur-2xl lg:block" />
          <Image
            src="/how-it-works-hero.png"
            alt="Healthcare insurance advisor explaining a step-by-step process to a client"
            width={1692}
            height={929}
            priority
            className="relative h-full w-full object-cover lg:aspect-[16/10] lg:h-auto lg:rounded-[2rem] lg:shadow-soft"
          />
        </div>
      </div>
    </section>
    <section className="section-pad"><div className="container-site"><SectionIntro eyebrow="Three simple steps" title="From questions to clarity" centered /><div className="mt-14 grid gap-8">{steps.map(([Icon,num,title,text,items])=><article key={num} className="grid items-center gap-8 rounded-[2rem] border border-slate-100 p-7 shadow-soft md:grid-cols-[.35fr_1fr] sm:p-10"><div className="flex items-center gap-5 md:block"><span className="text-5xl font-bold text-navy/10">{num}</span><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-white md:mt-6"><Icon size={26}/></div></div><div><h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p><div className="mt-5 grid gap-3 sm:grid-cols-3">{items.map(item=><p key={item} className="flex gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="shrink-0 text-teal" size={18}/>{item}</p>)}</div></div></article>)}</div></div></section>
    <section className="section-pad bg-cloud"><div className="container-site text-center"><SectionIntro eyebrow="What to expect" title="A helpful conversation, never a sales pitch." text="Our role is to help you understand your options and feel ready to decide. You set the pace, and your priorities stay at the center." centered /></div></section>
    <CTASection />
  </>;
}
