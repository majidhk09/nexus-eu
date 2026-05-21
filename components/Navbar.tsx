"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/universities", label: "Universities" },
  { href: "/why-lithuania", label: "Why Lithuania" },
  { href: "/cost-calculator", label: "Cost Calculator" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top gold/green/red stripe */}
      <div className="flex h-[3px] w-full">
        <div className="flex-1 bg-gold" />
        <div className="flex-1 bg-lithGreen" />
        <div className="flex-1 bg-lithRed" />
      </div>

      <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-line">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-9 h-9 bg-navy rounded-lg flex items-center justify-center">
                <span className="text-gold font-black text-lg">N</span>
              </div>
              <div>
                <div className="font-black text-navy text-lg leading-none">
                  Nexus EU
                </div>
                <div className="text-[10px] text-muted leading-none mt-0.5">
                  South Asia × Europe
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-ink hover:text-navy transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/923212919592"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm py-2 px-4"
              >
                WhatsApp Us
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 text-navy"
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden border-t border-line bg-white animate-fade-in">
            <div className="px-4 py-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-base font-medium text-ink hover:bg-cream rounded-lg"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/923212919592"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full mt-2"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
