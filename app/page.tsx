import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign, BriefcaseBusiness, ClipboardCheck, Eye, HeartPulse, MessagesSquare, Plane, SearchCheck, ShieldCheck, ShieldPlus, Star, Stethoscope, Users } from "lucide-react";
import { SectionIntro, values } from "@/components/ui";
import { AchievementsGallery } from "@/components/AchievementsGallery";

const steps = [
  { icon: MessagesSquare, number: "01", title: "Tell us what you need", text: "Share your priorities, budget, and any questions in a free conversation." },
  { icon: SearchCheck, number: "02", title: "Review clear options", text: "We help you compare suitable healthcare solutions without the confusion." },
  { icon: ClipboardCheck, number: "03", title: "Choose with confidence", text: "Get personal guidance as you make the choice that feels right for you." },
];

const coverageOptions = [
  { icon: Stethoscope, title: "Medicare & Medicaid Options", text: "Understand available coverage and find support that fits your healthcare needs and budget.", accent: "bg-blue/10 text-blue" },
  { icon: ShieldPlus, title: "Health Insurance Options", text: "Explore personalized health insurance solutions for individuals and families.", accent: "bg-teal/10 text-teal" },
  { icon: Users, title: "Life Insurance Options", text: "Help protect the people you love with coverage shaped around your family’s future.", accent: "bg-red/10 text-red" },
  { icon: BriefcaseBusiness, title: "Employer & Group Insurance", text: "Practical coverage guidance for businesses, teams, and growing organizations.", accent: "bg-navy/10 text-navy" },
  { icon: Plane, title: "Travel & Short-Term Insurance", text: "Flexible protection for travel, temporary needs, and periods of transition.", accent: "bg-blue/10 text-blue" },
  { icon: Eye, title: "Dental & Vision Insurance", text: "Round out your healthcare coverage with options for routine dental and vision care.", accent: "bg-teal/10 text-teal" },
];

const providers = [
  { src: "/providers/BlueCross_BlueShield-logo.png", name: "BlueCross BlueShield" },
  { src: "/providers/CHC-logo.webp", name: "Community Health Choice" },
  { src: "/providers/aetna-logo.png", name: "Aetna" },
  { src: "/providers/ambetter-logo.webp", name: "Ambetter" },
  { src: "/providers/amerigroup.png", name: "Amerigroup" },
  { src: "/providers/devoted-health-logo.webp", name: "Devoted Health" },
  { src: "/providers/humana-logo.webp", name: "Humana" },
  { src: "/providers/molina-logo.webp", name: "Molina Healthcare" },
  { src: "/providers/oscar-logo.webp", name: "Oscar" },
];

