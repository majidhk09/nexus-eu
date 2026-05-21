"use client";

import { useMemo, useState } from "react";
import { Search, X, Filter as FilterIcon } from "lucide-react";
import { UNIVERSITIES, getAllCities, getAllFields } from "@/data/universities";
import UniversityCard from "@/components/UniversityCard";
import SectionHeading from "@/components/SectionHeading";

const DEGREE_LEVELS = ["Bachelor", "Master", "PhD", "Integrated"] as const;

export default function UniversitiesPage() {
  const [query, setQuery] = useState("");
  const [cityFilter, setCityFilter] = useState<string>("");
  const [degreeFilter, setDegreeFilter] = useState<string>("");
  const [fieldFilter, setFieldFilter] = useState<string>("");
  const [feeRange, setFeeRange] = useState<string>("");

  const cities = getAllCities();
  const fields = getAllFields();

  const filtered = useMemo(() => {
    return UNIVERSITIES.filter((u) => {
      if (
        query &&
        !`${u.name} ${u.shortName} ${u.fields.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase())
      )
        return false;
      if (cityFilter && u.city !== cityFilter) return false;
      if (
        degreeFilter &&
        !u.degreeLevels.includes(
          degreeFilter as (typeof DEGREE_LEVELS)[number]
        )
      )
        return false;
      if (fieldFilter && !u.fields.includes(fieldFilter)) return false;
      if (feeRange === "low" && u.avgFeeNumber > 3000) return false;
      if (
        feeRange === "mid" &&
        (u.avgFeeNumber < 3000 || u.avgFeeNumber > 5000)
      )
        return false;
      if (feeRange === "high" && u.avgFeeNumber < 5000) return false;
      return true;
    });
  }, [query, cityFilter, degreeFilter, fieldFilter, feeRange]);

  const clearAll = () => {
    setQuery("");
    setCityFilter("");
    setDegreeFilter("");
    setFieldFilter("");
    setFeeRange("");
  };

  const hasFilters =
    query || cityFilter || degreeFilter || fieldFilter || feeRange;

  return (
    <div>
      {/* Hero */}
      <section className="bg-navy-dark text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="kicker text-gold mb-3">Universities</div>
          <h1 className="text-4xl sm:text-5xl font-black mb-4">
            14 universities. One country. <br />
            <span className="text-gold">Your future.</span>
          </h1>
          <div className="flag-stripe-wide" />
          <p className="text-white/80 text-lg max-w-2xl mt-6">
            Filter by city, degree level, study field, or fee range to find your
            perfect match. Click any card for the full breakdown.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white border-b border-line sticky top-16 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-3">
            {/* Search bar */}
            <div className="relative">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, programme, or field..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-line bg-cream focus:outline-none focus:border-navy focus:bg-white transition-colors text-sm"
              />
            </div>

            {/* Filter chips */}
            <div className="flex flex-wrap gap-2">
              <Select
                value={cityFilter}
                onChange={setCityFilter}
                placeholder="🏙️ All Cities"
                options={cities}
              />
              <Select
                value={degreeFilter}
                onChange={setDegreeFilter}
                placeholder="🎓 All Degrees"
                options={[...DEGREE_LEVELS]}
              />
              <Select
                value={fieldFilter}
                onChange={setFieldFilter}
                placeholder="📚 All Fields"
                options={fields}
              />
              <Select
                value={feeRange}
                onChange={setFeeRange}
                placeholder="💰 All Fees"
                options={[
                  { value: "low", label: "Low: ≤€3,000/yr" },
                  { value: "mid", label: "Mid: €3,000–€5,000/yr" },
                  { value: "high", label: "High: ≥€5,000/yr" },
                ]}
              />
              {hasFilters && (
                <button
                  onClick={clearAll}
                  className="px-3 py-2 text-xs font-bold text-lithRed border border-lithRed rounded-lg hover:bg-lithRed hover:text-white transition-colors flex items-center gap-1"
                >
                  <X size={14} /> Clear filters
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-cream min-h-[50vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-6">
            <div className="text-sm text-ink-soft">
              <span className="font-bold text-navy">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "university" : "universities"} found
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <FilterIcon size={48} className="text-muted mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-2">
                No universities match your filters
              </h3>
              <p className="text-ink-soft mb-6">
                Try clearing some filters or browse all universities.
              </p>
              <button onClick={clearAll} className="btn-primary">
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((u) => (
                <UniversityCard key={u.slug} uni={u} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

/* ---------- Helpers ---------- */
function Select({
  value,
  onChange,
  placeholder,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  options: string[] | { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`px-3 py-2 rounded-lg border text-xs font-bold transition-colors cursor-pointer ${
        value
          ? "border-navy bg-navy text-white"
          : "border-line bg-white text-ink-soft hover:border-navy"
      }`}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => {
        if (typeof opt === "string") {
          return (
            <option key={opt} value={opt}>
              {opt}
            </option>
          );
        }
        return (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        );
      })}
    </select>
  );
}
