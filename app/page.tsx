import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  GraduationCap,
  Globe2,
  Wallet,
  ShieldCheck,
  Plane,
  Sparkles,
} from "lucide-react";
import { UNIVERSITIES } from "@/data/universities";
import UniversityCard from "@/components/UniversityCard";
import SectionHeading from "@/components/SectionHeading";
import LeadCTA from "@/components/LeadCTA";

export default function HomePage() {
  // Featured = first 6 (the heavy hitters)
  const featured = UNIVERSITIES.slice(0, 6);

  return (
    <div>
      {/* ========================= HERO ========================= */}
      <section className="relative overflow-hidden bg-navy-dark text-white">
        {/* Decorative shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold rounded-full mix-blend-multiply blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-lithGreen rounded-full mix-blend-multiply blur-3xl" />
        </div>

        {/* EU Stars motif */}
        <div className="absolute top-12 right-12 hidden lg:block">
          <EUStars />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-gold/15 text-gold rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <Sparkles size={14} /> Edition 2026 · Now Open
            </div>
            <p className="text-gold font-semibold mb-3">STUDY IN</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-[0.95] mb-6">
              Lithuania.
            </h1>
            <p className="text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl mb-8">
              Your curated guide to universities in the heart of Europe — for
              Pakistani and South Asian students dreaming of an EU degree,
              without the chaos.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/universities" className="btn-gold">
                Explore Universities <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/923212919592"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageCircle size={18} /> WhatsApp Us
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
              <Stat number="14" label="Universities" />
              <Stat number="500+" label="English programmes" />
              <Stat number="EU" label="Recognised degrees" />
              <Stat number="100%" label="Free consultation" />
            </div>
          </div>
        </div>

        {/* Lithuanian flag stripe bottom */}
        <div className="flex h-2">
          <div className="flex-1 bg-gold" />
          <div className="flex-1 bg-lithGreen" />
          <div className="flex-1 bg-lithRed" />
        </div>
      </section>

      {/* ========================= QUICK PERKS ========================= */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Why Nexus EU"
            title="Your shortcut to a European degree."
            subtitle="We curate the right universities for your profile, handle the paperwork, and walk you through every step until your visa is stamped and your bags are packed."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Perk
              icon={<GraduationCap />}
              title="Hand-picked unis"
              text="No bait-and-switch. Just accredited universities that actually accept South Asian students."
            />
            <Perk
              icon={<Wallet />}
              title="Real fees, upfront"
              text="No hidden costs. We show you tuition, living costs, and what scholarships are actually achievable."
            />
            <Perk
              icon={<ShieldCheck />}
              title="Visa-first thinking"
              text="We don't apply to programmes that have poor visa approval rates for Pakistani applicants. Period."
            />
            <Perk
              icon={<Plane />}
              title="Arrival to alumni"
              text="From shortlisting to airport pickup to post-graduation job-search visa — we stay with you."
            />
          </div>
        </div>
      </section>

      {/* ========================= FEATURED UNIS ========================= */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <SectionHeading
              kicker="The universities"
              title="Top picks for South Asian applicants."
            />
            <Link
              href="/universities"
              className="flex items-center gap-1 text-navy font-bold hover:text-lithRed group"
            >
              View all 14 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((u) => (
              <UniversityCard key={u.slug} uni={u} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================= WHY LITHUANIA ========================= */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading
                kicker="Why Lithuania?"
                title="Small country. Massive opportunity."
                subtitle="Lithuania is a quiet powerhouse — an EU member, a Eurozone economy, a Schengen passport country, and one of the most affordable places to live as a student in Europe."
              />
              <ul className="space-y-3 mb-8">
                {[
                  "500+ English-taught programmes across all major fields",
                  "EU-recognised diplomas, valid across 27 member states",
                  "€350–€750/month is enough for comfortable student life",
                  "15-month post-study job-search visa for non-EU graduates",
                  "Schengen visa unlocks travel across 27 European countries",
                  "Globally Top 2 country for digital skills",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-ink-soft leading-relaxed">
                    <span className="mt-1 w-2 h-2 rounded-full bg-lithGreen flex-shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <Link href="/why-lithuania" className="btn-primary">
                Deep dive: Why Lithuania <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right column — three feature boxes */}
            <div className="grid gap-4">
              <FeatureBox
                color="navy"
                kicker="PEOPLE"
                title="Quality education"
                text="All programmes taught fully in English. Diplomas recognised EU-wide. Vilnius University sits in QS Top 450 globally."
              />
              <FeatureBox
                color="lithGreen"
                kicker="PLACE"
                title="Safe, central, walkable"
                text="Vilnius is among the world's top 100 student cities. Compact, low-crime, and 1 hour from Berlin or Warsaw by plane."
              />
              <FeatureBox
                color="lithRed"
                kicker="POCKET"
                title="Easy on the budget"
                text="Bachelor's tuition from ~€1,300/yr. Live well on €350–€750/month. Non-EU students can work full-time."
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================= CITIES ========================= */}
      <section className="py-16 sm:py-20 bg-navy-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="kicker text-gold mb-2">Where you'll live</div>
            <h2 className="text-3xl sm:text-4xl font-black mb-4">
              Three cities, three vibes.
            </h2>
            <div className="flag-stripe mx-auto" />
            <p className="mt-4 text-white/70 max-w-2xl mx-auto">
              Lithuania's universities are spread across three main student
              cities. Pick the lifestyle that fits your vibe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <CityCard
              name="Vilnius"
              tag="The Capital"
              cost="€600–€900"
              desc="Historic Old Town (UNESCO heritage), busiest job market, most international student crowd. Most expensive of the three, but still well below Western Europe."
              accent="bg-gold"
            />
            <CityCard
              name="Kaunas"
              tag="The Student City"
              cost="€500–€800"
              desc="Lithuania's intellectual and cultural capital — known as 'student central'. ~5% cheaper than Vilnius, less hectic, second-largest city."
              accent="bg-lithGreen"
            />
            <CityCard
              name="Klaipėda"
              tag="The Coast"
              cost="€500–€750"
              desc="Lithuania's port city on the Baltic Sea. Most affordable, smaller, year-round 'resort' feel. Strong in marine sciences and liberal arts."
              accent="bg-lithRed"
            />
          </div>

          <p className="mt-8 text-xs text-white/50 text-center">
            * Approximate range for a typical student lifestyle (shared rent,
            transport, groceries, modest leisure).
          </p>
        </div>
      </section>

      {/* ========================= PROCESS ========================= */}
      <section className="py-16 sm:py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="How it works"
            title="From dream to diploma — in four steps."
            align="center"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {[
              ["1", "Shortlist", "Browse our guide. Pick your top 2–3 universities."],
              ["2", "Connect", "Free WhatsApp call with us. We assess your profile and confirm options."],
              ["3", "Apply", "We handle documents, applications, attestation, visa paperwork."],
              ["4", "Arrive", "Pre-arrival briefing, airport pickup, accommodation, settle-in."],
            ].map(([num, title, desc]) => (
              <div
                key={num}
                className="bg-white rounded-2xl p-6 border border-line shadow-sm hover:shadow-md transition-all"
              >
                <div className="text-5xl font-black text-gold mb-3">{num}</div>
                <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= LEAD CTA ========================= */}
      <LeadCTA />
    </div>
  );
}

/* ------------------------------------------------------ */
function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-3xl sm:text-4xl font-black text-gold">{number}</div>
      <div className="text-xs sm:text-sm text-white/70 mt-1">{label}</div>
    </div>
  );
}

function Perk({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-cardbg rounded-2xl p-6 border border-line hover:border-gold transition-colors">
      <div className="w-12 h-12 bg-navy text-gold rounded-xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-ink-soft leading-relaxed">{text}</p>
    </div>
  );
}

function FeatureBox({
  color,
  kicker,
  title,
  text,
}: {
  color: "navy" | "lithGreen" | "lithRed";
  kicker: string;
  title: string;
  text: string;
}) {
  const accent = {
    navy: "border-l-navy",
    lithGreen: "border-l-lithGreen",
    lithRed: "border-l-lithRed",
  }[color];
  const kickerColor = {
    navy: "text-navy",
    lithGreen: "text-lithGreen",
    lithRed: "text-lithRed",
  }[color];
  return (
    <div className={`bg-cardbg p-5 rounded-xl border-l-4 ${accent}`}>
      <div className={`text-xs font-black uppercase tracking-wider mb-1 ${kickerColor}`}>
        {kicker}
      </div>
      <h4 className="text-lg font-bold text-navy mb-1">{title}</h4>
      <p className="text-sm text-ink-soft">{text}</p>
    </div>
  );
}

function CityCard({
  name,
  tag,
  cost,
  desc,
  accent,
}: {
  name: string;
  tag: string;
  cost: string;
  desc: string;
  accent: string;
}) {
  return (
    <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all">
      <div className={`${accent} h-1 w-12 mb-4`} />
      <div className="text-xs uppercase tracking-widest text-white/60 font-bold mb-1">
        {tag}
      </div>
      <h3 className="text-2xl font-black text-white mb-3">{name}</h3>
      <div className="mb-4">
        <div className="text-[10px] uppercase tracking-wider text-gold font-bold">
          Avg. monthly living *
        </div>
        <div className="text-xl font-black text-gold">{cost}</div>
      </div>
      <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}

function EUStars() {
  // Simple SVG circle of 12 gold stars (EU motif)
  return (
    <svg viewBox="0 0 120 120" className="w-32 h-32 opacity-50" fill="#F4C430">
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 - 90) * (Math.PI / 180);
        const cx = 60 + 45 * Math.cos(angle);
        const cy = 60 + 45 * Math.sin(angle);
        return (
          <polygon
            key={i}
            points="0,-4 1,-1 4,-1 1.5,1 2.5,4 0,2 -2.5,4 -1.5,1 -4,-1 -1,-1"
            transform={`translate(${cx}, ${cy})`}
          />
        );
      })}
    </svg>
  );
}
