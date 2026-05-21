import Link from "next/link";
import {
  GraduationCap,
  Globe2,
  Wallet,
  ShieldCheck,
  Plane,
  Briefcase,
  Building,
  TreePine,
  Wifi,
  Heart,
  ArrowRight,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import LeadCTA from "@/components/LeadCTA";

export const metadata = {
  title: "Why Study in Lithuania? | Nexus EU",
  description:
    "Discover why Lithuania is one of Europe's best-kept secrets for international students. EU-recognised degrees, affordable living, and 500+ English-taught programmes.",
};

export default function WhyLithuaniaPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-dark text-white py-20">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-lithGreen/10 rounded-full blur-3xl" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="kicker text-gold mb-3">Why Lithuania</div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            Small country.<br />
            <span className="text-gold">Massive opportunity.</span>
          </h1>
          <div className="flag-stripe-wide" />
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mt-6 max-w-3xl">
            Lithuania is a quiet powerhouse — an EU member, a Eurozone economy,
            a Schengen passport country, and one of the most affordable places
            in Europe to live as a student. Here's why thousands of
            international students choose it every year.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["500+", "English-taught programmes"],
              ["EU", "Diplomas recognised across 27 states"],
              ["€350–750", "Average monthly student budget"],
              ["15 mo.", "Post-study job-search visa for non-EU"],
              ["100%", "Of students can work full-time"],
              ["Top 2", "Globally for digital skills"],
              ["Schengen", "Travel freely across Europe"],
              ["1 hr", "Flight to Berlin, Stockholm, Warsaw"],
            ].map(([num, label]) => (
              <div
                key={label}
                className="bg-cream rounded-2xl p-6 border border-line hover:border-gold transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-black text-lithGreen mb-1">
                  {num}
                </div>
                <div className="text-xs sm:text-sm text-ink-soft leading-snug">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three pillars */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="The case for Lithuania"
            title="Three reasons that actually matter."
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            <Pillar
              kicker="PEOPLE"
              kickerColor="text-lithRed"
              icon={<GraduationCap />}
              title="Quality education"
              text="All international programmes are taught fully in English. Diplomas are recognised across the EU, and several universities rank in QS World Top 800. Vilnius University alone sits among the world's top 450."
            />
            <Pillar
              kicker="PLACE"
              kickerColor="text-lithGreen"
              icon={<Building />}
              title="Safe, central, walkable"
              text="Vilnius was ranked among the world's top 100 student cities. Compact, cycle-friendly capitals, low crime, and you're a 1-hour flight from Berlin, Stockholm, or Warsaw."
            />
            <Pillar
              kicker="POCKET"
              kickerColor="text-navy"
              icon={<Wallet />}
              title="Easy on the budget"
              text="Bachelor's tuition starts from ~€1,300/year, master's from ~€2,300/year. Monthly student living: €350–€750. Non-EU students can work full-time with a Temporary Residence Permit."
            />
          </div>
        </div>
      </section>

      {/* Deep dive cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Deep dive"
            title="What you actually get."
          />
          <div className="grid md:grid-cols-2 gap-6">
            <DeepCard
              icon={<Globe2 />}
              title="EU & Schengen access"
              text="Lithuania is fully integrated into the European Union, Eurozone (Euro currency since 2015), and Schengen Area. Your student visa lets you travel freely across 27 European countries — perfect for weekend trips to Paris, Berlin, or Rome."
            />
            <DeepCard
              icon={<ShieldCheck />}
              title="Diploma recognition"
              text="All universities listed are accredited by Lithuania's Centre for Quality Assessment in Higher Education (SKVC). Diplomas are recognised under the Lisbon Convention across the EU, and graduates of medical programmes can sit for USMLE (USA) and PLAB (UK) exams."
            />
            <DeepCard
              icon={<Briefcase />}
              title="Work rights for students"
              text="Both EU and non-EU students can work full-time (up to 40 hours/week) during studies. Non-EU students need a Temporary Residence Permit first. After graduation, non-EU students can stay up to 15 months to find work."
            />
            <DeepCard
              icon={<Wifi />}
              title="Digital-first lifestyle"
              text="Lithuania has the fastest internet in Europe and ranks Top 2 globally for digital skills. Free Wi-Fi in most public spaces, contactless payments everywhere, and a thriving startup scene with major tech employers."
            />
            <DeepCard
              icon={<TreePine />}
              title="Quality of life"
              text="Compact, green cities with rivers, parks, and walkable old towns. Low crime, clean air, and a young, English-speaking population. Average lecture hall size is small — you'll actually know your professors."
            />
            <DeepCard
              icon={<Plane />}
              title="Travel hub of the Baltics"
              text="Three international airports (Vilnius, Kaunas, Palanga) with low-cost flights to most EU destinations. Take a bus to Latvia, Estonia, or Poland for the weekend. Lithuania sits at the geographical centre of Europe."
            />
          </div>
        </div>
      </section>

      {/* What it's like — Pakistani student perspective */}
      <section className="py-16 bg-navy-dark text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kicker text-gold mb-2">For South Asian students</div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4">
            What's it like for Pakistani students in Lithuania?
          </h2>
          <div className="flag-stripe mb-8" />
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Growing community",
                text: "An active South Asian student community across Vilnius and Kaunas. Most universities have dedicated WhatsApp groups for incoming international students.",
              },
              {
                title: "Halal & desi food",
                text: "Halal grocery stores in Vilnius and Kaunas. Several Pakistani/Indian restaurants in both cities, and most local supermarkets stock South Asian spices.",
              },
              {
                title: "Mosques & community",
                text: "Active Muslim community in Vilnius, with mosques and Islamic centres. The Tatar community in Lithuania goes back 600+ years.",
              },
              {
                title: "Climate adjustment",
                text: "Winters are cold (−5 to −15°C from Dec–Feb), but universities provide heated dormitories and the public transport is reliable year-round.",
              },
              {
                title: "Cost vs. Western Europe",
                text: "Living in Lithuania is roughly 40-50% cheaper than Germany or the Netherlands while offering an EU-recognised degree.",
              },
              {
                title: "Family-friendly culture",
                text: "Lithuanians value family, hospitality, and education — culturally not too far from South Asian values around respect and elders.",
              },
            ].map(({ title, text }) => (
              <div
                key={title}
                className="bg-white/5 backdrop-blur rounded-xl p-5 border border-white/10"
              >
                <Heart size={18} className="text-gold mb-2" />
                <h3 className="font-bold mb-2">{title}</h3>
                <p className="text-sm text-white/70 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <LeadCTA
        title="Lithuania checks every box?"
        subtitle="Now let's find the right university for you. Browse our curated guide or talk to us directly on WhatsApp."
      />
    </div>
  );
}

function Pillar({
  kicker,
  kickerColor,
  icon,
  title,
  text,
}: {
  kicker: string;
  kickerColor: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-line hover:shadow-lg transition-shadow">
      <div className={`text-xs font-black uppercase tracking-widest mb-3 ${kickerColor}`}>
        {kicker}
      </div>
      <div className="w-14 h-14 bg-navy text-gold rounded-2xl flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-navy mb-2">{title}</h3>
      <p className="text-sm text-ink-soft leading-relaxed">{text}</p>
    </div>
  );
}

function DeepCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-4 p-6 bg-cardbg rounded-xl border border-line hover:border-gold transition-colors">
      <div className="w-12 h-12 bg-navy text-gold rounded-xl flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-navy mb-1">{title}</h3>
        <p className="text-sm text-ink-soft leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
