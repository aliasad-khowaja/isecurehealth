import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign, ShieldCheck } from "lucide-react";
import { SectionIntro, values } from "@/components/ui";
import { AchievementsGallery } from "@/components/AchievementsGallery";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import reviewsData from "@/public/google-reviews/reviews.json";
import spanishReviewsData from "@/public/google-reviews/reviews.es.json";

const coverageOptions = [
  { image: "/coverage/medicare-medicaid-photo.png", title: "Medicare & Medicaid Options", text: "Understand available coverage and find support that fits your healthcare needs and budget." },
  { image: "/coverage/health-insurance-photo.png", title: "Health Insurance Options", text: "Explore personalized health insurance solutions for individuals and families." },
  { image: "/coverage/life-insurance-photo.png", title: "Life Insurance Options", text: "Help protect the people you love with coverage shaped around your family’s future." },
  { image: "/coverage/employer-group-photo.png", title: "Employer & Group Insurance", text: "Practical coverage guidance for businesses, teams, and growing organizations." },
  { image: "/coverage/travel-short-term-photo.png", title: "Travel & Short-Term Insurance", text: "Flexible protection for travel, temporary needs, and periods of transition." },
  { image: "/coverage/dental-vision-photo.png", title: "Dental & Vision Insurance", text: "Round out your healthcare coverage with options for routine dental and vision care." },
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
    <section className="relative overflow-hidden bg-navy py-7 sm:py-8 lg:py-10">
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue/25 blur-3xl" />
      <div className="absolute -bottom-40 right-0 h-[30rem] w-[30rem] rounded-full bg-teal/15 blur-3xl" />
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.08fr_.92fr]">
        <div>
          <p className="eyebrow"><ShieldCheck size={17} /> Personal healthcare guidance</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">Affordable healthcare starts with a conversation.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white">iSecure Health helps individuals and families understand their options and find healthcare solutions that fit their lives, needs, and budgets.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#c91526] focus:outline-none focus:ring-4 focus:ring-red/30">Get Free Consultation <ArrowRight size={16} /></Link>
            <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/35 bg-white/5 px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-teal hover:bg-teal/10 focus:outline-none focus:ring-4 focus:ring-white/15">View Services</Link>
          </div>
          <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white">
            <span className="flex items-center gap-2"><ShieldCheck className="text-red" size={18} /> Personalized support</span>
            <span className="flex items-center gap-2"><BadgeDollarSign className="text-teal" size={18} /> No-cost consultation</span>
          </div>
        </div>
        <div className="relative mx-auto w-[90%] max-w-[28.8rem] lg:mx-0 lg:ml-auto">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-white shadow-2xl shadow-black/25">
            <Image
              src="/hero-healthcare.png"
              alt="A family receiving personalized healthcare guidance from an advisor"
              width={1122}
              height={1402}
              priority
              className="aspect-[4/5] h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/85 to-transparent px-6 pb-6 pt-20 text-white">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-white">Healthcare that fits you</p>
              <p className="mt-2 text-xl font-bold">Personal guidance for every generation.</p>
            </div>
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
        <div className="mx-auto mt-12 grid max-w-6xl gap-7 md:grid-cols-2">
          {coverageOptions.map(({ image, title, text }) => (
            <article key={title} className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:border-red/40 hover:shadow-soft sm:p-6">
              <div className="overflow-hidden rounded-2xl bg-white">
                <Image src={image} alt={`${title} consultation and coverage support`} width={1448} height={1086} className="aspect-[4/3] h-auto w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
              </div>
              <h3 className="mt-6 text-2xl font-bold leading-snug text-navy">{title}</h3>
              <p className="mx-auto mt-3 max-w-lg flex-1 leading-7 text-slate-600">{text}</p>
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
        <ReviewsCarousel reviews={reviewsData.reviews} spanishReviews={spanishReviewsData.reviews} />
      </div>
    </section>
  </>;
}
