import Link from "next/link";
import { MessageCircle, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white mt-20">
      {/* Top stripe */}
      <div className="h-1 flex">
        <div className="flex-1 bg-gold" />
        <div className="flex-1 bg-lithGreen" />
        <div className="flex-1 bg-lithRed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-navy-dark font-black text-xl">N</span>
              </div>
              <div>
                <div className="font-black text-xl text-white">Nexus EU</div>
                <div className="text-xs text-gold">Bridging South Asia & Europe</div>
              </div>
            </div>
            <p className="text-sm text-white/80 leading-relaxed max-w-md">
              Your trusted partner for studying in Lithuania and across Europe. From
              application to arrival — we handle the journey so you focus on the
              future.
            </p>

            {/* Contact info */}
            <div className="mt-6 space-y-3">
              <a
                href="https://wa.me/923212919592"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-white hover:text-gold transition-colors"
              >
                <MessageCircle size={18} className="text-gold" />
                +92 321 2919592 (WhatsApp)
              </a>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Mail size={18} className="text-gold" />
                hello@nexus-eu.com
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <MapPin size={18} className="text-gold" />
                Pakistan · Serving applicants globally
              </div>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-bold text-gold mb-4 text-sm uppercase tracking-wider">
              Explore
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/universities" className="text-white/80 hover:text-gold">All Universities</Link></li>
              <li><Link href="/why-lithuania" className="text-white/80 hover:text-gold">Why Lithuania</Link></li>
              <li><Link href="/cost-calculator" className="text-white/80 hover:text-gold">Cost Calculator</Link></li>
              <li><Link href="/scholarships" className="text-white/80 hover:text-gold">Scholarships</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-gold mb-4 text-sm uppercase tracking-wider">
              Nexus EU
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-white/80 hover:text-gold">About Us</Link></li>
              <li><Link href="/contact" className="text-white/80 hover:text-gold">Contact</Link></li>
              <li>
                <a
                  href="https://wa.me/923212919592"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-gold"
                >
                  Book a Free Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-xs text-white/60">
          <div>© 2026 Nexus EU. All rights reserved.</div>
          <div>
            Information is indicative and subject to change. Always confirm
            details with the university or Nexus EU.
          </div>
        </div>
      </div>
    </footer>
  );
}
