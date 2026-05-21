import Link from "next/link";
import { ArrowRight, MapPin, GraduationCap, Wallet } from "lucide-react";
import type { University } from "@/data/universities";

export default function UniversityCard({ uni }: { uni: University }) {
  return (
    <Link
      href={`/universities/${uni.slug}`}
      className="group block bg-white rounded-2xl border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
    >
      {/* Header strip */}
      <div className="bg-gradient-to-br from-navy to-navy-dark p-5 relative overflow-hidden">
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-gold/10 rounded-full" />
        <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-lithGreen/10 rounded-full" />
        <div className="relative">
          <div className="inline-block px-2.5 py-1 bg-gold text-navy-dark text-xs font-black rounded-md mb-3">
            {uni.shortName}
          </div>
          <h3 className="font-bold text-white text-lg leading-tight group-hover:text-gold transition-colors">
            {uni.name}
          </h3>
          <div className="flex items-center gap-1.5 text-xs text-white/70 mt-2">
            <MapPin size={12} /> {uni.city} · Est. {uni.founded}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <p className="text-sm text-ink-soft leading-relaxed line-clamp-3 mb-4">
          {uni.overview}
        </p>

        {/* Quick stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-cardbg rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-muted uppercase tracking-wider font-bold">
              <Wallet size={11} /> Avg. Fee/yr
            </div>
            <div className="text-sm font-bold text-lithGreen mt-1">
              {uni.avgFee}
            </div>
          </div>
          <div className="bg-cardbg rounded-lg p-3">
            <div className="flex items-center gap-1.5 text-[10px] text-muted uppercase tracking-wider font-bold">
              <GraduationCap size={11} /> Degrees
            </div>
            <div className="text-sm font-bold text-navy mt-1">
              {uni.degreeLevels.join(" · ")}
            </div>
          </div>
        </div>

        {/* Fields chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {uni.fields.slice(0, 4).map((f) => (
            <span
              key={f}
              className="text-[10px] px-2 py-1 bg-gold/15 text-navy font-semibold rounded-full"
            >
              {f}
            </span>
          ))}
          {uni.fields.length > 4 && (
            <span className="text-[10px] px-2 py-1 bg-cream text-muted font-semibold rounded-full">
              +{uni.fields.length - 4} more
            </span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-line">
          <span className="text-sm font-bold text-navy group-hover:text-lithRed transition-colors">
            View Details
          </span>
          <ArrowRight
            size={18}
            className="text-navy group-hover:translate-x-1 group-hover:text-lithRed transition-all"
          />
        </div>
      </div>
    </Link>
  );
}
