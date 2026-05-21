import Link from "next/link";
import {
  Compass,
  ShieldCheck,
  HeartHandshake,
  FileCheck2,
  PlaneTakeoff,
  Home,
  MessageCircle,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import LeadCTA from "@/components/LeadCTA";

export const metadata = {
  title: "About Nexus EU | Bridging South Asia & Europe",
  description:
    "Nexus EU is your education consultancy partner — connecting Pakistani and South Asian students with universities across Lithuania and Europe.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy-dark text-white py-20 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-lithGreen/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="kicker text-gold mb-3">About Nexus EU</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            Bridging South Asia <br />
            <span className="text-gold">& Europe.</span>
          </h1>
          <div className="flag-stripe-wide" />
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mt-6 max-w-3xl">
            One future at a time. We're an education consultancy on a simple
            mission: take Pakistani and South Asian students who are serious
            about their future, and put them in the right European university —
            without the chaos.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                kicker="Our story"
                title="Born from a frustration."
              />
              <div className="space-y-4 text-ink-soft leading-relaxed">
                <p>
                  Most Pakistani families have a story about a "consultant" who
                  promised the world, took the money, and delivered a rejection
                  letter — or worse, silence.
                </p>
                <p>
                  Nexus EU was built differently. We focus on{" "}
                  <span className="font-bold text-navy">
                    a small, well-researched range of Lithuanian and European
                    universities
                  </span>{" "}
                  — institutions we know, with admissions teams we've worked
                  with, and visa pathways we understand inside-out.
                </p>
                <p>
                  We're not trying to send every student to every country. We're
                  trying to send the{" "}
                  <span className="font-bold text-navy">right student</span> to
                  the{" "}
                  <span className="font-bold text-navy">right programme</span>{" "}
                  — and stay with them all the way to their first day in
                  Vilnius.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Stat number="14" label="Lithuanian universities in our network" color="lithGreen" />
              <Stat number="EU" label="All degrees recognised continent-wide" color="navy" />
              <Stat number="100%" label="Transparent fees & process" color="lithRed" />
              <Stat number="Free" label="Initial consultation, always" color="navy" />
            </div>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="What we do"
            title="From dream to diploma — we cover every step."
            align="center"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <ServiceCard
              icon={<Compass />}
              title="Profile assessment"
              text="Free initial consultation. We assess your academics, budget, target field, and language scores — then map them to realistic options."
            />
            <ServiceCard
              icon={<FileCheck2 />}
              title="Application & paperwork"
              text="University applications, HEC attestation, IBCC equivalence, document translations, motivation letters — we handle every form."
            />
            <ServiceCard
              icon={<ShieldCheck />}
              title="Visa preparation"
              text="National D-visa documentation, financial proofs, embassy interview prep. We know what works for Pakistani applicants."
            />
            <ServiceCard
              icon={<PlaneTakeoff />}
              title="Pre-departure briefing"
              text="What to pack, currency, SIM cards, opening a Lithuanian bank account, public transport, weather — all the on-the-ground knowledge."
            />
            <ServiceCard
              icon={<Home />}
              title="Arrival support"
              text="Help arranging accommodation (dormitory or private), airport pickup coordination, and connecting you with the existing South Asian student community."
            />
            <ServiceCard
              icon={<HeartHandshake />}
              title="Ongoing partnership"
              text="Post-arrival check-ins, advice on part-time work, study permit renewals, and guidance on the 15-month post-study job-search visa."
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="What we stand for"
            title="The way Nexus EU works."
            align="center"
          />
          <div className="space-y-4 mt-10">
            {[
              {
                title: "Honest, even when it's uncomfortable",
                text: "If your profile isn't competitive for Vilnius University Medicine, we'll tell you. Then we'll show you what IS within reach.",
              },
              {
                title: "Transparent pricing",
                text: "No hidden costs. You know what universities charge, what we charge, and what extras you'll need (translations, attestation, visa fees).",
              },
              {
                title: "Quality over quantity",
                text: "We don't take 500 students per intake. We take a manageable number so every applicant gets real attention.",
              },
              {
                title: "WhatsApp-first communication",
                text: "We know you live on WhatsApp — so we do too. No clunky email chains, no week-long delays. Real-time replies during business hours.",
              },
              {
                title: "South-Asia native",
                text: "We understand HEC, IBCC, NTS, the local visa interview style, parental concerns, the works. You don't need to explain twice.",
              },
            ].map(({ title, text }) => (
              <div
                key={title}
                className="flex gap-4 p-5 bg-cardbg rounded-xl border-l-4 border-gold"
              >
                <Sparkles size={20} className="text-gold flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy mb-1">{title}</h3>
                  <p className="text-sm text-ink-soft leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <LeadCTA
        title="Let's start with a free consultation."
        subtitle="No commitment. Just a 20-minute WhatsApp call to understand your goals and map out your options."
      />
    </div>
  );
}

function Stat({
  number,
  label,
  color,
}: {
  number: string;
  label: string;
  color: "lithGreen" | "navy" | "lithRed";
}) {
  const accent = {
    lithGreen: "text-lithGreen",
    navy: "text-navy",
    lithRed: "text-lithRed",
  }[color];
  return (
    <div className="bg-cardbg rounded-2xl p-6 border border-line">
      <div className={`text-3xl sm:text-4xl font-black ${accent} mb-2`}>
        {number}
      </div>
      <div className="text-sm text-ink-soft leading-snug">{label}</div>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-6 border border-line shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
      <div className="w-12 h-12 bg-navy text-gold rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="font-bold text-navy text-lg mb-2">{title}</h3>
      <p className="text-sm text-ink-soft leading-relaxed">{text}</p>
    </div>
  );
}
