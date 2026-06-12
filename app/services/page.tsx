import { CalendarCheck, HeartPulse, MessagesSquare, RefreshCw, SearchCheck, ShieldPlus } from "lucide-react";
import { CTASection, PageHero, SectionIntro, ServiceCard } from "@/components/ui";

export const metadata = { title: "Services", description: "Explore personalized healthcare guidance and support from iSecure Health." };

export default function Services() {
  const services = [
    [HeartPulse, "Individual Healthcare Guidance", "Personal support to help you explore healthcare solutions suited to your health priorities and budget."],
    [ShieldPlus, "Family Healthcare Solutions", "Thoughtful guidance for households seeking practical coverage options for every stage of family life."],
    [SearchCheck, "Option Review & Comparison", "A clear, side-by-side look at the details that can affect your care and costs."],
    [CalendarCheck, "Life Change Support", "Guidance when a move, job change, marriage, or other transition affects your healthcare needs."],
    [MessagesSquare, "Healthcare Education", "Plain-language answers that help you understand terminology, tradeoffs, and important questions to ask."],
    [RefreshCw, "Ongoing Client Support", "A familiar point of contact when questions come up or your needs evolve over time."],
  ] as const;
  return <>
    <PageHero eyebrow="Our services" title="Personalized support for better healthcare decisions." text="Whatever brings you here, we’ll meet you with clear answers, practical guidance, and solutions shaped around your life." />
    <section className="section-pad"><div className="container-site"><SectionIntro eyebrow="How we help" title="Guidance for every step of the journey" text="Our work begins with listening. From there, we help you understand your choices and find the right direction." /><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{services.map(([icon,title,text]) => <ServiceCard key={title} icon={icon} title={title} text={text} />)}</div></div></section>
    <section className="section-pad bg-cloud"><div className="container-site grid items-center gap-10 lg:grid-cols-2"><SectionIntro eyebrow="No-cost consultation" title="Start with a conversation, not a commitment." text="Your initial consultation is an opportunity to ask questions, share your situation, and learn how we may be able to help. There’s no pressure and no obligation." /><div className="rounded-3xl bg-white p-8 shadow-soft"><p className="text-lg font-bold text-navy">During your consultation, we’ll discuss:</p><ul className="mt-5 grid gap-4 text-slate-600">{["Your current healthcare situation","The needs and priorities most important to you","Questions or concerns about available options","A clear and practical next step"].map(x=><li key={x} className="flex gap-3"><span className="font-bold text-teal">✓</span>{x}</li>)}</ul></div></div></section>
    <CTASection />
  </>;
}
