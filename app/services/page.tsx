import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTASection, SectionIntro } from "@/components/ui";
import { ReviewsCarousel } from "@/components/ReviewsCarousel";
import reviewsData from "@/public/google-reviews/reviews.json";
import spanishReviewsData from "@/public/google-reviews/reviews.es.json";

export const metadata = { title: "Services", description: "Explore personalized healthcare guidance and support from iSecure Health." };

const coverageServices = [
  {
    image: "/coverage/medicare-medicaid-photo.png",
    title: "Medicare & Medicaid Options",
    text: "Medicare and Medicaid choices can be difficult to compare on your own. We help you understand available plans, eligibility considerations, benefits, provider access, and cost factors so you can choose coverage that supports your healthcare needs and budget."
  },
  {
    image: "/coverage/health-insurance-photo.png",
    title: "Health Insurance Options",
    text: "Whether you are shopping for yourself or your household, we make health insurance easier to evaluate. Our guidance helps you compare plan types, monthly costs, deductibles, prescriptions, doctor networks, and practical coverage details before you decide."
  },
  {
    image: "/coverage/life-insurance-photo.png",
    title: "Life Insurance Options",
    text: "Life insurance is about protecting the people who depend on you. We help you review coverage options, understand policy differences, and think through the amount of protection that may fit your family, goals, and long-term financial responsibilities."
  },
  {
    image: "/coverage/employer-group-photo.png",
    title: "Employer & Group Insurance",
    text: "For employers and organizations, the right group coverage can support both people and business goals. We help compare practical options for teams, explain plan details clearly, and support decision-making for growing workplaces."
  },
  {
    image: "/coverage/travel-short-term-photo.png",
    title: "Travel & Short-Term Insurance",
    text: "Temporary coverage can be useful during travel, transitions, waiting periods, or changes in employment. We help you understand short-term and travel insurance options so you can avoid gaps and choose protection that fits the moment."
  },
  {
    image: "/coverage/dental-vision-photo.png",
    title: "Dental & Vision Insurance",
    text: "Dental and vision coverage can help with routine care, exams, eyewear, preventive services, and unexpected needs. We help you compare options that can complement your healthcare coverage and support everyday wellness."
  },
] as const;

export default function Services() {
  return <>
    <section className="relative overflow-hidden bg-cloud py-7 sm:py-8 lg:py-16">
      <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-red/10 blur-3xl" />
      <div className="container-site relative grid min-h-[380px] items-center gap-10 sm:min-h-[430px] lg:min-h-0 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow">Our services</p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy sm:text-5xl lg:text-6xl">Personalized support for better healthcare decisions.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">iSecure Health helps you compare coverage options with clarity, understand what matters for your budget and care needs, and move forward with guidance that feels personal, practical, and pressure-free.</p>
        </div>
        <div className="pointer-events-none absolute inset-0 z-0 opacity-20 sm:opacity-25 lg:pointer-events-auto lg:relative lg:inset-auto lg:z-auto lg:w-full lg:opacity-100">
          <div className="hidden absolute -inset-4 rounded-[2rem] bg-white/70 shadow-soft lg:block" />
          <div className="hidden absolute -right-5 -top-5 h-28 w-28 rounded-full bg-red/15 blur-2xl lg:block" />
          <Image
            src="/services-hero-consultation.png"
            alt="Healthcare insurance advisor explaining coverage options to a client"
            width={1693}
            height={929}
            priority
            className="relative h-full w-full object-cover lg:aspect-[16/10] lg:h-auto lg:rounded-[2rem] lg:shadow-soft"
          />
        </div>
      </div>
    </section>
    <section className="section-pad">
      <div className="container-site">
        <SectionIntro eyebrow="How we help" title="Coverage guidance for real life" text="Explore the services we offer and get clear, personal support for the coverage decisions that matter most." />
        <div className="mt-12 grid gap-7">
          {coverageServices.map(({ image, title, text }) => (
            <article key={title} className="group grid overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-red/40 hover:shadow-soft lg:grid-cols-[0.42fr_0.58fr]">
              <div className="overflow-hidden bg-cloud">
                <Image src={image} alt={`${title} consultation and coverage support`} width={1448} height={1086} className="aspect-[4/3] h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]" />
              </div>
              <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl font-bold leading-snug text-navy sm:text-3xl">{title}</h2>
                <p className="mt-4 leading-7 text-slate-600">{text}</p>
                <Link href="/contact" className="btn-primary mt-7 w-fit px-7 py-3">
                  Get a Quote <ArrowRight size={15} />
                </Link>
              </div>
            </article>
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
    <CTASection />
  </>;
}
