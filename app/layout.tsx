import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";

export const metadata: Metadata = {
  title: { default: "iSecure Health | Affordable Healthcare Guidance", template: "%s | iSecure Health" },
  description: "Personalized guidance to help individuals and families find affordable healthcare solutions in Houston, TX and surrounding areas.",
  keywords: ["affordable healthcare", "healthcare guidance", "family healthcare", "Houston healthcare"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth"><body><LanguageProvider><Header /><main>{children}</main><Footer /></LanguageProvider></body></html>;
}
