import { ArrowRight, CheckCircle2, ClipboardCheck, MessagesSquare, SearchCheck } from "lucide-react";
import Link from "next/link";
import { CTASection, PageHero, SectionIntro } from "@/components/ui";

export const metadata = { title: "How It Works", description: "See how iSecure Health helps you find and understand affordable healthcare solutions." };

export default function HowItWorks() {
  const steps = [
    [MessagesSquare, "01", "Start with a free consultation", "Tell us about your situation, priorities, and questions. We listen first so our guidance begins with a real understanding of what matters to you.", ["No-cost introductory conversation", "A comfortable, pressure-free experience", "Time to ask your most important questions"]],
    [SearchCheck, "02", "Explore your options", "We help you look at suitable healthcare solutions and understand the important details in clear, everyday language.", ["Personalized option review", "Clear explanation of costs and considerations", "Answers tailored to your situation"]],
    [ClipboardCheck, "03", "Make a confident choice", "Once you understand the possibilities, we support you in choosing the direction that fits your needs and budget.", ["Patient decision support", "Help with your next steps", "A resource you can return to"]],
  ] as const;
  return <>
    <PageHero eyebrow="How it works" title="A clear process, centered around you." text="Healthcare decisions can be complex. Our approach keeps them personal, understandable, and manageable from the very first conversation." />
    <section className="section-pad"><div className="container-site"><SectionIntro eyebrow="Three simple steps" title="From questions to clarity" centered /><div className="mt-14 grid gap-8">{steps.map(([Icon,num,title,text,items], index)=><article key={num} className="grid items-center gap-8 rounded-[2rem] border border-slate-100 p-7 shadow-soft md:grid-cols-[.35fr_1fr] sm:p-10"><div className="flex items-center gap-5 md:block"><span className="text-5xl font-bold text-navy/10">{num}</span><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal text-white md:mt-6"><Icon size={26}/></div></div><div><h2 className="text-2xl font-bold text-navy sm:text-3xl">{title}</h2><p className="mt-4 leading-7 text-slate-600">{text}</p><div className="mt-5 grid gap-3 sm:grid-cols-3">{items.map(item=><p key={item} className="flex gap-2 text-sm font-semibold text-slate-700"><CheckCircle2 className="shrink-0 text-teal" size={18}/>{item}</p>)}</div>{index===0&&<Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue">Schedule your consultation <ArrowRight size={16}/></Link>}</div></article>)}</div></div></section>
    <section className="section-pad bg-cloud"><div className="container-site text-center"><SectionIntro eyebrow="What to expect" title="A helpful conversation, never a sales pitch." text="Our role is to help you understand your options and feel ready to decide. You set the pace, and your priorities stay at the center." centered /></div></section>
    <CTASection />
  </>;
}
