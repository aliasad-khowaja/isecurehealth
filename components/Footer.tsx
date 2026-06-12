import Image from "next/image";
import Link from "next/link";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="container-site grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Link href="/" aria-label="iSecure Health home" className="inline-block rounded-xl bg-white px-4 py-2">
            <Image src="/logo.png" alt="iSecure Health" width={1840} height={560} priority className="h-auto w-[190px]" />
          </Link>
          <p className="mt-5 max-w-xs text-sm leading-7 text-blue-100">Personal guidance to help individuals and families find healthcare coverage that fits their needs and budget.</p>
        </div>
        <div>
          <h2 className="font-bold">Explore</h2>
          <div className="mt-5 grid gap-3 text-sm text-blue-100">
            <Link href="/about" className="hover:text-white">About Us</Link>
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/how-it-works" className="hover:text-white">How It Works</Link>
            <Link href="/faq" className="hover:text-white">FAQ</Link>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Get In Touch</h2>
          <div className="mt-5 grid gap-4 text-sm text-blue-100">
            <a href="https://maps.google.com/?q=6464+Savoy+Dr+Ste+668+Houston+TX+77036" target="_blank" rel="noreferrer" className="flex gap-3 hover:text-white"><MapPin className="mt-0.5 shrink-0 text-teal" size={17} /> 6464 Savoy Dr Ste 668<br />Houston, TX 77036</a>
            <a href="tel:+13467793786" className="flex gap-3 hover:text-white"><Phone className="shrink-0 text-teal" size={17} /> (346) 779-3786</a>
            <a href="mailto:hello@isecurehealth.com" className="flex gap-3 hover:text-white"><Mail className="shrink-0 text-teal" size={17} /> hello@isecurehealth.com</a>
            <p className="flex gap-3"><Clock3 className="mt-0.5 shrink-0 text-teal" size={17} /> Mon–Fri: 9 AM–6 PM<br />Sat–Sun: Closed</p>
          </div>
        </div>
        <div>
          <h2 className="font-bold">Start With Confidence</h2>
          <p className="mt-5 text-sm leading-7 text-blue-100">Get clear, personalized support at no cost to you.</p>
          <Link href="/contact" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-navy transition hover:bg-teal hover:text-white">Request a Consultation</Link>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-blue-200 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} iSecure Health. All rights reserved.</p>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
