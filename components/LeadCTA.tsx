import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function LeadCTA({
  title = "Don't apply alone.",
  subtitle = "Talk to a Nexus EU advisor — free, no commitment. Get a tailored shortlist in one call.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-navy-dark relative overflow-hidden">
      {/* Decorative gold corner */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-gold/10 rounded-full" />
      <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-lithGreen/10 rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="text-center">
          <div className="inline-block px-3 py-1 bg-gold/20 text-gold text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Ready when you are
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
            {title}
          </h2>
          <p className="mt-4 text-white/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/923212919592?text=Hi%20Nexus%20EU%2C%20I%27d%20like%20to%20discuss%20studying%20in%20Lithuania."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={20} /> WhatsApp: +92 321 2919592
            </a>
            <Link href="/contact" className="btn-gold">
              Send a Detailed Enquiry <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
