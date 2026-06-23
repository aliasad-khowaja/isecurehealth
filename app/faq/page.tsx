import Link from "next/link";
import { FAQItem } from "@/components/FAQItem";
import { CTASection, SectionIntro } from "@/components/ui";

export const metadata = { title: "Frequently Asked Questions", description: "Answers to common questions about working with iSecure Health." };

const faqs = [
  ["What does iSecure Health do?", "We help individuals and families understand healthcare options and find solutions that align with their needs and budget. Our approach is personal, educational, and focused on making the process easier to navigate."],
  ["Is the initial consultation really free?", "Yes. Your first consultation is complimentary and comes with no obligation. It is a chance to share your situation, ask questions, and learn how we may be able to help."],
  ["Who do you work with?", "We support individuals, families, self-employed professionals, and people whose healthcare needs have changed because of a move, job transition, marriage, or another life event."],
  ["What should I bring to my consultation?", "It helps to have a general idea of your healthcare priorities, budget, household needs, and any questions you want answered. We will guide the conversation from there."],
  ["Do you only serve Houston?", "Our primary service area is Houston, Texas and surrounding communities. Contact us to discuss your location and how we may be able to assist."],
  ["What happens after I choose a solution?", "Our support does not disappear after your decision. We remain available as a knowledgeable point of contact when questions arise or your needs change."],
  ["How do I get started?", "Request a free consultation through our contact page. We will follow up to learn more about your needs and schedule a convenient time to talk."],
];

export default function FAQ() {
  return <>
    <section className="section-pad bg-cloud"><div className="container-site grid gap-12 lg:grid-cols-[.6fr_1fr]"><div><SectionIntro eyebrow="FAQ" title="Questions are always welcome." text="Understanding your healthcare choices begins with asking the right questions. We’ll take the time to answer them clearly." /><Link href="/contact" className="btn-primary mt-7">Ask Us a Question</Link></div><div className="grid gap-4">{faqs.map(([q,a])=><FAQItem key={q} question={q} answer={a}/>)}</div></div></section>
    <CTASection />
  </>;
}
