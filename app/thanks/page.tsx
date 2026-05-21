import Link from "next/link";
import { CheckCircle2, MessageCircle, ArrowRight, Home } from "lucide-react";

export const metadata = {
  title: "Thanks for reaching out! | Nexus EU",
};

export default function ThanksPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-cream py-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="w-24 h-24 bg-lithGreen rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
          <CheckCircle2 size={56} className="text-white" />
        </div>

        <div className="kicker mb-2">Message received</div>
        <h1 className="text-4xl sm:text-5xl font-black text-navy mb-4 leading-tight">
          Thanks for reaching out! 🎉
        </h1>
        <div className="flag-stripe mx-auto mb-6" />

        <p className="text-lg text-ink-soft leading-relaxed mb-8 max-w-xl mx-auto">
          We've got your enquiry and will be in touch within{" "}
          <span className="font-bold text-navy">24 hours</span> via WhatsApp or
          email. While you wait — feel free to message us directly for a faster
          response.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://wa.me/923212919592"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <MessageCircle size={18} /> WhatsApp Now
          </a>
          <Link href="/universities" className="btn-outline">
            Browse universities <ArrowRight size={18} />
          </Link>
        </div>

        {/* What happens next */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-line text-left shadow-sm">
          <h2 className="text-lg font-black text-navy mb-4 text-center">
            What happens next?
          </h2>
          <ol className="space-y-3 text-sm text-ink-soft">
            {[
              "Our team reads your enquiry and matches it to the right advisor.",
              "Within 24 hours, you'll get a personal response (usually on WhatsApp).",
              "We'll schedule a free 20-min discovery call to understand your goals.",
              "You'll get a shortlist of 3-5 universities that actually fit your profile.",
              "If you decide to proceed, we'll handle the rest — applications, visa, arrival.",
            ].map((step, i) => (
              <li key={i} className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-gold text-navy-dark rounded-full flex items-center justify-center font-black text-xs">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-ink-soft hover:text-navy mt-8"
        >
          <Home size={14} /> Back to homepage
        </Link>
      </div>
    </div>
  );
}
