import Link from "next/link";
import { notFound } from "next/navigation";
import {
  MapPin,
  Calendar,
  GraduationCap,
  Wallet,
  Globe,
  Mail,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Award,
  Users,
  Sparkles,
  Building2,
  FileText,
} from "lucide-react";
import { UNIVERSITIES, getUniversityBySlug } from "@/data/universities";
import LeadCTA from "@/components/LeadCTA";

// Static params for Next.js
export function generateStaticParams() {
  return UNIVERSITIES.map((u) => ({ slug: u.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const uni = getUniversityBySlug(params.slug);
  if (!uni) return { title: "University Not Found" };
  return {
    title: `${uni.name} (${uni.shortName}) — Programmes, Fees & Admission | Nexus EU`,
    description: uni.overview,
  };
}

export default function UniversityDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const uni = getUniversityBySlug(params.slug);
  if (!uni) notFound();

  const bachelorPrograms = uni.programmes.filter(
    (p) => p.level === "Bachelor" || p.level === "Integrated"
  );
  const masterPrograms = uni.programmes.filter((p) => p.level === "Master");
  const phdPrograms = uni.programmes.filter((p) => p.level === "PhD");

  return (
    <div>
      {/* Back link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link
          href="/universities"
          className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-navy"
        >
          <ArrowLeft size={16} /> Back to all universities
        </Link>
      </div>

      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-navy-dark text-white mt-6">
        <div className="absolute -right-32 -top-32 w-96 h-96 bg-gold/10 rounded-full" />
        <div className="absolute -right-12 -bottom-32 w-80 h-80 bg-lithGreen/10 rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 relative">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="inline-block px-3 py-1.5 bg-gold text-navy-dark text-xs font-black rounded-md mb-4">
                {uni.shortName}
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight mb-4">
                {uni.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-white/80 mb-6">
                <span className="flex items-center gap-1.5">
                  <MapPin size={14} className="text-gold" /> {uni.city}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-gold" /> Founded{" "}
                  {uni.founded}
                </span>
                <span className="flex items-center gap-1.5">
                  <Award size={14} className="text-gold" /> {uni.ranking}
                </span>
              </div>
              <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-6 max-w-3xl">
                {uni.longOverview ?? uni.overview}
              </p>

              {/* Field chips */}
              <div className="flex flex-wrap gap-2">
                {uni.fields.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 bg-white/10 text-gold font-semibold rounded-full border border-white/20"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Right CTA card */}
            <aside className="lg:col-span-1">
              <div className="bg-white text-ink rounded-2xl p-6 shadow-2xl lg:sticky lg:top-24">
                <div className="kicker mb-2">Ready to apply?</div>
                <h3 className="text-xl font-black text-navy mb-4">
                  Let Nexus EU handle it.
                </h3>
                <p className="text-sm text-ink-soft mb-5 leading-relaxed">
                  Get a free profile assessment for {uni.shortName} in one
                  WhatsApp message.
                </p>
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/923212919592?text=Hi%20Nexus%20EU%2C%20I%27m%20interested%20in%20${encodeURIComponent(
                      uni.name
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp w-full"
                  >
                    <MessageCircle size={18} /> WhatsApp Nexus EU
                  </a>
                  <Link
                    href={`/contact?uni=${uni.slug}`}
                    className="btn-outline w-full"
                  >
                    Send detailed enquiry <ArrowRight size={16} />
                  </Link>
                </div>
                <div className="mt-5 pt-5 border-t border-line text-xs text-ink-soft space-y-2">
                  <div className="flex items-center gap-2">
                    <Globe size={14} className="text-navy" />
                    <a
                      href={uni.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-navy underline"
                    >
                      Official website
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-navy" />
                    {uni.email}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* Flag stripe */}
        <div className="flex h-1.5">
          <div className="flex-1 bg-gold" />
          <div className="flex-1 bg-lithGreen" />
          <div className="flex-1 bg-lithRed" />
        </div>
      </section>

      {/* ============ QUICK FACTS ============ */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Fact
              icon={<Wallet />}
              label="Avg. Annual Fee (Non-EU)"
              value={uni.avgFee}
              note={uni.feeNote}
              accent="lithGreen"
              asterisk
            />
            <Fact
              icon={<Building2 />}
              label={`Monthly Living · ${uni.city}`}
              value={uni.livingCost}
              note={uni.livingNote}
              accent="navy"
              asterisk
            />
            <Fact
              icon={<Users />}
              label="Student Body"
              value={uni.students}
              note={uni.internationalRatio}
              accent="navy"
            />
            <Fact
              icon={<Award />}
              label="Scholarships"
              value="Available"
              note={uni.scholarships}
              accent="lithGreen"
            />
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE ============ */}
      <section className="py-12 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Why choose */}
            <div>
              <div className="kicker mb-2">Why {uni.shortName}?</div>
              <h2 className="text-3xl font-black text-navy mb-4">
                What makes this uni different.
              </h2>
              <div className="flag-stripe mb-6" />
              <ul className="space-y-3">
                {uni.whyChoose.map((reason) => (
                  <li
                    key={reason}
                    className="flex gap-3 text-ink-soft leading-relaxed"
                  >
                    <CheckCircle2
                      size={20}
                      className="text-lithGreen flex-shrink-0 mt-0.5"
                    />
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key info card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-line shadow-sm">
              <div className="kicker mb-2">Key Info</div>
              <h3 className="text-2xl font-black text-navy mb-6">
                Admission essentials
              </h3>

              <div className="space-y-5">
                <KeyInfo
                  icon={<GraduationCap />}
                  label="Degree Levels Offered"
                  value={uni.degreeLevels.join(" · ")}
                />
                <KeyInfo
                  icon={<Globe />}
                  label="Language of Instruction"
                  value={uni.language}
                />
                <KeyInfo
                  icon={<Calendar />}
                  label="Intake"
                  value={uni.intake}
                />
                <KeyInfo
                  icon={<FileText />}
                  label="English Requirement"
                  value={uni.englishRequirement}
                />
                {uni.applicationFee && (
                  <KeyInfo
                    icon={<Wallet />}
                    label="Application Fee"
                    value={uni.applicationFee}
                  />
                )}
                <KeyInfo
                  icon={<Calendar />}
                  label="Application Deadline (Non-EU)"
                  value={uni.applicationDeadlines.nonEU}
                  highlight
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROGRAMMES ============ */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="kicker mb-2">All Programmes</div>
            <h2 className="text-3xl sm:text-4xl font-black text-navy mb-3">
              English-taught programmes at {uni.shortName}.
            </h2>
            <div className="flag-stripe mx-auto" />
            <p className="mt-4 text-ink-soft max-w-2xl mx-auto">
              These are the programmes currently open to international
              applicants. Fees shown are per-year (Non-EU) and may vary —
              confirm exact figures with Nexus EU before applying.
            </p>
          </div>

          {bachelorPrograms.length > 0 && (
            <ProgrammeTable
              title="Bachelor's & Integrated Programmes"
              accent="lithGreen"
              programs={bachelorPrograms}
            />
          )}
          {masterPrograms.length > 0 && (
            <ProgrammeTable
              title="Master's Programmes"
              accent="navy"
              programs={masterPrograms}
            />
          )}
          {phdPrograms.length > 0 && (
            <ProgrammeTable
              title="PhD / Doctoral Programmes"
              accent="lithRed"
              programs={phdPrograms}
            />
          )}
        </div>
      </section>

      {/* ============ DISCLAIMER ============ */}
      <section className="py-8 bg-gold-soft border-y border-gold/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3">
            <Sparkles size={18} className="text-lithRed flex-shrink-0 mt-0.5" />
            <p className="text-xs text-ink-soft leading-relaxed">
              <span className="font-bold text-lithRed">* Important:</span> All
              fees and figures are indicative and based on the 2025/2026
              academic year published by the university. Specific programme
              fees, application deadlines, and entry requirements can change
              without notice. Always confirm directly with Nexus EU or the
              university before submitting your application. Programme
              availability for the 2026 intake may shift — message us for the
              latest list.
            </p>
          </div>
        </div>
      </section>

      {/* ============ LEAD CTA ============ */}
      <LeadCTA
        title={`Apply to ${uni.shortName} with confidence.`}
        subtitle="Nexus EU has helped students navigate Lithuanian admissions for years. Let's get you in — and get you there."
      />
    </div>
  );
}

/* ----------------------------------------------- */
function Fact({
  icon,
  label,
  value,
  note,
  accent,
  asterisk,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  note?: string;
  accent: "navy" | "lithGreen" | "lithRed";
  asterisk?: boolean;
}) {
  const accentText = {
    navy: "text-navy",
    lithGreen: "text-lithGreen",
    lithRed: "text-lithRed",
  }[accent];
  return (
    <div className="bg-cardbg rounded-2xl p-5 border border-line">
      <div className="flex items-center gap-2 mb-2">
        <div className={`${accentText}`}>{icon}</div>
        <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
          {label} {asterisk && <span className="text-lithRed">*</span>}
        </div>
      </div>
      <div className={`text-xl font-black ${accentText} mb-1`}>{value}</div>
      {note && (
        <div className="text-[11px] text-ink-soft leading-snug italic">
          {note}
        </div>
      )}
    </div>
  );
}

function KeyInfo({
  icon,
  label,
  value,
  highlight,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-start gap-3">
      <div
        className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${
          highlight ? "bg-lithRed text-white" : "bg-cardbg text-navy"
        }`}
      >
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-[10px] font-bold uppercase tracking-wider text-muted">
          {label}
        </div>
        <div
          className={`text-sm font-semibold ${
            highlight ? "text-lithRed" : "text-ink"
          }`}
        >
          {value}
        </div>
      </div>
    </div>
  );
}

function ProgrammeTable({
  title,
  programs,
  accent,
}: {
  title: string;
  programs: { name: string; level: string; duration: string; field: string; fee: string }[];
  accent: "navy" | "lithGreen" | "lithRed";
}) {
  const accentBg = {
    navy: "bg-navy",
    lithGreen: "bg-lithGreen",
    lithRed: "bg-lithRed",
  }[accent];

  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <div className={`${accentBg} h-1 w-12 rounded-full`} />
        <h3 className="text-xl font-black text-navy">{title}</h3>
        <span className="text-xs text-muted">({programs.length})</span>
      </div>

      <div className="overflow-x-auto rounded-2xl border border-line shadow-sm">
        <table className="w-full text-sm">
          <thead className={`${accentBg} text-white`}>
            <tr>
              <th className="px-4 py-3 text-left font-bold">Programme</th>
              <th className="px-4 py-3 text-left font-bold hidden md:table-cell">
                Field
              </th>
              <th className="px-4 py-3 text-left font-bold">Duration</th>
              <th className="px-4 py-3 text-left font-bold">Fee (Non-EU)</th>
            </tr>
          </thead>
          <tbody>
            {programs.map((p, i) => (
              <tr
                key={p.name + i}
                className="border-t border-line hover:bg-cream transition-colors"
              >
                <td className="px-4 py-3 font-semibold text-navy">{p.name}</td>
                <td className="px-4 py-3 text-ink-soft hidden md:table-cell">
                  {p.field}
                </td>
                <td className="px-4 py-3 text-ink-soft">{p.duration}</td>
                <td className="px-4 py-3 font-bold text-lithGreen">{p.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
