"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Calculator, MessageCircle, TrendingUp, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const CITY_OPTIONS = {
  Vilnius: { rent: [250, 600], food: 200, transport: 30, leisure: 150 },
  Kaunas: { rent: [180, 450], food: 180, transport: 25, leisure: 120 },
  Klaipėda: { rent: [170, 400], food: 170, transport: 25, leisure: 110 },
};

const LIFESTYLE = {
  Budget: 0.7,
  Average: 1.0,
  Comfortable: 1.4,
};

export default function CostCalculatorPage() {
  const [tuition, setTuition] = useState(4500);
  const [city, setCity] = useState<keyof typeof CITY_OPTIONS>("Vilnius");
  const [lifestyle, setLifestyle] = useState<keyof typeof LIFESTYLE>("Average");
  const [accommodationType, setAccommodationType] = useState<"shared" | "private">("shared");

  const breakdown = useMemo(() => {
    const c = CITY_OPTIONS[city];
    const multiplier = LIFESTYLE[lifestyle];
    const rent = accommodationType === "shared" ? c.rent[0] : c.rent[1];
    const food = c.food * multiplier;
    const transport = c.transport;
    const leisure = c.leisure * multiplier;
    const utilities = 60;
    const monthlyTotal = rent + food + transport + leisure + utilities;
    const yearlyLiving = monthlyTotal * 12;
    const yearlyTotal = yearlyLiving + tuition;
    return {
      rent: Math.round(rent),
      food: Math.round(food),
      transport: Math.round(transport),
      leisure: Math.round(leisure),
      utilities,
      monthlyTotal: Math.round(monthlyTotal),
      yearlyLiving: Math.round(yearlyLiving),
      yearlyTotal: Math.round(yearlyTotal),
      tuition,
    };
  }, [city, lifestyle, accommodationType, tuition]);

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-dark text-white py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <Calculator size={32} className="text-gold" />
            <div className="kicker text-gold">Cost calculator</div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            What does <span className="text-gold">studying in Lithuania</span>{" "}
            actually cost?
          </h1>
          <div className="flag-stripe-wide" />
          <p className="text-lg text-white/80 mt-6 max-w-2xl">
            Slide and click to build your own estimate. Real numbers based on
            student surveys and university data — 2026 figures.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-12 bg-cream">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Controls */}
            <div className="lg:col-span-3 space-y-6">
              <div className="bg-white rounded-2xl p-6 border border-line shadow-sm">
                <div className="kicker mb-4">1. Your University Fee</div>
                <div className="flex justify-between items-baseline mb-3">
                  <span className="text-sm text-ink-soft">
                    Yearly tuition (Non-EU)
                  </span>
                  <span className="text-2xl font-black text-lithGreen">
                    €{tuition.toLocaleString()}/yr
                  </span>
                </div>
                <input
                  type="range"
                  min={1500}
                  max={14000}
                  step={100}
                  value={tuition}
                  onChange={(e) => setTuition(parseInt(e.target.value))}
                  className="w-full accent-navy"
                />
                <div className="flex justify-between text-xs text-muted mt-1">
                  <span>€1,500 (cheapest)</span>
                  <span>€14,000 (Medicine)</span>
                </div>
                <p className="text-xs text-muted mt-3 italic">
                  Tip: Check our university listings for actual fees by
                  programme.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-line shadow-sm">
                <div className="kicker mb-4">2. Where will you live?</div>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(CITY_OPTIONS) as Array<keyof typeof CITY_OPTIONS>).map(
                    (c) => (
                      <button
                        key={c}
                        onClick={() => setCity(c)}
                        className={`px-3 py-3 rounded-xl border-2 text-sm font-bold transition-all ${
                          city === c
                            ? "border-navy bg-navy text-white"
                            : "border-line bg-white text-ink-soft hover:border-navy"
                        }`}
                      >
                        {c}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-line shadow-sm">
                <div className="kicker mb-4">3. Accommodation type</div>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { v: "shared" as const, label: "Shared / Dorm", price: "€170–250" },
                    { v: "private" as const, label: "Private studio", price: "€400–600" },
                  ].map((opt) => (
                    <button
                      key={opt.v}
                      onClick={() => setAccommodationType(opt.v)}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        accommodationType === opt.v
                          ? "border-navy bg-navy text-white"
                          : "border-line bg-white text-ink-soft hover:border-navy"
                      }`}
                    >
                      <div className="font-bold text-sm">{opt.label}</div>
                      <div
                        className={`text-xs ${
                          accommodationType === opt.v
                            ? "text-gold"
                            : "text-muted"
                        }`}
                      >
                        {opt.price}/mo
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-line shadow-sm">
                <div className="kicker mb-4">4. Lifestyle</div>
                <div className="grid grid-cols-3 gap-2">
                  {(Object.keys(LIFESTYLE) as Array<keyof typeof LIFESTYLE>).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLifestyle(l)}
                      className={`px-3 py-3 rounded-xl border-2 text-sm font-bold transition-all ${
                        lifestyle === l
                          ? "border-navy bg-navy text-white"
                          : "border-line bg-white text-ink-soft hover:border-navy"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted mt-3 italic">
                  Budget = cook at home, public transit, rare leisure.
                  Comfortable = eat out 2-3x/week, more activities.
                </p>
              </div>
            </div>

            {/* Result */}
            <aside className="lg:col-span-2">
              <div className="lg:sticky lg:top-24 bg-gradient-to-br from-navy to-navy-dark text-white rounded-2xl p-6 shadow-2xl border-4 border-gold">
                <div className="kicker text-gold mb-2">Your estimate</div>
                <div className="text-sm text-white/70 mb-1">
                  Yearly total (tuition + living)
                </div>
                <div className="text-4xl sm:text-5xl font-black text-gold mb-1">
                  €{breakdown.yearlyTotal.toLocaleString()}
                </div>
                <div className="text-xs text-white/60 mb-6">
                  ≈ PKR {(breakdown.yearlyTotal * 310).toLocaleString()} /year
                  <span className="block text-[10px] mt-0.5 italic">
                    (at indicative rate €1 ≈ PKR 310)
                  </span>
                </div>

                <div className="space-y-2 text-sm border-t border-white/20 pt-4">
                  <Row label="Tuition (yearly)" value={`€${breakdown.tuition.toLocaleString()}`} />
                  <Row label="Rent" value={`€${breakdown.rent}/mo`} />
                  <Row label="Food" value={`€${breakdown.food}/mo`} />
                  <Row label="Transport" value={`€${breakdown.transport}/mo`} />
                  <Row label="Utilities & Internet" value={`€${breakdown.utilities}/mo`} />
                  <Row label="Leisure & misc." value={`€${breakdown.leisure}/mo`} />
                </div>
                <div className="border-t border-white/20 mt-4 pt-4 text-sm">
                  <Row
                    label="Total monthly (living only)"
                    value={`€${breakdown.monthlyTotal}/mo`}
                    bold
                  />
                  <Row
                    label="Total yearly (living only)"
                    value={`€${breakdown.yearlyLiving.toLocaleString()}/yr`}
                    bold
                  />
                </div>

                <a
                  href={`https://wa.me/923212919592?text=Hi%2C%20I%20calculated%20%E2%82%AC${breakdown.yearlyTotal}%2Fyear%20for%20studying%20in%20${city}.%20Can%20you%20guide%20me%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp w-full mt-6"
                >
                  <MessageCircle size={18} /> Discuss this on WhatsApp
                </a>
              </div>
            </aside>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-gold-soft border-l-4 border-gold p-5 rounded-xl">
            <div className="flex gap-3">
              <TrendingUp size={18} className="text-lithRed flex-shrink-0 mt-1" />
              <div className="text-xs text-ink-soft leading-relaxed">
                <span className="font-bold text-lithRed">
                  Important — estimates only:
                </span>{" "}
                These figures are indicative. Your actual cost depends on your
                exact programme fee, accommodation choice (dormitory vs private
                rental), lifestyle, and exchange rates. Lithuanian visa
                applications also require proof of ~€7,500 in your bank account
                per year. For exact numbers tailored to your situation, message
                Nexus EU.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            kicker="Pro tips"
            title="How to live well, spend less."
            align="center"
          />
          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {[
              ["🍳 Cook at home", "Groceries are affordable. A home-cooked meal costs €2-3 vs €7-10 eating out."],
              ["🚌 Use the student transit pass", "Just €5-10/month with a student ID. Public transport is reliable across all cities."],
              ["🏠 Apply for a dormitory early", "VMU offers guaranteed first-year housing. Dorms are 50-60% cheaper than private rentals."],
              ["📚 Use the ISIC student card", "Discounts on travel, museums, cinemas, gyms, and even some grocery stores."],
              ["💼 Pick up a part-time job", "Non-EU students can work full-time once they have a TRP. Earn €4-6/hour easily."],
              ["✈️ Plan travel through Erasmus", "Erasmus+ exchange programmes can offer €600-800/month for studying abroad."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="bg-cardbg rounded-xl p-5 border border-line hover:border-gold transition-colors"
              >
                <div className="font-bold text-navy mb-1">{title}</div>
                <div className="text-sm text-ink-soft">{text}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/universities" className="btn-primary">
              See universities by fee <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Row({
  label,
  value,
  bold,
}: {
  label: string;
  value: string;
  bold?: boolean;
}) {
  return (
    <div className="flex justify-between items-center">
      <span className={`${bold ? "font-bold text-white" : "text-white/70"}`}>
        {label}
      </span>
      <span className={`${bold ? "font-black text-gold" : "text-white/90 font-semibold"}`}>
        {value}
      </span>
    </div>
  );
}
