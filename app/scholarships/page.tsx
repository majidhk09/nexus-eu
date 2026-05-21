import Link from "next/link";
import {
  Award,
  Globe2,
  GraduationCap,
  Building2,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Trophy,
} from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import LeadCTA from "@/components/LeadCTA";

export const metadata = {
  title: "Scholarships for Lithuania | Nexus EU",
  description:
    "Discover Lithuanian government scholarships, university tuition waivers, Erasmus+ and Erasmus Mundus opportunities for international students.",
};

export default function ScholarshipsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-navy-dark text-white py-20 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-lithGreen/10 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-4">
            <Trophy size={32} className="text-gold" />
            <div className="kicker text-gold">Scholarships</div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6">
            Free money. <br />
            <span className="text-gold">If you know where to look.</span>
          </h1>
          <div className="flag-stripe-wide" />
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed mt-6 max-w-3xl">
            Lithuania and the EU offer multiple funding paths for international
            students — from full tuition waivers to monthly stipends. Here's the
            honest rundown of what's actually achievable.
          </p>
        </div>
      </section>

      {/* Reality check banner */}
      <section className="bg-gold-soft border-y border-gold/30 py-6">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-3">
          <AlertCircle size={20} className="text-lithRed flex-shrink-0 mt-0.5" />
          <p className="text-sm text-ink-soft leading-relaxed">
            <span className="font-bold text-lithRed">Real talk:</span>{" "}
            Scholarships are <span className="font-bold">competitive</span> —
            don't bank on them for your tuition planning. But if you have strong
            grades and a clear motivation, several below are within reach.
            Apply, but always have a self-funded plan B.
          </p>
        </div>
      </section>

      {/* Scholarship types */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="The four paths"
            title="Where the money actually comes from."
            align="center"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {/* 1. Government */}
            <ScholarshipCard
              kicker="OPTION 1"
              accent="lithGreen"
              icon={<Building2 />}
              title="Lithuanian Government Scholarships"
              tagline="Funded by the Ministry of Education — the most prestigious route."
              body="The State Studies Foundation of Lithuania offers scholarships for non-EU students in Bachelor's, Master's, and PhD programmes. Covers tuition + a monthly stipend (~€413 for BA, ~€572 for MA, ~€918 for PhD)."
              points={[
                "For students from priority countries — Pakistan included in some cycles",
                "Strict academic merit (GPA, motivation, research potential)",
                "Annual application — usually opens January–April",
                "Apply via SMPF: stipendijos.lt",
              ]}
              cta="Check eligibility"
              link="https://stipendijos.lt/en"
            />

            {/* 2. University */}
            <ScholarshipCard
              kicker="OPTION 2"
              accent="navy"
              icon={<GraduationCap />}
              title="University Tuition Waivers"
              tagline="Each university offers its own merit & incentive scholarships."
              body="Most Lithuanian universities reduce tuition by 25%–100% for top applicants. Awarded based on prior academic record, motivation letter, and sometimes an interview."
              points={[
                "Vilnius University: Top Talent scholarship — up to 100% tuition",
                "VMU: Annual fee waivers and excellence awards",
                "MRU: International scholarships covering 25-50% tuition",
                "LCC: €470,000+ in financial aid awarded annually",
                "Generally automatic — applied at the time of admission",
              ]}
              cta="See universities offering aid"
              link="/universities"
              internal
            />

            {/* 3. Erasmus+ */}
            <ScholarshipCard
              kicker="OPTION 3"
              accent="lithRed"
              icon={<Globe2 />}
              title="Erasmus+ Exchange"
              tagline="EU-funded mobility — but you must first be enrolled."
              body="Once you're studying at a Lithuanian university, you can apply for Erasmus+ exchanges to spend 1-2 semesters at another European university. Includes a monthly stipend (~€600-800)."
              points={[
                "Not available before your first year",
                "Requires nomination by your home university",
                "Covers 3-12 months at a partner institution",
                "Adds prestige to your CV — global cohort exposure",
              ]}
              cta="More on Erasmus+"
              link="https://erasmus-plus.ec.europa.eu/"
            />

            {/* 4. Erasmus Mundus */}
            <ScholarshipCard
              kicker="OPTION 4"
              accent="gold"
              icon={<Sparkles />}
              title="Erasmus Mundus Joint Masters"
              tagline="Fully-funded prestige programmes — the holy grail."
              body="Erasmus Mundus Joint Master Degrees (EMJMDs) are competitive 2-year programmes taught across 2-4 European universities. Full tuition + travel + €1,400/month stipend for non-EU."
              points={[
                "~€49,000 total value per student (over 2 years)",
                "Very competitive — ~10% acceptance rate",
                "Apply directly to the programme consortium",
                "Several EMJMDs involve Lithuanian universities (VU, KTU, VMU)",
              ]}
              cta="Browse EMJMD catalogue"
              link="https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en"
            />
          </div>
        </div>
      </section>

      {/* What helps you stand out */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="How to win one"
            title="What makes a scholarship application stand out."
          />
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {[
              {
                title: "Strong academic record",
                text: "Generally a GPA equivalent to 75%+ (top 25% of your class). Medicine and Engineering require even higher.",
              },
              {
                title: "A killer motivation letter",
                text: "Don't write what they want to hear — write your actual story. Specific, personal, and shows you've researched the programme.",
              },
              {
                title: "Verified credentials",
                text: "HEC attestation, IBCC equivalence (for Pakistani applicants), notarised translations. Nexus EU handles all of this.",
              },
              {
                title: "English proficiency proof",
                text: "IELTS 6.0+ minimum for most. Aim for 6.5–7.0 if you want competitive scholarships.",
              },
              {
                title: "Letters of recommendation",
                text: "2–3 from teachers/employers who actually know you and can speak specifically about your strengths.",
              },
              {
                title: "Apply EARLY",
                text: "Scholarship deadlines are 1-3 months before regular admission deadlines. Set a calendar reminder for January.",
              },
            ].map(({ title, text }) => (
              <div
                key={title}
                className="flex gap-3 p-4 bg-cardbg rounded-xl border border-line"
              >
                <CheckCircle2 size={20} className="text-lithGreen flex-shrink-0 mt-1" />
                <div>
                  <div className="font-bold text-navy mb-1">{title}</div>
                  <div className="text-sm text-ink-soft leading-relaxed">{text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Timeline"
            title="When to apply for what."
            align="center"
          />
          <div className="mt-10 space-y-4">
            {[
              ["September – November", "Research universities, shortlist programmes, start IELTS prep"],
              ["December – January", "Take IELTS, request transcripts, draft motivation letter"],
              ["January – April", "Lithuanian Government Scholarship applications open (deadline varies)"],
              ["February – May", "University admission applications + tuition waiver requests"],
              ["May – July", "Results, acceptance, visa application process"],
              ["August", "Pre-arrival prep, housing, travel"],
              ["September", "Start of academic year"],
            ].map(([when, what], i) => (
              <div
                key={when}
                className="flex gap-4 p-5 bg-white rounded-xl border border-line shadow-sm"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-navy text-gold rounded-full flex items-center justify-center font-black">
                  {i + 1}
                </div>
                <div>
                  <div className="text-xs font-bold text-lithGreen uppercase tracking-wider">
                    {when}
                  </div>
                  <div className="text-base font-semibold text-navy mt-0.5">
                    {what}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <LeadCTA
        title="Want help finding the right scholarship?"
        subtitle="Tell us your profile, grades, and target programme — we'll map out every scholarship you actually have a shot at."
      />
    </div>
  );
}

function ScholarshipCard({
  kicker,
  accent,
  icon,
  title,
  tagline,
  body,
  points,
  cta,
  link,
  internal,
}: {
  kicker: string;
  accent: "lithGreen" | "navy" | "lithRed" | "gold";
  icon: React.ReactNode;
  title: string;
  tagline: string;
  body: string;
  points: string[];
  cta: string;
  link: string;
  internal?: boolean;
}) {
  const accentBg = {
    lithGreen: "bg-lithGreen",
    navy: "bg-navy",
    lithRed: "bg-lithRed",
    gold: "bg-gold",
  }[accent];
  const accentText = {
    lithGreen: "text-lithGreen",
    navy: "text-navy",
    lithRed: "text-lithRed",
    gold: "text-gold",
  }[accent];

  return (
    <div className="bg-white rounded-2xl border border-line shadow-sm hover:shadow-xl transition-all overflow-hidden flex flex-col">
      <div className={`${accentBg} text-white p-6`}>
        <div className="text-xs font-black uppercase tracking-widest opacity-80 mb-2">
          {kicker}
        </div>
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="font-black text-xl leading-tight">{title}</h3>
            <p className="text-sm text-white/85 mt-1">{tagline}</p>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <p className="text-sm text-ink-soft leading-relaxed mb-4">{body}</p>
        <ul className="space-y-2 mb-6 flex-1">
          {points.map((pt) => (
            <li key={pt} className="flex gap-2 text-xs text-ink-soft">
              <span
                className={`w-1.5 h-1.5 rounded-full ${accentBg} mt-1.5 flex-shrink-0`}
              />
              <span>{pt}</span>
            </li>
          ))}
        </ul>
        {internal ? (
          <Link href={link} className={`inline-flex items-center gap-1 text-sm font-bold ${accentText} hover:opacity-75`}>
            {cta} <ArrowRight size={14} />
          </Link>
        ) : (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 text-sm font-bold ${accentText} hover:opacity-75`}
          >
            {cta} <ArrowRight size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