export default function Home() {
  return <>
    <section className="relative overflow-hidden bg-gradient-to-br from-cloud via-white to-teal/10 pb-16 pt-8 sm:pb-24 sm:pt-12 lg:pb-28 lg:pt-16">
      <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <p className="eyebrow"><ShieldCheck size={17} /> Personal healthcare guidance</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-navy sm:text-5xl lg:text-6xl">Affordable healthcare starts with a conversation.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">iSecure Health helps individuals and families understand their options and find healthcare solutions that fit their lives, needs, and budgets.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">Get Free Consultation <ArrowRight size={16} /></Link>
            <Link href="/services" className="btn-secondary">View Services</Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-slate-600">
            <span className="flex items-center gap-2"><ShieldCheck className="text-teal" size={18} /> Personalized support</span>
            <span className="flex items-center gap-2"><BadgeDollarSign className="text-teal" size={18} /> No-cost consultation</span>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-[2rem] bg-navy p-6 shadow-soft sm:p-9">
            <div className="rounded-3xl bg-white p-7 sm:p-9">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal/10 text-teal"><HeartPulse size={23} /></div>
                <p className="text-sm font-bold uppercase tracking-[.16em] text-teal">Healthcare that fits you</p>
              </div>
              <h2 className="mt-7 text-2xl font-bold leading-tight tracking-tight text-navy">
                <span className="block">Real people.</span>
                <span className="block">Clear answers.</span>
                <span className="block">Better options.</span>
              </h2>
              <p className="mt-4 leading-7 text-slate-600">You don’t have to navigate healthcare decisions alone. We bring patience, clarity, and personal attention to every conversation.</p>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-cloud p-4"><strong className="block text-2xl text-navy">1:1</strong><span className="text-xs font-semibold text-slate-500">personal guidance</span></div>
                <div className="rounded-2xl bg-cloud p-4"><strong className="block text-2xl text-navy">Local</strong><span className="text-xs font-semibold text-slate-500">Houston-area service</span></div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 -left-4 rounded-2xl bg-white px-5 py-4 shadow-soft sm:-left-8">
            <p className="flex items-center gap-2 text-sm font-bold text-navy"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-red/10 text-red">✓</span> Guidance you can trust</p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-pad bg-cloud">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-lg font-semibold text-slate-600">We are here to help</p>
          <h2 className="heading-lg mt-3">Find health coverage that’s right for you</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coverageOptions.map(({ icon: Icon, title, text, accent }) => (
            <article key={title} className="group flex min-h-[350px] flex-col rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-soft">
              <div className="relative mx-auto flex h-32 w-32 items-center justify-center">
                <div className={`absolute inset-0 rounded-[2.5rem] ${accent} opacity-70 transition group-hover:rotate-6`} />
                <div className="absolute inset-4 rounded-full border border-current opacity-10" />
                <Icon className="relative" size={56} strokeWidth={1.6} />
              </div>
              <h3 className="mt-6 text-xl font-bold leading-snug text-navy">{title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">{text}</p>
              <Link href="/contact" className="btn-primary mx-auto mt-6 px-7 py-3">Get a Quote <ArrowRight size={15} /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad bg-cloud">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2">
        <SectionIntro eyebrow="Why iSecure Health" title="Personal attention makes all the difference." text="Healthcare is personal. Your guidance should be too. We take the time to listen, understand, and help you move forward without pressure." />
        <div className="grid gap-4 sm:grid-cols-2">
          {values.map(({ icon: Icon, title, text }) => <article key={title} className="rounded-2xl bg-white p-5 shadow-sm"><Icon className="text-teal" size={23} /><h3 className="mt-4 font-bold text-navy">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section-pad">
      <div className="container-site">
        <SectionIntro eyebrow="A simpler way forward" title="How it works" text="Three straightforward steps. One supportive guide from start to finish." centered />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, number, title, text }) => <article key={number} className="relative rounded-3xl border border-slate-100 p-7"><span className="absolute right-6 top-5 text-4xl font-bold text-navy/5">{number}</span><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-white"><Icon size={22} /></div><h3 className="mt-6 text-xl font-bold text-navy">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}
        </div>
      </div>
    </section>

    <section className="section-pad overflow-hidden bg-navy">
      <div className="container-site">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-teal">Our achievements</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">Recognition earned through service and dedication</h2>
          <p className="mt-5 text-lg font-medium leading-8 text-white">We’re proud to be recognized by trusted healthcare and insurance partners for our commitment to the people we serve.</p>
        </div>
        <AchievementsGallery />
      </div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-site">
        <SectionIntro eyebrow="Leading healthcare partners" title="Our trusted providers" text="Connecting you with respected health insurance providers so you can explore coverage with confidence." centered />
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
          {providers.map(provider => (
            <div key={provider.name} className="flex min-h-32 items-center justify-center rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-soft">
              <Image src={provider.src} alt={`${provider.name} logo`} width={260} height={120} className="max-h-16 h-auto w-auto max-w-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-pad bg-cloud">
      <div className="container-site">
        <SectionIntro eyebrow="Client experiences" title="Support that people remember" centered />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["“The process finally made sense.”", "iSecure Health explained everything clearly and helped me feel confident about my family’s next step.", "Houston-area client"],
            ["“Patient, helpful, and easy to reach.”", "I never felt rushed or pressured. Every question was answered with care.", "Individual client"],
            ["“Exactly the guidance we needed.”", "They listened to what mattered to us and made a complicated decision feel manageable.", "Family client"],
          ].map(([quote, text, name]) => <figure key={quote} className="rounded-3xl bg-white p-7 shadow-sm"><div className="flex gap-1 text-amber-400">{[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}</div><blockquote className="mt-5 text-lg font-bold text-navy">{quote}</blockquote><p className="mt-3 leading-7 text-slate-600">{text}</p><figcaption className="mt-5 text-sm font-bold text-teal">{name}</figcaption></figure>)}
        </div>
      </div>
    </section>
  </>;
}
