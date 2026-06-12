export function ContactForm() {
  const fields = [
    { id: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
    { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
    { id: "phone", label: "Phone Number", type: "tel", placeholder: "(346) 779-3786" },
  ];
  return <form className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft sm:p-8" action="#">
    <div className="grid gap-5">
      {fields.map(field => <div key={field.id}>
        <label htmlFor={field.id} className="mb-2 block text-sm font-bold text-navy">{field.label}</label>
        <input id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} required className="w-full rounded-xl border border-slate-200 bg-cloud px-4 py-3.5 outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/10" />
      </div>)}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-bold text-navy">Message</label>
        <textarea id="message" name="message" rows={5} placeholder="Tell us a little about what you're looking for." required className="w-full resize-none rounded-xl border border-slate-200 bg-cloud px-4 py-3.5 outline-none transition focus:border-teal focus:ring-4 focus:ring-teal/10" />
      </div>
      <button type="submit" className="btn-primary w-full sm:w-auto">Request Free Consultation</button>
      <p className="text-xs leading-5 text-slate-500">By submitting this form, you agree that iSecure Health may contact you about your request.</p>
    </div>
  </form>;
}
