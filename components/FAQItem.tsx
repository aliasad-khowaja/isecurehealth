import { ChevronDown } from "lucide-react";

export function FAQItem({ question, answer }: { question: string; answer: string }) {
  return <details className="group rounded-2xl border border-slate-200 bg-white px-6 py-1 shadow-sm">
    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold text-navy">
      {question}<ChevronDown className="shrink-0 transition group-open:rotate-180" size={20} />
    </summary>
    <p className="border-t border-slate-100 pb-5 pt-4 leading-7 text-slate-600">{answer}</p>
  </details>;
}
