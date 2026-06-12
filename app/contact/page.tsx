import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/ui";

export const metadata = { title: "Contact", description: "Contact iSecure Health for a free personalized healthcare consultation in the Houston area." };

export default function Contact() {
  const hours = [
    ["Monday", "9 AM–6 PM"],
    ["Tuesday", "9 AM–6 PM"],
    ["Wednesday", "9 AM–6 PM"],
    ["Thursday", "9 AM–6 PM"],
    ["Friday", "9 AM–6 PM"],
    ["Saturday", "Closed"],
    ["Sunday", "Closed"],
  ];

  return <>
    <PageHero eyebrow="Get in touch" title="Let’s talk about what you need." text="A clearer path to affordable healthcare starts with a simple conversation. Tell us how we can help, and a member of our team will be in touch." />
    <section className="section-pad bg-cloud">
      <div className="container-site grid gap-10 lg:grid-cols-[.72fr_1.28fr]">
        <div>
          <h2 className="text-3xl font-bold text-navy">Start your free consultation</h2>
          <p className="mt-4 leading-7 text-slate-600">Share a few details and we’ll follow up to learn more about your situation. There’s no pressure and no obligation.</p>
          <div className="mt-8 grid gap-4">
            {[
              [Phone, "Call us", "(346) 779-3786", "tel:+13467793786"],
              [Mail, "Email us", "hello@isecurehealth.com", "mailto:hello@isecurehealth.com"],
              [MapPin, "Visit us", "6464 Savoy Dr Ste 668, Houston, TX 77036", "https://maps.google.com/?q=6464+Savoy+Dr+Ste+668+Houston+TX+77036"],
            ].map(([Icon, label, value, href]) => {
              const I = Icon as typeof Phone;
              return <a key={label as string} href={href as string} target={(href as string).startsWith("http") ? "_blank" : undefined} rel={(href as string).startsWith("http") ? "noreferrer" : undefined} className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm transition hover:-translate-y-0.5">
                <I className="shrink-0 text-teal" size={23} />
                <span><strong className="block text-sm text-navy">{label as string}</strong><span className="mt-1 block text-sm text-slate-600">{value as string}</span></span>
              </a>;
            })}
          </div>
          <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
            <h3 className="flex items-center gap-3 font-bold text-navy"><Clock3 className="text-teal" size={22} /> Office hours</h3>
            <dl className="mt-4 grid gap-2 text-sm">
              {hours.map(([day, time]) => <div key={day} className="flex justify-between gap-6"><dt className="text-slate-600">{day}</dt><dd className={`font-semibold ${time === "Closed" ? "text-slate-400" : "text-navy"}`}>{time}</dd></div>)}
            </dl>
          </div>
          <div className="mt-6 rounded-2xl border border-teal/20 bg-teal/5 p-5"><p className="text-sm font-bold text-navy">We respect your privacy.</p><p className="mt-2 text-sm leading-6 text-slate-600">Your information is used only to respond to your request and provide the support you’ve asked for.</p></div>
        </div>
        <ContactForm/>
      </div>
    </section>
  </>;
}
