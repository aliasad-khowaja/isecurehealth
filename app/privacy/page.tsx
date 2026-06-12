import { PageHero } from "@/components/ui";

export const metadata = { title: "Privacy Policy", description: "Read the iSecure Health privacy policy." };

export default function Privacy() {
  const sections = [
    ["Information We Collect", "We may collect information you provide directly through our contact form or during conversations with us, including your name, email address, phone number, and details you choose to share about your healthcare needs."],
    ["How We Use Information", "We use the information you provide to respond to inquiries, deliver requested services, communicate with you, improve our services, and comply with applicable legal obligations."],
    ["How We Protect Information", "We take reasonable administrative and technical measures to protect personal information from unauthorized access, disclosure, alteration, or destruction."],
    ["Information Sharing", "We do not sell your personal information. We may share information only when necessary to provide requested services, when you authorize us to do so, or when required by law."],
    ["Your Choices", "You may contact us to ask about, correct, or request deletion of personal information you have provided, subject to applicable legal and recordkeeping requirements."],
    ["Policy Updates", "We may update this policy as our practices evolve. Changes will be posted on this page with an updated effective date."],
    ["Contact Us", "If you have questions about this privacy policy, contact us at hello@isecurehealth.com or (346) 779-3786."],
  ];
  return <>
    <PageHero eyebrow="Privacy policy" title="Your privacy matters to us." text="This policy explains how iSecure Health collects, uses, and protects information shared with us." />
    <section className="section-pad"><div className="container-site max-w-4xl"><p className="mb-10 text-sm font-semibold text-slate-500">Effective date: June 11, 2026</p><div className="grid gap-9">{sections.map(([title,text])=><section key={title}><h2 className="text-xl font-bold text-navy">{title}</h2><p className="mt-3 leading-7 text-slate-600">{text}</p></section>)}</div><p className="mt-10 rounded-2xl bg-cloud p-5 text-sm leading-6 text-slate-500">This website provides general information and is not a substitute for professional medical or legal advice.</p></div></section>
  </>;
}
